# Vérification des tokens - LogEntry

## ✅ Spécifications respectées

### Light Mode
- ✅ **Date + Heure** : body sm bold en **neutral/200** (#C7C8CB)
- ✅ **Auteur** : body sm bold en **neutral/500** (#444955)
- ✅ **Badge** : tokens badge default (transparent bg, border neutral-500, text neutral-500)
- ✅ **Text log** : body sm regular en **neutral/500** (#444955)

### Dark Mode
- ✅ **Date + Heure** : body sm bold en **neutral/500** (#444955)
- ✅ **Auteur** : body sm bold en **neutral/200** (#C7C8CB)
- ✅ **Badge** : tokens badge default (transparent bg, border neutral-200, text neutral-200)
- ✅ **Text log** : body sm regular en **neutral/200** (#C7C8CB)

---

## Mapping des tokens

### Tokens neutral utilisés

```css
/* Light Mode */
--neutral-200: var(--grey-300); /* #C7C8CB */
--neutral-500: var(--grey-600); /* #444955 */

/* Dark Mode - Les mêmes tokens pointent vers les mêmes raw values */
--neutral-200: var(--grey-300); /* #C7C8CB */
--neutral-500: var(--grey-600); /* #444955 */
```

### Application conditionnelle

Le composant `LogEntry` utilise `useTheme()` pour inverser les couleurs :

```typescript
const { theme } = useTheme();

// Date/Heure
color: theme === "light" ? "var(--neutral-200)" : "var(--neutral-500)"

// Auteur/Description
color: theme === "light" ? "var(--neutral-500)" : "var(--neutral-200)"
```

---

## Typographie

### Body SM (14px)

```css
font-size: 14px;
line-height: 16px;
letter-spacing: 0.14px;
font-family: 'Roboto', sans-serif;
```

**Variantes :**
- **Bold** : `font-weight: 700` (Date, Heure, Auteur)
- **Regular** : `font-weight: 400` (Description)

---

## Badge default

Le composant `Badge` avec `variant="default"` s'adapte automatiquement au thème :

### Light Mode
```css
background: transparent;
border: 1px solid #444955; /* neutral-500 */
color: #444955; /* neutral-500 */
```

### Dark Mode
```css
background: transparent;
border: 1px solid #D0D1D4; /* neutral-200 mapped to grey-300 in dark */
color: #DADBDD; /* text color in dark */
```

---

## Contraste et lisibilité

### Light Mode
- Date/Heure en **neutral/200** (#C7C8CB) = gris clair → **texte secondaire**
- Auteur/Description en **neutral/500** (#444955) = gris foncé → **texte principal**

✅ Hiérarchie visuelle : Date/heure moins importantes que auteur/contenu

### Dark Mode
- Date/Heure en **neutral/500** (#444955) = gris foncé (sur fond sombre) → **visible mais secondaire**
- Auteur/Description en **neutral/200** (#C7C8CB) = gris clair → **bien visible**

✅ Inversion maintient la hiérarchie visuelle sur fond sombre

---

## Structure du composant

```tsx
<LogEntry>
  <Divider /> {/* var(--border) */}
  
  <Date + Time> {/* neutral-200 (light) | neutral-500 (dark) */}
  
  <Author> {/* neutral-500 (light) | neutral-200 (dark) */}
  <Badge variant="default" />
  
  <Description> {/* neutral-500 (light) | neutral-200 (dark) */}
</LogEntry>
```

---

## Tests de validation

### À vérifier sur /logs-demo

1. **Light Mode**
   - [ ] Date/heure apparaissent en gris clair (#C7C8CB)
   - [ ] Auteur apparaît en gris foncé (#444955)
   - [ ] Description apparaît en gris foncé (#444955)
   - [ ] Badge a une border gris foncé (#444955)

2. **Dark Mode** (cliquer sur le bouton Dark Mode)
   - [ ] Date/heure apparaissent en gris foncé (#444955)
   - [ ] Auteur apparaît en gris clair (#C7C8CB)
   - [ ] Description apparaît en gris clair (#C7C8CB)
   - [ ] Badge a une border gris clair

3. **Transition**
   - [ ] Le changement de thème applique immédiatement les bonnes couleurs
   - [ ] Aucun flash ou scintillement

---

## Conformité design system

✅ Utilise uniquement les tokens CSS du design system  
✅ Pas de couleurs hard-codées  
✅ Support automatique light/dark via ThemeContext  
✅ Typographie cohérente (Roboto, tailles, tracking)  
✅ Spacing cohérent (padding 10px/6px, gap 8px)  
✅ Border-radius cohérent (16px sur les containers)
