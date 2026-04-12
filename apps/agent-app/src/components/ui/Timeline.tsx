'use client';

import { type ReactNode } from 'react';
import { formatRelativeDate } from '@/lib/utils/format';

interface TimelineEvent {
  id: string;
  icon: ReactNode;
  title: string;
  description?: string;
  date: string;
  agentName?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  maxVisible?: number;
  onShowAll?: () => void;
}

/**
 * Composant Timeline pour l'historique des événements (FIC-06, FIB-09).
 * Affiche les N derniers événements avec une option "Voir tout".
 */
export function Timeline({ events, maxVisible = 3, onShowAll }: TimelineProps) {
  const visible = events.slice(0, maxVisible);
  const hasMore = events.length > maxVisible;

  if (events.length === 0) {
    return (
      <p className="text-sm text-content-caption italic py-4">
        Aucun événement pour le moment.
      </p>
    );
  }

  return (
    <div className="space-y-0">
      {visible.map((event, i) => (
        <div key={event.id} className="flex gap-3">
          {/* Ligne verticale + icône */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-information text-content-branded-action shrink-0">
              {event.icon}
            </div>
            {i < visible.length - 1 && (
              <div className="w-px flex-1 bg-surface-neutral-action min-h-[24px]" />
            )}
          </div>

          {/* Contenu */}
          <div className="pb-4 flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium text-content-headings truncate">{event.title}</p>
              <time className="text-xs text-content-caption shrink-0">
                {formatRelativeDate(event.date)}
              </time>
            </div>
            {event.description && (
              <p className="text-xs text-content-caption mt-0.5">{event.description}</p>
            )}
            {event.agentName && (
              <p className="text-xs text-content-caption mt-0.5">par {event.agentName}</p>
            )}
          </div>
        </div>
      ))}

      {hasMore && onShowAll && (
        <button
          type="button"
          onClick={onShowAll}
          className="text-sm text-content-branded-action font-bold hover:underline ml-11"
        >
          Voir tout ({events.length})
        </button>
      )}
    </div>
  );
}
