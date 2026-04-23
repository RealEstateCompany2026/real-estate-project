# Dev Report — ListMandat showWorkflow

**Date** : 2026-04-23
**Tâche** : Ajouter la prop `showWorkflow` pour masquer les badges workflow en mode gestion manuelle

## Fichiers modifiés

### 1. `packages/ui/src/components/ListMandat.tsx`

- **A) Prop ajoutée** dans `ListMandatProps` (après `workflow`) :
  ```typescript
  showWorkflow?: boolean;
  ```
- **B) Déstructuration** avec valeur par défaut `true` dans la signature du composant
- **C) Rendu conditionnel** : le `<div>` contenant les 3 badges (EDITION, REVISION, SIGNATURE) est maintenant enveloppé dans `{showWorkflow && (...)}`

### 2. `apps/agent-app/src/components/deals/DealDetailView.tsx`

- **Prop branchée** sur le `<ListMandat>` existant (ligne ~1174) :
  ```tsx
  showWorkflow={!deal.mandateWaived}
  ```
  Quand `mandateWaived` est `true` (ACQ/LOC en gestion manuelle), les badges workflow sont masqués.

## Comportement

| `showWorkflow` | Badges workflow |
|---|---|
| `true` (défaut) | Affichés |
| `false` | Masqués |

## Rétrocompatibilité

Aucun breaking change. La valeur par défaut `true` conserve le comportement existant pour tous les usages actuels de `ListMandat`.

## Statut

DONE — prêt pour review.
