'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { User, ExternalLink } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { Avatar } from '@/components/ui/Avatar';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { CLIENT_STATUS_LABELS, CLIENT_STATUS_COLORS } from '@/types/client';
import type { ClientStatus } from '@/types/client';
import { EmptyState } from '@/components/ui/EmptyState';

interface ClientInfo {
  id: string;
  firstName: string;
  lastName: string;
  primaryEmail: string;
  mobilePhone: string | null;
  status: ClientStatus[];
}

interface PropertySectionOwnerProps {
  clientId: string | null;
}

/**
 * Section Propriétaire de la fiche bien (FIB-07).
 * Affiche les informations du client propriétaire avec lien vers sa fiche.
 */
export function PropertySectionOwner({ clientId }: PropertySectionOwnerProps) {
  const [client, setClient] = useState<ClientInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!clientId) {
      setIsLoading(false);
      return;
    }
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from('Client')
        .select('id, firstName, lastName, primaryEmail, mobilePhone, status')
        .eq('id', clientId)
        .single();
      setClient(data as ClientInfo | null);
      setIsLoading(false);
    }
    load();
  }, [clientId]);

  if (isLoading) {
    return <div className="h-20 flex items-center justify-center text-sm text-neutral-grey-bold">Chargement...</div>;
  }

  if (!client) {
    return (
      <EmptyState
        icon={<User className="w-6 h-6" />}
        title="Aucun propriétaire"
        description="Ce bien n'est associé à aucun client."
      />
    );
  }

  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-neutral-grey-light">
      <div className="flex items-center gap-3">
        <Avatar firstName={client.firstName} lastName={client.lastName} />
        <div>
          <p className="text-sm font-bold text-neutral-anthracite">
            {client.firstName} {client.lastName}
          </p>
          <p className="text-xs text-neutral-grey-bold">{client.primaryEmail}</p>
          {client.mobilePhone && (
            <p className="text-xs text-neutral-grey-bold">{client.mobilePhone}</p>
          )}
          <div className="flex gap-1 mt-1">
            {client.status?.map((s) => (
              <StatusBadge
                key={s}
                label={CLIENT_STATUS_LABELS[s]}
                color={CLIENT_STATUS_COLORS[s]}
                size="sm"
              />
            ))}
          </div>
        </div>
      </div>
      <Link
        href={`/clients/${client.id}`}
        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-primary bg-background-softBlue hover:bg-primary hover:text-white transition-colors"
      >
        Voir la fiche
        <ExternalLink className="w-3 h-3" />
      </Link>
    </div>
  );
}
