# Brief dev-agent — Refonte PropertyListView (P09 Liste Biens)

**Date** : 14 avril 2026
**Fichier cible** : `apps/agent-app/src/components/properties/PropertyListView.tsx` (branche `main`)
**Complexité** : Moyenne — refonte complète, mais le pattern est identique à ClientListView
**Pattern de référence** : `apps/agent-app/src/components/clients/ClientListView.tsx`

---

## Objectif

Remplacer la PropertyListView actuelle (DataTable + StatusBadge + EmptyState + Button chips) par les composants DS : AppBarCategory, GraphCourbe, ListBien/CardBien, Sheet + SheetBienDetails, Chip, ViewModeDropdown, ButtonSort, ButtonPagination.

La structure doit être **identique** à ClientListView — même layout, même logique, mêmes composants DS — avec les données Property à la place de Client.

---

## Pré-requis

Ajouter l'export manquant dans `packages/ui/package.json` :
```json
"./sheet-bien-details": "./src/components/SheetBienDetails.tsx"
```

---

## Architecture cible (6 blocs, copier le pattern ClientListView)

### Bloc 1 — AppBarCategory
```tsx
import { AppBarCategory } from '@real-estate/ui/app-bar-category';

<AppBarCategory
  title="Biens"
  filterLabel={...}  // label de la catégorie active
  filterItems={...}  // Tous, Off market, À vendre, À louer, Sous gestion
  onAdd={() => router.push('/properties/new')}
  onSearch={() => { /* TODO */ }}
/>
```

Catégories dropdown :
| Label | Filtre |
|-------|--------|
| tous | 'ALL' |
| off market | 'OFF_MARKET' |
| à vendre | 'A_VENDRE' |
| à louer | 'A_LOUER' |
| sous gestion | 'SOUS_GESTION' |

### Bloc 2 — GraphCourbe
```tsx
import { GraphCourbe } from '@real-estate/ui/graph-courbe';

<GraphCourbe
  title="Label"
  data={GRAPH_DATA}  // mock 8 points (même structure que ClientListView)
  selectedIndex={5}
  selectedDate="22 fév 2026"
  selectedLabel="28 réactions positives"
  trendPercentage="7%"
  trendDirection="down"
/>
```

### Bloc 3 — Filter bar (chips + view mode)
Même structure que ClientListView :
- Icône Filter à gauche
- Chips actifs (avec bouton X pour supprimer)
- Bouton "+" pour ajouter un filtre
- `ViewModeDropdown` à droite pour basculer list/grid

### Bloc 4 — Liste / Grille
**Mode list** : `ListBien` dans un `div.flex.flex-col.gap-[17px]`
**Mode grid** : `CardBien` dans un `div.grid.grid-cols-3.gap-[17px]`

Props de ListBien et CardBien (identiques) :
```tsx
<ListBien
  key={p.id}
  imageUrl={p.imageUrl}           // photo de couverture ou undefined
  operationType={p.operationType} // "VENTE", "LOCATION", etc.
  price={p.price}                 // formaté : "450 000€"
  hasCarnet={p.hasCarnet}         // boolean
  city={p.city}                   // addressCity
  propertyType={p.propertyType}   // "T3", "Maison", etc.
  surface={p.surface}             // formaté : "120m²"
  dpeGrade={p.dpeGrade}           // "A"-"G" ou undefined
  kpis={{ qualification: 0, entretien: 0, conversion: 0 }}  // mock pour l'instant
  aiSuggestions={0}               // mock pour l'instant
  onClick={() => handlePropertyClick(p)}
/>
```

### Bloc 5 — Pagination
```tsx
<ButtonSort label="" count={filtered.length} sortDirection="none" />
<ButtonPagination ... />
```
PAGE_SIZE = 100.

### Bloc 6 — Sheet résumé au clic
```tsx
import { Sheet } from '@real-estate/ui/sheet';
import { SheetBienDetails } from '@real-estate/ui/sheet-bien-details';

<Sheet
  isOpen={sheetOpen}
  onClose={() => { setSheetOpen(false); setSelectedProperty(null); }}
  title={selectedProperty ? `${selectedProperty.propertyType} . ${selectedProperty.surface}` : ''}
  width="narrow"
  footer={...}  // "Voir la fiche" + "Voir les actions" (même pattern que ClientListView)
>
  {selectedProperty && (
    <SheetBienDetails
      bienType={selectedProperty.propertyType}
      surface={selectedProperty.surface}
      type={selectedProperty.operationType}
      price={selectedProperty.price}
      location={selectedProperty.city}
      dpe={selectedProperty.dpeGrade}
      qualification={0}
      entretien={0}
      conversion={0}
    />
  )}
</Sheet>
```

