'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { EventListItem } from '@/types/event';
import { EVENT_TYPE_ICONS } from '@/types/event';
import { Timeline } from '@/components/ui/Timeline';
import * as LucideIcons from 'lucide-react';

interface PropertySectionTimelineProps {
  propertyId: string;
}

function getIcon(type: string) {
  const iconName = EVENT_TYPE_ICONS[type] || 'Circle';
  const Icon = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
  return Icon ? <Icon className="w-4 h-4" /> : <LucideIcons.Circle className="w-4 h-4" />;
}

/**
 * Section Timeline/Historique de la fiche bien (FIB-09).
 */
export function PropertySectionTimeline({ propertyId }: PropertySectionTimelineProps) {
  const [events, setEvents] = useState<EventListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from('Event')
        .select('id, type, title, eventDate, agentId, createdAt')
        .eq('propertyId', propertyId)
        .order('createdAt', { ascending: false })
        .limit(50);
      setEvents((data ?? []) as EventListItem[]);
      setIsLoading(false);
    }
    load();
  }, [propertyId]);

  if (isLoading) {
    return <div className="h-20 flex items-center justify-center text-sm text-neutral-grey-bold">Chargement...</div>;
  }

  const timelineEvents = events.map((e) => ({
    id: e.id,
    icon: getIcon(e.type),
    title: e.title,
    date: e.eventDate ?? e.createdAt,
  }));

  return (
    <Timeline
      events={timelineEvents}
      maxVisible={showAll ? timelineEvents.length : 3}
      onShowAll={showAll ? undefined : () => setShowAll(true)}
    />
  );
}
