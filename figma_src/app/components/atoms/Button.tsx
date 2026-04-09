import { ReactNode } from "react";

/**
 * Button - Unified button component
 * Based on Figma Button variants
 * 
 * Structure:
 * - Padding: 12px
 * - Gap: 8px (between icons and text)
 * - Border-radius: 16px
 * - Font: Roboto SemiBold 16px/20px, tracking 0.16px
 * - Icons: 20px (optional left/right)
 * - Focus Ring: 2px border at -4px offset (visible on :focus-visible)
 * 
 * Variants:
 * - Neutral: Default button (white background)
 * - Branded: Violet branded button
 * - Outlined: Button with border
 * - Ghost: Transparent button
 */
export type ButtonVariant = "neutral" | "branded" | "outlined" | "ghost" | "disabled";

export interface ButtonProps {
  variant?: ButtonVariant;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

export function Button({
  variant = "neutral",
  iconLeft,
  iconRight,
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const finalVariant = disabled ? "disabled" : variant;

  const getVariantStyles = () => {
    switch (finalVariant) {
      case "branded":
        return {
          background: "#7b72f9", // --purple-500 (branded)
          color: "#ffffff", // white text on branded
          border: "1px solid #7b72f9",
          focusRingColor: "#635cc7", // Branded hover
          hoverBackground: "#635cc7", // branded hover
        };
      case "neutral":
        return {
          background: "var(--neutral-white)", // white
          color: "var(--neutral-500)", // --grey-600 text
          border: "0px solid transparent",
          focusRingColor: "var(--neutral-600)", // Dark text
          hoverBackground: "var(--neutral-100)", // neutral hover
        };
      case "outlined":
        return {
          background: "var(--neutral-white)", // white
          color: "var(--neutral-500)", // --grey-600 text
          border: "1px solid var(--neutral-500)", // Dark border
          focusRingColor: "var(--neutral-600)", // Dark text
          hoverBackground: "var(--neutral-100)", // neutral hover
        };
      case "ghost":
        return {
          background: "transparent",
          color: "var(--icon-neutral-default)", // Use CSS token for dark mode support
          border: "0px solid transparent",
          focusRingColor: "var(--icon-neutral-default)", // Use token
          hoverBackground: "var(--surface-neutral-action)", // Use token for hover
          useToken: true, // Flag to indicate we're using CSS variables
        };
      case "disabled":
        return {
          background: "var(--neutral-50)", // --grey-100
          color: "#a1a4aa", // --grey-400
          border: "0px solid transparent",
          focusRingColor: "#a1a4aa", // Not used (disabled can't focus)
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
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        button-component
        relative rounded-[16px] transition-all inline-flex
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer active:scale-[0.98]"}
        ${className}
      `.trim()}
      style={{
        background: styles.background,
        color: styles.color,
        // @ts-ignore - CSS custom properties
        "--hover-bg": styles.hoverBackground,
        "--focus-ring-color": styles.focusRingColor,
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = styles.hoverBackground;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = styles.background;
        }
      }}
    >
      {/* Border overlay (Figma structure) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[16px]"
        style={{ border: styles.border }}
      />

      {/* Content - exact Figma structure */}
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
          {/* Icon Left */}
          {iconLeft && (
            <div
              className="relative shrink-0"
              style={{
                width: "20px",
                height: "20px",
                color: styles.color,
              }}
            >
              {iconLeft}
            </div>
          )}

          {/* Text */}
          <p
            className="relative shrink-0 whitespace-nowrap"
            style={{ 
              color: styles.color,
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: 600, // SemiBold
              lineHeight: '20px',
              letterSpacing: '0.16px',
            }}
          >
            {children}
          </p>

          {/* Icon Right */}
          {iconRight && (
            <div
              className="relative shrink-0"
              style={{
                width: "20px",
                height: "20px",
                color: styles.color,
              }}
            >
              {iconRight}
            </div>
          )}
        </div>
      </div>

      {/* Focus Ring - Exact Figma structure: inset-[-4px] with border-2 
          Only visible when button is focused (keyboard navigation) */}
      {!disabled && (
        <div className="button-focus-ring absolute inset-[-4px] rounded-[16px] pointer-events-none opacity-0 transition-opacity">
          <div
            aria-hidden="true"
            className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[16px]"
            style={{ borderColor: styles.focusRingColor }}
          />
        </div>
      )}
    </button>
  );
}

/**
 * IconButton - Button with icon only (no text)
 * Based on 10 Figma variants (IconButton-2-22909 to IconButton-2-23340)
 * 
 * Structure:
 * - Size: 44×44px default (md), 32×32px (sm), 56×56px (lg)
 * - Padding: 12px (md), 8px (sm), 16px (lg)
 * - Border-radius: 16px
 * - Icon: 20px (md), 16px (sm), 24px (lg)
 * - Focus Ring: 2px border at -4px offset (visible on :focus-visible)
 */
export interface IconButtonProps {
  icon: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  title?: string;
  size?: "sm" | "md" | "lg";
}

export function IconButton({
  icon,
  variant = "neutral",
  onClick,
  disabled = false,
  className = "",
  title,
  size = "md",
}: IconButtonProps) {
  const finalVariant = disabled ? "disabled" : variant;

  // Get size-specific values
  const getSizeValues = () => {
    switch (size) {
      case "sm":
        return { padding: "8px", iconSize: "16px", totalSize: "32px" };
      case "lg":
        return { padding: "16px", iconSize: "24px", totalSize: "56px" };
      case "md":
      default:
        return { padding: "12px", iconSize: "20px", totalSize: "44px" };
    }
  };

  const sizeValues = getSizeValues();

  const getVariantStyles = () => {
    switch (finalVariant) {
      case "branded":
        return {
          background: "#7b72f9", // --purple-500 (branded)
          color: "#ffffff", // white icon on branded
          border: "1px solid #7b72f9",
          focusRingColor: "#635cc7", // Branded hover
          hoverBackground: "#635cc7", // branded hover
        };
      case "neutral":
        return {
          background: "var(--neutral-white)", // white
          color: "var(--neutral-500)", // --grey-600
          border: "0px solid transparent",
          focusRingColor: "var(--neutral-600)", // Dark text
          hoverBackground: "var(--neutral-100)", // neutral hover
        };
      case "outlined":
        return {
          background: "var(--neutral-white)", // white
          color: "var(--neutral-500)", // --grey-600
          border: "1px solid var(--neutral-500)", // Dark border
          focusRingColor: "var(--neutral-600)", // Dark text
          hoverBackground: "var(--neutral-100)", // neutral hover
        };
      case "ghost":
        return {
          background: "transparent",
          color: "var(--icon-neutral-default)", // Use CSS token for dark mode support
          border: "0px solid transparent",
          focusRingColor: "var(--icon-neutral-default)", // Use token
          hoverBackground: "var(--surface-neutral-action)", // Use token for hover
          useToken: true, // Flag to indicate we're using CSS variables
        };
      case "disabled":
        return {
          background: "var(--neutral-50)", // --grey-100
          color: "#a1a4aa", // --grey-400
          border: "0px solid transparent",
          focusRingColor: "#a1a4aa", // Not used
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
        icon-button-component
        relative rounded-[16px] transition-all inline-flex
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer active:scale-[0.98]"}
        ${className}
      `.trim()}
      style={{
        background: styles.background,
        color: styles.color,
        width: sizeValues.totalSize,
        height: sizeValues.totalSize,
        // @ts-ignore - CSS custom properties
        "--hover-bg": styles.hoverBackground,
        "--focus-ring-color": styles.focusRingColor,
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = styles.hoverBackground;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.background = styles.background;
        }
      }}
    >
      {/* Border overlay (Figma structure) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[16px]"
        style={{ border: styles.border }}
      />

      {/* Content - exact Figma structure */}
      <div className="flex flex-row items-center size-full">
        <div
          className="content-stretch flex items-center relative size-full"
          style={{ padding: sizeValues.padding }}
        >
          <div
            className="relative shrink-0"
            style={{
              width: sizeValues.iconSize,
              height: sizeValues.iconSize,
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
        <div className="icon-button-focus-ring absolute inset-[-4px] rounded-[16px] pointer-events-none opacity-0 transition-opacity">
          <div
            aria-hidden="true"
            className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[16px]"
            style={{ borderColor: styles.focusRingColor }}
          />
        </div>
      )}
    </button>
  );
}