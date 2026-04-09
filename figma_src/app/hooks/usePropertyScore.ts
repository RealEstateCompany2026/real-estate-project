// hooks/usePropertyScore.ts
// Consommateurs : AppBarFicheBien, CardBien, ListBien, SheetBienDetails
// Source : RPC get_property_scores (PostgreSQL)

import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import type { PropertyScores } from '../types/database';

export function usePropertyScore(propertyId: string | undefined) {
  return useQuery({
    queryKey: ['property-score', propertyId],
    queryFn: async (): Promise<PropertyScores> => {
      const { data, error } = await supabase.rpc('get_property_scores', {
        p_property_id: propertyId!,
      });
      if (error) throw error;
      return data as PropertyScores;
    },
    enabled: !!propertyId,
    staleTime: 30_000,
    gcTime: 5 * 60_000,
  });
}
