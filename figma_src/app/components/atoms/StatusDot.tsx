/**
 * ATOM: StatusDot
 * 
 * Point coloré indiquant un statut ou niveau de progression
 * Utilise uniquement les tokens CSS du design system
 */

type StatusLevel = "empty" | "partial" | "complete" | "success" | "error";

export interface StatusDotProps {
  level: StatusLevel;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StatusDot({
  level,
  size = "md",
  className = "",
}: StatusDotProps) {
  const getSizeInPx = () => {
    switch (size) {
      case "sm":
        return "8px";
      case "md":
        return "12px";
      case "lg":
        return "16px";
    }
  };

  const getStatusStyles = () => {
    switch (level) {
      case "empty":
        return {
          backgroundColor: "transparent",
          border: "1px solid var(--border-neutral)",
        };
      case "partial":
        return {
          backgroundColor: "var(--surface-warning-subtle)",
          border: "1px solid var(--border-warning)",
        };
      case "complete":
        return {
          backgroundColor: "var(--surface-branded-subtle)",
          border: "1px solid var(--border-branded)",
        };
      case "success":
        return {
          backgroundColor: "var(--surface-success-subtle)",
          border: "1px solid var(--border-success)",
        };
      case "error":
        return {
          backgroundColor: "var(--surface-error-subtle)",
          border: "1px solid var(--border-error)",
        };
    }
  };

  return (
    <div
      className={`rounded-full ${className}`}
      style={{
        width: getSizeInPx(),
        height: getSizeInPx(),
        ...getStatusStyles(),
      }}
    />
  );
}