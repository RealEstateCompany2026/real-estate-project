"use client";

import React from "react";
import { Home, Maximize2, MapPin, Tag, User, TrendingUp } from "lucide-react";
import { Badge } from "./Badge";
import type { BadgeVariant } from "./Badge";
import { Chip } from "./Chip";
import { KpiIndicator } from "./KpiIndicator";
import {
  DealType,
  DEAL_TYPE_LABELS,
  PipelineStage,
  PIPELINE_STAGE_LABELS,
} from "./deal-types";

/**
 * ListAffaire - Ligne de liste affaire immobilière
 * Organism du design system RealAgent
 *
 * Affiche une ligne avec :
 * - Section gauche : Badge type + référence + chips bien/client + étape pipeline
 * - Section droite : KPI probabilité + CA pondéré + zone variable selon dealType
 *
 * Pattern identique à ListBien : Tailwind `group` + CSS variables, ZERO useState.
 */

export interface ListAffaireProps {
  dealType: DealType;
  mandateVariant?: BadgeVariant;
  reference: string;
  propertyType?: string;
  propertySurface?: string;
  propertyCity?: string;
  propertyPrice?: string;
  clientName?: string;
  pipelineStage?: PipelineStage;
  lastActivityDate?: string;
  winProbability?: number;
  weightedRevenue?: string;
  listingStatus?: BadgeVariant;
  leadsCount?: number;
  visitsCount?: number;
  offerStatus?: BadgeVariant;
  matchedPropertiesCount?: number;
  applicationStatus?: BadgeVariant;
  occupancyStatus?: BadgeVariant;
  rentStatus?: BadgeVariant;
  maintenanceStatus?: BadgeVariant;
  mandateEndDate?: string;
  onDealClick?: () => void;
  className?: string;
}

function VerticalDivider() {
  return (
    <div className="divider h-[84px] w-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] shrink-0 transition-colors" />
  );
}

