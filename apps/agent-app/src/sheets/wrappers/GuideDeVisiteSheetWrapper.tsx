'use client';

import { SheetGuideDeVisite } from '@real-estate/ui/sheet-guide-de-visite';
import { useSheetManager } from '@/hooks/useSheetManager';
import type { GuideDeVisiteSheetData } from '../fetchers/fetchGuideDeVisiteData';
import type { DpeType } from '@real-estate/ui/icon-dpe';

export default function GuideDeVisiteSheetWrapper({ data }: { data: unknown }) {
  const { closeSheet } = useSheetManager();
  const d = data as GuideDeVisiteSheetData;

  const dpeGrade = d.propertyDpeGrade && ['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(d.propertyDpeGrade)
    ? d.propertyDpeGrade as DpeType
    : null;

  return (
    <SheetGuideDeVisite
      isOpen={true}
      onClose={closeSheet}
      propertyAddress={d.propertyAddress}
      propertyCity={d.propertyCity}
      propertyType={d.propertyType}
      propertySurface={d.propertySurface}
      propertyDpeGrade={dpeGrade}
      clientName={d.clientName}
      criteria={d.criteria}
      commentaire={d.commentaire}
      visitDateLabel={d.visitDateLabel}
      onContactClient={() => {}}
    />
  );
}
