'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Users, Download, Upload } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { DataTable, Avatar, StatusBadge, EmptyState } from '@/components/ui';
import type { Column } from '@/components/ui/DataTable';
import type { ClientListItem, ClientStatus } from '@/types/client';
import { CLIENT_STATUS_LABELS, CLIENT_STATUS_COLORS } from '@/types/client';
import { formatRelativeDate } from '@/lib/utils/format';

// ---------------------------------------------------------------------------
// Filter chips
// ---------------------------------------------------------------------------

const STATUS_FILTERS: { label: string; value: ClientStatus | 'ALL' }[] = [
  { label: 'Tous', value: 'ALL' },
  { label: 'Propriétaires', value: 'PROPRIETAIRE' },
  { label: 'Acquéreurs', value: 'ACQUEREUR' },
  { label: 'Bailleurs', value: 'BAILLEUR' },
  { label: 'Locataires', value: 'LOCATAIRE' },
];

// ---------------------------------------------------------------------------
// Columns
// ---------------------------------------------------------------------------

const columns: Column<ClientListItem>[] = [
  {
    key: 'lastName',
    label: 'Client',
    sortable: true,
    className: 'min-w-[200px]',
    render: (row) => (
      <div className="flex items-center gap-3">
        <Avatar firstName={row.firstName} lastName={row.lastName} size="sm" />
        <div className="min-w-0">
          <p className="font-medium text-neutral-anthracite truncate">
            {row.firstName} {row.lastName}
          </p>
          <p className="text-xs text-neutral-400 truncate">{row.primaryEmail}</p>
        </div>
      </div>
    ),
  },
  {
    key: 'status',
    label: 'Statut',
    render: (row) => (
      <div className="flex flex-wrap gap-1">
        {row.status.map((s) => (
          <StatusBadge
            key={s}
            label={CLIENT_STATUS_LABELS[s]}
            color={CLIENT_STATUS_COLORS[s]}
            variant="outlined"
            size="sm"
          />
        ))}
      </div>
    ),
  },
  {
    key: 'mobilePhone',
    label: 'Téléphone',
    render: (row) => (
      <span className="text-neutral-600">{row.mobilePhone ?? '—'}</span>
    ),
  },
  {
    key: 'completionScore',
    label: 'Complétude',
    sortable: true,
    className: 'w-28',
    render: (row) => {
      const score = row.completionScore;
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

export function ClientListView() {
  const router = useRouter();
  const [clients, setClients] = useState<ClientListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<ClientStatus | 'ALL'>('ALL');

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from('Client')
        .select('id, firstName, lastName, status, primaryEmail, mobilePhone, agentId, completionScore, isActive, createdAt')
        .eq('isActive', true)
        .order('createdAt', { ascending: false });
      setClients((data ?? []) as unknown as ClientListItem[]);
      setIsLoading(false);
    }
    load();
  }, []);

  // Apply local status filter
  const filtered =
    statusFilter === 'ALL'
      ? clients
      : clients.filter((c) => c.status.includes(statusFilter));

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-anthracite">Clients</h1>
          <p className="text-sm text-neutral-400 mt-0.5">
            {clients.length} client{clients.length > 1 ? 's' : ''} actif{clients.length > 1 ? 's' : ''}
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
            onClick={() => router.push('/clients/new')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nouveau client
          </button>
        </div>
      </div>

      {/* DataTable */}
      <DataTable
        columns={columns}
        data={filtered}
        isLoading={isLoading}
        searchableFields={['firstName', 'lastName', 'primaryEmail', 'mobilePhone']}
        searchPlaceholder="Rechercher un client…"
        onRowClick={(row) => router.push(`/clients/${row.id}`)}
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
            icon={<Users className="w-6 h-6" />}
            title="Aucun client"
            description="Ajoutez votre premier client pour commencer."
            action={
              <button
                type="button"
                onClick={() => router.push('/clients/new')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                <Plus className="w-4 h-4" />
                Nouveau client
              </button>
            }
          />
        }
      />
    </div>
  );
}
