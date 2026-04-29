# Dev Report — ClientCreateView (FT-016 V2)

**Date** : 2026-04-29
**Agent** : dev-agent
**Statut** : LIVRAISON

---

## Fichiers modifies (4)

### 1. `apps/agent-app/src/types/client.ts` — MODIFIE
- Ajout de 6 champs RGPD dans l'interface `Client` : `smsConsent`, `smsConsentSource`, `smsConsentDate`, `whatsappConsent`, `whatsappConsentSource`, `whatsappConsentDate`
- Ajout du type `MaritalStatus` (union 5 valeurs)
- Ajout de `MARITAL_STATUS_LABELS` (Record)
- Ajout de `INCOME_BRACKET_OPTIONS` (const array, 7 tranches)
- Aucun export existant casse

### 2. `apps/agent-app/src/lib/validations/client.ts` — MODIFIE
- Remplacement de `clientCreateSchema` par la version V2 (6 sections, 8 champs obligatoires)
- `clientQuickCreateSchema` et `clientUpdateSchema` preserves intacts
- `clientUpdateSchema` reste `clientCreateSchema.partial()` (heritage automatique V2)
- Type `ClientCreateData` recalcule automatiquement via `z.infer`

### 3. `apps/agent-app/src/components/clients/ClientCreateView.tsx` — NOUVEAU
- Formulaire one-page avec 6 sections dans des `FormSection` cards
- Composant interne `FormSection` avec Badge de completion par section
- ProgressBar globale avec threshold dynamique (vert si 8 obligatoires remplis)
- Detection de doublons via `useDuplicateCheck` (blur email/telephone)
- Autocomplete adresse via API BAN (`searchAddress` + `AddressField` DS)
- DatePicker docked pour la date de naissance
- Confirmation de quitter si formulaire dirty
- Insert Supabase avec metadata RGPD (source + date consentement)

### 4. `apps/agent-app/src/app/(app)/clients/new/page.tsx` — MODIFIE
- Remplacement de `ClientFormWizard` par `ClientCreateView`
- Layout simplifie (`px-6 py-8`, plus de `max-w-3xl`)

---

## Divergences brief vs DS corrigees

| Brief | DS reel | Correction appliquee |
|-------|---------|---------------------|
| `Button variant="branded"` | variant `primary` | Utilise `primary` |
| `ProgressBar value={...}` | prop `progress` | Utilise `progress` |
| `Badge label={...}` | Utilise `children` (spread props) | Passe le texte en children |
| `SelectField error={boolean}` | `error?: string` | Passe string ou undefined |
| `InputFieldOutlined onChange={(e) => ...}` | `onChange?: (value: string) => void` | Passe directement la string |
| `InputFieldOutlined onBlur` prend event | `onBlur?: () => void` | Callback sans argument |

---

## Imports DS utilises

Tous verifies dans `packages/ui/package.json` exports :
- `@real-estate/ui/button` -> Button
- `@real-estate/ui/progress-bar` -> ProgressBar
- `@real-estate/ui/badge` -> Badge
- `@real-estate/ui/checkbox` -> Checkbox
- `@real-estate/ui/input-field-outlined` -> InputFieldOutlined
- `@real-estate/ui/select-field` -> SelectField
- `@real-estate/ui/text-area` -> TextArea
- `@real-estate/ui/address-field` -> AddressField, AddressSuggestion
- `@real-estate/ui/date-picker` -> DatePicker

---

## Aucun composant HTML natif

- Pas de `<input type="checkbox">` -> Checkbox DS
- Pas de `<select>` -> SelectField DS
- Pas de `<textarea>` -> TextArea DS
- Pas de couleurs Tailwind hardcodees -> tokens DS uniquement

---

## Points d'attention pour le reviewer

1. Le schema V2 rend `dateOfBirth`, `mobilePhone` et `address` **obligatoires** (etaient optionnels en V1) — impact potentiel sur `clientUpdateSchema.partial()`
2. Le genre passe de `'HOMME' | 'FEMME' | 'AUTRE'` a `'HOMME' | 'FEMME'` dans le schema create — le type `ClientGender` conserve toujours `AUTRE` dans client.ts
3. Les champs `searchCriteriaSummary` et `tags` ont ete retires du schema create V2 (deplaces vers Deal/P10)
