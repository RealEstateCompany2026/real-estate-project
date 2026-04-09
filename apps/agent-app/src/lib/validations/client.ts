import { z } from 'zod';

// Création complète (CLI-01→06)
export const clientCreateSchema = z.object({
  // CLI-02 — Identité
  gender: z.enum(['HOMME', 'FEMME', 'AUTRE']).optional(),
  firstName: z.string().min(1, 'Prénom requis').max(100),
  lastName: z.string().min(1, 'Nom requis').max(100),
  status: z
    .array(z.enum(['PROPRIETAIRE', 'ACQUEREUR', 'BAILLEUR', 'LOCATAIRE']))
    .min(1, 'Sélectionnez au moins un type'),

  // CLI-03 — Coordonnées
  primaryEmail: z.string().email('Email invalide'),
  secondaryEmail: z.string().email('Email invalide').optional().or(z.literal('')),
  mobilePhone: z.string().optional(), // validation libphonenumber côté hook
  address: z.string().optional(),

  // CLI-05 — Projet (résumé texte, détail dans Deal/P10)
  searchCriteriaSummary: z.string().max(500).optional(),

  // CLI-06 — Notes & tags
  source: z.enum(['MANUEL', 'IMPORT_CSV', 'CRM', 'ANNONCE']).default('MANUEL'),
  notes: z.string().max(2000, 'Max 2000 caractères').optional(),
  tags: z.array(z.string()).optional().default([]),

  // RGPD
  emailConsent: z.boolean().default(false),
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
