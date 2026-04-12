'use client';

import { AlertTriangle, Merge, X } from 'lucide-react';

interface DuplicateMatch {
  id: string;
  firstName: string;
  lastName: string;
  primaryEmail: string;
  mobilePhone: string | null;
}

interface DuplicateAlertProps {
  matches: DuplicateMatch[];
  onMerge?: (matchId: string) => void;
  onDismiss?: () => void;
}

/**
 * Alerte de détection de doublon (CLI-06, FIC-02).
 * Affiche les correspondances potentielles avec option de fusion.
 */
export function DuplicateAlert({ matches, onMerge, onDismiss }: DuplicateAlertProps) {
  if (matches.length === 0) return null;

  return (
    <div className="rounded-lg border border-semantic-warning/30 bg-semantic-warning/5 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-semantic-warning shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-content-headings">
              {matches.length === 1 ? 'Doublon potentiel détecté' : `${matches.length} doublons potentiels détectés`}
            </p>
            <ul className="mt-2 space-y-2">
              {matches.map((m) => (
                <li key={m.id} className="flex items-center justify-between gap-4">
                  <div className="text-sm text-content-caption">
                    <span className="font-medium text-content-headings">
                      {m.firstName} {m.lastName}
                    </span>
                    {' — '}
                    {m.primaryEmail}
                    {m.mobilePhone && ` — ${m.mobilePhone}`}
                  </div>
                  {onMerge && (
                    <button
                      type="button"
                      onClick={() => onMerge(m.id)}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold text-content-branded-action bg-surface-information hover:bg-surface-branded-action hover:text-white transition-colors"
                    >
                      <Merge className="w-3 h-3" />
                      Fusionner
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className="p-1 rounded-md hover:bg-surface-neutral-action transition-colors"
            aria-label="Fermer l'alerte"
          >
            <X className="w-4 h-4 text-content-caption" />
          </button>
        )}
      </div>
    </div>
  );
}
