'use client';

import { Suspense } from 'react';
import { useSheetManager } from '@/hooks/useSheetManager';
import { SHEET_REGISTRY } from '@/sheets/registry';

/**
 * SheetOutlet — renders the currently active sheet from the SheetManager stack.
 * Positioned at layout level, outside page content flow.
 * During Phase 1, the registry is empty so this renders nothing.
 */
export function SheetOutlet() {
  const { currentSheet, isOpen, closeAll } = useSheetManager();

  if (!isOpen || !currentSheet) return null;

  const registryEntry = SHEET_REGISTRY[currentSheet.type];

  // If the sheet type is not yet registered (not migrated), render nothing.
  // The old local state pattern will handle it.
  if (!registryEntry) return null;

  const SheetComponent = registryEntry.component;

  if (currentSheet.status === 'loading') {
    return (
      <>
        <div
          className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.5)] transition-opacity duration-300"
          onClick={closeAll}
        />
        <div className="fixed top-0 right-0 bottom-0 z-50 flex items-center justify-center"
          style={{ width: registryEntry.width === 'wide' ? '1024px' : '420px' }}
        >
          <div className="animate-pulse bg-surface-neutral-action-hover rounded-lg w-full h-[200px] m-8" />
        </div>
      </>
    );
  }

  if (currentSheet.status === 'error') {
    return null; // Fail silently for now — could show error toast later
  }

  return (
    <Suspense fallback={null}>
      <SheetComponent data={currentSheet.data} />
    </Suspense>
  );
}
