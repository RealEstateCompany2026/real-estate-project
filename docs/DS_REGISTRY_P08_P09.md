# DS Registry — P08 Fiche Client / P09 Fiche Bien
_Artefact vivant — mis à jour au fil des phases_

## Objectif
Recenser, clarifier et stabiliser chaque composant (atom/molecule/organism/template) et chaque gabarit impliqué dans P08/P09, avant intégration Claude Code.

## Méthodologie — 5 phases
1. **Fondations transverses** — atoms + molecules/organisms partagés
2. **Domaine Client** — KPIs, Card/ListItemClient, SheetClientDetails, SheetEditProfilClient, AppBars Client
3. **Domaine Bien** — SectionListBien, Card/ListItemBien, SheetBienDetails, AppBars Bien, Gallery
4. **Listes transactionnelles** — Mandat, Promesse, Visite, Acte, Annonce, Carnet, Finance + wrappers Section*
5. **Sheets transverses + Gabarits** — 4 pages + sheets (Messagerie, Annonce, Activité, EditProfil)

À la fin de chaque phase : diff code validé + liste migrations Supabase + màj specs.

---

## Template de fiche composant

```
### <NomComposant> (atom|molecule|organism|template)
- **Fichier** : app/components/<path>.tsx
- **Rôle fonctionnel** : …
- **Parcours/écrans utilisateurs** : P0X-YY, …
- **Props** (contrat) : …
- **Composition atomique** : liste des sous-composants DS
- **Tokens utilisés** : color/typo/space/radius (alias → mapped)
- **Binding BDD** : table.champ(s) source(s) — schéma public/client_app/analytics
- **Format de contenu** : statut | tiny | sample | last | card | list | long | full
- **Tag score** : QUAL | ENG | CONV | aucun
- **Contribution scoring** : quelle(s) formule(s) alimentée(s), via quel(s) champ(s), avec quel poids/règle
- **États** : default, hover, selected, loading, empty, error
- **Interactions** : clics, ancres, ouvertures de sheet, appels RPC
- **Conformité atomic/tokens** : ✅ / ⚠️ + remarques
- **Décisions / refacto** : …
- **Status** : 🟡 à revoir · 🟢 validé · 🔴 bloquant
```

---

## Registre scoring (QUAL / ENG / CONV)

Tableau central — renseigné au fur et à mesure.

| Score | Champ source (table.col) | Composant qui l'affiche | Règle de contribution | Poids | Statut |
|-------|--------------------------|------------------------|----------------------|-------|--------|
| _à remplir phase par phase_ | | | | | |

**Principe** : les scores sont DÉRIVÉS (vue SQL ou RPC), jamais stockés en dur. Chaque fiche composant doit déclarer ses contributions pour reconstituer l'algorithme complet avant implémentation.

---

## Registre automatisations (IASuggestion flow)

Flow UX : clic atome `IASuggestion` → Sheet présentation → Sheet config → Button validation → action.

| Automatisation | Déclencheur inline | Sheet présentation | Sheet config | Action finale | Tables impactées |
|----------------|-------------------|-------------------|--------------|---------------|-----------------|
| _à remplir_ | | | | | |

---

## Phase 1 — Fondations transverses
_En cours_

### Atoms — premier batch (scoring / IA)

