"use client";

/**
 * HorizontalDivider - Séparateur horizontal tokenisé
 * Atom du design system RealAgent
 *
 * Remplace les SVG inline <line> dans les Cards
 * Supporte light/dark + hover/default
 */

export interface HorizontalDividerProps {
  variant?: "default" | "hover";
  className?: string;
}

export function HorizontalDivider({
  variant = "default",
  className = "",
}: HorizontalDividerProps) {
  const bgColor =
    variant === "hover"
      ? "var(--surface-neutral-action-hover)"
      : "var(--surface-neutral-action)";

  return (
    <div
      className={`w-full h-px ${className}`}
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    />
  );
}
