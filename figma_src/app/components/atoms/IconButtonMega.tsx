import { ReactNode } from "react";

/**
 * IconButtonMega - Large icon-only button (70×70px)
 * Based on Figma IconButtonMega variants
 * 
 * Structure:
 * - Size: 70×70px (fixed)
 * - Padding: 23px
 * - Border-radius: 28px
 * - Icon: 24×24px
 * - Focus Ring: 2px border at -4px offset (visible on :focus-visible)
 * 
 * Usage:
 * <IconButtonMega icon={<X />} variant="primary" />
 * <IconButtonMega icon={<Plus />} variant="secondary" outlined />
 */

export type IconButtonMegaVariant = "primary" | "secondary" | "ghost" | "disabled";

export interface IconButtonMegaProps {
  icon: ReactNode;
  variant?: IconButtonMegaVariant;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  title?: string;
}

export function IconButtonMega({
  icon,
  variant = "secondary",
  outlined = false,
  onClick,
  disabled = false,
  className = "",
  title,
}: IconButtonMegaProps) {
  const finalVariant = disabled ? "disabled" : variant;

  const getVariantStyles = () => {
    switch (finalVariant) {
      case "primary":
        return {
          background: "#7b72f9", // --purple-500 (branded)
          color: "#ffffff", // white icon on branded
          border: "1px solid #7b72f9",
          focusRingColor: "#635cc7", // Primary hover
          hoverBackground: "#635cc7", // branded hover
        };
      case "secondary":
        return {
          background: "var(--neutral-white)", // white
          color: "var(--neutral-500)", // --grey-600
          border: outlined
            ? "1px solid var(--neutral-500)"
            : "0px solid transparent",
          focusRingColor: "var(--neutral-600)", // Dark text
          hoverBackground: "var(--neutral-100)", // neutral hover
        };
      case "ghost":
        return {
          background: "transparent",
          color: "var(--neutral-500)", // --grey-600
          border: "0px solid transparent",
          focusRingColor: "var(--neutral-600)", // Dark text
          hoverBackground: "var(--neutral-100)", // neutral hover
        };
      case "disabled":
        return {
          background: "var(--neutral-50)", // --grey-100
          color: "#a1a4aa", // --grey-400
          border: outlined
            ? "1px solid #a1a4aa"
            : "0px solid transparent",
          focusRingColor: "#a1a4aa",
          hoverBackground: "var(--neutral-50)",
        };
      default:
        return {
          background: "var(--neutral-white)",
          color: "var(--neutral-500)",
          border: "0px solid transparent",
          focusRingColor: "var(--neutral-600)",
          hoverBackground: "var(--neutral-100)",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      title={title}
      className={`
        icon-button-mega-component
        relative rounded-[28px] transition-all inline-flex
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:opacity-90 active:scale-[0.98]"}
        ${className}
      `.trim()}
      style={{
        background: styles.background,
        color: styles.color,
        width: "70px",
        height: "70px",
        // @ts-ignore - CSS custom property for focus ring
        "--focus-ring-color": styles.focusRingColor,
      } as React.CSSProperties}
    >
      {/* Border overlay (Figma structure) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[28px]"
        style={{ border: styles.border }}
      />

      {/* Content - exact Figma structure */}
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[23px] relative size-full">
          <div
            className="relative shrink-0"
            style={{
              width: "24px",
              height: "24px",
              color: styles.color,
            }}
          >
            {icon}
          </div>
        </div>
      </div>

      {/* Focus Ring - Exact Figma structure: inset-[-4px] with border-2 
          Only visible when button is focused (keyboard navigation) */}
      {!disabled && (
        <div className="icon-button-mega-focus-ring absolute inset-[-4px] rounded-[28px] pointer-events-none opacity-0 transition-opacity">
          <div
            aria-hidden="true"
            className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[28px]"
            style={{ borderColor: styles.focusRingColor }}
          />
        </div>
      )}
    </button>
  );
}
