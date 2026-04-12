'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Filter, Plus, X } from 'lucide-react';

// ── DS Components (from packages/ui) ──
import { AppBarCategory } from '@real-estate/ui/app-bar-category';
import { GraphCourbe } from '@real-estate/ui/graph-courbe';
import { ListClient } from '@real-estate/ui/list-client';
import { CardClient } from '@real-estate/ui/card-client';
import { Sheet } from '@real-estate/ui/sheet';
import { ButtonSort } from '@real-estate/ui/button-sort';
import { ButtonPagination } from '@real-estate/ui/button-pagination';
import { ViewModeDropdown, type ViewMode } from '@real-estate/ui/view-mode-dropdown';
import { Chip } from '@real-estate/ui/chip';
import { Button } from '@real-estate/ui/button';
import { SheetClientDetails, type KpiDetail } from '@real-estate/ui/sheet-client-details';

// ── App-level ──
import { createClient } from '@/lib/supabase/client';
import type { ClientListItem, ClientStatus } from '@/types/client';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ClientKpis {
  qualification: number;
  engagement: number;
  conversion: number;
  reactivation: number;
}

interface ClientKpiDetails {
  qualificationDetails: KpiDetail[];
  engagementDetails: KpiDetail[];
  conversionDetails: KpiDetail[];
  reactivationDetails: KpiDetail[];
  qualificationAiSuggestions: number;
  engagementAiSuggestions: number;
  conversionAiSuggestions: number;
  reactivationAiSuggestions: number;
}

interface ClientWithKpis extends ClientListItem {
  kpis: ClientKpis;
  kpiDetails: ClientKpiDetails;
  aiSuggestions: number;
  badges: Array<{ label: string; variant?: 'default' | 'success' | 'error' | 'warning' | 'information' }>;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Map client status to badge config */
function statusToBadges(status: ClientStatus[]): ClientWithKpis['badges'] {
  const map: Record<string, { label: string; variant?: 'default' }> = {
    PROPRIETAIRE: { label: 'PROPRIÉTAIRE' },
    ACQUEREUR: { label: 'ACQUÉREUR' },
    BAILLEUR: { label: 'BAILLEUR' },
    LOCATAIRE: { label: 'LOCATAIRE' },
    VENDEUR: { label: 'VENDEUR' },
  };
  return status.map((s) => map[s] ?? { label: s });
}

/** Generate mock KPIs (replace with real RPC call later) */
function mockKpis(): ClientKpis {
  return {
    qualification: Math.floor(Math.random() * 60) + 20,
    engagement: Math.floor(Math.random() * 60) + 20,
    conversion: Math.floor(Math.random() * 40) + 10,
    reactivation: Math.floor(Math.random() * 60) + 20,
  };
}

/** Generate mock KPI sub-details per section (replace with real data later) */
function mockKpiDetails(kpis: ClientKpis): ClientKpiDetails {
  const rp = () => `${Math.floor(Math.random() * 80) + 10}%`;
  return {
    qualificationDetails: [
      { label: 'Informations de profil :', value: rp() },
      { label: 'Informations de contact :', value: rp() },
      { label: 'Informations professionnelles :', value: rp() },
    ],
    engagementDetails: [
      { label: "Taux d'ouverture :", value: rp() },
      { label: 'Taux de clics :', value: rp() },
      { label: "Taux de passage à l'action :", value: rp() },
      { label: 'Taux de réponses :', value: rp() },
    ],
    conversionDetails: [
      { label: `Date dernier mandat : > ${Math.floor(Math.random() * 3) + 1} ans` },
      { label: `Projection prochain mandat : > ${Math.floor(Math.random() * 12) + 1} mois` },
    ],
    reactivationDetails: [
      { label: 'Dernière activité :', value: `${Math.floor(Math.random() * 60) + 1} jours` },
      { label: 'Réceptivité :', value: rp() },
      { label: 'Engagement :', value: rp() },
    ],
    qualificationAiSuggestions: Math.floor(Math.random() * 3),
    engagementAiSuggestions: Math.floor(Math.random() * 4),
    conversionAiSuggestions: Math.floor(Math.random() * 2),
    reactivationAiSuggestions: Math.floor(Math.random() * 3),
  };
}

// ---------------------------------------------------------------------------
// Filter chips config
// ---------------------------------------------------------------------------

const CATEGORY_FILTERS = [
  { label: 'tous', value: 'ALL' as const },
  { label: 'propriétaires', value: 'PROPRIETAIRE' as const },
  { label: 'acquéreurs', value: 'ACQUEREUR' as const },
  { label: 'bailleurs', value: 'BAILLEUR' as const },
  { label: 'locataires', value: 'LOCATAIRE' as const },
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

const PAGE_SIZE = 25;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ClientListView() {
  const router = useRouter();

  // ── Data state ──
  const [clients, setClients] = useState<ClientWithKpis[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // ── UI state ──
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [page, setPage] = useState(0);

  // ── Sheet state ──
  const [selectedClient, setSelectedClient] = useState<ClientWithKpis | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  // ── Fetch clients ──
  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from('Client')
        .select('id, firstName, lastName, status, primaryEmail, mobilePhone, agentId, completionScore, isActive, createdAt')
        .eq('isActive', true)
        .order('createdAt', { ascending: false });

      const enriched: ClientWithKpis[] = ((data ?? []) as unknown as ClientListItem[]).map((c) => {
        const kpis = mockKpis();
        return {
          ...c,
          kpis,
          kpiDetails: mockKpiDetails(kpis),
          aiSuggestions: Math.floor(Math.random() * 20),
          badges: statusToBadges(c.status),
        };
      });

      setClients(enriched);
      setIsLoading(false);
    }
    load();
  }, []);

