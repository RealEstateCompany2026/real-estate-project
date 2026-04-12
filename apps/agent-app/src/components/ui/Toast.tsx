'use client';

import { useState, useEffect, useCallback, createContext, useContext, type ReactNode } from 'react';
import { CheckCircle, AlertTriangle, XCircle, Info, X } from 'lucide-react';

type ToastVariant = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
}

interface ToastContextValue {
  toast: (message: string, variant?: ToastVariant, duration?: number) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

const ICONS: Record<ToastVariant, ReactNode> = {
  success: <CheckCircle className="w-5 h-5 text-semantic-success" />,
  error: <XCircle className="w-5 h-5 text-semantic-destructive" />,
  warning: <AlertTriangle className="w-5 h-5 text-semantic-warning" />,
  info: <Info className="w-5 h-5 text-semantic-info" />,
};

const BG_CLASSES: Record<ToastVariant, string> = {
  success: 'border-semantic-success/30 bg-semantic-success/5',
  error: 'border-semantic-destructive/30 bg-semantic-destructive/5',
  warning: 'border-semantic-warning/30 bg-semantic-warning/5',
  info: 'border-semantic-info/30 bg-semantic-info/5',
};

let counter = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, variant: ToastVariant = 'info', duration = 4000) => {
    const id = `toast-${++counter}`;
    setToasts((prev) => [...prev, { id, message, variant, duration }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-4 right-4 z-[200] flex flex-col gap-2 max-w-sm">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onRemove={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => onRemove(toast.id), toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.id, toast.duration, onRemove]);

  return (
    <div
      className={`flex items-start gap-3 px-4 py-3 rounded-lg border shadow-md animate-[slideIn_0.2s_ease-out] ${BG_CLASSES[toast.variant]}`}
      role="alert"
    >
      {ICONS[toast.variant]}
      <p className="text-sm text-content-headings flex-1">{toast.message}</p>
      <button
        type="button"
        onClick={() => onRemove(toast.id)}
        className="p-0.5 rounded hover:bg-surface-neutral-action transition-colors"
        aria-label="Fermer"
      >
        <X className="w-4 h-4 text-content-caption" />
      </button>
    </div>
  );
}
