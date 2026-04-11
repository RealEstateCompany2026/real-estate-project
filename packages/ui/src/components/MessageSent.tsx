"use client";

import { Paperclip, ArrowRightCircle } from "lucide-react";
import { MessageBadge } from "./MessageBadge";
import { MessageStatusDot, MessageStatus } from "./MessageStatusDot";
import { MessageTimestamp } from "./MessageTimestamp";
import { MessageBubble } from "./MessageBubble";
import { ReactNode } from "react";

/**
 * MessageSent - Message envoyé complet
 *
 * Figma: organisme . message . envoyé
 *
 * Structure Figma (miroir de reçu, aligné à droite):
 * - Container: flex-col, gap-10px, items-end, w-420px, ml-auto
 * - Header: flex, gap-8px, items-center, justify-end
 *   - Arrow circle right icon: 20×20px, text-caption
 *   - Date + time: Regular 14px/16px, text-caption
 *   - Status dot: 18×18px
 *   - Badge "ENVOYÉ": border-neutral-default, text-caption
 * - Bubble: bg surface-neutral-action, border same, rounded-16, p-10
 *   - Text: Body md Regular 16px/22px, text-body
 *   - Attachment button (optional)
 *
 * Tokens Layer 3, dark mode auto via .dark class.
 */

export interface MessageSentProps {
  /** Contenu texte du message */
  children: ReactNode;
  /** Date du message */
  date: string;
  /** Heure du message */
  time: string;
  /** Statut du message */
  status?: MessageStatus;
  /** Variante de style */
  variant?: "standard" | "chat";
  /** Afficher le badge ENVOYÉ (standard uniquement) */
  showBadge?: boolean;
  /** Afficher l'icône arrow (standard uniquement) */
  showArrow?: boolean;
  /** Pièces jointes à afficher */
  attachments?: { label: string; onClick?: () => void }[];
  className?: string;
}

export function MessageSent({
  children,
  date,
  time,
  status = "none",
  variant = "standard",
  showBadge = true,
  showArrow = true,
  attachments = [],
  className = "",
}: MessageSentProps) {
  const isChat = variant === "chat";

  return (
    <div className={`w-full max-w-[420px] ml-auto ${className}`.trim()}>
      <div
        className={`flex flex-col items-end w-full ${
          isChat ? "gap-[4px]" : "gap-[10px]"
        }`}
      >
        {/* Header */}
        <div className="flex gap-[8px] items-center justify-end w-full">
          {/* Arrow circle right icon (standard only) */}
          {!isChat && showArrow && (
            <ArrowRightCircle
              size={20}
              strokeWidth={1.5}
              style={{ color: "var(--text-caption)" }}
              className="shrink-0"
            />
          )}

          {/* Timestamp */}
          {isChat ? (
            <span
              className="text-[12px] leading-tight tracking-tighter"
              style={{ color: "var(--text-caption)" }}
            >
              {time.replace("à ", "")}
            </span>
          ) : (
            <MessageTimestamp date={date} time={time} />
          )}

          {/* Status dot */}
          <MessageStatusDot status={status} />

          {/* Badge ENVOYÉ (standard only) */}
          {!isChat && showBadge && <MessageBadge label="ENVOYÉ" />}
        </div>

        {/* Message bubble */}
        <MessageBubble variant={variant} align="right">
          {/* Text content */}
          <div className="px-[10px] py-[8px] w-full">
            <div
              className="text-[16px] font-normal leading-[22px] tracking-[0.16px]"
              style={{ color: "var(--text-body)" }}
            >
              {children}
            </div>
          </div>

          {/* Attachment buttons */}
          {attachments.map((attachment, index) => (
            <button
              key={index}
              onClick={attachment.onClick}
              className="flex items-center gap-[8px] p-[12px] rounded-[16px]"
              style={{
                backgroundColor: "var(--surface-neutral-default)",
              }}
            >
              <Paperclip
                size={20}
                style={{ color: "var(--text-neutral-action)" }}
              />
              <span
                className="text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap"
                style={{ color: "var(--text-neutral-action)" }}
              >
                {attachment.label}
              </span>
            </button>
          ))}
        </MessageBubble>
      </div>
    </div>
  );
}
