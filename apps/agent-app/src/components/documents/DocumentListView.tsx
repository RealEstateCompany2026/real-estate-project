'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { Shield, Link2, Calendar, Filter, Plus, ChevronDown } from 'lucide-react';

// ── DS Components (from packages/ui) ──
import { AppBarCategory } from '@real-estate/ui/app-bar-category';
import { ListDocument } from '@real-estate/ui/list-document';
import { ButtonSort } from '@real-estate/ui/button-sort';
import { ButtonPagination } from '@real-estate/ui/button-pagination';
import { IconButton } from '@real-estate/ui/button';
import { FilterPanel, type FilterCriterionDef, type ActiveFilter } from '@real-estate/ui/filter-panel';
import { BadgeCriteria } from '@real-estate/ui/badge-criteria';
import { Menu } from '@real-estate/ui/menu';
// ── App-level ──
import { createClient } from '@/lib/supabase/client';
import { seedRandomInt } from '@/utils/seedRandom';
import { DOCUMENT_TYPE_LABELS, computeDocumentValidity, formatDocumentDate } from '@/utils/documentHelpers';
import { useSheetManager } from '@/hooks/useSheetManager';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface DocumentRow {
  id: string;
  title: string;
  type: string;
  documentStatus: string;
  expiryDate: string | null;
  createdAt: string;
  clientId: string | null;
  propertyId: string | null;
  dealId: string | null;
  fileName: string | null;
  fileFormat: string | null;
  fileSizeKb: number | null;
  url: string | null;
  signedAt: string | null;
  updatedAt: string | null;
  uploadedById: string | null;
  Client: { firstName: string; lastName: string } | null;
  Property: { addressCity: string | null; type: string; livingAreaSqm: number | null } | null;
  Deal: { reference: string | null } | null;
}

interface DocumentDisplayItem {
  id: string;
  title: string;
  type: string;
  clientName?: string;
  propertyRef?: string;
  propertyType?: string;
  surface?: string;
  createdDate: string;
  validityStatus?: 'valid' | 'expiring' | 'expired';
  aiSuggestions: number;
  // Raw fields for filtering
  rawCreatedAt: string;
  hasClient: boolean;
  hasProperty: boolean;
  hasDeal: boolean;
  // Fields for SheetDocument
  fileName?: string;
  fileFormat?: string;
  fileSizeKb?: number;
  documentType?: string;
  documentStatus?: string;
  expiryDate?: string;
  previewUrl?: string;
  uploadedBy?: string;
  uploadedDate?: string;
  modifiedDate?: string;
  signedDate?: string;
  clients: Array<{ name: string; onClick?: () => void }>;
  properties: Array<{ label: string; onClick?: () => void }>;
  deals: Array<{ label: string; onClick?: () => void }>;
}

// DOCUMENT_TYPE_LABELS imported from @/utils/documentHelpers

// ---------------------------------------------------------------------------
// Category filters (dropdown AppBar)
// ---------------------------------------------------------------------------

const CATEGORY_FILTERS = [
  { label: 'Tous', value: 'ALL' },
  ...Object.entries(DOCUMENT_TYPE_LABELS).map(([value, label]) => ({ label, value })),
];

// ---------------------------------------------------------------------------
// Filter criteria definitions
// ---------------------------------------------------------------------------

