/**
 * ORGANISM: SectionListAffaire
 * 
 * Section affichant les informations principales d'une affaire
 * Largeur: 333px
 * 
 * Ligne 1: Badge type + ID affaire + Icône profil
 * Ligne 2: Type de bien + Surface + Prix
 */

import { Home, Square, Tag, UserCircle } from "lucide-react";
import { Badge } from "../atoms/Badge";
import { ChipId } from "../atoms/Chip";
import { Chip } from "../atoms/Chip";

export interface SectionListAffaireProps {
  /** Type de transaction (VENTE, LOCATION, etc.) */
  type: string;
  /** ID de l'affaire */
  affaireId: string;
  /** Type de bien (T3, T4, etc.) */
  bienType: string;
  /** Surface du bien en m² */
  surface: string;
  /** Prix du bien */
  price: string;
  /** Thème visuel */
  theme?: "light" | "dark";
  /** Callback au clic */
  onClick?: () => void;
}

export function SectionListAffaire({
  type,
  affaireId,
  bienType,
  surface,
  price,
  theme = "light",
  onClick,
}: SectionListAffaireProps) {
  const isDark = theme === "dark";
  const iconColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";

  return (
    <div
      className="relative size-full flex items-center"
      style={{ width: "333px" }}
      onClick={onClick}
    >
      <div
        className="flex flex-col gap-[24px] items-start"
        style={{
          paddingLeft: "28px",
          paddingRight: "47px",
          paddingTop: "28px",
          paddingBottom: "28px",
          width: "100%",
        }}
      >
        {/* Ligne 1: Badge + ID + Icon profil */}
        <div className="flex gap-[14px] items-center">
          <Badge variant="default" theme={theme}>
            {type}
          </Badge>

          <ChipId>{affaireId}</ChipId>

          <div className="relative shrink-0 size-[20px]">
            <UserCircle size={20} style={{ color: iconColor }} />
          </div>
        </div>

        {/* Ligne 2: Type bien + Surface + Prix */}
        <div className="flex gap-[24px] items-center">
          <Chip
            size="medium"
            icon={<Home size={20} style={{ color: iconColor }} />}
            iconPosition="left"
          >
            {bienType}
          </Chip>

          <Chip
            size="medium"
            icon={<Square size={20} style={{ color: iconColor }} />}
            iconPosition="left"
          >
            {surface}
          </Chip>

          <Chip
            size="medium"
            icon={<Tag size={20} style={{ color: iconColor }} />}
            iconPosition="left"
          >
            {price}
          </Chip>
        </div>
      </div>
    </div>
  );
}
