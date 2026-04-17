"use client";

import { ReactNode } from "react";

/**
 * MessageBubble - Bulle de message
 *
 * Figma: zone contenu dans organisme . message . reçu / envoyé
 *
 * Specs Standard:
 * - Border-radius: border-radius-md (16px)
 * - Padding: 10px
 * - Background: var(--surface-neutral-action) — neutral-50 (light) / neutral-700 (dark)
 * - Border: 1px solid same as bg
 * - Gap: 10px between children
 *
 * Specs Chat:
 * - Border-radius: 12px
 * - Padding: 8px 12px
 * - Background received: var(--surface-neutral-action)
 * - Background sent: var(--surface-branded-subtle)
 * - Box-shadow: 0 1px 0.5px rgba(0,0,0,0.13)
 *
 * Tokens Layer 3, dark mode auto via .dark class.
 */

export interface MessageBubbleProps {
  /** Contenu de la bulle */
  children: ReactNode;
  /** Variante de style */
  variant?: "standard" | "chat";
  /** Alignement (left = received, right = sent) */
  align?: "left" | "right";
  className?: string;
}

export function MessageBubble({
  children,
  variant = "standard",
  align = "left",
  className = "",
}: MessageBubbleProps) {
  if (variant === "chat") {
    return (
      <div
        className={`w-full rounded-[12px] px-[12px] py-[8px] shadow-sm ${align === "right" ? "bg-surface-branded-subtle" : "bg-surface-neutral-action"} ${className}`.trim()}
      >
        <div
          className={`flex flex-col gap-[10px] w-full ${
            align === "right" ? "items-end" : "items-start"
          }`}
        >
          {children}
        </div>
      </div>
    );
  }

  /* Standard Figma style */
  return (
    <div
      className={`w-full rounded-[16px] p-[10px] border border-solid bg-surface-neutral-action border-surface-neutral-action ${className}`.trim()}
    >
      <div
        className={`flex flex-col gap-[10px] w-full ${
          align === "right" ? "items-end" : "items-start"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
