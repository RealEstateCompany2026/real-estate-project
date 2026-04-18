"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { Button } from "./Button";
import { BadgeCriteria } from "./BadgeCriteria";
import { FilterRange, type FilterRangeProps } from "./FilterRange";
import { FilterLocation, type FilterLocationProps } from "./FilterLocation";
import { FilterDateRange, type FilterDateRangeProps } from "./FilterDateRange";
import { FilterEnum, type FilterEnumProps } from "./FilterEnum";

/**
 * FilterPanel — Organisme DS pour le système de filtres avancés
 *
 * Panel ancré (pas un popover) avec 2 colonnes :
 * - Gauche (240px) : liste de critères
 * - Droite (flex-1) : zone de configuration du filtre sélectionné
 *
 * Chaque type de critère délègue au sous-composant correspondant
 * (FilterRange, FilterLocation, FilterDateRange, FilterEnum).
 */

// ─── Types ────────────────────────────────────────────────────────────────

export interface FilterCriterionDef {
  id: string;
  label: string;
  icon?: React.ReactNode;
  type: "range" | "location" | "date" | "enum";
  config?: {
    // Range
    unit?: string;
    min?: number;
    max?: number;
    step?: number;
    // Enum
    options?: Array<{ value: string; label: string }>;
    // Location
    placeholder?: string;
  };
}

export interface ActiveFilter {
  criterionId: string;
  label: string;
  value: unknown;
}

