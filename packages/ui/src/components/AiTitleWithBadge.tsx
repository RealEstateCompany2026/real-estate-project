"use client";

import { AiSuggestion } from "./AiSuggestion";

/**
 * AiTitleWithBadge - Titre avec badge de suggestions IA
 * Atome du design system RealAgent
 *
 * Figma: atome . titre + icon . suggestion
 *
 * Specs:
 * - Layout: flex, items-center, gap-8px
 * - Titre: Body md SemiBold (16px/20px), text-body, px-10 py-8
 * - Badge: AiSuggestion atom
 * - Tokens Layer 3, dark mode auto
 */

export interface AiTitleWithBadgeProps {
  title: string;
  count: number;
  className?: string;
}

export function AiTitleWithBadge({
  title,
  count,
  className = "",
}: AiTitleWithBadgeProps) {
  return (
    <div className={`flex items-center gap-[8px] shrink-0 ${className}`.trim()}>
      <span
        className="text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap px-[10px] py-[8px]"
        style={{ color: "var(--text-body)" }}
      >
        {title}
      </span>
      <AiSuggestion count={count} />
    </div>
  );
}
