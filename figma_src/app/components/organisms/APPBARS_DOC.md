# AppBars Components

## Vue d'ensemble

La famille **AppBars** regroupe les composants de barres de navigation supérieures pour le CRM RealAgent. Tous les AppBars suivent des spécifications communes issues du design system Figma et utilisent **strictement des composants atomiques** (atomic design).

**🎨 IMPORTANT - IconButton Ghost avec CSS Tokens:**
Tous les IconButton utilisent le variant="ghost" avec des **tokens CSS** pour s'adapter automatiquement au thème (light/dark mode). Les couleurs sont définies par `var(--icon-neutral-default)` et `var(--surface-neutral-action)` pour garantir une lisibilité parfaite dans les deux modes.

## Atomic Design - Composants atomiques utilisés

Tous les AppBars utilisent exclusivement des composants atomiques du design system :

### ⚛️ Atomes
- **IconButton** - Boutons icônes (retour, actions, database, etc.)
- **Badge** - Labels de statut colorés (VENDEUR, À VENDRE, EN ATTENTE, etc.)
- **Chip** - Texte + icône optionnelle (size medium/small)
- **ChipDate** - Variante date avec gap 8px et font regular
- **ChipId** - Variante ID sans icône et font regular
- **ChipScore** / **ChipScoreAuto** - Scoring client avec jauge colorée
- **MessageStatusDot** - Point de statut coloré (18×18px)
- **AiSuggestion** - Badge violet pour suggestions AI
- **DropdownButton** - Bouton dropdown avec chevron rotatif

### 🧩 Molécules
- **AppBarEventQuinte** - Composant de 5× MessageStatusDot avec gap 8px

## Exemples d'utilisation des composants atomiques

### Fiche Client (atomic design complet)
```tsx
import { AppBarDetail, AppBarEventQuinte } from "@/components/organisms";
import { ChipScoreAuto } from "@/components/atoms/ChipScore";
import { ChipDate } from "@/components/atoms/Chip";
import { Calendar } from "lucide-react";

<AppBarDetail
  title="NOM, prénom du client"
  onBack={() => navigateTo("/clients")}
  badges={[
    { label: "VENDEUR", variant: "default" },
    { label: "ACQUÉREUR", variant: "default" }
  ]}
  aiSuggestions={1}
  gap="lg"
>
  {/* Atome: ChipScoreAuto - Score client avec jauge */}
  <ChipScoreAuto score={50} />

  {/* Molécule: AppBarEventQuinte - 5 MessageStatusDot avec gap 8px */}
  <AppBarEventQuinte 
    statuses={["success", "success", "success", "none", "none"]} 
  />

  {/* Atome: ChipDate - Date avec icône, gap 8px, font regular */}
  <ChipDate icon={<Calendar size={20} />}>280 j</ChipDate>
</AppBarDetail>
```

### Fiche Bien (atomic design complet)
```tsx
import { AppBarDetail } from "@/components/organisms";
import { Chip } from "@/components/atoms/Chip";
import { IconButton } from "@/components/atoms/Button";
import { User, Database, BookOpen, FileText } from "lucide-react";

<AppBarDetail
  title="identifiant du bien"
  onBack={() => navigateTo("/properties")}
  badges={[{ label: "À VENDRE", variant: "default" }]}
  aiSuggestions={1}
  gap="lg"
>
  {/* Atome: Chip size medium avec icône */}
  <Chip size="medium" icon={<User size={20} />}>
    CAPELLO, Jean-François
  </Chip>

  {/* Atome: IconButton - Database */}
  <IconButton
    icon={<Database size={20} />}
    variant="neutral"
    title="Base de données"
    size="md"
  />

  {/* Atome: IconButton - Carnet d'entretien */}
  <IconButton
    icon={<BookOpen size={20} />}
    variant="neutral"
    title="Carnet d'entretien"
    size="md"
  />

  {/* Atome: IconButton - Mandat */}
  <IconButton
    icon={<FileText size={20} />}
    variant="neutral"
    title="Mandat"
    size="md"
  />

  {/* Badge statut publication - custom */}
  <div className="pl-[8px]">
    <div className="inline-block px-[8px] py-[4px] rounded-[8px]" 
         style={{ background: "var(--surface-success-default)" }}>
      <span className="text-xs font-semibold" 
            style={{ color: "var(--text-success)" }}>
        PUBLIÉ
      </span>
    </div>
  </div>
</AppBarDetail>
```

