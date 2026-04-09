import { useTheme } from "../../context/ThemeContext";

/**
 * Switch - Toggle switch interactif
 * 
 * Composant de sélection binaire (ON/OFF) avec animation fluide.
 * 
 * Specs:
 * - Width: 48px
 * - Height: 30px
 * - Border-radius: 16px
 * - Toggle circle: 24×24px
 * - Padding: 3px
 * - Animation: transition smooth 200ms
 * 
 * États:
 * - OFF light: bg #d0d1d4, circle white
 * - ON light: bg #0da500 (success green), circle white
 * - OFF dark: bg #444955, circle #111215
 * - ON dark: bg #0da500 (success green), circle #111215
 * 
 * Features:
 * - Animation fluide du toggle
 * - Support hover (opacity sur le cercle)
 * - Focus ring pour accessibilité clavier
 * - Support disabled
 * - ARIA labels et keyboard navigation
 * 
 * Usage:
 * <Switch 
 *   checked={isOn}
 *   onChange={(checked) => setIsOn(checked)}
 *   disabled={false}
 * />
 */

export interface SwitchProps {
  /**
   * État ON/OFF
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

export function Switch({
  checked = false,
  onChange,
  disabled = false,
  name,
  id,
  ariaLabel,
  className = "",
}: SwitchProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Background color logic
  const getBackgroundColor = () => {
    if (checked) {
      return "var(--success-500)"; // Success green (same in light/dark)
    }

    return isDark ? "var(--neutral-500)" : "var(--neutral-200)";
  };

  // Circle color logic
  const getCircleColor = () => {
    return isDark ? "var(--neutral-800)" : "white";
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
      className={`relative w-[48px] h-[30px] rounded-[16px] transition-all duration-200 group ${
        disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"
      } ${className}`.trim()}
      style={{
        backgroundColor: getBackgroundColor(),
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0}
      data-name={`switch-${checked ? "on" : "off"}-${disabled ? "disabled" : "default"}`}
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

      {/* Focus ring (keyboard focus) */}
      <div
        className="absolute left-[-4px] top-[-4px] w-[56px] h-[38px] opacity-0 focus-within:opacity-100 pointer-events-none rounded-[20px] z-[1]"
        aria-hidden="true"
      >
        <div
          className="absolute border-2 border-solid inset-0 rounded-[20px]"
          style={{
            borderColor: checked ? "var(--success-500)" : isDark ? "var(--neutral-500)" : "var(--neutral-200)",
          }}
        />
      </div>

      {/* Toggle container with animation */}
      <div
        className={`flex flex-row items-center size-full transition-all duration-200 ${
          checked ? "justify-end" : "justify-start"
        }`}
      >
        <div className="flex items-center px-[3px] py-[3px] relative">
          {/* Toggle circle */}
          <div
            className={`relative shrink-0 size-[24px] rounded-full transition-all duration-200 ${
              !disabled ? "group-hover:opacity-90" : ""
            }`}
            style={{
              backgroundColor: getCircleColor(),
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
