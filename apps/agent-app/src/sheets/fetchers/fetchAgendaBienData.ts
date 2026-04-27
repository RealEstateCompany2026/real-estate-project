import { createClient } from '@/lib/supabase/client';
import type { AgendaDay, TimeSlot } from '@real-estate/ui/sheet-agenda-bien';

export interface AgendaBienSheetData {
  eventId: string;
  propertyId: string;
  propertyAddress: string | null;
  propertyType: string | null;
  propertySurface: string | null;
  propertyDpeGrade: string | null;
  clientName: string | null;
  currentVisitDateLabel: string | null;
  days: AgendaDay[];
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

/**
 * Generates the next 5 business days with 30-minute slots (9h-19h).
 * Excludes Saturday and Sunday.
 */
function generateDefaultAgendaDays(): AgendaDay[] {
  const days: AgendaDay[] = [];
  const now = new Date();
  let current = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayLabels = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const monthLabels = ['janvier', 'f\u00e9vrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'ao\u00fbt', 'septembre', 'octobre', 'novembre', 'd\u00e9cembre'];

  while (days.length < 5) {
    const dow = current.getDay();
    if (dow !== 0 && dow !== 6) {
      // Weekday
      const slots: TimeSlot[] = [];
      for (let h = 9; h < 19; h++) {
        for (const m of [0, 30]) {
          const startH = String(h).padStart(2, '0');
          const startM = String(m).padStart(2, '0');
          const endM = m === 30 ? '00' : '30';
          const endH = m === 30 ? String(h + 1).padStart(2, '0') : startH;
          slots.push({
            startTime: `${startH}:${startM}`,
            endTime: `${endH}:${endM}`,
            status: 'available',
          });
        }
      }
      const dateISO = current.toISOString().split('T')[0];
      days.push({
        label: `${dayLabels[dow]} ${current.getDate()} ${monthLabels[current.getMonth()]}`,
        date: dateISO,
        slots,
      });
    }
    current = new Date(current.getTime() + 86400000);
  }
  return days;
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

export async function fetchAgendaBienData(payload: { propertyId: string; eventId: string }): Promise<AgendaBienSheetData> {
  const supabase = createClient();

  // 1. Fetch Property
  const { data: property, error: propError } = await supabase
    .from('Property')
    .select('id, address, addressCity, type, livingAreaSqm, dpeEnergyClass')
    .eq('id', payload.propertyId)
    .single();

  if (propError || !property) throw new Error(propError?.message ?? 'Property not found');

  // 2. Fetch Event (for eventDate + dealId)
  const { data: event, error: eventError } = await supabase
    .from('Event')
    .select('id, eventDate, dealId')
    .eq('id', payload.eventId)
    .single();

  if (eventError || !event) throw new Error(eventError?.message ?? 'Event not found');

  // 3. Fetch Deal (for Client name)
  const { data: deal, error: dealError } = await supabase
    .from('Deal')
    .select('id, Client:clientId(firstName, lastName)')
    .eq('id', event.dealId)
    .single();

  if (dealError || !deal) throw new Error(dealError?.message ?? 'Deal not found');

  const dealData = deal as any;
  const clientName = dealData.Client
    ? `${dealData.Client.firstName ?? ''} ${dealData.Client.lastName ?? ''}`.trim() || null
    : null;

  // 4. Generate default days
  const defaultDays = generateDefaultAgendaDays();

  // 5. Fetch closed slots (exceptions)
  const startDate = defaultDays[0]?.date;
  const endDate = defaultDays[defaultDays.length - 1]?.date;
  const { data: exceptions } = await supabase
    .from('PropertyAvailabilityException')
    .select('date, startTime, endTime')
    .eq('propertyId', payload.propertyId)
    .gte('date', `${startDate}T00:00:00`)
    .lte('date', `${endDate}T23:59:59`);

  // 6. Fetch existing VISITE events for this property in the date range
  const { data: existingVisits } = await supabase
    .from('Event')
    .select('eventDate')
    .eq('propertyId', payload.propertyId)
    .eq('type', 'VISITE')
    .in('status', ['PROGRAMME', 'CONFIRME'])
    .gte('eventDate', `${startDate}T00:00:00`)
    .lte('eventDate', `${endDate}T23:59:59`);

  // 7. Mark closed slots and occupied slots
  const closedSet = new Set<string>();
  if (exceptions) {
    for (const ex of exceptions) {
      const exDate = new Date(ex.date).toISOString().split('T')[0];
      closedSet.add(`${exDate}_${ex.startTime}`);
    }
  }

  const occupiedSet = new Set<string>();
  if (existingVisits) {
    for (const visit of existingVisits) {
      const visitDate = new Date(visit.eventDate);
      const vDate = visitDate.toISOString().split('T')[0];
      const vTime = `${String(visitDate.getHours()).padStart(2, '0')}:${String(visitDate.getMinutes()).padStart(2, '0')}`;
      occupiedSet.add(`${vDate}_${vTime}`);
    }
  }

  // 8. Enrich days with occupied status
  const enrichedDays = defaultDays.map((day) => ({
    ...day,
    slots: day.slots.map((slot) => {
      const key = `${day.date}_${slot.startTime}`;
      if (closedSet.has(key) || occupiedSet.has(key)) {
        return { ...slot, status: 'occupied' as const };
      }
      return slot;
    }),
  }));

  // 9. Format currentVisitDateLabel
  const currentVisitDateLabel = event.eventDate
    ? `${formatDateOnly(event.eventDate)} \u00e0 ${formatTimeOnly(event.eventDate)}`
    : null;

  return {
    eventId: event.id,
    propertyId: property.id,
    propertyAddress: property.address ?? null,
    propertyType: propertyTypeLabel(property.type ?? null),
    propertySurface: property.livingAreaSqm ? `${property.livingAreaSqm} m\u00b2` : null,
    propertyDpeGrade: property.dpeEnergyClass ?? null,
    clientName,
    currentVisitDateLabel,
    days: enrichedDays,
  };
}
