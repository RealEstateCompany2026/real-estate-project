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

import { useTheme } from "../../context/ThemeContext";
import { KpiIndicator } from "../atoms/KpiIndicator";
import { AiSuggestion } from "../atoms/AiSuggestion";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cardBg = isDark ? "var(--neutral-800)" : "var(--neutral-white)";
  const borderColor = isDark ? "var(--neutral-700)" : "var(--neutral-50)";
  const textColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";

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
        className="rounded-[16px] w-full"
        style={{
          backgroundColor: cardBg,
          border: `1px solid ${borderColor}`,
          padding: "24px 20px",
        }}
      >
        <div className="flex flex-col gap-[8px]">
          {/* KPI + AI Suggestions */}
          <div className="flex items-center justify-between w-full">
            {kpiComponent}
            <AiSuggestion count={aiSuggestions} theme={theme} />
          </div>

          {/* Details */}
          {details.map((detail, idx) => (
            <div key={idx} className="px-[10px] py-[8px]">
              <p
                className="font-['Roboto',sans-serif] text-[16px] leading-[20px] tracking-[0.16px]"
                style={{
                  color: textColor,
                }}
              >
                {detail.label}
                {detail.value && (
                  <span style={{ fontWeight: 700 }}> {detail.value}</span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[12px] px-[20px] py-[20px]">
      {/* Qualification */}
      <SectionCard
        kpiComponent={
          <KpiIndicator kpi="qual" value={`${qualification}%`} percentage={qualification} variant="straight" theme={theme} hover={false} />
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
          <KpiIndicator kpi="eng" value={`${engagement}%`} percentage={engagement} variant="straight" theme={theme} hover={false} />
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
          <KpiIndicator kpi="conv" value={`${conversion}%`} percentage={conversion} variant="straight" theme={theme} hover={false} />
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
          <KpiIndicator kpi="reac" value={`${reactivation}%`} percentage={reactivation} variant="straight" theme={theme} hover={false} />
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
