'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Home, MapPin } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import type { PropertyListItem } from '@/types/property';
import { PROPERTY_TYPE_LABELS, PROPERTY_STATUS_LABELS, PROPERTY_STATUS_COLORS } from '@/types/property';
import type { PropertyType, PropertyStatus } from '@/types/property';
import { formatPrice, formatSurface } from '@/lib/utils/format';
import { Button } from '@real-estate/ui/button';
import { Spinner } from '@real-estate/ui/spinner';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { EmptyState } from '@/components/ui/EmptyState';

interface ClientSectionPropertiesProps {
  clientId: string;
}

/**
 * Section Biens de la fiche client (FIC-05).
 * Affiche les biens du client avec lien vers la fiche bien.
 */
export function ClientSectionProperties({ clientId }: ClientSectionPropertiesProps) {
  const [properties, setProperties] = useState<PropertyListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from('Property')
        .select('id, type, status, address, addressCity, livingAreaSqm, numberOfRooms, desiredSellingPrice, dpeEnergyClass, completionScore, internalRef, createdAt')
        .eq('clientId', clientId)
        .order('createdAt', { ascending: false });
      setProperties((data ?? []) as PropertyListItem[]);
      setIsLoading(false);
    }
    load();
  }, [clientId]);

  if (isLoading) {
    return <div className="h-20 flex items-center justify-center"><Spinner /></div>;
  }

  if (properties.length === 0) {
    return (
      <EmptyState
        icon={<Home className="w-6 h-6" />}
        title="Aucun bien"
        description="Les biens associés à ce client apparaîtront ici."
        action={
          <Button
            as={Link}
            href="/properties/new"
          >
            Ajouter un bien
          </Button>
        }
      />
    );
  }

  const visible = showAll ? properties : properties.slice(0, 3);

  return (
    <div className="space-y-2">
      {visible.map((prop) => (
        <Link
          key={prop.id}
          href={`/properties/${prop.id}`}
          className="flex items-center justify-between px-3 py-3 rounded-lg border border-neutral-grey-light hover:bg-background-subtle transition-colors"
        >
          <div className="flex items-start gap-3 min-w-0">
            <Home className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-neutral-anthracite">
                  {PROPERTY_TYPE_LABELS[prop.type as PropertyType]}
                </span>
                {prop.internalRef && (
                  <span className="text-xs text-neutral-grey-bold">{prop.internalRef}</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-neutral-grey-bold mt-0.5">
                <MapPin className="w-3 h-3" />
                <span className="truncate">{prop.addressCity ?? prop.address}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <p className="text-sm font-bold text-neutral-anthracite">{formatPrice(prop.desiredSellingPrice)}</p>
              <p className="text-xs text-neutral-grey-bold">{formatSurface(prop.livingAreaSqm)}</p>
            </div>
            <StatusBadge
              label={PROPERTY_STATUS_LABELS[prop.status as PropertyStatus]}
              color={PROPERTY_STATUS_COLORS[prop.status as PropertyStatus]}
            />
          </div>
        </Link>
      ))}

      {!showAll && properties.length > 3 && (
        <Button
          variant="link"
          onClick={() => setShowAll(true)}
        >
          Voir tout ({properties.length})
        </Button>
      )}
    </div>
  );
}
