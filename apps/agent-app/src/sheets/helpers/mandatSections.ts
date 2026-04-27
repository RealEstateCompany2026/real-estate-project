// Shared helpers for building mandate eligibility/full sections
// Used by both fetchMandatData and fetchMandatEditData

import type { EligibilitySection, EligibilityField } from '@real-estate/ui/sheet-mandat-edit';
import type { MissingField, EligibilityResult } from '@/lib/checkMandateEligibility';
import type { DealType } from '@real-estate/ui/deal-types';
import { PROPERTY_TYPE_LABELS } from '@/types/property';

// ---------------------------------------------------------------------------
// buildEligibilitySections — builds sections from missing fields only
// ---------------------------------------------------------------------------

export function buildEligibilitySections(
  eligibility: EligibilityResult,
  currentType: DealType,
): EligibilitySection[] {
  const sectionMap: Record<string, { fields: MissingField[]; allFields: MissingField[] }> = {};
  const sectionOrder = ['Agence', 'Client', 'Bien', 'Recherche'];

  for (const mf of eligibility.missingFields) {
    if (!sectionMap[mf.section]) sectionMap[mf.section] = { fields: [], allFields: [] };
    sectionMap[mf.section].fields.push(mf);
  }

  return sectionOrder
    .filter((s) => {
      const hasMissing = !!sectionMap[s]?.fields.length;
      if (s === 'Bien') return currentType === 'VENTE' || currentType === 'GESTION';
      if (s === 'Recherche') return currentType === 'ACQUISITION' || currentType === 'LOCATION';
      return hasMissing || s === 'Agence' || s === 'Client';
    })
    .map((s) => {
      const missing = sectionMap[s]?.fields ?? [];
      return {
        title: s,
        status: missing.length === 0 ? 'valid' as const : 'invalid' as const,
        fields: missing.map((mf) => ({
          entity: mf.entity,
          field: mf.field,
          label: mf.label,
          value: null as string | null,
          type: mf.type as 'text' | 'number' | 'date' | 'select',
        })),
      };
    });
}

// ---------------------------------------------------------------------------
// buildFullMandateSections — builds full mandate sections with all data
// ---------------------------------------------------------------------------

interface DealForSections {
  Client: { firstName: string | null; lastName: string | null; address: string | null } | null;
  Property: {
    type: string | null;
    livingAreaSqm: number | null;
    address: string | null;
    addressCity: string | null;
    desiredSellingPrice: number | null;
    numberOfRooms: number | null;
  } | null;
  searchCity: string | null;
  searchPropertyType: string | null;
  searchSurfaceMin: number | null;
  searchSurfaceMax: number | null;
  acquisitionMinBudget: number | null;
  acquisitionMaxBudget: number | null;
  locationMinBudget: number | null;
  mandateCommissionRate: number | null;
  mandateFixedFee: number | null;
  mandateCommissionPayer: string | null;
  mandateExclusivityType: string | null;
  mandateStartDate: string | null;
  mandateDurationMonths: number | null;
}

