/**
 * MOLECULE: CardAffaire
 *
 * Card d'affaire pour la vue Kanban.
 * Version verticale (350px) du composant ListAffaire.
 *
 * L'étape pipeline (pipelineStage) n'est PAS affichée dans la card :
 * elle est implicite car la card est positionnée dans la colonne Kanban correspondante.
 *
 * Structure :
 *   - Header : Badge type + référence
 *   - 4 Chips bien + 1 Chip client
 *   - Divider horizontal
 *   - KpiIndicator probabilité + CA pondéré
 *   - Divider horizontal
 *   - Zone variable (même logique que ListAffaire)
 *
 * États : default light, hover light, default dark, hover dark
 */

"use client";

import { useState } from "react";
import { Home, Maximize2, MapPin, Tag, User, TrendingUp } from "lucide-react";
import { Badge } from "./Badge";
import type { BadgeVariant } from "./Badge";
import { Chip } from "./Chip";
import { KpiIndicator } from "./KpiIndicator";
import { VerticalDivider } from "./VerticalDivider";
import {
  DealType,
  DEAL_TYPE_LABELS,
  PipelineStage,
} from "./deal-types";

export interface CardAffaireProps {
  // Tronc commun
  dealType: DealType;
  mandateVariant?: BadgeVariant;
  reference: string;
  propertyType?: string;
  propertySurface?: string;
  propertyCity?: string;
  propertyPrice?: string;
  clientName?: string;
  pipelineStage?: PipelineStage; // Reçu pour info, non affiché dans la card
  lastActivityDate?: string;
  winProbability?: number;
  weightedRevenue?: string;

  // Variant Vente
  listingStatus?: BadgeVariant;
  leadsCount?: number;
  visitsCount?: number;
  offerStatus?: BadgeVariant;

  // Variant Acquisition / Location
  matchedPropertiesCount?: number;
  applicationStatus?: BadgeVariant;

  // Variant Gestion
  occupancyStatus?: BadgeVariant;
  rentStatus?: BadgeVariant;
  maintenanceStatus?: BadgeVariant;
  mandateEndDate?: string;

