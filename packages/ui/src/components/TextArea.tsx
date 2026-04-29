"use client";

import React, { useState } from "react";

/**
 * TextArea - Champ de saisie multi-lignes
 *
 * Specs:
 * - Border: bottom 1px (same pattern as TextField)
 * - Padding: px-4 py-3
 * - Font: text-base text-content-body (16px)
 * - States: default, focus, filled, error, disabled
 * - Resize: configurable (none, vertical, both)
 * - Character count: optional, with near-limit warning
 */

export interface TextAreaProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  name?: string;
  id?: string;
  ariaLabel?: string;
  className?: string;
  rows?: number;
  maxLength?: number;
  showCharCount?: boolean;
  resize?: "none" | "vertical" | "both";
}

export function TextArea({
  value = "",
  onChange,
  placeholder = "",
  disabled = false,
  error = false,
  name,
  id,
  ariaLabel,
  className = "",
  rows = 4,
  maxLength,
  showCharCount = false,
  resize = "vertical",
}: TextAreaProps) {
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

  const resizeClass =
    resize === "none"
      ? "resize-none"
      : resize === "both"
        ? "resize"
        : "resize-y";

  const handleFocus = () => {
    if (disabled) return;
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const charCount = value.length;
  const isNearLimit = maxLength ? charCount / maxLength > 0.9 : false;

  return (
    <div className={`w-full ${className}`.trim()}>
      <div
        className={`relative w-full ${bgClass} border-b ${borderClass} transition-colors ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        }`.trim()}
      >
        <textarea
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
          rows={rows}
          maxLength={maxLength}
          className={`w-full bg-transparent border-none outline-none px-4 py-3 text-base text-content-body placeholder:text-content-placeholder tracking-wide ${resizeClass} ${
            disabled ? "cursor-not-allowed" : ""
          }`.trim()}
        />
      </div>
      {showCharCount && maxLength && (
        <div className="flex justify-end mt-1">
          <span
            className={`text-xs ${isNearLimit ? "text-content-error" : "text-content-caption"}`}
          >
            {charCount}/{maxLength}
          </span>
        </div>
      )}
    </div>
  );
}
