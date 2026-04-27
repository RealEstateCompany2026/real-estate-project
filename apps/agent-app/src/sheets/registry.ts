// Sheet registry — maps SheetType to component + fetcher + width
// Components and fetchers will be registered as sheets are migrated (Phase 2+)

import type { SheetType } from './types';

export interface SheetRegistryEntry {
  /** Lazy-loaded component (receives { data, onClose } props) */
  component: React.LazyExoticComponent<React.ComponentType<{ data: unknown }>>;
  /** Async function that fetches data for this sheet type */
  fetcher: (payload: unknown) => Promise<unknown>;
  /** Sheet width */
  width: 'narrow' | 'wide';
}

// Registry starts empty — entries are added as sheets are migrated
export const SHEET_REGISTRY: Partial<Record<SheetType, SheetRegistryEntry>> = {};
