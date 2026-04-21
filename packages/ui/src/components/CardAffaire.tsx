"use client";

import React from "react";
import { Home, Maximize2, MapPin, User, Users, Eye, FileText, FolderOpen } from "lucide-react";
import { Badge } from "./Badge";
import type { BadgeVariant } from "./Badge";
import { Chip } from "./Chip";
import { AiSuggestion } from "./AiSuggestion";
import {
  DealType,
  DEAL_TYPE_LABELS,
  PipelineStage,
  PIPELINE_STAGE_LABELS,
} from "./deal-types";

/**
 * CardAffaire - Card affaire pour vue Kanban
 * Organism du design system RealAgent
 *
 * Layout vertical (w=350px) en 5 sections empilees separees par des HorizontalDivider :
 * S1 Identification -> S2 Statut -> S3 Commercialisation -> S4 Closing (absent GESTION) -> S5 IA
 *
 * Contenu conditionnel par dealType (VENTE, ACQUISITION, LOCATION, GESTION).
 * Pattern : Tailwind `group` + CSS variables, ZERO useState.
 */

export interface CardAffaireProps {
  // Section 1 — Identification
  reference: string;
  clientName?: string;
  propertyType?: string;
  propertySurface?: string;
  propertyCity?: string;

  // Section 2 — Statut
  dealType: DealType;
  status?: string;
  pipelineStage?: PipelineStage;

  // Section 3 — Commercialisation
  listingStatus?: BadgeVariant;
  searchStatus?: BadgeVariant;
  occupancyStatus?: BadgeVariant;
  maintenanceStatus?: BadgeVariant;
  leadsCount?: number;
  visitsCount?: number;
  offersCount?: number;
  applicationsCount?: number;

  // Section 4 — Closing
  promiseStatus?: BadgeVariant;
  applicationResultStatus?: BadgeVariant;
  weightedRevenue?: string;
  winProbability?: number;

  // Section 5 — Suggestions IA
  aiSuggestions?: number;

  // Interaction
  onDealClick?: () => void;
  className?: string;
}

function HorizontalDivider() {
  return (
    <div className="divider w-full h-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] transition-colors" />
  );
}

