// Types Client — alignés sur les colonnes réelles Supabase (table "Client", 48+ cols)

export type ClientGender = 'HOMME' | 'FEMME' | 'AUTRE';

export type ClientStatus = 'PROPRIETAIRE' | 'ACQUEREUR' | 'BAILLEUR' | 'LOCATAIRE';

export type ClientSource = 'IMPORT_CSV' | 'MANUEL' | 'CRM' | 'ANNONCE';

export type LifecycleStage = 'lead' | 'prospect' | 'qualified' | 'active' | 'converted' | 'dormant' | 'lost';

export type PreferredChannel = 'EMAIL' | 'PHONE' | 'SMS' | 'WHATSAPP';

export interface Client {
  id: string;
  organizationId: string | null;
  agentId: string | null;
  userId: string | null;

  // Identité (CLI-02)
  gender: ClientGender | null;
  firstName: string;
  lastName: string;
  status: ClientStatus[]; // Array — multi-type possible
  dateOfBirth: string | null;
  placeOfBirth: string | null;
  nationality: string | null;
  maritalStatus: string | null;

  // Coordonnées (CLI-03)
  primaryEmail: string;
  secondaryEmail: string | null;
  mobilePhone: string | null;
  address: string | null;
  preferredChannel: PreferredChannel | null;

  // Professionnel
  jobTitle: string | null;
  employer: string | null;
  incomeBracket: string | null;
  siren: string | null;

  // Documents identité (URLs Supabase Storage)
  cniUrl: string | null;
  cniExpiryDate: string | null;
  passportUrl: string | null;
  passportExpiryDate: string | null;
  kbisUrl: string | null;
  titleDeedUrl: string | null;
  paySlipUrl: string | null;
  taxStatementUrl: string | null;
  loanOfferUrl: string | null;
  financingExpiryDate: string | null;

  // Portfolio
  totalOwnedProperties: number | null;
  propertiesForSaleCount: number | null;
  propertiesUnderMgmtCount: number | null;

  // Projet & CRM
  source: ClientSource | null;
  searchCriteriaSummary: string | null;
  notes: string | null;
  tags: string[];
  lifecycleStage: LifecycleStage | null;

  // Scoring
  qualificationScore: number | null;
  reactivationScore: number | null;
  triggerCount: number | null;
  completionScore: number;
  isPotentialDuplicate: boolean;

  // RGPD
  language: string;
  emailConsent: boolean;
  emailConsentSource: string | null;
  emailConsentDate: string | null;

  // Méta
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Sous-ensemble pour les cards et listes
export interface ClientListItem {
  id: string;
  firstName: string;
  lastName: string;
  status: ClientStatus[];
  primaryEmail: string;
  mobilePhone: string | null;
  agentId: string | null;
  completionScore: number;
  isActive: boolean;
  createdAt: string;
}

// Labels d'affichage
export const CLIENT_STATUS_LABELS: Record<ClientStatus, string> = {
  PROPRIETAIRE: 'Propriétaire',
  ACQUEREUR: 'Acquéreur',
  BAILLEUR: 'Bailleur',
  LOCATAIRE: 'Locataire',
};

export const CLIENT_STATUS_COLORS: Record<ClientStatus, string> = {
  PROPRIETAIRE: 'var(--blue-500)',
  ACQUEREUR: 'var(--green-500)',
  BAILLEUR: 'var(--purple-500)',
  LOCATAIRE: 'var(--orange-500)',
};

export const CLIENT_GENDER_LABELS: Record<ClientGender, string> = {
  HOMME: 'M.',
  FEMME: 'Mme',
  AUTRE: '',
};

export const CLIENT_SOURCE_LABELS: Record<ClientSource, string> = {
  MANUEL: 'Saisie manuelle',
  IMPORT_CSV: 'Import CSV',
  CRM: 'CRM externe',
  ANNONCE: 'Annonce',
};
