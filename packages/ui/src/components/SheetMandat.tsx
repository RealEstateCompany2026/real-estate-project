"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
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

function stepBadgeVariant(mandateStatus: string, requiredStatus: string): BadgeVariant {
  const currentIdx = MANDATE_ORDER.indexOf(mandateStatus);
  const requiredIdx = MANDATE_ORDER.indexOf(requiredStatus);
  if (currentIdx < 0 || requiredIdx < 0) return 'warning';
  return currentIdx >= requiredIdx ? 'success' : 'warning';
}

export interface SheetMandatProps {
  isOpen: boolean;
  onClose: () => void;
  /** Référence du mandat (ex: "MV.789.083.263") */
  reference: string;
  /** Type de l'affaire */
  dealType: DealType;
  /** Statut du mandat (MandateStatus enum) */
  mandateStatus: string;
  /** Étape pipeline courante */
  pipelineStage?: string;
  /** Mode gestion automatisée vs manuelle */
  isAutoManaged: boolean;
  onToggleAutoManaged?: (auto: boolean) => void;
  /** Dates optionnelles */
  editionDate?: string;
  revisionDate?: string;
  signatureDate?: string;
  /** Callback pour ouvrir l'éditeur de champs manquants */
  onEditMissingFields?: () => void;
  /** Ratio de complétion pour l'éligibilité (ex: "4/12") */
  eligibilityRatio?: string;
  /** Callbacks */
  onViewMandate?: () => void;
  onWriteClient?: () => void;
  onToggleActivation?: (activated: boolean) => void;
  className?: string;
}

