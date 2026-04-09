# Brief Claude Code — P08 Fiche Client / P09 Fiche Bien

_Brief d'intégration actionnable pour Claude Code. Réf. artefacts : SCORING_ALGORITHMS.md, DS_REGISTRY_P08_P09.md._

---

## 0. Contexte

RealAgent = CRM B2B SaaS immobilier français. Stack : Next.js App Router + Supabase (Auth/RLS/Vault/Realtime/Storage/Edge Functions). Design system Figma tokenisé (CSS custom properties). Atomic design : atoms → molecules → organisms → components (Card/List hors hiérarchie).

Ce brief couvre l'intégration des parcours P08 (Fiche Client) et P09 (Fiche Bien) à partir des maquettes Figma exportées. Il liste les tâches dans l'ordre de dépendance.

---

## 1. Prérequis — Migrations Supabase ✅ APPLIQUÉES

> **Convention schema** : PascalCase tables, camelCase colonnes, text IDs (`gen_random_uuid()::text`).
> Projet Supabase : `wrakmsvdmsrpoiltysht` (eu-west-1).

### 1.0 Mapping colonnes réelles (découvertes pendant intégration)

**Client (48 colonnes)** :
- `primaryEmail` (pas `email`), `mobilePhone` (pas `phone`), `preferredChannel` (pas `preferredContactMethod`)
- `status` = `"ClientStatus"[]` array, valeurs FR : `PROPRIETAIRE`, `ACQUEREUR`, `BAILLEUR`, `LOCATAIRE`
- Mapping FR→EN pour scoring : PROPRIETAIRE→owner, ACQUEREUR→buyer, BAILLEUR→landlord, LOCATAIRE→tenant
- `source` = enum `"ClientSource"` (pas text — pas de comparaison `<> ''`)
- `totalOwnedProperties` (pas `ownedPropertiesCount`), `propertiesUnderMgmtCount` (pas `...ManagementCount`)
- Pas de colonne `isProfessional` → dérivé de `siren IS NOT NULL AND siren <> ''`
- Colonnes déjà existantes : `language` (≡ preferred_language), `emailConsent` (≡ marketing_consent), `emailConsentDate` (≡ rgpd_consent_date)

**Property (68 colonnes)** :
- `type` et `status` (pas `propertyType` / `propertyStatus`), `condition` (pas `propertyCondition`)
- Copro via `coOwnershipId` FK → table CoOwnership séparée (pas de `typeCopro`, `nombreLots`, `chargesAnnuelles`, `proceduresEnCours` directement sur Property)
- `estimatedMarketValuePerSqm` existe déjà (colonne calculée/stockée)
- `completionScore` et `completionMissingFields` existent déjà (legacy, remplacés par RPC)

**Deal (44 colonnes)** :
- `type` et `status` (pas `dealType` / `dealStatus`)
- Enums existants : `DealType` (VENTE, BAIL, ACQUISITION, LOCATION, GESTION), `DealStatus` (INACTIVE, EN_COURS, CLOTUREE, ARCHIVEE)

### 1.1 Tables créées ✅

```sql
-- 1. "DealMilestoneEvent" — CONV milestones (Client + Bien)
-- Colonnes : id(text PK), "dealId"(text FK→Deal), milestone(text), "occurredAt"(timestamptz),
--            "createdBy"(text), metadata(jsonb), "createdAt"(timestamptz)
-- Index : idx_deal_milestone_event_deal ("dealId")
-- Unique : ("dealId", milestone) — RLS activé

-- 2. "ClientPastTransaction" — historique transactionnel QUAL Client
-- Colonnes : id(text PK), "clientId"(text FK→Client), "propertyId"(text FK→Property nullable),
--            "transactionType"(text CHECK), "transactionDate"(date), amount(numeric),
--            "loanAmount", "loanRate", "loanDurationYears", "loanStartDate", "loanEndDate",
--            "monthlyPayment", "notaryFees", "agencyFees", "isFromOurAgency"(boolean),
--            notes(text), source(text CHECK), "createdAt", "updatedAt"
-- Index : idx_client_past_transaction_client ("clientId") — RLS activé

-- 3. "PropertyDiagnosticQuestionnaire" — ENT Bien diagnostics auto
-- Colonnes : id(text PK), "propertyId"(text FK→Property), topic(text CHECK 7 valeurs),
--            "completedAt"(timestamptz), score(int 0-100), recommendation(text CHECK),
--            "answeredBy"(text CHECK), "answersJson"(jsonb), "createdAt", "updatedAt"
-- Unique : ("propertyId", topic) — RLS activé

-- 4. "ScoringConfig" — config runtime scoring
-- Colonnes : id(text PK), "metricKey"(text), version(text), "isActive"(boolean),
--            "entityType"(text CHECK client|property), formula(jsonb), weights(jsonb),
--            thresholds(jsonb), description(text), "createdAt", "updatedAt"
-- Unique : ("metricKey", version, "entityType") — RLS activé
```

### 1.2 Colonnes ajoutées ✅

```sql
-- Client
ALTER TABLE "Client" ADD COLUMN "lifecycleStage" text
  CHECK ("lifecycleStage" IN ('lead','prospect','qualified','active','converted','dormant','lost'))
  DEFAULT 'lead';

-- Deal
ALTER TABLE "Deal" ADD COLUMN "currentMilestone" text;
```

### 1.3 Scoring config — 7 lignes insérées ✅

| metricKey | entityType | formula_type | poids (résumé) | seuils |
|-----------|-----------|--------------|-----------------|--------|
| qualification | client | weighted_completion | 42 champs, ~3.9KB | 6 lifecycle stages |
| engagement | client | decay_weighted_signals | 15 signaux | 6 stages + windows/half_life |
| conversion | client | milestone_max | 5 matrices mandats | 6 stages |
| reactivation | client | delta_weighted | 3 deltas (ENG 50%, CONV 30%, QUAL 20%) | dormant only |
| qualification | property | weighted_completion | ~55 champs, ~2.5KB | 6 property_status |
| entretien | property | weighted_average | 6 composantes (25/20/18/15/12/10) | global |
| conversion | property | milestone_max | 5 matrices mandats | 4 étapes deal |

### 1.4 RPCs créées ✅

- `get_client_scores(p_client_id text)` → `{clientId, lifecycle, statuses, qual{score,filledWeight,totalWeight,thresholds,breakdown}, eng{score,status}, conv{score,bestDeal,hasCarnetBonus,thresholds,breakdown}, reac{score,status}, suggestions}`
- `get_property_scores(p_property_id text)` → `{propertyId, propertyType, propertyStatus, qual{score,...}, entretien{score,...}, conv{score,...}}`
- `get_deal_milestone_progress(p_deal_id text)` → `{dealId, dealType, dealStatus, milestones[], current, percentage, matrix}`

**Notes implémentation RPCs** :
- ENG + REAC = placeholders (score 0, status `awaiting_activity_log_table`) — nécessitent table ActivityLog/signals
- Client.status parsé comme array ClientStatus[] avec mapping FR→EN
- CONV : fallback sur `currentMilestone` si pas de DealMilestoneEvent
- ENT Bien : 6 composantes calculées (carnet=binary, fraîcheur=exp_decay, DPE=mapping, diagnostics=completion, docs=simplifié, copro=via coOwnershipId)
- Copro fields (nombreLots, chargesAnnuelles, proceduresEnCours) → TODO join CoOwnership table

---

## 2. Étape 1 — Nettoyage DS (avant tout composant)

> **Racine codebase** : `figma_src/app/components/` (ci-après `@c/`).
> **Ordre d'exécution §2** : 2.1 → 2.2 → 2.3 → 2.4 → 2.5 → 2.6 → 2.7 (chaque étape dépend de la précédente).

---

### 2.1 Supprimer dead code

#### 2.1.1 Fichiers à supprimer (6 fichiers)

| Fichier | Raison |
|---|---|
| `@c/organisms/ListQualification.tsx` | Wrapper trivial → KpiIndicator direct |
| `@c/organisms/ListEngagement.tsx` | Idem — 44 lignes, simple wrapper |
| `@c/organisms/ListConversion.tsx` | Idem |
| `@c/organisms/ListReactivation.tsx` | Idem |
| `@c/organisms/ListEntretien.tsx` | Idem |
| `@c/organisms/ListScoring.tsx` | Uses raw SVG imports + obsolete structure. Remplacé par `ScoreBadge` atom |

#### 2.1.2 Exports à supprimer dans `@c/organisms/index.ts`

Supprimer ces 12 lignes (export + type pour chaque) :
```typescript
// SUPPRIMER :
export { ListScoring } from "./ListScoring";
export type { ListScoringProps } from "./ListScoring";
export { ListQualification } from "./ListQualification";
export type { ListQualificationProps } from "./ListQualification";
export { ListEngagement } from "./ListEngagement";
export type { ListEngagementProps } from "./ListEngagement";
export { ListConversion } from "./ListConversion";
export type { ListConversionProps } from "./ListConversion";
export { ListEntretien } from "./ListEntretien";
export type { ListEntretienProps } from "./ListEntretien";
```

#### 2.1.3 Exports à supprimer dans `@c/atoms/index.ts`

```typescript
// SUPPRIMER :
export { ChipScore, ChipScoreAuto, getScoreLevel } from "./ChipScore";
export type { ChipScoreProps, ChipScoreAutoProps, ScoreLevel } from "./ChipScore";
```
Note : le fichier `@c/atoms/ChipScore.tsx` est conservé temporairement (il pourra être supprimé quand AppBars.tsx sera refactoré §2.1.4).

#### 2.1.4 Imports ChipScore à supprimer dans les consommateurs

| Fichier | Ligne | Action |
|---|---|---|
| `@c/organisms/AppBars.tsx` | L8 | Supprimer `import { ChipScore, ChipScoreAuto } from "../atoms/ChipScore"` |
| `@c/organisms/AppBars.tsx` | Usages dans le corps | Remplacer tout usage de `ChipScoreAuto`/`ChipScore` par `KpiIndicator` (voir §2.2) |

#### 2.1.5 Imports List* à remplacer dans les consommateurs (6 fichiers)

Chaque fichier ci-dessous importe 3 ou 4 organisms List* qui seront remplacés par `KpiIndicator` (§2.2). **En §2.1, supprimer uniquement les imports, sans encore ajouter KpiIndicator** — le remplacement se fait en §2.2.

