"use client";

import { Paperclip, ArrowRightCircle } from "lucide-react";
import { MessageBadge } from "./MessageBadge";
import { MessageStatusDot, MessageStatus } from "./MessageStatusDot";
import { MessageTimestamp } from "./MessageTimestamp";
import { MessageBubble } from "./MessageBubble";
import { ReactNode } from "react";

/**
 * MessageReceived - Message reçu complet
 *
 * Figma: organisme . message . reçu (node 1063:22690)
 *
 * Structure Figma:
 * - Container: flex-col, gap-10px, items-start, w-420px
 * - Header: flex, gap-8px, items-center
 *   - Badge "REÇU": border-neutral-default, text-caption, Bold 12px/14px
 *   - Status dot: 18×18px
 *   - Date + time: Regular 14px/16px, text-caption, px-10 py-8
 *   - Arrow circle right icon: 20×20px, text-caption
 * - Bubble: bg surface-neutral-action, border same, rounded-16, p-10
 *   - Text: Body md Regular 16px/22px, text-body
 *   - Attachment button (optional): bg surface-neutral-default, rounded-16, p-12
 *
 * Tokens Layer 3, dark mode auto via .dark class.
 */

export interface MessageReceivedProps {
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
  /** Afficher le badge REÇU (standard uniquement) */
  showBadge?: boolean;
  /** Afficher l'icône arrow (standard uniquement) */
  showArrow?: boolean;
  /** Pièces jointes à afficher */
  attachments?: { label: string; onClick?: () => void }[];
  className?: string;
}

export function MessageReceived({
  children,
  date,
  time,
  status = "none",
  variant = "standard",
  showBadge = true,
  showArrow = true,
  attachments = [],
  className = "",
}: MessageReceivedProps) {
  const isChat = variant === "chat";

  return (
    <div className={`w-full max-w-[420px] ${className}`.trim()}>
      <div
        className={`flex flex-col items-start w-full ${
          isChat ? "gap-[4px]" : "gap-[10px]"
        }`}
      >
        {/* Header */}
        <div className="flex gap-[8px] items-center w-full">
          {/* Badge REÇU (standard only) */}
          {!isChat && showBadge && <MessageBadge label="REÇU" />}

          {/* Status dot */}
          <MessageStatusDot status={status} />

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

          {/* Arrow circle right icon (standard only) */}
          {!isChat && showArrow && (
            <ArrowRightCircle
              size={20}
              strokeWidth={1.5}
              style={{ color: "var(--text-caption)" }}
              className="shrink-0"
            />
          )}
        </div>

        {/* Message bubble */}
        <MessageBubble variant={variant} align="left">
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
