'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Filter, Plus, MapPin, User, Calendar, Home, FileText, BookOpen } from 'lucide-react';

// ── DS Components (from packages/ui) ──
import { AppBarCategory } from '@real-estate/ui/app-bar-category';
import { GraphCourbe } from '@real-estate/ui/graph-courbe';
import { ListClient } from '@real-estate/ui/list-client';
import { CardClient } from '@real-estate/ui/card-client';
import { Sheet } from '@real-estate/ui/sheet';
import { ButtonSort } from '@real-estate/ui/button-sort';
import { ButtonPagination } from '@real-estate/ui/button-pagination';
import { ViewModeDropdown, type ViewMode } from '@real-estate/ui/view-mode-dropdown';
import { Button } from '@real-estate/ui/button';
import { IconButton } from '@real-estate/ui/button';
import { SheetClientDetails } from '@real-estate/ui/sheet-client-details';
import { FilterPanel, type FilterCriterionDef, type ActiveFilter } from '@real-estate/ui/filter-panel';
import { BadgeCriteria } from '@real-estate/ui/badge-criteria';
import { MessageCircle, Phone } from 'lucide-react';

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

interface KpiDetail {
  label: string;
  value?: string;
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
  // Nouvelles données pour Sheet
  suggestions: Array<{ text: string; actionLabel: string }>;
  recentActivities: Array<{ date: string; time: string; author: string; category: string; description: string; badgeVariant?: 'default' | 'success' | 'warning' | 'error' | 'information' | 'disabled' }>;
  // Raw data for advanced filtering
  addressCity: string | null;
  dateOfBirth: string | null;
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
// Filter criteria definitions
// ---------------------------------------------------------------------------

const CLIENT_FILTER_CRITERIA: FilterCriterionDef[] = [
  { id: "01.01", label: "Secteur géographique", icon: <MapPin size={16} />, type: "location", config: { placeholder: "Rechercher une ville..." } },
  { id: "01.02", label: "Âge", icon: <User size={16} />, type: "range", config: { unit: "ans", min: 18, max: 100 } },
  { id: "01.03", label: "Dernière transaction", icon: <Calendar size={16} />, type: "date" },
  { id: "01.04", label: "Quantité de biens", icon: <Home size={16} />, type: "range", config: { unit: "biens", min: 0, max: 50 } },
  { id: "01.05", label: "Mandat en cours", icon: <FileText size={16} />, type: "enum", config: { options: [
    { value: "VENTE", label: "Vente" },
    { value: "GESTION", label: "Gestion" },
    { value: "RECHERCHE_ACQUISITION", label: "Recherche acquisition" },
    { value: "RECHERCHE_LOCATION", label: "Recherche location" },
  ]}},
  { id: "01.06", label: "Mandat terminé depuis", icon: <FileText size={16} />, type: "date" },
  { id: "01.07", label: "Carnet", icon: <BookOpen size={16} />, type: "enum", config: { options: [
    { value: "ACTIF", label: "Actif" },
    { value: "INACTIF", label: "Inactif" },
  ]}},
];

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
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([]);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
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
        .select('id, firstName, lastName, status, primaryEmail, mobilePhone, agentId, completionScore, isActive, createdAt, addressCity, dateOfBirth')
        .eq('isActive', true)
        .order('createdAt', { ascending: false });

      const rawRows = (data ?? []) as unknown as (ClientListItem & { addressCity?: string | null; dateOfBirth?: string | null })[];
      const enriched: ClientWithKpis[] = rawRows.map((c) => {
        const kpis = mockKpis();
        return {
          ...c,
          addressCity: c.addressCity ?? null,
          dateOfBirth: c.dateOfBirth ?? null,
          kpis,
          kpiDetails: mockKpiDetails(kpis),
          aiSuggestions: Math.floor(Math.random() * 20),
          badges: statusToBadges(c.status),
          suggestions: [
            { text: "Relancer ce client — inactif depuis 30 jours", actionLabel: "Programmer" },
            { text: "Proposer une estimation gratuite pour son bien", actionLabel: "Envoyer" },
          ],
          recentActivities: [
            { date: "15 avr. 2026", time: "14:32", author: "Agent", category: "Appel", description: "Échange sur les critères de recherche", badgeVariant: "success" as const },
            { date: "12 avr. 2026", time: "09:15", author: "Agent", category: "Email", description: "Envoi de biens correspondants", badgeVariant: "information" as const },
          ],
        };
      });

      setClients(enriched);
      setIsLoading(false);
    }
    load();
  }, []);

  // ── Filtering ──
  const filtered = clients.filter((c) => {
    // Category macro filter
    if (categoryFilter !== 'ALL' && !c.status.includes(categoryFilter as ClientStatus)) return false;

    // Advanced filters
    for (const af of activeFilters) {
      switch (af.criterionId) {
        case "01.01": { // Secteur géographique
          const cities = af.value as string[];
          if (cities.length > 0) {
            const clientCity = (c.addressCity ?? '').toLowerCase();
            if (!cities.some(city => clientCity.includes(city.toLowerCase()))) return false;
          }
          break;
        }
        case "01.02": { // Âge
          const range = af.value as { min?: number; max?: number };
          const dob = c.dateOfBirth;
          if (dob) {
            const age = Math.floor((Date.now() - new Date(dob).getTime()) / (365.25 * 24 * 60 * 60 * 1000));
            if (range.min !== undefined && age < range.min) return false;
            if (range.max !== undefined && age > range.max) return false;
          }
          break;
        }
        case "01.03": // Dernière transaction — nécessite jointure, skip en V1
          break;
        case "01.04": // Quantité de biens — nécessite jointure, skip en V1
          break;
        case "01.05": // Mandat en cours — nécessite jointure, skip en V1
          break;
        case "01.06": // Mandat terminé depuis — nécessite jointure, skip en V1
          break;
        case "01.07": // Carnet — nécessite donnée pas encore fetchée, skip en V1
          break;
      }
    }
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
          criteria={CLIENT_FILTER_CRITERIA}
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
            <>
              <IconButton variant="default" onClick={() => window.location.href = `tel:`} icon={<Phone size={20} />} />
              <IconButton variant="default" onClick={() => {}} icon={<MessageCircle size={20} />} />
              <Button
                variant="default"
                className="flex-1"
                onClick={() => {
                  setSheetOpen(false);
                  router.push(`/clients/${selectedClient.id}`);
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
        {selectedClient && (
          <SheetClientDetails
            qualification={selectedClient.kpis.qualification}
            engagement={selectedClient.kpis.engagement}
            conversion={selectedClient.kpis.conversion}
            reactivation={selectedClient.kpis.reactivation}
            suggestions={selectedClient.suggestions.map(s => ({ text: s.text, actionLabel: s.actionLabel }))}
            recentLogs={selectedClient.recentActivities}
          />
        )}
      </Sheet>
    </>
  );
}
