/**
 * ViewModeDropdown - Bascule liste/grille
 * Molecule du design system RealAgent
 *
 * Extrait du pattern dupliqué dans Page_List_Client et Page_List_Bien
 */

"use client";

import { useState } from "react";
import { LayoutList, LayoutGrid } from "lucide-react";
import { DropdownButton } from "../atoms/DropdownButton";
import { Menu } from "../organisms/Menu";

export type ViewMode = "list" | "cards";

export interface ViewModeDropdownProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  theme?: "light" | "dark";
}

export function ViewModeDropdown({ viewMode, onViewModeChange, theme = "light" }: ViewModeDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <DropdownButton
        label={viewMode === "list" ? "Liste" : "Grille"}
        icon={viewMode === "list" ? <LayoutList size={16} /> : <LayoutGrid size={16} />}
        onClick={() => setOpen(!open)}
        theme={theme}
      />
      {open && (
        <Menu
          items={[
            { label: "Liste", icon: <LayoutList size={16} />, onClick: () => { onViewModeChange("list"); setOpen(false); } },
            { label: "Grille", icon: <LayoutGrid size={16} />, onClick: () => { onViewModeChange("cards"); setOpen(false); } },
          ]}
          theme={theme}
        />
      )}
    </div>
  );
}
