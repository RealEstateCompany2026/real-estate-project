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
 * ListAffaire - Ligne de liste affaire immobiliere
 * Organism du design system RealAgent
 *
 * Layout horizontal (h=120px) en 5 sections separees par des VerticalDivider :
 * S1 Identification (~300px) | S2 Statut (~160px) | S3 Commercialisation (~220px)
 * | S4 Closing (flex-1, absent pour GESTION) | S5 IA (86px)
 *
 * Contenu conditionnel par dealType (VENTE, ACQUISITION, LOCATION, GESTION).
 * Pattern : Tailwind `group` + CSS variables, ZERO useState.
 */

export interface ListAffaireProps {
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

function VerticalDivider() {
  return (
    <div className="divider h-[84px] w-px bg-[var(--border-divider)] dark:group-hover:bg-[var(--neutral-600)] shrink-0 transition-colors" />
  );
}

export function ListAffaire({
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
}: ListAffaireProps) {
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
          <div className="flex flex-col gap-[8px] items-start">
            <Badge variant={listingStatus ?? "disabled"}>Annonce</Badge>
            <div className="flex items-center gap-[8px] flex-wrap">
              <Chip size="small" icon={<Users size={16} style={{ color: iconColor }} />} iconPosition="left">{leadsCount}</Chip>
              <Chip size="small" icon={<Eye size={16} style={{ color: iconColor }} />} iconPosition="left">{visitsCount}</Chip>
              <Chip size="small" icon={<FileText size={16} style={{ color: iconColor }} />} iconPosition="left">{offersCount}</Chip>
            </div>
          </div>
        );

      case "ACQUISITION":
        return (
          <div className="flex flex-col gap-[8px] items-start">
            <Badge variant={searchStatus ?? "disabled"}>Recherche</Badge>
            <div className="flex items-center gap-[8px] flex-wrap">
              <Chip size="small" icon={<Users size={16} style={{ color: iconColor }} />} iconPosition="left">{leadsCount}</Chip>
              <Chip size="small" icon={<Eye size={16} style={{ color: iconColor }} />} iconPosition="left">{visitsCount}</Chip>
              <Chip size="small" icon={<FileText size={16} style={{ color: iconColor }} />} iconPosition="left">{offersCount}</Chip>
            </div>
          </div>
        );

      case "LOCATION":
        return (
          <div className="flex flex-col gap-[8px] items-start">
            <Badge variant={searchStatus ?? "disabled"}>Recherche</Badge>
            <div className="flex items-center gap-[8px] flex-wrap">
              <Chip size="small" icon={<Users size={16} style={{ color: iconColor }} />} iconPosition="left">{leadsCount}</Chip>
              <Chip size="small" icon={<Eye size={16} style={{ color: iconColor }} />} iconPosition="left">{visitsCount}</Chip>
              <Chip size="small" icon={<FolderOpen size={16} style={{ color: iconColor }} />} iconPosition="left">{applicationsCount}</Chip>
            </div>
          </div>
        );

      case "GESTION":
        return (
          <div className="flex flex-col gap-[8px] items-start">
            <div className="flex items-center gap-[8px]">
              <Badge variant={occupancyStatus ?? "disabled"}>Occupé</Badge>
              <Badge variant={maintenanceStatus ?? "disabled"}>Entretien</Badge>
            </div>
            <div className="flex items-center gap-[8px] flex-wrap">
              <Chip size="small" icon={<Users size={16} style={{ color: iconColor }} />} iconPosition="left">{leadsCount}</Chip>
              <Chip size="small" icon={<Eye size={16} style={{ color: iconColor }} />} iconPosition="left">{visitsCount}</Chip>
              <Chip size="small" icon={<FolderOpen size={16} style={{ color: iconColor }} />} iconPosition="left">{applicationsCount}</Chip>
            </div>
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
          <div className="flex flex-col gap-[8px] items-start">
            <Badge variant={promiseStatus ?? "disabled"}>Promesse</Badge>
            <div className="flex flex-row items-center justify-between w-full">
              <span className="text-base font-semibold font-roboto text-content-body whitespace-nowrap">
                {weightedRevenue ?? "\u2014"}
              </span>
              <Badge variant={probabilityVariant}>
                {winProbability}%
              </Badge>
            </div>
          </div>
        );

      case "LOCATION":
        return (
          <div className="flex flex-col gap-[8px] items-start">
            <Badge variant={applicationResultStatus ?? "disabled"}>Dossier</Badge>
            <div className="flex flex-row items-center justify-between w-full">
              <span className="text-base font-semibold font-roboto text-content-body whitespace-nowrap">
                {weightedRevenue ?? "\u2014"}
              </span>
              <Badge variant={probabilityVariant}>
                {winProbability}%
              </Badge>
            </div>
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
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-lg flex items-center h-[120px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onDealClick}
    >
      {/* S1 — Identification (~300px) */}
      <div className="flex flex-col justify-center gap-[8px] px-[20px] shrink-0 min-w-[425px] h-full">
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
        <div className="flex items-center gap-[8px] flex-wrap">
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

      <VerticalDivider />

      {/* S2 — Statut (~160px) */}
      <div className="flex flex-col justify-center items-start gap-[8px] px-[20px] flex-1 h-full">
        <Badge variant={dealBadgeVariant}>{DEAL_TYPE_LABELS[dealType]}</Badge>
        {pipelineStage && (
          <Chip size="small">{PIPELINE_STAGE_LABELS[pipelineStage]}</Chip>
        )}
      </div>

      <VerticalDivider />

      {/* S3 — Commercialisation (~220px) */}
      <div className="flex flex-col justify-center items-start px-[20px] flex-1 h-full">
        {renderCommercialisationSection()}
      </div>

      {/* S4 — Closing (flex-1, absent pour GESTION) */}
      {showClosingSection && (
        <>
          <VerticalDivider />
          <div className="flex-1 flex flex-col justify-center px-[20px] h-full">
            {renderClosingSection()}
          </div>
        </>
      )}

      <VerticalDivider />

      {/* S5 — Suggestions IA (86px) */}
      <div className="flex flex-col items-center justify-center shrink-0 w-[86px] h-full">
        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
