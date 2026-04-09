import { ChevronDown, LucideIcon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/**
 * DropdownButton - Bouton trigger pour dropdown menu
 * 
 * Bouton cliquable utilisé pour ouvrir/fermer un menu déroulant.
 * 
 * Specs:
 * - Height: 44px
 * - Width: flexible (auto avec min-width)
 * - Border-radius: 16px
 * - Padding: 12px 20px
 * - Gap: 4px entre texte et icône (8px si icône gauche)
 * - Font: Roboto SemiBold 16/20px
 * - Icône: ChevronDown 20×20px (rotation 180° si ouvert)
 * - Icône gauche: 20×20px (optionnelle)
 * 
 * Variants:
 * - shadow light: bg white, border white, shadow
 * - shadow dark: bg #333740, border #333740, shadow
 * - default light: bg white, border white, no shadow
 * - default dark: bg #333740, border #333740, no shadow
 * - with leftIcon: icône personnalisée à gauche
 * 
 * Light mode:
 * - Background: white
 * - Text: #444955 (Neutral/500)
 * - Border: white
 * - Shadow: 1px 1px 8px rgba(0,0,0,0.15) (si variant shadow)
 * 
 * Dark mode:
 * - Background: #333740
 * - Text: #d0d1d4 (Neutral/500)
 * - Border: #333740
 * - Shadow: 1px 1px 8px rgba(0,0,0,0.15) (si variant shadow)
 * 
 * Usage:
 * <DropdownButton 
 *   label="Sélectionner" 
 *   isOpen={isOpen}
 *   onClick={() => setIsOpen(!isOpen)}
 *   shadow={true}
 *   leftIcon={Filter}
 * />
 */

export interface DropdownButtonProps {
  /**
   * Label affiché dans le bouton (optionnel)
   */
  label?: string;
  /**
   * Icône à gauche du label (optionnel)
   * Ex: Filter, SortAsc, User, etc.
   */
  leftIcon?: LucideIcon;
  /**
   * État du dropdown (ouvert/fermé)
   * Contrôle la rotation de l'icône
   */
  isOpen?: boolean;
  /**
   * Afficher l'ombre portée
   * @default true
   */
  shadow?: boolean;
  /**
   * Callback au clic
   */
  onClick?: () => void;
  /**
   * Désactivé
   */
  disabled?: boolean;
  className?: string;
}

export function DropdownButton({
  label,
  leftIcon: LeftIcon,
  isOpen = false,
  shadow = true,
  onClick,
  disabled = false,
  className = "",
}: DropdownButtonProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Background & text colors
  const backgroundColor = isDark ? "#333740" : "white";
  const textColor = isDark ? "var(--neutral-200)" : "var(--neutral-600)"; // Neutral/500
  const borderColor = isDark ? "#333740" : "white";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`h-[44px] relative rounded-[16px] min-w-[104px] ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      } transition-all ${className}`.trim()}
      style={{
        backgroundColor,
      }}
    >
      {/* Border + Shadow */}
      <div
        aria-hidden="true"
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[16px] ${
          shadow ? "shadow-[1px_1px_8px_0px_rgba(0,0,0,0.15)]" : ""
        }`}
        style={{
          borderColor,
        }}
      />

      {/* Content */}
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[12px] relative size-full">
          <div className="relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center relative">
                {/* Left Icon */}
                {LeftIcon && (
                  <>
                    <div className="relative shrink-0 size-[20px]">
                      {LeftIcon && <LeftIcon size={20} style={{ color: textColor }} />}
                    </div>
                    {/* Gap supplémentaire entre icône et label (uniquement si label existe) */}
                    {label && <div className="w-[4px]" />}
                  </>
                )}

                {/* Label (uniquement si fourni) */}
                {label && (
                  <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0">
                    <p
                      className="text-[16px] leading-[20px] tracking-[0.16px] font-semibold whitespace-nowrap"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        color: textColor,
                      }}
                    >
                      {label}
                    </p>
                  </div>
                )}

                {/* Chevron icon (rotate 180° if open) */}
                <div
                  className="relative shrink-0 size-[20px] transition-transform duration-200"
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <ChevronDown size={20} style={{ color: textColor }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}