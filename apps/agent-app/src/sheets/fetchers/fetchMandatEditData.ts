import { createClient } from '@/lib/supabase/client';
import { checkMandateEligibility } from '@/lib/checkMandateEligibility';
import type { EligibilitySection } from '@real-estate/ui/sheet-mandat-edit';
import type { DealType } from '@real-estate/ui/deal-types';
import { formatIdAsReference } from '@/lib/utils/formatMandateReference';
import { buildEligibilitySections, buildFullMandateSections } from '../helpers/mandatSections';

export interface MandatEditSheetData {
  dealId: string;
  dealType: DealType;
  reference: string;
  mode: 'edit' | 'review';
  sections: EligibilitySection[];
  mandateStatusField: string;
  isRevision: boolean;
  clientId: string | null;
  propertyId: string | null;
}

export async function fetchMandatEditData(
  payload: { dealId: string; mode: 'edit' | 'review' },
): Promise<MandatEditSheetData> {
  const supabase = createClient();

  // 1. Deal with Client + Property joins
  const { data: dealData, error: dealError } = await supabase
    .from('Deal')
    .select(`
      *,
      Client:clientId (id, firstName, lastName, status, searchCriteriaSummary, address),
      Property:propertyId (id, type, livingAreaSqm, addressCity, desiredSellingPrice, dpeEnergyClass, address, numberOfRooms)
    `)
    .eq('id', payload.dealId)
    .single();

  if (dealError || !dealData) throw new Error(dealError?.message ?? 'Deal not found');

  // 2. Organization
  const { data: orgData } = await supabase
    .from('Organization')
    .select('name, address, siret, rcpInsuranceRef, rcpExpiryDate, carteTNumber, carteGNumber')
    .limit(1)
    .single();

  // Normalize Client/Property from array to single object
  const deal = {
    ...dealData,
    Client: Array.isArray(dealData.Client) ? dealData.Client[0] ?? null : dealData.Client,
    Property: Array.isArray(dealData.Property) ? dealData.Property[0] ?? null : dealData.Property,
  } as any;

  const dealType: DealType = (deal.type as DealType) ?? 'VENTE';
  const mandateStatusField = dealType === 'GESTION' ? 'mgmtMandateStatus' : 'saleMandateStatus';
  const mandateStatus: string = deal[mandateStatusField] ?? 'NON_CREE';
  const reference = deal.reference ?? formatIdAsReference(deal.id);

  let sections: EligibilitySection[];

  if (payload.mode === 'edit') {
    // Build eligibility sections (missing fields only)
    const clientData = deal.Client
      ? { firstName: deal.Client.firstName, lastName: deal.Client.lastName, address: deal.Client.address }
      : null;
    const propertyData = deal.Property
      ? {
          type: deal.Property.type,
          address: deal.Property.address,
          addressCity: deal.Property.addressCity,
          livingAreaSqm: deal.Property.livingAreaSqm,
          numberOfRooms: deal.Property.numberOfRooms,
          desiredSellingPrice: deal.Property.desiredSellingPrice,
        }
      : null;
    const dealCheckData = {
      type: dealType,
      clientId: deal.clientId,
      propertyId: deal.propertyId,
      searchCity: deal.searchCity,
      searchPropertyType: deal.searchPropertyType,
      searchSurfaceMin: deal.searchSurfaceMin,
      searchSurfaceMax: deal.searchSurfaceMax,
      acquisitionMinBudget: deal.acquisitionMinBudget,
      acquisitionMaxBudget: deal.acquisitionMaxBudget,
      locationMinBudget: deal.locationMinBudget,
    };
    const eligibility = checkMandateEligibility(dealCheckData, clientData, propertyData, orgData);
    sections = buildEligibilitySections(eligibility, dealType);
  } else {
    // Build full mandate sections (all fields with current values)
    sections = buildFullMandateSections(deal, dealType);
  }

  return {
    dealId: payload.dealId,
    dealType,
    reference,
    mode: payload.mode,
    sections,
    mandateStatusField,
    isRevision: mandateStatus === 'REVISE',
    clientId: deal.Client?.id ?? null,
    propertyId: deal.Property?.id ?? null,
  };
}
