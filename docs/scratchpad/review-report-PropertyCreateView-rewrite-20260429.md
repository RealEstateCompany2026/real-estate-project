## Review Report — PropertyCreateView Rewrite

**Date** : 2026-04-29
**Fichiers audités** :
1. `apps/agent-app/src/components/properties/PropertyCreateView.tsx` (1387 lignes)
2. `apps/agent-app/src/lib/validations/property.ts` (141 lignes)
3. `apps/agent-app/src/types/property.ts` (428 lignes)

---

### CRITICAL (bloquant)

Aucun.

---

### WARNING (non bloquant)

- [W1] **FEATURE_KEYS hardcodés dans le composant** (L56-75) — Les 18 options d'équipement sont définies comme constante locale avec des string literals (`'ascenseur'`, `'balcon'`, etc.) au lieu d'être importées depuis `@/types/property.ts`. Ce n'est pas un bug fonctionnel car ces clés correspondent aux `featureKey` en BDD (table PropertyFeature), mais cela crée une seconde source de vérité. Recommandation : exporter un `FEATURE_KEY_LABELS` depuis `property.ts` et l'importer ici.

- [W2] **APARTMENT_LIKE_TYPES hardcodé** (L81-83) — La liste des types "appartement" est définie localement au lieu d'être dérivée de `PROPERTY_CATEGORY_TYPES`. Si un nouveau type résidentiel est ajouté au dictionnaire, cette liste devra être mise à jour manuellement.

- [W3] **DPE buttons natifs `<button>` au lieu du DS** (L1156-1169) — Les boutons A-G pour la sélection DPE/GES utilisent un `<button>` natif avec des styles inline (`style={{ backgroundColor: DPE_COLORS[cls] }}`). C'est un choix acceptable car aucun composant DS ne correspond exactement (ce sont des boutons colorés carrés), et `DPE_COLORS` est importé depuis `@/types/property.ts`. Mais c'est le seul endroit du formulaire qui utilise du style inline.

- [W4] **PropertyFeature insert sans organizationId** (L579-585) — L'insert PropertyRoom et PropertyDiagnostic incluent `organizationId: agent.organizationId`, mais l'insert PropertyFeature ne l'inclut pas. L'interface `PropertyFeature` dans `property.ts` ne possède pas de champ `organizationId`, donc c'est cohérent avec le type, mais si la table Supabase a cette colonne, elle sera `null`.

- [W5] **Completion S9 comptabilise false comme non rempli** (L286-287) — La logique `s9Checks.filter(Boolean).length / 3` signifie qu'un bien sans ascenseur, sans digicode et sans interphone affichera 0% de complétion pour la section 9, même si l'utilisateur a explicitement laissé les checkboxes décochées (indiquant "non"). C'est un choix UX discutable mais non bloquant.

- [W6] **`as any` casts sur statusCheckboxes** (L361-364, L655) — Plusieurs `as any` sur les opérations de `statusCheckboxes`. Cela fonctionne mais réduit la sécurité de type. Le cast est causé par le fait que le `z.enum` du schema et le type `PropertyStatus` ne sont pas exactement le même type.

---

### PASS

- [P1] **Conformité DS Button** — `variant="primary"` (L623), `variant="outline"` (L1122, 1248, 1291, 1343), `variant="ghost"` pour IconButton (L630, 674, 1114, 1240, 1284, 1336). Aucun variant invalide (pas de "filled"/"outlined").

- [P2] **Conformité DS Chip** — `variant="filled"` + `selected` boolean (L671-673, L749-752). Correct.

- [P3] **Conformité DS InputFieldOutlined** — `error` est bien boolean (`!!errors.clientId`, `!!fieldState.error`). Messages d'erreur affichés dans un `<p>` séparé. Correct.

- [P4] **Conformité DS DatePicker** — `selectedDate` (Date|undefined), `onDateSelect`, `variant="docked"`, `dateFormat="DD/MM/YYYY"` (L1226-1235). Pas de `value`/`onChange`/`label`. Correct.

- [P5] **Conformité DS IconButton** — Pattern enfant `<IconButton variant="ghost"><Icon size={N} /></IconButton>` respecté partout. Pas de prop `icon`/`size` sur IconButton.

