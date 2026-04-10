"use client";

/**
 * MOLECULE: SectionListPromotion
 *
 * Section affichant les statistiques de promotion d'une affaire
 * Largeur: 220px
 *
 * Titre: PROMOTION
 * Ligne: 3 compteurs (envois, visites, favoris)
 */

import { Inbox, DoorOpen, Heart } from "lucide-react";
import { TitleSectionList } from "./TitleSectionList";
import { Chip } from "./Chip";

export interface SectionListPromotionProps {
  /** Nombre d'envois */
  envois?: number;
  /** Nombre de visites */
  visites?: number;
  /** Nombre de favoris */
  favoris?: number;
  className?: string;
}

export function SectionListPromotion({
  envois = 0,
  visites = 0,
  favoris = 0,
  className = "",
}: SectionListPromotionProps) {
  return (
    <div
      className={`relative size-full flex items-start ${className}`.trim()}
      style={{ width: "220px" }}
    >
      <div
        className="flex flex-col gap-6 items-start"
        style={{
          paddingLeft: "12px",
          paddingRight: "13px",
          paddingTop: "28px",
          paddingBottom: "28px",
          width: "100%",
        }}
      >
        {/* Titre */}
        <TitleSectionList>PROMOTION</TitleSectionList>

        {/* Ligne de compteurs */}
        <div className="flex gap-7 items-center">
          {/* Envois */}
          <Chip
            size="medium"
            icon={<Inbox size={20} className="text-icon-neutral-default dark:text-icon-neutral-dark" />}
            iconPosition="left"
          >
            {envois}
          </Chip>

          {/* Visites */}
          <Chip
            size="medium"
            icon={<DoorOpen size={20} className="text-icon-neutral-default dark:text-icon-neutral-dark" />}
            iconPosition="left"
          >
            {visites}
          </Chip>

          {/* Favoris */}
          <Chip
            size="medium"
            icon={<Heart size={20} className="text-icon-neutral-default dark:text-icon-neutral-dark" />}
            iconPosition="left"
          >
            {favoris}
          </Chip>
        </div>
      </div>
    </div>
  );
}
