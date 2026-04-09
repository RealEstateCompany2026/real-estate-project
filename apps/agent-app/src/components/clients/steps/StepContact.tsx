'use client';

import { useFormContext } from 'react-hook-form';
import type { ClientCreateData } from '@/lib/validations/client';
import { AddressAutocomplete } from '@/components/ui/AddressAutocomplete';
import { useDuplicateCheck } from '@/hooks/useDuplicateCheck';
import { DuplicateAlert } from '@/components/ui/DuplicateAlert';

/**
 * Étape 2 — Coordonnées du client (CLI-03).
 * Champs : email, téléphone, adresse (autocomplete BAN).
 * Déclenche la détection de doublons sur email/téléphone.
 */
export function StepContact() {
  const { register, formState: { errors }, setValue, watch } = useFormContext<ClientCreateData>();
  const { matches, checkDuplicates, dismiss } = useDuplicateCheck();

  const firstName = watch('firstName');
  const lastName = watch('lastName');

  function handleEmailBlur(e: React.FocusEvent<HTMLInputElement>) {
    const email = e.target.value;
    if (email) {
      checkDuplicates({ email, firstName, lastName });
    }
  }

  function handlePhoneBlur(e: React.FocusEvent<HTMLInputElement>) {
    const phone = e.target.value;
    if (phone) {
      checkDuplicates({ phone, firstName, lastName });
    }
  }

  return (
    <div className="space-y-6">
      {/* Alerte doublons */}
      <DuplicateAlert matches={matches} onDismiss={dismiss} />

      {/* Email principal */}
      <div>
        <label htmlFor="primaryEmail" className="block text-sm font-bold text-neutral-anthracite mb-1">
          Email <span className="text-semantic-destructive">*</span>
        </label>
        <input
          id="primaryEmail"
          type="email"
          {...register('primaryEmail')}
          onBlur={handleEmailBlur}
          className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm text-neutral-anthracite placeholder:text-neutral-grey-bold focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
          placeholder="email@exemple.com"
        />
        {errors.primaryEmail && (
          <p className="text-xs text-semantic-destructive mt-1">{errors.primaryEmail.message}</p>
        )}
      </div>

      {/* Email secondaire */}
      <div>
        <label htmlFor="secondaryEmail" className="block text-sm font-bold text-neutral-anthracite mb-1">
          Email secondaire
        </label>
        <input
          id="secondaryEmail"
          type="email"
          {...register('secondaryEmail')}
          className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm text-neutral-anthracite placeholder:text-neutral-grey-bold focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
          placeholder="email-secondaire@exemple.com"
        />
        {errors.secondaryEmail && (
          <p className="text-xs text-semantic-destructive mt-1">{errors.secondaryEmail.message}</p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="mobilePhone" className="block text-sm font-bold text-neutral-anthracite mb-1">
          Téléphone mobile
        </label>
        <input
          id="mobilePhone"
          type="tel"
          {...register('mobilePhone')}
          onBlur={handlePhoneBlur}
          className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm text-neutral-anthracite placeholder:text-neutral-grey-bold focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors"
          placeholder="06 12 34 56 78"
        />
        {errors.mobilePhone && (
          <p className="text-xs text-semantic-destructive mt-1">{errors.mobilePhone.message}</p>
        )}
      </div>

      {/* Adresse */}
      <div>
        <label className="block text-sm font-bold text-neutral-anthracite mb-1">
          Adresse
        </label>
        <AddressAutocomplete
          value={watch('address') ?? ''}
          onChange={(addr) => {
            setValue('address', addr.label, { shouldValidate: true });
          }}
          onRawChange={(text) => setValue('address', text)}
          placeholder="Rechercher l'adresse du client..."
        />
      </div>
    </div>
  );
}
