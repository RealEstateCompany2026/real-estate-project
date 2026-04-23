"use client";

import React from "react";
import { Sheet } from "./Sheet";
import { Badge } from "./Badge";
import { Button, IconButton } from "./Button";
import { IconDpe } from "./IconDpe";
import type { DpeType } from "./IconDpe";
import { Phone, ArrowRight } from "lucide-react";

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
  /** Liste des critères avec réponses */
  criteria: VisitCriterion[];
  /** Commentaire libre du client */
  commentaire: string | null;
  /** Date/heure de visite pré-formatée (ex: "12 fév. 2026 à 14h00") */
  visitDateLabel?: string | null;
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

function Dot() {
  return <span className="size-[5px] rounded-full bg-content-body shrink-0" />;
}

// ── Component ──────────────────────────────────────────

export const SheetGuideDeVisite: React.FC<SheetGuideDeVisiteProps> = ({
  isOpen,
  onClose,
  propertyAddress,
  propertyCity,
  propertyType,
  propertySurface,
  propertyDpeGrade,
  clientName,
  criteria,
  commentaire,
  visitDateLabel,
  onContactClient,
  className,
}) => {
  const footer = (
    <div className="flex items-center gap-[12px] w-full">
      <IconButton onClick={onContactClient} icon={<Phone size={20} />} />
      <Button variant="outline" className="flex-1" onClick={onContactClient}>
        Écrire au Visiteur
        <ArrowRight size={20} />
      </Button>
    </div>
  );

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title="Compte-rendu"
      footer={footer}
      className={className}
    >
      <div className="py-[16px]">
        {/* Section 1 — Infos bien + client (inline) */}
        {(() => {
          const parts: React.ReactNode[] = [];
          if (propertyAddress) parts.push(<span key="addr" className="truncate max-w-[200px]">{propertyAddress}</span>);
          if (propertyType) parts.push(<span key="type">{propertyType}</span>);
          if (propertySurface) {
            parts.push(
              <React.Fragment key="surface">
                <span>{propertySurface}</span>
                {propertyDpeGrade && <IconDpe type={propertyDpeGrade} size="small" />}
              </React.Fragment>
            );
          } else if (propertyDpeGrade) {
            parts.push(<IconDpe key="dpe" type={propertyDpeGrade} size="small" />);
          }
          if (clientName) parts.push(<span key="client">{clientName}</span>);
          if (visitDateLabel) parts.push(<span key="date">{visitDateLabel}</span>);
          return (
            <div className="px-[20px] py-[12px]">
              <div className="flex items-center gap-[6px] flex-wrap text-xs font-semibold font-roboto text-content-body">
                {parts.map((part, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <Dot />}
                    {part}
                  </React.Fragment>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Sections critères — Div bordés individuels */}
        <div className="mx-[20px] mt-[30px] flex flex-col gap-[12px]">
          {criteria.map((criterion) => {
            const badgeInfo = criterion.answer
              ? ANSWER_BADGE[criterion.answer]
              : { variant: "disabled" as const, label: "—" };
            return (
              <div key={criterion.id} className="rounded-lg border border-edge-default p-[16px]">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold font-roboto text-content-body">
                    {criterion.label}
                  </span>
                  <Badge variant={badgeInfo.variant}>{badgeInfo.label}</Badge>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section commentaire — Div bordé */}
        <div className="mx-[20px] mt-[12px] rounded-lg border border-edge-default p-[16px]">
          <span className="text-base font-semibold font-roboto text-content-body">
            Commentaire
          </span>
          <p className="text-base font-roboto text-content-body mt-[8px]">
            {commentaire || "Le bien est très sympa ! J'aime beaucoup le cadre et les équipements. J'envisage de faire une offre"}
          </p>
        </div>
      </div>
    </Sheet>
  );
};