export function ListAffaire({
  dealType,
  mandateVariant = "disabled",
  reference,
  propertyType,
  propertySurface,
  propertyCity,
  propertyPrice,
  clientName,
  pipelineStage,
  lastActivityDate,
  winProbability = 0,
  weightedRevenue,
  listingStatus,
  leadsCount,
  visitsCount,
  offerStatus,
  matchedPropertiesCount,
  applicationStatus,
  occupancyStatus,
  rentStatus,
  maintenanceStatus,
  mandateEndDate,
  onDealClick,
  className = "",
}: ListAffaireProps) {
  const iconColor = "var(--icon-neutral-default)";

  const renderVariableZone = () => {
    switch (dealType) {
      case "VENTE":
        return (
          <div className="flex flex-col gap-[8px] items-start">
            <div className="flex items-center gap-[8px]">
              <span className="text-xs font-normal font-roboto text-content-secondary">Annonce</span>
              <Badge variant={listingStatus ?? "disabled"} />
            </div>
            <div className="flex items-center gap-[16px]">
              <span className="text-sm font-semibold font-roboto text-content-body">{leadsCount ?? 0} leads</span>
              <span className="text-sm font-semibold font-roboto text-content-body">{visitsCount ?? 0} visites</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-xs font-normal font-roboto text-content-secondary">Promesse</span>
              <Badge variant={offerStatus ?? "disabled"} />
            </div>
          </div>
        );

      case "ACQUISITION":
        return (
          <div className="flex flex-col gap-[8px] items-start">
            <span className="text-sm font-semibold font-roboto text-content-body">{matchedPropertiesCount ?? 0} biens matchés</span>
            <span className="text-sm font-semibold font-roboto text-content-body">{visitsCount ?? 0} visites</span>
            <div className="flex items-center gap-[8px]">
              <span className="text-xs font-normal font-roboto text-content-secondary">Promesse</span>
              <Badge variant={offerStatus ?? "disabled"} />
            </div>
          </div>
        );

      case "LOCATION":
        return (
          <div className="flex flex-col gap-[8px] items-start">
            <span className="text-sm font-semibold font-roboto text-content-body">{matchedPropertiesCount ?? 0} biens matchés</span>
            <span className="text-sm font-semibold font-roboto text-content-body">{visitsCount ?? 0} visites</span>
            <div className="flex items-center gap-[8px]">
              <span className="text-xs font-normal font-roboto text-content-secondary">Dossier</span>
              <Badge variant={applicationStatus ?? "disabled"} />
            </div>
          </div>
        );

      case "GESTION":
        return (
          <div className="flex flex-col gap-[8px] items-start">
            <div className="flex items-center gap-[8px]">
              <span className="text-xs font-normal font-roboto text-content-secondary">Occupation</span>
              <Badge variant={occupancyStatus ?? "disabled"} />
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-xs font-normal font-roboto text-content-secondary">Loyer</span>
              <Badge variant={rentStatus ?? "disabled"} />
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-xs font-normal font-roboto text-content-secondary">Entretien</span>
              <Badge variant={maintenanceStatus ?? "disabled"} />
            </div>
            {mandateEndDate && (
              <span className="text-xs font-normal font-roboto text-content-secondary">
                Échéance {mandateEndDate}
              </span>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center h-[120px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onDealClick}
    >
      {/* Section gauche */}
      <div className="flex flex-col justify-center gap-[8px] px-[20px] shrink-0 h-full" style={{ width: "600px" }}>
        {/* Ligne 1 : Badge type + Référence + Pipeline */}
        <div className="flex items-center gap-[10px]">
          <Badge variant={mandateVariant}>{DEAL_TYPE_LABELS[dealType]}</Badge>
          <span className="text-xs font-normal font-roboto text-content-secondary whitespace-nowrap">
            {reference}
          </span>
          {pipelineStage && (
            <span className="text-xs font-normal font-roboto text-content-secondary whitespace-nowrap">
              · {PIPELINE_STAGE_LABELS[pipelineStage]}
            </span>
          )}
        </div>

        {/* Ligne 2 : Chips bien */}
        <div className="flex items-center gap-[12px] flex-wrap">
          {propertyType && (
            <Chip size="small" icon={<Home size={16} style={{ color: iconColor }} />} iconPosition="left">
              {propertyType}
            </Chip>
          )}
          {propertySurface && (
            <Chip size="small" icon={<Maximize2 size={16} style={{ color: iconColor }} />} iconPosition="left">
              {propertySurface}
            </Chip>
          )}
          {propertyCity && (
            <Chip size="small" icon={<MapPin size={16} style={{ color: iconColor }} />} iconPosition="left">
              {propertyCity}
            </Chip>
          )}
          {propertyPrice && (
            <Chip size="small" icon={<Tag size={16} style={{ color: iconColor }} />} iconPosition="left">
              {propertyPrice}
            </Chip>
          )}
        </div>

        {/* Ligne 3 : Chip client + date */}
        <div className="flex items-center gap-[12px]">
          {clientName && (
            <Chip size="small" icon={<User size={16} style={{ color: iconColor }} />} iconPosition="left">
              {clientName}
            </Chip>
          )}
          {lastActivityDate && (
            <span className="text-xs font-normal font-roboto text-content-secondary">{lastActivityDate}</span>
          )}
        </div>
      </div>

      <VerticalDivider />

      {/* KPI probabilité */}
      <KpiIndicator
        icon={<TrendingUp size={16} style={{ color: iconColor }} />}
        value={`${winProbability}%`}
        percentage={winProbability}
        variant="vertical"
        className="w-[90px]"
      />

      <VerticalDivider />

      {/* CA pondéré */}
      <div className="flex flex-col gap-[4px] px-[20px]" style={{ minWidth: "100px" }}>
        <span className="text-xs font-normal font-roboto text-content-secondary">CA pondéré</span>
        <span className="text-base font-semibold font-roboto text-content-body whitespace-nowrap">
          {weightedRevenue ?? "\u2014"}
        </span>
      </div>

      <VerticalDivider />

      {/* Zone variable */}
      <div className="flex-1 px-[20px]">{renderVariableZone()}</div>
    </div>
  );
}
