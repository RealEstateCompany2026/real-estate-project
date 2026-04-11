"use client";

/**
 * DatePickerNumber - Chiffre cliquable dans le calendrier
 * Based on Figma AtomeDatepickerChiffre
 *
 * Structure:
 * - Taille : 40×40px
 * - Border-radius : 20px
 * - Font : Roboto 16px/20px (Regular, SemiBold, ou Bold selon état)
 * - Padding : 10px horizontal, 8px vertical
 *
 * États :
 * - default : Gris clair, Regular
 * - hover : Gris clair, SemiBold
 * - selected : Violet, Bold, texte blanc
 * - today : Gris clair, Regular, bordure violette
 * - disabled : Gris très clair, opacité réduite
 *
 * Usage:
 * <DatePickerNumber value={15} />
 * <DatePickerNumber value={30} state="selected" />
 * <DatePickerNumber value={4} state="today" />
 */

export type DatePickerNumberState = "default" | "hover" | "selected" | "today" | "disabled";

export interface DatePickerNumberProps {
  value: number;
  state?: DatePickerNumberState;
  /**
   * Force disabled state (overrides state prop)
   */
  disabled?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

export function DatePickerNumber({
  value,
  state = "default",
  disabled = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = "",
}: DatePickerNumberProps) {
  // If disabled prop is true, force disabled state
  const effectiveState = disabled ? "disabled" : state;

  const getClasses = () => {
    switch (effectiveState) {
      case "selected":
        return "bg-surface-branded-default text-content-branded-on-action font-bold border-none";
      case "today":
        return "bg-surface-neutral-action text-content-body font-normal border border-solid border-edge-branded-default";
      case "hover":
        return "bg-surface-neutral-action text-content-body font-semibold border-none";
      case "disabled":
        return "bg-surface-disabled text-content-disabled font-normal border-none";
      case "default":
      default:
        return "bg-surface-neutral-action text-content-body font-normal border-none";
    }
  };

  const isDisabled = effectiveState === "disabled";

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={isDisabled}
      className={`relative w-[40px] h-[40px] rounded-[20px] flex items-center justify-center text-[16px] leading-[20px] tracking-[0.16px] transition-all ${getClasses()} ${className}`.trim()}
      type="button"
    >
      {value}
    </button>
  );
}
