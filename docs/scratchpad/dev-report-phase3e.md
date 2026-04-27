# Dev Report — Phase 3E : Migration SheetMandat + SheetMandatEdit

**Date** : 2026-04-27
**Agent** : dev-agent
**Statut** : PASS

## Modifications effectuees

### 1. types.ts — SheetPayloadMap fix
- `mandat-edit` payload extended: `{ dealId: string; mode: 'edit' | 'review' }`

### 2. Shared helper — mandatSections.ts (NEW)
- `apps/agent-app/src/sheets/helpers/mandatSections.ts`
- `buildEligibilitySections(eligibility, dealType)` — builds sections from missing fields
- `buildFullMandateSections(deal, dealType)` — builds full mandate sections with all data
- Avoids ~200 lines of duplication between the 2 fetchers

### 3. fetchMandatData.ts (NEW)
- `apps/agent-app/src/sheets/fetchers/fetchMandatData.ts`
- Queries: Deal (with Client + Property joins) + Organization
- Computes: eligibility, eligibilityRatio, eligibilitySections, fullMandateSections, mandateStatus, signatureDate, isRevision, mandateStatusField
- Returns `MandatSheetData` interface

### 4. fetchMandatEditData.ts (NEW)
- `apps/agent-app/src/sheets/fetchers/fetchMandatEditData.ts`
- Same queries as fetchMandatData
- Mode-dependent: `edit` builds eligibilitySections, `review` builds fullMandateSections
- Returns `MandatEditSheetData` with clientId/propertyId for mutation targeting

### 5. MandatSheetWrapper.tsx (NEW)
- `apps/agent-app/src/sheets/wrappers/MandatSheetWrapper.tsx`
- Stateless — all mutations via Supabase + notifyMutate()
- 5 handlers: toggleAutoManaged, toggleActivation, editMissingFields (pushSheet mandat-edit edit), viewMandate (pushSheet mandat-edit review), generateMandate
- Wires all props to SheetMandat DS component

### 6. MandatEditSheetWrapper.tsx (NEW)
- `apps/agent-app/src/sheets/wrappers/MandatEditSheetWrapper.tsx`
- Local state: isRevision
- 3 handlers: save (multi-table update), toggleRevision, sendMandate
- Mode-dependent props spread (review mode adds revision/send controls)

### 7. registry.ts — 2 new entries
- `mandat` -> MandatSheetWrapper + fetchMandatData, width narrow
- `mandat-edit` -> MandatEditSheetWrapper + fetchMandatEditData, width narrow

### 8. DealDetailView.tsx — Cleanup
**Removed imports**: SheetMandat, SheetMandatEdit, EligibilitySection, EligibilityField, checkMandateEligibility, MissingField
**Kept imports**: PROPERTY_TYPE_LABELS (used L1213, L1473), formatIdAsReference (used L1154, L1329, L1670)
**Removed state**: isSheetMandatOpen, isSheetMandatEditOpen, isSheetMandatViewOpen, isRevision, organization/setOrganization
**Removed logic**: handleToggleActivation, eligibility computation, eligibilityRatio, buildEligibilitySections, handleMandatEditSave, buildFullMandateSections, organization fetch, revision init from load
**Removed JSX**: 3 Sheet blocks (SheetMandat + 2x SheetMandatEdit)
**Kept**: mandateStatusKey (used by ListMandat workflow badges)
**Added**: refreshDeal callback (re-fetches deal on mutation)
**Changed**: onView callback now calls openSheet('mandat', ...) with refreshDeal

## Verification
- `npx tsc --noEmit` : ZERO errors
- Net code reduction in DealDetailView: ~250 lines removed
- 6 new files created, all following existing patterns
