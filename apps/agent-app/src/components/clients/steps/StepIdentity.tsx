'use client';

import { useFormContext } from 'react-hook-form';
import type { ClientCreateData } from '@/lib/validations/client';
import { CLIENT_STATUS_LABELS } from '@/types/client';
import type { ClientGender, ClientStatus } from '@/types/client';
import { InputField } from '@real-estate/ui/input-field';
import { Chip } from '@real-estate/ui/chip';

const GENDER_OPTIONS: { value: ClientGender; label: string }[] = [
  { value: 'HOMME', label: 'M.' },
  { value: 'FEMME', label: 'Mme' },
  { value: 'AUTRE', label: 'Autre' },
];

const STATUS_OPTIONS: { value: ClientStatus; label: string }[] = [
  { value: 'PROPRIETAIRE', label: CLIENT_STATUS_LABELS.PROPRIETAIRE },
  { value: 'ACQUEREUR', label: CLIENT_STATUS_LABELS.ACQUEREUR },
  { value: 'BAILLEUR', label: CLIENT_STATUS_LABELS.BAILLEUR },
  { value: 'LOCATAIRE', label: CLIENT_STATUS_LABELS.LOCATAIRE },
];

/**
 * Étape 1 — Identité du client (CLI-02).
 * Champs : civilité, prénom, nom, type(s) de client.
 */
export function StepIdentity() {
  const { register, formState: { errors }, watch, setValue } = useFormContext<ClientCreateData>();
  const selectedStatus = watch('status') ?? [];

  function toggleStatus(status: ClientStatus) {
    const current = selectedStatus;
    if (current.includes(status)) {
      setValue('status', current.filter((s) => s !== status), { shouldValidate: true });
    } else {
      setValue('status', [...current, status], { shouldValidate: true });
    }
  }

  return (
    <div className="space-y-6">
      {/* Civilité */}
      <div>
        <label className="block text-sm font-bold text-neutral-anthracite mb-2">Civilité</label>
        <div className="flex gap-2">
          {GENDER_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center justify-center px-4 py-2 rounded-lg border cursor-pointer transition-colors text-sm ${
                watch('gender') === opt.value
                  ? 'border-primary bg-background-softBlue text-primary font-bold'
                  : 'border-neutral-grey-light text-neutral-grey-bold hover:border-primary/50'
              }`}
            >
              <input
                type="radio"
                value={opt.value}
                {...register('gender')}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {/* Prénom & Nom */}
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Prénom"
          id="firstName"
          type="text"
          {...register('firstName')}
          placeholder="Prénom du client"
          error={errors.firstName?.message}
          required
        />
        <InputField
          label="Nom"
          id="lastName"
          type="text"
          {...register('lastName')}
          placeholder="Nom du client"
          error={errors.lastName?.message}
          required
        />
      </div>

      {/* Type(s) de client */}
      <div>
        <label className="block text-sm font-bold text-neutral-anthracite mb-2">
          Type de client <span className="text-semantic-destructive">*</span>
        </label>
        <p className="text-xs text-neutral-grey-bold mb-2">
          Un client peut avoir plusieurs rôles (ex : propriétaire et acquéreur).
        </p>
        <div className="flex flex-wrap gap-2">
          {STATUS_OPTIONS.map((opt) => {
            const isSelected = selectedStatus.includes(opt.value);
            return (
              <Chip
                key={opt.value}
                label={opt.label}
                onClick={() => toggleStatus(opt.value)}
                selected={isSelected}
                variant={isSelected ? 'filled' : 'outlined'}
              />
            );
          })}
        </div>
        {errors.status && (
          <p className="text-xs text-semantic-destructive mt-1">{errors.status.message}</p>
        )}
      </div>
    </div>
  );
}
