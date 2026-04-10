// Types Document — alignés sur Supabase (table "Document", 29 cols)

export type DocumentType =
  | 'DIAGNOSTIC' | 'MANDAT' | 'COMPROMIS' | 'ACTE'
  | 'COURRIER' | 'FACTURE' | 'PLAN' | 'PHOTO'
  | 'CNI' | 'PASSEPORT' | 'KBIS'
  | 'BAIL' | 'ETAT_DES_LIEUX'
  | 'AUTRE';

export type DocumentFormat = 'PDF' | 'JPG' | 'JPEG' | 'PNG' | 'DOCX' | 'XLSX' | 'OTHER';

export type DocumentStatus = 'BROUILLON' | 'VALIDE' | 'EXPIRE' | 'ARCHIVE';

export type EsignStatus = 'PENDING' | 'SENT' | 'SIGNED' | 'REFUSED' | 'EXPIRED';

export interface Document {
  id: string;
  title: string;
  url: string;
  description: string | null;

  // Relations — propertyId désormais nullable (D9)
  propertyId: string | null;
  clientId: string | null;
  dealId: string | null;
  organizationId: string | null;
  uploadedById: string | null;

  // Fichier
  type: DocumentType | null;
  fileUrl: string | null;
  fileName: string | null;
  fileSizeKb: number | null;
  fileFormat: DocumentFormat | null;

  // Validité
  expiryDate: string | null;
  isValid: boolean | null;
  validityCheckedAt: string | null;
  validityNotes: string | null;
  documentStatus: DocumentStatus | null;
  isPrivate: boolean;

  // Signature électronique
  signedAt: string | null;
  esignExternalId: string | null;
  esignStatus: EsignStatus | null;

  // Templates
  isTemplate: boolean;
  templateId: string | null;
  generatedFromTemplate: boolean;
  templateVariables: Record<string, unknown> | null;

  // Méta
  createdAt: string;
  updatedAt: string;
}

// Sous-ensemble pour les listes
export interface DocumentListItem {
  id: string;
  title: string;
  type: DocumentType | null;
  format: DocumentFormat | null;
  storagePath: string | null;
  fileName: string | null;
  fileSizeBytes: number | null;
  fileSizeKb: number | null;
  fileFormat: DocumentFormat | null;
  createdAt: string;
}
