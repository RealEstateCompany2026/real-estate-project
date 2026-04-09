/**
 * ORGANISM: SectionListPromotion
 * 
 * Section affichant les statistiques de promotion d'une affaire
 * Largeur: 220px
 * 
 * Titre: PROMOTION
 * Ligne: 3 compteurs (envois, visites, favoris)
 */

import { Inbox, DoorOpen, Heart } from "lucide-react";
import { TitleSectionList } from "../atoms/TitleSectionList";
import { Chip } from "../atoms/Chip";

export interface SectionListPromotionProps {
  /** Nombre d'envois */
  envois?: number;
  /** Nombre de visites */
  visites?: number;
  /** Nombre de favoris */
  favoris?: number;
  /** Thème visuel */
  theme?: "light" | "dark";
}

export function SectionListPromotion({
  envois = 0,
  visites = 0,
  favoris = 0,
  theme = "light",
}: SectionListPromotionProps) {
  const isDark = theme === "dark";
  const iconColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";

  return (
    <div
      className="relative size-full flex items-start"
      style={{ width: "220px" }}
    >
      <div
        className="flex flex-col gap-[24px] items-start"
        style={{
          paddingLeft: "12px",
          paddingRight: "13px",
          paddingTop: "28px",
          paddingBottom: "28px",
          width: "100%",
        }}
      >
        {/* Titre */}
        <TitleSectionList theme={theme}>PROMOTION</TitleSectionList>

        {/* Ligne de compteurs */}
        <div className="flex gap-[28px] items-center">
          {/* Envois */}
          <Chip
            size="medium"
            icon={<Inbox size={20} style={{ color: iconColor }} />}
            iconPosition="left"
          >
            {envois}
          </Chip>

          {/* Visites */}
          <Chip
            size="medium"
            icon={<DoorOpen size={20} style={{ color: iconColor }} />}
            iconPosition="left"
          >
            {visites}
          </Chip>

          {/* Favoris */}
          <Chip
            size="medium"
            icon={<Heart size={20} style={{ color: iconColor }} />}
            iconPosition="left"
          >
            {favoris}
          </Chip>
        </div>
      </div>
    </div>
  );
}
