# Dev Report — Phase 3C : Brancher SheetAgendaBien dans DealDetailView

**Date** : 2026-04-23
**Fichier modifié** : `apps/agent-app/src/components/deals/DealDetailView.tsx`

---

## Modifications effectuées

### 1. Import
- Ajout de `SheetAgendaBien`, `AgendaDay`, `TimeSlot` depuis `@real-estate/ui/sheet-agenda-bien` (ligne 50).

### 2. Helper module-level : `generateDefaultAgendaDays()`
- Génère 5 jours ouvrés (lun-ven) à partir d'aujourd'hui.
- Créneaux de 30 min de 9h00 à 19h00 (20 slots/jour), tous en statut `available`.
- Labels en français (ex: "Mercredi 23 avril").
- Placé après les helpers `mapVisiteStatus` / `mapVisiteRechercheStatus`.

### 3. State variables (3)
- `isSheetAgendaOpen` : boolean ouverture sheet.
- `agendaDays` : tableau `AgendaDay[]` enrichi avec statuts.
- `selectedAgendaSlot` : créneau sélectionné `{ date, startTime }`.

### 4. Handlers (4)
- **`handleOpenAgenda`** : génère les créneaux par défaut, requête Supabase `PropertyAvailabilityException` + `Event` (type VISITE, statut PROGRAMME/CONFIRME), marque les créneaux fermés/occupés.
- **`handleCloseAgenda`** : ferme la sheet, reset la sélection.
- **`handleAgendaSlotSelect`** : sélectionne un créneau, met à jour visuellement le statut `selected` dans `agendaDays`.
- **`handleProposeSlot`** : persiste le créneau choisi via `Event.update({ eventDate, status: PROGRAMME })`, met à jour `selectedVisiteEvent` et `events` localement.

### 5. Branchement SheetVisite
- Ajout de la prop `onOpenAgenda={handleOpenAgenda}` sur `<SheetVisite>`.

### 6. Rendu SheetAgendaBien
- Composant ajouté après `<SheetGuideDeVisite>`, avant la balise fermante `</>`.
- Props : `isOpen`, `onClose`, `propertyLabel`, `dpeGrade`, `days`, `onSlotSelect`, `onProposeSlot`, `selectedSlot`.

---

## Vérification TypeScript

- **0 nouvelle erreur** introduite par ces changements.
- 2 erreurs pré-existantes (ligne 820, `.catch()` sur `PromiseLike`) non liées à cette phase.

---

## Points d'attention pour le reviewer

1. `supabase` est créé via `createClient()` localement dans chaque handler async (pattern existant dans le fichier).
2. La query `PropertyAvailabilityException` filtre par `propertyId` + plage de dates.
3. La query `Event` filtre par `propertyId`, `type=VISITE`, `status IN (PROGRAMME, CONFIRME)` + plage de dates.
4. Le `dpeGrade` est casté via `as any` car le type DS attend un union literal `'A'|'B'|...|'G'` et la BDD retourne `string | null`.
