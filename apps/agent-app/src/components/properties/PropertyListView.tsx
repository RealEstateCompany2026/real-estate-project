'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Filter, Plus, Square, Calendar, Tag, MapPin } from 'lucide-react';

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
import { IconDpe } from '@real-estate/ui/icon-dpe';
import { Button } from '@real-estate/ui/button';
import { IconButton } from '@real-estate/ui/button';
import { SheetBienDetails } from '@real-estate/ui/sheet-bien-details';
import { FilterPanel, type FilterCriterionDef, type ActiveFilter } from '@real-estate/ui/filter-panel';
import { BadgeCriteria } from '@real-estate/ui/badge-criteria';
import { MessageCircle, Phone } from 'lucide-react';

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
  landAreaSqm: number | null;
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
  suggestions: Array<{ text: string; actionLabel: string }>;
  recentActivities: Array<{ date: string; time: string; author: string; category: string; description: string; badgeVariant?: 'default' | 'success' | 'warning' | 'error' | 'information' | 'disabled' }>;
  // Raw data for robust filtering (avoids parsing formatted strings)
  operationTypes: string[] | null;
  rawLivingAreaSqm: number | null;
  rawDesiredSellingPrice: number | null;
  rawAddressCity: string | null;
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
// Badge label mapping
// ---------------------------------------------------------------------------

/** Maps property status + operationType to a display label for the Badge (CAPS) */
function propertyBadgeLabel(status: string, opType: string): string {
  if (status === 'OFF_MARKET') return 'OFF MARKET';
  if (status === 'VENDU') return 'VENDU';
  if (status === 'LOUE') return 'LOUÉ';
  if (status === 'EN_VIAGER') return 'EN VIAGER';
  switch (opType) {
    case 'VENTE': return 'À VENDRE';
    case 'LOCATION': return 'À LOUER';
    case 'GESTION': return 'SOUS GESTION';
    case 'VIAGER': return 'EN VIAGER';
    case 'CESSION': return 'CESSION';
    default: return opType;
  }
}

// ---------------------------------------------------------------------------
// Filter chips config
// ---------------------------------------------------------------------------

