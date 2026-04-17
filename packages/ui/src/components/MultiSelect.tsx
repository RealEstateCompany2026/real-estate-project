"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";

/**
 * MultiSelect - Dropdown à choix multiple
 *
 * Specs (aligned with TextFieldOutlined):
 * - Trigger: h-56px, rounded-8px, px-12 py-18
 * - Border: border-edge-disabled (rest), border-edge-neutral-default (open/hover)
 * - Dropdown: rounded-8px, shadow-lg, max-h 320px scrollable
 * - Items: h-48px, px-12 py-12, checkbox 20px + gap 8px
 * - Font: Roboto SemiBold 16px/20px
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
        className={`h-[56px] w-full rounded-[8px] px-[12px] py-[18px] bg-surface-neutral-default border border-solid flex items-center justify-between transition-all ${
          disabled
            ? "opacity-50 cursor-not-allowed bg-surface-neutral-action border-edge-disabled"
            : isOpen
              ? "border-edge-neutral-default cursor-pointer"
              : "border-edge-disabled cursor-pointer hover:border-edge-neutral-default"
        }`}
      >
        <span className="text-[16px] leading-[20px] font-semibold text-content-body truncate">
          {displayLabel}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-content-caption transition-transform duration-200 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 top-full mt-1 w-full rounded-[8px] bg-surface-neutral-default border border-solid border-edge-neutral-default shadow-lg max-h-80 overflow-y-auto py-2">
          {options.map((option) => {
            const isSelected = value.includes(option);
            return (
              <button
                key={option}
                type="button"
                className={`w-full h-[48px] px-[12px] py-[12px] flex items-center gap-[8px] transition-colors ${
                  isSelected ? "bg-surface-neutral-action" : "hover:bg-surface-neutral-action"
                }`}
                onClick={() => toggleOption(option)}
              >
                {/* Checkbox */}
                <div
                  className={`size-5 rounded shrink-0 flex items-center justify-center border ${
                    isSelected
                      ? "bg-surface-branded-default border-surface-branded-default"
                      : "bg-surface-neutral-default border-edge-default"
                  }`}
                >
                  {isSelected && <Check size={14} className="text-content-branded-on-action" strokeWidth={3} />}
                </div>
                <span className="text-[16px] leading-[20px] font-semibold text-content-body text-left">
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
