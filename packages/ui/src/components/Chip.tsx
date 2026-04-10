"use client";

import React, { ReactNode } from "react";

/**
 * Chip - Inline text + icon (optionnel)
 *
 * Specs Figma:
 * - Font: Roboto SemiBold 16px/20px (medium) ou 14px/16px (small)
 * - Gap: 4px entre icône et texte (8px pour variant date)
 * - Icône: 20px (medium) ou 16px (small)
 * - Variants: size (small/medium), iconPosition (left/right), fontWeight
 */

export interface ChipProps {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  size?: "small" | "medium";
  fontWeight?: "semibold" | "regular";
  gap?: "tight" | "normal";
  disabled?: boolean;
  className?: string;
}

export function Chip({
  children,
  icon,
  iconPosition = "left",
  size = "medium",
  fontWeight = "semibold",
  gap = "tight",
  disabled = false,
  className = "",
}: ChipProps) {
  const sizeClasses = size === "medium" ? "text-base" : "text-sm";
  const weightClass = fontWeight === "semibold" ? "font-semibold" : "font-normal";
  const gapClass = gap === "tight" ? "gap-1" : "gap-2";
  const colorClass = disabled ? "text-content-disabled" : "text-content-body";
  const iconColorClass = disabled ? "text-icon-disabled" : "text-icon-neutral-default";
  const iconSize = size === "medium" ? "size-5" : "size-4";

  return (
    <div className={`inline-flex items-center ${gapClass} ${className}`.trim()}>
      {icon && iconPosition === "left" && (
        <span className={`shrink-0 flex items-center justify-center ${iconSize} ${iconColorClass}`}>
          {icon}
        </span>
      )}
      <span className={`${sizeClasses} ${weightClass} ${colorClass} whitespace-nowrap tracking-wide`}>
        {children}
      </span>
      {icon && iconPosition === "right" && (
        <span className={`shrink-0 flex items-center justify-center ${iconSize} ${iconColorClass}`}>
          {icon}
        </span>
      )}
    </div>
  );
}

/** ChipDate - Variant for dates (regular weight, wider gap) */
export function ChipDate({ children, icon, disabled = false, className = "" }: {
  children: ReactNode; icon?: ReactNode; disabled?: boolean; className?: string;
}) {
  return <Chip size="medium" fontWeight="regular" gap="normal" icon={icon} disabled={disabled} className={className}>{children}</Chip>;
}

/** ChipId - Variant for IDs (no icon, regular weight) */
export function ChipId({ children, disabled = false, className = "" }: {
  children: ReactNode; disabled?: boolean; className?: string;
}) {
  return <Chip size="medium" fontWeight="regular" disabled={disabled} className={className}>{children}</Chip>;
}
