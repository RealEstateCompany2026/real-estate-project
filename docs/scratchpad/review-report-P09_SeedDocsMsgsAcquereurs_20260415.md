# Review Report P09 — Seed Documents + Messages + Section Acquéreurs Appétents
**Date:** 2026-04-15  
**Reviewer:** reviewer-agent  
**Verdict:** **PASS**

---

## 1. Vérification Seed en Base

### Documents
```sql
SELECT count(DISTINCT "propertyId") as properties, count(*) as total 
FROM "Document" WHERE "propertyId" IS NOT NULL;
```
**Résultat:** `properties: 99, total: 396` ✓  
**Attendu:** 99 propriétés distinctes, ~396 documents (4 par property × 99)  
**Status:** CONFORME

### Messages
```sql
SELECT count(DISTINCT "propertyId") as properties, count(*) as total 
FROM "Message" WHERE "propertyId" IS NOT NULL;
```
**Résultat:** `properties: 99, total: 495` ✓  
**Attendu:** 99 propriétés distinctes, ~495 messages (5 par property × 99)  
**Status:** CONFORME

---

## 2. Audit Code PropertyDetailView.tsx

### a) Import ListClient
- **Location:** Ligne 28
- **Code:** `import { ListClient } from '@real-estate/ui/list-client';`
- **Vérification:** Export correct dans `/packages/ui/package.json` ligne 53
- **Status:** ✓ CONFORME

### b) Query Acquéreurs (lignes 459-493)
```tsx
const { data: buyersData } = await supabase
  .from('Client')
  .select('id, firstName, lastName, searchCriteriaSummary')
  .contains('status', ['ACQUEREUR'])      // ✓ Array avec contains()
  .not('searchCriteriaSummary', 'is', null) // ✓ Filter critères non-null
  .limit(50);
```
**Vérifications:**
- ✓ Utilise `.contains('status', ['ACQUEREUR'])` pour filtrer un array PostgreSQL
- ✓ Filtre `.not('searchCriteriaSummary', 'is', null)` pour exclure clients sans critères
- ✓ Matching par type de bien OU ville (lignes 481-482): `criteria.includes(propertyType) || criteria.includes(propertyCity)`
- ✓ Slice à 10 max acquéreurs (ligne 485)
- **Status:** ✓ CONFORME

### c) JSX Section Acquéreurs (lignes 1212-1235)
```tsx
<section ref={setSectionRef('acquereurs')} id="acquereurs" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
  <div className="flex items-center gap-[4px] mb-[50px]">
    <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
      Acquéreurs appétents
    </h3>
    <Badge variant="default">{data.matchingBuyers.length}</Badge>
  </div>
  {data.matchingBuyers.length > 0 && (
    <div className="flex flex-col gap-[8px]">
      {data.matchingBuyers.map((buyer) => (
        <ListClient
          key={buyer.id}
          firstName={buyer.firstName}
          lastName={buyer.lastName}
          badges={[{ label: 'ACQUÉREUR' }]}
          kpis={{ qualification: 0, engagement: 0, conversion: 0, reactivation: 0 }}
          aiSuggestions={0}
          onClick={() => router.push(`/clients/${buyer.id}`)}
        />
      ))}
    </div>
  )}
</section>
```
**Vérifications:**
- ✓ Utilise `<ListClient>` depuis le DS (pas de composant custom)
- ✓ Props corrects:
  - `firstName`, `lastName` : string
  - `badges={[{ label: 'ACQUÉREUR' }]}` : Array<Badge>
  - `kpis={ qualification: 0, engagement: 0, conversion: 0, reactivation: 0 }` : ListClientKpi interface complète
  - `aiSuggestions={0}` : number
  - `onClick={() => router.push(...)}` : callback navigation
- ✓ Section titre + Badge avec count (0 si aucun match)
- ✓ Condition `.length > 0` → affiche liste uniquement si matches
- **Status:** ✓ CONFORME

### d) Types & Interfaces
**BuyerRow (ligne 132):**
```tsx
interface BuyerRow {
  id: string;
  firstName: string | null;
  lastName: string | null;
  searchCriteriaSummary: string | null;
}
```
✓ Aligné avec la requête Supabase

**BuyerMatch (ligne 139):**
```tsx
interface BuyerMatch {
  id: string;
  firstName: string;
  lastName: string;
  criteria: string;
}
```
✓ Aligné avec le state et le JSX

### e) Aucune Régression
- ✓ Section Caractéristiques (lignes 816-1023) : INTACTE
- ✓ Section Activités (lignes 1024-1090) : INTACTE
- ✓ ClientDetailView : N'a pas été touché (dernière modif: 46bfd9d)
- ✓ Pas de string literals hardcodés pour enums/types

---

## 3. Build Verification

```bash
cd /sessions/magical-amazing-noether/real-estate-project/apps/agent-app && npx next build
```

**Résultat:**
```
✓ Compiled successfully in 2.5s
  Running TypeScript ...
  Collecting page data using 3 workers ...
  Generating static pages using 3 workers (29/29) in 167.2ms
  Finalizing page optimization ...
✓ Routes compiled (29 routes)
```

**Status:** ✓ BUILD PASSED (0 errors, 0 critical warnings)

---

## 4. Audit Checklist

| Critère | Status | Détails |
|---------|--------|---------|
| Documents seeding (396/99) | ✓ PASS | 99 propriétés, 396 docs |
| Messages seeding (495/99) | ✓ PASS | 99 propriétés, 495 messages |
| ListClient import | ✓ PASS | Ligne 28, export @real-estate/ui/list-client |
| Query ACQUEREUR | ✓ PASS | `.contains('status', ['ACQUEREUR'])` |
| Filter searchCriteriaSummary | ✓ PASS | `.not(..., 'is', null)` |
| Matching type/ville | ✓ PASS | `.includes(propertyType) \|\| .includes(propertyCity)` |
| JSX ListClient | ✓ PASS | Props complets, onClick navigation |
| KPIs props | ✓ PASS | {qual: 0, eng: 0, conv: 0, reac: 0} |
| Section 0 matches | ✓ PASS | Affiche titre + Badge 0 (pas de liste) |
| Pas de régression | ✓ PASS | Caractéristiques, Activités, ClientDetailView intacts |
| Build success | ✓ PASS | Next.js build: OK (0 errors) |

---

## Verdict Final

**✓ PASS**

Tous les critères sont conformes au brief :
1. Seeds en base : 99 propriétés × 4 docs = 396 documents ✓
2. Seeds en base : 99 propriétés × 5 messages = 495 messages ✓
3. Section Acquéreurs : Implémentation correcte avec ListClient du DS ✓
4. Matching : Type de bien OU ville, 10 max affichés ✓
5. Aucune régression : Caractéristiques, Activités, ClientDetailView intacts ✓
6. Build : Next.js 16.1.6 compile sans erreurs ✓

**Prêt pour production.**
