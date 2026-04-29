import { z } from 'zod';

const currentYear = new Date().getFullYear();

// ── Helpers ──────────────────────────────────────────────────────────
const optionalCoerceNumber = z.coerce.number().positive().optional();
const optionalCoerceInt = z.coerce.number().int().min(0).optional();

// ── PropertyRoom sub-schema (for form array) ────────────────────────
export const propertyRoomSchema = z.object({
  roomType: z.enum([
    'SEJOUR', 'CUISINE', 'CHAMBRE', 'SALLE_DE_BAIN', 'DOUCHE',
    'WC', 'BUREAU', 'CELLIER', 'DRESSING', 'BUANDERIE',
  ]),
  areaSqm: z.coerce.number().positive('Surface > 0').optional().nullable(),
  kitchenType: z.enum(['SEPAREE', 'OUVERTE', 'AMERICAINE', 'KITCHENETTE']).optional().nullable(),
  hasBathtub: z.boolean().optional().nullable(),
  hasShower: z.boolean().optional().nullable(),
  hasToilet: z.boolean().optional().nullable(),
  equipment: z.array(z.string()).default([]),
  sortOrder: z.number().int().default(0),
});

// ── PropertyDiagnostic sub-schema ───────────────────────────────────
export const propertyDiagnosticSchema = z.object({
  diagnosticType: z.enum(['DPE', 'GES', 'AMIANTE', 'PLOMB', 'TERMITES', 'ERP', 'CARREZ']),
  class: z.string().optional().nullable(),
  value: z.coerce.number().positive().optional().nullable(),
  unit: z.string().optional().nullable(),
  validityDate: z.string().optional().nullable(),
  companyName: z.string().optional().nullable(),
});

// ── PropertyFeature sub-schema (key + comment) ─────────────────────
export const propertyFeatureSchema = z.object({
  key: z.string().min(1),
  comment: z.string().optional().default(''),
});

// ── Main creation schema ────────────────────────────────────────────
export const propertyCreateSchema = z.object({
  // Section 1 — Statut du bien
  statusCheckboxes: z
    .array(z.enum(['OFF_MARKET', 'A_VENDRE', 'A_LOUER', 'EN_VIAGER', 'SOUS_GESTION']))
    .default([]),
  clientIds: z.array(z.string().min(1)).min(1, 'Au moins un propriétaire requis'),

  // Section 2 — Informations générales
  type: z.enum([
    'STUDIO', 'T1', 'T2', 'T3', 'T4',
    'APPARTEMENT', 'MAISON', 'MAISON_DE_VILLE', 'LOFT',
    'TERRAIN', 'IMMEUBLE', 'OTHER',
  ]),
  livingAreaSqm: z.coerce.number().positive('La surface doit être supérieure à 0'),
  numberOfRooms: z.coerce.number().int().min(0).optional(),
  mainExposure: z.enum(['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO']).optional(),
  mainViewType: z.enum([
    'SUR_RUE', 'SUR_COUR', 'DEGAGEE', 'SUR_JARDIN', 'PANORAMIQUE',
  ]).optional(),
  address: z.string().min(1, 'Adresse requise'),
  addressStreet: z.string().optional(),
  addressZipCode: z.string().optional(),
  addressCity: z.string().optional(),
  addressLat: z.coerce.number().optional(),
  addressLng: z.coerce.number().optional(),
  building: z.string().optional(),
  doorNumber: z.string().optional(),
  floorLevel: optionalCoerceInt,
  numberOfFloors: optionalCoerceInt,
  constructionYear: z.coerce
    .number()
    .int()
    .min(1800, 'Année invalide')
    .max(currentYear + 2, 'Année invalide')
    .optional(),
  condition: z.enum(['NEUF', 'RENOVE', 'BON_ETAT', 'A_RENOVER', 'ANCIEN']).optional(),

  // Section 3 — Valeur marché
  desiredSellingPrice: z.coerce.number().positive().optional(),
  estimatedMarketValue: optionalCoerceNumber,

  // Section 4 — Surfaces
  landAreaSqm: optionalCoerceNumber,
  terraceAreaSqm: optionalCoerceNumber,

  // Section 5 — Pièces (PropertyRoom)
  rooms: z.array(propertyRoomSchema).default([]),

  // Section 6 — Diagnostics
  diagnostics: z.array(propertyDiagnosticSchema).default([]),

  // Section 7 — Équipements (now key+comment objects)
  featureKeys: z.array(propertyFeatureSchema).default([]),

  // Section 8 — Stationnement
  parkingType: z.enum(['BOX_FERME', 'PARKING_EXTERIEUR', 'GARAGE', 'AUCUN']).optional(),
  parkingLengthM: z.coerce.number().positive().optional(),
  parkingWidthM: z.coerce.number().positive().optional(),

  // Section 9 — Parties communes
  hasElevator: z.boolean().optional(),
  hasDigicode: z.boolean().optional(),
  hasIntercom: z.boolean().optional(),

  // Section 10 — Informations complémentaires
  notes: z.string().max(2000, 'Max 2000 caractères').optional(),

  // Rétrocompatibilité
  exposures: z
    .array(z.enum(['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO']))
    .default([]),
  operationTypes: z
    .array(z.enum(['VENTE', 'LOCATION', 'VIAGER', 'CESSION']))
    .default([]),
  status: z
    .enum(['OFF_MARKET', 'A_VENDRE', 'A_LOUER', 'VENDU', 'LOUE', 'EN_VIAGER', 'SOUS_GESTION', 'OTHER'])
    .default('OFF_MARKET'),
  tags: z.array(z.string()).default([]),
  internalRef: z.string().optional(),
  neighborhoodName: z.string().optional(),
  balconyAreaSqm: optionalCoerceNumber,
  gardenAreaSqm: optionalCoerceNumber,
  heatingType: z.enum([
    'INDIVIDUEL_GAZ', 'INDIVIDUEL_ELECTRIQUE', 'COLLECTIF_GAZ', 'PAC', 'FUEL', 'BOIS',
  ]).optional(),
  hotWaterSystem: z.enum([
    'CUMULUS_ELECTRIQUE', 'CHAUDIERE_GAZ', 'SOLAIRE', 'THERMODYNAMIQUE',
  ]).optional(),
  parkingSpotCount: optionalCoerceInt,
  shutterType: z.string().optional(),
});

export type PropertyCreateData = z.infer<typeof propertyCreateSchema>;
export type PropertyRoomData = z.infer<typeof propertyRoomSchema>;
export type PropertyDiagnosticData = z.infer<typeof propertyDiagnosticSchema>;
export type PropertyFeatureData = z.infer<typeof propertyFeatureSchema>;

// Édition inline — schéma partiel
export const propertyUpdateSchema = propertyCreateSchema.partial();
export type PropertyUpdateData = z.infer<typeof propertyUpdateSchema>;
