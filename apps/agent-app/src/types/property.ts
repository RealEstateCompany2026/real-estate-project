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

export type ViewType = 'SUR_RUE' | 'SUR_COUR' | 'DEGAGEE' | 'SUR_JARDIN' | 'PANORAMIQUE';
export type PoolType = 'ENTERREE' | 'SEMI_ENTERREE' | 'HORS_SOL' | 'AUCUNE';

export type ParkingType = 'BOX_FERME' | 'PARKING_EXTERIEUR' | 'GARAGE' | 'AUCUN';

export type KitchenType = 'SEPAREE' | 'OUVERTE' | 'AMERICAINE' | 'KITCHENETTE';

export type HotWaterSystem = 'CUMULUS_ELECTRIQUE' | 'CHAUDIERE_GAZ' | 'SOLAIRE' | 'THERMODYNAMIQUE';

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
  neighborhoodName: string | null;

  // Surfaces
  livingAreaSqm: number | null;
  landAreaSqm: number | null;
  terraceAreaSqm: number | null;
  balconyAreaSqm: number | null;
  gardenAreaSqm: number | null;
  mainRoomAreaSqm: number | null;
  mainRoomEquipment: string | null;
  kitchenAreaSqm: number | null;
  basementAreaSqm: number | null;
  atticAreaSqm: number | null;

  // Pièces
  numberOfRooms: number | null;
  bedroomCount: number | null;
  bathroomCount: number | null;
  showerRoomCount: number | null;
  toiletCount: number | null;
  bathroomAreaSqm: number | null;
  bathroomEquipment: string | null;
  toiletAreaSqm: number | null;
  toiletEquipment: string | null;
  bedroom1AreaSqm: number | null;
  bedroom2AreaSqm: number | null;
  bedroom3AreaSqm: number | null;
  bedroom4AreaSqm: number | null;
  bedroom1Equipment: string | null;
  bedroom2Equipment: string | null;
  bedroom3Equipment: string | null;
  bedroom4Equipment: string | null;

  // Construction
  floorLevel: number | null;
  numberOfFloors: number | null;
  constructionYear: number | null;

  // Équipements
  heatingType: HeatingType | null;
  hotWaterSystem: HotWaterSystem | null;
  mainExposure: Exposure | null;    // Legacy single — conservé pour rétrocompatibilité
  exposures: Exposure[];             // Source de vérité — multi-exposition
  kitchenType: KitchenType | null;
  kitchenEquipment: string | null;
  parkingType: ParkingType | null;
  parkingSpotCount: number | null;
  parkingWidthM: number | null;
  parkingLengthM: number | null;
  hasElevator: boolean | null;
  hasDigicode: boolean | null;
  hasGreenSpace: boolean | null;
  hasIntercom: boolean | null;
  hasPool: boolean | null;
  hasHomeAutomation: boolean | null;
  hasSmartphoneControl: boolean | null;
  shutterType: string | null;
  poolType: PoolType | null;
  mainViewType: ViewType | null;

  // DPE
  dpeEnergyClass: DpeClass | null;
  dpeGasEmissionClass: DpeClass | null;
  dpeEnergyKwh: number | null;
  dpeGasGco2: number | null;
  dpeValidityDate: string | null;
  dpeComplianceDeadline: string | null;

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
  OFF_MARKET: 'var(--neutral-400)',
  A_VENDRE: 'var(--green-500)',
  A_LOUER: 'var(--blue-500)',
  VENDU: 'var(--purple-500)',
  LOUE: 'var(--purple-500)',
  EN_VIAGER: 'var(--orange-500)',
  OTHER: 'var(--neutral-400)',
};

export const PROPERTY_CONDITION_LABELS: Record<PropertyCondition, string> = {
  NEUF: 'Neuf',
  RENOVE: 'Rénové',
  BON_ETAT: 'Bon état',
  A_RENOVER: 'À rénover',
  ANCIEN: 'Ancien',
};

export const VIEW_TYPE_LABELS: Record<ViewType, string> = {
  SUR_RUE: 'Sur rue',
  SUR_COUR: 'Sur cour',
  DEGAGEE: 'Dégagée',
  SUR_JARDIN: 'Sur jardin',
  PANORAMIQUE: 'Panoramique',
};

export const POOL_TYPE_LABELS: Record<PoolType, string> = {
  ENTERREE: 'Enterrée',
  SEMI_ENTERREE: 'Semi-enterrée',
  HORS_SOL: 'Hors-sol',
  AUCUNE: 'Aucune',
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

export const HEATING_TYPE_LABELS: Record<HeatingType, string> = {
  INDIVIDUEL_GAZ: 'Individuel gaz',
  INDIVIDUEL_ELECTRIQUE: 'Individuel électrique',
  COLLECTIF_GAZ: 'Collectif gaz',
  PAC: 'Pompe à chaleur',
  FUEL: 'Fuel',
  BOIS: 'Bois',
};

export const HOT_WATER_SYSTEM_LABELS: Record<HotWaterSystem, string> = {
  CUMULUS_ELECTRIQUE: 'Cumulus électrique',
  CHAUDIERE_GAZ: 'Chaudière gaz',
  SOLAIRE: 'Solaire',
  THERMODYNAMIQUE: 'Thermodynamique',
};

export const KITCHEN_TYPE_LABELS: Record<KitchenType, string> = {
  SEPAREE: 'Séparée',
  OUVERTE: 'Ouverte',
  AMERICAINE: 'Américaine',
  KITCHENETTE: 'Kitchenette',
};

export const PARKING_TYPE_LABELS: Record<ParkingType, string> = {
  BOX_FERME: 'Box fermé',
  PARKING_EXTERIEUR: 'Parking extérieur',
  GARAGE: 'Garage',
  AUCUN: 'Aucun',
};
