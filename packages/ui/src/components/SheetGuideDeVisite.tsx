"use client";

import React from "react";
import { Sheet } from "./Sheet";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Phone } from "lucide-react";

// ── Types ──────────────────────────────────────────────

export type VisitCriteriaAnswer = "OUI" | "NON" | "PEUT_ETRE";

export interface VisitCriterion {
  /** Identifiant technique du critère (ex: "criterion_1") */
  id: string;
  /** Label affiché (ex: "Localisation") */
  label: string;
  /** Réponse du client (null si pas encore répondu) */
  answer: VisitCriteriaAnswer | null;
}

export interface SheetGuideDeVisiteProps {
  isOpen: boolean;
  onClose: () => void;
  /** Infos bien visité */
  propertyLabel: string;
  /** Nom du client visiteur */
  clientName: string;
  /** Liste des critères avec réponses */
  criteria: VisitCriterion[];
  /** Commentaire libre du client */
  commentaire: string | null;
  /** Date de soumission (null si pas encore soumis) */
  submittedAt: string | null;
  /** Callback pour contacter le visiteur */
  onContactClient?: () => void;
  className?: string;
}

// ── Helpers ────────────────────────────────────────────

const ANSWER_BADGE: Record<
  VisitCriteriaAnswer,
  { variant: "success" | "error" | "warning"; label: string }
> = {
  OUI: { variant: "success", label: "OUI" },
  NON: { variant: "error", label: "NON" },
  PEUT_ETRE: { variant: "warning", label: "PEUT-ÊTRE" },
};

// ── Component ──────────────────────────────────────────

export const SheetGuideDeVisite: React.FC<SheetGuideDeVisiteProps> = ({
  isOpen,
  onClose,
  propertyLabel,
  clientName,
  criteria,
  commentaire,
  submittedAt,
  onContactClient,
  className,
}) => {
  const isComplete = submittedAt !== null;

  const footer = (
    <Button
      variant="ghost"
      className="flex-1"
      onClick={onContactClient}
      disabled={onContactClient === undefined}
    >
      <Phone size={20} />
      Écrire au Visiteur
    </Button>
  );

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title="Compte-rendu"
      headerAfterTitle={
        <Badge variant={isComplete ? "success" : "warning"}>
          {isComplete ? "COMPLET" : "EN ATTENTE"}
        </Badge>
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

        {/* Liste des critères */}
        <div className="mx-[20px] flex flex-col gap-[12px]">
          {criteria.map((criterion, index) => {
            const isLast = index === criteria.length - 1;
            const badgeInfo = criterion.answer
              ? ANSWER_BADGE[criterion.answer]
              : { variant: "disabled" as const, label: "—" };

            return (
              <div
                key={criterion.id}
                className={`flex items-center justify-between py-[12px] ${
                  !isLast ? "border-b border-edge-divider" : ""
                }`}
              >
                <span className="text-sm font-semibold font-roboto text-content-body">
                  {criterion.label}
                </span>
                <Badge variant={badgeInfo.variant}>{badgeInfo.label}</Badge>
              </div>
            );
          })}
        </div>

        {/* Section commentaire */}
        {commentaire !== null && (
          <div className="mx-[20px] mt-[16px]">
            <h6 className="text-sm font-semibold font-roboto text-content-strong mb-[8px]">
              Commentaire
            </h6>
            <p className="text-sm font-roboto text-content-body">{commentaire}</p>
          </div>
        )}
      </div>
    </Sheet>
  );
};
