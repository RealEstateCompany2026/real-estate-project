"use client";

import React, { ReactNode, useState } from "react";

/**
 * Tooltip - Infobulle au survol
 *
 * Specs Figma:
 * - Background: neutral-700 (light) / neutral-50 (dark)
 * - Text: white (light) / neutral-600 (dark)
 * - Font: Roboto Regular 14px/18px
 * - Padding: 6px 12px
 * - Border-radius: 8px
 * - Max-width: 300px
 * - Animation: fade in/out
 *
 * Implémentation pure CSS (pas de dépendance Radix).
 */

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  delayDuration?: number;
  className?: string;
}

const positionClasses: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export function Tooltip({
  content,
  children,
  side = "top",
  delayDuration = 200,
  className = "",
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    const id = setTimeout(() => setVisible(true), delayDuration);
    setTimeoutId(id);
  };

  const hide = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setVisible(false);
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <div
          className={`absolute z-50 ${positionClasses[side]} pointer-events-none ${className}`.trim()}
          role="tooltip"
        >
          <div className="bg-neutral-700 dark:bg-neutral-50 text-white dark:text-neutral-600 text-sm leading-[18px] px-3 py-1.5 rounded-lg max-w-[300px] whitespace-normal shadow-md">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}
