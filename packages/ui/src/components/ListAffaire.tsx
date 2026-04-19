/**
 * MOLECULE: ListAffaire
 *
 * Item de liste pour une affaire immobilière avec zone variable selon le type.
 * Suit le même pattern que ListBien / ListClient.
 *
 * Largeur totale : 1191px (600px gauche + 1px divider + 590px droite)
 * Hauteur        : 120px
 *
 * Section gauche (~600px) :
 *   - Badge type affaire (variant = statut mandat)
 *   - Span référence (ex : "MV-0042")
 *   - 4 Chips bien (type, surface, ville, prix)
 *   - 1 Chip client (User icon)
 *   - Span étape pipeline
 *
 * Section droite (~590px) :
 *   - KpiIndicator probabilité de gain (%)
 *   - Span CA pondéré
 *   - Zone variable selon dealType
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
import { ListItemDivider } from "./ListItemDivider";
import {
  DealType,
  DEAL_TYPE_LABELS,
  PipelineStage,
  PIPELINE_STAGE_LABELS,
} from "./deal-types";

export interface ListAffaireProps {
  // Tronc commun
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
  theme = "light",
  forceHover = false,
}: ListAffaireProps) {
  const [isHovered, setIsHovered] = useState(forceHover);

  const isDark = theme === "dark";
  const hovered = forceHover || isHovered;

  const iconColor = isDark ? "#d0d1d4" : "#444955";

  const getBorderColor = () => {
    if (isDark) {
      return hovered ? "#333740" : "#22252B"; // neutral-600 : neutral-700
    }
    return hovered ? "#C7C8CB" : "#ECEDEE"; // neutral-200 : neutral-50
  };

  const getBackgroundColor = () => {
    if (isDark) {
      return hovered ? "#22252B" : "#111215"; // neutral-700 : neutral-800
    }
    return hovered ? "#ECEDEE" : "#FFFFFF"; // neutral-50 : neutral-white
  };

  const getTextSecondaryColor = () => {
    return isDark ? "#A1A4AA" : "#A1A4AA"; // neutral-400
  };

  const getTextBodyColor = () => {
    return isDark ? "#D0D1D4" : "#444955"; // neutral-300 dark / neutral-500 light
  };

  // Zone variable selon le type d'affaire
  const renderVariableZone = () => {
    switch (dealType) {
      case "VENTE":
        return (
          <div className="flex flex-col gap-[8px] items-start">
            {/* Annonce */}
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
            {/* Leads + Visites */}
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
            {/* Promesse */}
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
          <div className="flex flex-col gap-[8px] items-start">
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
          <div className="flex flex-col gap-[8px] items-start">
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
          <div className="flex flex-col gap-[8px] items-start">
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
    <div className={className} style={{ paddingTop: "15px", paddingBottom: "15px" }}>
      <div
        className="flex items-center transition-colors"
        style={{
          width: "1191px",
          height: "120px",
          border: `1px solid ${getBorderColor()}`,
          borderRadius: "16px",
          backgroundColor: getBackgroundColor(),
          cursor: onDealClick ? "pointer" : "default",
        }}
        onMouseEnter={() => !forceHover && setIsHovered(true)}
        onMouseLeave={() => !forceHover && setIsHovered(false)}
        onClick={onDealClick}
      >
        {/* Section gauche (~600px) */}
        <div
          className="flex flex-col justify-center gap-[8px] px-[20px]"
          style={{ width: "600px", height: "100%" }}
        >
          {/* Ligne 1 : Badge type + Référence */}
          <div className="flex items-center gap-[10px]">
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
            {pipelineStage && (
              <span
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: getTextSecondaryColor(),
                  whiteSpace: "nowrap",
                }}
              >
                · {PIPELINE_STAGE_LABELS[pipelineStage]}
              </span>
            )}
          </div>

          {/* Ligne 2 : 4 Chips bien */}
          <div className="flex items-center gap-[12px] flex-wrap">
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

          {/* Ligne 3 : Chip client + date dernière activité */}
          <div className="flex items-center gap-[12px]">
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
        </div>

        {/* Divider */}
        <div className="flex items-center" style={{ width: "30px", height: "100%" }}>
          <div style={{ width: "15px" }} />
          <div style={{ width: "1px", height: "84px" }}>
            <VerticalDivider
              height={84}
              theme={theme}
              variant={hovered ? "hover" : "default"}
            />
          </div>
          <div style={{ width: "14px" }} />
        </div>

        {/* Section droite (~590px) */}
        <div
          className="flex items-center gap-[24px] px-[20px]"
          style={{ width: "561px", height: "100%" }}
        >
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

          {/* Divider */}
          <div className="flex items-center" style={{ width: "30px", height: "100%" }}>
            <div style={{ width: "15px" }} />
            <div style={{ width: "1px", height: "84px" }}>
              <VerticalDivider
                height={84}
                theme={theme}
                variant={hovered ? "hover" : "default"}
              />
            </div>
            <div style={{ width: "14px" }} />
          </div>

          {/* CA pondéré */}
          <div className="flex flex-col gap-[4px]" style={{ minWidth: "100px" }}>
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

          {/* Divider */}
          <div className="flex items-center" style={{ width: "30px", height: "100%" }}>
            <div style={{ width: "15px" }} />
            <div style={{ width: "1px", height: "84px" }}>
              <VerticalDivider
                height={84}
                theme={theme}
                variant={hovered ? "hover" : "default"}
              />
            </div>
            <div style={{ width: "14px" }} />
          </div>

          {/* Zone variable */}
          <div className="flex-1">{renderVariableZone()}</div>
        </div>
      </div>

      <ListItemDivider />
    </div>
  );
}
