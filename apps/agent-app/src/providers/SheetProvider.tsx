'use client';

import { createContext, useCallback, useRef, useState, type ReactNode } from 'react';
import type { SheetType, SheetPayloadMap, SheetOpenOptions, SheetStackEntry, SheetManagerAPI } from '@/sheets/types';
import { SHEET_REGISTRY } from '@/sheets/registry';

const SheetContext = createContext<SheetManagerAPI>({
  openSheet: () => {},
  pushSheet: () => {},
  closeSheet: () => {},
  closeAll: () => {},
  notifyMutate: () => {},
  currentSheet: null,
  stack: [],
  isOpen: false,
});

export { SheetContext };

export function SheetProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<SheetStackEntry[]>([]);
  const stackRef = useRef<SheetStackEntry[]>([]);
  stackRef.current = stack;

  const openSheet = useCallback(<T extends SheetType>(type: T, payload: SheetPayloadMap[T], options?: SheetOpenOptions) => {
    const entry: SheetStackEntry = { type, payload, status: 'loading', onMutate: options?.onMutate };
    setStack([entry]);

    // Fetch data if registry has a fetcher for this type
    const registryEntry = SHEET_REGISTRY[type];
    if (registryEntry) {
      registryEntry.fetcher(payload).then((data) => {
        setStack((prev) =>
          prev.map((e) => (e === entry ? { ...e, data, status: 'ready' as const } : e))
        );
      }).catch(() => {
        setStack((prev) =>
          prev.map((e) => (e === entry ? { ...e, status: 'error' as const } : e))
        );
      });
    }
  }, []);

  const pushSheet = useCallback(<T extends SheetType>(type: T, payload: SheetPayloadMap[T], options?: SheetOpenOptions) => {
    const entry: SheetStackEntry = { type, payload, status: 'loading', onMutate: options?.onMutate };
    setStack((prev) => [...prev, entry]);

    const registryEntry = SHEET_REGISTRY[type];
    if (registryEntry) {
      registryEntry.fetcher(payload).then((data) => {
        setStack((prev) =>
          prev.map((e) => (e === entry ? { ...e, data, status: 'ready' as const } : e))
        );
      }).catch(() => {
        setStack((prev) =>
          prev.map((e) => (e === entry ? { ...e, status: 'error' as const } : e))
        );
      });
    }
  }, []);

  const closeSheet = useCallback(() => {
    setStack((prev) => prev.slice(0, -1));
  }, []);

  const closeAll = useCallback(() => {
    setStack([]);
  }, []);

  const notifyMutate = useCallback(() => {
    const currentStack = stackRef.current;
    for (let i = currentStack.length - 1; i >= 0; i--) {
      currentStack[i].onMutate?.();
    }
  }, []);

  const currentSheet = stack.length > 0 ? stack[stack.length - 1] : null;
  const isOpen = stack.length > 0;

  return (
    <SheetContext.Provider value={{ openSheet, pushSheet, closeSheet, closeAll, notifyMutate, currentSheet, stack, isOpen }}>
      {children}
    </SheetContext.Provider>
  );
}
