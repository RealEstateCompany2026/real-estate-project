"use client";

import * as React from "react";
import { cn } from "../lib/utils";

/**
 * ButtonMultiLabel — Multi-section action button
 *
 * Visually resembles a Button `outline` from the DS, but split into
 * 2-5 independent clickable sections. Each section has its own hover,
 * click handler, and disabled state.
 *
 * Tokens (from Button outline variant):
 * - Border: border-edge-neutral-default, hover → border-edge-neutral-action
 * - Background: bg-surface-neutral-default (unchanged on hover)
 * - Text: text-content-body
 * - Font: Roboto SemiBold 16px/20px tracking 0.16px
 * - Padding: p-3
 * - Border-radius: rounded-lg (16px) on outer corners
 */

export interface ButtonMultiLabelSection {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface ButtonMultiLabelProps {
  sections: ButtonMultiLabelSection[];
  className?: string;
  fullWidth?: boolean;
}

export function ButtonMultiLabel({
  sections,
  className,
  fullWidth = false,
}: ButtonMultiLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex",
        fullWidth && "w-full",
        className,
      )}
      role="group"
      aria-label="Multi-action button"
    >
      {sections.map((section, index) => {
        const isFirst = index === 0;
        const isLast = index === sections.length - 1;

        return (
          <button
            key={`${section.label}-${index}`}
            type="button"
            onClick={section.onClick}
            disabled={section.disabled}
            className={cn(
              // Base styles (matching Button outline variant)
              "inline-flex items-center justify-center gap-2",
              "p-3 text-base font-semibold tracking-[0.16px]",
              "transition-colors",
              "border border-edge-neutral-default",
              "bg-surface-neutral-default text-content-body",
              // Hover (only border changes, like outline variant)
              "hover:border-edge-neutral-action",
              // Focus
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ring-offset-surface-page",
              // Disabled
              "disabled:pointer-events-none disabled:bg-surface-disabled disabled:text-content-disabled disabled:border-edge-disabled",
              // Border-radius: only on outer edges
              isFirst && "rounded-l-lg",
              isLast && "rounded-r-lg",
              // Collapse internal borders to avoid double-border
              !isFirst && "-ml-px",
              // Full width distribution
              fullWidth && "flex-1",
            )}
          >
            {section.icon && (
              <span className="shrink-0 [&>svg]:size-5">{section.icon}</span>
            )}
            <span className="whitespace-nowrap">{section.label}</span>
          </button>
        );
      })}
    </div>
  );
}
