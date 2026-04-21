/**
 * Types et constantes pour les Affaires (Deals)
 * Source de vérité pour DealType, PipelineStage et BadgeVariant
 */

export type DealType = 'VENTE' | 'ACQUISITION' | 'LOCATION' | 'GESTION';

export const DEAL_TYPE_LABELS: Record<DealType, string> = {
  VENTE: 'Vente',
  ACQUISITION: 'Acquisition',
  LOCATION: 'Location',
  GESTION: 'Gestion',
};

export type PipelineStage =
  | 'MANDAT'
  | 'COMMERCIALISATION'
  | 'RECHERCHE'
  | 'VISITES'
  | 'CLOSING'
  | 'GESTION'
  | 'RENOUVELLEMENT';

export const PIPELINE_STAGE_LABELS: Record<PipelineStage, string> = {
  MANDAT: 'Mandat',
  COMMERCIALISATION: 'Commercialisation',
  RECHERCHE: 'Recherche',
  VISITES: 'Visites',
  CLOSING: 'Closing',
  GESTION: 'Gestion',
  RENOUVELLEMENT: 'Renouvellement',
};

// BadgeVariant est exporté par ../atoms/Badge.tsx — ne pas dupliquer ici