### Fiche Affaire (atomic design complet)
```tsx
import { AppBarDetail } from "@/components/organisms";
import { Chip } from "@/components/atoms/Chip";

<AppBarDetail
  title="identifiant de l'affaire"
  onBack={() => navigateTo("/deals")}
  badges={[{ label: "VENTE", variant: "default" }]}
  aiSuggestions={1}
  gap="lg"
>
  {/* Atome: Chip size medium - Type de bien */}
  <Chip size="medium">T4</Chip>

  {/* Atome: Chip size medium - Surface */}
  <Chip size="medium">84 m²</Chip>

  {/* Atome: Chip size medium - Ville */}
  <Chip size="medium">Charleville-Mézière</Chip>

  {/* Atome: Chip size medium - Prix */}
  <Chip size="medium">360 000€</Chip>
</AppBarDetail>
```

### Messagerie (atomic design complet)
```tsx
import { AppBarDetail, AppBarEventQuinte } from "@/components/organisms";
import { Chip, ChipDate } from "@/components/atoms/Chip";
import { ChipScoreAuto } from "@/components/atoms/ChipScore";
import { User, Calendar } from "lucide-react";

<AppBarDetail
  title="Messagerie"
  onBack={() => navigateTo("/messages")}
  gap="lg"
>
  {/* Atome: Chip size medium - Nom client */}
  <Chip size="medium" icon={<User size={20} />}>
    CAPELLO, Jean-François
  </Chip>

  {/* Atome: ChipScoreAuto - Scoring */}
  <ChipScoreAuto score={50} />

  {/* Molécule: AppBarEventQuinte - 5 MessageStatusDot */}
  <AppBarEventQuinte 
    statuses={["success", "success", "fail", "none", "none"]} 
  />

  {/* Atome: ChipDate - Date */}
  <ChipDate icon={<Calendar size={20} />}>280 j</ChipDate>
</AppBarDetail>
```

### Fiche Document (atomic design complet)
```tsx
import { AppBarDetail } from "@/components/organisms";
import { Chip, ChipDate, ChipId } from "@/components/atoms/Chip";
import { User, Calendar } from "lucide-react";

<AppBarDetail
  title="Nom du document"
  onBack={() => navigateTo("/documents")}
  badges={[{ label: "EN ATTENTE", variant: "warning" }]}
  gap="lg"
>
  {/* Atome: Chip size medium - Nom client */}
  <Chip size="medium" icon={<User size={20} />}>
    NOM, prénom
  </Chip>

  {/* Atome: ChipId - ID affaire (font regular, sans icône) */}
  <ChipId>55679201</ChipId>

  {/* Atome: ChipDate - Date */}
  <ChipDate icon={<Calendar size={20} />}>03 jan. 2027</ChipDate>
</AppBarDetail>
```

### AppBarCategory avec DropdownButton
```tsx
import { AppBarCategory } from "@/components/organisms";
import { useState } from "react";

function ClientsListPage() {
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <AppBarCategory
      title="Clients"
      category="Tous les clients"
      categoryOpen={categoryOpen}
      onCategoryClick={() => setCategoryOpen(!categoryOpen)}
      showAdd
      onAdd={() => navigateTo("/clients/new")}
      showSearch
      onSearch={() => setShowSearch(true)}
    />
  );
}
```

## Spécifications des composants atomiques

### Chip
- **size="medium"** : 16px/20px, icône 20px, gap 4px
- **size="small"** : 14px/16px, icône 16px, gap 4px
- **fontWeight="semibold"** : Par défaut (600)
- **fontWeight="regular"** : Pour ChipDate, ChipId (400)

