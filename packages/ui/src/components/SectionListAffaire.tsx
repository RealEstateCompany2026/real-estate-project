"use client";

/**
 * MOLECULE: SectionListAffaire
 *
 * Section affichant les informations principales d'une affaire
 * Largeur: 333px
 *
 * Ligne 1: Badge type + ID affaire + Icône profil
 * Ligne 2: Type de bien + Surface + Prix
 */

import { Home, Square, Tag, UserCircle } from "lucide-react";
import { Badge } from "./Badge";
import { ChipId, Chip } from "./Chip";

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
  /** Callback au clic */
  onClick?: () => void;
  className?: string;
}

export function SectionListAffaire({
  type,
  affaireId,
  bienType,
  surface,
  price,
  onClick,
  className = "",
}: SectionListAffaireProps) {
  return (
    <div
      className={`relative size-full flex items-center cursor-pointer ${className}`.trim()}
      style={{ width: "333px" }}
      onClick={onClick}
    >
      <div
        className="flex flex-col gap-6 items-start"
        style={{
          paddingLeft: "28px",
          paddingRight: "47px",
          paddingTop: "28px",
          paddingBottom: "28px",
          width: "100%",
        }}
      >
        {/* Ligne 1: Badge + ID + Icon profil */}
        <div className="flex gap-3.5 items-center">
          <Badge variant="default">
            {type}
          </Badge>

          <ChipId>{affaireId}</ChipId>

          <div className="relative shrink-0 size-5">
            <UserCircle size={20} className="text-icon-neutral-default" />
          </div>
        </div>

        {/* Ligne 2: Type bien + Surface + Prix */}
        <div className="flex gap-6 items-center">
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

          <Chip
            size="medium"
            icon={<Tag size={20} className="text-icon-neutral-default" />}
            iconPosition="left"
          >
            {price}
          </Chip>
        </div>
      </div>
    </div>
  );
}
