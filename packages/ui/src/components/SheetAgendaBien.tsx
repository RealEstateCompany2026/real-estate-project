"use client";

import React from "react";
import { Sheet } from "./Sheet";
import { Button } from "./Button";
import { CollapsibleSection } from "./CollapsibleSection";
import { IconDpe, DpeType } from "./IconDpe";

// ── Types ──────────────────────────────────────────────

export interface TimeSlot {
  /** Heure de debut au format "HH:mm" */
  startTime: string;
  /** Heure de fin au format "HH:mm" */
  endTime: string;
  /** Etat du creneau */
  status: "available" | "occupied" | "selected";
}

export interface AgendaDay {
  /** Date du jour (format ISO ou label comme "Lundi 14 avril") */
  label: string;
  /** Date ISO pour identification */
  date: string;
  /** Creneaux de 30 minutes */
  slots: TimeSlot[];
}

export interface ClientSlotRequest {
  /** Date ISO du creneau demande */
  date: string;
  /** Heure de debut au format "HH:mm" */
  startTime: string;
  /** Nom du client qui a demande */
  clientName: string;
}

export interface SheetAgendaBienProps {
  isOpen: boolean;
  onClose: () => void;
  /** Adresse du bien */
  propertyAddress?: string | null;
  /** Type du bien (ex: T3, Maison) */
  propertyType?: string | null;
  /** Surface habitable formatée (ex: "94 m²") */
  propertySurface?: string | null;
  /** Classe DPE énergie */
  propertyDpeGrade?: DpeType | null;
  /** Date/heure de visite actuelle pré-formatée, si déjà attribuée */
  currentVisitDateLabel?: string | null;
  /** Nom du client visiteur */
  clientName?: string | null;
  /** Jours affiches dans l'agenda */
  days: AgendaDay[];
  /** Callback quand l'agent selectionne un creneau */
  onSlotSelect: (date: string, startTime: string) => void;
  /** Callback pour proposer le creneau selectionne */
  onProposeSlot: () => void;
  /** Demande de creneau du client (null si pas de demande en attente) */
  clientRequest?: ClientSlotRequest | null;
  /** Callback pour accepter la demande du client */
  onAcceptClientRequest?: () => void;
  /** Callback pour proposer un autre creneau au client */
  onProposeAlternative?: () => void;
  /** Creneau actuellement selectionne */
  selectedSlot?: { date: string; startTime: string } | null;
  className?: string;
}

// ── Helpers ────────────────────────────────────────────

function Dot() {
  return <span className="size-[5px] rounded-full bg-content-body shrink-0" />;
}

// ── Component ──────────────────────────────────────────

export const SheetAgendaBien: React.FC<SheetAgendaBienProps> = ({
  isOpen,
  onClose,
  propertyAddress,
  propertyType,
  propertySurface,
  propertyDpeGrade,
  currentVisitDateLabel,
  clientName,
  days,
  onSlotSelect,
  onProposeSlot,
  clientRequest,
  onAcceptClientRequest,
  onProposeAlternative,
  selectedSlot,
  className,
}) => {
  const footer = !clientRequest ? (
    <Button
      variant="primary"
      className="flex-1"
      onClick={onProposeSlot}
      disabled={!selectedSlot}
    >
      Proposer ce créneau
    </Button>
  ) : undefined;

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title="Agenda du bien"
      footer={footer}
      className={className}
    >
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

      {/* Section Visite le — si créneau déjà attribué */}
      {currentVisitDateLabel && (
        <div className="mx-[20px] mt-[30px] rounded-lg border border-edge-default p-[16px]">
          <span className="text-base font-semibold font-roboto text-content-body">
            Visite le
          </span>
          <p className="text-base font-roboto text-content-body mt-[4px]">
            {currentVisitDateLabel}
          </p>
        </div>
      )}

      {/* Bandeau alerte demande client */}
      {clientRequest && (
        <div className="mx-[20px] mb-[12px] p-[16px] rounded-lg bg-surface-warning-subtle border border-edge-warning-default">
          <p className="text-sm font-roboto text-content-body mb-[12px]">
            Le client {clientRequest.clientName} souhaite le créneau du{" "}
            {clientRequest.date} à {clientRequest.startTime}
          </p>
          <div className="flex gap-[12px]">
            <Button variant="ghost" onClick={onProposeAlternative}>
              Proposer un créneau
            </Button>
            <Button variant="primary" onClick={onAcceptClientRequest}>
              Accepter
            </Button>
          </div>
        </div>
      )}

      {/* Titre créneaux */}
      <div className="mx-[20px] mt-[30px] mb-[12px]">
        <span className="text-base font-semibold font-roboto text-content-strong">
          Créneaux disponibles
        </span>
      </div>

      {/* Liste des jours */}
      <div className="flex flex-col gap-[12px] mx-[20px]">
        {days.map((day, dayIndex) => (
          <CollapsibleSection
            key={day.date}
            title={day.label}
            defaultExpanded={dayIndex === 0}
          >
            <div className="flex flex-wrap gap-[8px]">
              {day.slots.map((slot) => {
                const isSelected =
                  slot.status === "selected" ||
                  (selectedSlot?.date === day.date &&
                    selectedSlot?.startTime === slot.startTime &&
                    slot.status === "available");

                const baseClasses =
                  "w-[64px] h-[36px] text-xs font-roboto text-center rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--border-branded-default)]";

                let stateClasses: string;
                if (isSelected) {
                  stateClasses =
                    "bg-surface-branded-default border-edge-branded-default text-white";
                } else if (slot.status === "occupied") {
                  stateClasses =
                    "bg-surface-disabled border-edge-disabled text-content-disabled cursor-not-allowed opacity-50";
                } else {
                  stateClasses =
                    "bg-surface-neutral-default border-edge-default text-content-body hover:bg-surface-neutral-action cursor-pointer";
                }

                return (
                  <button
                    key={`${day.date}-${slot.startTime}`}
                    className={`${baseClasses} ${stateClasses}`}
                    onClick={() => {
                      if (slot.status === "available") {
                        onSlotSelect(day.date, slot.startTime);
                      }
                    }}
                    disabled={slot.status === "occupied"}
                    aria-label={`Créneau ${slot.startTime} - ${slot.endTime}`}
                  >
                    {slot.startTime}
                  </button>
                );
              })}
            </div>
          </CollapsibleSection>
        ))}
      </div>
    </Sheet>
  );
};