const CATEGORY_FILTERS = [
  { label: 'Tous', value: 'ALL' as const },
  { label: 'Off market', value: 'OFF_MARKET' as const },
  { label: 'À vendre', value: 'A_VENDRE' as const },
  { label: 'À louer', value: 'A_LOUER' as const },
  { label: 'Sous Gestion', value: 'SOUS_GESTION' as const },
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
// Filter criteria definitions
// ---------------------------------------------------------------------------

const PROPERTY_FILTER_CRITERIA: FilterCriterionDef[] = [
  { id: "02.01", label: "Surface", icon: <Square size={16} />, type: "range", config: { unit: "m\u00B2", min: 0, max: 1000, step: 5 } },
  { id: "02.02", label: "Localisation", icon: <MapPin size={16} />, type: "location", config: { placeholder: "Rechercher une ville..." } },
  { id: "02.03", label: "Prix", icon: <Tag size={16} />, type: "range", config: { unit: "\u20AC", min: 0, max: 5000000, step: 10000 } },
  { id: "02.04", label: "Date de construction", icon: <Calendar size={16} />, type: "range", config: { unit: "", min: 1800, max: 2026, step: 1 } },
];

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
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([]);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
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
          'id, type, status, address, addressCity, livingAreaSqm, landAreaSqm, numberOfRooms, desiredSellingPrice, estimatedMarketValue, dpeEnergyClass, completionScore, hasMaintenanceLog, operationTypes, internalRef, createdAt'
        )
        .order('createdAt', { ascending: false });

      // Fetch cover photos for each property
      const propertyIds = (data ?? []).map((p: any) => p.id);
      const { data: coverPhotos } = await supabase
        .from('PropertyMedia')
        .select('propertyId, storagePath')
        .in('propertyId', propertyIds)
        .eq('mediaType', 'photo')
        .eq('isCover', true);

      // Fallback : si pas de isCover, prendre sortOrder = 1
      const { data: firstPhotos } = await supabase
        .from('PropertyMedia')
        .select('propertyId, storagePath')
        .in('propertyId', propertyIds)
        .eq('mediaType', 'photo')
        .eq('sortOrder', 1);

      // Construire un map propertyId → imageUrl (cover en priorité, sinon première photo)
      const coverMap = new Map<string, string>();
      (firstPhotos ?? []).forEach((p: any) => {
        if (!coverMap.has(p.propertyId)) coverMap.set(p.propertyId, p.storagePath);
      });
      (coverPhotos ?? []).forEach((p: any) => {
        coverMap.set(p.propertyId, p.storagePath); // écrase avec la cover si disponible
      });

      const enriched: PropertyWithKpis[] = ((data ?? []) as unknown as PropertyRow[]).map((p) => {
        const rawOpType = p.operationTypes?.[0] ?? 'VENTE';
        const displayItem: PropertyDisplayItem = {
          id: p.id,
          city: p.addressCity ?? '—',
          propertyType: PROPERTY_TYPE_LABELS[p.type as keyof typeof PROPERTY_TYPE_LABELS] ?? p.type,
          surface: p.livingAreaSqm ? `${p.livingAreaSqm}m²` : p.landAreaSqm ? `${p.landAreaSqm}m² (terrain)` : '—',
          dpeGrade: p.dpeEnergyClass ?? undefined,
          operationType: propertyBadgeLabel(p.status, rawOpType),
          price: formatPrice(p.desiredSellingPrice ?? p.estimatedMarketValue),
          hasCarnet: p.hasMaintenanceLog ?? false,
          status: p.status,
          imageUrl: coverMap.get(p.id),
        };

        return {
          ...displayItem,
          operationTypes: p.operationTypes,
          rawLivingAreaSqm: p.livingAreaSqm,
          rawDesiredSellingPrice: p.desiredSellingPrice ?? p.estimatedMarketValue,
          rawAddressCity: p.addressCity,
          kpis: mockKpis(),
          aiSuggestions: Math.floor(Math.random() * 5),
          suggestions: [
            { text: "Ce bien correspond à 3 acquéreurs actifs", actionLabel: "Envoyer" },
            { text: "Photos à mettre à jour — dernier shooting il y a 8 mois", actionLabel: "Programmer" },
          ],
          recentActivities: [
            { date: "16 avr. 2026", time: "15:30", author: "Agent", category: "Visite", description: "Visite avec retour positif", badgeVariant: "success" as const },
            { date: "14 avr. 2026", time: "10:00", author: "Agent", category: "Appel", description: "Point mensuel avec le propriétaire", badgeVariant: "information" as const },
          ],
        };
      });

      setProperties(enriched);
      setIsLoading(false);
    }
    load();
  }, []);

  // ── Filtering ──
  const filtered = properties.filter((p) => {
    // Category macro filter
    if (categoryFilter !== 'ALL') {
      if (categoryFilter === 'SOUS_GESTION') {
        if (!p.operationTypes?.includes('GESTION')) return false;
      } else if (categoryFilter === 'OFF_MARKET') {
        if (p.status !== 'OFF_MARKET') return false;
      } else {
        if (p.status !== categoryFilter) return false;
      }
    }

    // Advanced filters
    for (const af of activeFilters) {
      switch (af.criterionId) {
        case "02.01": { // Surface — use raw numeric field
          const range = af.value as { min?: number; max?: number };
          const surface = p.rawLivingAreaSqm;
          if (surface == null) break;
          if (range.min !== undefined && surface < range.min) return false;
          if (range.max !== undefined && surface > range.max) return false;
          break;
        }
        case "02.02": { // Localisation — use raw addressCity
          const cities = af.value as string[];
          const city = (p.rawAddressCity ?? p.city).toLowerCase();
          if (cities.length > 0 && !cities.some(c => city.includes(c.toLowerCase()))) return false;
          break;
        }
        case "02.03": { // Prix — use raw numeric field (avoids parsing formatted string)
          const range = af.value as { min?: number; max?: number };
          const price = p.rawDesiredSellingPrice;
          if (price == null) break;
          if (range.min !== undefined && price < range.min) return false;
          if (range.max !== undefined && price > range.max) return false;
          break;
        }
        case "02.04": // Date construction — pas de donnée dans le fetch actuel, skip V1
          break;
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

  const handleRemoveFilter = useCallback((criterionId: string) => {
    setActiveFilters((prev) => prev.filter((f) => f.criterionId !== criterionId));
    setPage(0);
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
          3. Filter bar — filter icon + badges + view mode toggle
          ═══════════════════════════════════════════════════════ */}
      <div className="flex items-center justify-between px-0 py-[10px]">
        <div className="flex items-center gap-[8px] flex-wrap">
          {/* Filter icon */}
          <IconButton
            variant="ghost"
            icon={<Filter size={20} />}
            onClick={() => setFilterPanelOpen(!filterPanelOpen)}
          />

          {/* Active filter badges */}
          {activeFilters.map((filter) => (
            <BadgeCriteria
              key={filter.criterionId}
              label={filter.label}
              onRemove={() => handleRemoveFilter(filter.criterionId)}
            />
          ))}

          {/* Add filter button */}
          <IconButton
            variant="ghost"
            icon={<Plus size={20} />}
            onClick={() => setFilterPanelOpen(!filterPanelOpen)}
          />
        </div>

        {/* View mode toggle */}
        <ViewModeDropdown
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </div>

      {/* FilterPanel — ancré sous la barre */}
      {filterPanelOpen && (
        <FilterPanel
          criteria={PROPERTY_FILTER_CRITERIA}
          activeFilters={activeFilters}
          onApplyFilter={(filter) => {
            setActiveFilters((prev) => {
              const without = prev.filter((f) => f.criterionId !== filter.criterionId);
              return [...without, filter];
            });
            setFilterPanelOpen(false);
            setPage(0);
          }}
          onRemoveFilter={(criterionId) => {
            setActiveFilters((prev) => prev.filter((f) => f.criterionId !== criterionId));
          }}
          onClose={() => setFilterPanelOpen(false)}
        />
      )}

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
        headerAfterTitle={
          selectedProperty && (
            <div className="flex items-center gap-2">
              <Chip size="small">{selectedProperty.city}</Chip>
              <IconDpe type={selectedProperty.dpeGrade} />
            </div>
          )
        }
        width="narrow"
        footer={
          selectedProperty ? (
            <>
              <IconButton variant="default" onClick={() => window.location.href = `tel:`} icon={<Phone size={20} />} />
              <IconButton variant="default" onClick={() => {}} icon={<MessageCircle size={20} />} />
              <Button
                variant="default"
                className="flex-1"
                onClick={() => {
                  setSheetOpen(false);
                  router.push(`/properties/${selectedProperty.id}`);
                }}
              >
                Voir la Fiche
              </Button>
              <Button variant="primary" className="flex-1">
                Voir les actions
              </Button>
            </>
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
            suggestions={selectedProperty.suggestions.map(s => ({ text: s.text, actionLabel: s.actionLabel }))}
            recentLogs={selectedProperty.recentActivities}
          />
        )}
      </Sheet>
    </>
  );
}
