"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ButtonPagination - Composant de navigation Previous/Next
 *
 * Structure:
 * - Container: 117×54px, border-radius 20px
 * - Gap: 12px entre les boutons
 * - Padding: 7px horizontal, 4px vertical
 * - Left button (Previous): IconButton neutral
 * - Right button (Next): IconButton neutral avec background (selected)
 */

export interface ButtonPaginationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  className?: string;
}

export function ButtonPagination({
  onPrevious,
  onNext,
  canGoPrevious = true,
  canGoNext = true,
  className = "",
}: ButtonPaginationProps) {
  return (
    <div
      className={`button-pagination-component rounded-[20px] inline-flex ${className}`}
      role="navigation"
      aria-label="Pagination"
      style={{
        padding: "4px 7px",
      }}
    >
      {/* Container */}
      <div className="flex flex-row items-center gap-[12px]">
        {/* Previous Button - Ghost/Neutral (no background) */}
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          title="Page précédente"
          className={`
            shrink-0 rounded-[16px] transition-all
            p-[12px] w-[44px] h-[44px]
            flex items-center justify-center
            ${canGoPrevious ? "cursor-pointer hover:opacity-80" : "cursor-not-allowed opacity-50"}
          `}
        >
          <ChevronLeft
            className="w-[20px] h-[20px]"
            style={{
              color: "var(--icon-neutral-default)",
            }}
          />
        </button>

        {/* Next Button - Neutral with background (selected state) */}
        <button
          onClick={onNext}
          disabled={!canGoNext}
          title="Page suivante"
          className={`
            shrink-0 rounded-[16px] transition-all
            p-[12px] w-[44px] h-[44px]
            flex items-center justify-center
            bg-neutral-100 dark:bg-neutral-600
            ${canGoNext ? "cursor-pointer hover:opacity-80" : "cursor-not-allowed opacity-50"}
          `}
        >
          <ChevronRight
            className="w-[20px] h-[20px]"
            style={{
              color: "var(--icon-neutral-default)",
            }}
          />
        </button>
      </div>
    </div>
  );
}
