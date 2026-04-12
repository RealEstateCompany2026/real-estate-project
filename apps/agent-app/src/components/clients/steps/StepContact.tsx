'use client';

import { useFormContext } from 'react-hook-form';
import type { ClientCreateData } from '@/lib/validations/client';
import { InputField } from '@real-estate/ui/input-field';
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
      <InputField
        label="Email"
        id="primaryEmail"
        type="email"
        {...register('primaryEmail')}
        onBlur={handleEmailBlur}
        placeholder="email@exemple.com"
        error={errors.primaryEmail?.message}
        required
      />

      {/* Email secondaire */}
      <InputField
        label="Email secondaire"
        id="secondaryEmail"
        type="email"
        {...register('secondaryEmail')}
        placeholder="email-secondaire@exemple.com"
        error={errors.secondaryEmail?.message}
      />

      {/* Téléphone */}
      <InputField
        label="Téléphone mobile"
        id="mobilePhone"
        type="tel"
        {...register('mobilePhone')}
        onBlur={handlePhoneBlur}
        placeholder="06 12 34 56 78"
        error={errors.mobilePhone?.message}
      />

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
