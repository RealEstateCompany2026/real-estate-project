"use client";

/**
 * MessageBadge - Badge de statut de message
 *
 * Figma: atome . sticker (inside organisme . message . reçu / envoyé)
 *
 * Specs:
 * - Height: 20px (auto width)
 * - Padding: 4px × 8px
 * - Border-radius: border-radius-md (16px)
 * - Border: 1px solid var(--border-neutral-default)
 * - Font: Roboto Bold 12px/14px, tracking 0.12px
 * - Color: var(--text-caption)
 * Tokens Layer 3, dark mode auto via .dark class.
 */

export interface MessageBadgeProps {
  /** Texte du badge */
  label: string;
  className?: string;
}

export function MessageBadge({ label, className = "" }: MessageBadgeProps) {
  return (
    <div
      className={`inline-flex items-center h-[20px] px-[8px] py-[4px]
        rounded-[16px] border border-solid shrink-0 border-edge-neutral-default
        ${className}`.trim()}
    >
      <span
        className="text-[12px] font-bold leading-[14px] tracking-[0.12px] whitespace-nowrap text-center text-content-caption"
      >
        {label}
      </span>
    </div>
  );
}
