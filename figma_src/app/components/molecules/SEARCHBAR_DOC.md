# SearchBar Component

## Vue d'ensemble

Le composant **SearchBar** est une barre de recherche complète avec icône, bouton clear et état de chargement. C'est un composant molecule qui combine TextField + icônes + logique de recherche.

## Caractéristiques

### ✨ Fonctionnalités
- ✅ Icône Search toujours visible à gauche
- ✅ Bouton Clear (X) visible quand il y a du texte
- ✅ Spinner de loading pendant les recherches
- ✅ Support Enter pour lancer la recherche
- ✅ Auto-focus optionnel
- ✅ 3 tailles : sm (48px), md (56px), lg (64px)
- ✅ Support light/dark mode complet

### 🎨 Design Tokens utilisés

```css
/* Backgrounds */
--surface-neutral-default  /* Background principal */
--surface-disabled         /* Background disabled */
--surface-neutral-action   /* Background hover du bouton clear */

/* Borders */
--border-neutral-default   /* Border par défaut */
--border-neutral-emphasis  /* Border focus */

/* Colors */
--text-body               /* Texte de l'input */
--text-placeholder        /* Placeholder */
--icon-neutral-default    /* Couleur des icônes */
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `""` | Valeur de recherche |
| `onChange` | `(value: string) => void` | - | Callback appelé quand la valeur change |
| `onSearch` | `(query: string) => void` | - | Callback appelé lors de la recherche (Enter) |
| `onClear` | `() => void` | - | Callback appelé lors du clear |
| `placeholder` | `string` | `"Rechercher..."` | Texte du placeholder |
| `loading` | `boolean` | `false` | État de chargement (affiche un spinner) |
| `disabled` | `boolean` | `false` | État disabled |
| `autoFocus` | `boolean` | `false` | Auto-focus au montage |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Taille du composant |
| `className` | `string` | `""` | Classes CSS additionnelles |
| `ariaLabel` | `string` | `"Champ de recherche"` | Label pour accessibilité |

## Tailles

### Small (sm) - 48px
```tsx
<SearchBar size="sm" placeholder="Recherche rapide..." />
```
- Height: 48px
- Icon size: 16px
- Font size: 14px/18px
- Padding: 10px × 14px

### Medium (md) - 56px - **Défaut**
```tsx
<SearchBar placeholder="Rechercher..." />
```
- Height: 56px
- Icon size: 20px
- Font size: 16px/20px
- Padding: 12px × 18px

### Large (lg) - 64px
```tsx
<SearchBar size="lg" placeholder="Recherche globale..." />
```
- Height: 64px
- Icon size: 24px
- Font size: 18px/22px
- Padding: 16px × 22px

## Usage

### Basic

```tsx
import { useState } from "react";
import { SearchBar } from "@/components/molecules";

function MyComponent() {
  const [query, setQuery] = useState("");

  return (
    <SearchBar
      value={query}
      onChange={setQuery}
      onSearch={(q) => console.log("Recherche:", q)}
      placeholder="Rechercher..."
    />
  );
}
```

### Avec Loading

```tsx
import { useState } from "react";
import { SearchBar } from "@/components/molecules";

function SearchWithLoading() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchQuery: string) => {
    setIsLoading(true);
    try {
      const results = await api.search(searchQuery);
      console.log(results);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SearchBar
      value={query}
      onChange={setQuery}
      onSearch={handleSearch}
      loading={isLoading}
      placeholder="Rechercher..."
    />
  );
}
```

### Recherche de biens immobiliers

```tsx
import { SearchBar } from "@/components/molecules";
import { IconButton } from "@/components/atoms";
import { Filter } from "lucide-react";

function PropertySearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={(q) => searchProperties(q)}
          placeholder="Rechercher un bien (adresse, ville, référence)..."
        />
      </div>
      <IconButton
        icon={<Filter />}
        variant="neutral"
        title="Filtres avancés"
        size="lg"
      />
    </div>
  );
}
```

### Avec Auto-focus (pour modales)

```tsx
function SearchModal() {
  return (
    <SearchBar
      autoFocus
      placeholder="Recherche globale (Cmd+K)..."
      size="lg"
    />
  );
}
```

## Événements

### onChange
Appelé à chaque frappe dans l'input.

```tsx
<SearchBar
  onChange={(value) => {
    console.log("Valeur actuelle:", value);
    // Debounce ici pour autocomplete
  }}
/>
```

### onSearch
Appelé quand l'utilisateur appuie sur Enter.

```tsx
<SearchBar
  onSearch={(query) => {
    console.log("Lancer la recherche pour:", query);
    performSearch(query);
  }}
/>
```

### onClear
Appelé quand l'utilisateur clique sur le bouton X.

```tsx
<SearchBar
  onClear={() => {
    console.log("Recherche effacée");
    resetSearchResults();
  }}
/>
```

## États

### Vide
- Icône Search visible à gauche
- Placeholder affiché
- Pas de bouton clear

### Avec texte
- Icône Search visible
- Texte saisi affiché
- Bouton clear (X) visible à droite

### Loading
- Icône Search visible
- Spinner animé à droite
- Input désactivé
- Pas de bouton clear

### Disabled
- Opacité 50%
- Non interactif
- Background disabled
- Curseur not-allowed

### Focus
- Border highlighted (--border-neutral-emphasis)
- Transition smooth

## Raccourcis clavier

| Touche | Action |
|--------|--------|
| `Enter` | Lance la recherche (appelle `onSearch`) |
| `Esc` | Efface le champ (comportement natif) |

### Suggestion : Cmd+K pour focus global

```tsx
import { useEffect, useRef } from "react";

function GlobalSearch() {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return <SearchBar placeholder="Recherche (Cmd+K)" />;
}
```

## Accessibilité

- ✅ Support `aria-label` personnalisé
- ✅ Bouton clear avec label accessible "Effacer la recherche"
- ✅ Spinner avec `aria-label="Recherche en cours"`
- ✅ Navigation clavier complète (Tab, Enter, Esc)
- ✅ Focus visible sur le bouton clear
- ✅ Type `search` pour comportements natifs navigateur

## Combinaisons

### Avec FilterPanel

```tsx
<div className="space-y-4">
  <SearchBar
    value={query}
    onChange={setQuery}
    onSearch={handleSearch}
  />
  
  {hasActiveFilters && (
    <FilterPanel
      filters={activeFilters}
      onClear={clearAllFilters}
    />
  )}
</div>
```

### Avec Suggestions (à venir)

```tsx
<SearchBarWithSuggestions
  value={query}
  onChange={setQuery}
  onSearch={handleSearch}
  suggestions={searchSuggestions}
  onSuggestionSelect={handleSuggestionSelect}
/>
```

## Notes techniques

### Suppression du styling natif

Le composant supprime le styling natif des champs `type="search"` :

```tsx
<style>{`
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`}</style>
```

### Gestion de l'état interne

Le composant maintient un état interne synchronisé avec la prop `value` via `useEffect` pour permettre une utilisation en mode contrôlé ou non-contrôlé.

## Prochaines évolutions

- [ ] SearchBarWithSuggestions - Autocomplete avec dropdown
- [ ] SearchBarWithHistory - Historique des recherches
- [ ] SearchBarWithFilters - Filtres intégrés
- [ ] Support Cmd+K global par défaut
- [ ] Highlight du texte recherché dans les suggestions
- [ ] Support des recherches vocales (Web Speech API)

## Voir aussi

- [TextField](../atoms/TextField.tsx) - Composant de base
- [MultiSelect](../atoms/MultiSelect.tsx) - Pour filtres avancés
- [BadgeCriteria](../atoms/BadgeCriteria.tsx) - Pour afficher les filtres actifs
- [IconButton](../atoms/Button.tsx) - Pour boutons d'action associés
