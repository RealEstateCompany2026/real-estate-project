import { createClient } from '@/lib/supabase/client';
import { checkMandateEligibility } from '@/lib/checkMandateEligibility';
import type { EligibilityResult } from '@/lib/checkMandateEligibility';
import type { EligibilitySection } from '@real-estate/ui/sheet-mandat-edit';
import type { DealType } from '@real-estate/ui/deal-types';
import { formatIdAsReference } from '@/lib/utils/formatMandateReference';
import { buildEligibilitySections, buildFullMandateSections } from '../helpers/mandatSections';

export interface MandatSheetData {
  dealId: string;
  dealType: DealType;
  reference: string;
  mandateStatus: string;
  pipelineStage: string | null;
  isAutoManaged: boolean;
  signatureDate: string | null;
  eligibility: EligibilityResult;
  eligibilityRatio: string;
  eligibilitySections: EligibilitySection[];
  fullMandateSections: EligibilitySection[];
  isRevision: boolean;
  mandateStatusField: string;
}

export async function fetchMandatData(payload: { dealId: string }): Promise<MandatSheetData> {
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
  const isAutoManaged = !deal.mandateWaived;

  const signatureDate = deal.saleMandateEndDate
    ? new Date(deal.saleMandateEndDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
    : null;

  // Eligibility check
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
  const eligibilityRatio = `${eligibility.filledCount}/${eligibility.totalCount}`;
  const eligibilitySections = buildEligibilitySections(eligibility, dealType);
  const fullMandateSections = buildFullMandateSections(deal, dealType);
  const isRevision = mandateStatus === 'REVISE';

  return {
    dealId: payload.dealId,
    dealType,
    reference,
    mandateStatus,
    pipelineStage: deal.pipelineStage,
    isAutoManaged,
    signatureDate,
    eligibility,
    eligibilityRatio,
    eligibilitySections,
    fullMandateSections,
    isRevision,
    mandateStatusField,
  };
}
