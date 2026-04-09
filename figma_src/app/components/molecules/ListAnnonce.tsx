/**
 * MOLECULE: ListAnnonce
 * 
 * Liste des annonces avec informations détaillées et badges de workflow
 * Composé exclusivement d'atoms du design system :
 * - Chip (avec icônes) pour les informations texte+icône
 * - IconDpe pour le badge DPE
 * - Badge pour les statuts de workflow (ÉDITION, RÉVISION, PUBLICATION)
 * - Button pour l'action "Voir"
 * - AiSuggestion pour les suggestions IA
 * 
 * Les 3 badges de workflow sont TOUJOURS présents :
 * - Édition : disabled / warning / success
 * - Révision : disabled / warning / success
 * - Publication : disabled / warning / success
 * 
 * Supporte les modes light et dark via tokens CSS
 */

"use client";

import React from "react";
import { IconDpe, DpeType } from "../atoms/IconDpe";
import { Badge, BadgeVariant } from "../atoms/Badge";
import { AiSuggestion } from "../atoms/AiSuggestion";
import { Button } from "../atoms/Button";
import { Chip } from "../atoms/Chip";
import { 
  LocationIcon, 
  HomeIcon, 
  FormatSquareIcon, 
  ProfileCircleIcon,
  ArrowRightIcon
} from "../atoms/icons";
import { useTheme } from "../../context/ThemeContext";

export interface ListAnnonceItem {
  location: string;
  type: string;
  surface: string;
  dpe: DpeType;
  owner: string;
  editionStatus: BadgeVariant; // Statut du badge Édition (disabled / warning / success)
  revisionStatus: BadgeVariant; // Statut du badge Révision (disabled / warning / success)
  publicationStatus: BadgeVariant; // Statut du badge Publication (disabled / warning / success)
  aiSuggestions?: number;
  onView?: () => void;
}

export interface ListAnnonceProps {
  items?: ListAnnonceItem[];
}

const defaultItems: ListAnnonceItem[] = [
  {
    location: "Montpellier",
    type: "T3",
    surface: "120m²",
    dpe: "A",
    owner: "RASTAPOPULOS, Roberto",
    editionStatus: "success",
    revisionStatus: "success",
    publicationStatus: "warning",
    aiSuggestions: 1,
  },
];

export const ListAnnonce: React.FC<ListAnnonceProps> = ({
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
          className="content-stretch flex flex-col items-start pl-[34px] pr-[31px] relative rounded-[16px]"
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

            {/* Partie droite : Workflow + Action + AI Suggestion */}
            <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
              {/* Badges de workflow */}
              <Badge key="edition" variant={item.editionStatus}>
                ÉDITION
              </Badge>
              <Badge key="revision" variant={item.revisionStatus}>
                RÉVISION
              </Badge>
              <Badge key="publication" variant={item.publicationStatus}>
                PUBLICATION
              </Badge>

              {/* Bouton "Voir" */}
              <Button 
                variant="neutral" 
                iconRight={<ArrowRightIcon />}
                onClick={item.onView}
              >
                Voir
              </Button>

              {/* Badge AI suggestion */}
              <AiSuggestion count={item.aiSuggestions ?? 0} theme={theme} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};