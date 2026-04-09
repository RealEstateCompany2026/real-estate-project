import { Info } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/**
 * Label - Label de formulaire
 * 
 * Label de champ avec icône info optionnelle et indicateur required.
 * 
 * Specs:
 * - Font: Roboto Semibold 14px/16px (sm body semibold)
 * - Letter-spacing: 0.14px
 * - Gap: 8px entre label et icône
 * - Icône info: 20×20px
 * - Required: astérisque rouge à gauche
 * 
 * Couleurs:
 * - Light/Dark: utilise --text-body
 * - Required: red
 * 
 * Usage:
 * <Label 
 *   label="First name"
 *   icon={true}
 *   required={false}
 * />
 */

export interface LabelProps {
  /**
   * Texte du label
   */
  label: string;
  /**
   * Afficher l'icône info
   */
  icon?: boolean;
  /**
   * Champ requis (affiche astérisque rouge)
   */
  required?: boolean;
  /**
   * ID du champ associé (for attribute)
   */
  htmlFor?: string;
  className?: string;
}

export function Label({
  label,
  icon = false,
  required = false,
  htmlFor,
  className = "",
}: LabelProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const textColor = isDark ? "var(--neutral-200)" : "var(--neutral-600)";

  return (
    <div className={`relative ${className}`.trim()}>
      <div className="flex flex-row items-center">
        <div className="flex gap-[8px] items-center relative">
          {/* Label text */}
          <label
            htmlFor={htmlFor}
            className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
              color: textColor,
            }}
          >
            <p className="leading-[16px]">{label}</p>
          </label>

          {/* Info icon */}
          {icon && (
            <div className="relative shrink-0 size-[20px]" data-name="icn_info">
              <Info
                className="w-[20px] h-[20px]"
                strokeWidth={2}
                style={{ color: textColor }}
              />
            </div>
          )}

          {/* Required asterisk */}
          {required && (
            <div
              className="absolute flex flex-col justify-center leading-[0] left-[-8px] not-italic text-[16px] top-[10px] tracking-[0.16px] whitespace-nowrap"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                color: "red",
                transform: "translateY(-50%)",
              }}
            >
              <p className="leading-[20px]">*</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}