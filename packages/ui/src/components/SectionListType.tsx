"use client";

/**
 * MOLECULE: SectionListType
 *
 * Section affichant le type et caractéristiques d'un bien
 * Largeur: 220px
 *
 * Ligne 1: Titre "TYPE"
 * Ligne 2: Type de bien + Surface + DPE
 */

import { Home, Square } from "lucide-react";
import { TitleSectionList } from "./TitleSectionList";
import { Chip } from "./Chip";
import { IconDpe, DpeType } from "./IconDpe";

export interface SectionListTypeProps {
  /** Type de bien (T1, T2, T3, etc.) */
  bienType: string;
  /** Surface en m² */
  surface: string;
  /** Note DPE (A à G) */
  dpe?: DpeType;
  className?: string;
}

export function SectionListType({
  bienType,
  surface,
  dpe = "A",
  className = "",
}: SectionListTypeProps) {
  return (
    <div
      className={`relative size-full flex items-start ${className}`.trim()}
      style={{ width: "220px" }}
    >
      <div
        className="flex flex-col gap-6 items-start justify-center"
        style={{
          paddingLeft: "12px",
          paddingRight: "13px",
          paddingTop: "28px",
          paddingBottom: "28px",
          width: "100%",
        }}
      >
        {/* Titre */}
        <TitleSectionList>TYPE</TitleSectionList>

        {/* Ligne: Type + Surface + DPE */}
        <div className="flex gap-6 items-center">
          {/* Type de bien */}
          <Chip
            size="medium"
            icon={<Home size={20} className="text-icon-neutral-default" />}
            iconPosition="left"
          >
            {bienType}
          </Chip>

          {/* Surface */}
          <Chip
            size="medium"
            icon={<Square size={20} className="text-icon-neutral-default" />}
            iconPosition="left"
          >
            {surface}
          </Chip>

          {/* DPE */}
          <IconDpe type={dpe} />
        </div>
      </div>
    </div>
  );
}
