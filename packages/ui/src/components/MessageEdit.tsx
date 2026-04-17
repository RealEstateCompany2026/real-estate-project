"use client";

import { useState } from "react";
import { Paperclip, Send, Plus, X } from "lucide-react";
import { Button } from "./Button";

/**
 * MessageEdit - Éditeur de message
 * Component du design system RealAgent
 *
 * Figma: component . message . édition (node 1260:7960)
 *
 * Structure Figma (variante standard):
 * - Container: flex-col, gap-12, items-center, w-550px
 * - Titre "Votre message": H6 Bold (20px/24px), p-10, text-headings
 * - Editor organism: bg white, border-subtle, p-20, rounded-16, gap-8
 *   - Textarea: Body md Regular (16px/20px), text-body
 *   - Bouton outlined "Pièce jointe": border-neutral-action, p-12, rounded-16
 * - "Ajouter une pièce jointe +": text-neutral-action, p-12
 * - Bouton "Envoyer le message": surface-branded-default, p-12, rounded-16
 *
 * Variante chat: compact WhatsApp-like input.
 * Tokens Layer 3, dark mode auto via .dark class.
 */

export interface MessageEditProps {
  onSend?: (html: string, plainText: string, attachments: File[]) => void;
  onCancel?: () => void;
  placeholder?: string;
  variant?: "standard" | "chat";
  defaultValue?: string;
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
      onSend?.(content, content, attachments);
      setContent("");
      setAttachments([]);
    }
  };

  const handleAttachment = () => {
    console.log("Add attachment");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && variant === "chat") {
      e.preventDefault();
      handleSend();
    }
  };

  /* ── Chat variant (WhatsApp style) ── */
  if (variant === "chat") {
    return (
      <div className={`relative w-full ${className}`.trim()}>
        <div className="flex items-start gap-2 p-2 rounded-3xl bg-surface-neutral-default">
          <button
            onClick={handleAttachment}
            className="relative shrink-0 size-10 rounded-full flex items-center justify-center hover:bg-surface-neutral-action-hover transition-colors mt-1"
          >
            <Paperclip className="size-5 text-icon-neutral-default" />
          </button>

          <div className="flex-1 rounded-full overflow-hidden bg-surface-neutral-default px-4 py-2">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              rows={2}
              className="w-full bg-transparent border-none outline-none resize-none text-sm leading-5 text-content-body"
            />
          </div>

          {isEditing && (
            <button
              onClick={onCancel}
              className="relative shrink-0 size-10 rounded-full flex items-center justify-center hover:bg-surface-neutral-action-hover transition-colors mt-1"
            >
              <X className="size-5 text-icon-neutral-default" />
            </button>
          )}

          <button
            onClick={handleSend}
            disabled={!content.trim() && attachments.length === 0}
            className={`relative shrink-0 size-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:pointer-events-none mt-1 ${content.trim() ? "bg-surface-branded-default" : "bg-transparent"}`}
          >
            <Send
              className={`size-5 ${content.trim() ? "text-content-branded-on-action" : "text-icon-neutral-default"}`}
            />
          </button>
        </div>
      </div>
    );
  }

  /* ── Standard variant (Figma) ── */
  return (
    <div
      className={`flex flex-col gap-[12px] items-center w-full max-w-[550px] ${className}`.trim()}
    >
      {/* Inner group: title + editor + attachment link */}
      <div className="flex flex-col gap-[12px] items-start w-full">
        {/* Title: H6 Bold Desktop */}
        <div className="p-[10px]">
          <h2
            className="text-[20px] font-bold leading-[24px] tracking-[0.2px] text-content-headings"
          >
            {isEditing ? "Modifier le message" : "Votre message"}
          </h2>
        </div>

        {/* Editor area (right-aligned items for the attachment link) */}
        <div className="flex flex-col gap-[8px] items-end w-full">
          {/* Editor organism box */}
          <div
            className="flex flex-col gap-[8px] items-start p-[20px] rounded-[16px] w-full
              border border-solid border-edge-subtle bg-surface-neutral-default"
          >
            {/* Text area: Body md Regular */}
            <div className="w-full px-[10px] py-[8px]">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={placeholder}
                rows={5}
                className="w-full bg-transparent border-none outline-none resize-none
                  text-[16px] font-normal leading-[20px] tracking-[0.16px] text-content-body"
              />
            </div>

            {/* Outlined "Pièce jointe" button */}
            <Button variant="outline" size="default" onClick={handleAttachment}>
              <Paperclip size={20} />
              Pièce jointe
            </Button>
          </div>

          {/* "Ajouter une pièce jointe +" link */}
          <Button variant="ghost" size="default" onClick={handleAttachment}>
            Ajouter une pièce jointe
            <Plus size={20} />
          </Button>
        </div>
      </div>

      {/* Send button (centered via items-center on parent) */}
      <Button
        variant="primary"
        size="default"
        onClick={handleSend}
        disabled={!content.trim() && attachments.length === 0}
      >
        {isEditing ? "Enregistrer" : "Envoyer le message"}
        <Send size={20} />
      </Button>
    </div>
  );
}
