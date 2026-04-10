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
  return (
    <div
      className={`
        w-full h-px ${className}
        ${
          variant === "hover"
            ? "bg-neutral-100 dark:bg-neutral-500"
            : "bg-neutral-50 dark:bg-neutral-700"
        }
      `}
      aria-hidden="true"
    />
  );
}
