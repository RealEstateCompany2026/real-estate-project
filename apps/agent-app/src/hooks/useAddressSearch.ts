'use client';

import { useState, useRef, useCallback } from 'react';
import { searchAddress, type AddressResult } from '@/lib/utils/address';

interface UseAddressSearchOptions {
  debounceMs?: number;
  limit?: number;
}

/**
 * Hook pour la recherche d'adresses via l'API BAN.
 * Encapsule le debounce et l'état de chargement.
 */
export function useAddressSearch({ debounceMs = 300, limit = 5 }: UseAddressSearchOptions = {}) {
  const [results, setResults] = useState<AddressResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const search = useCallback(
    (query: string) => {
      if (timerRef.current) clearTimeout(timerRef.current);

      if (query.length < 3) {
        setResults([]);
        return;
      }

      timerRef.current = setTimeout(async () => {
        setIsSearching(true);
        const data = await searchAddress(query, limit);
        setResults(data);
        setIsSearching(false);
      }, debounceMs);
    },
    [debounceMs, limit]
  );

  const clear = useCallback(() => {
    setResults([]);
  }, []);

  return { results, isSearching, search, clear };
}
