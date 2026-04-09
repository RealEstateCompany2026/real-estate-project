/**
 * ORGANISM: SectionListType
 * 
 * Section affichant le type et caractéristiques d'un bien
 * Largeur: 220px
 * 
 * Ligne 1: Titre "TYPE"
 * Ligne 2: Type de bien + Surface + DPE
 */

import { Home, Square } from "lucide-react";
import { TitleSectionList } from "../atoms/TitleSectionList";
import { Chip } from "../atoms/Chip";
import { IconDpe, DpeType } from "../atoms/IconDpe";

export interface SectionListTypeProps {
  /** Type de bien (T1, T2, T3, etc.) */
  bienType: string;
  /** Surface en m² */
  surface: string;
  /** Note DPE (A à G) */
  dpe?: DpeType;
  /** Thème visuel */
  theme?: "light" | "dark";
}

export function SectionListType({
  bienType,
  surface,
  dpe = "A",
  theme = "light",
}: SectionListTypeProps) {
  const isDark = theme === "dark";
  const iconColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";

  return (
    <div
      className="relative size-full flex items-start"
      style={{ width: "220px" }}
    >
      <div
        className="flex flex-col gap-[24px] items-start justify-center"
        style={{
          paddingLeft: "12px",
          paddingRight: "13px",
          paddingTop: "28px",
          paddingBottom: "28px",
          width: "100%",
        }}
      >
        {/* Titre */}
        <TitleSectionList theme={theme}>TYPE</TitleSectionList>

        {/* Ligne: Type + Surface + DPE */}
        <div className="flex gap-[24px] items-center">
          {/* Type de bien */}
          <Chip
            size="medium"
            icon={<Home size={20} style={{ color: iconColor }} />}
            iconPosition="left"
            theme={theme}
          >
            {bienType}
          </Chip>

          {/* Surface */}
          <Chip
            size="medium"
            icon={<Square size={20} style={{ color: iconColor }} />}
            iconPosition="left"
            theme={theme}
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
