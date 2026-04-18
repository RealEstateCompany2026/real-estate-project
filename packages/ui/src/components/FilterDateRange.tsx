"use client";

import React from "react";
import { Chip } from "./Chip";

/**
 * FilterDateRange — Molécule DS pour filtres temporels
 *
 * Deux champs date (Du / Au) + presets rapides (30j, 3m, 6m, année).
 */

export interface FilterDateRangeProps {
  label: string;
  value: { from?: string; to?: string };
  onChange: (value: { from?: string; to?: string }) => void;
}

/** Compute ISO date string N days ago from today */
function daysAgo(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().split("T")[0]!;
}

/** Compute ISO date string for Jan 1st of current year */
function startOfYear(): string {
  return `${new Date().getFullYear()}-01-01`;
}

function today(): string {
  return new Date().toISOString().split("T")[0]!;
}

interface Preset {
  label: string;
  from: string;
  to: string;
}

const PRESETS: Preset[] = [
  { label: "30 derniers jours", from: daysAgo(30), to: today() },
  { label: "3 derniers mois", from: daysAgo(90), to: today() },
  { label: "6 derniers mois", from: daysAgo(180), to: today() },
  { label: "Cette année", from: startOfYear(), to: today() },
];

export function FilterDateRange({
  label,
  value,
  onChange,
}: FilterDateRangeProps) {
  const inputClasses =
    "w-full bg-surface-neutral-default border border-edge-default rounded-lg px-3 py-2 text-sm text-content-body focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors";

  const isPresetActive = (preset: Preset) =>
    value.from === preset.from && value.to === preset.to;

  return (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <h6 className="text-[16px] font-bold leading-[20px] tracking-[0.16px] text-content-headings">
        {label}
      </h6>

      {/* Date fields */}
      <div className="flex items-center gap-3">
        {/* From */}
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-xs text-content-caption font-medium">Du</label>
          <input
            type="date"
            className={inputClasses}
            value={value.from ?? ""}
            onChange={(e) =>
              onChange({
                ...value,
                from: e.target.value || undefined,
              })
            }
          />
        </div>

        {/* Separator */}
        <span className="text-content-caption mt-5">—</span>

        {/* To */}
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-xs text-content-caption font-medium">Au</label>
          <input
            type="date"
            className={inputClasses}
            value={value.to ?? ""}
            onChange={(e) =>
              onChange({
                ...value,
                to: e.target.value || undefined,
              })
            }
          />
        </div>
      </div>

      {/* Quick presets */}
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((preset) => (
          <Chip
            key={preset.label}
            label={preset.label}
            size="small"
            variant="outlined"
            selected={isPresetActive(preset)}
            onClick={() => onChange({ from: preset.from, to: preset.to })}
          />
        ))}
      </div>
    </div>
  );
}
