import { ReactNode } from "react";

/**
 * Chip - Composant inline text + icon (optionnel)
 * Based on Figma AtomeTextIcon / AtomeIconText
 * 
 * Structure:
 * - Icône (optionnelle) : 20px (medium) ou 16px (small)
 * - Texte : Roboto SemiBold 16px/20px (medium) ou 14px/16px (small)
 * - Gap : 4px entre icône et texte (8px pour variant date)
 * 
 * Variantes:
 * - Size: medium (16px) ou small (14px)
 * - Icon position: left, right, none
 * - Font weight: semibold (default) ou regular (pour IDs, dates)
 * 
 * Usage:
 * <Chip size="medium" icon={<Plus />}>Texte</Chip>
 * <Chip size="small" icon={<ArrowDown />} iconPosition="right">Texte</Chip>
 * <Chip size="medium">55679201</Chip>
 */

export interface ChipProps {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  size?: "small" | "medium";
  fontWeight?: "semibold" | "regular";
  gap?: "4px" | "8px";
  disabled?: boolean;
  className?: string;
  theme?: "light" | "dark";
}

export function Chip({
  children,
  icon,
  iconPosition = "left",
  size = "medium",
  fontWeight = "semibold",
  gap = "4px",
  disabled = false,
  className = "",
  theme,
}: ChipProps) {
  const fontSize = size === "medium" ? "16px" : "14px";
  const lineHeight = size === "medium" ? "20px" : "16px";
  const letterSpacing = size === "medium" ? "0.16px" : "0.14px";
  const iconSize = size === "medium" ? "20px" : "16px";
  const fontWeightValue = fontWeight === "semibold" ? 600 : 400;

  // Couleur du texte selon l'état
  const textColor = disabled ? "var(--text-disabled)" : "var(--text-body)";
  const iconColor = disabled ? "var(--icon-disabled)" : "var(--icon-neutral-default)";

  return (
    <div className={`inline-flex items-center ${className}`.trim()} style={{ gap }}>
      {/* Icône à gauche */}
      {icon && iconPosition === "left" && (
        <div
          className="shrink-0 flex items-center justify-center"
          style={{
            width: iconSize,
            height: iconSize,
            color: iconColor,
          }}
        >
          {icon}
        </div>
      )}

      {/* Texte */}
      <span
        style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: fontWeightValue,
          fontSize,
          lineHeight,
          letterSpacing,
          color: textColor,
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>

      {/* Icône à droite */}
      {icon && iconPosition === "right" && (
        <div
          className="shrink-0 flex items-center justify-center"
          style={{
            width: iconSize,
            height: iconSize,
            color: iconColor,
          }}
        >
          {icon}
        </div>
      )}
    </div>
  );
}

/**
 * ChipDate - Variante spéciale pour les dates (icône calendar + durée)
 * Gap de 8px au lieu de 4px
 * Font Regular au lieu de SemiBold
 */
export interface ChipDateProps {
  children: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function ChipDate({ children, icon, disabled = false, className = "" }: ChipDateProps) {
  return (
    <Chip
      size="medium"
      fontWeight="regular"
      gap="8px"
      icon={icon}
      iconPosition="left"
      disabled={disabled}
      className={className}
    >
      {children}
    </Chip>
  );
}

/**
 * ChipId - Variante spéciale pour les IDs (sans icône, font Regular)
 */
export interface ChipIdProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function ChipId({ children, disabled = false, className = "" }: ChipIdProps) {
  return (
    <Chip size="medium" fontWeight="regular" disabled={disabled} className={className}>
      {children}
    </Chip>
  );
}