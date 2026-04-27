'use client';

import { SheetDocument } from '@real-estate/ui/sheet-document';
import { useSheetManager } from '@/hooks/useSheetManager';
import type { DocumentSheetData } from '../fetchers/fetchDocumentData';

export default function DocumentSheetWrapper({ data }: { data: unknown }) {
  const { closeSheet, pushSheet } = useSheetManager();
  const d = data as DocumentSheetData;

  return (
    <SheetDocument
      isOpen={true}
      onClose={closeSheet}
      title={d.title}
      validityStatus={d.validityStatus}
      expiryDate={d.expiryDate}
      fileFormat={d.fileFormat}
      fileName={d.fileName}
      fileSizeKb={d.fileSizeKb}
      previewUrl={d.previewUrl}
      documentType={d.documentType}
      documentStatus={d.documentStatus}
      uploadedBy={d.uploadedBy}
      uploadedDate={d.uploadedDate}
      modifiedDate={d.modifiedDate}
      signedDate={d.signedDate}
      clients={d.clients.map(c => ({
        name: c.name,
        onClick: () => pushSheet('client', { clientId: c.id }),
      }))}
      properties={d.properties.map(p => ({
        label: p.label,
        onClick: () => pushSheet('bien', { propertyId: p.id }),
      }))}
      deals={d.deals.map(deal => ({
        label: deal.label,
        onClick: () => pushSheet('affaire', { dealId: deal.id }),
      }))}
      onDownload={() => {}}
      onSend={() => {}}
      onEdit={() => {}}
    />
  );
}
