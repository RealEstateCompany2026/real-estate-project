"use client";

import React from "react";
import { Sheet } from "./Sheet";
import { Badge } from "./Badge";
import type { BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { Switch } from "./Switch";
import type { DealType } from "./deal-types";
import { DEAL_TYPE_LABELS } from "./deal-types";

function mandateTitle(dealType: DealType): string {
  switch (dealType) {
    case 'VENTE': return 'Mandat de Vente';
    case 'ACQUISITION': return 'Mandat de Recherche Acquisition';
    case 'LOCATION': return 'Mandat de Recherche Location';
    case 'GESTION': return 'Mandat de Gestion Locative';
    default: return 'Mandat';
  }
}

const MANDATE_ORDER = ['NON_CREE', 'EDITE', 'REVISE', 'ENVOYE', 'SIGNE'];

function mandateBadgeVariant(currentStatus: string, requiredStatus: string): BadgeVariant {
  const currentIdx = MANDATE_ORDER.indexOf(currentStatus);
  const requiredIdx = MANDATE_ORDER.indexOf(requiredStatus);
  if (currentIdx < 0 || requiredIdx < 0) return 'disabled';
  return currentIdx >= requiredIdx ? 'success' : 'disabled';
}

export interface SheetMandatProps {
  isOpen: boolean;
  onClose: () => void;
  /** Référence du mandat (ex: "MV-0019") */
  reference: string;
  /** Type de l'affaire */
  dealType: DealType;
  /** Statut du mandat (MandateStatus enum) */
  mandateStatus: string;
  /** Étape pipeline courante */
  pipelineStage?: string;
  /** Dates optionnelles */
  editionDate?: string;
  revisionDate?: string;
  signatureDate?: string;
  /** Callbacks */
  onViewMandate?: () => void;
  onToggleRevision?: (revised: boolean) => void;
  onToggleActivation?: (activated: boolean) => void;
  onSendForSignature?: () => void;
  className?: string;
}

export function SheetMandat({
  isOpen,
  onClose,
  reference,
  dealType,
  mandateStatus,
  pipelineStage,
  editionDate,
  revisionDate,
  signatureDate,
  onViewMandate,
  onToggleRevision,
  onToggleActivation,
  onSendForSignature,
  className,
}: SheetMandatProps) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title={`Mandat ${reference}`}
      width="narrow"
      className={className}
    >
      {/* Bloc Titre */}
      <div className="px-[20px] py-[16px] flex items-center justify-between">
        <span className="text-base font-semibold font-roboto text-content-body">
          {mandateTitle(dealType)}
        </span>
        <Badge variant={pipelineStage === 'MANDAT' ? 'default' : 'success'}>
          {DEAL_TYPE_LABELS[dealType]}
        </Badge>
      </div>

      <div className="w-full h-px bg-[var(--border-divider)]" />

      {/* Ligne 1 — Éditer */}
      <div className="px-[20px] py-[16px] flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <span className="text-sm font-semibold font-roboto text-content-body">Éditer</span>
          <Badge variant={mandateBadgeVariant(mandateStatus, 'EDITE')}>ÉDITION</Badge>
        </div>
        <Button variant="ghost" size="default" onClick={onViewMandate}>
          Voir le mandat
        </Button>
      </div>

      {editionDate && (
        <div className="px-[20px] pb-[8px]">
          <span className="text-xs font-normal font-roboto text-content-secondary">{editionDate}</span>
        </div>
      )}

      <div className="w-full h-px bg-[var(--border-divider)]" />

      {/* Ligne 2 — Réviser */}
      <div className="px-[20px] py-[16px] flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <span className="text-sm font-semibold font-roboto text-content-body">Réviser</span>
          <Badge variant={mandateBadgeVariant(mandateStatus, 'REVISE')}>RÉVISION</Badge>
        </div>
        <div className="flex items-center gap-[8px]">
          <span className="text-xs text-content-secondary">
            {MANDATE_ORDER.indexOf(mandateStatus) >= MANDATE_ORDER.indexOf('REVISE') ? 'Révisé' : 'Non révisé'}
          </span>
          <Switch
            checked={MANDATE_ORDER.indexOf(mandateStatus) >= MANDATE_ORDER.indexOf('REVISE')}
            onChange={(checked) => onToggleRevision?.(checked)}
            disabled={mandateStatus !== 'EDITE' && mandateStatus !== 'REVISE'}
            ariaLabel="Réviser le mandat"
          />
        </div>
      </div>

      {revisionDate && (
        <div className="px-[20px] pb-[8px]">
          <span className="text-xs font-normal font-roboto text-content-secondary">{revisionDate}</span>
        </div>
      )}

      <div className="w-full h-px bg-[var(--border-divider)]" />

      {/* Ligne 3 — Activer */}
      <div className="px-[20px] py-[16px] flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <span className="text-sm font-semibold font-roboto text-content-body">Activer</span>
        </div>
        <div className="flex items-center gap-[12px]">
          <Switch
            checked={pipelineStage !== 'MANDAT'}
            onChange={(checked) => onToggleActivation?.(checked)}
            disabled={
              !pipelineStage ||
              (pipelineStage !== 'MANDAT' && pipelineStage !== 'COMMERCIALISATION' && pipelineStage !== 'RECHERCHE')
            }
            ariaLabel="Activer l'affaire"
          />
          <Button
            variant="default"
            size="default"
            onClick={onSendForSignature}
            disabled={MANDATE_ORDER.indexOf(mandateStatus) < MANDATE_ORDER.indexOf('REVISE')}
          >
            Envoyer pour Signature
          </Button>
        </div>
      </div>

      {signatureDate && (
        <div className="px-[20px] pb-[8px]">
          <span className="text-xs font-normal font-roboto text-content-secondary">Signé le {signatureDate}</span>
        </div>
      )}
    </Sheet>
  );
}
