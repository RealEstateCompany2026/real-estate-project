"use client";

import React from "react";
import { Sheet } from "./Sheet";
import { Badge, BadgeVariant } from "./Badge";
import { Button, IconButton } from "./Button";
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
  // -- Mode édition bien --
  isEditingProperty?: boolean;
  onToggleEditProperty?: () => void;
  propertySearchQuery?: string;
  onPropertySearchChange?: (query: string) => void;
  propertySearchResults?: Array<{ id: string; label: string }>;
  onPropertySelect?: (propertyId: string) => void;
  onSaveProperty?: () => void;
  // -- Mode ajout invité --
  isAddingInvite?: boolean;
  onToggleAddInvite?: () => void;
  clientSearchQuery?: string;
  onClientSearchChange?: (query: string) => void;
  clientSearchResults?: Array<{ id: string; label: string }>;
  onClientSelect?: (clientId: string) => void;
  onSaveInvite?: () => void;
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
  isEditingProperty,
  onToggleEditProperty,
  propertySearchQuery,
  onPropertySearchChange,
  propertySearchResults,
  onPropertySelect,
  onSaveProperty,
  isAddingInvite,
  onToggleAddInvite,
  clientSearchQuery,
  onClientSearchChange,
  clientSearchResults,
  onClientSelect,
  onSaveInvite,
  className,
}) => {
  const hasProperty = !!(propertyAddress || propertyCity || propertyType);

  // ── ODJ badge logic ──
  // Chaque étape : warning = à faire (infinitif), success = fait (participe passé)
  const odjEditionVariant: BadgeVariant =
    odjStatus === "EDITE" || odjStatus === "REVISE" || odjStatus === "ENVOYE" ? "success" : "warning";
  const odjEditionLabel =
    odjStatus === "EDITE" || odjStatus === "REVISE" || odjStatus === "ENVOYE" ? "ÉDITÉ" : "ÉDITER";

  const odjRevisionVariant: BadgeVariant =
    odjStatus === "REVISE" || odjStatus === "ENVOYE" ? "success" : "warning";
  const odjRevisionLabel =
    odjStatus === "REVISE" || odjStatus === "ENVOYE" ? "RÉVISÉ" : "RÉVISER";

  const odjEnvoiVariant: BadgeVariant =
    odjStatus === "ENVOYE" ? "success" : "warning";
  const odjEnvoiLabel =
    odjStatus === "ENVOYE" ? "ENVOYÉ" : "ENVOYER";

  // ── Guide badge logic ──
  // disabled = pas encore fait, success = fait
  const guideEnvoiVariant: BadgeVariant =
    guideStatus === "ENVOYE" || guideStatus === "COMPLET" ? "success" : "disabled";
  const guideEnvoiLabel =
    guideStatus === "ENVOYE" || guideStatus === "COMPLET" ? "ENVOYÉ" : "ENVOYER";

  const guideCompletionVariant: BadgeVariant =
    guideStatus === "COMPLET" ? "success" : "disabled";
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

          {/* Section 1 — Bien visité */}
          <div className="rounded-lg border border-edge-default p-[16px]">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold font-roboto text-content-strong">
                Bien visité
              </span>
              <IconButton
                onClick={onToggleEditProperty ?? onSelectProperty}
                icon={isEditingProperty ? <Search size={20} /> : hasProperty ? <Pencil size={20} /> : <Search size={20} />}
              />
            </div>
            {(isEditingProperty || (!hasProperty && onToggleEditProperty)) ? (
              <div className="flex flex-col gap-[8px] mt-[8px]">
                <label className="text-xs font-semibold font-roboto text-content-subtle uppercase tracking-wider">
                  Adresse du bien
                </label>
                <input
                  type="text"
                  className="w-full px-[12px] py-[10px] rounded-lg border border-edge-default bg-surface-neutral-default text-base font-roboto text-content-body placeholder:text-content-subtle focus:outline-none focus:ring-2 focus:ring-[var(--border-branded-default)]"
                  value={propertySearchQuery ?? ""}
                  onChange={(e) => onPropertySearchChange?.(e.target.value)}
                  placeholder="Rechercher une adresse..."
                />
                {propertySearchResults && propertySearchResults.length > 0 && (
                  <div className="rounded-lg border border-edge-default bg-surface-neutral-default mt-[4px] max-h-[160px] overflow-y-auto">
                    {propertySearchResults.map((r) => (
                      <div
                        key={r.id}
                        className="px-[12px] py-[8px] text-sm font-roboto text-content-body cursor-pointer hover:bg-surface-neutral-action"
                        onClick={() => onPropertySelect?.(r.id)}
                      >
                        {r.label}
                      </div>
                    ))}
                  </div>
                )}
                <Button variant="primary" className="w-full" onClick={onSaveProperty}>
                  Enregistrer
                </Button>
              </div>
            ) : hasProperty ? (
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
            ) : null}
          </div>

          {/* Section 2 — Invitations */}
          <div className="rounded-lg border border-edge-default p-[16px]">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold font-roboto text-content-strong">
                Invitations
              </span>
              <IconButton onClick={onToggleAddInvite ?? onAddInvite} icon={<Plus size={20} />} />
            </div>
            <div className="flex flex-col mt-[8px]">
              {invites.map((invite) => (
                <div
                  key={invite.id}
                  className="flex items-center justify-between py-[8px]"
                >
                  <span className="text-base font-roboto text-content-body">
                    {invite.name}
                  </span>
                  <Badge variant={invite.calStatus}>CAL</Badge>
                </div>
              ))}
              {isAddingInvite && (
                <div className="flex flex-col gap-[8px] mt-[8px]">
                  <label className="text-xs font-semibold font-roboto text-content-subtle uppercase tracking-wider">
                    Nom du client
                  </label>
                  <input
                    type="text"
                    className="w-full px-[12px] py-[10px] rounded-lg border border-edge-default bg-surface-neutral-default text-base font-roboto text-content-body placeholder:text-content-subtle focus:outline-none focus:ring-2 focus:ring-[var(--border-branded-default)]"
                    value={clientSearchQuery ?? ""}
                    onChange={(e) => onClientSearchChange?.(e.target.value)}
                    placeholder="Rechercher un client..."
                  />
                  {clientSearchResults && clientSearchResults.length > 0 && (
                    <div className="rounded-lg border border-edge-default bg-surface-neutral-default mt-[4px] max-h-[160px] overflow-y-auto">
                      {clientSearchResults.map((r) => (
                        <div
                          key={r.id}
                          className="px-[12px] py-[8px] text-sm font-roboto text-content-body cursor-pointer hover:bg-surface-neutral-action"
                          onClick={() => onClientSelect?.(r.id)}
                        >
                          {r.label}
                        </div>
                      ))}
                    </div>
                  )}
                  <Button variant="primary" className="w-full" onClick={onSaveInvite}>
                    Enregistrer
                  </Button>
                </div>
              )}
              <div className="mt-[8px]">
                <Button variant="outline" onClick={onOpenAgenda} className="w-full">
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
            <span className="text-base font-semibold font-roboto text-content-strong">
              Ordre du Jour
            </span>
            <div className="flex flex-col mt-[8px]">
              <div className="flex items-center justify-between py-[8px]">
                <span className="text-base font-roboto text-content-body">
                  Édition
                </span>
                <Badge variant={odjEditionVariant}>
                  {odjEditionLabel}
                </Badge>
              </div>
              <div className="flex items-center justify-between py-[8px]">
                <span className="text-base font-roboto text-content-body">
                  Révision
                </span>
                <Badge variant={odjRevisionVariant}>
                  {odjRevisionLabel}
                </Badge>
              </div>
              <div className="flex items-center justify-between py-[8px]">
                <span className="text-base font-roboto text-content-body">
                  Envoi
                </span>
                <Badge variant={odjEnvoiVariant}>
                  {odjEnvoiLabel}
                </Badge>
              </div>
              <div className="mt-[8px]">
                <Button variant="outline" onClick={onViewOdj} className="w-full">
                  Voir l'Ordre du jour
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Section 4 — Guide de visite */}
          <div className="rounded-lg border border-edge-default p-[16px]">
            <span className="text-base font-semibold font-roboto text-content-strong">
              Guide de visite
            </span>
            <div className="flex flex-col mt-[8px]">
              <div className="flex items-center justify-between py-[8px]">
                <span className="text-base font-roboto text-content-body">
                  Envoi
                </span>
                <Badge variant={guideEnvoiVariant}>
                  {guideEnvoiLabel}
                </Badge>
              </div>
              <div className="flex items-center justify-between py-[8px]">
                <span className="text-base font-roboto text-content-body">
                  Complétion
                </span>
                <Badge variant={guideCompletionVariant}>
                  {guideCompletionLabel}
                </Badge>
              </div>
              <div className="mt-[8px]">
                <Button variant="outline" onClick={onViewGuide} className="w-full">
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
