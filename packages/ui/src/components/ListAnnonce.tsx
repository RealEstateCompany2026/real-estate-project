"use client";

import React from "react";
import { MapPin, Home, Maximize2, UserCircle, ArrowRight } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { IconDpe, DpeType } from "./IconDpe";

/**
 * ListAnnonce - Ligne de liste annonce immobilière
 * Organism du design system RealAgent
 *
 * Ligne simple (70px) :
 * - Gauche : ville, type, surface, DPE, propriétaire
 * - Droite : 3 badges workflow (édition, révision, publication), bouton "Voir >", AI suggestions
 *
 * Les 3 badges de workflow sont TOUJOURS présents avec chacun leur statut :
 *   disabled = étape non commencée
 *   warning  = étape en cours
 *   success  = étape terminée
 *
 * Figma : "List . annonce" — h=70px, pl=34, pr=31, py=25, justify-between
 */

export interface AnnonceWorkflow {
  edition: BadgeVariant;
  revision: BadgeVariant;
  publication: BadgeVariant;
}

export interface ListAnnonceProps {
  /** Ville / commune */
  city: string;
  /** Type de bien (T3, Maison, etc.) */
  propertyType: string;
  /** Surface (ex: "120m²") */
  surface: string;
  /** Note DPE (A-G) */
  dpeGrade?: DpeType;
  /** Nom du propriétaire */
  ownerName: string;
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

export function ListAnnonce({
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
  const iconColor = "var(--icon-neutral-default)";

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] pl-[34px] pr-[31px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : infos du bien + propriétaire */}
      <div className="flex gap-[24px] items-center shrink-0">
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

      {/* Droite : workflow badges + bouton Voir + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        <Badge variant={workflow.edition}>ÉDITION</Badge>
        <Badge variant={workflow.revision}>RÉVISION</Badge>
        <Badge variant={workflow.publication}>PUBLICATION</Badge>

        <Button variant="ghost" size="default" onClick={onView}>
          Voir
          <ArrowRight size={20} />
        </Button>

        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
