import { Reply } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { MessageBadge } from "../atoms/MessageBadge";
import { MessageStatusDot, MessageStatus } from "../atoms/MessageStatusDot";
import { MessageTimestamp } from "../atoms/MessageTimestamp";
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
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isChat = variant === "chat";

  return (
    <div className={`relative w-full max-w-[420px] ${className}`.trim()}>
      <div className={`content-stretch flex flex-col items-start relative w-full ${isChat ? "gap-[4px]" : "gap-[10px]"}`}>
        {/* Header */}
        <div className={`content-stretch flex gap-[8px] items-center relative shrink-0 w-full ${isChat ? "opacity-70" : ""}`}>
          {/* Badge REÇU (standard only) */}
          {!isChat && showBadge && <MessageBadge label="REÇU" />}

          {/* Status dot */}
          <MessageStatusDot status={status} />

          {/* Timestamp */}
          {isChat ? (
            <p
              className="text-[12px] leading-[14px] tracking-[0.12px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                color: isDark ? "var(--neutral-200)" : "var(--neutral-500)",
              }}
            >
              {time.replace("à ", "")}
            </p>
          ) : (
            <MessageTimestamp date={date} time={time} />
          )}

          {/* Arrow icon (standard only) */}
          {!isChat && showArrow && (
            <div className="relative shrink-0 size-[20px]">
              <Reply
                className="w-[20px] h-[20px]"
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