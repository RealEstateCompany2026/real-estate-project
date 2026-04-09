'use client';

import { useFormContext } from 'react-hook-form';
import type { PropertyCreateData } from '@/lib/validations/property';
import { PROPERTY_CONDITION_LABELS } from '@/types/property';
import type { PropertyCondition } from '@/types/property';

const CONDITION_OPTIONS: { value: PropertyCondition; label: string }[] = [
  { value: 'NEUF', label: PROPERTY_CONDITION_LABELS.NEUF },
  { value: 'RENOVE', label: PROPERTY_CONDITION_LABELS.RENOVE },
  { value: 'BON_ETAT', label: PROPERTY_CONDITION_LABELS.BON_ETAT },
  { value: 'A_RENOVER', label: PROPERTY_CONDITION_LABELS.A_RENOVER },
  { value: 'ANCIEN', label: PROPERTY_CONDITION_LABELS.ANCIEN },
];

/**
 * Étape 3 — Description du bien (BIE-03).
 * Champs facultatifs : étage, niveaux, année, état général.
 */
export function StepPropertyDetails() {
  const { register, watch, setValue, formState: { errors } } = useFormContext<PropertyCreateData>();
  const selectedCondition = watch('condition');

  return (
    <div className="space-y-6">
      <p className="text-xs text-neutral-grey-bold">
        Ces informations sont facultatives. Vous pourrez les compléter plus tard depuis la fiche du bien.
      </p>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="floorLevel" className="block text-sm font-bold text-neutral-anthracite mb-1">
            Étage
          </label>
          <input
            id="floorLevel"
            type="number"
            min={0}
            {...register('floorLevel', { valueAsNumber: true })}
            className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
            placeholder="3"
          />
        </div>
        <div>
          <label htmlFor="numberOfFloors" className="block text-sm font-bold text-neutral-anthracite mb-1">
            Nombre de niveaux
          </label>
          <input
            id="numberOfFloors"
            type="number"
            min={0}
            {...register('numberOfFloors', { valueAsNumber: true })}
            className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
            placeholder="1"
          />
        </div>
        <div>
          <label htmlFor="constructionYear" className="block text-sm font-bold text-neutral-anthracite mb-1">
            Année de construction
          </label>
          <input
            id="constructionYear"
            type="number"
            min={1800}
            max={new Date().getFullYear() + 2}
            {...register('constructionYear', { valueAsNumber: true })}
            className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none"
            placeholder="2005"
          />
          {errors.constructionYear && (
            <p className="text-xs text-semantic-destructive mt-1">{errors.constructionYear.message}</p>
          )}
        </div>
      </div>

      {/* État général */}
      <div>
        <label className="block text-sm font-bold text-neutral-anthracite mb-2">
          État général
        </label>
        <div className="flex flex-wrap gap-2">
          {CONDITION_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setValue('condition', opt.value, { shouldValidate: true })}
              className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                selectedCondition === opt.value
                  ? 'border-primary bg-background-softBlue text-primary font-bold'
                  : 'border-neutral-grey-light text-neutral-grey-bold hover:border-primary/50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