| Fichier | Imports à supprimer |
|---|---|
| `@c/molecules/CardItemClient.tsx` L13-16 | `ListQualification`, `ListEngagement`, `ListConversion`, `ListReactivation` |
| `@c/molecules/ListItemClient.tsx` L19-22 | `ListQualification`, `ListEngagement`, `ListConversion`, `ListReactivation` |
| `@c/molecules/CardItemBien.tsx` L17-19 | `ListQualification`, `ListEntretien`, `ListConversion` |
| `@c/molecules/ListItemBien.tsx` L27-29 | `ListQualification`, `ListEntretien`, `ListConversion` |
| `@c/molecules/SheetClientDetails.tsx` L14-17 | `ListQualification`, `ListEngagement`, `ListConversion`, `ListReactivation` |
| `@c/molecules/SheetBienDetails.tsx` L17-19 | `ListQualification`, `ListEntretien`, `ListConversion` |

#### 2.1.6 Props mortes à supprimer

| Prop | Fichiers | Action |
|---|---|---|
| `statusLevels` | `ListItemClient.tsx` (L33, 50, 132), `CardItemClient.tsx` (L29→? ref indirect via ListEngagement), `SheetClientDetails.tsx` (L30, 42, 118) | Supprimer de l'interface Props + du destructuring + des usages JSX |
| `engagementLevels` | `ListItemClient.tsx` (L33, 50), `CardItemClient.tsx` (L29, 46), `SheetClientDetails.tsx` (L30, 42) | Idem |
| `daysActive` | `ListItemClient.tsx` (L34, 51), `CardItemClient.tsx` (L30, 47) | Idem |
| `days` (alias de daysActive) | `ListEngagement.tsx` (sera supprimé §2.1.1) | N/A (fichier supprimé) |

Également supprimer l'import `MessageStatusLevel` de `@c/atoms/MessageStatus` dans :
- `@c/molecules/CardItemClient.tsx` L19
- `@c/molecules/ListItemClient.tsx` L16

---

### 2.2 KpiIndicator — ajouter prop `kpi`

#### 2.2.1 Modifier `@c/atoms/KpiIndicator.tsx`

Ajouter une prop `kpi` qui sélectionne automatiquement l'icône Lucide et l'aria-label :

```typescript
// AJOUTER dans l'interface KpiIndicatorProps :
/** Type de KPI — sélectionne automatiquement l'icône et l'aria-label */
kpi?: 'qual' | 'eng' | 'conv' | 'reac' | 'ent';

// AJOUTER un mapping constant en haut du fichier :
import { Database, MessageCircle, ScrollText, Flame, Drill } from "lucide-react";

const KPI_CONFIG = {
  qual: { Icon: Database, label: 'Qualification' },
  eng:  { Icon: MessageCircle, label: 'Engagement' },
  conv: { Icon: ScrollText, label: 'Conversion' },
  reac: { Icon: Flame, label: 'Réactivation' },
  ent:  { Icon: Drill, label: 'Entretien' },
} as const;

// AJOUTER la logique de résolution d'icône dans le corps du composant :
const kpiConfig = kpi ? KPI_CONFIG[kpi] : null;
const iconColor = theme === "dark" ? "var(--neutral-200)" : "var(--neutral-500)";
const resolvedIcon = kpiConfig
  ? <kpiConfig.Icon size={20} style={{ color: iconColor }} />
  : icon;  // fallback sur la prop icon existante

// REMPLACER dans le JSX : icon → resolvedIcon
// AJOUTER aria-label si kpi est défini :
// <div aria-label={kpiConfig?.label} ...>
```

**Contrat** : `kpi` et `icon` sont mutuellement exclusifs. Si `kpi` est fourni, l'icône est auto-résolue. Si `icon` est fourni (sans `kpi`), c'est l'icône manuelle. La prop `icon` reste pour la rétrocompatibilité.

#### 2.2.2 Remplacement dans les 6 consommateurs

**Pattern avant (exemple CardItemClient)** :
```tsx
import { ListQualification } from "../organisms/ListQualification";
// ...
<ListQualification percentage={qualification} theme={theme} hover={forceHover || isHovered} />
```

**Pattern après** :
```tsx
import { KpiIndicator } from "../atoms/KpiIndicator";
// ...
<KpiIndicator kpi="qual" value={`${qualification}%`} percentage={qualification} variant="vertical" theme={theme} hover={forceHover || isHovered} />
```

**Tableau de remplacement complet** :

| Fichier | Avant | Après |
|---|---|---|
| `CardItemClient.tsx` | `<ListQualification percentage={qualification} .../>` | `<KpiIndicator kpi="qual" value={\`${qualification}%\`} percentage={qualification} variant="vertical" .../>` |
| `CardItemClient.tsx` | `<ListEngagement percentage={engagement} statusLevels={...} days={...} .../>` | `<KpiIndicator kpi="eng" value={\`${engagement}%\`} percentage={engagement} variant="vertical" .../>` |
| `CardItemClient.tsx` | `<ListConversion percentage={conversion} .../>` | `<KpiIndicator kpi="conv" value={\`${conversion}%\`} percentage={conversion} variant="vertical" .../>` |
| `CardItemClient.tsx` | `<ListReactivation percentage={reactivation} .../>` | `<KpiIndicator kpi="reac" value={\`${reactivation}%\`} percentage={reactivation} variant="vertical" .../>` |
| `ListItemClient.tsx` | Idem 4 remplacements | Idem pattern |
| `CardItemBien.tsx` | `<ListQualification .../>`  | `<KpiIndicator kpi="qual" .../>` |
| `CardItemBien.tsx` | `<ListEntretien .../>` | `<KpiIndicator kpi="ent" .../>` |
| `CardItemBien.tsx` | `<ListConversion .../>` | `<KpiIndicator kpi="conv" .../>` |
| `ListItemBien.tsx` | Idem 3 remplacements | Idem pattern |
| `SheetClientDetails.tsx` | 4 List* → 4 KpiIndicator | Idem pattern Client |
| `SheetBienDetails.tsx` | 3 List* → 3 KpiIndicator | Idem pattern Bien |

#### 2.2.3 Correction `iconColor` dans les anciens List* organisms

Les 5 organisms supprimés avaient `iconColor = theme === "dark" ? "#D0D1D4" : "#444955"` — ces hex sont maintenant internalisés dans KpiIndicator (§2.2.1) via `var(--neutral-200)` / `var(--neutral-500)`. **Aucun hex ne subsiste.**

---

### 2.3 Créer atoms manquants (3 fichiers)

#### 2.3.1 `@c/atoms/HorizontalDivider.tsx`

Remplace les SVG inline `<svg><line stroke={getDividerColor()} .../>` présents dans :
- `CardItemClient.tsx` (3 occurrences, L119-127, L149-157, L173-181)
- `CardItemBien.tsx` (3 occurrences, L125-133, L196-204, L239-247)

```typescript
// atoms/HorizontalDivider.tsx
"use client";

export interface HorizontalDividerProps {
  theme?: "light" | "dark";
  variant?: "default" | "hover";
  className?: string;
}

export function HorizontalDivider({
  theme = "light",
  variant = "default",
  className = "",
}: HorizontalDividerProps) {
  const getColor = () => {
    if (theme === "dark") {
      return variant === "hover" ? "var(--neutral-500)" : "var(--neutral-700)";
    }
    return variant === "hover" ? "var(--neutral-100)" : "var(--neutral-50)";
  };

  return (
    <div
      className={`w-full h-px ${className}`.trim()}
      style={{ backgroundColor: getColor() }}
      aria-hidden="true"
    />
  );
}
```

**Ajouter à `@c/atoms/index.ts`** :
```typescript
export { HorizontalDivider } from "./HorizontalDivider";
export type { HorizontalDividerProps } from "./HorizontalDivider";
```

#### 2.3.2 `@c/atoms/DpeScale.tsx`

Échelle DPE visuelle (A→G, 7 barres colorées, curseur sur la classe active). Remplace `EchelleDpe` (raw Figma import dans `FIB_01_PageFicheBien`).

```typescript
// atoms/DpeScale.tsx
"use client";

const DPE_CLASSES = ['A','B','C','D','E','F','G'] as const;
const DPE_COLORS: Record<string, string> = {
  A: '#319834', B: '#33CC33', C: '#CBFC33',
  D: '#FCFC33', E: '#FCCC33', F: '#FC9933', G: '#FC3333',
};

export interface DpeScaleProps {
  activeClass: 'A'|'B'|'C'|'D'|'E'|'F'|'G' | null;
  theme?: "light" | "dark";
  size?: "sm" | "md";
}

export function DpeScale({ activeClass, theme = "light", size = "md" }: DpeScaleProps) {
  const h = size === "sm" ? "h-3" : "h-5";
  return (
    <div className="flex items-end gap-[2px]" aria-label={`DPE: ${activeClass ?? 'non renseigné'}`}>
      {DPE_CLASSES.map((cls, i) => (
        <div key={cls} className="flex flex-col items-center gap-[2px]">
          <span className={`text-[10px] ${activeClass === cls ? 'font-bold' : 'font-normal'}`}
            style={{ color: activeClass === cls ? DPE_COLORS[cls] : (theme === 'dark' ? 'var(--neutral-500)' : 'var(--neutral-300)') }}
          >{cls}</span>
          <div
            className={`w-4 ${h} rounded-[2px]`}
            style={{
              backgroundColor: DPE_COLORS[cls],
              opacity: activeClass === cls ? 1 : 0.3,
            }}
          />
        </div>
      ))}
    </div>
  );
}
```

#### 2.3.3 `@c/atoms/GesScale.tsx`

Même pattern que DpeScale mais pour les émissions GES (A→G, dégradé violet/bleu→gris).

```typescript
// atoms/GesScale.tsx — même structure que DpeScale
const GES_COLORS: Record<string, string> = {
  A: '#D6C8F0', B: '#C0A8E8', C: '#AB88E0',
  D: '#9568D8', E: '#7F48D0', F: '#6928C8', G: '#5308C0',
};
// ... identique à DpeScale avec GES_COLORS
```

**Ajouter DpeScale et GesScale à `@c/atoms/index.ts`.**

---

### 2.4 Créer molecules manquantes (1 fichier)

#### 2.4.1 `@c/molecules/ViewModeDropdown.tsx`

Extraire du pattern existant dans les pages List_Client et List_Bien (DropdownButton + Menu pour basculer entre vue liste et vue grille).

