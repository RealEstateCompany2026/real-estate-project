# Dev Report — ButtonPagination Refactoring

**Date** : 2026-04-16
**Composant** : `packages/ui/src/components/ButtonPagination.tsx`
**Story** : `packages/ui/src/stories/ButtonPagination.stories.tsx`

## Changements effectués

### ButtonPagination.tsx — Refactoring complet

**Avant** :
- 2 boutons `<button>` custom avec styles inline et classes hardcodées
- Asymétrie visuelle : bouton gauche ghost, bouton droit avec `bg-surface-neutral-action-hover` permanent
- Utilisation de `var(--icon-neutral-default)` en style inline
- Gestion custom de `opacity` et `cursor` pour l'état disabled
- Dimensions fixes hardcodées (117x54px, 44x44px)

**Après** :
- Import et utilisation de `IconButton` depuis `./Button`
- Import de `cn` depuis `../lib/utils`
- 2 variantes via prop `variant`:
  - `"default"` -> IconButton `variant="default"` (bg neutral, border neutral)
  - `"outlined"` -> IconButton `variant="outline"` (bg neutral, border visible)
- Boutons symétriques au repos (même apparence)
- Hover natif géré par IconButton (pas de custom)
- Disabled natif géré par IconButton (pas de custom opacity/cursor)
- Container simplifié : `inline-flex items-center gap-3 rounded-[20px] p-1`
- Accessibilité conservée : `role="navigation"`, `aria-label="Pagination"`, `aria-label` sur chaque bouton

### Props

| Prop | Type | Default | Statut |
|------|------|---------|--------|
| `onPrevious` | `() => void` | - | Conservée |
| `onNext` | `() => void` | - | Conservée |
| `canGoPrevious` | `boolean` | `true` | Conservée |
| `canGoNext` | `boolean` | `true` | Conservée |
| `variant` | `"default" \| "outlined"` | `"default"` | Ajoutée |
| `className` | `string` | - | Conservée |

### Stories mises à jour

- `Default` : variant="default", les deux boutons actifs
- `Outlined` : variant="outlined", les deux boutons actifs
- `DisabledPrevious` : bouton previous désactivé
- `DisabledNext` : bouton next désactivé

## Vérification build

- `npx tsc --noEmit` : aucune erreur sur ButtonPagination.tsx ni ButtonPagination.stories.tsx
- Les erreurs pré-existantes (ListItemImportSelect, Menu, MessageComposer stories) ne sont pas liées à ce changement

## Points d'attention pour review

- Le mapping `"outlined" -> "outline"` est fait via `iconButtonVariantMap` pour découpler la prop publique du DS interne
- Le `"use client"` est conservé (composant interactif Next.js)
- Aucune couleur hardcodée, aucun `var()` inline — tout passe par les tokens DS via IconButton
