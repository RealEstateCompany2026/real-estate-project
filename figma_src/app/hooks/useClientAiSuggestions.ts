// hooks/useClientAiSuggestions.ts
// Consommateurs : Section suggestions IA dans FicheClient + AiSuggestion atoms
// Source : table Trigger (type IA, status ACTIF, liés au client)

import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import type { AiSuggestion } from '../types/database';

type KpiFilter = 'qual' | 'eng' | 'conv' | 'reac';

export function useClientAiSuggestions(
  clientId: string | undefined,
  kpi?: KpiFilter
) {
  return useQuery({
    queryKey: ['client-ai-suggestions', clientId, kpi],
    queryFn: async () => {
      let query = supabase
        .from('Trigger')
        .select(
          'id, type, category, label, description, score, status, detectedAt, expiryDate, automationCode, engagementScoreImpact, signalSource'
        )
        .eq('clientId', clientId!)
        .eq('status', 'ACTIF')
        .order('score', { ascending: false })
        .limit(10);

      // Filtrer par catégorie liée au KPI demandé
      if (kpi === 'qual') {
        query = query.in('type', ['DATA_MISSING', 'DOCUMENT_EXPIRY']);
      }
      if (kpi === 'eng') {
        query = query.in('type', ['INACTIVITY', 'STAGNATION', 'MOMENTUM']);
      }
      if (kpi === 'conv') {
        query = query.in('type', ['MARKET_OPPORTUNITY', 'CREDIT_RENEGOCIATION']);
      }
      if (kpi === 'reac') {
        query = query.in('type', [
          'INACTIVITY',
          'BIRTHDAY',
          'ANNIVERSARY',
          'DPE_ALERT',
        ]);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as AiSuggestion[];
    },
    enabled: !!clientId,
    staleTime: 60_000,
  });
}
