# Dev Report — Rewrite PropertyCreateView

**Date** : 2026-04-29
**Fichiers modifies** : 3

## Modifications

### 1. `types/property.ts`
- Ajout `building: string | null` et `doorNumber: string | null` a l'interface `Property` (entre `floorLevel` et `constructionYear`)

### 2. `lib/validations/property.ts`
- `desiredSellingPrice` : passe de **required** a **optional** (`z.coerce.number().positive().optional()`)
- Ajout `building: z.string().optional()` et `doorNumber: z.string().optional()`
- Ajout `mainExposure: z.enum([...]).optional()` (single select au lieu de multi-chip)
- Ajout `parkingLengthM` et `parkingWidthM` (z.coerce.number)
- Ajout `hasElevator`, `hasDigicode`, `hasIntercom` (z.boolean)
- Ajout `statusCheckboxes` array pour les checkboxes section 1
- Ajout `propertyFeatureSchema` (key + comment) pour le pattern add-row equipements
- Conserve `exposures`, `operationTypes`, `status` pour retrocompatibilite

### 3. `components/properties/PropertyCreateView.tsx`
- Rewrite complet : 1386 lignes -> ~870 lignes
- 10 sections Figma (au lieu de 9)
- Pattern identique a ClientCreateView : FormSection + Badge %, sticky header, ProgressBar

#### Sections
| # | Titre | Pattern |
|---|-------|---------|
| 1 | Statut du bien | Checkboxes + client autocomplete, fond gris, pas de Badge % |
| 2 | Informations generales | Categorie Select + Chips, surface, pieces, orientation, vue, adresse BAN, batiment/etage/porte (conditionnel), annee, etat |
| 3 | Valeur marche | 2 prix optionnels |
| 4 | Surfaces | 2 surfaces optionnelles |
| 5 | Caracteristiques par piece | Add-row dynamique, pre-peuple SEJOUR+CUISINE |
| 6 | Diagnostics | Add-row dynamique, pre-peuple DPE+GES, boutons colores A-G |
| 7 | Equipements | Add-row SelectField + commentaire (plus de grid checkboxes) |
| 8 | Stationnement | Add-row type + longueur + largeur |
| 9 | Parties communes | 3 Checkboxes (ascenseur, digicode, interphone) |
| 10 | Informations complementaires | TextArea notes |

#### Completion / Threshold
- Threshold obligatoire : `type` + `address` + `livingAreaSqm` + `clientId`
- `desiredSellingPrice` n'est PLUS dans le threshold

#### DS compliance
- Button variants : `primary`, `outline`, `ghost`
- InputFieldOutlined : `error={!!errors.field}` + `<p>` separe
- DatePicker : `selectedDate`, `onDateSelect`, `variant="docked"`, `dateFormat="DD/MM/YYYY"`
- IconButton : children pattern `<Trash2 size={16} />`
- SelectField : props `label`, `value`, `onChange`, `options`
- Checkbox : props `label`, `checked`, `onChange`
- Chip : `variant="filled"`, `selected`
- Largeurs fixes en `w-[Xpx]` (pas de grid responsive)

#### Submit
- Derive `operationTypes` et `status` depuis `statusCheckboxes`
- Rooms depuis state local (pas react-hook-form)
- Diagnostics depuis state local `diagnosticRows`
- Features depuis state local `equipmentRows` (key+comment -> featureKey+featureValue)
- Parking depuis state local `parkingRows` (premiere row -> colonnes flat)

## A verifier
- Import `DiagnosticType` dans types (deja exporte)
- Retro-compat `propertyUpdateSchema` (toujours `.partial()` du create schema)
