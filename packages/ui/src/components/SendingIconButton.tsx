"use client";

import { Send, Check } from "lucide-react";

/**
 * SendingIconButton - Bouton d'envoi avec feedback visuel (46×46px)
 *
 * Structure:
 * - Size: 46×46px (fixed)
 * - Padding: 12px
 * - Border-radius: 16px
 * - Icon: 20×20px
 *
 * States:
 * - idle: Violet (#7b72f9) avec icône Send
 * - sending: Violet (#635cc7) avec icône Send (disabled)
 * - sent: Vert (#0da500) avec icône Check
 */

export type SendingStatus = "idle" | "sending" | "sent";

export interface SendingIconButtonProps {
  status?: SendingStatus;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  title?: string;
}

export function SendingIconButton({
  status = "idle",
  onClick,
  disabled = false,
  className = "",
  title,
}: SendingIconButtonProps) {
  const isSent = status === "sent";
  const isSending = status === "sending";
  const isDisabled = disabled || isSending;

  const getStatusStyles = () => {
    switch (status) {
      case "sent":
        return {
          background: "bg-[#0da500]",
          borderColor: "#0da500",
          icon: <Check className="w-[20px] h-[20px]" />,
          iconColor: "#ffffff",
        };
      case "sending":
        return {
          background: "bg-[#635cc7]",
          borderColor: "#635cc7",
          icon: <Send className="w-[20px] h-[20px]" />,
          iconColor: "#ffffff",
        };
      case "idle":
      default:
        return {
          background: "bg-[#7b72f9]",
          borderColor: "#7b72f9",
          icon: <Send className="w-[20px] h-[20px]" />,
          iconColor: "#ffffff",
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      title={title || (isSent ? "Envoyé" : isSending ? "Envoi en cours..." : "Envoyer")}
      className={`
        sending-icon-button-component
        relative rounded-[16px] transition-all inline-flex
        w-[46px] h-[46px] p-[12px]
        border border-solid
        ${styles.background}
        ${isDisabled ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:opacity-90 active:scale-[0.98]"}
        ${className}
      `.trim()}
      style={{
        borderColor: styles.borderColor,
      }}
    >
      {/* Content */}
      <div className="flex flex-row items-center justify-center size-full">
        <div className="relative shrink-0 w-[20px] h-[20px] transition-all text-white">
          {styles.icon}
        </div>
      </div>
    </button>
  );
}
