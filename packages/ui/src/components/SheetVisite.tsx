"use client";

import React from "react";
import { Sheet } from "./Sheet";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { Plus, ArrowRight, Search, Pencil, Calendar } from "lucide-react";
import { IconDpe, DpeType } from "./IconDpe";

// ── Types ──────────────────────────────────────────────

export interface VisiteInvite {
  /** ID du client invite */
  id: string;
  /** Nom complet de l'invite */
  name: string;
  /** Statut calendrier de l'invite */
  calStatus: BadgeVariant;
}

export interface SheetVisiteProps {
  isOpen: boolean;
  onClose: () => void;
  /** Statut global de la visite */
  visitStatus: "PROGRAMME" | "CONFIRME" | "TERMINE" | "ANNULE";
  // Property info — structured fields
  propertyAddress?: string | null;
  propertyCity?: string | null;
  propertyType?: string | null;
  propertySurface?: string | null;
  propertyDpeGrade?: DpeType | null;
  onSelectProperty?: () => void;
  /** Liste des invites */
  invites: VisiteInvite[];
  /** Callback pour ajouter un invite */
  onAddInvite?: () => void;
  /** Creneau selectionne (null si pas encore choisi) */
  selectedSlotLabel?: string | null;
  /** Callback pour ouvrir l'agenda du bien */
  onOpenAgenda?: () => void;
  /** Statut de l'ordre du jour */
  odjStatus?: "EDITE" | "REVISE" | "ENVOYE" | null;
  /** Callback pour voir l'ordre du jour */
  onViewOdj?: () => void;
  /** Statut du guide de visite */
  guideStatus?: "ENVOYE" | "COMPLET" | null;
  /** Callback pour voir le guide de visite */
  onViewGuide?: () => void;
  className?: string;
}

// ── Helpers ──────────────────────────────────────────────

function Dot() {
  return <span className="size-[5px] rounded-full bg-content-body shrink-0" />;
}

const visitStatusToBadgeVariant: Record<SheetVisiteProps["visitStatus"], BadgeVariant> = {
  PROGRAMME: "warning",
  CONFIRME: "success",
  TERMINE: "information",
  ANNULE: "error",
};

// ── Component ──────────────────────────────────────────

