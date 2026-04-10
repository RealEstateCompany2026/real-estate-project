"use client";

/**
 * IconDpe - Icône DPE (Diagnostic de Performance Énergétique)
 *
 * Dimensions: 20px × 20px (small), 40px × 40px (medium), 60px × 60px (large)
 * Border-radius: 16px
 * 7 variantes (A à G) avec couleurs spécifiques
 * Couleurs réglementaires DPE (non modifiables)
 */

export type DpeType = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export interface IconDpeProps {
  /** Alias for type, kept for backward compatibility */
  type?: DpeType;
  /** Classe énergétique */
  classe?: DpeType;
  /** Est-ce que cette classe est sélectionnée */
  selected?: boolean;
  /** Taille du composant */
  size?: "small" | "medium" | "large";
  className?: string;
}

// Couleurs exactes DPE (réglementaires)
const DPE_COLORS: Record<DpeType, string> = {
  A: "#00a774",
  B: "#01bb54",
  C: "#4ac57b",
  D: "#fdeb03",
  E: "#ffbc02",
  F: "#ff882f",
  G: "#ec0119",
};

const SIZE_MAP = {
  small: { width: 20, height: 20, fontSize: 14 },
  medium: { width: 40, height: 40, fontSize: 20 },
  large: { width: 60, height: 60, fontSize: 28 },
};

export function IconDpe({
  type,
  classe,
  selected = false,
  size = "small",
  className = "",
}: IconDpeProps) {
  const dpeClass = classe || type || "A";
  const backgroundColor = DPE_COLORS[dpeClass];
  const dimensions = SIZE_MAP[size];

  return (
    <div
      className={`
        relative rounded-[16px] flex items-center justify-center
        transition-all ${className}
      `.trim()}
      style={{
        backgroundColor,
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        border: selected
          ? "3px solid var(--surface-branded-action)"
          : "3px solid transparent",
        boxShadow: selected
          ? "0 0 0 2px var(--surface-branded-subtle)"
          : "none",
      }}
    >
      <p
        className="text-center whitespace-nowrap font-bold text-white"
        style={{
          fontSize: `${dimensions.fontSize}px`,
          lineHeight: `${dimensions.height}px`,
          letterSpacing: "0.14px",
        }}
      >
        {dpeClass}
      </p>
    </div>
  );
}