### ChipDate
- Gap: 8px (au lieu de 4px)
- Font: Regular (au lieu de SemiBold)
- Icône: Toujours à gauche
- Usage: Dates, durées

### ChipId
- Sans icône
- Font: Regular
- Usage: IDs, numéros de référence

### ChipScoreAuto
- Score auto-calculé selon le niveau
- Jauge colorée (rouge → orange → jaune → vert clair → vert foncé)
- 5 niveaux: veryLow, low, medium, high, veryHigh

### MessageStatusDot
- Size: 18×18px cercle
- **"none"**: Blanc/dark avec border gris
- **"success"**: Vert avec border vert foncé
- **"fail"**: Gris avec border gris foncé

### AppBarEventQuinte
- 5× MessageStatusDot
- Gap: 8px entre chaque dot
- Usage: Historique d'événements clients

### DropdownButton
- Height: 44px
- Border-radius: 16px
- Chevron rotation 180° si isOpen=true
- Shadow optionnelle (false dans AppBarCategory)

## Spécifications communes

### Dimensions
- **Hauteur fixe:** 100px
- **Padding vertical:** 27px (top + bottom)
- **Padding horizontal:** 20px (left + right)

### Typographie
- **Titre (H4):** Roboto Bold 28px/34px, tracking 0.28px
- **Texte secondaire:** Roboto SemiBold 16px/20px, tracking 0.16px

### Design Tokens

```css
/* Backgrounds */
--surface-neutral-default    /* Background principal */
--surface-neutral-action     /* Background hover/active */
--surface-branded-default    /* Bouton branded (save) */

/* Text */
--text-headings             /* Titre H4 */
--text-body                 /* Texte secondaire */
--text-caption              /* Texte tertiaire */

/* Icons */
--icon-neutral-default      /* Couleur des icônes */

/* Borders */
--border-neutral-default    /* Bordures */
```

## Composants

### 1. AppBarCategory

Barre pour les pages liste avec dropdown de catégorie et actions.

**Usage :**
```tsx
import { AppBarCategory } from "@/components/organisms";

<AppBarCategory
  title="Rubrique"
  category="Categorie"
  onCategoryClick={() => setShowCategoryMenu(true)}
  showAdd
  onAdd={() => navigateTo('/create')}
  showSearch
  onSearch={() => setShowSearch(true)}
/>
```

**Props :**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Titre principal (H4) |
| `category` | `string` | `"Categorie"` | Label de la catégorie sélectionnée |
| `onCategoryClick` | `() => void` | - | Callback au clic sur le dropdown |
| `showAdd` | `boolean` | `false` | Afficher le bouton add |
| `onAdd` | `() => void` | - | Callback au clic sur add |
| `showSearch` | `boolean` | `false` | Afficher le bouton search |
| `onSearch` | `() => void` | - | Callback au clic sur search |
| `className` | `string` | `""` | Classes CSS additionnelles |

**Cas d'usage :**
- Pages de liste (Clients, Biens, Affaires)
- Filtrage par catégorie
- Navigation hiérarchique

---

### 2. AppBarBasic

Barre simple pour les pages liste sans dropdown de catégorie.

**Usage :**
```tsx
import { AppBarBasic } from "@/components/organisms";

<AppBarBasic
  title="Base de données"
  showAdd
  onAdd={() => navigateTo('/import')}
  showSearch
  onSearch={() => setShowSearch(true)}
/>
```

**Props :**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Titre principal (H4) |
| `showAdd` | `boolean` | `false` | Afficher le bouton add |
| `onAdd` | `() => void` | - | Callback au clic sur add |
| `showSearch` | `boolean` | `false` | Afficher le bouton search |
| `onSearch` | `() => void` | - | Callback au clic sur search |
| `className` | `string` | `""` | Classes CSS additionnelles |

**Cas d'usage :**
- Pages de liste simples
- Base de données
- Tableaux de bord

---

### 3. AppBarImport

Barre pour les flows d'import avec bouton retour et bouton save.

