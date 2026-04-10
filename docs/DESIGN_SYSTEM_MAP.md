# RealAgent — Design System Map
> Dernière mise à jour : 10 avril 2026 — Tokens alignés à 100% avec Figma, Storybook opérationnel
> Branche de référence : `feat/design-system`

Ce document est le **référentiel technique du Design System**. Tout agent IA travaillant sur le frontend de RealAgent doit le lire avant de modifier un composant, un token, ou un style.

---

## Architecture des tokens — 3 couches

Le Design System utilise une architecture à 3 couches de tokens CSS, alignée sur le Figma Design System (fichier `09EiMQjcDWgb7MzykS8zU0`).

### Couche 1 — Primitives (ne JAMAIS utiliser dans les composants)

Valeurs brutes définies dans `:root`. Ce sont les matériaux de construction.

| Catégorie | Pattern | Exemple | Fichier |
|-----------|---------|---------|---------|
| Palettes couleur | `--{couleur}-{nuance}` | `--purple-500`, `--neutral-300` | tokens.css L77-145 |
| Échelle spacing | `--scale-{n}` | `--scale-400` (16px) | tokens.css L12-23 |
| Border radius | `--border-radius-{n}` | `--border-radius-200` (8px) | tokens.css L39-43 |
| Border width | `--border-width-{n}` | `--border-width-25` (1px) | tokens.css L46-49 |
| Typographie | `--text-h{n}`, `--lh-h{n}` | `--text-h1` (48px), `--lh-h1` (58px) | tokens.css L54-78 |
| Font weights | `--font-weight-{nom}` | `--font-weight-semibold` (600) | tokens.css L81-85 |

**6 palettes** : neutral (white→black), purple, green, red, blue, orange — chacune de 50 à 800.

### Couche 2 — Alias sémantiques (usage interne, ne pas référencer directement)

Pointent vers les primitives, ajoutent du sens métier. Mode-indépendants.

| Alias | Pointe vers | Usage |
|-------|-------------|-------|
| `--branded-{n}` | `--purple-{n}` | Couleur de marque |
| `--success-{n}` | `--green-{n}` | Succès / validation |
| `--error-{n}` | `--red-{n}` | Erreur / danger |
| `--information-{n}` | `--blue-{n}` | Information |
| `--warning-{n}` | `--orange-{n}` | Avertissement |
| `--spacing-{n}` | `--scale-{n}` | Espacement sémantique |

### Couche 3 — Tokens mappés (LES SEULS à utiliser dans les composants)

Ce sont les tokens que les composants doivent référencer. Ils changent automatiquement entre light et dark mode.

| Famille | Pattern CSS | Classe Tailwind | Exemples |
|---------|-------------|-----------------|----------|
| **Surface** (fonds) | `--surface-{nom}` | `bg-surface-{nom}` | `bg-surface-page`, `bg-surface-branded-action` |
| **Icon** (icônes) | `--icon-{nom}` | `text-icon-{nom}` | `text-icon-neutral-default`, `text-icon-error` |
| **Text** (texte) | `--text-{nom}` | `text-content-{nom}` | `text-content-body`, `text-content-headings` |
| **Border** (bordures) | `--border-{nom}` | `border-edge-{nom}` | `border-edge-default`, `border-edge-branded-action` |

#### Tokens Surface (17)
```
page, neutral-default, neutral-action, neutral-action-hover,
branded-default, branded-action, branded-action-hover, branded-subtle,
container, disabled,
success, success-subtle, error, error-subtle,
information, warning, warning-subtle
```

#### Tokens Icon (14)
```
neutral-default, neutral-action, neutral-action-hover, neutral-on-action,
branded-default, branded-action, branded-action-hover, branded-on-action,
placeholder, disabled,
success, error, information, warning
```

#### Tokens Text (17)
```
hero, headings, body, caption, strong, subtle, placeholder,
neutral-action, neutral-on-action,
branded-action, branded-on-action, branded-strong,
disabled, success, error, information, warning
```

#### Tokens Border (15)
```
neutral-default, neutral-action, default, subtle, divider,
branded-default, branded-action, disabled,
success, success-default, error, error-default,
information, information-default, warning, warning-default
```

---

## Fichiers du Design System

| Fichier | Chemin | Rôle |
|---------|--------|------|
| **tokens.css** | `packages/ui/src/tokens.css` | Source de vérité tokens (3 couches + dark mode) |
| **tailwind.config.ts** | `packages/ui/tailwind.config.ts` | Mapping tokens → classes Tailwind |
| **tokens.json** | `packages/ui/src/tokens.json` | Référence JSON structurée |
| **Storybook main** | `packages/ui/.storybook/main.ts` | Config Storybook (React Vite, port 6006) |
| **Storybook preview** | `packages/ui/.storybook/preview.ts` | Import tokens.css pour preview |
| **Stories** | `packages/ui/src/stories/*.stories.tsx` | Catalogues visuels |

