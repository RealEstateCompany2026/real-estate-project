# Dev Report — Phase 3F : SheetBienDetails + KPIs ListBien

**Date** : 2026-04-27
**Agent** : dev-agent
**Statut** : DONE — 0 erreur TypeScript

---

## Fichiers crees (2)

### 1. `apps/agent-app/src/sheets/fetchers/fetchBienData.ts`
- Fetcher Supabase pour le sheet `bien`
- Query Property (id, type, livingAreaSqm, addressCity, dpeEnergyClass, operationTypes, desiredSellingPrice, estimatedMarketValue, hasMaintenanceLog)
- Query ActivityLog (3 derniers, join User pour author)
- Export interface `BienSheetData` avec tous les champs mappes pour SheetBienDetails
- KPIs : `seedRandomInt` deterministe (meme pattern que PropertyListView)
- Formatage prix fr-FR (`Intl.NumberFormat`), surface, location, bienType (via `PROPERTY_TYPE_LABELS`), operationType (map VENTE/LOCATION/GESTION/ACQUISITION), DPE cast, dates/heures fr-FR

### 2. `apps/agent-app/src/sheets/wrappers/BienSheetWrapper.tsx`
- Wrapper stateless `'use client'` + `export default`
- Cast `data as BienSheetData`, passe toutes les props a `SheetBienDetails`
- Pas de isOpen/onClose (gere par SheetProvider)

---

## Fichiers modifies (2)

### 3. `apps/agent-app/src/sheets/registry.ts`
- Import `fetchBienData`
- Enregistrement `'bien'` : component lazy BienSheetWrapper, fetcher fetchBienData, width `'narrow'`

### 4. `apps/agent-app/src/components/clients/ClientDetailView.tsx`
- Ajout helper `mockPropertyKpis(id)` (seedRandomInt deterministe, meme seeds que fetcher)
- ListBien : `kpis={{ qualification: 0, entretien: 0, conversion: 0 }}` remplace par `kpis={mockPropertyKpis(p.id)}`
- ListBien : ajout `onClick={() => openSheet('bien', { propertyId: p.id })}`

---

## Verification

- `npx tsc --noEmit` depuis `apps/agent-app/` : **0 erreur**

---

## Corrections post-review

**Date** : 2026-04-27

### CRITICAL-01 : Table `ActivityLog` inexistante
- Query Supabase changee de `ActivityLog` vers `Event`
- Colonnes select mises a jour : `category` → `type`, ajout `status`, join `User:agentId(name)` au lieu de `User:userId(firstName, lastName)`

### CRITICAL-02 + CRITICAL-03 : Colonnes User incorrectes
- Suppression de `authorFirstName` / `authorLastName` (le modele User n'a pas ces champs)
- Remplace par `log.User?.name ?? 'Systeme'`
- Mapping `category` remplace par `log.type` (Event n'a pas de champ `category`)

### WARNING-01 : OPERATION_LABELS incorrects
- Suppression de `GESTION` et `ACQUISITION` (valeurs DealType, pas OperationType)
- Ajout de `VIAGER` et `CESSION` (valeurs correctes de l'enum OperationType)

### Cleanup : Import BadgeVariant inutilise
- Suppression de `import type { BadgeVariant } from '@real-estate/ui/badge'`
- Suppression de `badgeVariant?: BadgeVariant` dans le type `recentLogs` de `BienSheetData`

### Verification
- `npx tsc --noEmit` depuis `apps/agent-app/` : **0 erreur**