**Usage :**
```tsx
import { AppBarImport } from "@/components/organisms";
import { useState } from "react";

const [saving, setSaving] = useState(false);

const handleSave = async () => {
  setSaving(true);
  try {
    await saveImport(data);
    toast.success("Import enregistré");
  } catch (error) {
    toast.error("Erreur lors de l'enregistrement");
  } finally {
    setSaving(false);
  }
};

<AppBarImport
  title="Import d'une base de données"
  fileName="Nom_du_fichier.csv"
  saveLabel="Enregistrer"
  onBack={() => navigateTo('/database')}
  onSave={handleSave}
  saving={saving}
/>
```

**Props :**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Titre principal (H4) |
| `fileName` | `string` | - | Nom du fichier importé |
| `saveLabel` | `string` | `"Enregistrer"` | Label du bouton save |
| `backTo` | `string` | - | URL de retour (navigation) |
| `onBack` | `() => void` | - | Callback au clic sur back |
| `onSave` | `() => void` | - | Callback au clic sur save |
| `saving` | `boolean` | `false` | État loading du bouton save |
| `className` | `string` | `""` | Classes CSS additionnelles |

**Cas d'usage :**
- Import de fichiers CSV/Excel
- Flows de création multi-étapes
- Validation de données

---

### 4. AppBarDetail

Barre pour les fiches détail avec badges, métadonnées et suggestions AI.

**Usage :**

#### Fiche Client
```tsx
import { AppBarDetail, AppBarIconText } from "@/components/organisms";
import { TrendingUp, Calendar } from "lucide-react";

<AppBarDetail
  title="DUPONT, Jean"
  backTo="/clients"
  badges={[
    { label: "VENDEUR", variant: "default" },
    { label: "ACQUÉREUR", variant: "default" }
  ]}
  aiSuggestions={1}
  gap="lg"
>
  <AppBarIconText icon={<TrendingUp size={20} />} text="50" />
  <AppBarIconText icon={<Calendar size={20} />} text="280 j" />
</AppBarDetail>
```

#### Fiche Bien
```tsx
import { AppBarDetail, AppBarIconText } from "@/components/organisms";
import { User } from "lucide-react";

<AppBarDetail
  title="B-2024-001234"
  backTo="/properties"
  badges={[
    { label: "À VENDRE", variant: "default" },
    { label: "PUBLIÉ", variant: "success" }
  ]}
  aiSuggestions={1}
  gap="lg"
>
  <AppBarIconText icon={<User size={20} />} text="CAPELLO, Jean-François" />
</AppBarDetail>
```

#### Fiche Affaire
```tsx
import { AppBarDetail, AppBarIconText } from "@/components/organisms";
import { Home, Maximize2, MapPin, Tag } from "lucide-react";

<AppBarDetail
  title="A-2024-005678"
  backTo="/deals"
  badges={[{ label: "VENTE", variant: "default" }]}
  aiSuggestions={1}
  gap="lg"
>
  <AppBarIconText icon={<Home size={20} />} text="T4" />
  <AppBarIconText icon={<Maximize2 size={20} />} text="84 m²" />
  <AppBarIconText icon={<MapPin size={20} />} text="Charleville-Mézière" />
  <AppBarIconText icon={<Tag size={20} />} text="360 000€" />
</AppBarDetail>
```

#### Messagerie
```tsx
import { AppBarDetail, AppBarIconText } from "@/components/organisms";
import { User, TrendingUp, Calendar } from "lucide-react";

<AppBarDetail
  title="Messagerie"
  backTo="/messages"
  gap="lg"
>
  <AppBarIconText icon={<User size={20} />} text="CAPELLO, Jean-François" />
  <AppBarIconText icon={<TrendingUp size={20} />} text="50" />
  <AppBarIconText icon={<Calendar size={20} />} text="280 j" />
</AppBarDetail>
```

#### Fiche Document
```tsx
import { AppBarDetail, AppBarIconText } from "@/components/organisms";
import { User, Calendar } from "lucide-react";

<AppBarDetail
  title="Compromis de vente"
  backTo="/documents"
  badges={[{ label: "EN ATTENTE", variant: "warning" }]}
  gap="lg"
>
  <AppBarIconText icon={<User size={20} />} text="DUPONT, Jean" />
  <span style={{ color: "var(--text-body)" }}>55679201</span>
  <AppBarIconText icon={<Calendar size={20} />} text="03 jan. 2027" />
</AppBarDetail>
```

