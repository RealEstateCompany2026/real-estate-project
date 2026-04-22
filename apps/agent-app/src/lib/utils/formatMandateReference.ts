/**
 * Formate une reference de mandat au format points + 9 chiffres groupes par 3
 * Ex : MV.000.000.042, MRA.000.000.018
 *
 * @param prefix - Prefixe du type de mandat (MV, MRA, MRL, MG)
 * @param num    - Numero sequentiel du mandat
 */
export function formatMandateReference(prefix: string, num: number): string {
  const padded = String(num).padStart(9, '0');
  return `${prefix}.${padded.slice(0, 3)}.${padded.slice(3, 6)}.${padded.slice(6, 9)}`;
}
