import { Send, Check } from "lucide-react";

/**
 * SendingIconButton - Bouton d'envoi avec feedback visuel (46×46px)
 * Based on Figma SendingIconButton variants
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
 * 
 * Usage:
 * const [status, setStatus] = useState<SendingStatus>("idle");
 * 
 * <SendingIconButton 
 *   status={status} 
 *   onClick={() => {
 *     setStatus("sending");
 *     // API call...
 *     setStatus("sent");
 *   }}
 * />
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
          background: "var(--success-500)", // Green (success)
          borderColor: "var(--success-500)",
          icon: <Check className="w-[20px] h-[20px]" />,
          iconColor: "#ffffff",
        };
      case "sending":
        return {
          background: "#635cc7", // Purple hover (processing)
          borderColor: "#635cc7",
          icon: <Send className="w-[20px] h-[20px]" />,
          iconColor: "#ffffff",
        };
      case "idle":
      default:
        return {
          background: "#7b72f9", // Purple primary (ready to send)
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
        relative rounded-[16px] transition-all
        ${isDisabled ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:opacity-90 active:scale-[0.98]"}
        ${className}
      `.trim()}
      style={{
        background: styles.background,
        width: "46px",
        height: "46px",
      }}
    >
      {/* Border overlay (Figma structure) */}
      <div
        aria-hidden="true"
        className="absolute inset-[-0.5px] pointer-events-none rounded-[16.5px] border border-solid"
        style={{ borderColor: styles.borderColor }}
      />

      {/* Content - exact Figma structure */}
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <div
            className="relative shrink-0 transition-all"
            style={{
              width: "20px",
              height: "20px",
              color: styles.iconColor,
            }}
          >
            {styles.icon}
          </div>
        </div>
      </div>
    </button>
  );
}
