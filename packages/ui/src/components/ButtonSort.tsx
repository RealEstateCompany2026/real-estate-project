"use client";

import { ArrowUp, ArrowDown } from "lucide-react";

/**
 * ButtonSort - Bouton de tri avec flèche directionnelle
 *
 * Structure:
 * - Label + count optionnel : "Clients (482)"
 * - Icône arrow : 24×24px (visible uniquement si trié)
 * - 3 états : none (pas d'icône), asc (↑), desc (↓)
 * - Padding : 10px horizontal, 8px vertical (texte)
 * - Font : Roboto Regular 14px/16px
 */

export type SortDirection = "none" | "asc" | "desc";

export interface ButtonSortProps {
  label: string;
  count?: number;
  sortDirection?: SortDirection;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function ButtonSort({
  label,
  count,
  sortDirection = "none",
  onClick,
  disabled = false,
  className = "",
}: ButtonSortProps) {
  const displayText = count !== undefined ? `${label} (${count})` : label;
  const isSorted = sortDirection !== "none";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        button-sort-component inline-flex items-center transition-all
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:opacity-70"}
        ${className}
      `.trim()}
      aria-label={`Trier par ${label} ${sortDirection === "asc" ? "croissant" : sortDirection === "desc" ? "décroissant" : ""}`}
    >
      {/* Label + Count */}
      <div className="px-[10px] py-[8px]">
        <p
          className={`
            text-[14px] leading-[16px] tracking-[0.14px] whitespace-nowrap
            ${isSorted ? "text-content-body" : "text-content-caption"}
          `}
        >
          {displayText}
        </p>
      </div>

      {/* Sort Icon - Visible uniquement si trié */}
      {isSorted && (
        <div className="w-[24px] h-[24px] shrink-0">
          {sortDirection === "asc" ? (
            <ArrowUp
              className="w-full h-full"
              style={{
                color: "var(--icon-neutral-default)",
                strokeWidth: "1.5px",
              }}
            />
          ) : (
            <ArrowDown
              className="w-full h-full"
              style={{
                color: "var(--icon-neutral-default)",
                strokeWidth: "1.5px",
              }}
            />
          )}
        </div>
      )}
    </button>
  );
}
