"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";

/**
 * MultiSelect - Dropdown à choix multiple
 *
 * Specs Figma:
 * - Trigger: h-44px, rounded-lg, px-20 py-12
 * - Dropdown: rounded-lg, shadow, max-h 320px scrollable
 * - Items: h-48px, px-16 py-12, checkbox 20px + gap 12px
 * - Font: Roboto SemiBold 16/20px
 * - Checkbox checked: branded purple
 */

export interface MultiSelectProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function MultiSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Sélectionner...",
  disabled = false,
  className = "",
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  const displayLabel = value.length > 0 ? `${label} (${value.length})` : placeholder;

  return (
    <div ref={ref} className={`relative ${className}`.trim()}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`h-11 w-full rounded-lg px-5 py-3 bg-surface-neutral-default border border-edge-default shadow-sm flex items-center justify-between ${
          disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:bg-surface-neutral-action"
        }`}
      >
        <span className="text-base font-semibold text-content-body tracking-wide truncate">
          {displayLabel}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-content-body transition-transform duration-200 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 top-full mt-1 w-full rounded-lg bg-surface-neutral-default border border-edge-default shadow-lg max-h-80 overflow-y-auto py-2">
          {options.map((option) => {
            const isSelected = value.includes(option);
            return (
              <button
                key={option}
                type="button"
                className={`w-full h-12 px-4 py-3 flex items-center gap-3 transition-colors ${
                  isSelected ? "bg-surface-neutral-action" : "hover:bg-surface-neutral-action"
                }`}
                onClick={() => toggleOption(option)}
              >
                {/* Checkbox */}
                <div
                  className={`size-5 rounded shrink-0 flex items-center justify-center border ${
                    isSelected
                      ? "bg-purple-500 border-purple-500"
                      : "bg-surface-neutral-default border-edge-default"
                  }`}
                >
                  {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                </div>
                <span className="text-base font-semibold text-content-body tracking-wide text-left">
                  {option}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
