'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Filter, Plus, X } from 'lucide-react';

// ── DS Components (from packages/ui) ──
import { AppBarCategory } from '@real-estate/ui/app-bar-category';
import { GraphCourbe } from '@real-estate/ui/graph-courbe';
import { ListBien } from '@real-estate/ui/list-bien';
import { CardBien } from '@real-estate/ui/card-bien';
import { Sheet } from '@real-estate/ui/sheet';
import { ButtonSort } from '@real-estate/ui/button-sort';
import { ButtonPagination } from '@real-estate/ui/button-pagination';
import { ViewModeDropdown, type ViewMode } from '@real-estate/ui/view-mode-dropdown';
import { Chip } from '@real-estate/ui/chip';
import { Button } from '@real-estate/ui/button';
import { SheetBienDetails } from '@real-estate/ui/sheet-bien-details';

// ── App-level ──
import { createClient } from '@/lib/supabase/client';
import type { PropertyStatus, DpeClass } from '@/types/property';
import { PROPERTY_TYPE_LABELS } from '@/types/property';
import { formatPrice } from '@/lib/utils/format';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PropertyRow {
  id: string;
  type: string;
  status: PropertyStatus;
  address: string;
  addressCity: string | null;
  livingAreaSqm: number | null;
  numberOfRooms: number | null;
  desiredSellingPrice: number | null;
  estimatedMarketValue: number | null;
  dpeEnergyClass: DpeClass | null;
  completionScore: number | null;
  hasMaintenanceLog: boolean | null;
  operationTypes: string[] | null;
  internalRef: string | null;
  createdAt: string;
}

interface PropertyDisplayItem {
  id: string;
  city: string;
  propertyType: string;
  surface: string;
  dpeGrade?: DpeClass;
  operationType: string;
  price: string;
  hasCarnet: boolean;
  status: string;
  imageUrl?: string;
}

interface PropertyWithKpis extends PropertyDisplayItem {
  kpis: PropertyKpis;
  aiSuggestions: number;
}

