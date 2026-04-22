"use client";

import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { Chip } from "./Chip";
import { IconDpe, DpeType } from "./IconDpe";

/**
 * ListActeNotarie - Ligne de liste acte notarié
 * Organism du design system RealAgent
 *
 * Ligne (100px) :
 *   - Ligne 1 : "Acte Notarié"
 *   - Ligne 2 : vendeur • ville • type • surface • DPE • acquéreur
 *   - Droite : Chip date+heure (Calendar icon) + RDV + SIGNATURE + Voir + AI
 *
 * Figma : "List . acte notarié" — h=100px, px=20, justify-between
 */

export interface ActeNotarieWorkflow {
  rdv: BadgeVariant;
  signature: BadgeVariant;
}

export interface ListActeNotarieProps {
  /** Nom du vendeur */
  sellerName?: string;
  /** Nom de l'acquéreur */
  buyerName?: string;
  /** Ville / commune du bien */
  city?: string;
  /** Type du bien (T3, Maison, etc.) */
  propertyType?: string;
  /** Surface du bien (ex: "85m²") */
  surface?: string;
  /** Note DPE du bien (A-G) — masqué si absent */
  dpeGrade?: DpeType;
  /** Date et heure du rendez-vous notaire (ex: "12 fév. 2026 à 17h30") */
  dateTime?: string;
  /** Statuts des 2 étapes du workflow */
  workflow: ActeNotarieWorkflow;
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

export function ListActeNotarie({
  sellerName,
  buyerName,
  city,
  propertyType,
  surface,
  dpeGrade,
  dateTime,
  workflow,
  aiSuggestions = 0,
  onView,
  onClick,
  className = "",
}: ListActeNotarieProps) {
  /* Collecte des blocs texte de la ligne 2 pour gérer les dots */
  const blocks: React.ReactNode[] = [];

  if (sellerName) {
    blocks.push(
      <span key="seller" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
        {sellerName}
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
          Acte Notarié
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
          {buyerName && (
            <>
              {blocks.length > 0 && !dpeGrade && <Dot />}
              <span className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
                {buyerName}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Droite : chip date + workflow badges + bouton + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        {dateTime && (
          <Chip icon={<Calendar size={20} />} size="medium">
            {dateTime}
          </Chip>
        )}

        <div className="flex gap-[24px] items-center">
          <Badge variant={workflow.rdv}>RDV</Badge>
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
