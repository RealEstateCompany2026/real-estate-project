# Changelog - Atoms Components

Historique des modifications des composants atomiques RealAgent.

---

## [2026-03-23] Menus - MenuItem

### ✅ Ajouté
- **MenuItem** (menu item dans Figma) 🆕
  - Item de menu contextuel ou dropdown cliquable
  - Structure : Icône gauche (optionnel) + Label + Icône droite (optionnel)
  - Icônes : 24×24px (Lucide)
  - Font : Roboto SemiBold 16/20px (Bold si selected)
  - Height : 60px
  - Padding : 12px 18px
  - Gap : 12px entre éléments
  - Border-bottom : 1px solid
  - États : default, hover, selected, disabled
  - Couleurs personnalisables via props `backgroundColor`, `textColor`
  - **Hover automatique /500 → /600** : Détection intelligente des couleurs design system
    - Si `backgroundColor` = couleur /500 (success, error, warning, information, branded)
    - Le hover passe automatiquement à la version /600 (plus foncée)
    - Mapping automatique : #0da500 (success/500) → #109204 (success/600), etc.
    - Pour les couleurs custom non-system : hover reste sur la couleur d'origine
  - Support automatique light/dark mode via `useTheme`
  - API simple :
    ```tsx
    <MenuItem 
      label="Éditer"
      leftIcon={Edit}
      rightIcon={ArrowRight}
      selected={false}
      disabled={false}
      onClick={() => {}}
      backgroundColor="#0da500"  // Auto-hover vers #109204
      textColor="white"
    />
    ```

- **Checkbox** (checkbox dans Figma) 🆕
  - Case à cocher interactive pour sélection binaire (coché/décoché)
  - Size : 28×28px
  - Border-radius : 8px
  - Border-width : 1px
  - Check icon : 20×20px (SVG path Figma)
  - Padding interne : 4px
  - États : default, hover, focus, disabled, error
  - Light mode :
    - Default unchecked : bg white, border #444955
    - Default checked : bg white, border #444955, check #444955
    - Hover : bg #ecedee, border #444955
    - Focus : ring externe 2px #444955
    - Disabled : bg #ecedee, border #dadbdd, check #D0D1D4
    - Error : bg #ffe5e5, border #ffbfbf, check #FF0000
  - Dark mode :
    - Default unchecked : bg #111215, border #d0d1d4
    - Default checked : bg #111215, border #d0d1d4, check #d0d1d4
    - Hover : bg #333740, border #d0d1d4
    - Focus : ring externe 2px #d0d1d4
    - Disabled : bg #333740, border #444955, check #444955
    - Error : bg #400000, border #bf0000, check #bf0000
  - Accessibilité complète : navigation clavier (Tab), toggle (Espace/Entrée), ARIA labels
  - Focus ring visible au focus clavier uniquement
  - Support formulaires : props `name`, `id` pour hidden input
  - API simple :
    ```tsx
    <Checkbox 
      checked={isChecked}
      onChange={(checked) => setIsChecked(checked)}
      disabled={false}
      error={false}
      name="accept-terms"
      ariaLabel="Accepter les conditions"
    />
    ```

- **Switch** (switch dans Figma) 🆕
  - Toggle switch interactif pour sélection binaire ON/OFF
  - Size : 48×30px, border-radius 16px
  - Toggle circle : 24×24px avec shadow subtile
  - Padding : 3px
  - Animation : transition smooth 200ms sur position et couleur
  - États : OFF, ON, disabled
  - Couleurs :
    - OFF light : bg #d0d1d4, circle white
    - ON light : bg #0da500 (success green), circle white
    - OFF dark : bg #444955, circle #111215
    - ON dark : bg #0da500 (success green), circle #111215
  - Features :
    - Animation fluide du toggle (gauche → droite)
    - Hover : opacity 90% sur le cercle
    - Focus ring visible au focus clavier
    - Support disabled (opacity 40%)
  - Accessibilité complète : navigation clavier (Tab), toggle (Espace/Entrée), ARIA labels
  - Support formulaires : props `name`, `id` pour hidden input
  - API simple :
    ```tsx
    <Switch 
      checked={isOn}
      onChange={(checked) => setIsOn(checked)}
      disabled={false}
      name="notifications"
      ariaLabel="Activer les notifications"
    />
    ```

