# Dev Report — Phase 3B : Brancher SheetOrdreDuJour + SheetGuideDeVisite

**Date** : 2026-04-23
**Fichier modifié** : `apps/agent-app/src/components/deals/DealDetailView.tsx`
**Composants DS utilisés** : `SheetOrdreDuJour`, `SheetGuideDeVisite`

---

## Modifications effectuées

### 1. Imports ajoutés (après ligne 47)
- `SheetOrdreDuJour` depuis `@real-estate/ui/sheet-ordre-du-jour`
- `SheetGuideDeVisite` + type `VisitCriterion` depuis `@real-estate/ui/sheet-guide-de-visite`

### 2. State variables ajoutées (après ligne 625)
- `isSheetOdjOpen` / `isSheetGuideOpen` — contrôle ouverture des sous-sheets
- `odjContent` — contenu texte de l'ordre du jour
- `odjIsRevision` — switch révision
- `visitGuideCriteria` — tableau `VisitCriterion[]` (5 critères)
- `visitGuideCommentaire` / `visitGuideSubmittedAt` — données du guide de visite

### 3. Handlers ajoutés (après handleCloseVisite)

**ODJ :**
- `handleOpenOdj` — initialise le state local depuis `selectedVisiteEvent`
- `handleCloseOdj` — ferme la sheet
- `handleOdjContentChange` — met à jour le contenu local
- `handleOdjToggleRevision` — persiste odjContent + odjStatus vers Supabase (`Event`), met à jour `selectedVisiteEvent` et `events[]`
- `handleSendOdj` — persiste statut `ENVOYE` + `odjSentAt` vers Supabase, ferme la sheet

**Guide de visite :**
- `handleOpenGuide` — fetch `VisitGuideResponse` depuis Supabase, parse les réponses JSON en `VisitCriterion[]`, ou initialise vide si pas de réponse
- `handleCloseGuide` — ferme la sheet

### 4. Props ajoutées à SheetVisite
- `onViewOdj={handleOpenOdj}`
- `onViewGuide={handleOpenGuide}`
- `guideStatus` : remplacé `null` hardcodé par `visitGuideSubmittedAt ? 'COMPLET' : null`

### 5. Rendus JSX ajoutés
- `<SheetOrdreDuJour>` avec toutes les props (propertyLabel, clientName, content, odjStatus, isRevision, callbacks)
- `<SheetGuideDeVisite>` avec toutes les props (propertyLabel, clientName, criteria, commentaire, submittedAt)
- Fragment `<>...</>` ajouté pour wrapper les 3 composants dans le bloc conditionnel `selectedVisiteEvent &&`

### 6. Pattern Supabase
- `createClient()` appelé localement dans chaque handler async (même pattern que les handlers existants)
- Pas de `supabase` global — cohérent avec le reste du fichier

## Vérification TypeScript

```
npx tsc --noEmit → 0 erreur introduite
```

Les 2 erreurs remontées (ligne 772 `.catch()` sur `PromiseLike`) sont pré-existantes et non liées à cette modification.

## Fichiers modifiés
- `apps/agent-app/src/components/deals/DealDetailView.tsx` — seul fichier modifié

## Aucun fichier DS modifié
Les composants `SheetOrdreDuJour` et `SheetGuideDeVisite` sont utilisés tels quels depuis `packages/ui`.
