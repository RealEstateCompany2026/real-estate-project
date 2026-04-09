// hooks/usePropertyDetails.ts
// Consommateurs : FIB_01_PageFicheBien, SheetEditBienDetails
// Charge TOUTES les 68 colonnes de la table Property

import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';

export function usePropertyDetails(propertyId: string | undefined) {
  return useQuery({
    queryKey: ['property-details', propertyId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('Property')
        .select('*') // 68 colonnes
        .eq('id', propertyId!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!propertyId,
  });
}
