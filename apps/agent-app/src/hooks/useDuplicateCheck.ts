'use client';

import { useState, useRef, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

interface DuplicateMatch {
  id: string;
  firstName: string;
  lastName: string;
  primaryEmail: string;
  mobilePhone: string | null;
}

interface UseDuplicateCheckOptions {
  debounceMs?: number;
  excludeId?: string; // Exclure un client existant (édition)
}

/**
 * Hook de détection de doublons client.
 * Vérifie en base si un client avec le même email ou téléphone existe déjà.
 * Déclenché avec debounce pour éviter trop d'appels.
 */
export function useDuplicateCheck({ debounceMs = 500, excludeId }: UseDuplicateCheckOptions = {}) {
  const [matches, setMatches] = useState<DuplicateMatch[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const checkDuplicates = useCallback(
    (params: { email?: string; phone?: string; firstName?: string; lastName?: string }) => {
      if (timerRef.current) clearTimeout(timerRef.current);

      // Need at least one field
      const { email, phone, firstName, lastName } = params;
      if (!email && !phone && !(firstName && lastName)) {
        setMatches([]);
        return;
      }

      timerRef.current = setTimeout(async () => {
        setIsChecking(true);
        try {
          const supabase = createClient();
          let query = supabase
            .from('Client')
            .select('id, firstName, lastName, primaryEmail, mobilePhone')
            .eq('isActive', true)
            .limit(5);

          if (excludeId) {
            query = query.neq('id', excludeId);
          }

          // Chercher par email OU par téléphone OU par nom complet
          const conditions: string[] = [];
          if (email && email.length >= 3) {
            conditions.push(`primaryEmail.ilike.%${email}%`);
          }
          if (phone && phone.length >= 6) {
            conditions.push(`mobilePhone.ilike.%${phone}%`);
          }
          if (firstName && lastName) {
            conditions.push(`and(firstName.ilike.%${firstName}%,lastName.ilike.%${lastName}%)`);
          }

          if (conditions.length === 0) {
            setMatches([]);
            setIsChecking(false);
            return;
          }

          query = query.or(conditions.join(','));

          const { data, error } = await query;

          if (error) {
            console.error('Duplicate check error:', error);
            setMatches([]);
          } else {
            setMatches(data ?? []);
          }
        } catch {
          console.error('Duplicate check failed');
          setMatches([]);
        } finally {
          setIsChecking(false);
        }
      }, debounceMs);
    },
    [debounceMs, excludeId]
  );

  const dismiss = useCallback(() => {
    setMatches([]);
  }, []);

  return { matches, isChecking, checkDuplicates, dismiss };
}
