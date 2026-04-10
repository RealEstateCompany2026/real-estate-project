"use client";

import { Info, AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

/**
 * MOLECULE: InlineMessage
 *
 * Composant de message inline pour afficher des informations contextuelles
 * Types: info, warning, error, success
 * Utilise les tokens de couleur du design system
 */

export type InlineMessageType = "info" | "warning" | "error" | "success";

export interface InlineMessageProps {
  type: InlineMessageType;
  message: string;
  className?: string;
}

export function InlineMessage({
  type,
  message,
  className = "",
}: InlineMessageProps) {
  const getIcon = () => {
    switch (type) {
      case "info":
        return <Info size={20} className="text-icon-information" />;
      case "warning":
        return <AlertTriangle size={20} className="text-icon-warning" />;
      case "error":
        return <AlertCircle size={20} className="text-icon-error" />;
      case "success":
        return <CheckCircle size={20} className="text-icon-success" />;
    }
  };

  const getColorClasses = () => {
    switch (type) {
      case "info":
        return {
          bg: "bg-surface-information",
          border: "border-edge-information",
          text: "text-content-information",
        };
      case "warning":
        return {
          bg: "bg-surface-warning",
          border: "border-edge-warning",
          text: "text-content-warning",
        };
      case "error":
        return {
          bg: "bg-surface-error",
          border: "border-edge-error",
          text: "text-content-error",
        };
      case "success":
        return {
          bg: "bg-surface-success",
          border: "border-edge-success",
          text: "text-content-success",
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div
      className={`
        flex items-start gap-3 px-4 py-3 rounded-2xl
        border
        ${colors.bg}
        ${colors.border}
        ${className}
      `}
    >
      {/* Icône */}
      <div className="flex-shrink-0 pt-0.5">{getIcon()}</div>

      {/* Message */}
      <p className={`text-sm leading-5 flex-1 ${colors.text}`}>
        {message}
      </p>
    </div>
  );
}
