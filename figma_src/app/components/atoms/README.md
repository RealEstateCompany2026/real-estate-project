# Atoms - RealAgent Design System

Composants atomiques de base extraits du Design System Figma.

## Table of Contents
- [Button](#button)
- [IconButton](#iconbutton)
- [IconButtonMega](#iconbuttonmega)
- [SendingIconButton](#sendingiconbutton)
- [ButtonMultiLabel](#buttonmultilabel)
- [ButtonPagination](#buttonpagination)
- [ButtonSort](#buttonsort)
- [Chip](#chip)
- [ChipScore](#chipscore)
- [ChipTrend](#chiptrend)
- [MessageStatusDot](#messagestatusdot)
- [Badge](#badge)
- [BadgeCriteria](#badgecriteria)

---

## Badge

Composant de label contextuel (AtomeSticker dans Figma).

### Structure Figma
- **Hauteur**: 20px fixe
- **Border-radius**: 16px (pill-shaped)
- **Border**: 1px solid
- **Padding**: 8px horizontal, 4px vertical
- **Font**: Roboto Bold 12px/14px, tracking 0.12px
- **Support**: Light/Dark mode automatique

### Variants

#### Default
```tsx
<Badge variant="default" label="Par défaut" />
```
- Light: border #444955, text #444955, background transparent
- Dark: border #D0D1D4, text #DADBDD, background transparent

#### Disabled
```tsx
<Badge variant="disabled" label="Désactivé" />
```
- Light: bg #ECEDEE, border #A1A4AA, text #A1A4AA
- Dark: bg #22252B, border #444955, text #A1A4AA

#### Information
```tsx
<Badge variant="information" label="Info" />
```
- Light: bg #E5E6FF, border #BFC2FF, text #000AFF
- Dark: bg #4A4595, border #635CC7, text #E5E3FE

#### Warning
```tsx
<Badge variant="warning" label="Attention" />
```
- Light: bg #FFF0E5, border #FFDABF, text #FF6B00
- Dark: bg #803600, border #BF5000, text #FFE1CC

#### Success
```tsx
<Badge variant="success" label="Validé" />
```
- Light: bg #E6F6E5, border #C3E9BF, text #0DA500
- Dark: bg #0C6304, border #109204, text #CFEDCC

#### Error
```tsx
<Badge variant="error" label="Erreur" />
```
- Light: bg #FFE5E5, border #FFBFBF, text #FF0000
- Dark: bg #800000, border #BF0000, text #FFCCCC

### Usage Example
```tsx
import { Badge } from "./components/atoms";

// Statuts simples
<Badge variant="success" label="Actif" />
<Badge variant="warning" label="En attente" />
<Badge variant="error" label="Rejeté" />

// Contextes métier
<Badge variant="information" label="Nouveau" />
<Badge variant="default" label="Standard" />
```

---

## BadgeCriteria

Badge de filtre/critère de recherche avec bouton de suppression (AtomeCriteria dans Figma).

### Structure Figma
- **Hauteur**: 24px (outlined), auto (default)
- **Border-radius**: 16px (pill-shaped)
- **Border**: 1px solid
- **Padding outlined**: 6px horizontal, 4px vertical
- **Padding default**: 6px horizontal, 4px vertical (light), 10px horizontal, 8px vertical (dark)
- **Font**: Roboto Bold 14px/16px, tracking 0.14px
- **Icône**: X (18px) à droite avec gap 10px
- **Support**: Light/Dark mode automatique

### Variants

#### Outlined
```tsx
<BadgeCriteria variant="outlined" label="Paris 75001" onRemove={() => {}} />
```
- Light: border #444955, text #444955, background transparent
- Dark: border #D0D1D4, text #DADBDD, background transparent
- Hauteur fixe: 24px

#### Default
```tsx
<BadgeCriteria variant="default" label="Appartement" onRemove={() => {}} />
```
- Light: bg #ECEDEE, text #444955, border transparent
- Dark: bg #22252B, text #DADBDD, border transparent
- Hauteur: auto (s'adapte au contenu)

### Usage Examples

#### Filtres de recherche de biens
```tsx
import { BadgeCriteria } from "./components/atoms";
import { useState } from "react";

function PropertySearchFilters() {
  const [filters, setFilters] = useState([
    { id: 1, label: "Paris 75001" },
    { id: 2, label: "Appartement" },
    { id: 3, label: "2-3 pièces" },
    { id: 4, label: "200k - 400k €" },
  ]);

  const removeFilter = (id: number) => {
    setFilters(filters.filter(f => f.id !== id));
  };

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map(filter => (
        <BadgeCriteria
          key={filter.id}
          variant="outlined"
          label={filter.label}
          onRemove={() => removeFilter(filter.id)}
        />
      ))}
    </div>
  );
}
```

#### Critères actifs dans les résultats
```tsx
<div className="flex flex-wrap gap-3">
  <BadgeCriteria 
    variant="outlined" 
    label="Lyon 69000" 
    onRemove={() => console.log("Supprimer")} 
  />
  <BadgeCriteria 
    variant="outlined" 
    label="Maison" 
    onRemove={() => console.log("Supprimer")} 
  />
  <BadgeCriteria 
    variant="outlined" 
    label="Jardin" 
    onRemove={() => console.log("Supprimer")} 
  />
</div>
```

#### Variante default (fond coloré)
```tsx
<div className="flex flex-wrap gap-3">
  <BadgeCriteria variant="default" label="Paris 75" onRemove={() => {}} />
  <BadgeCriteria variant="default" label="T2-T3" onRemove={() => {}} />
  <BadgeCriteria variant="default" label="Balcon" onRemove={() => {}} />
</div>
```

#### Sans bouton de suppression
```tsx
// Critère non supprimable (affichage seulement)
<BadgeCriteria variant="outlined" label="Filtre permanent" />
<BadgeCriteria variant="default" label="Critère fixe" />
```

### Props

```typescript
interface BadgeCriteriaProps {
  variant?: "outlined" | "default";  // Style du badge
  label: string;                     // Texte du critère
  onRemove?: () => void;             // Callback suppression (optionnel)
  className?: string;
}
```

### Comportement

- **Hover sur X** : Opacité 70% (transition smooth)
- **Click sur X** : Appelle `onRemove` callback
- **Sans onRemove** : Le bouton X n'est pas affiché
- **Accessibilité** : `aria-label` sur le bouton de suppression

### Icône de suppression

- Utilise lucide-react `X` icon (18px container, 14px icon)
- Stroke-width: 2.5 pour meilleure visibilité
- Couleur adaptée au thème (light/dark)
- Aria-label: "Supprimer le filtre {label}"

### Cas d'usage

- ✅ Filtres de recherche actifs
- ✅ Critères de recherche de biens/clients
- ✅ Tags sélectionnés dans un multi-select
- ✅ Filtres appliqués dans un tableau
- ✅ Mots-clés de recherche
- ✅ Catégories sélectionnées

### Différences Badge vs BadgeCriteria

| Feature | Badge | BadgeCriteria |
|---------|-------|---------------|
| Hauteur | 20px | 24px (outlined) |
| Font size | 12px | 14px |
| Suppression | ❌ Non | ✅ Oui (X icon) |
| Usage | Statuts | Filtres actifs |
| Variantes | 6 sémantiques | 2 visuelles |
| Interactif | ❌ Non | ✅ Oui (remove) |

### Combinaison avec BadgeCriteria dans une recherche

```tsx
function SearchResults() {
  const [criteria, setCriteria] = useState([
    { id: 1, label: "Paris 75001" },
    { id: 2, label: "Appartement" },
  ]);

  return (
    <div className="space-y-4">
      {/* Filtres actifs */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">Filtres actifs :</span>
        <div className="flex flex-wrap gap-2">
          {criteria.map(c => (
            <BadgeCriteria
              key={c.id}
              variant="outlined"
              label={c.label}
              onRemove={() => setCriteria(prev => prev.filter(x => x.id !== c.id))}
            />
          ))}
        </div>
      </div>

      {/* Résultats avec badges de statut */}
      <div className="space-y-3">
        {results.map(result => (
          <div key={result.id} className="flex items-center gap-3">
            <span>{result.name}</span>
            <Badge variant="success" label="Actif" />
            <Badge variant="information" label="Nouveau" />
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

## Button

Composant bouton unifié basé sur les 9 variantes importées depuis Figma (Button-2-22749 à Button-2-22874).

### Structure Figma
- **Padding**: 12px
- **Gap**: 8px (entre icônes et texte)
- **Border-radius**: 16px (--radius-scale400)
- **Font**: Roboto SemiBold 16px/20px, tracking 0.16px
- **Icons**: 20px size (optionnels gauche/droite)
- **Focus Ring**: 2px border à -4px offset (visible sur `:focus-visible`)

### Variants

#### Primary (Branded)
```tsx
<Button variant="primary">Action principale</Button>
<Button variant="primary" iconLeft={<Icon />}>Avec icône</Button>
```
- **Background**: `var(--color-branded-500)` (#7b72f9)
- **Text**: `var(--text-neutral-on-action)` (white)
- **Border**: 1px solid branded
- **Hover**: #635cc7 (Button-2-22874)
- **Focus Ring**: #635cc7

#### Secondary
```tsx
<Button variant="secondary">Action secondaire</Button>
<Button variant="secondary" outlined>Avec bordure</Button>
```
- **Background**: `var(--surface-neutral-default)` (white)
- **Text**: `var(--text-body)` (#444955)
- **Border**: 0px (ou 1px si `outlined`)
- **Focus Ring**: #333740

#### Ghost (Transparent)
```tsx
<Button variant="ghost">Action discrète</Button>
```
- **Background**: transparent
- **Text**: `var(--text-body)`
- **Border**: 0px
- **Focus Ring**: #333740

#### Disabled
```tsx
<Button disabled>Désactivé</Button>
```
- **Background**: `var(--surface-disabled)` (#ecedee)
- **Text**: `var(--text-disabled)` (#a1a4aa)
- **Cursor**: not-allowed
- **Focus Ring**: ❌ Aucun (disabled ne peut pas être focus)

### Focus Ring (Nouveauté !)

Le **focus ring** est un anneau de focus de 2px qui apparaît **uniquement lors de la navigation clavier** (`:focus-visible`). Il est positionné à 4px à l'extérieur du bouton, suivant exactement la structure Figma.

**Structure Figma** (Button-2-23428, Button-2-23444, Button-2-23476) :
```tsx
<div className="absolute inset-[-4px] rounded-[16px]">
  <div className="border-2" style={{ borderColor: focusRingColor }} />
</div>
```

**Couleurs du focus ring** :
- Primary : `#635cc7` (Button-2-23476 - branded hover)
- Secondary : `#333740` (Button-2-23428 - dark text)
- Ghost : `#333740` (Button-2-23444 - dark text)
- Disabled : Pas de focus ring

Le focus ring apparaît automatiquement lors de la navigation au clavier (Tab) et disparaît lors du clic souris, suivant les meilleures pratiques d'accessibilité.

### Props

```typescript
interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "disabled";
  outlined?: boolean;         // Ajoute une bordure (secondary only)
  iconLeft?: ReactNode;       // Icône gauche (20px)
  iconRight?: ReactNode;      // Icône droite (20px)
  children: string;           // Texte du bouton
  onClick?: () => void;       // Handler click
  disabled?: boolean;         // État désactivé
  className?: string;         // Classes additionnelles
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;        // Largeur 100%
}
```

### Exemples

```tsx
// Bouton primaire avec icône
<Button 
  variant="primary" 
  iconLeft={<PlusIcon />}
  onClick={() => console.log('clicked')}
>
  Créer un client
</Button>

// Bouton secondaire outlined
<Button variant="secondary" outlined>
  Annuler
</Button>

// Bouton ghost avec icône droite
<Button variant="ghost" iconRight={<ArrowIcon />}>
  Suivant
</Button>

// Bouton full width
<Button variant="primary" fullWidth>
  Valider
</Button>
```

## IconButton

Composant bouton avec icône uniquement (sans texte), basé sur 10 variantes Figma (IconButton-2-22909 à IconButton-2-23340).

### Structure Figma
- **Sizes**: sm (32×32px), md (44×44px), lg (56×56px)
- **Padding**: sm: 8px, md: 12px, lg: 16px
- **Border-radius**: 16px
- **Icon**: sm: 16px, md: 20px, lg: 24px
- **Focus Ring**: 2px border à -4px offset (visible sur `:focus-visible`)

### Variants & Sizes

#### Standard (md - 44×44px)
```tsx
<IconButton icon={<Search />} variant="primary" />
<IconButton icon={<Edit />} variant="secondary" />
<IconButton icon={<Trash />} variant="ghost" />
```

#### Small (sm - 32×32px)
```tsx
<IconButton size="sm" icon={<Plus />} variant="primary" />
```

#### Large (lg - 56×56px)
```tsx
<IconButton size="lg" icon={<Menu />} variant="secondary" outlined />
```

## IconButtonMega

Composant bouton extra large avec icône uniquement (70×70px), basé sur les variantes Figma IconButtonMega.

### Structure Figma
- **Size**: 70×70px (fixe)
- **Padding**: 23px
- **Border-radius**: 28px
- **Icon**: 24×24px
- **Focus Ring**: 2px border à -4px offset (visible sur `:focus-visible`)

### Variants

#### Primary (Branded)
```tsx
<IconButtonMega icon={<X />} variant="primary" />
```
- **Background**: #7b72f9 (violet branded)
- **Icon Color**: white
- **Border**: 1px solid branded
- **Focus Ring**: #635cc7

#### Secondary
```tsx
<IconButtonMega icon={<Search />} variant="secondary" />
<IconButtonMega icon={<Edit />} variant="secondary" outlined />
```
- **Background**: white
- **Icon Color**: #444955
- **Border**: 0px (ou 1px si `outlined`)
- **Focus Ring**: #333740

#### Ghost
```tsx
<IconButtonMega icon={<Menu />} variant="ghost" />
```
- **Background**: transparent
- **Icon Color**: #444955
- **Focus Ring**: #333740

### Usage Examples

```tsx
import { IconButtonMega } from "@/components/atoms";
import { X, Plus, Menu } from "lucide-react";

// Primary mega button (fermé modal/dialog)
<IconButtonMega 
  icon={<X className="w-[24px] h-[24px]" />} 
  variant="primary"
  title="Fermer"
/>

// Secondary outlined mega button
<IconButtonMega 
  icon={<Plus className="w-[24px] h-[24px]" />} 
  variant="secondary"
  outlined
  title="Ajouter"
/>

// Ghost mega button
<IconButtonMega 
  icon={<Menu className="w-[24px] h-[24px]" />} 
  variant="ghost"
  title="Menu"
/>
```

### Props

```typescript
interface IconButtonMegaProps {
  icon: ReactNode;              // Icône à afficher (24×24px recommandé)
  variant?: "primary" | "secondary" | "ghost" | "disabled";
  outlined?: boolean;           // Ajoute une bordure (secondary uniquement)
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  title?: string;              // Tooltip/accessibility
}
```

### Comparaison des tailles

| Composant | Taille | Padding | Icône | Border-radius |
|-----------|--------|---------|-------|---------------|
| IconButton sm | 32×32px | 8px | 16px | 16px |
| IconButton md | 44×44px | 12px | 20px | 16px |
| IconButton lg | 56×56px | 16px | 24px | 16px |
| **IconButtonMega** | **70×70px** | **23px** | **24px** | **28px** |

## SendingIconButton

Composant bouton d'envoi avec feedback visuel (46×46px), basé sur les variantes Figma SendingIconButton.

### Structure Figma
- **Size**: 46×46px (fixe)
- **Padding**: 12px
- **Border-radius**: 16px
- **Icon**: 20×20px (Send ou Check selon l'état)

### States

Le bouton change automatiquement d'apparence selon son état :

#### idle (État initial)
```tsx
<SendingIconButton status="idle" onClick={handleSend} />
```
- **Background**: #7b72f9 (violet branded)
- **Icon**: Send (flèche d'envoi)
- **Comportement**: Prêt à envoyer

#### sending (Envoi en cours)
```tsx
<SendingIconButton status="sending" />
```
- **Background**: #635cc7 (violet hover)
- **Icon**: Send (flèche d'envoi)
- **Comportement**: Disabled, non cliquable

#### sent (Envoyé avec succès)
```tsx
<SendingIconButton status="sent" />
```
- **Background**: #0da500 (vert success)
- **Icon**: Check (validation)
- **Comportement**: Feedback visuel de succès

### Usage Pattern

Le pattern typique pour utiliser SendingIconButton dans un formulaire de chat ou message :

```tsx
import { SendingIconButton } from "@/components/atoms";
import { useState } from "react";
import type { SendingStatus } from "@/components/atoms";

function ChatInput() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SendingStatus>("idle");

  const handleSend = async () => {
    if (!message.trim()) return;
    
    setStatus("sending");
    
    try {
      await sendMessage(message);
      setStatus("sent");
      setMessage(""); // Clear input
      
      // Reset to idle after 2s
      setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      setStatus("idle"); // Reset on error
      console.error(error);
    }
  };

  return (
    <div className="flex gap-[8px]">
      <input 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Votre message..."
        disabled={status === "sending"}
      />
      <SendingIconButton 
        status={status}
        onClick={handleSend}
      />
    </div>
  );
}
```

### Props

```typescript
interface SendingIconButtonProps {
  status?: "idle" | "sending" | "sent";  // État du bouton
  onClick?: () => void;                   // Handler click (disabled si sending)
  disabled?: boolean;                     // Désactiver manuellement
  className?: string;
  title?: string;                        // Tooltip (auto si non fourni)
}
```

### Animation Recommandée

Pour une meilleure UX, ajoutez des transitions :

```tsx
// Transition automatique dans le composant
<SendingIconButton 
  status={status}
  onClick={() => {
    setStatus("sending");
    // API call...
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 2000); // Auto-reset
  }}
/>
```

### Cas d'usage

- ✅ Bouton d'envoi de message (chat, formulaire)
- ✅ Bouton de soumission de formulaire avec feedback
- ✅ Action d'envoi d'email/notification
- ✅ Tout bouton nécessitant un feedback visuel de succès

### Comparaison SendingIconButton vs IconButton

| Feature | SendingIconButton | IconButton |
|---------|------------------|------------|
| Taille | 46×46px (fixe) | 32/44/56px |
| États | idle/sending/sent | variants |
| Feedback | Auto (couleur+icône) | Manuel |
| Usage | Envoi/Submit | Actions générales |

## ButtonMultiLabel (Segmented Control)

Composant groupe de boutons avec sélection unique (aussi appelé Segmented Control), basé sur les variantes Figma ButtonMultiLabel.

### Structure Figma
- **Border-radius**: 20px (coins externes uniquement)
- **Padding**: 6px par bouton
- **Inner padding**: 10px horizontal, 8px vertical
- **Font**: Roboto 16px/20px, tracking 0.16px
- **Selected**: Bold (700), background #dadbdd, color #333740
- **Unselected**: SemiBold (600), background #ffffff, color #444955

### Usage de base

```tsx
import { ButtonMultiLabel } from "@/components/atoms";
import { useState } from "react";

function MyComponent() {
  const [view, setView] = useState("Liste");

  return (
    <ButtonMultiLabel 
      options={["Liste", "Grille", "Tableau"]}
      value={view}
      onChange={setView}
    />
  );
}
```

### Version non contrôlée

Pour un prototypage rapide sans gérer le state :

```tsx
import { ButtonMultiLabelControlled } from "@/components/atoms";

function QuickDemo() {
  return (
    <ButtonMultiLabelControlled
      options={["Option 1", "Option 2", "Option 3"]}
      defaultValue="Option 1"
      onValueChange={(value) => console.log("Selected:", value)}
    />
  );
}
```

### Props - ButtonMultiLabel

```typescript
interface ButtonMultiLabelProps {
  options: string[];           // Array de labels à afficher
  value: string;               // Valeur sélectionnée (doit être dans options)
  onChange: (value: string) => void;  // Callback quand la sélection change
  className?: string;
  fullWidth?: boolean;         // Prend toute la largeur disponible
}
```

### Props - ButtonMultiLabelControlled

```typescript
interface ButtonMultiLabelControlledProps {
  options: string[];
  defaultValue?: string;       // Valeur par défaut (première option si non fournie)
  onValueChange?: (value: string) => void;  // Optional callback
  className?: string;
  fullWidth?: boolean;
}
```

### Exemples d'usage réels

#### Filtre de vue
```tsx
const [viewMode, setViewMode] = useState("Liste");

<ButtonMultiLabel 
  options={["Liste", "Grille", "Tableau"]}
  value={viewMode}
  onChange={setViewMode}
/>
```

#### Filtre de période
```tsx
const [period, setPeriod] = useState("Mois");

<ButtonMultiLabel 
  options={["Jour", "Semaine", "Mois", "Année"]}
  value={period}
  onChange={setPeriod}
  fullWidth
/>
```

#### Type de bien
```tsx
const [propertyType, setPropertyType] = useState("Appartement");

<ButtonMultiLabel 
  options={["Appartement", "Maison", "Terrain", "Commercial"]}
  value={propertyType}
  onChange={setPropertyType}
/>
```

#### Statut de deal
```tsx
const [dealStatus, setDealStatus] = useState("En cours");

<ButtonMultiLabel 
  options={["En cours", "Gagné", "Perdu", "Archivé"]}
  value={dealStatus}
  onChange={setDealStatus}
/>
```

### Nombre variable d'options

Le composant s'adapte automatiquement au nombre d'options :

```tsx
// 2 options (toggle-like)
<ButtonMultiLabel options={["Oui", "Non"]} value={value} onChange={setValue} />

// 3 options (standard)
<ButtonMultiLabel options={["Petit", "Moyen", "Grand"]} value={value} onChange={setValue} />

// 4+ options
<ButtonMultiLabel 
  options={["Tous", "Clients", "Biens", "Deals", "Tâches"]} 
  value={value} 
  onChange={setValue} 
/>
```

### Full Width

Pour que le composant prenne toute la largeur disponible :

```tsx
<ButtonMultiLabel 
  options={["Option 1", "Option 2", "Option 3"]}
  value={value}
  onChange={setValue}
  fullWidth  // Chaque bouton prend 1/3 de la largeur
/>
```

### Spécifications techniques

| Propriété | Valeur |
|-----------|--------|
| Border-radius externe | 20px (gauche/droite) |
| Border-radius interne | 0px |
| Padding bouton | 6px |
| Inner padding | 10px (horizontal) × 8px (vertical) |
| Min-width par option | 80px |
| Border | 1px solid #dadbdd |
| Font selected | Roboto Bold 16px/20px |
| Font unselected | Roboto SemiBold 16px/20px |

### Comportement

- **Click** : Change la sélection à l'option cliquée
- **Hover** : Opacité 80% sur les options non sélectionnées
- **Selected** : Cursor default (non cliquable)
- **Unselected** : Cursor pointer
- **Aria**: `role="group"` et `aria-pressed` pour accessibilité

### Cas d'usage

- ✅ Filtre de vue (liste/grille/tableau)
- ✅ Sélection de période (jour/semaine/mois/année)
- ✅ Type de bien/client/deal
- ✅ Statut de deal
- ✅ Toggle binaire (oui/non, actif/inactif)
- ✅ Sélection de catégorie
- ✅ Navigation entre sections

### Comparaison avec autres composants

| Feature | ButtonMultiLabel | Button | AppBarChip |
|---------|-----------------|---------|-----------|
| Sélection unique | ✅ Oui | ❌ Non | ✅ Oui |
| Groupe visible | ✅ Oui | ❌ Non | ❌ Non |
| Feedback visuel | ✅ Bold+BG | ❌ Click | ✅ Background |
| Usage | Filtres/Vues | Actions | Filtres |
| Border-radius | 20px | 16px | 16px |

## Migration depuis l'ancien Button

### Avant
```tsx
import { Button } from "../components/Button";

<Button variant="branded">Texte</Button>
<Button variant="secondary">Texte</Button>
<Button variant="ghost">Texte</Button>
<Button variant="error">Texte</Button>
```

### Après
```tsx
import { Button } from "../components/atoms/Button";

<Button variant="primary">Texte</Button>
<Button variant="secondary">Texte</Button>
<Button variant="ghost">Texte</Button>
<Button variant="primary">Texte</Button> // Pas de variant "error" dans Figma
```

### Changements principaux
1. **Path d'import**: `components/Button` → `components/atoms/Button`
2. **Variant "branded"** → **"primary"**
3. **Pas de variant "error"** (utilisez primary ou secondary selon contexte)
4. **Structure interne**: Basée exactement sur le code généré par Figma
5. **Tokens CSS**: Utilise les tokens du design system au lieu de couleurs hardcodées

## Design Tokens Utilisés

| Token | Utilisation | Light Mode | Dark Mode |
|-------|-------------|------------|-----------|
| `--color-branded-500` | Background primary | #7b72f9 | #7b72f9 |
| `--surface-neutral-default` | Background secondary | white | #1a1b1e |
| `--surface-disabled` | Background disabled | #ecedee | #2a2b2e |
| `--text-body` | Text secondary/ghost | #444955 | #e4e5e7 |
| `--text-neutral-on-action` | Text primary | white | white |
| `--text-disabled` | Text disabled | #a1a4aa | #737780 |

## Fichiers Source Figma

Les 9 variantes importées :
- `Button-2-22749.tsx` - Secondary Light Default
- `Button-2-22802.tsx` - Secondary Light Outlined
- `Button-2-22806.tsx` - Disabled Light
- `Button-2-22821.tsx` - Secondary Hover
- `Button-2-22836.tsx` - Secondary Dark Outlined
- `Button-2-22851.tsx` - Ghost Light
- `Button-2-22866.tsx` - Ghost Dark
- `Button-2-22870.tsx` - Primary Light (branded)
- `Button-2-22874.tsx` - Primary Hover

## Page de Démo

Voir `/button-demo` pour une démonstration complète de toutes les variantes.