import { useTheme } from "../../context/ThemeContext";
import { LucideIcon } from "lucide-react";

/**
 * LinkButton - Bouton avec style de lien
 * 
 * Bouton stylisé comme un lien hypertexte avec tous les états interactifs.
 * Reprend la même structure que Button mais avec un style underline.
 * 
 * Specs:
 * - Font: Roboto SemiBold 16px/20px
 * - Letter-spacing: 0.16px
 * - Text-decoration: underline
 * - Gap: 8px (entre icônes et texte)
 * - Padding: 12px
 * - Border-radius: 16px
 * - Focus ring: 2px à -4px offset
 * 
 * États:
 * - Default: Couleur par variant
 * - Hover: Couleur hover par variant
 * - Active: Couleur active par variant
 * - Disabled: Gris avec opacité réduite
 * 
 * Variants:
 * - neutral: Texte neutre (grey-600)
 * - branded: Texte violet (purple-500)
 * 
 * Usage:
 * <LinkButton variant="branded" onClick={handleClick}>
 *   En savoir plus
 * </LinkButton>
 * 
 * <LinkButton variant="neutral" iconLeft={Info}>
 *   Plus d'infos
 * </LinkButton>
 */

export type LinkButtonVariant = "neutral" | "branded";

export interface LinkButtonProps {
  /**
   * Variante de style
   */
  variant?: LinkButtonVariant;
  /**
   * Icône à gauche du texte
   */
  iconLeft?: LucideIcon;
  /**
   * Icône à droite du texte
   */
  iconRight?: LucideIcon;
  /**
   * Texte du bouton
   */
  children: string;
  /**
   * Fonction appelée au clic
   */
  onClick?: () => void;
  /**
   * Désactiver le bouton
   */
  disabled?: boolean;
  /**
   * Classes CSS supplémentaires
   */
  className?: string;
  /**
   * Type HTML du bouton
   */
  type?: "button" | "submit" | "reset";
}

export function LinkButton({
  variant = "neutral",
  iconLeft: IconLeft,
  iconRight: IconRight,
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: LinkButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const getVariantStyles = () => {
    if (disabled) {
      return {
        default: isDark ? "var(--neutral-400)" : "var(--neutral-400)", // grey-400
        hover: isDark ? "var(--neutral-400)" : "var(--neutral-400)",
        active: isDark ? "var(--neutral-400)" : "var(--neutral-400)",
        focusRing: isDark ? "var(--neutral-400)" : "var(--neutral-400)",
      };
    }

    switch (variant) {
      case "branded":
        return {
          default: isDark ? "#7b72f9" : "#7b72f9", // purple-500
          hover: isDark ? "#635cc7" : "#635cc7", // purple-600
          active: isDark ? "#4a4695" : "#4a4695", // purple-700
          focusRing: isDark ? "#635cc7" : "#635cc7",
        };
      case "neutral":
      default:
        return {
          default: isDark ? "var(--neutral-100)" : "var(--neutral-600)", // grey-200 (dark) / grey-600 (light)
          hover: isDark ? "#FFFFFF" : "var(--neutral-700)", // grey-50 (dark) / grey-700 (light)
          active: isDark ? "var(--neutral-50)" : "var(--neutral-800)", // grey-100 (dark) / grey-800 (light)
          focusRing: isDark ? "var(--neutral-100)" : "var(--neutral-700)",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-[8px] 
        px-[12px] py-[12px] rounded-[16px]
        font-semibold text-[16px] leading-[20px] tracking-[0.16px]
        underline decoration-1 underline-offset-2
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-[-4px]
        disabled:cursor-not-allowed disabled:opacity-50
        ${className}
      `.trim()}
      style={{
        fontFamily: "Roboto, sans-serif",
        color: styles.default,
        "--focus-ring-color": styles.focusRing,
      } as React.CSSProperties & { "--focus-ring-color": string }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = styles.hover;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = styles.default;
        }
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = styles.active;
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = styles.hover;
        }
      }}
    >
      {IconLeft && <IconLeft className="size-[20px]" strokeWidth={1.5} />}
      {children}
      {IconRight && <IconRight className="size-[20px]" strokeWidth={1.5} />}
    </button>
  );
}
