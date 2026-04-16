# Dev Report — Migration Outlined (2026-04-16)

## Objectif
Remplacer tous les usages de `TextField`, `InputField` et `Input` par leurs variantes Outlined (`TextFieldOutlined`, `InputFieldOutlined`) dans l'app agent.

## Verification prealable
- Exports `./text-field-outlined` et `./input-field-outlined` confirmes dans `packages/ui/package.json` (lignes 15 et 17).

## Fichiers modifies (19 fichiers)

### InputField -> InputFieldOutlined (9 fichiers)
| Fichier | Occurrences JSX |
|---------|----------------|
| `components/clients/ClientDetailView.tsx` | 13 |
| `components/clients/ClientQuickCreate.tsx` | 4 |
| `components/clients/steps/StepIdentity.tsx` | 2 |
| `components/clients/steps/StepContact.tsx` | 3 |
| `components/clients/steps/StepProject.tsx` | 0 (import only, unused) |
| `components/clients/steps/StepNotes.tsx` | 0 (import only, unused) |
| `components/properties/PropertyDetailView.tsx` | 26 |
| `components/properties/steps/StepPropertyKey.tsx` | 4 |
| `components/properties/steps/StepPropertyDetails.tsx` | 3 |

### TextField -> TextFieldOutlined (10 fichiers)
| Fichier | Occurrences JSX |
|---------|----------------|
| `app/(onboarding)/setup/page.tsx` | 10 |
| `app/(auth)/login/page.tsx` | 2 |
| `app/(auth)/signup/email/page.tsx` | 3 |
| `app/(auth)/signup/profile-solo/page.tsx` | 4 |
| `app/(auth)/signup/profile-agency/page.tsx` | 8 |
| `app/(auth)/signup/team/page.tsx` | 1 |
| `app/(auth)/forgot-password/page.tsx` | 1 |
| `app/(auth)/forgot-password/confirmation/page.tsx` | 1 |
| `app/(auth)/forgot-password/reset/page.tsx` | 2 |
| `app/(auth)/forgot-password/expired/page.tsx` | 1 |

### Input -> TextFieldOutlined (1 fichier)
| Fichier | Occurrences JSX |
|---------|----------------|
| `app/design-system/DesignSystemClient.tsx` | 1 |

**Note DesignSystemClient** : L'usage de `<Input>` etait un simple `<Input placeholder="Placeholder..." />` sans handler `onChange`, donc aucune adaptation d'API (event vs string) n'etait necessaire.

**Note StepProject / StepNotes** : Ces fichiers importaient `InputField` mais ne l'utilisaient pas dans le JSX (import residuel). L'import a tout de meme ete migre vers `InputFieldOutlined` pour coherence.

## Modifications apportees par fichier
Pour chaque fichier :
1. Import : `'@real-estate/ui/input-field'` -> `'@real-estate/ui/input-field-outlined'` (ou equivalent TextField/Input)
2. Composant : `InputField` -> `InputFieldOutlined` (ou equivalent)
3. Props : aucune modification (API identique)

## Build
- `npx next build` execute.
- **Aucune erreur liee a la migration** (0 occurrences de `InputFieldOutlined` ou `TextFieldOutlined` dans les erreurs).
- Erreurs pre-existantes non liees a cette migration : `DpeBadge` module manquant, `@real-estate/ui/divider` module manquant.

## Verification post-migration
- Grep confirme : 0 occurrence restante de `import { InputField } from '@real-estate/ui/input-field'`, `import { TextField } from '@real-estate/ui/text-field'`, ou `import { Input } from '@real-estate/ui/input'` dans `apps/agent-app/src/`.
