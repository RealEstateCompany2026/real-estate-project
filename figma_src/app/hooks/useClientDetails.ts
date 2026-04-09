// hooks/useClientDetails.ts
// Consommateurs : FIC_01_PageFicheClient, SheetEditProfilClient
// Charge TOUTES les 48 colonnes de la table Client

import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';

export function useClientDetails(clientId: string | undefined) {
  return useQuery({
    queryKey: ['client-details', clientId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('Client')
        .select('*') // toutes les 48 colonnes
        .eq('id', clientId!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!clientId,
  });
}
