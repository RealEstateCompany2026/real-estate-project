/**
 * Génération de la référence interne d'un bien
 * Format : [PREFIX_ORG]-[TYPE]-[COMPTEUR]
 * Ex : AGC-APT-0042
 */

import type { PropertyType } from '@/types/property';

const TYPE_CODES: Record<PropertyType, string> = {
  STUDIO: 'STU',
  T1: 'T1',
  T2: 'T2',
  T3: 'T3',
  T4: 'T4',
  APPARTEMENT: 'APT',
  MAISON: 'MAI',
  MAISON_DE_VILLE: 'MDV',
  LOFT: 'LOF',
  TERRAIN: 'TER',
  IMMEUBLE: 'IMM',
  OTHER: 'AUT',
};

/**
 * Génère le préfixe de l'organisation (3 premières lettres uppercase)
 */
export function getOrgPrefix(orgName: string): string {
  return orgName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z]/g, '')
    .substring(0, 3)
    .toUpperCase()
    .padEnd(3, 'X'); // pad si nom < 3 lettres
}

/**
 * Génère la référence interne complète
 * @param orgName - Nom de l'organisation
 * @param propertyType - Type du bien
 * @param counter - Compteur incrémenté (fourni par le serveur)
 */
export function generateInternalRef(
  orgName: string,
  propertyType: PropertyType,
  counter: number,
): string {
  const prefix = getOrgPrefix(orgName);
  const typeCode = TYPE_CODES[propertyType] || 'AUT';
  const num = String(counter).padStart(4, '0');
  return `${prefix}-${typeCode}-${num}`;
}
