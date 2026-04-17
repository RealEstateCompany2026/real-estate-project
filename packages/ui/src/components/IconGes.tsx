"use client";

/**
 * IconGes - Icône GES (Gaz à Effet de Serre)
 *
 * Dimensions: 20px × 20px (small), 40px × 40px (medium), 60px × 60px (large)
 * Border-radius: 16px
 * 7 variantes (A à G) avec couleurs spécifiques
 * Couleurs réglementaires GES (non modifiables)
 */

export type GesType = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export interface IconGesProps {
  /** Alias for type, kept for backward compatibility */
  type?: GesType;
  /** Classe GES */
  classe?: GesType;
  /** Est-ce que cette classe est sélectionnée */
  selected?: boolean;
  /** Taille du composant */
  size?: "small" | "medium" | "large";
  className?: string;
}

// Couleurs exactes GES (réglementaires)
const GES_COLORS: Record<GesType, string> = {
  A: "#f2e9f7",
  B: "#ddb8ee",
  C: "#cd97e4",
  D: "#b768d9",
  E: "#a23bce",
  F: "#8b1fb5",
  G: "#6d0f91",
};

const SIZE_MAP = {
  small: { width: 20, height: 20, fontSize: 14 },
  medium: { width: 40, height: 40, fontSize: 20 },
  large: { width: 60, height: 60, fontSize: 28 },
};

export function IconGes({
  type,
  classe,
  selected = false,
  size = "small",
  className = "",
}: IconGesProps) {
  const gesClass = classe || type || "A";
  const backgroundColor = GES_COLORS[gesClass];
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
        className="text-center whitespace-nowrap font-bold text-content-branded-on-action"
        style={{
          fontSize: `${dimensions.fontSize}px`,
          lineHeight: `${dimensions.height}px`,
          letterSpacing: "0.14px",
        }}
      >
        {gesClass}
      </p>
    </div>
  );
}
