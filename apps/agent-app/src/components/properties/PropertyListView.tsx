'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Building2, Download, Upload } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { DataTable, StatusBadge, EmptyState } from '@/components/ui';
import type { Column } from '@/components/ui/DataTable';
import type { PropertyListItem, PropertyStatus, DpeClass } from '@/types/property';
import {
  PROPERTY_TYPE_LABELS,
  PROPERTY_STATUS_LABELS,
  PROPERTY_STATUS_COLORS,
  DPE_COLORS,
} from '@/types/property';
import { formatPrice, formatSurface, formatRelativeDate } from '@/lib/utils/format';

// ---------------------------------------------------------------------------
// Filter chips
// ---------------------------------------------------------------------------

const STATUS_FILTERS: { label: string; value: PropertyStatus | 'ALL' }[] = [
  { label: 'Tous', value: 'ALL' },
  { label: 'À vendre', value: 'A_VENDRE' },
  { label: 'À louer', value: 'A_LOUER' },
  { label: 'Vendus', value: 'VENDU' },
  { label: 'Loués', value: 'LOUE' },
  { label: 'Brouillons', value: 'OFF_MARKET' },
];

// ---------------------------------------------------------------------------
// DPE mini-badge
// ---------------------------------------------------------------------------

function DpeBadge({ dpe }: { dpe: DpeClass | null }) {
  if (!dpe) return <span className="text-neutral-300">—</span>;
  return (
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded text-xs font-bold text-white"
      style={{ backgroundColor: DPE_COLORS[dpe] }}
    >
      {dpe}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Columns
// ---------------------------------------------------------------------------

const columns: Column<PropertyListItem>[] = [
  {
    key: 'address',
    label: 'Bien',
    sortable: true,
    className: 'min-w-[240px]',
    render: (row) => (
      <div className="min-w-0">
        <p className="font-medium text-neutral-anthracite truncate">
          {row.internalRef && (
            <span className="text-xs text-neutral-400 mr-1.5">{row.internalRef}</span>
          )}
          {PROPERTY_TYPE_LABELS[row.type]}
        </p>
        <p className="text-xs text-neutral-400 truncate">{row.address}</p>
      </div>
    ),
  },
  {
    key: 'status',
    label: 'Statut',
    render: (row) => (
      <StatusBadge
        label={PROPERTY_STATUS_LABELS[row.status]}
        color={PROPERTY_STATUS_COLORS[row.status]}
        variant="outlined"
        size="sm"
      />
    ),
  },
  {
    key: 'desiredSellingPrice',
    label: 'Prix',
    sortable: true,
    className: 'w-32',
    render: (row) => (
      <span className="font-medium text-neutral-700">
        {formatPrice(row.desiredSellingPrice)}
      </span>
    ),
  },
  {
    key: 'livingAreaSqm',
    label: 'Surface',
    sortable: true,
    className: 'w-24',
    render: (row) => (
      <span className="text-neutral-600">{formatSurface(row.livingAreaSqm)}</span>
    ),
  },
  {
    key: 'numberOfRooms',
    label: 'Pièces',
    sortable: true,
    className: 'w-20',
    render: (row) => (
      <span className="text-neutral-600">
        {row.numberOfRooms != null ? `${row.numberOfRooms} p.` : '—'}
      </span>
    ),
  },
  {
    key: 'dpeEnergyClass',
    label: 'DPE',
    className: 'w-16',
    render: (row) => <DpeBadge dpe={row.dpeEnergyClass} />,
  },
  {
    key: 'completionScore',
    label: 'Complétude',
    sortable: true,
    className: 'w-28',
    render: (row) => {
      const score = row.completionScore ?? 0;
      const color =
        score >= 75 ? '#22C55E' : score >= 50 ? '#EAB308' : score >= 25 ? '#F97316' : '#EF4444';
      return (
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${score}%`, backgroundColor: color }}
            />
          </div>
          <span className="text-xs font-medium" style={{ color }}>{score}%</span>
        </div>
      );
    },
  },
  {
    key: 'createdAt',
    label: 'Ajouté',
    sortable: true,
    className: 'w-32',
    render: (row) => (
      <span className="text-neutral-400 text-xs">{formatRelativeDate(row.createdAt)}</span>
    ),
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function PropertyListView() {
  const router = useRouter();
  const [properties, setProperties] = useState<PropertyListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<PropertyStatus | 'ALL'>('ALL');

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from('Property')
        .select('id, type, status, address, addressCity, livingAreaSqm, numberOfRooms, desiredSellingPrice, dpeEnergyClass, completionScore, internalRef, createdAt')
        .order('createdAt', { ascending: false });
      setProperties((data ?? []) as unknown as PropertyListItem[]);
      setIsLoading(false);
    }
    load();
  }, []);

  const filtered =
    statusFilter === 'ALL'
      ? properties
      : properties.filter((p) => p.status === statusFilter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-anthracite">Biens</h1>
          <p className="text-sm text-neutral-400 mt-0.5">
            {properties.length} bien{properties.length > 1 ? 's' : ''} au total
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors"
          >
            <Upload className="w-4 h-4" />
            Importer
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            Exporter
          </button>
          <button
            type="button"
            onClick={() => router.push('/properties/new')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nouveau bien
          </button>
        </div>
      </div>

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={filtered}
        isLoading={isLoading}
        searchableFields={['address', 'addressCity', 'internalRef', 'type']}
        searchPlaceholder="Rechercher un bien…"
        onRowClick={(row) => router.push(`/properties/${row.id}`)}
        pageSize={25}
        filters={
          <div className="flex items-center gap-1.5">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setStatusFilter(f.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                  statusFilter === f.value
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        }
        emptyState={
          <EmptyState
            icon={<Building2 className="w-6 h-6" />}
            title="Aucun bien"
            description="Ajoutez votre premier bien immobilier."
            action={
              <button
                type="button"
                onClick={() => router.push('/properties/new')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                <Plus className="w-4 h-4" />
                Nouveau bien
              </button>
            }
          />
        }
      />
    </div>
  );
}
