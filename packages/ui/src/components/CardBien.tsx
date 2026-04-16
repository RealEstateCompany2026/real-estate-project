"use client";

import React from "react";
import { Tag, MapPin, Home, Maximize2 } from "lucide-react";
import { Badge } from "./Badge";
import { KpiIndicator } from "./KpiIndicator";
import { AiSuggestion } from "./AiSuggestion";
import { IconDpe, DpeType } from "./IconDpe";

/**
 * CardBien - Carte bien immobilier
 * Organism du design system RealAgent
 *
 * Affiche une carte bien compacte (350px) avec :
 * - Image du bien (pleine largeur, coins arrondis en haut)
 * - Section infos : stickers, prix, ville, type, surface, DPE
 * - Grille KPIs 1×3 avec dividers (qualification, entretien, conversion)
 * - Badge IA suggestions en bas
 *
 * Mêmes tokens de couleur que ListBien (default/hover, light/dark)
 * mais layout vertical (card) au lieu de horizontal (list row).
 */

export interface CardBienKpi {
  qualification: number;
  entretien: number;
  conversion: number;
}

export interface CardBienProps {
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
  kpis: CardBienKpi;
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
    <div className="divider w-full h-px bg-[var(--border-divider)] transition-colors" />
  );
}

/** Divider vertical 84px */
function VerticalDivider() {
  return (
    <div className="divider h-[84px] w-px bg-[var(--border-divider)] shrink-0 transition-colors" />
  );
}

/**
 * Icon+Text atom
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

export function CardBien({
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
}: CardBienProps) {
  const iconColor = "var(--icon-neutral-default)";

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex flex-col items-center pb-[24px] w-[350px] cursor-pointer transition-colors overflow-hidden ${className}`.trim()}
      onClick={onClick}
    >
      {/* Image du bien */}
      <div className="h-[160px] w-full shrink-0 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Photo du bien"
            className="size-full object-cover"
          />
        ) : (
          <div className="size-full bg-surface-disabled flex items-center justify-center">
            <Home size={40} style={{ color: iconColor }} />
          </div>
        )}
      </div>

      {/* Section infos du bien */}
      <div className="flex flex-col gap-[16px] items-start w-full px-[20px] py-[16px]">
        {/* Row 1: stickers + prix */}
        <div className="flex gap-[16px] items-center flex-wrap">
          <Badge variant="default">{operationType}</Badge>
          <IconText icon={<Tag size={20} style={{ color: iconColor }} />}>
            {price}
          </IconText>
          {hasCarnet && <Badge variant="success">CARNET</Badge>}
        </div>

        {/* Row 2: ville + type + surface + DPE */}
        <div className="flex gap-[16px] items-center flex-wrap">
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

      {/* KPIs section */}
      <div className="flex flex-col gap-[22px] items-center w-full">
        <HorizontalDivider />

        {/* Row: Qualification + Entretien + Conversion */}
        <div className="flex gap-[24px] items-center">
          <KpiIndicator
            kpi="qual"
            value={`${kpis.qualification}%`}
            percentage={kpis.qualification}
            variant="vertical"
            className="w-[77px]"
          />
          <VerticalDivider />
          <KpiIndicator
            kpi="ent"
            value={`${kpis.entretien}`}
            percentage={kpis.entretien}
            variant="vertical"
            className="w-[78px]"
          />
          <VerticalDivider />
          <KpiIndicator
            kpi="conv"
            value={`${kpis.conversion}%`}
            percentage={kpis.conversion}
            variant="vertical"
            className="w-[78px]"
          />
        </div>

        <HorizontalDivider />
      </div>

      {/* AI Suggestions */}
      <div className="pt-[22px]">
        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