- **TextField** (field dans Figma) 🆕
  - Champ de saisie de texte générique avec icônes optionnelles
  - Size : 56px height (padding 18px × 2 + line 20px)
  - Padding : 12px (horizontal) × 18px (vertical)
  - Gap : 8px entre icône et texte
  - Border : bottom 1px solid
  - Icons : 20×20px (Lucide), optionnels gauche/droite
  - Font : Roboto SemiBold 16px/20px, letter-spacing 0.16px
  - États : default, focus, filled, error, disabled
  - Couleurs :
    - Border default : #ecedee (light) / #333740 (dark)
    - Border focus : #444955 (light) / #d0d1d4 (dark)
    - Border error : #FF0000 (light) / #bf0000 (dark)
    - Background default : white (light) / #111215 (dark)
    - Background disabled : #f8f9fa (light) / #22252b (dark)
    - Background error : #ffe5e5 (light) / #400000 (dark)
    - Placeholder : #a1a4aa
    - Icons : #a1a4aa
    - Text filled : var(--text-body)
  - Features :
    - Icônes gauche/droite optionnelles (Lucide)
    - Support tous types HTML5 : text, email, tel, url, password, number, search, date, time, datetime-local
    - Focus visible : border plus foncée (transition 200ms)
    - États error et disabled avec couleurs spécifiques
  - Accessibilité complète : aria-label, aria-invalid, keyboard navigation
  - Support formulaires : name, id, autoComplete, required, maxLength
  - Callbacks : onChange(value), onFocus(), onBlur()
  - API simple :
    ```tsx
    <TextField
      value={firstName}
      onChange={(value) => setFirstName(value)}
      placeholder="First name"
      type="text"
      leftIcon={User}
      rightIcon={Info}
      error={false}
      disabled={false}
      name="firstName"
      required
    />
    ```

- **TextFieldOutlined** (version outlined) 🆕
  - Variante de TextField avec border complet (contour) au lieu de border-bottom
  - Size : 56px height (même que TextField)
  - Padding : 12px (horizontal) × 18px (vertical)
  - Border : 1px solid (tous les côtés)
  - Border-radius : 8px
  - Icons : 20×20px (Lucide), optionnels gauche/droite
  - Font : Roboto SemiBold 16px/20px, letter-spacing 0.16px
  - États : default, focus, filled, error, disabled
  - Mêmes couleurs et comportements que TextField
  - API identique à TextField :
    ```tsx
    <TextFieldOutlined
      value={email}
      onChange={(value) => setEmail(value)}
      placeholder="email@example.com"
      type="email"
      leftIcon={Mail}
      rightIcon={Info}
      error={false}
      disabled={false}
    />
    ```

- **Label** (label dans Figma) 🆕
  - Label de formulaire avec icône info et indicateur required
  - Font : Roboto Regular 16px/20px, letter-spacing 0.16px
  - Gap : 8px entre label et icône
  - Icône info : 20×20px (Lucide Info)
  - Couleurs :
    - Light : #444955
    - Dark : #d0d1d4
    - Required : red (astérisque à left: -8px)
  - Props : label, icon (boolean), required (boolean), htmlFor
  - API simple :
    ```tsx
    <Label 
      label="First name"
      icon={true}
      required={true}
      htmlFor="first-name-input"
    />
    ```

- **MessageStatusDot** (status indicator) 🆕
  - Indicateur de statut de message (none, success, fail)
  - Size : 18×18px (cercle)
  - Border-radius : 8px
  - Border : 1px solid
  - États :
    - none : blanc/dark avec border gris
    - success : vert avec border vert foncé
    - fail : gris avec border gris foncé
  - Couleurs Light :
    - none : fill white, stroke #a1a4aa
    - success : fill #4ABC40, stroke #109204
    - fail : fill #D0D1D4, stroke #737780
  - Couleurs Dark :
    - none : fill #111215, stroke #737780
    - success : fill #0DA500, stroke #86D280
    - fail : fill #444955, stroke #737780
  - API simple :
    ```tsx
    <MessageStatusDot status="success" />
    ```

