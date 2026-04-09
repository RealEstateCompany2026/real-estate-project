/**
 * MOLECULE: ListCarnet
 * 
 * Liste des éléments du carnet avec informations détaillées
 * Composé exclusivement d'atoms du design system :
 * - Chip (avec icônes) pour les informations texte+icône
 * - IconDpe pour le badge DPE
 * - Badge pour le statut
 * - AiSuggestion pour les suggestions IA
 * 
 * Supporte les modes light et dark via tokens CSS
 */

"use client";

import React from "react";
import { IconDpe, DpeType } from "../atoms/IconDpe";
import { Badge, BadgeVariant } from "../atoms/Badge";
import { AiSuggestion } from "../atoms/AiSuggestion";
import { Chip } from "../atoms/Chip";
import { 
  LocationIcon, 
  HomeIcon, 
  FormatSquareIcon, 
  ProfileCircleIcon, 
  CalendarIcon 
} from "../atoms/icons";
import { useTheme } from "../../context/ThemeContext";

export interface ListCarnetItem {
  location: string;
  type: string;
  surface: string;
  dpe: DpeType;
  owner: string;
  status: {
    label: string;
    variant: BadgeVariant;
  };
  date: string;
  aiSuggestions?: number;
}

export interface ListCarnetProps {
  items?: ListCarnetItem[];
}

const defaultItems: ListCarnetItem[] = [
  {
    location: "Montpellier",
    type: "T3",
    surface: "120m²",
    dpe: "A",
    owner: "RASTAPOPULOS, Roberto",
    status: {
      label: "ACTIVÉ",
      variant: "success",
    },
    date: "12 fév. 2026",
    aiSuggestions: 1,
  },
];

export const ListCarnet: React.FC<ListCarnetProps> = ({
  items = defaultItems,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Utilisation des tokens CSS du design system
  const bgColor = isDark ? "var(--neutral-800)" : "var(--neutral-white)";
  const borderColor = isDark ? "var(--neutral-700)" : "var(--neutral-50)";

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="content-stretch flex flex-col items-start pl-[33px] pr-[37px] relative rounded-[16px]"
          style={{
            backgroundColor: bgColor,
            height: "70px",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute border border-solid inset-0 pointer-events-none rounded-[16px]"
            style={{ borderColor }}
          />
          
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full h-full">
            {/* Partie gauche : Informations principales */}
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
              {/* Localisation */}
              <Chip icon={<LocationIcon />} size="medium">
                {item.location}
              </Chip>

              {/* Type de bien */}
              <Chip icon={<HomeIcon />} size="medium">
                {item.type}
              </Chip>

              {/* Surface */}
              <Chip icon={<FormatSquareIcon />} size="medium">
                {item.surface}
              </Chip>

              {/* DPE */}
              <IconDpe classe={item.dpe} size="small" />

              {/* Propriétaire */}
              <Chip icon={<ProfileCircleIcon />} size="medium">
                {item.owner}
              </Chip>
            </div>

            {/* Partie droite : Statut + Date + AI Suggestion */}
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
              {/* Badge de statut */}
              <Badge variant={item.status.variant}>{item.status.label}</Badge>

              {/* Date */}
              <Chip icon={<CalendarIcon />} size="medium">
                {item.date}
              </Chip>

              {/* Badge AI suggestion */}
              <AiSuggestion count={item.aiSuggestions ?? 0} theme={theme} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};