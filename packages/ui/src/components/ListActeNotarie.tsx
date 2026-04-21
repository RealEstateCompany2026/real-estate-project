"use client";

import React from "react";
import { UserCircle, Calendar, ArrowRight } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";

/**
 * ListActeNotarie - Ligne de liste acte notarié
 * Organism du design system RealAgent
 *
 * Ligne simple (70px) — une seule variante (light/dark auto via tokens).
 *
 * Layout :
 *   - Gauche : nom contact + date/heure
 *   - Droite : badge statut (PROGRAMMÉ, SIGNÉ…) + "Voir les notes >" + AI
 *
 * Figma : "List . acte notarié" — h=70px, px=20, py=13, justify-between
 */

export interface ListActeNotarieProps {
  /** Nom du contact */
  contactName: string;
  /** Date et heure de l'acte (ex: "12 mar 2026 à 17h30") */
  dateTime: string;
  /** Statut de l'acte notarié */
  status: { label: string; variant: BadgeVariant };
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic sur "Voir les notes" */
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

export function ListActeNotarie({
  contactName,
  dateTime,
  status,
  aiSuggestions = 0,
  onView,
  onClick,
  className = "",
}: ListActeNotarieProps) {
  const iconColor = "var(--icon-neutral-default)";

  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-lg flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : contact + date */}
      <div className="flex gap-[24px] items-center shrink-0">
        <IconText icon={<UserCircle size={20} style={{ color: iconColor }} />}>
          {contactName}
        </IconText>
        <IconText icon={<Calendar size={20} style={{ color: iconColor }} />}>
          {dateTime}
        </IconText>
      </div>

      {/* Droite : badge statut + bouton + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        <Badge variant={status.variant}>{status.label}</Badge>

        <Button variant="ghost" size="default" onClick={onView}>
          Voir les notes
          <ArrowRight size={20} />
        </Button>

        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
