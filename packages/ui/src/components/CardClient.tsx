"use client";

import React from "react";
import { User } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Chip } from "./Chip";
import { KpiIndicator } from "./KpiIndicator";
import { AiSuggestion } from "./AiSuggestion";

/**
 * CardClient - Carte client
 * Organism du design system RealAgent
 *
 * Affiche une carte client compacte (350px) avec :
 * - Section nom (badges + icône + nom complet)
 * - Grille 2×2 de KPI indicators avec dividers
 * - Badge IA suggestions en bas
 *
 * Mêmes tokens de couleur que ListClient (default/hover, light/dark)
 * mais layout vertical (card) au lieu de horizontal (list row).
 */

export interface CardClientKpi {
  qualification: number;
  engagement: number;
  conversion: number;
  reactivation: number;
}

export interface CardClientProps {
  /** Prénom du client */
  firstName: string;
  /** Nom de famille du client */
  lastName: string;
  /** Badges rôles (ex: VENDEUR, ACQUÉREUR) */
  badges?: Array<{ label: string; variant?: BadgeVariant }>;
  /** KPI pourcentages (0-100) */
  kpis: CardClientKpi;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic */
  onClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

/** Divider horizontal pleine largeur */
function HorizontalDivider() {
  return (
    <div className="divider w-full h-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] transition-colors" />
  );
}

/** Divider vertical 84px */
function VerticalDivider() {
  return (
    <div className="divider h-[84px] w-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] shrink-0 transition-colors" />
  );
}

export function CardClient({
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
}: CardClientProps) {
  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex flex-col gap-[22px] items-center pb-[24px] w-[350px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Header: nom du client */}
      <div className="flex flex-col items-start w-full">
        <div className="flex flex-col items-start pl-[30px] pr-[138px] py-[34px] w-full h-[120px]">
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

        {/* KPIs section */}
        <div className="flex flex-col gap-[22px] items-center w-full">
          <HorizontalDivider />

          {/* Row 1: Qualification + Engagement */}
          <div className="flex gap-[38px] items-center">
            <KpiIndicator
              kpi="qual"
              value={`${kpis.qualification}%`}
              percentage={kpis.qualification}
              variant="vertical"
              className="w-[77px]"
            />
            <VerticalDivider />
            <KpiIndicator
              kpi="eng"
              value={`${kpis.engagement}%`}
              percentage={kpis.engagement}
              variant="vertical"
              className="w-[78px]"
            />
          </div>

          <HorizontalDivider />

          {/* Row 2: Conversion + Réactivation */}
          <div className="flex gap-[38px] items-center">
            <KpiIndicator
              kpi="conv"
              value={`${kpis.conversion}%`}
              percentage={kpis.conversion}
              variant="vertical"
              className="w-[78px]"
            />
            <VerticalDivider />
            <KpiIndicator
              kpi="reac"
              value={`${kpis.reactivation}%`}
              percentage={kpis.reactivation}
              variant="vertical"
              className="w-[78px]"
            />
          </div>

          <HorizontalDivider />
        </div>
      </div>

      {/* AI Suggestions */}
      <AiSuggestion count={aiSuggestions} />
    </div>
  );
}
