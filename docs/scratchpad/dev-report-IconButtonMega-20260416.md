# Dev Report - IconButtonMega Token Realignment

**Date** : 2026-04-16
**Composant** : `packages/ui/src/components/IconButtonMega.tsx`
**Stories** : `packages/ui/src/stories/IconButtonMega.stories.tsx`

---

## Changements effectues

### 1. Refactoring en CVA
- Remplacement du `switch/case` inline par `cva()` (class-variance-authority), alignement structurel avec `Button.tsx`.

### 2. Variants realignes sur Button DS
| Ancien            | Nouveau     | Tokens                                                                                     |
|-------------------|-------------|--------------------------------------------------------------------------------------------|
| `primary`         | `primary`   | `bg-surface-branded-action text-content-branded-on-action border border-edge-branded-action hover:bg-surface-branded-action-hover` |
| `secondary`       | `default`   | `bg-surface-neutral-default text-content-body border border-edge-neutral-default hover:bg-surface-neutral-action-hover` |
| (nouveau)         | `outline`   | `border border-edge-neutral-default bg-surface-neutral-default hover:bg-surface-neutral-default text-content-body hover:border-edge-neutral-action` |
| `ghost`           | `ghost`     | `text-content-body hover:bg-surface-neutral-action` (pas de border)                       |
| `disabled`        | supprime    | Disabled est un etat, pas un variant                                                       |

### 3. Disabled -- tokens DS
- Suppression de `cursor-not-allowed opacity-50`
- Utilisation des tokens standard : `disabled:pointer-events-none disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled`

### 4. Focus ring -- pattern standard Button
- Suppression du div overlay custom pour le focus
- Ajout dans la base CVA : `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-surface-page`

### 5. Nettoyage
- Suppression de `active:scale-[0.98]` (absent du Button DS)
- Suppression de tous les `var()` inline (tout passe par classes Tailwind Layer 3)
- Suppression de la prop `outlined` (remplacee par le variant `outline`)
- Le type exporte est maintenant `IconButtonMegaVariant = "default" | "primary" | "outline" | "ghost"`

### 6. Conserve (specificites Mega)
- Dimensions 70x70px, padding 23px, border-radius 28px, icon 24x24px

### 7. Interface props
- Extends `React.ButtonHTMLAttributes<HTMLButtonElement>` pour supporter nativement `disabled`, `onClick`, `title`, `aria-*`, etc.
- Utilisation de `cn()` pour la composition des classes (comme Button DS).

---

## Impact consumers

- `ClientDetailView.tsx` : utilise `variant="primary"` -- aucun changement necessaire
- `PropertyDetailView.tsx` : utilise `variant="primary"` -- aucun changement necessaire
- Aucun consumer n'utilise `variant="secondary"` ni `outlined` -- zero breaking change

## Stories
- Renommage `Secondary` -> `Default`, ajout `Outline`, conservation `Primary`, `Ghost`, `Disabled`

## Build
- TypeScript compile sans erreur (`tsc --noEmit` OK)
- Erreur pre-existante lucide-react (type `ReactSVG` manquant) non liee a ce changement
- `turbo build` echoue pour raison infra (package manager binary introuvable) -- non lie au code

## Statut : DONE -- pret pour review