export function CardAffaire({
  reference,
  clientName,
  propertyType,
  propertySurface,
  propertyCity,
  dealType,
  status,
  pipelineStage,
  listingStatus,
  searchStatus,
  occupancyStatus,
  maintenanceStatus,
  leadsCount = 0,
  visitsCount = 0,
  offersCount = 0,
  applicationsCount = 0,
  promiseStatus,
  applicationResultStatus,
  weightedRevenue,
  winProbability = 0,
  aiSuggestions = 0,
  onDealClick,
  className = "",
}: CardAffaireProps) {
  const iconColor = "var(--icon-neutral-default)";
  const dealBadgeVariant: BadgeVariant = pipelineStage === 'MANDAT' ? 'default' : 'success';
  const probabilityVariant: BadgeVariant =
    winProbability === 0 ? "disabled" :
    winProbability > 70 ? "success" :
    winProbability >= 30 ? "warning" :
    "error";

  /* ── Section 3 — Commercialisation ── */
  const renderCommercialisationSection = () => {
    switch (dealType) {
      case "VENTE":
        return (
          <div className="flex flex-row items-center gap-[8px] flex-wrap w-full">
            <Badge variant={listingStatus ?? "disabled"}>Annonce</Badge>
            <Chip size="small" icon={<Users size={16} style={{ color: iconColor }} />} iconPosition="left">{leadsCount}</Chip>
            <Chip size="small" icon={<Eye size={16} style={{ color: iconColor }} />} iconPosition="left">{visitsCount}</Chip>
            <Chip size="small" icon={<FileText size={16} style={{ color: iconColor }} />} iconPosition="left">{offersCount}</Chip>
          </div>
        );

      case "ACQUISITION":
        return (
          <div className="flex flex-row items-center gap-[8px] flex-wrap w-full">
            <Badge variant={searchStatus ?? "disabled"}>Recherche</Badge>
            <Chip size="small" icon={<Users size={16} style={{ color: iconColor }} />} iconPosition="left">{leadsCount}</Chip>
            <Chip size="small" icon={<Eye size={16} style={{ color: iconColor }} />} iconPosition="left">{visitsCount}</Chip>
            <Chip size="small" icon={<FileText size={16} style={{ color: iconColor }} />} iconPosition="left">{offersCount}</Chip>
          </div>
        );

      case "LOCATION":
        return (
          <div className="flex flex-row items-center gap-[8px] flex-wrap w-full">
            <Badge variant={searchStatus ?? "disabled"}>Recherche</Badge>
            <Chip size="small" icon={<Users size={16} style={{ color: iconColor }} />} iconPosition="left">{leadsCount}</Chip>
            <Chip size="small" icon={<Eye size={16} style={{ color: iconColor }} />} iconPosition="left">{visitsCount}</Chip>
            <Chip size="small" icon={<FolderOpen size={16} style={{ color: iconColor }} />} iconPosition="left">{applicationsCount}</Chip>
          </div>
        );

      case "GESTION":
        return (
          <div className="flex flex-row items-center gap-[8px] flex-wrap w-full">
            <Badge variant={occupancyStatus ?? "disabled"}>Occupé</Badge>
            <Badge variant={maintenanceStatus ?? "disabled"}>Entretien</Badge>
            <Chip size="small" icon={<Users size={16} style={{ color: iconColor }} />} iconPosition="left">{leadsCount}</Chip>
            <Chip size="small" icon={<Eye size={16} style={{ color: iconColor }} />} iconPosition="left">{visitsCount}</Chip>
            <Chip size="small" icon={<FolderOpen size={16} style={{ color: iconColor }} />} iconPosition="left">{applicationsCount}</Chip>
          </div>
        );

      default:
        return null;
    }
  };

  /* ── Section 4 — Closing ── */
  const renderClosingSection = () => {
    switch (dealType) {
      case "VENTE":
      case "ACQUISITION":
        return (
          <div className="flex flex-row items-center justify-between w-full">
            <Badge variant={promiseStatus ?? "disabled"}>Promesse</Badge>
            <span className="text-base font-semibold font-roboto text-content-body whitespace-nowrap">
              {weightedRevenue ?? "\u2014"}
            </span>
            <Badge variant={probabilityVariant}>
              {winProbability}%
            </Badge>
          </div>
        );

      case "LOCATION":
        return (
          <div className="flex flex-row items-center justify-between w-full">
            <Badge variant={applicationResultStatus ?? "disabled"}>Dossier</Badge>
            <span className="text-base font-semibold font-roboto text-content-body whitespace-nowrap">
              {weightedRevenue ?? "\u2014"}
            </span>
            <Badge variant={probabilityVariant}>
              {winProbability}%
            </Badge>
          </div>
        );

      case "GESTION":
        return null;

      default:
        return null;
    }
  };

  const showClosingSection = dealType !== "GESTION";

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-lg flex flex-col items-start w-[350px] cursor-pointer transition-colors overflow-hidden ${className}`.trim()}
      onClick={onDealClick}
    >
      {/* S1 — Identification */}
      <div className="flex flex-col gap-[8px] items-start px-[20px] py-[16px] w-full">
        {/* Ligne 1 : reference + Chip client */}
        <div className="flex items-center gap-[10px]">
          <span className="text-base font-semibold font-roboto text-content-body whitespace-nowrap">
            {reference}
          </span>
          {clientName && (
            <Chip size="small" icon={<User size={16} style={{ color: iconColor }} />} iconPosition="left">
              {clientName}
            </Chip>
          )}
        </div>

        {/* Ligne 2 : Chips type de bien + surface + ville */}
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
        </div>
      </div>

      <HorizontalDivider />

      {/* S2 — Statut */}
      <div className="flex flex-row items-center gap-[8px] px-[20px] py-[16px] w-full">
        <Badge variant={dealBadgeVariant}>{DEAL_TYPE_LABELS[dealType]}</Badge>
        {pipelineStage && (
          <Chip size="small">{PIPELINE_STAGE_LABELS[pipelineStage]}</Chip>
        )}
      </div>

      <HorizontalDivider />

      {/* S3 — Commercialisation */}
      <div className="px-[20px] py-[16px] w-full">
        {renderCommercialisationSection()}
      </div>

      {/* S4 — Closing (absent pour GESTION) */}
      {showClosingSection && (
        <>
          <HorizontalDivider />
          <div className="px-[20px] py-[16px] w-full">
            {renderClosingSection()}
          </div>
        </>
      )}

      <HorizontalDivider />

      {/* S5 — Suggestions IA */}
      <div className="flex items-center justify-center px-[20px] py-[16px] w-full">
        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
