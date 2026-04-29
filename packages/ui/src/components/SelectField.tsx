"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Label } from "./Label";
import { MenuItem } from "./MenuItem";

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
 * SelectField - Champ de selection avec label
 *
 * Composant molecule qui combine un dropdown custom (MenuItem du DS)
 * avec un Label. Remplace l'ancien select HTML natif.
 */
export function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder = "Selectionner...",
  required = false,
  disabled = false,
  helperText,
  error,
  id,
  className = "",
}: SelectFieldProps) {
  const fieldId = id || `select-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Click-outside detection
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;

  const borderClass = error
    ? "border-edge-error-default"
    : isOpen
      ? "border-edge-neutral-default"
      : "border-edge-disabled hover:border-edge-neutral-default";

  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed bg-surface-neutral-action border-edge-disabled"
    : "bg-surface-neutral-default cursor-pointer";

  return (
    <div ref={ref} className={`flex flex-col gap-[12px] ${className}`.trim()}>
      {/* Label */}
      <Label label={label} required={required} htmlFor={fieldId} />

      {/* Trigger + Dropdown container */}
      <div className="relative">
        {/* Trigger button */}
        <button
          id={fieldId}
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={`
            w-full h-[56px] px-[12px] py-[18px] rounded-[8px]
            text-[16px] leading-[20px] font-semibold
            border border-solid transition-all
            flex items-center justify-between
            ${borderClass}
            ${disabledClass}
            ${!selectedOption ? "text-content-caption" : "text-content-body"}
          `}
        >
          <span className="truncate text-left">{displayLabel}</span>
          <ChevronDown
            size={20}
            className={`shrink-0 text-content-caption transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute z-50 top-full mt-1 w-full rounded-[16px] overflow-hidden bg-surface-neutral-default border border-solid border-edge-default shadow-lg max-h-80 overflow-y-auto">
            {options.map((opt) => (
              <MenuItem
                key={opt.value}
                label={opt.label}
                selected={value === opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              />
            ))}
          </div>
        )}
      </div>

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