```typescript
// molecules/ViewModeDropdown.tsx
"use client";
import { useState } from "react";
import { LayoutList, LayoutGrid } from "lucide-react";
import { DropdownButton } from "../atoms/DropdownButton";
import { Menu } from "../organisms/Menu";

export type ViewMode = "list" | "cards";

export interface ViewModeDropdownProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  theme?: "light" | "dark";
}

export function ViewModeDropdown({ viewMode, onViewModeChange, theme = "light" }: ViewModeDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <DropdownButton
        label={viewMode === "list" ? "Liste" : "Grille"}
        icon={viewMode === "list" ? <LayoutList size={16} /> : <LayoutGrid size={16} />}
        onClick={() => setOpen(!open)}
        theme={theme}
      />
      {open && (
        <Menu
          items={[
            { label: "Liste", icon: <LayoutList size={16} />, onClick: () => { onViewModeChange("list"); setOpen(false); } },
            { label: "Grille", icon: <LayoutGrid size={16} />, onClick: () => { onViewModeChange("cards"); setOpen(false); } },
          ]}
          theme={theme}
        />
      )}
    </div>
  );
}
```

---

### 2.5 Hex → tokens (migration fichier par fichier)

> **Mapping de référence** (DS_REGISTRY §5.3) :
>
> | Hex | Token light | Token dark |
> |---|---|---|
> | `#444955` | `var(--neutral-500)` | — |
> | `#D0D1D4` | — | `var(--neutral-200)` |
> | `#ECEDEE` | `var(--neutral-50)` | — |
> | `#22252B` | — | `var(--neutral-700)` |
> | `#111215` | — | `var(--neutral-800)` |
> | `#333740` | — | `var(--neutral-600)` |
> | `#C7C8CB` | `var(--neutral-200)` | — |
> | `#DADBDD` | `var(--neutral-100)` | — |
> | `#1C1D22` | — | `var(--neutral-900)` |
> | `#FFFFFF`/`white` | `var(--neutral-white)` | — |
> | `#0DA500` | `var(--success-500)` | — |
> | `#EC0119` | `var(--error-500)` | — |
> | `#FF0000` | `var(--error-500)` | — |

#### 2.5.1 Pattern `getBorderColor()` / `getBackgroundColor()` / `getDividerColor()`

**Fichiers concernés** (contiennent les 3 fonctions avec hex) :
- `@c/molecules/CardItemClient.tsx` (L56-77)
- `@c/molecules/ListItemClient.tsx` (L59-73)
- `@c/molecules/CardItemBien.tsx` (L63-84)
- `@c/molecules/ListItemBien.tsx` (L76-90)
- `@c/molecules/ListItemAffaire.tsx` (L92-102)

**Transformation type (exemple CardItemClient)** :

```typescript
// AVANT :
const getBorderColor = () => {
  if (theme === "dark") return "#22252B";
  return "#ECEDEE";
};
// APRÈS :
const getBorderColor = () => {
  if (theme === "dark") return "var(--neutral-700)";
  return "var(--neutral-50)";
};

// AVANT :
const getBackgroundColor = () => {
  const hovered = forceHover || isHovered;
  if (theme === "dark") return hovered ? "#22252B" : "#111215";
  return hovered ? "#ECEDEE" : "#FFFFFF";
};
// APRÈS :
const getBackgroundColor = () => {
  const hovered = forceHover || isHovered;
  if (theme === "dark") return hovered ? "var(--neutral-700)" : "var(--neutral-800)";
  return hovered ? "var(--neutral-50)" : "var(--neutral-white)";
};

// AVANT :
const getDividerColor = () => {
  const hovered = forceHover || isHovered;
  if (theme === "dark") return hovered ? "#444955" : "#22252B";
  return hovered ? "#DADBDD" : "#ECEDEE";
};
// APRÈS :
const getDividerColor = () => {
  const hovered = forceHover || isHovered;
  if (theme === "dark") return hovered ? "var(--neutral-500)" : "var(--neutral-700)";
  return hovered ? "var(--neutral-100)" : "var(--neutral-50)";
};
```

#### 2.5.2 Pattern `iconColor` (inline hex)

**Fichiers concernés** :
- `@c/organisms/ListClientName.tsx` L30 : `"#D0D1D4"` / `"#444955"`
- `@c/organisms/SectionListBien.tsx` L54 : `"#d0d1d4"` / `"#444955"`
- `@c/molecules/CardItemBien.tsx` L61 : `"#d0d1d4"` / `"#444955"`
- `@c/organisms/SectionList*.tsx` (×7, chacun a `iconColor`)

**Transformation** :
```typescript
// AVANT :
const iconColor = isDark ? "#D0D1D4" : "#444955";
// APRÈS :
const iconColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";
```

#### 2.5.3 Pattern `ChipTrend` couleurs tendance

**Fichier** : `@c/atoms/ChipTrend.tsx` L34-35

```typescript
// AVANT :
if (trend === "up") return "#0DA500";
if (trend === "down") return "#EC0119";
// APRÈS :
if (trend === "up") return "var(--success-500)";
if (trend === "down") return "var(--error-500)";
```

#### 2.5.4 Autres fichiers à migrer (hex trouvés, même pattern)

| Fichier | Occurrences | Pattern principal |
|---|---|---|
| `@c/atoms/Badge.tsx` | 7 hex | Palette light/dark complète hardcodée → mapper sur `--surface-{variant}-subtle`, `--border-{variant}`, `--text-{variant}` |
| `@c/atoms/Button.tsx` | 8 hex | Border/bg light+dark → tokens neutral |
| `@c/atoms/Checkbox.tsx` | 11 hex | Border + bg states → tokens neutral + brand |
| `@c/atoms/MultiSelect.tsx` | 10 hex | Border + dropdown → tokens neutral |
| `@c/atoms/MenuItem.tsx` | 9 hex | Hover bg + text → tokens neutral |
| `@c/atoms/Spinner.tsx` | hex | Track/active → tokens neutral + brand |
| `@c/atoms/VerticalDivider.tsx` | hex | Divider → tokens neutral |
| `@c/atoms/BadgeCriteria.tsx` | hex | idem Badge pattern |
| `@c/atoms/TitleSectionList.tsx` | hex | Text color → `var(--text-body)` |
| `@c/atoms/LinkButton.tsx` | hex | Text + hover → tokens brand |
| `@c/atoms/IconButtonMega.tsx` | hex | Border + bg → tokens neutral |
| `@c/atoms/Switch.tsx` | hex | Track + thumb → tokens neutral + brand |
| `@c/atoms/TextField.tsx` | hex | Border + bg + placeholder → tokens neutral |
| `@c/atoms/TextFieldOutlined.tsx` | hex | Idem TextField |
| `@c/atoms/MessageBadge.tsx` | hex | Badge bg → tokens brand |
| `@c/atoms/MessageTimestamp.tsx` | hex | Text color → tokens neutral |
| `@c/atoms/MessageStatus.tsx` | hex | Dot colors → tokens semantic |
| `@c/atoms/MessageStatusDot.tsx` | hex | Idem |
| `@c/atoms/ButtonPagination.tsx` | hex | Border + bg → tokens neutral |
| `@c/molecules/ListItemAffaire.tsx` | 5 hex | Same pattern getBorder/getBackground |
| `@c/organisms/ListScoring.tsx` | hex | Supprimé en §2.1 |

**Instruction Claude Code** : pour chaque fichier, faire un find/replace de chaque hex par le token correspondant selon le mapping §2.5. Vérifier avec `grep -rn "#[0-9A-Fa-f]\{6\}" figma_src/app/components/` qu'il ne reste aucun hex hardcodé (hors DPE_COLORS/GES_COLORS qui sont des couleurs métier dédiées).

---

### 2.6 Reclassifications (move + rename + update imports)

> **Règle** : chaque déplacement implique de mettre à jour TOUS les imports dans les fichiers consommateurs + les fichiers index.ts.

#### 2.6.1 Organisms → Molecules (9 fichiers)

| Fichier actuel | Destination | Justification |
|---|---|---|
| `@c/organisms/ListClientName.tsx` | `@c/molecules/ListClientName.tsx` | Contient Badge + Chip = atoms uniquement |
| `@c/organisms/SectionListBien.tsx` | `@c/molecules/SectionListBien.tsx` | Badge + Chip + ImageBien = atoms |
| `@c/organisms/SectionListAffaire.tsx` | `@c/molecules/SectionListAffaire.tsx` | Badge + Chip = atoms |
| `@c/organisms/SectionListDossier.tsx` | `@c/molecules/SectionListDossier.tsx` | 3 icônes check = atoms |
| `@c/organisms/SectionListPromotion.tsx` | `@c/molecules/SectionListPromotion.tsx` | Compteurs = atoms |
| `@c/organisms/SectionListClosing.tsx` | `@c/molecules/SectionListClosing.tsx` | 3 icônes check = atoms |
| `@c/organisms/SectionListTransaction.tsx` | `@c/molecules/SectionListTransaction.tsx` | Compteurs = atoms |
| `@c/organisms/SectionListType.tsx` | `@c/molecules/SectionListType.tsx` | Type + surface + DPE = atoms |
| `@c/organisms/SectionListEntretien.tsx` | `@c/molecules/SectionListEntretien.tsx` | Status + database + jours = atoms |

**Pour chaque** :
1. Déplacer le fichier
2. Supprimer l'export de `@c/organisms/index.ts` (**sauf ListClientName** qui n'est pas dans le barrel — les consommateurs l'importent directement par chemin de fichier)
3. Ajouter l'export dans `@c/molecules/index.ts` (créer le fichier si absent)
4. Mettre à jour les imports dans tous les consommateurs

**Consommateurs à mettre à jour** :
- `ListClientName` : importé par `CardItemClient.tsx` L12, `ListItemClient.tsx` L18 → changer `../organisms/ListClientName` → `./ListClientName` (même dossier molecules). Note : pas de barrel à nettoyer pour ce composant.
- `SectionListBien` : importé par `ListItemBien.tsx` L26 → changer `../organisms/` → `./`
- `SectionList*` (×7) : importés par `ListItemAffaire.tsx` → changer `../organisms/` → `./`

#### 2.6.2 Molecules → Components (5 fichiers, rename)

| Fichier actuel | Destination | Nom export |
|---|---|---|
| `@c/molecules/CardItemClient.tsx` | `@c/components/CardClient.tsx` | `CardClient` (rename function + interface + Props type) |
| `@c/molecules/ListItemClient.tsx` | `@c/components/ListClient.tsx` | `ListClient` |
| `@c/molecules/CardItemBien.tsx` | `@c/components/CardBien.tsx` | `CardBien` |
| `@c/molecules/ListItemBien.tsx` | `@c/components/ListBien.tsx` | `ListBien` |
| `@c/molecules/ListItemAffaire.tsx` | `@c/components/ListAffaire.tsx` | `ListAffaire` (ajouter `// TODO: refonte P10-AFF`) |

