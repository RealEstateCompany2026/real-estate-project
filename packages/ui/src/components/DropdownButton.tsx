"use client";

import React from "react";
import { ChevronDown, LucideIcon } from "lucide-react";

/**
 * DropdownButton - Bouton trigger pour dropdown menu
 *
 * Specs Figma:
 * - Height: 44px, border-radius: 16px, padding: 12px 20px
 * - Font: Roboto SemiBold 16/20px
 * - ChevronDown 20px, rotates 180° when open
 * - Optional leftIcon, optional shadow
 */

export interface DropdownButtonProps {
  label?: string;
  leftIcon?: LucideIcon;
  isOpen?: boolean;
  shadow?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function DropdownButton({
  label,
  leftIcon: LeftIcon,
  isOpen = false,
  shadow = true,
  onClick,
  disabled = false,
  className = "",
}: DropdownButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`h-11 rounded-lg p-3 min-w-[104px] bg-surface-neutral-default border border-edge-default transition-all ${
        shadow ? "shadow-sm" : ""
      } ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:bg-surface-neutral-action"} ${className}`.trim()}
    >
      <div className="flex items-center gap-2">
        {LeftIcon && <LeftIcon size={20} className="shrink-0 text-content-body" />}
        {label && LeftIcon && <div className="w-1" />}
        {label && (
          <span className="text-base font-semibold text-content-body tracking-[0.16px] whitespace-nowrap">
            {label}
          </span>
        )}
        <ChevronDown
          size={20}
          className={`shrink-0 text-content-body transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
    </button>
  );
}
