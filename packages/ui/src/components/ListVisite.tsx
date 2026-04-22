"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { IconDpe, DpeType } from "./IconDpe";

/**
 * ListVisite - Ligne de liste visite
 * Organism du design system RealAgent
 *
 * Ligne (100px) :
 * - Gauche :
 *   - Ligne 1 : titre "Visite" — 20/24 semibold, px=10 py=6
 *   - Ligne 2 : blocs texte xsm (date • heure • ville • type • surface • DPE • client) — 12/14 semibold, px=10 py=8, séparés par dots 5px
 * - Droite : 3 badges workflow (CAL, ODJ, CR), bouton "Voir", AI suggestions
 *
 * Workflow badges :
 *   disabled = étape non commencée
 *   warning  = étape en cours
 *   success  = étape terminée
 *
 * Figma : "List . visite" — h=100px, px=20, justify-between
 */

export interface VisiteWorkflow {
  cal: BadgeVariant;
  odj: BadgeVariant;
  cr: BadgeVariant;
}

export interface ListVisiteProps {
  /** Date de la visite (ex: "12 fév. 2026") */
  date?: string;
  /** Heure du rendez-vous (ex: "14h00") */
  time?: string;
  /** Ville / commune du bien visité */
  city?: string;
  /** Type du bien visité (T3, Maison, etc.) */
  propertyType?: string;
  /** Surface du bien visité (ex: "120m²") */
  surface?: string;
  /** Note DPE du bien visité (A-G) — masqué si absent */
  dpeGrade?: DpeType;
  /** Nom et prénom de l'acquéreur ou du locataire */
  clientName?: string;
  /** Statuts des 3 étapes du workflow */
  workflow: VisiteWorkflow;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic sur "Voir" */
  onView?: () => void;
  /** Callback au clic sur la ligne */
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

export function ListVisite({
  date,
  time,
  city,
  propertyType,
  surface,
  dpeGrade,
  clientName,
  workflow,
  aiSuggestions = 0,
  onView,
  onClick,
  className = "",
}: ListVisiteProps) {
  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action rounded-lg flex items-center justify-between h-[100px] px-[20px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : titre + infos visite */}
      <div className="flex flex-col justify-center shrink-0">
        {/* Ligne 1 — Titre : 20/24 semibold, px=10 py=6 */}
        <span className="text-[20px] font-semibold font-roboto text-content-body leading-[24px] px-[10px] py-[6px]">
          Visite
        </span>

        {/* Ligne 2 — Blocs texte xsm séparés par dots, gap=0 */}
        <div className="flex items-center">
          {date && (
            <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
              {date}
            </span>
          )}
          {date && time && <Dot />}
          {time && (
            <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
              {time}
            </span>
          )}
          {(date || time) && city && <Dot />}
          {city && (
            <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
              {city}
            </span>
          )}
          {(date || time || city) && propertyType && <Dot />}
          {propertyType && (
            <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
              {propertyType}
            </span>
          )}
          {(date || time || city || propertyType) && surface && <Dot />}
          {surface && (
            <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
              {surface}
            </span>
          )}
          {dpeGrade && <IconDpe type={dpeGrade} size="small" />}
          {clientName && (
            <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
              {clientName}
            </span>
          )}
        </div>
      </div>

      {/* Droite : workflow badges + bouton + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        <div className="flex gap-[24px] items-center">
          <Badge variant={workflow.cal}>CAL</Badge>
          <Badge variant={workflow.odj}>ODJ</Badge>
          <Badge variant={workflow.cr}>CR</Badge>
        </div>

        <Button variant="ghost" size="default" onClick={onView}>
          Voir
          <ArrowRight size={20} />
        </Button>

        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
