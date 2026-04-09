// hooks/usePropertyList.ts
// Consommateurs : FIB_01_Page_List_Bien
// Requête paginée avec filtres sur table Property (68 colonnes, SELECT partiel)

import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import type { PropertyFilters, PropertyListItem } from '../types/database';

const PAGE_SIZE = 25;

export function usePropertyList(filters: PropertyFilters, page: number) {
  return useQuery({
    queryKey: ['property-list', filters, page],
    queryFn: async () => {
      let query = supabase
        .from('Property')
        .select(
          'id, address, type, status, livingAreaSqm, bedroomCount, estimatedMarketValue, estimatedMarketValuePerSqm, dpeEnergyClass, completionScore, neighborhoodName, createdAt, updatedAt, clientId, agentId',
          { count: 'exact' }
        );

      // Filtres
      if (filters.search) {
        query = query.or(
          `address.ilike.%${filters.search}%,neighborhoodName.ilike.%${filters.search}%`
        );
      }
      if (filters.type?.length) {
        query = query.in('type', filters.type);
      }
      if (filters.status?.length) {
        query = query.in('status', filters.status);
      }
      if (filters.dpeEnergyClass?.length) {
        query = query.in('dpeEnergyClass', filters.dpeEnergyClass);
      }
      if (filters.priceMin) {
        query = query.gte('estimatedMarketValue', filters.priceMin);
      }
      if (filters.priceMax) {
        query = query.lte('estimatedMarketValue', filters.priceMax);
      }
      if (filters.areaMin) {
        query = query.gte('livingAreaSqm', filters.areaMin);
      }
      if (filters.areaMax) {
        query = query.lte('livingAreaSqm', filters.areaMax);
      }
      if (filters.bedroomCountMin) {
        query = query.gte('bedroomCount', filters.bedroomCountMin);
      }
      if (filters.agentId) {
        query = query.eq('agentId', filters.agentId);
      }

      // Tri
      const sortBy = filters.sortBy ?? 'updatedAt';
      query = query.order(sortBy, {
        ascending: (filters.sortOrder ?? 'desc') === 'asc',
      });

      // Pagination
      const from = page * PAGE_SIZE;
      query = query.range(from, from + PAGE_SIZE - 1);

      const { data, error, count } = await query;
      if (error) throw error;
      return {
        properties: data as PropertyListItem[],
        totalCount: count ?? 0,
        page,
        pageSize: PAGE_SIZE,
      };
    },
    placeholderData: keepPreviousData,
  });
}
