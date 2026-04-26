"use client";

import { useState } from "react";
import { LayoutList, LayoutGrid } from "lucide-react";

/**
 * ViewModeDropdown - Bascule liste/grille
 * Molecule du design system RealAgent
 *
 * Composant de sélection pour basculer entre différents modes de visualisation.
 */

export type ViewMode = "list" | "cards";

export type ViewModeVariant = "default" | "ghost";

export interface ViewModeDropdownProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  variant?: ViewModeVariant;
  className?: string;
  disabled?: boolean;
}

export function ViewModeDropdown({
  viewMode,
  onViewModeChange,
  variant = "default",
  className = "",
  disabled = false,
}: ViewModeDropdownProps) {
  const [open, setOpen] = useState(false);

  const modes: { id: ViewMode; label: string; icon: React.ReactNode }[] = [
    { id: "list", label: "Liste", icon: <LayoutList size={20} /> },
    { id: "cards", label: "Grille", icon: <LayoutGrid size={20} /> },
  ];

  const currentMode = modes.find((m) => m.id === viewMode);

  return (
    <div className={`relative inline-block ${className}`.trim()}>
      <button
        onClick={() => setOpen(!open)}
        disabled={disabled}
        className={`
          inline-flex items-center gap-2
          p-3 rounded-lg
          ${variant === 'ghost'
            ? 'text-content-body hover:bg-surface-neutral-action'
            : 'border border-edge-neutral-default bg-surface-neutral-default hover:bg-surface-neutral-action-hover text-content-body'
          }
          text-base font-semibold tracking-[0.16px]
          transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-surface-page
          disabled:pointer-events-none disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled
        `}
      >
        {currentMode?.icon}
        <span>{currentMode?.label}</span>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className={`
            absolute top-full right-0 mt-1
            bg-surface-neutral-default
            border border-edge-neutral-default
            rounded-lg shadow-lg
            z-10
          `}
        >
          {modes.map((mode, index) => (
            <button
              key={mode.id}
              onClick={() => {
                onViewModeChange(mode.id);
                setOpen(false);
              }}
              className={`
                w-full px-4 py-2 text-left
                flex items-center gap-2
                hover:bg-surface-neutral-action-hover
                transition-colors
                text-content-body
                text-base font-semibold tracking-[0.16px]
                ${index === 0 ? "rounded-t-lg" : ""}
                ${index === modes.length - 1 ? "rounded-b-lg" : ""}
                ${viewMode === mode.id ? "bg-surface-branded-subtle" : ""}
              `}
            >
              {mode.icon}
              <span>{mode.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {open && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