const DOCUMENT_FILTER_CRITERIA: FilterCriterionDef[] = [
  {
    id: 'doc.01',
    label: 'Statut validité',
    icon: <Shield size={16} />,
    type: 'enum',
    config: {
      options: [
        { label: 'Valide', value: 'valid' },
        { label: 'Expire bientôt', value: 'expiring' },
        { label: 'Expiré', value: 'expired' },
      ],
    },
  },
  {
    id: 'doc.02',
    label: 'Entité liée',
    icon: <Link2 size={16} />,
    type: 'enum',
    config: {
      options: [
        { label: 'Client', value: 'client' },
        { label: 'Bien', value: 'property' },
        { label: 'Affaire', value: 'deal' },
      ],
    },
  },
  {
    id: 'doc.03',
    label: 'Période',
    icon: <Calendar size={16} />,
    type: 'date',
    config: {},
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

// computeDocumentValidity and formatDocumentDate imported from @/utils/documentHelpers

// ---------------------------------------------------------------------------
// Page size
// ---------------------------------------------------------------------------

const PAGE_SIZE = 50;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function DocumentListView() {
  // ── Data state ──
  const [documents, setDocuments] = useState<DocumentDisplayItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // ── UI state ──
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([]);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);

  // ── Macro filter dropdown state ──
  const [macroMenuOpen, setMacroMenuOpen] = useState(false);
  const macroDropdownRef = useRef<HTMLDivElement>(null);

  // Close macro dropdown on outside click
  useEffect(() => {
    if (!macroMenuOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (macroDropdownRef.current && !macroDropdownRef.current.contains(e.target as Node)) {
        setMacroMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [macroMenuOpen]);

  const [page, setPage] = useState(0);

  // ── SheetManager ──
  const { openSheet } = useSheetManager();

  // ── Fetch documents ──
  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from('Document')
        .select(`
          id, title, type, documentStatus, expiryDate, createdAt, clientId, propertyId, dealId,
          fileName, fileFormat, fileSizeKb, url, signedAt, updatedAt, uploadedById,
          Client:clientId ( firstName, lastName ),
          Property:propertyId ( addressCity, type, livingAreaSqm ),
          Deal:dealId ( reference )
        `)
        .order('createdAt', { ascending: false });

      const mapped: DocumentDisplayItem[] = ((data ?? []) as unknown as DocumentRow[]).map((d) => ({
        id: d.id,
        title: d.title,
        type: d.type,
        clientName: d.Client ? `${d.Client.firstName} ${d.Client.lastName}` : undefined,
        propertyRef: d.Property?.addressCity ?? undefined,
        propertyType: d.Property?.type ?? undefined,
        surface: d.Property?.livingAreaSqm ? `${d.Property.livingAreaSqm}m²` : undefined,
        createdDate: formatDocumentDate(d.createdAt),
        validityStatus: computeDocumentValidity(d.expiryDate),
        aiSuggestions: seedRandomInt(d.id, 0, 0, 3),
        rawCreatedAt: d.createdAt,
        hasClient: d.clientId !== null,
        hasProperty: d.propertyId !== null,
        hasDeal: d.dealId !== null,
        // SheetDocument fields
        fileName: d.fileName ?? undefined,
        fileFormat: d.fileFormat ?? undefined,
        fileSizeKb: d.fileSizeKb ?? undefined,
        documentType: DOCUMENT_TYPE_LABELS[d.type] ?? d.type,
        documentStatus: d.documentStatus,
        expiryDate: d.expiryDate ? formatDocumentDate(d.expiryDate) : undefined,
        previewUrl: d.url ?? undefined,
        uploadedBy: 'Agent',  // TODO: fetch user name from uploadedById
        uploadedDate: formatDocumentDate(d.createdAt),
        modifiedDate: d.updatedAt ? formatDocumentDate(d.updatedAt) : undefined,
        signedDate: d.signedAt ? formatDocumentDate(d.signedAt) : undefined,
        clients: d.Client ? [{ name: `${d.Client.firstName} ${d.Client.lastName}` }] : [],
        properties: d.Property ? [{ label: d.Property.addressCity ?? 'Bien' }] : [],
        deals: d.Deal ? [{ label: d.Deal.reference ?? 'Affaire' }] : [],
      }));

      setDocuments(mapped);
      setIsLoading(false);
    }
    load();
  }, []);

  // ── Filtering ──
  const filtered = documents.filter((d) => {
    // Category macro filter
    if (categoryFilter !== 'ALL') {
      if (d.type !== categoryFilter) return false;
    }

    // Advanced filters
    for (const af of activeFilters) {
      switch (af.criterionId) {
        case 'doc.01': { // Statut validité
          const selected = af.value as string[];
          if (selected.length > 0 && (!d.validityStatus || !selected.includes(d.validityStatus))) return false;
          break;
        }
        case 'doc.02': { // Entité liée
          const entities = af.value as string[];
          if (entities.length > 0) {
            const match = entities.some((e) => {
              if (e === 'client') return d.hasClient;
              if (e === 'property') return d.hasProperty;
              if (e === 'deal') return d.hasDeal;
              return false;
            });
            if (!match) return false;
          }
          break;
        }
        case 'doc.03': { // Période
          const range = af.value as { from?: string; to?: string };
          const created = new Date(d.rawCreatedAt);
          if (range.from && created < new Date(range.from)) return false;
          if (range.to && created > new Date(range.to)) return false;
          break;
        }
      }
    }
    return true;
  });

  // ── Pagination ──
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  // ── Handlers ──
  const handleDocumentClick = useCallback((doc: DocumentDisplayItem) => {
    openSheet('document', { documentId: doc.id });
  }, [openSheet]);

  const handleRemoveFilter = useCallback((criterionId: string) => {
    setActiveFilters((prev) => prev.filter((f) => f.criterionId !== criterionId));
    setPage(0);
  }, []);

  // ── Loading skeleton ──
  if (isLoading) {
    return (
      <div className="space-y-3 p-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-[100px] bg-surface-neutral-action-hover rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          1. AppBarCategory — "Documents" + dropdown + add + search
          ═══════════════════════════════════════════════════════ */}
      <AppBarCategory
        title="Documents"
        onAdd={() => {/* TODO: open upload modal */}}
        onSearch={() => {/* TODO: search */}}
      />

      {/* ═══════════════════════════════════════════════════════
          2. Filter bar — filter icon + badges + add filter
          ═══════════════════════════════════════════════════════ */}
      <div className="flex items-center justify-between px-0 py-[10px]">
        <div className="flex items-center gap-[8px] flex-wrap">
          {/* Macro category dropdown — permanent first filter */}
          <div ref={macroDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setMacroMenuOpen(!macroMenuOpen)}
              className="flex gap-[8px] items-center justify-center p-[12px] rounded-lg transition-colors hover:bg-[var(--surface-neutral-action)] text-content-body"
            >
              <span className="text-base font-semibold font-roboto tracking-[0.16px] leading-[20px] whitespace-nowrap">
                {CATEGORY_FILTERS.find((f) => f.value === categoryFilter)?.label ?? 'Tous'}
              </span>
              <ChevronDown
                size={20}
                style={{ color: 'var(--icon-neutral-default)' }}
                className={`transition-transform ${macroMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {macroMenuOpen && (
              <div className="absolute top-full left-0 mt-[4px] z-50">
                <Menu
                  items={CATEGORY_FILTERS.map((f) => ({
                    label: f.label,
                    onClick: () => {
                      setCategoryFilter(f.value);
                      setPage(0);
                      setMacroMenuOpen(false);
                    },
                  }))}
                  maxHeight={400}
                />
              </div>
            )}
          </div>

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

      {/* FilterPanel — ancré sous la barre */}
      {filterPanelOpen && (
        <FilterPanel
          criteria={DOCUMENT_FILTER_CRITERIA}
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
          3. Document list
          ═══════════════════════════════════════════════════════ */}
      <div className="flex flex-col gap-0">
        {paginated.map((doc) => (
          <ListDocument
            key={doc.id}
            title={doc.title}
            clientName={doc.clientName}
            propertyRef={doc.propertyRef}
            propertyType={doc.propertyType}
            surface={doc.surface}
            createdDate={doc.createdDate}
            validityStatus={doc.validityStatus}
            aiSuggestions={doc.aiSuggestions}
            onClick={() => handleDocumentClick(doc)}
            onView={() => handleDocumentClick(doc)}
          />
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════
          4. Pagination bar — ButtonSort + ButtonPagination
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

    </>
  );
}