**Pour chaque** :
1. Créer le dossier `@c/components/` s'il n'existe pas
2. Déplacer + renommer le fichier
3. Renommer le composant exporté (`CardItemClient` → `CardClient`, etc.)
4. Renommer l'interface Props (`CardItemClientProps` → `CardClientProps`, etc.)
5. Supprimer l'export du `@c/molecules/index.ts` (si un tel fichier existe)
6. Créer/mettre à jour `@c/components/index.ts` avec les nouveaux exports
7. Mettre à jour les imports relatifs internes :
   - Imports atoms : `../atoms/` → `../atoms/` (inchangé — même profondeur)
   - **Imports molecules** : `./ListClientName` → `../molecules/ListClientName`, `./SectionListBien` → `../molecules/SectionListBien`, etc. (passage de `molecules/` à `components/` = un niveau de plus à remonter)
   - Imports organisms (ex: Menu dans ViewModeDropdown) : `../organisms/` → `../organisms/` (inchangé)
8. Mettre à jour les imports dans les pages consommatrices

---

### 2.7 Remplacer raw Figma imports

| Import brut Figma | Composant DS existant | Fichiers consommateurs |
|---|---|---|
| `OrganismeMessageRecu` | `@c/molecules/MessageReceived` | Pages Fiche (FIC_01, FIB_01) — chercher `import.*OrganismeMessageRecu` |
| `OrganismeMessageEnvoye` | `@c/molecules/MessageSent` | Idem |
| `OrganismeIaSuggestion` | `@c/atoms/AiSuggestion` | Idem — chercher `import.*OrganismeIaSuggestion` |
| `GalleryFicheBien` | `@c/organisms/Gallery` (**à créer** — §3) | `FIB_01_PageFicheBien` |
| `EchelleDpe` | `@c/atoms/DpeScale` (créé en §2.3.2) | `FIB_01_PageFicheBien` |
| `EchelleGes` | `@c/atoms/GesScale` (créé en §2.3.3) | `FIB_01_PageFicheBien` |

**Instruction Claude Code** : `grep -rn "Organisme\|EchelleDpe\|EchelleGes\|GalleryFicheBien" figma_src/` pour identifier tous les fichiers consommateurs, puis remplacer les imports un par un. Pour `Gallery`, créer un composant placeholder (`// TODO: implémenter galerie photos Bien`) en §3 (étape composants responsive).

---

## 3. Étape 2 — Composants responsive

> **Prérequis** : §2 terminé (dead code supprimé, KpiIndicator kpi prop ajoutée, hex→tokens migré, fichiers reclassés).
> **Racine** : après §2.6, les composants sont dans `@c/components/` (CardClient, ListClient, CardBien, ListBien, ListAffaire) et `@c/molecules/` (listes légères, Sheets).

---

### 3.0 Création du dossier hooks et hooks utilitaires

**Le dossier `figma_src/app/hooks/` n'existe pas encore** — le créer avant toute chose.

#### 3.0.1 `hooks/useHoverState.ts`

Hook partagé pour le pattern `forceHover`/`isHovered` dupliqué dans CardClient, ListClient, CardBien, ListBien, ListAffaire :

```typescript
// hooks/useHoverState.ts
"use client";
import { useState } from "react";

export function useHoverState(forceHover: boolean = false) {
  const [isHovered, setIsHovered] = useState(forceHover);
  const hovered = forceHover || isHovered;
  const handlers = {
    onMouseEnter: () => !forceHover && setIsHovered(true),
    onMouseLeave: () => !forceHover && setIsHovered(false),
  };
  return { hovered, handlers };
}
```

#### 3.0.2 `hooks/useBreakpoint.ts`

Hook responsive utilisé par les composants §3 (listes légères §3.9, pages §4) ET les hooks §5.11. **Le créer ici** pour qu'il soit disponible dès §3 :

```typescript
// hooks/useBreakpoint.ts
"use client";
import { useState, useEffect } from "react";

type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large';
const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280, large: 1600 } as const;

export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>('desktop');

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < BREAKPOINTS.tablet) setBp('mobile');
      else if (w < BREAKPOINTS.desktop) setBp('tablet');
      else if (w < BREAKPOINTS.large) setBp('desktop');
      else setBp('large');
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return bp;
}
```

---

### 3.1 CSS global — `.page-content` wrapper

Créer/ajouter dans le fichier CSS global (`styles/components.css` ou équivalent) :

```css
/* Layout conteneur principal des pages — NE JAMAIS mettre de maxWidth dans les composants */
.page-content {
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  max-width: 960px; /* desktop 1280-1599 */
}
@media (min-width: 1600px) {
  .page-content { max-width: 1024px; }
}
@media (max-width: 1279px) {
  .page-content { max-width: 100%; }
}
@media (max-width: 767px) {
  .page-content { padding: 0 16px; max-width: 100%; }
}

/* Sheet widths */
.sheet-narrow { width: 390px; }
.sheet-wide { width: 960px; }
@media (min-width: 1600px) { .sheet-wide { width: 1024px; } }
@media (max-width: 1279px) { .sheet-narrow { width: calc(100% - 90px); } .sheet-wide { width: calc(100% - 90px); } }
@media (max-width: 767px) { .sheet-narrow, .sheet-wide { width: 100%; border-radius: 16px 16px 0 0; } }
```

---

### 3.2 CardClient (ex `CardItemClient.tsx` → `@c/components/CardClient.tsx`)

**Fichier après §2.6** : `@c/components/CardClient.tsx` (~190 lignes)

#### 3.2.1 Largeur fixe → fluide

```typescript
// AVANT (L83) :
style={{ width: "350px" }}
// APRÈS :
style={{ width: "100%" }}
// Le parent (grille) gère la largeur via grid-cols
```

#### 3.2.2 SVG dividers → HorizontalDivider

Il y a 3 blocs SVG inline (L119-127, L149-157, L173-181), chacun du pattern :
```tsx
// AVANT :
<div className="h-0 relative shrink-0 w-full">
  <div className="absolute bottom-full left-0 right-0 top-0">
    <div className="absolute inset-[-1px_0_0_0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
        <line stroke={getDividerColor()} x2="350" y1="0.5" y2="0.5" />
      </svg>
    </div>
  </div>
</div>
// APRÈS :
<HorizontalDivider theme={theme} variant={(forceHover || isHovered) ? "hover" : "default"} />
```

Supprimer la fonction `getDividerColor()` (devenue inutile — la logique est dans HorizontalDivider).

#### 3.2.3 KpiIndicator (déjà fait en §2.2)

Vérifier que les 4 `<KpiIndicator kpi="..." .../>` sont bien en place.

#### 3.2.4 Props nettoyées

L'interface `CardClientProps` après §2 doit être :
```typescript
export interface CardClientProps {
  firstName: string;
  lastName: string;
  badges?: Array<{ label: string; variant?: BadgeVariant }>;
  qualification: number;
  engagement: number;
  conversion: number;
  reactivation: number;
  aiSuggestions?: number;
  onClientClick?: () => void;
  className?: string;
  theme?: "light" | "dark";
  forceHover?: boolean;
}
```
(Plus de `engagementLevels`, `daysActive`, `statusLevels`, `MessageStatusLevel` import.)

---

### 3.3 CardBien (ex `CardItemBien.tsx` → `@c/components/CardBien.tsx`)

**Même transformations que CardClient** :

| Action | Détail |
|---|---|
| `width: "350px"` → `"100%"` | L90 |
| 3 SVG dividers → `<HorizontalDivider>` | L125-133, L196-204, L239-247 |
| `iconColor` hex → tokens | Déjà fait §2.5 |
| `getDividerColor()` → supprimer | Logique dans HorizontalDivider |
| KpiIndicator | Déjà fait §2.2 (3 KPIs : qual, ent, conv) |

---

### 3.4 ListClient (ex `ListItemClient.tsx` → `@c/components/ListClient.tsx`)

**Fichier après §2.6** : `@c/components/ListClient.tsx` (~190 lignes)

#### 3.4.1 Dimensions fixes → fluides

```typescript
// AVANT (L80-81) :
style={{ width: "1191px", height: "120px", ... }}
// APRÈS :
style={{ width: "100%", minHeight: "120px", ... }}
```

#### 3.4.2 Sections internes → flex proportionnel

Le layout actuel utilise des largeurs en px pour chaque section (425px, 73.8px, 77px, etc.). Remplacer par flex :

```typescript
// AVANT :
<div style={{ width: "425px", height: "100%" }}> {/* Nom */} </div>
<div className="flex items-center" style={{ width: "73.8px" }}> {/* Divider */} </div>
<div style={{ width: "77px" }}> {/* Qual */} </div>
// ...

// APRÈS :
<div className="flex items-center w-full" style={{ minHeight: "120px", ... }}>
  {/* Section Nom — occupe l'espace restant */}
  <div className="flex-1 min-w-0 h-full">
    <ListClientName ... />
  </div>

  {/* Section KPIs — taille fixe, ne shrink pas */}
  <div className="flex items-center shrink-0 gap-0">
    {/* Divider + Qual */}
    <div className="flex items-center px-4">
      <VerticalDivider height={84} ... />
    </div>
    <div className="w-[77px] flex items-center justify-center">
      <KpiIndicator kpi="qual" ... />
    </div>

    {/* Divider + Eng */}
    <div className="flex items-center px-4">
      <VerticalDivider height={84} ... />
    </div>
    <div className="w-[78px] flex items-center justify-center">
      <KpiIndicator kpi="eng" ... />
    </div>

    {/* Divider + Conv */}
    <div className="flex items-center px-4">
      <VerticalDivider height={84} ... />
    </div>
    <div className="w-[78px] flex items-center justify-center">
      <KpiIndicator kpi="conv" ... />
    </div>

    {/* Divider + Reac */}
    <div className="flex items-center px-4">
      <VerticalDivider height={84} ... />
    </div>
    <div className="w-[78px] flex items-center justify-center">
      <KpiIndicator kpi="reac" ... />
    </div>

    {/* Divider + AI */}
    <div className="flex items-center px-4">
      <VerticalDivider height={84} ... />
    </div>
    <div className="w-[86px] flex items-center justify-center">
      <ListSuggestions count={aiSuggestions} ... />
    </div>
  </div>
</div>
```

**Principe** : la section Nom (`flex-1`) s'étire/rétrécit, les KPIs restent en largeur fixe (`shrink-0`). Sur des écrans plus étroits, le nom se tronque (text-ellipsis) mais les KPIs restent lisibles.

#### 3.4.3 Hook hover partagé

Utiliser `useHoverState` (créé en §3.0.1) dans le composant :

