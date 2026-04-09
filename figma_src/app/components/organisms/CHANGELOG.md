# Changelog - Organisms Components

Historique des modifications des composants organismes RealAgent.

---

## [2026-03-23] Menus - Menu

### ✅ Ajouté
- **Menu** (Menu dans Figma) 🆕
  - Menu déroulant / dropdown avec liste de MenuItems
  - Width : 347px par défaut (personnalisable)
  - Border-radius : 16px
  - Scrollbar optionnelle : 5px width, padding 8px
  - Structure : Liste verticale de MenuItems + Scrollbar custom
  - Support automatique light/dark mode via `useTheme`
  - API simple :
    ```tsx
    <Menu 
      items={[
        { label: "Éditer", leftIcon: Edit, onClick: () => {} },
        { label: "Supprimer", leftIcon: Trash, onClick: () => {} },
      ]}
      showScrollbar={true}
      width={347}
      maxHeight={360}
    />
    ```

### 🎨 Scrollbar
- **Width** : 5px
- **Border-radius** : 16px
- **Light mode** : #444955
- **Dark mode** : #333740
- **Padding** : 8px
- **Optionnelle** : prop `showScrollbar`

### 📝 Props Menu
```tsx
Menu {
  items: MenuItemProps[]   // Liste des items du menu
  showScrollbar?: boolean  // Afficher la scrollbar (default: true)
  width?: number           // Largeur en pixels (default: 347)
  maxHeight?: number       // Hauteur max avant scroll
  className?: string
}
```

### 🎯 Use Cases
1. **Dropdown utilisateur** :
   - Menu profil/paramètres/déconnexion
   - Affiché au clic sur l'avatar

2. **Menu contextuel** :
   - Clic droit sur fiche client/bien/affaire
   - Actions : Éditer, Dupliquer, Supprimer, etc.

3. **Menu d'actions** :
   - Bouton "..." (three dots) sur une card
   - Actions rapides contextuelles

4. **Dropdown navigation** :
   - Menu de filtres
   - Menu de tri

### 🚀 Export
```tsx
export { Menu } from "./Menu";
export type { MenuProps } from "./Menu";
```

---

## [2026-03-23] Loading & Progress - ProgressBarWithControls

### ✅ Ajouté
- **ProgressBarWithControls** (ProgessBar dans Figma) 🆕
  - Barre de progression avec contrôles de navigation
  - Structure complète : Label + Boutons mini + ProgressBar
  - Label : Body.sm.SemiBold 14/16px (ex: "Complétion", "Progression")
  - Boutons navigation mini : ArrowLeft/ArrowRight (24×24px)
  - Barre de progression : ProgressBar atome (0-100%)
  - Dimensions : 1191px max, 380px min, flexible
  - Height : 100px
  - Padding : 34px 10px
  - Gap : 24px entre éléments
  - Border-radius : 20px
  - Background : white (light) / black (dark)
  - Support automatique light/dark mode via `useTheme`
  - Callbacks : `onPrevious`, `onNext`
  - États disabled : `disablePrevious`, `disableNext`
  - API simple :
    ```tsx
    <ProgressBarWithControls 
      label="Complétion"
      progress={65}
      onPrevious={() => {}}
      onNext={() => {}}
      disablePrevious={false}
      disableNext={false}
    />
    ```

### 🎨 Design System
- Utilise l'atome `ProgressBar`
- Icônes Lucide : `ArrowLeft`, `ArrowRight`
- Couleurs tokens CSS : `var(--icon-neutral-default)`, etc.
- Hover states avec `opacity-70`
- Disabled states avec `opacity-40`
- Transition smooth sur les interactions

### 📝 Use Cases
1. **Complétion de profil** :
   - Mesure du pourcentage de champs remplis (fiche client, bien, affaire)
   - Navigation désactivée (indicateur pur)

2. **Navigation par étapes** :
   - Formulaires multi-étapes (création bien, création client)
   - Boutons actifs pour naviguer entre les étapes
   - Disabled au début/fin du parcours

3. **Import de données** :
   - Progression d'import CSV/Excel
   - Navigation désactivée (processus automatique)

4. **Dossier de vente** :
   - Avancement d'un dossier de transaction
   - Peut naviguer entre les différentes phases

### 🚀 Export
```tsx
export { ProgressBarWithControls } from "./ProgressBarWithControls";
export type { ProgressBarWithControlsProps } from "./ProgressBarWithControls";
```

---

## [2026-03-23] AI Organisms - Famille IA

### ✅ Ajouté
- **AiSuggestionDashboard** (IaSuggestionsDashboard dans Figma) 🆕
  - Dashboard de résumé des suggestions IA en tête de page
  - 4 catégories avec badges : Conseil, Service, Administratif, Transaction
  - Bouton CTA "Voir les suggestions" avec icône arrow-right
  - Dimensions : 1191px width, padding 28px 20px
  - Border-radius : 16px
  - Background : #ecedee (light) / #22252b (dark)
  - Gap entre catégories : 46px
  - Bouton violet : #7b72f9 (light) / #635cc7 (dark)
  - Support automatique light/dark mode via `useTheme`
  - API simple :
    ```tsx
    <AiSuggestionDashboard 
      conseil={3}
      service={0}
      administratif={5}
      transaction={2}
      onViewAll={() => navigate('/suggestions')}
    />
    ```

