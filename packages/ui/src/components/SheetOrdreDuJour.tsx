"use client";

import React from "react";
import { Sheet } from "./Sheet";
import { Badge } from "./Badge";
import type { BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { Switch } from "./Switch";
import { IconDpe } from "./IconDpe";
import type { DpeType } from "./IconDpe";
import { ArrowRight } from "lucide-react";

// ── Types ──────────────────────────────────────────────

export interface SheetOrdreDuJourProps {
  isOpen: boolean;
  onClose: () => void;
  /** Adresse du bien */
  propertyAddress?: string | null;
  /** Ville du bien */
  propertyCity?: string | null;
  /** Type du bien (ex: T3, Maison) */
  propertyType?: string | null;
  /** Surface habitable formatée (ex: "94 m²") */
  propertySurface?: string | null;
  /** Classe DPE énergie */
  propertyDpeGrade?: DpeType | null;
  /** Nom du client visiteur */
  clientName: string;
  /** Contenu texte de l'ODJ */
  content: string;
  /** Callback quand le contenu change */
  onContentChange: (content: string) => void;
  /** Statut ODJ : null (pas encore édité), EDITE, REVISE, ENVOYE */
  odjStatus: "EDITE" | "REVISE" | "ENVOYE" | null;
  /** Switch révision (même pattern que SheetMandatEdit) */
  isRevision: boolean;
  onToggleRevision: (checked: boolean) => void;
  /** Callback pour envoyer l'ODJ */
  onSend: () => void;
  className?: string;
}

// ── Helpers ────────────────────────────────────────────

function Dot() {
  return <span className="size-[5px] rounded-full bg-content-body shrink-0" />;
}

// ── Component ──────────────────────────────────────────

export const SheetOrdreDuJour: React.FC<SheetOrdreDuJourProps> = ({
  isOpen,
  onClose,
  propertyAddress,
  propertyCity,
  propertyType,
  propertySurface,
  propertyDpeGrade,
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

  const editionBadgeVariant: BadgeVariant =
    odjStatus === "EDITE" || odjStatus === "REVISE" || odjStatus === "ENVOYE"
      ? "success"
      : "warning";
  const editionBadgeLabel =
    odjStatus === "EDITE" || odjStatus === "REVISE" || odjStatus === "ENVOYE"
      ? "ÉDITÉ"
      : "ÉDITER";

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
      footer={footer}
      className={className}
    >
      <div className="py-[16px]">
        {/* Section 1 — Infos bien + client */}
        <div className="px-[20px] py-[12px]">
          {/* Ligne 1 — Adresse */}
          {propertyAddress && (
            <p className="text-sm font-roboto text-content-body truncate">
              {propertyAddress}
            </p>
          )}
          {/* Ligne 2 — Ville • Type • Surface + DPE */}
          {(propertyCity || propertyType || propertySurface) && (
            <div className="flex items-center gap-[6px] text-xs font-semibold font-roboto text-content-body mt-[4px]">
              {[propertyCity, propertyType, propertySurface]
                .filter(Boolean)
                .map((part, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <Dot />}
                    <span>{part}</span>
                  </React.Fragment>
                ))}
              {propertyDpeGrade && (
                <IconDpe type={propertyDpeGrade} size="small" />
              )}
            </div>
          )}
          {/* Ligne 3 — Nom du client */}
          <p className="text-sm font-roboto text-content-body mt-[4px]">
            {clientName}
          </p>
        </div>

        {/* Section 2 — Panneau de contrôle */}
        <div className="mx-[20px] mb-[12px] rounded-lg border border-edge-default p-[16px]">
          {/* Ligne 1 — Édition + Badge */}
          <div className="flex items-center justify-between py-[8px]">
            <span className="text-base font-roboto text-content-body">
              Édition
            </span>
            <Badge variant={editionBadgeVariant}>{editionBadgeLabel}</Badge>
          </div>
          {/* Ligne 2 — Révision + Switch */}
          <div className="flex items-center justify-between py-[8px]">
            <span className="text-base font-roboto text-content-body">
              Révision
            </span>
            <Switch
              checked={isRevision}
              onChange={onToggleRevision}
              ariaLabel="Mode révision"
            />
          </div>
        </div>

        {/* Section 3 — Textarea ODJ */}
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
