import { Loader2 } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/**
 * Spinner - Indicateur de chargement animé
 * 
 * Composant atomique utilisant l'icône Loader2 de Lucide avec animation de rotation.
 * 
 * Specs:
 * - Animation: rotation continue (1 tour par seconde)
 * - Couleur: Adaptative au thème (light/dark)
 * - Sizes: sm (16px), md (24px), lg (32px)
 * - Stroke width: 2px
 * 
 * Variants:
 * - primary: Couleur branded (purple)
 * - neutral: Couleur neutre (grey)
 * - inverse: Couleur inversée (blanc/noir)
 * 
 * Usage:
 * <Spinner size="md" variant="primary" />
 * <Spinner size="sm" variant="neutral" />
 * <Spinner size="lg" variant="inverse" />
 */

export type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerVariant = "primary" | "neutral" | "inverse";

export interface SpinnerProps {
  /**
   * Taille du spinner
   * @default "md"
   */
  size?: SpinnerSize;
  /**
   * Variant de couleur
   * @default "primary"
   */
  variant?: SpinnerVariant;
  /**
   * Classe CSS supplémentaire
   */
  className?: string;
  /**
   * Label accessible pour screen readers
   */
  ariaLabel?: string;
}

export function Spinner({
  size = "md",
  variant = "primary",
  className = "",
  ariaLabel = "Chargement...",
}: SpinnerProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Tailles
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  // Couleurs selon le variant
  const getColor = () => {
    switch (variant) {
      case "primary":
        return isDark ? "#968FFA" : "#7B72F9"; // --purple-400 / --purple-500
      case "neutral":
        return isDark ? "var(--neutral-400)" : "var(--neutral-500)"; // --grey-400 / --grey-500
      case "inverse":
        return isDark ? "var(--neutral-700)" : "#FFFFFF"; // neutral-700 / white
    }
  };

  return (
    <Loader2
      size={sizeMap[size]}
      className={`animate-spin ${className}`.trim()}
      style={{ color: getColor() }}
      strokeWidth={2}
      aria-label={ariaLabel}
      role="status"
    />
  );
}
