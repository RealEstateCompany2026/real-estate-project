/**
 * FormatSquareIcon - Vuesax Linear Format Square icon
 * Based on /src/imports/svg-3m7tsxgzyt.ts
 * 
 * Size: 20px (default)
 * Usage: <FormatSquareIcon /> (uses currentColor from parent)
 */

import svgPaths from "../../../../imports/svg-3m7tsxgzyt";

interface FormatSquareIconProps {
  color?: string;
  size?: number | string;
  className?: string;
}

export function FormatSquareIcon({ 
  color = "currentColor", 
  size = "100%",
  className = "" 
}: FormatSquareIconProps) {
  return (
    <svg 
      className={`block ${className}`}
      fill="none" 
      preserveAspectRatio="none" 
      viewBox="0 0 20 20"
      style={{ width: size, height: size }}
    >
      <g>
        <path d={svgPaths.p9818000} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.pa852840} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p169aca80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.pcf2c780} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p699ac00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <g opacity="0" />
      </g>
    </svg>
  );
}
