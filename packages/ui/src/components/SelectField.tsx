"use client";

import React from "react";
import { Label } from "./Label";

export interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  helperText?: string;
  error?: string;
  id?: string;
  className?: string;
}

/**
 * SelectField - Champ de sélection avec label
 *
 * Composant molecule qui combine un Select HTML natif avec un Label
 * et suit notre design system. Version simplifiée sans shadcn/ui.
 */
export function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder = "Sélectionner...",
  required = false,
  disabled = false,
  helperText,
  error,
  id,
  className = "",
}: SelectFieldProps) {
  const fieldId = id || `select-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={`flex flex-col gap-[12px] ${className}`.trim()}>
      {/* Label */}
      <Label label={label} required={required} htmlFor={fieldId} />

      {/* Select */}
      <select
        id={fieldId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`
          h-[56px] px-4 py-3 rounded-lg
          bg-surface-neutral-default dark:bg-neutral-700
          text-content-body dark:text-neutral-200
          border border-edge-default dark:border-neutral-600
          ${error ? "border-edge-error-default" : "border-edge-default"}
          focus:outline-none focus:ring-2 focus:ring-purple-500
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all
          font-roboto text-[16px] leading-[20px]
        `}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Helper text or error */}
      {(helperText || error) && (
        <span
          className={`text-xs ${error ? "text-content-error" : "text-content-subtle"}`}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
}