  // Common
  onDealClick?: () => void;
  className?: string;
  theme?: "light" | "dark";
  forceHover?: boolean;
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
  // pipelineStage intentionnellement non affiché (implicite dans le Kanban)
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
  theme = "light",
  forceHover = false,
}: CardAffaireProps) {
  const [isHovered, setIsHovered] = useState(forceHover);

  const isDark = theme === "dark";
  const hovered = forceHover || isHovered;

  const iconColor = isDark ? "#d0d1d4" : "#444955";

  const getBorderColor = () => {
    if (isDark) {
      return "#22252B"; // neutral-700
    }
    return "#ECEDEE"; // neutral-50
  };

  const getBackgroundColor = () => {
    if (isDark) {
      return hovered ? "#22252B" : "#111215"; // neutral-700 : neutral-800
    }
    return hovered ? "#ECEDEE" : "#FFFFFF"; // neutral-50 : neutral-white
  };

  const getDividerColor = () => {
    if (isDark) {
      return hovered ? "#444955" : "#22252B"; // neutral-500 : neutral-700
    }
    return hovered ? "#DADBDD" : "#ECEDEE"; // neutral-100 : neutral-50
  };

  const getTextSecondaryColor = () => {
    return isDark ? "#A1A4AA" : "#A1A4AA"; // neutral-400
  };

  const getTextBodyColor = () => {
    return isDark ? "#D0D1D4" : "#444955"; // neutral-300 dark / neutral-500 light
  };

  const HorizontalDivider = () => (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute bottom-full left-0 right-0 top-0">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 350 1"
          >
            <line stroke={getDividerColor()} x2="350" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );

  // Zone variable selon le type d'affaire
  const renderVariableZone = () => {
    switch (dealType) {
      case "VENTE":
        return (
          <div className="flex flex-col gap-[8px] items-start w-full">
            <div className="flex items-center gap-[8px]">
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: getTextSecondaryColor(),
                }}
              >
                Annonce
              </span>
              <Badge variant={listingStatus ?? "disabled"} theme={theme} />
            </div>
            <div className="flex items-center gap-[16px]">
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: getTextBodyColor(),
                }}
              >
                {leadsCount ?? 0} leads
              </span>
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: getTextBodyColor(),
                }}
              >
                {visitsCount ?? 0} visites
              </span>
            </div>
            <div className="flex items-center gap-[8px]">
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: getTextSecondaryColor(),
                }}
              >
                Promesse
              </span>
              <Badge variant={offerStatus ?? "disabled"} theme={theme} />
            </div>
          </div>
        );

      case "ACQUISITION":
        return (
          <div className="flex flex-col gap-[8px] items-start w-full">
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: getTextBodyColor(),
              }}
            >
              {matchedPropertiesCount ?? 0} biens matchés
            </span>
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: getTextBodyColor(),
              }}
            >
              {visitsCount ?? 0} visites
            </span>
            <div className="flex items-center gap-[8px]">
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: getTextSecondaryColor(),
                }}
              >
                Promesse
              </span>
              <Badge variant={offerStatus ?? "disabled"} theme={theme} />
            </div>
          </div>
        );

      case "LOCATION":
        return (
          <div className="flex flex-col gap-[8px] items-start w-full">
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: getTextBodyColor(),
              }}
            >
              {matchedPropertiesCount ?? 0} biens matchés
            </span>
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: getTextBodyColor(),
              }}
            >
              {visitsCount ?? 0} visites
            </span>
            <div className="flex items-center gap-[8px]">
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: getTextSecondaryColor(),
                }}
              >
                Dossier
              </span>
              <Badge variant={applicationStatus ?? "disabled"} theme={theme} />
            </div>
          </div>
        );

      case "GESTION":
        return (
          <div className="flex flex-col gap-[8px] items-start w-full">
            <div className="flex items-center gap-[8px]">
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: getTextSecondaryColor(),
                }}
              >
                Occupation
              </span>
              <Badge variant={occupancyStatus ?? "disabled"} theme={theme} />
            </div>
            <div className="flex items-center gap-[8px]">
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: getTextSecondaryColor(),
                }}
              >
                Loyer
              </span>
              <Badge variant={rentStatus ?? "disabled"} theme={theme} />
            </div>
            <div className="flex items-center gap-[8px]">
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: getTextSecondaryColor(),
                }}
              >
                Entretien
              </span>
              <Badge variant={maintenanceStatus ?? "disabled"} theme={theme} />
            </div>
            {mandateEndDate && (
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: getTextSecondaryColor(),
                }}
              >
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
      className={`relative ${className}`.trim()}
      style={{ width: "350px" }}
      onMouseEnter={() => !forceHover && setIsHovered(true)}
      onMouseLeave={() => !forceHover && setIsHovered(false)}
      onClick={onDealClick}
    >
      <div
        className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] relative rounded-[16px] w-full"
        style={{
          backgroundColor: getBackgroundColor(),
          cursor: onDealClick ? "pointer" : "default",
        }}
      >
        {/* Border overlay */}
        <div
          aria-hidden="true"
          className="absolute border border-solid inset-0 pointer-events-none rounded-[16px]"
          style={{
            borderColor: getBorderColor(),
          }}
        />

        {/* Header : Badge type + référence */}
        <div className="flex flex-col gap-[8px] items-start px-[20px] pt-[20px] w-full">
          <div className="flex items-center gap-[8px]">
            <Badge
              variant={mandateVariant}
              label={DEAL_TYPE_LABELS[dealType]}
              theme={theme}
            />
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: getTextSecondaryColor(),
                whiteSpace: "nowrap",
              }}
            >
              {reference}
            </span>
          </div>

          {/* 4 Chips bien */}
          <div className="flex flex-wrap gap-[8px] items-center">
            {propertyType && (
              <Chip
                size="small"
                icon={<Home size={16} style={{ color: iconColor }} />}
                iconPosition="left"
                theme={theme}
              >
                {propertyType}
              </Chip>
            )}
            {propertySurface && (
              <Chip
                size="small"
                icon={<Maximize2 size={16} style={{ color: iconColor }} />}
                iconPosition="left"
                theme={theme}
              >
                {propertySurface}
              </Chip>
            )}
            {propertyCity && (
              <Chip
                size="small"
                icon={<MapPin size={16} style={{ color: iconColor }} />}
                iconPosition="left"
                theme={theme}
              >
                {propertyCity}
              </Chip>
            )}
            {propertyPrice && (
              <Chip
                size="small"
                icon={<Tag size={16} style={{ color: iconColor }} />}
                iconPosition="left"
                theme={theme}
              >
                {propertyPrice}
              </Chip>
            )}
          </div>

          {/* Chip client */}
          {clientName && (
            <Chip
              size="small"
              icon={<User size={16} style={{ color: iconColor }} />}
              iconPosition="left"
              theme={theme}
            >
              {clientName}
            </Chip>
          )}

          {/* Date dernière activité */}
          {lastActivityDate && (
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: getTextSecondaryColor(),
              }}
            >
              {lastActivityDate}
            </span>
          )}
        </div>

        {/* Divider */}
        <HorizontalDivider />

        {/* KPI : probabilité + CA pondéré */}
        <div className="flex items-center gap-[16px] px-[20px] w-full">
          {/* KpiIndicator probabilité */}
          <div style={{ width: "90px" }}>
            <KpiIndicator
              icon={<TrendingUp size={16} style={{ color: iconColor }} />}
              value={`${winProbability}%`}
              percentage={winProbability}
              variant="vertical"
              hover={hovered}
              theme={theme}
            />
          </div>

          {/* Vertical Divider */}
          <div className="h-[84px] relative shrink-0 w-0">
            <VerticalDivider
              height={84}
              theme={theme}
              variant={hovered ? "hover" : "default"}
            />
          </div>

          {/* CA pondéré */}
          <div className="flex flex-col gap-[4px]">
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: getTextSecondaryColor(),
              }}
            >
              CA pondéré
            </span>
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: getTextBodyColor(),
                whiteSpace: "nowrap",
              }}
            >
              {weightedRevenue ?? "—"}
            </span>
          </div>
        </div>

        {/* Divider */}
        <HorizontalDivider />

        {/* Zone variable */}
        <div className="px-[20px] w-full">{renderVariableZone()}</div>
      </div>
    </div>
  );
}
