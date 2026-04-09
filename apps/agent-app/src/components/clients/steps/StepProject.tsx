'use client';

import { useFormContext } from 'react-hook-form';
import type { ClientCreateData } from '@/lib/validations/client';

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
        <label htmlFor="searchCriteriaSummary" className="block text-sm font-bold text-neutral-anthracite mb-1">
          Résumé du projet
        </label>
        <p className="text-xs text-neutral-grey-bold mb-3">
          Décrivez brièvement le projet du client (achat, vente, location...). Les critères détaillés
          seront saisis dans le Mandat/Affaire (P10).
        </p>
        <textarea
          id="searchCriteriaSummary"
          {...register('searchCriteriaSummary')}
          rows={5}
          className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm text-neutral-anthracite placeholder:text-neutral-grey-bold focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors resize-y"
          placeholder="Ex : Recherche T3/T4 à Paris 11ème, budget 500-650k€, pour résidence principale..."
          maxLength={500}
        />
        <div className="flex justify-between mt-1">
          {errors.searchCriteriaSummary && (
            <p className="text-xs text-semantic-destructive">{errors.searchCriteriaSummary.message}</p>
          )}
          <p className="text-xs text-neutral-grey-bold ml-auto">{summary.length}/500</p>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-background-softBlue/50 border border-primary/10">
        <p className="text-xs text-primary">
          <strong>Astuce :</strong> Ce résumé est un aide-mémoire rapide. Pour un suivi structuré avec
          critères de recherche, budget et zones géographiques, créez un Mandat depuis la fiche client
          après sa création.
        </p>
      </div>
    </div>
  );
}
