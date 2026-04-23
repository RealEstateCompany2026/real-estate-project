# Dev Report — SheetVisite correctifs N1 N2 N3

**Date** : 2026-04-23
**Brief** : BRIEF-SHEETVISITE-N1N2N3
**Statut** : Implémenté — build TypeScript 0 erreurs

---

## Fichiers modifiés

| Fichier | Niveaux |
|---------|---------|
| `packages/ui/src/components/SheetVisite.tsx` | N1 (1A, 1B) + N2 (2A, 2B, 2C, 2D) |
| `apps/agent-app/src/components/deals/DealDetailView.tsx` | N1 (1C) + N2 (state + handlers) + N3 (3A, 3B) |

---

## Niveau 1 — Fixes DS immédiats

### 1A. Titre "Bien visité" — text-sm vers text-base
- Corrigé : `text-sm font-semibold` remplacé par `text-base font-semibold`, aligné avec les 3 autres sections.

### 1B. IconButtons DS
- Import ajouté : `import { Button, IconButton } from "./Button";`
- 2 `<button>` artisanaux remplacés par `<IconButton>` du DS :
  - Section "Bien visité" : Pencil/Search (size 20)
  - Section "Invitations" : Plus (size 20)

### 1C. Invites fallback sur deal.Client
- `invites` utilise désormais `selectedVisiteEvent.clientId || deal?.Client?.id` comme fallback.
- Vérifie aussi que `clientFullName` n'est pas le tiret par défaut avant d'afficher.

---

## Niveau 2 — Formulaires édition avec autocomplete

### 2A. Nouvelles props SheetVisiteProps
- 7 props édition bien : `isEditingProperty`, `onToggleEditProperty`, `propertySearchQuery`, `onPropertySearchChange`, `propertySearchResults`, `onPropertySelect`, `onSaveProperty`
- 7 props ajout invité : `isAddingInvite`, `onToggleAddInvite`, `clientSearchQuery`, `onClientSearchChange`, `clientSearchResults`, `onClientSelect`, `onSaveInvite`
- Toutes optionnelles, rétrocompatibles.

### 2B. Section "Bien visité" — mode édition
- 2 états : normal (affichage bien + icône Pencil) et édition (formulaire avec label, input, résultats autocomplete, bouton Enregistrer).
- Quand aucun bien : affiche directement le formulaire d'édition.
- IconButton bascule entre Pencil (mode normal) et Search (mode édition) via `onToggleEditProperty`.

### 2C. Section "Invitations" — mode ajout
- Formulaire inséré entre la liste des invités et le bouton agenda.
- Label "NOM DU CLIENT" + input + résultats autocomplete + bouton Enregistrer.
- Toggle via `onToggleAddInvite`.

### 2D. Styles DS
- Label : `text-xs font-semibold font-roboto text-content-subtle uppercase tracking-wider`
- Input : tokens DS (border-edge-default, bg-surface-neutral-default, focus ring branded)
- Résultats : `rounded-lg border border-edge-default bg-surface-neutral-default`, hover `bg-surface-neutral-action`
- Bouton : `<Button variant="primary" className="w-full">`

### DealDetailView — State + Handlers
- 10 nouveaux useState pour gérer l'édition bien et l'ajout invité.
- `handlePropertySearchChange` : query Supabase `Property.address ILIKE %query%` (seuil 3 chars).
- `handlePropertySelect` : sélectionne un bien, remplit l'input.
- `handleSaveProperty` : persiste `Deal.propertyId` en base, recharge la page.
- `handleClientSearchChange` : query Supabase `Client.firstName/lastName ILIKE %query%` (seuil 2 chars).
- `handleClientSelect` : sélectionne un client, remplit l'input.
- `handleSaveInvite` : persiste `Event.clientId` en base (N3B), met à jour le state local.

---

## Niveau 3 — Fix données

### 3A. Fix timezone handleProposeSlot
- Avant : `new Date(...).toISOString()` convertissait en UTC, causant un décalage de +2h.
- Après : stocke directement `eventDateStr` (`YYYY-MM-DDTHH:mm:00`) sans conversion UTC.
- Le state local utilise aussi `eventDateStr`.

### 3B. Persist Event.clientId
- `handleSaveInvite` met à jour `Event.clientId` en base via Supabase.
- Le state local (`selectedVisiteEvent` et `events`) est aussi mis à jour.

---

## Vérification

- Build TypeScript : 0 erreurs (`npx tsc --noEmit -p apps/agent-app/tsconfig.json`)
- Props existantes non cassées (tous les nouveaux champs sont optionnels)
- Strings françaises avec vrais accents (Adresse, Enregistrer, etc.)
- Aucune couleur custom, uniquement tokens DS
