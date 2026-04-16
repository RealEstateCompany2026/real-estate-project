# Dev Report - SendingIconButton dark mode fix

**Date** : 2026-04-16
**Fichier** : `packages/ui/src/components/SendingIconButton.tsx`
**Statut** : DONE

## Changements

### 1. Icon color (ligne 90)
- `text-white` (hardcode) remplace par `text-content-branded-on-action` (Layer 3)
- En dark mode, ce token passe de `--neutral-white` a `--neutral-800` automatiquement

### 2. Suppression des `iconColor` inutilises
- Les proprietes `iconColor` de `getStatusStyles()` n'etaient jamais appliquees au JSX
- Supprimees dans les 3 cas (idle, sending, sent)

### 3. Background tokens (var() inline -> classes Tailwind Layer 3)
- `bg-[var(--surface-branded-default)]` -> `bg-surface-branded-action` (aligne avec Button primary)
- `bg-[var(--surface-branded-action-hover)]` -> `bg-surface-branded-action-hover`
- `bg-[var(--green-500)]` -> `bg-green-500` (Layer 1 palette - pas de token Layer 3 "surface success action" disponible, `bg-surface-success` correspond a green-50 qui est trop clair)

### 4. Border tokens (inline style -> classes Tailwind)
- Suppression du `style={{ borderColor: ... }}` inline
- idle/sending : `border-edge-branded-action`
- sent : `border-edge-success-default` (green-500 en light, green-300 en dark)

### 5. Hover
- `hover:opacity-90` remplace par `hover:bg-surface-branded-action-hover` (vrai token DS)

### 6. Active
- `active:scale-[0.98]` supprime (pas dans le pattern Button DS)

### 7. Disabled
- `cursor-not-allowed opacity-70` remplace par `disabled:pointer-events-none disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled` (aligne avec Button.tsx)

### 8. Transition
- `transition-all` remplace par `transition-colors` (plus specifique, aligne avec Button.tsx)

## Build
- `npx tsc --noEmit` : aucune erreur liee a SendingIconButton (erreurs pre-existantes sur d'autres composants)
- `npx turbo build` : echec sur les apps (package manager binary manquant - probleme d'environnement, non lie a ce fix)

## Story
- `SendingIconButton.stories.tsx` : aucune modification necessaire (les stories testent les 4 etats via props, pas de dependance aux classes CSS)
