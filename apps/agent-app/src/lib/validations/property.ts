import { z } from 'zod';

const currentYear = new Date().getFullYear();

// Création complète (BIE-01→06)
export const propertyCreateSchema = z.object({
  // BIE-02 — Informations clés (obligatoires)
  type: z.enum([
    'STUDIO', 'T1', 'T2', 'T3', 'T4',
    'APPARTEMENT', 'MAISON', 'MAISON_DE_VILLE', 'LOFT',
    'TERRAIN', 'IMMEUBLE', 'OTHER',
  ]),
  operationTypes: z
    .array(z.enum(['VENTE', 'LOCATION', 'VIAGER', 'CESSION']))
    .min(1, 'Sélectionnez au moins un type d\'opération'),
  address: z.string().min(1, 'Adresse requise'),
  addressStreet: z.string().optional(),
  addressZipCode: z.string().optional(),
  addressCity: z.string().optional(),
  addressLat: z.number().optional(),
  addressLng: z.number().optional(),
  livingAreaSqm: z.number().positive('La surface doit être supérieure à 0'),
  numberOfRooms: z.number().int().min(1, 'Au moins 1 pièce'),
  desiredSellingPrice: z.number().positive('Le prix doit être supérieur à 0'),
  clientId: z.string().min(1, 'Propriétaire requis'), // FK → Client

  // BIE-03 — Description (facultatif)
  floorLevel: z.number().int().min(0).optional(),
  numberOfFloors: z.number().int().min(0).optional(),
  constructionYear: z
    .number()
    .int()
    .min(1800, 'Année invalide')
    .max(currentYear + 2, 'Année invalide')
    .optional(),
  condition: z.enum(['NEUF', 'RENOVE', 'BON_ETAT', 'A_RENOVER', 'ANCIEN']).optional(),

  // BIE-04 — Caractéristiques (facultatif)
  landAreaSqm: z.number().positive().optional(),
  bedroomCount: z.number().int().min(0).optional(),
  bathroomCount: z.number().int().min(0).optional(),
  showerRoomCount: z.number().int().min(0).optional(),
  toiletCount: z.number().int().min(0).optional(),
  heatingType: z
    .enum(['INDIVIDUEL_GAZ', 'INDIVIDUEL_ELECTRIQUE', 'COLLECTIF_GAZ', 'PAC', 'FUEL', 'BOIS'])
    .optional(),
  exposures: z
    .array(z.enum(['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO']))
    .optional()
    .default([]),
  dpeEnergyClass: z.enum(['A', 'B', 'C', 'D', 'E', 'F', 'G']).optional(),
  dpeGasEmissionClass: z.enum(['A', 'B', 'C', 'D', 'E', 'F', 'G']).optional(),
  hasElevator: z.boolean().optional(),
  hasIntercom: z.boolean().optional(),
  hasPool: z.boolean().optional(),
  hasHomeAutomation: z.boolean().optional(),
  parkingType: z.enum(['BOX_FERME', 'PARKING_EXTERIEUR', 'GARAGE', 'AUCUN']).optional(),
  parkingSpotCount: z.number().int().min(0).optional(),

  // BIE-06 — Notes & statut (facultatif)
  status: z
    .enum(['OFF_MARKET', 'A_VENDRE', 'A_LOUER', 'VENDU', 'LOUE', 'EN_VIAGER', 'OTHER'])
    .default('OFF_MARKET'),
  internalRef: z.string().optional(), // Auto-généré si vide
  notes: z.string().max(2000, 'Max 2000 caractères').optional(),
  tags: z.array(z.string()).optional().default([]),
});

export type PropertyCreateData = z.infer<typeof propertyCreateSchema>;

// Édition inline (FIB) — schéma partiel
export const propertyUpdateSchema = propertyCreateSchema.partial();

export type PropertyUpdateData = z.infer<typeof propertyUpdateSchema>;
