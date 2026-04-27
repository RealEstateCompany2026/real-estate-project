'use client';

import { SheetBienDetails } from '@real-estate/ui/sheet-bien-details';
import type { BienSheetData } from '../fetchers/fetchBienData';

export default function BienSheetWrapper({ data }: { data: unknown }) {
  const d = data as BienSheetData;

  return (
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
  );
}