- **MessageBadge** (badge de message) 🆕
  - Badge affichant le statut du message : REÇU, ENVOYÉ, MODIFIÉ
  - Height : 20px (auto width)
  - Padding : 4px × 8px
  - Border-radius : 16px
  - Border : 1px solid
  - Font : Roboto Bold 12px/14px
  - Couleurs Light : Border & Text #444955
  - Couleurs Dark : Border & Text #d0d1d4
  - API simple :
    ```tsx
    <MessageBadge label="REÇU" />
    <MessageBadge label="ENVOYÉ" />
    ```

- **MessageTimestamp** (horodatage) 🆕
  - Affiche la date et l'heure d'un message
  - Font : Roboto Regular 14px/16px
  - Padding : 8px × 10px par élément
  - Gap : 0px (collés)
  - Couleurs Light : #444955
  - Couleurs Dark : #d0d1d4
  - API simple :
    ```tsx
    <MessageTimestamp date="le 12 fév 2026" time="à 12:47" />
    ```

### 🧬 Molécules créées

- **InputField** (input dans Figma) 🆕
  - Composant composite : Label + TextField + Hint text (optionnel)
  - Structure Figma exacte :
    - Label (atome) : label + icône info + required
    - Field (atome) : TextField
    - Hint text (optionnel) : texte d'aide
  - Gap vertical : 12px
  - Hint text : Roboto Regular 14px/16px, #737780
  - Hérite toutes les props de TextField (leftIcon, rightIcon, type, error, disabled, etc.)
  - Props additionnelles : label, icon, required, hintText
  - API simple :
    ```tsx
    <InputField
      label="First name"
      placeholder="Enter your first name"
      value={value}
      onChange={(value) => setValue(value)}
      leftIcon={User}
      rightIcon={Info}
      icon={true}
      required={true}
      hintText="Enter your legal first name"
    />
    ```

- **InputFieldOutlined** (input outlined dans Figma) 🆕
  - Composant composite : Label + TextFieldOutlined + Hint text (optionnel)
  - Structure Figma exacte :
    - Label (atome) : label + icône info + required
    - Field (atome) : TextFieldOutlined
    - Hint text (optionnel) : texte d'aide
  - Gap vertical : 12px
  - Hint text : Roboto Regular 14px/16px, #737780
  - Hérite toutes les props de TextFieldOutlined (leftIcon, rightIcon, type, error, disabled, etc.)
  - Props additionnelles : label, icon, required, hintText
  - API simple :
    ```tsx
    <InputFieldOutlined
      label="Email"
      placeholder="Enter your email"
      value={email}
      onChange={(value) => setEmail(value)}
      leftIcon={Mail}
      rightIcon={Info}
      icon={true}
      required={true}
      hintText="Enter a valid email address"
    />
    ```

- **MessageBubble** (bulle de message) 🆕
  - Bulle de contenu de message avec support de deux variantes
  - Variante Standard (Figma) :
    - Background : #ecedee (light) / #22252b (dark)
    - Border-radius : 16px
    - Padding : 10px
    - Border : 1px solid (même couleur que bg)
    - Gap : 10px
  - Variante Chat (WhatsApp) :
    - Background sent : #DCF8C6 (light) / #056162 (dark)
    - Background received : white (light) / #262D31 (dark)
    - Border-radius : 12px
    - Padding : 8px 12px
    - Border : none
    - Box-shadow : 0 1px 0.5px rgba(0,0,0,0.13)
    - Gap : 4px
  - API simple :
    ```tsx
    <MessageBubble variant="standard" align="left">
      <p>Message content</p>
    </MessageBubble>
    ```

- **MessageReceived** (message reçu complet) 🆕
  - Message reçu avec header (badge, status, date, icône) et bulle de contenu
  - Support deux variantes : standard (Figma) et chat (WhatsApp)
  - Variante Standard :
    - Badge "REÇU" visible
    - Status dot visible
    - Timestamp complet
    - Icône flèche droite
    - Fond gris #ecedee
    - Gap : 10px
  - Variante Chat :
    - Pas de badge
    - Status dot discret (opacity 70%)
    - Timestamp réduit (heure uniquement, 12px)
    - Pas d'icône flèche
    - Fond blanc
    - Gap : 4px
  - API simple :
    ```tsx
    <MessageReceived
      variant="standard"
      date="le 12 fév 2026"
      time="à 12:47"
      status="success"
      showBadge={true}
      showArrow={true}
    >
      <p>Message content...</p>
    </MessageReceived>
    ```

