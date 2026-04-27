'use client';

import { Suspense } from 'react';
import { useSheetManager } from '@/hooks/useSheetManager';
import { SHEET_REGISTRY } from '@/sheets/registry';

/**
 * SheetOutlet — renders the currently active sheet from the SheetManager stack.
 * Positioned at layout level, outside page content flow.
 * The Sheet DS component renders its own backdrop, so SheetOutlet must NOT add one.
 */
export function SheetOutlet() {
  const { currentSheet, isOpen } = useSheetManager();

  if (!isOpen || !currentSheet) return null;

  const registryEntry = SHEET_REGISTRY[currentSheet.type];

  // If the sheet type is not yet registered (not migrated), render nothing.
  // The old local state pattern will handle it.
  if (!registryEntry) return null;

  // Still loading data — don't render the sheet component yet
  if (currentSheet.status === 'loading') return null;
  if (currentSheet.status === 'error') return null;

  const SheetComponent = registryEntry.component;

  return (
    <Suspense fallback={null}>
      <SheetComponent data={currentSheet.data} />
    </Suspense>
  );
}
