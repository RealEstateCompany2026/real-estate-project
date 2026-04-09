# ListCarnet

## Description

Composant molecule du design system RealAgent pour afficher les carnets avec informations détaillées et statut.

**100% Design System Atomic** - Composé exclusivement d'atoms :
- **Chip** (avec icônes LocationIcon, HomeIcon, FormatSquareIcon, ProfileCircleIcon, CalendarIcon)
- **IconDpe** (badge DPE A à G)
- **Badge** (statut : Inactif, Invité, Activé)
- **AiSuggestion** (badge de suggestions IA)

**Dimensions** : Hauteur fixe de **70px** pour chaque item de la liste.

## Composition

Le composant utilise uniquement des **atoms du design system** :

### Partie gauche (informations principales)
1. **Chip + LocationIcon** : Localisation (ville)
2. **Chip + HomeIcon** : Type de bien (T1, T2, T3, etc.)
3. **Chip + FormatSquareIcon** : Surface (m²)
4. **IconDpe** : Badge DPE (A à G)
5. **Chip + ProfileCircleIcon** : Propriétaire

### Partie droite (statut et méta)
6. **Badge** : Statut (ACTIVÉ, EN COURS, etc.)
7. **Chip + CalendarIcon** : Date
8. **AiSuggestion** : Badge de suggestions IA (violet avec nombre)

## Structure

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│ [📍 Montpellier] [🏠 T3] [□ 120m²] [A] [👤 RASTAPOPULOS, Roberto]  [ACTIVÉ] [📅 12 fév. 2026] [1] │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

## Props

### ListCarnetProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `ListCarnetItem[]` | Données par défaut | Liste des éléments à afficher |

### ListCarnetItem

| Prop | Type | Description |
|------|------|-------------|
| `location` | `string` | Localisation (ville) |
| `type` | `string` | Type de bien (T1, T2, T3, etc.) |
| `surface` | `string` | Surface en m² |
| `dpe` | `DpeType` | Classe énergétique (A à G) |
| `owner` | `string` | Nom du propriétaire |
| `status.label` | `string` | Label du statut |
| `status.variant` | `BadgeVariant` | Variante du badge de statut |
| `date` | `string` | Date formatée |
| `aiSuggestions` | `number` | Nombre de suggestions IA |

## Variantes de statut

Les badges de statut utilisent les variants du composant **Badge** :

| Status | Variant | Couleur | Usage |
|--------|---------|---------|-------|
| **Inactif** | `disabled` | Gris | Carnet inactif |
| **Invité** | `warning` | Orange | Carnet avec invitation en cours |
| **Activé** | `success` | Vert | Carnet actif |

## Utilisation

### Basique

```tsx
import { ListCarnet } from "@/components/molecules/ListCarnet";

function CarnetSection() {
  return <ListCarnet />;
}
```

### Avec données personnalisées

```tsx
import { ListCarnet } from "@/components/molecules/ListCarnet";

function CarnetSection() {
  const carnetItems = [
    {
      location: "Paris",
      type: "T4",
      surface: "85m²",
      dpe: "B",
      owner: "DUPONT, Marie",
      status: {
        label: "EN COURS",
        variant: "warning",
      },
      date: "15 mars 2026",
      aiSuggestions: 3,
    },
    {
      location: "Lyon",
      type: "T2",
      surface: "55m²",
      dpe: "C",
      owner: "MARTIN, Jean",
      status: {
        label: "TERMINÉ",
        variant: "success",
      },
      date: "20 mars 2026",
      aiSuggestions: 1,
    },
  ];

  return <ListCarnet items={carnetItems} />;
}
```

## Design Tokens utilisés

- `--neutral-white`
- `--neutral-50`
- `--neutral-700`
- `--neutral-800`
- `--text-body`

## Dépendances

- `vuesax/linear` : Icons (MapPin, Home, Square, User, Calendar)
- `IconDpe` : Badge DPE
- `Badge` : Badge de statut
- `ThemeContext` : Support light/dark mode

## Notes de design

- Padding horizontal : `33px`
- Padding vertical : `25px`
- Border-radius : `16px`
- Gap entre items de la partie gauche : `24px` (6 × 4px)
- Gap entre icon et text : `4px`
- Gap entre badge et date : `24px`
- Font : Roboto, Semi-Bold, 16px
- Line-height : 20px
- Letter-spacing : 0.16px