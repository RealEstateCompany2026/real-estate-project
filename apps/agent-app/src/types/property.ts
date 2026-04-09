// Types Property — alignés sur les colonnes réelles Supabase (table "Property", 68+ cols)

export type PropertyType =
  | 'STUDIO' | 'T1' | 'T2' | 'T3' | 'T4'
  | 'APPARTEMENT' | 'MAISON' | 'MAISON_DE_VILLE' | 'LOFT'
  | 'TERRAIN' | 'IMMEUBLE' | 'OTHER';

export type PropertyStatus =
  | 'OFF_MARKET' | 'A_VENDRE' | 'A_LOUER'
  | 'VENDU' | 'LOUE' | 'EN_VIAGER' | 'OTHER';

export type PropertyCondition =
  | 'NEUF' | 'RENOVE' | 'BON_ETAT' | 'A_RENOVER' | 'ANCIEN';

export type HeatingType =
  | 'INDIVIDUEL_GAZ' | 'INDIVIDUEL_ELECTRIQUE' | 'COLLECTIF_GAZ'
  | 'PAC' | 'FUEL' | 'BOIS';

export type Exposure = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SO' | 'O' | 'NO';

export type DpeClass = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type ParkingType = 'BOX_FERME' | 'PARKING_EXTERIEUR' | 'GARAGE' | 'AUCUN';

export type KitchenType = 'SEPAREE' | 'OUVERTE' | 'AMERICAINE' | 'KITCHENETTE';

export type OperationType = 'VENTE' | 'LOCATION' | 'VIAGER' | 'CESSION';

// Catégories (mapping front uniquement — pas en BDD)
export type PropertyCategory = 'RESIDENTIEL' | 'TERRAIN' | 'COMMERCIAL' | 'AUTRE';

export const PROPERTY_CATEGORY_TYPES: Record<PropertyCategory, PropertyType[]> = {
  RESIDENTIEL: ['APPARTEMENT', 'MAISON', 'MAISON_DE_VILLE', 'STUDIO', 'LOFT', 'T1', 'T2', 'T3', 'T4'],
  TERRAIN: ['TERRAIN'],
  COMMERCIAL: ['OTHER'], // à enrichir quand les enums seront étendus
  AUTRE: ['IMMEUBLE', 'OTHER'],
};

export interface Property {
  id: string;
  organizationId: string | null;
  agentId: string | null;
  clientId: string | null;      // FK → Client (propriétaire CRM — utilisé par l'agent)
  ownerId: string | null;       // FK → User (propriétaire App Client — réconciliation future)
  referencePropertyId: string | null; // FK → analytics.reference_property (méga-base)

  // Type & statut
  type: PropertyType;
  status: PropertyStatus;
  condition: PropertyCondition | null;
  operationTypes: OperationType[]; // Un bien peut être en vente ET location

  // Adresse
  address: string;
  addressStreet: string | null;
  addressZipCode: string | null;
  addressCity: string | null;
  addressLat: number | null;
  addressLng: number | null;

  // Surfaces
  livingAreaSqm: number | null;
  landAreaSqm: number | null;
  terraceAreaSqm: number | null;
  balconyAreaSqm: number | null;
  gardenAreaSqm: number | null;

  // Pièces
  numberOfRooms: number | null;
  bedroomCount: number | null;
  bathroomCount: number | null;
  showerRoomCount: number | null;
  toiletCount: number | null;

  // Construction
  floorLevel: number | null;
  numberOfFloors: number | null;
  constructionYear: number | null;

  // Équipements
  heatingType: HeatingType | null;
  mainExposure: Exposure | null;    // Legacy single — conservé pour rétrocompatibilité
  exposures: Exposure[];             // Source de vérité — multi-exposition
  kitchenType: KitchenType | null;
  parkingType: ParkingType | null;
  parkingSpotCount: number | null;
  hasElevator: boolean | null;
  hasIntercom: boolean | null;
  hasPool: boolean | null;
  hasHomeAutomation: boolean | null;

  // DPE
  dpeEnergyClass: DpeClass | null;
  dpeGasEmissionClass: DpeClass | null;
  dpeEnergyKwh: number | null;
  dpeGasGco2: number | null;

