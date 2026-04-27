'use client';

import { useContext } from 'react';
import { SheetContext } from '@/providers/SheetProvider';
import type { SheetManagerAPI } from '@/sheets/types';

export function useSheetManager(): SheetManagerAPI {
  return useContext(SheetContext);
}
