import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
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
 * 
 * Variants:
 * - text: Texte uniquement
 * - withIcon: Texte + icône
 * 
 * Usage:
 * <Tabs
 *   tabs={[
 *     { id: 'info', label: 'Informations' },
 *     { id: 'history', label: 'Historique' },
 *     { id: 'docs', label: 'Documents' },
 *   ]}
 *   activeTab="info"
 *   onChange={(id) => setActiveTab(id)}
 * />
 * 
 * <Tabs
 *   tabs={[
 *     { id: 'info', label: 'Informations', icon: Info },
 *     { id: 'history', label: 'Historique', icon: Clock },
 *   ]}
 *   activeTab="info"
 *   onChange={(id) => setActiveTab(id)}
 * />
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const getTextColor = (isActive: boolean, isHovered: boolean, isDisabled: boolean) => {
    if (isDisabled) {
      return isDark ? "var(--neutral-400)" : "var(--neutral-400)"; // grey-400
    }
    if (isActive) {
      return "#7b72f9"; // purple-500 (branded)
    }
    if (isHovered) {
      return isDark ? "var(--neutral-100)" : "var(--neutral-600)"; // grey-200 (dark) / grey-600 (light)
    }
    return isDark ? "var(--neutral-300)" : "var(--neutral-500)"; // grey-300 (dark) / grey-500 (light)
  };

  const borderColor = isDark ? "var(--neutral-300)" : "var(--neutral-500)"; // grey-300 (dark) / grey-500 (light)

  return (
    <div className={`w-full ${className}`}>
      {/* Tabs container */}
      <div
        className="flex items-center gap-[4px] border-b"
        style={{
          borderBottomColor: borderColor,
          borderBottomWidth: "1px",
        }}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          const Icon = tab.icon;

          return (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={isActive}
              onClick={() => !tab.disabled && onChange(tab.id)}
              getTextColor={getTextColor}
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
  getTextColor: (isActive: boolean, isHovered: boolean, isDisabled: boolean) => string;
  hasIcon: boolean;
}

function TabButton({ tab, isActive, onClick, getTextColor, hasIcon }: TabButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = tab.icon;

  const textColor = getTextColor(isActive, isHovered, Boolean(tab.disabled));
  const fontWeight = isActive ? 600 : 400;

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
      `.trim()}
      style={{
        fontFamily: "Roboto, sans-serif",
        fontWeight,
        color: textColor,
        backgroundColor: "transparent",
      }}
    >
      {/* Icon */}
      {Icon && <Icon className="size-[20px]" strokeWidth={1.5} />}

      {/* Label */}
      {tab.label}

      {/* Active indicator - border-bottom */}
      {isActive && (
        <div
          className="absolute bottom-[-1px] left-0 right-0 h-[2px]"
          style={{
            backgroundColor: "#7b72f9", // branded-500
          }}
        />
      )}
    </button>
  );
}
