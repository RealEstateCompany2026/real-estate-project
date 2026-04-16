"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "./Button";
import { cn } from "../lib/utils";

/**
 * ButtonPagination - Composant de navigation Previous/Next
 *
 * Variantes :
 * - "default"  : 2 IconButton variant="default" (bg neutral, border neutral)
 * - "outlined" : 2 IconButton variant="outline" (bg neutral, border visible)
 *
 * Les deux boutons sont symétriques au repos.
 * Au hover, seul le bouton survolé change d'état (comportement natif IconButton).
 */

export interface ButtonPaginationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  variant?: "default" | "outlined";
  className?: string;
}

const iconButtonVariantMap = {
  default: "default",
  outlined: "outline",
} as const;

export function ButtonPagination({
  onPrevious,
  onNext,
  canGoPrevious = true,
  canGoNext = true,
  variant = "default",
  className,
}: ButtonPaginationProps) {
  const ibVariant = iconButtonVariantMap[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-[20px] p-1",
        className
      )}
      role="navigation"
      aria-label="Pagination"
    >
      <IconButton
        variant={ibVariant}
        icon={<ChevronLeft className="size-5" />}
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Page précédente"
      />
      <IconButton
        variant={ibVariant}
        icon={<ChevronRight className="size-5" />}
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Page suivante"
      />
    </div>
  );
}
