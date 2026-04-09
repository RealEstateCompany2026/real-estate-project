import svgPaths from "../../../imports/svg-z9oao59v8e";

/**
 * ChipTrend - Chip avec texte + flèche de tendance
 * Based on Figma AtomeScoringTrend
 * 
 * Structure:
 * - Label (ex: "score") + flèche up/down
 * - Font : Roboto Regular 14px/16px
 * - Icône : 24×24px (flèche dropdown retournée pour up)
 * - Couleur flèche : #0DA500 (vert) pour up, #EC0119 (rouge) pour down
 * - Padding : 4px vertical
 * 
 * Usage:
 * <ChipTrend label="score" trend="up" />
 * <ChipTrend label="prix" trend="down" />
 */

export type TrendDirection = "up" | "down" | "neutral";

export interface ChipTrendProps {
  label: string;
  trend: TrendDirection;
  disabled?: boolean;
  className?: string;
}

export function ChipTrend({ label, trend, disabled = false, className = "" }: ChipTrendProps) {
  const textColor = disabled ? "var(--text-disabled)" : "var(--text-body)";
  
  // Couleurs fixes pour les tendances (pas de tokens car valeurs métier)
  const getTrendColor = () => {
    if (disabled) return "var(--icon-disabled)";
    if (trend === "up") return "var(--success-500)"; // Vert
    if (trend === "down") return "var(--error-500)"; // Rouge
    return "var(--icon-neutral-default)"; // Neutral
  };

  return (
    <div className={`inline-flex items-center ${className}`.trim()}>
      {/* Label */}
      <div className="py-[4px]">
        <p
          className="font-['Roboto',sans-serif]"
          style={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "16px",
            letterSpacing: "0.14px",
            color: textColor,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </p>
      </div>

      {/* Icône flèche (path depuis Figma) */}
      {trend !== "neutral" && (
        <div className="w-[24px] h-[24px] shrink-0 flex items-center justify-center">
          <div className={trend === "up" ? "-scale-y-100" : ""}>
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={svgPaths.p29d06c00}
                fill={getTrendColor()}
                stroke={getTrendColor()}
                strokeWidth="0.025"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
