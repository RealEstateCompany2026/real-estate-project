"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";

/**
 * Toast - Notification temporaire
 *
 * Composant de notification qui apparaît temporairement en bas à droite
 * de l'écran pour afficher des messages (success, error, warning, info).
 *
 * Specs:
 * - Width: 400px
 * - Padding: 16px
 * - Border-radius: 16px
 * - Gap: 12px (entre icône et texte)
 * - Font: Roboto Medium 16px/20px (titre), Regular 14px/18px (description)
 * - Auto-dismiss: 5000ms (configurable)
 * - Animation: Slide in from right + fade
 *
 * Variants:
 * - success: Vert avec icône CheckCircle2
 * - error: Rouge avec icône XCircle
 * - warning: Orange avec icône AlertTriangle
 * - info: Bleu avec icône Info
 */

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastProps {
  /**
   * ID unique du toast
   */
  id: string;
  /**
   * Variant du toast (success, error, warning, info)
   */
  variant: ToastVariant;
  /**
   * Titre du toast
   */
  title: string;
  /**
   * Description optionnelle
   */
  description?: string;
  /**
   * Durée avant auto-dismiss (ms)
   * @default 5000
   */
  duration?: number;
  /**
   * Callback appelé lors de la fermeture
   */
  onClose?: () => void;
  /**
   * Désactive l'auto-dismiss
   */
  persistent?: boolean;
}

/**
 * Toast - Composant individuel
 */
export function Toast({
  id,
  variant,
  title,
  description,
  duration = 5000,
  onClose,
  persistent = false,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Animation d'entrée
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  // Auto-dismiss
  useEffect(() => {
    if (persistent) return;

    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, persistent]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose?.();
    }, 300); // Durée de l'animation de sortie
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return {
          icon: CheckCircle2,
          bgClass: "bg-green-500/10",
          borderClass: "border-edge-success-default",
          iconColorClass: "text-content-success",
        };
      case "error":
        return {
          icon: XCircle,
          bgClass: "bg-red-500/10",
          borderClass: "border-edge-error-default",
          iconColorClass: "text-content-error",
        };
      case "warning":
        return {
          icon: AlertTriangle,
          bgClass: "bg-orange-500/10",
          borderClass: "border-edge-warning-default",
          iconColorClass: "text-content-warning",
        };
      case "info":
        return {
          icon: Info,
          bgClass: "bg-blue-500/10",
          borderClass: "border-edge-information-default",
          iconColorClass: "text-content-information",
        };
    }
  };

  const styles = getVariantStyles();
  const Icon = styles.icon;

  return (
    <div
      className={`
        relative w-[400px] p-[16px] rounded-[16px]
        flex items-start gap-[12px]
        transition-all duration-300 ease-out
        border
        ${styles.bgClass}
        ${styles.borderClass}
        ${isVisible && !isExiting ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        shadow-md
      `.trim()}
    >
      {/* Icon */}
      <div className="shrink-0 mt-[2px]">
        <Icon size={20} className={`${styles.iconColorClass} stroke-[2]`} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <p className="font-medium text-[16px] leading-[20px] tracking-[0.16px] mb-[4px] text-content-body font-roboto">
          {title}
        </p>

        {/* Description */}
        {description && (
          <p className="text-[14px] leading-[18px] tracking-[0.14px] text-content-placeholder font-roboto">
            {description}
          </p>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="shrink-0 p-[4px] rounded-[8px] transition-all hover:opacity-70 text-content-body"
        aria-label="Fermer"
      >
        <X size={16} strokeWidth={2} />
      </button>
    </div>
  );
}
