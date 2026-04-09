/**
 * MOLECULE: InlineMessage
 * 
 * Composant de message inline pour afficher des informations contextuelles
 * Types: info, warning, error, success
 * Utilise les tokens de couleur du design system
 */

import { Info, AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

export type InlineMessageType = "info" | "warning" | "error" | "success";

export interface InlineMessageProps {
  type: InlineMessageType;
  message: string;
  theme?: "light" | "dark";
  className?: string;
}

export function InlineMessage({
  type,
  message,
  theme = "light",
  className = "",
}: InlineMessageProps) {
  const getIcon = () => {
    switch (type) {
      case "info":
        return <Info size={20} style={{ color: "var(--icon-information)" }} />;
      case "warning":
        return <AlertTriangle size={20} style={{ color: "var(--icon-warning)" }} />;
      case "error":
        return <AlertCircle size={20} style={{ color: "var(--icon-error)" }} />;
      case "success":
        return <CheckCircle size={20} style={{ color: "var(--icon-success)" }} />;
    }
  };

  const getColors = () => {
    switch (type) {
      case "info":
        return {
          surface: "var(--surface-information)",
          border: "var(--border-information)",
          text: "var(--text-information)",
        };
      case "warning":
        return {
          surface: "var(--surface-warning)",
          border: "var(--border-warning)",
          text: "var(--text-warning)",
        };
      case "error":
        return {
          surface: "var(--surface-error)",
          border: "var(--border-error)",
          text: "var(--text-error)",
        };
      case "success":
        return {
          surface: "var(--surface-success)",
          border: "var(--border-success)",
          text: "var(--text-success)",
        };
    }
  };

  const colors = getColors();

  return (
    <div
      className={`flex items-start gap-3 px-4 py-3 rounded-2xl ${className}`}
      style={{
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
      }}
    >
      {/* Icône */}
      <div className="flex-shrink-0 pt-0.5">{getIcon()}</div>

      {/* Message */}
      <p
        style={{
          color: colors.text,
          fontFamily: "var(--font-family)",
          fontSize: "var(--text-sm)",
          lineHeight: "var(--lh-sm)",
          flex: 1,
        }}
      >
        {message}
      </p>
    </div>
  );
}
