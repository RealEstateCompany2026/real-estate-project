"use client";

import React from "react";

/**
 * Checkbox - Case à cocher interactive
 *
 * Specs Figma:
 * - Size: 28×28px, border-radius: 8px, border-width: 1px
 * - Check icon: 16×16px SVG
 * - States: default, hover, focus, disabled, error
 * - Light/Dark: handled by CSS custom properties (tokens.css)
 */

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  error?: boolean;
  name?: string;
  id?: string;
  ariaLabel?: string;
  className?: string;
}

export function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  error = false,
  name,
  id,
  ariaLabel,
  className = "",
}: CheckboxProps) {
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

  const baseClasses = "relative shrink-0 size-7 rounded-lg group transition-colors";
  const cursorClass = disabled ? "cursor-not-allowed" : "cursor-pointer";

  const bgClass = disabled
    ? "bg-surface-disabled"
    : error
      ? "bg-surface-error"
      : "bg-surface-neutral-default";

  const borderClass = disabled
    ? "border-edge-disabled"
    : error
      ? "border-edge-error-default"
      : "border-edge-neutral-default";

  const checkColor = disabled
    ? "text-content-disabled"
    : error
      ? "text-content-error"
      : "text-content-body";

  return (
    <div
      className={`${baseClasses} ${cursorClass} ${bgClass} ${className}`.trim()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-invalid={error}
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

      {/* Border */}
      <div
        className={`absolute inset-[-1px] border rounded-lg pointer-events-none ${borderClass}`}
        aria-hidden="true"
      />

      {/* Hover overlay */}
      {!disabled && (
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-surface-neutral-action pointer-events-none" />
      )}

      {/* Focus ring */}
      <div
        className={`absolute -inset-1.5 rounded-lg border-2 ${borderClass} opacity-0 pointer-events-none group-focus-visible:opacity-100`}
        aria-hidden="true"
      />

      {/* Check icon */}
      {checked && (
        <div className={`absolute inset-0 flex items-center justify-center ${checkColor}`}>
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path
              d="M13.3 4.3a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L6.6 9.6l5.3-5.3a1 1 0 0 1 1.4 0z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
