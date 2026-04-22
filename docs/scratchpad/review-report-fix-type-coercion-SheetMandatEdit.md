# Review Report — Fix type coercion SheetMandatEdit

**Date** : 2026-04-22
**Task** : #112 — Fix coercion de types dans SheetMandatEdit
**Reviewer** : reviewer-agent
**Verdict** : **PASS**

---

## Fichiers audites

1. `packages/ui/src/components/SheetMandatEdit.tsx`
2. `apps/agent-app/src/components/deals/DealDetailView.tsx`

---

## Checklist d'audit

### 1. Helper `coerceFieldValue` — couverture des cas

| Cas | Input | Output | Verdict |
|-----|-------|--------|---------|
| String vide | `('', 'number')` | `null` | OK — colonnes nullable Supabase |
| String vide text | `('', 'text')` | `null` | OK — guard `value === ''` en premier |
| Entier valide | `('150000', 'number')` | `150000` | OK — `Number('150000')` = 150000 |
| Flottant valide | `('72.5', 'number')` | `72.5` | OK — `Number('72.5')` = 72.5 |
| Nombre invalide | `('abc', 'number')` | `null` | OK — `Number.isNaN` catch, retourne null |
| Text normal | `('Paris', 'text')` | `'Paris'` | OK — fallthrough return value |
| Select | `('APARTMENT', 'select')` | `'APARTMENT'` | OK — fallthrough return value |
| Date | `('2026-04-22', 'date')` | `'2026-04-22'` | OK — fallthrough return value |

**Verdict** : PASS — Tous les cas sont couverts. Le guard `value === ''` en premiere position est correct car il s'applique a tous les types.

### 2. Propagation du type `string | number | null`

- `SheetMandatEditProps.onSave` : `Record<string, Record<string, string | number | null>>` — OK (ligne 40)
- `handleSectionSave` variable `changed` : type explicite `Record<string, Record<string, string | number | null>>` — OK (ligne 149)
- `handleMandatEditSave` dans `DealDetailView.tsx` : parametre `updates: Record<string, Record<string, string | number | null>>` — OK (ligne 842)
- Les appels Supabase `.update(updates.organization)` etc. acceptent `Record<string, unknown>` nativement — pas de conflit TypeScript.
- `localValues` reste en `Record<string, Record<string, string>>` — correct car les inputs HTML travaillent en string. La coercion se fait uniquement au moment du save.

**Verdict** : PASS — Types coherents de bout en bout, pas de mismatch.

### 3. Autres consumers de `SheetMandatEdit`

Recherche exhaustive dans le projet :
- `DealDetailView.tsx` : 2 usages (ligne 1886 et 1896), les deux utilisent `onSave={handleMandatEditSave}` avec le type mis a jour.
- `SheetMandatEdit.stories.tsx` : stories Storybook, `onSave` callback avec `console.log` — accepte n'importe quel argument, pas de conflit.
- Aucun autre consumer trouve dans le projet.

**Verdict** : PASS — Aucun risque de regression sur d'autres consumers.

### 4. Export du type `SheetMandatEditProps`

- `SheetMandatEditProps` est exporte en `export interface` (ligne 33) — OK
- `package.json` exporte `"./sheet-mandat-edit": "./src/components/SheetMandatEdit.tsx"` — OK
- `DealDetailView.tsx` importe `SheetMandatEdit` et les types `EligibilitySection`, `EligibilityField` depuis `@real-estate/ui/sheet-mandat-edit` — OK

**Verdict** : PASS

### 5. Compatibilite Supabase `null` pour colonnes nullable

- Supabase JS Client `.update({ field: null })` envoie `null` en JSON, ce qui correspond a `NULL` en SQL pour les colonnes `float8?`, `int4?` — comportement natif et documente.
- Les champs vides retournent `null` au lieu de `""`, ce qui evite les erreurs de type sur les colonnes numeriques.

**Verdict** : PASS

---

## Points d'attention (non-bloquants)

### MINOR-1 : `Number('')` retourne 0, pas NaN
Le guard `value === ''` en premiere position empeche ce cas d'etre atteint. Cependant, si un jour l'ordre des checks est modifie, `Number('')` retournerait `0` au lieu de `null`. Recommandation : ajouter un commentaire inline pour documenter cette subtilite.

### MINOR-2 : Pas de gestion du whitespace-only
Un champ contenant uniquement des espaces (`'   '`) passerait le guard `value === ''` et serait envoye comme string pour text, ou `NaN` -> `null` pour number. Comportement acceptable pour l'usage actuel (les inputs HTML ne generent pas de whitespace-only en general).

### MINOR-3 : `buildInitialValues` recalcule a chaque render de section
Dans `handleSectionSave` et dans le check `sectionHasChanges`, `buildInitialValues(sections)` est appele a chaque render de chaque section. Ce n'est pas une regression (existait avant le fix) mais pourrait etre memoize. Hors scope de cette review.

---

## Verdict final

| Critere | Statut |
|---------|--------|
| Couverture des cas coercion | PASS |
| Types TypeScript coherents | PASS |
| Pas de regression consumers | PASS |
| Export DS correct | PASS |
| Compatibilite Supabase | PASS |

## **PASS** — Le code est conforme, peut etre deploye.
