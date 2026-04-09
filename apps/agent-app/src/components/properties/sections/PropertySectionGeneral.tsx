'use client';

import type { Property } from '@/types/property';
import {
  PROPERTY_TYPE_LABELS, PROPERTY_CONDITION_LABELS,
  OPERATION_TYPE_LABELS,
} from '@/types/property';
import type { PropertyType, PropertyCondition, OperationType } from '@/types/property';
import { InlineEdit } from '@/components/ui/InlineEdit';
import { formatPrice, formatSurface } from '@/lib/utils/format';

interface PropertySectionGeneralProps {
  property: Property;
  onUpdate: (field: string, value: unknown) => void;
}

/**
 * Section Informations générales de la fiche bien (FIB-02).
 * Type, adresse, surface, pièces, prix, opération, état.
 */
export function PropertySectionGeneral({ property, onUpdate }: PropertySectionGeneralProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
      {/* Colonne gauche */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wider">Identité du bien</h4>

        <div className="flex items-center gap-4">
          <span className="text-xs text-neutral-grey-bold min-w-[100px]">Type</span>
          <span className="text-sm text-neutral-anthracite">
            {PROPERTY_TYPE_LABELS[property.type as PropertyType]}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-neutral-grey-bold min-w-[100px]">Opération</span>
          <span className="text-sm text-neutral-anthracite">
            {property.operationTypes?.map((o) => OPERATION_TYPE_LABELS[o as OperationType]).join(', ') || '—'}
          </span>
        </div>

        {property.condition && (
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-grey-bold min-w-[100px]">État</span>
            <span className="text-sm text-neutral-anthracite">
              {PROPERTY_CONDITION_LABELS[property.condition as PropertyCondition]}
            </span>
          </div>
        )}

        {property.internalRef && (
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-grey-bold min-w-[100px]">Réf. interne</span>
            <span className="text-sm font-mono text-neutral-anthracite">{property.internalRef}</span>
          </div>
        )}
      </div>

      {/* Colonne droite */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wider">Localisation & Prix</h4>

        <InlineEdit
          label="Adresse"
          value={property.address}
          onSave={(v) => onUpdate('address', v)}
        />

        <div className="flex items-center gap-4">
          <span className="text-xs text-neutral-grey-bold min-w-[100px]">Surface</span>
          <span className="text-sm text-neutral-anthracite">{formatSurface(property.livingAreaSqm)}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-neutral-grey-bold min-w-[100px]">Pièces</span>
          <span className="text-sm text-neutral-anthracite">{property.numberOfRooms ?? '—'}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-neutral-grey-bold min-w-[100px]">Prix</span>
          <span className="text-sm font-bold text-neutral-anthracite">
            {formatPrice(property.desiredSellingPrice)}
          </span>
        </div>

        {property.floorLevel != null && (
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-grey-bold min-w-[100px]">Étage</span>
            <span className="text-sm text-neutral-anthracite">
              {property.floorLevel === 0 ? 'RDC' : property.floorLevel}
              {property.numberOfFloors ? ` / ${property.numberOfFloors}` : ''}
            </span>
          </div>
        )}

        {property.constructionYear && (
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-grey-bold min-w-[100px]">Construction</span>
            <span className="text-sm text-neutral-anthracite">{property.constructionYear}</span>
          </div>
        )}
      </div>
    </div>
  );
}
