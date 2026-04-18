"use client";

import React from "react";

/**
 * FilterRange — Molécule DS pour filtres numériques (surface, prix, âge, etc.)
 *
 * Affiche deux champs Min/Max côte à côte avec une unité optionnelle.
 * Pas de bouton Appliquer — c'est le FilterPanel parent qui le gère.
 */

export interface FilterRangeProps {
  label: string;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  value: { min?: number; max?: number };
  onChange: (value: { min?: number; max?: number }) => void;
}

export function FilterRange({
  label,
  unit,
  min,
  max,
  step = 1,
  value,
  onChange,
}: FilterRangeProps) {
  const inputClasses =
    "w-full bg-surface-neutral-default border border-edge-default rounded-lg px-3 py-2 text-sm text-content-body placeholder:text-content-caption focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors";

  return (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <h6 className="text-[16px] font-bold leading-[20px] tracking-[0.16px] text-content-headings">
        {label}
      </h6>

      {/* Min / Max fields */}
      <div className="flex items-center gap-3">
        {/* Min */}
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-xs text-content-caption font-medium">Min</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className={inputClasses}
              placeholder={min !== undefined ? String(min) : "—"}
              value={value.min !== undefined ? value.min : ""}
              min={min}
              max={max}
              step={step}
              onChange={(e) =>
                onChange({
                  ...value,
                  min: e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
            />
            {unit && (
              <span className="text-sm text-content-caption whitespace-nowrap">
                {unit}
              </span>
            )}
          </div>
        </div>

        {/* Separator */}
        <span className="text-content-caption mt-5">—</span>

        {/* Max */}
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-xs text-content-caption font-medium">Max</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className={inputClasses}
              placeholder={max !== undefined ? String(max) : "—"}
              value={value.max !== undefined ? value.max : ""}
              min={min}
              max={max}
              step={step}
              onChange={(e) =>
                onChange({
                  ...value,
                  max: e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
            />
            {unit && (
              <span className="text-sm text-content-caption whitespace-nowrap">
                {unit}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