export interface FilterPanelProps {
  criteria: FilterCriterionDef[];
  activeFilters?: ActiveFilter[];
  onApplyFilter: (filter: ActiveFilter) => void;
  onRemoveFilter?: (criterionId: string) => void;
  onClose?: () => void;
  className?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────

type RangeValue = { min?: number; max?: number };
type DateValue = { from?: string; to?: string };

function formatFilterLabel(
  criterion: FilterCriterionDef,
  value: unknown
): string {
  switch (criterion.type) {
    case "range": {
      const v = value as RangeValue;
      const unit = criterion.config?.unit ?? "";
      if (v.min != null && v.max != null)
        return `${criterion.label}: ${v.min}–${v.max} ${unit}`.trim();
      if (v.min != null) return `${criterion.label}: >= ${v.min} ${unit}`.trim();
      if (v.max != null) return `${criterion.label}: <= ${v.max} ${unit}`.trim();
      return criterion.label;
    }
    case "location": {
      const locations = value as string[];
      if (locations.length === 0) return criterion.label;
      if (locations.length <= 2) return `${criterion.label}: ${locations.join(", ")}`;
      return `${criterion.label}: ${locations[0]}, ${locations[1]} +${locations.length - 2}`;
    }
    case "date": {
      const v = value as DateValue;
      if (v.from && v.to) return `${criterion.label}: ${v.from} → ${v.to}`;
      if (v.from) return `${criterion.label}: depuis ${v.from}`;
      if (v.to) return `${criterion.label}: jusqu'au ${v.to}`;
      return criterion.label;
    }
    case "enum": {
      const vals = value as string[];
      const opts = criterion.config?.options ?? [];
      const labels = vals
        .map((v) => opts.find((o) => o.value === v)?.label ?? v)
        .slice(0, 2);
      if (vals.length > 2) return `${criterion.label}: ${labels.join(", ")} +${vals.length - 2}`;
      if (vals.length > 0) return `${criterion.label}: ${labels.join(", ")}`;
      return criterion.label;
    }
    default:
      return criterion.label;
  }
}

function getDefaultValue(type: FilterCriterionDef["type"]): unknown {
  switch (type) {
    case "range":
      return { min: undefined, max: undefined } as RangeValue;
    case "location":
      return [] as string[];
    case "date":
      return { from: undefined, to: undefined } as DateValue;
    case "enum":
      return [] as string[];
    default:
      return undefined;
  }
}

// ─── Component ────────────────────────────────────────────────────────────

export function FilterPanel({
  criteria,
  activeFilters = [],
  onApplyFilter,
  onRemoveFilter,
  onClose,
  className = "",
}: FilterPanelProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState<unknown>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const selectedCriterion = criteria.find((c) => c.id === selectedId) ?? null;

  // Synchronous criterion selection — sets both selectedId and currentValue
  // in the same handler to avoid a render with stale null value (crash fix).
  const handleSelectCriterion = useCallback((criterion: FilterCriterionDef) => {
    setSelectedId(criterion.id);
    const existing = activeFilters.find(f => f.criterionId === criterion.id);
    setCurrentValue(existing ? existing.value : getDefaultValue(criterion.type));
  }, [activeFilters]);

  // Click outside → close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        onClose
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const handleApply = useCallback(() => {
    if (!selectedCriterion || currentValue == null) return;
    const label = formatFilterLabel(selectedCriterion, currentValue);
    onApplyFilter({
      criterionId: selectedCriterion.id,
      label,
      value: currentValue,
    });
    // Reset selection after apply
    setSelectedId(null);
    setCurrentValue(null);
  }, [selectedCriterion, currentValue, onApplyFilter]);

  const handleCancel = useCallback(() => {
    setSelectedId(null);
    setCurrentValue(null);
    onClose?.();
  }, [onClose]);

  const isActive = (criterionId: string) =>
    activeFilters.some((f) => f.criterionId === criterionId);

  // ── Render filter input based on type ──

  const renderFilterInput = () => {
    if (!selectedCriterion) {
      return (
        <div className="flex-1 flex items-center justify-center text-content-caption text-sm">
          Sélectionnez un critère
        </div>
      );
    }

    switch (selectedCriterion.type) {
      case "range":
        return (
          <FilterRange
            label={selectedCriterion.label}
            unit={selectedCriterion.config?.unit}
            min={selectedCriterion.config?.min}
            max={selectedCriterion.config?.max}
            step={selectedCriterion.config?.step}
            value={currentValue as RangeValue}
            onChange={setCurrentValue}
          />
        );

      case "location":
        return (
          <FilterLocation
            label={selectedCriterion.label}
            placeholder={selectedCriterion.config?.placeholder}
            selectedLocations={currentValue as string[]}
            onChange={setCurrentValue}
          />
        );

      case "date":
        return (
          <FilterDateRange
            label={selectedCriterion.label}
            value={currentValue as DateValue}
            onChange={setCurrentValue}
          />
        );

      case "enum":
        return (
          <FilterEnum
            label={selectedCriterion.label}
            options={selectedCriterion.config?.options ?? []}
            selectedValues={currentValue as string[]}
            onChange={setCurrentValue}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={panelRef}
      className={`rounded-[16px] bg-surface-neutral-default border border-edge-default shadow-card overflow-hidden ${className}`}
    >
      {/* Active filters bar */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 px-4 py-3 border-b border-edge-divider">
          {activeFilters.map((filter) => (
            <BadgeCriteria
              key={filter.criterionId}
              label={filter.label}
              variant="outlined"
              onRemove={
                onRemoveFilter
                  ? () => onRemoveFilter(filter.criterionId)
                  : undefined
              }
            />
          ))}
        </div>
      )}

      {/* Main 2-column layout */}
      <div className="flex">
        {/* Left column — criteria list (max-h for scroll when many criteria) */}
        <div className="w-[240px] border-r border-edge-divider overflow-y-auto max-h-[400px]">
          <div className="flex flex-col py-2">
            {criteria.map((criterion) => {
              const active = isActive(criterion.id);
              const selected = selectedId === criterion.id;

              return (
                <button
                  key={criterion.id}
                  type="button"
                  className={`flex items-center gap-3 px-4 py-2.5 text-left transition-colors cursor-pointer ${
                    selected
                      ? "bg-surface-neutral-action"
                      : "hover:bg-surface-neutral-action-hover"
                  }`}
                  onClick={() => handleSelectCriterion(criterion)}
                >
                  {/* Icon */}
                  {criterion.icon && (
                    <span className="shrink-0 size-5 text-icon-neutral-default flex items-center justify-center">
                      {criterion.icon}
                    </span>
                  )}

                  {/* Label */}
                  <span className="flex-1 text-sm text-content-body truncate">
                    {criterion.label}
                  </span>

                  {/* Active indicator dot */}
                  {active && (
                    <span className="shrink-0 size-2 rounded-full bg-surface-branded-action" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column — filter config */}
        <div className="flex-1 flex flex-col">
          {/* Filter input area */}
          <div className="flex-1 p-4">{renderFilterInput()}</div>

          {/* Action buttons (only when a criterion is selected) */}
          {selectedCriterion && (
            <div className="flex items-center justify-end gap-3 px-4 py-3 border-t border-edge-divider">
              <Button variant="ghost" size="sm" onClick={handleCancel}>
                Annuler
              </Button>
              <Button variant="primary" size="sm" onClick={handleApply}>
                Appliquer
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
