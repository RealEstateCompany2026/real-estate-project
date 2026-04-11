"use client";

import React from "react";
import { UserCircle, Home, Maximize2, MapPin, ArrowRight } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";

/**
 * ListBail - Ligne de liste bail
 * Organism du design system RealAgent
 *
 * Ligne simple (70px) — une seule variante (light/dark auto via tokens).
 *
 * Layout :
 *   - Gauche : nom contact + type logement + surface + ville
 *   - Droite : 3 workflow badges (édition, révision, signature) + "Voir le bail >" + AI
 *
 * Figma : "List . bail" — h=70px, px=20, py=13, justify-between
 */

export interface BailWorkflow {
  edition: BadgeVariant;
  revision: BadgeVariant;
  signature: BadgeVariant;
}

export interface ListBailProps {
  /** Nom du contact locataire */
  contactName: string;
  /** Type de logement (ex: "T3") */
  propertyType: string;
  /** Surface (ex: "120m²") */
  surface: string;
  /** Ville (ex: "Carcassonne") */
  city: string;
  /** Workflow du bail (édition / révision / signature) */
  workflow: BailWorkflow;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic sur "Voir le bail" */
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

export function ListBail({
  contactName,
  propertyType,
  surface,
  city,
  workflow,
  aiSuggestions = 0,
  onView,
  onClick,
  className = "",
}: ListBailProps) {
  const iconColor = "var(--icon-neutral-default)";

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : contact + type + surface + ville */}
      <div className="flex gap-[24px] items-center shrink-0">
        <IconText icon={<UserCircle size={20} style={{ color: iconColor }} />}>
          {contactName}
        </IconText>
        <IconText icon={<Home size={20} style={{ color: iconColor }} />}>
          {propertyType}
        </IconText>
        <IconText icon={<Maximize2 size={20} style={{ color: iconColor }} />}>
          {surface}
        </IconText>
        <IconText icon={<MapPin size={20} style={{ color: iconColor }} />}>
          {city}
        </IconText>
      </div>

      {/* Droite : workflow badges + bouton + AI */}
      <div className="flex gap-[24px] items-center shrink-0">
        <Badge variant={workflow.edition}>ÉDITION</Badge>
        <Badge variant={workflow.revision}>RÉVISION</Badge>
        <Badge variant={workflow.signature}>SIGNATURE</Badge>

        <Button variant="ghost" size="default" onClick={onView}>
          Voir le bail
          <ArrowRight size={20} />
        </Button>

        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
