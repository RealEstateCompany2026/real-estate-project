import { ArrowRight, Lightbulb } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/**
 * AiSuggestionBanner - Banner de suggestion contextuelle IA
 * 
 * S'affiche à différents endroits dans le CRM sous forme de banner
 * pour indiquer les suggestions d'actions détectées par l'IA
 * 
 * Structure:
 * - Icône lampe (24×24px)
 * - Texte de suggestion (font-bold)
 * - Bouton CTA avec icône arrow-right
 * 
 * Dimensions: width 1191px, padding 20px, gap 8px
 * Border-radius: 16px
 * Background: #ecedee (light) / #22252b (dark)
 * 
 * Usage:
 * <AiSuggestionBanner 
 *   suggestion="Bonjour, vous devriez contacter M. Dupont pour finaliser..."
 *   actionLabel="Programmer"
 *   onAction={() => {}}
 * />
 */

export interface AiSuggestionBannerProps {
  suggestion: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function AiSuggestionBanner({
  suggestion,
  actionLabel = "Programmer",
  onAction,
  className = "",
}: AiSuggestionBannerProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`relative rounded-[16px] w-[1191px] ${className}`.trim()}
      style={{
        backgroundColor: isDark ? "var(--neutral-700)" : "var(--neutral-50)",
      }}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[20px] relative w-full">
          {/* Lightbulb icon */}
          <div className="relative shrink-0 size-[24px]">
            <Lightbulb
              size={24}
              style={{ color: "var(--icon-neutral-default)" }}
            />
          </div>

          {/* Suggestion text */}
          <div className="flex-[1_0_0] min-h-px min-w-px relative">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">
                <p
                  className="flex-[1_0_0] min-h-px min-w-px text-[16px] leading-[20px] tracking-[0.16px] font-bold not-italic relative"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  {suggestion}
                </p>
              </div>
            </div>
          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={onAction}
            className="relative rounded-[16px] shrink-0 border border-solid hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: isDark ? "#635cc7" : "#7b72f9",
              borderColor: isDark ? "#635cc7" : "#7b72f9",
            }}
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
                <p
                  className="text-[16px] leading-[20px] tracking-[0.16px] font-semibold not-italic relative shrink-0 whitespace-nowrap"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: isDark ? "var(--neutral-800)" : "white",
                  }}
                >
                  {actionLabel}
                </p>
                <ArrowRight
                  size={20}
                  style={{ color: isDark ? "var(--neutral-500)" : "white" }}
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
