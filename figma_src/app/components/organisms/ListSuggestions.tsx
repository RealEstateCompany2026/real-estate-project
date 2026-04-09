/**
 * ORGANISM: ListSuggestions
 * 
 * Badge AI avec suggestions (0-4)
 * Basé sur OrganismeListSuggestions.tsx du design system Figma
 */

import { AiSuggestion } from "../atoms/AiSuggestion";

export interface ListSuggestionsProps {
  count: number; // 0-4
  theme?: "light" | "dark";
}

export function ListSuggestions({ count, theme = "light" }: ListSuggestionsProps) {
  return (
    <div className="relative size-full flex items-center justify-center">
      <AiSuggestion count={count} theme={theme} />
    </div>
  );
}