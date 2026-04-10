"use client";

/**
 * ChipScore - Chip avec jauge de scoring client
 *
 * Structure:
 * - Icône jauge semi-circulaire (32×20px) + score (5, 25, 50, 75, 95)
 * - 5 niveaux : veryLow, low, medium, high, veryHigh
 * - Couleurs : Rouge → Orange → Jaune → Vert clair → Vert foncé
 * - Font : Roboto SemiBold 16px/20px
 * - Padding : 10px horizontal, 8px vertical
 */

export type ScoreLevel = "veryLow" | "low" | "medium" | "high" | "veryHigh";

export interface ChipScoreProps {
  score: number;
  level: ScoreLevel;
  disabled?: boolean;
  className?: string;
}

// Couleurs fixes pour chaque niveau (couleurs métier réglementaires)
const SCORE_COLORS: Record<ScoreLevel, string> = {
  veryLow: "#EC0119",   // Rouge
  low: "#FF882F",       // Orange
  medium: "#FDEB03",    // Jaune
  high: "#4AC57B",      // Vert clair
  veryHigh: "#00A774",  // Vert foncé
};

// Hauteurs relatives des jauges
const SCORE_HEIGHTS: Record<ScoreLevel, string> = {
  veryLow: "h-[20.4px]",
  low: "h-[20.7px]",
  medium: "h-[19.979px]",
  high: "h-[20.569px]",
  veryHigh: "h-[20.408px]",
};

export function ChipScore({
  score,
  level,
  disabled = false,
  className = "",
}: ChipScoreProps) {
  const color = SCORE_COLORS[level];
  const heightClass = SCORE_HEIGHTS[level];
  const textColor = disabled ? "var(--text-disabled)" : "var(--text-body)";

  return (
    <div className={`inline-flex items-center ${className}`.trim()}>
      {/* Icône jauge - SVG path remplacé par rectangle coloré simplifié */}
      <div
        className={`relative w-[32px] shrink-0 ${heightClass}`}
        style={{
          opacity: disabled ? 0.5 : 1,
          background: color,
          borderRadius: "4px 0 0 4px",
        }}
      />

      {/* Score avec padding exact Figma */}
      <div className="px-[10px] py-[8px]">
        <p
          className="font-semibold text-[16px] leading-[20px] tracking-[0.16px]"
          style={{
            color: textColor,
            whiteSpace: "nowrap",
          }}
        >
          {score}
        </p>
      </div>
    </div>
  );
}

/**
 * Helper pour déterminer automatiquement le niveau selon le score
 */
export function getScoreLevel(score: number): ScoreLevel {
  if (score < 15) return "veryLow";
  if (score < 37) return "low";
  if (score < 62) return "medium";
  if (score < 85) return "high";
  return "veryHigh";
}

/**
 * ChipScoreAuto - Variante qui détermine automatiquement le niveau
 */
export interface ChipScoreAutoProps {
  score: number;
  disabled?: boolean;
  className?: string;
}

export function ChipScoreAuto({
  score,
  disabled = false,
  className = "",
}: ChipScoreAutoProps) {
  const level = getScoreLevel(score);
  return (
    <ChipScore score={score} level={level} disabled={disabled} className={className} />
  );
}
