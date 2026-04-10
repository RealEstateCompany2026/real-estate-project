"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

/**
 * NavButton - Bouton de navigation pour NavRail
 *
 * Specs Figma:
 * - Size: 68×50px, border-radius: border-radius-400 (16px)
 * - Default: transparent, icon neutral-default
 * - Hover: surface-neutral-action-hover, icon branded-default
 * - Selected: surface-neutral-action, icon neutral-default
 */

export interface NavButtonProps {
  icon: LucideIcon;
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavButton({
  icon: Icon,
  label,
  selected = false,
  onClick,
  className = "",
}: NavButtonProps) {
  const baseClasses = "flex items-center justify-center w-[68px] h-[50px] rounded-lg transition-colors duration-200";

  const stateClasses = selected
    ? "bg-surface-neutral-action text-icon-neutral-action"
    : "bg-transparent text-icon-neutral-default hover:bg-surface-neutral-action-hover hover:text-icon-branded-default";

  return (
    <button
      className={`${baseClasses} ${stateClasses} ${className}`.trim()}
      onClick={onClick}
      aria-label={label}
      aria-current={selected ? "page" : undefined}
    >
      <Icon size={20} strokeWidth={2} />
    </button>
  );
}
