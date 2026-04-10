"use client";

import { Reply } from "lucide-react";
import { MessageBadge } from "./MessageBadge";
import { MessageStatusDot, MessageStatus } from "./MessageStatusDot";
import { MessageTimestamp } from "./MessageTimestamp";
import { MessageBubble } from "./MessageBubble";
import { ReactNode } from "react";

/**
 * MessageReceived - Message reçu complet
 *
 * Message reçu avec header (badge, status, date, icône) et bulle de contenu.
 * Support deux variantes : standard (Figma) et chat (WhatsApp).
 *
 * Variante Standard:
 * - Badge "REÇU" visible
 * - Status dot visible
 * - Timestamp complet
 * - Icône reply
 * - Fond gris #ecedee
 * - Gap: 10px
 *
 * Variante Chat:
 * - Pas de badge
 * - Status dot discret
 * - Timestamp plus petit
 * - Pas d'icône reply
 * - Fond blanc
 * - Gap: 4px
 *
 * Usage:
 * <MessageReceived
 *   variant="standard"
 *   date="le 12 fév 2026"
 *   time="à 12:47"
 *   status="success"
 *   showBadge={true}
 * >
 *   <p>Message content...</p>
 * </MessageReceived>
 */

export interface MessageReceivedProps {
  /**
   * Contenu du message
   */
  children: ReactNode;
  /**
   * Date du message
   */
  date: string;
  /**
   * Heure du message
   */
  time: string;
  /**
   * Statut du message
   */
  status?: MessageStatus;
  /**
   * Variante de style
   */
  variant?: "standard" | "chat";
  /**
   * Afficher le badge REÇU (standard uniquement)
   */
  showBadge?: boolean;
  /**
   * Afficher l'icône reply (standard uniquement)
   */
  showArrow?: boolean;
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
  className = "",
}: MessageReceivedProps) {
  const isChat = variant === "chat";

  return (
    <div className={`relative w-full max-w-[420px] ${className}`.trim()}>
      <div className={`content-stretch flex flex-col items-start relative w-full ${isChat ? "gap-1" : "gap-2.5"}`}>
        {/* Header */}
        <div className={`content-stretch flex gap-2 items-center relative shrink-0 w-full ${isChat ? "opacity-70" : ""}`}>
          {/* Badge REÇU (standard only) */}
          {!isChat && showBadge && <MessageBadge label="REÇU" />}

          {/* Status dot */}
          <MessageStatusDot status={status} />

          {/* Timestamp */}
          {isChat ? (
            <p className="text-xs leading-tight tracking-tighter text-content-disabled">
              {time.replace("à ", "")}
            </p>
          ) : (
            <MessageTimestamp date={date} time={time} />
          )}

          {/* Arrow icon (standard only) */}
          {!isChat && showArrow && (
            <div className="relative shrink-0 size-5">
              <Reply
                className="w-5 h-5"
                strokeWidth={1.5}
                style={{ color: "var(--neutral-600)" }}
              />
            </div>
          )}
        </div>

        {/* Message bubble */}
        <MessageBubble variant={variant} align="left">
          {children}
        </MessageBubble>
      </div>
    </div>
  );
}
