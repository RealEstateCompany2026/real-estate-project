# Review Report — Phase 3F : SheetBienDetails + KPIs ListBien

**Reviewer**: reviewer-agent  
**Date**: 2026-04-27  
**Files audited**: 4  

---

## File 1: `fetchBienData.ts` (NEW)

### CRITICAL-01 — Table `ActivityLog` does not exist

**Severity**: CRITICAL  
**Location**: `fetchBienData.ts` line 60 — `.from('ActivityLog')`

The Prisma schema (`packages/database/prisma/schema.prisma`) contains **no `ActivityLog` model**. A `grep` across the entire codebase confirms this table is referenced only in this new file. The Supabase query will return a PostgREST error at runtime (404 or relation not found).

**Fix**: Replace with the `Event` table (which has `propertyId`, `createdAt`, `description`) filtered by `propertyId`, following the same pattern used in `ClientDetailView` which fetches events from the `Event` table. The join should use `User:agentId(name)` since Event has an `agentId` FK to User.

### CRITICAL-02 — User table has no `firstName` / `lastName` columns

**Severity**: CRITICAL  
**Location**: `fetchBienData.ts` line 61 — `User:userId(firstName, lastName)`

The `User` model in the Prisma schema has a single `name` field, not `firstName`+`lastName`. The PostgREST join will fail because the requested columns do not exist.

**Fix**: Change the select to `User:agentId(name)` and update the mapping at line 93-95 to use `log.User?.name ?? 'Systeme'`.

### CRITICAL-03 — Invalid PostgREST FK syntax `User:userId`

**Severity**: CRITICAL  
**Location**: `fetchBienData.ts` line 61

Even if the table were `ActivityLog`, the syntax `User:userId(...)` requires `userId` to be a FK column on the source table. Since there is no `ActivityLog` table, this is moot — but when replacing with `Event`, the correct FK hint is `User:agentId(name)` (the `Event` model has `agentId` FK to `User`).

### WARNING-01 — OPERATION_LABELS includes non-existent OperationType values

**Severity**: WARNING  
**Location**: `fetchBienData.ts` lines 9-14

`OPERATION_LABELS` includes `GESTION` and `ACQUISITION` which are `DealType` enum values, not `OperationType` enum values. The `Property.operationTypes` column uses the `OperationType` enum (`VENTE`, `LOCATION`, `VIAGER`, `CESSION`). The labels for `GESTION` and `ACQUISITION` will never match. Not a crash (fallback handles it) but dead code.

**Fix**: Remove `GESTION` and `ACQUISITION` from the map, or add `VIAGER` and `CESSION` entries to cover the full `OperationType` enum.

### INFO-01 — `any` cast on logs mapping

**Severity**: INFO  
**Location**: `fetchBienData.ts` line 91 — `(log: any)`

Using `any` type annotation is consistent with other fetchers in the codebase (e.g. `fetchVisiteData.ts` line 73 uses `as any`). Acceptable but could be improved with a local interface.

### INFO-02 — Unused `BadgeVariant` import

**Severity**: INFO  
**Location**: `fetchBienData.ts` line 6

`BadgeVariant` is imported but never used in the return type. The `recentLogs` interface in `BienSheetData` includes `badgeVariant?: BadgeVariant` but the mapping at lines 91-103 never populates `badgeVariant`. The field will always be `undefined`.

**Fix**: Either populate `badgeVariant` based on log category, or remove it from the interface and the import.

---

## File 2: `BienSheetWrapper.tsx` (NEW)

### INFO-03 — Pattern consistency: no `useSheetManager` usage

**Severity**: INFO  
**Location**: `BienSheetWrapper.tsx`

Unlike `MandatSheetWrapper.tsx` which imports `useSheetManager` for `closeSheet`, `pushSheet`, and `notifyMutate`, this wrapper is a pure pass-through with no interactivity. This is acceptable for a read-only sheet but should be documented as intentional. If the sheet needs close/navigate actions later, the hook will need to be added.

### PASS — Props match DS component

