'use client';

import { useState, useMemo, type ReactNode } from 'react';
import { ChevronUp, ChevronDown, ChevronsUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@real-estate/ui/button';
import { SearchBar } from '@real-estate/ui/search-bar';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Column<T> {
  key: string;
  label: string;
  sortable?: boolean;
  /** Custom cell renderer — receives the full row */
  render?: (row: T) => ReactNode;
  /** Width hint (Tailwind class, e.g. "w-40") */
  className?: string;
}

export type SortDirection = 'asc' | 'desc';

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  /** Unique key extractor — defaults to (row as any).id */
  getRowKey?: (row: T) => string;
  /** Click handler for a row */
  onRowClick?: (row: T) => void;
  /** Search placeholder */
  searchPlaceholder?: string;
  /** Fields to search on (dot‑paths into T). If omitted, search is disabled. */
  searchableFields?: string[];
  /** Page size — 0 disables pagination */
  pageSize?: number;
  /** Slot for filter chips / buttons rendered between search and table */
  filters?: ReactNode;
  /** Empty state component */
  emptyState?: ReactNode;
  /** Loading state */
  isLoading?: boolean;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce((acc: unknown, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

function defaultCompare(a: unknown, b: unknown): number {
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return String(a).localeCompare(String(b), 'fr');
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * DataTable — Design System tokens:
 *   Search input:    border/default, surface/neutral-default, focus ring purple-500
 *   Table border:    border/default, surface/neutral-default
 *   Header row:      surface/neutral-action, text/body uppercase
 *   Sortable hover:  text/headings
 *   Row border:      border/divider
 *   Row hover:       surface/neutral-action (subtle)
 *   Pagination:      text/body, hover surface/neutral-action-hover
 *   Skeleton:        surface/neutral-action-hover
 */
export function DataTable<T>({
  columns,
  data,
  getRowKey,
  onRowClick,
  searchPlaceholder = 'Rechercher…',
  searchableFields,
  pageSize = 25,
  filters,
  emptyState,
  isLoading = false,
}: DataTableProps<T>) {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>('asc');
  const [page, setPage] = useState(0);

  // --- Search filtering ---
  const filtered = useMemo(() => {
    if (!search.trim() || !searchableFields?.length) return data;
    const q = search.toLowerCase();
    return data.filter((row) =>
      searchableFields.some((field) => {
        const val = getNestedValue(row, field);
        if (val == null) return false;
        if (Array.isArray(val)) return val.some((v) => String(v).toLowerCase().includes(q));
        return String(val).toLowerCase().includes(q);
      }),
    );
  }, [data, search, searchableFields]);

  // --- Sorting ---
  const sorted = useMemo(() => {
    if (!sortKey) return filtered;
    const copy = [...filtered];
    copy.sort((a, b) => {
      const va = getNestedValue(a, sortKey);
      const vb = getNestedValue(b, sortKey);
      const cmp = defaultCompare(va, vb);
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return copy;
  }, [filtered, sortKey, sortDir]);

  // --- Pagination ---
  const totalPages = pageSize > 0 ? Math.max(1, Math.ceil(sorted.length / pageSize)) : 1;
  const paginated = pageSize > 0 ? sorted.slice(page * pageSize, (page + 1) * pageSize) : sorted;

  // Reset page when filters/search change
  useMemo(() => setPage(0), [search, data.length]);

  function handleSort(key: string) {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  const extractKey = getRowKey ?? ((row: T) => (row as Record<string, unknown>).id as string);

  // --- Loading skeleton ---
  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-12 bg-surface-neutral-action-hover rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search + filters bar */}
      {(searchableFields?.length || filters) && (
        <div className="flex flex-wrap items-center gap-3">
          {searchableFields?.length ? (
            <div className="flex-1 min-w-[220px] max-w-sm">
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder={searchPlaceholder}
                size="sm"
              />
            </div>
          ) : null}
          {filters}
        </div>
      )}

      {/* Table */}
      {paginated.length === 0 ? (
        emptyState ?? (
          <div className="py-16 text-center text-sm text-content-subtle">
            Aucun résultat
          </div>
        )
      ) : (
        <div className="overflow-x-auto rounded-xl border border-edge-default bg-surface-neutral-default">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-edge-subtle bg-surface-neutral-action">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`px-4 py-3 text-left text-xs font-bold text-content-body uppercase tracking-wider select-none ${col.className ?? ''} ${col.sortable ? 'cursor-pointer hover:text-content-headings' : ''}`}
                    onClick={col.sortable ? () => handleSort(col.key) : undefined}
                  >
                    <span className="inline-flex items-center gap-1">
                      {col.label}
                      {col.sortable && (
                        sortKey === col.key
                          ? sortDir === 'asc'
                            ? <ChevronUp className="w-3.5 h-3.5" />
                            : <ChevronDown className="w-3.5 h-3.5" />
                          : <ChevronsUpDown className="w-3.5 h-3.5 opacity-30" />
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginated.map((row) => (
                <tr
                  key={extractKey(row)}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                  className={`border-b border-edge-divider last:border-0 transition-colors ${onRowClick ? 'cursor-pointer hover:bg-surface-neutral-action' : ''}`}
                >
                  {columns.map((col) => (
                    <td key={col.key} className={`px-4 py-3 ${col.className ?? ''}`}>
                      {col.render
                        ? col.render(row)
                        : String(getNestedValue(row, col.key) ?? '—')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {pageSize > 0 && totalPages > 1 && (
        <div className="flex items-center justify-between text-sm text-content-body">
          <span>
            {sorted.length} résultat{sorted.length > 1 ? 's' : ''}
            {search && ` pour « ${search} »`}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              disabled={page === 0}
              onClick={() => setPage((p) => p - 1)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="px-2 font-medium">
              {page + 1} / {totalPages}
            </span>
            <Button
              variant="ghost"
              size="icon"
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => p + 1)}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
