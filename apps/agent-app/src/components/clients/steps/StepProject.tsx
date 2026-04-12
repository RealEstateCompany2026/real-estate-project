'use client';

import { useFormContext } from 'react-hook-form';
import type { ClientCreateData } from '@/lib/validations/client';
import { InputField } from '@real-estate/ui/input-field';

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
        <InputField
          label="Résumé du projet"
          id="searchCriteriaSummary"
          as="textarea"
          rows={5}
          {...register('searchCriteriaSummary')}
          placeholder="Ex : Recherche T3/T4 à Paris 11ème, budget 500-650k€, pour résidence principale..."
          maxLength={500}
          error={errors.searchCriteriaSummary?.message}
          helperText={`${summary.length}/500`}
          description="Décrivez brièvement le projet du client (achat, vente, location...). Les critères détaillés seront saisis dans le Mandat/Affaire (P10)."
        />
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
