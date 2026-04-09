import { useState, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Paperclip, Send, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { Button } from "../atoms/Button";

/**
 * MessageEdit - Éditeur de message WYSIWYG
 * 
 * Éditeur de texte riche pour composer des messages avec formatage.
 * Support deux variantes : standard (Figma) et chat (WhatsApp).
 * 
 * Variante Standard (Figma):
 * - Titre "Votre message"
 * - Éditeur WYSIWYG avec toolbar complète
 * - Bouton "Pièce jointe" outlined
 * - Lien "Ajouter une pièce jointe"
 * - Bouton "Envoyer le message" branded
 * - Border-radius: 16px
 * - Padding: 20px
 * - Toolbar: Bold, Italic, Underline, Lists, Links
 * 
 * Variante Chat (WhatsApp):
 * - Toolbar simplifiée (Bold, Italic, Strikethrough)
 * - Input inline avec bulle
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
   * Contenu initial (HTML)
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
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [content, setContent] = useState(defaultValue);
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleSend = () => {
    if (content.trim() || attachments.length > 0) {
      // Extraire le texte brut du HTML
      const plainText = content.replace(/<[^>]*>/g, "");
      onSend?.(content, plainText, attachments);
      setContent("");
      setAttachments([]);
    }
  };

  const handleAttachment = () => {
    // Simuler l'ajout d'une pièce jointe
    console.log("Add attachment");
  };

  // Configuration de la toolbar selon la variante
  const toolbarModules = useMemo(() => {
    if (variant === "chat") {
      // WhatsApp style - toolbar simplifiée
      return {
        toolbar: [
          ["bold", "italic", "strike"],
        ],
      };
    }

    // Standard Figma style - toolbar complète
    return {
      toolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        ["clean"],
      ],
    };
  }, [variant]);

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
  ];

  if (variant === "chat") {
    // WhatsApp style
    const bgColor = isDark ? "#262D31" : "#F0F2F5";
    const editorBg = isDark ? "#2A3942" : "white";
    const iconColor = isDark ? "#8696A0" : "#54656F";

    return (
      <div className={`relative w-full ${className}`.trim()}>
        <div
          className="flex items-start gap-[8px] p-[8px] rounded-[24px]"
          style={{ backgroundColor: bgColor }}
        >
          {/* Attachment button */}
          <button
            onClick={handleAttachment}
            className="relative shrink-0 size-[40px] rounded-full flex items-center justify-center hover:bg-black/5 transition-colors mt-[4px]"
          >
            <Paperclip className="size-[20px]" style={{ color: iconColor }} />
          </button>

          {/* Editor container */}
          <div
            className="flex-1 rounded-[20px] overflow-hidden message-edit-chat-wrapper"
            style={{ backgroundColor: editorBg }}
          >
            <style>
              {`
                .message-edit-chat-wrapper .ql-container {
                  font-family: Roboto, sans-serif;
                  font-size: 15px;
                  border: none !important;
                  background-color: ${editorBg};
                }
                .message-edit-chat-wrapper .ql-editor {
                  min-height: 40px;
                  max-height: 120px;
                  overflow-y: auto;
                  padding: 10px 16px;
                  color: ${isDark ? "#E9EDEF" : "#111B21"};
                  background-color: ${editorBg};
                }
                .message-edit-chat-wrapper .ql-editor.ql-blank::before {
                  color: ${isDark ? "#8696A0" : "#667781"};
                  font-style: normal;
                }
                .message-edit-chat-wrapper .ql-toolbar {
                  border: none !important;
                  border-bottom: 1px solid ${isDark ? "#3B4A54" : "#E9EDEF"} !important;
                  background-color: ${editorBg};
                  padding: 8px 12px;
                }
                .message-edit-chat-wrapper .ql-toolbar .ql-stroke {
                  stroke: ${iconColor} !important;
                }
                .message-edit-chat-wrapper .ql-toolbar .ql-fill {
                  fill: ${iconColor} !important;
                }
                .message-edit-chat-wrapper .ql-toolbar button:hover,
                .message-edit-chat-wrapper .ql-toolbar button.ql-active {
                  background-color: ${isDark ? "#3B4A54" : "#F0F2F5"};
                }
              `}
            </style>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder={placeholder}
              modules={toolbarModules}
              formats={formats}
            />
          </div>

          {/* Cancel button (editing mode) */}
          {isEditing && (
            <button
              onClick={onCancel}
              className="relative shrink-0 size-[40px] rounded-full flex items-center justify-center hover:bg-black/5 transition-colors mt-[4px]"
            >
              <X className="size-[20px]" style={{ color: iconColor }} />
            </button>
          )}

          {/* Send button */}
          <button
            onClick={handleSend}
            disabled={!content.trim() && attachments.length === 0}
            className="relative shrink-0 size-[40px] rounded-full flex items-center justify-center transition-colors disabled:opacity-50 mt-[4px]"
            style={{
              backgroundColor: content.trim() ? "#00A884" : "transparent",
            }}
          >
            <Send
              className="size-[20px]"
              style={{ color: content.trim() ? "white" : iconColor }}
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
      <div className="flex flex-col gap-[12px] items-start w-full">
        {/* Title */}
        <div className="relative shrink-0">
          <div
            className="text-[20px] font-bold tracking-[0.2px] px-[10px] py-[10px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: titleColor,
            }}
          >
            {isEditing ? "Modifier le message" : "Votre message"}
          </div>
        </div>

        {/* Editor box */}
        <div
          className="relative rounded-[16px] shrink-0 w-full overflow-hidden message-edit-wrapper"
          style={{
            backgroundColor: bgColor,
            border: `1px solid ${borderColor}`,
          }}
        >
          <style>
            {`
              .message-edit-wrapper .ql-container {
                font-family: Roboto, sans-serif;
                font-size: 16px;
                border: none !important;
                background-color: ${bgColor};
              }
              .message-edit-wrapper .ql-editor {
                min-height: 120px;
                max-height: 300px;
                overflow-y: auto;
                padding: 20px;
                color: ${textColor};
                background-color: ${bgColor};
              }
              .message-edit-wrapper .ql-editor.ql-blank::before {
                color: ${isDark ? "#737780" : "#a1a4aa"};
                font-style: normal;
              }
              .message-edit-wrapper .ql-toolbar {
                border: none !important;
                border-bottom: 1px solid ${borderColor} !important;
                background-color: ${bgColor};
                padding: 12px 20px;
              }
              .message-edit-wrapper .ql-toolbar .ql-stroke {
                stroke: ${textColor} !important;
              }
              .message-edit-wrapper .ql-toolbar .ql-fill {
                fill: ${textColor} !important;
              }
              .message-edit-wrapper .ql-toolbar .ql-picker-label {
                color: ${textColor} !important;
              }
              .message-edit-wrapper .ql-toolbar button:hover,
              .message-edit-wrapper .ql-toolbar button.ql-active {
                background-color: ${isDark ? "#22252b" : "#f5f5f5"};
              }
              .message-edit-wrapper .ql-toolbar .ql-picker-options {
                background-color: ${bgColor};
                border: 1px solid ${borderColor};
              }
            `}
          </style>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder={placeholder}
            modules={toolbarModules}
            formats={formats}
          />
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
              <div className="flex gap-[8px] items-center justify-center p-[12px]">
                <Paperclip className="size-[20px]" style={{ color: textColor }} />
                <p
                  className="text-[16px] font-semibold tracking-[0.16px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: textColor,
                  }}
                >
                  {attachments.length} pièce(s) jointe(s)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Add attachment link */}
        <button
          onClick={handleAttachment}
          className="relative rounded-[16px] shrink-0 flex gap-[8px] items-center px-[12px] py-[8px] hover:bg-black/5 transition-colors"
        >
          <Paperclip className="size-[20px]" style={{ color: textColor }} />
          <p
            className="text-[16px] font-semibold tracking-[0.16px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: textColor,
            }}
          >
            Ajouter une pièce jointe
          </p>
        </button>

        {/* Action buttons */}
        <div className="flex gap-[12px] items-center w-full justify-start mt-[8px]">
          {isEditing && (
            <Button
              variant="outlined"
              onClick={onCancel}
              className="w-auto"
            >
              Annuler
            </Button>
          )}
          <Button
            variant="branded"
            onClick={handleSend}
            disabled={!content.trim() && attachments.length === 0}
            iconRight={<Send className="size-[20px]" />}
            className="w-auto"
          >
            {isEditing ? "Enregistrer" : "Envoyer le message"}
          </Button>
        </div>
      </div>
    </div>
  );
}