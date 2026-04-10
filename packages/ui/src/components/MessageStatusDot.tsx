"use client";

/**
 * MessageStatusDot - Indicateur de statut de message
 *
 * Point coloré indiquant l'état d'un message (none, success, fail).
 *
 * Specs:
 * - Size: 18×18px
 * - Border-radius: 8px (cercle)
 * - Border: 1px solid
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
  const getColors = () => {
    if (status === "success") {
      return {
        fill: "#0DA500",
        stroke: "#86D280",
      };
    }
    if (status === "fail") {
      return {
        fill: "var(--neutral-200) dark:var(--neutral-500)",
        stroke: "#737780",
      };
    }
    // none
    return {
      fill: "white dark:var(--neutral-800)",
      stroke: "#a1a4aa dark:var(--neutral-500)",
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
