"use client";

import React from "react";
import { Sheet } from "./Sheet";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Switch } from "./Switch";
import { ArrowRight } from "lucide-react";

// ── Types ──────────────────────────────────────────────

export interface SheetOrdreDuJourProps {
  isOpen: boolean;
  onClose: () => void;
  /** Infos bien visité */
  propertyLabel: string;
  /** Nom du client visiteur */
  clientName: string;
  /** Contenu texte de l'ODJ */
  content: string;
  /** Callback quand le contenu change */
  onContentChange: (content: string) => void;
  /** Statut ODJ : EDITE / REVISE / ENVOYE */
  odjStatus: "EDITE" | "REVISE" | "ENVOYE";
  /** Switch révision (même pattern que SheetMandatEdit) */
  isRevision: boolean;
  onToggleRevision: (checked: boolean) => void;
  /** Callback pour envoyer l'ODJ */
  onSend: () => void;
  className?: string;
}

// ── Helpers ────────────────────────────────────────────

const STATUS_BADGE_VARIANT: Record<
  SheetOrdreDuJourProps["odjStatus"],
  "warning" | "information" | "success"
> = {
  EDITE: "warning",
  REVISE: "information",
  ENVOYE: "success",
};

// ── Component ──────────────────────────────────────────

export const SheetOrdreDuJour: React.FC<SheetOrdreDuJourProps> = ({
  isOpen,
  onClose,
  propertyLabel,
  clientName,
  content,
  onContentChange,
  odjStatus,
  isRevision,
  onToggleRevision,
  onSend,
  className,
}) => {
  const isSent = odjStatus === "ENVOYE";

  const footer = (
    <Button
      variant="primary"
      className="flex-1"
      onClick={onSend}
      disabled={!isRevision || isSent}
    >
      Envoyer l'Ordre du Jour
      <ArrowRight size={20} />
    </Button>
  );

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title="Ordre du Jour"
      headerAfterTitle={
        <Badge variant={STATUS_BADGE_VARIANT[odjStatus]}>{odjStatus}</Badge>
      }
      footer={footer}
      className={className}
    >
      <div className="py-[16px]">
        {/* Bloc info bien + client */}
        <div className="px-[20px] py-[12px]">
          <p className="text-sm font-roboto text-content-body">{propertyLabel}</p>
          <p className="text-sm font-roboto text-content-body">{clientName}</p>
        </div>

        {/* Bloc Révision */}
        <div className="mx-[20px] mb-[12px] rounded-lg border border-edge-default bg-surface-neutral-default p-[16px]">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold font-roboto text-content-body">
              Révision
            </span>
            <Switch
              checked={isRevision}
              onChange={onToggleRevision}
              ariaLabel="Mode révision"
            />
          </div>
        </div>

        {/* Bloc contenu — textarea */}
        <textarea
          className="mx-[20px] w-[calc(100%-40px)] min-h-[200px] rounded-lg border border-edge-default bg-surface-neutral-default p-[16px] text-sm font-roboto text-content-body resize-y focus:outline-none focus:ring-2 focus:ring-[var(--border-branded-default)]"
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          disabled={isSent}
        />
      </div>
    </Sheet>
  );
};
