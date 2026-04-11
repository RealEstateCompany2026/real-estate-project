"use client";

import { useState } from "react";
import { Paperclip, Send, Plus, X } from "lucide-react";

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
            className="relative shrink-0 size-10 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity mt-1"
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
              className="w-full bg-transparent border-none outline-none resize-none text-sm leading-5"
              style={{ color: "var(--text-body)" }}
            />
          </div>

          {isEditing && (
            <button
              onClick={onCancel}
              className="relative shrink-0 size-10 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity mt-1"
            >
              <X className="size-5 text-icon-neutral-default" />
            </button>
          )}

          <button
            onClick={handleSend}
            disabled={!content.trim() && attachments.length === 0}
            className="relative shrink-0 size-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 mt-1"
            style={{
              backgroundColor: content.trim()
                ? "var(--surface-branded-default)"
                : "transparent",
            }}
          >
            <Send
              className="size-5"
              style={{
                color: content.trim()
                  ? "var(--text-branded-on-action)"
                  : "var(--icon-neutral-default)",
              }}
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
            className="text-[20px] font-bold leading-[24px] tracking-[0.2px]"
            style={{ color: "var(--text-headings)" }}
          >
            {isEditing ? "Modifier le message" : "Votre message"}
          </h2>
        </div>

        {/* Editor area (right-aligned items for the attachment link) */}
        <div className="flex flex-col gap-[8px] items-end w-full">
          {/* Editor organism box */}
          <div
            className="flex flex-col gap-[8px] items-start p-[20px] rounded-[16px] w-full
              border border-solid border-edge-subtle bg-[var(--surface-neutral-default)]"
          >
            {/* Text area: Body md Regular */}
            <div className="w-full px-[10px] py-[8px]">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={placeholder}
                rows={5}
                className="w-full bg-transparent border-none outline-none resize-none
                  text-[16px] font-normal leading-[20px] tracking-[0.16px]"
                style={{ color: "var(--text-body)" }}
              />
            </div>

            {/* Outlined "Pièce jointe" button (always visible) */}
            <button
              onClick={handleAttachment}
              className="flex items-center gap-[8px] p-[12px] rounded-[16px]
                border border-solid bg-[var(--surface-neutral-default)]"
              style={{ borderColor: "var(--border-neutral-action)" }}
            >
              <Paperclip
                size={20}
                style={{ color: "var(--text-neutral-action)" }}
              />
              <span
                className="text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap"
                style={{ color: "var(--text-neutral-action)" }}
              >
                Pièce jointe
              </span>
            </button>
          </div>

          {/* "Ajouter une pièce jointe +" link */}
          <button
            onClick={handleAttachment}
            className="flex items-center gap-[8px] p-[12px] rounded-[16px]
              hover:opacity-70 transition-opacity"
          >
            <span
              className="text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap"
              style={{ color: "var(--text-neutral-action)" }}
            >
              Ajouter une pièce jointe
            </span>
            <Plus
              size={20}
              style={{ color: "var(--text-neutral-action)" }}
            />
          </button>
        </div>
      </div>

      {/* Send button (centered via items-center on parent) */}
      <button
        onClick={handleSend}
        disabled={!content.trim() && attachments.length === 0}
        className="flex items-center gap-[8px] p-[12px] rounded-[16px]
          border border-solid bg-surface-branded-default border-edge-branded-action
          disabled:opacity-50 hover:opacity-90 transition-opacity"
      >
        <span
          className="text-[16px] font-semibold leading-[20px] tracking-[0.16px] whitespace-nowrap"
          style={{ color: "var(--text-branded-on-action)" }}
        >
          {isEditing ? "Enregistrer" : "Envoyer le message"}
        </span>
        <Send
          size={20}
          style={{ color: "var(--text-branded-on-action)" }}
        />
      </button>
    </div>
  );
}
