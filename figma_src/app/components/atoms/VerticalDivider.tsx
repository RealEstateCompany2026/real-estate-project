/**
 * ATOM: VerticalDivider
 * 
 * Divider vertical pour séparer les sections dans les listes
 * Basé sur VerticalDivider84Px.tsx du design system Figma
 */

export interface VerticalDividerProps {
  height?: number;
  theme?: "light" | "dark";
  variant?: "default" | "hover";
}

export function VerticalDivider({ 
  height = 84, 
  theme = "light",
  variant = "default"
}: VerticalDividerProps) {
  const getStrokeColor = () => {
    if (theme === "dark") {
      if (variant === "hover") return "var(--neutral-500)"; // neutral-500
      return "var(--neutral-700)"; // neutral-700
    } else {
      if (variant === "hover") return "var(--neutral-100)"; // neutral-100
      return "var(--neutral-50)"; // neutral-50
    }
  };

  return (
    <div className="relative size-full">
      <div className="absolute flex inset-0 items-center justify-center">
        <div 
          className="flex-none h-px rotate-90"
          style={{ width: `${height}px` }}
        >
          <div className="relative size-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg 
                className="block size-full" 
                fill="none" 
                preserveAspectRatio="none" 
                viewBox={`0 0 ${height} 1`}
              >
                <line 
                  stroke={getStrokeColor()} 
                  x2={height} 
                  y1="0.5" 
                  y2="0.5" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