```typescript
import { useHoverState } from "../../hooks/useHoverState";
// ...
const { hovered, handlers } = useHoverState(forceHover);
// Remplacer forceHover || isHovered → hovered
// Remplacer onMouseEnter/onMouseLeave inline → ...handlers sur le div racine
```

Appliquer dans CardClient, ListClient, CardBien, ListBien, ListAffaire.

---

### 3.5 ListBien (ex `ListItemBien.tsx` → `@c/components/ListBien.tsx`)

**Même pattern que ListClient** :

| Action | Détail |
|---|---|
| `width: "1191px"` → `"100%"` | L96 |
| `height: "120px"` → `minHeight: "120px"` | L97 |
| Section Bien `width: "622px"` → `flex-1` | L106 |
| KPI sections → `shrink-0` | Idem ListClient |
| Divider spacer `width: "63px"` → `px-4` flex | Idem |
| `useHoverState()` | Remplace pattern useState inline |

**Propriétés Bien** : 3 KPIs (qual, ent, conv) + AI Suggestions.

---

### 3.6 ListAffaire (ex `ListItemAffaire.tsx` → `@c/components/ListAffaire.tsx`)

**Marquer `// TODO: refonte complète P10-AFF`** en haut du fichier.

Pour l'instant, appliquer uniquement :
- `width: "1199px"` → `"100%"` (L110)
- Sections internes `333px`, `220px` → `flex-1` / `shrink-0` proportionnel
- hex → tokens (déjà fait §2.5)
- `useHoverState()`
- **NE PAS** remplacer les SectionList* organisms par KpiIndicator — ce sera fait dans la refonte P10-AFF

---

### 3.7 SheetClientDetails

**Fichier** : `@c/molecules/SheetClientDetails.tsx` (~160 lignes)

#### 3.7.1 Hex → tokens

```typescript
// AVANT (L47-49) :
const cardBg = isDark ? "#111215" : "#FFFFFF";
const borderColor = isDark ? "#22252B" : "#ECEDEE";
const textColor = isDark ? "#d0d1d4" : "#444955";
// APRÈS :
const cardBg = isDark ? "var(--neutral-800)" : "var(--neutral-white)";
const borderColor = isDark ? "var(--neutral-700)" : "var(--neutral-50)";
const textColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";
```

#### 3.7.2 List* → KpiIndicator

Remplacer les 4 usages (déjà couvert par §2.2) :
```tsx
// AVANT :
<ListQualification percentage={qualification} theme={theme} hover={false} variant="straight" />
// APRÈS :
<KpiIndicator kpi="qual" value={`${qualification}%`} percentage={qualification} variant="straight" theme={theme} />
```

#### 3.7.3 Détails hardcodés → props dynamiques

Les `details` de chaque SectionCard sont actuellement hardcodés (ex: `"Informations de profil : 78%"`). Ajouter une prop `breakdowns` au composant :

```typescript
export interface SheetClientDetailsProps {
  qualification: number;
  engagement: number;
  conversion: number;
  reactivation: number;
  // AJOUTER :
  qualBreakdown?: Array<{ label: string; value?: string }>;
  engBreakdown?: Array<{ label: string; value?: string }>;
  convBreakdown?: Array<{ label: string; value?: string }>;
  reacBreakdown?: Array<{ label: string; value?: string }>;
  qualificationAiSuggestions?: number;
  engagementAiSuggestions?: number;
  conversionAiSuggestions?: number;
  reactivationAiSuggestions?: number;
}
```

Les pages consommatrices alimenteront ces breakdowns depuis `useClientScore(clientId).qual.breakdown`.

---

### 3.8 SheetBienDetails

**Fichier** : `@c/molecules/SheetBienDetails.tsx` (~220 lignes)

#### 3.8.1 Corrections

| Problème | Action |
|---|---|
| Prop `engagement` (L33, 50, 196) | Renommer en `entretien` partout |
| `engagementAiSuggestions` | Renommer en `entretienAiSuggestions` |
| Map placeholder `width: "350px"` (L117) | → `width: "100%"` |
| hex → tokens (L59-62) | Même pattern que SheetClientDetails §3.7.1 |
| `iconColor` hex | → `var(--neutral-200)` / `var(--neutral-500)` |
| 3 List* → KpiIndicator | Déjà couvert §2.2 |
| Détails hardcodés | Ajouter props `qualBreakdown`, `entBreakdown`, `convBreakdown` |

---

### 3.9 Listes légères (7 composants)

**Fichiers** : `@c/molecules/ListMandat.tsx`, `ListPromesse.tsx`, `ListVisite.tsx`, `ListAnnonce.tsx`, `ListCarnet.tsx`, `ListActeNotarie.tsx`, `ListFinance.tsx`

#### 3.9.1 Pattern existant (desktop)

Tous suivent le même layout horizontal : `flex items-center justify-between` dans une card `rounded-2xl`. Bon pattern desktop, à conserver.

#### 3.9.2 Hex restant

Certains ont `#ECEDEE` dans la border (ex: ListMandat L44, ListVisite L45) :
```typescript
// AVANT :
border: `1px solid ${isDark ? "var(--neutral-700)" : "#ECEDEE"}`,
// APRÈS :
border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
```
Vérifier et corriger dans les 7 fichiers.

#### 3.9.3 Variante mobile (<768px)

Ajouter le responsive mobile dans chaque liste légère. Pattern commun :

```tsx
import { useBreakpoint } from "../../hooks/useBreakpoint";

// Dans le composant :
const bp = useBreakpoint();
const isMobile = bp === "mobile";

// Layout conditionnel :
<div className={isMobile ? "flex flex-col gap-3" : "flex items-center justify-between"}>
  {/* Infos (référence, agent, date...) */}
  <div className={isMobile ? "" : "flex items-center gap-6"}>
    {/* ... contenu info identique ... */}
  </div>

  {/* Badges de statut */}
  <div className={isMobile ? "flex flex-wrap gap-2" : "flex items-center gap-6"}>
    {/* ... badges ... */}
  </div>

  {/* Actions */}
  <div className={isMobile ? "w-full" : ""}>
    <Button variant="default" fullWidth={isMobile} ...>
      {/* ... */}
    </Button>
  </div>
</div>
```

**Instruction Claude Code** : appliquer ce pattern aux 7 listes. Le Button prend `fullWidth` en mobile. Les badges passent en `flex-wrap`. Les infos s'empilent verticalement.

---

### 3.10 Composant Gallery (à créer)

**Fichier** : `@c/organisms/Gallery.tsx` — remplace `GalleryFicheBien` (import Figma brut).

```typescript
// organisms/Gallery.tsx
"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

export interface GalleryProps {
  images: Array<{ url: string; alt?: string }>;
  onExpand?: () => void;  // ouvre Sheet galerie complète
  theme?: "light" | "dark";
  className?: string;
}

export function Gallery({ images, onExpand, theme = "light", className = "" }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className={`relative w-full rounded-[16px] overflow-hidden ${className}`}
         style={{ height: "277px" }}>
      {/* Image principale */}
      <img src={images[activeIndex]?.url} alt={images[activeIndex]?.alt ?? ""}
           className="w-full h-full object-cover" />

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2"
                  onClick={() => setActiveIndex((i) => (i - 1 + images.length) % images.length)}>
            <ChevronLeft size={20} color="white" />
          </button>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2"
                  onClick={() => setActiveIndex((i) => (i + 1) % images.length)}>
            <ChevronRight size={20} color="white" />
          </button>
        </>
      )}

      {/* Compteur + Expand */}
      <div className="absolute bottom-3 right-3 flex gap-2">
        <span className="bg-black/60 text-white text-sm px-3 py-1 rounded-full">
          {activeIndex + 1}/{images.length}
        </span>
        {onExpand && (
          <button className="bg-black/60 text-white rounded-full p-2" onClick={onExpand}>
            <Maximize2 size={16} />
          </button>
        )}
      </div>

      {/* Miniatures (desktop) */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-3 flex gap-1">
          {images.slice(0, 5).map((img, i) => (
            <div key={i} className={`w-[48px] h-[36px] rounded-md overflow-hidden cursor-pointer border-2
              ${i === activeIndex ? "border-white" : "border-transparent"}`}
              onClick={() => setActiveIndex(i)}>
              <img src={img.url} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
          {images.length > 5 && (
            <div className="w-[48px] h-[36px] rounded-md bg-black/60 flex items-center justify-center text-white text-xs">
              +{images.length - 5}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

Ajouter à `@c/organisms/index.ts`.

---

## 4. Étape 3 — Pages

> **Prérequis** : §2 (DS cleanup) et §3 (responsive components) terminés.
> **Fichiers pages** :
> - `app/pages/client/routes/FIC_01_Page_List_Client.tsx` (~325 lignes)
> - `app/pages/client/FIC_01_PageFicheClient.tsx` (~857 lignes)
> - `app/pages/property/routes/FIB_01_Page_List_Bien.tsx` (~325 lignes, miroir Client)
> - `app/pages/FIB_01_PageFicheBien.tsx` (~2300 lignes)

---

### 4.1 FIC_01_Page_List_Client

**Fichier** : `app/pages/client/routes/FIC_01_Page_List_Client.tsx`

#### 4.1.1 Layout `.page-content`

```typescript
// AVANT (L111-114) :
<div style={{ marginLeft: "25px", width: "1191px" }}>
// APRÈS :
<div className="page-content">
```

Supprimer aussi le `background: isDark ? "#111215" : "#FFFFFF"` (L94) → `backgroundColor: "var(--surface-page)"`.

#### 4.1.2 ViewModeDropdown

Remplacer le bloc L163-206 (ref, state `viewDropdownOpen`, useEffect click-outside, DropdownButton + Menu inline) par :

```tsx
import { ViewModeDropdown } from "../../../components/molecules/ViewModeDropdown";
// ...
<ViewModeDropdown viewMode={viewMode} onViewModeChange={setViewMode} theme={theme} />
```

Supprimer : `viewDropdownOpen` state, `dropdownRef`, useEffect click-outside (L44-62).

#### 4.1.3 Imports renommés (post §2.6)

```typescript
// AVANT :
import { ListItemClient } from "../../../components/molecules/ListItemClient";
import { CardItemClient } from "../../../components/molecules/CardItemClient";
// APRÈS :
import { ListClient } from "../../../components/components/ListClient";
import { CardClient } from "../../../components/components/CardClient";
```

Et dans le JSX : `<ListItemClient` → `<ListClient`, `<CardItemClient` → `<CardClient`.

#### 4.1.4 Props mortes dans le mock

```typescript
// SUPPRIMER du mockClients (L78-86) :
engagementLevels: [...],
daysActive: 280,

