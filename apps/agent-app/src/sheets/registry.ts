// Sheet registry — maps SheetType to component + fetcher + width
// Components and fetchers will be registered as sheets are migrated (Phase 2+)

import { lazy } from 'react';
import type { SheetType } from './types';
import { fetchDocumentData } from './fetchers/fetchDocumentData';
import { fetchGuideDeVisiteData } from './fetchers/fetchGuideDeVisiteData';

export interface SheetRegistryEntry {
  /** Lazy-loaded component (receives { data, onClose } props) */
  component: React.LazyExoticComponent<React.ComponentType<{ data: unknown }>>;
  /** Async function that fetches data for this sheet type */
  fetcher: (payload: unknown) => Promise<unknown>;
  /** Sheet width */
  width: 'narrow' | 'wide';
}

export const SHEET_REGISTRY: Partial<Record<SheetType, SheetRegistryEntry>> = {
  'document': {
    component: lazy(() => import('./wrappers/DocumentSheetWrapper')),
    fetcher: (payload) => fetchDocumentData(payload as { documentId: string }),
    width: 'wide',
  },
  'guide-de-visite': {
    component: lazy(() => import('./wrappers/GuideDeVisiteSheetWrapper')),
    fetcher: (payload) => fetchGuideDeVisiteData(payload as { eventId: string }),
    width: 'narrow',
  },
};
