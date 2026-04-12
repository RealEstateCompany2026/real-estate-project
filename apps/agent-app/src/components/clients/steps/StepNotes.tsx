'use client';

import { useFormContext, Controller } from 'react-hook-form';
import type { ClientCreateData } from '@/lib/validations/client';
import { CLIENT_SOURCE_LABELS } from '@/types/client';
import type { ClientSource } from '@/types/client';
import { InputField } from '@real-estate/ui/input-field';
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
      <div className="flex flex-col gap-[12px]">
        <label className="text-sm font-bold text-content-headings" htmlFor="source">
          Source
        </label>
        <select
          id="source"
          {...register('source')}
          className="w-full px-4 py-3 rounded-lg border border-edge-default bg-surface-neutral-default text-content-body placeholder:text-content-placeholder focus:outline-none focus:ring-2 focus:ring-[var(--border-branded-default)] text-sm"
        >
          {SOURCE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div className="flex flex-col gap-[12px]">
        <label className="text-sm font-bold text-content-headings" htmlFor="notes">
          Notes internes
        </label>
        <textarea
          id="notes"
          rows={4}
          {...register('notes')}
          placeholder="Notes visibles uniquement par l'équipe..."
          maxLength={2000}
          className="w-full px-4 py-3 rounded-lg border border-edge-default bg-surface-neutral-default text-content-body placeholder:text-content-placeholder focus:outline-none focus:ring-2 focus:ring-[var(--border-branded-default)] text-sm"
        />
        {errors.notes?.message && (
          <span className="text-xs text-content-error">{errors.notes.message}</span>
        )}
        <span className="text-xs text-content-caption">{notes.length}/2000</span>
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-bold text-content-headings mb-1">
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
      <div className="p-4 rounded-lg border border-edge-default bg-surface-neutral-action">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('emailConsent')}
            className="mt-0.5 w-4 h-4 rounded border-edge-default text-content-branded-action focus:ring-[var(--border-branded-default)]"
          />
          <div>
            <span className="text-sm font-medium text-content-headings">
              Consentement email (RGPD)
            </span>
            <p className="text-xs text-content-caption mt-0.5">
              Le client autorise la réception d&apos;emails commerciaux et d&apos;informations sur ses biens.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}
