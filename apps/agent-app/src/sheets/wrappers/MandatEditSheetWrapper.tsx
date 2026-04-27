'use client';

import { useState } from 'react';
import { SheetMandatEdit } from '@real-estate/ui/sheet-mandat-edit';
import { useSheetManager } from '@/hooks/useSheetManager';
import { createClient } from '@/lib/supabase/client';
import type { MandatEditSheetData } from '../fetchers/fetchMandatEditData';

export default function MandatEditSheetWrapper({ data }: { data: unknown }) {
  const { closeSheet, notifyMutate } = useSheetManager();
  const d = data as MandatEditSheetData;

  const [isRevision, setIsRevision] = useState(d.isRevision);

  const handleSave = async (updates: Record<string, Record<string, string | number | null>>) => {
    const supabase = createClient();
    const promises: PromiseLike<any>[] = [];

    if (updates.organization && Object.keys(updates.organization).length > 0) {
      promises.push(
        supabase.from('Organization').update(updates.organization).not('id', 'is', null).select()
      );
    }
    if (updates.client && Object.keys(updates.client).length > 0 && d.clientId) {
      promises.push(
        supabase.from('Client').update(updates.client).eq('id', d.clientId).select()
      );
    }
    if (updates.property && Object.keys(updates.property).length > 0 && d.propertyId) {
      promises.push(
        supabase.from('Property').update(updates.property).eq('id', d.propertyId).select()
      );
    }
    if (updates.deal && Object.keys(updates.deal).length > 0) {
      promises.push(
        supabase.from('Deal').update(updates.deal).eq('id', d.dealId).select()
      );
    }

    await Promise.all(promises);
    notifyMutate();
  };

  const handleToggleRevision = async (checked: boolean) => {
    const supabase = createClient();
    const newStatus = checked ? 'REVISE' : 'EDITE';
    await supabase.from('Deal').update({ [d.mandateStatusField]: newStatus }).eq('id', d.dealId);
    setIsRevision(checked);
    notifyMutate();
  };

  const handleSendMandate = async () => {
    const supabase = createClient();
    await supabase.from('Deal').update({ [d.mandateStatusField]: 'ENVOYE' }).eq('id', d.dealId);
    notifyMutate();
    closeSheet();
  };

  return (
    <SheetMandatEdit
      isOpen={true}
      onClose={closeSheet}
      reference={d.reference}
      dealType={d.dealType}
      sections={d.sections}
      onSave={handleSave}
      {...(d.mode === 'review' ? {
        isRevision,
        onToggleRevision: handleToggleRevision,
        footerMode: 'review' as const,
        onSendMandate: handleSendMandate,
      } : {})}
    />
  );
}
