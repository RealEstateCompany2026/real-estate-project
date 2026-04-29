import { z } from 'zod';

/**
 * Validation téléphone français — accepte les formats courants :
 * 06 12 34 56 78, 0612345678, +33 6 12 34 56 78, +33612345678
 */
const PHONE_FR_REGEX = /^(?:(?:\+33|0033)\s?[1-9](?:[\s.-]?\d{2}){4}|0[1-9](?:[\s.-]?\d{2}){4})$/;

// Création complète — V2 formulaire one-page 6 sections
export const clientCreateSchema = z.object({
  // Section 1 — Type de client
  status: z.array(z.enum(['PROPRIETAIRE', 'ACQUEREUR', 'BAILLEUR', 'LOCATAIRE'])).min(1, 'Au moins 1 type requis'),

  // Section 2 — Informations de profil
  gender: z.enum(['HOMME', 'FEMME']),
  lastName: z.string().min(1, 'Nom requis').max(100),
  firstName: z.string().min(1, 'Prénom requis').max(100),
  dateOfBirth: z.string().min(1, 'Date de naissance requise'),
  placeOfBirth: z.string().max(100).optional().or(z.literal('')),
  nationality: z.string().max(100).optional().or(z.literal('')),
  maritalStatus: z.enum(['CELIBATAIRE', 'MARIE', 'PACSE', 'DIVORCE', 'VEUF']).optional(),

  // Section 3 — Contact
  primaryEmail: z.string().email('Email invalide'),
  secondaryEmail: z.string().email('Email invalide').optional().or(z.literal('')),
  mobilePhone: z.string().min(1, 'Téléphone requis').refine(
    (val) => val === '' || PHONE_FR_REGEX.test(val.trim()),
    { message: 'Numéro invalide (ex: 06 12 34 56 78 ou +33 6 12 34 56 78)' },
  ),
  address: z.string().min(1, 'Adresse requise'),

  // Section 4 — Marketing (RGPD)
  emailConsent: z.boolean().default(false),
  smsConsent: z.boolean().default(false),
  whatsappConsent: z.boolean().default(false),

  // Section 5 — Professionnel
  jobTitle: z.string().max(100).optional().or(z.literal('')),
  employer: z.string().max(100).optional().or(z.literal('')),
  incomeBracket: z.string().optional().or(z.literal('')),

  // Section 6 — Complémentaire
  notes: z.string().max(2000, 'Max 2000 caractères').optional().or(z.literal('')),

  // Hidden defaults
  source: z.enum(['MANUEL', 'IMPORT_CSV', 'CRM', 'ANNONCE']).default('MANUEL'),
  language: z.string().default('fr'),
});

export type ClientCreateData = z.infer<typeof clientCreateSchema>;

// Création rapide (CLI-07) — depuis la modale BIE-02
export const clientQuickCreateSchema = z.object({
  firstName: z.string().min(1, 'Prénom requis'),
  lastName: z.string().min(1, 'Nom requis'),
  status: z
    .array(z.enum(['PROPRIETAIRE', 'ACQUEREUR', 'BAILLEUR', 'LOCATAIRE']))
    .min(1, 'Sélectionnez au moins un type'),
  primaryEmail: z.string().email('Email invalide'),
  mobilePhone: z.string().optional(),
});

export type ClientQuickCreateData = z.infer<typeof clientQuickCreateSchema>;

// Édition inline (FIC-08) — schéma partiel
export const clientUpdateSchema = clientCreateSchema.partial();

export type ClientUpdateData = z.infer<typeof clientUpdateSchema>;

/**
 * Normalise un numéro de téléphone français au format E.164 (+33612345678).
 * Accepte 06 12 34 56 78, 0612345678, +33 6 12 34 56 78, etc.
 */
export function normalizePhoneE164(phone: string): string {
  const digits = phone.replace(/[\s.\-()]/g, '');
  if (digits.startsWith('+33')) return digits;
  if (digits.startsWith('0033')) return '+33' + digits.slice(4);
  if (digits.startsWith('0') && digits.length === 10) return '+33' + digits.slice(1);
  return phone;
}
