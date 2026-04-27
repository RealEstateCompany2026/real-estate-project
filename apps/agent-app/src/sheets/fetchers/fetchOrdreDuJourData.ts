import { createClient } from '@/lib/supabase/client';

export interface OrdreDuJourSheetData {
  eventId: string;
  propertyAddress: string | null;
  propertyCity: string | null;
  propertyType: string | null;
  propertySurface: string | null;
  propertyDpeGrade: string | null;
  clientName: string;
  odjContent: string;
  odjStatus: 'EDITE' | 'REVISE' | 'ENVOYE' | null;
  odjIsRevision: boolean;
}

function propertyTypeLabel(t: string | null): string {
  switch (t) {
    case 'STUDIO': return 'Studio';
    case 'T1': return 'T1';
    case 'T2': return 'T2';
    case 'T3': return 'T3';
    case 'T4': return 'T4';
    case 'APPARTEMENT': return 'Appartement';
    case 'MAISON': return 'Maison';
    case 'MAISON_DE_VILLE': return 'Maison de ville';
    case 'LOFT': return 'Loft';
    case 'TERRAIN': return 'Terrain';
    case 'IMMEUBLE': return 'Immeuble';
    default: return 'Bien';
  }
}

export async function fetchOrdreDuJourData(payload: { eventId: string }): Promise<OrdreDuJourSheetData> {
  const supabase = createClient();

  // Fetch Event
  const { data: event, error: eventError } = await supabase
    .from('Event')
    .select('id, odjContent, odjStatus, odjSentAt, dealId')
    .eq('id', payload.eventId)
    .single();

  if (eventError || !event) throw new Error(eventError?.message ?? 'Event not found');

  // Fetch Deal with Client + Property
  const { data: deal, error: dealError } = await supabase
    .from('Deal')
    .select('id, Client:clientId(firstName, lastName), Property:propertyId(address, addressCity, type, livingAreaSqm, dpeEnergyClass)')
    .eq('id', event.dealId)
    .single();

  if (dealError || !deal) throw new Error(dealError?.message ?? 'Deal not found');

  const d = deal as any;
  const odjStatus = (event.odjStatus === 'EDITE' || event.odjStatus === 'REVISE' || event.odjStatus === 'ENVOYE')
    ? event.odjStatus as 'EDITE' | 'REVISE' | 'ENVOYE'
    : null;

  return {
    eventId: event.id,
    propertyAddress: d.Property?.address ?? null,
    propertyCity: d.Property?.addressCity ?? null,
    propertyType: propertyTypeLabel(d.Property?.type ?? null),
    propertySurface: d.Property?.livingAreaSqm ? `${d.Property.livingAreaSqm} m²` : null,
    propertyDpeGrade: d.Property?.dpeEnergyClass ?? null,
    clientName: d.Client ? `${d.Client.firstName} ${d.Client.lastName}` : 'Client',
    odjContent: event.odjContent ?? '',
    odjStatus,
    odjIsRevision: odjStatus === 'REVISE' || odjStatus === 'ENVOYE',
  };
}
