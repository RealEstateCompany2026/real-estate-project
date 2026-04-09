import { IconButton } from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ButtonPagination - Composant de navigation Previous/Next
 * Based on Figma ButtonPagination variants
 * 
 * Structure:
 * - Container: 117×54px, border-radius 20px
 * - Gap: 12px entre les boutons
 * - Padding: 7px horizontal, 4px vertical
 * - Left button (Previous): IconButton neutral
 * - Right button (Next): IconButton neutral avec background (selected)
 * 
 * Usage:
 * <ButtonPagination 
 *   onPrevious={() => setPage(p => p - 1)}
 *   onNext={() => setPage(p => p + 1)}
 *   canGoPrevious={page > 1}
 *   canGoNext={page < totalPages}
 * />
 */

export interface ButtonPaginationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  variant?: "light" | "dark";
  className?: string;
}

export function ButtonPagination({
  onPrevious,
  onNext,
  canGoPrevious = true,
  canGoNext = true,
  variant = "light",
  className = "",
}: ButtonPaginationProps) {
  const isDark = variant === "dark";

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
        <IconButton
          icon={<ChevronLeft className="w-[20px] h-[20px]" />}
          variant="neutral"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          title="Page précédente"
          className="shrink-0"
        />

        {/* Next Button - Neutral with background (selected state) */}
        <button
          onClick={onNext}
          disabled={!canGoNext}
          title="Page suivante"
          className={`
            shrink-0 rounded-[16px] transition-all
            ${canGoNext ? "cursor-pointer hover:opacity-80" : "cursor-not-allowed opacity-50"}
          `.trim()}
          style={{
            width: "44px",
            height: "44px",
            background: isDark ? "var(--neutral-600)" : "var(--neutral-100)",
            padding: "12px",
          }}
        >
          <ChevronRight
            className="w-[20px] h-[20px]"
            style={{
              color: isDark ? "var(--neutral-500)" : "var(--neutral-600)",
            }}
          />
        </button>
      </div>
    </div>
  );
}

/**
 * ButtonPaginationMini - Version compacte (icônes uniquement)
 * Based on Figma ButtonPaginationMini
 * 
 * Structure:
 * - 2 icônes 24×24px
 * - Gap: 12px
 * - Pas de background/border
 * - Stroke: #444955
 * 
 * Usage:
 * <ButtonPaginationMini 
 *   onPrevious={() => setPage(p => p - 1)}
 *   onNext={() => setPage(p => p + 1)}
 *   canGoPrevious={page > 1}
 *   canGoNext={page < totalPages}
 * />
 */

export interface ButtonPaginationMiniProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  className?: string;
}

export function ButtonPaginationMini({
  onPrevious,
  onNext,
  canGoPrevious = true,
  canGoNext = true,
  className = "",
}: ButtonPaginationMiniProps) {
  return (
    <div
      className={`button-pagination-mini-component inline-flex ${className}`}
      role="navigation"
      aria-label="Pagination"
    >
      <div className="flex flex-row items-center gap-[12px]">
        {/* Previous Icon */}
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          title="Page précédente"
          className={`
            shrink-0 transition-opacity
            ${canGoPrevious ? "cursor-pointer hover:opacity-60" : "cursor-not-allowed opacity-30"}
          `.trim()}
          style={{
            width: "24px",
            height: "24px",
            padding: 0,
            background: "transparent",
            border: "none",
          }}
        >
          <ChevronLeft
            className="w-[24px] h-[24px]"
            style={{
              color: "var(--neutral-500)",
              strokeWidth: "1.5px",
            }}
          />
        </button>

        {/* Next Icon */}
        <button
          onClick={onNext}
          disabled={!canGoNext}
          title="Page suivante"
          className={`
            shrink-0 transition-opacity
            ${canGoNext ? "cursor-pointer hover:opacity-60" : "cursor-not-allowed opacity-30"}
          `.trim()}
          style={{
            width: "24px",
            height: "24px",
            padding: 0,
            background: "transparent",
            border: "none",
          }}
        >
          <ChevronRight
            className="w-[24px] h-[24px]"
            style={{
              color: "var(--neutral-500)",
              strokeWidth: "1.5px",
            }}
          />
        </button>
      </div>
    </div>
  );
}
