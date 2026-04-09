// hooks/index.ts — Barrel exports for all hooks
// UI hooks (§3.0)
export { useHoverState } from './useHoverState';
export { useBreakpoint } from './useBreakpoint';

// Data hooks — Client (§5.1–5.4)
export { useClientScore } from './useClientScore';
export { useClientList } from './useClientList';
export { useClientDetails } from './useClientDetails';
export { useClientAiSuggestions } from './useClientAiSuggestions';

// Data hooks — Property (§5.5–5.9)
export { usePropertyScore } from './usePropertyScore';
export { usePropertyList } from './usePropertyList';
export { usePropertyDetails } from './usePropertyDetails';
export { usePropertyMatchingClients } from './usePropertyMatchingClients';
export { usePropertyDiagnostics } from './usePropertyDiagnostics';

// Data hooks — Deal (§5.10)
export { useDealLeads } from './useDealLeads';