interface PropertyKpis {
  qualification: number;
  entretien: number;
  conversion: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Generate mock KPIs (replace with real RPC call later) */
function mockKpis(): PropertyKpis {
  return {
    qualification: Math.floor(Math.random() * 60) + 20,
    entretien: Math.floor(Math.random() * 60) + 20,
    conversion: Math.floor(Math.random() * 40) + 10,
  };
}

// ---------------------------------------------------------------------------
// Filter chips config
// ---------------------------------------------------------------------------

const CATEGORY_FILTERS = [
  { label: 'tous', value: 'ALL' as const },
  { label: 'off market', value: 'OFF_MARKET' as const },
  { label: 'à vendre', value: 'A_VENDRE' as const },
  { label: 'à louer', value: 'A_LOUER' as const },
  { label: 'sous gestion', value: 'SOUS_GESTION' as const },
];

// ---------------------------------------------------------------------------
// Graph data (mock — replace with real analytics)
// ---------------------------------------------------------------------------

const GRAPH_DATA = [
  { label: '10 avr', value: 18 },
  { label: '17 avr', value: 30 },
  { label: '24 avr', value: 25 },
  { label: '01 mai', value: 35 },
  { label: '08 mai', value: 32 },
  { label: '15 mai', value: 28 },
  { label: '22 mai', value: 22 },
  { label: '22 mai', value: 38 },
];

// ---------------------------------------------------------------------------
// Page size
// ---------------------------------------------------------------------------

const PAGE_SIZE = 100;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function PropertyListView() {
  const router = useRouter();

  // ── Data state ──
  const [properties, setProperties] = useState<PropertyWithKpis[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // ── UI state ──
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [page, setPage] = useState(0);

  // ── Sheet state ──
  const [selectedProperty, setSelectedProperty] = useState<PropertyWithKpis | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  // ── Fetch properties ──
  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from('Property')
        .select(
          'id, type, status, address, addressCity, livingAreaSqm, numberOfRooms, desiredSellingPrice, estimatedMarketValue, dpeEnergyClass, completionScore, hasMaintenanceLog, operationTypes, internalRef, createdAt'
        )
        .order('createdAt', { ascending: false });

      const enriched: PropertyWithKpis[] = ((data ?? []) as unknown as PropertyRow[]).map((p) => {
        const operationType = p.operationTypes?.[0] ?? 'VENTE';
        const displayItem: PropertyDisplayItem = {
          id: p.id,
          city: p.addressCity ?? '—',
          propertyType: PROPERTY_TYPE_LABELS[p.type as keyof typeof PROPERTY_TYPE_LABELS] ?? p.type,
          surface: p.livingAreaSqm ? `${p.livingAreaSqm}m²` : '—',
          dpeGrade: p.dpeEnergyClass ?? undefined,
          operationType,
          price: formatPrice(p.desiredSellingPrice ?? p.estimatedMarketValue),
          hasCarnet: p.hasMaintenanceLog ?? false,
          status: p.status,
        };

        return {
          ...displayItem,
          kpis: mockKpis(),
          aiSuggestions: Math.floor(Math.random() * 5),
        };
      });

      setProperties(enriched);
      setIsLoading(false);
    }
    load();
  }, []);

  // ── Filtering ──
  const filtered = properties.filter((p) => {
    if (categoryFilter !== 'ALL') {
      if (categoryFilter === 'SOUS_GESTION') {
        // TODO: filter by operationTypes includes 'GESTION'
        return true;
      } else if (categoryFilter === 'OFF_MARKET') {
        return p.status === 'OFF_MARKET';
      } else {
        return p.status === categoryFilter;
      }
    }
    return true;
  });

  // ── Pagination ──
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  // ── Handlers ──
  const handlePropertyClick = useCallback((property: PropertyWithKpis) => {
    setSelectedProperty(property);
    setSheetOpen(true);
  }, []);

  const handleRemoveFilter = useCallback((filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  }, []);

  // ── Loading skeleton ──
  if (isLoading) {
    return (
      <div className="space-y-3 p-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-[120px] bg-surface-neutral-action-hover rounded-2xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          1. AppBarCategory — "Biens" + dropdown + add + search
          ═══════════════════════════════════════════════════════ */}
      <AppBarCategory
        title="Biens"
        filterLabel={CATEGORY_FILTERS.find((f) => f.value === categoryFilter)?.label ?? 'tous'}
        filterItems={CATEGORY_FILTERS.map((f) => ({
          label: f.label,
          onClick: () => {
            setCategoryFilter(f.value);
            setPage(0);
          },
        }))}
        onAdd={() => router.push('/properties/new')}
        onSearch={() => {
          // TODO: open search overlay
        }}
      />

      {/* ═══════════════════════════════════════════════════════
          2. GraphCourbe — Analytics curve
          ═══════════════════════════════════════════════════════ */}
      <GraphCourbe
        title="Label"
        data={GRAPH_DATA}
        selectedIndex={5}
        selectedDate="22 fév 2026"
        selectedLabel="28 réactions positives"
        trendPercentage="7%"
        trendDirection="down"
      />

      {/* ═══════════════════════════════════════════════════════
          3. Filter bar — filter icon + chips + view mode toggle
          ═══════════════════════════════════════════════════════ */}
      <div className="flex items-center justify-between px-0 py-[10px]">
        <div className="flex items-center gap-[8px]">
          {/* Filter icon */}
          <button
            type="button"
            className="p-[12px] rounded-2xl hover:bg-surface-neutral-action transition-colors"
            aria-label="Filtrer"
          >
            <Filter size={20} style={{ color: 'var(--icon-neutral-default)' }} />
          </button>

          {/* Active filter chips */}
          {activeFilters.map((filter) => (
            <Chip key={filter} size="medium">
              {filter}
              <button
                onClick={() => handleRemoveFilter(filter)}
                className="ml-1"
                aria-label={`Supprimer le filtre ${filter}`}
              >
                <X size={14} style={{ color: 'var(--icon-neutral-default)' }} />
              </button>
            </Chip>
          ))}

          {/* Add filter button */}
          <button
            type="button"
            className="p-[12px] rounded-2xl hover:bg-surface-neutral-action transition-colors"
            aria-label="Ajouter un filtre"
          >
            <Plus size={20} style={{ color: 'var(--icon-neutral-default)' }} />
          </button>
        </div>

        {/* View mode toggle */}
        <ViewModeDropdown
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════
          4. Property list / grid
          ═══════════════════════════════════════════════════════ */}
      {viewMode === 'list' ? (
        /* ── MODE LIST : ListBien rows ── */
        <div className="flex flex-col gap-[17px]">
          {paginated.map((property) => (
            <ListBien
              key={property.id}
              imageUrl={property.imageUrl}
              operationType={property.operationType}
              price={property.price}
              hasCarnet={property.hasCarnet}
              city={property.city}
              propertyType={property.propertyType}
              surface={property.surface}
              dpeGrade={property.dpeGrade}
              kpis={property.kpis}
              aiSuggestions={property.aiSuggestions}
              onClick={() => handlePropertyClick(property)}
            />
          ))}
        </div>
      ) : (
        /* ── MODE GRID : CardBien cards ── */
        <div className="grid grid-cols-3 gap-[17px]">
          {paginated.map((property) => (
            <CardBien
              key={property.id}
              imageUrl={property.imageUrl}
              operationType={property.operationType}
              price={property.price}
              hasCarnet={property.hasCarnet}
              city={property.city}
              propertyType={property.propertyType}
              surface={property.surface}
              dpeGrade={property.dpeGrade}
              kpis={property.kpis}
              aiSuggestions={property.aiSuggestions}
              onClick={() => handlePropertyClick(property)}
            />
          ))}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════
          5. Pagination bar — ButtonSort + ButtonPagination
          ═══════════════════════════════════════════════════════ */}
      <div className="flex items-center justify-end gap-[12px] py-[20px]">
        <ButtonSort
          label=""
          count={filtered.length}
          sortDirection="none"
        />
        <ButtonPagination
          onPrevious={() => setPage((p) => Math.max(0, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          canGoPrevious={page > 0}
          canGoNext={page < totalPages - 1}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════
          6. Sheet — Property detail (opens on click)
          ═══════════════════════════════════════════════════════ */}
      <Sheet
        isOpen={sheetOpen}
        onClose={() => {
          setSheetOpen(false);
          setSelectedProperty(null);
        }}
        title={selectedProperty ? `${selectedProperty.propertyType} . ${selectedProperty.surface}` : ''}
        width="narrow"
        footer={
          selectedProperty ? (
            <div className="flex gap-[12px] p-[20px] border-t border-edge-default">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setSheetOpen(false);
                  router.push(`/properties/${selectedProperty.id}`);
                }}
              >
                Voir la fiche
              </Button>
              <Button
                variant="primary"
                className="flex-1"
              >
                Voir les actions
              </Button>
            </div>
          ) : undefined
        }
      >
        {selectedProperty && (
          <SheetBienDetails
            bienType={selectedProperty.propertyType}
            surface={selectedProperty.surface}
            type={selectedProperty.operationType}
            price={selectedProperty.price}
            location={selectedProperty.city}
            dpe={selectedProperty.dpeGrade}
            qualification={selectedProperty.kpis.qualification}
            entretien={selectedProperty.kpis.entretien}
            conversion={selectedProperty.kpis.conversion}
          />
        )}
      </Sheet>
    </>
  );
}
