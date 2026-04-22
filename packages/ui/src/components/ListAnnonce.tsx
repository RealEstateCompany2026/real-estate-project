"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { IconDpe, DpeType } from "./IconDpe";

/**
 * ListAnnonce - Ligne de liste annonce immobilière
 * Organism du design system RealAgent
 *
 * Ligne (100px) :
 * - Gauche :
 *   - Ligne 1 : titre "Annonce n° {reference}" — 20/24 semibold, px=10 py=6
 *   - Ligne 2 : blocs texte xsm (ville • type • surface • DPE • propriétaire) — 12/14 semibold, px=10 py=8, séparés par dots 5px
 * - Droite : 3 badges workflow, bouton "Voir", AI suggestions
 *
 * Workflow badges :
 *   disabled = étape non commencée
 *   warning  = étape en cours
 *   success  = étape terminée
 *
 * Figma : "List . annonce" — h=100px, px=20, justify-between
 */

export interface AnnonceWorkflow {
  edition: BadgeVariant;
  revision: BadgeVariant;
  publication: BadgeVariant;
}

export interface ListAnnonceProps {
  /** Numéro de référence de l'annonce (ex: "000.000.001") */
  reference: string;
  /** Ville / commune */
  city?: string;
  /** Type de bien (T3, Maison, etc.) */
  propertyType?: string;
  /** Surface (ex: "120m²") */
  surface?: string;
  /** Note DPE (A-G) — masqué si absent */
  dpeGrade?: DpeType;
  /** Nom du propriétaire */
  ownerName?: string;
  /** Statuts des 3 étapes du workflow */
  workflow: AnnonceWorkflow;
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

export function ListAnnonce({
  reference,
  city,
  propertyType,
  surface,
  dpeGrade,
  ownerName,
  workflow,
  aiSuggestions = 0,
  onView,
  onClick,
  className = "",
}: ListAnnonceProps) {
  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action rounded-lg flex items-center justify-between h-[100px] px-[20px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : titre + infos bien + propriétaire */}
      <div className="flex flex-col justify-center shrink-0">
        {/* Ligne 1 — Titre : 20/24 semibold, px=10 py=6 */}
        <span className="text-[20px] font-semibold font-roboto text-content-body leading-[24px] px-[10px] py-[6px]">
          Annonce n° {reference}
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
          {ownerName && (
            <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
              {ownerName}
            </span>
          )}
        </div>
      </div>

      {/* Droite : workflow badges + bouton + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        <div className="flex gap-[24px] items-center">
          <Badge variant={workflow.edition}>ÉDITION</Badge>
          <Badge variant={workflow.revision}>RÉVISION</Badge>
          <Badge variant={workflow.publication}>PUBLICATION</Badge>
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
