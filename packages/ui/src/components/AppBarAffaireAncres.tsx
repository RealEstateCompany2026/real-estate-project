"use client";

import React from "react";
import {
  FileSearch,
  Tag,
  Inbox,
  DoorOpen,
  Heart,
  Landmark,
  Scale,
  BadgeEuro,
  MessageSquare,
} from "lucide-react";

/**
 * AppBarAffaireAncres - Barre de navigation avec ancres pour la fiche affaire
 * Organism du design system RealAgent
 *
 * Composé d'une suite d'items Icon + Text Medium séparés par des dividers verticaux.
 * Permet de naviguer rapidement vers les sections de la fiche affaire.
 */

export interface AppBarAffaireAncresItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export interface AppBarAffaireAncresProps {
  items?: AppBarAffaireAncresItem[];
  onItemClick?: (itemId: string) => void;
}

const defaultItems: AppBarAffaireAncresItem[] = [
  {
    id: "mandat",
    label: "Mandat",
    icon: <FileSearch size={20} />,
  },
  {
    id: "activite",
    label: "Activité",
    icon: <FileSearch size={20} />,
  },
  {
    id: "annonce",
    label: "Annonce",
    icon: <Tag size={20} />,
  },
  {
    id: "leads",
    label: "Leads",
    icon: <Inbox size={20} />,
  },
  {
    id: "visites",
    label: "Visites",
    icon: <DoorOpen size={20} />,
  },
  {
    id: "promesse",
    label: "Promesse",
    icon: <Heart size={20} />,
  },
  {
    id: "finance",
    label: "Finance",
    icon: <Landmark size={20} />,
  },
  {
    id: "notaire",
    label: "Notaire",
    icon: <Scale size={20} />,
  },
  {
    id: "ca",
    label: "CA",
    icon: <BadgeEuro size={20} />,
  },
  {
    id: "messages",
    label: "Messages",
    icon: <MessageSquare size={20} />,
  },
];

export const AppBarAffaireAncres: React.FC<AppBarAffaireAncresProps> = ({
  items = defaultItems,
  onItemClick,
}) => {
  const handleClick = (itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  return (
    <div className="px-5 py-10 bg-surface-neutral-default">
      <div className="flex items-center justify-between">
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Item: Icon + Text */}
            <button
              onClick={() => handleClick(item.id)}
              className="flex items-center gap-1 transition-opacity hover:opacity-70 cursor-pointer text-content-body"
            >
              {/* Icon */}
              <div className="text-icon-neutral-default">
                {item.icon}
              </div>

              {/* Label */}
              <div className="font-semibold text-base whitespace-nowrap text-content-body">
                {item.label}
              </div>
            </button>

            {/* Divider vertical (sauf après le dernier item) */}
            {index < items.length - 1 && (
              <div className="h-[50px] w-px bg-surface-neutral-action" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
