'use client';

import { useFormContext, Controller } from 'react-hook-form';
import type { PropertyCreateData } from '@/lib/validations/property';
import { PROPERTY_CONDITION_LABELS } from '@/types/property';
import type { PropertyCondition } from '@/types/property';
import { InputField } from '@real-estate/ui/input-field';
import { Chip } from '@real-estate/ui/chip';

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
  const { register, watch, setValue, formState: { errors }, control } = useFormContext<PropertyCreateData>();
  const selectedCondition = watch('condition');

  return (
    <div className="space-y-6">
      <p className="text-xs text-content-caption">
        Ces informations sont facultatives. Vous pourrez les compléter plus tard depuis la fiche du bien.
      </p>

      <div className="grid grid-cols-3 gap-4">
        <Controller
          name="floorLevel"
          control={control}
          render={({ field: { value, ...field } }) => (
            <InputField
              label="Étage"
              id="floorLevel"
              type="number"
              {...field}
              value={value ? String(value) : ''}
              placeholder="3"
            />
          )}
        />
        <Controller
          name="numberOfFloors"
          control={control}
          render={({ field: { value, ...field } }) => (
            <InputField
              label="Nombre de niveaux"
              id="numberOfFloors"
              type="number"
              {...field}
              value={value ? String(value) : ''}
              placeholder="1"
            />
          )}
        />
        <div>
          <Controller
            name="constructionYear"
            control={control}
            render={({ field: { value, ...field } }) => (
              <InputField
                label="Année de construction"
                id="constructionYear"
                type="number"
                {...field}
                value={value ? String(value) : ''}
                placeholder="2005"
                error={!!errors.constructionYear?.message}
              />
            )}
          />
          {errors.constructionYear?.message && <p className="text-xs text-semantic-destructive mt-0.5">{errors.constructionYear.message}</p>}
        </div>
      </div>

      {/* État général */}
      <div>
        <label className="block text-sm font-bold text-content-headings mb-2">
          État général
        </label>
        <div className="flex flex-wrap gap-2">
          {CONDITION_OPTIONS.map((opt) => (
            <Chip
              key={opt.value}
              label={opt.label}
              onClick={() => setValue('condition', opt.value, { shouldValidate: true })}
              selected={selectedCondition === opt.value}
              variant={selectedCondition === opt.value ? 'filled' : 'outlined'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
