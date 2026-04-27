// Sheet type definitions for the SheetManager architecture

export type SheetType =
  | 'client'
  | 'client-edit'
  | 'bien'
  | 'bien-edit'
  | 'affaire'
  | 'document'
  | 'document-import'
  | 'document-edit'
  | 'mandat'
  | 'mandat-edit'
  | 'visite'
  | 'ordre-du-jour'
  | 'guide-de-visite'
  | 'agenda-bien'
  | 'annonce'
  | 'messages'
  | 'messages-edit'
  | 'gallery'
  | 'gallery-import'
  | 'activity-logs'
  | 'promesse-achat'
  | 'promesse-vente'
  | 'financement'
  | 'dossier-locataire'
  | 'acte-notarie';

// Payload types per sheet (what data is needed to open each sheet)
export interface SheetPayloadMap {
  'client': { clientId: string };
  'client-edit': { clientId: string };
  'bien': { propertyId: string };
  'bien-edit': { propertyId: string };
  'affaire': { dealId: string };
  'document': { documentId: string };
  'document-import': { entityType: 'client' | 'property' | 'deal'; entityId: string };
  'document-edit': { documentId: string };
  'mandat': { dealId: string };
  'mandat-edit': { dealId: string };
  'visite': { eventId: string };
  'ordre-du-jour': { eventId: string };
  'guide-de-visite': { eventId: string };
  'agenda-bien': { propertyId: string; eventId: string };
  'annonce': { listingId: string };
  'messages': { entityType: 'client' | 'property' | 'deal'; entityId: string };
  'messages-edit': { entityType: 'client' | 'property' | 'deal'; entityId: string };
  'gallery': { propertyId: string };
  'gallery-import': { propertyId: string };
  'activity-logs': { entityType: 'client' | 'property' | 'deal'; entityId: string };
  'promesse-achat': { dealId: string };
  'promesse-vente': { dealId: string };
  'financement': { dealId: string };
  'dossier-locataire': { dealId: string };
  'acte-notarie': { dealId: string };
}

// Options passed when opening a sheet
export interface SheetOpenOptions {
  /** Called by the wrapper after mutating data — allows the parent page to refresh its state */
  onMutate?: () => void;
}

// Stack entry representing one open sheet
export interface SheetStackEntry {
  type: SheetType;
  payload: SheetPayloadMap[SheetType];
  data?: unknown;
  status: 'loading' | 'ready' | 'error';
  onMutate?: () => void;
}

// Public API exposed by useSheetManager
export interface SheetManagerAPI {
  /** Open a sheet (replaces current stack) */
  openSheet: <T extends SheetType>(type: T, payload: SheetPayloadMap[T], options?: SheetOpenOptions) => void;
  /** Push a sheet on top of the current one (for transverse navigation) */
  pushSheet: <T extends SheetType>(type: T, payload: SheetPayloadMap[T], options?: SheetOpenOptions) => void;
  /** Close the topmost sheet (pops from stack) */
  closeSheet: () => void;
  /** Close all sheets */
  closeAll: () => void;
  /** Notify the parent page that the wrapper mutated data — calls every onMutate callback in the stack */
  notifyMutate: () => void;
  /** Current topmost sheet entry (or null if no sheet open) */
  currentSheet: SheetStackEntry | null;
  /** Full navigation stack */
  stack: SheetStackEntry[];
  /** Whether any sheet is open */
  isOpen: boolean;
}
