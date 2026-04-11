"use client";

import React from "react";
import { User } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Chip } from "./Chip";
import { KpiIndicator } from "./KpiIndicator";
import { AiSuggestion } from "./AiSuggestion";

/**
 * ListClient - Ligne de liste client
 * Organism du design system RealAgent
 *
 * Affiche une ligne de la liste des clients avec :
 * - Section nom (badges + icône + nom complet)
 * - 4 KPI indicators (qualification, engagement, conversion, réactivation)
 * - Badge IA suggestions
 * - Dividers verticaux entre chaque section
 *
 * Variantes Figma : default light, hover light, default dark, hover dark
 * Le hover est géré via Tailwind `group` :
 *   - Fond : white → neutral-50
 *   - Bordure : neutral-50 → neutral-100
 *   - Barres KPI vides : neutral-100 → neutral-200 (via group-hover dans KpiIndicator)
 *   - Dividers : neutral-50 → neutral-100 (via group-hover)
 */

export interface ListClientKpi {
  qualification: number;
  engagement: number;
  conversion: number;
  reactivation: number;
}

export interface ListClientProps {
  /** Prénom du client */
  firstName: string;
  /** Nom de famille du client */
  lastName: string;
  /** Badges rôles (ex: VENDEUR, ACQUÉREUR) */
  badges?: Array<{ label: string; variant?: BadgeVariant }>;
  /** KPI pourcentages (0-100) */
  kpis: ListClientKpi;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic */
  onClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Divider vertical 84px
 * Default: neutral-50 (border-divider)
 * Hover: neutral-100 (border-default) via group-hover
 */
function VerticalDivider() {
  return (
    <div className="h-[84px] w-px bg-[var(--border-divider)] group-hover:bg-[var(--border-default)] shrink-0 transition-colors" />
  );
}

export function ListClient({
  firstName,
  lastName,
  badges = [
    { label: "VENDEUR", variant: "default" },
    { label: "ACQUÉREUR", variant: "default" },
  ],
  kpis,
  aiSuggestions = 0,
  onClick,
  className = "",
}: ListClientProps) {
  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center gap-[38px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Section nom du client */}
      <div className="flex flex-col items-start pl-[30px] pr-[138px] py-[34px] shrink-0 w-[425px] h-[120px]">
        <div className="flex flex-col gap-[12px] items-start w-[259px]">
          {/* Badges */}
          <div className="flex gap-[12px] items-center">
            {badges.map((badge, index) => (
              <Badge key={index} variant={badge.variant}>
                {badge.label}
              </Badge>
            ))}
          </div>
          {/* Icon + Name */}
          <Chip size="medium" icon={<User size={20} className="text-icon-neutral-default" />}>
            {firstName} {lastName}
          </Chip>
        </div>
      </div>

      <VerticalDivider />

      {/* KPI Qualification */}
      <KpiIndicator
        kpi="qual"
        value={`${kpis.qualification}%`}
        percentage={kpis.qualification}
        variant="vertical"
        className="w-[77px]"
      />

      <VerticalDivider />

      {/* KPI Engagement */}
      <KpiIndicator
        kpi="eng"
        value={`${kpis.engagement}%`}
        percentage={kpis.engagement}
        variant="vertical"
        className="w-[78px]"
      />

      <VerticalDivider />

      {/* KPI Conversion */}
      <KpiIndicator
        kpi="conv"
        value={`${kpis.conversion}%`}
        percentage={kpis.conversion}
        variant="vertical"
        className="w-[78px]"
      />

      <VerticalDivider />

      {/* KPI Réactivation */}
      <KpiIndicator
        kpi="reac"
        value={`${kpis.reactivation}%`}
        percentage={kpis.reactivation}
        variant="vertical"
        className="w-[78px]"
      />

      <VerticalDivider />

      {/* AI Suggestions */}
      <div className="flex flex-col items-center justify-center pr-[38px] py-[48px] shrink-0 w-[86px] h-[120px]">
        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
