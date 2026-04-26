/**
 * Génère un nombre pseudo-aléatoire déterministe entre 0 et 1
 * basé sur un seed string + un index.
 * Utilisé pour les mocks KPI afin d'éviter les erreurs d'hydration Next.js.
 */
export function seedRandom(seed: string, index: number = 0): number {
  let hash = 0;
  const str = `${seed}-${index}`;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  // Normalize to 0-1
  return Math.abs((Math.sin(hash) * 10000) % 1);
}

/**
 * Génère un entier pseudo-aléatoire déterministe dans [min, max]
 */
export function seedRandomInt(seed: string, index: number, min: number, max: number): number {
  return Math.floor(seedRandom(seed, index) * (max - min + 1)) + min;
}
