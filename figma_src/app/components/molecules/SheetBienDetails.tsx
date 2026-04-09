/**
 * SheetBienDetails - Contenu de la sheet affichant les détails d'un bien
 *
 * Structure:
 * - Position 1: Map (L350px x H115px)
 * - Position 2: Lignes 1 et 2 (Badge, Chip, Icon de la section 1 du composant ListBien)
 * - Position 3: Section database (KpiIndicator Qualification)
 * - Position 4: Section engagement (KpiIndicator Engagement)
 * - Position 5: Section conversion (KpiIndicator Conversion)
 */

import { useTheme } from "../../context/ThemeContext";
import { Badge } from "../atoms/Badge";
import { Chip } from "../atoms/Chip";
import { IconDpe, DpeType } from "../atoms/IconDpe";
import { AiSuggestion } from "../atoms/AiSuggestion";
import { KpiIndicator } from "../atoms/KpiIndicator";
import { MapPin, Tag, House, Square } from "lucide-react";

export interface SheetBienDetailsProps {
  // Informations du bien
  bienType: string;
  surface: string;
  type: string;
  price: string;
  location: string;
  dpe?: DpeType;

  // KPI
  qualification: number;
  entretien: number;
  conversion: number;

  // AI Suggestions
  qualificationAiSuggestions?: number;
  entretienAiSuggestions?: number;
  conversionAiSuggestions?: number;
}

export function SheetBienDetails({
  bienType,
  surface,
  type,
  price,
  location,
  dpe = "A",
  qualification,
  entretien,
  conversion,
  qualificationAiSuggestions = 0,
  entretienAiSuggestions = 2,
  conversionAiSuggestions = 0,
}: SheetBienDetailsProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const cardBg = isDark ? "var(--neutral-800)" : "var(--neutral-white)";
  const borderColor = isDark ? "var(--neutral-700)" : "var(--neutral-50)";
  const textColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";
  const iconColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";

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
    <div className="flex flex-col gap-[20px] px-[20px] py-[20px]">
      {/* Position 1: Map */}
      <div
        className="w-full rounded-[16px] flex items-center justify-center"
        style={{
          height: "115px",
          backgroundColor: isDark ? "var(--neutral-700)" : "var(--neutral-50)",
          border: `1px solid ${borderColor}`,
        }}
      >
      </div>

      {/* Position 2: Lignes 1 et 2 (Badge, Chip, Icon) */}
      <div className="flex flex-col gap-[24px]">
        {/* Ligne 1: Badge type + Chip prix + Badge CARNET */}
        <div className="flex gap-[8px] items-center">
          <Badge variant="default" theme={theme}>
            {type}
          </Badge>

          <Chip
            size="medium"
            icon={<Tag size={20} style={{ color: iconColor }} />}
            iconPosition="left"
            theme={theme}
          >
            {price}
          </Chip>

          <Badge variant="success" theme={theme}>
            CARNET
          </Badge>
        </div>

        {/* Ligne 2: Chip localisation + Chip type + Chip surface + Icon DPE */}
        <div className="flex gap-[8px] items-center">
          <Chip
            size="medium"
            icon={<MapPin size={20} style={{ color: iconColor }} />}
            iconPosition="left"
            theme={theme}
          >
            {location}
          </Chip>

          <Chip
            size="medium"
            icon={<House size={20} style={{ color: iconColor }} />}
            iconPosition="left"
            theme={theme}
          >
            {bienType}
          </Chip>

          <Chip
            size="medium"
            icon={<Square size={20} style={{ color: iconColor }} />}
            iconPosition="left"
            theme={theme}
          >
            {surface}
          </Chip>

          <IconDpe type={dpe} size="small" />
        </div>
      </div>

      {/* Position 3: Section database (Qualification) */}
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

      {/* Position 4: Section entretien (Entretien) */}
      <SectionCard
        kpiComponent={
          <KpiIndicator kpi="ent" value={`${entretien}%`} percentage={entretien} variant="straight" theme={theme} hover={false} />
        }
        aiSuggestions={entretienAiSuggestions}
        details={[
          { label: "Carnet d'entretien :", value: "actif" },
          { label: "Suivi d'entretien :", value: "18%" },
          { label: "Suivi financier :", value: "18%" },
        ]}
      />

      {/* Position 5: Section conversion (Conversion) */}
      <SectionCard
        kpiComponent={
          <KpiIndicator kpi="conv" value={`${conversion}%`} percentage={conversion} variant="straight" theme={theme} hover={false} />
        }
        aiSuggestions={conversionAiSuggestions}
        details={[
          { label: "Date du dernier mandat :", value: "> 2 ans" },
          { label: "Projet(s) immobilier(s) :", value: "> 12 mois" },
          { label: "Projection prochain mandat :", value: "> 6 mois" },
        ]}
      />
    </div>
  );
}
