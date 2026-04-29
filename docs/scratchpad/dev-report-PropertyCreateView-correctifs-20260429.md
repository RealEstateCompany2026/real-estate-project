# Dev Report — PropertyCreateView 9 correctifs

**Date** : 2026-04-29
**Fichiers modifiés** : 3

---

## Fichiers modifiés

### 1. `apps/agent-app/src/types/property.ts`
- **C1/C9** : Ajout `SOUS_GESTION` au type `PropertyStatus` + labels + colors
- **C4/C9** : `ROOM_COUNT_LABELS` mis à jour : ajout `5: 'T5'` et `6: 'Plus'` (remplace `5: 'T5+'`)
- **C7/C9** : `DIAGNOSTIC_TYPE_LABELS` raccourcis : `DPE: 'DPE'` et `GES: 'GES'`

### 2. `apps/agent-app/src/lib/validations/property.ts`
- **C1** : `statusCheckboxes` enum mis à jour → `['OFF_MARKET', 'A_VENDRE', 'A_LOUER', 'EN_VIAGER', 'SOUS_GESTION']`
- **C2** : `clientId` (string) → `clientIds` (array de strings, min 1)
- **C9** : `status` enum enrichi avec `SOUS_GESTION`

### 3. `apps/agent-app/src/components/properties/PropertyCreateView.tsx`

#### C1 — Statuts
- `STATUS_CHECKBOX_VALUES` = `['OFF_MARKET', 'A_VENDRE', 'A_LOUER', 'EN_VIAGER', 'SOUS_GESTION']`
- VENDU/LOUE retirés de l'UI

#### C2 — Multi-propriétaires
- State `selectedClient` (single) → `selectedClients` (array) + `showClientSearch` toggle
- Affichage : Chips avec onDelete + bouton "Ajouter" avec icône Plus
- Clic "Ajouter" → InputFieldOutlined de recherche, se ferme après sélection
- `clientId` → `clientIds` partout dans le form
- Submit utilise `clientIds[0]` pour la colonne `clientId` de Property

#### C3 — Catégorie simplifiée
- Suppression `selectedCategory` state + `PROPERTY_CATEGORY_TYPES` usage
- `CATEGORY_OPTIONS` = 4 options directes : Appartement, Maison, Loft, Autre → mappe directement vers PropertyType

#### C4 — Layout ligne 1 unifié
- Tout sur une seule ligne : Catégorie w-[330px] + Nb pièces w-[180px] (SelectField) + Orientation w-[180px] + Vue w-[180px]
- Surface habitable retirée de la section 2

#### C5 — Section Surfaces refonte
- 3 champs w-[240px] : Surface habitable (required), Surface extérieure (terraceAreaSqm), Surface annexe (landAreaSqm)
- Labels renommés selon brief

#### C6 — Pièces : style + équipement
- Suppression `border border-edge-default rounded-lg p-4` des rows
- Espacement `space-y-4` → `space-y-2`
- Ajout InputFieldOutlined "Équipement" flex-1 (utilise `equipment[0]`)

#### C7 — Diagnostics : refonte DPE/GES
- Import `IconDpe` / `IconGes` depuis le DS
- 2 fonctions helper : `computeDpeClass(value)` et `computeGesClass(value)` avec seuils réglementaires
- DPE/GES : InputFieldOutlined "Score" w-[180px] + placeholder unité + IconDpe/IconGes auto-calculé size="medium" selected
- Autres diagnostics : InputFieldOutlined "Valeur" texte simple (pas de boutons A-G)
- Auto-compute class dans `updateDiagnostic`

#### C8 — Diagnostics : borders supprimés
- Suppression `border border-edge-default rounded-lg p-4` des rows diagnostic
- Espacement `space-y-4` → `space-y-2`

#### C9 — Types + Validation
- Voir sections types et validation ci-dessus

---

## Imports ajoutés
- `IconDpe` depuis `@real-estate/ui/icon-dpe`
- `IconGes` depuis `@real-estate/ui/icon-ges`
- Types `DpeType`, `GesType`
- `ROOM_COUNT_LABELS` depuis types

## Imports supprimés
- `PROPERTY_CATEGORY_TYPES`, `CATEGORY_LABELS`, `DPE_COLORS` (plus utilisés)
- `PropertyCategory` type (plus utilisé)

## Statut
LIVRABLE PRET POUR REVIEW
