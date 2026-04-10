"use client";

import { ReactNode } from "react";

/**
 * MessageBubble - Bulle de message
 *
 * Bulle de contenu de message avec support de deux variantes :
 * - standard : style Figma (fond gris #ecedee)
 * - chat : style WhatsApp (fond vert #DCF8C6 pour sent, gris #ecedee pour received)
 *
 * Specs Standard:
 * - Border-radius: 16px
 * - Padding: 10px
 * - Background: #ecedee (light) / #22252b (dark)
 * - Border: 1px solid (même couleur que bg)
 *
 * Specs Chat:
 * - Border-radius: 12px
 * - Padding: 8px 12px
 * - Background sent: #DCF8C6 (light) / #056162 (dark)
 * - Background received: #ecedee (light) / #262D31 (dark)
 * - Border: none
 * - Box-shadow: 0 1px 0.5px rgba(0,0,0,0.13)
 */

export interface MessageBubbleProps {
  /**
   * Contenu de la bulle
   */
  children: ReactNode;
  /**
   * Variante de style
   */
  variant?: "standard" | "chat";
  /**
   * Alignement (left = received, right = sent)
   */
  align?: "left" | "right";
  className?: string;
}

export function MessageBubble({
  children,
  variant = "standard",
  align = "left",
  className = "",
}: MessageBubbleProps) {
  const isSent = align === "right";

  const getClasses = () => {
    if (variant === "chat") {
      // WhatsApp style
      return `
        rounded-[12px] p-[8px_12px]
        ${isSent ? "bg-green-100 dark:bg-green-800" : "bg-neutral-100 dark:bg-neutral-800"}
        shadow-sm
      `;
    }

    // Standard Figma style
    return `
      rounded-[16px] p-[10px]
      bg-neutral-100 dark:bg-neutral-800
      border border-neutral-100 dark:border-neutral-800
    `;
  };

  return (
    <div className={`relative shrink-0 w-full ${getClasses()} ${className}`.trim()}>
      <div
        className={`flex flex-col gap-[10px] items-${align === "right" ? "end" : "start"} relative w-full`}
      >
        {children}
      </div>
    </div>
  );
}
