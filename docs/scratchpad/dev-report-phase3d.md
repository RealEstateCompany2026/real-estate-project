# Dev Report — Phase 3D : Migration SheetVisite + SheetAgendaBien

**Date** : 2026-04-27
**Agent** : dev-agent

## Fichiers crees (4)

| Fichier | Lignes |
|---------|--------|
| `apps/agent-app/src/sheets/fetchers/fetchVisiteData.ts` | 119 |
| `apps/agent-app/src/sheets/wrappers/VisiteSheetWrapper.tsx` | 155 |
| `apps/agent-app/src/sheets/fetchers/fetchAgendaBienData.ts` | 172 |
| `apps/agent-app/src/sheets/wrappers/AgendaBienSheetWrapper.tsx` | 71 |

## Fichiers modifies (4)

| Fichier | Modification |
|---------|-------------|
| `apps/agent-app/src/providers/SheetProvider.tsx` | notifyMutate propage a tout le stack (top-to-bottom) |
| `apps/agent-app/src/sheets/types.ts` | agenda-bien payload +eventId, JSDoc notifyMutate mis a jour |
| `apps/agent-app/src/sheets/registry.ts` | +2 entrees (visite, agenda-bien) avec lazy imports |
| `apps/agent-app/src/components/deals/DealDetailView.tsx` | -417 lignes (2717 -> 2300) |

## Detail DealDetailView cleanup

- **Imports supprimes** : SheetVisite, SheetAgendaBien, AgendaDay, TimeSlot, useRef
- **16 state variables supprimes** : isSheetVisiteOpen, selectedVisiteEvent, visitGuideSubmittedAt, isSheetAgendaOpen, agendaDays, selectedAgendaSlot, isEditingProperty, propertySearchQuery, propertySearchResults, selectedPropertyId, isAddingInvite, clientSearchQuery, clientSearchResults, selectedInviteClientId, propertySearchAbort, clientSearchAbort
- **14 handlers supprimes** : handleOpenVisite, handleCloseVisite, refreshSelectedEvent, handleOpenOdj, handleOpenGuide, handleOpenAgenda, handleCloseAgenda, handleAgendaSlotSelect, handlePropertySearchChange, handlePropertySelect, handleSaveProperty, handleClientSearchChange, handleClientSelect, handleSaveInvite, handleProposeSlot
- **1 helper supprime** : generateDefaultAgendaDays, escapeIlike
- **1 JSX block supprime** : {selectedVisiteEvent && (<> SheetVisite + SheetAgendaBien </>)}
- **1 callback ajoute** : refreshEvents (re-fetch events + activities via onMutate)
- **2 appels remplaces** : handleOpenVisite(v) -> openSheet('visite', { eventId: v.id }, { onMutate: refreshEvents })
- **isRevision/setIsRevision** preserve (utilise par SheetMandat, pas visite)

## Fonctions conservees dans DealDetailView

- mapVisiteWorkflow (utilise par ListVisite)
- formatDateOnly, formatTimeOnly (utilises par ListVisite + section Activites)
- propertyTypeLabel (utilise par ListVisite + Sheets restantes)

## Resultat tsc

```
npx tsc --noEmit → 0 erreurs
```