- **MessageSent** (message envoyé complet) 🆕
  - Message envoyé avec header (badge, status, date, icône) et bulle de contenu
  - Support deux variantes : standard (Figma) et chat (WhatsApp)
  - Variante Standard :
    - Badge "ENVOYÉ" visible (à droite)
    - Status dot visible
    - Timestamp complet
    - Icône flèche gauche
    - Fond gris #ecedee
    - Gap : 10px
    - Alignement à droite
  - Variante Chat :
    - Pas de badge
    - Status dot discret (opacity 70%)
    - Timestamp réduit (heure uniquement, 12px)
    - Pas d'icône flèche
    - Fond vert #DCF8C6
    - Gap : 4px
    - Alignement à droite
  - API simple :
    ```tsx
    <MessageSent
      variant="standard"
      date="le 12 fév 2026"
      time="à 12:48"
      status="success"
      showBadge={true}
      showArrow={true}
    >
      <p>Message content...</p>
    </MessageSent>
    ```

- **MessageComposer** (composer de message) 🆕
  - Formulaire complet pour composer et envoyer un message avec pièce jointe
  - Support deux variantes : standard (Figma) et chat (WhatsApp)
  - Variante Standard (Figma) :
    - Titre "Votre message"
    - Textarea dans bulle blanche
    - Bouton "Pièce jointe" outlined
    - Lien "Ajouter une pièce jointe"
    - Bouton "Envoyer le message" branded
    - Border-radius : 16px
    - Padding : 20px
  - Variante Chat (WhatsApp) :
    - Pas de titre
    - Input inline avec bulle
    - Icône paperclip intégrée
    - Bouton send circulaire
    - Border-radius : 24px
    - Padding : 8px
    - Plus compact
  - API simple :
    ```tsx
    <MessageComposer
      variant="standard"
      onSend={(message, attachments) => console.log(message)}
      placeholder="Votre message..."
    />
    ```

- **MessageEdit** (éditeur WYSIWYG) 🆕
  - Éditeur de texte riche pour composer des messages avec formatage
  - Support deux variantes : standard (Figma) et chat (WhatsApp)
  - Basé sur react-quill (Quill.js)
  - Variante Standard (Figma) :
    - Titre "Votre message" / "Modifier le message"
    - Éditeur WYSIWYG avec toolbar complète
    - Toolbar : Bold, Italic, Underline, Lists, Links, Clean
    - Bouton "Pièce jointe" outlined
    - Lien "Ajouter une pièce jointe"
    - Bouton "Envoyer" / "Enregistrer" branded
    - Bouton "Annuler" en mode édition
    - Border-radius : 16px
    - Padding : 20px
    - Min-height : 120px
  - Variante Chat (WhatsApp) :
    - Toolbar simplifiée (Bold, Italic, Strikethrough)
    - Input inline avec bulle
    - Icône paperclip intégrée
    - Icône X pour annuler (mode édition)
    - Bouton send circulaire
    - Border-radius : 24px
    - Padding : 8px
    - Min-height : 40px
  - API simple :
    ```tsx
    <MessageEdit
      variant="standard"
      onSend={(html, plainText, attachments) => console.log(html)}
      onCancel={() => console.log("cancel")}
      placeholder="Votre message..."
      defaultValue="<p>Contenu HTML initial</p>"
      isEditing={true}
    />
    ```

---

## [2026-03-23] Loading & Progress - ProgressBar

### ✅ Ajouté
- **ProgressBar** (AtomeProcessBar dans Figma) 🆕
  - Barre de progression visuelle dynamique (0-100%)
  - Hauteur : 20px, border-radius : 20px
  - Background : #ecedee (light) / #22252b (dark)
  - Fill : #0da500 (vert success) par défaut
  - Couleur personnalisable via prop `color`
  - Transition smooth (300ms) sur les changements de progression
  - Largeur flexible (flex-1)
  - API simple : `<ProgressBar progress={65} />`
  - Support automatique light/dark mode via `useTheme`

### 🎨 Couleurs Progress
- **Background light** : #ecedee
- **Background dark** : #22252b
- **Fill default** : #0da500 (vert success)
- **Fill personnalisable** : via prop `color`

### 📝 Structure
```tsx
<ProgressBar 
  progress={0-100}
  color="#0da500" // optionnel
  className="optional"
/>
```

