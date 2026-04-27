# Review Report — Phase 3E : Migration SheetMandat + SheetMandatEdit

**Date** : 2026-04-27  
**Reviewer** : reviewer-agent  
**Verdict** : **PASS**

---

## Fichiers audites

| # | Fichier | Statut |
|---|---------|--------|
| 1 | `sheets/types.ts` | OK — payload `mandat-edit` contient `{ dealId, mode }` |
| 2 | `sheets/helpers/mandatSections.ts` | OK |
| 3 | `sheets/fetchers/fetchMandatData.ts` | OK |
| 4 | `sheets/fetchers/fetchMandatEditData.ts` | OK |
| 5 | `sheets/wrappers/MandatSheetWrapper.tsx` | OK |
| 6 | `sheets/wrappers/MandatEditSheetWrapper.tsx` | OK |
| 7 | `sheets/registry.ts` | OK — 2 nouvelles entrees |
| 8 | `components/deals/DealDetailView.tsx` | OK — cleanup correct |

---

## Findings

### INFO

1. **mandatSections.ts L42** — Le cast `mf.type as 'text' | 'number' | 'date' | 'select'` est redondant (le type source `MissingField.type` est deja ce meme union). Non bloquant, mais pourrait etre simplifie a `type: mf.type`.

2. **fetchMandatData.ts L53 / fetchMandatEditData.ts L50** — `as any` sur le deal normalise. Acceptable en contexte (normalisation FK join Supabase), coherent avec le pattern existant dans les autres fetchers.

3. **MandatSheetWrapper.tsx L54** — `onWriteClient={() => {/* TODO */}}` est un no-op. Coherent avec l'etat pre-migration (le TODO existait deja dans DealDetailView). Non bloquant.

4. **MandatEditSheetWrapper.tsx L67-73** — Le spread conditionnel `{...(d.mode === 'review' ? {...} : {})}` est correct et idiomatique pour des props optionnelles en mode review.

---

## Checklist detaillee

### mandatSections.ts helper
- [x] `buildEligibilitySections` reproduit fidelement la logique originale (sectionOrder, filtrage conditionnel par type, mapping missing → EligibilityField)
- [x] `buildFullMandateSections` reproduit les 6 sections (Client, Bien/Recherche, Prix, Honoraires, Exclusivite, Duree) avec validation correcte
- [x] Types importes des bonnes sources (`EligibilitySection` / `EligibilityField` depuis `@real-estate/ui/sheet-mandat-edit`, `MissingField` / `EligibilityResult` depuis `@/lib/checkMandateEligibility`)
- [x] `PROPERTY_TYPE_LABELS` importe depuis `@/types/property`
- [x] `DealForSections` couvre tous les champs necessaires

### Fetchers
- [x] `fetchMandatData` appelle `checkMandateEligibility(dealCheckData, clientData, propertyData, orgData)` — signature conforme
- [x] `fetchMandatData` construit `eligibilitySections` et `fullMandateSections` via le helper
- [x] `fetchMandatEditData` selectionne `buildEligibilitySections` (mode edit) ou `buildFullMandateSections` (mode review)
- [x] Les deux fetchers normalisent Client/Property avec le pattern `Array.isArray(...) ? [0] ?? null : ...`
- [x] Les deux fetchers font `throw new Error(...)` en cas d'erreur
- [x] `mandateStatusField` : GESTION → `mgmtMandateStatus`, sinon → `saleMandateStatus` — correct

### Wrappers
- [x] `MandatSheetWrapper` wire toutes les props de `SheetMandatProps` correctement
- [x] `pushSheet('mandat-edit', { dealId, mode: 'edit' })` et `mode: 'review'` — payloads corrects
- [x] `MandatEditSheetWrapper` spread les props review conditionnellement (`isRevision`, `onToggleRevision`, `footerMode`, `onSendMandate`)
- [x] `handleSave` multi-table : organization (global), client (par id), property (par id), deal (par id) — conforme a l'original
- [x] `handleToggleRevision` et `handleSendMandate` utilisent `d.mandateStatusField` (cle dynamique)
- [x] `'use client'` present sur les deux wrappers

### Registry
- [x] Lazy imports corrects : `lazy(() => import('./wrappers/MandatSheetWrapper'))` et idem pour Edit
- [x] Fetcher casts conformes aux types de payload (`{ dealId: string }` et `{ dealId: string; mode: 'edit' | 'review' }`)

### DealDetailView cleanup
- [x] Aucune reference orpheline (pas de vars mortes)
- [x] `mandateStatusKey` conserve (utilise par ListMandat badges L987-989)
- [x] `refreshDeal` correctement re-fetch et normalise le deal (L842-861)
- [x] `openSheet('mandat', { dealId: deal.id }, { onMutate: refreshDeal })` — correct (L993)
- [x] `organization` state et fetch entierement supprimes (logique transferee aux fetchers)
- [x] `PROPERTY_TYPE_LABELS` et `formatIdAsReference` conserves (utilises ailleurs dans le composant)

### Coherence
- [x] Flow complet : DealDetailView → `openSheet('mandat')` → wrapper → `pushSheet('mandat-edit', {mode})` → save/toggle → `notifyMutate()` → `refreshDeal` dans DealDetailView
- [x] Aucune dependance circulaire detectee

---

## Conclusion

Code propre, fidele a l'original, bien structure. Aucun CRITICAL, aucun WARNING. Migration Phase 3E validee pour deploiement.
