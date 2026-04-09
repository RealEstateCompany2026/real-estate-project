/**
 * ProfileCircleIcon - Vuesax Linear Profile Circle icon
 * Based on /src/imports/svg-3m7tsxgzyt.ts
 * 
 * Size: 20px (default)
 * Usage: <ProfileCircleIcon /> (uses currentColor from parent)
 */

import svgPaths from "../../../../imports/svg-3m7tsxgzyt";

interface ProfileCircleIconProps {
  color?: string;
  size?: number | string;
  className?: string;
}

export function ProfileCircleIcon({ 
  color = "currentColor", 
  size = "100%",
  className = "" 
}: ProfileCircleIconProps) {
  return (
    <svg 
      className={`block ${className}`}
      fill="none" 
      preserveAspectRatio="none" 
      viewBox="0 0 20 20"
      style={{ width: size, height: size }}
    >
      <g>
        <path d={svgPaths.p35d95c00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p22ef9d00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.p14d24500} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <g opacity="0" />
      </g>
    </svg>
  );
}
