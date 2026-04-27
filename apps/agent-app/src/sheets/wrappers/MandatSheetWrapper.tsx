'use client';

import { SheetMandat } from '@real-estate/ui/sheet-mandat';
import { useSheetManager } from '@/hooks/useSheetManager';
import { createClient } from '@/lib/supabase/client';
import type { MandatSheetData } from '../fetchers/fetchMandatData';

export default function MandatSheetWrapper({ data }: { data: unknown }) {
  const { closeSheet, pushSheet, notifyMutate } = useSheetManager();
  const d = data as MandatSheetData;

  const handleToggleAutoManaged = async (auto: boolean) => {
    const supabase = createClient();
    await supabase.from('Deal').update({ mandateWaived: !auto }).eq('id', d.dealId);
    notifyMutate();
  };

  const handleToggleActivation = async (activated: boolean) => {
    const supabase = createClient();
    const nextStage = activated
      ? (d.dealType === 'ACQUISITION' || d.dealType === 'LOCATION' ? 'RECHERCHE' : 'COMMERCIALISATION')
      : 'MANDAT';
    await supabase.from('Deal').update({ pipelineStage: nextStage }).eq('id', d.dealId);
    notifyMutate();
  };

  const handleEditMissingFields = () => {
    pushSheet('mandat-edit', { dealId: d.dealId, mode: 'edit' });
  };

  const handleViewMandate = () => {
    pushSheet('mandat-edit', { dealId: d.dealId, mode: 'review' });
  };

  const handleGenerateMandate = async () => {
    const supabase = createClient();
    await supabase.from('Deal').update({ [d.mandateStatusField]: 'EDITE' }).eq('id', d.dealId);
    notifyMutate();
  };

  return (
    <SheetMandat
      isOpen={true}
      onClose={closeSheet}
      reference={d.reference}
      dealType={d.dealType}
      mandateStatus={d.mandateStatus}
      pipelineStage={d.pipelineStage ?? undefined}
      isAutoManaged={d.isAutoManaged}
      onToggleAutoManaged={handleToggleAutoManaged}
      editionDate={undefined}
      signatureDate={d.signatureDate ?? undefined}
      onViewMandate={handleViewMandate}
      onWriteClient={() => {/* TODO: ouvrir messagerie */}}
      onToggleActivation={handleToggleActivation}
      onEditMissingFields={handleEditMissingFields}
      eligibilityRatio={d.eligibilityRatio}
      isEligible={d.eligibility.isEligible}
      onGenerateMandate={handleGenerateMandate}
    />
  );
}
