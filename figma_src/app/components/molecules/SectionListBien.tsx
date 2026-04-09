/**
 * ORGANISM: SectionListBien
 *
 * Section affichant les informations principales d'un bien immobilier
 * Largeur: 622px
 * Hauteur: 120px
 *
 * Structure:
 * - À gauche: Image du bien (160px)
 * - À droite:
 *   - Ligne 1: Badge type + Chip prix + Badge "CARNET"
 *   - Ligne 2: Chip localisation + Chip type bien + Chip surface + Icon DPE
 */

import { MapPin, Tag, House, Square } from "lucide-react";
import { ImageBien } from "../atoms/ImageBien";
import { Badge } from "../atoms/Badge";
import { Chip } from "../atoms/Chip";
import { IconDpe, DpeType } from "../atoms/IconDpe";

export interface SectionListBienProps {
  /** URL de l'image du bien */
  imageUrl: string;
  /** Type de transaction (VENTE, LOCATION, etc.) */
  type: string;
  /** Prix du bien */
  price: string;
  /** Localisation du bien */
  location: string;
  /** Type de bien (T3, T2, etc.) */
  bienType: string;
  /** Surface du bien */
  surface: string;
  /** Classe DPE */
  dpe?: DpeType;
  /** Thème visuel */
  theme?: "light" | "dark";
  /** Callback au clic */
  onClick?: () => void;
}

export function SectionListBien({
  imageUrl,
  type,
  price,
  location,
  bienType,
  surface,
  dpe = "A",
  theme = "light",
  onClick,
}: SectionListBienProps) {
  const isDark = theme === "dark";
  const iconColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";

  return (
    <div
      className="relative size-full flex items-center"
      style={{ width: "622px", height: "120px" }}
      onClick={onClick}
    >
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        {/* Image du bien */}
        <ImageBien src={imageUrl} />

        {/* Informations */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
          {/* Ligne 1: Badge type + Chip prix + Badge CARNET */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <Badge variant="default" theme={theme}>
              {type}
            </Badge>

            <Chip
              size="medium"
              icon={<Tag size={20} style={{ color: iconColor }} />}
              iconPosition="left"
              theme={theme}
            >
              {price}
            </Chip>

            <Badge variant="success" theme={theme}>
              CARNET
            </Badge>
          </div>

          {/* Ligne 2: Chip localisation + Chip type + Chip surface + Icon DPE */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <Chip
              size="medium"
              icon={<MapPin size={20} style={{ color: iconColor }} />}
              iconPosition="left"
              theme={theme}
            >
              {location}
            </Chip>

            <Chip
              size="medium"
              icon={<House size={20} style={{ color: iconColor }} />}
              iconPosition="left"
              theme={theme}
            >
              {bienType}
            </Chip>

            <Chip
              size="medium"
              icon={<Square size={20} style={{ color: iconColor }} />}
              iconPosition="left"
              theme={theme}
            >
              {surface}
            </Chip>

            <IconDpe type={dpe} size="small" />
          </div>
        </div>
      </div>
    </div>
  );
}
