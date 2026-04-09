# Spinner / Loader

## Vue d'ensemble

Le composant **Spinner** est un indicateur de chargement animé utilisant l'icône `Loader2` de Lucide React avec une animation de rotation continue.

## Caractéristiques

- ✅ Animation rotation continue (1 tour/seconde)
- ✅ 3 tailles : sm (16px), md (24px), lg (32px)
- ✅ 3 variants : primary (purple), neutral (grey), inverse (white/black)
- ✅ Support complet light/dark mode
- ✅ ARIA labels pour accessibilité
- ✅ Stroke width 2px pour toutes les tailles
- ✅ Composant atomique léger

## Import

```tsx
import { Spinner } from "@/components/atoms/Spinner";
```

## Usage basique

```tsx
// Spinner par défaut (md, primary)
<Spinner />

// Tailles différentes
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />

// Variants
<Spinner variant="primary" />  {/* Purple branded */}
<Spinner variant="neutral" />  {/* Grey */}
<Spinner variant="inverse" />  {/* White/Black */}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Taille du spinner |
| `variant` | `"primary" \| "neutral" \| "inverse"` | `"primary"` | Variant de couleur |
| `className` | `string` | `""` | Classes CSS supplémentaires |
| `ariaLabel` | `string` | `"Chargement..."` | Label accessible pour screen readers |

## Tailles

| Size | Pixels | Usage recommandé |
|------|--------|------------------|
| `sm` | 16px | Inline dans boutons, petits composants |
| `md` | 24px | Composants standards, cards |
| `lg` | 32px | Overlays, grandes sections |

## Variants

### Primary (Branded Purple)

Couleur principale de la marque, utilisée pour les chargements importants.

| Mode | Couleur | Token CSS |
|------|---------|-----------|
| Light | `#7B72F9` | `--purple-500` |
| Dark | `#968FFA` | `--purple-400` |

```tsx
<Spinner variant="primary" />
```

**Usage :**
- Chargements principaux
- Actions importantes
- Overlays fullscreen
- Boutons branded

### Neutral (Grey)

Couleur neutre, utilisée pour les chargements secondaires.

| Mode | Couleur | Token CSS |
|------|---------|-----------|
| Light | `#737780` | `--grey-500` |
| Dark | `#a1a4aa` | `--grey-400` |

```tsx
<Spinner variant="neutral" />
```

**Usage :**
- Chargements secondaires
- Inline dans texte
- Boutons neutres
- États de recherche

### Inverse (White/Black)

Couleur inversée, utilisée sur fonds foncés/clairs.

| Mode | Couleur | Token CSS |
|------|---------|-----------|
| Light | `#FFFFFF` | `white` |
| Dark | `#22252B` | `--neutral-700` |

```tsx
<Spinner variant="inverse" />
```

**Usage :**
- Boutons branded (fond purple)
- Overlays sombres
- Fonds colorés
- Contrastes inversés

## Exemples d'utilisation

### Dans un bouton (loading state)

```tsx
<button 
  className="px-4 py-2 rounded-lg flex items-center gap-2" 
  disabled={isLoading}
>
  {isLoading && <Spinner size="sm" variant="inverse" />}
  <span>{isLoading ? "Enregistrement..." : "Enregistrer"}</span>
</button>
```

### Dans un bouton branded

```tsx
<button 
  className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
  disabled={isLoading}
>
  {isLoading && <Spinner size="sm" variant="inverse" />}
  <span>Enregistrement...</span>
</button>
```

### Inline avec texte

```tsx
<div className="flex items-center gap-2">
  <Spinner size="sm" variant="neutral" />
  <span>Chargement des données...</span>
</div>
```

### Dans une carte

```tsx
<div className="p-6 rounded-lg bg-white">
  {isLoading ? (
    <div className="flex justify-center py-12">
      <Spinner size="lg" variant="primary" />
    </div>
  ) : (
    <Content />
  )}
</div>
```

### Dans SearchBar

Le composant SearchBar utilise déjà le Spinner de Lucide. Vous pouvez maintenant utiliser notre Spinner atomique :

```tsx
<SearchBar
  value={query}
  onChange={setQuery}
  loading={isSearching}
/>
```

Internement, SearchBar affiche un spinner pendant la recherche.

## Avec LoadingOverlay

Le Spinner est utilisé automatiquement dans le composant `LoadingOverlay` :

```tsx
import { LoadingOverlay } from "@/components/molecules/LoadingOverlay";

// Fullscreen
{isLoading && (
  <LoadingOverlay 
    fullscreen 
    size="lg"
    message="Chargement des données..." 
  />
)}

// Container
<div className="relative">
  <MyContent />
  {isLoading && <LoadingOverlay size="md" />}
</div>
```

## Animation

Le spinner utilise la classe Tailwind `animate-spin` qui effectue une rotation continue :

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
```

**Performance :** L'animation est GPU-accelerated via `transform`, ce qui garantit 60fps même sur mobiles.

## Accessibilité

Le Spinner inclut automatiquement les attributs ARIA appropriés :

```tsx
<Loader2
  role="status"
  aria-label="Chargement..."
