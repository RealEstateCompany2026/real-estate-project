/**
 * CalendarIcon - Vuesax Linear Calendar icon
 * Based on /src/imports/svg-3m7tsxgzyt.ts
 * 
 * Size: 20px (default)
 * Usage: <CalendarIcon /> (uses currentColor from parent)
 */

import svgPaths from "../../../../imports/svg-3m7tsxgzyt";

interface CalendarIconProps {
  color?: string;
  size?: number | string;
  className?: string;
}

export function CalendarIcon({ 
  color = "currentColor", 
  size = "100%",
  className = "" 
}: CalendarIconProps) {
  return (
    <svg 
      className={`block ${className}`}
      fill="none" 
      preserveAspectRatio="none" 
      viewBox="0 0 20 20"
      style={{ width: size, height: size }}
    >
      <g>
        <path d="M6.66667 1.66667V4.16667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d="M13.3333 1.66667V4.16667" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d="M2.91667 7.575H17.0833" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d={svgPaths.p118ff00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <g opacity="0" />
        <path d="M9.99542 11.4168H10.0029" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M6.91274 11.4168H6.92023" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M6.91274 13.9168H6.92023" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </svg>
  );
}
