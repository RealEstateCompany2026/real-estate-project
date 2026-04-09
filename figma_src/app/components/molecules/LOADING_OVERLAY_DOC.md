# LoadingOverlay

## Vue d'ensemble

Le composant **LoadingOverlay** affiche un overlay semi-transparent avec un spinner centré pour bloquer l'interaction pendant un chargement. Il peut couvrir toute la fenêtre (fullscreen) ou un conteneur spécifique (container).

## Caractéristiques

- ✅ Overlay semi-transparent adaptatif (light/dark)
- ✅ Spinner centré avec variant primary
- ✅ Message optionnel sous le spinner
- ✅ Mode fullscreen (position fixed) ou container (position absolute)
- ✅ Z-index et opacité configurables
- ✅ Raccourcis : `LoadingOverlayFullscreen`, `LoadingOverlayContainer`
- ✅ ARIA attributes pour accessibilité
- ✅ Support complet light/dark mode

## Import

```tsx
import { 
  LoadingOverlay,
  LoadingOverlayFullscreen,
  LoadingOverlayContainer 
} from "@/components/molecules/LoadingOverlay";
```

## Usage basique

### Fullscreen (toute la fenêtre)

```tsx
{isLoading && <LoadingOverlay fullscreen />}

// Avec message
{isLoading && (
  <LoadingOverlay 
    fullscreen 
    message="Chargement des données..." 
  />
)}

// Raccourci
{isLoading && (
  <LoadingOverlayFullscreen 
    message="Import en cours..." 
    size="lg"
  />
)}
```

### Container (parent relatif)

```tsx
<div className="relative">
  <MyContent />
  {isLoading && <LoadingOverlay />}
</div>

// Avec message
<div className="relative">
  <MyContent />
  {isLoading && (
    <LoadingOverlay 
      message="Chargement..." 
      size="md"
    />
  )}
</div>

// Raccourci
<div className="relative">
  <MyContent />
  {isLoading && (
    <LoadingOverlayContainer 
      message="Chargement des détails..."
    />
  )}
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Taille du spinner (16/24/32px) |
| `message` | `string` | `undefined` | Message optionnel affiché sous le spinner |
| `fullscreen` | `boolean` | `false` | Mode fullscreen (couvre toute la fenêtre) |
| `zIndex` | `number` | `50` | Z-index de l'overlay |
| `backgroundOpacity` | `number` (0-1) | `0.5` | Opacité du background semi-transparent |
| `className` | `string` | `""` | Classes CSS supplémentaires |

## Modes

### Mode Fullscreen

Position `fixed`, couvre toute la fenêtre du navigateur.

**Quand utiliser :**
- Import/export de fichiers volumineux
- Sauvegarde globale de l'application
- Connexion/Déconnexion
- Navigation entre pages
- Chargement initial de l'application

```tsx
{isLoading && (
  <LoadingOverlay 
    fullscreen 
    size="lg"
    message="Import de 1000 contacts..."
  />
)}

// Ou avec raccourci
{isLoading && (
  <LoadingOverlayFullscreen 
    size="lg"
    message="Import de 1000 contacts..."
  />
)}
```

### Mode Container

Position `absolute`, couvre le parent avec `position: relative`.

**Quand utiliser :**
- Formulaires pendant soumission
- Tableaux pendant fetch
- Modals pendant chargement
- Cartes/panels pendant refresh
- Sections spécifiques

```tsx
<div className="relative min-h-[400px]">
  <DataTable data={data} />
  {isLoadingData && (
    <LoadingOverlay message="Mise à jour..." />
  )}
</div>

// Ou avec raccourci
<div className="relative">
  <MyForm />
  {isSubmitting && (
    <LoadingOverlayContainer message="Enregistrement..." />
  )}
