/**
 * HorizontalDivider - Séparateur horizontal tokenisé
 * Atom du design system RealAgent
 *
 * Remplace les SVG inline <line> dans les Cards
 * Supporte light/dark + hover/default
 */

"use client";

export interface HorizontalDividerProps {
  theme?: "light" | "dark";
  variant?: "default" | "hover";
  className?: string;
}

export function HorizontalDivider({
  theme = "light",
  variant = "default",
  className = "",
}: HorizontalDividerProps) {
  const getColor = () => {
    if (theme === "dark") {
      return variant === "hover" ? "var(--neutral-500)" : "var(--neutral-700)";
    }
    return variant === "hover" ? "var(--neutral-100)" : "var(--neutral-50)";
  };

  return (
    <div
      className={`w-full h-px ${className}`.trim()}
      style={{ backgroundColor: getColor() }}
      aria-hidden="true"
    />
  );
}
