# Toast / Notification System

## Vue d'ensemble

Le système **Toast** fournit des notifications temporaires qui apparaissent en bas à droite de l'écran pour informer l'utilisateur d'événements (succès, erreur, avertissement, information).

## Caractéristiques principales

- ✅ 4 variants colorés (success, error, warning, info)
- ✅ Auto-dismiss configurable (par défaut 5 secondes)
- ✅ Mode persistant (sans auto-dismiss)
- ✅ Bouton de fermeture manuel
- ✅ Max 5 toasts affichés simultanément
- ✅ Animation slide + fade from right
- ✅ Position configurable (4 coins de l'écran)
- ✅ Support titre + description optionnelle
- ✅ Support complet light/dark mode
- ✅ Gestion globale via Context + Hook

## Installation

### 1. Wrapper l'application avec ToastProvider

Le `ToastProvider` doit envelopper toute votre application (déjà fait dans `/src/app/App.tsx`) :

```tsx
import { ToastProvider } from "@/context/ToastContext";

function App() {
  return (
    <ThemeProvider>
      <ToastProvider 
        position="bottom-right" 
        defaultDuration={5000} 
        maxToasts={5}
      >
        <YourApp />
      </ToastProvider>
    </ThemeProvider>
  );
}
```

**Props de ToastProvider :**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `"top-right" \| "top-left" \| "bottom-right" \| "bottom-left"` | `"bottom-right"` | Position des toasts |
| `defaultDuration` | `number` | `5000` | Durée par défaut avant auto-dismiss (ms) |
| `maxToasts` | `number` | `5` | Nombre maximum de toasts affichés simultanément |

### 2. Utiliser le hook useToast

Dans vos composants, importez et utilisez le hook `useToast` :

```tsx
import { useToast } from "@/context/ToastContext";

function MyComponent() {
  const { toast } = useToast();

  const handleSave = async () => {
    try {
      await saveData();
      toast.success("Données enregistrées avec succès");
    } catch (error) {
      toast.error("Échec de l'enregistrement", error.message);
    }
  };

  return <button onClick={handleSave}>Save</button>;
}
```

## API Reference

### toast.success()

Affiche un toast de succès (vert avec icône CheckCircle2).

```tsx
toast.success(title: string, description?: string, duration?: number)
```

**Exemples :**
```tsx
toast.success("Opération réussie");
toast.success("Fichier enregistré", "Le fichier a été sauvegardé dans votre bibliothèque");
toast.success("Email envoyé", undefined, 3000); // 3 secondes
```

---

### toast.error()

Affiche un toast d'erreur (rouge avec icône XCircle).

```tsx
toast.error(title: string, description?: string, duration?: number)
```

**Exemples :**
```tsx
toast.error("Erreur");
toast.error("Échec de l'enregistrement", "Vérifiez votre connexion internet");
toast.error("Erreur critique", "Le serveur ne répond pas", 10000); // 10 secondes
```

---

### toast.warning()

Affiche un toast d'avertissement (orange avec icône AlertTriangle).

```tsx
toast.warning(title: string, description?: string, duration?: number)
```

**Exemples :**
```tsx
toast.warning("Attention");
toast.warning("Modifications non sauvegardées", "Vos modifications seront perdues");
toast.warning("Quota atteint", "Vous avez utilisé 90% de votre espace de stockage");
```

---

### toast.info()

Affiche un toast informatif (bleu/violet avec icône Info).

```tsx
toast.info(title: string, description?: string, duration?: number)
```

**Exemples :**
```tsx
toast.info("Information");
toast.info("Nouvelle version", "Une mise à jour est disponible");
toast.info("Astuce du jour", "Utilisez Ctrl+S pour sauvegarder rapidement", 7000);
```

---

### toast.custom()

Affiche un toast personnalisé avec options avancées.

```tsx
toast.custom(
  variant: "success" | "error" | "warning" | "info",
  title: string,
  description?: string,
  options?: { duration?: number; persistent?: boolean }
)
```

**Exemples :**
```tsx
// Toast avec durée personnalisée
toast.custom("success", "Titre", "Description", { duration: 7000 });

// Toast persistant (ne disparaît pas automatiquement)
toast.custom("warning", "Important", "Message important à lire", { 
  persistent: true 
});

// L'utilisateur devra cliquer sur X pour fermer
```

## Cas d'usage

### Sauvegarde de données

```tsx
const handleSave = async () => {
  try {
    const result = await api.saveClient(clientData);
    toast.success(
      "Client enregistré",
      `${clientData.firstName} ${clientData.lastName} a été ajouté à votre base`
    );
    navigate("/clients");
  } catch (error) {
    toast.error(
      "Échec de l'enregistrement",
      "Une erreur est survenue. Veuillez réessayer."
    );
  }
};
```

### Upload de fichiers

```tsx
const handleUpload = async (files: File[]) => {
  try {
    toast.info("Téléchargement en cours...", `${files.length} fichier(s)`);
    
    await Promise.all(files.map(file => uploadFile(file)));
    
    toast.success(
      "Fichiers téléchargés",
      `${files.length} fichier(s) ont été téléchargés avec succès`
    );
  } catch (error) {
    toast.error(
      "Échec du téléchargement",
      "Certains fichiers n'ont pas pu être téléchargés"
    );
  }
};
```

### Validation de formulaire

```tsx
const handleSubmit = (data: FormData) => {
  const errors = validateForm(data);
  
  if (errors.length > 0) {
    toast.warning(
      "Formulaire incomplet",
      `${errors.length} champ(s) requis manquant(s)`
    );
    return;
  }
  
  // Soumettre le formulaire...
  toast.success("Formulaire envoyé");
};
```

### Processus par étapes

```tsx
const handleImport = async () => {
  toast.info("Démarrage de l'import...");
  
  await step1();
  toast.info("Étape 1/3 terminée", "Validation des données");
  
  await step2();
  toast.info("Étape 2/3 terminée", "Import des contacts");
  
  await step3();
  toast.success("Import terminé !", "Tous les contacts ont été importés");
};
```

### Avertissements persistants

```tsx
const showMaintenanceWarning = () => {
  toast.custom(
    "warning",
    "Maintenance programmée",
    "Le système sera indisponible demain de 2h à 4h du matin",
    { persistent: true } // Ne disparaît pas automatiquement
  );
};
```

## Spécifications techniques

### Dimensions
- **Width :** 400px
- **Padding :** 16px
- **Border-radius :** 16px
- **Gap :** 12px (entre icône et texte)
- **Gap entre toasts :** 12px

### Typographie
- **Titre :** Roboto Medium 16px/20px, tracking 0.16px
- **Description :** Roboto Regular 14px/18px, tracking 0.14px

### Animation
- **Entrée :** Slide from right (translateX) + fade in
- **Sortie :** Slide to right + fade out
- **Duration :** 300ms
- **Easing :** ease-out

### Couleurs

#### Success (Vert)
| Mode | Icon | Border | Background |
|------|------|--------|------------|
| Light | `#4ABC40` | `#4ABC40` | `rgba(74, 188, 64, 0.1)` |
| Dark | `#0DA500` | `#0DA500` | `rgba(13, 165, 0, 0.1)` |

#### Error (Rouge)
| Mode | Icon | Border | Background |
|------|------|--------|------------|
| Light | `#EC0119` | `#EC0119` | `rgba(236, 1, 25, 0.1)` |
| Dark | `#E01F29` | `#E01F29` | `rgba(224, 31, 41, 0.1)` |

#### Warning (Orange)
| Mode | Icon | Border | Background |
|------|------|--------|------------|
| Light | `#FF882F` | `#FF882F` | `rgba(255, 136, 47, 0.1)` |
| Dark | `#FF9D45` | `#FF9D45` | `rgba(255, 157, 69, 0.1)` |

#### Info (Bleu/Violet)
| Mode | Icon | Border | Background |
|------|------|--------|------------|
| Light | `#7B72F9` | `#7B72F9` | `rgba(123, 114, 249, 0.1)` |
| Dark | `#968FFA` | `#968FFA` | `rgba(150, 143, 250, 0.1)` |

### Icônes Lucide

| Variant | Icon | Size | Stroke Width |
|---------|------|------|--------------|
| Success | `CheckCircle2` | 20px | 2 |
| Error | `XCircle` | 20px | 2 |
| Warning | `AlertTriangle` | 20px | 2 |
| Info | `Info` | 20px | 2 |
| Close | `X` | 16px | 2 |

## Bonnes pratiques

### ✅ À faire

1. **Messages courts et clairs**
   ```tsx
   // ✅ Bon
   toast.success("Client ajouté");
   
   // ❌ Éviter
   toast.success("Le client a été ajouté avec succès à votre base de données et vous pouvez maintenant...");
   ```

2. **Description pour les détails**
   ```tsx
   // ✅ Bon
   toast.success(
     "Import terminé",
     "45 contacts importés avec succès"
   );
   ```

3. **Durée adaptée au contenu**
   ```tsx
   // ✅ Bon
   toast.info("Astuce", "Message court", 3000); // 3s pour message court
   toast.warning("Important", "Message long à lire attentivement", 8000); // 8s pour message long
   ```

4. **Toasts persistants pour actions critiques**
   ```tsx
   // ✅ Bon
   toast.custom("warning", "Maintenance imminente", "Sauvegardez votre travail", { 
     persistent: true 
   });
   ```

### ❌ À éviter

1. **Trop de toasts en même temps**
   ```tsx
   // ❌ Éviter
   toast.success("Action 1");
   toast.success("Action 2");
   toast.success("Action 3");
   toast.success("Action 4");
   toast.success("Action 5");
   toast.success("Action 6"); // Ce toast remplacera le premier (max 5)
   ```

2. **Messages d'erreur sans contexte**
   ```tsx
   // ❌ Éviter
   toast.error("Erreur");
   
   // ✅ Bon
   toast.error("Échec de la connexion", "Vérifiez vos identifiants");
   ```

3. **Durée trop courte pour lire**
   ```tsx
   // ❌ Éviter
   toast.info("Message important à lire", "Beaucoup de texte...", 1000); // 1s trop court
   
   // ✅ Bon
   toast.info("Message important", "Détails", 6000); // 6s pour lire
   ```

## Différence avec Snackbar

Le système dispose de deux composants de notification :

| Caractéristique | Toast | Snackbar |
|----------------|-------|----------|
| **Position** | Bottom-right (configurable) | Bottom center (inline) |
| **Auto-dismiss** | Oui (configurable) | Non (manuel) |
| **Gestion globale** | Context + Hook | Composant local |
| **Variants** | 4 (success, error, warning, info) | 1 (neutre) |
| **Action button** | Non | Oui (bouton/lien) |
| **Usage** | Feedbacks système globaux | Messages contextuels avec action |

**Quand utiliser quoi ?**

- **Toast :** Confirmations, erreurs, avertissements globaux
  ```tsx
  toast.success("Email envoyé");
  toast.error("Erreur réseau");
  ```

- **Snackbar :** Messages avec action utilisateur
  ```tsx
  <Snackbar 
    message="Email envoyé" 
    buttonLabel="Annuler" 
    onButtonClick={handleUndo} 
  />
  ```

## Accessibilité

- ✅ Bouton de fermeture avec `aria-label="Fermer"`
- ✅ Focus visible sur le bouton de fermeture
- ✅ Contraste WCAG AA respecté pour tous les variants
- ✅ Keyboard navigation (Tab pour focus, Enter/Space pour fermer)
- ⚠️ Considérer l'ajout de `role="alert"` pour les toasts critiques (à venir)
- ⚠️ Considérer l'ajout de sons pour les utilisateurs malvoyants (à venir)

## Performance

- ✅ Composants légers sans dépendances lourdes
- ✅ Animations CSS performantes (GPU-accelerated)
- ✅ Gestion mémoire avec auto-cleanup des toasts fermés
- ✅ Max 5 toasts pour éviter la surcharge visuelle
- ✅ Portal-free (pas de ReactDOM.createPortal nécessaire)

## Démo

Visitez `/toast-demo` pour tester toutes les variantes et fonctionnalités du système de Toast.

## Prochaines évolutions

- [ ] Support de positions supplémentaires (center, top-center, bottom-center)
- [ ] Actions personnalisables dans les toasts (bouton d'annulation, liens)
- [ ] Groupement de toasts similaires
- [ ] Progress bar pour visualiser le temps restant
- [ ] Sons de notification (opt-in)
- [ ] Role ARIA "alert" pour toasts critiques
- [ ] Support de contenus riches (images, composants custom)
- [ ] API de queue pour gérer l'ordre d'affichage

## Voir aussi

- [Snackbar](./Snackbar.tsx) - Composant de notification avec action
- [Badge](../atoms/Badge.tsx) - Badge de statut
- [AiSuggestion](../atoms/AiSuggestion.tsx) - Badge de suggestion AI
