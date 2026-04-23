# Dev Report — Fix mapVisiteStatus + Seed VISITE

**Date** : 2026-04-23
**Task** : #125
**Agent** : dev-agent

---

## Changements effectués

### TASK 1 — Refactor mapVisiteStatus -> mapVisiteWorkflow

**Fichier** : `apps/agent-app/src/components/deals/DealDetailView.tsx`

**Bug corrigé** : Le badge ODJ utilisait `v.status` (EventStatus) au lieu de `v.odjStatus` (OdjStatus). Le badge ODJ affichait toujours "disabled" sauf si la visite était CONFIRME/TERMINE, ignorant complètement le workflow réel de l'ordre du jour.

**Modifications** :
1. Supprimé `mapVisiteStatus()` (ancienne fonction basée sur un seul paramètre `status`)
2. Supprimé `mapVisiteRechercheStatus()` — code mort, jamais appelé dans le fichier
3. Créé `mapVisiteWorkflow(event: EventRow)` qui retourne `{ cal, odj, cr }` :
   - `cal` : basé sur `event.status` (ANNULE/NO_SHOW -> error, sinon success)
   - `odj` : basé sur `event.odjStatus` (ENVOYE -> success, REVISE -> information, EDITE -> warning, null -> disabled)
   - `cr` : basé sur `event.status` (TERMINE -> success, sinon disabled)
4. Mis à jour l'appel dans le rendu ListVisite (~ligne 1740) : `workflow={mapVisiteWorkflow(v)}`
5. Mis à jour l'appel dans SheetVisite invites (~ligne 2544) : `calStatus: mapVisiteWorkflow(selectedVisiteEvent).cal`

### TASK 2 — Seed VISITE

**Fichier** : `packages/database/prisma/seed.ts`

**Modifications** :
1. Ajouté `EventType`, `EventStatus`, `OdjStatus` aux imports depuis `@prisma/client`
2. Stocké le deal Acquisition dans `const dealAcquisition` (était un `await` sans variable)
3. Ajouté 3 Events de type VISITE couvrant les 3 cas :
   - Visite 1 : PROGRAMME + ODJ EDITE (T4 Toulouse)
   - Visite 2 : CONFIRME + ODJ ENVOYE (Studio Paris)
   - Visite 3 : TERMINE + ODJ ENVOYE (Maison Bordeaux) + visitGuideResponse
4. Tous les champs utilisent les enums Prisma (pas de string literals)

---

## Vérification TypeScript

`npx tsc --noEmit` : 3 erreurs pre-existantes (ligne 811 DealDetailView + AppBarFicheAffaire), aucune nouvelle erreur introduite par ces changements.

---

## Fichiers modifiés

| Fichier | Action |
|---------|--------|
| `apps/agent-app/src/components/deals/DealDetailView.tsx` | Refactor fonction + suppression dead code |
| `packages/database/prisma/seed.ts` | Ajout imports + variable deal + 3 visites + 1 visitGuideResponse |
