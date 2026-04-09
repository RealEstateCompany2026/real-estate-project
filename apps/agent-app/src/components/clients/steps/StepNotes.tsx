'use client';

import { useFormContext, Controller } from 'react-hook-form';
import type { ClientCreateData } from '@/lib/validations/client';
import { CLIENT_SOURCE_LABELS } from '@/types/client';
import type { ClientSource } from '@/types/client';
import { TagsInput } from '@/components/ui/TagsInput';

const SOURCE_OPTIONS: { value: ClientSource; label: string }[] = [
  { value: 'MANUEL', label: CLIENT_SOURCE_LABELS.MANUEL },
  { value: 'IMPORT_CSV', label: CLIENT_SOURCE_LABELS.IMPORT_CSV },
  { value: 'CRM', label: CLIENT_SOURCE_LABELS.CRM },
  { value: 'ANNONCE', label: CLIENT_SOURCE_LABELS.ANNONCE },
];

/**
 * Étape 4 — Notes, tags et consentement (CLI-06).
 */
export function StepNotes() {
  const { register, formState: { errors }, control, watch } = useFormContext<ClientCreateData>();
  const notes = watch('notes') ?? '';

  return (
    <div className="space-y-6">
      {/* Source */}
      <div>
        <label htmlFor="source" className="block text-sm font-bold text-neutral-anthracite mb-1">
          Source
        </label>
        <select
          id="source"
          {...register('source')}
          className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm text-neutral-anthracite focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors bg-white"
        >
          {SOURCE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block text-sm font-bold text-neutral-anthracite mb-1">
          Notes internes
        </label>
        <textarea
          id="notes"
          {...register('notes')}
          rows={4}
          className="w-full px-3 py-2.5 rounded-lg border border-neutral-grey-light text-sm text-neutral-anthracite placeholder:text-neutral-grey-bold focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors resize-y"
          placeholder="Notes visibles uniquement par l'équipe..."
          maxLength={2000}
        />
        <div className="flex justify-between mt-1">
          {errors.notes && (
            <p className="text-xs text-semantic-destructive">{errors.notes.message}</p>
          )}
          <p className="text-xs text-neutral-grey-bold ml-auto">{notes.length}/2000</p>
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-bold text-neutral-anthracite mb-1">
          Tags
        </label>
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <TagsInput
              value={field.value ?? []}
              onChange={field.onChange}
              placeholder="Ajouter un tag (Enter pour valider)..."
            />
          )}
        />
      </div>

      {/* Consentement email */}
      <div className="p-4 rounded-lg border border-neutral-grey-light bg-background-subtle">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('emailConsent')}
            className="mt-0.5 w-4 h-4 rounded border-neutral-grey-light text-primary focus:ring-primary"
          />
          <div>
            <span className="text-sm font-medium text-neutral-anthracite">
              Consentement email (RGPD)
            </span>
            <p className="text-xs text-neutral-grey-bold mt-0.5">
              Le client autorise la réception d&apos;emails commerciaux et d&apos;informations sur ses biens.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}
