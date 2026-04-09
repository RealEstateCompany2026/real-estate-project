import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { Toast, ToastProps, ToastVariant } from "../components/molecules/Toast";

/**
 * ToastContext - Gestion globale des toasts
 * 
 * Fournit un système de notifications toast avec API simple.
 * 
 * Usage:
 * 1. Wrapper l'app avec ToastProvider
 * 2. Utiliser le hook useToast dans les composants
 * 
 * Exemple:
 * const { toast } = useToast();
 * 
 * toast.success("Fichier enregistré");
 * toast.error("Erreur lors de l'enregistrement");
 * toast.warning("Attention : modifications non sauvegardées");
 * toast.info("Nouvelle mise à jour disponible");
 */

interface ToastItem extends Omit<ToastProps, "onClose"> {
  id: string;
}

interface ToastContextValue {
  toasts: ToastItem[];
  addToast: (toast: Omit<ToastItem, "id">) => void;
  removeToast: (id: string) => void;
  toast: {
    success: (title: string, description?: string, duration?: number) => void;
    error: (title: string, description?: string, duration?: number) => void;
    warning: (title: string, description?: string, duration?: number) => void;
    info: (title: string, description?: string, duration?: number) => void;
    custom: (
      variant: ToastVariant,
      title: string,
      description?: string,
      options?: { duration?: number; persistent?: boolean }
    ) => void;
  };
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

interface ToastProviderProps {
  children: ReactNode;
  /**
   * Position des toasts
   * @default "bottom-right"
   */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  /**
   * Durée par défaut avant auto-dismiss (ms)
   * @default 5000
   */
  defaultDuration?: number;
  /**
   * Nombre maximum de toasts affichés simultanément
   * @default 5
   */
  maxToasts?: number;
}

export function ToastProvider({
  children,
  position = "bottom-right",
  defaultDuration = 5000,
  maxToasts = 5,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback(
    (toast: Omit<ToastItem, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast = { ...toast, id };

      setToasts((prev) => {
        const updated = [...prev, newToast];
        // Limiter le nombre de toasts
        return updated.slice(-maxToasts);
      });
    },
    [maxToasts]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // API simplifiée
  const toastAPI = {
    success: (title: string, description?: string, duration?: number) => {
      addToast({
        variant: "success",
        title,
        description,
        duration: duration ?? defaultDuration,
      });
    },
    error: (title: string, description?: string, duration?: number) => {
      addToast({
        variant: "error",
        title,
        description,
        duration: duration ?? defaultDuration,
      });
    },
    warning: (title: string, description?: string, duration?: number) => {
      addToast({
        variant: "warning",
        title,
        description,
        duration: duration ?? defaultDuration,
      });
    },
    info: (title: string, description?: string, duration?: number) => {
      addToast({
        variant: "info",
        title,
        description,
        duration: duration ?? defaultDuration,
      });
    },
    custom: (
      variant: ToastVariant,
      title: string,
      description?: string,
      options?: { duration?: number; persistent?: boolean }
    ) => {
      addToast({
        variant,
        title,
        description,
        duration: options?.duration ?? defaultDuration,
        persistent: options?.persistent,
      });
    },
  };

  const value: ToastContextValue = {
    toasts,
    addToast,
    removeToast,
    toast: toastAPI,
  };

  // Déterminer la position CSS
  const getPositionStyles = () => {
    switch (position) {
      case "top-right":
        return { top: "20px", right: "20px" };
      case "top-left":
        return { top: "20px", left: "20px" };
      case "bottom-left":
        return { bottom: "20px", left: "20px" };
      case "bottom-right":
      default:
        return { bottom: "20px", right: "20px" };
    }
  };

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* Toast Container */}
      <div
        className="fixed z-[9999] flex flex-col gap-[12px] pointer-events-none"
        style={getPositionStyles()}
      >
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast {...toast} onClose={() => removeToast(toast.id)} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
