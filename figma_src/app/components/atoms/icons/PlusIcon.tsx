/**
 * PlusIcon - Icon extracted from Figma IconButton import
 * Based on /src/imports/svg-pzsue78e2k.ts
 * 
 * Size: 20px (default), adaptable
 * Usage: <PlusIcon color="currentColor" />
 */

interface PlusIconProps {
  color?: string;
  size?: number | string;
  className?: string;
}

export function PlusIcon({ 
  color = "currentColor", 
  size = "100%",
  className = "" 
}: PlusIconProps) {
  return (
    <svg
      className={`block ${className}`}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 11.6667 11.6667"
      style={{ width: size, height: size }}
    >
      <path
        d="M5 6.66667H0V5H5V0H6.66667V5H11.6667V6.66667H6.66667V11.6667H5V6.66667Z"
        fill={color}
        id="add"
      />
    </svg>
  );
}