### 🚀 Export
```tsx
export { ProgressBar } from "./ProgressBar";
export type { ProgressBarProps } from "./ProgressBar";
```

---

## [2026-03-22] ButtonSort Component

### ✅ Ajouté
- **ButtonSort** : Bouton de tri pour colonnes de tableaux
- **useSortState** : Hook custom pour gérer l'état de tri
- 3 états : null (pas de tri), "asc" (croissant), "desc" (décroissant)
- Rotation automatique des états au clic
- Icônes Lucide (ArrowUp, ArrowDown)
- Support light/dark mode

---

## [2026-03-21] Chip Components

### ✅ Ajouté
- **Chip** : Composant chip générique
- **ChipDate** : Chip avec icône calendrier
- **ChipId** : Chip pour identifiants métier
- **ChipScore** : Chip avec jauge de scoring (A/B/C/D)
- **ChipScoreAuto** : Chip avec calcul automatique du niveau depuis un score 0-100
- **ChipTrend** : Chip de tendance avec flèches (up/down/neutral)
- **MessageStatusDot** : Indicateur de statut circulaire (success/fail/none)

---

## [2026-03-20] Button Components

### ✅ Ajouté
- **Button** : 4 variantes (primary, secondary, ghost, disabled)
- **IconButton** : 3 tailles (sm: 32px, md: 44px, lg: 56px)
- **IconButtonMega** : Taille XL (70×70px)
- **SendingIconButton** : Bouton d'envoi avec états (idle/sending/sent)
- **ButtonMultiLabel** : Segmented control (groupe de boutons)
- **ButtonPagination** : Boutons de pagination (standard + mini)

### 🎨 Design System
- Focus ring sur tous les boutons (keyboard navigation)
- Support light/dark mode complet
- Tokens CSS du design system
- Structure exacte depuis Figma

---

## 📊 Inventaire Actuel (36 composants)

### Buttons (9)
1. Button
2. IconButton
3. IconButtonMega
4. SendingIconButton
5. ButtonMultiLabel
6. ButtonMultiLabelControlled
7. ButtonPagination
8. ButtonPaginationMini
9. ButtonSort

### Chips & Indicators (7)
10. Chip
11. ChipDate
12. ChipId
13. ChipScore
14. ChipScoreAuto
15. ChipTrend
16. MessageStatusDot

### Labels & Tags (3)
17. Badge
18. BadgeCriteria
19. BadgePaymentMethod

### Date & Time Pickers (3)
20. DatePickerDay
21. DatePickerMonth
22. DatePickerNumber

### AI Components (2)
23. AiSuggestion
24. AiTitleWithBadge

### Loading & Progress (1)
25. ProgressBar

### Menus (2)
26. MenuItem
27. DropdownButton

### Form Controls (5) 🆕
28. Checkbox
29. Switch
30. TextField
31. TextFieldOutlined
32. Label

### Messages (3) 🆕
33. MessageStatusDot
34. MessageBadge
35. MessageTimestamp

### Hooks (1)
36. useSortState

**Total: 36 atomes + 8 molécules**

### 🧬 Molécules
1. InputField
2. InputFieldOutlined
3. MessageBubble
4. MessageReceived
5. MessageSent
6. MessageComposer
7. MessageEdit
8. Menu (atome Menu + molécule Dropdown)

---

## 🎯 Prochaines étapes

### Composants à créer
- [ ] Input fields (text, number, email, etc.)
- [ ] Select / Dropdown
- [ ] Radio
- [ ] Switch / Toggle
- [ ] Textarea
- [ ] Avatar
- [ ] Progress Bar
- [ ] Skeleton
- [ ] Tooltip
- [ ] Alert / Toast
- [ ] Modal / Dialog

### Organismes à assembler
- [ ] Card (fiche client/bien/deal)
- [ ] Table (list avec tri/pagination)
- [ ] Form (formulaire complet)
- [ ] Navigation (NavRail + AppBar)
- [ ] Sidebar
- [ ] Header

---

## 📚 Ressources

- **Figma Source** : AtomeSticker.tsx
- **Design Tokens** : `/src/styles/theme.css`
- **Documentation** : `/src/app/components/atoms/README.md`
- **Démo** : `/atoms-demo` (http://localhost:5173/atoms-demo)