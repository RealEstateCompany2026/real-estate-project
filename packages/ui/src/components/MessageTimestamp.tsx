"use client";

/**
 * MessageTimestamp - Horodatage de message
 *
 * Figma: Body . sm . Regular (inside organisme . message header)
 *
 * Specs:
 * - Font: Roboto Regular 14px/16px, tracking 0.14px
 * - Padding: 8px × 10px par élément
 * - Color: var(--text-caption)
 * Tokens Layer 3, dark mode auto via .dark class.
 */

export interface MessageTimestampProps {
  /** Date (ex: "le 12 fév 2026") */
  date: string;
  /** Heure (ex: "à 12:47") */
  time: string;
  className?: string;
}

export function MessageTimestamp({
  date,
  time,
  className = "",
}: MessageTimestampProps) {
  return (
    <div className={`flex items-center shrink-0 ${className}`.trim()}>
      <div className="flex items-center px-[10px] py-[8px]">
        <span
          className="text-[14px] font-normal leading-[16px] tracking-[0.14px] whitespace-nowrap text-content-caption"
        >
          {date}
        </span>
      </div>
      <div className="flex items-center px-[10px] py-[8px]">
        <span
          className="text-[14px] font-normal leading-[16px] tracking-[0.14px] whitespace-nowrap text-content-caption"
        >
          {time}
        </span>
      </div>
    </div>
  );
}
