"use client";

import { AiSuggestion } from "./AiSuggestion";

/**
 * ListSuggestions - Badge AI avec suggestions
 * Organism du design system RealAgent
 *
 * Wrapper contenant un badge AI avec compteur de suggestions (0-4)
 */

export interface ListSuggestionsProps {
  /**
   * Nombre de suggestions (0-4)
   */
  count: number;
  /**
   * Classe CSS personnalisée
   */
  className?: string;
}

export function ListSuggestions({ count, className = "" }: ListSuggestionsProps) {
  return (
    <div className={`relative size-full flex items-center justify-center ${className}`.trim()}>
      <AiSuggestion count={count} />
    </div>
  );
}
