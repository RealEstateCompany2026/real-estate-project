/**
 * Helpers pour l'API BAN (Base Adresse Nationale)
 * https://api-adresse.data.gouv.fr
 */

const BAN_API_URL = 'https://api-adresse.data.gouv.fr/search';

export interface AddressResult {
  label: string;       // Adresse complète formatée
  street: string;      // Nom de rue + numéro
  zipCode: string;     // Code postal
  city: string;        // Ville
  lat: number;         // Latitude
  lng: number;         // Longitude
}

interface BanFeature {
  properties: {
    label: string;
    name: string;
    postcode: string;
    city: string;
  };
  geometry: {
    coordinates: [number, number]; // [lng, lat]
  };
}

interface BanResponse {
  features: BanFeature[];
}

/**
 * Recherche d'adresse via l'API BAN
 * @param query - Texte de recherche (min 3 caractères)
 * @param limit - Nombre max de résultats (défaut 5)
 */
export async function searchAddress(query: string, limit = 5): Promise<AddressResult[]> {
  if (query.length < 3) return [];

  const params = new URLSearchParams({
    q: query,
    limit: String(limit),
  });

  try {
    const response = await fetch(`${BAN_API_URL}?${params}`);
    if (!response.ok) return [];

    const data: BanResponse = await response.json();

    return data.features.map((f) => ({
      label: f.properties.label,
      street: f.properties.name,
      zipCode: f.properties.postcode,
      city: f.properties.city,
      lat: f.geometry.coordinates[1],
      lng: f.geometry.coordinates[0],
    }));
  } catch {
    console.error('Erreur API BAN');
    return [];
  }
}

/**
 * Normalise une adresse pour la comparaison de doublons
 * Lowercase, sans accents, abréviations unifiées
 */
export function normalizeAddress(address: string): string {
  return address
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // supprime accents
    .replace(/\brue\b/g, 'r')
    .replace(/\bavenue\b/g, 'av')
    .replace(/\bboulevard\b/g, 'bd')
    .replace(/\bplace\b/g, 'pl')
    .replace(/\bimpasse\b/g, 'imp')
    .replace(/\ballée\b/g, 'al')
    .replace(/\s+/g, ' ')
    .trim();
}
