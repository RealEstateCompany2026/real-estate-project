"use client";

import { ArrowRight, Lightbulb } from "lucide-react";

/**
 * AiSuggestionBanner - Banner de suggestion contextuelle IA
 * Organisme du design system RealAgent
 *
 * Figma: organisme . ia . suggestion (node 1264:1690)
 *
 * Specs:
 * - Background: surface-neutral-action (neutral-50 / neutral-700 dark)
 * - Rounded: 16px (border-radius/md)
 * - Padding: 20px, gap: 8px
 * - Icon lampe: 24x24, icon-neutral-default
 * - Texte: Body md SemiBold (16px/20px, semibold), text-body
 * - Bouton: surface-branded-default, p-12, rounded-16, gap-8
 *   - Texte: Body md SemiBold, text-branded-on-action
 *   - Icon arrow-right: 20x20
 * - Tokens Layer 3 uniquement, dark mode auto
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
      className={`flex items-center gap-[8px] p-[20px] rounded-[16px] w-full
        bg-surface-neutral-action ${className}`.trim()}
    >
      {/* Icon lampe */}
      <Lightbulb
        size={24}
        className="shrink-0 text-icon-neutral-default"
      />

      {/* Suggestion text */}
      <p
        className="flex-1 min-w-0 text-[16px] font-semibold leading-[20px] tracking-[0.16px] px-[10px] py-[8px]"
        style={{ color: "var(--text-body)" }}
      >
        {suggestion}
      </p>

      {/* Action button */}
      <button
        type="button"
        onClick={onAction}
        className="shrink-0 flex items-center gap-[8px] p-[12px] rounded-[16px] border border-solid
          bg-surface-branded-default border-edge-branded-action
          hover:opacity-90 transition-opacity"
      >
        <span
          className="text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap"
          style={{ color: "var(--text-branded-on-action)" }}
        >
          {actionLabel}
        </span>
        <ArrowRight
          size={20}
          style={{ color: "var(--text-branded-on-action)" }}
        />
      </button>
    </div>
  );
}
