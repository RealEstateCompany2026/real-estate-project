"use client";

/**
 * MessageStatusDot — atome . message . status
 *
 * Figma: 18×18px, border-radius 8px, border 1px solid
 *
 * Variants:
 *   none    → bg surface-neutral-default, border border-disabled
 *   success → bg surface-success, border border-success
 *   fail    → bg surface-neutral-action, border border-subtle
 *
 * Tokens Layer 3, dark mode auto via .dark class.
 */

export type MessageStatus = "none" | "success" | "fail";

export interface MessageStatusDotProps {
  status?: MessageStatus;
  className?: string;
}

const statusClasses: Record<MessageStatus, string> = {
  none: "bg-surface-neutral-default border-edge-disabled",
  success: "bg-surface-success border-edge-success",
  fail: "bg-surface-neutral-action border-edge-subtle",
};

export function MessageStatusDot({
  status = "none",
  className = "",
}: MessageStatusDotProps) {
  return (
    <div
      className={`rounded-[8px] size-[18px] border border-solid shrink-0 ${statusClasses[status]} ${className}`.trim()}
    />
  );
}
