"use client";

import React from "react";
import { Checkbox } from "./Checkbox";

/**
 * FilterEnum — Molécule DS pour filtres à options prédéfinies
 *
 * Liste de Checkbox (multi-select par défaut) ou radio buttons (single-select).
 */

export interface FilterEnumProps {
  label: string;
  options: Array<{ value: string; label: string }>;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  multiSelect?: boolean;
}

export function FilterEnum({
  label,
  options,
  selectedValues,
  onChange,
  multiSelect = true,
}: FilterEnumProps) {
  const toggleValue = (val: string) => {
    if (multiSelect) {
      if (selectedValues.includes(val)) {
        onChange(selectedValues.filter((v) => v !== val));
      } else {
        onChange([...selectedValues, val]);
      }
    } else {
      // Single-select: replace
      onChange([val]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <h6 className="text-[16px] font-bold leading-[20px] tracking-[0.16px] text-content-headings">
        {label}
      </h6>

      {/* Options list */}
      <div className="flex flex-col gap-1">
        {options.map((opt) => {
          const isSelected = selectedValues.includes(opt.value);

          if (!multiSelect) {
            // Radio button style
            return (
              <button
                key={opt.value}
                type="button"
                className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-surface-neutral-action transition-colors cursor-pointer text-left"
                onClick={() => toggleValue(opt.value)}
              >
                <div
                  className={`shrink-0 size-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isSelected
                      ? "border-surface-branded-action"
                      : "border-edge-neutral-default"
                  }`}
                >
                  {isSelected && (
                    <div className="size-2.5 rounded-full bg-surface-branded-action" />
                  )}
                </div>
                <span className="text-sm text-content-body">{opt.label}</span>
              </button>
            );
          }

          // Checkbox style (default)
          return (
            <button
              key={opt.value}
              type="button"
              className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-surface-neutral-action transition-colors cursor-pointer text-left"
              onClick={() => toggleValue(opt.value)}
            >
              <Checkbox checked={isSelected} />
              <span className="text-sm text-content-body">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
