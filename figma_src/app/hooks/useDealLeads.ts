// hooks/useDealLeads.ts
// Consommateurs : Section "Leads" dans AFF_01_PageFicheAffaire
// Requête en 2 étapes : Deal → listingId → Leads du Listing

import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import type { DealLead } from '../types/database';

export function useDealLeads(dealId: string | undefined) {
  return useQuery({
    queryKey: ['deal-leads', dealId],
    queryFn: async () => {
      // 1. Récupérer le listingId du deal
      const { data: deal, error: dealError } = await supabase
        .from('Deal')
        .select('listingId')
        .eq('id', dealId!)
        .single();
      if (dealError) throw dealError;
      if (!deal?.listingId) return [];

      // 2. Récupérer les leads du listing
      const { data, error } = await supabase
        .from('Lead')
        .select(
          'id, name, email, phone, message, source, score, status, convertedToClientId, createdAt'
        )
        .eq('listingId', deal.listingId)
        .order('createdAt', { ascending: false });
      if (error) throw error;
      return data as DealLead[];
    },
    enabled: !!dealId,
  });
}