### Structure du monorepo

```
real-estate-project/
├── apps/
│   ├── agent-app/          # App Agent CRM (port 3000)
│   │   └── src/components/  # Composants spécifiques app
│   └── owner-app/          # App Propriétaire (port 3001)
├── packages/
│   └── ui/                  # ← DESIGN SYSTEM (partagé)
│       ├── src/
│       │   ├── tokens.css       # Tokens CSS (source de vérité)
│       │   ├── tokens.json      # Référence JSON
│       │   ├── components/      # Composants partagés
│       │   │   ├── Button.tsx
│       │   │   ├── Badge.tsx
│       │   │   ├── Input.tsx
│       │   │   └── PropertyCard.tsx
│       │   └── stories/         # Storybook stories
│       │       ├── DesignTokens.stories.tsx
│       │       ├── Button.stories.tsx
│       │       ├── Badge.stories.tsx
│       │       └── Input.stories.tsx
│       ├── .storybook/          # Config Storybook
│       └── tailwind.config.ts   # Mapping Tailwind
└── docs/
    └── DESIGN_SYSTEM_MAP.md     # CE FICHIER
```

---

## Composants existants

### Button (`packages/ui/src/components/Button.tsx`)
Pattern **cva** (class-variance-authority). 6 variants :

| Variant | Classes clés |
|---------|-------------|
| `default` | `bg-surface-branded-action text-content-branded-on-action hover:bg-surface-branded-action-hover` |
| `destructive` | `bg-red-500 text-white hover:bg-red-600` |
| `outline` | `border border-edge-default bg-surface-neutral-default hover:bg-surface-neutral-action text-content-body` |
| `secondary` | `bg-surface-neutral-action text-content-body hover:bg-surface-neutral-action-hover` |
| `ghost` | `hover:bg-surface-neutral-action text-content-body` |
| `link` | `text-content-branded-action underline-offset-4 hover:underline` |

3 tailles : `default` (h-10), `sm` (h-9), `lg` (h-11).

### Badge (`packages/ui/src/components/Badge.tsx`)
Pattern **cva**. 7 variants : `default`, `secondary`, `destructive`, `outline`, `success`, `warning`, `info`.

### Input (`packages/ui/src/components/Input.tsx`)
Classes : `border-edge-default bg-surface-neutral-default text-content-body placeholder:text-content-placeholder focus-visible:ring-purple-500`.

### PropertyCard (`packages/ui/src/components/PropertyCard.tsx`)
Carte bien immobilier avec tokens surface/edge/content.

---

## Typographie — Échelle Figma

| Token | Taille | Line-height | Classe Tailwind |
|-------|--------|-------------|-----------------|
| `--text-h1` | 48px | 58px | `text-h1` |
| `--text-h2` | 40px | 48px | `text-h2` |
| `--text-h3` | 32px | 38px | `text-h3` |
| `--text-h4` | 28px | 34px | `text-h4` |
| `--text-h5` | 24px | 28px | `text-h5` |
| `--text-h6` | 20px | 24px | `text-h6` |
| `--text-lg` | 20px | 24px | `text-lg` |
| `--text-base` | 16px | 22px | `text-base` |
| `--text-sm` | 14px | 16px | `text-sm` |
| `--text-xs` | 12px | 14px | `text-xs` |

Tous les headings sont en `font-weight: 700` (bold).

---

## Spacing — Échelle Figma

| Token sémantique | Primitif | Valeur | Classe Tailwind |
|-----------------|----------|--------|-----------------|
| `--spacing-0` | `--scale-0` | 0px | `p-0`, `m-0`, `gap-0` |
| `--spacing-px` | `--scale-25` | 1px | `p-px` |
| `--spacing-0.5` | `--scale-50` | 2px | `p-0.5` |
| `--spacing-1` | `--scale-100` | 4px | `p-1` |
| `--spacing-2` | `--scale-200` | 8px | `p-2` |
| `--spacing-3` | `--scale-300` | 12px | `p-3` |
| `--spacing-4` | `--scale-400` | 16px | `p-4` |
| `--spacing-5` | `--scale-500` | 20px | `p-5` |
| `--spacing-6` | `--scale-600` | 24px | `p-6` |
| `--spacing-7` | `--scale-700` | 28px | `p-7` |
| `--spacing-8` | `--scale-800` | 32px | `p-8` |
| `--spacing-10` | `--scale-900` | 40px | `p-10` |

---

## Border Radius — Valeurs Figma

| Token | Valeur | Classe Tailwind |
|-------|--------|-----------------|
| `--border-radius-0` | 0px | `rounded-none` |
| `--border-radius-200` | 8px | `rounded` (DEFAULT) |
| `--border-radius-400` | 16px | `rounded-lg` |
| `--border-radius-700` | 28px | `rounded-2xl` |

---

## Référence Figma