export function SheetMandat({
  isOpen,
  onClose,
  reference,
  dealType,
  mandateStatus,
  pipelineStage,
  isAutoManaged,
  onToggleAutoManaged,
  onEditMissingFields,
  eligibilityRatio,
  editionDate,
  revisionDate,
  signatureDate,
  onViewMandate,
  onWriteClient,
  onToggleActivation,
  className,
}: SheetMandatProps) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title={reference}
      width="narrow"
      className={className}
    >
      <div className="flex flex-col gap-[16px] py-[16px]">
        {/* Bloc 1 — Type de mandat */}
        <div className="mx-[20px] rounded-lg border border-[var(--border-divider)] bg-surface-neutral-default p-[16px]">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold font-roboto text-content-body uppercase tracking-[0.5px]">
              Type de mandat
            </span>
            <Badge variant={pipelineStage === 'MANDAT' ? 'default' : 'success'}>
              {DEAL_TYPE_LABELS[dealType]?.toUpperCase()}
            </Badge>
          </div>
        </div>

        {/* Bloc 2 — Gestion automatisée */}
        <div className="mx-[20px] rounded-lg border border-[var(--border-divider)] bg-surface-neutral-default p-[16px]">
          <div className="flex items-center justify-between mb-[8px]">
            <span className={`text-base font-semibold font-roboto ${isAutoManaged ? 'text-content-brand' : 'text-content-body'}`}>
              Gestion automatisée
            </span>
            <Switch
              checked={isAutoManaged}
              onChange={(checked) => onToggleAutoManaged?.(checked)}
              ariaLabel="Gestion automatisée"
            />
          </div>
          <p className="text-sm font-normal font-roboto text-content-secondary leading-[20px]">
            {isAutoManaged
              ? "L'application gère pour vous l'édition automatique du mandat et le workflow de signature auprès du client."
              : "Vous validez manuellement l'activation de l'affaire, et gérez les contrats en dehors de l'application"}
          </p>
        </div>

        {/* Mode Manuel — Bloc 3 : Activation */}
        {!isAutoManaged && (
          <div className="mx-[20px] rounded-lg border border-[var(--border-divider)] bg-surface-neutral-default p-[16px]">
            <div className="flex items-center justify-between mb-[8px]">
              <span className="text-base font-semibold font-roboto text-content-body">
                Activation du mandat
              </span>
              <Switch
                checked={pipelineStage !== 'MANDAT'}
                onChange={(checked) => onToggleActivation?.(checked)}
                disabled={
                  !pipelineStage ||
                  (pipelineStage !== 'MANDAT' && pipelineStage !== 'COMMERCIALISATION' && pipelineStage !== 'RECHERCHE')
                }
                ariaLabel="Activer le mandat"
              />
            </div>
            <p className="text-sm font-normal font-roboto text-content-secondary leading-[20px]">
              En activant le mandat, l&apos;application enclenchera les premières actions du pipeline de gestion de l&apos;affaire
            </p>
          </div>
        )}

        {/* Mode Auto — Bloc 3 : Édition */}
        {isAutoManaged && (
          <div className="mx-[20px] rounded-lg border border-[var(--border-divider)] bg-surface-neutral-default p-[16px]">
            <div className="flex items-center justify-between mb-[8px]">
              <span className="text-base font-semibold font-roboto text-content-body">
                Édition du mandat
              </span>
              <Badge variant={stepBadgeVariant(mandateStatus, 'EDITE')}>ÉDITION</Badge>
            </div>
            {MANDATE_ORDER.indexOf(mandateStatus) >= MANDATE_ORDER.indexOf('EDITE')
              ? (
                <p className="text-sm font-normal font-roboto text-content-secondary leading-[20px]">
                  {editionDate ?? 'Édité'}
                </p>
              )
              : (
                <>
                  <p className="text-sm font-normal font-roboto text-content-secondary leading-[20px]">
                    {`Informations manquantes pour l'édition du mandat`}
                    {eligibilityRatio && (
                      <span className="ml-[4px] text-content-caption">
                        ({eligibilityRatio} complétés)
                      </span>
                    )}
                  </p>
                  {onEditMissingFields && (
                    <button
                      onClick={onEditMissingFields}
                      className="mt-[8px] text-sm font-semibold text-content-branded-strong hover:underline cursor-pointer"
                    >
                      Compléter les informations manquantes
                    </button>
                  )}
                </>
              )
            }
          </div>
        )}

        {/* Mode Auto — Bloc 4 : Révision */}
        {isAutoManaged && (
          <div className="mx-[20px] rounded-lg border border-[var(--border-divider)] bg-surface-neutral-default p-[16px]">
            <div className="flex items-center justify-between mb-[8px]">
              <span className="text-base font-semibold font-roboto text-content-body">
                Révision du mandat
              </span>
              <Badge variant={stepBadgeVariant(mandateStatus, 'REVISE')}>RÉVISION</Badge>
            </div>
            <p className="text-sm font-normal font-roboto text-content-secondary leading-[20px]">
              {MANDATE_ORDER.indexOf(mandateStatus) >= MANDATE_ORDER.indexOf('REVISE')
                ? (revisionDate ?? 'Révisé')
                : 'En attente de révision'}
            </p>
          </div>
        )}

        {/* Mode Auto — Bloc 5 : Signature */}
        {isAutoManaged && (
          <div className="mx-[20px] rounded-lg border border-[var(--border-divider)] bg-surface-neutral-default p-[16px]">
            <div className="flex items-center justify-between mb-[8px]">
              <span className="text-base font-semibold font-roboto text-content-body">
                Signature du mandat
              </span>
              <Badge variant={stepBadgeVariant(mandateStatus, 'SIGNE')}>SIGNATURE</Badge>
            </div>
            <p className="text-sm font-normal font-roboto text-content-secondary leading-[20px]">
              {MANDATE_ORDER.indexOf(mandateStatus) >= MANDATE_ORDER.indexOf('SIGNE')
                ? (signatureDate ? `Signé le ${signatureDate}` : 'Signé')
                : MANDATE_ORDER.indexOf(mandateStatus) >= MANDATE_ORDER.indexOf('ENVOYE')
                  ? (signatureDate ? `Envoyé pour signature le ${signatureDate}` : 'Envoyé pour signature')
                  : 'En attente de signature'}
            </p>
          </div>
        )}
      </div>

      {/* Footer area — buttons */}
      <div className="flex gap-[12px] px-[20px] py-[20px] mt-auto">
        {isAutoManaged && MANDATE_ORDER.indexOf(mandateStatus) >= MANDATE_ORDER.indexOf('EDITE') && (
          <Button variant="primary" className="flex-1" onClick={onViewMandate}>
            Voir le mandat
            <ArrowRight size={20} />
          </Button>
        )}
        <Button variant="ghost" className="flex-1" onClick={onWriteClient}>
          Écrire au client
          <ArrowRight size={20} />
        </Button>
      </div>
    </Sheet>
  );
}