**Props :**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Titre principal (H4) |
| `backTo` | `string` | - | URL de retour (navigation) |
| `onBack` | `() => void` | - | Callback au clic sur back |
| `badges` | `Badge[]` | `[]` | Badges à afficher après le titre |
| `aiSuggestions` | `number` | - | Nombre de suggestions AI (affiche badge si > 0) |
| `gap` | `"sm" \| "lg"` | `"lg"` | Gap entre éléments (8px ou 24px) |
| `children` | `ReactNode` | - | Métadonnées, icônes, infos |
| `className` | `string` | `""` | Classes CSS additionnelles |

**Cas d'usage :**
- Fiches client (avec scoring, events, date)
- Fiches bien (avec contact, statut, publication)
- Fiches affaire (avec infos bien immobilier)
- Messagerie (avec contact et scoring)
- Fiches document (avec statut et date)

---

## Composants utilitaires

### AppBarIconText

Composant pour afficher une icône + texte dans les AppBars.

**Usage :**
```tsx
import { AppBarIconText } from "@/components/organisms";
import { User } from "lucide-react";

<AppBarIconText 
  icon={<User size={20} />} 
  text="CAPELLO, Jean-François" 
/>
```

**Props :**
| Prop | Type | Description |
|------|------|-------------|
| `icon` | `ReactNode` | Icône (Lucide recommandé, size 20) |
| `text` | `string` | Texte à afficher |

---

## Badges disponibles

Les variants de badges disponibles pour `AppBarDetail` :

| Variant | Usage | Exemple |
|---------|-------|---------|
| `default` | Labels neutres | VENDEUR, ACQUÉREUR, VENTE |
| `success` | Statuts positifs | PUBLIÉ, VALIDÉ, ACTIF |
| `warning` | Statuts en attente | EN ATTENTE, À VALIDER |
| `error` | Statuts négatifs | REFUSÉ, ANNULÉ |
| `information` | Statuts informatifs | BROUILLON, EN COURS |

**Usage des badges :**
```tsx
badges={[
  { label: "VENDEUR", variant: "default" },
  { label: "PUBLIÉ", variant: "success" },
  { label: "EN ATTENTE", variant: "warning" }
]}
```

---

## Gap configuration

Les AppBars supportent deux tailles de gap entre les éléments :

- **`sm` (8px)** : Pour les pages liste et catégories
- **`lg` (24px)** : Pour les fiches détail (défaut)

```tsx
// Small gap (8px) - Pages liste
<AppBarCategory gap="sm" ... />

// Large gap (24px) - Fiches détail
<AppBarDetail gap="lg" ... />
```

---

## Suggestions AI

Le badge de suggestions AI s'affiche automatiquement quand `aiSuggestions` est défini et > 0.

```tsx
<AppBarDetail
  title="Client name"
  aiSuggestions={1}  // Affiche badge "1"
  ...
/>

<AppBarDetail
  title="Property name"
  aiSuggestions={0}  // Pas de badge
  ...
/>
```

---

## Accessibilité

### Navigation clavier
- ✅ Tous les boutons sont focusables avec Tab
- ✅ Enter/Space pour activer les boutons
- ✅ Esc pour annuler les actions modales

### ARIA
- ✅ Bouton retour avec `aria-label="Retour"`
- ✅ Titres sémantiques (h4)
- ✅ Boutons avec labels descriptifs

### Contraste
- ✅ Tous les textes respectent WCAG AA (4.5:1)
- ✅ Icônes avec contraste suffisant
- ✅ États focus visibles

---

## Exemples complets

### Page liste avec recherche
```tsx
import { AppBarBasic } from "@/components/organisms";
import { useState } from "react";

function ClientsPage() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <AppBarBasic
        title="Clients"
        showAdd
        onAdd={() => navigateTo('/clients/new')}
        showSearch
        onSearch={() => setShowSearch(true)}
      />
      
      {showSearch && <SearchBar ... />}
      
      <ClientsList />
    </div>
  );
}
```

