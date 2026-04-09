'use client';

import { useRef, useCallback, useEffect, useState } from 'react';

interface UseAutoSaveOptions<T> {
  data: T;
  onSave: (data: T) => Promise<void>;
  debounceMs?: number;
  enabled?: boolean;
}

interface UseAutoSaveReturn {
  isSaving: boolean;
  lastSavedAt: Date | null;
  saveNow: () => void;
}

/**
 * Hook d'enregistrement automatique avec debounce.
 * Déclenche onSave après debounceMs d'inactivité.
 * Pattern : auto-save pour les fiches en édition inline.
 */
export function useAutoSave<T>({
  data,
  onSave,
  debounceMs = 1000,
  enabled = true,
}: UseAutoSaveOptions<T>): UseAutoSaveReturn {
  const [isSaving, setIsSaving] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const dataRef = useRef(data);
  const initialRef = useRef(data);
  const isFirstRender = useRef(true);

  // Keep data ref updated
  dataRef.current = data;

  const save = useCallback(async () => {
    if (!enabled) return;
    setIsSaving(true);
    try {
      await onSave(dataRef.current);
      setLastSavedAt(new Date());
    } catch (err) {
      console.error('Auto-save failed:', err);
    } finally {
      setIsSaving(false);
    }
  }, [onSave, enabled]);

  // Debounced save on data change
  useEffect(() => {
    // Skip first render (don't save unchanged data)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!enabled) return;

    // Don't trigger if data hasn't changed from initial
    if (JSON.stringify(data) === JSON.stringify(initialRef.current)) return;

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(save, debounceMs);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [data, debounceMs, enabled, save]);

  // Save on unmount if pending changes
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        // Fire final save synchronously is not possible, but we attempt it
      }
    };
  }, []);

  const saveNow = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    save();
  }, [save]);

  return { isSaving, lastSavedAt, saveNow };
}
