# Review Report — Phase 3D : Migration SheetVisite + SheetAgendaBien

**Date** : 2026-04-27
**Reviewer** : reviewer-agent
**Scope** : FT-090 Phase 3D — 8 fichiers

---

## Verdict : PASS (0 CRITICAL)

Le code est propre, cohérent avec les wrappers existants, et la migration depuis DealDetailView est complète. Aucun bug bloquant identifié.

---

## Findings

### WARNING (3)

#### W-1 — Duplication helpers `propertyTypeLabel`, `formatDateOnly`, `formatTimeOnly`

**Fichiers** : `fetchVisiteData.ts`, `fetchAgendaBienData.ts`, `DealDetailView.tsx`, `fetchOrdreDuJourData.ts`, `fetchGuideDeVisiteData.ts`

Ces 3 fonctions utilitaires sont dupliquées dans 5 fichiers. Toute modification future devra être reportee manuellement dans chaque copie.

**Suggestion** : Extraire dans un fichier `@/lib/utils/formatters.ts` et importer partout. Non bloquant mais dette technique croissante.

---

#### W-2 — `guideStatus` ne gere pas la valeur `'ENVOYE'`

**Fichier** : `fetchVisiteData.ts`, ligne 108

```ts
const guideStatus = guide?.submittedAt ? 'COMPLET' as const : null;
```

Le DS `SheetVisite` accepte `guideStatus: 'ENVOYE' | 'COMPLET' | null`. Le fetcher ne retourne jamais `'ENVOYE'` (seulement `'COMPLET'` ou `null`). Le statut intermediaire "envoye mais pas encore rempli" n'est pas detecte. Cependant, la table `VisitGuideResponse` ne stocke que `submittedAt`, donc il n'y a pas de moyen de distinguer "envoye" de "pas envoye" sans un champ supplementaire. L'implementation est correcte dans l'etat actuel du schema.

**Suggestion** : A noter pour une future evolution BDD (ajouter `sentAt` a `VisitGuideResponse`).

---

#### W-3 — `escapeIlike` dupliquee dans VisiteSheetWrapper

**Fichier** : `VisiteSheetWrapper.tsx`, ligne 12

La fonction `escapeIlike` est definie localement. Elle existe probablement dans d'autres fichiers du projet.

**Suggestion** : Centraliser dans `@/lib/utils/`.

---

### INFO (4)

#### I-1 — AgendaBienSheetWrapper ne passe pas `clientRequest` / `onAcceptClientRequest` / `onProposeAlternative`

**Fichier** : `AgendaBienSheetWrapper.tsx`

Le DS `SheetAgendaBienProps` definit les props optionnelles `clientRequest`, `onAcceptClientRequest`, `onProposeAlternative`. Le wrapper ne les passe pas, ce qui est correct pour la V1 (pas encore de feature "demande client"). A brancher dans une phase ulterieure.

---

#### I-2 — `propertyCity` non passe a `SheetAgendaBien`

**Fichier** : `fetchAgendaBienData.ts` / `AgendaBienSheetWrapper.tsx`

Le fetcher charge `property.addressCity` mais ne l'inclut pas dans `AgendaBienSheetData`. Le DS `SheetAgendaBienProps` ne declare pas de prop `propertyCity`, donc c'est coherent. Simplement a noter si le DS evolue.

---

#### I-3 — AbortController pour la recherche client (seuil 2 chars vs 3 pour property)

**Fichier** : `VisiteSheetWrapper.tsx`, lignes 40 et 84

La recherche property declenche a 3 chars (`query.length < 3`), la recherche client a 2 chars (`query.length < 2`). Ce n'est pas un bug mais une difference volontaire. A confirmer que c'est le comportement souhaite.

---

#### I-4 — `agentId` fetche mais non utilise dans `fetchVisiteData`

**Fichier** : `fetchVisiteData.ts`, ligne 59

Le select inclut `agentId` dans la requete Event mais il n'est pas utilise dans le retour. Leger surpoids reseau.

**Suggestion** : Retirer `agentId` du select.

---

## Checklist detaillee

### Types et imports
- [x] Aucun type hardcode — tout importe depuis la source (`@real-estate/ui/sheet-visite`, `@real-estate/ui/sheet-agenda-bien`, `@real-estate/ui/icon-dpe`)
- [x] Les imports DS correspondent aux exports reels (`SheetVisite`, `SheetAgendaBien`, `AgendaDay`, `TimeSlot`, `DpeType`)
- [x] `VisiteSheetData` coherent avec `SheetVisiteProps` (tous les champs mappes)
- [x] `AgendaBienSheetData` coherent avec `SheetAgendaBienProps` (tous les champs obligatoires mappes)

