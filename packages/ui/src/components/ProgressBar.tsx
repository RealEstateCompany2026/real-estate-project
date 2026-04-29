"use client";

import React from "react";

/**
 * ProgressBar - Barre de progression
 *
 * Specs Figma:
 * - Height: 20px, border-radius: 20px
 * - Background: surface-neutral-action
 * - Fill: success-500 (default) ou couleur personnalisée
 * - Progress: 0-100%
 */

export interface ProgressBarProps {
  progress: number;
  color?: string;
  size?: "sm" | "default" | "lg";
  className?: string;
  showPercentage?: boolean;
  threshold?: number;
}

const sizeClasses = {
  sm: "h-2",
  default: "h-5",
  lg: "h-7",
};

export function ProgressBar({
  progress,
  color,
  size = "default",
  className = "",
  showPercentage = false,
  threshold,
}: ProgressBarProps) {
  const clamped = Math.min(Math.max(progress, 0), 100);

  const isAboveThreshold = threshold !== undefined && clamped >= threshold;
  const isBelowThreshold = threshold !== undefined && clamped < threshold;

  const barColorClass =
    isBelowThreshold
      ? "bg-[var(--indicator-bar-empty)]"
      : isAboveThreshold
        ? "bg-[var(--indicator-bar-filled-success)]"
        : !color
          ? "bg-[var(--indicator-bar-filled-success)]"
          : "";

  const barStyle: React.CSSProperties = {
    width: `${clamped}%`,
    ...(threshold === undefined && color ? { backgroundColor: color } : {}),
  };

  const percentageColorClass = isBelowThreshold
    ? "text-[var(--text-disabled)]"
    : isAboveThreshold
      ? "text-[var(--text-success)]"
      : "text-content-body";

  const bar = (
    <div
      className={`w-full rounded-full bg-surface-neutral-action ${sizeClasses[size]} ${!showPercentage ? className : ""}`.trim()}
    >
      <div
        className={`${sizeClasses[size]} rounded-full transition-all duration-300 ease-out ${barColorClass}`}
        style={barStyle}
      />
    </div>
  );

  if (!showPercentage) return bar;

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <div className="flex-1">{bar}</div>
      <span className={`text-sm font-semibold whitespace-nowrap ${percentageColorClass}`}>
        {Math.round(clamped)}%
      </span>
    </div>
  );
}
