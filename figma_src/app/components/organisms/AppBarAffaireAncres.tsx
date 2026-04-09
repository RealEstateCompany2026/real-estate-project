/**
 * AppBarAffaireAncres - Barre de navigation avec ancres pour la fiche affaire
 * Organism du design system RealAgent
 *
 * Composé d'une suite d'items Icon + Text Medium séparés par des dividers verticaux.
 * Permet de naviguer rapidement vers les sections de la fiche affaire.
 */

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
import { useTheme } from "../../context/ThemeContext";

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleClick = (itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  return (
    <div
      className="px-5 py-10"
      style={{
        backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-white)",
      }}
    >
      <div className="flex items-center justify-between">
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            {/* Item: Icon + Text */}
            <button
              onClick={() => handleClick(item.id)}
              className="flex items-center gap-1 transition-opacity hover:opacity-70 cursor-pointer"
              style={{
                fontFamily: "Roboto, sans-serif",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  color: "var(--text-body)",
                }}
              >
                {item.icon}
              </div>

              {/* Label */}
              <div
                className="font-semibold text-base whitespace-nowrap"
                style={{
                  color: "var(--text-body)",
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0.16px",
                }}
              >
                {item.label}
              </div>
            </button>

            {/* Divider vertical (sauf après le dernier item) */}
            {index < items.length - 1 && (
              <div
                className="h-[50px] w-px"
                style={{
                  backgroundColor: isDark ? "var(--neutral-700)" : "var(--neutral-50)",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
