'use client';

import { Controller, useForm } from 'react-hook-form';
import type { Property } from '@/types/property';
import { InlineEdit } from '@/components/ui/InlineEdit';
import { TagsInput } from '@/components/ui/TagsInput';

interface PropertySectionNotesProps {
  property: Property;
  onUpdate: (field: string, value: unknown) => void;
}

/**
 * Section Notes & Tags de la fiche bien (FIB-10).
 */
export function PropertySectionNotes({ property, onUpdate }: PropertySectionNotesProps) {
  const { control } = useForm({
    defaultValues: { tags: property.tags ?? [] },
  });

  return (
    <div className="space-y-4">
      {/* Notes */}
      <div>
        <h4 className="text-xs font-bold text-content-caption uppercase tracking-wider mb-2">Notes internes</h4>
        <InlineEdit
          value={property.notes ?? ''}
          onSave={(v) => onUpdate('notes', v || null)}
          type="textarea"
          placeholder="Ajouter des notes sur le bien..."
        />
      </div>

      {/* Tags */}
      <div>
        <h4 className="text-xs font-bold text-content-caption uppercase tracking-wider mb-2">Tags</h4>
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

      {/* Status */}
      <div className="pt-3 border-t border-edge-default">
        <h4 className="text-xs font-bold text-content-caption uppercase tracking-wider mb-2">Statut du bien</h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-xs text-content-caption">Référence interne</span>
            <p className="text-content-headings font-mono">{property.internalRef ?? '—'}</p>
          </div>
          <div>
            <span className="text-xs text-content-caption">Score complétude</span>
            <p className="text-content-headings">{property.completionScore ?? 0}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
