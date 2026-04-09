'use client';

import { useMemo } from 'react';
import { calculateCompletion, type CompletionResult } from '@/lib/utils/completion';

/**
 * Hook pour calculer le score de complétude d'un client ou d'un bien.
 * Re-calcule automatiquement quand les données changent.
 */
export function useCompletionScore(
  type: 'client' | 'property',
  data: Record<string, unknown>,
  photoCount = 0,
): CompletionResult {
  return useMemo(
    () => calculateCompletion(type, data, photoCount),
    [type, data, photoCount]
  );
}