</div>
```

## Exemples d'utilisation

### Formulaire avec overlay

```tsx
function EditClientForm({ clientId }: { clientId: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await api.updateClient(clientId, data);
      toast.success("Client mis à jour");
    } catch (error) {
      toast.error("Échec de la mise à jour");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="relative p-6 rounded-xl bg-white">
      <form onSubmit={handleSubmit}>
        <InputField label="Nom" name="name" />
        <InputField label="Email" name="email" />
        <Button type="submit">Enregistrer</Button>
      </form>
      
      {isSubmitting && (
        <LoadingOverlayContainer message="Enregistrement en cours..." />
      )}
    </div>
  );
}
```

### Modal avec overlay

```tsx
function EditModal({ isOpen, onClose }: ModalProps) {
  const [isSaving, setIsSaving] = useState(false);
  
  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveData();
      onClose();
    } finally {
      setIsSaving(false);
    }
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-xl p-8 max-w-md">
        <h2>Éditer</h2>
        <form>
          {/* Fields */}
        </form>
        <Button onClick={handleSave}>Save</Button>
        
        {isSaving && (
          <LoadingOverlay message="Sauvegarde..." />
        )}
      </div>
    </div>
  );
}
```

### Tableau avec overlay

```tsx
function ClientsTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [clients, setClients] = useState([]);
  
  const refreshData = async () => {
    setIsLoading(true);
    try {
      const data = await api.getClients();
      setClients(data);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    refreshData();
  }, []);
  
  return (
    <div className="relative">
      <div className="flex justify-between mb-4">
        <h2>Clients</h2>
        <Button onClick={refreshData}>Actualiser</Button>
      </div>
      
      <table className="w-full">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {isLoading && (
        <LoadingOverlayContainer 
          size="md"
          message="Chargement des clients..."
        />
      )}
    </div>
  );
}
```

### Import de fichiers (fullscreen)

```tsx
function ImportPage() {
  const [isImporting, setIsImporting] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const handleImport = async (file: File) => {
    setIsImporting(true);
    setProgress(0);
    
    try {
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);
      
      await api.importFile(file);
      clearInterval(interval);
      setProgress(100);
      
      toast.success("Import terminé");
    } catch (error) {
      toast.error("Échec de l'import");
    } finally {
      setIsImporting(false);
    }
  };
  
  return (
    <div>
      <h1>Import de contacts</h1>
      <FileUpload onUpload={handleImport} />
      
      {isImporting && (
        <LoadingOverlayFullscreen 
          size="lg"
          message={`Import en cours... ${progress}%`}
        />
      )}
    </div>
  );
}
```

### Navigation entre pages

```tsx
function NavigationWrapper() {
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();
  
  const handleNavigate = async (path: string) => {
    setIsNavigating(true);
    
    // Preload data
    await loadPageData(path);
    
    navigate(path);
    setIsNavigating(false);
  };
  
  return (
    <>
      <Navigation onNavigate={handleNavigate} />
      
      {isNavigating && (
        <LoadingOverlayFullscreen 
          size="lg"
          message="Chargement de la page..."
        />
      )}
    </>
  );
}
```

## Personnalisation

### Opacité du background

```tsx
// Background plus transparent (20%)
<LoadingOverlay backgroundOpacity={0.2} />

// Background plus opaque (80%)
<LoadingOverlay backgroundOpacity={0.8} />
```

### Z-index personnalisé

```tsx
// Pour être au-dessus de modals (z-50)
<LoadingOverlay zIndex={60} />

// Pour être sous certains éléments
<LoadingOverlay zIndex={40} />
```

### Taille du spinner

```tsx
// Small spinner (16px)
<LoadingOverlay size="sm" />

// Medium spinner (24px) - défaut
<LoadingOverlay size="md" />

// Large spinner (32px)
<LoadingOverlay size="lg" />
```

## Accessibilité

L'overlay inclut automatiquement les attributs ARIA appropriés :

```tsx
<div
  role="alert"
  aria-busy="true"
  aria-live="polite"
>
  <Spinner />
  {message && <p>{message}</p>}
