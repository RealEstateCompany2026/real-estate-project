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
  
  const getStyles = () => {
    switch (effectiveState) {
      case "selected":
        return {
          background: "var(--surface-branded-default)", // violet
          color: "#ffffff", // blanc
          fontWeight: 700, // Bold
          border: "none",
        };
      case "today":
        return {
          background: "var(--surface-neutral-action)",
          color: "var(--text-body)",
          fontWeight: 400, // Regular
          border: "1px solid var(--border-branded-default)",
        };
      case "hover":
        return {
          background: "var(--surface-neutral-action)",
          color: "var(--text-body)",
          fontWeight: 600, // SemiBold
          border: "none",
        };
      case "disabled":
        return {
          background: "var(--surface-disabled)",
          color: "var(--text-disabled)",
          fontWeight: 400, // Regular
          border: "none",
        };
      case "default":
      default:
        return {
          background: "var(--surface-neutral-action)",
          color: "var(--text-body)",
          fontWeight: 400, // Regular
          border: "none",
        };
    }
  };

  const styles = getStyles();
  const isToday = effectiveState === "today";
  const isDisabled = effectiveState === "disabled";

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={isDisabled}
      className={`
        relative rounded-[20px] shrink-0 size-[40px] transition-all
        ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer active:scale-95"}
        ${className}
      `.trim()}
      style={{
        background: styles.background,
      }}
      type="button"
    >
      {/* Border pour "today" */}
      {isToday && (
        <div
          aria-hidden="true"
          className="absolute border border-solid inset-0 pointer-events-none rounded-[20px]"
          style={{ borderColor: "var(--border-branded-default)" }}
        />
      )}

      {/* Content */}
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center py-[2px] relative size-full">
          <div className="relative shrink-0">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative">
                <p
                  className="relative shrink-0 whitespace-nowrap text-center"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: styles.fontWeight,
                    fontSize: "16px",
                    lineHeight: "20px",
                    letterSpacing: "0.16px",
                    color: styles.color,
                  }}
                >
                  {value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}