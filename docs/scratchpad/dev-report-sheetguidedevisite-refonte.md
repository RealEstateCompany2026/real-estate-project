# Dev-report — Refonte SheetGuideDeVisite

**Date** : 2026-04-23
**Brief** : BRIEF-REFONTE-SHEETGUIDEDEVISITE
**Statut** : DONE — build TypeScript OK (0 erreurs)

---

## Fichiers modifiés

| Fichier | Action |
|---------|--------|
| `packages/ui/src/components/SheetGuideDeVisite.tsx` | Refonte complète layout + props |
| `apps/agent-app/src/components/deals/DealDetailView.tsx` | Adapter props SheetGuideDeVisite |

---

## Changements effectués

### SheetGuideDeVisite.tsx

1. **Header** : Suppression de `headerAfterTitle` (plus de badge COMPLET/EN ATTENTE)
2. **Props supprimées** : `propertyLabel`, `submittedAt`
3. **Props ajoutées** : `propertyAddress`, `propertyCity`, `propertyType`, `propertySurface`, `propertyDpeGrade`
4. **Imports ajoutés** : `IconDpe`, `DpeType`, `IconButton`, `ArrowRight`
5. **Helper Dot()** : Ajouté (pattern identique aux autres Sheets)
6. **Section 1 — Infos bien + client** : Layout 3 lignes (adresse / ville-type-surface+DPE / clientName) — pattern identique a SheetOrdreDuJour
7. **Sections criteres** : Chaque critere dans son propre div borde (`rounded-lg border border-edge-default p-[16px]`), titre md semibold + Badge
8. **Section commentaire** : Div borde, titre md semibold, texte sm regular, toujours affiche
9. **Footer** : IconButton Phone + Button outlined "Ecrire au Visiteur" + ArrowRight, toujours actifs (plus de disabled)

### DealDetailView.tsx

1. Remplacement de `propertyLabel={...}` par les 5 props structurees (propertyAddress, propertyCity, propertyType, propertySurface, propertyDpeGrade)
2. Suppression de `submittedAt={visitGuideSubmittedAt}` de l'appel
3. Variable `visitGuideSubmittedAt` conservee car utilisee ailleurs (guideStatus dans ListVisite ligne 2693)

---

## Verification

- `npx tsc --noEmit -p apps/agent-app/tsconfig.json` : 0 erreurs