### Fetchers
- [x] Requetes Supabase : bonnes tables (`Event`, `Deal`, `Property`, `VisitGuideResponse`, `PropertyAvailabilityException`, `Client`)
- [x] Colonnes correctes (verifiees contre `schema.prisma`)
- [x] Gestion d'erreur : `throw new Error(...)` coherent avec les fetchers existants
- [x] `propertyTypeLabel`, `formatDateOnly`, `formatTimeOnly` identiques entre tous les fetchers
- [x] `invites` / `calStatus` logique correcte (ANNULE/NO_SHOW = error, sinon success)
- [x] `generateDefaultAgendaDays` : 5 jours ouvrables, slots 30min 9h-19h, exclut samedi/dimanche
- [x] `AgendaDay` / `TimeSlot` importes depuis `@real-estate/ui/sheet-agenda-bien`

### Wrappers
- [x] Pattern `(data: unknown) + cast` identique aux 3 wrappers existants
- [x] Validation DPE `['A','B','C','D','E','F','G'].includes()` identique aux wrappers existants
- [x] `handleSaveProperty` utilise `d.dealId` (ligne 70) -- correct
- [x] `handleSaveInvite` utilise `d.eventId` (ligne 116) -- correct
- [x] `pushSheet('ordre-du-jour', { eventId })` -- payload correct
- [x] `pushSheet('guide-de-visite', { eventId })` -- payload correct
- [x] `pushSheet('agenda-bien', { propertyId, eventId })` -- payload correct, guard `d.propertyId` present
- [x] `handleProposeSlot` construit `eventDateStr` au format `YYYY-MM-DDTHH:mm:00` -- correct
- [x] Toutes les props de `SheetVisite` sont cablees (22 props passees)
- [x] Toutes les props obligatoires de `SheetAgendaBien` sont cablees

### SheetProvider
- [x] `notifyMutate` itere de `currentStack.length - 1` vers `0` (sommet vers base)
- [x] Pas de regression sur `openSheet`, `pushSheet`, `closeSheet`, `closeAll`
- [x] `stackRef.current` synchronise avec le state a chaque render

### Registry
- [x] Imports fetchers corrects : `fetchVisiteData`, `fetchAgendaBienData`
- [x] Lazy imports wrappers : chemins corrects (`./wrappers/VisiteSheetWrapper`, `./wrappers/AgendaBienSheetWrapper`)
- [x] Cast payloads corrects : `{ eventId: string }` pour visite, `{ propertyId: string; eventId: string }` pour agenda-bien
- [x] Width `narrow` pour les deux -- coherent avec ODJ et Guide

### DealDetailView nettoyage
- [x] Plus aucune reference a `SheetVisite`, `SheetAgendaBien`, `AgendaDay`, `TimeSlot` dans les imports
- [x] Plus aucune state var liee aux sheets visite/agenda supprimees
- [x] Plus aucun handler visite/agenda inline (0 match sur 25 patterns testes)
- [x] Appels `openSheet('visite', { eventId }, { onMutate: refreshEvents })` en place (lignes 1516-1517)
- [x] `refreshEvents` re-fetch les events + met a jour les activities (lignes 984-1006)
- [x] Fonctions conservees : `mapVisiteWorkflow` (ligne 289), `formatDateOnly` (218), `formatTimeOnly` (226), `propertyTypeLabel` (242) -- toutes utilisees dans le JSX
- [x] Aucune reference orpheline detectee
- [x] `useRef` n'est pas importe car il n'est plus utilise dans DealDetailView (pas de useRef dans le fichier)

### Coherence globale
- [x] Flux `DealDetailView -> openSheet('visite') -> pushSheet('ordre-du-jour') -> notifyMutate() -> refreshEvents` : logiquement complet
- [x] Flux `SheetVisite -> pushSheet('agenda-bien') -> handleProposeSlot -> notifyMutate() -> closeSheet` : logiquement complet, la propagation notifyMutate remonte a travers toute la stack
- [x] Pas de dependance circulaire entre les fichiers

---

## Resume

**0 CRITICAL | 3 WARNING | 4 INFO**

Le code est pret a etre commite. Les warnings sont de la dette technique mineure (duplication de helpers) qui pourra etre adressee dans une passe de refactoring dediee.
