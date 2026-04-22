"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { IconDpe, DpeType } from "./IconDpe";

/**
 * ListBail - Ligne de liste bail
 * Organism du design system RealAgent
 *
 * Ligne (100px) — variante unique (LOCATION) :
 *   - Ligne 1 : "Bail n°{reference}"
 *   - Ligne 2 : locataire • ville • type • surface • DPE
 *   - Droite : ÉDITION + RÉVISION + SIGNATURE + Voir + AI
 *
 * Figma : "List . bail" — h=100px, px=20, justify-between
 */

export interface BailWorkflow {
  edition: BadgeVariant;
  revision: BadgeVariant;
  signature: BadgeVariant;
}

export interface ListBailProps {
  /** Référence du bail (ex: "000.000.042") */
  reference?: string;
  /** Nom du locataire */
  tenantName?: string;
  /** Ville / commune du bien */
  city?: string;
  /** Type du bien (T3, Maison, etc.) */
  propertyType?: string;
  /** Surface du bien (ex: "65m²") */
  surface?: string;
  /** Note DPE du bien (A-G) — masqué si absent */
  dpeGrade?: DpeType;
  /** Workflow du bail (édition / révision / signature) */
  workflow: BailWorkflow;
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

export function ListBail({
  reference,
  tenantName,
  city,
  propertyType,
  surface,
  dpeGrade,
  workflow,
  aiSuggestions = 0,
  onView,
  onClick,
  className = "",
}: ListBailProps) {
  const title = reference ? `Bail n°${reference}` : "Bail";

  /* Collecte des blocs texte de la ligne 2 pour gérer les dots */
  const blocks: React.ReactNode[] = [];

  if (tenantName) {
    blocks.push(
      <span key="tenant" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
        {tenantName}
      </span>
    );
  }
  if (city) {
    blocks.push(
      <span key="city" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
        {city}
      </span>
    );
  }
  if (propertyType) {
    blocks.push(
      <span key="type" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
        {propertyType}
      </span>
    );
  }
  if (surface) {
    blocks.push(
      <span key="surface" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
        {surface}
      </span>
    );
  }

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action rounded-lg flex items-center justify-between h-[100px] px-[20px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : titre + infos */}
      <div className="flex flex-col justify-center shrink-0">
        {/* Ligne 1 — Titre : 20/24 semibold, px=10 py=6 */}
        <span className="text-[20px] font-semibold font-roboto text-content-body leading-[24px] px-[10px] py-[6px]">
          {title}
        </span>

        {/* Ligne 2 — Blocs texte xsm séparés par dots */}
        <div className="flex items-center">
          {blocks.map((block, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Dot />}
              {block}
            </React.Fragment>
          ))}
          {dpeGrade && <IconDpe type={dpeGrade} size="small" />}
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
