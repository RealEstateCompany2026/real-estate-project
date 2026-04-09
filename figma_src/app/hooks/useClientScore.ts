// hooks/useClientScore.ts
// Consommateurs : AppBarFicheClient, CardClient, ListClient, SheetClientDetails
// Source : RPC get_client_scores (PostgreSQL)

import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import type { ClientScores } from '../types/database';

export function useClientScore(clientId: string | undefined) {
  return useQuery({
    queryKey: ['client-score', clientId],
    queryFn: async (): Promise<ClientScores> => {
      const { data, error } = await supabase.rpc('get_client_scores', {
        p_client_id: clientId!,
      });
      if (error) throw error;
      return data as ClientScores;
    },
    enabled: !!clientId,
    staleTime: 30_000,       // 30s — les scores ne changent pas souvent
    gcTime: 5 * 60_000,      // 5min cache
  });
}
