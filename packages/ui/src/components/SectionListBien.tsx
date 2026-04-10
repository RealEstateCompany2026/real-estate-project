"use client";

/**
 * MOLECULE: SectionListBien
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

import { MapPin, Tag, Home, Square } from "lucide-react";
import { ImageBien } from "./ImageBien";
import { Badge } from "./Badge";
import { Chip } from "./Chip";
import { IconDpe, DpeType } from "./IconDpe";

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
  /** Callback au clic */
  onClick?: () => void;
  className?: string;
}

export function SectionListBien({
  imageUrl,
  type,
  price,
  location,
  bienType,
  surface,
  dpe = "A",
  onClick,
  className = "",
}: SectionListBienProps) {
  return (
    <div
      className={`relative size-full flex items-center cursor-pointer ${className}`.trim()}
      style={{ width: "622px", height: "120px" }}
      onClick={onClick}
    >
      <div className="content-stretch flex gap-4 items-center relative shrink-0">
        {/* Image du bien */}
        <ImageBien src={imageUrl} />

        {/* Informations */}
        <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0">
          {/* Ligne 1: Badge type + Chip prix + Badge CARNET */}
          <div className="content-stretch flex gap-2 items-center relative shrink-0">
            <Badge variant="default">
              {type}
            </Badge>

            <Chip
              size="medium"
              icon={<Tag size={20} className="text-icon-neutral-default" />}
              iconPosition="left"
            >
              {price}
            </Chip>

            <Badge variant="success">
              CARNET
            </Badge>
          </div>

          {/* Ligne 2: Chip localisation + Chip type + Chip surface + Icon DPE */}
          <div className="content-stretch flex gap-2 items-center relative shrink-0">
            <Chip
              size="medium"
              icon={<MapPin size={20} className="text-icon-neutral-default" />}
              iconPosition="left"
            >
              {location}
            </Chip>

            <Chip
              size="medium"
              icon={<Home size={20} className="text-icon-neutral-default" />}
              iconPosition="left"
            >
              {bienType}
            </Chip>

            <Chip
              size="medium"
              icon={<Square size={20} className="text-icon-neutral-default" />}
              iconPosition="left"
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
