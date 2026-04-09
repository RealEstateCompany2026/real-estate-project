/**
 * DpeScale - Échelle DPE visuelle (A→G)
 * Atom du design system RealAgent
 *
 * Remplace EchelleDpe (raw Figma import)
 * 7 barres colorées, curseur sur la classe active
 */

"use client";

const DPE_CLASSES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'] as const;
const DPE_COLORS: Record<string, string> = {
  A: '#319834', B: '#33CC33', C: '#CBFC33',
  D: '#FCFC33', E: '#FCCC33', F: '#FC9933', G: '#FC3333',
};

export interface DpeScaleProps {
  activeClass: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | null;
  theme?: "light" | "dark";
  size?: "sm" | "md";
}

export function DpeScale({ activeClass, theme = "light", size = "md" }: DpeScaleProps) {
  const h = size === "sm" ? "h-3" : "h-5";
  return (
    <div className="flex items-end gap-[2px]" aria-label={`DPE: ${activeClass ?? 'non renseigné'}`}>
      {DPE_CLASSES.map((cls) => (
        <div key={cls} className="flex flex-col items-center gap-[2px]">
          <span
            className={`text-[10px] ${activeClass === cls ? 'font-bold' : 'font-normal'}`}
            style={{
              color: activeClass === cls
                ? DPE_COLORS[cls]
                : (theme === 'dark' ? 'var(--neutral-500)' : 'var(--neutral-300)'),
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
