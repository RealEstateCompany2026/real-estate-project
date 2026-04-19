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
} from "./deal-types";

/**
 * CardAffaire - Card affaire pour vue Kanban
 * Organism du design system RealAgent
 *
 * Version verticale (350px) du composant ListAffaire.
 * L'étape pipeline n'est PAS affichée (implicite dans la colonne Kanban).
 *
 * Pattern identique à CardBien : Tailwind `group` + CSS variables, ZERO useState.
 */

export interface CardAffaireProps {
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

function HorizontalDivider() {
  return (
    <div className="divider w-full h-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] transition-colors" />
  );
}

function VerticalDivider() {
  return (
    <div className="divider h-[84px] w-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] shrink-0 transition-colors" />
  );
}

export function CardAffaire({
  dealType,
  mandateVariant = "disabled",
  reference,
  propertyType,
  propertySurface,
  propertyCity,
  propertyPrice,
  clientName,
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
}: CardAffaireProps) {
  const iconColor = "var(--icon-neutral-default)";

  const renderVariableZone = () => {
    switch (dealType) {
      case "VENTE":
        return (
          <div className="flex flex-col gap-[8px] items-start w-full">
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
          <div className="flex flex-col gap-[8px] items-start w-full">
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
          <div className="flex flex-col gap-[8px] items-start w-full">
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
          <div className="flex flex-col gap-[8px] items-start w-full">
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
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex flex-col items-start pb-[20px] w-[350px] cursor-pointer transition-colors overflow-hidden ${className}`.trim()}
      onClick={onDealClick}
    >
      {/* Header : Badge type + référence */}
      <div className="flex flex-col gap-[8px] items-start px-[20px] pt-[20px] w-full">
        <div className="flex items-center gap-[8px]">
          <Badge variant={mandateVariant}>{DEAL_TYPE_LABELS[dealType]}</Badge>
          <span className="text-xs font-normal font-roboto text-content-secondary whitespace-nowrap">
            {reference}
          </span>
        </div>

        {/* Chips bien */}
        <div className="flex flex-wrap gap-[8px] items-center">
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

        {/* Chip client */}
        {clientName && (
          <Chip size="small" icon={<User size={16} style={{ color: iconColor }} />} iconPosition="left">
            {clientName}
          </Chip>
        )}

        {/* Date dernière activité */}
        {lastActivityDate && (
          <span className="text-xs font-normal font-roboto text-content-secondary">
            {lastActivityDate}
          </span>
        )}
      </div>

      <HorizontalDivider />

      {/* KPI : probabilité + CA pondéré */}
      <div className="flex items-center gap-[16px] px-[20px] py-[16px] w-full">
        <KpiIndicator
          icon={<TrendingUp size={16} style={{ color: iconColor }} />}
          value={`${winProbability}%`}
          percentage={winProbability}
          variant="vertical"
          className="w-[90px]"
        />

        <VerticalDivider />

        <div className="flex flex-col gap-[4px]">
          <span className="text-xs font-normal font-roboto text-content-secondary">CA pondéré</span>
          <span className="text-base font-semibold font-roboto text-content-body whitespace-nowrap">
            {weightedRevenue ?? "\u2014"}
          </span>
        </div>
      </div>

      <HorizontalDivider />

      {/* Zone variable */}
      <div className="px-[20px] pt-[16px] w-full">{renderVariableZone()}</div>
    </div>
  );
}
