"use client";

import React from "react";
import { MapPin, Home, Maximize2, UserCircle, Calendar } from "lucide-react";
import { Badge } from "./Badge";
import { AiSuggestion } from "./AiSuggestion";
import { IconDpe, DpeType } from "./IconDpe";

/**
 * ListCarnet - Ligne de liste carnet d'entretien
 * Organism du design system RealAgent
 *
 * Ligne simple (100px) sans image ni KPIs :
 * - Gauche : titre "Carnet d'entretien n° {reference}" + chips (ville, type, surface, DPE, propriétaire)
 * - Droite : badge statut (ACTIVÉ/DORMANT), date, AI suggestions
 *
 * Figma : "List . carnet" — h=100px, px=33/37, py=25, justify-between
 * Variantes : light / dark
 */

export type CarnetStatus = "active" | "dormant" | "pending" | "transferred" | "archived";

const STATUS_MAP: Record<CarnetStatus, { label: string; variant: "success" | "warning" | "disabled" | "information" | "default" }> = {
  active: { label: "ACTIVÉ", variant: "success" },
  dormant: { label: "DORMANT", variant: "disabled" },
  pending: { label: "EN ATTENTE", variant: "warning" },
  transferred: { label: "TRANSFÉRÉ", variant: "information" },
  archived: { label: "ARCHIVÉ", variant: "default" },
};

export interface ListCarnetProps {
  /** Numéro du carnet d'entretien (ex: "CE-0042") */
  reference: string;
  /** Ville / commune */
  city: string;
  /** Type de bien (T3, Maison, etc.) */
  propertyType: string;
  /** Surface (ex: "120m²") */
  surface: string;
  /** Note DPE (A-G) */
  dpeGrade?: DpeType;
  /** Nom du propriétaire (ex: "RASTAPOPULOS, Roberto") */
  ownerName: string;
  /** Statut du carnet */
  status?: CarnetStatus;
  /** Date d'activation ou dernière mise à jour */
  date?: string;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic */
  onClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
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

export function ListCarnet({
  reference,
  city,
  propertyType,
  surface,
  dpeGrade,
  ownerName,
  status = "active",
  date,
  aiSuggestions = 0,
  onClick,
  className = "",
}: ListCarnetProps) {
  const iconColor = "var(--icon-neutral-default)";
  const statusConfig = STATUS_MAP[status];

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action rounded-lg flex items-center justify-between h-[100px] pl-[33px] pr-[37px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : titre + infos du bien + propriétaire */}
      <div className="flex flex-col gap-[8px] justify-center shrink-0">
        <span className="text-lg font-semibold font-roboto text-content-body leading-[24px]">
          Carnet d&apos;entretien n° {reference}
        </span>
        <div className="flex gap-[24px] items-center">
          <IconText icon={<MapPin size={20} style={{ color: iconColor }} />}>
            {city}
          </IconText>
          <IconText icon={<Home size={20} style={{ color: iconColor }} />}>
            {propertyType}
          </IconText>
          <IconText icon={<Maximize2 size={20} style={{ color: iconColor }} />}>
            {surface}
          </IconText>
          {dpeGrade && <IconDpe type={dpeGrade} />}
          <IconText icon={<UserCircle size={20} style={{ color: iconColor }} />}>
            {ownerName}
          </IconText>
        </div>
      </div>

      {/* Droite : statut + date + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        <Badge variant={statusConfig.variant}>{statusConfig.label}</Badge>
        {date && (
          <IconText icon={<Calendar size={20} style={{ color: iconColor }} />}>
            {date}
          </IconText>
        )}
        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
