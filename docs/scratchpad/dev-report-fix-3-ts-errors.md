# Dev Report -- Fix 3 pre-existing TypeScript errors

**Date**: 2026-04-23
**Task**: #127

## Errors fixed

### Error 1 & 2: DealDetailView.tsx (line ~807)

**File**: `apps/agent-app/src/components/deals/DealDetailView.tsx`

- **TS2339**: `Property 'catch' does not exist on type 'PromiseLike<void>'`
- **TS7006**: `Parameter 'err' implicitly has an 'any' type`

**Root cause**: Supabase's `.then()` returns `PromiseLike`, not `Promise`. `PromiseLike` does not expose `.catch()`.

**Fix**: Replaced `.then().catch()` chain with `void (async () => { try/await })()` pattern inside the existing `useEffect`. The `catch` block types `err` as `unknown`.

### Error 3: AppBarFicheAffaire.tsx (line 137)

**File**: `packages/ui/src/components/AppBarFicheAffaire.tsx`

- **TS2322**: `Property 'onClick' does not exist on type 'AiSuggestionProps'`

**Root cause**: `AiSuggestionProps` in `AiSuggestion.tsx` did not declare an `onClick` prop, but `AppBarFicheAffaire` was passing one.

**Fix** (in `packages/ui/src/components/AiSuggestion.tsx`):
1. Added `onClick?: () => void` to `AiSuggestionProps`
2. Destructured `onClick` in the component function signature
3. Conditionally applied `onClick`, `role="button"`, `tabIndex={0}`, and `cursor-pointer` on the outer div

## Verification

```
npx tsc --noEmit -p apps/agent-app/tsconfig.json
```

Result: **0 errors**.

## Files modified

| File | Change |
|------|--------|
| `apps/agent-app/src/components/deals/DealDetailView.tsx` | async IIFE replacing .then/.catch |
| `packages/ui/src/components/AiSuggestion.tsx` | Added onClick prop + wiring |
