import { useState } from "react";
import { Paperclip, Plus, Send } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { Button } from "../atoms/Button";

/**
 * MessageComposer - Zone de composition de message
 * 
 * Formulaire complet pour composer et envoyer un message avec pièce jointe.
 * Support deux variantes : standard (Figma) et chat (WhatsApp).
 * 
 * Variante Standard (Figma):
 * - Titre "Votre message"
 * - Textarea dans bulle blanche
 * - Bouton "Pièce jointe" outlined
 * - Lien "Ajouter une pièce jointe"
 * - Bouton "Envoyer le message" branded
 * - Border-radius: 16px
 * - Padding: 20px
 * 
 * Variante Chat (WhatsApp):
 * - Pas de titre
 * - Input inline avec bulle
 * - Icône paperclip intégrée
 * - Bouton send circulaire
 * - Border-radius: 24px
 * - Padding: 8px
 * - Plus compact
 * 
 * Usage:
 * <MessageComposer
 *   variant="standard"
 *   onSend={(message, attachments) => console.log(message)}
 *   placeholder="Votre message..."
 * />
 */

export interface MessageComposerProps {
  /**
   * Callback appelé lors de l'envoi
   */
  onSend?: (message: string, attachments: File[]) => void;
  /**
   * Placeholder du champ
   */
  placeholder?: string;
  /**
   * Variante de style
   */
  variant?: "standard" | "chat";
  /**
   * Message initial
   */
  defaultMessage?: string;
  className?: string;
}

export function MessageComposer({
  onSend,
  placeholder = "Votre message...",
  variant = "standard",
  defaultMessage = "",
  className = "",
}: MessageComposerProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [message, setMessage] = useState(defaultMessage);
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleSend = () => {
    if (message.trim() || attachments.length > 0) {
      onSend?.(message, attachments);
      setMessage("");
      setAttachments([]);
    }
  };

  const handleAttachment = () => {
    // Simuler l'ajout d'une pièce jointe
    console.log("Add attachment");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && variant === "chat") {
      e.preventDefault();
      handleSend();
    }
  };

  if (variant === "chat") {
    // WhatsApp style
    const bgColor = isDark ? "#262D31" : "#F0F2F5";
    const inputBg = isDark ? "#2A3942" : "white";
    const textColor = isDark ? "#d0d1d4" : "#444955";
    const iconColor = isDark ? "#8696A0" : "#54656F";

    return (
      <div className={`relative w-full ${className}`.trim()}>
        <div
          className="flex items-center gap-[8px] p-[8px] rounded-[24px]"
          style={{ backgroundColor: bgColor }}
        >
          {/* Attachment button */}
          <button
            onClick={handleAttachment}
            className="relative shrink-0 size-[40px] rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
          >
            <Paperclip className="size-[20px]" style={{ color: iconColor }} />
          </button>

          {/* Input */}
          <div
            className="flex-1 rounded-[20px] px-[16px] py-[10px]"
            style={{ backgroundColor: inputBg }}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              className="w-full bg-transparent border-none outline-none text-[15px] leading-[20px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                color: textColor,
              }}
            />
          </div>

          {/* Send button */}
          <button
            onClick={handleSend}
            disabled={!message.trim() && attachments.length === 0}
            className="relative shrink-0 size-[40px] rounded-full flex items-center justify-center transition-colors disabled:opacity-50"
            style={{
              backgroundColor: message.trim() ? "var(--branded-500)" : "transparent",
            }}
          >
            <Send
              className="size-[20px]"
              style={{ color: message.trim() ? "white" : iconColor }}
            />
          </button>
        </div>
      </div>
    );
  }

  // Standard Figma style
  const bgColor = isDark ? "#111215" : "white";
  const borderColor = isDark ? "#333740" : "#ecedee";
  const textColor = isDark ? "#d0d1d4" : "#444955";
  const titleColor = isDark ? "#dadbdd" : "#333740";

  return (
    <div className={`relative w-full max-w-[550px] ${className}`.trim()}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center relative w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            {/* Title */}
            <div className="relative shrink-0">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-[10px] relative">
                  <div
                    className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[20px] tracking-[0.2px] whitespace-nowrap"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                      color: titleColor,
                    }}
                  >
                    <p className="leading-[24px]">Votre message</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full">
              {/* Message box */}
              <div
                className="relative rounded-[16px] shrink-0 w-full"
                style={{
                  backgroundColor: bgColor,
                  border: `1px solid ${borderColor}`,
                }}
              >
                <div className="content-stretch flex flex-col gap-[8px] items-start p-[20px] relative w-full">
                  {/* Textarea */}
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[10px] py-[8px] relative w-full">
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={placeholder}
                          rows={4}
                          className="w-full bg-transparent border-none outline-none resize-none leading-[20px]"
                          style={{
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "16px",
                            fontWeight: 400,
                            letterSpacing: "0.16px",
                            color: textColor,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Attachment button (if has attachments) */}
                  {attachments.length > 0 && (
                    <div
                      className="relative rounded-[16px] shrink-0"
                      style={{
                        backgroundColor: bgColor,
                        border: `1px solid ${textColor}`,
                      }}
                    >
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative">
                          <Paperclip className="size-[20px]" style={{ color: textColor }} />
                          <p
                            className="leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap"
                            style={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: 600,
                              color: textColor,
                            }}
                          >
                            Pièce jointe
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Add attachment link */}
              <button
                onClick={handleAttachment}
                className="relative rounded-[16px] shrink-0 flex gap-[8px] items-center px-[12px] py-[12px] hover:bg-black/5 transition-colors"
              >
                <p
                  className="leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.16px] whitespace-nowrap"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 600,
                    color: textColor,
                  }}
                >
                  Ajouter une pièce jointe
                </p>
                <Plus className="size-[20px]" style={{ color: textColor }} />
              </button>
            </div>
          </div>

          {/* Send button */}
          <Button
            label="Envoyer le message"
            onClick={handleSend}
            disabled={!message.trim() && attachments.length === 0}
            rightIcon={Send}
            variant="filled"
            size="medium"
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
}