// Shared helpers for document display across fiches and DocumentListView

export const DOCUMENT_TYPE_LABELS: Record<string, string> = {
  CNI: 'CNI',
  PASSEPORT: 'Passeport',
  KBIS: 'KBIS',
  DPE: 'DPE',
  AMIANTE: 'Amiante',
  PLOMB: 'Plomb',
  TERMITES: 'Termites',
  GAZ: 'Gaz',
  ELECTRICITE: 'Électricité',
  ERP: 'ERP',
  LOI_CARREZ: 'Loi Carrez',
  DIAGNOSTIC_BRUIT: 'Diagnostic bruit',
  DIAGNOSTIC_ASSAINISSEMENT: 'Diagnostic assainissement',
  MANDAT_VENTE: 'Mandat de vente',
  MANDAT_LOCATION: 'Mandat de location',
  MANDAT_GESTION: 'Mandat de gestion',
  BAIL: 'Bail',
  COMPROMIS: 'Compromis',
  ACTE_NOTARIE: 'Acte notarié',
  OFFRE_ACHAT: "Offre d'achat",
  ETAT_DES_LIEUX: 'État des lieux',
  QUITTANCE: 'Quittance',
  ATTESTATION_VISITE: 'Attestation de visite',
  FICHE_PAIE: 'Fiche de paie',
  AVIS_IMPOSITION: "Avis d'imposition",
  OFFRE_PRET: 'Offre de prêt',
  ATTESTATION_FINANCEMENT: 'Attestation de financement',
  ACTE_PROPRIETE: 'Acte de propriété',
  ANNONCE: 'Annonce',
  COMPTE_RENDU: 'Compte-rendu',
  AUTRE: 'Autre',
};

export function computeDocumentValidity(expiryDate: string | null): 'valid' | 'expiring' | 'expired' | undefined {
  if (!expiryDate) return undefined;
  const expiry = new Date(expiryDate);
  const now = new Date();
  const thirtyDays = 30 * 24 * 60 * 60 * 1000;
  if (expiry < now) return 'expired';
  if (expiry.getTime() - now.getTime() < thirtyDays) return 'expiring';
  return 'valid';
}

export function formatDocumentDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
}
