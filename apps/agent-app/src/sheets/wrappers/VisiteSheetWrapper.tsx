'use client';

import { useState, useRef, useCallback } from 'react';
import { SheetVisite } from '@real-estate/ui/sheet-visite';
import { useSheetManager } from '@/hooks/useSheetManager';
import { createClient } from '@/lib/supabase/client';
import type { VisiteSheetData } from '../fetchers/fetchVisiteData';
import type { DpeType } from '@real-estate/ui/icon-dpe';

/** Escapes ILIKE special characters (%, _, \) to avoid unintended wildcards. */
function escapeIlike(str: string): string {
  return str.replace(/[%_\\]/g, '\\$&');
}

export default function VisiteSheetWrapper({ data }: { data: unknown }) {
  const { closeSheet, pushSheet, notifyMutate } = useSheetManager();
  const d = data as VisiteSheetData;

  // ── Local state ──
  const [isEditingProperty, setIsEditingProperty] = useState(false);
  const [propertySearchQuery, setPropertySearchQuery] = useState('');
  const [propertySearchResults, setPropertySearchResults] = useState<Array<{ id: string; label: string }>>([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);
  const [isAddingInvite, setIsAddingInvite] = useState(false);
  const [clientSearchQuery, setClientSearchQuery] = useState('');
  const [clientSearchResults, setClientSearchResults] = useState<Array<{ id: string; label: string }>>([]);
  const [selectedInviteClientId, setSelectedInviteClientId] = useState<string | null>(null);
  const propertySearchAbort = useRef<AbortController | null>(null);
  const clientSearchAbort = useRef<AbortController | null>(null);

  // ── DPE validation ──
  const dpeGrade = d.propertyDpeGrade && ['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(d.propertyDpeGrade)
    ? d.propertyDpeGrade as DpeType
    : null;

  // ── Property search autocomplete ──
  const handlePropertySearchChange = useCallback(async (query: string) => {
    setPropertySearchQuery(query);
    setSelectedPropertyId(null);
    if (query.length < 3) {
      setPropertySearchResults([]);
      return;
    }
    propertySearchAbort.current?.abort();
    const controller = new AbortController();
    propertySearchAbort.current = controller;
    const supabase = createClient();
    const { data } = await supabase
      .from('Property')
      .select('id, address')
      .ilike('address', `%${escapeIlike(query)}%`)
      .limit(10)
      .abortSignal(controller.signal);
    if (controller.signal.aborted) return;
    setPropertySearchResults(
      (data ?? []).map((p: { id: string; address: string | null }) => ({ id: p.id, label: p.address ?? '' }))
    );
  }, []);

  const handlePropertySelect = useCallback((propertyId: string) => {
    setSelectedPropertyId(propertyId);
    const match = propertySearchResults.find((r) => r.id === propertyId);
    if (match) setPropertySearchQuery(match.label);
    setPropertySearchResults([]);
  }, [propertySearchResults]);

  const handleSaveProperty = useCallback(async () => {
    if (!selectedPropertyId || !d.dealId) return;
    const supabase = createClient();
    await supabase.from('Deal').update({ propertyId: selectedPropertyId }).eq('id', d.dealId);
    setIsEditingProperty(false);
    setPropertySearchQuery('');
    setPropertySearchResults([]);
    setSelectedPropertyId(null);
    notifyMutate();
  }, [selectedPropertyId, d.dealId, notifyMutate]);

  // ── Client search autocomplete ──
  const handleClientSearchChange = useCallback(async (query: string) => {
    setClientSearchQuery(query);
    setSelectedInviteClientId(null);
    if (query.length < 2) {
      setClientSearchResults([]);
      return;
    }
    clientSearchAbort.current?.abort();
    const controller = new AbortController();
    clientSearchAbort.current = controller;
    const supabase = createClient();
    const escaped = escapeIlike(query);
    const { data } = await supabase
      .from('Client')
      .select('id, firstName, lastName')
      .or(`firstName.ilike.%${escaped}%,lastName.ilike.%${escaped}%`)
      .limit(10)
      .abortSignal(controller.signal);
    if (controller.signal.aborted) return;
    setClientSearchResults(
      (data ?? []).map((c: { id: string; firstName: string | null; lastName: string | null }) => ({
        id: c.id,
        label: `${c.firstName ?? ''} ${c.lastName ?? ''}`.trim(),
      }))
    );
  }, []);

  const handleClientSelect = useCallback((clientId: string) => {
    setSelectedInviteClientId(clientId);
    const match = clientSearchResults.find((r) => r.id === clientId);
    if (match) setClientSearchQuery(match.label);
    setClientSearchResults([]);
  }, [clientSearchResults]);

  const handleSaveInvite = useCallback(async () => {
    if (!selectedInviteClientId) return;
    const supabase = createClient();
    await supabase.from('Event').update({ clientId: selectedInviteClientId }).eq('id', d.eventId);
    setIsAddingInvite(false);
    setClientSearchQuery('');
    setClientSearchResults([]);
    setSelectedInviteClientId(null);
    notifyMutate();
  }, [selectedInviteClientId, d.eventId, notifyMutate]);

  // ── Sub-sheet handlers ──
  const handleOpenOdj = useCallback(() => {
    pushSheet('ordre-du-jour', { eventId: d.eventId });
  }, [d.eventId, pushSheet]);

  const handleOpenGuide = useCallback(() => {
    pushSheet('guide-de-visite', { eventId: d.eventId });
  }, [d.eventId, pushSheet]);

  const handleOpenAgenda = useCallback(() => {
    if (!d.propertyId) return;
    pushSheet('agenda-bien', { propertyId: d.propertyId, eventId: d.eventId });
  }, [d.propertyId, d.eventId, pushSheet]);

  return (
    <SheetVisite
      isOpen={true}
      onClose={closeSheet}
      visitStatus={d.visitStatus}
      propertyAddress={d.propertyAddress}
      propertyCity={d.propertyCity}
      propertyType={d.propertyType}
      propertySurface={d.propertySurface}
      propertyDpeGrade={dpeGrade}
      invites={d.invites}
      selectedSlotLabel={d.selectedSlotLabel}
      odjStatus={d.odjStatus}
      guideStatus={d.guideStatus}
      onViewOdj={handleOpenOdj}
      onViewGuide={handleOpenGuide}
      onOpenAgenda={handleOpenAgenda}
      isEditingProperty={isEditingProperty}
      onToggleEditProperty={() => setIsEditingProperty((v) => !v)}
      propertySearchQuery={propertySearchQuery}
      onPropertySearchChange={handlePropertySearchChange}
      propertySearchResults={propertySearchResults}
      onPropertySelect={handlePropertySelect}
      onSaveProperty={handleSaveProperty}
      isAddingInvite={isAddingInvite}
      onToggleAddInvite={() => setIsAddingInvite((v) => !v)}
      clientSearchQuery={clientSearchQuery}
      onClientSearchChange={handleClientSearchChange}
      clientSearchResults={clientSearchResults}
      onClientSelect={handleClientSelect}
      onSaveInvite={handleSaveInvite}
    />
  );
}
