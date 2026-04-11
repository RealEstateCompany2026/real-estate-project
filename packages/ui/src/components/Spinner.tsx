"use client";

import React from "react";
import { Loader2 } from "lucide-react";

/**
 * Spinner - Indicateur de chargement animé
 *
 * Specs Figma:
 * - Animation: rotation continue
 * - Sizes: sm (16px), md (24px), lg (32px)
 * - Variants: primary (purple), neutral (grey), inverse (white/black)
 * - Stroke width: 2px
 */

export type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerVariant = "primary" | "neutral" | "inverse";

export interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  className?: string;
  ariaLabel?: string;
}

const sizeMap: Record<SpinnerSize, number> = {
  sm: 16,
  md: 24,
  lg: 32,
};

const variantClasses: Record<SpinnerVariant, string> = {
  primary: "text-purple-500",
  neutral: "text-neutral-500",
  inverse: "text-white",
};

export function Spinner({
  size = "md",
  variant = "primary",
  className = "",
  ariaLabel = "Chargement...",
}: SpinnerProps) {
  return (
    <Loader2
      size={sizeMap[size]}
      className={`animate-spin ${variantClasses[variant]} ${className}`.trim()}
      strokeWidth={2}
      aria-label={ariaLabel}
      role="status"
    />
  );
}
