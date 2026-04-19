'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Filter, Plus, Tag, Layers, TrendingUp, BadgeEuro, Percent } from 'lucide-react';

// -- DS Components (from packages/ui) --
import { AppBarCategory } from '@real-estate/ui/app-bar-category';
import { GraphCourbe } from '@real-estate/ui/graph-courbe';
import { ListAffaire } from '@real-estate/ui/list-affaire';
import { Sheet } from '@real-estate/ui/sheet';
import { ButtonSort } from '@real-estate/ui/button-sort';
import { ButtonPagination } from '@real-estate/ui/button-pagination';
import { Button, IconButton } from '@real-estate/ui/button';
import { FilterPanel, type FilterCriterionDef, type ActiveFilter } from '@real-estate/ui/filter-panel';
import { BadgeCriteria } from '@real-estate/ui/badge-criteria';
import type { BadgeVariant } from '@real-estate/ui/badge';
import type { DealType, PipelineStage } from '@real-estate/ui/deal-types';

// -- App-level --
import { createClient } from '@/lib/supabase/client';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface DealListItem {
  id: string;
  reference: string;
  type: DealType;
  status: string;
  pipelineStage: PipelineStage;
  trend: string;
  forecastRevenue: number | null;
  winProbability: number | null;
  mandateWaived: boolean;
  saleMandateStatus: string | null;
  mgmtMandateStatus: string | null;
  lastActivityDate: string | null;
  createdAt: string;
  // Jointures
  Client: { firstName: string; lastName: string } | null;
  Property: {
    type: string;
    livingAreaSqm: number | null;
    addressCity: string | null;
    desiredSellingPrice: number | null;
  } | null;
  // Compteurs
  infoRequestsCount: number;
  visitCount: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function mandateStatusToVariant(deal: DealListItem): BadgeVariant {
  const mandateStatus =
    deal.type === 'GESTION' ? deal.mgmtMandateStatus : deal.saleMandateStatus;
  if (mandateStatus === 'SIGNE') return 'success';
  if (mandateStatus === 'NON_CREE') return 'disabled';
  return 'warning'; // EDITE ou ENVOYE
}

function formatCurrency(amount: number | null | undefined): string {
  if (amount == null) return '\u2014';
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}

function computeWeightedRevenue(deal: DealListItem): string {
  if (deal.forecastRevenue == null || deal.winProbability == null) return '\u2014';
  return formatCurrency((deal.forecastRevenue * deal.winProbability) / 100);
}

function formatDate(date: string | null): string {
  if (!date) return '';
  return new Date(date).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

// ---------------------------------------------------------------------------
// Category filters
// ---------------------------------------------------------------------------

const CATEGORY_FILTERS = [
  { label: 'toutes', value: 'ALL' as const },
  { label: 'vente', value: 'VENTE' as const },
  { label: 'acquisition', value: 'ACQUISITION' as const },
  { label: 'location', value: 'LOCATION' as const },
  { label: 'gestion', value: 'GESTION' as const },
];

// ---------------------------------------------------------------------------
// Graph data (mock -- replace with real analytics)
// ---------------------------------------------------------------------------

const GRAPH_DATA = [
  { label: '10 avr', value: 12 },
  { label: '17 avr', value: 18 },
  { label: '24 avr', value: 15 },
  { label: '01 mai', value: 22 },
  { label: '08 mai', value: 20 },
  { label: '15 mai', value: 25 },
  { label: '22 mai', value: 19 },
  { label: '29 mai', value: 28 },
];

// ---------------------------------------------------------------------------
// Page size
// ---------------------------------------------------------------------------

const PAGE_SIZE = 25;

// ---------------------------------------------------------------------------
// Filter criteria definitions
// ---------------------------------------------------------------------------

const DEAL_FILTER_CRITERIA: FilterCriterionDef[] = [
  {
    id: '10.01',
    label: 'Statut',
    icon: <Tag size={16} />,
    type: 'enum',
    config: {
      options: [
        { value: 'INACTIVE', label: 'Inactive' },
        { value: 'EN_COURS', label: 'En cours' },
        { value: 'CLOTUREE', label: 'Clotur\u00e9e' },
        { value: 'ARCHIVEE', label: 'Archiv\u00e9e' },
      ],
    },
  },
  {
    id: '10.02',
    label: '\u00c9tape pipeline',
    icon: <Layers size={16} />,
    type: 'enum',
    config: {
      options: [
        { value: 'MANDAT', label: 'Mandat' },
        { value: 'PROMOTION', label: 'Promotion' },
        { value: 'VISITES', label: 'Visites' },
        { value: 'CLOSING', label: 'Closing' },
        { value: 'GESTION', label: 'Gestion' },
        { value: 'RENOUVELLEMENT', label: 'Renouvellement' },
      ],
    },
  },
  {
    id: '10.03',
    label: 'Tendance',
    icon: <TrendingUp size={16} />,
    type: 'enum',
    config: {
      options: [
        { value: 'POSITIF', label: 'Positif' },
        { value: 'NEUTRE', label: 'Neutre' },
        { value: 'A_RISQUE', label: '\u00c0 risque' },
      ],
    },
  },
  {
    id: '10.04',
    label: 'CA pr\u00e9visionnel',
    icon: <BadgeEuro size={16} />,
    type: 'range',
    config: { unit: '\u20ac', min: 0, max: 500000 },
  },
  {
    id: '10.05',
    label: 'Probabilit\u00e9 de gain',
    icon: <Percent size={16} />,
    type: 'range',
    config: { unit: '%', min: 0, max: 100 },
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function DealListView() {
  const router = useRouter();

  // -- Data state --
  const [deals, setDeals] = useState<DealListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // -- UI state --
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([]);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [page, setPage] = useState(0);

  // -- Sheet state --
  const [selectedDeal, setSelectedDeal] = useState<DealListItem | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  // -- Fetch deals --
  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from('Deal')
        .select(
          `
          id, reference, type, status, pipelineStage, trend,
          forecastRevenue, winProbability, mandateWaived,
          saleMandateStatus, mgmtMandateStatus,
          lastActivityDate, createdAt,
          infoRequestsCount, visitCount,
          Client(firstName, lastName),
          Property(type, livingAreaSqm, addressCity, desiredSellingPrice)
        `
        )
        .order('lastActivityDate', { ascending: false });

      setDeals((data ?? []) as unknown as DealListItem[]);
      setIsLoading(false);
    }
    load();
  }, []);

  // -- Filtering --
  const filtered = deals.filter((d) => {
    // Category macro filter
    if (categoryFilter !== 'ALL' && d.type !== categoryFilter) return false;

    // Advanced filters
    for (const af of activeFilters) {
      switch (af.criterionId) {
        case '10.01': {
          // Statut
          const vals = af.value as string[];
          if (vals.length > 0 && !vals.includes(d.status)) return false;
          break;
        }
        case '10.02': {
          // Etape pipeline
          const vals = af.value as string[];
          if (vals.length > 0 && !vals.includes(d.pipelineStage)) return false;
          break;
        }
        case '10.03': {
          // Tendance
          const vals = af.value as string[];
          if (vals.length > 0 && !vals.includes(d.trend)) return false;
          break;
        }
        case '10.04': {
          // CA previsionnel (range)
          const range = af.value as { min?: number; max?: number };
          const ca = d.forecastRevenue ?? 0;
          if (range.min !== undefined && ca < range.min) return false;
          if (range.max !== undefined && ca > range.max) return false;
          break;
        }
        case '10.05': {
          // Probabilite (range)
          const range = af.value as { min?: number; max?: number };
          const prob = d.winProbability ?? 0;
          if (range.min !== undefined && prob < range.min) return false;
          if (range.max !== undefined && prob > range.max) return false;
          break;
        }
      }
    }
    return true;
  });

  // -- Pagination --
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  // -- Handlers --
  const handleDealClick = useCallback((deal: DealListItem) => {
    setSelectedDeal(deal);
    setSheetOpen(true);
  }, []);

  const handleRemoveFilter = useCallback((criterionId: string) => {
    setActiveFilters((prev) => prev.filter((f) => f.criterionId !== criterionId));
    setPage(0);
  }, []);

  // -- Loading skeleton --
  if (isLoading) {
    return (
      <div className="space-y-3 p-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-[120px] bg-surface-neutral-action-hover rounded-2xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* =====================================================================
          1. AppBarCategory -- "Affaires" + dropdown + add + search
          ===================================================================== */}
      <AppBarCategory
        title="Affaires"
        filterLabel={
          CATEGORY_FILTERS.find((f) => f.value === categoryFilter)?.label ?? 'toutes'
        }
        filterItems={CATEGORY_FILTERS.map((f) => ({
          label: f.label,
          onClick: () => {
            setCategoryFilter(f.value);
            setPage(0);
          },
        }))}
        onAdd={() => router.push('/affaires/nouveau')}
        onSearch={() => {
          // TODO: open search overlay
        }}
      />

      {/* =====================================================================
          2. GraphCourbe -- Affaires curve (placeholder)
          ===================================================================== */}
      <GraphCourbe
        title="Portefeuille affaires"
        data={GRAPH_DATA}
        selectedIndex={5}
        selectedDate="22 f\u00e9v 2026"
        selectedLabel="25 nouvelles affaires"
        trendPercentage="12%"
        trendDirection="up"
      />

      {/* =====================================================================
          3. Filter bar -- filter icon + badges + add filter
          ===================================================================== */}
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
      </div>

      {/* FilterPanel -- anchored below the bar */}
      {filterPanelOpen && (
        <FilterPanel
          criteria={DEAL_FILTER_CRITERIA}
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

      {/* =====================================================================
          4. Deal list
          ===================================================================== */}
      <div className="flex flex-col gap-[17px]">
        {paginated.map((deal) => (
          <ListAffaire
            key={deal.id}
            dealType={deal.type as DealType}
            mandateVariant={mandateStatusToVariant(deal)}
            reference={deal.reference}
            propertyType={deal.Property?.type}
            propertySurface={
              deal.Property?.livingAreaSqm
                ? `${deal.Property.livingAreaSqm} m\u00b2`
                : undefined
            }
            propertyCity={deal.Property?.addressCity ?? undefined}
            propertyPrice={
              deal.Property?.desiredSellingPrice
                ? formatCurrency(deal.Property.desiredSellingPrice)
                : undefined
            }
            clientName={
              deal.Client
                ? `${deal.Client.firstName} ${deal.Client.lastName}`
                : undefined
            }
            pipelineStage={deal.pipelineStage as PipelineStage}
            lastActivityDate={formatDate(deal.lastActivityDate)}
            winProbability={deal.winProbability ?? 0}
            weightedRevenue={computeWeightedRevenue(deal)}
            leadsCount={deal.type === 'VENTE' ? deal.infoRequestsCount : undefined}
            visitsCount={deal.visitCount}
            onDealClick={() => handleDealClick(deal)}
          />
        ))}
      </div>

      {/* =====================================================================
          5. Pagination bar -- ButtonSort + ButtonPagination
          ===================================================================== */}
      <div className="flex items-center justify-end gap-[12px] py-[20px]">
        <ButtonSort label="" count={filtered.length} sortDirection="none" />
        <ButtonPagination
          onPrevious={() => setPage((p) => Math.max(0, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          canGoPrevious={page > 0}
          canGoNext={page < totalPages - 1}
        />
      </div>

      {/* =====================================================================
          6. Sheet -- Deal summary (opens on click)
          ===================================================================== */}
      <Sheet
        isOpen={sheetOpen}
        onClose={() => {
          setSheetOpen(false);
          setSelectedDeal(null);
        }}
        title={selectedDeal ? selectedDeal.reference : ''}
        width="narrow"
        footer={
          selectedDeal ? (
            <>
              <Button
                variant="default"
                className="flex-1"
                onClick={() => {
                  setSheetOpen(false);
                  router.push(`/affaires/${selectedDeal.id}`);
                }}
              >
                Voir l&apos;affaire
              </Button>
              <Button variant="primary" className="flex-1">
                Voir les actions
              </Button>
            </>
          ) : undefined
        }
      >
        {selectedDeal && (
          <div className="flex flex-col gap-[20px] p-[16px]">
            {/* Reference + Type */}
            <div className="flex flex-col gap-[8px]">
              <span className="text-sm text-neutral-400">R\u00e9f\u00e9rence</span>
              <span className="text-base font-semibold">{selectedDeal.reference}</span>
            </div>

            {/* Type */}
            <div className="flex flex-col gap-[8px]">
              <span className="text-sm text-neutral-400">Type</span>
              <span className="text-base font-semibold">
                {selectedDeal.type === 'VENTE'
                  ? 'Vente'
                  : selectedDeal.type === 'ACQUISITION'
                    ? 'Acquisition'
                    : selectedDeal.type === 'LOCATION'
                      ? 'Location'
                      : 'Gestion'}
              </span>
            </div>

            {/* Client */}
            <div className="flex flex-col gap-[8px]">
              <span className="text-sm text-neutral-400">Client</span>
              <span className="text-base font-semibold">
                {selectedDeal.Client
                  ? `${selectedDeal.Client.firstName} ${selectedDeal.Client.lastName}`
                  : '\u2014'}
              </span>
            </div>

            {/* Pipeline */}
            <div className="flex flex-col gap-[8px]">
              <span className="text-sm text-neutral-400">\u00c9tape pipeline</span>
              <span className="text-base font-semibold">
                {selectedDeal.pipelineStage}
              </span>
            </div>

            {/* CA previsionnel */}
            <div className="flex flex-col gap-[8px]">
              <span className="text-sm text-neutral-400">CA pr\u00e9visionnel</span>
              <span className="text-base font-semibold">
                {formatCurrency(selectedDeal.forecastRevenue)}
              </span>
            </div>

            {/* Probabilite */}
            <div className="flex flex-col gap-[8px]">
              <span className="text-sm text-neutral-400">Probabilit\u00e9 de gain</span>
              <span className="text-base font-semibold">
                {selectedDeal.winProbability != null
                  ? `${selectedDeal.winProbability}%`
                  : '\u2014'}
              </span>
            </div>

            {/* CA pondere */}
            <div className="flex flex-col gap-[8px]">
              <span className="text-sm text-neutral-400">CA pond\u00e9r\u00e9</span>
              <span className="text-base font-semibold">
                {computeWeightedRevenue(selectedDeal)}
              </span>
            </div>
          </div>
        )}
      </Sheet>
    </>
  );
}
