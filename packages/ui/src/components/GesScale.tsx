"use client";

/**
 * GesScale - Échelle GES visuelle (A→G)
 * Atom du design system RealAgent
 *
 * 7 barres dégradé violet, curseur sur la classe active
 * Couleurs réglementaires GES (non modifiables)
 */

const GES_CLASSES = ["A", "B", "C", "D", "E", "F", "G"] as const;
const GES_COLORS: Record<string, string> = {
  A: "#D6C8F0",
  B: "#C0A8E8",
  C: "#AB88E0",
  D: "#9568D8",
  E: "#7F48D0",
  F: "#6928C8",
  G: "#5308C0",
};

export interface GesScaleProps {
  activeClass:
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | null;
  size?: "sm" | "md";
  className?: string;
}

export function GesScale({
  activeClass,
  size = "md",
  className = "",
}: GesScaleProps) {
  const h = size === "sm" ? "h-3" : "h-5";

  return (
    <div
      className={`flex items-end gap-[2px] ${className}`}
      aria-label={`GES: ${activeClass ?? "non renseigné"}`}
    >
      {GES_CLASSES.map((cls) => (
        <div key={cls} className="flex flex-col items-center gap-[2px]">
          <span
            className={`text-[10px] ${activeClass === cls ? "font-bold" : "font-normal"}`}
            style={{
              color:
                activeClass === cls
                  ? GES_COLORS[cls]
                  : "var(--neutral-300) dark:var(--neutral-500)",
            }}
          >
            {cls}
          </span>
          <div
            className={`w-4 ${h} rounded-[2px]`}
            style={{
              backgroundColor: GES_COLORS[cls],
              opacity: activeClass === cls ? 1 : 0.3,
            }}
          />
        </div>
      ))}
    </div>
  );
}
