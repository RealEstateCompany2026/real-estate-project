// Types Deal — alignés sur Supabase (table "Deal", 45 cols)
// Subset utilisé pour l'affichage dans les fiches Client et Bien (P08/P09)

export type DealType = 'VENTE' | 'BAIL' | 'ACQUISITION' | 'LOCATION' | 'GESTION';

export type DealStatus = 'INACTIVE' | 'EN_COURS' | 'CLOTUREE' | 'ARCHIVEE';

export type PipelineStage =
  | 'PROSPECT' | 'QUALIFICATION' | 'ESTIMATION'
  | 'MANDAT' | 'COMMERCIALISATION' | 'VISITE'
  | 'OFFRE' | 'COMPROMIS' | 'ACTE'
  | 'CLOTURE';

export interface DealListItem {
  id: string;
  title: string;
  clientId?: string;
  propertyId?: string | null;
  agentId?: string | null;
  type: DealType;
  status: DealStatus;
  pipelineStage: PipelineStage | null;
  amount: number | null;
  lastActivityDate?: string | null;

  // Vente
  saleMandateStatus?: string | null;
  finalSalePrice?: number | null;

  // Acquisition
  acquisitionMinBudget?: number | null;
  acquisitionMaxBudget?: number | null;

  // Bail
  bailMonthlyRent?: number | null;

  createdAt: string;
  updatedAt?: string;
}

export const DEAL_TYPE_LABELS: Record<DealType, string> = {
  VENTE: 'Vente',
  BAIL: 'Bail',
  ACQUISITION: 'Acquisition',
  LOCATION: 'Location',
  GESTION: 'Gestion',
};

export const DEAL_STATUS_LABELS: Record<DealStatus, string> = {
  INACTIVE: 'Inactive',
  EN_COURS: 'En cours',
  CLOTUREE: 'Clôturée',
  ARCHIVEE: 'Archivée',
};

export const PIPELINE_STAGE_LABELS: Record<PipelineStage, string> = {
  PROSPECT: 'Prospect',
  QUALIFICATION: 'Qualification',
  ESTIMATION: 'Estimation',
  MANDAT: 'Mandat',
  COMMERCIALISATION: 'Commercialisation',
  VISITE: 'Visite',
  OFFRE: 'Offre',
  COMPROMIS: 'Compromis',
  ACTE: 'Acte',
  CLOTURE: 'Clôture',
};
