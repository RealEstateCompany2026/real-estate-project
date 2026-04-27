'use client';

import { useState, useCallback } from 'react';
import { SheetAgendaBien } from '@real-estate/ui/sheet-agenda-bien';
import type { AgendaDay } from '@real-estate/ui/sheet-agenda-bien';
import { useSheetManager } from '@/hooks/useSheetManager';
import { createClient } from '@/lib/supabase/client';
import type { AgendaBienSheetData } from '../fetchers/fetchAgendaBienData';
import type { DpeType } from '@real-estate/ui/icon-dpe';

export default function AgendaBienSheetWrapper({ data }: { data: unknown }) {
  const { closeSheet, notifyMutate } = useSheetManager();
  const d = data as AgendaBienSheetData;

  // ── Local state ──
  const [agendaDays, setAgendaDays] = useState<AgendaDay[]>(d.days);
  const [selectedSlot, setSelectedSlot] = useState<{ date: string; startTime: string } | null>(null);

  // ── DPE validation ──
  const dpeGrade = d.propertyDpeGrade && ['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(d.propertyDpeGrade)
    ? d.propertyDpeGrade as DpeType
    : null;

  // ── Handlers ──
  const handleSlotSelect = useCallback((date: string, startTime: string) => {
    setSelectedSlot({ date, startTime });
    // Update visual state in agendaDays
    setAgendaDays((prev) =>
      prev.map((day) => ({
        ...day,
        slots: day.slots.map((slot) => ({
          ...slot,
          status:
            day.date === date && slot.startTime === startTime
              ? 'selected' as const
              : slot.status === 'selected'
                ? 'available' as const
                : slot.status,
        })),
      }))
    );
  }, []);

  const handleProposeSlot = useCallback(async () => {
    if (!selectedSlot) return;
    const supabase = createClient();
    const eventDateStr = `${selectedSlot.date}T${selectedSlot.startTime}:00`;
    await supabase
      .from('Event')
      .update({ eventDate: eventDateStr, status: 'PROGRAMME' })
      .eq('id', d.eventId);
    notifyMutate();
    closeSheet();
  }, [selectedSlot, d.eventId, notifyMutate, closeSheet]);

  return (
    <SheetAgendaBien
      isOpen={true}
      onClose={closeSheet}
      propertyAddress={d.propertyAddress}
      propertyType={d.propertyType}
      propertySurface={d.propertySurface}
      propertyDpeGrade={dpeGrade}
      clientName={d.clientName}
      currentVisitDateLabel={d.currentVisitDateLabel}
      days={agendaDays}
      onSlotSelect={handleSlotSelect}
      onProposeSlot={handleProposeSlot}
      selectedSlot={selectedSlot}
    />
  );
}
