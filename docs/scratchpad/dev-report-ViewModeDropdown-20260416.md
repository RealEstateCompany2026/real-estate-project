# Dev Report - ViewModeDropdown DS Alignment

**Date** : 2026-04-16
**Composant** : `packages/ui/src/components/ViewModeDropdown.tsx`
**Story** : `packages/ui/src/stories/ViewModeDropdown.stories.tsx`
**Reference** : `packages/ui/src/components/Button.tsx`

## Modifications appliquees

### Bouton trigger

| Avant | Apres | Motif |
|-------|-------|-------|
| `px-3 py-2` | `p-3` | Padding uniforme 12px comme Button DS |
| `text-sm font-medium` (sur span) | `text-base font-semibold tracking-[0.16px]` (sur button) | Font identique au Button DS |
| `border-edge-default` | `border-edge-neutral-default` | Token correct du Button DS |
| `hover:bg-surface-neutral-action` | `hover:bg-surface-neutral-action-hover` | Token exact du Button default |
| Icones `size={16}` | `size={20}` | Taille standard DS |
| Aucun focus ring | `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-surface-page` | Alignement Button DS |
| Aucun token disabled | `disabled:pointer-events-none disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled` | Alignement Button DS |
| Pas de prop disabled | `disabled?: boolean` ajoutee a l'interface | Support etat disabled |

### Menu dropdown

| Avant | Apres | Motif |
|-------|-------|-------|
| `border-edge-default` | `border-edge-neutral-default` | Token correct |
| `text-sm` (sur span) | `text-base font-semibold tracking-[0.16px]` (sur button item) | Font DS |
| `hover:bg-surface-neutral-action` | `hover:bg-surface-neutral-action-hover` | Token exact |
| Pas de rounded par item | `rounded-t-lg` sur premier, `rounded-b-lg` sur dernier | Coins coherents |
| Icones `size={16}` | `size={20}` | Taille standard DS |

### Story

- Ajout story `Disabled` pour couvrir le nouvel etat

## Non modifie (preserve)

- Logique toggle open/close
- Logique de selection viewMode
- Click-outside pour fermer
- Props existantes (viewMode, onViewModeChange, className)

## Verification build

- `npx tsc --noEmit` : 0 erreur sur ViewModeDropdown.tsx et ViewModeDropdown.stories.tsx
- `npx turbo build` : erreur infra pre-existante (package manager binary), non liee a ce changement

## Statut

DONE - Pret pour review.
