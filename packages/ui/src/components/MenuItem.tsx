"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

/**
 * MenuItem - Item de menu/dropdown
 *
 * Specs Figma:
 * - Height: 60px, padding: 12px 18px, gap: 12px
 * - Font: Roboto SemiBold 16/20px (Bold if selected)
 * - Icons: 24×24px, border-bottom: 1px
 * - States: default, hover, selected, disabled
 */

export interface MenuItemProps {
  label: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  selected?: boolean;
  disabled?: boolean;
  destructive?: boolean;
  onClick?: () => void;
  className?: string;
}

export function MenuItem({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  selected = false,
  disabled = false,
  destructive = false,
  onClick,
  className = "",
}: MenuItemProps) {
  const bgClass = selected
    ? "bg-surface-neutral-action"
    : "bg-surface-neutral-default hover:bg-surface-neutral-action";

  const textClass = destructive
    ? "text-content-error"
    : selected
      ? "text-content-body font-bold"
      : "text-content-body font-semibold";

  const iconClass = destructive
    ? "text-icon-error"
    : "text-icon-neutral-default";

  return (
    <button
      className={`w-full h-[60px] px-[18px] py-3 flex items-center gap-3 border-b border-edge-divider transition-colors ${bgClass} ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      } ${className}`.trim()}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      role="menuitem"
    >
      {LeftIcon && <LeftIcon size={24} className={`shrink-0 ${iconClass}`} strokeWidth={2} />}
      <span className={`flex-1 text-base text-left tracking-wide ${textClass}`}>{label}</span>
      {RightIcon && <RightIcon size={24} className={`shrink-0 ${iconClass}`} strokeWidth={2} />}
    </button>
  );
}
