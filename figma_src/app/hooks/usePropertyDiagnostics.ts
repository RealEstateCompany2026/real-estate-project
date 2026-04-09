// hooks/usePropertyDiagnostics.ts
// Consommateurs : Section diagnostics dans FIB_01_PageFicheBien, ENT score breakdown
// Source : table PropertyDiagnosticQuestionnaire (7 topics)

import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import type { PropertyDiagnostic } from '../types/database';

export function usePropertyDiagnostics(propertyId: string | undefined) {
  return useQuery({
    queryKey: ['property-diagnostics', propertyId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('PropertyDiagnosticQuestionnaire')
        .select('*')
        .eq('propertyId', propertyId!)
        .order('completedAt', { ascending: false });
      if (error) throw error;
      return data as PropertyDiagnostic[];
    },
    enabled: !!propertyId,
  });
}
