import { useTheme } from "../../context/ThemeContext";

/**
 * MessageStatusDot - Indicateur de statut de message
 * 
 * Point coloré indiquant l'état d'un message (none, success, fail).
 * 
 * Specs:
 * - Size: 18×18px
 * - Border-radius: 8px (cercle)
 * - Border: 1px solid
 * 
 * États:
 * - none: blanc/dark avec border gris
 * - success: vert avec border vert foncé
 * - fail: gris avec border gris foncé
 * 
 * Couleurs Light:
 * - none: fill white, stroke #a1a4aa
 * - success: fill #4ABC40, stroke #109204
 * - fail: fill #D0D1D4, stroke #737780
 * 
 * Couleurs Dark:
 * - none: fill #111215, stroke #737780
 * - success: fill #0DA500, stroke #86D280
 * - fail: fill #444955, stroke #737780
 * 
 * Usage:
 * <MessageStatusDot status="success" />
 */

export type MessageStatus = "none" | "success" | "fail";

export interface MessageStatusDotProps {
  /**
   * État du message
   */
  status?: MessageStatus;
  className?: string;
}

export function MessageStatusDot({
  status = "none",
  className = "",
}: MessageStatusDotProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const getColors = () => {
    if (status === "success") {
      return {
        fill: isDark ? "var(--success-500)" : "#4ABC40",
        stroke: isDark ? "#86D280" : "#109204",
      };
    }
    if (status === "fail") {
      return {
        fill: isDark ? "var(--neutral-500)" : "var(--neutral-200)",
        stroke: "#737780",
      };
    }
    // none
    return {
      fill: isDark ? "var(--neutral-800)" : "white",
      stroke: isDark ? "#737780" : "#a1a4aa",
    };
  };

  const colors = getColors();

  return (
    <div className={`relative rounded-[8px] size-[18px] ${className}`.trim()}>
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <circle
          cx="9"
          cy="9"
          r="8.5"
          fill={colors.fill}
          stroke={colors.stroke}
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
