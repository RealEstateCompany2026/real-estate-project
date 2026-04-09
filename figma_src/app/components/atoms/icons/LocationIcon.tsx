/**
 * LocationIcon - Vuesax Linear Location icon
 * Based on /src/imports/svg-3m7tsxgzyt.ts
 * 
 * Size: 20px (default)
 * Usage: <LocationIcon /> (uses currentColor from parent)
 */

import svgPaths from "../../../../imports/svg-3m7tsxgzyt";

interface LocationIconProps {
  color?: string;
  size?: number | string;
  className?: string;
}

export function LocationIcon({ 
  color = "currentColor", 
  size = "100%",
  className = "" 
}: LocationIconProps) {
  return (
    <svg 
      className={`block ${className}`}
      fill="none" 
      preserveAspectRatio="none" 
      viewBox="0 0 20 20"
      style={{ width: size, height: size }}
    >
      <g>
        <path d={svgPaths.p3cede380} stroke={color} strokeWidth="1.5" />
        <path d={svgPaths.p31303b00} stroke={color} strokeWidth="1.5" />
        <path d={svgPaths.p304c5900} opacity="0" stroke={color} />
      </g>
    </svg>
  );
}
