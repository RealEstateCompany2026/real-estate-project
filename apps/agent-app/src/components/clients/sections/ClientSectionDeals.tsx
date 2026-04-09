'use client';

import { useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import type { DealListItem } from '@/types/deal';
import { DEAL_TYPE_LABELS, DEAL_STATUS_LABELS, PIPELINE_STAGE_LABELS } from '@/types/deal';
import type { DealType, DealStatus, PipelineStage } from '@/types/deal';
import { formatPrice, formatDate } from '@/lib/utils/format';
import { EmptyState } from '@/components/ui/EmptyState';

interface ClientSectionDealsProps {
  clientId: string;
}

/**
 * Section Affaires/Mandats de la fiche client (FIC-07).
 * Affiche un aperçu des affaires liées au client.
 * Le détail complet est dans P10 (Mandat/Affaire).
 */
export function ClientSectionDeals({ clientId }: ClientSectionDealsProps) {
  const [deals, setDeals] = useState<DealListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from('Deal')
        .select('id, title, type, status, pipelineStage, amount, createdAt')
        .eq('clientId', clientId)
        .order('createdAt', { ascending: false })
        .limit(10);
      setDeals((data ?? []) as DealListItem[]);
      setIsLoading(false);
    }
    load();
  }, [clientId]);

  if (isLoading) {
    return <div className="h-20 flex items-center justify-center text-sm text-neutral-grey-bold">Chargement...</div>;
  }

  if (deals.length === 0) {
    return (
      <EmptyState
        icon={<Briefcase className="w-6 h-6" />}
        title="Aucune affaire"
        description="Les mandats et affaires liés à ce client apparaîtront ici."
      />
    );
  }

  return (
    <div className="space-y-2">
      {deals.map((deal) => (
        <div
          key={deal.id}
          className="flex items-center justify-between px-3 py-3 rounded-lg border border-neutral-grey-light hover:bg-background-subtle transition-colors"
        >
          <div>
            <p className="text-sm font-medium text-neutral-anthracite">{deal.title}</p>
            <p className="text-xs text-neutral-grey-bold mt-0.5">
              {DEAL_TYPE_LABELS[deal.type as DealType]} · {DEAL_STATUS_LABELS[deal.status as DealStatus]}
              {deal.pipelineStage && ` · ${PIPELINE_STAGE_LABELS[deal.pipelineStage as PipelineStage]}`}
            </p>
          </div>
          <div className="text-right">
            {deal.amount != null && (
              <p className="text-sm font-bold text-neutral-anthracite">{formatPrice(deal.amount)}</p>
            )}
            <p className="text-xs text-neutral-grey-bold">{formatDate(deal.createdAt)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
