// types/database.ts — Types partagés RealAgent CRM
// À terme, généré via `supabase gen types typescript`
// Pour l'instant, types manuels alignés sur le schéma Supabase déployé

// ─── Enums Supabase ───────────────────────────────────────────────

export type ClientStatus = 'PROPRIETAIRE' | 'ACQUEREUR' | 'BAILLEUR' | 'LOCATAIRE';

export type PropertyType =
  | 'STUDIO' | 'T1' | 'T2' | 'T3' | 'T4'
  | 'MAISON_DE_VILLE' | 'APPARTEMENT' | 'MAISON'
  | 'LOFT' | 'TERRAIN' | 'IMMEUBLE' | 'OTHER';

export type PropertyStatus =
  | 'OFF_MARKET' | 'A_VENDRE' | 'A_LOUER'
  | 'LOUE' | 'VENDU' | 'EN_VIAGER' | 'OTHER';

export type DpeClass = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CONVERTED' | 'LOST';

export type LeadSource = 'PAGE_PUBLIQUE' | 'PORTAIL' | 'CAMPAGNE' | 'REFERRAL';

export type TriggerStatus = 'ACTIF' | 'TRAITE' | 'IGNORE' | 'EXPIRE';

export type TriggerType =
  | 'INACTIVITY' | 'DPE_ALERT' | 'MARKET_OPPORTUNITY'
  | 'CREDIT_RENEGOCIATION' | 'BIRTHDAY' | 'ANNIVERSARY'
  | 'DATA_MISSING' | 'DOCUMENT_EXPIRY' | 'STAGNATION' | 'MOMENTUM';

export type LifecycleStage =
  | 'lead' | 'prospect' | 'qualified'
  | 'active' | 'converted' | 'dormant' | 'lost';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large';

// ─── Score response types (retours RPCs) ──────────────────────────

export interface KpiThresholds {
  error: number;
  warning: number;
}

export interface ClientScores {
  clientId: string;
  lifecycle: LifecycleStage;
  statuses: string[]; // mapped EN: 'owner' | 'buyer' | 'landlord' | 'tenant'
  qual: {
    score: number;
    filledWeight: number;
    totalWeight: number;
    thresholds: KpiThresholds;
    breakdown: Record<string, { w: number; f: boolean }>;
  };
  eng: {
    score: number;
    status: string;
  };
  conv: {
    score: number;
    bestDeal: string | null;
    hasCarnetBonus: boolean;
    thresholds: KpiThresholds;
    breakdown: Array<{ dealId: string; dealType: string; pct: number }>;
  };
  reac: {
    score: number;
    status: string;
  };
  suggestions: any[];
}

export interface PropertyScores {
  propertyId: string;
  propertyType: string;
  propertyStatus: string;
  qual: {
    score: number;
    filledWeight: number;
    totalWeight: number;
    thresholds: KpiThresholds;
    breakdown: Record<string, { w: number; f: boolean }>;
  };
  entretien: {
    score: number;
    thresholds: KpiThresholds;
    breakdown: Record<string, { w: number; s: number; a: boolean }>;
  };
  conv: {
    score: number;
    bestDeal: string | null;
    thresholds: KpiThresholds;
    breakdown: Array<{ dealId: string; dealType: string; pct: number }>;
  };
}

// ─── List item types (requêtes SELECT partielles) ─────────────────

export interface ClientListItem {
  id: string;
  firstName: string;
  lastName: string;
  primaryEmail: string | null;
  mobilePhone: string | null;
  status: ClientStatus[];
  lifecycleStage: LifecycleStage;
  address: string | null;
  source: string | null;
  qualificationScore: number | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  agentId: string;
}

export interface PropertyListItem {
  id: string;
  address: string | null;
  type: PropertyType;
  status: PropertyStatus;
  livingAreaSqm: number | null;
  bedroomCount: number | null;
  estimatedMarketValue: number | null;
  estimatedMarketValuePerSqm: number | null;
  dpeEnergyClass: DpeClass | null;
  completionScore: number | null;
  neighborhoodName: string | null;
  createdAt: string;
  updatedAt: string;
  clientId: string | null;
  agentId: string;
}

export interface MatchingClient {
  id: string;
  firstName: string;
  lastName: string;
  primaryEmail: string | null;
  mobilePhone: string | null;
  searchCriteriaSummary: string | null;
  lifecycleStage: LifecycleStage;
}

export interface AiSuggestion {
  id: string;
  type: TriggerType;
  category: string;
  label: string;
  description: string;
  score: number;
  status: TriggerStatus;
  detectedAt: string;
  expiryDate: string | null;
  automationCode: string | null;
  engagementScoreImpact: number | null;
  signalSource: string;
}

export interface PropertyDiagnostic {
  id: string;
  propertyId: string;
  topic: 'plomberie' | 'electricite' | 'isolation' | 'toiture' | 'menuiseries' | 'chauffage' | 'humidite';
  completedAt: string;
  score: number | null;
  recommendation: 'ok' | 'monitor' | 'professional_needed' | null;
  answeredBy: 'owner' | 'agent' | null;
  answersJson: Record<string, any> | null;
}

export interface DealLead {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  message: string | null;
  source: LeadSource;
  score: number | null;
  status: LeadStatus;
  convertedToClientId: string | null;
  createdAt: string;
}

// ─── Filter types ─────────────────────────────────────────────────

export interface ClientFilters {
  search?: string;
  status?: ClientStatus[];
  lifecycleStage?: LifecycleStage[];
  agentId?: string;
  isActive?: boolean;
  sortBy?: 'lastName' | 'createdAt' | 'updatedAt' | 'qualificationScore';
  sortOrder?: 'asc' | 'desc';
}

export interface PropertyFilters {
  search?: string;
  type?: PropertyType[];
  status?: PropertyStatus[];
  dpeEnergyClass?: DpeClass[];
  priceMin?: number;
  priceMax?: number;
  areaMin?: number;
  areaMax?: number;
  bedroomCountMin?: number;
  agentId?: string;
  sortBy?: 'address' | 'createdAt' | 'updatedAt' | 'estimatedMarketValue' | 'livingAreaSqm' | 'completionScore';
  sortOrder?: 'asc' | 'desc';
}
