import { LucideIcon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

/**
 * TextField - Champ de saisie de texte
 * 
 * Composant de saisie générique avec icônes optionnelles.
 * 
 * Specs:
 * - Height: 56px (padding 18px × 2 + line 20px)
 * - Padding: 12px (horizontal) × 18px (vertical)
 * - Gap: 8px entre éléments
 * - Border: bottom 1px solid
 * - Icons: 20×20px (Lucide)
 * - Font: Roboto SemiBold 16px/20px
 * 
 * États:
 * - Default: bg white/dark, border #ecedee/#333740, placeholder #a1a4aa
 * - Focus: border #444955/#d0d1d4
 * - Filled: text color var(--text-body)
 * - Error: border #FF0000, bg error tint
 * - Disabled: bg #f8f9fa/#22252b, opacity 50%
 * 
 * Features:
 * - Icônes gauche/droite optionnelles (Lucide)
 * - Placeholder dynamique
 * - Support tous types HTML5 (text, email, number, tel, password, etc.)
 * - Gestion focus/blur
 * - États error et disabled
 * - Accessibilité complète
 * 
 * Usage:
 * <TextField
 *   value={firstName}
 *   onChange={(value) => setFirstName(value)}
 *   placeholder="First name"
 *   leftIcon={User}
 *   rightIcon={Info}
 *   type="text"
 *   error={false}
 *   disabled={false}
 * />
 */

export interface TextFieldProps {
  /**
   * Valeur du champ
   */
  value?: string;
  /**
   * Callback appelé quand la valeur change
   */
  onChange?: (value: string) => void;
  /**
   * Texte du placeholder
   */
  placeholder?: string;
  /**
   * Type de champ HTML5
   */
  type?:
    | "text"
    | "email"
    | "tel"
    | "url"
    | "password"
    | "number"
    | "search"
    | "date"
    | "time"
    | "datetime-local";
  /**
   * Icône gauche (Lucide)
   */
  leftIcon?: LucideIcon;
  /**
   * Icône droite (Lucide)
   */
  rightIcon?: LucideIcon;
  /**
   * État erreur (border rouge)
   */
  error?: boolean;
  /**
   * État disabled (non interactif)
   */
  disabled?: boolean;
  /**
   * Nom du champ (pour formulaires)
   */
  name?: string;
  /**
   * ID du champ
   */
  id?: string;
  /**
   * Label accessible (aria-label)
   */
  ariaLabel?: string;
  /**
   * Autocomplete attribute
   */
  autoComplete?: string;
  /**
   * Required field
   */
  required?: boolean;
  /**
   * Max length
   */
  maxLength?: number;
  /**
   * Callback sur focus
   */
  onFocus?: () => void;
  /**
   * Callback sur blur
   */
  onBlur?: () => void;
  className?: string;
}

export function TextField({
  value = "",
  onChange,
  placeholder = "",
  type = "text",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  error = false,
  disabled = false,
  name,
  id,
  ariaLabel,
  autoComplete,
  required = false,
  maxLength,
  onFocus,
  onBlur,
  className = "",
}: TextFieldProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isFocused, setIsFocused] = useState(false);

  // Background color logic
  const getBackgroundColor = () => {
    if (disabled) {
      return isDark ? "var(--neutral-700)" : "#f8f9fa";
    }
    if (error) {
      return isDark ? "#400000" : "#ffe5e5";
    }
    return isDark ? "var(--neutral-800)" : "white";
  };

  // Border color logic
  const getBorderColor = () => {
    if (error) {
      return isDark ? "#bf0000" : "var(--error-500)";
    }
    if (isFocused) {
      return isDark ? "var(--neutral-200)" : "var(--neutral-500)";
    }
    return isDark ? "var(--neutral-600)" : "var(--neutral-50)";
  };

  // Icon color
  const getIconColor = () => {
    if (disabled) {
      return "#a1a4aa";
    }
    return "#a1a4aa";
  };

  // Text color
  const getTextColor = () => {
    if (disabled) {
      return "#a1a4aa";
    }
    return "var(--text-body)";
  };

  // Placeholder color
  const placeholderColor = "#a1a4aa";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (!e || !e.target) return;
    onChange?.(e.target.value);
  };

  const handleFocus = () => {
    if (disabled) return;
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  return (
    <div
      className={`relative w-full h-[56px] transition-colors duration-200 ${
        disabled ? "cursor-not-allowed" : ""
      } ${className}`.trim()}
      style={{
        backgroundColor: getBackgroundColor(),
      }}
      data-name={`textfield-${error ? "error" : disabled ? "disabled" : isFocused ? "focus" : "default"}`}
    >
      {/* Border bottom */}
      <div
        className="absolute border-b border-solid inset-0 pointer-events-none transition-colors duration-200"
        style={{
          borderColor: getBorderColor(),
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[18px] relative size-full">
          {/* Left Icon */}
          {LeftIcon && (
            <div className="relative shrink-0 size-[20px]" data-name="left-icon">
              <LeftIcon
                className="w-[20px] h-[20px]"
                strokeWidth={2}
                style={{ color: getIconColor() }}
              />
            </div>
          )}

          {/* Input field */}
          <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative">
            <input
              type={type}
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              disabled={disabled}
              name={name}
              id={id}
              aria-label={ariaLabel || placeholder}
              aria-invalid={error}
              required={required}
              maxLength={maxLength}
              autoComplete={autoComplete}
              className="w-full bg-transparent border-none outline-none leading-[20px] placeholder:opacity-100"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.16px",
                color: value ? getTextColor() : placeholderColor,
              }}
            />
          </div>

          {/* Right Icon */}
          {RightIcon && (
            <div className="relative shrink-0 size-[20px]" data-name="right-icon">
              <RightIcon
                className="w-[20px] h-[20px]"
                strokeWidth={2}
                style={{ color: getIconColor() }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}