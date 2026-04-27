import { createClient } from '@/lib/supabase/client';
import { seedRandomInt } from '@/utils/seedRandom';
import { PROPERTY_TYPE_LABELS } from '@/types/property';
import type { PropertyType } from '@/types/property';
import type { DpeType } from '@real-estate/ui/icon-dpe';

// ── Operation type labels ──
const OPERATION_LABELS: Record<string, string> = {
  VENTE: 'Vente',
  LOCATION: 'Location',
  VIAGER: 'Viager',
  CESSION: 'Cession',
};

// ── Date/time formatters (fr-FR) ──
const dateFormatter = new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
const timeFormatter = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' });
const priceFormatter = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

// ── Valid DPE grades ──
const DPE_GRADES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

export interface BienSheetData {
  bienType: string;
  surface: string;
  type: string;       // operation type label
  price: string;
  location: string;
  dpe?: DpeType;
  qualification: number;
  entretien: number;
  conversion: number;
  suggestions?: Array<{ text: string; actionLabel?: string; onAction?: () => void }>;
  recentLogs?: Array<{
    date: string;
    time: string;
    author: string;
    category: string;
    description: string;
  }>;
}

export async function fetchBienData(payload: { propertyId: string }): Promise<BienSheetData> {
  const supabase = createClient();
  const { propertyId } = payload;

  // 1. Fetch Property
  const { data: property, error: propError } = await supabase
    .from('Property')
    .select('id, type, livingAreaSqm, addressCity, dpeEnergyClass, operationTypes, desiredSellingPrice, estimatedMarketValue, hasMaintenanceLog')
    .eq('id', propertyId)
    .single();

  if (propError || !property) throw new Error(propError?.message ?? 'Property not found');

  // 2. Fetch last 3 Event entries
  const { data: logs } = await supabase
    .from('Event')
    .select('createdAt, description, type, status, User:agentId(name)')
    .eq('propertyId', propertyId)
    .order('createdAt', { ascending: false })
    .limit(3);

  // 3. Format fields
  const rawPrice = property.desiredSellingPrice ?? property.estimatedMarketValue;
  const price = rawPrice ? priceFormatter.format(rawPrice) : '\u2014';

  const surface = property.livingAreaSqm ? `${property.livingAreaSqm}m\u00b2` : '\u2014';
  const location = property.addressCity ?? '\u2014';

  const bienType = PROPERTY_TYPE_LABELS[property.type as PropertyType] ?? 'Bien';

  // Operation type: first from array
  const opTypes = property.operationTypes as string[] | null;
  const firstOp = opTypes?.[0] ?? '';
  const type = OPERATION_LABELS[firstOp] ?? (firstOp || '\u2014');

  // DPE
  const dpe = property.dpeEnergyClass && DPE_GRADES.includes(property.dpeEnergyClass)
    ? (property.dpeEnergyClass as DpeType)
    : undefined;

  // KPIs (deterministic mock)
  const qualification = seedRandomInt(propertyId, 0, 20, 79);
  const entretien = seedRandomInt(propertyId, 1, 20, 79);
  const conversion = seedRandomInt(propertyId, 2, 10, 49);

  // Recent logs
  const recentLogs = (logs ?? []).map((log: any) => {
    const d = new Date(log.createdAt);
    const author = log.User?.name ?? 'Syst\u00e8me';

    return {
      date: dateFormatter.format(d),
      time: timeFormatter.format(d),
      author,
      category: log.type ?? '',
      description: log.description ?? '',
    };
  });

  return {
    bienType,
    surface,
    type,
    price,
    location,
    dpe,
    qualification,
    entretien,
    conversion,
    recentLogs: recentLogs.length > 0 ? recentLogs : undefined,
  };
}