// SUPPRIMER du JSX ListClient/CardClient :
engagementLevels={client.engagementLevels}
daysActive={client.daysActive}
```

#### 4.1.5 Hex → tokens dans la page

| Ligne | Avant | Après |
|---|---|---|
| L94 | `"#111215"` / `"#FFFFFF"` | `"var(--surface-page)"` (déjà le bon token) |
| L134 | `"#d0d1d4"` / `"#444955"` | `"var(--neutral-200)"` / `"var(--neutral-500)"` |
| L176 | `"#111215"` / `"#FFFFFF"` | `"var(--neutral-800)"` / `"var(--neutral-white)"` |
| L265 | `"#d0d1d4"` / `"#444955"` | `"var(--neutral-200)"` / `"var(--neutral-500)"` |
| L291-292 | `"#111215"` / `"#FFFFFF"`, `"#333740"` / `"#ECEDEE"` | `"var(--neutral-800)"` / `"var(--neutral-white)"`, `"var(--neutral-600)"` / `"var(--neutral-50)"` |

#### 4.1.6 Hooks data (Phase 2 — après §5)

Ces branchements seront faits après implémentation des hooks §5. **Pour l'instant, conserver les mocks** mais ajouter des commentaires `// TODO: brancher useClientList(filters, page)` :

```typescript
// TODO: remplacer mockClients par useClientList(filters, page)
// const { data, isLoading } = useClientList(filters, currentPage - 1);
const mockClients = Array.from({ length: 25 }, ...);
```

#### 4.1.7 Mobile : forcer cards

```typescript
const bp = useBreakpoint();
const effectiveViewMode = bp === "mobile" ? "cards" : viewMode;
// Utiliser effectiveViewMode au lieu de viewMode dans le rendu conditionnel
```

#### 4.1.8 SheetClientDetails — props nettoyées

```typescript
// AVANT (L313-319) :
<SheetClientDetails
  qualification={selectedClient.qualification}
  engagement={selectedClient.engagement}
  conversion={selectedClient.conversion}
  reactivation={selectedClient.reactivation}
  engagementLevels={selectedClient.engagementLevels}  // SUPPRIMER
/>
// APRÈS :
<SheetClientDetails
  qualification={selectedClient.qualification}
  engagement={selectedClient.engagement}
  conversion={selectedClient.conversion}
  reactivation={selectedClient.reactivation}
  // TODO: brancher qualBreakdown, engBreakdown, etc. via useClientScore
/>
```

---

### 4.2 FIC_01_PageFicheClient

**Fichier** : `app/pages/client/FIC_01_PageFicheClient.tsx` (~857 lignes)

#### 4.2.1 Layout `.page-content`

```typescript
// AVANT (L274) :
<div className="pl-[25px] space-y-0" style={{ maxWidth: "1216px" }}>
// APRÈS :
<div className="page-content space-y-0">
```

#### 4.2.2 Imports à nettoyer

| Import | Action |
|---|---|
| `ChipScoreAuto` de `atoms/ChipScore` (L23) | **Supprimer** — n'est pas utilisé dans le JSX visible (vestige) |
| `OrganismeMessageRecu` (L27) | → `import { MessageReceived } from "../../components/molecules/MessageReceived"` |
| `OrganismeMessageEnvoye` (L28) | → `import { MessageSent } from "../../components/molecules/MessageSent"` |
| `OrganismeIaSuggestion` (L29) | → `import { AiSuggestion } from "../../components/atoms/AiSuggestion"` ou créer un composant `AiSuggestionBlock` dédié |
| `ListItemAffaire` (L16) | → `import { ListAffaire } from "../../components/components/ListAffaire"` |
| `ListItemBien` (L17) | → `import { ListBien } from "../../components/components/ListBien"` |

#### 4.2.3 Remplacement raw Figma dans le JSX

| Avant | Après | Lignes |
|---|---|---|
| `<OrganismeIaSuggestion />` | `<AiSuggestion count={/* TODO: useClientAiSuggestions */} theme={theme} />` | L424, L642 |
| `<OrganismeMessageRecu propriete1={isDark ? "dark" : "light"} />` | `<MessageReceived theme={theme} /* TODO: brancher données messages */ />` | L674, L808, L824, L840 |
| `<OrganismeMessageEnvoye propriete1={isDark ? "dark" : "light"} />` | `<MessageSent theme={theme} />` | L816, L832, L848 |

**Note** : `OrganismeIaSuggestion` est utilisé comme un bloc (pas juste un badge compteur). Il faudra créer un composant `AiSuggestionBlock` (organism) qui affiche la suggestion complète avec titre, description et bouton action. Pour l'instant, remplacer par un placeholder :
```tsx
{/* TODO: créer organisms/AiSuggestionBlock — placeholder */}
<div className="rounded-2xl p-4" style={{ border: `1px solid var(--neutral-50)` }}>
  <AiSuggestion count={1} theme={theme} />
  <p style={{ color: "var(--text-body)", marginTop: 8 }}>Suggestion IA en cours de chargement...</p>
</div>
```

#### 4.2.4 Hex → tokens dans la page

| Ligne | Contexte | Avant → Après |
|---|---|---|
| L784 | Sheet footer bg | `"#111215"` → `"var(--neutral-800)"`, `"#FFFFFF"` → `"var(--neutral-white)"` |
| L785 | Sheet footer border | `"#333740"` → `"var(--neutral-600)"`, `"#ECEDEE"` → `"var(--neutral-50)"` |

Les autres couleurs dans la page utilisent déjà des tokens (`var(--text-strong)`, `var(--text-body)`, etc.) — vérifier qu'il ne reste aucun hex avec `grep "#" FIC_01_PageFicheClient.tsx`.

#### 4.2.5 Section Profil — refonte en blocs dépliables

**État actuel** : 3 colonnes statiques (identité, contact, professionnel) avec données mock (L56-72).

**Cible** : 7 blocs correspondant aux 7 accordéons de SheetEditProfilClient, chacun dépliable/repliable. Seuls les 3 premiers (Identité, Contact, Pro) sont visibles par défaut, les 4 suivants (KYC, Patrimoine, Financement, Méta) sous un "Voir tout".

```tsx
// Pattern pour chaque bloc :
<CollapsibleSection title="Identité" defaultOpen={true}>
  <div className="grid grid-cols-2 gap-y-3">
    {/* label/value pairs depuis useClientDetails */}
  </div>
</CollapsibleSection>
```

`CollapsibleSection` existe déjà dans `@c/molecules/CollapsibleSection.tsx`.

