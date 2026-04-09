/**
 * HomeIcon - Vuesax Linear Home icon
 * Based on /src/imports/svg-3m7tsxgzyt.ts
 * 
 * Size: 20px (default)
 * Usage: <HomeIcon /> (uses currentColor from parent)
 */

import svgPaths from "../../../../imports/svg-3m7tsxgzyt";

interface HomeIconProps {
  color?: string;
  size?: number | string;
  className?: string;
}

export function HomeIcon({ 
  color = "currentColor", 
  size = "100%",
  className = "" 
}: HomeIconProps) {
  return (
    <svg 
      className={`block ${className}`}
      fill="none" 
      preserveAspectRatio="none" 
      viewBox="0 0 20 20"
      style={{ width: size, height: size }}
    >
      <g>
        <path d={svgPaths.p11095310} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M10 14.9917V12.4917" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M19.5 0.5V19.5H0.5V0.5H19.5Z" opacity="0" stroke={color} />
      </g>
    </svg>
  );
}
