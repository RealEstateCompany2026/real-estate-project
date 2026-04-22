"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { IconDpe, DpeType } from "./IconDpe";

/**
 * ListMandat - Ligne de liste mandat
 * Organism du design system RealAgent
 *
 * Ligne (100px) :
 * - Gauche :
 *   - Ligne 1 : titre "Mandat n° {reference}" — 20/24 semibold, px=10 py=6
 *   - Ligne 2 : blocs texte xsm (ville • type • surface • DPE • client) — 12/14 semibold, px=10 py=8, séparés par dots 5px
 * - Droite : 3 badges workflow, bouton "Voir", AI suggestions
 *
 * Workflow badges :
 *   warning  = étape en cours
 *   success  = étape terminée
 *
 * Figma : "List . mandat" — h=100px, px=20, justify-between
 */

export interface MandatWorkflow {
  edition: BadgeVariant;
  revision: BadgeVariant;
  signature: BadgeVariant;
}

export interface ListMandatProps {
  /** Numéro de référence du mandat (ex: "MV.789.083.263") */
  reference: string;
  /** Ville du bien sous mandat (ou zone de recherche pour ACQ/LOC) */
  city?: string;
  /** Type du bien sous mandat (ou type recherché pour ACQ/LOC) */
  propertyType?: string;
  /** Surface du bien (ou surface recherchée) */
  surface?: string;
  /** Note DPE (A-G) — masqué si absent */
  dpeGrade?: DpeType;
  /** Nom et prénom du client */
  clientName?: string;
  /** Statuts des 3 étapes du workflow */
  workflow: MandatWorkflow;
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

export function ListMandat({
  reference,
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
}: ListMandatProps) {
  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action rounded-lg flex items-center justify-between h-[100px] px-[20px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : titre + infos bien/recherche + client */}
      <div className="flex flex-col justify-center shrink-0">
        {/* Ligne 1 — Titre : 20/24 semibold, px=10 py=6 */}
        <span className="text-[20px] font-semibold font-roboto text-content-body leading-[24px] px-[10px] py-[6px]">
          Mandat n° {reference}
        </span>

        {/* Ligne 2 — Blocs texte xsm séparés par dots, gap=0 */}
        <div className="flex items-center">
          {city && (
            <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
              {city}
            </span>
          )}
          {city && propertyType && <Dot />}
          {propertyType && (
            <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
              {propertyType}
            </span>
          )}
          {(city || propertyType) && surface && <Dot />}
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
          <Badge variant={workflow.edition}>ÉDITION</Badge>
          <Badge variant={workflow.revision}>RÉVISION</Badge>
          <Badge variant={workflow.signature}>SIGNATURE</Badge>
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
