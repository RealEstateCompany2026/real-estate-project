'use client';

import { Controller, useForm } from 'react-hook-form';
import type { Client } from '@/types/client';
import { InlineEdit } from '@/components/ui/InlineEdit';
import { TagsInput } from '@/components/ui/TagsInput';

interface ClientSectionNotesProps {
  client: Client;
  onUpdate: (field: string, value: unknown) => void;
}

/**
 * Section Notes & Tags de la fiche client (FIC-06 notes + tags).
 * Édition inline des notes et des tags.
 */
export function ClientSectionNotes({ client, onUpdate }: ClientSectionNotesProps) {
  const { control } = useForm({
    defaultValues: { tags: client.tags ?? [] },
  });

  return (
    <div className="space-y-4">
      {/* Notes */}
      <div>
        <h4 className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wider mb-2">Notes internes</h4>
        <InlineEdit
          value={client.notes ?? ''}
          onSave={(v) => onUpdate('notes', v || null)}
          type="textarea"
          placeholder="Ajouter des notes..."
        />
      </div>

      {/* Tags */}
      <div>
        <h4 className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wider mb-2">Tags</h4>
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <TagsInput
              value={field.value}
              onChange={(tags) => {
                field.onChange(tags);
                onUpdate('tags', tags);
              }}
            />
          )}
        />
      </div>

      {/* Infos CRM */}
      <div className="pt-3 border-t border-neutral-grey-light">
        <h4 className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wider mb-2">Informations CRM</h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-xs text-neutral-grey-bold">Source</span>
            <p className="text-neutral-anthracite">{client.source ?? '—'}</p>
          </div>
          <div>
            <span className="text-xs text-neutral-grey-bold">Lifecycle</span>
            <p className="text-neutral-anthracite">{client.lifecycleStage ?? '—'}</p>
          </div>
          <div>
            <span className="text-xs text-neutral-grey-bold">Consentement email</span>
            <p className="text-neutral-anthracite">{client.emailConsent ? 'Oui' : 'Non'}</p>
          </div>
          <div>
            <span className="text-xs text-neutral-grey-bold">Langue</span>
            <p className="text-neutral-anthracite">{client.language?.toUpperCase() ?? 'FR'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
