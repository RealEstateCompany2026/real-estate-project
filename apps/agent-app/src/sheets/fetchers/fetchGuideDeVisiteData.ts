import { createClient } from '@/lib/supabase/client';

export interface GuideDeVisiteSheetData {
  propertyAddress: string | null;
  propertyCity: string | null;
  propertyType: string | null;
  propertySurface: string | null;
  propertyDpeGrade: string | null;
  clientName: string;
  criteria: Array<{ id: string; label: string; answer: 'OUI' | 'NON' | 'PEUT_ETRE' | null }>;
  commentaire: string | null;
  visitDateLabel: string | null;
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

function formatVisitDateLabel(eventDate: string | null): string | null {
  if (!eventDate) return null;
  const d = new Date(eventDate);
  const datePart = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  const timePart = d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  return `${datePart} à ${timePart}`;
}

const criteriaLabels: Record<string, string> = {
  criterion_1: 'Localisation',
  criterion_2: 'Qualité du bien',
  criterion_3: 'Équipements',
  criterion_4: 'Critère',
  criterion_5: 'Souhaite faire une offre',
};

export async function fetchGuideDeVisiteData(payload: { eventId: string }): Promise<GuideDeVisiteSheetData> {
  const supabase = createClient();

  // 1. Fetch Event → eventDate + dealId
  const { data: event, error: eventError } = await supabase
    .from('Event')
    .select('eventDate, dealId')
    .eq('id', payload.eventId)
    .single();

  if (eventError || !event) throw new Error(eventError?.message ?? 'Event not found');

  // 2. Fetch Deal with joins → Client + Property
  const { data: deal, error: dealError } = await supabase
    .from('Deal')
    .select('id, Client:clientId(firstName, lastName), Property:propertyId(address, addressCity, type, livingAreaSqm, dpeEnergyClass)')
    .eq('id', event.dealId)
    .single();

  if (dealError || !deal) throw new Error(dealError?.message ?? 'Deal not found');

  const d = deal as any;

  // 3. Fetch VisitGuideResponse
  const { data: guide } = await supabase
    .from('VisitGuideResponse')
    .select('responses, commentaire, submittedAt')
    .eq('eventId', payload.eventId)
    .maybeSingle();

  // Parse criteria
  const responses = (guide?.responses ?? {}) as Record<string, string>;
  const criteria = Object.entries(criteriaLabels).map(([id, label]) => ({
    id,
    label,
    answer: (responses[id] === 'OUI' || responses[id] === 'NON' || responses[id] === 'PEUT_ETRE')
      ? responses[id] as 'OUI' | 'NON' | 'PEUT_ETRE'
      : null,
  }));

  return {
    propertyAddress: d.Property?.address ?? null,
    propertyCity: d.Property?.addressCity ?? null,
    propertyType: propertyTypeLabel(d.Property?.type ?? null),
    propertySurface: d.Property?.livingAreaSqm ? `${d.Property.livingAreaSqm} m²` : null,
    propertyDpeGrade: d.Property?.dpeEnergyClass ?? null,
    clientName: d.Client ? `${d.Client.firstName} ${d.Client.lastName}` : 'Client',
    criteria,
    commentaire: guide?.commentaire ?? null,
    visitDateLabel: formatVisitDateLabel(event.eventDate),
  };
}
