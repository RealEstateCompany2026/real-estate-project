"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";

/**
 * SwitchTheme - Toggle Light/Dark mode
 * Variant spécialisé du Switch avec icônes Soleil/Lune.
 *
 * Specs Figma :
 * - Pill : 48×30px, border-radius 16px
 * - Toggle circle : 24×24px, padding 3px
 * - Light mode (isDark=false) : bg surface-neutral-action-hover, circle surface-neutral-default, icon icon-placeholder
 * - Dark mode (isDark=true) : bg surface-neutral-action, circle surface-neutral-default, icon icon-neutral-default
 */

export interface SwitchThemeProps {
  isDark?: boolean;
  onChange?: () => void;
  className?: string;
}

export function SwitchTheme({
  isDark = false,
  onChange,
  className = "",
}: SwitchThemeProps) {
  const handleClick = () => {
    onChange?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onChange?.();
    }
  };

  const bgColor = isDark
    ? "bg-surface-neutral-action"
    : "bg-surface-neutral-action-hover";

  return (
    <div
      className={`relative w-12 h-[30px] rounded-2xl transition-all duration-200 cursor-pointer ${bgColor} ${className}`.trim()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      tabIndex={0}
    >
      {/* Toggle circle with icon */}
      <div
        className={`absolute top-[3px] size-6 rounded-full bg-surface-neutral-default shadow-sm transition-all duration-200 flex items-center justify-center ${
          isDark ? "left-[21px]" : "left-[3px]"
        }`}
      >
        {isDark ? (
          <Sun size={14} className="text-icon-neutral-default" />
        ) : (
          <Moon size={14} className="text-icon-placeholder" />
        )}
      </div>
    </div>
  );
}