- **AiSuggestionBanner** (OrganismeIaSuggestion dans Figma) 🆕
  - Banner de suggestion contextuelle IA
  - S'affiche à différents endroits dans le CRM
  - Structure : Icône lampe 💡 + Texte suggestion + Bouton CTA
  - Icône lampe : 24×24px (Lucide Lightbulb)
  - Texte : Font Roboto Bold 16px/20px, flexible width
  - Bouton : Personnalisable (ex: "Programmer", "Planifier", "Voir le bien")
  - Dimensions : 1191px width, padding 20px, gap 8px
  - Border-radius : 16px
  - Background : #ecedee (light) / #22252b (dark)
  - Bouton violet : #7b72f9 (light) / #635cc7 (dark)
  - Support automatique light/dark mode via `useTheme`
  - API simple :
    ```tsx
    <AiSuggestionBanner 
      suggestion="M. Dupont n'a pas donné de nouvelles depuis 15 jours..."
      actionLabel="Programmer"
      onAction={() => {}}
    />
    ```

### 🎨 Design System
- Utilise les atomes `AiSuggestion` et `AiTitleWithBadge`
- Icônes Lucide : `Lightbulb`, `ArrowRight`
- Couleurs tokens CSS : `var(--surface-neutral-action)`, `var(--text-body)`, etc.
- Hover states avec `opacity-90`
- Transition smooth sur les interactions

### 📝 Use Cases
1. **AiSuggestionDashboard** :
   - En tête de tableau de bord principal
   - Page dédiée aux suggestions IA
   - Vue d'ensemble des actions détectées par catégorie

2. **AiSuggestionBanner** :
   - Fiche client : suggestion de relance
   - Fiche bien : suggestion administrative (DPE, diagnostics)
   - Fiche affaire : suggestion de transaction
   - Section documents : suggestion de documents manquants

### 🚀 Export
```tsx
export { AiSuggestionBanner } from "./AiSuggestionBanner";
export type { AiSuggestionBannerProps } from "./AiSuggestionBanner";
export { AiSuggestionDashboard } from "./AiSuggestionDashboard";
export type { AiSuggestionDashboardProps } from "./AiSuggestionDashboard";
```

---

## [2026-03-23] DatePicker Organism

### ✅ Ajouté
- **DatePicker** (ModalDatePicker dans Figma)
  - Composant complet de sélection de date
  - Structure :
    - Titre "Select date"
    - Champ de date sélectionnée avec icône calendrier
    - Sélecteur de mois avec navigation (chevrons)
    - Grille de dates (7 colonnes × 6 lignes max)
    - Boutons texte Cancel / OK (Body.sm.SemiBold 14px/16px)
  - Dimensions : 390px width, padding 24px
  - Border-radius : 16px
  - Background : var(--neutral-50)
  - Support automatique light/dark mode via `useTheme`
  - Utilise les atomes DatePickerDay, DatePickerMonth, DatePickerNumber
  - États : default, hover, today, selected
  - Navigation mensuelle avec mise à jour automatique du calendrier
  - API simple :
    ```tsx
    <DatePicker 
      selectedDate={new Date(2025, 7, 30)}
      onDateSelect={(date) => console.log(date)}
      onCancel={() => {}}
      onConfirm={(date) => {}}
    />
    ```

### 🚀 Export
```tsx
export { DatePicker } from "./DatePicker";
```

---

## 📊 Inventaire Actuel (5 organismes)

1. **DatePicker** - Sélecteur de date complet
2. **AiSuggestionDashboard** 🆕 - Dashboard résumé IA
3. **AiSuggestionBanner** 🆕 - Banner contextuel IA
4. **ProgressBarWithControls** 🆕 - Barre de progression avec contrôles
5. **Menu** 🆕 - Menu déroulant / dropdown

---

## 🎯 Prochains organismes à créer

### Navigation
- [ ] NavRail (navigation latérale)
- [ ] AppBar (barre supérieure)
- [ ] Breadcrumb

### Fiches & Cards
- [ ] FicheClient (card client)
- [ ] FicheBien (card bien immobilier)
- [ ] FicheAffaire (card affaire/deal)
- [ ] CardDocument

### Tables & Lists
- [ ] TableList (liste avec tri/pagination)
- [ ] TableRow
- [ ] FilterBar

### Forms
- [ ] FormField (champ avec label + input)
- [ ] FormSection
- [ ] SearchBar

### Modals & Overlays
- [ ] Modal
- [ ] Drawer
- [ ] BottomSheet
- [ ] Toast/Snackbar

---

## 📚 Ressources

- **Figma Source** : OrganismeIaSuggestion.tsx, IaSuggestionsDashboard.tsx, ModalDatePicker.tsx, ProgressBar.tsx
- **Design Tokens** : `/src/styles/theme.css`
- **Démo** : 
  - `/ai-components-demo` (http://localhost:5173/ai-components-demo)
  - `/date-picker-demo` (http://localhost:5173/date-picker-demo)
  - `/progress-demo` (http://localhost:5173/progress-demo)
  - `/menu-demo` (http://localhost:5173/menu-demo)