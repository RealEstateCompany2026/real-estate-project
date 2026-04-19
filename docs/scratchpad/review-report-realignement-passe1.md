# Review Report — Réalignement Passe 1 (Types TS + Section A Caractéristiques)

**Date** : 2026-04-19
**Reviewer** : reviewer-agent
**Fichiers audités** :
- `apps/agent-app/src/types/property.ts`
- `apps/agent-app/src/components/properties/PropertyDetailView.tsx`

---

## Verdict : PASS

---

## Checklist détaillée

### 1. Types TS — property.ts

| # | Point de contrôle | Statut | Détail |
|---|---|---|---|
| 1.1 | `ViewType` ajouté après `DpeClass` | OK | Ligne 23 — valeurs `SUR_RUE, SUR_COUR, DEGAGEE, SUR_JARDIN, PANORAMIQUE` conformes aux enums Supabase |
| 1.2 | `PoolType` ajouté après `ViewType` | OK | Ligne 24 — valeurs `ENTERREE, SEMI_ENTERREE, HORS_SOL, AUCUNE` conformes |
| 1.3 | `neighborhoodName: string \| null` dans Property | OK | Ligne 65 — dans le bloc Adresse, après `addressLng` |
| 1.4 | `poolType: PoolType \| null` dans Property | OK | Ligne 106 — dans le bloc Equipements |
| 1.5 | `mainViewType: ViewType \| null` dans Property | OK | Ligne 107 — dans le bloc Equipements |
| 1.6 | `VIEW_TYPE_LABELS` correctement typé | OK | Lignes 239-245 — `Record<ViewType, string>` avec les 5 labels FR |
| 1.7 | `POOL_TYPE_LABELS` correctement typé | OK | Lignes 247-252 — `Record<PoolType, string>` avec les 4 labels FR |
| 1.8 | Pas de casse sur les types existants | OK | Tous les types et labels pre-existants sont intacts |

### 2. PropertyDetailView.tsx — Imports

| # | Point de contrôle | Statut | Détail |
|---|---|---|---|
| 2.1 | Import `IconDpe` depuis `@real-estate/ui/icon-dpe` | OK | Ligne 31 |
| 2.2 | Import `IconGes` depuis `@real-estate/ui/icon-ges` | OK | Ligne 32 |
| 2.3 | Composants `IconDpe` / `IconGes` existent dans le DS | OK | `packages/ui/src/components/IconDpe.tsx` et `IconGes.tsx` |
| 2.4 | Exports package.json configurés | OK | `./icon-dpe` et `./icon-ges` dans `packages/ui/package.json` |
| 2.5 | `HOT_WATER_SYSTEM_LABELS` toujours importé | OK | Ligne 39 — import conservé (utilisé sections B + Sheet) |
| 2.6 | `PROPERTY_CONDITION_LABELS` importé | OK | Ligne 38 |

### 3. Section A — Overview Caractéristiques

| # | Point de contrôle | Statut | Détail |
|---|---|---|---|
| 3.1 | `neighborhoodName` affiché comme "Quartier" | OK | Ligne 936 — `<ProfileField label="Quartier" value={property.neighborhoodName} />` |
| 3.2 | `condition` avec `PROPERTY_CONDITION_LABELS` | OK | Ligne 937 — `PROPERTY_CONDITION_LABELS[property.condition]` |
| 3.3 | `IconDpe` avec prop `classe` + `size="small"` | OK | Ligne 932 — `<IconDpe classe={property.dpeEnergyClass} size="small" />` |
| 3.4 | `IconGes` avec prop `classe` + `size="small"` | OK | Ligne 939 — `<IconGes classe={property.dpeGasEmissionClass} size="small" />` |
| 3.5 | Logique conditionnelle etages — appartements | OK | Ligne 944 — `['STUDIO', 'T1', 'T2', 'T3', 'T4', 'APPARTEMENT', 'LOFT'].includes(property.type)` affiche `floorLevel` (Etage) + `numberOfFloors` (Etages immeuble) |
| 3.6 | Logique conditionnelle etages — maisons | OK | Ligne 954 — `['MAISON', 'MAISON_DE_VILLE'].includes(property.type)` affiche `numberOfFloors` comme "Niveaux" |
| 3.7 | Logique conditionnelle etages — autre | OK | Ligne 964 — pas d'etages affichés pour les autres types |
| 3.8 | "Eau chaude" absent de Section A | OK | `hotWaterSystem` n'apparait que dans Section B (ligne 1109) et Sheet Annonce (ligne 1476) |
| 3.9 | "Nombre d'etages" ligne dedié supprimée de Section A | OK | Plus de ligne dediée — integré dans la logique conditionnelle |

### 4. Sections B — Non-regression

| # | Point de contrôle | Statut | Détail |
|---|---|---|---|
| 4.1 | B.1 Caractéristiques par pièce | OK | Lignes 1005-1085 — inchangé |
| 4.2 | B.2 Equipements | OK | Lignes 1087-1097 — inchangé |
| 4.3 | B.3 Energie | OK | Lignes 1099-1121 — inchangé, `HOT_WATER_SYSTEM_LABELS` toujours utilisé ici |
| 4.4 | B.4 Stationnement | OK | Lignes 1123-1132 — inchangé |

### 5. Props composants DS

| # | Point de contrôle | Statut | Détail |
|---|---|---|---|
| 5.1 | `IconDpe` accepte prop `classe` | OK | Interface `IconDpeProps` inclut `classe?: DpeType` |
| 5.2 | `IconGes` accepte prop `classe` | OK | Interface `IconGesProps` inclut `classe?: GesType` |
| 5.3 | `size="small"` valide pour les deux | OK | Les deux supportent `"small" \| "medium" \| "large"` |

---

## CRITICAL

Aucun.

## WARNING

Aucun.

---

## Resume

La Passe 1 est conforme au brief. Les types `ViewType` et `PoolType` sont correctement positionnés et typés. Les labels `VIEW_TYPE_LABELS` et `POOL_TYPE_LABELS` utilisent `Record<>`. `neighborhoodName`, `poolType` et `mainViewType` sont ajoutés aux bons endroits dans l'interface `Property`. La Section A de la vue detail est correctement refactoree avec les composants visuels `IconDpe`/`IconGes`, la logique conditionnelle d'etages, et la suppression de "Eau chaude". Les Sections B ne sont pas impactees. Aucune regression detectee.
