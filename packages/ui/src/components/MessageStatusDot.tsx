"use client";

/**
 * MessageStatusDot — atome . message . status
 *
 * Figma: 18×18px, border-radius 8px, border 1px solid
 *
 * Variants:
 *   none    → bg surface-neutral-default, border border-disabled
 *   success → bg green-500, border green-200
 *   fail    → bg neutral-200, border neutral-400
 *
 * Tokens Layer 3, dark mode auto via .dark class.
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
  const styles: Record<MessageStatus, { bg: string; border: string }> = {
    none: {
      bg: "var(--surface-neutral-default)",
      border: "var(--border-disabled)",
    },
    success: {
      bg: "var(--green-500)",
      border: "var(--green-200)",
    },
    fail: {
      bg: "var(--neutral-200)",
      border: "var(--neutral-400)",
    },
  };

  const s = styles[status];

  return (
    <div
      className={`rounded-[8px] size-[18px] border border-solid shrink-0 ${className}`.trim()}
      style={{
        backgroundColor: s.bg,
        borderColor: s.border,
      }}
    />
  );
}