  // Prix
  estimatedMarketValue: number | null;
  estimatedMarketValuePerSqm: number | null;
  desiredSellingPrice: number | null;

  // Complétude
  completionScore: number | null;
  completionMissingFields: string[] | null;

  // Notes & tags
  internalRef: string | null;
  notes: string | null;
  tags: string[];

  // Relations
  listingId: string | null;
  coOwnershipId: string | null;

  // Méta
  createdAt: string;
  updatedAt: string;
}

// Sous-ensemble pour les cards
export interface PropertyListItem {
  id: string;
  type: PropertyType;
  status: PropertyStatus;
  address: string;
  addressCity: string | null;
  livingAreaSqm: number | null;
  numberOfRooms: number | null;
  desiredSellingPrice: number | null;
  dpeEnergyClass: DpeClass | null;
  completionScore: number | null;
  internalRef: string | null;
  createdAt: string;
}

// Table PropertyMedia
export interface PropertyMedia {
  id: string;
  propertyId: string;
  organizationId: string | null;
  mediaType: 'photo' | 'document';
  storagePath: string;
  fileName: string;
  fileSizeBytes: number | null;
  mimeType: string | null;
  sortOrder: number;
  isCover: boolean;
  uploadedBy: string | null;
  createdAt: string;
  updatedAt: string;
}

// Table PropertyFeature
export interface PropertyFeature {
  id: string;
  propertyId: string;
  featureKey: string;
  featureValue: string | null;
  createdAt: string;
}

// Table PropertyShareLink
export interface PropertyShareLink {
  id: string;
  propertyId: string;
  createdBy: string | null;
  organizationId: string | null;
  expiresAt: string | null;
  passwordHash: string | null;
  viewCount: number;
  isActive: boolean;
  createdAt: string;
}

// Labels d'affichage
export const PROPERTY_TYPE_LABELS: Record<PropertyType, string> = {
  STUDIO: 'Studio',
  T1: 'T1',
  T2: 'T2',
  T3: 'T3',
  T4: 'T4',
  APPARTEMENT: 'Appartement',
  MAISON: 'Maison',
  MAISON_DE_VILLE: 'Maison de ville',
  LOFT: 'Loft',
  TERRAIN: 'Terrain',
  IMMEUBLE: 'Immeuble',
  OTHER: 'Autre',
};

export const PROPERTY_STATUS_LABELS: Record<PropertyStatus, string> = {
  OFF_MARKET: 'Brouillon',
  A_VENDRE: 'À vendre',
  A_LOUER: 'À louer',
  VENDU: 'Vendu',
  LOUE: 'Loué',
  EN_VIAGER: 'En viager',
  OTHER: 'Autre',
};

export const PROPERTY_STATUS_COLORS: Record<PropertyStatus, string> = {
  OFF_MARKET: 'var(--color-neutral-400)',
  A_VENDRE: 'var(--color-green-500)',
  A_LOUER: 'var(--color-blue-500)',
  VENDU: 'var(--color-purple-500)',
  LOUE: 'var(--color-purple-500)',
  EN_VIAGER: 'var(--color-orange-500)',
  OTHER: 'var(--color-neutral-400)',
};

export const PROPERTY_CONDITION_LABELS: Record<PropertyCondition, string> = {
  NEUF: 'Neuf',
  RENOVE: 'Rénové',
  BON_ETAT: 'Bon état',
  A_RENOVER: 'À rénover',
  ANCIEN: 'Ancien',
};

export const DPE_COLORS: Record<DpeClass, string> = {
  A: '#319834',
  B: '#33CC31',
  C: '#CBFC34',
  D: '#FBFE06',
  E: '#FBCB02',
  F: '#F37020',
  G: '#EE1D23',
};

export const OPERATION_TYPE_LABELS: Record<OperationType, string> = {
  VENTE: 'Vente',
  LOCATION: 'Location',
  VIAGER: 'Viager',
  CESSION: 'Cession fonds de commerce',
};

export const CATEGORY_LABELS: Record<PropertyCategory, string> = {
  RESIDENTIEL: 'Résidentiel',
  TERRAIN: 'Terrain',
  COMMERCIAL: 'Commercial',
  AUTRE: 'Autre',
};
