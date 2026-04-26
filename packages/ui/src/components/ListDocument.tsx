"use client";

import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { Chip } from "./Chip";

/**
 * ListDocument - Ligne de liste document
 * Organism du design system RealAgent
 *
 * Ligne (100px) :
 *   - Ligne 1 : titre du document
 *   - Ligne 2 : clientName . propertyRef . propertyType . surface
 *   - Droite : Chip date (Calendar icon) + Badge validité + Voir + AI
 *
 * Figma : "List . document" — h=100px, px=20, justify-between
 */

export interface ListDocumentProps {
  /** Titre du document */
  title: string;
  /** Nom du client */
  clientName?: string;
  /** Référence du bien */
  propertyRef?: string;
  /** Type du bien (T3, Maison, etc.) */
  propertyType?: string;
  /** Surface du bien (ex: "85m²") */
  surface?: string;
  /** Date de création (ex: "12 fév. 2026") */
  createdDate: string;
  /** Statut de validité du document */
  validityStatus?: 'valid' | 'expiring' | 'expired';
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

export function ListDocument({
  title,
  clientName,
  propertyRef,
  propertyType,
  surface,
  createdDate,
  validityStatus,
  aiSuggestions = 0,
  onView,
  onClick,
  className = "",
}: ListDocumentProps) {
  /* Collecte des blocs texte de la ligne 2 pour gérer les dots */
  const blocks: React.ReactNode[] = [];

  if (clientName) {
    blocks.push(
      <span key="clientName" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
        {clientName}
      </span>
    );
  }
  if (propertyRef) {
    blocks.push(
      <span key="propertyRef" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
        {propertyRef}
      </span>
    );
  }
  if (propertyType) {
    blocks.push(
      <span key="propertyType" className="text-[12px] font-semibold font-roboto text-content-body leading-[14px] px-[10px] py-[8px] whitespace-nowrap">
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
        </div>
      </div>

      {/* Droite : chip date + badge validité + bouton + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        <Chip icon={<Calendar size={20} />} size="medium">
          {createdDate}
        </Chip>

        {validityStatus === 'valid' && (
          <Badge variant="success">VALIDE</Badge>
        )}
        {validityStatus === 'expiring' && (
          <Badge variant="warning">EXPIRE BIENTÔT</Badge>
        )}
        {validityStatus === 'expired' && (
          <Badge variant="error">EXPIRÉ</Badge>
        )}

        <Button variant="ghost" size="default" onClick={onView}>
          Voir
          <ArrowRight size={20} />
        </Button>

        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
