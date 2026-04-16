'use client';

import { useFormContext } from 'react-hook-form';
import type { ClientCreateData } from '@/lib/validations/client';
import { InputFieldOutlined } from '@real-estate/ui/input-field-outlined';

/**
 * Étape 3 — Résumé du projet (CLI-05).
 * Champ texte libre pour résumer le projet du client.
 * Le détail complet (critères de recherche, budget, zones) est géré dans Deal/P10.
 */
export function StepProject() {
  const { register, formState: { errors }, watch } = useFormContext<ClientCreateData>();
  const summary = watch('searchCriteriaSummary') ?? '';

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-col gap-[12px]">
          <label className="text-sm font-bold text-content-headings" htmlFor="searchCriteriaSummary">
            Résumé du projet
          </label>
          <textarea
            id="searchCriteriaSummary"
            rows={5}
            {...register('searchCriteriaSummary')}
            placeholder="Ex : Recherche T3/T4 à Paris 11ème, budget 500-650k€, pour résidence principale..."
            maxLength={500}
            className="w-full px-4 py-3 rounded-lg border border-edge-default bg-surface-neutral-default text-content-body placeholder:text-content-placeholder focus:outline-none focus:ring-2 focus:ring-[var(--border-branded-default)] text-sm"
          />
          {errors.searchCriteriaSummary?.message && (
            <span className="text-xs text-content-error">{errors.searchCriteriaSummary.message}</span>
          )}
          <div className="flex items-center justify-between">
            <span className="text-xs text-content-caption">
              Décrivez brièvement le projet du client (achat, vente, location...). Les critères détaillés seront saisis dans le Mandat/Affaire (P10).
            </span>
            <span className="text-xs text-content-caption">{summary.length}/500</span>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-surface-information border border-edge-branded-default">
        <p className="text-xs text-content-branded-action">
          <strong>Astuce :</strong> Ce résumé est un aide-mémoire rapide. Pour un suivi structuré avec
          critères de recherche, budget et zones géographiques, créez un Mandat depuis la fiche client
          après sa création.
        </p>
      </div>
    </div>
  );
}
