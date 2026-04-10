"use client";

/**
 * DpeScale - Échelle DPE visuelle (A→G)
 * Atom du design system RealAgent
 *
 * 7 barres colorées, curseur sur la classe active
 * Couleurs réglementaires DPE (non modifiables)
 */

const DPE_CLASSES = ["A", "B", "C", "D", "E", "F", "G"] as const;
const DPE_COLORS: Record<string, string> = {
  A: "#319834",
  B: "#33CC33",
  C: "#CBFC33",
  D: "#FCFC33",
  E: "#FCCC33",
  F: "#FC9933",
  G: "#FC3333",
};

export interface DpeScaleProps {
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

export function DpeScale({
  activeClass,
  size = "md",
  className = "",
}: DpeScaleProps) {
  const h = size === "sm" ? "h-3" : "h-5";

  return (
    <div
      className={`flex items-end gap-[2px] ${className}`}
      aria-label={`DPE: ${activeClass ?? "non renseigné"}`}
    >
      {DPE_CLASSES.map((cls) => (
        <div key={cls} className="flex flex-col items-center gap-[2px]">
          <span
            className={`text-[10px] ${activeClass === cls ? "font-bold" : "font-normal"}`}
            style={{
              color:
                activeClass === cls
                  ? DPE_COLORS[cls]
                  : "var(--neutral-300) dark:var(--neutral-500)",
            }}
          >
            {cls}
          </span>
          <div
            className={`w-4 ${h} rounded-[2px]`}
            style={{
              backgroundColor: DPE_COLORS[cls],
              opacity: activeClass === cls ? 1 : 0.3,
            }}
          />
        </div>
      ))}
    </div>
  );
}
