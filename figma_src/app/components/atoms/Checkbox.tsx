import { useTheme } from "../../context/ThemeContext";
import svgPaths from "../../../imports/svg-7i16ic76jl";

/**
 * Checkbox - Case à cocher interactive
 * 
 * Composant de sélection binaire (coché/décoché) conforme au design system RealAgent.
 * 
 * Specs:
 * - Size: 28×28px
 * - Border-radius: 8px
 * - Border-width: 1px
 * - Check icon: 20×20px (SVG path)
 * - Padding interne: 4px
 * 
 * États:
 * - default: état normal
 * - hover: survolé à la souris
 * - focus: focus clavier
 * - disabled: non interactif
 * - error: état d'erreur
 * 
 * Light mode:
 * - Default unchecked: bg white, border #444955
 * - Default checked: bg white, border #444955, check #444955
 * - Hover: bg #ecedee, border #444955
 * - Focus: ring externe 2px #444955
 * - Disabled: bg #ecedee, border #dadbdd, check #D0D1D4
 * - Error: bg #ffe5e5, border #ffbfbf, check #FF0000
 * 
 * Dark mode:
 * - Default unchecked: bg #111215, border #d0d1d4
 * - Default checked: bg #111215, border #d0d1d4, check #d0d1d4
 * - Hover: bg #333740, border #d0d1d4
 * - Focus: ring externe 2px #d0d1d4
 * - Disabled: bg #333740, border #444955, check #444955
 * - Error: bg #400000, border #bf0000, check #bf0000
 * 
 * Usage:
 * <Checkbox 
 *   checked={isChecked}
 *   onChange={(checked) => setIsChecked(checked)}
 *   disabled={false}
 *   error={false}
 * />
 */

export interface CheckboxProps {
  /**
   * État coché/décoché
   */
  checked?: boolean;
  /**
   * Callback appelé quand l'état change
   */
  onChange?: (checked: boolean) => void;
  /**
   * État disabled (non interactif)
   */
  disabled?: boolean;
  /**
   * État erreur (couleur rouge)
   */
  error?: boolean;
  /**
   * Nom du champ (pour les formulaires)
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
  className?: string;
}

export function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  error = false,
  name,
  id,
  ariaLabel,
  className = "",
}: CheckboxProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Background color logic
  const getBackgroundColor = () => {
    if (disabled) {
      return isDark ? "var(--neutral-600)" : "var(--neutral-50)";
    }

    if (error) {
      return isDark ? "#400000" : "#ffe5e5";
    }

    return isDark ? "var(--neutral-800)" : "white";
  };

  // Border color logic
  const getBorderColor = () => {
    if (disabled) {
      return isDark ? "var(--neutral-500)" : "var(--neutral-100)";
    }

    if (error) {
      return isDark ? "#bf0000" : "#ffbfbf";
    }

    return isDark ? "var(--neutral-200)" : "var(--neutral-500)";
  };

  // Check icon color logic
  const getCheckColor = () => {
    if (disabled) {
      return isDark ? "var(--neutral-500)" : "var(--neutral-200)";
    }

    if (error) {
      return isDark ? "#bf0000" : "var(--error-500)";
    }

    return isDark ? "var(--neutral-200)" : "var(--neutral-500)";
  };

  const handleClick = () => {
    if (disabled) return;
    onChange?.(!checked);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onChange?.(!checked);
    }
  };

  return (
    <div
      className={`relative shrink-0 size-[28px] rounded-[8px] group ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`.trim()}
      style={{
        backgroundColor: getBackgroundColor(),
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-invalid={error}
      tabIndex={disabled ? -1 : 0}
      data-name={`checkbox-${checked ? "checked" : "unchecked"}-${disabled ? "disabled" : error ? "error" : "default"}`}
    >
      {/* Hidden input for forms */}
      {name && (
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={() => {}}
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />
      )}

      {/* Border */}
      <div
        aria-hidden="true"
        className="absolute border border-solid inset-[-1px] pointer-events-none rounded-[9px] z-[1]"
        style={{
          borderColor: getBorderColor(),
        }}
      />

      {/* Hover effect */}
      {!disabled && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[8px] z-[2]"
          style={{
            backgroundColor: isDark ? "var(--neutral-600)" : "var(--neutral-50)",
          }}
        />
      )}

      {/* Focus ring (keyboard focus) */}
      <div
        className="absolute left-[-5px] top-[-5px] size-[38px] opacity-0 focus-within:opacity-100 pointer-events-none rounded-[8px] z-[3]"
        aria-hidden="true"
      >
        <div
          className="absolute border-2 border-solid inset-0 rounded-[8px]"
          style={{
            borderColor: getBorderColor(),
          }}
        />
      </div>

      {/* Check icon (only when checked) */}
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center z-[4]">
          <svg
            className="block"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 13.5833 10.0208"
          >
            <path
              d={svgPaths.p12294b00}
              fill={getCheckColor()}
            />
          </svg>
        </div>
      )}
    </div>
  );
}