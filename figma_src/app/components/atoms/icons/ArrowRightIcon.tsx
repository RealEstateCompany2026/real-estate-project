/**
 * ArrowRightIcon - Vuesax Linear Arrow Right icon
 * Based on /src/imports/svg-styj6hpnw2.ts
 * 
 * Size: 20px (default)
 * Usage: <ArrowRightIcon /> (uses currentColor from parent)
 */

import svgPaths from "../../../../imports/svg-styj6hpnw2";

interface ArrowRightIconProps {
  color?: string;
  size?: number | string;
  className?: string;
}

export function ArrowRightIcon({ 
  color = "currentColor", 
  size = "100%",
  className = "" 
}: ArrowRightIconProps) {
  return (
    <svg 
      className={`block ${className}`}
      fill="none" 
      preserveAspectRatio="none" 
      viewBox="0 0 20 20"
      style={{ width: size, height: size }}
    >
      <g>
        <path d={svgPaths.p3a9aee80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <g opacity="0" />
      </g>
    </svg>
  );
}
