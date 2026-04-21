"use client";

import React from "react";
import { Sheet } from "./Sheet";
import { Badge } from "./Badge";
import type { BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { Switch } from "./Switch";
import { FileText } from "lucide-react";

export interface SheetMandatProps {
  isOpen: boolean;
  onClose: () => void;
  /** Référence du mandat (ex: "MV-0019") */
  reference: string;
  /** Statuts des 3 étapes workflow */
  workflow: {
    edition: BadgeVariant;
    revision: BadgeVariant;
    signature: BadgeVariant;
  };
  /** Dates optionnelles pour chaque étape */
  editionDate?: string;
  revisionDate?: string;
  signatureDate?: string;
  /** Callback bouton Éditer */
  onEdit?: () => void;
  /** Callback bouton Envoyer */
  onSend?: () => void;
  /** Callback bouton Document */
  onDocument?: () => void;
  /** Étape pipeline courante */
  pipelineStage?: string;
  /** Callback toggle activation (MANDAT ↔ stage 2) */
  onToggleActivation?: (activated: boolean) => void;
  className?: string;
}

export function SheetMandat({
  isOpen,
  onClose,
  reference,
  workflow,
  editionDate,
  revisionDate,
  signatureDate,
  onEdit,
  onSend,
  onDocument,
  pipelineStage,
  onToggleActivation,
  className,
}: SheetMandatProps) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title={`Mandat ${reference}`}
      width="narrow"
      className={className}
      footer={
        <div className="flex gap-[12px] w-full">
          <Button variant="secondary" className="flex-1" onClick={onEdit}>
            Éditer
          </Button>
          <Button variant="primary" className="flex-1" onClick={onSend}>
            Envoyer
          </Button>
        </div>
      }
    >
      {/* Badge + Switch activation */}
      {pipelineStage && onToggleActivation && (
        <div className="flex items-center gap-3 px-[20px] py-[16px]">
          <Badge variant={pipelineStage === 'MANDAT' ? 'default' : 'success'}>
            Statut
          </Badge>
          <Switch
            checked={pipelineStage !== 'MANDAT'}
            onChange={(checked) => onToggleActivation(checked)}
            disabled={pipelineStage !== 'MANDAT' && pipelineStage !== 'COMMERCIALISATION' && pipelineStage !== 'RECHERCHE'}
            ariaLabel="Affaire activée"
          />
          <span className="text-sm text-content-body">Affaire activée</span>
        </div>
      )}

      {/* Bouton Document */}
      <div className="px-[20px] py-[16px]">
        <Button variant="ghost" onClick={onDocument} className="w-full justify-start">
          <FileText size={20} /> Voir le document
        </Button>
      </div>

      {/* Section Édition */}
      <div className="px-[20px] py-[16px] flex flex-col gap-[8px]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold font-roboto text-content-body">Édition</span>
          <Badge variant={workflow.edition}>ÉDITION</Badge>
        </div>
        {editionDate && (
          <span className="text-xs font-normal font-roboto text-content-secondary">{editionDate}</span>
        )}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[var(--border-divider)]" />

      {/* Section Révision */}
      <div className="px-[20px] py-[16px] flex flex-col gap-[8px]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold font-roboto text-content-body">Révision</span>
          <Badge variant={workflow.revision}>RÉVISION</Badge>
        </div>
        {revisionDate && (
          <span className="text-xs font-normal font-roboto text-content-secondary">{revisionDate}</span>
        )}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[var(--border-divider)]" />

      {/* Section Signature */}
      <div className="px-[20px] py-[16px] flex flex-col gap-[8px]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold font-roboto text-content-body">Signature</span>
          <Badge variant={workflow.signature}>SIGNATURE</Badge>
        </div>
        {signatureDate && (
          <span className="text-xs font-normal font-roboto text-content-secondary">{signatureDate}</span>
        )}
      </div>
    </Sheet>
  );
}
