"use client";

import { CircleX } from "lucide-react";

/**
 * BadgeCriteria - Badge de filtre/critère de recherche avec bouton de suppression
 *
 * Structure:
 * - Pill-shaped badge avec icône CircleX à droite
 * - Padding intérieur: 8px de chaque côté
 * - Border-radius 16px
 * - 2 variantes : outlined (bordure seule), default (fond coloré)
 *
 * Variantes:
 * - outlined: bordure uniquement, fond transparent
 * - default: fond coloré (#ECEDEE light, #22252B dark)
 */

export type BadgeCriteriaVariant = "outlined" | "default";

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
  const isOutlined = variant === "outlined";

  return (
    <div
      className={`
        relative inline-flex items-center rounded-[16px] ${className}
        ${isOutlined
          ? "border border-solid border-neutral-500 dark:border-neutral-200 bg-transparent"
          : "bg-neutral-100 dark:bg-neutral-700 border-transparent"}
      `.trim()}
    >
      {/* Content container - 8px padding de chaque côté */}
      <div className="relative flex items-center gap-[10px] px-[8px] py-[8px]">
        {/* Label */}
        <p
          className={`
            text-sm leading-[16px] tracking-[0.14px] whitespace-nowrap
            ${isOutlined
              ? "text-neutral-500 dark:text-neutral-200"
              : "text-neutral-500 dark:text-neutral-200"}
          `}
        >
          {label}
        </p>

        {/* Remove button */}
        {onRemove && (
          <button
            onClick={onRemove}
            className="shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
            aria-label={`Remove ${label}`}
          >
            <CircleX
              size={20}
              className={`
                ${isOutlined
                  ? "text-neutral-500 dark:text-neutral-200"
                  : "text-neutral-500 dark:text-neutral-200"}
              `}
            />
          </button>
        )}
      </div>
    </div>
  );
}
