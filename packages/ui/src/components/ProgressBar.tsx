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
}: ProgressBarProps) {
  const clamped = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className={`w-full rounded-full bg-surface-neutral-action ${sizeClasses[size]} ${className}`.trim()}
    >
      <div
        className={`${sizeClasses[size]} rounded-full transition-all duration-300 ease-out ${
          !color ? "bg-green-500" : ""
        }`}
        style={{
          width: `${clamped}%`,
          ...(color ? { backgroundColor: color } : {}),
        }}
      />
    </div>
  );
}