### Page import avec validation
```tsx
import { AppBarImport } from "@/components/organisms";
import { useState } from "react";

function ImportPage() {
  const [saving, setSaving] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSave = async () => {
    if (!file) return;
    
    setSaving(true);
    try {
      await uploadFile(file);
      await processImport();
      toast.success("Import réussi");
      navigateTo('/database');
    } catch (error) {
      toast.error("Erreur lors de l'import");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <AppBarImport
        title="Import d'une base de données"
        fileName={file?.name}
        onBack={() => navigateTo('/database')}
        onSave={handleSave}
        saving={saving}
      />
      
      <ImportForm onFileChange={setFile} />
    </div>
  );
}
```

### Fiche détail complète
```tsx
import { AppBarDetail, AppBarIconText } from "@/components/organisms";
import { User, TrendingUp, Calendar } from "lucide-react";

function ClientDetailPage({ client }) {
  return (
    <div>
      <AppBarDetail
        title={`${client.lastName}, ${client.firstName}`}
        backTo="/clients"
        badges={[
          { label: client.role, variant: "default" },
          { label: client.status, variant: client.statusVariant }
        ]}
        aiSuggestions={client.aiSuggestions}
        gap="lg"
      >
        <AppBarIconText 
          icon={<TrendingUp size={20} />} 
          text={client.score.toString()} 
        />
        <AppBarIconText 
          icon={<Calendar size={20} />} 
          text={`${client.daysSinceContact} j`} 
        />
      </AppBarDetail>
      
      <ClientDetails client={client} />
    </div>
  );
}
```

---

## Migration depuis l'ancien AppBar

Si vous utilisez l'ancien composant `/src/app/components/AppBar.tsx`, voici comment migrer :

### Avant
```tsx
import { AppBar } from "@/components/AppBar";

<AppBar variant="category" title="Clients" backTo="/dashboard">
  <button onClick={onAdd}>Add</button>
</AppBar>
```

### Après
```tsx
import { AppBarCategory } from "@/components/organisms";

<AppBarCategory
  title="Clients"
  category="Tous"
  onCategoryClick={handleCategoryClick}
  showAdd
  onAdd={onAdd}
/>
```

---

## Design System Figma

Les composants AppBars sont basés sur les designs Figma suivants :

- `AppBarCategory` → Figma `AppBarCategory`
- `AppBarBasic` → Figma `AppBarAjoutBdd`
- `AppBarImport` → Figma `AppBarAjoutBddImport`
- `AppBarDetail` → Figma `AppBarFicheClient`, `AppBarFicheBien`, `AppBarFicheAffaire`, `AppBarMessagerie`, `AppBarFicheDocument`

---

## Notes techniques

### Performance
- Les AppBars sont des composants légers sans state interne
- Callbacks memoizés recommandés pour éviter les re-renders
- Icônes Lucide tree-shakées automatiquement

### Responsive
- Les AppBars ont une hauteur fixe (100px) sur tous les écrans
- Sur mobile, considérez de masquer certaines métadonnées
- Gap peut être ajusté pour économiser l'espace horizontal

### Dark Mode
- Support complet via CSS variables
- Pas de logique spécifique au thème dans les composants
- Transitions automatiques lors du changement de thème

---

## Prochaines évolutions

- [ ] AppBarMetrics - Pour les métriques d'affaire
- [ ] AppBarAnnonce - Pour les annonces immobilières
- [ ] Support sticky positioning
- [ ] Animations de transition entre AppBars
- [ ] Mode compact pour mobile (hauteur réduite)
- [ ] Breadcrumbs intégrés pour navigation profonde

---

## Voir aussi

- [Badge](../atoms/Badge.tsx) - Composant de badge
- [AiSuggestion](../atoms/AiSuggestion.tsx) - Badge de suggestions AI
- [IconButton](../atoms/Button.tsx) - Boutons icônes
- [ThemeToggle](../ThemeToggle.tsx) - Toggle dark/light mode