All props passed to `<SheetBienDetails>` match the `SheetBienDetailsProps` interface exactly. The `data as BienSheetData` cast is consistent with all other wrappers (same pattern in `MandatSheetWrapper`, `VisiteSheetWrapper`, etc.).

---

## File 3: `registry.ts` (MODIFIED)

### PASS — 'bien' entry follows established pattern

The new `'bien'` registry entry at lines 55-59 follows the exact same structure as all other 7 entries:
- `lazy(() => import('./wrappers/BienSheetWrapper'))` — correct
- `fetcher: (payload) => fetchBienData(payload as { propertyId: string })` — correct payload type matches `SheetPayloadMap['bien']`
- `width: 'narrow'` — consistent with most sheet types
- Import of `fetchBienData` added at line 13 — correct

---

## File 4: `ClientDetailView.tsx` (MODIFIED)

### PASS — `mockPropertyKpis` helper

The new `mockPropertyKpis` function at lines 215-220 uses the same `seedRandomInt` pattern as `mockKpis` above it, and produces the exact `{ qualification, entretien, conversion }` shape matching `ListBienKpi` interface from the DS. The seed offsets (0, 1, 2) and ranges (20-79, 20-79, 10-49) are consistent with `fetchBienData.ts` lines 86-88.

### PASS — ListBien onClick wired to SheetManager

Line 1069: `onClick={() => openSheet('bien', { propertyId: p.id })}` correctly calls `openSheet` with the `'bien'` sheet type and the expected `{ propertyId }` payload matching `SheetPayloadMap['bien']`.

### PASS — ListBien kpis prop

Line 1068: `kpis={mockPropertyKpis(p.id)}` passes the correct shape to the `kpis` prop of `ListBien`. The `ListBienKpi` interface expects `{ qualification: number; entretien: number; conversion: number }` which is exactly what `mockPropertyKpis` returns.

---

## File 5: `types.ts` (Reference check)

### PASS — 'bien' SheetType already declared

The `'bien'` type is present in the `SheetType` union at line 6, and `SheetPayloadMap['bien']` is defined at line 35 as `{ propertyId: string }`. No changes needed.

---

## TypeScript compilation

```
$ npx tsc --noEmit
(no errors)
```

TypeScript compiles clean. The `ActivityLog` issue is not caught by `tsc` because Supabase client methods use string-based table names with generic typing that does not validate against the schema at compile time.

---

## Summary of findings

| # | Severity | File | Issue |
|---|----------|------|-------|
| C-01 | CRITICAL | fetchBienData.ts | `ActivityLog` table does not exist in schema |
| C-02 | CRITICAL | fetchBienData.ts | `User.firstName`/`lastName` do not exist (only `name`) |
| C-03 | CRITICAL | fetchBienData.ts | FK hint `User:userId` invalid for the replacement table |
| W-01 | WARNING | fetchBienData.ts | OPERATION_LABELS has dead entries (GESTION, ACQUISITION) |
| I-01 | INFO | fetchBienData.ts | `any` cast on logs — consistent with codebase |
| I-02 | INFO | fetchBienData.ts | `BadgeVariant` imported but never used/populated |
| I-03 | INFO | BienSheetWrapper.tsx | No `useSheetManager` — acceptable for read-only |

---

## Verdict: FAIL

### Must fix before merge (3 CRITICAL):

1. **Replace `ActivityLog` with `Event` table** in `fetchBienData.ts` line 59-64. Query the `Event` table filtered by `propertyId`, select `createdAt, description, type, status, User:agentId(name)`, order by `createdAt desc`, limit 3.

2. **Fix User join columns**: Change `User:userId(firstName, lastName)` to `User:agentId(name)` and update the author mapping at lines 93-95 to use `log.User?.name ?? 'Systeme'` instead of concatenating firstName+lastName.

3. **Update OPERATION_LABELS** (W-01): Add `VIAGER: 'Viager'` and `CESSION: 'Cession'` entries, remove or keep `GESTION`/`ACQUISITION` as dead-letter fallbacks.
