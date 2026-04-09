// hooks/usePropertyMatchingClients.ts
// Consommateurs : Section "Acquéreurs appétents" dans FIB_01_PageFicheBien
// Phase 1 : simple query sur status ACQUEREUR + searchCriteriaSummary non null
// Phase 2 (TODO) : RPC avec scoring de compatibilité (prix, surface, localisation)

import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import type { MatchingClient } from '../types/database';

export function usePropertyMatchingClients(propertyId: string | undefined) {
  return useQuery({
    queryKey: ['property-matching-clients', propertyId],
    queryFn: async () => {
      // Phase 1 : tous les acquéreurs actifs de l'organisation
      // TODO Phase 2 : RPC avec scoring de compatibilité (prix, surface, localisation)
      const { data, error } = await supabase
        .from('Client')
        .select(
          'id, firstName, lastName, primaryEmail, mobilePhone, searchCriteriaSummary, lifecycleStage'
        )
        .overlaps('status', ['ACQUEREUR'])
        .eq('isActive', true)
        .not('searchCriteriaSummary', 'is', null)
        .order('updatedAt', { ascending: false })
        .limit(20);

      if (error) throw error;
      return data as MatchingClient[];
    },
    enabled: !!propertyId,
    staleTime: 60_000,
  });
}
