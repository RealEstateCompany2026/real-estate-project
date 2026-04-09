/**
 * ATOM: ScoreBadge
 * 
 * Badge affichant un score numérique avec indicateur de tendance
 * Utilise uniquement les tokens CSS du design system
 */

import { ChevronDown } from "lucide-react";

export interface ScoreBadgeProps {
  score: number;
  showTrend?: boolean;
  trend?: "up" | "down" | "neutral";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ScoreBadge({
  score,
  showTrend = false,
  trend = "neutral",
  size = "lg",
  className = "",
}: ScoreBadgeProps) {
  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return {
          fontSize: "var(--text-sm)",
          lineHeight: "var(--lh-sm)",
          padding: "var(--spacing-scale200) var(--spacing-scale300)",
        };
      case "md":
        return {
          fontSize: "var(--text-base)",
          lineHeight: "var(--lh-base)",
          padding: "var(--spacing-scale300) var(--spacing-scale400)",
        };
      case "lg":
        return {
          fontSize: "var(--text-h3)",
          lineHeight: "var(--lh-h3)",
          padding: "var(--spacing-scale400) var(--spacing-scale500)",
        };
    }
  };

  const getTrendRotation = () => {
    switch (trend) {
      case "up":
        return "rotate-180";
      case "down":
        return "";
      case "neutral":
        return "rotate-90";
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "var(--icon-success)";
      case "down":
        return "var(--icon-error)";
      case "neutral":
        return "var(--icon-caption)";
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-2 ${className}`}
      style={{
        ...getSizeStyles(),
        color: "var(--text-headings)",
        fontFamily: "var(--font-family)",
        fontWeight: "600",
      }}
    >
      <span>{score}</span>
      {showTrend && (
        <ChevronDown
          size={size === "lg" ? 20 : size === "md" ? 16 : 14}
          className={getTrendRotation()}
          style={{ color: getTrendColor() }}
        />
      )}
    </div>
  );
}