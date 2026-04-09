import { useTheme } from "../../context/ThemeContext";

/**
 * MessageBadge - Badge de statut de message
 * 
 * Badge affichant le statut du message : REÇU, ENVOYÉ, MODIFIÉ.
 * 
 * Specs:
 * - Height: 20px (auto width)
 * - Padding: 4px × 8px
 * - Border-radius: 16px
 * - Border: 1px solid
 * - Font: Roboto Bold 12px/14px
 * 
 * Couleurs Light:
 * - Border & Text: #444955
 * 
 * Couleurs Dark:
 * - Border & Text: #d0d1d4
 * 
 * Usage:
 * <MessageBadge label="REÇU" />
 * <MessageBadge label="ENVOYÉ" />
 * <MessageBadge label="MODIFIÉ" />
 */

export interface MessageBadgeProps {
  /**
   * Texte du badge
   */
  label: string;
  className?: string;
}

export function MessageBadge({
  label,
  className = "",
}: MessageBadgeProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const borderColor = isDark ? "var(--neutral-200)" : "var(--neutral-500)";
  const textColor = isDark ? "var(--neutral-100)" : "var(--neutral-500)";

  return (
    <div
      className={`h-[20px] relative rounded-[16px] shrink-0 ${className}`.trim()}
      style={{
        border: `1px solid ${borderColor}`,
      }}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-full items-center px-[8px] py-[4px] relative">
          <p
            className="leading-[14px] not-italic relative shrink-0 text-[12px] text-center tracking-[0.12px] whitespace-nowrap"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              color: textColor,
            }}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
