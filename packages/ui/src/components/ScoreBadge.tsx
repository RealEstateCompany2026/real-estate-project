"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

/**
 * ScoreBadge - Badge affichant un score avec tendance
 *
 * Specs Figma:
 * - Score: font semibold, text-headings color
 * - Trend arrow: ChevronDown rotated (up=180°, neutral=90°)
 * - Trend colors: success (up), error (down), neutral
 * - Sizes: sm (14px), md (16px), lg (32px heading)
 */

export interface ScoreBadgeProps {
  score: number;
  showTrend?: boolean;
  trend?: "up" | "down" | "neutral";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-h3",
};

const trendRotation = {
  up: "rotate-180",
  down: "",
  neutral: "rotate-90",
};

const trendColors = {
  up: "text-icon-success",
  down: "text-icon-error",
  neutral: "text-content-subtle",
};

const iconSizes = { sm: 14, md: 16, lg: 20 };

export function ScoreBadge({
  score,
  showTrend = false,
  trend = "neutral",
  size = "lg",
  className = "",
}: ScoreBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 font-semibold text-content-headings ${sizeClasses[size]} ${className}`.trim()}>
      <span>{score}</span>
      {showTrend && (
        <ChevronDown
          size={iconSizes[size]}
          className={`${trendRotation[trend]} ${trendColors[trend]}`}
        />
      )}
    </div>
  );
}
