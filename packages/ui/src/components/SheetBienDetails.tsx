"use client";

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

import { Badge } from "./Badge";
import { Chip } from "./Chip";
import { IconDpe, DpeType } from "./IconDpe";
import { AiSuggestion } from "./AiSuggestion";
import { KpiIndicator } from "./KpiIndicator";
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
        className="rounded-2xl w-full bg-surface-neutral-white dark:bg-surface-neutral-darker border border-edge-default p-6"
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
    <div className="flex flex-col gap-5 px-5 py-5">
      {/* Position 1: Map */}
      <div
        className="w-full rounded-2xl flex items-center justify-center border border-edge-default bg-surface-neutral-default dark:bg-surface-neutral-darker"
        style={{
          height: "115px",
        }}
      >
      </div>

      {/* Position 2: Lignes 1 et 2 (Badge, Chip, Icon) */}
      <div className="flex flex-col gap-6">
        {/* Ligne 1: Badge type + Chip prix + Badge CARNET */}
        <div className="flex gap-2 items-center">
          <Badge variant="default">
            {type}
          </Badge>

          <Chip
            size="medium"
            icon={<Tag size={20} className="text-icon-neutral-default dark:text-icon-neutral-dark" />}
            iconPosition="left"
          >
            {price}
          </Chip>

          <Badge variant="success">
            CARNET
          </Badge>
        </div>

        {/* Ligne 2: Chip localisation + Chip type + Chip surface + Icon DPE */}
        <div className="flex gap-2 items-center">
          <Chip
            size="medium"
            icon={<MapPin size={20} className="text-icon-neutral-default dark:text-icon-neutral-dark" />}
            iconPosition="left"
          >
            {location}
          </Chip>

          <Chip
            size="medium"
            icon={<House size={20} className="text-icon-neutral-default dark:text-icon-neutral-dark" />}
            iconPosition="left"
          >
            {bienType}
          </Chip>

          <Chip
            size="medium"
            icon={<Square size={20} className="text-icon-neutral-default dark:text-icon-neutral-dark" />}
            iconPosition="left"
          >
            {surface}
          </Chip>

          <IconDpe type={dpe} size="small" />
        </div>
      </div>

      {/* Position 3: Section database (Qualification) */}
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

      {/* Position 4: Section entretien (Entretien) */}
      <SectionCard
        kpiComponent={
          <KpiIndicator kpi="ent" value={`${entretien}%`} percentage={entretien} variant="straight" hover={false} />
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
          <KpiIndicator kpi="conv" value={`${conversion}%`} percentage={conversion} variant="straight" hover={false} />
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
