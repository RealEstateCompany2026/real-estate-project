"use client";

import { ReactNode } from "react";

/**
 * IconButtonMega - Large icon-only button (70×70px)
 *
 * Structure:
 * - Size: 70×70px (fixed)
 * - Padding: 23px
 * - Border-radius: 28px
 * - Icon: 24×24px
 * - Focus Ring: 2px border at -4px offset (visible on :focus-visible)
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
          background: "bg-[var(--surface-branded-default)]",
          color: "text-white",
          border: "border-[var(--surface-branded-default)]",
          hoverBg: "hover:bg-[var(--surface-branded-action-hover)]",
        };
      case "secondary":
        return {
          background: "bg-surface-neutral-default",
          color: "text-content-body",
          border: outlined
            ? "border-edge-neutral-default"
            : "border-transparent",
          hoverBg: "hover:bg-surface-neutral-action-hover",
        };
      case "ghost":
        return {
          background: "bg-transparent",
          color: "text-content-body",
          border: "border-transparent",
          hoverBg: "hover:bg-surface-neutral-action-hover",
        };
      case "disabled":
        return {
          background: "bg-surface-neutral-action",
          color: "text-content-subtle",
          border: outlined
            ? "border-edge-subtle"
            : "border-transparent",
          hoverBg: "hover:opacity-50",
        };
      default:
        return {
          background: "bg-surface-neutral-default",
          color: "text-content-body",
          border: "border-transparent",
          hoverBg: "hover:bg-surface-neutral-action-hover",
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
        w-[70px] h-[70px] p-[23px]
        border border-solid
        ${styles.background}
        ${styles.color}
        ${styles.border}
        ${disabled ? "cursor-not-allowed opacity-50" : `cursor-pointer ${styles.hoverBg} active:scale-[0.98]`}
        ${className}
      `.trim()}
    >
      {/* Content */}
      <div className="flex flex-row items-center justify-center size-full relative">
        <div className="relative shrink-0 w-[24px] h-[24px]">{icon}</div>
      </div>

      {/* Focus Ring */}
      {!disabled && (
        <div className="absolute inset-[-4px] rounded-[28px] pointer-events-none opacity-0 transition-opacity focus-visible:opacity-100">
          <div
            aria-hidden="true"
            className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[28px]"
            style={{ borderColor: "var(--border-branded-default)" }}
          />
        </div>
      )}
    </button>
  );
}
