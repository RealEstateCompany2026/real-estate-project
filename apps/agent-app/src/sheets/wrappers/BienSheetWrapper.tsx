'use client';

import { Sheet } from '@real-estate/ui/sheet';
import { SheetBienDetails } from '@real-estate/ui/sheet-bien-details';
import { useSheetManager } from '@/hooks/useSheetManager';
import type { BienSheetData } from '../fetchers/fetchBienData';

export default function BienSheetWrapper({ data }: { data: unknown }) {
  const { closeSheet } = useSheetManager();
  const d = data as BienSheetData;

  return (
    <Sheet
      isOpen={true}
      onClose={closeSheet}
      title={`${d.bienType} . ${d.surface}`}
      width="narrow"
    >
      <SheetBienDetails
        bienType={d.bienType}
        surface={d.surface}
        type={d.type}
        price={d.price}
        location={d.location}
        dpe={d.dpe}
        qualification={d.qualification}
        entretien={d.entretien}
        conversion={d.conversion}
        suggestions={d.suggestions}
        recentLogs={d.recentLogs}
      />
    </Sheet>
  );
}
