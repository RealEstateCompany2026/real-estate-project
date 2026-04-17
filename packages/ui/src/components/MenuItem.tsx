"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

/**
 * MenuItem - Item de menu/dropdown
 *
 * Specs Figma:
 * - Default: h-60px, px-18, py-12, gap-12, font 16/20px, icons 24px
 * - Small: h-44px, px-12, py-8, gap-8, font 14/16px, icons 20px
 * - Border-bottom: 1px border-edge-divider
 * - States: default, hover, selected, disabled, destructive
 */

export interface MenuItemProps {
  label: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  selected?: boolean;
  disabled?: boolean;
  destructive?: boolean;
  onClick?: () => void;
  size?: "default" | "small";
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
  size = "default",
  className = "",
}: MenuItemProps) {
  const sizeClasses = size === "small"
    ? "h-[44px] px-[12px] py-2 gap-2"
    : "h-[60px] px-[18px] py-3 gap-3";

  const textClasses = size === "small"
    ? "text-sm leading-[16px] tracking-[0.14px]"
    : "text-base leading-[20px] tracking-[0.16px]";

  const iconSize = size === "small" ? 20 : 24;
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
      className={`w-full ${sizeClasses} flex items-center border-b border-edge-divider transition-colors ${bgClass} ${
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      } ${className}`.trim()}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      role="menuitem"
    >
      {LeftIcon && <LeftIcon size={iconSize} className={`shrink-0 ${iconClass}`} strokeWidth={2} />}
      <span className={`flex-1 text-left ${textClasses} ${textClass}`}>{label}</span>
      {RightIcon && <RightIcon size={iconSize} className={`shrink-0 ${iconClass}`} strokeWidth={2} />}
    </button>
  );
}
