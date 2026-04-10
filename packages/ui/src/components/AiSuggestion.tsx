"use client";

/**
 * AiSuggestion - Badge indicateur de suggestions IA
 *
 * États:
 * - count = 0 : Aucune suggestion (badge gris neutre avec bordure)
 * - count >= 1 : Nombre de suggestions (badge violet #7b72f9 avec texte contrasté)
 *
 * Dimensions: 34px × 24px
 * Border-radius: 16px
 * Font: Roboto Bold 14px/16px
 */

export interface AiSuggestionProps {
  count: number;
  className?: string;
}

export function AiSuggestion({ count, className = "" }: AiSuggestionProps) {
  const hasCount = count > 0;

  return (
    <div className={`relative h-[24px] min-w-[34px] rounded-[16px] ${className}`.trim()}>
      <div
        className={`
          absolute inset-[0_1.47%] rounded-[16px] border border-solid
          ${hasCount
            ? "border-[#635cc7] bg-[#7b72f9]"
            : "border-neutral-400 dark:border-neutral-600 bg-transparent"}
        `}
      >
        <div className="flex items-center justify-center size-full px-[6px]">
          <p
            className={`
              text-[14px] leading-[16px] tracking-[0.14px] font-bold
              not-italic relative shrink-0 whitespace-nowrap px-[6px] py-[4px]
              ${hasCount
                ? "text-white"
                : "text-neutral-400 dark:text-neutral-600"}
            `}
          >
            {count}
          </p>
        </div>
      </div>
    </div>
  );
}
