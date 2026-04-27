import { createClient } from '@/lib/supabase/client';
import { DOCUMENT_TYPE_LABELS, computeDocumentValidity, formatDocumentDate } from '@/utils/documentHelpers';

export interface DocumentSheetData {
  title: string;
  validityStatus?: 'valid' | 'expiring' | 'expired';
  expiryDate?: string;
  fileFormat?: string;
  fileName?: string;
  fileSizeKb?: number;
  previewUrl?: string;
  documentType?: string;
  documentStatus?: string;
  uploadedBy?: string;
  uploadedDate?: string;
  modifiedDate?: string;
  signedDate?: string;
  clients: Array<{ name: string; id: string }>;
  properties: Array<{ label: string; id: string }>;
  deals: Array<{ label: string; id: string }>;
}

export async function fetchDocumentData(payload: { documentId: string }): Promise<DocumentSheetData> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('Document')
    .select(`
      id, title, type, documentStatus, expiryDate, createdAt,
      fileName, fileFormat, fileSizeKb, url, signedAt, updatedAt,
      Client:clientId ( id, firstName, lastName ),
      Property:propertyId ( id, addressCity, type, livingAreaSqm ),
      Deal:dealId ( id, reference )
    `)
    .eq('id', payload.documentId)
    .single();

  if (error || !data) throw new Error(error?.message ?? 'Document not found');

  const d = data as any;
  return {
    title: d.title ?? d.fileName ?? 'Document',
    validityStatus: computeDocumentValidity(d.expiryDate),
    expiryDate: d.expiryDate ? formatDocumentDate(d.expiryDate) : undefined,
    fileFormat: d.fileFormat ?? undefined,
    fileName: d.fileName ?? undefined,
    fileSizeKb: d.fileSizeKb ?? undefined,
    previewUrl: d.url ?? undefined,
    documentType: DOCUMENT_TYPE_LABELS[d.type] ?? d.type ?? undefined,
    documentStatus: d.documentStatus ?? undefined,
    uploadedBy: 'Agent',
    uploadedDate: d.createdAt ? formatDocumentDate(d.createdAt) : undefined,
    modifiedDate: d.updatedAt ? formatDocumentDate(d.updatedAt) : undefined,
    signedDate: d.signedAt ? formatDocumentDate(d.signedAt) : undefined,
    clients: d.Client ? [{ name: `${d.Client.firstName} ${d.Client.lastName}`, id: d.Client.id }] : [],
    properties: d.Property ? [{ label: d.Property.addressCity ?? 'Bien', id: d.Property.id }] : [],
    deals: d.Deal ? [{ label: d.Deal.reference ?? 'Affaire', id: d.Deal.id }] : [],
  };
}