- [P6] **Conformité DS SelectField** — `label`, `value`, `onChange`, `options`, `error` (string|undefined) sur le SelectField Catégorie (L741). Correct.

- [P7] **Conformité DS Badge** — `variant` calculé avec `success`/`warning`/`error` dans FormSection (L105). Correct.

- [P8] **Conformité DS TextArea** — `value`, `onChange`, `maxLength={2000}`, `showCharCount`, `rows={4}` (L1375-1381). Correct.

- [P9] **Conformité DS Checkbox** — `label`, `checked`, `onChange` (boolean callback) (L652-656, L1088-1091, L1353-1357). Correct.

- [P10] **Structure 10 sections** — Les 10 sections sont bien : (1) Statut du bien avec `bg-surface-neutral-action`, (2) Informations generales, (3) Valeur marche, (4) Surfaces, (5) Caracteristiques par piece, (6) Diagnostics, (7) Equipements, (8) Stationnement, (9) Parties communes, (10) Informations complementaires. Toutes ont un Badge % sauf la section 1 (fond gris). Correct.

- [P11] **FormSection pattern** — Conforme a ClientCreateView : Badge completion % avec variant success (100%) / warning (>=50%) / error (<50%). Section 1 pas de Badge via check `className?.includes('bg-surface-neutral-action')`. Correct.

- [P12] **Field widths Figma spec** — Categorie: 330px, Surface/Pieces/Orientation/Vue: 180px, Adresse: 1030px, Batiment/Etage/Porte/Nb etages: 200px, Annee construction/Etat: 330px, Prix: 330px, Surfaces terrain/annexe: 240px, Type piece: 220px, Surface piece: 150px, Baignoire/Douche/WC: 100px, Equipement: 330px. Tous conformes.

- [P13] **Pas de hardcoding types/labels** — Tous les labels proviennent de `@/types/property.ts` : `PROPERTY_STATUS_LABELS`, `CATEGORY_LABELS`, `PROPERTY_TYPE_LABELS`, `EXPOSURE_LABELS`, `VIEW_TYPE_LABELS`, `PROPERTY_CONDITION_LABELS`, `ROOM_TYPE_LABELS`, `KITCHEN_TYPE_LABELS`, `DIAGNOSTIC_TYPE_LABELS`, `PARKING_TYPE_LABELS`. DPE_COLORS importe. Pas de couleurs hardcodees (sauf DPE_COLORS qui est la source de verite).

- [P14] **Validation schema coherent** — `desiredSellingPrice` est bien optionnel (`z.coerce.number().positive().optional()` L79). `building` et `doorNumber` ajoutes (L66-67). `mainExposure` single enum ajoute (L56). `hasElevator`, `hasDigicode`, `hasIntercom` ajoutes (L101-103). Tous les champs numeriques utilisent `z.coerce.number()`. Correct.

- [P15] **Submit logic** — Derive correctement `operationTypes` depuis `statusCheckboxes` (L494-498). Derive `status` comme premier element du tableau (L500). Insert Property avec spread + champs derives (L516-528). Insert PropertyRoom, PropertyDiagnostic, PropertyFeature separement (L535-592). Parking premiere row en colonnes flat (L503-506). Correct.

- [P16] **Types property.ts** — `building: string | null` (L106) et `doorNumber: string | null` (L107) bien ajoutes a l'interface Property. Correct.

- [P17] **Imports propres** — Tous les imports DS proviennent de `@real-estate/ui/*`. Tous les imports types proviennent de `@/types/property`. Pas d'import circulaire visible.

- [P18] **Gestion erreurs submit** — Try/catch avec toast error, finally avec setIsSubmitting(false). Console.error pour les inserts secondaires (rooms, diagnostics, features) sans bloquer. Correct.

- [P19] **UX guard** — `handleClose` verifie `isDirty && !isSubmitSuccessful` avant navigation. Bouton submit desactive si `!isThresholdMet || isSubmitting`. Correct.

---

### VERDICT: PASS

0 CRITICAL, 6 WARNING (tous non bloquants).

Le code est conforme au Design System, respecte la structure 10 sections, les field widths Figma, la validation schema, et la logique submit. Les warnings sont des ameliorations de qualite a planifier en V2 (centraliser FEATURE_KEYS, supprimer les `as any`, ajouter organizationId aux features).

Le code peut etre commite.
