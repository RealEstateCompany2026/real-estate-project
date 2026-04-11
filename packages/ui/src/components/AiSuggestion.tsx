"use client";

/**
 * AiSuggestion - Badge indicateur de suggestions IA
 * Atome du design system RealAgent
 *
 * Figma: atome . ai . suggestion (node 1260:10651)
 *
 * États:
 * - count = 0 : Aucune suggestion → outlined, border-disabled, text-disabled
 * - count >= 1 : Nombre de suggestions → filled branded, text-branded-on-action
 *
 * Specs:
 * - Dimensions: min-w 34px × h 24px
 * - Border-radius: 16px (border-radius/md)
 * - Border: 1px solid
 * - Font: Body sm Bold (14px/16px, tracking 0.14px, bold)
 * - Padding intérieur: px-6 py-4
 * - count>0 bg: surface-branded-default (purple-500 / purple-600 dark)
 * - count>0 border: branded-action-hover (purple-600 / purple-500 dark)
 * - count=0 border: border-disabled (neutral-300 / neutral-600 dark)
 * - count=0 text: text-disabled (neutral-300 / neutral-600 dark)
 * - Tokens Layer 3 uniquement, dark mode auto via .dark class
 */

export interface AiSuggestionProps {
  count: number;
  className?: string;
}

export function AiSuggestion({ count, className = "" }: AiSuggestionProps) {
  const hasCount = count > 0;

  return (
    <div
      className={`inline-flex items-center justify-center h-[24px] min-w-[34px]
        rounded-[16px] border border-solid px-[6px]
        ${hasCount
          ? "bg-[var(--surface-branded-default)] border-[var(--surface-branded-action-hover)]"
          : "bg-transparent border-[var(--border-disabled)]"}
        ${className}`}
    >
      <span
        className="text-[14px] font-bold leading-[16px] tracking-[0.14px] whitespace-nowrap px-[6px] py-[4px]"
        style={{
          color: hasCount
            ? "var(--text-branded-on-action)"
            : "var(--text-disabled)",
        }}
      >
        {count}
      </span>
    </div>
  );
}
