/**
 * Divider - Séparateur horizontal
 * Atom du design system RealAgent
 * 
 * Ligne de séparation simple entre les sections de contenu.
 */

"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";

export interface DividerProps {
  /** Espacement vertical autour du divider (en px) */
  spacing?: "none" | "small" | "medium" | "large";
  /** Classe CSS additionnelle */
  className?: string;
}

const spacingMap = {
  none: "my-0",
  small: "my-4",
  medium: "my-6",
  large: "my-8",
};

export const Divider: React.FC<DividerProps> = ({
  spacing = "medium",
  className = "",
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`${spacingMap[spacing]} ${className}`}>
      <div
        className="h-px w-full"
        style={{
          backgroundColor: isDark ? "var(--neutral-700)" : "var(--neutral-50)",
        }}
      />
    </div>
  );
};