'use client';

import { useFormContext } from 'react-hook-form';
import type { PropertyCreateData } from '@/lib/validations/property';
import {
  PROPERTY_TYPE_LABELS,
  OPERATION_TYPE_LABELS,
  PROPERTY_CONDITION_LABELS,
  DPE_COLORS,
} from '@/types/property';
import type { PropertyType, OperationType, PropertyCondition, DpeClass } from '@/types/property';
import { useCompletionScore } from '@/hooks/useCompletionScore';
import { CompletionGauge } from '@/components/ui/CompletionGauge';
import { formatPrice, formatSurface } from '@/lib/utils/format';

/**
 * Étape 6 — Récapitulatif avant création du bien (BIE-06).
 */
export function StepPropertyReview() {
  const { getValues } = useFormContext<PropertyCreateData>();
  const data = getValues();
  const completion = useCompletionScore('property', data as unknown as Record<string, unknown>);

  return (
    <div className="space-y-6">
      {/* Score */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-background-subtle border border-neutral-grey-light">
        <div>
          <h3 className="text-sm font-bold text-neutral-anthracite">Score de complétude</h3>
          <p className="text-xs text-neutral-grey-bold mt-0.5">{completion.suggestion}</p>
        </div>
        <CompletionGauge score={completion.score} level={completion.level} size="lg" />
      </div>

      {/* Type & Opération */}
      <ReviewSection title="Type & Opération">
        <ReviewRow label="Type" value={PROPERTY_TYPE_LABELS[data.type as PropertyType]} />
        <ReviewRow
          label="Opération"
          value={
            data.operationTypes?.map((o) => OPERATION_TYPE_LABELS[o as OperationType]).join(', ') || '—'
          }
        />
      </ReviewSection>

      {/* Infos clés */}
      <ReviewSection title="Informations clés">
        <ReviewRow label="Adresse" value={data.address} />
        <ReviewRow label="Surface" value={formatSurface(data.livingAreaSqm)} />
        <ReviewRow label="Pièces" value={data.numberOfRooms?.toString() ?? '—'} />
        <ReviewRow label="Prix" value={formatPrice(data.desiredSellingPrice)} />
      </ReviewSection>

      {/* Description */}
      {(data.floorLevel != null || data.constructionYear != null || data.condition) && (
        <ReviewSection title="Description">
          {data.floorLevel != null && <ReviewRow label="Étage" value={data.floorLevel.toString()} />}
          {data.numberOfFloors != null && <ReviewRow label="Niveaux" value={data.numberOfFloors.toString()} />}
          {data.constructionYear != null && <ReviewRow label="Année" value={data.constructionYear.toString()} />}
          {data.condition && <ReviewRow label="État" value={PROPERTY_CONDITION_LABELS[data.condition as PropertyCondition]} />}
        </ReviewSection>
      )}

      {/* Caractéristiques */}
      {(data.bedroomCount != null || data.dpeEnergyClass || data.heatingType) && (
        <ReviewSection title="Caractéristiques">
          {data.bedroomCount != null && <ReviewRow label="Chambres" value={data.bedroomCount.toString()} />}
          {data.bathroomCount != null && <ReviewRow label="Salles de bain" value={data.bathroomCount.toString()} />}
          {data.heatingType && <ReviewRow label="Chauffage" value={data.heatingType} />}
          {data.exposures && data.exposures.length > 0 && (
            <ReviewRow label="Exposition" value={data.exposures.join(', ')} />
          )}
          {data.dpeEnergyClass && (
            <div className="flex items-center gap-4">
              <span className="text-xs text-neutral-grey-bold min-w-[120px]">DPE Énergie</span>
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold text-white"
                style={{ backgroundColor: DPE_COLORS[data.dpeEnergyClass as DpeClass] }}
              >
                {data.dpeEnergyClass}
              </span>
            </div>
          )}
          {data.dpeGasEmissionClass && (
            <div className="flex items-center gap-4">
              <span className="text-xs text-neutral-grey-bold min-w-[120px]">DPE GES</span>
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold text-white"
                style={{ backgroundColor: DPE_COLORS[data.dpeGasEmissionClass as DpeClass] }}
              >
                {data.dpeGasEmissionClass}
              </span>
            </div>
          )}
        </ReviewSection>
      )}

      {/* Notes & Tags */}
      {(data.notes || (data.tags && data.tags.length > 0)) && (
        <ReviewSection title="Notes & Tags">
          {data.notes && (
            <p className="text-sm text-neutral-anthracite bg-white p-2 rounded border border-neutral-grey-light">
              {data.notes}
            </p>
          )}
          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-background-softBlue text-primary text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </ReviewSection>
      )}
    </div>
  );
}

function ReviewSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg border border-neutral-grey-light">
      <h3 className="text-sm font-bold text-neutral-anthracite mb-3">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs text-neutral-grey-bold min-w-[120px]">{label}</span>
      <span className="text-sm text-neutral-anthracite">{value}</span>
    </div>
  );
}
