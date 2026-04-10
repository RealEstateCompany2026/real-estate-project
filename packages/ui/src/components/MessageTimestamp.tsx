"use client";

/**
 * MessageTimestamp - Horodatage de message
 *
 * Affiche la date et l'heure d'un message.
 *
 * Specs:
 * - Font: Roboto Regular 14px/16px
 * - Padding: 8px × 10px par élément
 * - Gap: 0px (collés)
 */

export interface MessageTimestampProps {
  /**
   * Date (ex: "le 12 fév 2026")
   */
  date: string;
  /**
   * Heure (ex: "à 12:47")
   */
  time: string;
  className?: string;
}

export function MessageTimestamp({
  date,
  time,
  className = "",
}: MessageTimestampProps) {
  return (
    <div
      className={`content-stretch flex items-center relative shrink-0 ${className}`.trim()}
    >
      {/* Date */}
      <div className="relative shrink-0">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[8px] relative">
            <p className="text-[14px] leading-[16px] tracking-[0.14px] whitespace-nowrap text-content-caption">
              {date}
            </p>
          </div>
        </div>
      </div>

      {/* Time */}
      <div className="relative shrink-0">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[8px] relative">
            <p className="text-[14px] leading-[16px] tracking-[0.14px] whitespace-nowrap text-content-caption">
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
