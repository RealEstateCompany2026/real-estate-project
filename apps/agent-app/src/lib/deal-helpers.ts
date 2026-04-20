import type { BadgeVariant } from '@real-estate/ui/badge';

export function formatCurrency(amount: number | null | undefined): string {
  if (amount == null) return '\u2014';
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function computeWeightedRevenue(deal: { forecastRevenue: number | null; winProbability: number | null }): string {
  if (deal.forecastRevenue == null || deal.winProbability == null) return '\u2014';
  return formatCurrency((deal.forecastRevenue * deal.winProbability) / 100);
}

export function listingStatusToVariant(status: string | null): BadgeVariant {
  if (status === 'PUBLIEE') return 'success';
  if (status === 'EDITEE' || status === 'EN_VALIDATION') return 'warning';
  return 'disabled'; // NON_CREEE, ARCHIVEE, null
}

export function occupancyStatusToVariant(status: string | null): BadgeVariant {
  if (status === 'OCCUPE') return 'success';
  return 'disabled'; // VACANT, null
}

export function maintenanceStatusToVariant(status: string | null): BadgeVariant {
  if (status === 'AUCUN' || status == null) return 'success';
  if (status === 'PROGRAMME') return 'warning';
  if (status === 'URGENT') return 'error';
  return 'disabled';
}

export function purchaseOfferToPromiseVariant(status: string | null): BadgeVariant {
  if (status === 'ACCEPTEE') return 'success';
  if (status === 'EN_ATTENTE' || status === 'ENVOYEE' || status === 'CONTRE_OFFRE') return 'warning';
  if (status === 'REFUSEE') return 'error';
  return 'disabled'; // AUCUNE, null
}