</div>
```

**Recommandations :**
- ✅ Toujours fournir un `message` descriptif quand possible
- ✅ Limiter la durée de chargement (max 10s)
- ✅ Afficher un toast de succès/erreur après chargement
- ✅ Permettre l'annulation pour les longs processus

## Spécifications techniques

| Propriété | Valeur |
|-----------|--------|
| **Position fullscreen** | `fixed` avec `inset-0` |
| **Position container** | `absolute` avec `inset-0` |
| **Z-index** | 50 (configurable) |
| **Background opacity** | 0.5 (configurable) |
| **Background light** | `rgba(255, 255, 255, 0.5)` |
| **Background dark** | `rgba(34, 37, 43, 0.5)` |
| **Flexbox** | `flex flex-col items-center justify-center` |
| **Gap** | 16px (entre spinner et message) |
| **Font message** | Roboto Medium 16px/20px |

## Bonnes pratiques

### ✅ À faire

1. **Fournir un message clair**
   ```tsx
   // ✅ Bon
   <LoadingOverlay message="Import de 1000 contacts..." />
   
   // ❌ Éviter
   <LoadingOverlay message="Chargement..." />
   ```

2. **Utiliser le bon mode**
   ```tsx
   // ✅ Bon - fullscreen pour import global
   <LoadingOverlayFullscreen message="Import en cours..." />
   
   // ✅ Bon - container pour section spécifique
   <div className="relative">
     <MySection />
     <LoadingOverlayContainer message="Actualisation..." />
   </div>
   ```

3. **Limiter la durée**
   ```tsx
   // ✅ Bon - timeout si trop long
   const [isLoading, setIsLoading] = useState(false);
   
   useEffect(() => {
     if (isLoading) {
       const timeout = setTimeout(() => {
         setIsLoading(false);
         toast.error("Le chargement a pris trop de temps");
       }, 10000); // 10s max
       
       return () => clearTimeout(timeout);
     }
   }, [isLoading]);
   ```

4. **Adapter la taille du spinner**
   ```tsx
   // ✅ Bon - lg pour fullscreen
   <LoadingOverlayFullscreen size="lg" />
   
   // ✅ Bon - md pour containers
   <LoadingOverlayContainer size="md" />
   ```

### ❌ À éviter

1. **Oublier position relative sur le parent**
   ```tsx
   // ❌ Éviter - l'overlay ne couvrira pas le bon élément
   <div>
     <MyContent />
     <LoadingOverlay />
   </div>
   
   // ✅ Bon
   <div className="relative">
     <MyContent />
     <LoadingOverlay />
   </div>
   ```

2. **Messages trop vagues**
   ```tsx
   // ❌ Éviter
   <LoadingOverlay message="Veuillez patienter..." />
   
   // ✅ Bon
   <LoadingOverlay message="Import de 500 contacts..." />
   ```

3. **Overlay trop long sans feedback**
   ```tsx
   // ❌ Éviter - pas de feedback pendant 30s
   <LoadingOverlay message="Import..." />
   
   // ✅ Bon - progression si long
   <LoadingOverlay message={`Import... ${progress}%`} />
   ```

## Raccourcis

### LoadingOverlayFullscreen

Raccourci pour `<LoadingOverlay fullscreen />` :

```tsx
// Au lieu de
<LoadingOverlay fullscreen message="Import..." />

// Utilisez
<LoadingOverlayFullscreen message="Import..." />
```

### LoadingOverlayContainer

Raccourci pour `<LoadingOverlay fullscreen={false} />` :

```tsx
// Au lieu de
<LoadingOverlay fullscreen={false} message="Chargement..." />

// Utilisez
<LoadingOverlayContainer message="Chargement..." />
```

## Comparaison avec autres composants

| Composant | Position | Bloquant | Duration | Usage |
|-----------|----------|----------|----------|-------|
| **LoadingOverlay** | Overlay | Oui | 2-10s | Formulaires, tableaux |
| **Spinner** | Inline | Non | Variable | Boutons, SearchBar |
| **ProgressBar** | Inline | Non | Variable | Upload avec % |
| **Toast** | Fixed bottom-right | Non | 3-5s | Feedbacks rapides |

## Combinaisons courantes

### Overlay + Toast

```tsx
const handleSave = async () => {
  setIsLoading(true);
  try {
    await saveData();
    toast.success("Données enregistrées");
  } catch (error) {
    toast.error("Échec de l'enregistrement");
  } finally {
    setIsLoading(false);
  }
};

return (
  <div className="relative">
    <Form />
    {isLoading && <LoadingOverlay message="Enregistrement..." />}
  </div>
);
```

### Overlay + ProgressBar

```tsx
const [isUploading, setIsUploading] = useState(false);
const [progress, setProgress] = useState(0);

return (
  <div className="relative">
    <FileInput />
    {progress > 0 && progress < 100 && (
      <ProgressBar value={progress} />
    )}
    {isUploading && (
      <LoadingOverlay message={`Upload... ${progress}%`} />
    )}
  </div>
);
```

## Démo

Visitez `/loader-demo` pour voir tous les exemples interactifs :
- ✅ Overlay fullscreen avec message
- ✅ Overlay container (3 exemples)
- ✅ Différentes tailles de spinner
- ✅ Mode light/dark
- ✅ Simulation de chargements réels

## Prochaines évolutions

- [ ] Support d'un bouton "Annuler" pour longs processus
- [ ] Intégration de ProgressBar pour afficher %
- [ ] Animations d'entrée/sortie personnalisables
- [ ] Support de contenus custom (pas seulement Spinner + message)
- [ ] Mode "skeleton" pour prévisualiser le contenu
- [ ] Timeout automatique avec message d'erreur

## Voir aussi

- [Spinner](../atoms/Spinner.tsx) - Indicateur de chargement atomique
- [ProgressBar](../atoms/ProgressBar.tsx) - Barre de progression
- [Toast](./Toast.tsx) - Notifications temporaires
- [SearchBar](./SearchBar.tsx) - Utilise Spinner pour loading state
