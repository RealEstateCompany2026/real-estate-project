import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

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
 * 
 * Usage avec ToastProvider:
 * import { useToast } from "@/context/ToastContext";
 * 
 * const { toast } = useToast();
 * 
 * toast.success("Fichier enregistré avec succès");
 * toast.error("Une erreur est survenue");
 * toast.warning("Attention : modifications non sauvegardées");
 * toast.info("Nouvelle mise à jour disponible");
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
  const { theme } = useTheme();
  const isDark = theme === "dark";
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
          iconColor: isDark ? "var(--success-500)" : "var(--success-400)", // Success green
          borderColor: isDark ? "var(--success-500)" : "var(--success-400)",
          backgroundColor: isDark ? "rgba(13, 165, 0, 0.1)" : "rgba(74, 188, 64, 0.1)",
        };
      case "error":
        return {
          icon: XCircle,
          iconColor: isDark ? "#E01F29" : "#EC0119", // Error red
          borderColor: isDark ? "#E01F29" : "#EC0119",
          backgroundColor: isDark ? "rgba(224, 31, 41, 0.1)" : "rgba(236, 1, 25, 0.1)",
        };
      case "warning":
        return {
          icon: AlertTriangle,
          iconColor: isDark ? "#FF9D45" : "#FF882F", // Warning orange
          borderColor: isDark ? "#FF9D45" : "#FF882F",
          backgroundColor: isDark ? "rgba(255, 157, 69, 0.1)" : "rgba(255, 136, 47, 0.1)",
        };
      case "info":
        return {
          icon: Info,
          iconColor: isDark ? "#968FFA" : "#7B72F9", // Info blue/purple
          borderColor: isDark ? "#968FFA" : "#7B72F9",
          backgroundColor: isDark ? "rgba(150, 143, 250, 0.1)" : "rgba(123, 114, 249, 0.1)",
        };
    }
  };

  const styles = getVariantStyles();
  const Icon = styles.icon;
  const textColor = isDark ? "var(--neutral-200)" : "var(--neutral-600)";
  const descriptionColor = isDark ? "var(--neutral-400)" : "var(--neutral-500)";

  return (
    <div
      className={`
        relative w-[400px] p-[16px] rounded-[16px]
        flex items-start gap-[12px]
        transition-all duration-300 ease-out
        ${isVisible && !isExiting ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `.trim()}
      style={{
        backgroundColor: styles.backgroundColor,
        border: `1px solid ${styles.borderColor}`,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Icon */}
      <div className="shrink-0 mt-[2px]">
        <Icon size={20} style={{ color: styles.iconColor }} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <p
          className="font-medium text-[16px] leading-[20px] tracking-[0.16px] mb-[4px]"
          style={{
            fontFamily: "Roboto, sans-serif",
            color: textColor,
          }}
        >
          {title}
        </p>

        {/* Description */}
        {description && (
          <p
            className="text-[14px] leading-[18px] tracking-[0.14px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              color: descriptionColor,
            }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="shrink-0 p-[4px] rounded-[8px] transition-all hover:opacity-70"
        style={{ color: textColor }}
        aria-label="Fermer"
      >
        <X size={16} strokeWidth={2} />
      </button>
    </div>
  );
}
