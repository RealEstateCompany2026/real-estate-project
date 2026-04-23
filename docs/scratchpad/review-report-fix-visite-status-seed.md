# Review Report — Fix mapVisiteStatus + Seed VISITE

**Date** : 2026-04-23
**Reviewer** : reviewer-agent
**Task** : #125 — Fix mapVisiteStatus + Seed VISITE
**Fichiers audites** :
- `apps/agent-app/src/components/deals/DealDetailView.tsx`
- `packages/database/prisma/seed.ts`

---

## Verdict : PASS

---

## CRITICAL issues

Aucun.

---

## WARNING issues

Aucun.

---

## OK items

### DealDetailView.tsx

| # | Check | Resultat | Detail |
|---|-------|----------|--------|
| 1a | `mapVisiteWorkflow` accepte `EventRow` | OK | Signature ligne 268 : `function mapVisiteWorkflow(event: EventRow)` |
| 1b | CAL badge utilise `event.status` | OK | Ligne 269 : `event.status === 'ANNULE' \|\| event.status === 'NO_SHOW' ? 'error' : 'success'` |
| 1c | ODJ badge utilise `event.odjStatus` (le fix) | OK | Ligne 272 : `switch (event.odjStatus)` — corrige le bug ou l'ancien code utilisait `event.status` |
| 1d | CR badge utilise `event.status === 'TERMINE'` | OK | Ligne 286 : `event.status === 'TERMINE' ? 'success' : 'disabled'` |
| 1e | Return type correct | OK | `{ cal: BadgeVariant; odj: BadgeVariant; cr: BadgeVariant }` |
| 1f | BadgeVariant values valides | OK | Utilise uniquement `success`, `error`, `information`, `warning`, `disabled` — tous des variants valides du DS Badge |
| 2 | Exactement 2 call sites | OK | Ligne 1731 : `workflow={mapVisiteWorkflow(v)}` (ListVisite) + Ligne 2531 : `mapVisiteWorkflow(selectedVisiteEvent).cal` (SheetVisite invites) |
| 3 | Dead code supprime | OK | Aucune occurrence de `mapVisiteStatus` ni `mapVisiteRechercheStatus` dans le fichier |
| 4 | String literals acceptables | OK | Le reste du fichier utilise systematiquement des string literals pour les comparaisons de status (`=== 'CONFIRME'`, `=== 'TERMINE'`, `=== 'PROGRAMME'`, etc. lignes 731, 1009, 1959, 2517-2520, 2540-2567). Pattern coherent — pas d'import d'enum Prisma cote frontend. Acceptable. |
| 10 | Pas d'imports orphelins | OK | Imports lignes 29-74 verifies — aucun import lie aux fonctions supprimees. `BadgeVariant` est toujours utilise par plusieurs fonctions (mapMandateWorkflow, mapVisiteWorkflow, etc.) |

### seed.ts

| # | Check | Resultat | Detail |
|---|-------|----------|--------|
| 5 | Imports corrects | OK | Ligne 1 : `import { ..., EventType, EventStatus, OdjStatus } from '@prisma/client'` — les 3 enums sont importes |
| 6 | `dealAcquisition` stocke le resultat | OK | Ligne 218 : `const dealAcquisition = await prisma.deal.create({...})` — variable nommee, plus un bare `await` |
| 7a | Events utilisent des enum values | OK | Les 3 events utilisent `EventType.VISITE`, `EventStatus.PROGRAMME`, `EventStatus.CONFIRME`, `EventStatus.TERMINE`, `OdjStatus.EDITE`, `OdjStatus.ENVOYE` — aucun string literal |
| 7b | Champs requis presents | OK | Tous ont `type`, `title`, `eventDate`, `status` |
| 7c | References valides | OK | `agentUser.id`, `dealAcquisition.id`, `clientAcquereur.id` + `propT4.id` / `propStudio.id` / `propMaison.id` — toutes variables definies plus haut dans le seed |
| 7d | odjStatus couvre differents etats | OK | Visite 1 = `EDITE`, Visite 2 = `ENVOYE`, Visite 3 = `ENVOYE` (2 sur 3 couverts, `REVISE` absent mais pas bloquant pour un seed) |
| 7e | Visite TERMINE a `odjSentAt` | OK | Ligne 289 : `odjSentAt: new Date('2026-04-18T16:00:00')` |
| 8a | VisitGuideResponse reference correcte | OK | `eventId: visiteTerminee.id` (la visite TERMINE) + `clientId: clientAcquereur.id` |
| 8b | JSON responses valide | OK | `criterion_1` a `criterion_5` avec valeurs `OUI`, `NON`, `PEUT_ETRE` |
| 8c | submittedAt present | OK | Ligne 305 : `submittedAt: new Date('2026-04-20T10:30:00')` |
| 9 | Schema Event confirme les champs | OK | Schema Prisma (lignes 1778-1824) confirme tous les champs utilises : `type`, `title`, `eventDate`, `status`, `agentId`, `dealId`, `clientId`, `propertyId`, `odjContent`, `odjStatus`, `odjSentAt` |

### Coherence transversale

- Le modele `VisitGuideResponse` (schema ligne 1353-1364) confirme les champs `eventId`, `clientId`, `responses` (Json), `commentaire`, `submittedAt`.
- Les enum values du seed correspondent exactement aux declarations Prisma : `EventStatus { PROGRAMME, CONFIRME, TERMINE, ANNULE, REPORTE, NO_SHOW }` et `OdjStatus { EDITE, REVISE, ENVOYE }`.
- Les 3 visites sont toutes liees a `dealAcquisition` et `clientAcquereur`, ce qui est logiquement coherent (Sophie Durand, l'acquereur, visite des biens dans le cadre de son affaire d'acquisition).

---

## Resume

Le refactoring de `mapVisiteStatus()` vers `mapVisiteWorkflow()` est propre. Le bug central est corrige : le badge ODJ lit desormais `event.odjStatus` au lieu de `event.status`. Le dead code est entierement supprime. Le seed ajoute 3 visites couvrant les 3 etats cles (PROGRAMME, CONFIRME, TERMINE) avec des ODJ a differents stades, plus un guide de visite rempli sur la visite terminee. Tout est conforme au schema Prisma.

**Verdict : PASS — pret pour commit.**
