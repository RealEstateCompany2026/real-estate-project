# Dev Report — Fix type coercion SheetMandatEdit

**Date** : 2026-04-22
**Task** : #112 — Fix coercion de types dans SheetMandatEdit
**Statut** : DONE

---

## Probleme

Les champs numeriques (Float, Int en BDD) etaient envoyes comme strings par `SheetMandatEdit.onSave`, ce qui faisait echouer silencieusement les updates Supabase. Les colonnes Supabase de type `float8` / `int4` recoivent `"150000"` au lieu de `150000`.

## Modifications

### 1. `packages/ui/src/components/SheetMandatEdit.tsx`

**A) Helper `coerceFieldValue` ajoute** (section Helpers, avant `buildInitialValues`) :
- Convertit les valeurs string en `number` quand `fieldType === 'number'`
- Retourne `null` pour les champs vides (au lieu de `""`)
- Laisse les autres types (`text`, `select`, `date`) en string

**B) Type `onSave` mis a jour** dans `SheetMandatEditProps` (ligne 40) :
- `Record<string, Record<string, string>>` -> `Record<string, Record<string, string | number | null>>`

**C) `handleSectionSave` mis a jour** (lignes 147-158) :
- Type de `changed` elargi a `string | number | null`
- Appel `coerceFieldValue(current, f.type)` au lieu de `current` directement

### 2. `apps/agent-app/src/components/deals/DealDetailView.tsx`

**A) Type du parametre `updates` dans `handleMandatEditSave`** (ligne 842) :
- `Record<string, Record<string, string>>` -> `Record<string, Record<string, string | number | null>>`

**B) Verification des 2 usages `onSave={handleMandatEditSave}`** :
- Ligne 1892 : SheetMandatEdit (completion donnees manquantes) — OK
- Ligne 1902 : SheetMandatEdit (vue mandat complet) — OK
- Les deux passent le meme callback, type coherent.

## Non touche (conformement au brief)

- Logique Supabase (4 blocs if/promises) — accepte `number | null` nativement
- `buildInitialValues` — reste en `Record<string, Record<string, string>>` (etat interne inputs HTML)
- `localValues` — reste en `Record<string, Record<string, string>>` (inputs HTML travaillent en string)

## Risques

- Aucun risque de regression : la coercion ne s'applique qu'aux champs `type: 'number'`, les autres types passent inchanges.
- Les champs vides retournent `null` au lieu de `""`, ce qui est le comportement attendu par Supabase pour les colonnes nullable.