#### ScoreBadge (atom)
- **Fichier** : app/components/atoms/ScoreBadge.tsx
- **Rôle** : afficher un score numérique global (Qual/Eng/Conv) avec indicateur de tendance optionnel (↑/↓/→).
- **Parcours/écrans** : P08 FIC (header fiche client, section Scoring), P09 FIB (header fiche bien), Dashboard, ListScoring.
- **Props** : `score: number`, `showTrend?: boolean`, `trend?: "up"|"down"|"neutral"`, `size?: "sm"|"md"|"lg"`.
- **Composition** : texte + icône ChevronDown (lucide).
- **Tokens** : `--text-sm/base/h3`, `--lh-*`, `--spacing-scale200..500`, `--text-headings`, `--icon-success/error/caption`, `--font-family`. ✅ 100 % tokens.
- **Binding BDD** : valeur calculée — vue/RPC `get_client_score(id)` / `get_property_score(id)` qui agrègent les champs tagués QUAL/ENG/CONV. Tendance = delta vs snapshot J-7 (à stocker en `analytics.score_snapshot`).
- **Format de contenu** : `statut`
- **Tag score** : QUAL + ENG + CONV (affiche le score demandé, agnostique)
- **Contribution scoring** : n'alimente pas — c'est un renderer du score agrégé.
- **États** : default, sans tendance / avec tendance up/down/neutral.
- **Interactions** : aucune (peut être wrappé dans un lien vers la section scoring d'une fiche).
- **Conformité** : ✅ propre.
- **Décisions** : (1) créer la table `analytics.score_snapshot(entity_type, entity_id, score_type, value, captured_at)` pour alimenter `trend`. (2) définir les RPC `get_*_score` comme SOURCE UNIQUE de calcul.
- **Status** : 🟡 en attente valid° architecture scoring.

#### ~~ChipScore~~ — 🔴 À SUPPRIMER
Décision validée : ChipScore disparaît. KpiIndicator le remplace pour toutes les lectures marketing/business. Action : retirer `ChipScore.tsx`, `ChipScoreAuto`, `getScoreLevel`, et toutes les imports depuis CardItemClient/Bien/ListItem*. À inscrire au diff de fin de Phase 1.

<details><summary>archive fiche (ne pas rééintroduire)</summary>
- **Fichier** : app/components/atoms/ChipScore.tsx
- **Rôle** : chip compact avec jauge semi-circulaire colorée + score (5 niveaux veryLow→veryHigh).
- **Parcours** : listes clients (CardItemClient, ListItemClient), listes biens (CardItemBien, ListItemBien), dashboards.
- **Props** : `score: number`, `level: ScoreLevel`, `disabled?`. Helper `getScoreLevel(score)` + variante auto `ChipScoreAuto`.
- **Tokens** : ⚠️ couleurs HARDCODÉES (`#EC0119`, `#FF882F`, `#FDEB03`, `#4AC57B`, `#00A774`) — commentaire du code dit "pas de tokens car valeurs métier". Typo `font-['Roboto']` hardcodée + tailles px fixes.
- **Binding BDD** : même source que ScoreBadge (score agrégé). Level dérivé via `getScoreLevel()` (thresholds 15/37/62/85).
- **Format de contenu** : `statut`
- **Tag score** : QUAL (par défaut côté client) — mais composant réutilisable pour ENG/CONV ?
- **Contribution scoring** : renderer uniquement.
- **Décisions à valider** :
  1. **Tokeniser les 5 couleurs** → `--score-very-low/low/medium/high/very-high` (alias layer). Argument métier : un daltonien ou un rebrand cassent 30+ composants.
  2. **Confirmer les thresholds 15/37/62/85** — sont-ils métier validés ? À figer dans une constante partagée (`lib/scoring/thresholds.ts`) pour éviter la dérive entre front/SQL.
  3. **Un seul ChipScore pour QUAL/ENG/CONV** ou 3 composants dédiés avec palettes/icônes différentes ? Côté Figma l'icône est la même pour les 3, donc 1 seul composant suffit → ajouter prop `type: "qual"|"eng"|"conv"` pour l'accessibilité (aria-label).
- **Status** : 🔴 SUPPRIMÉ.

</details>

#### AiSuggestion (atom)
- **Fichier** : app/components/atoms/AiSuggestion.tsx
- **Rôle** : badge compteur de suggestions IA disponibles sur une entité. Point d'entrée UX vers le flow automatisation.
- **Parcours** : inline dans CardItemClient/Bien, ListItem*, AppBars de fiches, dashboard.
- **Props** : `count: number`, `theme?: "light"|"dark"`.
- **Tokens** : ⚠️ couleurs hardcodées dans le code actuel, MAIS correspondent aux tokens existants (variant `count=0` = `disabled`, variant `count>=1` = `branded`). Refacto mécanique : remplacer les hex par `--text-disabled` / `--border-disabled` pour 0, et `--brand-500`/`--brand-600`/`--text-on-brand` pour >=1.
- **Binding BDD** : `count` dérivé d'une vue `ai_suggestion_active` filtrée sur l'entité + contexte agent. À modéliser : table `automation_suggestion(id, entity_type, entity_id, template_id, status, created_at, dismissed_at)` côté `public`, avec RPC `count_active_suggestions(entity_type, entity_id)`.
- **Format de contenu** : `statut`
- **Tag score** : aucun (meta sur IA)
- **Contribution scoring** : indirecte — le **nb de suggestions dismissed/activated** peut alimenter le score ENG (proxy d'engagement agent sur les recommandations).
- **Interactions** : **clic = ouverture Sheet présentation des suggestions** (flow confirmé par l'utilisateur : présentation → config → validation → launch).
- **Décisions à valider** :
  1. Tokeniser les couleurs (brand/500, brand/600, neutral/300, neutral/700, etc.).
  2. Modèle de données `automation_suggestion` + RPC associée → migration Supabase.
  3. Câbler le `onClick` → `openSheet("ai-suggestion-presentation", { entityType, entityId })` — routage à définir dans Phase 5.
- **Status** : 🔴 refacto tokens + modèle BDD à définir.

#### KpiIndicator (atom)
- **Fichier** : app/components/atoms/KpiIndicator.tsx
- **Rôle** : KPI marketing/business **unique composant scoring** de l'app (remplace ChipScore). Icône + valeur + barres de progression (9 verticales ou 1 horizontale). Couleur auto selon % (error <25, warning 25-60, success >60).
- **Variantes métier** (toutes instances du même atom, différenciées par `type` + `icon` + RPC source) :
  - **Client · Qualification** → % de champs client collectés (QUAL)
  - **Client · Engagement** → réceptivité / réactivité / propension à réagir favorablement aux actions & messages (ENG)
  - **Client · Conversion** → potentiel + statut des éléments à convertir : mandat vente, mandat gestion, mandat recherche, activation carnet d'entretien, etc. (CONV)
  - **Client · Réactivation** → ⚠️ à trancher : moyenne pondérée des 3 ci-dessus OU construction autonome (signaux dormance : temps depuis dernier msg, score ENG en baisse, événements manqués…). Proposition ma préférée : **construction autonome** basée sur un score de "froideur" inversé, sinon on crée un indicateur redondant.
  - **Bien · Qualification** → % de données Bien collectées
  - **Bien · Entretien** → qualité du bien + activité du carnet d'entretien (quand activé par le client)
  - **Bien · Conversion** → mandat vente/gestion/recherche + activation carnet + autres (à aligner avec variante client)
  - **Affaire · *** → en cours de stabilisation, à traiter dans un parcours ultérieur
- **Parcours** : Dashboard (vues agrégées), headers/sections de fiches (P08 FIC header & section Scoring, P09 FIB header & section Scoring), ListQualification / ListEngagement / ListConversion / ListReactivation organisms.
- **Props** : `icon`, `value: string`, `percentage?`, `color?`, `filledBars?`, `variant?: "vertical"|"straight"`, `hover?`, `theme?`.
- **Composition** : utilise atom `Chip`.
- **Tokens** : ✅ utilise `--error-500/600`, `--warning-500/600`, `--success-500/600`, `--neutral-50/100/500/600`. Dimensions restent en px.
- **Binding BDD** — RPC uniques (source de vérité) :
  - `get_client_kpi(client_id, metric)` → metric ∈ (qualification, engagement, conversion, reactivation)
  - `get_property_kpi(property_id, metric)` → metric ∈ (qualification, entretien, conversion)
  - `get_dashboard_client_kpis(agent_id)` → agrégation par segment QUAL/ENG/CONV/REAC
  - `get_dashboard_property_kpis(agent_id)` → agrégation QUAL/ENTRETIEN/CONV
  - Aucun score stocké en dur. Snapshots historiques via `analytics.score_snapshot` pour tendances.
- **Format de contenu** : `statut` (agrégé)
- **Tag score** : QUAL / ENG / CONV selon l'instance
- **Contribution scoring** : renderer + porteur des 3 seuils (25/60). Puisque ChipScore est supprimé, **les seuils KpiIndicator deviennent la seule vérité visuelle** : error <25, warning 25-60, success >60. À figer dans `lib/scoring/thresholds.ts` et répliquer en SQL.
- **Décisions** :
  1. Thresholds uniques 25/60 (à valider métier).
  2. RPC séparées par domaine (client/bien/affaire) avec paramètre `metric` pour éviter la prolifération.
  3. Trancher la construction de "Client · Réactivation" (autonome vs dérivée). **Besoin d'un échange dédié.**
- **Status** : 🟢 conforme tokens / 🟡 en attente décision Réactivation + définition des formules par métrique.

> **Point ouvert — à traiter en début de Phase 2 (Domaine Client)** :
> Détailler les formules de chaque métrique (quels champs contribuent, avec quels poids). C'est le chantier "scoring rigoureux" demandé par l'utilisateur. Je propose de produire un sous-document `SCORING_ALGORITHMS.md` adossé au registre.

### Atoms — deuxième batch (badges, statuts, jauges)

#### Badge (atom)
- **Fichier** : app/components/atoms/Badge.tsx
- **Rôle** : pill sémantique (default / disabled / information / warning / success / error). Utilisé pour tous les **statuts métier** (ex. "Mandat actif", "En attente signature", "Expiré").
- **Parcours** : FIC header (statut client : Prospect/Acquéreur/Locataire/Propriétaire), FIB header (statut bien : Off market / En vente / En location), ListMandat, ListPromesse, ListActeNotarie, logs, sheets.
- **Props** : `variant`, `label`, `children`, `theme?`.
- **Tokens** : 🔴 **couleurs HARDCODÉES** (palettes light/dark complètes en dur dans le fichier). Typo Roboto hardcodée. Hauteur 20px fixe.
- **Binding BDD** : label et variant mappés depuis des enums métier : `client.type`, `property.status`, `mandate.status`, `promise.status`, `document.signature_status`…
- **Format de contenu** : `statut`
- **Tag score** : indirect — certains statuts contribuent à CONV (mandat signé = +CONV) ou ENG (réponse reçue = +ENG). À recenser dans `SCORING_ALGORITHMS.md`.
- **Décisions** :
  1. **Refacto tokens obligatoire** : mapper sur `--surface-{info|warning|success|error}-subtle`, `--border-{...}`, `--text-{...}` (ces tokens existent déjà, cf StatusDot/CompletionGauge). À inscrire au diff fin Phase 1.
  2. Créer un **mapper `statusToBadge(domain, value)`** centralisé (`lib/ui/statusBadge.ts`) : source unique entre back et front pour éviter 30 switch/case dispersés.
- **Status** : 🔴 refacto tokens + centralisation mapper.

#### AiTitleWithBadge (atom composite)
- **Fichier** : app/components/atoms/AiTitleWithBadge.tsx
- **Rôle** : titre de section + compteur IA attaché. Utilisé comme en-tête des sections "Conseils IA", "Suggestions", etc.
- **Props** : `title: string`, `count: number`.
- **Composition** : texte + `<AiSuggestion>`.
- **Tokens** : ✅ `--text-body` + Roboto (hardcodé en font-family — OK car unique famille du DS).
- **Binding BDD** : `count` = RPC `count_active_suggestions(entity_type, entity_id)` (idem AiSuggestion).
- **Interactions** : hérite du clic de `AiSuggestion` → ouverture sheet présentation.
- **Décisions** : ⚠️ ce composant mélange "titre de section" (rôle d'organism) et "badge" (atom). À borderline — je propose de le **reclasser en molecule** car il agrège 2 unités sémantiques. À trancher dans les molecules.
- **Status** : 🟡 reclassification atomic design.

#### ChipTrend (atom)
- **Fichier** : app/components/atoms/ChipTrend.tsx
- **Rôle** : affiche un label + flèche ↑/↓ pour indiquer une tendance (score, prix, volume…).
- **Parcours** : header de fiches (tendance score), dashboards, sheets KPI.
- **Props** : `label`, `trend: "up"|"down"|"neutral"`, `disabled?`.
- **Tokens** : 🔴 couleurs `#0DA500` / `#EC0119` HARDCODÉES. Commentaire "pas de tokens car valeurs métier" — même pattern erroné que ChipScore.
- **Binding BDD** : tendance = `delta(score_current, score_snapshot_J-7)` (sign). Label = libellé métier statique.
- **Format de contenu** : `statut`
- **Tag score** : renderer uniquement.
- **Décisions** : utiliser `--icon-success` / `--icon-error` (tokens existants déjà utilisés par `ScoreBadge`). Cohérence garantie.
- **Status** : 🔴 refacto tokens.

#### CompletionGauge (atom)
- **Fichier** : app/components/atoms/CompletionGauge.tsx
- **Rôle** : barre de progression linéaire avec label + %. Couleur auto par palier (0-49 error, 50-74 warning, 75-99 branded, 100 success).
- **Parcours** : header SheetEditProfilClient (complétion du profil), SheetEditProfilBien, P08/P09 section "Qualité des données".
- **Props** : `percentage`, `label?`, `size?`, `showPercentage?`.
- **Tokens** : ✅ 100 % tokens (`--surface-success-default`, `--surface-branded-default`, `--surface-warning-default`, `--surface-error-subtle`, `--surface-neutral-subtle`).
- **Binding BDD** : `percentage = get_client_kpi(id, 'qualification')` ou `get_property_kpi(id, 'qualification')`. **MÊME SOURCE** que KpiIndicator Qualification.
- **Format de contenu** : `statut`
- **Tag score** : QUAL
- **Contribution scoring** : renderer — mais il est CRITIQUE de noter que CompletionGauge et KpiIndicator-Qualification doivent refléter **exactement le même %** (via la même RPC). Sinon l'utilisateur voit des valeurs discordantes.
- **Décisions** :
  1. ⚠️ Incohérence de seuils avec KpiIndicator (25/60 vs 50/75/100). À trancher : harmoniser ou documenter que CompletionGauge est "plus granulaire car dédié complétion formulaire".
  2. Vérifier que le seuil "error" (<50) n'est pas trop sévère visuellement (un profil à 40% peut être normal en début de parcours).
- **Status** : 🟡 harmoniser seuils avec KpiIndicator (à traiter dans SCORING_ALGORITHMS.md).

#### StatusDot (atom)
- **Fichier** : app/components/atoms/StatusDot.tsx
- **Rôle** : puce colorée (empty / partial / complete / success / error) pour marquer un état compact.
- **Parcours** : listes (statut d'un item), cellules de tableau, stepper.
- **Props** : `level`, `size?: "sm"|"md"|"lg"`.
- **Tokens** : ✅ 100 % tokens (`--surface-*-subtle`, `--border-*`).
- **Binding BDD** : dérivé de statuts métier (mandat, dossier, document).
- **Format de contenu** : `statut`
- **Tag score** : indirect (selon statut porté).
- **Status** : 🟢 conforme.

### Molecules partagées

#### CollapsibleSection (molecule)
- **Fichier** : app/components/molecules/CollapsibleSection.tsx
- **Rôle** : bloc pliable avec titre + badge optionnel + description + contenu. Utilisé pour les formulaires multi-sections (SheetEditProfilClient, SheetEditProfilBien) et potentiellement la fiche elle-même.
- **Parcours** : SUP setup, P08 FIC section "Identité / Coordonnées / Préférences", P09 FIB section "Caractéristiques / Descriptif / Médias", SheetEditProfilClient, SheetEditProfilBien.
- **Props** : `title`, `description?`, `children`, `defaultExpanded?`, `badge?`.
- **Tokens** : ✅ majorité tokenisée (`--neutral-800/700/white/50`, `--border-default`, `--text-strong/body/subtle`, `--surface-branded-subtle`, `--text-branded-strong`, `--icon-default`).
- **Binding BDD** : aucun — composant structurel.
- **Format de contenu** : n/a (wrapper)
- **Tag score** : n/a
- **Interactions** : toggle expand/collapse (state local).
- **Décisions** :
  1. Ajouter une prop `completionPercentage?: number` pour afficher un mini CompletionGauge inline dans le header (UX pratique dans le parcours édition profil).
  2. Accessibilité `aria-expanded` / `aria-controls` (absents aujourd'hui).
- **Status** : 🟡 enrichissement mineur + a11y.

#### LogEntry (molecule)
- **Fichier** : app/components/molecules/LogEntry.tsx
- **Rôle** : une ligne de log (date, heure, auteur, catégorie Badge, description). Utilisée dans Sheet Activité (timeline).
- **Parcours** : Sheet Activité (accessible depuis FIC, FIB, AFF), LogHistory organism.
- **Props** : `date`, `time`, `author`, `category`, `description`.
- **Composition** : texte + `<Badge variant="default">`.
- **Tokens** : ⚠️ utilise `--neutral-200` / `--neutral-500` en direct au lieu d'alias sémantiques (`--text-body`, `--text-subtle`, `--text-caption`). Typo Roboto + dimensions px hardcodées.
- **Binding BDD** : table `activity_log(id, entity_type, entity_id, author_id, category, description, occurred_at)` (polymorphique). À confirmer nommage exact côté Supabase.
- **Format de contenu** : `list`
- **Tag score** : indirect — le **volume de logs** peut alimenter ENG (proxy activité agent). À discuter dans SCORING_ALGORITHMS.md.
- **Décisions** :
  1. Refactor couleurs vers alias sémantiques.
  2. Enrichir contrat : `authorId`, `entityType`, `entityId`, `categoryEnum` (au lieu de string libre) pour filtrage.
  3. Ajouter icône catégorie optionnelle (création/modification/suppression/message envoyé…) pour scan visuel.
- **Status** : 🟡 refacto tokens + enrichissement contrat.

### Organisms partagés

#### Sheet (organism) — fondation transverse
- **Fichier** : app/components/organisms/Sheet.tsx
- **Rôle** : **fondation transverse** de toutes les sheets P08/P09 et au-delà. Panneau latéral modal : backdrop, slide-in depuis la droite, ESC close, body scroll lock, header personnalisable, footer sticky.
- **Variantes** : `narrow` (420px — notifications, logs, sheets simples) · `wide` (1024px — formulaires riches, sélections multi-étapes).
- **Parcours** : Sheets Activité, Messagerie, Messagerie agrégée, Annonce, Visite, Promesse, Signature, Mandat, EditProfilClient, EditProfilBien, AiSuggestion presentation, AiSuggestion config, Tâche, RDV, Notifications, Automatisations (5 catégories).
- **Props** : `isOpen`, `onClose`, `title?`, `width?`, `children`, `footer?`, `showHeaderDivider?`, `closeIcon?`, `customHeader?`.
- **Tokens** : ✅ `--border-default`, `--neutral-800/white`, `--text-strong`, `--icon-default`, `--surface-hover`. ⚠️ overlay `rgba(0,0,0,0.4|0.6)` hardcodé → tokeniser en `--scrim-light`/`--scrim-dark`. Shadow hardcoded aussi.
- **Binding BDD** : aucun (structurel).
- **Format de contenu** : n/a
- **Tag score** : n/a
- **Interactions** : open/close, ESC, click backdrop, scroll lock.
- **Décisions STRUCTURELLES (bloquant Phase 5)** :
  1. 🔴 **Système de stack manquant**. Le flow IASuggestion exige d'enchaîner sheet présentation → sheet config → action avec retour arrière. Proposition : `SheetStackProvider` (contexte React) maintenant une pile et exposant `pushSheet(type, props)` / `popSheet()` / `closeAll()`. Chaque type de sheet est enregistré dans un registry `{ "ai-suggestion-presentation": AiSuggestionPresentationSheet, "messaging": MessagingSheet, ... }`. L'organism `Sheet` devient un renderer pur, le provider gère l'état et le routage.
  2. 🟡 **Deep-linking** : chaque sheet ouverte encodée dans l'URL (ex. `?sheet=messaging&client=xyz`) pour partage et navigation back browser.
  3. 🟡 **Responsive wide** : 1024px fixe pose problème sur écran < 1280px (NavRail 90px + 1024px → marge < 170px). Proposer `width: "narrow" | "wide" | "full"` ou largeur calculée `min(1024px, 100vw - 120px)`.
  4. Tokeniser scrim + shadow (`--scrim-*`, `--shadow-sheet`).
  5. **A11y** : ajouter `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, focus trap (absents aujourd'hui).
- **Status** : 🔴 architecture stack + a11y + tokens à reprendre avant Phase 5.

---

## Phase 1 — Décisions verrouillées (user-validées)

### Responsive Sheet (validé)
- Mobile (<768px) : bottom-sheet 100% largeur, slide-in depuis le bas, snap points 50/90/full.
- 768–1279px : narrow=420 · wide=calc(100vw − 90px NavRail − 48px marge).
- 1280–1599px : narrow=420 · wide=960px.
- ≥1600px : narrow=420 · wide=1024px.
- ⚠️ **À vérifier** : Sheet Annonce en 960px (config fréquente ordi entreprise) — risque confort. Sheet Messagerie OK a priori.

### Badge — mapping tokens définitif

| Variante | Mode | Surface | Border | Text |
|---|---|---|---|---|
| default | light | `--neutral-white` | `--border-neutral-default` | `--text-caption` |
| default | dark  | `--neutral-800` | `--neutral-200` | `--neutral-100` |
| disabled | light | `--neutral-disabled` | `--neutral-disabled` | `--neutral-disabled` |
| disabled | dark  | `--neutral-700` | `--neutral-500` | `--neutral-500` |
| information | light | `--surface-information` | `--border-information` | `--information-500` |
| information | dark  | `--information-700` | `--information-600` | `--information-100` |
| success | light | `--surface-success` | `--border-success` | `--success-500` |
| success | dark  | `--success-700` | `--success-600` | `--success-100` |
| warning | light | `--surface-warning` | `--border-warning` | `--warning-500` |
| warning | dark  | `--warning-700` | `--warning-600` | `--warning-100` |
| error | light | `--surface-error` | `--border-error` | `--error-500` |
| error | dark  | `--error-700` | `--error-600` | `--error-100` |

Radius md (16), border 1px. Supprimer `useTheme()` + `BADGE_COLORS`.

### ChipTrend — 🔴 SUPPRIMÉ
Retiré du DS. Supprimer `ChipTrend.tsx` + imports.

### AiSuggestion — mapping tokens définitif

| État | Mode | Surface | Border | Text |
|---|---|---|---|---|
| count=0 | light | none | `--border-disabled` | `--text-disabled` |
| count=0 | dark  | none | `--neutral-500` | `--neutral-500` |
| count>0 | light | `--branded-500` | `--branded-600` | `--text-branded-on-action` |
| count>0 | dark  | `--branded-500` | `--branded-400` | `--neutral-800` |

### LogEntry — refacto tokens
`--text-caption` pour date/heure, `--text-body` pour auteur et description. Supprimer `useTheme()` + ternaires.

### Nouveaux tokens à créer
`--scrim-light` (rgba 0,0,0,0.4), `--scrim-dark` (rgba 0,0,0,0.6), `--shadow-sheet`.

### Architecture Logs — pyramide à 4 tables
```
Niveau 1 : public."Event"         (RDV, signature, appel, tâche…)
Niveau 2 : public."Automation"    (campagne, message programmé, doc…)
Niveau 3 : public.activity_log    (tout ce qui est tracké, source unique LogEntry)
            + trigger depuis Event et Automation
```
Règle : chaque INSERT Event/Automation déclenche un INSERT activity_log (trigger SQL ou Edge Function). `activity_log` = source unique lue par LogEntry/LogHistory et par les RPC de scoring ENG.

### Scoring Réactivation
`reac = 0.5·ΔENG + 0.3·ΔCONV + 0.2·ΔQUAL` avec déclencheur temporel (seulement si `now() - last_activity > N jours`, N à caler en Phase 2).

### Thresholds 25/60
Provisoires. À réajuster métier par métier et par étape de cycle de vie lors de la session scoring Phase 2.

---

## Phase 1 — Diff refacto & migrations Supabase (synthèse intermédiaire)

### Refactors code à appliquer en fin de Phase 1
1. **Suppression** : `ChipScore.tsx`, `ChipScoreAuto`, `getScoreLevel`, imports dans CardItemClient/Bien/ListItem*.
2. **Tokenisation** :
   - `Badge.tsx` → remplacer palettes hex par `--surface-{variant}-subtle`, `--border-{variant}`, `--text-{variant}-strong`.
   - `ChipTrend.tsx` → `--icon-success` / `--icon-error` / `--icon-neutral-default` / `--text-body` / `--text-disabled`.
   - `AiSuggestion.tsx` → `--text-disabled` / `--border-disabled` / `--brand-500` / `--brand-600` / `--text-on-brand`.
   - `Sheet.tsx` → `--scrim-light` / `--scrim-dark` / `--shadow-sheet`.
   - `LogEntry.tsx` → alias sémantiques (`--text-body`, `--text-subtle`).
3. **Nouveaux tokens à créer** (layer alias) : `--scrim-light`, `--scrim-dark`, `--shadow-sheet`.
4. **Nouveaux fichiers utilitaires** :
   - `lib/scoring/thresholds.ts` (constantes error/warning/success + helpers)
   - `lib/ui/statusBadge.ts` (mapper `statusToBadge(domain, value) → {variant, label}`)
   - `lib/sheet/SheetStackProvider.tsx` + `sheetRegistry.ts`
5. **Enrichissements contrats** : CollapsibleSection (`completionPercentage`, a11y), LogEntry (`authorId`, `entityType`, `entityId`, `categoryEnum`, icône).

### Migrations Supabase à préparer (appliquées fin Phase 1)
```
-- Migration 1 : score_snapshot
create schema if not exists analytics;
create table if not exists analytics.score_snapshot (
  id           bigserial primary key,
  entity_type  text not null check (entity_type in ('client','property','deal')),
  entity_id    text not null,
  score_type   text not null check (score_type in ('qualification','engagement','conversion','reactivation','entretien')),
  value        numeric(5,2) not null,
  captured_at  timestamptz not null default now()
);
create index on analytics.score_snapshot (entity_type, entity_id, score_type, captured_at desc);

-- Migration 1bis : scoring_config (ajustable runtime, versionné) — AJOUT
create table if not exists public.scoring_config (
  id              uuid primary key default gen_random_uuid(),
  version         text not null,
  is_active       boolean not null default false,
  domain          text not null check (domain in ('client','property','deal')),
  metric          text not null check (metric in ('qualification','engagement','conversion','reactivation','entretien')),
  lifecycle_stage text,
  params          jsonb not null,
  created_by      text,
  created_at      timestamptz not null default now(),
  activated_at    timestamptz
);
create unique index on public.scoring_config (domain, metric, lifecycle_stage, version);
create index on public.scoring_config (domain, metric, lifecycle_stage) where is_active = true;
alter table analytics.score_snapshot add column if not exists config_version text;

-- Migration 2 : automation_suggestion
create table if not exists public.automation_suggestion (
  id           uuid primary key default gen_random_uuid(),
  agent_id     text not null references public."Agent"(id) on delete cascade,
  entity_type  text not null check (entity_type in ('client','property','deal')),
  entity_id    text not null,
  template_id  text not null,
  status       text not null default 'active' check (status in ('active','dismissed','activated','expired')),
  payload      jsonb,
  created_at   timestamptz not null default now(),
  dismissed_at timestamptz,
  activated_at timestamptz
);
create index on public.automation_suggestion (agent_id, entity_type, entity_id, status);

-- Migration 3 : RPC scoring (squelette, formules à remplir en Phase 2)
create or replace function public.get_client_kpi(p_client_id text, p_metric text)
returns numeric language plpgsql stable security definer as $$
declare v numeric;
begin
  -- TODO Phase 2 : implémenter selon SCORING_ALGORITHMS.md
  return 0;
end; $$;

create or replace function public.get_property_kpi(p_property_id text, p_metric text)
returns numeric language plpgsql stable security definer as $$
declare v numeric;
begin
  -- TODO Phase 3 : implémenter selon SCORING_ALGORITHMS.md
  return 0;
end; $$;

create or replace function public.count_active_suggestions(p_entity_type text, p_entity_id text)
returns int language sql stable security definer as $$
  select count(*)::int from public.automation_suggestion
  where entity_type = p_entity_type and entity_id = p_entity_id and status = 'active';
$$;

-- RLS à ajouter après validation du modèle
```

---

## Phase 2 — Domaine Client

### 2.1 → 2.3 · Algorithmes de scoring Client — FINALISÉS ✅
Voir `SCORING_ALGORITHMS.md` pour détails complets :
- **QUAL Client** : matrice weighted_completion sur 42 champs, pondérations par statut, thresholds par stage
- **ENG Client** : fenêtres adaptatives par stage × coefficient captivité statut, héritages converted/cycle_reset, 15 signaux pondérés
- **CONV Client** : max(CONV_deal) sur 5 types de mandats avec matrices milestones, bonus carnet +10
- **REAC Client** : `0.5·ΔENG + 0.3·ΔCONV + 0.2·ΔQUAL` vs snapshot J-30 (trigger `now() - last_activity > 90j`)

### 2.4 · Audit organismes & composants Client

#### Inventaire et décisions

| Fichier actuel | Classif. actuelle | Action | Cible |
|---|---|---|---|
| `atoms/KpiIndicator.tsx` | atom ✅ | **Évolution** : prop `kpi: 'qual'\|'eng'\|'conv'\|'reac'` mappant icône Lucide | atom unifié réutilisable Client + Bien + Affaire |
| `atoms/MessageStatus.tsx` | atom | **Conserver** · scope restreint | Messages uniquement (fiches + Sheet Messagerie AppBar) |
| `organisms/ListQualification.tsx` | organism | 🗑️ **Supprimer** | Remplacé par `KpiIndicator kpi="qual"` |
| `organisms/ListEngagement.tsx` | organism | 🗑️ **Supprimer** | Remplacé par `KpiIndicator kpi="eng"` |
| `organisms/ListConversion.tsx` | organism | 🗑️ **Supprimer** | Remplacé par `KpiIndicator kpi="conv"` |
| `organisms/ListReactivation.tsx` | organism | 🗑️ **Supprimer** | Remplacé par `KpiIndicator kpi="reac"` |
| `organisms/ListClientName.tsx` | organism | **Refactor** : tokens, dimensions, props badges | molecule `ListClientName` |
| `molecules/CardItemClient.tsx` | molecule | **Rename + Refactor** | `components/CardClient.tsx` |
| `molecules/ListItemClient.tsx` | molecule | **Rename + Refactor + Responsive** | `components/ListClient.tsx` |
| `molecules/SheetClientDetails.tsx` | molecule | **Refactor** : tokens, binding data, breakdown aligné algos | `components/SheetClientDetails.tsx` |
| `organisms/AppBarFicheClient.tsx` | organism ✅ | **Refactor** : icônes → tokens, utiliser `KpiIndicator`, utiliser atom `AiSuggestion` | organism |
| `organisms/AppBarClientAncres.tsx` | organism ✅ | **Micro-refactor** : `VerticalDivider`, état active section | organism |

#### Composants à créer (nouveaux)

| Composant | Type | Description | Priorité |
|---|---|---|---|
| `HorizontalDivider` | atom | Pendant de `VerticalDivider` · longueur paramétrable · même tokens | 🟡 Moyenne |
| `ViewModeDropdown` | atom/molecule | Dropdown de sélection mode d'affichage (list/grid) · extensible | 🟡 Moyenne |
| `SheetEditProfilClient` | component | Édition segmentée par accordéons : identité, contact, pro, préférences, RGPD, passé transactionnel · ouvre via `SheetStackProvider` · trigger recalcul QUAL via RPC au save | 🔴 Haute |
| `SheetBienDetails` | component | Équivalent `SheetClientDetails` pour le domaine Bien · 3 KPIs (Qualif/Entretien/Conv) · header map + métadonnées Bien | 🔴 Haute (Phase 3) |

#### Décisions transverses Phase 2.4

**Atomic design & nommage**
- `Card*` et `List*` (ex-`CardItem*`, `ListItem*`) sont classés en **`components/`** hors hiérarchie atomique car ils composent atoms + molecules + organisms.
- Nommage simplifié : `CardClient`, `ListClient`, `CardBien`, `ListBien`.

**Grilles KPI par domaine**
- Client (4 KPIs) : `CardClient` en **2×2** · `ListClient` en 4 blocs horizontaux · `AppBarFicheClient` en ligne straight
- Bien (3 KPIs) : `CardBien` en **3×1** · `ListBien` en 3 blocs horizontaux · `AppBarFicheBien` en ligne straight
- L'atom `KpiIndicator` reste identique, seul le parent gère la disposition.

**Responsive ListClient / ListBien**
- Desktop : toggle List/Grid via `ViewModeDropdown` (default = List) · Mobile : forcé en Grid de Cards
- Même logique pour List Bien et List Affaire

**Tokens (zéro hardcode)**
Migration stricte vers tokens CSS. Mapping validé :
- Light mode : icon+text = `neutral/500` · échelons éteints = `neutral/100` · échelons allumés = `error/500` · `warning/500` · `success/500`
- Dark mode : icon+text = `neutral/200` · échelons éteints = `neutral/600` · échelons allumés = `error/600` · `warning/600` · `success/600`
- `KpiIndicator` actuel utilise déjà les tokens CSS correctement ✅
- Les hardcodes hex (`#D0D1D4`, `#444955`, `#22252B`, `#111215`, `#ECEDEE`, `#FFFFFF`, `#DADBDD`, `#333740`, `#C7C8CB`) sont concentrés dans `CardItemClient`, `ListItemClient`, `SheetClientDetails`, `ListClientName` et l'`iconColor` de l'AppBar — à migrer.

**Dimensions fixes**
- `ListItemClient` : largeur `1191px` et hauteur `120px` → **à remplacer** par layout flex responsive (100% desktop, breakpoints mobile → Grid)
- `CardItemClient` : largeur `350px` → **à remplacer** par layout grid responsive
- Dimensions colonnes (`425px`, `73.8px`, `77px`, `78px`, `86px`) → tokens de spacing

**Badges de section**
- Pas de `count` sur les ancres `AppBarClientAncres`
- En revanche, **chaque titre de section** dans le corps de la fiche affiche un `Badge` (atom existant) contenant le count des items de la section
- Variant `count` éventuel à ajouter à l'atom `Badge` si besoin visuel

**AiSuggestion**
- Atom `AiSuggestion` existant utilisé partout : `CardClient`, `ListClient`, `SheetClientDetails` (à côté de chaque KPI), `AppBarFicheClient` (au bout de la barre)
- Pas d'atom custom pour le badge IA de l'AppBar — factoriser sur l'atom existant
- Binding via `automation_suggestion` avec `related_kpi` filtré par KPI dans `SheetClientDetails`

**Trends ΔJ-7**
- **Pas d'affichage en UI** (décision D7)
- Table `analytics.score_snapshot` conservée pour :
  - Calcul REAC interne (`0.5·ΔENG + 0.3·ΔCONV + 0.2·ΔQUAL` vs J-30)
  - Historique debug/admin
  - Future phase si réintroduction

**Interaction Sheet*Details**
- Ouverture **depuis la page List** (clic sur ligne/card)
- Footer : boutons `Voir la fiche` + `Voir les actions`
- Depuis la Fiche elle-même : **ouverture non prévue en MVP** · réflexion en cours pour surface-ing léger du breakdown KPI dans la Fiche sans surcharger

**Breakdown REAC dans SheetClientDetails**
- Breakdown actuel Figma (`Dernière activité / Réceptivité / Engagement / Intentionalité`) **ne correspond pas exactement** à notre algo finalisé (`ΔENG / ΔCONV / ΔQUAL`)
- ⚠️ Point ouvert : faire évoluer le design pour s'aligner sur les algos définis ensemble (confirmation user)

**SheetEditProfilClient**
- Composant à créer from scratch
- Segmentation en accordéons par sous-sections de la matrice QUAL : identité, contact, pro, préférences, RGPD, passé transactionnel (`client_past_transaction`)
- Affichage conditionnel des champs selon `lifecycle_stage` et multi-statut (owner/buyer/landlord/tenant)
- Trigger recalcul QUAL via RPC au save
- Pattern `SheetStackProvider`

**Hooks data à créer (Phase 5 brief)**
- `useClientScore(clientId)` → RPC `get_client_scores` → `{qual, eng, conv, reac, breakdowns, suggestions}`
- `useClientList(filters, mode)` → liste paginée
- `useClientDetails(clientId)` → fiche complète
- `useClientAiSuggestions(clientId, kpi?)` → `automation_suggestion` filtré

#### Constats à remonter en Phase 5

1. `ListItemClient` largeur fixe 1191px → bloqueur responsive majeur
2. Props mortes `statusLevels`/`engagementLevels`/`days`/`daysActive` à supprimer partout
3. 4 fichiers `List*.tsx` organisms redondants à supprimer
4. SVG dividers inline dupliqués dans `CardItemClient` → utiliser `HorizontalDivider`
5. Logique `hover/forceHover` dupliquée entre `CardItemClient` et `ListItemClient` → extraire en hook `useHoverState`
6. Breakdown REAC à aligner sur l'algorithme défini

### 2.5 · Gabarits Pages Client + SheetEditProfilClient

#### FIC_01_Page_List_Client.tsx (324 lignes)

- **Structure** : AppBarCategory → GraphCourbe → Filter bar + DropdownButton viewMode → List/Grid conditionnel → Pagination → Sheet SheetClientDetails
- **viewMode** : `"list"` (défaut desktop) | `"cards"` (défaut + forcé mobile) — via DropdownButton existant
- **Sheet footer** : "Voir la fiche" + "Voir les actions"
- **Mock** : 25 clients, valeurs uniformes
- **Constats** :
  - C1 : Largeur fixe 1191px → responsive à refaire (même breakpoints que composants)
  - C2 : Hex hardcodes (`#1C1D22`, `#F4F4F5`, etc.) → migrer tokens
  - C3 : GraphCourbe conservé, session dédiée prévue (dropdown : évolution Qual/Eng/Conv)
  - C4 : Pagination OK en structure, à brancher sur `useClientList(filters, page)`

#### FIC_01_PageFicheClient.tsx (856 lignes)

- **Structure** : sticky AppBarFicheClient → GraphCourbe → sticky AppBarClientAncres (top:100) → 7 sections avec Badge count
- **Sections** :
  1. **Profil** — 3 cols (identité/contact/pro) + OrganismeIaSuggestion + bouton "Éditer" → ouvre SheetEditProfilClient
  2. **Activités** — Badge 17 + 4 chip filters + LogHistory + "Voir tout" → ouvre Sheet Activité
  3. **Affaires** — ListItemAffaire (en cours de retravail parcours AFF, intégrera milestones CONV)
  4. **Biens** — ListItemBien (3 KPIs : qualification/entretien/conversion ✅)
  5. **Carnet** — ListCarnet
  6. **Documents** — Button list (label=titre doc, icône alerte si expiration/conformité) + Upload + OrganismeIaSuggestion. Clic → Sheet Wide (type, dates, statut, preview PDF, envoi, édition)
  7. **Messages** — OrganismeMessageRecu
- **Sheets intégrées** :
  - SheetEditProfilClient (wide) — bouton "Éditer" section Profil
  - Sheet Activité (wide) — LogHistory complet
  - Sheet AddDocument — FileUpload
  - Sheet Messagerie (wide) — AppBarDetail + KpiIndicator straight + AppBarEventQuinte 5 dots + ChipDate 150j
- **Constats** :
  - C5 : DEAD IMPORT `ChipScoreAuto` → supprimer
  - C6 : Raw Figma imports (`OrganismeMessageRecu`, `OrganismeIaSuggestion`) depuis `../../../imports/` → migrer DS
  - C7 : maxWidth 1216px ≠ List Client 1191px → harmoniser selon breakpoints responsive définis
  - C8 : AppBarFicheClient hardcoded props (qual=64, eng=82, conv=24, reac=49) → `useClientScore`
  - C9 : Section Profil insuffisante pour 42 champs → refonte sous-sections dépliables/repliables ("voir tout")

#### Décisions validées Q1–Q6

| # | Question | Décision |
|---|----------|----------|
| Q1 | GraphCourbe | Conservé, session dédiée ultérieure (dropdown évolution Qual/Eng/Conv) |
| Q2 | AppBarClientAncres état actif scroll | Non prévu, pas d'enjeu (ancres simples) |
| Q3 | Responsive pages | Mêmes breakpoints que composants (mobile/768-1279/1280-1599/≥1600) |
| Q4 | 42 champs QUAL | Point détaillé fait ci-dessous, décision : refonte complète |
| Q5 | ListAffaire | En cours de retravail parcours AFF, intégrera milestones CONV |
| Q6 | Documents section | Minimaliste : Button par doc (label=titre, icône alerte expiration). Clic → Sheet Wide (type, dates, statut, preview, envoi, édition) |

#### Matrice 42 champs QUAL Client — Blocs validés

**33 champs éditables** répartis en 7 blocs :

| Bloc | Nom | Champs | Conditionnel statut | Défaut |
|------|-----|--------|---------------------|--------|
| A | Identité | 9 (gender, first_name, last_name, DOB, place_birth, nationality, marital_status, client_status[], is_active) | Non | **Déplié** |
| B | Contact | 5 (address, mobile_phone, primary_email, secondary_email, preferred_channel) | Non | **Déplié** |
| C | Professionnel | 4 (job_title, income_bracket ENUM, employer, siren conditionnel) | Non | Replié |
| D | Documents KYC | 5 (cni_url, cni_expiry, passport_url, passport_expiry, kbis_url conditionnel) | Non (kbis si siren) | Replié |
| E | Patrimoine (Propriétaire/Bailleur) | 4 (total_owned, for_sale_count, under_mgmt_count, title_deed_url) | ✅ status ∈ {propriétaire, bailleur} | Replié |
| F | Financement & Recherche (Acquéreur/Locataire) | 5 (pay_slip_url, tax_statement_url, loan_offer_url, financing_expiry, search_criteria_summary) | ✅ status ∈ {acquéreur, locataire} | Replié |
| G | Métadonnées | 2 (notes, source) | Non | Replié |

**6 champs non-éditables système** : client_id, organization_id, agent_id, qualification_score, reactivation_score, trigger_count + created_at, updated_at.

#### Architecture SheetEditProfilClient — Décision finale

- **Type** : Sheet unique "wide"
- **Layout** : 7 accordéons (A→G)
- **Défaut** : Blocs A + B dépliés, C→G repliés
- **Conditionnalité** : Blocs E/F apparaissent dynamiquement selon `client_status[]` (Bloc A)
- **Indicateur complétion** : Chaque accordéon replié affiche "Bloc · n/m" (ex: "Professionnel · 2/4")
- **Footer** : Bouton Enregistrer + delta QUAL temps réel ("Qualification passera de 34% à 72%")
- **Technique** : Un seul `useForm` + validation globale + un seul `upsert` Supabase
- **Remplacement** : SheetEditProfilClient actuel (9 champs, 3 sous-sections, 325 lignes) → refonte complète

#### Impact sur section Profil (FIC_01_PageFicheClient)

- Les 3 colonnes actuelles (identité/contact/pro) deviennent des sous-sections dépliables/repliables ("voir tout")
- Blocs E/F affichés conditionnellement sous les 3 blocs principaux
- Bloc D (KYC) visible aussi dans section Documents (doublon contrôlé)
- Chaque sous-section affiche un aperçu condensé (3-4 champs clés) avec "voir tout" pour déplier le reste

## Phase 3 — Domaine Bien

### 3.1 · Inventaire composants Bien

| Composant | Fichier Figma | Lignes | Classif. actuelle | Classif. cible |
|---|---|---|---|---|
| ImageBien | atoms/ImageBien.tsx | 34 | atom ✅ | atom ✅ |
| SectionListBien | organisms/SectionListBien.tsx | 124 | organism | molecule (Badge+Chip+Image = atomes) |
| CardItemBien | molecules/CardItemBien.tsx | 257 | molecule | `components/CardBien` |
| ListItemBien | molecules/ListItemBien.tsx | 184 | molecule | `components/ListBien` |
| SheetBienDetails | molecules/SheetBienDetails.tsx | 221 | molecule ✅ | molecule ✅ |
| AppBarFicheBien | organisms/AppBarFicheBien.tsx | 145 | organism ✅ | organism ✅ |
| AppBarBienAncres | organisms/AppBarBienAncres.tsx | 149 | organism ✅ | organism ✅ |
| FIB_01_PageFicheBien | pages/FIB_01_PageFicheBien.tsx | 2378 | page | page |
| FIB_01_Page_List_Bien | pages/.../FIB_01_Page_List_Bien.tsx | 328 | page | page |

#### Constats composants

- **C1** : CardItemBien et ListItemBien → mêmes problèmes que Client : imports organisms (ListQualif/ListEntretien/ListConv), hex hardcodes, largeurs fixes (350px/1191px), SVG dividers inline. Résolution identique : KpiIndicator unifié + tokens + responsive.
- **C2** : Bien a 3 KPIs (Qualification, Entretien, Conversion) vs 4 pour Client. Pas d'Engagement ni de Réactivation pour le bien. `ListEntretien` est un organism spécifique Bien qui sera remplacé par KpiIndicator avec `kpi: 'ent'`.
- **C3** : SheetBienDetails — prop `engagement` nommée alors que KPI Bien = `entretien` → incohérence naming à corriger. Breakdowns hardcodés. Même pattern SectionCard que SheetClientDetails.
- **C4** : AppBarFicheBien — un seul KPI affiché (Qualification straight). Badge IA inline → atom AiSuggestion. `iconColor` hardcodé.
- **C5** : AppBarBienAncres — 8 ancres (galerie, caractéristiques, activités, affaires, annonce, carnet, documents, messages). Bien tokenisé. Inline divider → VerticalDivider. Pas d'état actif (même décision que Client).
- **C6** : SectionListBien — reclassifier en molecule. Largeur fixe 622px → responsive. Hex hardcodes `iconColor`.

#### Constats pages

- **C7** : FIB_01_PageFicheBien (2378 lignes) — page la plus massive du projet. Structure : AppBarFicheBien sticky → GraphCourbe → AppBarBienAncres sticky(top:100) → Galerie (GalleryFicheBien raw import) → AppBarAnnonce → Caractéristiques (10 sous-sections, 7 masquées via "Voir tous les détails") → Activités (Badge 12 + 4 chip filters + LogHistory + "Voir tout") → Affaires (ListItemAffaire) → Annonce (ListAnnonce) → Carnet (ListCarnet) → Documents (Button list + Upload) → **Acquéreurs appétents** (section unique Bien : 5 ListItemClient matchés) → Messages (OrganismeMessageRecu raw import). 5 Sheets (AddDocument, Activité, Messagerie, Galerie, Annonce). Dead import `ChipScoreAuto`. maxWidth 1216px.
- **C8** : Section Caractéristiques — pattern "voir tous les détails" = déplié/replié, identique au pattern Profil Client. Badge "88%" en tête = QUAL Bien.
- **C9** : Section Acquéreurs appétents — section spécifique Fiche Bien. Affiche ListItemClient avec 4 KPIs Client. Nécessite hook `usePropertyMatchingClients(propertyId)`.
- **C10** : FIB_01_Page_List_Bien (328 lignes) — structure quasi-identique à FIC_01_Page_List_Client. viewMode list/cards, 25 biens mock, Sheet SheetBienDetails, même largeur fixe 1191px, mêmes hex hardcodes.

### 3.2 · Algorithmes KPI Bien (finalisés)

Persistés dans `SCORING_ALGORITHMS.md`. Résumé :

| KPI | Formule | Spécificité |
|---|---|---|
| **QUAL Bien** | Complétion pondérée ~55 champs, conditionnalité par `property_type` (copro si appart, terrain si maison) | Seuils par `property_status` (off market indulgent, à vendre exigeant) |
| **Entretien** | 6 composantes pondérées : carnet(25), fraîcheur(20), DPE(18), diagnostics_auto(15), doc_complets(12), suivi_financier(10) | Diagnostics auto = questionnaires app client (plomberie, élec, isolation…). Nouvelle table `property_diagnostic_questionnaire`. |
| **CONV Bien** | `max(CONV_deal_i)` — mêmes matrices milestones que CONV Client, vu depuis le bien | Pas de bonus carnet (déjà dans ENT). Seuils par étape deal. |

### 3.3 · Hooks data Bien

- `usePropertyScore(propertyId)` → RPC `get_property_scores` → `{qual, entretien, conv, breakdowns}`
- `usePropertyList(filters, mode)` → liste paginée
- `usePropertyDetails(propertyId)` → fiche complète
- `usePropertyMatchingClients(propertyId)` → acquéreurs appétents (section unique Fiche Bien)
- `usePropertyDiagnostics(propertyId)` → questionnaires auto-évaluation
- `usePropertyAiSuggestions(propertyId, kpi?)` → `automation_suggestion` filtré

### 3.4 · Constats à remonter en Phase 5

1. `ListItemBien` largeur fixe 1191px → bloqueur responsive
2. `CardItemBien` largeur fixe 350px → bloqueur responsive
3. `SectionListBien` largeur fixe 622px → responsive
4. SheetBienDetails prop `engagement` → renommer `entretien`
5. Dead import `ChipScoreAuto` dans FIB_01_PageFicheBien
6. Raw Figma imports (GalleryFicheBien, OrganismeMessageRecu, EchelleDpe, EchelleGes) → migrer DS
7. Section Caractéristiques 100% hardcodée (données inline) → `usePropertyDetails` binding
8. maxWidth 1216px → harmoniser avec breakpoints responsive

## Phase 4 — Listes transactionnelles

### 4.1 · Inventaire composants

#### Composant complexe (multi-sections, h=120px)

| Composant | Fichier | Lignes | Sections | Largeur | Statut |
|---|---|---|---|---|---|
| **ListItemAffaire** | molecules/ListItemAffaire.tsx | 207 | SectionListAffaire(333) + SectionListDossier(220) + SectionListPromotion(220) + SectionListClosing(220) + ListSuggestions(86) | 1199px fixe | **En cours de retravail P10-AFF** → simplification KpiIndicators macro, moins d'infos |

#### Sous-composants SectionList (7 organisms → reclassifier molecules)

| Composant | Fichier | Lignes | Rôle |
|---|---|---|---|
| SectionListAffaire | organisms/SectionListAffaire.tsx | 103 | Badge type + ID + Chips bien |
| SectionListDossier | organisms/SectionListDossier.tsx | 92 | 3 icônes check (messages, documents, photos) |
| SectionListPromotion | organisms/SectionListPromotion.tsx | 85 | Compteurs envois/visites/favoris |
| SectionListClosing | organisms/SectionListClosing.tsx | 94 | 3 icônes check (doc signé, paiement, juridique) |
| SectionListTransaction | organisms/SectionListTransaction.tsx | 97 | Compteur offres + prix validé + factures |
| SectionListType | organisms/SectionListType.tsx | 82 | Type bien + surface + DPE |
| SectionListEntretien | organisms/SectionListEntretien.tsx | 85 | Statut création + database + paramétrage jours |

#### Composants légers (ligne simple, h=70px, pattern StatusProgressRow)

| Composant | Fichier | Lignes | Info gauche | Badges workflow | Bouton action |
|---|---|---|---|---|---|
| **ListMandat** | molecules/ListMandat.tsx | 96 | Référence mandat | ÉDITION · RÉVISION · SIGNATURE | "Voir le mandat" |
| **ListPromesse** | molecules/ListPromesse.tsx | 98 | Icon User + nom client | REÇUE · TRANSMISE · ACCORD | "Voir la promesse" |
| **ListVisite** | molecules/ListVisite.tsx | 119 | Icon User + agent + Calendar + date | CALENDRIER · ODJ · CR | "Voir le rendez-vous" |
| **ListAnnonce** | molecules/ListAnnonce.tsx | 152 | 5 Chips (loc, type, surface, DPE, proprio) | ÉDITION · RÉVISION · PUBLICATION | "Voir" |
| **ListCarnet** | molecules/ListCarnet.tsx | 136 | 5 Chips (loc, type, surface, DPE, proprio) | Badge statut + Chip date | — |
| **ListActeNotarie** | molecules/ListActeNotarie.tsx | 47 | (délégué ActeNotarieItem) | PROGRAMMÉ · EN_ATTENTE · SIGNÉ | "Voir les notes" |
| **ListFinance** | molecules/ListFinance.tsx | 44 | (délégué FinanceItem) | INCOMPLET · COMPLET · EN_ATTENTE | "Voir les notes" |

#### Composants auxiliaires

| Composant | Fichier | Rôle |
|---|---|---|
| **CardCA** | molecules/CardCA.tsx (97 lignes) | Card chiffre d'affaires affaire (CA, coûts, marge brute, taux marge) |
| **ActeNotarieItem** | molecules/ActeNotarieItem.tsx | Sous-composant ligne acte notarié |
| **FinanceItem** | molecules/FinanceItem.tsx | Sous-composant ligne finance |

### 4.2 · Page Fiche Affaire

**AFF_01_PageFicheAffaire.tsx** (2240 lignes) — version mandat de vente uniquement.

**Structure** : AppBarDetail sticky (ref mandat + Badge VENTE + Chips bien) → GraphCourbe → AppBarAffaireAncres sticky(top:100) → 10 sections :

1. **Mandat** — ListMandat (badges ÉDITION/RÉVISION/SIGNATURE)
2. **Activités** — Badge count + 3 chip filters + LogHistory + "Voir tout"
3. **Annonce** — ListAnnonce (badges workflow éditorial)
4. **Leads** — Badge 24 + 3 chip filters (Tous/Entrants/Qualifiés) + ListItemClient ×3
5. **Visites** — ListVisite ×2
6. **Promesse** — ListPromesse ×1
7. **Finance** — ListFinance ×2
8. **Notaire** — ListActeNotarie ×1
9. **CA** — CardCA (chiffre d'affaires, coûts, marge brute, taux marge)
10. **Messages** — OrganismeMessageRecu (raw import)

**Sheets intégrées** : Mandat detail, Activité, Messagerie, Annonce, Galerie, Visite, Promesse (7 sheets).

### 4.3 · Constats Phase 4

**C1 — Pattern commun "StatusProgressRow".** 6 listes légères partagent le même pattern (info gauche + badges workflow + bouton + AiSuggestion). Décision : on garde les 6 composants séparés, on harmonise le pattern manuellement (même structure flex, même gap, même hauteur, même border/bg tokens).

**C2 — Responsive.** Pas de largeur fixe en desktop (width: 100%, max-width via parent). En mobile : version card empilée (info haut, badges milieu, bouton bas). Implique création de variants card pour chaque List ou un wrapper responsive commun.

**C3 — ListItemAffaire.** Largeur fixe 1199px (≠ 1191px Client/Bien → incohérence). Confirmé : sera simplifié en P10-AFF avec KpiIndicators macro et moins d'infos, même logique que ListClient/ListBien. Les 5 sections actuelles (Affaire/Dossier/Promotion/Closing/Suggestions) seront remplacées par un pattern plus léger. **Documenté tel quel, marqué "à refondre P10-AFF".**

**C4 — SectionList organisms (×7).** Tous classés organism mais ne contiennent que Badge + Chip + icônes = atoms. Reclassifier en molecules. Largeurs fixes (333px, 220px) → responsive. Tous ont `iconColor` hardcodé. Certains pourraient disparaître avec la simplification ListItemAffaire en P10-AFF.

**C5 — Badges workflow = milestones CONV.** Mapping direct entre badges et `deal_milestone_event` :

| Composant | Badges | Milestones deal_milestone_event |
|---|---|---|
| ListMandat | ÉDITION → RÉVISION → SIGNATURE | mandat_drafted → mandat_reviewed → mandat_signed |
| ListPromesse | REÇUE → TRANSMISE → ACCORD | promesse_received → promesse_transmitted → promesse_agreed |
| ListVisite | CALENDRIER → ODJ → CR | visite_scheduled → visite_agenda_set → visite_report_done |
| ListActeNotarie | PROGRAMMÉ → EN_ATTENTE → SIGNÉ | acte_scheduled → acte_pending → acte_signed |
| ListAnnonce | ÉDITION → RÉVISION → PUBLICATION | annonce_drafted → annonce_reviewed → annonce_published |

Variant mapping : `disabled` = non atteint, `warning` = en cours/attention, `success` = atteint.

**C6 — Tokenisation.** Les 6 listes légères sont globalement bien tokenisées (var(--neutral-*), var(--text-body)). Seul résidu : `#ECEDEE` en border light dans ListMandat/ListPromesse/ListVisite → remplacer par `var(--neutral-50)`.

**C7 — CardCA.** Composant isolé, spécifique à Fiche Affaire. 97 lignes. À auditer en profondeur si besoin en Phase 5.

**C8 — Section Leads dans Fiche Affaire.** Affiche des ListItemClient avec 4 KPIs Client. Pattern identique à "Acquéreurs appétents" dans Fiche Bien. Hook : `useDealLeads(dealId)`.

**C9 — Fiche Affaire mono-type.** Actuellement version mandat de vente uniquement. Les versions location, gestion, bail, recherche sont à créer. Les sections seront adaptées par type (pas de section Annonce pour une gestion locative, par ex.).

**C10 — Raw imports Figma.** OrganismeMessageRecu, EchelleDpe, EchelleGes dans Fiche Affaire (même pattern que Fiche Bien) → migrer DS.

## Phase 5 — Consolidation transverse + Brief Claude Code

### 5.1 · Reclassifications atomiques

| Composant | Actuel | Cible | Action |
|---|---|---|---|
| ListQualification/Engagement/Conversion/Reactivation/Entretien (×5) | organisms | **SUPPRIMER** | → KpiIndicator unifié `kpi: 'qual'\|'eng'\|'conv'\|'reac'\|'ent'` |
| ListClientName | organism | molecule | Badge + Chip = atoms |
| SectionListBien | organism | molecule | Badge + Chip + ImageBien |
| SectionList* (×7) | organisms | molecules | Atoms uniquement |
| CardItemClient → `components/CardClient` | molecule | components/ | Contient organisms |
| ListItemClient → `components/ListClient` | molecule | components/ | Idem |
| CardItemBien → `components/CardBien` | molecule | components/ | Idem |
| ListItemBien → `components/ListBien` | molecule | components/ | Idem |
| ListItemAffaire → `components/ListAffaire` | molecule | components/ | À refondre P10-AFF |

### 5.2 · Dead code à supprimer

- `ChipScoreAuto` import → FicheClient, FicheBien, FicheAffaire
- Props mortes `statusLevels`, `engagementLevels`, `days`, `daysActive`
- 5 fichiers organisms List* KPI (remplacés par KpiIndicator)
- `ListScoring` organism → probablement mort

### 5.3 · Hex → tokens (mapping complet)

| Hex | Light | Dark |
|---|---|---|
| `#444955` | `var(--neutral-500)` | — |
| `#D0D1D4` | — | `var(--neutral-200)` |
| `#ECEDEE` | `var(--neutral-50)` | — |
| `#22252B` | — | `var(--neutral-700)` |
| `#111215` | — | `var(--neutral-800)` |
| `#333740` | — | `var(--neutral-600)` |
| `#C7C8CB` | `var(--neutral-200)` | — |
| `#1C1D22` | — | `var(--neutral-900)` |
| `#FFFFFF`/`white` | `var(--neutral-white)` | — |

### 5.4 · Responsive consolidé

- Supprimer toutes largeurs fixes (1191/1199/1216/350/622/333/220px)
- Breakpoints : mobile <768 · tablet 768-1279 · desktop 1280-1599 (max 960px) · large ≥1600 (max 1024px)
- maxWidth par conteneur parent, jamais par composant
- Desktop : toggle List/Grid (défaut List) · Mobile : forcé Card
- Listes légères : desktop horizontal · mobile card empilée
- Sheets : mobile bottom-sheet · 768-1279 calc · 1280-1599=960px · ≥1600=1024px

### 5.5 · Raw imports → DS

| Import | Cible |
|---|---|
| OrganismeMessageRecu | molecule `MessageReceived` (existe) |
| OrganismeMessageEnvoye | molecule `MessageSent` (existe) |
| OrganismeIaSuggestion | atom `AiSuggestion` (existe) |
| GalleryFicheBien | organism `Gallery` (à créer) |
| EchelleDpe | atom `DpeScale` (à créer) |
| EchelleGes | atom `GesScale` (à créer) |

### 5.6 · Composants à créer

| Composant | Type | Rôle |
|---|---|---|
| HorizontalDivider | atom | Remplace SVG dividers inline |
| ViewModeDropdown | molecule | Toggle List/Grid |
| DpeScale | atom | Échelle DPE visuelle |
| GesScale | atom | Échelle GES visuelle |
| Gallery | organism | Galerie photos bien |

### 5.7 · Migrations Supabase

**Tables à créer :**
- `deal_milestone_event` (deal_id FK, milestone ENUM, occurred_at, created_by, metadata jsonb)
- `client_past_transaction` (client_id FK, property_id, transaction_type, amount, loan_*, dates)
- `property_diagnostic_questionnaire` (property_id FK, topic ENUM×7, score, recommendation, answered_by, answers_json)

**Colonnes à ajouter :**
- `clients` : preferred_language, rgpd_consent_date, marketing_consent, lifecycle_stage
- `deal` : type, status, current_milestone
- `properties` : vérifier has_maintenance_log, maintenance_log_creation_date, last_maintenance_date, dpe_compliance_deadline

**scoring_config** : 7 lignes (client.qual/eng/conv/reac + property.qual/ent/conv)

**RPC** : `get_client_scores(uuid)`, `get_property_scores(uuid)`, `get_deal_milestone_progress(uuid)`
