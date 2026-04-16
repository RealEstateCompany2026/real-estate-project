# Review Report - SwitchTheme + Dark Mode

**Date** : 2026-04-16
**Reviewer** : reviewer-agent
**Feature** : SwitchTheme + Dark Mode
**Dev-report** : ABSENT (aucun dev-report-SwitchTheme trouvé dans docs/scratchpad/)

---

## Fichiers audités

| # | Fichier | Statut |
|---|---------|--------|
| 1 | `packages/ui/src/components/SwitchTheme.tsx` | NOUVEAU - Lu |
| 2 | `packages/ui/src/components/NavRail.tsx` | MODIFIE - Lu |
| 3 | `apps/agent-app/src/components/ThemeProvider.tsx` | NOUVEAU - Lu |
| 4 | `apps/agent-app/src/app/layout.tsx` | MODIFIE - Lu |
| 5 | `apps/agent-app/src/components/Sidebar.tsx` | MODIFIE - Lu |
| 6 | `packages/ui/package.json` | MODIFIE - Lu |

---

## AXE 1 — Clean Code

### CRITICAL-01 : SwitchTheme utilise des tokens Layer 1 au lieu de Layer 3

**Fichier** : `SwitchTheme.tsx` (lignes 43, 57, 62, 63)
**Probleme** : Le composant utilise directement `var(--neutral-600)`, `var(--neutral-200)`, `var(--neutral-400)`, `var(--neutral-white)` via des `style={}` inline.

Le tailwind.config.ts du DS indique clairement :
> "RULE: Components should ONLY use Layer 3 mapped tokens."

Les tokens Layer 3 existent : `--surface-neutral-action-hover`, `--surface-neutral-default`, `--icon-placeholder`, etc. Le composant Switch.tsx existant utilise correctement les classes Tailwind Layer 3 (`bg-surface-neutral-action-hover`).

**Correction requise** : Remplacer les `style={{}}` inline par des classes Tailwind mappees sur les tokens Layer 3. Les couleurs du switch doivent utiliser les semantic tokens (`bg-surface-*`, `text-icon-*`) et non les primitives.

### CRITICAL-02 : Pas de Storybook story pour SwitchTheme

**Constat** : Le fichier `packages/ui/src/stories/SwitchTheme.stories.tsx` n'existe pas. Tous les autres composants DS ont une story. Cela cree un composant non-testable visuellement dans le DS.

**Correction requise** : Ajouter un fichier story avec les variantes light/dark.

### WARNING-01 : Incompatibilite de signature onChange dans NavRail

**Fichier** : `NavRail.tsx` (ligne 169)
**Probleme** : `SwitchTheme.onChange` attend `(isDark: boolean) => void`, mais `NavRail.onThemeToggle` est type `() => void`. La prop est passee directement : `onChange={onThemeToggle}`.

TypeScript ne signale pas d'erreur (un callback sans argument est assignable a un callback avec argument), mais c'est un bug fonctionnel potentiel : le composant SwitchTheme appelle `onChange?.(!isDark)` avec un boolean, mais le consumer (ThemeProvider.toggleTheme) ignore cet argument et toggle en interne. Le comportement est correct par accident.

**Recommandation** : Aligner les signatures. Soit `onThemeToggle` accepte `(isDark: boolean) => void`, soit `SwitchTheme.onChange` devient `() => void` (toggle simple).

### WARNING-02 : Cast inutile dans Sidebar.tsx

**Fichier** : `Sidebar.tsx` (ligne 29)
**Probleme** : `activeSection={activeSection as NavSection}` — le cast `as NavSection` est inutile car `mapPathToSection` retourne deja `NavSection | undefined`, et `NavRail.activeSection` accepte `NavSection | undefined`.

**Correction recommandee** : Supprimer le cast.

### OK : Zero type `any`

Aucun `any` detecte dans les fichiers audites.

### OK : Export package.json

L'export `"./switch-theme"` est correctement ajoute et pointe vers le bon fichier.

### OK : Pas de fichier orphelin

`SwitchTheme.tsx` est importe par `NavRail.tsx`, qui est importe par `Sidebar.tsx`. `ThemeProvider.tsx` est importe par `layout.tsx` et `Sidebar.tsx`. Pas d'import mort.

---

## AXE 2 — Securite (OWASP)

### OK : Pas de faille XSS

Aucune injection de HTML brut, pas de `dangerouslySetInnerHTML`.

### WARNING-03 : localStorage sans sanitization

**Fichier** : `ThemeProvider.tsx` (lignes 26-29)
**Probleme** : La valeur lue depuis `localStorage` est castee en `Theme | null` mais la validation est correcte (`saved === 'dark' || saved === 'light'`). Le check est suffisant, pas de faille reelle. OK.

### OK : Pas de donnees sensibles exposees

Aucune cle API, token, ou donnee utilisateur dans le code.

---

## AXE 3 — Performance

### CRITICAL-03 : Flash of Unstyled Content (FOUC) au rechargement

**Fichier** : `ThemeProvider.tsx`
**Probleme** : Le theme est initialise a `'light'` (ligne 22), puis corrige dans un `useEffect` (lignes 24-29). Cela signifie :
1. SSR rend en mode light
2. Le navigateur affiche brievement le mode light
3. `useEffect` s'execute, lit `localStorage`, et bascule en dark
4. L'utilisateur voit un flash blanc -> dark

**Correction requise** : Injecter un script inline dans `<head>` (via `layout.tsx`) qui lit `localStorage` et applique la classe `.dark` AVANT le premier rendu React. C'est le pattern standard (Next.js + next-themes le fait nativement).

### WARNING-04 : Absence de `darkMode: 'class'` dans tailwind.config.ts

**Fichier** : `packages/ui/tailwind.config.ts`
**Probleme** : Tailwind n'a pas la directive `darkMode: 'class'`. Les tokens dark fonctionnent via le CSS `.dark {}` dans `tokens.css` (ce qui est correct et independant de Tailwind), mais si un composant utilise `dark:bg-*` dans le futur, cela ne fonctionnera pas.

**Recommandation** : Ajouter `darkMode: 'class'` au tailwind.config.ts pour coherence et compatibilite future.

### OK : Pas de re-render excessif

`ThemeContext` ne provoque un re-render que lorsque le theme change (evenement utilisateur rare). Pas de probleme de performance.

---

## Synthese

| Severite | ID | Description |
|----------|-----|-------------|
| CRITICAL | C-01 | SwitchTheme utilise tokens Layer 1 (primitives) au lieu de Layer 3 (mapped) |
| CRITICAL | C-02 | Pas de story Storybook pour SwitchTheme |
| CRITICAL | C-03 | FOUC : flash light->dark au rechargement si preference dark |
| WARNING | W-01 | Incompatibilite de signature onChange / onThemeToggle |
| WARNING | W-02 | Cast `as NavSection` inutile dans Sidebar.tsx |
| WARNING | W-04 | Pas de `darkMode: 'class'` dans tailwind.config.ts |

---

## Verdict : FAIL

**3 issues CRITICAL** doivent etre corrigees avant deploiement :
1. Refactorer SwitchTheme pour utiliser exclusivement les tokens Layer 3 via classes Tailwind
2. Ajouter la story Storybook SwitchTheme.stories.tsx
3. Corriger le FOUC avec un script inline pre-React dans layout.tsx

Le code retourne au **dev-agent** pour correction.
