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
  children?: ReactNode;
  label?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  size?: "small" | "medium";
  fontWeight?: "semibold" | "regular";
  gap?: "tight" | "normal";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
  variant?: "filled" | "outlined";
}

export function Chip({
  children,
  label,
  icon,
  iconPosition = "left",
  size = "medium",
  fontWeight = "semibold",
  gap = "tight",
  disabled = false,
  className = "",
  onClick,
  selected = false,
  variant = "outlined",
}: ChipProps) {
  const sizeClasses = size === "medium" ? "text-base" : "text-sm";
  const weightClass = fontWeight === "semibold" ? "font-semibold" : "font-normal";
  const gapClass = gap === "tight" ? "gap-1" : "gap-2";
  const colorClass = disabled ? "text-content-disabled" : "text-content-body";
  const iconColorClass = disabled ? "text-icon-disabled" : "text-icon-neutral-default";
  const iconSize = size === "medium" ? "size-5" : "size-4";

  // Handle selectable variant
  const isClickable = onClick !== undefined;
  const variantClass = isClickable
    ? selected
      ? variant === "filled"
        ? "bg-surface-information text-content-branded-action border border-edge-branded-default"
        : "border border-edge-branded-default text-content-branded-action"
      : "text-content-caption hover:text-content-branded-action"
    : "";
  const cursorClass = isClickable ? "cursor-pointer" : "";

  const content = label || children;

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center ${gapClass} ${variantClass} ${cursorClass} rounded-lg px-3 py-1.5 transition-colors ${isClickable ? "" : ""} ${className}`.trim()}
    >
      {icon && iconPosition === "left" && (
        <span className={`shrink-0 flex items-center justify-center ${iconSize} ${iconColorClass}`}>
          {icon}
        </span>
      )}
      <span className={`${sizeClasses} ${weightClass} ${isClickable ? "" : colorClass} whitespace-nowrap ${size === "medium" ? "tracking-[0.16px]" : "tracking-[0.14px]"}`}>
        {content}
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
