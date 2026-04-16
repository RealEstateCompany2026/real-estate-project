# Dev Report — ButtonMultiLabel Refactoring

**Date** : 2026-04-16
**Composant** : `packages/ui/src/components/ButtonMultiLabel.tsx`
**Story** : `packages/ui/src/stories/ButtonMultiLabel.stories.tsx`

---

## Changements effectués

### 1. Refactoring complet du composant

**Avant** : Segmented control avec sélection unique (`value`/`onChange` pattern).
**Après** : Bouton multi-sections avec actions indépendantes.

### 2. Nouvelle interface Props

```typescript
interface ButtonMultiLabelSection {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface ButtonMultiLabelProps {
  sections: ButtonMultiLabelSection[]; // 2 à 5 sections
  className?: string;
  fullWidth?: boolean;
}
```

### 3. Tokens appliqués (depuis Button variant `outline`)

| Token | Valeur |
|-------|--------|
| Border | `border border-edge-neutral-default` |
| Border hover | `hover:border-edge-neutral-action` |
| Background | `bg-surface-neutral-default` |
| Text | `text-content-body` |
| Font | `text-base font-semibold tracking-[0.16px]` |
| Padding | `p-3` |
| Border-radius | `rounded-l-lg` (first) / `rounded-r-lg` (last) |
| Disabled | `disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled` |
| Focus | `focus-visible:ring-2 focus-visible:ring-purple-500` |

### 4. Détails techniques

- Collapse des bordures internes via `-ml-px` pour éviter le double-border
- Chaque section est un `<button>` natif avec `type="button"`
- Container avec `role="group"` pour accessibilité
- Hover indépendant par section (CSS natif, pas de state React)
- Support optionnel d'une icône avant le label (`icon?: React.ReactNode`)

### 5. Stories mises à jour

- `TwoSections` : 2 boutons (Précédent / Suivant)
- `FourSectionsWithDisabled` : 4 boutons dont 1 disabled (Archivés)
- `FullWidth` : 3 boutons en pleine largeur

## Vérification build

- `npx tsc --noEmit` : aucune erreur dans les fichiers ButtonMultiLabel
- `npx turbo build` : erreurs pre-existantes (package manager binary), non liées à ce changement
- Aucun autre fichier du projet n'importe ButtonMultiLabel (pas de breaking change externe)

## Statut

DONE — Prêt pour review.
