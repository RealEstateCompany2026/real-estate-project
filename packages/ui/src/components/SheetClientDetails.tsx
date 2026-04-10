"use client";

/**
 * SheetClientDetails - Contenu de la sheet affichant les détails KPI d'un client
 *
 * Affiche 4 sections :
 * - Qualification
 * - Engagement
 * - Conversion
 * - Réactivation
 *
 * Chaque section contient un organisme KPI + badge AI suggestions + détails
 */

import { KpiIndicator } from "./KpiIndicator";
import { AiSuggestion } from "./AiSuggestion";

export interface SheetClientDetailsProps {
  qualification: number;
  engagement: number;
  conversion: number;
  reactivation: number;
  qualificationAiSuggestions?: number;
  engagementAiSuggestions?: number;
  conversionAiSuggestions?: number;
  reactivationAiSuggestions?: number;
}

export function SheetClientDetails({
  qualification,
  engagement,
  conversion,
  reactivation,
  qualificationAiSuggestions = 0,
  engagementAiSuggestions = 2,
  conversionAiSuggestions = 0,
  reactivationAiSuggestions = 1,
}: SheetClientDetailsProps) {
  // Section Card
  const SectionCard = ({
    kpiComponent,
    aiSuggestions,
    details,
  }: {
    kpiComponent: React.ReactNode;
    aiSuggestions: number;
    details: Array<{ label: string; value?: string }>;
  }) => {
    return (
      <div
        className="rounded-2xl w-full bg-surface-neutral-default dark:bg-neutral-800 border border-edge-default p-6"
      >
        <div className="flex flex-col gap-2">
          {/* KPI + AI Suggestions */}
          <div className="flex items-center justify-between w-full">
            {kpiComponent}
            <AiSuggestion count={aiSuggestions} />
          </div>

          {/* Details */}
          {details.map((detail, idx) => (
            <div key={idx} className="px-2.5 py-2">
              <p
                className="font-sans text-base leading-5 tracking-tight text-content-body"
              >
                {detail.label}
                {detail.value && (
                  <span className="font-bold"> {detail.value}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3 px-5 py-5">
      {/* Qualification */}
      <SectionCard
        kpiComponent={
          <KpiIndicator kpi="qual" value={`${qualification}%`} percentage={qualification} variant="straight" hover={false} />
        }
        aiSuggestions={qualificationAiSuggestions}
        details={[
          { label: "Informations de profil :", value: "78%" },
          { label: "Informations de contact :", value: "80%" },
          { label: "Informations professionnelles :", value: "20%" },
        ]}
      />

      {/* Engagement */}
      <SectionCard
        kpiComponent={
          <KpiIndicator kpi="eng" value={`${engagement}%`} percentage={engagement} variant="straight" hover={false} />
        }
        aiSuggestions={engagementAiSuggestions}
        details={[
          { label: "Taux d'ouverture :", value: "62%" },
          { label: "Taux de clics :", value: "18%" },
          { label: "Taux de passage à l'action :", value: "18%" },
          { label: "Taux de réponses :", value: "33%" },
        ]}
      />

      {/* Conversion */}
      <SectionCard
        kpiComponent={
          <KpiIndicator kpi="conv" value={`${conversion}%`} percentage={conversion} variant="straight" hover={false} />
        }
        aiSuggestions={conversionAiSuggestions}
        details={[
          { label: "Date dernier mandat : > 2 ans" },
          { label: "Projection prochain mandat : > 6 mois" },
        ]}
      />

      {/* Réactivation */}
      <SectionCard
        kpiComponent={
          <KpiIndicator kpi="reac" value={`${reactivation}%`} percentage={reactivation} variant="straight" hover={false} />
        }
        aiSuggestions={reactivationAiSuggestions}
        details={[
          { label: "Dernière activité :", value: "18 jours" },
          { label: "Réceptivité :", value: "52%" },
          { label: "Engagement :", value: "61%" },
          { label: "Intentionalité :", value: "48%" },
        ]}
      />
    </div>
  );
}
