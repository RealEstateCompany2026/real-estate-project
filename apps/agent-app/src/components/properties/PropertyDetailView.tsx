'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Pencil, CheckCheck, Database, MessageCirclePlus, ScrollText, ArrowRight, Upload, FileText, Download, Send, X, Copy, Globe, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

// ── DS Components ──
import { AppBarFicheBien } from '@real-estate/ui/app-bar-fiche-bien';
import { Gallery } from '@real-estate/ui/gallery';
import { Diaporama } from '@real-estate/ui/diaporama';
import { AppBarAnnonce } from '@real-estate/ui/app-bar-annonce';
import { AppBarBienAncres } from '@real-estate/ui/app-bar-bien-ancres';
import { GraphCourbe } from '@real-estate/ui/graph-courbe';
import { ListAnnonce } from '@real-estate/ui/list-annonce';
import { ListAffaire } from '@real-estate/ui/list-affaire';
import { ListCarnet } from '@real-estate/ui/list-carnet';
import { IconButtonMega } from '@real-estate/ui/icon-button-mega';
import { Spinner } from '@real-estate/ui/spinner';
import { Badge } from '@real-estate/ui/badge';
import { Button } from '@real-estate/ui/button';
import { CardLog } from '@real-estate/ui/card-log';
import { Chip } from '@real-estate/ui/chip';
import { MessageReceived } from '@real-estate/ui/message-received';
import { MessageSent } from '@real-estate/ui/message-sent';
import { Sheet } from '@real-estate/ui/sheet';
import { InputFieldOutlined } from '@real-estate/ui/input-field-outlined';
import { SelectField } from '@real-estate/ui/select-field';
import { FileUpload } from '@real-estate/ui/file-upload';
import { ListClient } from '@real-estate/ui/list-client';
import { Switch } from '@real-estate/ui/switch';
import { CollapsibleSection } from '@real-estate/ui/collapsible-section';
import { IconDpe } from '@real-estate/ui/icon-dpe';
import { IconGes } from '@real-estate/ui/icon-ges';

// ── App-level ──
import { createClient } from '@/lib/supabase/client';
import type { Property, PropertyMedia, OperationType, DpeClass } from '@/types/property';
import type { DealType, PipelineStage } from '@real-estate/ui/deal-types';
import {
  computeWeightedRevenue,
  listingStatusToVariant,
  occupancyStatusToVariant,
  maintenanceStatusToVariant,
  purchaseOfferToPromiseVariant,
} from '@/lib/deal-helpers';
import {
  PROPERTY_TYPE_LABELS, PROPERTY_CONDITION_LABELS, OPERATION_TYPE_LABELS,
  HEATING_TYPE_LABELS, HOT_WATER_SYSTEM_LABELS, KITCHEN_TYPE_LABELS, PARKING_TYPE_LABELS,
  POOL_TYPE_LABELS, VIEW_TYPE_LABELS,
} from '@/types/property';
import { formatPrice } from '@/lib/utils/format';

// ---------------------------------------------------------------------------
// Constants — Labels pour enums DPE
// ---------------------------------------------------------------------------

const DPE_CLASS_LABELS: Record<DpeClass, string> = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
};

// ---------------------------------------------------------------------------
// Types — alignées sur ClientDetailView
// ---------------------------------------------------------------------------

interface PropertyKpis {
  qualification: number;
}

interface ActivityLog {
  id: string;
  date: string;
  time: string;
  author: string;
  category: string;
  status: string | null;
  description: string;
  badgeVariant?: 'default' | 'success' | 'warning' | 'error' | 'information' | 'disabled';
}

interface EventRow {
  id: string;
  type: string | null;
  status: string | null;
  title: string | null;
  description: string | null;
  eventDate: string;
  agentId: string | null;
  createdAt: string;
  User: { name: string | null }[] | null;
}

interface DealRow {
  id: string;
  saleMandateStatus: string | null;
  mgmtMandateStatus: string | null;
}

interface DealSectionItem {
  id: string;
  reference: string;
  type: string;
  status: string;
  pipelineStage: string;
  forecastRevenue: number | null;
  winProbability: number | null;
  saleMandateStatus: string | null;
  mgmtMandateStatus: string | null;
  occupancyStatus: string | null;
  maintenanceStatus: string | null;
  purchaseOfferStatus: string | null;
  lastActivityDate: string | null;
  infoRequestsCount: number | null;
  visitCount: number | null;
  // Search criteria (ACQUISITION / LOCATION)
  searchCity: string | null;
  searchPropertyType: string | null;
  searchSurfaceMin: number | null;
  searchSurfaceMax: number | null;
  Client: { firstName: string; lastName: string } | null;
}

interface ListingRow {
  id: string;
  status: string | null;
  title: string | null;
  description: string | null;
  descriptionSource: string | null;
  alurCompliant: boolean | null;
  slug: string | null;
  publishedAt: string | null;
  contactFormEnabled: boolean | null;
  viewCount: number | null;
  leadCount: number | null;
}

interface DocumentRow {
  id: string;
  title: string | null;
  fileName: string | null;
  type: string | null;
}

interface DocumentItem {
  id: string;
  label: string;
}

interface MessageRow {
  id: string;
  senderType: 'AGENT' | 'CLIENT' | 'IA' | null;
  body: string;
  messageDate: string;
  status: 'BROUILLON' | 'ENVOYE' | 'DELIVRE' | 'LU' | 'ECHOUE' | null;
  attachmentsUrls: string[] | null;
}

interface MessageItem {
  id: string;
  direction: 'received' | 'sent';
  body: string;
  date: string;
  time: string;
  status: 'none' | 'success' | 'fail';
  attachments: { label: string }[];
}

interface ClientRow {
  firstName: string | null;
  lastName: string | null;
}

interface BuyerRow {
  id: string;
  firstName: string | null;
  lastName: string | null;
  searchCriteriaSummary: string | null;
  status: string[] | null;
}

interface BuyerMatch {
  id: string;
  firstName: string;
  lastName: string;
  criteria: string;
}

interface CoOwnershipDetailsRow {
  id: string;
  propertyId: string;
  type: string | null;
  numberOfLots: number | null;
  lotNumber: string | null;
  syndicName: string | null;
  syndicContact: string | null;
  lastAgmDate: string | null;
  estimatedAnnualFees: number | null;
  monthlyCharges: number | null;
  plannedWorkAmount: number | null;
  hasCurrentLegalProcedures: boolean | null;
  hasPlannedLegalProcedures: boolean | null;
  legalProcedureDetails: string | null;
}

interface PropertyDetailData {
  property: Property;
  photos: PropertyMedia[];
  kpis: PropertyKpis;
  aiSuggestions: number;
  activities: ActivityLog[];
  allActivities: ActivityLog[];
  deals: DealSectionItem[];
  hasActiveMandate: boolean;
  listings: ListingRow[];
  documents: DocumentItem[];
  messages: MessageItem[];
  allMessages: MessageItem[];
  ownerName: string;
  coOwnership: CoOwnershipDetailsRow | null;
  matchingBuyers: BuyerMatch[];
}

// ---------------------------------------------------------------------------
// Helpers — mock data & mappers
// ---------------------------------------------------------------------------

function mockKpis(): PropertyKpis {
  return {
    qualification: Math.floor(Math.random() * 60) + 20,
  };
}

/** Mappe un EventType DB vers une catégorie KPI Bien */
function eventTypeToBienCategory(eventType: string | null): 'QUALIFICATION' | 'ENTRETIEN' | 'CONVERSION' {
  switch (eventType) {
    // Qualification = actions de complétude données du bien
    case 'RDV_COMMERCIAL':
    case 'TACHE':
      return 'QUALIFICATION';
    // Entretien = suivi maintenance, visites, relances, divers
    case 'VISITE':
    case 'RELANCE':
    case 'ANNIVERSAIRE':
    case 'AUTRE':
      return 'ENTRETIEN';
    // Conversion = signatures et progression transaction
    case 'SIGNATURE_PROMESSE':
    case 'SIGNATURE_NOTAIRE':
    case 'SIGNATURE_BAIL':
      return 'CONVERSION';
    default:
      return 'ENTRETIEN';
  }
}

/** Mappe une catégorie KPI Bien vers un BadgeVariant DS */
function getActivityBadgeVariant(category: string): 'default' | 'success' | 'warning' | 'information' | 'error' | 'disabled' {
  switch (category) {
    case 'QUALIFICATION': return 'success';
    case 'ENTRETIEN':     return 'default';
    case 'CONVERSION':    return 'warning';
    default:              return 'default';
  }
}

/** Mappe un EventStatus DB vers un BadgeVariant DS */
function eventStatusToBadgeVariant(status: string | null): 'default' | 'success' | 'warning' | 'information' | 'error' | 'disabled' {
  switch (status) {
    case 'PROGRAMME':
    case 'CONFIRME':
      return 'information';
    case 'TERMINE':
      return 'success';
    case 'ANNULE':
    case 'NO_SHOW':
      return 'error';
    case 'REPORTE':
      return 'warning';
    default:
      return 'default';
  }
}

/** Label court pour un Document */
function documentLabel(d: DocumentRow): string {
  return d.title ?? d.fileName ?? d.type ?? 'Document';
}

/** Mappe un senderType DB vers la direction d'affichage */
function senderToDirection(sender: string | null): 'received' | 'sent' {
  return sender === 'CLIENT' ? 'received' : 'sent';
}

/** Mappe un MessageStatus DB vers la prop MessageStatus du DS */
function dbStatusToDsStatus(status: string | null): 'none' | 'success' | 'fail' {
  switch (status) {
    case 'ENVOYE':
    case 'DELIVRE':
    case 'LU':
      return 'success';
    case 'ECHOUE':
      return 'fail';
    case 'BROUILLON':
    default:
      return 'none';
  }
}

/** Extrait le nom de fichier d'une URL d'attachement */
function attachmentLabel(url: string): string {
  try {
    const u = new URL(url);
    return u.pathname.split('/').pop() || 'Pièce jointe';
  } catch {
    return url.split('/').pop() || 'Pièce jointe';
  }
}

/** Mappe un ListingWorkflowStatus vers les 3 badges de workflow */
function listingStatusToWorkflow(status: string | null): { edition: 'disabled' | 'warning' | 'success'; revision: 'disabled' | 'warning' | 'success'; publication: 'disabled' | 'warning' | 'success' } {
  switch (status) {
    case 'DRAFT':
      return { edition: 'warning', revision: 'disabled', publication: 'disabled' };
    case 'REVIEW':
      return { edition: 'success', revision: 'warning', publication: 'disabled' };
    case 'PUBLISHED':
      return { edition: 'success', revision: 'success', publication: 'success' };
    case 'PAUSED':
      return { edition: 'success', revision: 'success', publication: 'warning' };
    case 'ARCHIVED':
      return { edition: 'disabled', revision: 'disabled', publication: 'disabled' };
    default:
      return { edition: 'disabled', revision: 'disabled', publication: 'disabled' };
  }
}

/** Déduit le FileFormat DB depuis l'extension du fichier */
function fileExtensionToFormat(fileName: string): 'PDF' | 'JPG' | 'PNG' | 'DOCX' | 'XLSX' | 'AUTRE' {
  const ext = fileName.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'pdf': return 'PDF';
    case 'jpg':
    case 'jpeg': return 'JPG';
    case 'png': return 'PNG';
    case 'docx': return 'DOCX';
    case 'xlsx': return 'XLSX';
    default: return 'AUTRE';
  }
}

// ---------------------------------------------------------------------------
// Component — ProfileField inline (copié depuis ClientDetailView)
// ---------------------------------------------------------------------------

