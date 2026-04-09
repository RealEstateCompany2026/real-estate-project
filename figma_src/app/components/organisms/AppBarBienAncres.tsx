/**
 * AppBarBienAncres - Barre de navigation avec ancres pour la fiche bien
 * Organism du design system RealAgent
 *
 * Composé d'une suite d'items Icon + Text Medium séparés par des dividers verticaux.
 * Permet de naviguer rapidement vers les sections de la fiche bien.
 */

"use client";

import React from "react";
import {
  Image,
  ListChecks,
  Flag,
  FileSearch,
  Tag,
  BookOpen,
  Files,
  MessageSquare,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export interface AppBarBienAncresItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  count?: number;
  onClick?: () => void;
}

export interface AppBarBienAncresProps {
  items?: AppBarBienAncresItem[];
  onItemClick?: (itemId: string) => void;
}

const defaultItems: AppBarBienAncresItem[] = [
  {
    id: "galerie",
    label: "Galerie",
    icon: <Image size={20} />,
  },
  {
    id: "caracteristiques",
    label: "Caractéristiques",
    icon: <ListChecks size={20} />,
  },
  {
    id: "activites",
    label: "Activités",
    icon: <Flag size={20} />,
  },
  {
    id: "affaires",
    label: "Affaires",
    icon: <FileSearch size={20} />,
  },
  {
    id: "annonce",
    label: "Annonce",
    icon: <Tag size={20} />,
  },
  {
    id: "carnet",
    label: "Carnet",
    icon: <BookOpen size={20} />,
  },
  {
    id: "documents",
    label: "Documents",
    icon: <Files size={20} />,
  },
  {
    id: "messages",
    label: "Messages",
    icon: <MessageSquare size={20} />,
  },
];

export const AppBarBienAncres: React.FC<AppBarBienAncresProps> = ({
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
      <div className="flex items-center gap-[30px]">
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
