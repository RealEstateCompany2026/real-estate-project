"use client";

import { ArrowRight } from "lucide-react";
import { AiTitleWithBadge } from "./AiTitleWithBadge";

/**
 * AiSuggestionDashboard - Dashboard de résumé des suggestions IA
 * Organisme du design system RealAgent
 *
 * Figma: ia . dashboard . suggestions (node 1264:1689)
 *
 * Specs:
 * - Background: surface-neutral-action (neutral-50 / neutral-700 dark)
 * - Rounded: 16px, padding: px-20 py-28
 * - Layout: flex, items-center, justify-between
 * - 4 catégories (AiTitleWithBadge), gap: 36px
 * - Bouton "Voir les suggestions": surface-branded-default, p-12, rounded-16
 * - Tokens Layer 3 uniquement, dark mode auto
 */

export interface AiSuggestionDashboardProps {
  conseil?: number;
  service?: number;
  administratif?: number;
  transaction?: number;
  onViewAll?: () => void;
  className?: string;
}

export function AiSuggestionDashboard({
  conseil = 0,
  service = 0,
  administratif = 0,
  transaction = 0,
  onViewAll,
  className = "",
}: AiSuggestionDashboardProps) {
  return (
    <div
      className={`flex items-center justify-between px-[20px] py-[28px] rounded-[16px] w-full
        bg-surface-neutral-action ${className}`.trim()}
    >
      {/* Categories */}
      <div className="flex items-center gap-[36px] shrink-0">
        <AiTitleWithBadge title="Conseil" count={conseil} />
        <AiTitleWithBadge title="Service" count={service} />
        <AiTitleWithBadge title="Administratif" count={administratif} />
        <AiTitleWithBadge title="Transaction" count={transaction} />
      </div>

      {/* Action button */}
      <button
        type="button"
        onClick={onViewAll}
        className="shrink-0 flex items-center gap-[8px] p-[12px] rounded-[16px] border border-solid
          bg-surface-branded-default border-edge-branded-action
          hover:opacity-90 transition-opacity"
      >
        <span
          className="text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap"
          style={{ color: "var(--text-branded-on-action)" }}
        >
          Voir les suggestions
        </span>
        <ArrowRight
          size={20}
          style={{ color: "var(--text-branded-on-action)" }}
        />
      </button>
    </div>
  );
}
