'use client';

import { useFormContext } from 'react-hook-form';
import type { ClientCreateData } from '@/lib/validations/client';
import { CLIENT_STATUS_LABELS, CLIENT_GENDER_LABELS, CLIENT_SOURCE_LABELS } from '@/types/client';
import type { ClientGender, ClientStatus, ClientSource } from '@/types/client';
import { useCompletionScore } from '@/hooks/useCompletionScore';
import { CompletionGauge } from '@/components/ui/CompletionGauge';

/**
 * Étape 5 — Récapitulatif avant création (CLI-06).
 * Affiche un résumé de toutes les données saisies + score de complétude.
 */
export function StepReview() {
  const { getValues } = useFormContext<ClientCreateData>();
  const data = getValues();

  const completion = useCompletionScore('client', data as unknown as Record<string, unknown>);

  return (
    <div className="space-y-6">
      {/* Score de complétude */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-background-subtle border border-neutral-grey-light">
        <div>
          <h3 className="text-sm font-bold text-neutral-anthracite">Score de complétude</h3>
          <p className="text-xs text-neutral-grey-bold mt-0.5">{completion.suggestion}</p>
        </div>
        <CompletionGauge score={completion.score} level={completion.level} size="lg" />
      </div>

      {/* Récapitulatif */}
      <div className="space-y-4">
        <ReviewSection title="Identité">
          <ReviewRow label="Civilité" value={data.gender ? CLIENT_GENDER_LABELS[data.gender as ClientGender] : '—'} />
          <ReviewRow label="Prénom" value={data.firstName} />
          <ReviewRow label="Nom" value={data.lastName} />
          <ReviewRow
            label="Type"
            value={
              data.status?.map((s) => CLIENT_STATUS_LABELS[s as ClientStatus]).join(', ') || '—'
            }
          />
        </ReviewSection>

        <ReviewSection title="Coordonnées">
          <ReviewRow label="Email" value={data.primaryEmail} />
          {data.secondaryEmail && <ReviewRow label="Email secondaire" value={data.secondaryEmail} />}
          <ReviewRow label="Téléphone" value={data.mobilePhone || '—'} />
          <ReviewRow label="Adresse" value={data.address || '—'} />
        </ReviewSection>

        {data.searchCriteriaSummary && (
          <ReviewSection title="Projet">
            <p className="text-sm text-neutral-anthracite">{data.searchCriteriaSummary}</p>
          </ReviewSection>
        )}

        <ReviewSection title="Notes & Tags">
          <ReviewRow label="Source" value={CLIENT_SOURCE_LABELS[(data.source ?? 'MANUEL') as ClientSource]} />
          {data.notes && (
            <div className="mt-2">
              <p className="text-xs text-neutral-grey-bold mb-1">Notes :</p>
              <p className="text-sm text-neutral-anthracite bg-white p-2 rounded border border-neutral-grey-light">
                {data.notes}
              </p>
            </div>
          )}
          {data.tags && data.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
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
          <ReviewRow label="Consentement email" value={data.emailConsent ? 'Oui' : 'Non'} />
        </ReviewSection>
      </div>
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