| Élément | ID / Lien |
|---------|-----------|
| Design System file | `09EiMQjcDWgb7MzykS8zU0` |
| Library key | `lk-f73fbce482f0c5988f1eed89d2b339e039dc973e7c21a691e5ab9f95cf4363fbf7229d8ba299a2125b35b9a37fff22ae835d66505583d9c1166ff731d4ab8a15` |
| Collection "Mapped" | surface/*, icon/*, text/*, border/* |
| Collection "Alias" | border radius/*, border width/* |

### Référence locale — `figma_src/` (branche `feat/p08-p09-refactoring`)

Le dossier `figma_src/` sur la branche `feat/p08-p09-refactoring` contient le code source généré depuis Figma :

- **62 atoms** : Button, Badge, Chip, Checkbox, Switch, TextField, Spinner, NavButton, etc.
- **48 molecules** : SearchBar, InputField, Tabs, Stepper, Toast, Snackbar, etc.
- **19 organisms** : NavRail, AppBars, DatePicker, Gallery, Sheet, Menu, etc.
- **`figma_src/styles/theme.css`** : Export complet des tokens Figma (utilisé comme référence pour aligner tokens.css)

⚠️ NE PAS SUPPRIMER cette branche — elle sert de source de vérité pour les composants non encore portés.

---

## Conventions pour les futurs agents

### Règle n°1 : Toujours utiliser les tokens mappés (Couche 3)

```tsx
// ✅ CORRECT
<div className="bg-surface-page text-content-body border-edge-default">

// ❌ INTERDIT — référence directe aux primitives
<div className="bg-neutral-white text-neutral-500 border-neutral-100">

// ❌ INTERDIT — couleurs hex en dur
<div style={{ background: '#FFFFFF', color: '#444955' }}>
```

### Règle n°2 : Mapping Tailwind des familles

| Famille token | Préfixe Tailwind | Usage |
|---------------|-----------------|-------|
| `surface/*` | `bg-surface-*` | Fonds, backgrounds |
| `icon/*` | `text-icon-*` | Couleur des icônes |
| `content/*` | `text-content-*` | Couleur du texte |
| `edge/*` | `border-edge-*` | Couleur des bordures |

### Règle n°3 : Ne jamais inventer de tokens

Si un token n'existe pas dans `tokens.css`, il n'existe pas dans le Design System. Vérifier dans la source Figma (`figma_src/styles/theme.css` sur `feat/p08-p09-refactoring`) avant d'ajouter quoi que ce soit. Si le token n'est pas dans Figma non plus, ne pas l'ajouter — demander à Damien.

### Règle n°4 : Vérifier l'alignement après modification

Après toute modification de `tokens.css`, exécuter cette vérification :

```bash
# Extraire les tokens Figma
git show feat/p08-p09-refactoring:figma_src/styles/theme.css | grep -E "^\s+--" | sed 's/:.*//' | sed 's/^\s*//' | sort -u > /tmp/figma_tokens.txt

# Extraire nos tokens
grep -E "^\s+--" packages/ui/src/tokens.css | sed 's/:.*//' | sed 's/^\s*//' | sort -u > /tmp/our_tokens.txt

# Comparer
comm -23 /tmp/figma_tokens.txt /tmp/our_tokens.txt  # Manquants chez nous
comm -13 /tmp/figma_tokens.txt /tmp/our_tokens.txt  # Extras chez nous

# Les deux commandes doivent retourner ZÉRO ligne
```

### Règle n°5 : Storybook

Lancer Storybook : `cd packages/ui && npx pnpm storybook` (port 6006).
Tout nouveau composant dans `packages/ui/src/components/` doit avoir une story dans `packages/ui/src/stories/`.

### Règle n°6 : Pattern cva pour les variants

Les composants avec plusieurs variantes utilisent `class-variance-authority` (cva). Suivre le pattern existant de Button.tsx et Badge.tsx.

---

## État actuel (10 avril 2026)

| Dimension | État | Détail |
|-----------|------|--------|
| Tokens vs Figma | ✅ 100% alignés | 0 manquant, 0 extra |
| Composants portés | 4/62 atoms | Button, Badge, Input, PropertyCard |
| Stories Storybook | 4/5 | Manquante : PropertyCard |
| Dark mode | ✅ Défini | tokens.css classe `.dark` |
| Storybook | ✅ Opérationnel | v8.6.14, React Vite |

### Composants Figma prioritaires à porter (prochains sprints)

Atoms : Checkbox, Switch, Chip, Card, TextField, Spinner, ProgressBar, Tooltip, Label, Divider, MenuItem, NavButton, DropdownButton, MultiSelect, ScoreBadge, StatusDot.

Molecules : SearchBar, InputField, Tabs, Stepper, Toast, Snackbar, SelectField, FileUpload.

Organisms : NavRail, AppBars, DatePicker, Gallery, Sheet, Menu.
