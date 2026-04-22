"use client";

import React from "react";
import { Calendar } from "lucide-react";
import { Badge } from "./Badge";
import { AiSuggestion } from "./AiSuggestion";
import { IconDpe, DpeType } from "./IconDpe";

/**
 * ListCarnet - Ligne de liste carnet d'entretien
 * Organism du design system RealAgent
 *
 * Ligne (100px) sans image ni KPIs :
 * - Gauche :
 *   - Ligne 1 : bloc titre "Carnet d'entretien n° {reference}" — 20/24 semibold, px=10 py=6
 *   - Ligne 2 : blocs texte xsm (ville • type • surface • DPE • propriétaire) — 12/14 semibold, px=10 py=8, séparés par dots 5px
 * - Droite : badge statut, date, AI suggestions
 *
 * Figma : "List . carnet" — h=100px, justify-between
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
  /** Nom du propriétaire (ex: "Roberto RASTAPOPULOS") */
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
 * Dot separator — rond 5px entre les blocs texte de la ligne 2
 */
function Dot() {
  return (
    <span className="size-[5px] rounded-full bg-content-body shrink-0" />
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
  const statusConfig = STATUS_MAP[status];

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action rounded-lg flex items-center justify-between h-[100px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : titre + infos du bien + propriétaire */}
      <div className="flex flex-col justify-center shrink-0">
        {/* Ligne 1 — Titre : 20/24 semibold, px=10 py=6 */}
        <span className="text-[20px] font-semibold font-roboto text-content-body leading-[24px] px-[10px] py-[6px]">
          Carnet d&apos;entretien n° {reference}
        </span>

        {/* Ligne 2 — Blocs texte xsm séparés par dots, gap=0 */}
        <div className="flex items-center">
          <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
            {city}
          </span>
          <Dot />
          <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
            {propertyType}
          </span>
          <Dot />
          <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
            {surface}
          </span>
          {dpeGrade && (
            <>
              <IconDpe type={dpeGrade} />
            </>
          )}
          <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
            {ownerName}
          </span>
        </div>
      </div>

      {/* Droite : statut + date + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0 pr-[37px]">
        <Badge variant={statusConfig.variant}>{statusConfig.label}</Badge>
        {date && (
          <div className="inline-flex gap-[4px] items-center shrink-0">
            <div className="shrink-0 size-[20px] flex items-center justify-center">
              <Calendar size={20} style={{ color: "var(--icon-neutral-default)" }} />
            </div>
            <span className="text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap">
              {date}
            </span>
          </div>
        )}
        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
