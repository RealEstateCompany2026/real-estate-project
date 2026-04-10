"use client";

import React from "react";

/**
 * CompletionGauge - Jauge de complétion avec pourcentage
 *
 * Specs Figma:
 * - Bar: rounded-full, 3 height variants
 * - Color logic: >=100 success, >=75 branded, >=50 warning, <50 error
 * - Label + percentage display above bar
 */

export interface CompletionGaugeProps {
  percentage: number;
  label?: string;
  size?: "small" | "medium" | "large";
  showPercentage?: boolean;
  className?: string;
}

const heightClasses = {
  small: "h-1",
  medium: "h-2",
  large: "h-3",
};

export function CompletionGauge({
  percentage,
  label = "Complétion",
  size = "medium",
  showPercentage = true,
  className = "",
}: CompletionGaugeProps) {
  const clamped = Math.min(Math.max(percentage, 0), 100);

  const colorClass =
    clamped >= 100 ? "bg-green-500"
    : clamped >= 75 ? "bg-purple-500"
    : clamped >= 50 ? "bg-orange-500"
    : "bg-red-300";

  return (
    <div className={`w-full ${className}`.trim()}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm font-medium text-content-body">{label}</span>}
          {showPercentage && <span className="text-sm font-semibold text-content-strong">{clamped}%</span>}
        </div>
      )}
      <div className={`w-full ${heightClasses[size]} rounded-full bg-surface-neutral-action overflow-hidden`}>
        <div
          className={`${heightClasses[size]} rounded-full transition-all duration-300 ${colorClass}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