**Instruction Claude Code** : refactorer la section Profil pour utiliser `CollapsibleSection` avec les données de `useClientDetails(clientId)` (pour l'instant en mock, TODO brancher). Garder le bouton "Éditer" qui ouvre `SheetEditProfilClient`.

#### 4.2.6 AppBarFicheClient — scores dynamiques

```typescript
// AVANT (L261-268) :
<AppBarFicheClient
  clientName="BERTOGLIO, Jean-Philippe"
  tags={["VENDEUR", "ACQUÉREUR"]}
  qualification={64}   // hardcoded
  engagement={82}      // hardcoded
  conversion={24}      // hardcoded
  reactivation={49}    // hardcoded
  aiSuggestions={1}
  ...
/>
// TODO (après hooks §5) :
// const { data: scores } = useClientScore(clientId);
// qualification={scores?.qual.score ?? 0}
// engagement={scores?.eng.score ?? 0}
// etc.
```

Pour l'instant, ajouter le commentaire TODO et conserver les valeurs mock.

#### 4.2.7 GraphCourbe

**Conserver tel quel** — session de design dédiée à venir. Ajouter `// TODO: session dédiée GraphCourbe`.

---

### 4.3 FIB_01_Page_List_Bien

**Fichier** : `app/pages/property/routes/FIB_01_Page_List_Bien.tsx`

**Même refactoring que FIC_01_Page_List_Client §4.1** — miroir exact. Différences :

| Élément | Client | Bien |
|---|---|---|
| Import composants | `ListClient`, `CardClient` | `ListBien`, `CardBien` |
| KPIs | qual, eng, conv, reac | qual, ent, conv |
| Sheet | `SheetClientDetails` | `SheetBienDetails` |
| Mock data | `mockClients` | `mockBiens` |
| Hook TODO | `useClientList` | `usePropertyList` |

#### 4.3.1 Corrections spécifiques Bien

Le mock data Bien (L79-83) a des noms incohérents :
```typescript
// AVANT :
qualificationSheet: 61,
engagementSheet: 38,   // ← mauvais nom
conversionSheet: 24,
// APRÈS :
qualification: 61,
entretien: 38,
conversion: 24,
```

Et dans le Sheet :
```typescript
// AVANT :
<SheetBienDetails ... engagement={selectedBien.engagementSheet} />
// APRÈS :
<SheetBienDetails ... entretien={selectedBien.entretien} />
```

Appliquer toutes les mêmes transformations que §4.1 (layout, ViewModeDropdown, hex→tokens, mobile cards, imports renommés).

---

### 4.4 FIB_01_PageFicheBien

**Fichier** : `app/pages/FIB_01_PageFicheBien.tsx` (~2300 lignes — le plus gros fichier)

#### 4.4.1 Layout `.page-content`

```typescript
// AVANT (L223) :
<div className="pl-[25px] space-y-0" style={{ maxWidth: "1216px" }}>
// APRÈS :
<div className="page-content space-y-0">
```

#### 4.4.2 Imports à nettoyer

| Import | Action |
|---|---|
| `GalleryFicheBien` (L33) | → `import { Gallery } from "../components/organisms/Gallery"` |
| `ChipScoreAuto` (L44) | **Supprimer** |
| `OrganismeMessageRecu` (L49) | → `MessageReceived` |
| `OrganismeMessageEnvoye` (L50) | → `MessageSent` |
| `EchelleDpe` (L51) | → `import { DpeScale } from "../components/atoms/DpeScale"` |
| `EchelleGes` (L52) | → `import { GesScale } from "../components/atoms/GesScale"` |
| `ListItemAffaire` (L34) | → `ListAffaire` |
| `ListItemClient` (L37) | → `ListClient` |
| Figma asset imports `imgRectangle21..28` (L53-60) | Convertir en array pour Gallery |

#### 4.4.3 Gallery

```typescript
// AVANT (L237-243) :
<section id="galerie">
  <div style={{ width: "1191px", height: "277px", cursor: "pointer" }}
       onClick={() => setIsGalerieSheetOpen(true)}>
    <GalleryFicheBien />
  </div>
</section>

// APRÈS :
<section id="galerie">
  <Gallery
    images={[
      { url: imgRectangle21, alt: "Photo 1" },
      { url: imgRectangle22, alt: "Photo 2" },
      // ... etc — TODO: brancher usePropertyDetails(propertyId).photos
    ]}
    onExpand={() => setIsGalerieSheetOpen(true)}
    theme={theme}
  />
</section>
```

#### 4.4.4 EchelleDpe / EchelleGes → DpeScale / GesScale

```typescript
// AVANT (L640, L663) :
<EchelleDpe />
<EchelleGes />
// APRÈS :
<DpeScale activeClass="A" theme={theme} />
<GesScale activeClass="A" theme={theme} />
// TODO: brancher sur usePropertyDetails(propertyId).dpeEnergyClass / gesClass
```

Même transformation pour les occurrences L1908 et L1931 (Sheet galerie).

#### 4.4.5 Section Caractéristiques — badge score dynamique

```typescript
// AVANT (L268) :
<Badge variant="success">88%</Badge>
// APRÈS :
<Badge variant="success">{/* TODO: usePropertyScore(propertyId).qual.score */}88%</Badge>
```

#### 4.4.6 Hex → tokens

La page FicheBien a de nombreux hex restants (identifiés par grep L1307-2287). Les principaux :

| Pattern | Lignes | Avant → Après |
|---|---|---|
| Sheet footer | L1307-1308 | `"#111215"` → `var(--neutral-800)`, `"#333740"` → `var(--neutral-600)`, `"#ECEDEE"` → `var(--neutral-50)` |
| Carnet section cards | L1714-1737 | `"#ECEDEE"` → `var(--neutral-50)` |
| Succès / carnet actif | L2012-2047 | `"#E6F6E5"` → `var(--success-50)`, `"#0C6304"` → `var(--success-700)`, `"#86D280"` → `var(--success-300)`, `"#0DA500"` → `var(--success-500)` |
| Brand gradient | L2063, 2173, 2185, 2223 | `"#7B72F9"` → `var(--brand-500)`, `"#FF9040"` → `var(--warning-500)` |

**Instruction Claude Code** : `grep -n "#[0-9A-Fa-f]\{6\}" FIB_01_PageFicheBien.tsx` et migrer chaque occurrence. Les couleurs métier succès (vert carnet) doivent utiliser les tokens `--success-*`. Le gradient brand `#7B72F9` → `var(--brand-500)`.

#### 4.4.7 Section Acquéreurs appétents

La section existe déjà dans le fichier (utilise `ListItemClient` avec des données mock). Après renommage :
```typescript
// Remplacer ListItemClient par ListClient
// Ajouter TODO: brancher usePropertyMatchingClients(propertyId)
```

#### 4.4.8 Remplacement OrganismeMessage*

Même pattern que FicheClient §4.2.3 — remplacer `OrganismeMessageRecu`/`OrganismeMessageEnvoye` par `MessageReceived`/`MessageSent`.

---

## 5. Étape 4 — Hooks data

> Tous les hooks utilisent **TanStack Query** (React Query). Convention : `useQuery` pour lecture, `useMutation` pour écriture.
> Client Supabase importé depuis `@/lib/supabase` (browser client).
> Les hooks ne font AUCUNE logique de scoring — tout est délégué aux RPCs Postgres.

### 5.0 Types partagés

```typescript
// types/database.ts — à générer via `supabase gen types typescript`
// Enums réels extraits de la BDD :

type ClientStatus = 'PROPRIETAIRE' | 'ACQUEREUR' | 'BAILLEUR' | 'LOCATAIRE';
type PropertyType = 'STUDIO' | 'T1' | 'T2' | 'T3' | 'T4' | 'MAISON_DE_VILLE' | 'APPARTEMENT' | 'MAISON' | 'LOFT' | 'TERRAIN' | 'IMMEUBLE' | 'OTHER';
type PropertyStatus = 'OFF_MARKET' | 'A_VENDRE' | 'A_LOUER' | 'LOUE' | 'VENDU' | 'EN_VIAGER' | 'OTHER';
type DpeClass = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CONVERTED' | 'LOST';
type LeadSource = 'PAGE_PUBLIQUE' | 'PORTAIL' | 'CAMPAGNE' | 'REFERRAL';
type TriggerStatus = 'ACTIF' | 'TRAITE' | 'IGNORE' | 'EXPIRE';
type TriggerType = 'INACTIVITY' | 'DPE_ALERT' | 'MARKET_OPPORTUNITY' | 'CREDIT_RENEGOCIATION' | 'BIRTHDAY' | 'ANNIVERSARY' | 'DATA_MISSING' | 'DOCUMENT_EXPIRY' | 'STAGNATION' | 'MOMENTUM';
type LifecycleStage = 'lead' | 'prospect' | 'qualified' | 'active' | 'converted' | 'dormant' | 'lost';
type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large';

// Score response types (retours RPCs)
interface KpiThresholds { error: number; warning: number; }

interface ClientScores {
  clientId: string;
  lifecycle: LifecycleStage;
  statuses: string[]; // mapped EN: 'owner' | 'buyer' | 'landlord' | 'tenant'
  qual: { score: number; filledWeight: number; totalWeight: number; thresholds: KpiThresholds; breakdown: Record<string, { w: number; f: boolean }> };
  eng: { score: number; status: string };
  conv: { score: number; bestDeal: string | null; hasCarnetBonus: boolean; thresholds: KpiThresholds; breakdown: Array<{ dealId: string; dealType: string; pct: number }> };
  reac: { score: number; status: string };
  suggestions: any[];
}

interface PropertyScores {
  propertyId: string;
  propertyType: string;
  propertyStatus: string;
  qual: { score: number; filledWeight: number; totalWeight: number; thresholds: KpiThresholds; breakdown: Record<string, { w: number; f: boolean }> };
  entretien: { score: number; thresholds: KpiThresholds; breakdown: Record<string, { w: number; s: number; a: boolean }> };
  conv: { score: number; bestDeal: string | null; thresholds: KpiThresholds; breakdown: Array<{ dealId: string; dealType: string; pct: number }> };
}
```

### 5.1 useClientScore

```typescript
// hooks/useClientScore.ts
// Consommateurs : AppBarFicheClient, CardClient, ListClient, SheetClientDetails
function useClientScore(clientId: string | undefined) {
  return useQuery({
    queryKey: ['client-score', clientId],
    queryFn: async (): Promise<ClientScores> => {
      const { data, error } = await supabase.rpc('get_client_scores', { p_client_id: clientId! });
      if (error) throw error;
      return data as ClientScores;
    },
    enabled: !!clientId,
    staleTime: 30_000,       // 30s — les scores ne changent pas souvent
    gcTime: 5 * 60_000,      // 5min cache
  });
}
```

### 5.2 useClientList

```typescript
// hooks/useClientList.ts
// Consommateurs : FIC_01_Page_List_Client
interface ClientFilters {
  search?: string;           // recherche fulltext sur firstName, lastName, primaryEmail, mobilePhone
  status?: ClientStatus[];   // filtre multi-select
  lifecycleStage?: LifecycleStage[];
  agentId?: string;          // filtre par agent assigné
  isActive?: boolean;
  sortBy?: 'lastName' | 'createdAt' | 'updatedAt' | 'qualificationScore';
  sortOrder?: 'asc' | 'desc';
}

interface ClientListItem {
  id: string;
  firstName: string;
  lastName: string;
  primaryEmail: string | null;
  mobilePhone: string | null;
  status: ClientStatus[];
  lifecycleStage: LifecycleStage;
  address: string | null;
  source: string | null;       // enum ClientSource
  qualificationScore: number | null;  // legacy, affichage rapide avant chargement RPC
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  agentId: string;
}

const PAGE_SIZE = 25;

function useClientList(filters: ClientFilters, page: number) {
  return useQuery({
    queryKey: ['client-list', filters, page],
    queryFn: async () => {
      let query = supabase
        .from('Client')
        .select('id, firstName, lastName, primaryEmail, mobilePhone, status, lifecycleStage, address, source, qualificationScore, isActive, createdAt, updatedAt, agentId', { count: 'exact' });

      // Filtres
      if (filters.search) {
        query = query.or(`firstName.ilike.%${filters.search}%,lastName.ilike.%${filters.search}%,primaryEmail.ilike.%${filters.search}%,mobilePhone.ilike.%${filters.search}%`);
      }
      if (filters.status?.length) {
        query = query.overlaps('status', filters.status);  // array overlap pour ClientStatus[]
      }
      if (filters.lifecycleStage?.length) {
        query = query.in('lifecycleStage', filters.lifecycleStage);
      }
      if (filters.agentId) {
        query = query.eq('agentId', filters.agentId);
      }
      if (filters.isActive !== undefined) {
        query = query.eq('isActive', filters.isActive);
      }

      // Tri
      const sortBy = filters.sortBy ?? 'updatedAt';
      const sortOrder = filters.sortOrder ?? 'desc';
      query = query.order(sortBy, { ascending: sortOrder === 'asc' });

      // Pagination
      const from = page * PAGE_SIZE;
      query = query.range(from, from + PAGE_SIZE - 1);

      const { data, error, count } = await query;
      if (error) throw error;
      return { clients: data as ClientListItem[], totalCount: count ?? 0, page, pageSize: PAGE_SIZE };
    },
    placeholderData: keepPreviousData,  // smooth pagination
  });
}
```

### 5.3 useClientDetails

```typescript
// hooks/useClientDetails.ts
// Consommateurs : FIC_01_PageFicheClient, SheetEditProfilClient
// Charge TOUTES les 48 colonnes + relations
function useClientDetails(clientId: string | undefined) {
  return useQuery({
    queryKey: ['client-details', clientId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('Client')
        .select('*')     // toutes les 48 colonnes
        .eq('id', clientId!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!clientId,
  });
}
```

### 5.4 useClientAiSuggestions

```typescript
// hooks/useClientAiSuggestions.ts
// Consommateurs : Section suggestions IA dans FicheClient + AiSuggestion atoms
// Source : table Trigger (type IA, status ACTIF, liés au client)

interface AiSuggestion {
  id: string;
  type: TriggerType;
  category: string;    // TriggerCategory enum
  label: string;
  description: string;
  score: number;
  status: TriggerStatus;
  detectedAt: string;
  expiryDate: string | null;
  automationCode: string | null;
  engagementScoreImpact: number | null;
  signalSource: string;
}

function useClientAiSuggestions(clientId: string | undefined, kpi?: 'qual' | 'eng' | 'conv' | 'reac') {
  return useQuery({
    queryKey: ['client-ai-suggestions', clientId, kpi],
    queryFn: async () => {
      let query = supabase
        .from('Trigger')
        .select('id, type, category, label, description, score, status, detectedAt, expiryDate, automationCode, engagementScoreImpact, signalSource')
        .eq('clientId', clientId!)
        .eq('status', 'ACTIF')
        .order('score', { ascending: false })
        .limit(10);

      // Filtrer par catégorie liée au KPI demandé
      if (kpi === 'qual') query = query.in('type', ['DATA_MISSING', 'DOCUMENT_EXPIRY']);
      if (kpi === 'eng') query = query.in('type', ['INACTIVITY', 'STAGNATION', 'MOMENTUM']);
      if (kpi === 'conv') query = query.in('type', ['MARKET_OPPORTUNITY', 'CREDIT_RENEGOCIATION']);
      if (kpi === 'reac') query = query.in('type', ['INACTIVITY', 'BIRTHDAY', 'ANNIVERSARY', 'DPE_ALERT']);

      const { data, error } = await query;
      if (error) throw error;
      return data as AiSuggestion[];
    },
    enabled: !!clientId,
    staleTime: 60_000,
  });
}
```

### 5.5 usePropertyScore

```typescript
// hooks/usePropertyScore.ts
// Consommateurs : AppBarFicheBien, CardBien, ListBien, SheetBienDetails
function usePropertyScore(propertyId: string | undefined) {
  return useQuery({
    queryKey: ['property-score', propertyId],
    queryFn: async (): Promise<PropertyScores> => {
      const { data, error } = await supabase.rpc('get_property_scores', { p_property_id: propertyId! });
      if (error) throw error;
      return data as PropertyScores;
    },
    enabled: !!propertyId,
    staleTime: 30_000,
    gcTime: 5 * 60_000,
  });
}
```

### 5.6 usePropertyList

```typescript
// hooks/usePropertyList.ts
// Consommateurs : FIB_01_Page_List_Bien
interface PropertyFilters {
  search?: string;              // recherche sur address, neighborhoodName
  type?: PropertyType[];        // multi-select
  status?: PropertyStatus[];    // multi-select
  dpeEnergyClass?: DpeClass[];  // filtre DPE
  priceMin?: number;            // estimatedMarketValue >=
  priceMax?: number;            // estimatedMarketValue <=
  areaMin?: number;             // livingAreaSqm >=
  areaMax?: number;             // livingAreaSqm <=
  bedroomCountMin?: number;
  agentId?: string;
  sortBy?: 'address' | 'createdAt' | 'updatedAt' | 'estimatedMarketValue' | 'livingAreaSqm' | 'completionScore';
  sortOrder?: 'asc' | 'desc';
}

interface PropertyListItem {
  id: string;
  address: string | null;
  type: PropertyType;
  status: PropertyStatus;
  livingAreaSqm: number | null;
  bedroomCount: number | null;
  estimatedMarketValue: number | null;
  estimatedMarketValuePerSqm: number | null;
  dpeEnergyClass: DpeClass | null;
  completionScore: number | null;  // legacy, affichage rapide
  neighborhoodName: string | null;
  createdAt: string;
  updatedAt: string;
  clientId: string | null;
  agentId: string;
}

function usePropertyList(filters: PropertyFilters, page: number) {
  return useQuery({
    queryKey: ['property-list', filters, page],
    queryFn: async () => {
      let query = supabase
        .from('Property')
        .select('id, address, type, status, livingAreaSqm, bedroomCount, estimatedMarketValue, estimatedMarketValuePerSqm, dpeEnergyClass, completionScore, neighborhoodName, createdAt, updatedAt, clientId, agentId', { count: 'exact' });

      if (filters.search) {
        query = query.or(`address.ilike.%${filters.search}%,neighborhoodName.ilike.%${filters.search}%`);
      }
      if (filters.type?.length) query = query.in('type', filters.type);
      if (filters.status?.length) query = query.in('status', filters.status);
      if (filters.dpeEnergyClass?.length) query = query.in('dpeEnergyClass', filters.dpeEnergyClass);
      if (filters.priceMin) query = query.gte('estimatedMarketValue', filters.priceMin);
      if (filters.priceMax) query = query.lte('estimatedMarketValue', filters.priceMax);
      if (filters.areaMin) query = query.gte('livingAreaSqm', filters.areaMin);
      if (filters.areaMax) query = query.lte('livingAreaSqm', filters.areaMax);
      if (filters.bedroomCountMin) query = query.gte('bedroomCount', filters.bedroomCountMin);
      if (filters.agentId) query = query.eq('agentId', filters.agentId);

      const sortBy = filters.sortBy ?? 'updatedAt';
      query = query.order(sortBy, { ascending: (filters.sortOrder ?? 'desc') === 'asc' });
      const from = page * PAGE_SIZE;
      query = query.range(from, from + PAGE_SIZE - 1);

      const { data, error, count } = await query;
      if (error) throw error;
      return { properties: data as PropertyListItem[], totalCount: count ?? 0, page, pageSize: PAGE_SIZE };
    },
    placeholderData: keepPreviousData,
  });
}
```

### 5.7 usePropertyDetails

```typescript
// hooks/usePropertyDetails.ts
// Consommateurs : FIB_01_PageFicheBien, SheetEditBienDetails
function usePropertyDetails(propertyId: string | undefined) {
  return useQuery({
    queryKey: ['property-details', propertyId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('Property')
        .select('*')    // 68 colonnes
        .eq('id', propertyId!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!propertyId,
  });
}
```

### 5.8 usePropertyMatchingClients

```typescript
// hooks/usePropertyMatchingClients.ts
// Consommateurs : Section "Acquéreurs appétents" dans FIB_01_PageFicheBien
// Logique : trouver les clients ACQUEREUR avec searchCriteriaSummary compatible
// Phase 1 : simple query sur status. Phase 2 : matching IA sur critères

interface MatchingClient {
  id: string;
  firstName: string;
  lastName: string;
  primaryEmail: string | null;
  mobilePhone: string | null;
  searchCriteriaSummary: string | null;
  lifecycleStage: LifecycleStage;
}

function usePropertyMatchingClients(propertyId: string | undefined) {
  return useQuery({
    queryKey: ['property-matching-clients', propertyId],
    queryFn: async () => {
      // Phase 1 : tous les acquéreurs actifs de l'organisation
      // TODO Phase 2 : RPC avec scoring de compatibilité (prix, surface, localisation)
      const { data, error } = await supabase
        .from('Client')
        .select('id, firstName, lastName, primaryEmail, mobilePhone, searchCriteriaSummary, lifecycleStage')
        .overlaps('status', ['ACQUEREUR'])
        .eq('isActive', true)
        .not('searchCriteriaSummary', 'is', null)
        .order('updatedAt', { ascending: false })
        .limit(20);

      if (error) throw error;
      return data as MatchingClient[];
    },
    enabled: !!propertyId,
    staleTime: 60_000,
  });
}
```

### 5.9 usePropertyDiagnostics

```typescript
// hooks/usePropertyDiagnostics.ts
// Consommateurs : Section diagnostics dans FIB_01_PageFicheBien, ENT score breakdown

interface PropertyDiagnostic {
  id: string;
  propertyId: string;
  topic: 'plomberie' | 'electricite' | 'isolation' | 'toiture' | 'menuiseries' | 'chauffage' | 'humidite';
  completedAt: string;
  score: number | null;
  recommendation: 'ok' | 'monitor' | 'professional_needed' | null;
  answeredBy: 'owner' | 'agent' | null;
  answersJson: Record<string, any> | null;
}

function usePropertyDiagnostics(propertyId: string | undefined) {
  return useQuery({
    queryKey: ['property-diagnostics', propertyId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('PropertyDiagnosticQuestionnaire')
        .select('*')
        .eq('propertyId', propertyId!)
        .order('completedAt', { ascending: false });
      if (error) throw error;
      return data as PropertyDiagnostic[];
    },
    enabled: !!propertyId,
  });
}
```

### 5.10 useDealLeads

```typescript
// hooks/useDealLeads.ts
// Consommateurs : Section "Leads" dans AFF_01_PageFicheAffaire
// Requête : Leads liés au Listing du Deal

interface DealLead {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  message: string | null;
  source: LeadSource;
  score: number | null;
  status: LeadStatus;
  convertedToClientId: string | null;
  createdAt: string;
}

function useDealLeads(dealId: string | undefined) {
  return useQuery({
    queryKey: ['deal-leads', dealId],
    queryFn: async () => {
      // 1. Récupérer le listingId du deal
      const { data: deal, error: dealError } = await supabase
        .from('Deal')
        .select('listingId')
        .eq('id', dealId!)
        .single();
      if (dealError) throw dealError;
      if (!deal?.listingId) return [];

      // 2. Récupérer les leads du listing
      const { data, error } = await supabase
        .from('Lead')
        .select('id, name, email, phone, message, source, score, status, convertedToClientId, createdAt')
        .eq('listingId', deal.listingId)
        .order('createdAt', { ascending: false });
      if (error) throw error;
      return data as DealLead[];
    },
    enabled: !!dealId,
  });
}
```

### 5.11 useBreakpoint

> **Déjà créé en §3.0.2** (`hooks/useBreakpoint.ts`). Ce hook est purement client-side (pas de Supabase) et a été placé en §3.0 car les composants responsive (§3.9 listes légères, §4.1.7 mobile cards) en dépendent avant l'étape hooks data.
>
> Consommateurs : tous les composants responsive (Card/List switch, lightweight lists, pages).

---

## 6. Ordre d'exécution recommandé

1. **Migrations Supabase** (§1) — bloquant pour les hooks
2. **Nettoyage DS** (§2) — dead code, KpiIndicator, hex→tokens, reclassifications
3. **Composants responsive** (§3) — CardClient/Bien, ListClient/Bien, listes légères
4. **Hooks data** (§5) — connecter les composants aux RPC
5. **Pages** (§4) — assembler les pages refactorées
6. **Tests** — vérifier scoring, responsive, dark mode, navigation Sheets

---

## 7. Fichiers de référence

| Artefact | Chemin | Contenu |
|---|---|---|
| Algorithmes scoring | `SCORING_ALGORITHMS.md` | QUAL/ENG/CONV/REAC Client + QUAL/ENT/CONV Bien — formules, poids, seuils, JSON scoring_config |
| Registre DS | `DS_REGISTRY_P08_P09.md` | Inventaire complet composants, constats, décisions, migrations |
| BDD enrichie | `bases_de_donnees_enrichies.xlsx` | 42 champs clients, 66 champs properties |
| Spécifications | `vague2_08_fiche_client.docx` / `vague2_09_fiche_bien.docx` | Specs fonctionnelles parcours |
