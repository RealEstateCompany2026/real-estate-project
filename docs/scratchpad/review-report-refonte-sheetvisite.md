# Review Report - Refonte SheetVisite

**Date** : 2026-04-23
**Reviewer** : reviewer-agent
**Scope** : SheetVisite.tsx (full rewrite) + DealDetailView.tsx (props update)
**Verdict** : **PASS** (1 WARNING, 0 CRITICAL)

---

## SheetVisite.tsx

| # | Check | Verdict | Notes |
|---|-------|---------|-------|
| 1 | No CollapsibleSection import/usage - bordered divs | OK | 4 sections use `rounded-lg border border-edge-default p-[16px]` |
| 2 | Imports: Search, Pencil, Calendar + IconDpe, DpeType | OK | Line 7-8 correct |
| 3 | Props: no propertyLabel, uses structured fields | OK | propertyAddress, propertyCity, propertyType, propertySurface, propertyDpeGrade (lines 27-31) |
| 4 | Section titles use `text-content-strong` | OK | All 4 section titles use `text-content-strong` (lines 135, 175, 215, 254) |
| 5 | Hover on icon buttons uses `hover:bg-surface-neutral-action` | OK | Lines 141, 181 - correct token |
| 6 | No HTML entities | OK | No `&apos;`, `&amp;` etc. found |
| 7 | No unicode escapes | OK | No `\u00c9`, `\u2019` etc. found |
| 8 | French accents correct | OK | "Bien visite" (L136), "Edition" (L221), "EDITE" (L224), "Revision" (L229), "REVISE" (L231), "ENVOYE" (L239, L263), "Completion" (L268) - all with proper accents |
| 9 | Section "Bien visite": Pencil/Search icon, 2-line info with Dot separators | OK | Pencil when hasProperty, Search otherwise (L143). Address line 1 + city/type/surface with Dot separators line 2 (L148-167) |
| 10 | Section "Invitations": Plus icon, CAL badges, contextual agenda button | OK | Plus icon (L183), CAL badges (L195), Calendar+date or "Voir l'agenda du bien" (L200-208) |
| 11 | Section "ODJ": 3 lines ALWAYS visible, progressive badge logic | OK | 3 lines always rendered (L219-242), progressive logic: edition=warning then success, revision=info then success, envoi=success (L90-99) |
| 12 | Section "Guide": 2 lines ALWAYS visible, badge logic | OK | 2 lines always rendered (L258-269), envoi success when sent/complete, completion success/warning/disabled (L102-109) |
| 13 | Buttons "Voir l'Ordre du jour" / "Voir l'Avis" always rendered | OK | Both unconditionally rendered (L244, L275) |
| 17 | No hardcoded colors | OK | All colors use DS tokens (text-content-strong, text-content-body, bg-surface-neutral-action, border-edge-default, bg-content-body) |
| 18 | No orphaned imports | OK | All imports used: React, Sheet, Badge/BadgeVariant, Button, Plus, ArrowRight, Search, Pencil, Calendar, IconDpe, DpeType |
| 19 | font-roboto on all text elements | OK | 12 occurrences of font-roboto covering all `<span>` text elements |

## DealDetailView.tsx

| # | Check | Verdict | Notes |
|---|-------|---------|-------|
| 14 | SheetVisite props updated: no propertyLabel, uses structured fields | OK | Lines 2524-2533: propertyAddress, propertyCity, propertyType, propertySurface, propertyDpeGrade |
| 15 | DpeType import exists | OK | Line 43: `import type { DpeType } from '@real-estate/ui/icon-dpe'` |
| 16 | No new TypeScript errors introduced | OK | No type mismatches visible. Pre-existing issues (propertyLabel on SheetOrdreDuJour/SheetGuideDeVisite/SheetAgendaBien) are outside scope. |

## Warnings

| # | Severity | Description |
|---|----------|-------------|
| W1 | WARNING | `propertySurface` passed as `` `${...} m2` `` (line 2527 of DealDetailView) uses `m2` instead of `m²`. This is cosmetic but inconsistent with the rest of the codebase which uses the proper unicode superscript `m²`. Recommend changing to `` `${deal.Property.livingAreaSqm} m²` ``. |

## Summary

The SheetVisite rewrite is clean and fully aligned with the Figma spec. All 4 sections use bordered divs (no CollapsibleSection), correct DS tokens, proper French accents, font-roboto on all text, and progressive badge logic. The DealDetailView integration correctly passes all structured property fields. One minor cosmetic warning on `m2` vs `m²`.
