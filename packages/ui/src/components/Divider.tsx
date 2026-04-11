"use client";

import React from "react";

/**
 * Divider - Séparateur horizontal
 *
 * Specs Figma:
 * - Height: 1px
 * - Color: border-divider token (neutral-50 light / neutral-700 dark)
 * - Spacing: configurable (none, small, medium, large)
 */

export interface DividerProps {
  spacing?: "none" | "small" | "medium" | "large";
  className?: string;
}

const spacingMap = {
  none: "my-0",
  small: "my-1",
  medium: "my-3",
  large: "my-4",
};

export function Divider({
  spacing = "medium",
  className = "",
}: DividerProps) {
  return (
    <div className={`${spacingMap[spacing]} ${className}`.trim()}>
      <div
        className="h-px w-full"
        style={{ backgroundColor: "var(--surface-neutral-action)" }}
      />
    </div>
  );
}
