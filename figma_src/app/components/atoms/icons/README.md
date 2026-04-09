# Icons - Composants Atoms

## Description

Bibliothèque d'icônes réutilisables basées sur les imports Figma (principalement Vuesax Linear style).

Chaque icône est un composant atom autonome qui utilise `currentColor` pour s'adapter automatiquement au contexte (thème, état).

## Liste des icônes disponibles

### PlusIcon
- **Source** : `/src/imports/svg-pzsue78e2k.ts`
- **Usage** : Boutons d'ajout, actions "créer"
- **Taille** : 20px (par défaut)

### LocationIcon
- **Source** : `/src/imports/svg-3m7tsxgzyt.ts` (vuesax/linear)
- **Usage** : Localisation, adresses, cartes
- **Taille** : 20px (par défaut)

### HomeIcon
- **Source** : `/src/imports/svg-3m7tsxgzyt.ts` (vuesax/linear)
- **Usage** : Type de bien, propriétés immobilières
- **Taille** : 20px (par défaut)

### FormatSquareIcon
- **Source** : `/src/imports/svg-3m7tsxgzyt.ts` (vuesax/linear)
- **Usage** : Surface, dimensions, taille
- **Taille** : 20px (par défaut)

### ProfileCircleIcon
- **Source** : `/src/imports/svg-3m7tsxgzyt.ts` (vuesax/linear)
- **Usage** : Utilisateurs, profils, propriétaires
- **Taille** : 20px (par défaut)

### CalendarIcon
- **Source** : `/src/imports/svg-3m7tsxgzyt.ts` (vuesax/linear)
- **Usage** : Dates, rendez-vous, échéances
- **Taille** : 20px (par défaut)

### ArrowRightIcon
- **Source** : `/src/imports/svg-styj6hpnw2.ts` (vuesax/linear)
- **Usage** : Navigation, actions "suivant", boutons "voir"
- **Taille** : 20px (par défaut)

## Utilisation

### Basique (utilise currentColor du parent)

```tsx
import { LocationIcon } from "@/components/atoms/icons";

// L'icône hérite de la couleur du parent
<div style={{ color: "#444955" }}>
  <LocationIcon />
</div>
```

### Avec le composant Chip

```tsx
import { Chip } from "@/components/atoms/Chip";
import { LocationIcon } from "@/components/atoms/icons";

<Chip icon={<LocationIcon />} size="medium">
  Montpellier
</Chip>
```

### Avec couleur personnalisée

```tsx
import { HomeIcon } from "@/components/atoms/icons";

<HomeIcon color="#7b72f9" />
```

### Avec taille personnalisée

```tsx
import { CalendarIcon } from "@/components/atoms/icons";

<CalendarIcon size={24} />
// ou
<CalendarIcon size="24px" />
```

## Props communes

Toutes les icônes acceptent les props suivantes :

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `"currentColor"` | Couleur du stroke (hérite du parent par défaut) |
| `size` | `number \| string` | `"100%"` | Taille de l'icône (en px ou autre unité) |
| `className` | `string` | `""` | Classes CSS additionnelles |

## Principe de currentColor

Les icônes utilisent `currentColor` pour le `stroke`, ce qui signifie qu'elles **héritent automatiquement de la couleur du texte** de leur parent.

**Avantages** :
- ✅ S'adapte automatiquement au thème (light/dark)
- ✅ Cohérence avec le texte adjacent
- ✅ Réutilisabilité maximale
- ✅ Moins de props à gérer

**Exemple avec Chip** :
```tsx
// L'icône aura la même couleur que le texte du Chip
<Chip icon={<LocationIcon />}>Paris</Chip>
```

Le composant Chip gère automatiquement la couleur via `--icon-neutral-default` ou `--icon-disabled`.

## Créer une nouvelle icône

1. **Extraire les paths SVG** depuis le fichier d'import Figma (ex: `/src/imports/svg-xxxxx.ts`)
2. **Créer le composant** dans `/src/app/components/atoms/icons/`
3. **Structure type** :

```tsx
import svgPaths from "../../../../imports/svg-xxxxx";

interface MyIconProps {
  color?: string;
  size?: number | string;
  className?: string;
}

export function MyIcon({ 
  color = "currentColor", 
  size = "100%",
  className = "" 
}: MyIconProps) {
  return (
    <svg 
      className={`block ${className}`}
      fill="none" 
      preserveAspectRatio="none" 
      viewBox="0 0 20 20"
      style={{ width: size, height: size }}
    >
      <g>
        <path d={svgPaths.pathKey} stroke={color} strokeWidth="1.5" />
      </g>
    </svg>
  );
}
```

4. **Exporter** dans `/src/app/components/atoms/icons/index.ts`

## Notes de design

- Toutes les icônes sont en **20×20px** par défaut
- Style **Vuesax Linear** : Icônes outline avec stroke 1.5px
- Utiliser `stroke` (pas `fill`) pour les icônes linear
- Opacité 0 pour les paths de masque/container invisibles