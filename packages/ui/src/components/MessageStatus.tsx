"use client";

/**
 * MessageStatus - Point de statut (success, fail, none)
 *
 * Basé sur AtomeMessageStatus dans OrganismeListEngagement.tsx
 */

export type MessageStatusLevel = "success" | "fail" | "none";

export interface MessageStatusProps {
  level?: MessageStatusLevel;
  className?: string;
}

export function MessageStatus({
  level = "none",
  className = "",
}: MessageStatusProps) {
  const isSuccess = level === "success";
  const isFail = level === "fail";

  const getFillColor = () => {
    if (isSuccess) return "#0DA500";
    if (isFail) return "var(--text-body)";
    return "var(--surface-neutral-default)";
  };

  const getStrokeColor = () => {
    if (isSuccess) return "#86D280";
    return "#737780";
  };

  return (
    <div className={`relative rounded-[8px] size-[18px] ${className}`}>
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
          fill={getFillColor()}
          stroke={getStrokeColor()}
        />
      </svg>
    </div>
  );
}
