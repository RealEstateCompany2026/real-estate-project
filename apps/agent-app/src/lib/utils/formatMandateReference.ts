/**
 * Formate un numéro séquentiel en 9 chiffres groupés par 3 : "000.000.042"
 *
 * @param num - Numéro séquentiel
 */
export function formatReference(num: number): string {
  const padded = String(num).padStart(9, '0');
  return `${padded.slice(0, 3)}.${padded.slice(3, 6)}.${padded.slice(6, 9)}`;
}

/**
 * Formate une référence de mandat au format PREFIX.NNN.NNN.NNN
 * Ex : MV.000.000.042, MRA.000.000.018
 *
 * @param prefix - Préfixe du type de mandat (MV, MRA, MRL, MG)
 * @param num    - Numéro séquentiel du mandat
 */
export function formatMandateReference(prefix: string, num: number): string {
  return `${prefix}.${formatReference(num)}`;
}

/**
 * Extrait le numéro d'un ID de type "xxx-123" et le formate en "000.000.123"
 * Fallback : retourne l'ID brut si pas de numéro extractible
 *
 * @param id - ID au format "prefix-number" (ex: "lst-42")
 */
export function formatIdAsReference(id: string): string {
  const match = id.match(/(\d+)$/);
  if (!match) return id;
  return formatReference(parseInt(match[1], 10));
}
