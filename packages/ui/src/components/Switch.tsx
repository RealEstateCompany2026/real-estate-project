"use client";

import React from "react";

/**
 * Switch - Toggle ON/OFF
 *
 * Specs Figma:
 * - Width: 48px, Height: 30px, border-radius: 16px
 * - Toggle circle: 24×24px, padding: 3px
 * - Animation: 200ms smooth transition
 * - OFF: bg neutral-200 (light) / neutral-500 (dark), circle white / neutral-800
 * - ON: bg success-500, circle white / neutral-800
 */

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  id?: string;
  ariaLabel?: string;
  className?: string;
}

export function Switch({
  checked = false,
  onChange,
  disabled = false,
  name,
  id,
  ariaLabel,
  className = "",
}: SwitchProps) {
  const handleClick = () => {
    if (disabled) return;
    onChange?.(!checked);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onChange?.(!checked);
    }
  };

  return (
    <div
      className={`relative w-12 h-[30px] rounded-2xl transition-all duration-200 group ${
        disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"
      } ${checked ? "bg-green-500" : "bg-neutral-200 dark:bg-neutral-500"} ${className}`.trim()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      tabIndex={disabled ? -1 : 0}
    >
      {name && (
        <input
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={() => {}}
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />
      )}

      {/* Toggle circle */}
      <div
        className={`absolute top-[3px] size-6 rounded-full bg-white dark:bg-neutral-800 shadow-sm transition-all duration-200 ${
          checked ? "left-[21px]" : "left-[3px]"
        } ${!disabled ? "group-hover:opacity-90" : ""}`}
      />
    </div>
  );
}
