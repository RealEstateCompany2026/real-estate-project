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

// ── Main creation schema ────────────────────────────────────────────
export const propertyCreateSchema = z.object({
  // Section 1 — Catégorie
  type: z.enum([
    'STUDIO', 'T1', 'T2', 'T3', 'T4',
    'APPARTEMENT', 'MAISON', 'MAISON_DE_VILLE', 'LOFT',
    'TERRAIN', 'IMMEUBLE', 'OTHER',
  ]),
  operationTypes: z
    .array(z.enum(['VENTE', 'LOCATION', 'VIAGER', 'CESSION']))
    .min(1, 'Sélectionnez au moins un type d\'opération'),
  numberOfRooms: z.coerce.number().int().min(0, 'Nombre de pièces requis').optional(),

  // Section 2 — Localisation
  address: z.string().min(1, 'Adresse requise'),
  addressStreet: z.string().optional(),
  addressZipCode: z.string().optional(),
  addressCity: z.string().optional(),
  addressLat: z.coerce.number().optional(),
  addressLng: z.coerce.number().optional(),
  neighborhoodName: z.string().optional(),
  floorLevel: optionalCoerceInt,
  numberOfFloors: optionalCoerceInt,

  // Section 3 — Surfaces
  livingAreaSqm: z.coerce.number().positive('La surface doit être supérieure à 0'),
  landAreaSqm: optionalCoerceNumber,
  terraceAreaSqm: optionalCoerceNumber,
  balconyAreaSqm: optionalCoerceNumber,
  gardenAreaSqm: optionalCoerceNumber,

  // Section 4 — Pièces (PropertyRoom) → handled separately
  rooms: z.array(propertyRoomSchema).default([]),

  // Section 5 — Caractéristiques techniques
  condition: z.enum(['NEUF', 'RENOVE', 'BON_ETAT', 'A_RENOVER', 'ANCIEN']).optional(),
  constructionYear: z.coerce
    .number()
    .int()
    .min(1800, 'Année invalide')
    .max(currentYear + 2, 'Année invalide')
    .optional(),
  heatingType: z.enum([
    'INDIVIDUEL_GAZ', 'INDIVIDUEL_ELECTRIQUE', 'COLLECTIF_GAZ', 'PAC', 'FUEL', 'BOIS',
  ]).optional(),
  hotWaterSystem: z.enum([
    'CUMULUS_ELECTRIQUE', 'CHAUDIERE_GAZ', 'SOLAIRE', 'THERMODYNAMIQUE',
  ]).optional(),
  exposures: z
    .array(z.enum(['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO']))
    .default([]),
  mainViewType: z.enum([
    'SUR_RUE', 'SUR_COUR', 'DEGAGEE', 'SUR_JARDIN', 'PANORAMIQUE',
  ]).optional(),
  parkingType: z.enum(['BOX_FERME', 'PARKING_EXTERIEUR', 'GARAGE', 'AUCUN']).optional(),
  parkingSpotCount: optionalCoerceInt,
  shutterType: z.string().optional(),

  // Section 6 — Équipements (PropertyFeature) → stored as string[]
  featureKeys: z.array(z.string()).default([]),

  // Section 7 — Diagnostics (PropertyDiagnostic) → handled separately
  diagnostics: z.array(propertyDiagnosticSchema).default([]),

  // Section 8 — Prix
  desiredSellingPrice: z.coerce.number().positive('Le prix doit être supérieur à 0'),
  estimatedMarketValue: optionalCoerceNumber,

  // Section 9 — Informations complémentaires
  clientId: z.string().min(1, 'Propriétaire requis'),
  status: z
    .enum(['OFF_MARKET', 'A_VENDRE', 'A_LOUER', 'VENDU', 'LOUE', 'EN_VIAGER', 'OTHER'])
    .default('OFF_MARKET'),
  internalRef: z.string().optional(),
  notes: z.string().max(2000, 'Max 2000 caractères').optional(),
  tags: z.array(z.string()).default([]),
});

export type PropertyCreateData = z.infer<typeof propertyCreateSchema>;
export type PropertyRoomData = z.infer<typeof propertyRoomSchema>;
export type PropertyDiagnosticData = z.infer<typeof propertyDiagnosticSchema>;

// Édition inline — schéma partiel
export const propertyUpdateSchema = propertyCreateSchema.partial();
export type PropertyUpdateData = z.infer<typeof propertyUpdateSchema>;
