"use client";

/**
 * VerticalDivider - Divider vertical pour séparer les sections dans les listes
 *
 * Basé sur VerticalDivider84Px.tsx du design system Figma
 */

export interface VerticalDividerProps {
  height?: number;
  variant?: "default" | "hover";
  className?: string;
}

export function VerticalDivider({
  height = 84,
  variant = "default",
  className = "",
}: VerticalDividerProps) {
  const getStrokeColor = () => {
    if (variant === "hover")
      return "var(--surface-neutral-action-hover)";
    return "var(--surface-neutral-action)";
  };

  return (
    <div className={`relative size-full ${className}`}>
      <div className="absolute flex inset-0 items-center justify-center">
        <svg
          className="block"
          fill="none"
          preserveAspectRatio="none"
          viewBox={`0 0 1 ${height}`}
          style={{
            width: "1px",
            height: `${height}px`,
          }}
        >
          <line
            stroke={getStrokeColor()}
            x1="0.5"
            y1="0"
            x2="0.5"
            y2={height}
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}
