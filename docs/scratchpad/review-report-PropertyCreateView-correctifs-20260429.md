# Review Report — PropertyCreateView 9 correctifs
**Date** : 2026-04-29  
**Reviewer** : reviewer-agent  
**Fichiers audités** :
1. `apps/agent-app/src/components/properties/PropertyCreateView.tsx`
2. `apps/agent-app/src/lib/validations/property.ts`
3. `apps/agent-app/src/types/property.ts`

---

## Checklist des 9 correctifs

### C1 — Statuts (STATUS_CHECKBOX_VALUES)
**PASS**  
Ligne 87-89 : `STATUS_CHECKBOX_VALUES` contient exactement `['OFF_MARKET', 'A_VENDRE', 'A_LOUER', 'EN_VIAGER', 'SOUS_GESTION']`. VENDU et LOUE sont absents. Le schema Zod (property.ts L44) est aligné avec les mêmes 5 valeurs. Le type `PropertyStatus` dans types/property.ts conserve VENDU/LOUE/OTHER pour rétrocompatibilité BDD, ce qui est correct.

### C2 — Multi-propriétaires (clientIds array + Chips + Ajouter)
**CRITICAL — Chip `onDelete` prop inexistante dans le DS**  
- L'implémentation est fonctionnellement correcte : `clientIds` est un array (L209), `selectedClients` state (L199), Chips avec bouton Ajouter (L728-746), recherche contextuelle qui disparaît après sélection (L513 `setShowClientSearch(false)`).
- **Problème** : Ligne 734, `onDelete={() => removeClient(client.id)}` est passé au composant `Chip`. Or le DS `Chip` (`packages/ui/src/components/Chip.tsx`) n'expose PAS de prop `onDelete`. L'interface `ChipProps` ne contient que : `children, label, icon, iconPosition, size, fontWeight, gap, disabled, className, onClick, selected, variant`. La prop `onDelete` sera silencieusement ignorée par React (pas de crash), mais le bouton de suppression ne s'affichera jamais.

**Correction requise** : Remplacer `onDelete` par un pattern avec `icon={<X size={16} />}` + `iconPosition="right"` + `onClick={() => removeClient(client.id)}`, ou enrichir le DS Chip avec une prop `onDelete`.

### C3 — Catégorie (4 options directes)
**PASS**  
Ligne 92-97 : `CATEGORY_OPTIONS` contient exactement 4 entrées : Appartement, Maison, Loft, Autre. Pas de sous-types. Les valeurs sont des `PropertyType` valides.

### C4 — Layout (Catégorie + Nb pièces + Orientation + Vue sur une seule ligne)
**PASS**  
Ligne 802 : `<div className="flex gap-4">` contient les 4 champs avec largeurs fixes (330px + 180px + 180px + 180px = 870px, sous le max-w de 1191px).

### C5 — Surfaces (3 champs, w-[240px], habitable required)
**PASS**  
Lignes 1020-1081 : 3 champs (habitable, extérieure, annexe), chacun dans `w-[240px]`, habitable marqué `required`. Labels conformes : "Surface habitable", "Surface extérieure", "Surface annexe".

### C6 — Pièces (pas de border, space-y-2, champ Équipement texte libre)
**PASS**  
Ligne 1086 : `space-y-2` sur le conteneur. Pas de border sur les lignes de pièces (L1090 : `className="flex items-start gap-4"`). Champ Équipement texte libre par pièce (L1156-1164) avec `equipment: v ? [v] : []`.

### C7 — Diagnostics DPE/GES (InputField Score + auto-calcul + Icons)
**PASS**  
- Score input (L1209-1215) avec InputFieldOutlined label "Score"
- Auto-calcul classe via `computeDpeClass` / `computeGesClass` (L103-121), correctement appelé dans `updateDiagnostic` (L443-447) et dans le rendu (L1220-1231)
- IconDpe/IconGes avec `size="medium"` et `selected` — conforme au DS (les composants acceptent `classe`, `selected`, `size`)
- Import paths `@real-estate/ui/icon-dpe` et `@real-estate/ui/icon-ges` — conformes au package.json exports

### C8 — Diagnostics style (pas de border, space-y-2)
**PASS**  
Ligne 1186 : `<div className="space-y-2">` pour le conteneur. Les lignes de diagnostic (L1190) n'ont pas de border : `className="space-y-3"` puis `className="flex items-start gap-4"`.

### C9 — Types (SOUS_GESTION, ROOM_COUNT_LABELS T5+Plus, DIAGNOSTIC_TYPE_LABELS courts)
**PASS**  
- `PropertyStatus` type (L9) inclut `SOUS_GESTION`
- `PROPERTY_STATUS_LABELS` (L295) inclut `SOUS_GESTION: 'Sous gestion'`
- `ROOM_COUNT_LABELS` (L422-430) : va de 0 (Studio) à 6 (Plus), incluant 5: 'T5'
- `DIAGNOSTIC_TYPE_LABELS` (L411-419) : labels courts (DPE, GES, Amiante, Plomb, Termites, ERP (Risques), Loi Carrez)

---

## Vérifications DS

| Check | Résultat |
|-------|----------|
| IconDpe import `@real-estate/ui/icon-dpe` | **PASS** — export dans package.json L76 |
| IconGes import `@real-estate/ui/icon-ges` | **PASS** — export dans package.json L77 |
| Chip `onDelete` prop | **CRITICAL** — prop inexistante dans le DS |
| Button variants utilisés | **PASS** — primary (L683), outline (L738, 1177, 1282), ghost (L779, 691, 1169, 1274) — tous existent dans le DS |

---

## Résumé

| Sévérité | Count | Détail |
|----------|-------|--------|
| CRITICAL | 1 | Chip `onDelete` prop inexistante — suppression propriétaire impossible |
| WARNING | 0 | — |
| PASS | 8/9 | C1, C3, C4, C5, C6, C7, C8, C9 conformes |

---

## VERDICT : FAIL

**1 CRITICAL à corriger** : La prop `onDelete` sur Chip (L734) n'existe pas dans le DS. Le bouton de suppression de propriétaire ne sera jamais rendu. Le dev-agent doit soit :
- **Option A** (recommandée) : Utiliser `onClick` sur le Chip + ajouter une icône X via la prop `icon` + `iconPosition="right"` pour simuler le delete
- **Option B** : Enrichir le composant DS Chip avec une prop `onDelete` qui affiche un bouton X
