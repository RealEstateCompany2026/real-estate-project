'use client';

import { useState } from 'react';
import { SheetOrdreDuJour } from '@real-estate/ui/sheet-ordre-du-jour';
import { useSheetManager } from '@/hooks/useSheetManager';
import { createClient } from '@/lib/supabase/client';
import type { OrdreDuJourSheetData } from '../fetchers/fetchOrdreDuJourData';
import type { DpeType } from '@real-estate/ui/icon-dpe';

export default function OrdreDuJourSheetWrapper({ data }: { data: unknown }) {
  const { closeSheet, notifyMutate } = useSheetManager();
  const d = data as OrdreDuJourSheetData;

  // Local editing state (initialized from fetched data)
  const [content, setContent] = useState(d.odjContent);
  const [isRevision, setIsRevision] = useState(d.odjIsRevision);
  const [odjStatus, setOdjStatus] = useState(d.odjStatus);

  const dpeGrade = d.propertyDpeGrade && ['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(d.propertyDpeGrade)
    ? d.propertyDpeGrade as DpeType
    : null;

  const handleToggleRevision = async (checked: boolean) => {
    const supabase = createClient();
    const newStatus = checked ? 'REVISE' : 'EDITE';
    await supabase
      .from('Event')
      .update({ odjContent: content, odjStatus: newStatus })
      .eq('id', d.eventId);
    setIsRevision(checked);
    setOdjStatus(newStatus as 'EDITE' | 'REVISE');
    notifyMutate();
  };

  const handleSend = async () => {
    const supabase = createClient();
    const now = new Date().toISOString();
    await supabase
      .from('Event')
      .update({ odjContent: content, odjStatus: 'ENVOYE', odjSentAt: now })
      .eq('id', d.eventId);
    setOdjStatus('ENVOYE');
    notifyMutate();
    closeSheet();
  };

  return (
    <SheetOrdreDuJour
      isOpen={true}
      onClose={closeSheet}
      propertyAddress={d.propertyAddress}
      propertyCity={d.propertyCity}
      propertyType={d.propertyType}
      propertySurface={d.propertySurface}
      propertyDpeGrade={dpeGrade}
      clientName={d.clientName}
      content={content}
      onContentChange={setContent}
      odjStatus={odjStatus}
      isRevision={isRevision}
      onToggleRevision={handleToggleRevision}
      onSend={handleSend}
    />
  );
}
