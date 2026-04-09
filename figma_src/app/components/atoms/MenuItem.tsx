import { LucideIcon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/**
 * Helper: Color mapping /500 → /600 pour hover automatique
 * 
 * Détecte si la couleur passée est une couleur du design system /500
 * et retourne automatiquement la version /600 pour le hover.
 */
const COLOR_HOVER_MAP: Record<string, string> = {
  // Success (green)
  "#0DA500": "#109204", // green-500 → green-600
  "#0da500": "#109204",
  
  // Error (red)
  "#FF0000": "#BF0000", // red-500 → red-600
  "#ff0000": "#BF0000",
  
  // Warning (orange)
  "#FF6B00": "#BF5000", // orange-500 → orange-600
  "#ff6b00": "#BF5000",
  
  // Information (blue)
  "#000AFF": "#0008BF", // blue-500 → blue-600
  "#000aff": "#0008BF",
  
  // Branded (purple/violet)
  "#7B72F9": "#635CC7", // purple-500 → purple-600
  "#7b72f9": "#635CC7",
};

/**
 * Obtient la couleur de hover automatique pour les couleurs du design system
 * Si la couleur est une couleur /500 du design system, retourne /600
 * Sinon retourne la couleur originale (pas de darkening)
 */
function getHoverColor(baseColor: string): string {
  return COLOR_HOVER_MAP[baseColor] || baseColor;
}

/**
 * MenuItem - Item de menu contextuel ou dropdown
 * 
 * Item cliquable utilisé dans les menus déroulants, dropdowns, listes d'actions.
 * 
 * Specs:
 * - Height: 60px
 * - Padding: 12px 18px
 * - Gap: 12px entre éléments
 * - Font: Roboto SemiBold 16/20px (Bold si selected)
 * - Icônes: 24×24px (optionnelles)
 * - Border-bottom: 1px solid
 * 
 * Variants:
 * - default: bg white (light) / #111215 (dark)
 * - hover: bg #ecedee (light) / #22252b (dark)
 * - selected: bg #ecedee (light) / #22252b (dark), texte Bold
 * - disabled: opacity 40%, non cliquable
 * 
 * Light mode:
 * - Default: bg white, text #444955, border #dadbdd
 * - Hover: bg #ecedee, text #444955, border #dadbdd
 * - Selected: bg #ecedee, text #444955 (Bold), border #dadbdd
 * 
 * Dark mode:
 * - Default: bg #111215, text #d0d1d4, border #22252b
 * - Hover: bg #22252b, text #d0d1d4, border #333740
 * - Selected: bg #22252b, text #dadbdd (Bold), border #333740
 * 
 * Usage:
 * <MenuItem 
 *   label="Éditer" 
 *   leftIcon={Edit} 
 *   rightIcon={ArrowRight}
 *   onClick={() => {}}
 * />
 */

export interface MenuItemProps {
  /**
   * Label du menu item
   */
  label: string;
  /**
   * Icône à gauche (composant Lucide)
   */
  leftIcon?: LucideIcon;
  /**
   * Icône à droite (composant Lucide)
   */
  rightIcon?: LucideIcon;
  /**
   * État selected (fond coloré, texte Bold)
   */
  selected?: boolean;
  /**
   * État disabled
   */
  disabled?: boolean;
  /**
   * Callback au clic
   */
  onClick?: () => void;
  /**
   * Couleur personnalisée de fond (optionnel)
   * Ex: "#7b72f9" pour violet
   */
  backgroundColor?: string;
  /**
   * Couleur personnalisée de texte (optionnel)
   */
  textColor?: string;
  className?: string;
}

export function MenuItem({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  selected = false,
  disabled = false,
  onClick,
  backgroundColor,
  textColor,
  className = "",
}: MenuItemProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Background color logic
  const getBackgroundColor = () => {
    if (backgroundColor) return backgroundColor;

    if (selected) {
      return isDark ? "var(--neutral-700)" : "var(--neutral-50)";
    }

    return isDark ? "var(--neutral-800)" : "white";
  };

  // Text color logic
  const getTextColor = () => {
    if (textColor) return textColor;

    if (selected) {
      return isDark ? "var(--neutral-100)" : "var(--neutral-500)";
    }

    return isDark ? "var(--neutral-200)" : "var(--neutral-500)";
  };

  // Border color logic
  const getBorderColor = () => {
    if (selected) {
      return isDark ? "var(--neutral-600)" : "var(--neutral-100)";
    }

    return isDark ? "var(--neutral-700)" : "var(--neutral-100)";
  };

  // Icon color (same as text)
  const iconColor = getTextColor();

  return (
    <div
      className={`h-[60px] relative shrink-0 w-full group ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      } ${className}`.trim()}
      style={{
        backgroundColor: getBackgroundColor(),
      }}
      onClick={disabled ? undefined : onClick}
      role="menuitem"
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      {/* Border bottom */}
      <div
        aria-hidden="true"
        className="absolute border-b border-solid inset-0 pointer-events-none z-[1]"
        style={{
          borderColor: getBorderColor(),
        }}
      />

      {/* Hover effect (only if not disabled and no custom bg) */}
      {!disabled && !backgroundColor && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[2]"
          style={{
            backgroundColor: isDark ? "var(--neutral-700)" : "var(--neutral-50)",
          }}
        />
      )}
      
      {/* Hover effect pour couleurs personnalisées (design system /500 → /600) */}
      {!disabled && backgroundColor && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[2]"
          style={{
            backgroundColor: getHoverColor(backgroundColor),
          }}
        />
      )}
      
      {/* Content - Au dessus de l'overlay */}
      <div className="flex flex-row items-center size-full relative z-[3]">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[18px] relative size-full">
          {/* Left icon */}
          {LeftIcon && (
            <div className="relative shrink-0 size-[24px]">
              <LeftIcon size={24} style={{ color: iconColor }} />
            </div>
          )}

          {/* Label */}
          <p
            className={`flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[16px] tracking-[0.16px] ${
              selected ? "font-bold" : "font-semibold"
            }`}
            style={{
              fontFamily: "Roboto, sans-serif",
              color: getTextColor(),
            }}
          >
            {label}
          </p>

          {/* Right icon */}
          {RightIcon && (
            <div className="relative shrink-0 size-[24px]">
              <RightIcon size={24} style={{ color: iconColor }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}