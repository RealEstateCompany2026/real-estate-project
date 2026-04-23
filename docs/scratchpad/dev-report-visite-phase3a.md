# Dev Report — Phase 3A : Brancher SheetVisite dans DealDetailView

**Date** : 2026-04-23  
**Fichier modifié** : `apps/agent-app/src/components/deals/DealDetailView.tsx`  
**Statut** : DONE

---

## Modifications effectuées

### 1. Import SheetVisite
- Ajout de `import { SheetVisite } from '@real-estate/ui/sheet-visite';` (ligne 47)

### 2. Type EventRow enrichi
- Ajout de 4 champs : `odjContent`, `odjStatus`, `odjSentAt`, `clientId`

### 3. Query Supabase enrichie
- Le `.select()` sur la table `Event` inclut désormais `odjContent, odjStatus, odjSentAt, clientId`

### 4. State variables
- `isSheetVisiteOpen` (boolean) — contrôle l'ouverture de la sheet
- `selectedVisiteEvent` (EventRow | null) — event sélectionné

### 5. Handlers
- `handleOpenVisite(event)` — ouvre la sheet avec l'event
- `handleCloseVisite()` — ferme la sheet et reset l'event

### 6. ListVisite branchée
- Ajout des props `onClick` et `onView` sur chaque `<ListVisite>` pour appeler `handleOpenVisite(v)`

### 7. Rendu SheetVisite
- Ajout du composant `<SheetVisite>` conditionnel en fin de JSX
- Props mappées : `visitStatus`, `propertyLabel`, `invites`, `selectedSlotLabel`, `odjStatus`, `guideStatus`
- Correction brief : `addressLine1` remplacé par `address` (conforme au type Property dans DealRow)

---

## Vérification TypeScript

```
npx tsc --noEmit -- DealDetailView
```

- **0 nouvelle erreur** introduite par ces changements
- 2 erreurs pré-existantes sur ligne 762 (`.catch` sur PromiseLike) — hors périmètre
- 1 erreur pré-existante dans AppBarFicheAffaire.tsx — hors périmètre

---

## Correction vs brief

| Brief | Réel | Raison |
|-------|------|--------|
| `deal.Property.addressLine1` | `deal.Property.address` | `addressLine1` n'existe pas dans le type Property de DealRow |
| `import type { VisiteInvite }` | Retiré | Non utilisé explicitement dans le code, évite un warning TS unused |
