"use client";

import { CircleX } from "lucide-react";

/**
 * BadgeCriteria — Aligned with Figma DS (file 09EiMQjcDWgb7MzykS8zU0)
 *
 * Figma name: "atome . criteria"
 * Figma specs: border-radius 16px, padding 6px (outer) + 6px/4px (inner),
 * font Roboto Bold 14px/16px, tracking 0.14px, cancel icon 18px
 *
 * Figma variants → code mapping:
 *   "outlined light/dark" → outlined (border, no bg)
 *   "default light/dark"  → default  (surface-neutral-action bg)
 */

export type BadgeCriteriaVariant = "outlined" | "default" | "ghost";

export interface BadgeCriteriaProps {
  variant?: BadgeCriteriaVariant;
  label: string;
  onRemove?: () => void;
  className?: string;
}

export function BadgeCriteria({
  variant = "outlined",
  label,
  onRemove,
  className = "",
}: BadgeCriteriaProps) {
  const containerVariantClass =
    variant === "outlined"
      ? "border border-solid border-edge-neutral-default bg-transparent"
      : variant === "ghost"
        ? "bg-transparent"
        : "bg-surface-neutral-action";

  const textVariantClass =
    variant === "default" ? "text-content-body" : "text-content-caption";

  return (
    <div
      className={`
        relative inline-flex items-center rounded-[16px] px-[6px] ${className}
        ${containerVariantClass}
      `.trim()}
    >
      {/* Content container */}
      <div className="relative flex items-center px-[6px] py-[4px]">
        {/* Label */}
        <p
          className={`
            text-sm leading-[16px] tracking-[0.14px] whitespace-nowrap font-bold font-roboto
            ${textVariantClass}
          `.trim()}
        >
          {label}
        </p>

        {/* Remove button */}
        {onRemove && (
          <button
            onClick={onRemove}
            className="shrink-0 cursor-pointer hover:opacity-70 transition-opacity ml-[4px]"
            aria-label={`Remove ${label}`}
          >
            <CircleX
              size={18}
              className={textVariantClass}
            />
          </button>
        )}
      </div>
    </div>
  );
}
