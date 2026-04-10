"use client";

import React from "react";
import {
  CircleUserRound,
  Flag,
  FileSearch,
  Home,
  BookOpen,
  Files,
  MessageSquare,
} from "lucide-react";

/**
 * AppBarClientAncres - Barre de navigation avec ancres pour la fiche client
 * Organism du design system RealAgent
 *
 * Composé d'une suite d'items Icon + Text Medium séparés par des dividers verticaux.
 * Permet de naviguer rapidement vers les sections de la fiche client.
 */

export interface AppBarClientAncresItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  count?: number;
  onClick?: () => void;
}

export interface AppBarClientAncresProps {
  items?: AppBarClientAncresItem[];
  onItemClick?: (itemId: string) => void;
}

const defaultItems: AppBarClientAncresItem[] = [
  {
    id: "profil",
    label: "Profil",
    icon: <CircleUserRound size={20} />,
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
    id: "biens",
    label: "Biens",
    icon: <Home size={20} />,
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

export const AppBarClientAncres: React.FC<AppBarClientAncresProps> = ({
  items = defaultItems,
  onItemClick,
}) => {
  const handleClick = (itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  return (
    <div className="px-5 py-10 bg-surface-neutral-default dark:bg-surface-neutral-default">
      <div className="flex items-center gap-[30px]">
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

              {/* Label + Count */}
              <div className="font-semibold text-base whitespace-nowrap text-content-body">
                {item.label}
                {item.count !== undefined && (
                  <span className="ml-1 font-normal text-content-body">
                    ({item.count})
                  </span>
                )}
              </div>
            </button>

            {/* Divider vertical (sauf après le dernier item) */}
            {index < items.length - 1 && (
              <div className="h-[50px] w-px bg-surface-neutral-action dark:bg-surface-neutral-action" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