  // ── Filtering ──
  const filtered = clients.filter((c) => {
    if (categoryFilter !== 'ALL' && !c.status.includes(categoryFilter as ClientStatus)) return false;
    // Additional active filters could be applied here
    return true;
  });

  // ── Pagination ──
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  // ── Handlers ──
  const handleClientClick = useCallback((client: ClientWithKpis) => {
    setSelectedClient(client);
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
          1. AppBarCategory — "Clients" + dropdown + add + search
          ═══════════════════════════════════════════════════════ */}
      <AppBarCategory
        title="Clients"
        filterLabel={CATEGORY_FILTERS.find((f) => f.value === categoryFilter)?.label ?? 'tous'}
        filterItems={CATEGORY_FILTERS.map((f) => ({
          label: f.label,
          onClick: () => {
            setCategoryFilter(f.value);
            setPage(0);
          },
        }))}
        onAdd={() => router.push('/clients/new')}
        onSearch={() => {
          // TODO: open search overlay
        }}
      />

      {/* ═══════════════════════════════════════════════════════
          2. GraphCourbe — Engagement curve
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
          4. Client list / grid
          ═══════════════════════════════════════════════════════ */}
      {viewMode === 'list' ? (
        /* ── MODE LIST : ListClient rows ── */
        <div className="flex flex-col gap-[17px]">
          {paginated.map((client) => (
            <ListClient
              key={client.id}
              firstName={client.firstName}
              lastName={client.lastName}
              badges={client.badges}
              kpis={client.kpis}
              aiSuggestions={client.aiSuggestions}
              onClick={() => handleClientClick(client)}
            />
          ))}
        </div>
      ) : (
        /* ── MODE GRID : CardClient cards ── */
        <div className="grid grid-cols-3 gap-[17px]">
          {paginated.map((client) => (
            <CardClient
              key={client.id}
              firstName={client.firstName}
              lastName={client.lastName}
              badges={client.badges}
              kpis={client.kpis}
              aiSuggestions={client.aiSuggestions}
              onClick={() => handleClientClick(client)}
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
          6. Sheet — Client detail (opens on click)
          ═══════════════════════════════════════════════════════ */}
      <Sheet
        isOpen={sheetOpen}
        onClose={() => {
          setSheetOpen(false);
          setSelectedClient(null);
        }}
        title={selectedClient ? `${selectedClient.firstName} ${selectedClient.lastName}` : ''}
        width="narrow"
        footer={
          selectedClient ? (
            <div className="flex gap-[12px] p-[20px] border-t border-edge-default">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setSheetOpen(false);
                  router.push(`/clients/${selectedClient.id}`);
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
        {selectedClient && (
          <SheetClientDetails
            qualification={selectedClient.kpis.qualification}
            engagement={selectedClient.kpis.engagement}
            conversion={selectedClient.kpis.conversion}
            reactivation={selectedClient.kpis.reactivation}
            qualificationAiSuggestions={selectedClient.kpiDetails.qualificationAiSuggestions}
            engagementAiSuggestions={selectedClient.kpiDetails.engagementAiSuggestions}
            conversionAiSuggestions={selectedClient.kpiDetails.conversionAiSuggestions}
            reactivationAiSuggestions={selectedClient.kpiDetails.reactivationAiSuggestions}
            qualificationDetails={selectedClient.kpiDetails.qualificationDetails}
            engagementDetails={selectedClient.kpiDetails.engagementDetails}
            conversionDetails={selectedClient.kpiDetails.conversionDetails}
            reactivationDetails={selectedClient.kpiDetails.reactivationDetails}
          />
        )}
      </Sheet>
    </>
  );
}
