"use client";

import { ArrowRight, Lightbulb } from "lucide-react";

/**
 * AiSuggestionBanner - Banner de suggestion contextuelle IA
 *
 * S'affiche à différents endroits dans le CRM sous forme de banner
 * pour indiquer les suggestions d'actions détectées par l'IA
 *
 * Structure:
 * - Icône lampe (24×24px)
 * - Texte de suggestion (font-bold)
 * - Bouton CTA avec icône arrow-right
 *
 * Dimensions: width 1191px, padding 20px, gap 8px
 * Border-radius: 16px
 * Background: bg-surface-neutral-default (light) / dark:bg-surface-neutral-default (dark)
 *
 * Usage:
 * <AiSuggestionBanner
 *   suggestion="Bonjour, vous devriez contacter M. Dupont pour finaliser..."
 *   actionLabel="Programmer"
 *   onAction={() => {}}
 * />
 */

export interface AiSuggestionBannerProps {
  suggestion: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function AiSuggestionBanner({
  suggestion,
  actionLabel = "Programmer",
  onAction,
  className = "",
}: AiSuggestionBannerProps) {
  return (
    <div
      className={`relative rounded-[16px] w-[1191px] bg-surface-neutral-default dark:bg-surface-neutral-default ${className}`.trim()}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[20px] relative w-full">
          {/* Lightbulb icon */}
          <div className="relative shrink-0 size-[24px]">
            <Lightbulb
              size={24}
              className="text-icon-neutral-default"
            />
          </div>

          {/* Suggestion text */}
          <div className="flex-[1_0_0] min-h-px min-w-px relative">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">
                <p className="flex-[1_0_0] min-h-px min-w-px text-[16px] leading-[20px] tracking-[0.16px] font-bold not-italic relative text-content-body">
                  {suggestion}
                </p>
              </div>
            </div>
          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={onAction}
            className="relative rounded-[16px] shrink-0 border border-solid bg-surface-branded-default dark:bg-surface-branded-default border-surface-branded-default dark:border-surface-branded-default hover:opacity-90 transition-opacity"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
                <p className="text-[16px] leading-[20px] tracking-[0.16px] font-semibold not-italic relative shrink-0 whitespace-nowrap text-content-on-branded-default dark:text-content-on-branded-default">
                  {actionLabel}
                </p>
                <ArrowRight
                  size={20}
                  className="text-content-on-branded-default dark:text-content-on-branded-default"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
