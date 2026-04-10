"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";

/**
 * TextField - Champ de saisie de texte
 *
 * Specs Figma:
 * - Height: 56px
 * - Padding: 12px (h) × 18px (v)
 * - Border: bottom 1px
 * - Icons: 20×20px (Lucide)
 * - Font: Roboto SemiBold 16px/20px
 * - States: default, focus, filled, error, disabled
 */

export interface TextFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "url" | "password" | "number" | "search" | "date" | "time" | "datetime-local";
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  error?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
  ariaLabel?: string;
  autoComplete?: string;
  required?: boolean;
  maxLength?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
}

export function TextField({
  value = "",
  onChange,
  placeholder = "",
  type = "text",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  error = false,
  disabled = false,
  name,
  id,
  ariaLabel,
  autoComplete,
  required = false,
  maxLength,
  onFocus,
  onBlur,
  className = "",
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const bgClass = disabled
    ? "bg-surface-disabled"
    : error
      ? "bg-surface-error"
      : "bg-surface-neutral-default";

  const borderClass = error
    ? "border-red-500"
    : isFocused
      ? "border-edge-neutral-default"
      : "border-edge-divider";

  const handleFocus = () => {
    if (disabled) return;
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  return (
    <div
      className={`relative w-full h-14 ${bgClass} border-b ${borderClass} transition-colors ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      } ${className}`.trim()}
    >
      <div className="flex items-center gap-2 px-3 py-[18px] h-full">
        {LeftIcon && (
          <LeftIcon className="size-5 shrink-0 text-icon-placeholder" strokeWidth={2} />
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => !disabled && onChange?.(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          id={id}
          aria-label={ariaLabel || placeholder}
          aria-invalid={error}
          required={required}
          maxLength={maxLength}
          autoComplete={autoComplete}
          className="flex-1 bg-transparent border-none outline-none text-base font-semibold text-content-body placeholder:text-content-placeholder tracking-wide"
        />
        {RightIcon && (
          <RightIcon className="size-5 shrink-0 text-icon-placeholder" strokeWidth={2} />
        )}
      </div>
    </div>
  );
}
