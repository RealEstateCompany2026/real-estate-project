"use client";

import { useState } from "react";
import { Paperclip, Plus, Send } from "lucide-react";
import { Button } from "./Button";

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
    return (
      <div className={`relative w-full ${className}`.trim()}>
        <div
          className="flex items-center gap-2 p-2 rounded-3xl bg-surface-neutral-default"
        >
          {/* Attachment button */}
          <button
            onClick={handleAttachment}
            className="relative shrink-0 size-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors"
          >
            <Paperclip className="size-5 text-icon-neutral-default" />
          </button>

          {/* Input */}
          <div
            className="flex-1 rounded-full px-4 py-2 bg-surface-neutral-default"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              className="w-full bg-transparent border-none outline-none text-base leading-5 text-content-body placeholder-content-placeholder"
            />
          </div>

          {/* Send button */}
          <button
            onClick={handleSend}
            disabled={!message.trim() && attachments.length === 0}
            className="relative shrink-0 size-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-50"
            style={{
              backgroundColor: message.trim() ? "var(--branded-500)" : "transparent",
            }}
          >
            <Send
              className="size-5"
              style={{ color: message.trim() ? "white" : "var(--icon-neutral-default)" }}
            />
          </button>
        </div>
      </div>
    );
  }

  // Standard Figma style
  return (
    <div className={`relative w-full max-w-[550px] ${className}`.trim()}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-3 items-center relative w-full">
          <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full">
            {/* Title */}
            <div className="relative shrink-0">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-2.5 relative">
                  <h2 className="text-xl font-bold tracking-tight text-content-primary">
                    Votre message
                  </h2>
                </div>
              </div>
            </div>

            <div className="content-stretch flex flex-col gap-2 items-end relative shrink-0 w-full">
              {/* Message box */}
              <div
                className="relative rounded-2xl shrink-0 w-full border border-edge-default bg-surface-neutral-default"
              >
                <div className="content-stretch flex flex-col gap-2 items-start p-5 relative w-full">
                  {/* Textarea */}
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-2.5 py-2 relative w-full">
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={placeholder}
                          rows={4}
                          className="w-full bg-transparent border-none outline-none resize-none text-base leading-5 text-content-body placeholder-content-placeholder"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Attachment button (if has attachments) */}
                  {attachments.length > 0 && (
                    <div
                      className="relative rounded-2xl shrink-0 border border-edge-default p-3 flex gap-2 items-center justify-center bg-surface-neutral-default"
                    >
                      <Paperclip className="size-5 text-content-body" />
                      <p className="text-base font-semibold text-content-body">
                        Pièce jointe
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Add attachment link */}
              <button
                onClick={handleAttachment}
                className="relative rounded-2xl shrink-0 flex gap-2 items-center px-3 py-3 hover:bg-black/5 transition-colors"
              >
                <p className="text-base font-semibold text-content-body">
                  Ajouter une pièce jointe
                </p>
                <Plus className="size-5 text-content-body" />
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
