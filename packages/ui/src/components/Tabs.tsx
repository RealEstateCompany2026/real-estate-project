"use client";

import { useState } from "react";
import { LucideIcon } from "lucide-react";

/**
 * Tabs - Navigation par onglets
 *
 * Système de navigation par onglets pour organiser le contenu en sections.
 * Utilisé notamment dans les fiches (Client, Bien, Affaire).
 *
 * Specs:
 * - Border-radius: 8px (onglets)
 * - Padding: 12px 16px
 * - Gap: 4px entre onglets
 * - Font Active: Roboto SemiBold 16px/20px
 * - Font Inactive: Roboto Regular 16px/20px
 * - Border-bottom container: 1px neutral
 * - Border-bottom active: 2px branded-500
 * - Icon size: 20px
 * - Icon gap: 8px
 *
 * États:
 * - Active: Texte branded-500, border-bottom 2px branded-500
 * - Inactive: Texte neutral-500, no border
 * - Hover: Texte neutral-600 (light) / neutral-200 (dark)
 */

export interface Tab {
  /**
   * Identifiant unique de l'onglet
   */
  id: string;
  /**
   * Label affiché
   */
  label: string;
  /**
   * Icône optionnelle (Lucide Icon)
   */
  icon?: LucideIcon;
  /**
   * Désactiver l'onglet
   */
  disabled?: boolean;
}

export interface TabsProps {
  /**
   * Liste des onglets
   */
  tabs: Tab[];
  /**
   * ID de l'onglet actif
   */
  activeTab: string;
  /**
   * Callback au changement d'onglet
   */
  onChange: (tabId: string) => void;
  /**
   * Classes CSS supplémentaires
   */
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className = "" }: TabsProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Tabs container */}
      <div className="flex items-center gap-[4px] border-b border-edge-default">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;

          return (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={isActive}
              onClick={() => !tab.disabled && onChange(tab.id)}
              hasIcon={Boolean(Icon)}
            />
          );
        })}
      </div>
    </div>
  );
}

interface TabButtonProps {
  tab: Tab;
  isActive: boolean;
  onClick: () => void;
  hasIcon: boolean;
}

function TabButton({ tab, isActive, onClick, hasIcon }: TabButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = tab.icon;

  return (
    <button
      onClick={onClick}
      disabled={tab.disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative inline-flex items-center justify-center gap-[8px]
        px-[16px] py-[12px] rounded-t-[8px]
        text-[16px] leading-[20px] tracking-[0.16px]
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset
        disabled:cursor-not-allowed disabled:opacity-50
        font-roboto
        ${isActive ? "font-semibold text-purple-500 dark:text-purple-400" : "font-normal text-content-placeholder dark:text-neutral-300"}
        ${isHovered && !isActive && !tab.disabled ? "text-neutral-600 dark:text-neutral-200" : ""}
      `.trim()}
    >
      {/* Icon */}
      {Icon && <Icon className="size-[20px]" strokeWidth={1.5} />}

      {/* Label */}
      {tab.label}

      {/* Active indicator - border-bottom */}
      {isActive && (
        <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-purple-500 dark:bg-purple-400" />
      )}
    </button>
  );
}
