"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

/**
 * ChipTrend - Chip avec texte + flèche de tendance
 *
 * Structure:
 * - Label (ex: "score") + flèche up/down
 * - Font : Roboto Regular 14px/16px
 * - Icône : 24×24px (flèche)
 * - Couleur flèche : #0DA500 (vert) pour up, #EC0119 (rouge) pour down
 * - Padding : 4px vertical
 */

export type TrendDirection = "up" | "down" | "neutral";

export interface ChipTrendProps {
  label: string;
  trend: TrendDirection;
  disabled?: boolean;
  className?: string;
}

export function ChipTrend({
  label,
  trend,
  disabled = false,
  className = "",
}: ChipTrendProps) {
  const textColor = disabled ? "var(--text-disabled)" : "var(--text-body)";

  // Couleurs fixes pour les tendances (valeurs métier réglementaires)
  const getTrendColor = () => {
    if (disabled) return "var(--icon-disabled)";
    if (trend === "up") return "#0DA500"; // Vert
    if (trend === "down") return "#EC0119"; // Rouge
    return "var(--icon-neutral-default)"; // Neutral
  };

  return (
    <div className={`inline-flex items-center ${className}`.trim()}>
      {/* Label */}
      <div className="py-[4px]">
        <p
          className="text-[14px] leading-[16px] tracking-[0.14px]"
          style={{
            color: textColor,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </p>
      </div>

      {/* Icône flèche */}
      {trend !== "neutral" && (
        <div className="w-[24px] h-[24px] shrink-0 flex items-center justify-center">
          {trend === "up" ? (
            <TrendingUp size={20} color={getTrendColor()} strokeWidth={2} />
          ) : (
            <TrendingDown size={20} color={getTrendColor()} strokeWidth={2} />
          )}
        </div>
      )}
    </div>
  );
}
