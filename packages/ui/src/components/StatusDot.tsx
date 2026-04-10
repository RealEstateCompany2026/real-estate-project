"use client";

import React from "react";

/**
 * StatusDot - Point coloré indiquant un statut
 *
 * Specs Figma:
 * - Sizes: sm (8px), md (12px), lg (16px)
 * - Levels: empty, partial, complete, success, error
 * - Uses surface/border tokens for light/dark support
 */

export type StatusLevel = "empty" | "partial" | "complete" | "success" | "error";

export interface StatusDotProps {
  level: StatusLevel;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses: Record<string, string> = {
  sm: "size-2",
  md: "size-3",
  lg: "size-4",
};

const levelClasses: Record<StatusLevel, string> = {
  empty: "bg-transparent border border-edge-neutral-default",
  partial: "bg-surface-warning-subtle border border-edge-warning",
  complete: "bg-surface-branded-subtle border border-edge-branded-default",
  success: "bg-surface-success-subtle border border-edge-success",
  error: "bg-surface-error-subtle border border-edge-error",
};

export function StatusDot({
  level,
  size = "md",
  className = "",
}: StatusDotProps) {
  return (
    <div
      className={`rounded-full ${sizeClasses[size]} ${levelClasses[level]} ${className}`.trim()}
    />
  );
}
