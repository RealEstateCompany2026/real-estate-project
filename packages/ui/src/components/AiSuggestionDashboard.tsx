"use client";

import { ArrowRight } from "lucide-react";
import { AiTitleWithBadge } from "./AiTitleWithBadge";

/**
 * AiSuggestionDashboard - Dashboard de résumé des suggestions IA
 *
 * Affiche en tête de page un résumé des suggestions d'actions détectées par l'IA
 * Catégories: Conseil, Service, Administratif, Transaction
 *
 * Structure:
 * - 4 catégories avec leurs badges de comptage
 * - Bouton CTA "Voir les suggestions" avec icône arrow-right
 *
 * Dimensions: width 100% (adaptatif), padding 28px 20px
 * Border-radius: 16px
 * Background: bg-surface-neutral-default (light) / dark:bg-surface-neutral-default (dark)
 *
 * Usage:
 * <AiSuggestionDashboard
 *   conseil={3}
 *   service={0}
 *   administratif={2}
 *   transaction={1}
 *   onViewAll={() => navigate('/suggestions')}
 * />
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
      className={`relative rounded-[16px] w-full bg-surface-neutral-default dark:bg-surface-neutral-default ${className}`.trim()}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[28px] relative w-full">
          {/* Categories section */}
          <div className="content-stretch flex gap-[46px] items-center relative shrink-0">
            <AiTitleWithBadge title="Conseil" count={conseil} />
            <AiTitleWithBadge title="Service" count={service} />
            <AiTitleWithBadge title="Administratif" count={administratif} />
            <AiTitleWithBadge title="Transaction" count={transaction} />
          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={onViewAll}
            className="relative rounded-[16px] shrink-0 border border-solid bg-surface-branded-default dark:bg-surface-branded-default border-surface-branded-default dark:border-surface-branded-default hover:opacity-90 transition-opacity"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
                <p className="text-[16px] leading-[20px] tracking-[0.16px] font-semibold not-italic relative shrink-0 whitespace-nowrap text-content-branded-on-action">
                  Voir les suggestions
                </p>
                <ArrowRight
                  size={20}
                  className="text-content-branded-on-action"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
