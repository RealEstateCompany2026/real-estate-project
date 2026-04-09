/**
 * Calcul du score de complétude — pondération par criticité
 * Utilisé par CompletionGauge (BIE-08, FIC-01, FIB-01)
 */

type FieldWeight = {
  field: string;
  weight: number; // Débloquant: 3, Recommandé: 2, Facultatif: 1
  label: string;
};

// Pondération des champs Client
const CLIENT_FIELDS: FieldWeight[] = [
  { field: 'gender', weight: 2, label: 'Civilité' },
  { field: 'firstName', weight: 3, label: 'Prénom' },
  { field: 'lastName', weight: 3, label: 'Nom' },
  { field: 'status', weight: 3, label: 'Type de client' },
  { field: 'primaryEmail', weight: 3, label: 'Email' },
  { field: 'mobilePhone', weight: 2, label: 'Téléphone' },
  { field: 'address', weight: 2, label: 'Adresse' },
  { field: 'notes', weight: 1, label: 'Notes' },
  { field: 'tags', weight: 1, label: 'Tags' },
  { field: 'searchCriteriaSummary', weight: 1, label: 'Résumé projet' },
];

// Pondération des champs Property
const PROPERTY_FIELDS: FieldWeight[] = [
  { field: 'type', weight: 3, label: 'Type de bien' },
  { field: 'address', weight: 3, label: 'Adresse' },
  { field: 'livingAreaSqm', weight: 3, label: 'Surface habitable' },
  { field: 'numberOfRooms', weight: 3, label: 'Nombre de pièces' },
  { field: 'desiredSellingPrice', weight: 3, label: 'Prix' },
  { field: 'clientId', weight: 3, label: 'Propriétaire' },
  { field: 'operationTypes', weight: 3, label: "Type d'opération" },
  { field: 'dpeEnergyClass', weight: 3, label: 'DPE énergie' },
  { field: 'dpeGasEmissionClass', weight: 3, label: 'DPE GES' },
  { field: 'condition', weight: 2, label: 'État général' },
  { field: 'constructionYear', weight: 2, label: 'Année de construction' },
  { field: 'bedroomCount', weight: 2, label: 'Chambres' },
  { field: 'heatingType', weight: 2, label: 'Chauffage' },
  { field: 'exposures', weight: 1, label: 'Exposition' },
  { field: 'notes', weight: 1, label: 'Notes' },
  { field: 'tags', weight: 1, label: 'Tags' },
];

function isFieldFilled(value: unknown): boolean {
  if (value == null) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (typeof value === 'number') return true;
  if (typeof value === 'boolean') return true;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

export type CompletionLevel = 'red' | 'orange' | 'yellow' | 'green';

export interface CompletionResult {
  score: number;
  level: CompletionLevel;
  suggestion: string;
  missingFields: string[];
}

function getLevel(score: number): CompletionLevel {
  if (score < 30) return 'red';
  if (score < 60) return 'orange';
  if (score < 85) return 'yellow';
  return 'green';
}

function getSuggestion(type: 'client' | 'property', missingFields: FieldWeight[]): string {
  if (missingFields.length === 0) return 'Fiche complète !';

  // Priorise le champ manquant avec le poids le plus élevé
  const highest = missingFields.sort((a, b) => b.weight - a.weight)[0];

  if (type === 'client') {
    return `Ajoutez ${highest.label.toLowerCase()} pour améliorer la fiche`;
  }
  return `Ajoutez ${highest.label.toLowerCase()} pour améliorer la visibilité`;
}

export function calculateCompletion(
  type: 'client' | 'property',
  data: Record<string, unknown>,
  photoCount = 0,
): CompletionResult {
  const fields = type === 'client' ? CLIENT_FIELDS : PROPERTY_FIELDS;

  let totalWeight = 0;
  let filledWeight = 0;
  const missing: FieldWeight[] = [];

  for (const f of fields) {
    totalWeight += f.weight;
    if (isFieldFilled(data[f.field])) {
      filledWeight += f.weight;
    } else {
      missing.push(f);
    }
  }

  // Bonus photos (property uniquement) : 5 pts si ≥ 3 photos
  if (type === 'property') {
    totalWeight += 5;
    if (photoCount >= 3) {
      filledWeight += 5;
    } else {
      missing.push({ field: 'photos', weight: 5, label: 'Photos (min. 3)' });
    }
  }

  const score = totalWeight > 0 ? Math.round((filledWeight / totalWeight) * 100) : 0;

  return {
    score,
    level: getLevel(score),
    suggestion: getSuggestion(type, missing),
    missingFields: missing.map((f) => f.label),
  };
}
