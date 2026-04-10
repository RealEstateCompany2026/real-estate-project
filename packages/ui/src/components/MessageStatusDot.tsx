"use client";

/**
 * MessageStatusDot — Aligned with Figma DS (file 09EiMQjcDWgb7MzykS8zU0)
 *
 * Figma name: "atome . message . status"
 * Figma specs: 18×18px, border-radius 8px, border 1px solid
 *
 * Variants:
 *   none    → empty circle (neutral border, transparent/white fill)
 *   success → green filled circle
 *   fail    → gray filled circle
 */

export type MessageStatus = "none" | "success" | "fail";

export interface MessageStatusDotProps {
  status?: MessageStatus;
  className?: string;
}

export function MessageStatusDot({
  status = "none",
  className = "",
}: MessageStatusDotProps) {
  const colorClasses = {
    none: "bg-surface-neutral-default border border-edge-disabled",
    success: "bg-[var(--green-500)] border border-[var(--green-200)]",
    fail: "bg-[var(--neutral-200)] border border-[var(--neutral-400)]",
  };

  return (
    <div
      className={`rounded-[8px] size-[18px] ${colorClasses[status]} ${className}`.trim()}
    />
  );
}