/>
```

**Personnaliser le label :**

```tsx
<Spinner ariaLabel="Import de fichiers en cours..." />
```

## Spécifications techniques

| Propriété | Valeur |
|-----------|--------|
| **Icône** | Lucide `Loader2` |
| **Stroke width** | 2px |
| **Animation** | Rotation 360° en 1s (linear, infinite) |
| **Taille sm** | 16×16px |
| **Taille md** | 24×24px |
| **Taille lg** | 32×32px |

## Bonnes pratiques

### ✅ À faire

1. **Utiliser la bonne taille**
   ```tsx
   // ✅ Bon - sm dans les boutons
   <button>
     <Spinner size="sm" variant="inverse" />
     <span>Loading...</span>
   </button>
   
   // ✅ Bon - lg dans les overlays
   <LoadingOverlay size="lg" />
   ```

2. **Choisir le bon variant**
   ```tsx
   // ✅ Bon - inverse sur fond coloré
   <div className="bg-purple-500">
     <Spinner variant="inverse" />
   </div>
   
   // ✅ Bon - primary pour actions importantes
   <LoadingOverlay fullscreen>
     <Spinner variant="primary" />
   </LoadingOverlay>
   ```

3. **Fournir un contexte**
   ```tsx
   // ✅ Bon - avec message
   <div className="flex items-center gap-2">
     <Spinner size="sm" />
     <span>Chargement des contacts...</span>
   </div>
   ```

### ❌ À éviter

1. **Mauvais variant sur fond**
   ```tsx
   // ❌ Éviter - inverse sur fond clair (invisible)
   <div className="bg-white">
     <Spinner variant="inverse" />
   </div>
   ```

2. **Trop grand dans les boutons**
   ```tsx
   // ❌ Éviter - lg trop grand
   <button>
     <Spinner size="lg" />
     <span>Click</span>
   </button>
   ```

3. **Sans contexte visuel**
   ```tsx
   // ❌ Éviter - spinner seul sans indication
   <div>
     <Spinner />
   </div>
   
   // ✅ Bon - avec message ou dans overlay
   <div className="flex flex-col items-center gap-2">
     <Spinner />
     <p>Chargement...</p>
   </div>
   ```

## Comparaison avec autres indicateurs

| Composant | Usage | Position | Interaction |
|-----------|-------|----------|-------------|
| **Spinner** | Chargement court (< 5s) | Inline/Local | Non bloquant |
| **LoadingOverlay** | Chargement moyen (2-10s) | Overlay | Bloquant |
| **ProgressBar** | Processus avec % | Inline | Non bloquant |
| **Toast** | Feedback rapide | Bottom-right | Non bloquant |

## Quand utiliser quoi ?

### Spinner seul
- ✅ Boutons en loading state
- ✅ SearchBar pendant recherche
- ✅ Inline avec texte
- ✅ Petites sections de contenu

### LoadingOverlay (avec Spinner)
- ✅ Formulaires pendant soumission
- ✅ Modals pendant chargement
- ✅ Tableaux pendant fetch
- ✅ Import/export de fichiers

### ProgressBar
- ✅ Upload de fichiers (avec %)
- ✅ Processus en plusieurs étapes
- ✅ Import/export avec progression
- ✅ Téléchargements

## Combinaisons courantes

### Bouton + Spinner

```tsx
function SaveButton({ onSave }: { onSave: () => Promise<void> }) {
  const [isSaving, setIsSaving] = useState(false);
  
  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave();
    } finally {
      setIsSaving(false);
    }
  };
  
  return (
    <button 
      onClick={handleSave} 
      disabled={isSaving}
      className="flex items-center gap-2"
    >
      {isSaving && <Spinner size="sm" variant="inverse" />}
      <span>{isSaving ? "Enregistrement..." : "Enregistrer"}</span>
    </button>
  );
}
```

### Carte + Spinner

```tsx
function DataCard({ id }: { id: string }) {
  const { data, isLoading } = useData(id);
  
  return (
    <div className="p-6 rounded-lg bg-white">
      {isLoading ? (
        <div className="flex justify-center py-12">
          <Spinner size="lg" variant="primary" />
        </div>
      ) : (
        <div>{data.content}</div>
      )}
    </div>
  );
}
```

### Formulaire + LoadingOverlay

```tsx
function EditForm({ onSubmit }: FormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        {/* Fields */}
      </form>
      
      {isSubmitting && (
        <LoadingOverlay message="Enregistrement en cours..." />
      )}
    </div>
  );
}
```

## Démo

Visitez `/loader-demo` pour voir tous les exemples interactifs :
- ✅ Toutes les tailles (sm, md, lg)
- ✅ Tous les variants (primary, neutral, inverse)
- ✅ Usage dans les boutons
- ✅ LoadingOverlay fullscreen
- ✅ LoadingOverlay container
- ✅ Exemples avec messages

## Prochaines évolutions

- [ ] Variants de couleur supplémentaires (success, error, warning)
- [ ] Support de spinners circulaires custom (cercle partiel)
- [ ] Spinner avec progression (0-100%)
- [ ] Animations alternatives (dots, bars, pulse)
- [ ] Présets pour cas d'usage spécifiques

## Voir aussi

- [LoadingOverlay](../molecules/LoadingOverlay.tsx) - Overlay de chargement
- [ProgressBar](./ProgressBar.tsx) - Barre de progression
- [SearchBar](../molecules/SearchBar.tsx) - Utilise Spinner pour loading state
- [Toast](../molecules/Toast.tsx) - Notifications temporaires
