# Changelog - Composants Logs

## LogEntry - 2026-03-23

### ✅ Composant créé

**Fichier:** `/src/app/components/molecules/LogEntry.tsx`

**Description:**
Composant pour afficher une entrée d'historique de logs avec date, heure, auteur, catégorie et description.

**Structure:**
- Divider horizontal (1px, var(--border))
- Date + Heure (Roboto Bold 14px, text-subdued)
- Auteur (Roboto Bold 14px) + Badge catégorie
- Description (Roboto Regular 14px, multiligne)

**Layout:**
- Padding: 10px horizontal, 6px vertical
- Gap: 8px entre sections
- Border-top: 1px solid var(--border)

**Props:**
```typescript
interface LogEntryProps {
  date: string;          // Date formatée (ex: "12 fév. 2026")
  time: string;          // Heure formatée (ex: "12:56")
  author: string;        // Nom de l'auteur
  category: string;      // Catégorie de l'action
  description: string;   // Description détaillée
  className?: string;
}
```

**Usage:**
```tsx
<LogEntry
  date="12 fév. 2026"
  time="12:56"
  author="Jean Dupont"
  category="MODIFICATION"
  description="Lorem ipsum dolor sit amet..."
/>
```

**Features:**
- ✅ Support light/dark mode automatique
- ✅ Badge catégorie avec variante "default"
- ✅ Divider pour séparer les entrées
- ✅ Typographie cohérente avec le design system
- ✅ Couleurs adaptées au thème (text-subdued, text-body)

**Dépendances:**
- `Badge` (atoms)
- `useTheme` (context)

---

## LogHistory - 2026-03-23

### ✅ Composant créé

**Fichier:** `/src/app/components/organisms/LogHistory.tsx`

**Description:**
Composant pour afficher une liste d'entrées de logs avec scroll vertical.
Peut être utilisé dans une page ou une sheet modal.

**Props:**
```typescript
interface LogHistoryProps {
  logs: LogEntryProps[];      // Liste des entrées de logs
  maxHeight?: string;         // Hauteur max avant scroll
  className?: string;
  emptyMessage?: string;      // Message si aucun log
}
```

**Usage:**
```tsx
// Dans une page
<LogHistory logs={sampleLogs} />

// Dans une modal avec scroll
<LogHistory 
  logs={sampleLogs} 
  maxHeight="400px" 
/>

// État vide
<LogHistory 
  logs={[]} 
  emptyMessage="Aucune activité récente" 
/>
```

**Features:**
- ✅ Affichage de multiples entrées de logs
- ✅ Scroll vertical automatique si maxHeight définie
- ✅ Support light/dark mode automatique
- ✅ État vide avec message personnalisable
- ✅ Padding et spacing cohérents

**Dépendances:**
- `LogEntry` (molecules)
- `useTheme` (context)

---

## Demo Page - 2026-03-23

### ✅ Page créée

**Fichier:** `/src/app/pages/LogsDemo.tsx`
**Route:** `/logs-demo`

**Sections:**
1. LogEntry unique - Affichage d'une seule entrée
2. LogHistory avec plusieurs entrées - Liste complète
3. LogHistory avec scroll - Hauteur limitée à 400px pour modal
4. État vide - Message quand aucun log disponible
5. Layout responsive - 2 colonnes pour comparer

**Données de test:**
6 entrées de logs avec différents auteurs, catégories et descriptions réalistes (modifications de prix, création de contacts, mise à jour de statuts, etc.)

---

## Export - 2026-03-23

### ✅ Exports mis à jour

**Molecules:** `/src/app/components/molecules/index.ts`
```typescript
export { LogEntry } from "./LogEntry";
export type { LogEntryProps } from "./LogEntry";
```

**Organisms:** `/src/app/components/organisms/index.ts`
```typescript
export { LogHistory } from "./LogHistory";
export type { LogHistoryProps } from "./LogHistory";
```

**Routes:** `/src/app/routes.tsx`
```typescript
import LogsDemo from "./pages/LogsDemo";
// ...
{ path: "logs-demo", Component: LogsDemo }
```

---

## Design System Compliance

### ✅ Tokens utilisés
- `var(--surface-page)` - Background page
- `var(--surface-neutral-default)` - Background containers
- `var(--border)` - Dividers et borders
- `var(--text-headings)` - Titres
- `var(--text-body)` - Texte principal
- `var(--text-subdued)` - Date/heure (texte secondaire)

### ✅ Typographie
- Roboto Bold 14px/16px tracking 0.14px - Date, heure, auteur
- Roboto Regular 14px/16px tracking 0.14px - Description
- Roboto Bold 12px/14px tracking 0.12px - Badge catégorie

### ✅ Spacing
- Padding: 10px horizontal, 6px/8px vertical
- Gap: 8px entre sections
- Border-radius: 16px (containers)

### ✅ Components réutilisés
- Badge (default variant) pour les catégories
- ThemeContext pour light/dark mode

---

## Use Cases

### 1. Historique dans une page de détail bien
```tsx
<LogHistory 
  logs={bienLogs} 
  emptyMessage="Aucune modification sur ce bien"
/>
```

### 2. Historique dans une sheet modal
```tsx
<Sheet>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Historique des modifications</SheetTitle>
    </SheetHeader>
    <LogHistory 
      logs={logs} 
      maxHeight="500px" 
    />
  </SheetContent>
</Sheet>
```

### 3. Comparaison de deux historiques
```tsx
<div className="grid grid-cols-2 gap-4">
  <LogHistory logs={historyBefore} maxHeight="400px" />
  <LogHistory logs={historyAfter} maxHeight="400px" />
</div>
```

---

## Next Steps

### Améliorations possibles
- [ ] Filtrage par catégorie
- [ ] Recherche dans les descriptions
- [ ] Tri par date/auteur
- [ ] Export CSV/PDF
- [ ] Pagination ou infinite scroll
- [ ] Variantes de badge selon la catégorie (success, warning, error)
- [ ] Icônes pour les types d'actions
- [ ] Lien vers l'élément modifié
- [ ] Affichage des valeurs avant/après modification