---

## Query Supabase

Enrichir la query existante pour récupérer les champs nécessaires à ListBien/CardBien :

```sql
SELECT 
  id, type, status, address, addressCity, 
  livingAreaSqm, numberOfRooms, 
  desiredSellingPrice, estimatedMarketValue,
  dpeEnergyClass, completionScore, 
  hasMaintenanceLog, operationTypes,
  internalRef, createdAt
FROM "Property"
ORDER BY "createdAt" DESC
```

Pour la photo de couverture, query séparée :
```sql
SELECT "propertyId", "storagePath" 
FROM "PropertyMedia" 
WHERE "isCover" = true
```

Note : si PropertyMedia n'est pas peuplée, `imageUrl` sera undefined et ListBien affichera un placeholder. C'est OK pour le moment.

---

## Mapping PropertyRow → PropertyDisplayItem

```typescript
interface PropertyDisplayItem {
  id: string;
  city: string;                    // addressCity ?? '—'
  propertyType: string;            // PROPERTY_TYPE_LABELS[type] ?? type
  surface: string;                 // `${livingAreaSqm}m²` ou '—'
  dpeGrade?: 'A'|'B'|'C'|'D'|'E'|'F'|'G';  // dpeEnergyClass
  operationType: string;           // operationTypes?.[0] ?? 'VENTE'
  price: string;                   // formatPrice(desiredSellingPrice ?? estimatedMarketValue)
  hasCarnet: boolean;              // hasMaintenanceLog ?? false
  imageUrl?: string;               // de PropertyMedia (cover) ou undefined
  status: string;                  // pour le filtrage
}
```

---

## Imports DS à utiliser

```tsx
import { AppBarCategory } from '@real-estate/ui/app-bar-category';
import { GraphCourbe } from '@real-estate/ui/graph-courbe';
import { ListBien } from '@real-estate/ui/list-bien';
import { CardBien } from '@real-estate/ui/card-bien';
import { Sheet } from '@real-estate/ui/sheet';
import { SheetBienDetails } from '@real-estate/ui/sheet-bien-details';
import { Chip } from '@real-estate/ui/chip';
import { Button } from '@real-estate/ui/button';
import { ButtonSort } from '@real-estate/ui/button-sort';
import { ButtonPagination } from '@real-estate/ui/button-pagination';
import { ViewModeDropdown, type ViewMode } from '@real-estate/ui/view-mode-dropdown';
```

---

## Imports à SUPPRIMER

Retirer tous les composants app-level qui ne sont plus utilisés :
- `DataTable`, `StatusBadge`, `EmptyState` depuis `@/components/ui`
- `type Column` depuis `@/components/ui/DataTable`
- Les constantes `PROPERTY_STATUS_LABELS`, `PROPERTY_STATUS_COLORS`, `DPE_COLORS` si plus utilisées
- La fonction locale `DpeBadge`
- Les fonctions `formatSurface`, `formatRelativeDate` si plus utilisées
- Les icônes `Building2`, `Download`, `Upload` si plus utilisées

---

## Contraintes

- Ne modifier QUE `PropertyListView.tsx` et `package.json` (ajout export sheet-bien-details)
- Ne PAS créer de nouveaux fichiers
- Reproduire EXACTEMENT le pattern de ClientListView (même blocs, même espacement, même logique)
- KPIs et GraphCourbe en données mock (comme ClientListView)
- Garder `formatPrice` depuis `@/lib/utils/format` et `PROPERTY_TYPE_LABELS` depuis `@/types/property`

---

## Vérification

1. `cd /sessions/magical-amazing-noether/real-estate-project && npm run build`
2. Vérifier visuellement que la structure des blocs correspond à ClientListView

---

## Dev-report

Créer `docs/scratchpad/dev-report-P09_ListeBiens_20260414.md`
