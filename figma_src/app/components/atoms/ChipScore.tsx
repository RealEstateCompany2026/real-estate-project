import svgPaths from "../../../imports/svg-oxd6s4xfit";

/**
 * ChipScore - Chip avec jauge de scoring client
 * Based on Figma AtomeIconTextScoringClient
 * 
 * Structure:
 * - Icône jauge semi-circulaire (32×20px) + score (5, 25, 50, 75, 95)
 * - 5 niveaux : veryLow, low, medium, high, veryHigh
 * - Couleurs : Rouge → Orange → Jaune → Vert clair → Vert foncé
 * - Font : Roboto SemiBold 16px/20px
 * - Padding : 10px horizontal, 8px vertical
 * 
 * Usage:
 * <ChipScore score={5} level="veryLow" />
 * <ChipScore score={75} level="high" />
 */

export type ScoreLevel = "veryLow" | "low" | "medium" | "high" | "veryHigh";

export interface ChipScoreProps {
  score: number;
  level: ScoreLevel;
  disabled?: boolean;
  className?: string;
}

// Couleurs fixes pour chaque niveau (pas de tokens car valeurs métier)
const SCORE_COLORS: Record<ScoreLevel, string> = {
  veryLow: "#EC0119",   // Rouge
  low: "#FF882F",       // Orange
  medium: "#FDEB03",    // Jaune
  high: "#4AC57B",      // Vert clair
  veryHigh: "#00A774",  // Vert foncé
};

// SVG Paths + ViewBox pour chaque niveau (depuis Figma)
const SCORE_SVGS: Record<ScoreLevel, { path: string; viewBox: string; height: string }> = {
  veryLow: {
    path: svgPaths?.p319a7380 || "",
    viewBox: "0 0 32 20.141",
    height: "20.4px",
  },
  low: {
    path: svgPaths?.p2d8a4b80 || "",
    viewBox: "0 0 32 20.0137",
    height: "20.706px",
  },
  medium: {
    path: svgPaths?.p3e2bce80 || "",
    viewBox: "0 0 32 19.963",
    height: "19.979px",
  },
  high: {
    path: svgPaths?.p21e37f00 || "",
    viewBox: "0 0 32 19.9793",
    height: "20.569px",
  },
  veryHigh: {
    path: svgPaths?.p22896d00 || "",
    viewBox: "0 0 32 20.1106",
    height: "20.408px",
  },
};

export function ChipScore({ score, level, disabled = false, className = "" }: ChipScoreProps) {
  const color = SCORE_COLORS[level];
  const svg = SCORE_SVGS[level];
  const textColor = disabled ? "var(--text-disabled)" : "var(--text-body)";

  // Defensive check: if svg is undefined, return a fallback
  if (!svg) {
    console.error(`ChipScore: Invalid level "${level}". Expected one of: veryLow, low, medium, high, veryHigh`);
    return (
      <div className={`inline-flex items-center ${className}`.trim()}>
        <div className="px-[10px] py-[8px]">
          <p
            className="font-['Roboto',sans-serif]"
            style={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.16px",
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

  return (
    <div className={`inline-flex items-center ${className}`.trim()}>
      {/* Icône jauge */}
      <div className="relative w-[32px] shrink-0" style={{ height: svg.height, opacity: disabled ? 0.5 : 1 }}>
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox={svg.viewBox}
        >
          <path d={svg.path} fill={color} />
        </svg>
      </div>

      {/* Score avec padding exact Figma */}
      <div className="px-[10px] py-[8px]">
        <p
          className="font-['Roboto',sans-serif]"
          style={{
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "0.16px",
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

export function ChipScoreAuto({ score, disabled = false, className = "" }: ChipScoreAutoProps) {
  const level = getScoreLevel(score);
  return <ChipScore score={score} level={level} disabled={disabled} className={className} />;
}