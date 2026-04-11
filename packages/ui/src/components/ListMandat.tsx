"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";

/**
 * ListMandat - Ligne de liste mandat
 * Organism du design system RealAgent
 *
 * Ligne simple (70px) :
 * - Gauche : numéro de référence du mandat (ex: "MV.789.083.263")
 * - Droite : 3 badges workflow (édition, révision, signature), bouton "Voir le mandat >", AI suggestions
 *
 * Workflow badges :
 *   disabled = étape non commencée
 *   warning  = étape en cours
 *   success  = étape terminée
 *
 * Figma : "List . mandat" — h=70px, px=20, py=13, justify-between
 */

export interface MandatWorkflow {
  edition: BadgeVariant;
  revision: BadgeVariant;
  signature: BadgeVariant;
}

export interface ListMandatProps {
  /** Numéro de référence du mandat (ex: "MV.789.083.263") */
  reference: string;
  /** Statuts des 3 étapes du workflow */
  workflow: MandatWorkflow;
  /** Nombre de suggestions IA */
  aiSuggestions?: number;
  /** Callback au clic sur "Voir le mandat" */
  onView?: () => void;
  /** Callback au clic sur la ligne */
  onClick?: () => void;
  /** Classes CSS additionnelles */
  className?: string;
}

export function ListMandat({
  reference,
  workflow,
  aiSuggestions = 0,
  onView,
  onClick,
  className = "",
}: ListMandatProps) {
  return (
    <div
      className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-2xl flex items-center justify-between h-[70px] px-[20px] cursor-pointer transition-colors ${className}`.trim()}
      onClick={onClick}
    >
      {/* Gauche : référence du mandat */}
      <div className="px-[10px] py-[8px]">
        <span className="text-base font-semibold font-roboto text-content-body tracking-[0.16px] leading-[20px] whitespace-nowrap">
          {reference}
        </span>
      </div>

      {/* Droite : workflow badges + bouton + AI suggestions */}
      <div className="flex gap-[24px] items-center shrink-0">
        <div className="flex gap-[24px] items-center">
          <Badge variant={workflow.edition}>ÉDITION</Badge>
          <Badge variant={workflow.revision}>RÉVISION</Badge>
          <Badge variant={workflow.signature}>SIGNATURE</Badge>
        </div>

        <Button variant="ghost" size="default" onClick={onView}>
          Voir le mandat
          <ArrowRight size={20} />
        </Button>

        <AiSuggestion count={aiSuggestions} />
      </div>
    </div>
  );
}