export function buildFullMandateSections(
  deal: DealForSections,
  currentType: DealType,
): EligibilitySection[] {
  const sections: EligibilitySection[] = [];

  // Section Client
  const clientFields: EligibilityField[] = [];
  if (deal.Client) {
    clientFields.push({ entity: 'client', field: 'firstName', label: 'Prénom', value: deal.Client.firstName, type: 'text' });
    clientFields.push({ entity: 'client', field: 'lastName', label: 'Nom', value: deal.Client.lastName, type: 'text' });
    clientFields.push({ entity: 'client', field: 'address', label: 'Adresse', value: deal.Client.address, type: 'text' });
  }
  sections.push({
    title: 'Client',
    status: clientFields.every(f => !!f.value) ? 'valid' : 'invalid',
    fields: clientFields,
  });

  // Section Bien (VENTE/GESTION) ou Critères de recherche (ACQUISITION/LOCATION)
  if (currentType === 'VENTE' || currentType === 'GESTION') {
    const bienFields: EligibilityField[] = [];
    if (deal.Property) {
      bienFields.push({ entity: 'property', field: 'type', label: 'Type de bien', value: deal.Property.type, type: 'select', options: Object.entries(PROPERTY_TYPE_LABELS).map(([v, l]) => ({ value: v, label: l })) });
      bienFields.push({ entity: 'property', field: 'livingAreaSqm', label: 'Surface habitable (m²)', value: deal.Property.livingAreaSqm != null ? String(deal.Property.livingAreaSqm) : null, type: 'number' });
      bienFields.push({ entity: 'property', field: 'address', label: 'Adresse', value: deal.Property.address, type: 'text' });
      bienFields.push({ entity: 'property', field: 'addressCity', label: 'Ville', value: deal.Property.addressCity, type: 'text' });
    }
    sections.push({
      title: 'Bien',
      status: bienFields.every(f => !!f.value) ? 'valid' : 'invalid',
      fields: bienFields,
    });
  } else {
    // ACQUISITION / LOCATION — Critères de recherche
    const rechercheFields: EligibilityField[] = [
      { entity: 'deal', field: 'searchCity', label: 'Ville recherchée', value: deal.searchCity, type: 'text' },
      { entity: 'deal', field: 'searchPropertyType', label: 'Type de bien', value: deal.searchPropertyType, type: 'text' },
      { entity: 'deal', field: 'searchSurfaceMin', label: 'Surface min (m²)', value: deal.searchSurfaceMin != null ? String(deal.searchSurfaceMin) : null, type: 'number' },
      { entity: 'deal', field: 'searchSurfaceMax', label: 'Surface max (m²)', value: deal.searchSurfaceMax != null ? String(deal.searchSurfaceMax) : null, type: 'number' },
    ];
    if (currentType === 'ACQUISITION') {
      rechercheFields.push({ entity: 'deal', field: 'acquisitionMinBudget', label: 'Budget min (€)', value: deal.acquisitionMinBudget != null ? String(deal.acquisitionMinBudget) : null, type: 'number' });
      rechercheFields.push({ entity: 'deal', field: 'acquisitionMaxBudget', label: 'Budget max (€)', value: deal.acquisitionMaxBudget != null ? String(deal.acquisitionMaxBudget) : null, type: 'number' });
    } else {
      rechercheFields.push({ entity: 'deal', field: 'locationMinBudget', label: 'Budget location (€)', value: deal.locationMinBudget != null ? String(deal.locationMinBudget) : null, type: 'number' });
    }
    sections.push({
      title: 'Critères de recherche',
      status: rechercheFields.every(f => !!f.value) ? 'valid' : 'invalid',
      fields: rechercheFields,
    });
  }

  // Section Prix
  const prixFields: EligibilityField[] = [];
  if (currentType === 'VENTE' || currentType === 'GESTION') {
    prixFields.push({ entity: 'property', field: 'desiredSellingPrice', label: 'Prix de vente souhaité (€)', value: deal.Property?.desiredSellingPrice != null ? String(deal.Property.desiredSellingPrice) : null, type: 'number' });
  }
  sections.push({
    title: 'Prix',
    status: prixFields.every(f => !!f.value) ? 'valid' : 'invalid',
    fields: prixFields,
  });

  // Section Honoraires
  const honorairesFields: EligibilityField[] = [
    { entity: 'deal', field: 'mandateCommissionRate', label: 'Taux de commission (%)', value: deal.mandateCommissionRate != null ? String(deal.mandateCommissionRate) : null, type: 'number' },
    { entity: 'deal', field: 'divider_honoraires', label: '', value: null, type: 'divider' },
    { entity: 'deal', field: 'mandateFixedFee', label: 'Honoraires fixes (€)', value: deal.mandateFixedFee != null ? String(deal.mandateFixedFee) : null, type: 'number' },
    { entity: 'deal', field: 'mandateCommissionPayer', label: 'À la charge de', value: deal.mandateCommissionPayer, type: 'select', options: [{ value: 'VENDEUR', label: 'Vendeur' }, { value: 'ACQUEREUR', label: 'Acquéreur' }, { value: 'PARTAGE', label: 'Partagé' }] },
  ];
  // Validation: (rate OR fixedFee) AND payer
  const hasHonoraires = !!((deal.mandateCommissionRate != null && deal.mandateCommissionRate > 0) || (deal.mandateFixedFee != null && deal.mandateFixedFee > 0));
  const hasPayer = !!deal.mandateCommissionPayer;
  sections.push({
    title: 'Honoraires',
    status: (hasHonoraires && hasPayer) ? 'valid' : 'invalid',
    fields: honorairesFields,
  });

  // Section Exclusivité
  const exclusiviteFields: EligibilityField[] = [
    { entity: 'deal', field: 'mandateExclusivityType', label: 'Exclusivité', value: deal.mandateExclusivityType, type: 'select', options: [{ value: 'SIMPLE', label: 'Simple' }, { value: 'EXCLUSIF', label: 'Exclusif' }, { value: 'SEMI_EXCLUSIF', label: 'Semi-exclusif' }] },
  ];
  sections.push({
    title: 'Exclusivité',
    status: exclusiviteFields.every(f => !!f.value) ? 'valid' : 'invalid',
    fields: exclusiviteFields,
  });

  // Section Durée
  const dureeFields: EligibilityField[] = [
    { entity: 'deal', field: 'mandateStartDate', label: 'Date de début', value: deal.mandateStartDate ? deal.mandateStartDate.split('T')[0] : null, type: 'date' },
    { entity: 'deal', field: 'mandateDurationMonths', label: 'Durée (mois)', value: deal.mandateDurationMonths != null ? String(deal.mandateDurationMonths) : null, type: 'number' },
  ];
  sections.push({
    title: 'Durée',
    status: dureeFields.every(f => !!f.value) ? 'valid' : 'invalid',
    fields: dureeFields,
  });

  return sections;
}
