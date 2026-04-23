"use client";

import React from "react";
import { Sheet } from "./Sheet";
import { Badge, BadgeVariant } from "./Badge";
import { Button } from "./Button";
import { CollapsibleSection } from "./CollapsibleSection";
import { Plus, ArrowRight } from "lucide-react";

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
  /** Label du bien visite (null si pas encore selectionne) */
  propertyLabel?: string | null;
  /** Callback pour rechercher/selectionner un bien */
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

const visitStatusToBadgeVariant: Record<SheetVisiteProps["visitStatus"], BadgeVariant> = {
  PROGRAMME: "warning",
  CONFIRME: "success",
  TERMINE: "information",
  ANNULE: "error",
};

const odjStatusToBadgeVariant: Record<string, BadgeVariant> = {
  EDITE: "warning",
  REVISE: "information",
  ENVOYE: "success",
};

const guideStatusToBadgeVariant: Record<string, BadgeVariant> = {
  ENVOYE: "warning",
  COMPLET: "success",
};

// ── Component ──────────────────────────────────────────

export const SheetVisite: React.FC<SheetVisiteProps> = ({
  isOpen,
  onClose,
  visitStatus,
  propertyLabel,
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
          <CollapsibleSection title="Bien visité" defaultExpanded={true}>
            <div className="flex flex-col gap-[8px]">
              {propertyLabel ? (
                <span className="text-sm font-roboto text-content-body">
                  {propertyLabel}
                </span>
              ) : (
                <Button variant="ghost" onClick={onSelectProperty}>
                  Rechercher un bien
                </Button>
              )}

              {selectedSlotLabel && (
                <div className="flex items-center gap-[8px]">
                  <span className="px-[12px] py-[4px] rounded-full text-xs font-roboto bg-surface-branded-subtle text-content-branded-strong">
                    {selectedSlotLabel}
                  </span>
                </div>
              )}

              {propertyLabel && (
                <Button variant="ghost" onClick={onOpenAgenda}>
                  Voir l'agenda
                </Button>
              )}
            </div>
          </CollapsibleSection>

          {/* Section 2 — Invitations */}
          <CollapsibleSection
            title="Invitations"
            badge={String(invites.length)}
            defaultExpanded={true}
          >
            <div className="flex flex-col">
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
              <Button variant="ghost" onClick={onAddInvite} className="mt-[8px]">
                <Plus size={20} />
                Ajouter un invité
              </Button>
            </div>
          </CollapsibleSection>

          {/* Section 3 — Ordre du Jour */}
          <CollapsibleSection
            title="Ordre du Jour"
            badge={
              odjStatus ? (
                <Badge variant={odjStatusToBadgeVariant[odjStatus]}>
                  {odjStatus}
                </Badge>
              ) : (
                <Badge variant="disabled">&mdash;</Badge>
              )
            }
            defaultExpanded={false}
          >
            {odjStatus && (
              <Button variant="ghost" onClick={onViewOdj}>
                Voir l'Ordre du jour
                <ArrowRight size={20} />
              </Button>
            )}
          </CollapsibleSection>

          {/* Section 4 — Guide de visite */}
          <CollapsibleSection
            title="Guide de visite"
            badge={
              guideStatus ? (
                <Badge variant={guideStatusToBadgeVariant[guideStatus]}>
                  {guideStatus}
                </Badge>
              ) : (
                <Badge variant="disabled">&mdash;</Badge>
              )
            }
            defaultExpanded={false}
          >
            {guideStatus && (
              <Button variant="ghost" onClick={onViewGuide}>
                Voir l'Avis
                <ArrowRight size={20} />
              </Button>
            )}
          </CollapsibleSection>
        </div>
      </div>
    </Sheet>
  );
};
