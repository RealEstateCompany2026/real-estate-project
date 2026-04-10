"use client";

import { useState } from "react";
import { Paperclip, Send, X } from "lucide-react";
import { Button } from "./Button";

/**
 * MessageEdit - Éditeur de message
 *
 * Éditeur de texte pour composer des messages.
 * Support deux variantes : standard (Figma) et chat (WhatsApp).
 *
 * NOTE: This component uses a textarea for simplicity. ReactQuill can be added later
 * by importing dynamically: const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
 *
 * Variante Standard (Figma):
 * - Titre "Votre message"
 * - Textarea simple pour saisie de texte
 * - Bouton "Pièce jointe" outlined
 * - Lien "Ajouter une pièce jointe"
 * - Bouton "Envoyer le message" branded
 * - Border-radius: 16px
 * - Padding: 20px
 *
 * Variante Chat (WhatsApp):
 * - Textarea inline avec bulle
 * - Icône paperclip intégrée
 * - Bouton send circulaire
 * - Border-radius: 24px
 * - Padding: 8px
 * - Plus compact
 *
 * Usage:
 * <MessageEdit
 *   variant="standard"
 *   onSend={(html, plainText, attachments) => console.log(html)}
 *   placeholder="Votre message..."
 * />
 */

export interface MessageEditProps {
  /**
   * Callback appelé lors de l'envoi
   */
  onSend?: (html: string, plainText: string, attachments: File[]) => void;
  /**
   * Callback appelé lors de l'annulation (mode édition)
   */
  onCancel?: () => void;
  /**
   * Placeholder du champ
   */
  placeholder?: string;
  /**
   * Variante de style
   */
  variant?: "standard" | "chat";
  /**
   * Contenu initial
   */
  defaultValue?: string;
  /**
   * Mode édition (affiche le bouton Annuler)
   */
  isEditing?: boolean;
  className?: string;
}

export function MessageEdit({
  onSend,
  onCancel,
  placeholder = "Votre message...",
  variant = "standard",
  defaultValue = "",
  isEditing = false,
  className = "",
}: MessageEditProps) {
  const [content, setContent] = useState(defaultValue);
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleSend = () => {
    if (content.trim() || attachments.length > 0) {
      // For simple textarea, HTML and plainText are the same
      onSend?.(content, content, attachments);
      setContent("");
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
          className="flex items-start gap-2 p-2 rounded-3xl bg-surface-neutral-default dark:bg-surface-neutral-dark"
        >
          {/* Attachment button */}
          <button
            onClick={handleAttachment}
            className="relative shrink-0 size-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors mt-1"
          >
            <Paperclip className="size-5 text-icon-neutral-default dark:text-icon-neutral-dark" />
          </button>

          {/* Editor container */}
          <div
            className="flex-1 rounded-full overflow-hidden bg-surface-neutral-white dark:bg-surface-neutral-darker px-4 py-2"
          >
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              rows={2}
              className="w-full bg-transparent border-none outline-none resize-none text-sm leading-5 text-content-body placeholder-content-placeholder"
            />
          </div>

          {/* Cancel button (editing mode) */}
          {isEditing && (
            <button
              onClick={onCancel}
              className="relative shrink-0 size-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors mt-1"
            >
              <X className="size-5 text-icon-neutral-default dark:text-icon-neutral-dark" />
            </button>
          )}

          {/* Send button */}
          <button
            onClick={handleSend}
            disabled={!content.trim() && attachments.length === 0}
            className="relative shrink-0 size-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 mt-1"
            style={{
              backgroundColor: content.trim() ? "var(--branded-500)" : "transparent",
            }}
          >
            <Send
              className="size-5"
              style={{ color: content.trim() ? "white" : "var(--icon-neutral-default)" }}
            />
          </button>
        </div>
      </div>
    );
  }

  // Standard Figma style
  return (
    <div className={`relative w-full max-w-[550px] ${className}`.trim()}>
      <div className="flex flex-col gap-3 items-start w-full">
        {/* Title */}
        <div className="relative shrink-0">
          <h2 className="text-xl font-bold tracking-tight text-content-primary px-2.5 py-2.5">
            {isEditing ? "Modifier le message" : "Votre message"}
          </h2>
        </div>

        {/* Editor box */}
        <div
          className="relative rounded-2xl shrink-0 w-full overflow-hidden border border-edge-default bg-surface-neutral-white dark:bg-surface-neutral-darker"
        >
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={placeholder}
            rows={6}
            className="w-full bg-transparent border-none outline-none resize-none p-5 text-base leading-5 text-content-body placeholder-content-placeholder"
          />
        </div>

        {/* Attachment button (if has attachments) */}
        {attachments.length > 0 && (
          <div
            className="relative rounded-2xl shrink-0 border border-content-body p-3 flex gap-2 items-center justify-center bg-surface-neutral-white dark:bg-surface-neutral-darker"
          >
            <Paperclip className="size-5 text-content-body" />
            <p className="text-base font-semibold text-content-body">
              {attachments.length} pièce(s) jointe(s)
            </p>
          </div>
        )}

        {/* Add attachment link */}
        <button
          onClick={handleAttachment}
          className="relative rounded-2xl shrink-0 flex gap-2 items-center px-3 py-2 hover:bg-black/5 transition-colors"
        >
          <Paperclip className="size-5 text-content-body" />
          <p className="text-base font-semibold text-content-body">
            Ajouter une pièce jointe
          </p>
        </button>

        {/* Action buttons */}
        <div className="flex gap-3 items-center w-full justify-start mt-2">
          {isEditing && (
            <Button
              label="Annuler"
              variant="outlined"
              onClick={onCancel}
              className="w-auto"
            />
          )}
          <Button
            label={isEditing ? "Enregistrer" : "Envoyer le message"}
            variant="filled"
            onClick={handleSend}
            disabled={!content.trim() && attachments.length === 0}
            rightIcon={Send}
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
}
