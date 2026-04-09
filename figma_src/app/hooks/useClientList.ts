// hooks/useClientList.ts
// Consommateurs : FIC_01_Page_List_Client
// Requête paginée avec filtres sur table Client (48 colonnes, SELECT partiel)

import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import type { ClientFilters, ClientListItem } from '../types/database';

const PAGE_SIZE = 25;

export function useClientList(filters: ClientFilters, page: number) {
  return useQuery({
    queryKey: ['client-list', filters, page],
    queryFn: async () => {
      let query = supabase
        .from('Client')
        .select(
          'id, firstName, lastName, primaryEmail, mobilePhone, status, lifecycleStage, address, source, qualificationScore, isActive, createdAt, updatedAt, agentId',
          { count: 'exact' }
        );

      // Filtres
      if (filters.search) {
        query = query.or(
          `firstName.ilike.%${filters.search}%,lastName.ilike.%${filters.search}%,primaryEmail.ilike.%${filters.search}%,mobilePhone.ilike.%${filters.search}%`
        );
      }
      if (filters.status?.length) {
        query = query.overlaps('status', filters.status); // array overlap pour ClientStatus[]
      }
      if (filters.lifecycleStage?.length) {
        query = query.in('lifecycleStage', filters.lifecycleStage);
      }
      if (filters.agentId) {
        query = query.eq('agentId', filters.agentId);
      }
      if (filters.isActive !== undefined) {
        query = query.eq('isActive', filters.isActive);
      }

      // Tri
      const sortBy = filters.sortBy ?? 'updatedAt';
      const sortOrder = filters.sortOrder ?? 'desc';
      query = query.order(sortBy, { ascending: sortOrder === 'asc' });

      // Pagination
      const from = page * PAGE_SIZE;
      query = query.range(from, from + PAGE_SIZE - 1);

      const { data, error, count } = await query;
      if (error) throw error;
      return {
        clients: data as ClientListItem[],
        totalCount: count ?? 0,
        page,
        pageSize: PAGE_SIZE,
      };
    },
    placeholderData: keepPreviousData, // smooth pagination
  });
}
