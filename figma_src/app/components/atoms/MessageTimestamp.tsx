import { useTheme } from "../../context/ThemeContext";

/**
 * MessageTimestamp - Horodatage de message
 * 
 * Affiche la date et l'heure d'un message.
 * 
 * Specs:
 * - Font: Roboto Regular 14px/16px
 * - Padding: 8px × 10px par élément
 * - Gap: 0px (collés)
 * 
 * Couleurs Light:
 * - Text: #444955
 * 
 * Couleurs Dark:
 * - Text: #d0d1d4
 * 
 * Usage:
 * <MessageTimestamp date="le 12 fév 2026" time="à 12:47" />
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const textColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";

  return (
    <div className={`content-stretch flex items-center relative shrink-0 ${className}`.trim()}>
      <div className="relative shrink-0">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[8px] relative">
            <p
              className="leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                color: textColor,
              }}
            >
              {date}
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[10px] py-[8px] relative">
            <p
              className="leading-[16px] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                color: textColor,
              }}
            >
              {time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
