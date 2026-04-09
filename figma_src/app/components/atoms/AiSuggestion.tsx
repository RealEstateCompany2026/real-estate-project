import { useTheme } from "../../context/ThemeContext";

/**
 * AiSuggestion - Badge indicateur de suggestions IA
 * 
 * États:
 * - count = 0 : Aucune suggestion (badge gris neutre avec bordure)
 * - count >= 1 : Nombre de suggestions (badge violet #7b72f9 avec texte contrasté)
 * 
 * Dimensions: 34px × 24px
 * Border-radius: 16px
 * Font: Roboto Bold 14px/16px
 * 
 * Light mode:
 * - count = 0: border #a1a4aa, text #a1a4aa, no bg
 * - count >= 1: bg #7b72f9, border #635cc7, text white
 * 
 * Dark mode:
 * - count = 0: border #444955, text #444955, no bg
 * - count >= 1: bg #7b72f9, border #968ffa, text #474747
 */

export interface AiSuggestionProps {
  count: number;
  className?: string;
  theme?: "light" | "dark";
}

export function AiSuggestion({ count, className = "", theme }: AiSuggestionProps) {
  const themeContext = useTheme();
  const currentTheme = theme || themeContext.theme;
  const isLight = currentTheme === "light";
  const hasCount = count > 0;

  // Colors based on state and theme
  const getBgColor = () => {
    if (!hasCount) return "transparent";
    return "#7b72f9";
  };

  const getBorderColor = () => {
    if (isLight) {
      return hasCount ? "#635cc7" : "var(--neutral-400)";
    } else {
      return hasCount ? "#968ffa" : "var(--neutral-600)";
    }
  };

  const getTextColor = () => {
    if (isLight) {
      return hasCount ? "white" : "var(--neutral-400)";
    } else {
      return hasCount ? "#474747" : "var(--neutral-600)";
    }
  };

  return (
    <div
      className={`relative h-[24px] min-w-[34px] rounded-[16px] ${className}`.trim()}
    >
      <div
        className="absolute inset-[0_1.47%] rounded-[16px] border border-solid"
        style={{
          backgroundColor: getBgColor(),
          borderColor: getBorderColor(),
        }}
      >
        <div className="flex items-center justify-center size-full px-[6px]">
          <p
            className="text-[14px] leading-[16px] tracking-[0.14px] font-bold not-italic relative shrink-0 whitespace-nowrap px-[6px] py-[4px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: getTextColor(),
            }}
          >
            {count}
          </p>
        </div>
      </div>
    </div>
  );
}