function ProfileField({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="flex gap-[16px] py-[8px]">
      <span className="text-[16px] leading-[20px] tracking-[0.16px] text-content-caption shrink-0 w-[112px]">
        {label}
      </span>
      <span className="text-[16px] leading-[20px] tracking-[0.16px] text-content-body">
        {value || '-'}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Mock Data
// ---------------------------------------------------------------------------

const GRAPH_DATA = [
  { label: '10 avr', value: 18 },
  { label: '17 avr', value: 30 },
  { label: '24 avr', value: 25 },
  { label: '01 mai', value: 35 },
  { label: '08 mai', value: 32 },
  { label: '15 mai', value: 28 },
  { label: '22 mai', value: 22 },
  { label: '29 mai', value: 38 },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface PropertyDetailViewProps {
  propertyId: string;
}

export function PropertyDetailView({ propertyId }: PropertyDetailViewProps) {
  const router = useRouter();

  // ── Data ──
  const [data, setData] = useState<PropertyDetailData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'QUALIFICATION' | 'ENTRETIEN' | 'CONVERSION'>('all');
  const [isActivitySheetOpen, setIsActivitySheetOpen] = useState(false);
  const [isMessageSheetOpen, setIsMessageSheetOpen] = useState(false);
  const [sheetAffairesOpen, setSheetAffairesOpen] = useState(false);
  const [isCharacteristicsSheetOpen, setIsCharacteristicsSheetOpen] = useState(false);
  const [isSavingCharacteristics, setIsSavingCharacteristics] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showMoreCharacteristics, setShowMoreCharacteristics] = useState(false);
  const [characteristicsForm, setCharacteristicsForm] = useState({
    type: '',
    condition: '',
    numberOfRooms: '',
    bedroomCount: '',
    bathroomCount: '',
    livingAreaSqm: '',
    landAreaSqm: '',
    terraceAreaSqm: '',
    constructionYear: '',
    heatingType: '',
    kitchenType: '',
    parkingType: '',
    dpeEnergyClass: '',
    dpeGasEmissionClass: '',
    mainRoomAreaSqm: '',
    kitchenAreaSqm: '',
    bedroom1AreaSqm: '',
    bedroom2AreaSqm: '',
    bedroom3AreaSqm: '',
    bedroom4AreaSqm: '',
    mainRoomEquipment: '',
    kitchenEquipment: '',
    bedroom1Equipment: '',
    bedroom2Equipment: '',
    bedroom3Equipment: '',
    bedroom4Equipment: '',
    showerRoomCount: '',
    toiletCount: '',
    bathroomAreaSqm: '',
    bathroomEquipment: '',
    toiletAreaSqm: '',
    toiletEquipment: '',
    balconyAreaSqm: '',
    gardenAreaSqm: '',
    basementAreaSqm: '',
    atticAreaSqm: '',
    parkingSpotCount: '',
    parkingWidthM: '',
    parkingLengthM: '',
    hotWaterSystem: '',
    hasElevator: '',
    hasDigicode: '',
    hasGreenSpace: '',
    hasIntercom: '',
    hasHomeAutomation: '',
    hasPool: '',
    hasSmartphoneControl: '',
    shutterType: '',
    dpeEnergyKwh: '',
    dpeGasGco2: '',
    dpeValidityDate: '',
    dpeComplianceDeadline: '',
    floorLevel: '',
    numberOfFloors: '',
    neighborhoodName: '',
    poolType: '',
    mainViewType: '',
  });
  const [characteristicsFormInitial, setCharacteristicsFormInitial] = useState<typeof characteristicsForm | null>(null);
  const isCharacteristicsDirty = characteristicsFormInitial !== null && JSON.stringify(characteristicsForm) !== JSON.stringify(characteristicsFormInitial);
  const [isDocUploadSheetOpen, setIsDocUploadSheetOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [gallerySheetOpen, setGallerySheetOpen] = useState(false);
  const [annonceSheetListing, setAnnonceSheetListing] = useState<ListingRow | null>(null);

  // ── Section refs for anchor navigation ──
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // ── Fetch ──
  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const [
        { data: prop },
        { data: media },
        { data: eventsData },
        { data: dealsData },
        { data: listingsData },
        { data: documentsData },
        { data: messagesData },
      ] = await Promise.all([
        supabase.from('Property').select('*').eq('id', propertyId).single(),
        supabase
          .from('PropertyMedia')
          .select('*')
          .eq('propertyId', propertyId)
          .eq('mediaType', 'photo')
          .order('sortOrder', { ascending: true }),
        supabase
          .from('Event')
          .select('id, type, status, title, description, eventDate, agentId, createdAt, User:agentId(name)')
          .eq('propertyId', propertyId)
          .order('eventDate', { ascending: false })
          .limit(100),
        supabase.from('Deal').select(`
          id, reference, type, status, pipelineStage,
          forecastRevenue, winProbability,
          saleMandateStatus, mgmtMandateStatus,
          occupancyStatus, maintenanceStatus, purchaseOfferStatus,
          lastActivityDate, infoRequestsCount, visitCount,
          searchCity, searchPropertyType, searchSurfaceMin, searchSurfaceMax,
          Client(firstName, lastName)
        `).eq('propertyId', propertyId).order('lastActivityDate', { ascending: false }),
        supabase.from('Listing').select('id, status, title, description, descriptionSource, alurCompliant, slug, publishedAt, contactFormEnabled, viewCount, leadCount').eq('propertyId', propertyId),
        supabase.from('Document').select('id, title, fileName, type').eq('propertyId', propertyId),
        supabase
          .from('Message')
          .select('id, senderType, body, messageDate, status, attachmentsUrls')
          .eq('propertyId', propertyId)
          .order('messageDate', { ascending: false })
          .limit(100),
      ]);

      if (!prop) {
        router.push('/properties');
        return;
      }

      // Fetch owner name if clientId exists
      let ownerName = '—';
      if ((prop as Property).clientId) {
        const { data: clientData } = await supabase
          .from('Client')
          .select('firstName, lastName')
          .eq('id', (prop as Property).clientId)
          .single();
        if (clientData) {
          ownerName = `${(clientData as ClientRow).lastName?.toUpperCase() ?? ''}, ${(clientData as ClientRow).firstName ?? ''}`;
        }
      }

      // Fetch CoOwnershipDetails if coOwnershipId exists
      let coOwnershipData: CoOwnershipDetailsRow | null = null;
      if ((prop as Property).coOwnershipId) {
        const { data: coData } = await supabase
          .from('CoOwnershipDetails')
          .select('*')
          .eq('id', (prop as Property).coOwnershipId)
          .single();
        if (coData) {
          coOwnershipData = coData as CoOwnershipDetailsRow;
        }
      }

      // Fetch acquéreurs appétents — clients ACQUEREUR avec critères de recherche
      let matchingBuyers: BuyerMatch[] = [];
      if (prop) {
        const property = prop as Property;
        const { data: buyersData } = await supabase
          .from('Client')
          .select('id, firstName, lastName, searchCriteriaSummary, status')
          .limit(200);

        if (buyersData) {
          const propertyType = property.type ? (PROPERTY_TYPE_LABELS[property.type]?.toLowerCase() ?? '') : '';
          const propertyCity = property.addressCity?.toLowerCase() ?? '';

          matchingBuyers = (buyersData as BuyerRow[])
            .filter((b) => {
              // 1. Doit être ACQUEREUR
              const statuses = Array.isArray(b.status) ? b.status : [];
              if (!statuses.includes('ACQUEREUR')) return false;
              // 2. Doit avoir des critères de recherche
              if (!b.searchCriteriaSummary) return false;
              // 3. Les critères doivent mentionner le type OU la ville du bien
              const criteria = b.searchCriteriaSummary.toLowerCase();
              return (
                (propertyType && criteria.includes(propertyType)) ||
                (propertyCity && criteria.includes(propertyCity))
              );
            })
            .slice(0, 10)
            .map((b) => ({
              id: b.id,
              firstName: b.firstName ?? '',
              lastName: b.lastName ?? '',
              criteria: b.searchCriteriaSummary ?? '',
            }));
        }
      }

      // Map events to ActivityLog
      const allActivities: ActivityLog[] = (eventsData ?? []).map((ev: EventRow) => ({
        id: ev.id,
        date: new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(ev.eventDate)),
        time: new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(new Date(ev.eventDate)),
        author: ev.User?.[0]?.name ?? 'Système',
        category: eventTypeToBienCategory(ev.type),
        status: ev.status,
        description: ev.description ?? ev.title ?? '',
      }));
      const activities: ActivityLog[] = allActivities.slice(0, 4);

      const deals = (dealsData ?? []) as unknown as DealSectionItem[];
      const hasActiveMandate = deals.some(
        (d) => d.saleMandateStatus != null || d.mgmtMandateStatus != null
      );

      // Handle Listing data — TODO: awaiting schema with workflow badges
      // For now, all listings default to 'disabled' badges
      const listings: ListingRow[] = listingsData ?? [];

      const documents: DocumentItem[] = ((documentsData ?? []) as DocumentRow[]).map((d) => ({
        id: d.id,
        label: documentLabel(d),
      }));

      // Handle Message data — TODO: awaiting propertyId column
      const allMessages: MessageItem[] = ((messagesData ?? []) as MessageRow[]).map((m) => ({
        id: m.id,
        direction: senderToDirection(m.senderType),
        body: m.body,
        date: new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(m.messageDate)),
        time: new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(new Date(m.messageDate)),
        status: dbStatusToDsStatus(m.status),
        attachments: (m.attachmentsUrls ?? []).map((url) => ({ label: attachmentLabel(url) })),
      }));
      const messages: MessageItem[] = allMessages.slice(0, 4);

      setData({
        property: prop as Property,
        photos: (media ?? []) as PropertyMedia[],
        kpis: mockKpis(),
        aiSuggestions: Math.floor(Math.random() * 15) + 1,
        activities,
        allActivities,
        deals,
        hasActiveMandate,
        listings,
        documents,
        messages,
        allMessages,
        ownerName,
        coOwnership: coOwnershipData,
        matchingBuyers,
      });
      setIsLoading(false);
    }
    load();
  }, [propertyId, router, refreshKey]);

  // ── Anchor navigation ──
  const handleAnchorClick = useCallback((sectionId: string) => {
    const el = sectionRefs.current[sectionId];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const setSectionRef = useCallback((id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  }, []);

  const updateCharacteristicsField = useCallback((field: string, value: string) => {
    setCharacteristicsForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleOpenCharacteristicsSheet = useCallback(() => {
    if (!data) return;
    const p = data.property;
    const initialValues = {
      type: p.type ?? '',
      condition: p.condition ?? '',
      numberOfRooms: p.numberOfRooms?.toString() ?? '',
      bedroomCount: p.bedroomCount?.toString() ?? '',
      bathroomCount: p.bathroomCount?.toString() ?? '',
      livingAreaSqm: p.livingAreaSqm?.toString() ?? '',
      landAreaSqm: p.landAreaSqm?.toString() ?? '',
      terraceAreaSqm: p.terraceAreaSqm?.toString() ?? '',
      constructionYear: p.constructionYear?.toString() ?? '',
      heatingType: p.heatingType ?? '',
      kitchenType: p.kitchenType ?? '',
      parkingType: p.parkingType ?? '',
      dpeEnergyClass: p.dpeEnergyClass ?? '',
      dpeGasEmissionClass: p.dpeGasEmissionClass ?? '',
      mainRoomAreaSqm: p.mainRoomAreaSqm?.toString() ?? '',
      kitchenAreaSqm: p.kitchenAreaSqm?.toString() ?? '',
      bedroom1AreaSqm: p.bedroom1AreaSqm?.toString() ?? '',
      bedroom2AreaSqm: p.bedroom2AreaSqm?.toString() ?? '',
      bedroom3AreaSqm: p.bedroom3AreaSqm?.toString() ?? '',
      bedroom4AreaSqm: p.bedroom4AreaSqm?.toString() ?? '',
      mainRoomEquipment: p.mainRoomEquipment ?? '',
      kitchenEquipment: p.kitchenEquipment ?? '',
      bedroom1Equipment: p.bedroom1Equipment ?? '',
      bedroom2Equipment: p.bedroom2Equipment ?? '',
      bedroom3Equipment: p.bedroom3Equipment ?? '',
      bedroom4Equipment: p.bedroom4Equipment ?? '',
      showerRoomCount: p.showerRoomCount?.toString() ?? '',
      toiletCount: p.toiletCount?.toString() ?? '',
      bathroomAreaSqm: p.bathroomAreaSqm?.toString() ?? '',
      bathroomEquipment: p.bathroomEquipment ?? '',
      toiletAreaSqm: p.toiletAreaSqm?.toString() ?? '',
      toiletEquipment: p.toiletEquipment ?? '',
      balconyAreaSqm: p.balconyAreaSqm?.toString() ?? '',
      gardenAreaSqm: p.gardenAreaSqm?.toString() ?? '',
      basementAreaSqm: p.basementAreaSqm?.toString() ?? '',
      atticAreaSqm: p.atticAreaSqm?.toString() ?? '',
      parkingSpotCount: p.parkingSpotCount?.toString() ?? '',
      parkingWidthM: p.parkingWidthM?.toString() ?? '',
      parkingLengthM: p.parkingLengthM?.toString() ?? '',
      hotWaterSystem: p.hotWaterSystem ?? '',
      hasElevator: p.hasElevator ? 'true' : 'false',
      hasDigicode: p.hasDigicode ? 'true' : 'false',
      hasGreenSpace: p.hasGreenSpace ? 'true' : 'false',
      hasIntercom: p.hasIntercom ? 'true' : 'false',
      hasHomeAutomation: p.hasHomeAutomation ? 'true' : 'false',
      hasPool: p.hasPool ? 'true' : 'false',
      hasSmartphoneControl: p.hasSmartphoneControl ? 'true' : 'false',
      shutterType: p.shutterType ?? '',
      dpeEnergyKwh: p.dpeEnergyKwh?.toString() ?? '',
      dpeGasGco2: p.dpeGasGco2?.toString() ?? '',
      dpeValidityDate: p.dpeValidityDate ?? '',
      dpeComplianceDeadline: p.dpeComplianceDeadline ?? '',
      floorLevel: p.floorLevel?.toString() ?? '',
      numberOfFloors: p.numberOfFloors?.toString() ?? '',
      neighborhoodName: p.neighborhoodName ?? '',
      poolType: p.poolType ?? '',
      mainViewType: p.mainViewType ?? '',
    };
    setCharacteristicsForm(initialValues);
    setCharacteristicsFormInitial(initialValues);
    setIsCharacteristicsSheetOpen(true);
  }, [data]);

  const handleSaveCharacteristics = useCallback(async () => {
    if (!data) return;
    setIsSavingCharacteristics(true);
    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('Property')
        .update({
          type: characteristicsForm.type || null,
          condition: characteristicsForm.condition || null,
          numberOfRooms: characteristicsForm.numberOfRooms ? parseInt(characteristicsForm.numberOfRooms) : null,
          bedroomCount: characteristicsForm.bedroomCount ? parseInt(characteristicsForm.bedroomCount) : null,
          bathroomCount: characteristicsForm.bathroomCount ? parseInt(characteristicsForm.bathroomCount) : null,
          livingAreaSqm: characteristicsForm.livingAreaSqm ? parseFloat(characteristicsForm.livingAreaSqm) : null,
          landAreaSqm: characteristicsForm.landAreaSqm ? parseFloat(characteristicsForm.landAreaSqm) : null,
          terraceAreaSqm: characteristicsForm.terraceAreaSqm ? parseFloat(characteristicsForm.terraceAreaSqm) : null,
          constructionYear: characteristicsForm.constructionYear ? parseInt(characteristicsForm.constructionYear) : null,
          heatingType: characteristicsForm.heatingType || null,
          kitchenType: characteristicsForm.kitchenType || null,
          parkingType: characteristicsForm.parkingType || null,
          dpeEnergyClass: characteristicsForm.dpeEnergyClass || null,
          dpeGasEmissionClass: characteristicsForm.dpeGasEmissionClass || null,
          mainRoomAreaSqm: characteristicsForm.mainRoomAreaSqm ? parseFloat(characteristicsForm.mainRoomAreaSqm) : null,
          kitchenAreaSqm: characteristicsForm.kitchenAreaSqm ? parseFloat(characteristicsForm.kitchenAreaSqm) : null,
          bedroom1AreaSqm: characteristicsForm.bedroom1AreaSqm ? parseFloat(characteristicsForm.bedroom1AreaSqm) : null,
          bedroom2AreaSqm: characteristicsForm.bedroom2AreaSqm ? parseFloat(characteristicsForm.bedroom2AreaSqm) : null,
          bedroom3AreaSqm: characteristicsForm.bedroom3AreaSqm ? parseFloat(characteristicsForm.bedroom3AreaSqm) : null,
          bedroom4AreaSqm: characteristicsForm.bedroom4AreaSqm ? parseFloat(characteristicsForm.bedroom4AreaSqm) : null,
          mainRoomEquipment: characteristicsForm.mainRoomEquipment || null,
          kitchenEquipment: characteristicsForm.kitchenEquipment || null,
          bedroom1Equipment: characteristicsForm.bedroom1Equipment || null,
          bedroom2Equipment: characteristicsForm.bedroom2Equipment || null,
          bedroom3Equipment: characteristicsForm.bedroom3Equipment || null,
          bedroom4Equipment: characteristicsForm.bedroom4Equipment || null,
          showerRoomCount: characteristicsForm.showerRoomCount ? parseInt(characteristicsForm.showerRoomCount) : null,
          toiletCount: characteristicsForm.toiletCount ? parseInt(characteristicsForm.toiletCount) : null,
          bathroomAreaSqm: characteristicsForm.bathroomAreaSqm ? parseFloat(characteristicsForm.bathroomAreaSqm) : null,
          bathroomEquipment: characteristicsForm.bathroomEquipment || null,
          toiletAreaSqm: characteristicsForm.toiletAreaSqm ? parseFloat(characteristicsForm.toiletAreaSqm) : null,
          toiletEquipment: characteristicsForm.toiletEquipment || null,
          balconyAreaSqm: characteristicsForm.balconyAreaSqm ? parseFloat(characteristicsForm.balconyAreaSqm) : null,
          gardenAreaSqm: characteristicsForm.gardenAreaSqm ? parseFloat(characteristicsForm.gardenAreaSqm) : null,
          basementAreaSqm: characteristicsForm.basementAreaSqm ? parseFloat(characteristicsForm.basementAreaSqm) : null,
          atticAreaSqm: characteristicsForm.atticAreaSqm ? parseFloat(characteristicsForm.atticAreaSqm) : null,
          parkingSpotCount: characteristicsForm.parkingSpotCount ? parseInt(characteristicsForm.parkingSpotCount) : null,
          parkingWidthM: characteristicsForm.parkingWidthM ? parseFloat(characteristicsForm.parkingWidthM) : null,
          parkingLengthM: characteristicsForm.parkingLengthM ? parseFloat(characteristicsForm.parkingLengthM) : null,
          hotWaterSystem: characteristicsForm.hotWaterSystem || null,
          hasElevator: characteristicsForm.hasElevator === 'true',
          hasDigicode: characteristicsForm.hasDigicode === 'true',
          hasGreenSpace: characteristicsForm.hasGreenSpace === 'true',
          hasIntercom: characteristicsForm.hasIntercom === 'true',
          hasHomeAutomation: characteristicsForm.hasHomeAutomation === 'true',
          hasPool: characteristicsForm.hasPool === 'true',
          hasSmartphoneControl: characteristicsForm.hasSmartphoneControl === 'true',
          shutterType: characteristicsForm.shutterType || null,
          dpeEnergyKwh: characteristicsForm.dpeEnergyKwh ? parseFloat(characteristicsForm.dpeEnergyKwh) : null,
          dpeGasGco2: characteristicsForm.dpeGasGco2 ? parseFloat(characteristicsForm.dpeGasGco2) : null,
          dpeValidityDate: characteristicsForm.dpeValidityDate || null,
          dpeComplianceDeadline: characteristicsForm.dpeComplianceDeadline || null,
          floorLevel: characteristicsForm.floorLevel ? parseInt(characteristicsForm.floorLevel) : null,
          numberOfFloors: characteristicsForm.numberOfFloors ? parseInt(characteristicsForm.numberOfFloors) : null,
          neighborhoodName: characteristicsForm.neighborhoodName || null,
          poolType: characteristicsForm.poolType || null,
          mainViewType: characteristicsForm.mainViewType || null,
        })
        .eq('id', data.property.id);

      if (error) {
        console.error('[PropertyDetailView] Characteristics update failed:', error);
        return;
      }

      setIsCharacteristicsSheetOpen(false);
      setRefreshKey((k) => k + 1);
    } finally {
      setIsSavingCharacteristics(false);
    }
  }, [data, characteristicsForm]);

  const handleUploadDocument = useCallback(async () => {
    if (!data || !uploadFile) return;
    setIsUploading(true);
    setUploadError(null);

    try {
      const supabase = createClient();

      // 1. Upload vers Supabase Storage
      const filePath = `${data.property.id}/${Date.now()}-${uploadFile.name}`;
      const { error: uploadErr } = await supabase.storage
        .from('client-documents')
        .upload(filePath, uploadFile, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadErr) {
        console.error('[PropertyDetailView] Storage upload failed:', uploadErr);
        setUploadError("Échec de l'upload. Veuillez réessayer.");
        return;
      }

      // 2. Récupérer une signed URL (1h)
      const { data: signedUrlData, error: signedUrlErr } = await supabase.storage
        .from('client-documents')
        .createSignedUrl(filePath, 3600);

      if (signedUrlErr || !signedUrlData?.signedUrl) {
        console.error('[PropertyDetailView] Signed URL failed:', signedUrlErr);
        setUploadError('Upload réussi mais impossible de générer le lien.');
        return;
      }

      // 3. INSERT Document
      const { error: insertErr } = await supabase.from('Document').insert({
        propertyId: data.property.id,
        organizationId: data.property.organizationId,
        title: uploadFile.name.replace(/\.[^/.]+$/, ''),
        fileName: uploadFile.name,
        fileUrl: signedUrlData.signedUrl,
        fileSizeKb: Math.round(uploadFile.size / 1024),
        fileFormat: fileExtensionToFormat(uploadFile.name),
        type: 'AUTRE',
        isPrivate: true,
        documentStatus: 'RECU',
      });

      if (insertErr) {
        console.error('[PropertyDetailView] Document insert failed:', insertErr);
        setUploadError('Fichier uploadé mais enregistrement échoué.');
        return;
      }

      // 4. Succès — fermer la sheet, reset, recharger
      setIsDocUploadSheetOpen(false);
      setUploadFile(null);
      setUploadError(null);
      setRefreshKey((k) => k + 1);
    } finally {
      setIsUploading(false);
    }
  }, [data, uploadFile]);

  // ── Loading ──
  if (isLoading || !data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Spinner />
      </div>
    );
  }

  const { property, photos, kpis, aiSuggestions, activities, allActivities, deals, hasActiveMandate, listings, documents, messages, allMessages, ownerName, coOwnership, matchingBuyers } = data;
  const dealsCount = deals.length;
  const filteredActivities = activeFilter === 'all'
    ? activities
    : activities.filter((a) => a.category === activeFilter);

  /** Props pour champs vides : placeholder "À compléter" + icône warning */
  const emptyProps = (value: string | null | undefined) => {
    if (value != null && value !== '' && value !== '0') return {};
    return {
      placeholder: 'À compléter',
      rightIcon: AlertCircle,
      rightIconClassName: 'text-icon-warning',
    };
  };

  return (
    <div className="relative">
      {/* ═══════════════════════════════════════════════════════
          Bloc 1a — AppBarFicheBien (sticky)
          ═══════════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-30 bg-surface-page">
        <AppBarFicheBien
          title={`${PROPERTY_TYPE_LABELS[property.type]} · ${property.livingAreaSqm ? `${property.livingAreaSqm}m²` : '—'}`}
          transactionType={property.operationTypes?.[0] ? OPERATION_TYPE_LABELS[property.operationTypes[0] as OperationType] : 'VENTE'}
          contactName={ownerName}
          qualification={kpis.qualification}
          carnetActive={false}
          mandatActive={hasActiveMandate}
          aiSuggestions={aiSuggestions}
          onBack={() => router.push('/properties')}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════
          Bloc 1b — GraphCourbe (NOUVEAU)
          ═══════════════════════════════════════════════════════ */}
      <GraphCourbe
        title="Activité"
        data={GRAPH_DATA}
        selectedIndex={5}
        selectedDate="22 fév 2026"
        selectedLabel="28 réactions positives"
        trendPercentage="7%"
        trendDirection="down"
      />

      {/* ═══════════════════════════════════════════════════════
          Bloc 1c — AppBarBienAncres (sticky — REMONTÉ)
          ═══════════════════════════════════════════════════════ */}
      <div className="sticky top-[100px] z-20 bg-surface-page">
        <AppBarBienAncres onItemClick={handleAnchorClick} />
      </div>

      {/* ═══════════════════════════════════════════════════════
          Bloc 1d — Gallery
          ═══════════════════════════════════════════════════════ */}
      <Gallery
        images={photos.slice(0, 3).map(p => ({ url: p.storagePath, alt: p.fileName }))}
        onGalleryClick={() => setGallerySheetOpen(true)}
        onAddPhotos={() => { /* TODO: Sheet upload photos */ }}
      />

      {/* ═══════════════════════════════════════════════════════
          Bloc 1e — AppBarAnnonce (DÉPLACÉ)
          ═══════════════════════════════════════════════════════ */}
      <AppBarAnnonce
        type={PROPERTY_TYPE_LABELS[property.type]}
        surface={property.livingAreaSqm ? `${property.livingAreaSqm} m²` : '—'}
        annee={property.constructionYear?.toString() ?? '—'}
        ville={property.addressCity ?? '—'}
        prix={formatPrice(property.desiredSellingPrice ?? property.estimatedMarketValue)}
        prixM2={property.livingAreaSqm && (property.desiredSellingPrice ?? property.estimatedMarketValue)
          ? `${formatPrice(Math.round((property.desiredSellingPrice ?? property.estimatedMarketValue ?? 0) / property.livingAreaSqm))} /m²`
          : '—'}
      />

      {/* ═══════════════════════════════════════════════════════
          Sheet Galerie Wide
          ═══════════════════════════════════════════════════════ */}
      <Sheet
        isOpen={gallerySheetOpen}
        onClose={() => setGallerySheetOpen(false)}
        width="wide"
        title={`Galerie (${photos.length})`}
        footer={
          <div className="sticky bottom-0 flex justify-end gap-[12px] px-[40px] pb-[100px] pt-[16px]"
            style={{ backgroundColor: 'var(--surface-neutral-default)' }}
          >
            <Button
              variant="outline"
              onClick={() => { /* TODO: import photo */ }}
            >
              Importer une photo
              <Download size={16} />
            </Button>
            <Button
              variant="outline"
              onClick={() => { /* TODO: partager galerie */ }}
            >
              Partager la galerie
              <Send size={16} />
            </Button>
          </div>
        }
      >
        <div className="px-[40px] py-[20px]">
          <Diaporama
            images={photos.map(p => ({ id: p.id, url: p.storagePath, alt: p.fileName }))}
            onDelete={(image, index) => { /* TODO: supprimer photo */ }}
            mainImageMaxHeight={500}
          />
        </div>
      </Sheet>

      {/* ═══════════════════════════════════════════════════════
          Sections (Blocs 2-9)
          ═══════════════════════════════════════════════════════ */}
      <div className="flex flex-col">
        {/* Bloc 2 — Caractéristiques */}
        <section ref={setSectionRef('caracteristiques')} id="caracteristiques" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
          <div className="flex items-center justify-between mb-[50px]">
            <div className="flex items-center gap-[4px]">
              <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
                Caractéristiques
              </h3>
              <Badge variant="default">{property.completionScore ?? 0}</Badge>
            </div>
            <Button variant="ghost" onClick={handleOpenCharacteristicsSheet}>
              <Pencil size={16} /> Éditer
            </Button>
          </div>

          {/* Grille 3 colonnes — Overview */}
          <div className="grid grid-cols-3 gap-x-[60px] gap-y-[8px] mb-[50px]">
            {/* Headers */}
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Localisation
            </p>
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Type
            </p>
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Diagnostics
            </p>

            {/* Localisation col */}
            <ProfileField label="Adresse" value={property.address} />
            <ProfileField label="Type de bien" value={PROPERTY_TYPE_LABELS[property.type]} />
            <div className="flex gap-[16px] py-[8px]">
              <span className="text-[16px] leading-[20px] tracking-[0.16px] text-content-caption shrink-0 w-[112px]">DPE</span>
              <div className="flex flex-col items-start gap-[4px]">
                {property.dpeEnergyClass ? (
                  <>
                    <IconDpe classe={property.dpeEnergyClass} size="medium" />
                    {property.dpeEnergyKwh && (
                      <span className="text-[13px] leading-[16px] text-content-caption">{property.dpeEnergyKwh} kWh/m²/an</span>
                    )}
                  </>
                ) : (
                  <span className="text-[16px] leading-[20px] tracking-[0.16px] text-content-body">-</span>
                )}
              </div>
            </div>

            <ProfileField label="Quartier" value={property.neighborhoodName} />
            <ProfileField label="État" value={property.condition ? PROPERTY_CONDITION_LABELS[property.condition] : null} />
            <div className="flex gap-[16px] py-[8px]">
              <span className="text-[16px] leading-[20px] tracking-[0.16px] text-content-caption shrink-0 w-[112px]">GES</span>
              <div className="flex flex-col items-start gap-[4px]">
                {property.dpeGasEmissionClass ? (
                  <>
                    <IconGes classe={property.dpeGasEmissionClass} size="medium" />
                    {property.dpeGasGco2 && (
                      <span className="text-[13px] leading-[16px] text-content-caption">{property.dpeGasGco2} gCO₂/m²/an</span>
                    )}
                  </>
                ) : (
                  <span className="text-[16px] leading-[20px] tracking-[0.16px] text-content-body">-</span>
                )}
              </div>
            </div>

            {/* Étages — logique conditionnelle */}
            {['STUDIO', 'T1', 'T2', 'T3', 'T4', 'APPARTEMENT', 'LOFT'].includes(property.type) ? (
              <>
                <ProfileField label="Étage" value={property.floorLevel ? `${property.floorLevel}ème` : null} />
                <ProfileField label="Date de construction" value={property.constructionYear?.toString()} />
                <ProfileField label="Chauffage" value={property.heatingType ? HEATING_TYPE_LABELS[property.heatingType] : null} />

                <ProfileField label="Étages immeuble" value={property.numberOfFloors ? `${property.numberOfFloors} étages` : null} />
                <ProfileField label="Surface habitable" value={property.livingAreaSqm ? `${property.livingAreaSqm} m²` : null} />
                <div />
              </>
            ) : ['MAISON', 'MAISON_DE_VILLE'].includes(property.type) ? (
              <>
                <ProfileField label="Niveaux" value={property.numberOfFloors ? `${property.numberOfFloors} niveaux` : null} />
                <ProfileField label="Date de construction" value={property.constructionYear?.toString()} />
                <ProfileField label="Chauffage" value={property.heatingType ? HEATING_TYPE_LABELS[property.heatingType] : null} />

                <div />
                <ProfileField label="Surface habitable" value={property.livingAreaSqm ? `${property.livingAreaSqm} m²` : null} />
                <div />
              </>
            ) : (
              <>
                <div />
                <ProfileField label="Date de construction" value={property.constructionYear?.toString()} />
                <ProfileField label="Chauffage" value={property.heatingType ? HEATING_TYPE_LABELS[property.heatingType] : null} />

                <div />
                <ProfileField label="Surface habitable" value={property.livingAreaSqm ? `${property.livingAreaSqm} m²` : null} />
                <div />
              </>
            )}

            <div />
            <ProfileField label="Surface extérieure" value={(() => {
              const ext = (property.terraceAreaSqm ?? 0) + (property.balconyAreaSqm ?? 0) + (property.gardenAreaSqm ?? 0);
              return ext > 0 ? `${ext} m²` : null;
            })()} />
            <div />

            <div />
            <ProfileField label="Nombre de pièces" value={property.numberOfRooms?.toString()} />
            <div />
          </div>

          {/* Bouton "Voir plus" → expand en place */}
          <div className="flex justify-center mt-[16px]">
            <Button
              variant="ghost"
              onClick={() => setShowMoreCharacteristics(!showMoreCharacteristics)}
            >
              {showMoreCharacteristics ? 'Voir moins' : 'Voir plus'}
              {showMoreCharacteristics ? (
                <ChevronUp className="w-4 h-4 ml-1" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-1" />
              )}
            </Button>
          </div>

          {showMoreCharacteristics && (
            <div className="mt-[30px] flex flex-col gap-[50px]">
              {/* B.1 — Pièces */}
              <div>
                <h6 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings mb-[24px]">
                  Pièces
                </h6>
                <div className="grid grid-cols-3 gap-x-[60px] gap-y-[24px]">
                  {/* Colonne 1 — Séjour + Cuisine */}
                  <div className="flex flex-col gap-[24px]">
                    <div>
                      <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                        Pièce à vivre
                      </p>
                      <div className="flex flex-col gap-[8px]">
                        <ProfileField label="Surface" value={property.mainRoomAreaSqm ? `${property.mainRoomAreaSqm} m²` : null} />
                        <ProfileField label="Équipements" value={property.mainRoomEquipment} />
                      </div>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                        Cuisine
                      </p>
                      <div className="flex flex-col gap-[8px]">
                        <ProfileField label="Surface" value={property.kitchenAreaSqm ? `${property.kitchenAreaSqm} m²` : null} />
                        <ProfileField label="Type" value={property.kitchenType ? KITCHEN_TYPE_LABELS[property.kitchenType] : null} />
                        <ProfileField label="Équipements" value={property.kitchenEquipment} />
                      </div>
                    </div>
                  </div>

                  {/* Colonne 2 — Chambres */}
                  <div className="flex flex-col gap-[24px]">
                    <div>
                      <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                        Chambre 1
                      </p>
                      <div className="flex flex-col gap-[8px]">
                        <ProfileField label="Surface" value={property.bedroom1AreaSqm ? `${property.bedroom1AreaSqm} m²` : null} />
                        <ProfileField label="Équipements" value={property.bedroom1Equipment} />
                      </div>
                    </div>
                    {property.bedroomCount !== null && property.bedroomCount >= 2 && (
                      <div>
                        <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                          Chambre 2
                        </p>
                        <div className="flex flex-col gap-[8px]">
                          <ProfileField label="Surface" value={property.bedroom2AreaSqm ? `${property.bedroom2AreaSqm} m²` : null} />
                          <ProfileField label="Équipements" value={property.bedroom2Equipment} />
                        </div>
                      </div>
                    )}
                    {property.bedroomCount !== null && property.bedroomCount >= 3 && (
                      <div>
                        <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                          Chambre 3
                        </p>
                        <div className="flex flex-col gap-[8px]">
                          <ProfileField label="Surface" value={property.bedroom3AreaSqm ? `${property.bedroom3AreaSqm} m²` : null} />
                          <ProfileField label="Équipements" value={property.bedroom3Equipment} />
                        </div>
                      </div>
                    )}
                    {property.bedroomCount !== null && property.bedroomCount >= 4 && (
                      <div>
                        <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                          Chambre 4
                        </p>
                        <div className="flex flex-col gap-[8px]">
                          <ProfileField label="Surface" value={property.bedroom4AreaSqm ? `${property.bedroom4AreaSqm} m²` : null} />
                          <ProfileField label="Équipements" value={property.bedroom4Equipment} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Colonne 3 — Sanitaires */}
                  <div className="flex flex-col gap-[24px]">
                    <div>
                      <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                        Salle de bain
                      </p>
                      <div className="flex flex-col gap-[8px]">
                        <ProfileField label="Baignoire (nb)" value={property.bathroomCount?.toString()} />
                        <ProfileField label="Douche (nb)" value={property.showerRoomCount?.toString()} />
                        <ProfileField label="Surface" value={property.bathroomAreaSqm ? `${property.bathroomAreaSqm} m²` : null} />
                        <ProfileField label="Équipements" value={property.bathroomEquipment} />
                      </div>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                        WC
                      </p>
                      <div className="flex flex-col gap-[8px]">
                        <ProfileField label="Nombre" value={property.toiletCount?.toString()} />
                        <ProfileField label="Surface" value={property.toiletAreaSqm ? `${property.toiletAreaSqm} m²` : null} />
                        <ProfileField label="Équipements" value={property.toiletEquipment} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* B.2 — Équipements */}
              <div>
                <h6 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings mb-[24px]">
                  Équipements
                </h6>
                <div className="grid grid-cols-2 gap-x-[60px] gap-y-[24px]">
                  {/* Colonne 1 — Domotique */}
                  <div>
                    <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                      Domotique
                    </p>
                    <div className="flex flex-col gap-[8px]">
                      <ProfileField label="Interphone" value={property.hasIntercom !== null ? (property.hasIntercom ? 'Oui' : 'Non') : null} />
                      <ProfileField label="Domotique" value={property.hasHomeAutomation !== null ? (property.hasHomeAutomation ? 'Oui' : 'Non') : null} />
                      <ProfileField label="Commande par téléphone" value={property.hasSmartphoneControl !== null ? (property.hasSmartphoneControl ? 'Oui' : 'Non') : null} />
                    </div>
                  </div>
                  {/* Colonne 2 — Fermetures */}
                  <div>
                    <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                      Fermetures
                    </p>
                    <div className="flex flex-col gap-[8px]">
                      <ProfileField label="Type de fermetures" value={property.shutterType} />
                    </div>
                  </div>
                </div>
                {/* Bloc Piscine — conditionnel */}
                {property.hasPool && (
                  <div className="mt-[24px]">
                    <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                      Piscine
                    </p>
                    <div className="flex flex-col gap-[8px]">
                      <ProfileField label="Piscine" value="Oui" />
                      <ProfileField label="Type" value={property.poolType ? POOL_TYPE_LABELS[property.poolType] : null} />
                    </div>
                  </div>
                )}
              </div>

              {/* B.3 — Énergie */}
              <div>
                <h6 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings mb-[24px]">
                  Énergie
                </h6>
                <div className="grid grid-cols-2 gap-x-[60px] gap-y-[24px]">
                  {/* Colonne 1 — DPE */}
                  <div>
                    <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                      DPE
                    </p>
                    <div className="flex flex-col gap-[8px]">
                      <ProfileField label="Date" value={property.dpeValidityDate ? new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(property.dpeValidityDate)) : null} />
                      <div className="flex gap-[16px] py-[8px]">
                        <span className="text-[16px] leading-[20px] tracking-[0.16px] text-content-caption shrink-0 w-[112px]">Énergie</span>
                        <div className="flex flex-col items-start gap-[4px]">
                          {property.dpeEnergyClass ? (
                            <>
                              <IconDpe classe={property.dpeEnergyClass} size="medium" />
                              {property.dpeEnergyKwh && (
                                <span className="text-[13px] leading-[16px] text-content-caption">{property.dpeEnergyKwh} kWh/m²/an</span>
                              )}
                            </>
                          ) : (
                            <span className="text-[16px] leading-[20px] tracking-[0.16px] text-content-body">-</span>
                          )}
                        </div>
                      </div>
                      <ProfileField label="Conformité" value={property.dpeComplianceDeadline ? new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(property.dpeComplianceDeadline)) : null} />
                    </div>
                  </div>
                  {/* Colonne 2 — GES */}
                  <div>
                    <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                      GES
                    </p>
                    <div className="flex flex-col gap-[8px]">
                      <ProfileField label="Date" value={property.dpeValidityDate ? new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(property.dpeValidityDate)) : null} />
                      <div className="flex gap-[16px] py-[8px]">
                        <span className="text-[16px] leading-[20px] tracking-[0.16px] text-content-caption shrink-0 w-[112px]">GES</span>
                        <div className="flex flex-col items-start gap-[4px]">
                          {property.dpeGasEmissionClass ? (
                            <>
                              <IconGes classe={property.dpeGasEmissionClass} size="medium" />
                              {property.dpeGasGco2 && (
                                <span className="text-[13px] leading-[16px] text-content-caption">{property.dpeGasGco2} gCO₂/m²/an</span>
                              )}
                            </>
                          ) : (
                            <span className="text-[16px] leading-[20px] tracking-[0.16px] text-content-body">-</span>
                          )}
                        </div>
                      </div>
                      <ProfileField label="Chauffage" value={property.heatingType ? HEATING_TYPE_LABELS[property.heatingType] : null} />
                      <ProfileField label="Eau chaude" value={property.hotWaterSystem ? HOT_WATER_SYSTEM_LABELS[property.hotWaterSystem] : null} />
                    </div>
                  </div>
                </div>
              </div>

              {/* B.4 — Stationnement */}
              {property.parkingType && property.parkingType !== 'AUCUN' && (
                <div>
                  <h6 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings mb-[24px]">
                    Stationnement
                  </h6>
                  <div className="grid grid-cols-2 gap-x-[60px] gap-y-[24px]">
                    <div>
                      <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                        Stationnement 1
                      </p>
                      <div className="flex flex-col gap-[8px]">
                        <ProfileField label="Type" value={PARKING_TYPE_LABELS[property.parkingType]} />
                        <ProfileField label="Quantité" value={property.parkingSpotCount ? `${property.parkingSpotCount} place(s)` : null} />
                        <ProfileField label="Dimensions" value={property.parkingWidthM && property.parkingLengthM ? `${property.parkingWidthM}m × ${property.parkingLengthM}m` : null} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* B.5 — Annexes */}
              {(property.basementAreaSqm || property.atticAreaSqm || property.terraceAreaSqm || property.balconyAreaSqm || property.gardenAreaSqm || property.landAreaSqm) && (
                <div>
                  <h6 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings mb-[24px]">
                    Annexes
                  </h6>
                  <div className="grid grid-cols-2 gap-x-[60px] gap-y-[24px]">
                    {property.basementAreaSqm && (
                      <div>
                        <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">Cave</p>
                        <div className="flex flex-col gap-[8px]">
                          <ProfileField label="Type" value="Cave" />
                          <ProfileField label="Surface" value={`${property.basementAreaSqm} m²`} />
                        </div>
                      </div>
                    )}
                    {property.atticAreaSqm && (
                      <div>
                        <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">Grenier</p>
                        <div className="flex flex-col gap-[8px]">
                          <ProfileField label="Type" value="Grenier" />
                          <ProfileField label="Surface" value={`${property.atticAreaSqm} m²`} />
                        </div>
                      </div>
                    )}
                    {property.terraceAreaSqm && (
                      <div>
                        <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">Terrasse</p>
                        <div className="flex flex-col gap-[8px]">
                          <ProfileField label="Type" value="Terrasse" />
                          <ProfileField label="Surface" value={`${property.terraceAreaSqm} m²`} />
                        </div>
                      </div>
                    )}
                    {property.balconyAreaSqm && (
                      <div>
                        <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">Balcon</p>
                        <div className="flex flex-col gap-[8px]">
                          <ProfileField label="Type" value="Balcon" />
                          <ProfileField label="Surface" value={`${property.balconyAreaSqm} m²`} />
                        </div>
                      </div>
                    )}
                    {property.gardenAreaSqm && (
                      <div>
                        <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">Jardin</p>
                        <div className="flex flex-col gap-[8px]">
                          <ProfileField label="Type" value="Jardin" />
                          <ProfileField label="Surface" value={`${property.gardenAreaSqm} m²`} />
                        </div>
                      </div>
                    )}
                    {property.landAreaSqm && (
                      <div>
                        <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">Terrain</p>
                        <div className="flex flex-col gap-[8px]">
                          <ProfileField label="Type" value="Terrain" />
                          <ProfileField label="Surface" value={`${property.landAreaSqm} m²`} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* B.6 — Parties Communes */}
              <div>
                <h6 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings mb-[24px]">
                  Parties Communes
                </h6>
                <div className="flex flex-col gap-[8px]">
                  <ProfileField label="Digicode" value={property.hasDigicode !== null ? (property.hasDigicode ? 'Oui' : 'Non') : null} />
                  <ProfileField label="Ascenseur" value={property.hasElevator !== null ? (property.hasElevator ? 'Oui' : 'Non') : null} />
                  <ProfileField label="Espace vert" value={property.hasGreenSpace !== null ? (property.hasGreenSpace ? 'Oui' : 'Non') : null} />
                  <ProfileField label="Exposition" value={property.exposures?.length ? property.exposures.join(', ') : property.mainExposure} />
                  <ProfileField label="Vue" value={property.mainViewType ? VIEW_TYPE_LABELS[property.mainViewType] : null} />
                </div>
              </div>

              {/* B.7 — Copropriété (conditionnel) */}
              {data.coOwnership && (
                <div>
                  <h6 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings mb-[24px]">
                    Copropriété
                  </h6>
                  <div className="grid grid-cols-2 gap-x-[60px] gap-y-[24px]">
                    {/* Colonne 1 — Description */}
                    <div>
                      <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                        Description
                      </p>
                      <div className="flex flex-col gap-[8px]">
                        <ProfileField label="Type" value={data.coOwnership.type} />
                        <ProfileField label="Nombre de lots" value={data.coOwnership.numberOfLots?.toString()} />
                        <ProfileField label="Charges annuelles" value={data.coOwnership.estimatedAnnualFees ? `${data.coOwnership.estimatedAnnualFees} €` : null} />
                      </div>
                    </div>
                    {/* Colonne 2 — Procédures */}
                    <div>
                      <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]">
                        Procédures
                      </p>
                      <div className="flex flex-col gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                          <ProfileField label="En cours" value={data.coOwnership.hasCurrentLegalProcedures !== null ? (data.coOwnership.hasCurrentLegalProcedures ? 'Oui' : 'Non') : null} />
                          {data.coOwnership.hasCurrentLegalProcedures && (
                            <a href="#documents" className="text-xs text-content-branded-action hover:underline">Voir documents</a>
                          )}
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <ProfileField label="Votées" value={data.coOwnership.hasPlannedLegalProcedures !== null ? (data.coOwnership.hasPlannedLegalProcedures ? 'Oui' : 'Non') : null} />
                          {data.coOwnership.hasPlannedLegalProcedures && (
                            <a href="#documents" className="text-xs text-content-branded-action hover:underline">Voir documents</a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </section>

        {/* Bloc 3 — Activités */}
        <section ref={setSectionRef('activites')} id="activites" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
          <div className="flex items-center justify-between mb-[50px]">
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center gap-[4px]">
                <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
                  Activités
                </h3>
                <Badge variant="default">{filteredActivities.length}</Badge>
              </div>
              <Chip
                label="Tout"
                icon={<CheckCheck size={16} />}
                selected={activeFilter === 'all'}
                size="medium"
                fontWeight="semibold"
                onClick={() => setActiveFilter('all')}
              />
              <Chip
                label="Qualification"
                icon={<Database size={16} />}
                selected={activeFilter === 'QUALIFICATION'}
                size="medium"
                fontWeight="semibold"
                onClick={() => setActiveFilter('QUALIFICATION')}
              />
              <Chip
                label="Entretien"
                icon={<MessageCirclePlus size={16} />}
                selected={activeFilter === 'ENTRETIEN'}
                size="medium"
                fontWeight="semibold"
                onClick={() => setActiveFilter('ENTRETIEN')}
              />
              <Chip
                label="Conversion"
                icon={<ScrollText size={16} />}
                selected={activeFilter === 'CONVERSION'}
                size="medium"
                fontWeight="semibold"
                onClick={() => setActiveFilter('CONVERSION')}
              />
            </div>
            <Button
              variant="default"
              onClick={() => setIsActivitySheetOpen(true)}
            >
              Voir tout <ArrowRight size={16} />
            </Button>
          </div>

          {/* Liste des activités */}
          <div className="flex flex-col">
            {filteredActivities.map((activity) => (
              <CardLog
                key={activity.id}
                date={activity.date}
                time={activity.time}
                author={activity.author}
                category={activity.category}
                description={activity.description}
                badgeVariant={eventStatusToBadgeVariant(activity.status)}
                className="w-full"
              />
            ))}
          </div>
        </section>

        {/* Bloc 4 — Affaires */}
        <section ref={setSectionRef('affaires')} id="affaires" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
          <div className="flex items-center gap-[4px] mb-[50px]">
            <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
              Affaires
            </h3>
            <Badge variant="default">{dealsCount}</Badge>
          </div>

          {deals.length > 0 ? (
            <div className="flex flex-col gap-[17px]">
              {deals.slice(0, 3).map((deal) => (
                <ListAffaire
                  key={deal.id}
                  dealType={deal.type as DealType}
                  status={deal.status}
                  reference={deal.reference}
                  propertyType={deal.searchPropertyType ?? undefined}
                  propertySurface={
                    deal.searchSurfaceMin
                      ? `${deal.searchSurfaceMin}–${deal.searchSurfaceMax ?? '?'} m²`
                      : undefined
                  }
                  propertyCity={deal.searchCity ?? undefined}
                  clientName={
                    deal.Client
                      ? `${deal.Client.firstName} ${deal.Client.lastName}`
                      : undefined
                  }
                  pipelineStage={deal.pipelineStage as PipelineStage}
                  winProbability={deal.winProbability ?? 0}
                  weightedRevenue={computeWeightedRevenue(deal)}
                  leadsCount={deal.infoRequestsCount ?? undefined}
                  visitsCount={deal.visitCount ?? undefined}
                  listingStatus={deal.type === 'VENTE' ? listingStatusToVariant(listings[0]?.status ?? null) : undefined}
                  occupancyStatus={deal.type === 'GESTION' ? occupancyStatusToVariant(deal.occupancyStatus) : undefined}
                  maintenanceStatus={deal.type === 'GESTION' ? maintenanceStatusToVariant(deal.maintenanceStatus) : undefined}
                  offersCount={deal.purchaseOfferStatus && deal.purchaseOfferStatus !== 'AUCUNE' ? 1 : 0}
                  promiseStatus={
                    (deal.type === 'VENTE' || deal.type === 'ACQUISITION')
                      ? purchaseOfferToPromiseVariant(deal.purchaseOfferStatus)
                      : undefined
                  }
                  onDealClick={() => router.push(`/deals/${deal.id}`)}
                />
              ))}
            </div>
          ) : (
            <p className="text-[16px] leading-[20px] tracking-[0.16px] text-content-caption">Aucune affaire liée</p>
          )}

          {deals.length > 3 && (
            <div className="mt-[16px]">
              <Button variant="ghost" onClick={() => setSheetAffairesOpen(true)}>
                Voir tout ({dealsCount})
              </Button>
            </div>
          )}
        </section>

        {/* Bloc 5 — Annonce */}
        <section ref={setSectionRef('annonce')} id="annonce" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
          <div className="flex items-center gap-[4px] mb-[50px]">
            <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
              Annonce
            </h3>
            <Badge variant="default">{listings.length}</Badge>
          </div>
          <div className="flex flex-col gap-[16px]">
            {listings.map((l) => (
              <ListAnnonce
                key={l.id}
                city={property.addressCity ?? '—'}
                propertyType={PROPERTY_TYPE_LABELS[property.type]}
                surface={property.livingAreaSqm ? `${property.livingAreaSqm}m²` : '—'}
                dpeGrade={property.dpeEnergyClass ?? undefined}
                ownerName={ownerName}
                workflow={listingStatusToWorkflow(l.status)}
                aiSuggestions={0}
                onView={() => setAnnonceSheetListing(l)}
              />
            ))}
          </div>
        </section>

        {/* Sheet Annonce Wide */}
        <Sheet
          isOpen={annonceSheetListing !== null}
          onClose={() => setAnnonceSheetListing(null)}
          width="wide"
          title="Annonce"
          headerAfterTitle={
            annonceSheetListing && (
              <div className="flex items-center gap-4">
                <Badge variant={listingStatusToWorkflow(annonceSheetListing.status).edition}>ÉDITION</Badge>
                <Badge variant={listingStatusToWorkflow(annonceSheetListing.status).revision}>RÉVISION</Badge>
                <Badge variant={listingStatusToWorkflow(annonceSheetListing.status).publication}>PUBLICATION</Badge>
              </div>
            )
          }
          headerActions={
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold leading-[20px] text-content-caption">
                Publier
              </span>
              <Switch
                checked={annonceSheetListing?.status === 'PUBLISHED'}
                onChange={() => { /* TODO: toggle publication status */ }}
              />
            </div>
          }
          footer={
            <div
              className="sticky bottom-0 flex justify-end px-[40px] py-[16px] pb-[100px]"
              style={{ backgroundColor: 'var(--surface-neutral-default)' }}
            >
              <Button
                variant="outline"
                onClick={() => { /* TODO: partager annonce */ }}
              >
                Partager l&apos;annonce
                <Send size={16} />
              </Button>
            </div>
          }
        >
          <div className="px-[40px] py-[20px] flex flex-col gap-[40px]">

            {/* AppBarAnnonce — infos du bien */}
            <AppBarAnnonce
              type={PROPERTY_TYPE_LABELS[property.type]}
              surface={property.livingAreaSqm ? `${property.livingAreaSqm} m²` : '—'}
              annee={property.constructionYear ? String(property.constructionYear) : '—'}
              ville={property.addressCity ?? '—'}
              prix={formatPrice(property.desiredSellingPrice ?? property.estimatedMarketValue)}
              prixM2={
                property.livingAreaSqm && (property.desiredSellingPrice || property.estimatedMarketValue)
                  ? `${formatPrice(Math.round(Number(property.desiredSellingPrice || property.estimatedMarketValue) / Number(property.livingAreaSqm)))} /m²`
                  : '—'
              }
            />

            {/* Section 1 — Diaporama */}
            <section>
              <Diaporama
                images={photos.map(p => ({ id: p.id, url: p.storagePath, alt: p.fileName }))}
                mainImageMaxHeight={400}
              />
            </section>

            {/* Section 2 — URL de l'annonce */}
            <section>
              <h5
                className="text-[20px] font-bold leading-[24px] tracking-[0.2px] mb-[16px]"
                style={{ color: 'var(--text-headings)' }}
              >
                URL de l&apos;annonce
              </h5>
              <div
                className="flex items-center justify-between px-[16px] py-[12px] rounded-[12px] border"
                style={{
                  borderColor: 'var(--border-default)',
                  backgroundColor: 'var(--surface-neutral-action)',
                }}
              >
                <div className="flex items-center gap-[8px]">
                  <Globe size={16} style={{ color: 'var(--icon-neutral-default)' }} />
                  <span
                    className="text-[14px] leading-[20px]"
                    style={{ color: 'var(--text-body)' }}
                  >
                    realagent.fr/annonce/{annonceSheetListing?.slug ?? annonceSheetListing?.id ?? ''}
                  </span>
                </div>
                <button
                  className="p-[8px] rounded-[8px] transition-colors"
                  style={{ color: 'var(--text-neutral-action)' }}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `realagent.fr/annonce/${annonceSheetListing?.slug ?? annonceSheetListing?.id ?? ''}`
                    );
                  }}
                  aria-label="Copier l'URL"
                >
                  <Copy size={16} />
                </button>
              </div>
            </section>

            {/* Section 3 — Description */}
            <section>
              <div className="flex items-center justify-between mb-[16px]">
                <h5
                  className="text-[20px] font-bold leading-[24px] tracking-[0.2px]"
                  style={{ color: 'var(--text-headings)' }}
                >
                  Description
                </h5>
                {annonceSheetListing?.descriptionSource && (
                  <Badge variant={
                    annonceSheetListing.descriptionSource === 'AI_GENERATED' ? 'information'
                    : annonceSheetListing.descriptionSource === 'AI_EDITED' ? 'warning'
                    : 'default'
                  }>
                    {annonceSheetListing.descriptionSource === 'AI_GENERATED' ? 'IA'
                     : annonceSheetListing.descriptionSource === 'AI_EDITED' ? 'IA éditée'
                     : 'Manuelle'}
                  </Badge>
                )}
              </div>
              <p
                className="text-[14px] leading-[22px]"
                style={{ color: 'var(--text-body)' }}
              >
                {annonceSheetListing?.description ?? 'Aucune description'}
              </p>
            </section>

            {/* Section 4 — Caractéristiques */}
            <section>
              <h5
                className="text-[20px] font-bold leading-[24px] tracking-[0.2px] mb-[16px]"
                style={{ color: 'var(--text-headings)' }}
              >
                Caractéristiques
              </h5>
              <div className="grid grid-cols-2 gap-x-[40px] gap-y-[4px]">
                <ProfileField label="Type" value={PROPERTY_TYPE_LABELS[property.type]} />
                <ProfileField label="État" value={property.condition ? PROPERTY_CONDITION_LABELS[property.condition] : null} />
                <ProfileField label="Surface" value={property.livingAreaSqm ? `${property.livingAreaSqm} m²` : null} />
                <ProfileField label="Terrain" value={property.landAreaSqm ? `${property.landAreaSqm} m²` : null} />
                <ProfileField label="Pièces" value={property.numberOfRooms ? String(property.numberOfRooms) : null} />
                <ProfileField label="Chambres" value={property.bedroomCount ? String(property.bedroomCount) : null} />
                <ProfileField label="SDB" value={property.bathroomCount ? String(property.bathroomCount) : null} />
                <ProfileField label="WC" value={property.toiletCount ? String(property.toiletCount) : null} />
                <ProfileField label="Cuisine" value={property.kitchenType ? KITCHEN_TYPE_LABELS[property.kitchenType] : null} />
                <ProfileField label="Parking" value={property.parkingType ? PARKING_TYPE_LABELS[property.parkingType] : null} />
                <ProfileField label="Étage" value={property.floorLevel ? `${property.floorLevel}/${property.numberOfFloors ?? '?'}` : null} />
                <ProfileField label="Exposition" value={property.mainExposure ?? null} />
                <ProfileField label="Ascenseur" value={property.hasElevator != null ? (property.hasElevator ? 'Oui' : 'Non') : null} />
                <ProfileField label="Piscine" value={property.hasPool != null ? (property.hasPool ? 'Oui' : 'Non') : null} />
                <ProfileField label="Terrasse" value={property.terraceAreaSqm ? `${property.terraceAreaSqm} m²` : null} />
                <ProfileField label="Balcon" value={property.balconyAreaSqm ? `${property.balconyAreaSqm} m²` : null} />
                <ProfileField label="Jardin" value={property.gardenAreaSqm ? `${property.gardenAreaSqm} m²` : null} />
                <ProfileField label="Cave" value={property.basementAreaSqm ? `${property.basementAreaSqm} m²` : null} />
              </div>
            </section>

            {/* Section 5 — Énergie */}
            <section>
              <h5
                className="text-[20px] font-bold leading-[24px] tracking-[0.2px] mb-[16px]"
                style={{ color: 'var(--text-headings)' }}
              >
                Énergie
              </h5>
              <div className="grid grid-cols-2 gap-x-[40px] gap-y-[4px]">
                <ProfileField label="DPE énergie" value={property.dpeEnergyClass ?? null} />
                <ProfileField label="DPE GES" value={property.dpeGasEmissionClass ?? null} />
                <ProfileField label="Chauffage" value={property.heatingType ? HEATING_TYPE_LABELS[property.heatingType] : null} />
                <ProfileField label="Eau chaude" value={property.hotWaterSystem ? HOT_WATER_SYSTEM_LABELS[property.hotWaterSystem] : null} />
                <ProfileField label="Conso kWh" value={property.dpeEnergyKwh ? `${property.dpeEnergyKwh} kWh/m²/an` : null} />
                <ProfileField label="Émission CO₂" value={property.dpeGasGco2 ? `${property.dpeGasGco2} gCO₂/m²/an` : null} />
              </div>
            </section>

            {/* Section 6 — Copropriété */}
            {coOwnership && (
              <section>
                <h5
                  className="text-[20px] font-bold leading-[24px] tracking-[0.2px] mb-[16px]"
                  style={{ color: 'var(--text-headings)' }}
                >
                  Copropriété
                </h5>
                <div className="grid grid-cols-2 gap-x-[40px] gap-y-[4px]">
                  <ProfileField label="Type" value={coOwnership.type} />
                  <ProfileField label="Nb lots" value={coOwnership.numberOfLots ? String(coOwnership.numberOfLots) : null} />
                  <ProfileField label="N° lot" value={coOwnership.lotNumber} />
                  <ProfileField label="Syndic" value={coOwnership.syndicName} />
                  <ProfileField label="Charges/mois" value={coOwnership.monthlyCharges ? `${coOwnership.monthlyCharges} €` : null} />
                  <ProfileField label="Frais annuels" value={coOwnership.estimatedAnnualFees ? `${coOwnership.estimatedAnnualFees} €` : null} />
                  <ProfileField label="Travaux prévus" value={coOwnership.plannedWorkAmount ? `${coOwnership.plannedWorkAmount} €` : null} />
                  <ProfileField label="Procédures" value={
                    coOwnership.hasCurrentLegalProcedures ? 'En cours'
                    : coOwnership.hasPlannedLegalProcedures ? 'Prévues'
                    : 'Aucune'
                  } />
                </div>
              </section>
            )}

            {/* Section 7 — Statistiques (si publiée) */}
            {annonceSheetListing?.status === 'PUBLISHED' && (
              <section>
                <h5
                  className="text-[20px] font-bold leading-[24px] tracking-[0.2px] mb-[16px]"
                  style={{ color: 'var(--text-headings)' }}
                >
                  Statistiques
                </h5>
                <div className="flex gap-[24px]">
                  <div className="flex flex-col items-center gap-[4px] px-[20px] py-[12px] rounded-[12px]"
                    style={{ backgroundColor: 'var(--surface-neutral-action)' }}
                  >
                    <span className="text-[24px] font-bold" style={{ color: 'var(--text-headings)' }}>
                      {annonceSheetListing.viewCount ?? 0}
                    </span>
                    <span className="text-[12px]" style={{ color: 'var(--text-caption)' }}>
                      Vues
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-[4px] px-[20px] py-[12px] rounded-[12px]"
                    style={{ backgroundColor: 'var(--surface-neutral-action)' }}
                  >
                    <span className="text-[24px] font-bold" style={{ color: 'var(--text-headings)' }}>
                      {annonceSheetListing.leadCount ?? 0}
                    </span>
                    <span className="text-[12px]" style={{ color: 'var(--text-caption)' }}>
                      Contacts
                    </span>
                  </div>
                </div>
              </section>
            )}

          </div>
        </Sheet>

        {/* Bloc 6 — Carnet */}
        <section ref={setSectionRef('carnet')} id="carnet" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
          <div className="flex items-center gap-[4px] mb-[50px]">
            <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
              Carnet
            </h3>
            <Badge variant="default">{false ? 1 : 0}</Badge>
          </div>
          <ListCarnet
            city={property.addressCity ?? '—'}
            propertyType={PROPERTY_TYPE_LABELS[property.type]}
            surface={property.livingAreaSqm ? `${property.livingAreaSqm}m²` : '—'}
            dpeGrade={property.dpeEnergyClass ?? undefined}
            ownerName={ownerName}
            status={false ? 'active' : 'dormant'}
            aiSuggestions={0}
          />
        </section>

        {/* Bloc 7 — Documents */}
        <section ref={setSectionRef('documents')} id="documents" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
          <div className="flex items-center justify-between mb-[50px]">
            <div className="flex items-center gap-[4px]">
              <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
                Documents
              </h3>
              <Badge variant="default">{documents.length}</Badge>
            </div>
            <Button variant="default" onClick={() => { setUploadFile(null); setUploadError(null); setIsDocUploadSheetOpen(true); }}>
              <Upload size={16} /> Ajouter
            </Button>
          </div>
          <div className="flex flex-wrap gap-[12px]">
            {documents.map((d) => (
              <Button key={d.id} variant="outline" onClick={() => {}}>
                <FileText size={16} /> {d.label}
              </Button>
            ))}
          </div>
        </section>

        {/* Bloc 8 — Messages */}
        <section ref={setSectionRef('messages')} id="messages" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
          <div className="flex items-center justify-between mb-[50px]">
            <div className="flex items-center gap-[4px]">
              <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
                Messages
              </h3>
              <Badge variant="default">{messages.length}</Badge>
            </div>
            <Button variant="default" onClick={() => setIsMessageSheetOpen(true)}>
              Voir tout <ArrowRight size={16} />
            </Button>
          </div>
          <div className="flex flex-col gap-[24px]">
            {messages.map((m) =>
              m.direction === 'received' ? (
                <MessageReceived
                  key={m.id}
                  date={m.date}
                  time={m.time}
                  status={m.status}
                  attachments={m.attachments}
                >
                  {m.body}
                </MessageReceived>
              ) : (
                <MessageSent
                  key={m.id}
                  date={m.date}
                  time={m.time}
                  status={m.status}
                  attachments={m.attachments}
                >
                  {m.body}
                </MessageSent>
              )
            )}
          </div>
        </section>

        {/* Bloc 9 — Acquéreurs Appétents */}
        <section ref={setSectionRef('acquereurs')} id="acquereurs" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
          <div className="flex items-center gap-[4px] mb-[50px]">
            <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
              Acquéreurs appétents
            </h3>
            <Badge variant="default">{data.matchingBuyers.length}</Badge>
          </div>
          {data.matchingBuyers.length > 0 && (
            <div className="flex flex-col gap-[8px]">
              {data.matchingBuyers.map((buyer) => (
                <ListClient
                  key={buyer.id}
                  firstName={buyer.firstName}
                  lastName={buyer.lastName}
                  badges={[{ label: 'ACQUÉREUR' }]}
                  kpis={{ qualification: 0, engagement: 0, conversion: 0, reactivation: 0 }}
                  aiSuggestions={0}
                  onClick={() => router.push(`/clients/${buyer.id}`)}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* ═══════════════════════════════════════════════════════
          Bloc 10 — IconButtonMega (bouton IA flottant)
          ═══════════════════════════════════════════════════════ */}
      <div className="fixed bottom-8 right-8 z-50">
        <IconButtonMega icon={<Sparkles size={24} />} variant="primary" />
      </div>

      {/* ═══════════════════════════════════════════════════════
          Sheet — Voir tout Affaires (liste exhaustive)
          ═══════════════════════════════════════════════════════ */}
      <Sheet
        isOpen={sheetAffairesOpen}
        onClose={() => setSheetAffairesOpen(false)}
        title="Affaires"
        width="narrow"
      >
        <div className="flex flex-col gap-[17px] px-[20px] py-[20px]">
          {deals.map((deal) => (
            <ListAffaire
              key={deal.id}
              dealType={deal.type as DealType}
              status={deal.status}
              reference={deal.reference}
              propertyType={deal.searchPropertyType ?? undefined}
              propertySurface={
                deal.searchSurfaceMin
                  ? `${deal.searchSurfaceMin}–${deal.searchSurfaceMax ?? '?'} m²`
                  : undefined
              }
              propertyCity={deal.searchCity ?? undefined}
              clientName={
                deal.Client
                  ? `${deal.Client.firstName} ${deal.Client.lastName}`
                  : undefined
              }
              pipelineStage={deal.pipelineStage as PipelineStage}
              winProbability={deal.winProbability ?? 0}
              weightedRevenue={computeWeightedRevenue(deal)}
              leadsCount={deal.infoRequestsCount ?? undefined}
              visitsCount={deal.visitCount ?? undefined}
              listingStatus={deal.type === 'VENTE' ? listingStatusToVariant(listings[0]?.status ?? null) : undefined}
              occupancyStatus={deal.type === 'GESTION' ? occupancyStatusToVariant(deal.occupancyStatus) : undefined}
              maintenanceStatus={deal.type === 'GESTION' ? maintenanceStatusToVariant(deal.maintenanceStatus) : undefined}
              offersCount={deal.purchaseOfferStatus && deal.purchaseOfferStatus !== 'AUCUNE' ? 1 : 0}
              promiseStatus={
                (deal.type === 'VENTE' || deal.type === 'ACQUISITION')
                  ? purchaseOfferToPromiseVariant(deal.purchaseOfferStatus)
                  : undefined
              }
              onDealClick={() => {
                setSheetAffairesOpen(false);
                router.push(`/deals/${deal.id}`);
              }}
            />
          ))}
        </div>
      </Sheet>

      {/* ═══════════════════════════════════════════════════════
          Sheet — Voir tout Activités (liste exhaustive)
          ═══════════════════════════════════════════════════════ */}
      <Sheet
        isOpen={isActivitySheetOpen}
        onClose={() => setIsActivitySheetOpen(false)}
        title="Activités"
        width="narrow"
      >
        <div className="flex flex-col px-[20px] py-[20px]">
          {allActivities.map((activity) => (
            <CardLog
              key={activity.id}
              date={activity.date}
              time={activity.time}
              author={activity.author}
              category={activity.category}
              description={activity.description}
              badgeVariant={eventStatusToBadgeVariant(activity.status)}
              className="w-full"
            />
          ))}
        </div>
      </Sheet>

      {/* ═══════════════════════════════════════════════════════
          Sheet — Voir tout Messages (historique complet)
          ═══════════════════════════════════════════════════════ */}
      <Sheet
        isOpen={isMessageSheetOpen}
        onClose={() => setIsMessageSheetOpen(false)}
        title="Messages"
        width="wide"
      >
        <div className="flex flex-col gap-[24px] px-[40px] py-[20px]">
          {allMessages.map((m) =>
            m.direction === 'received' ? (
              <MessageReceived
                key={m.id}
                date={m.date}
                time={m.time}
                status={m.status}
                attachments={m.attachments}
              >
                {m.body}
              </MessageReceived>
            ) : (
              <MessageSent
                key={m.id}
                date={m.date}
                time={m.time}
                status={m.status}
                attachments={m.attachments}
              >
                {m.body}
              </MessageSent>
            )
          )}
        </div>
      </Sheet>

      {/* ═══════════════════════════════════════════════════════
          Sheet — Éditer les caractéristiques
          ═══════════════════════════════════════════════════════ */}
      <Sheet
        isOpen={isCharacteristicsSheetOpen}
        onClose={() => setIsCharacteristicsSheetOpen(false)}
        title="Éditer les caractéristiques"
        width="narrow"
        footer={
          <Button
            variant="primary"
            onClick={handleSaveCharacteristics}
            disabled={isSavingCharacteristics || !isCharacteristicsDirty}
            className="w-full"
          >
            {isSavingCharacteristics ? 'Enregistrement…' : 'Enregistrer'}
          </Button>
        }
      >
        <div className="flex flex-col gap-[16px] px-[20px] py-[20px]">
          {/* Localisation */}
          <CollapsibleSection
            title="Localisation"
            defaultExpanded={false}
            badge={(() => {
              const fields = [characteristicsForm.floorLevel, characteristicsForm.numberOfFloors, characteristicsForm.neighborhoodName];
              const filled = fields.filter(f => f != null && f !== '' && f !== '0').length;
              const pct = Math.round((filled / fields.length) * 100);
              const color = pct >= 80 ? 'bg-surface-success-subtle text-content-success' : pct >= 50 ? 'bg-surface-warning-subtle text-content-warning' : 'bg-surface-error-subtle text-content-error';
              return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>{pct}%</span>;
            })()}
          >
            <div className="flex flex-col gap-[16px]">
              <InputFieldOutlined
                label="Étage"
                value={characteristicsForm.floorLevel}
                onChange={(v) => updateCharacteristicsField('floorLevel', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.floorLevel)}
              />
              <InputFieldOutlined
                label="Nombre d'étages"
                value={characteristicsForm.numberOfFloors}
                onChange={(v) => updateCharacteristicsField('numberOfFloors', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.numberOfFloors)}
              />
              <InputFieldOutlined
                label="Quartier"
                value={characteristicsForm.neighborhoodName}
                onChange={(v) => updateCharacteristicsField('neighborhoodName', v)}
                placeholder="Ex : Marais, Bastille"
                {...emptyProps(characteristicsForm.neighborhoodName)}
              />
            </div>
          </CollapsibleSection>

          {/* Type */}
          <CollapsibleSection
            title="Type"
            defaultExpanded={false}
            badge={(() => {
              const fields = [characteristicsForm.type, characteristicsForm.condition, characteristicsForm.constructionYear, characteristicsForm.livingAreaSqm, characteristicsForm.landAreaSqm, characteristicsForm.numberOfRooms];
              const filled = fields.filter(f => f != null && f !== '' && f !== '0').length;
              const pct = Math.round((filled / fields.length) * 100);
              const color = pct >= 80 ? 'bg-surface-success-subtle text-content-success' : pct >= 50 ? 'bg-surface-warning-subtle text-content-warning' : 'bg-surface-error-subtle text-content-error';
              return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>{pct}%</span>;
            })()}
          >
            <div className="flex flex-col gap-[16px]">
              <SelectField
                label="Type"
                value={characteristicsForm.type}
                onChange={(v) => updateCharacteristicsField('type', v)}
                options={Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />
              <SelectField
                label="Condition"
                value={characteristicsForm.condition}
                onChange={(v) => updateCharacteristicsField('condition', v)}
                options={Object.entries(PROPERTY_CONDITION_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />
              <InputFieldOutlined
                label="Année de construction"
                value={characteristicsForm.constructionYear}
                onChange={(v) => updateCharacteristicsField('constructionYear', v)}
                type="number"
                placeholder="2000"
                {...emptyProps(characteristicsForm.constructionYear)}
              />
              <InputFieldOutlined
                label="Surface habitable (m²)"
                value={characteristicsForm.livingAreaSqm}
                onChange={(v) => updateCharacteristicsField('livingAreaSqm', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.livingAreaSqm)}
              />
              <InputFieldOutlined
                label="Terrain (m²)"
                value={characteristicsForm.landAreaSqm}
                onChange={(v) => updateCharacteristicsField('landAreaSqm', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.landAreaSqm)}
              />
              <InputFieldOutlined
                label="Nombre de pièces"
                value={characteristicsForm.numberOfRooms}
                onChange={(v) => updateCharacteristicsField('numberOfRooms', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.numberOfRooms)}
              />
            </div>
          </CollapsibleSection>

          {/* Pièces */}
          <CollapsibleSection
            title="Pièces"
            defaultExpanded={false}
            badge={(() => {
              const fields = [characteristicsForm.mainRoomAreaSqm, characteristicsForm.mainRoomEquipment, characteristicsForm.kitchenAreaSqm, characteristicsForm.kitchenType, characteristicsForm.kitchenEquipment, characteristicsForm.bedroomCount, characteristicsForm.bedroom1AreaSqm, characteristicsForm.bedroom1Equipment, characteristicsForm.bedroom2AreaSqm, characteristicsForm.bedroom2Equipment, characteristicsForm.bedroom3AreaSqm, characteristicsForm.bedroom3Equipment, characteristicsForm.bedroom4AreaSqm, characteristicsForm.bedroom4Equipment, characteristicsForm.bathroomCount, characteristicsForm.bathroomAreaSqm, characteristicsForm.bathroomEquipment, characteristicsForm.showerRoomCount, characteristicsForm.toiletCount, characteristicsForm.toiletAreaSqm, characteristicsForm.toiletEquipment];
              const filled = fields.filter(f => f != null && f !== '' && f !== '0').length;
              const pct = Math.round((filled / fields.length) * 100);
              const color = pct >= 80 ? 'bg-surface-success-subtle text-content-success' : pct >= 50 ? 'bg-surface-warning-subtle text-content-warning' : 'bg-surface-error-subtle text-content-error';
              return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>{pct}%</span>;
            })()}
          >
            <div className="flex flex-col gap-[16px]">
              <InputFieldOutlined
                label="Pièce à vivre (m²)"
                value={characteristicsForm.mainRoomAreaSqm}
                onChange={(v) => updateCharacteristicsField('mainRoomAreaSqm', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.mainRoomAreaSqm)}
              />
              <InputFieldOutlined
                label="Équipements pièce à vivre"
                value={characteristicsForm.mainRoomEquipment}
                onChange={(v) => updateCharacteristicsField('mainRoomEquipment', v)}
                placeholder="Ex : prises RJ45, placard intégré"
                {...emptyProps(characteristicsForm.mainRoomEquipment)}
              />
              <InputFieldOutlined
                label="Cuisine (m²)"
                value={characteristicsForm.kitchenAreaSqm}
                onChange={(v) => updateCharacteristicsField('kitchenAreaSqm', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.kitchenAreaSqm)}
              />
              <SelectField
                label="Type de cuisine"
                value={characteristicsForm.kitchenType}
                onChange={(v) => updateCharacteristicsField('kitchenType', v)}
                options={Object.entries(KITCHEN_TYPE_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />
              <InputFieldOutlined
                label="Équipements cuisine"
                value={characteristicsForm.kitchenEquipment}
                onChange={(v) => updateCharacteristicsField('kitchenEquipment', v)}
                placeholder="Ex : îlot central, hotte, électroménager"
                {...emptyProps(characteristicsForm.kitchenEquipment)}
              />
              <InputFieldOutlined
                label="Chambres"
                value={characteristicsForm.bedroomCount}
                onChange={(v) => updateCharacteristicsField('bedroomCount', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.bedroomCount)}
              />
              {parseInt(characteristicsForm.bedroomCount || '0') >= 1 && (
                <>
                  <InputFieldOutlined
                    label="Chambre 1 (m²)"
                    value={characteristicsForm.bedroom1AreaSqm}
                    onChange={(v) => updateCharacteristicsField('bedroom1AreaSqm', v)}
                    type="number"
                    placeholder="0"
                    {...emptyProps(characteristicsForm.bedroom1AreaSqm)}
                  />
                  <InputFieldOutlined
                    label="Équipements chambre 1"
                    value={characteristicsForm.bedroom1Equipment}
                    onChange={(v) => updateCharacteristicsField('bedroom1Equipment', v)}
                    placeholder="Ex : placard intégré, prises RJ45"
                    {...emptyProps(characteristicsForm.bedroom1Equipment)}
                  />
                </>
              )}
              {parseInt(characteristicsForm.bedroomCount || '0') >= 2 && (
                <>
                  <InputFieldOutlined
                    label="Chambre 2 (m²)"
                    value={characteristicsForm.bedroom2AreaSqm}
                    onChange={(v) => updateCharacteristicsField('bedroom2AreaSqm', v)}
                    type="number"
                    placeholder="0"
                    {...emptyProps(characteristicsForm.bedroom2AreaSqm)}
                  />
                  <InputFieldOutlined
                    label="Équipements chambre 2"
                    value={characteristicsForm.bedroom2Equipment}
                    onChange={(v) => updateCharacteristicsField('bedroom2Equipment', v)}
                    placeholder="Ex : placard intégré, prises RJ45"
                    {...emptyProps(characteristicsForm.bedroom2Equipment)}
                  />
                </>
              )}
              {parseInt(characteristicsForm.bedroomCount || '0') >= 3 && (
                <>
                  <InputFieldOutlined
                    label="Chambre 3 (m²)"
                    value={characteristicsForm.bedroom3AreaSqm}
                    onChange={(v) => updateCharacteristicsField('bedroom3AreaSqm', v)}
                    type="number"
                    placeholder="0"
                    {...emptyProps(characteristicsForm.bedroom3AreaSqm)}
                  />
                  <InputFieldOutlined
                    label="Équipements chambre 3"
                    value={characteristicsForm.bedroom3Equipment}
                    onChange={(v) => updateCharacteristicsField('bedroom3Equipment', v)}
                    placeholder="Ex : placard intégré, prises RJ45"
                    {...emptyProps(characteristicsForm.bedroom3Equipment)}
                  />
                </>
              )}
              {parseInt(characteristicsForm.bedroomCount || '0') >= 4 && (
                <>
                  <InputFieldOutlined
                    label="Chambre 4 (m²)"
                    value={characteristicsForm.bedroom4AreaSqm}
                    onChange={(v) => updateCharacteristicsField('bedroom4AreaSqm', v)}
                    type="number"
                    placeholder="0"
                    {...emptyProps(characteristicsForm.bedroom4AreaSqm)}
                  />
                  <InputFieldOutlined
                    label="Équipements chambre 4"
                    value={characteristicsForm.bedroom4Equipment}
                    onChange={(v) => updateCharacteristicsField('bedroom4Equipment', v)}
                    placeholder="Ex : placard intégré, prises RJ45"
                    {...emptyProps(characteristicsForm.bedroom4Equipment)}
                  />
                </>
              )}
              <InputFieldOutlined
                label="Salles de bain"
                value={characteristicsForm.bathroomCount}
                onChange={(v) => updateCharacteristicsField('bathroomCount', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.bathroomCount)}
              />
              <InputFieldOutlined
                label="Surface SDB (m²)"
                value={characteristicsForm.bathroomAreaSqm}
                onChange={(v) => updateCharacteristicsField('bathroomAreaSqm', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.bathroomAreaSqm)}
              />
              <InputFieldOutlined
                label="Équipements SDB"
                value={characteristicsForm.bathroomEquipment}
                onChange={(v) => updateCharacteristicsField('bathroomEquipment', v)}
                placeholder="Ex : double vasque, douche italienne"
                {...emptyProps(characteristicsForm.bathroomEquipment)}
              />
              <InputFieldOutlined
                label="Douches"
                value={characteristicsForm.showerRoomCount}
                onChange={(v) => updateCharacteristicsField('showerRoomCount', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.showerRoomCount)}
              />
              <InputFieldOutlined
                label="WC"
                value={characteristicsForm.toiletCount}
                onChange={(v) => updateCharacteristicsField('toiletCount', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.toiletCount)}
              />
              <InputFieldOutlined
                label="Surface WC (m²)"
                value={characteristicsForm.toiletAreaSqm}
                onChange={(v) => updateCharacteristicsField('toiletAreaSqm', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.toiletAreaSqm)}
              />
              <InputFieldOutlined
                label="Équipements WC"
                value={characteristicsForm.toiletEquipment}
                onChange={(v) => updateCharacteristicsField('toiletEquipment', v)}
                placeholder="Ex : WC suspendu, lavabo"
                {...emptyProps(characteristicsForm.toiletEquipment)}
              />
            </div>
          </CollapsibleSection>

          {/* Surfaces annexes */}
          <CollapsibleSection
            title="Surfaces annexes"
            defaultExpanded={false}
            badge={(() => {
              const fields = [characteristicsForm.terraceAreaSqm, characteristicsForm.balconyAreaSqm, characteristicsForm.gardenAreaSqm, characteristicsForm.basementAreaSqm, characteristicsForm.atticAreaSqm];
              const filled = fields.filter(f => f != null && f !== '' && f !== '0').length;
              const pct = Math.round((filled / fields.length) * 100);
              const color = pct >= 80 ? 'bg-surface-success-subtle text-content-success' : pct >= 50 ? 'bg-surface-warning-subtle text-content-warning' : 'bg-surface-error-subtle text-content-error';
              return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>{pct}%</span>;
            })()}
          >
            <div className="flex flex-col gap-[16px]">
              <InputFieldOutlined
                label="Terrasse (m²)"
                value={characteristicsForm.terraceAreaSqm}
                onChange={(v) => updateCharacteristicsField('terraceAreaSqm', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.terraceAreaSqm)}
              />
              <InputFieldOutlined
                label="Balcon (m²)"
                value={characteristicsForm.balconyAreaSqm}
                onChange={(v) => updateCharacteristicsField('balconyAreaSqm', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.balconyAreaSqm)}
              />
              <InputFieldOutlined
                label="Jardin (m²)"
                value={characteristicsForm.gardenAreaSqm}
                onChange={(v) => updateCharacteristicsField('gardenAreaSqm', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.gardenAreaSqm)}
              />
              <InputFieldOutlined
                label="Cave (m²)"
                value={characteristicsForm.basementAreaSqm}
                onChange={(v) => updateCharacteristicsField('basementAreaSqm', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.basementAreaSqm)}
              />
              <InputFieldOutlined
                label="Grenier (m²)"
                value={characteristicsForm.atticAreaSqm}
                onChange={(v) => updateCharacteristicsField('atticAreaSqm', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.atticAreaSqm)}
              />
            </div>
          </CollapsibleSection>

          {/* Équipements */}
          <CollapsibleSection
            title="Équipements"
            defaultExpanded={false}
            badge={(() => {
              const fields = [characteristicsForm.heatingType, characteristicsForm.hotWaterSystem, characteristicsForm.parkingType, characteristicsForm.parkingSpotCount, characteristicsForm.parkingWidthM, characteristicsForm.parkingLengthM, characteristicsForm.hasElevator, characteristicsForm.hasDigicode, characteristicsForm.hasGreenSpace, characteristicsForm.hasIntercom, characteristicsForm.hasHomeAutomation, characteristicsForm.hasSmartphoneControl, characteristicsForm.shutterType, characteristicsForm.hasPool, characteristicsForm.poolType, characteristicsForm.mainViewType];
              const filled = fields.filter(f => f != null && f !== '' && f !== '0').length;
              const pct = Math.round((filled / fields.length) * 100);
              const color = pct >= 80 ? 'bg-surface-success-subtle text-content-success' : pct >= 50 ? 'bg-surface-warning-subtle text-content-warning' : 'bg-surface-error-subtle text-content-error';
              return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>{pct}%</span>;
            })()}
          >
            <div className="flex flex-col gap-[16px]">
              <SelectField
                label="Type de chauffage"
                value={characteristicsForm.heatingType}
                onChange={(v) => updateCharacteristicsField('heatingType', v)}
                options={Object.entries(HEATING_TYPE_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />
              <SelectField
                label="Eau chaude"
                value={characteristicsForm.hotWaterSystem}
                onChange={(v) => updateCharacteristicsField('hotWaterSystem', v)}
                options={Object.entries(HOT_WATER_SYSTEM_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />
              <SelectField
                label="Type de parking"
                value={characteristicsForm.parkingType}
                onChange={(v) => updateCharacteristicsField('parkingType', v)}
                options={Object.entries(PARKING_TYPE_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />
              <InputFieldOutlined
                label="Places de parking"
                value={characteristicsForm.parkingSpotCount}
                onChange={(v) => updateCharacteristicsField('parkingSpotCount', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.parkingSpotCount)}
              />
              <InputFieldOutlined
                label="Largeur parking (m)"
                value={characteristicsForm.parkingWidthM}
                onChange={(v) => updateCharacteristicsField('parkingWidthM', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.parkingWidthM)}
              />
              <InputFieldOutlined
                label="Longueur parking (m)"
                value={characteristicsForm.parkingLengthM}
                onChange={(v) => updateCharacteristicsField('parkingLengthM', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.parkingLengthM)}
              />
              <SelectField
                label="Ascenseur"
                value={characteristicsForm.hasElevator}
                onChange={(v) => updateCharacteristicsField('hasElevator', v)}
                options={[
                  { value: 'true', label: 'Oui' },
                  { value: 'false', label: 'Non' },
                ]}
              />
              <SelectField
                label="Digicode"
                value={characteristicsForm.hasDigicode}
                onChange={(v) => updateCharacteristicsField('hasDigicode', v)}
                options={[
                  { value: 'true', label: 'Oui' },
                  { value: 'false', label: 'Non' },
                ]}
              />
              <SelectField
                label="Espace vert"
                value={characteristicsForm.hasGreenSpace}
                onChange={(v) => updateCharacteristicsField('hasGreenSpace', v)}
                options={[
                  { value: 'true', label: 'Oui' },
                  { value: 'false', label: 'Non' },
                ]}
              />
              <SelectField
                label="Interphone"
                value={characteristicsForm.hasIntercom}
                onChange={(v) => updateCharacteristicsField('hasIntercom', v)}
                options={[
                  { value: 'true', label: 'Oui' },
                  { value: 'false', label: 'Non' },
                ]}
              />
              <SelectField
                label="Domotique"
                value={characteristicsForm.hasHomeAutomation}
                onChange={(v) => updateCharacteristicsField('hasHomeAutomation', v)}
                options={[
                  { value: 'true', label: 'Oui' },
                  { value: 'false', label: 'Non' },
                ]}
              />
              <SelectField
                label="Commande par téléphone"
                value={characteristicsForm.hasSmartphoneControl}
                onChange={(v) => updateCharacteristicsField('hasSmartphoneControl', v)}
                options={[
                  { value: 'true', label: 'Oui' },
                  { value: 'false', label: 'Non' },
                ]}
              />
              <InputFieldOutlined
                label="Type de fermetures"
                value={characteristicsForm.shutterType}
                onChange={(v) => updateCharacteristicsField('shutterType', v)}
                placeholder="Ex : volet roulant, volet battant, store"
                {...emptyProps(characteristicsForm.shutterType)}
              />
              <SelectField
                label="Piscine"
                value={characteristicsForm.hasPool}
                onChange={(v) => updateCharacteristicsField('hasPool', v)}
                options={[
                  { value: 'true', label: 'Oui' },
                  { value: 'false', label: 'Non' },
                ]}
              />
              {characteristicsForm.hasPool === 'true' && (
                <SelectField
                  label="Type de piscine"
                  value={characteristicsForm.poolType}
                  onChange={(v) => updateCharacteristicsField('poolType', v)}
                  options={Object.entries(POOL_TYPE_LABELS).map(([value, label]) => ({
                    value,
                    label,
                  }))}
                />
              )}
              <SelectField
                label="Vue"
                value={characteristicsForm.mainViewType}
                onChange={(v) => updateCharacteristicsField('mainViewType', v)}
                options={Object.entries(VIEW_TYPE_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />
            </div>
          </CollapsibleSection>

          {/* DPE */}
          <CollapsibleSection
            title="DPE"
            defaultExpanded={false}
            badge={(() => {
              const fields = [characteristicsForm.dpeEnergyClass, characteristicsForm.dpeEnergyKwh, characteristicsForm.dpeGasEmissionClass, characteristicsForm.dpeGasGco2, characteristicsForm.dpeValidityDate, characteristicsForm.dpeComplianceDeadline];
              const filled = fields.filter(f => f != null && f !== '' && f !== '0').length;
              const pct = Math.round((filled / fields.length) * 100);
              const color = pct >= 80 ? 'bg-surface-success-subtle text-content-success' : pct >= 50 ? 'bg-surface-warning-subtle text-content-warning' : 'bg-surface-error-subtle text-content-error';
              return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>{pct}%</span>;
            })()}
          >
            <div className="flex flex-col gap-[16px]">
              <SelectField
                label="Classe énergétique"
                value={characteristicsForm.dpeEnergyClass}
                onChange={(v) => updateCharacteristicsField('dpeEnergyClass', v)}
                options={Object.entries(DPE_CLASS_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />
              <InputFieldOutlined
                label="Énergie (kWh/m²/an)"
                value={characteristicsForm.dpeEnergyKwh}
                onChange={(v) => updateCharacteristicsField('dpeEnergyKwh', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.dpeEnergyKwh)}
              />
              <SelectField
                label="Classe GES"
                value={characteristicsForm.dpeGasEmissionClass}
                onChange={(v) => updateCharacteristicsField('dpeGasEmissionClass', v)}
                options={Object.entries(DPE_CLASS_LABELS).map(([value, label]) => ({
                  value,
                  label,
                }))}
              />
              <InputFieldOutlined
                label="GES (gCO2/m2/an)"
                value={characteristicsForm.dpeGasGco2}
                onChange={(v) => updateCharacteristicsField('dpeGasGco2', v)}
                type="number"
                placeholder="0"
                {...emptyProps(characteristicsForm.dpeGasGco2)}
              />
              <InputFieldOutlined
                label="Validité DPE (YYYY-MM-DD)"
                value={characteristicsForm.dpeValidityDate}
                onChange={(v) => updateCharacteristicsField('dpeValidityDate', v)}
                type="text"
                placeholder="2025-12-31"
                {...emptyProps(characteristicsForm.dpeValidityDate)}
              />
              <InputFieldOutlined
                label="Conformité (YYYY-MM-DD)"
                value={characteristicsForm.dpeComplianceDeadline}
                onChange={(v) => updateCharacteristicsField('dpeComplianceDeadline', v)}
                type="text"
                placeholder="2025-12-31"
                {...emptyProps(characteristicsForm.dpeComplianceDeadline)}
              />
            </div>
          </CollapsibleSection>
        </div>
      </Sheet>

      {/* ═══════════════════════════════════════════════════════
          Sheet — Ajouter un document
          ═══════════════════════════════════════════════════════ */}
      <Sheet
        isOpen={isDocUploadSheetOpen}
        onClose={() => { setIsDocUploadSheetOpen(false); setUploadFile(null); setUploadError(null); }}
        title="Ajouter un document"
        width="narrow"
        footer={
          <Button
            variant="primary"
            onClick={handleUploadDocument}
            disabled={isUploading || !uploadFile}
            className="w-full"
          >
            {isUploading ? 'Upload en cours…' : 'Enregistrer'}
          </Button>
        }
      >
        <div className="flex flex-col gap-[20px] px-[20px] py-[20px]">
          <p className="text-[14px] leading-[20px] text-content-caption">
            Formats acceptés : PDF, JPG, PNG, DOCX, XLSX — Taille max : 10 Mo
          </p>
          <FileUpload
            accept=".pdf,.jpg,.jpeg,.png,.docx,.xlsx"
            maxSize={10 * 1024 * 1024}
            onFileSelect={(file) => { setUploadFile(file); setUploadError(null); }}
            onFileRemove={() => setUploadFile(null)}
            selectedFile={uploadFile}
            error={uploadError ?? undefined}
          />
        </div>
      </Sheet>
    </div>
  );
}
