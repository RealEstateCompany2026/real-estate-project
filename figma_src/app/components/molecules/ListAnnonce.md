# ListAnnonce

## Description

Composant molecule du design system RealAgent pour afficher les annonces avec informations détaillées, badges de workflow et action de visualisation.

**100% Design System Atomic** - Composé exclusivement d'atoms :
- **Chip** (avec icônes LocationIcon, HomeIcon, FormatSquareIcon, ProfileCircleIcon)
- **IconDpe** (badge DPE A à G)
- **Badge** (statuts de workflow : ÉDITION, RÉVISION, PUBLICATION)
- **Button** (action "Voir" avec ArrowRightIcon)
- **AiSuggestion** (badge de suggestions IA)

**IMPORTANT** : Les 3 badges de workflow sont **TOUJOURS présents** :
- Badge "ÉDITION" : disabled / warning / success
- Badge "RÉVISION" : disabled / warning / success
- Badge "PUBLICATION" : disabled / warning / success

**Dimensions** : Hauteur fixe de **70px** pour chaque item de la liste.

## Composition

Le composant utilise uniquement des **atoms du design system** :

### Partie gauche (informations principales)
1. **Chip + LocationIcon** : Localisation (ville)
2. **Chip + HomeIcon** : Type de bien (T1, T2, T3, etc.)
3. **Chip + FormatSquareIcon** : Surface (m²)
4. **IconDpe** : Badge DPE (A à G)
5. **Chip + ProfileCircleIcon** : Propriétaire

### Partie droite (workflow, action, et méta)
6. **Badge** × N : Statuts de workflow (ÉDITION, RÉVISION, PUBLICATION, etc.)
7. **Button** : Action "Voir" avec icône flèche droite
8. **AiSuggestion** : Badge de suggestions IA (violet avec nombre)

## Structure

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [📍 Montpellier] [🏠 T3] [□ 120m²] [A] [👤 RASTAPOPULOS, Roberto]  [ÉDITION] [RÉVISION] [PUBLICATION] [Voir →] [1] │
└─────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Interface TypeScript

```typescript
export interface ListAnnonceItem {
  location: string;                 // Localisation du bien
  type: string;                     // Type de bien (T1, T2, T3, etc.)
  surface: string;                  // Surface (ex: "120m²")
  dpe: DpeType;                     // Classe DPE ("A" à "G")
  owner: string;                    // Nom du propriétaire
  editionStatus: BadgeVariant;      // Statut badge ÉDITION (disabled / warning / success)
  revisionStatus: BadgeVariant;     // Statut badge RÉVISION (disabled / warning / success)
  publicationStatus: BadgeVariant;  // Statut badge PUBLICATION (disabled / warning / success)
  aiSuggestions?: number;           // Nombre de suggestions IA (optionnel)
  onView?: () => void;              // Callback pour le bouton "Voir"
}

export interface ListAnnonceProps {
  items?: ListAnnonceItem[];        // Liste des annonces à afficher
}
```

## Variantes de workflow (3 badges toujours présents)

Les **3 badges de workflow** sont **TOUJOURS affichés** et chacun peut avoir 3 états :

### Badge "ÉDITION"
| Variant | Couleur | État |
|---------|---------|------|
| `disabled` | Gris | Édition non commencée |
| `warning` | Orange | Édition en cours |
| `success` | Vert | Édition terminée |

### Badge "RÉVISION"
| Variant | Couleur | État |
|---------|---------|------|
| `disabled` | Gris | Révision non commencée |
| `warning` | Orange | Révision en cours |
| `success` | Vert | Révision terminée |

### Badge "PUBLICATION"
| Variant | Couleur | État |
|---------|---------|------|
| `disabled` | Gris | Publication non commencée |
| `warning` | Orange | Publication en attente |
| `success` | Vert | Publication effectuée |

## Utilisation

### Exemple basique

```tsx
import { ListAnnonce } from "@/components/molecules/ListAnnonce";

function MyPage() {
  return (
    <ListAnnonce />
  );
}
```

### Exemple avec données personnalisées

```tsx
import { ListAnnonce, ListAnnonceItem } from "@/components/molecules/ListAnnonce";

const myAnnonces: ListAnnonceItem[] = [
  {
    location: "Paris",
    type: "T2",
    surface: "45m²",
    dpe: "C",
    owner: "DUPONT, Marie",
    editionStatus: "success",
    revisionStatus: "success",
    publicationStatus: "disabled",
    aiSuggestions: 3,
    onView: () => console.log("Voir annonce Paris"),
  },
  {
    location: "Lyon",
    type: "T4",
    surface: "95m²",
    dpe: "B",
    owner: "MARTIN, Jean",
    editionStatus: "disabled",
    revisionStatus: "disabled",
    publicationStatus: "information",
    aiSuggestions: 0,
    onView: () => console.log("Voir annonce Lyon"),
  },
];

function MyPage() {
  return (
    <ListAnnonce items={myAnnonces} />
  );
}
```

### Exemple avec gestion d'événements

```tsx
import { ListAnnonce, ListAnnonceItem } from "@/components/molecules/ListAnnonce";
import { useNavigate } from "react-router";

function MyPage() {
  const navigate = useNavigate();

  const handleViewAnnonce = (id: string) => {
    navigate(`/annonces/${id}`);
  };

  const annonces: ListAnnonceItem[] = [
    {
      location: "Montpellier",
      type: "T3",
      surface: "120m²",
      dpe: "A",
      owner: "RASTAPOPULOS, Roberto",
      editionStatus: "success",
      revisionStatus: "success",
      publicationStatus: "warning",
      aiSuggestions: 1,
      onView: () => handleViewAnnonce("123"),
    },
  ];

  return (
    <ListAnnonce items={annonces} />
  );
}
```

## Thèmes

Le composant supporte les modes **light** et **dark** via `ThemeContext` :

### Light mode
- Background : `var(--neutral-white)` (#FFFFFF)
- Border : `var(--neutral-50)` (#ECEDEE)
- Texte : Géré par les atoms (Chip, Badge, Button)

### Dark mode
- Background : `var(--neutral-800)` (#111215)
- Border : `var(--neutral-700)` (#22252B)
- Texte : Géré par les atoms (Chip, Badge, Button)

## Accessibilité

- ✅ Contenu sémantique avec boutons cliquables
- ✅ Callback `onView` pour la navigation
- ✅ Support clavier via composant Button
- ✅ Contraste respecté (AA minimum)

## Différences avec ListCarnet

| Caractéristique | ListCarnet | ListAnnonce |
|----------------|------------|-------------|
| **Partie droite** | Badge statut unique + Date + AI | Badges workflow multiples + Bouton "Voir" + AI |
| **Action** | Pas de bouton d'action | Bouton "Voir" avec callback |
| **Workflow** | Statut simple (ACTIVÉ) | Statuts multiples (ÉDITION, RÉVISION, PUBLICATION) |
| **Date** | Affichée | Non affichée |

## Notes

- Les badges de workflow sont dynamiques et peuvent être 1 à N badges
- Le bouton "Voir" utilise le variant `neutral` avec icône `ArrowRightIcon` à droite
- L'AI suggestion badge est optionnel (affiché uniquement si `aiSuggestions` est défini)
- Le composant utilise `space-y-2` pour espacer plusieurs items (8px)