'use client';

import { useFormContext, Controller } from 'react-hook-form';
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
  const { register, formState: { errors }, setValue, watch, control } = useFormContext<ClientCreateData>();
  const { matches, checkDuplicates, dismiss } = useDuplicateCheck();

  const firstName = watch('firstName');
  const lastName = watch('lastName');

  const primaryEmail = watch('primaryEmail');
  const mobilePhone = watch('mobilePhone');

  function handleEmailBlur() {
    if (primaryEmail) {
      checkDuplicates({ email: primaryEmail, firstName, lastName });
    }
  }

  function handlePhoneBlur() {
    if (mobilePhone) {
      checkDuplicates({ phone: mobilePhone, firstName, lastName });
    }
  }

  return (
    <div className="space-y-6">
      {/* Alerte doublons */}
      <DuplicateAlert matches={matches} onDismiss={dismiss} />

      {/* Email principal */}
      <Controller
        name="primaryEmail"
        control={control}
        render={({ field }) => (
          <>
            <InputField
              label="Email"
              id="primaryEmail"
              type="email"
              {...field}
              onBlur={() => { field.onBlur(); handleEmailBlur(); }}
              placeholder="email@exemple.com"
              error={!!errors.primaryEmail?.message}
              required
            />
            {errors.primaryEmail?.message && <p className="text-xs text-semantic-destructive mt-0.5">{errors.primaryEmail.message}</p>}
          </>
        )}
      />

      {/* Email secondaire */}
      <Controller
        name="secondaryEmail"
        control={control}
        render={({ field }) => (
          <>
            <InputField
              label="Email secondaire"
              id="secondaryEmail"
              type="email"
              {...field}
              placeholder="email-secondaire@exemple.com"
              error={!!errors.secondaryEmail?.message}
            />
            {errors.secondaryEmail?.message && <p className="text-xs text-semantic-destructive mt-0.5">{errors.secondaryEmail.message}</p>}
          </>
        )}
      />

      {/* Téléphone */}
      <Controller
        name="mobilePhone"
        control={control}
        render={({ field }) => (
          <>
            <InputField
              label="Téléphone mobile"
              id="mobilePhone"
              type="tel"
              {...field}
              onBlur={() => { field.onBlur(); handlePhoneBlur(); }}
              placeholder="06 12 34 56 78"
              error={!!errors.mobilePhone?.message}
            />
            {errors.mobilePhone?.message && <p className="text-xs text-semantic-destructive mt-0.5">{errors.mobilePhone.message}</p>}
          </>
        )}
      />

      {/* Adresse */}
      <div>
        <label className="block text-sm font-bold text-content-headings mb-1">
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
