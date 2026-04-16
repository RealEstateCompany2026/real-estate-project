# Dev Report — SwitchTheme Fix (CRITICAL x3 + WARNINGS)

**Date** : 2026-04-16
**Scope** : Corrections suite au review-report FAIL sur SwitchTheme + Dark Mode
**Build** : PASS (turbo build, 2 tasks successful)

---

## CRITICAL-01 — Inline styles remplacés par classes Tailwind Layer 3

**Fichier** : `packages/ui/src/components/SwitchTheme.tsx`

Avant : `style={{ backgroundColor: "var(--neutral-600)" }}` etc. (tokens Layer 1 en inline).

Apres :
- Background pill : `bg-surface-neutral-action` (dark) / `bg-surface-neutral-action-hover` (light)
- Toggle circle : `bg-surface-neutral-default`
- Icone Sun : `text-icon-neutral-default`
- Icone Moon : `text-icon-placeholder`

Zero inline style restant. Pattern aligne sur `Switch.tsx`.

---

## CRITICAL-02 — Story Storybook creee

**Fichier** : `packages/ui/src/stories/SwitchTheme.stories.tsx`

Stories creees :
- `LightMode` (isDark: false)
- `DarkMode` (isDark: true)

Pattern identique a `Switch.stories.tsx`.

---

## CRITICAL-03 — FOUC corrige

**Fichiers** :
- `apps/agent-app/src/app/layout.tsx` : ajout d'un script inline dans `<head>` qui lit `localStorage('theme')` et applique `.dark` sur `<html>` avant hydration React.
- `apps/agent-app/src/components/ThemeProvider.tsx` : `useState` initialise via `getInitialTheme()` qui lit `document.documentElement.classList.contains('dark')` au lieu de defaulter a `'light'`. Suppression du premier `useEffect` qui lisait localStorage (redondant avec le script inline).

---

## WARNINGS corriges

1. **Signature onChange/onThemeToggle alignee** : `SwitchTheme.onChange` passe de `(isDark: boolean) => void` a `() => void`, alignee avec `NavRail.onThemeToggle: () => void`. Plus de mismatch de types.

2. **Cast `as NavSection` supprime** dans `Sidebar.tsx` ligne 29. `mapPathToSection` retourne deja `NavSection | undefined` qui est compatible avec `activeSection?: NavSection`.

3. **`darkMode: "class"` ajoute** dans `packages/ui/tailwind.config.ts`. Herite par `apps/agent-app/tailwind.config.ts` via presets.

---

## Fichiers modifies

| Fichier | Action |
|---------|--------|
| `packages/ui/src/components/SwitchTheme.tsx` | Inline styles -> classes Tailwind L3, signature onChange alignee |
| `packages/ui/src/stories/SwitchTheme.stories.tsx` | Cree (story Storybook) |
| `apps/agent-app/src/components/ThemeProvider.tsx` | Fix FOUC, init depuis DOM |
| `apps/agent-app/src/app/layout.tsx` | Script inline anti-FOUC dans head |
| `apps/agent-app/src/components/Sidebar.tsx` | Suppression cast inutile |
| `packages/ui/tailwind.config.ts` | Ajout darkMode: "class" |
| `packages/ui/src/components/NavRail.tsx` | Commentaire alignement signature (aucun changement fonctionnel) |
