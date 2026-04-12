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

export interface KpiDetail {
  label: string;
  value?: string;
}

export interface SheetClientDetailsProps {
  qualification: number;
  engagement: number;
  conversion: number;
  reactivation: number;
  qualificationAiSuggestions?: number;
  engagementAiSuggestions?: number;
  conversionAiSuggestions?: number;
  reactivationAiSuggestions?: number;
  /** Sous-métriques dynamiques par section KPI */
  qualificationDetails?: KpiDetail[];
  engagementDetails?: KpiDetail[];
  conversionDetails?: KpiDetail[];
  reactivationDetails?: KpiDetail[];
}

export function SheetClientDetails({
  qualification,
  engagement,
  conversion,
  reactivation,
  qualificationAiSuggestions = 0,
  engagementAiSuggestions = 0,
  conversionAiSuggestions = 0,
  reactivationAiSuggestions = 0,
  qualificationDetails = [],
  engagementDetails = [],
  conversionDetails = [],
  reactivationDetails = [],
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
        className="rounded-2xl w-full bg-surface-neutral-default border border-edge-default p-6"
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
          <KpiIndicator kpi="qual" value={`${qualification}%`} percentage={qualification} variant="straight" />
        }
        aiSuggestions={qualificationAiSuggestions}
        details={qualificationDetails}
      />

      {/* Engagement */}
      <SectionCard
        kpiComponent={
          <KpiIndicator kpi="eng" value={`${engagement}%`} percentage={engagement} variant="straight" />
        }
        aiSuggestions={engagementAiSuggestions}
        details={engagementDetails}
      />

      {/* Conversion */}
      <SectionCard
        kpiComponent={
          <KpiIndicator kpi="conv" value={`${conversion}%`} percentage={conversion} variant="straight" />
        }
        aiSuggestions={conversionAiSuggestions}
        details={conversionDetails}
      />

      {/* Réactivation */}
      <SectionCard
        kpiComponent={
          <KpiIndicator kpi="reac" value={`${reactivation}%`} percentage={reactivation} variant="straight" />
        }
        aiSuggestions={reactivationAiSuggestions}
        details={reactivationDetails}
      />
    </div>
  );
}
