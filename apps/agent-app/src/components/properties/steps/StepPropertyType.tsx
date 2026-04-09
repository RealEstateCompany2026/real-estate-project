'use client';

import { useFormContext } from 'react-hook-form';
import type { PropertyCreateData } from '@/lib/validations/property';
import {
  PROPERTY_TYPE_LABELS,
  PROPERTY_CATEGORY_TYPES,
  CATEGORY_LABELS,
  OPERATION_TYPE_LABELS,
} from '@/types/property';
import type { PropertyType, PropertyCategory, OperationType } from '@/types/property';
import { Home, Building, TreePine, Warehouse } from 'lucide-react';
import { type ReactNode } from 'react';

const CATEGORY_ICONS: Record<PropertyCategory, ReactNode> = {
  RESIDENTIEL: <Home className="w-5 h-5" />,
  TERRAIN: <TreePine className="w-5 h-5" />,
  COMMERCIAL: <Building className="w-5 h-5" />,
  AUTRE: <Warehouse className="w-5 h-5" />,
};

const OPERATION_OPTIONS: { value: OperationType; label: string }[] = [
  { value: 'VENTE', label: OPERATION_TYPE_LABELS.VENTE },
  { value: 'LOCATION', label: OPERATION_TYPE_LABELS.LOCATION },
  { value: 'VIAGER', label: OPERATION_TYPE_LABELS.VIAGER },
  { value: 'CESSION', label: OPERATION_TYPE_LABELS.CESSION },
];

/**
 * Étape 1 — Type de bien et type d'opération (BIE-01).
 * Sélection par catégorie (Résidentiel → sous-types) + opération(s).
 */
export function StepPropertyType() {
  const { watch, setValue, formState: { errors } } = useFormContext<PropertyCreateData>();
  const selectedType = watch('type');
  const selectedOps = watch('operationTypes') ?? [];

  function selectType(type: PropertyType) {
    setValue('type', type, { shouldValidate: true });
  }

  function toggleOperation(op: OperationType) {
    const current = selectedOps;
    if (current.includes(op)) {
      setValue('operationTypes', current.filter((o) => o !== op), { shouldValidate: true });
    } else {
      setValue('operationTypes', [...current, op], { shouldValidate: true });
    }
  }

  return (
    <div className="space-y-8">
      {/* Catégories & sous-types */}
      <div>
        <label className="block text-sm font-bold text-neutral-anthracite mb-4">
          Type de bien <span className="text-semantic-destructive">*</span>
        </label>

        {(Object.keys(PROPERTY_CATEGORY_TYPES) as PropertyCategory[]).map((cat) => (
          <div key={cat} className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary">{CATEGORY_ICONS[cat]}</span>
              <span className="text-sm font-bold text-neutral-anthracite">{CATEGORY_LABELS[cat]}</span>
            </div>
            <div className="flex flex-wrap gap-2 pl-7">
              {PROPERTY_CATEGORY_TYPES[cat].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => selectType(type)}
                  className={`px-3 py-1.5 rounded-lg border text-sm transition-colors ${
                    selectedType === type
                      ? 'border-primary bg-background-softBlue text-primary font-bold'
                      : 'border-neutral-grey-light text-neutral-grey-bold hover:border-primary/50'
                  }`}
                >
                  {PROPERTY_TYPE_LABELS[type]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Type(s) d'opération */}
      <div>
        <label className="block text-sm font-bold text-neutral-anthracite mb-2">
          Type d&apos;opération <span className="text-semantic-destructive">*</span>
        </label>
        <p className="text-xs text-neutral-grey-bold mb-3">
          Un bien peut être en vente et en location simultanément.
        </p>
        <div className="flex flex-wrap gap-2">
          {OPERATION_OPTIONS.map((opt) => {
            const isSelected = selectedOps.includes(opt.value);
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => toggleOperation(opt.value)}
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
        {errors.operationTypes && (
          <p className="text-xs text-semantic-destructive mt-1">{errors.operationTypes.message}</p>
        )}
      </div>
    </div>
  );
}