export const SheetVisite: React.FC<SheetVisiteProps> = ({
  isOpen,
  onClose,
  visitStatus,
  propertyAddress,
  propertyCity,
  propertyType,
  propertySurface,
  propertyDpeGrade,
  onSelectProperty,
  invites,
  onAddInvite,
  selectedSlotLabel,
  onOpenAgenda,
  odjStatus,
  onViewOdj,
  guideStatus,
  onViewGuide,
  className,
}) => {
  const hasProperty = !!(propertyAddress || propertyCity || propertyType);

  // ── ODJ badge logic ──
  const odjEditionVariant: BadgeVariant =
    odjStatus === "EDITE" ? "warning" :
    odjStatus === "REVISE" || odjStatus === "ENVOYE" ? "success" : "disabled";

  const odjRevisionVariant: BadgeVariant =
    odjStatus === "REVISE" ? "information" :
    odjStatus === "ENVOYE" ? "success" : "disabled";

  const odjEnvoiVariant: BadgeVariant =
    odjStatus === "ENVOYE" ? "success" : "disabled";

  // ── Guide badge logic ──
  const guideEnvoiVariant: BadgeVariant =
    guideStatus === "ENVOYE" || guideStatus === "COMPLET" ? "success" : "disabled";

  const guideCompletionVariant: BadgeVariant =
    guideStatus === "COMPLET" ? "success" : guideStatus === "ENVOYE" ? "warning" : "disabled";

  const guideCompletionLabel =
    guideStatus === "COMPLET" ? "COMPLET" : "INCOMPLET";

  // Build line 2 fragments for property section
  const propertyLine2Parts: React.ReactNode[] = [];
  if (propertyCity) propertyLine2Parts.push(propertyCity);
  if (propertyType) propertyLine2Parts.push(propertyType);
  if (propertySurface) propertyLine2Parts.push(propertySurface);

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title="Visite"
      headerAfterTitle={
        <Badge variant={visitStatusToBadgeVariant[visitStatus]}>
          {visitStatus}
        </Badge>
      }
      className={className}
    >
      <div className="py-[16px]">
        <div className="flex flex-col gap-[12px] mx-[20px]">

          {/* Section 1 — Bien visite */}
          <div className="rounded-lg border border-edge-default p-[16px]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold font-roboto text-content-strong">
                Bien visité
              </span>
              <button
                type="button"
                onClick={onSelectProperty}
                className="p-[4px] rounded hover:bg-surface-neutral-action text-content-body"
              >
                {hasProperty ? <Pencil size={16} /> : <Search size={16} />}
              </button>
            </div>
            {hasProperty && (
              <div className="flex flex-col gap-[4px] mt-[8px]">
                {propertyAddress && (
                  <span className="text-sm font-roboto text-content-body truncate">
                    {propertyAddress}
                  </span>
                )}
                {propertyLine2Parts.length > 0 && (
                  <div className="flex items-center gap-[6px] text-xs font-semibold font-roboto text-content-body">
                    {propertyLine2Parts.map((part, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <Dot />}
                        <span>{part}</span>
                      </React.Fragment>
                    ))}
                    {propertyDpeGrade && (
                      <>
                        <IconDpe type={propertyDpeGrade} size="small" />
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Section 2 — Invitations */}
          <div className="rounded-lg border border-edge-default p-[16px]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold font-roboto text-content-strong">
                Invitations
              </span>
              <button
                type="button"
                onClick={onAddInvite}
                className="p-[4px] rounded hover:bg-surface-neutral-action text-content-body"
              >
                <Plus size={16} />
              </button>
            </div>
            <div className="flex flex-col mt-[8px]">
              {invites.map((invite) => (
                <div
                  key={invite.id}
                  className="flex items-center justify-between py-[8px]"
                >
                  <span className="text-sm font-roboto text-content-body">
                    {invite.name}
                  </span>
                  <Badge variant={invite.calStatus}>CAL</Badge>
                </div>
              ))}
              <div className="mt-[8px]">
                <Button variant="ghost" onClick={onOpenAgenda}>
                  {selectedSlotLabel ? (
                    <>
                      <Calendar size={16} />
                      {selectedSlotLabel}
                    </>
                  ) : (
                    "Voir l'agenda du bien"
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Section 3 — Ordre du Jour */}
          <div className="rounded-lg border border-edge-default p-[16px]">
            <span className="text-sm font-semibold font-roboto text-content-strong">
              Ordre du Jour
            </span>
            <div className="flex flex-col mt-[8px]">
              <div className="flex items-center justify-between py-[8px]">
                <span className="text-sm font-roboto text-content-body">
                  Édition
                </span>
                <Badge variant={odjEditionVariant}>
                  ÉDITÉ
                </Badge>
              </div>
              <div className="flex items-center justify-between py-[8px]">
                <span className="text-sm font-roboto text-content-body">
                  Révision
                </span>
                <Badge variant={odjRevisionVariant}>
                  RÉVISÉ
                </Badge>
              </div>
              <div className="flex items-center justify-between py-[8px]">
                <span className="text-sm font-roboto text-content-body">
                  Envoi
                </span>
                <Badge variant={odjEnvoiVariant}>
                  ENVOYÉ
                </Badge>
              </div>
              <div className="mt-[8px]">
                <Button variant="ghost" onClick={onViewOdj}>
                  Voir l'Ordre du jour
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Section 4 — Guide de visite */}
          <div className="rounded-lg border border-edge-default p-[16px]">
            <span className="text-sm font-semibold font-roboto text-content-strong">
              Guide de visite
            </span>
            <div className="flex flex-col mt-[8px]">
              <div className="flex items-center justify-between py-[8px]">
                <span className="text-sm font-roboto text-content-body">
                  Envoi
                </span>
                <Badge variant={guideEnvoiVariant}>
                  ENVOYÉ
                </Badge>
              </div>
              <div className="flex items-center justify-between py-[8px]">
                <span className="text-sm font-roboto text-content-body">
                  Complétion
                </span>
                <Badge variant={guideCompletionVariant}>
                  {guideCompletionLabel}
                </Badge>
              </div>
              <div className="mt-[8px]">
                <Button variant="ghost" onClick={onViewGuide}>
                  Voir l'Avis
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Sheet>
  );
};
