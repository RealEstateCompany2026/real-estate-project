'use client';

import { useFormContext } from 'react-hook-form';
import type { ClientCreateData } from '@/lib/validations/client';
import { CLIENT_STATUS_LABELS } from '@/types/client';
import type { ClientGender, ClientStatus } from '@/types/client';

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
        <div>
          <label htmlFor="firstName" className="block text-sm font-bold text-neutral-anthracite mb-1">
            Prénom <span className="text-semantic-destructive">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            {...register('firstName')}
            className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm text-neutral-anthracite placeholder:text-neutral-grey-bold focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
            placeholder="Prénom du client"
          />
          {errors.firstName && (
            <p className="text-xs text-semantic-destructive mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-bold text-neutral-anthracite mb-1">
            Nom <span className="text-semantic-destructive">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            {...register('lastName')}
            className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm text-neutral-anthracite placeholder:text-neutral-grey-bold focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
            placeholder="Nom du client"
          />
          {errors.lastName && (
            <p className="text-xs text-semantic-destructive mt-1">{errors.lastName.message}</p>
          )}
        </div>
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
              <button
                key={opt.value}
                type="button"
                onClick={() => toggleStatus(opt.value)}
                className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                  isSelected
                    ? 'border-primary bg-background-softBlue text-primary font-bold'
                    : 'border-neutral-grey-light text-neutral-grey-bold hover:border-primary/50'
                }`}
              >
                {opt.label}
              </button>
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
