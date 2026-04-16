"use client";

import React from "react";
import { Tag, MapPin, Home, Maximize2 } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { KpiIndicator } from "./KpiIndicator";
import { AiSuggestion } from "./AiSuggestion";
import { IconDpe, DpeType } from "./IconDpe";

/**
 * ListBien - Ligne de liste bien immobilier
 * Organism du design system RealAgent
 *
 * Affiche une ligne de la liste des biens avec :
 * - Image du bien (160×120, coins arrondis à gauche)
 * - Section infos : stickers (type opération, carnet), prix, ville, type, surface, DPE
 * - 3 KPI indicators (qualification, entretien, conversion)
 * - Badge IA suggestions
 * - Dividers verticaux entre chaque section
 *
 * Variantes Figma : défaut light, hover light, default dark, hover dark
 * Hover géré via Tailwind `group` (même pattern que ListClient)
 */

export interface ListBienKpi {
  qualification: number;
  entretien: number;
  conversion: number;
}

export interface ListBienProps {
  /** URL de l'image du bien */
  imageUrl?: string;
  /** Type d'opération (VENTE, LOCATION, etc.) */
  operationType: string;
  /** Prix affiché (ex: "450 000€") */
  price: string;
  /** Badge carnet d'entretien actif */
  hasCarnet?: boolean;
  /** Ville / commune */
  city: string;
  /** Type de bien (T3, T4, Maison, etc.) */
  propertyType: string;
  /** Surface (ex: "120m²") */
  surface: string;
  /** Note DPE (A-G) */
  dpeGrade?: DpeType;
  /** KPI pourcentages (0-100) */
  kpis: ListBienKpi;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic */
  onClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

/**
 * Divider vertical 84px
 * Default: border-divider → Hover: border-default via .group:hover .divider
 */
function VerticalDivider() {
  return (
    <div className="divider h-[84px] w-px bg-[var(--border-divider)] shrink-0 transition-colors" />
  );
}

/**
 * Icon+Text atom — réutilisé pour prix, ville, type, surface
 */
function IconText({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex gap-[4px] items-center shrink-0">
      <div className="shrink-0 size-[20px] flex items-center justify-center">
        {icon}
      </div>
      <span className="text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}

export function ListBien({
  imageUrl,
  operationType,
  price,
  hasCarnet = false,
  city,
  propertyType,
  surface,
  dpeGrade,
  kpis,
  aiSuggestions = 0,
  onClick,
  className = "",
}: ListBienProps) {
  const iconColor = "var(--icon-neutral-default)";

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[120px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Section image + infos du bien */}
      <div className="flex items-center shrink-0 h-[120px]">
        {/* Image du bien */}
        <div className="h-[120px] w-[160px] shrink-0 overflow-hidden rounded-l-2xl">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Photo du bien"
              className="size-full object-cover"
            />
          ) : (
            <div className="size-full bg-surface-disabled flex items-center justify-center">
              <Home size={32} style={{ color: iconColor }} />
            </div>
          )}
        </div>

        {/* Infos du bien */}
        <div className="flex flex-col gap-[24px] items-start pl-[16px]">
          {/* Row 1: stickers + prix */}
          <div className="flex gap-[24px] items-center">
            <Badge variant="default">{operationType}</Badge>
            <IconText icon={<Tag size={20} style={{ color: iconColor }} />}>
              {price}
            </IconText>
            {hasCarnet && <Badge variant="success">CARNET</Badge>}
          </div>

          {/* Row 2: ville + type + surface + DPE */}
          <div className="flex gap-[24px] items-center">
            <IconText icon={<MapPin size={20} style={{ color: iconColor }} />}>
              {city}
            </IconText>
            <IconText icon={<Home size={20} style={{ color: iconColor }} />}>
              {propertyType}
            </IconText>
            <IconText
              icon={<Maximize2 size={20} style={{ color: iconColor }} />}
            >
              {surface}
            </IconText>
            {dpeGrade && <IconDpe type={dpeGrade} />}
          </div>
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

      {/* KPI Entretien */}
      <KpiIndicator
        kpi="ent"
        value={`${kpis.entretien}`}
        percentage={kpis.entretien}
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

      {/* AI Suggestions */}
      <div className="flex flex-col items-center justify-center pr-[38px] py-[48px] shrink-0 w-[86px] h-[120px]">
        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
