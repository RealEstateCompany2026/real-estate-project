import { createClient } from '@/lib/supabase/client';

export interface VisiteSheetData {
  eventId: string;
  dealId: string;
  propertyId: string | null;
  visitStatus: 'PROGRAMME' | 'CONFIRME' | 'TERMINE' | 'ANNULE';
  propertyAddress: string | null;
  propertyCity: string | null;
  propertyType: string | null;
  propertySurface: string | null;
  propertyDpeGrade: string | null;
  invites: Array<{ id: string; name: string; calStatus: 'success' | 'error' | 'warning' | 'information' | 'disabled' | 'default' }>;
  selectedSlotLabel: string | null;
  eventDate: string | null;
  odjStatus: 'EDITE' | 'REVISE' | 'ENVOYE' | null;
  guideStatus: 'ENVOYE' | 'COMPLET' | null;
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

function formatDateOnly(date: string): string {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function formatTimeOnly(date: string): string {
  return new Date(date).toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export async function fetchVisiteData(payload: { eventId: string }): Promise<VisiteSheetData> {
  const supabase = createClient();

  // 1. Fetch Event
  const { data: event, error: eventError } = await supabase
    .from('Event')
    .select('id, type, status, eventDate, odjStatus, odjSentAt, dealId, clientId, agentId')
    .eq('id', payload.eventId)
    .single();

  if (eventError || !event) throw new Error(eventError?.message ?? 'Event not found');

  // 2. Fetch Deal with Client + Property
  const { data: deal, error: dealError } = await supabase
    .from('Deal')
    .select('id, Client:clientId(id, firstName, lastName), Property:propertyId(id, address, addressCity, type, livingAreaSqm, dpeEnergyClass)')
    .eq('id', event.dealId)
    .single();

  if (dealError || !deal) throw new Error(dealError?.message ?? 'Deal not found');

  const d = deal as any;

  // 3. Fetch VisitGuideResponse
  const { data: guide } = await supabase
    .from('VisitGuideResponse')
    .select('submittedAt')
    .eq('eventId', payload.eventId)
    .maybeSingle();

  // visitStatus
  const validStatuses = ['PROGRAMME', 'CONFIRME', 'TERMINE', 'ANNULE'] as const;
  const visitStatus = validStatuses.includes(event.status as any)
    ? (event.status as 'PROGRAMME' | 'CONFIRME' | 'TERMINE' | 'ANNULE')
    : 'PROGRAMME';

  // invites
  const invites: VisiteSheetData['invites'] = [];
  const inviteClientId = event.clientId || d.Client?.id;
  const inviteClientName = d.Client ? `${d.Client.firstName ?? ''} ${d.Client.lastName ?? ''}`.trim() : null;
  if (inviteClientId && inviteClientName) {
    const calStatus = (event.status === 'ANNULE' || event.status === 'NO_SHOW') ? 'error' as const : 'success' as const;
    invites.push({ id: inviteClientId, name: inviteClientName, calStatus });
  }

  // selectedSlotLabel
  const selectedSlotLabel = event.eventDate
    ? `${formatDateOnly(event.eventDate)} \u00e0 ${formatTimeOnly(event.eventDate)}`
    : null;

  // odjStatus
  const odjStatus = (event.odjStatus === 'EDITE' || event.odjStatus === 'REVISE' || event.odjStatus === 'ENVOYE')
    ? event.odjStatus as 'EDITE' | 'REVISE' | 'ENVOYE'
    : null;

  // guideStatus
  const guideStatus = guide?.submittedAt ? 'COMPLET' as const : null;

  return {
    eventId: event.id,
    dealId: event.dealId,
    propertyId: d.Property?.id ?? null,
    visitStatus,
    propertyAddress: d.Property?.address ?? null,
    propertyCity: d.Property?.addressCity ?? null,
    propertyType: propertyTypeLabel(d.Property?.type ?? null),
    propertySurface: d.Property?.livingAreaSqm ? `${d.Property.livingAreaSqm} m\u00b2` : null,
    propertyDpeGrade: d.Property?.dpeEnergyClass ?? null,
    invites,
    selectedSlotLabel,
    eventDate: event.eventDate ?? null,
    odjStatus,
    guideStatus,
  };
}
