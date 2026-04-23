# Dev Report — Refonte SheetOrdreDuJour

**Date** : 2026-04-23
**Brief** : BRIEF-REFONTE-SHEETORDREDUJOUR
**Statut** : TERMINÉ — build TypeScript OK (0 erreurs)

---

## Fichiers modifiés

| Fichier | Changement |
|---------|-----------|
| `packages/ui/src/components/SheetOrdreDuJour.tsx` | Refonte complète layout + props |
| `apps/agent-app/src/components/deals/DealDetailView.tsx` | Adaptation props SheetOrdreDuJour |

---

## Changements effectués

### SheetOrdreDuJour.tsx

1. **Header** : supprimé `headerAfterTitle` — plus de badge dans le header, juste le titre "Ordre du Jour"

2. **Props refactorisées** :
   - Supprimé : `propertyLabel: string`
   - Ajouté : `propertyAddress`, `propertyCity`, `propertyType`, `propertySurface` (tous `string | null` optionnels)
   - Ajouté : `propertyDpeGrade: DpeType | null` (optionnel)
   - `odjStatus` accepte maintenant `null` en plus de EDITE/REVISE/ENVOYE

3. **Imports ajoutés** : `IconDpe`, `DpeType` depuis `./IconDpe`, `BadgeVariant` depuis `./Badge`

4. **Section 1 — Infos bien + client** :
   - Ligne 1 : adresse (text-sm font-roboto text-content-body truncate)
   - Ligne 2 : ville / type / surface avec Dot separators + IconDpe small
   - Ligne 3 : nom du client
   - Pas de conteneur bordé, juste `px-[20px] py-[12px]`

5. **Section 2 — Panneau de contrôle** :
   - Conteneur bordé `rounded-lg border border-edge-default p-[16px]`
   - Ligne 1 : "Édition" + Badge (warning "ÉDITER" si null, success "ÉDITÉ" si EDITE/REVISE/ENVOYE)
   - Ligne 2 : "Révision" + Switch (inchangé)
   - Supprimé l'ancien `bg-surface-neutral-default` du conteneur (non demandé dans le brief)

6. **Section 3 — Textarea** : inchangé

7. **Footer** : inchangé

8. **Helper Dot()** ajouté localement (même pattern que SheetVisite)

9. **Supprimé** : `STATUS_BADGE_VARIANT` record (plus utilisé)

### DealDetailView.tsx

- Remplacé `propertyLabel={...}` par les 5 props structurées
- `odjStatus` passe maintenant `null` au lieu de fallback `'EDITE'` quand le statut ne match pas

---

## Vérification

- `npx tsc --noEmit -p apps/agent-app/tsconfig.json` : 0 erreurs
