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

export interface ViewModeDropdownProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  className?: string;
}

export function ViewModeDropdown({
  viewMode,
  onViewModeChange,
  className = "",
}: ViewModeDropdownProps) {
  const [open, setOpen] = useState(false);

  const modes: { id: ViewMode; label: string; icon: React.ReactNode }[] = [
    { id: "list", label: "Liste", icon: <LayoutList size={16} /> },
    { id: "cards", label: "Grille", icon: <LayoutGrid size={16} /> },
  ];

  const currentMode = modes.find((m) => m.id === viewMode);

  return (
    <div className={`relative inline-block ${className}`.trim()}>
      <button
        onClick={() => setOpen(!open)}
        className={`
          inline-flex items-center gap-2
          px-3 py-2 rounded-lg
          border border-edge-default
          bg-surface-neutral-default
          hover:bg-surface-neutral-action
          text-content-body
          transition-colors
        `}
      >
        {currentMode?.icon}
        <span className="text-sm font-medium">{currentMode?.label}</span>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className={`
            absolute top-full right-0 mt-1
            bg-surface-neutral-default
            border border-edge-default
            rounded-lg shadow-lg
            z-10
          `}
        >
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => {
                onViewModeChange(mode.id);
                setOpen(false);
              }}
              className={`
                w-full px-4 py-2 text-left
                flex items-center gap-2
                hover:bg-surface-neutral-action
                transition-colors
                text-content-body
                ${viewMode === mode.id ? "bg-surface-branded-subtle" : ""}
              `}
            >
              {mode.icon}
              <span className="text-sm">{mode.label}</span>
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
