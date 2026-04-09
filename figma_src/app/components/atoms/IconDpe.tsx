/**
 * ATOM: IconDpe
 * 
 * Icône DPE (Diagnostic de Performance Énergétique)
 * Dimensions: 20px × 20px (small), 40px × 40px (medium), 60px × 60px (large)
 * Border-radius: 16px
 * 7 variantes (A à G) avec couleurs spécifiques
 * 
 * Peut être utilisé en mode sélection pour le formulaire de création de bien
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

// Couleurs exactes depuis Figma
const DPE_COLORS: Record<DpeType, string> = {
  A: "#00a774", // Vert foncé
  B: "#01bb54", // Vert moyen
  C: "#4ac57b", // Vert clair
  D: "#fdeb03", // Jaune
  E: "#ffbc02", // Orange clair
  F: "#ff882f", // Orange
  G: "#ec0119", // Rouge
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
  className = "" 
}: IconDpeProps) {
  const dpeClass = classe || type || "A";
  const backgroundColor = DPE_COLORS[dpeClass];
  const dimensions = SIZE_MAP[size];

  return (
    <div
      className={`relative rounded-[16px] flex items-center justify-center transition-all ${className}`.trim()}
      style={{
        backgroundColor,
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        border: selected ? "3px solid var(--primary-default)" : "3px solid transparent",
        boxShadow: selected ? "0 0 0 2px var(--primary-container)" : "none",
      }}
    >
      <p
        className="font-['Roboto',sans-serif] text-center whitespace-nowrap"
        style={{
          fontWeight: 700, // Bold
          fontSize: `${dimensions.fontSize}px`,
          lineHeight: `${dimensions.height}px`,
          letterSpacing: "0.14px",
          color: "#FFFFFF",
        }}
      >
        {dpeClass}
      </p>
    </div>
  );
}