"use client";

import React from "react";
import { Sheet } from "./Sheet";
import { Badge } from "./Badge";
import type { BadgeVariant } from "./Badge";
import { Button } from "./Button";
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
