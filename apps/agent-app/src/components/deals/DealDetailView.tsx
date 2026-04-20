'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  FileSearch,
  Activity,
  Tag,
  Inbox,
  DoorOpen,
  Heart,
  Landmark,
  BadgeEuro,
  MessageSquare,
  Search,
  Home,
  FileCheck,
  ScrollText,
  Wrench,
  PieChart,
  CheckCheck,
  Eye,
  FolderOpen,
  Banknote,
  ArrowRight,
} from 'lucide-react';

// ── DS Components ──
import { AppBarFicheAffaire } from '@real-estate/ui/app-bar-fiche-affaire';
import { GraphCourbe } from '@real-estate/ui/graph-courbe';
import { AppBarAffaireAncres } from '@real-estate/ui/app-bar-affaire-ancres';
import { IconButtonMega } from '@real-estate/ui/icon-button-mega';
import { Spinner } from '@real-estate/ui/spinner';
import { Badge } from '@real-estate/ui/badge';
import type { BadgeVariant } from '@real-estate/ui/badge';
import { Button } from '@real-estate/ui/button';
import { AiSuggestionBanner } from '@real-estate/ui/ai-suggestion-banner';
import { CardLog } from '@real-estate/ui/card-log';
import { Chip } from '@real-estate/ui/chip';
import { ListMandat } from '@real-estate/ui/list-mandat';
import { Sheet } from '@real-estate/ui/sheet';
import { SheetMandat } from '@real-estate/ui/sheet-mandat';
import { ListVisite } from '@real-estate/ui/list-visite';
import { ListPromesse } from '@real-estate/ui/list-promesse';
import { ListActeNotarie } from '@real-estate/ui/list-acte-notarie';
import { CardCA } from '@real-estate/ui/card-ca';
import { ListAnnonce } from '@real-estate/ui/list-annonce';
import { KpiIndicator } from '@real-estate/ui/kpi-indicator';
import { MessageReceived } from '@real-estate/ui/message-received';
import { MessageSent } from '@real-estate/ui/message-sent';
import { ListBail } from '@real-estate/ui/list-bail';
import { ListCandidatureLocataire } from '@real-estate/ui/list-candidature-locataire';
import { ListFinancement } from '@real-estate/ui/list-financement';
import { ListBien } from '@real-estate/ui/list-bien';
import type { DealType } from '@real-estate/ui/deal-types';

// ── App-level ──
import { createClient } from '@/lib/supabase/client';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface DealRow {
  id: string;
  reference: string | null;
  type: DealType | null;
  pipelineStage: string | null;
  saleMandateStatus: string | null;
  purchaseOfferStatus: string | null;
  notarialDeedStatus: string | null;
  notarialDeedDate: string | null;
  forecastRevenue: number | null;
  winProbability: number | null;
  finalSalePrice: number | null;
  infoRequestsCount: number | null;
  listingId: string | null;
  clientId: string | null;
  propertyId: string | null;
  status: string | null;
  trend: string | null;
  Client: { id: string; firstName: string | null; lastName: string | null; status: string | null } | null;
  Property: { id: string; type: string | null; livingAreaSqm: number | null; addressCity: string | null; desiredSellingPrice: number | null; dpeEnergyClass: string | null } | null;

  // Mandat
  mandateWaived: boolean;
  mgmtMandateStatus: string | null;
  saleMandateEndDate: string | null;

  // Acquisition
  acquisitionMinBudget: number | null;
  acquisitionMaxBudget: number | null;
  acquisitionCriteriaSummary: string | null;

  // Location
  locationMinBudget: number | null;
  locationCriteriaSummary: string | null;
  bailType: string | null;
  bailMonthlyRent: number | null;
  bailCharges: number | null;
  bailDepositAmount: number | null;
  bailSignedDate: string | null;
  bailStartDate: string | null;
  bailEndDate: string | null;

  // Gestion
  occupancyStatus: string | null;
  rentPaymentStatus: string | null;
  maintenanceStatus: string | null;
}

interface EventRow {
  id: string;
  type: string | null;
  status: string | null;
  title: string | null;
  description: string | null;
  eventDate: string;
  reportContent: string | null;
}

interface DocumentRow {
  id: string;
  title: string | null;
  type: string | null;
  documentStatus: string | null;
  fileFormat: string | null;
  esignStatus: string | null;
  createdAt: string;
}

interface MessageRow {
  id: string;
  senderType: 'AGENT' | 'CLIENT' | 'IA' | null;
  body: string;
  messageDate: string;
  status: 'BROUILLON' | 'ENVOYE' | 'DELIVRE' | 'LU' | 'ECHOUE' | null;
  attachmentsUrls: string[] | null;
}

interface ListingRow {
  id: string;
  status: string | null;
  platform: string | null;
  publicationDate: string | null;
  viewsCount: number | null;
  contactsCount: number | null;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDateTime(date: string): string {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function formatPrice(amount: number | null | undefined): string {
  if (!amount) return '\u2014';
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
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

// ── Mandate workflow mapping ──

const MANDATE_STATUS_LABELS: Record<string, string> = {
  NON_CREE: 'Non cr\u00e9\u00e9',
  EDITE: '\u00c9dit\u00e9',
  ENVOYE: 'Envoy\u00e9',
  SIGNE: 'Sign\u00e9',
};

const MANDATE_STATUS_VARIANT: Record<string, BadgeVariant> = {
  NON_CREE: 'disabled',
  EDITE: 'default',
  ENVOYE: 'information',
  SIGNE: 'success',
};

function mapMandateWorkflow(
  status: string | null,
  step: 'edition' | 'revision' | 'signature',
): BadgeVariant {
  const order = ['NON_CREE', 'EDITE', 'ENVOYE', 'SIGNE'];
  const stepMap: Record<string, number> = { edition: 1, revision: 2, signature: 3 };
  const idx = order.indexOf(status ?? 'NON_CREE');
  return idx >= stepMap[step] ? 'success' : 'disabled';
}

// ── Visite workflow mapping ──

function mapVisiteStatus(
  status: string | null,
  step: 'calendrier' | 'odj' | 'cr',
): BadgeVariant {
  switch (step) {
    case 'calendrier':
      return status === 'ANNULE' || status === 'NO_SHOW' ? 'error' : 'success';
    case 'odj':
      return status === 'CONFIRME' || status === 'TERMINE' ? 'success' : 'disabled';
    case 'cr':
      return status === 'TERMINE' ? 'success' : 'disabled';
    default:
      return 'disabled';
  }
}

// ── Visite recherche workflow mapping ──

function mapVisiteRechercheStatus(
  status: string | null,
  step: 'programme' | 'cr',
): BadgeVariant {
  switch (step) {
    case 'programme':
      return status === 'ANNULE' || status === 'NO_SHOW' ? 'error' : 'success';
    case 'cr':
      return status === 'TERMINE' ? 'success' : 'disabled';
    default:
      return 'disabled';
  }
}

// ── Offer workflow mapping ──

function mapOfferWorkflow(
  status: string | null,
  step: 'recue' | 'transmise' | 'accord',
): BadgeVariant {
  const order = ['RECUE', 'TRANSMISE', 'ACCEPTEE'];
  const stepMap: Record<string, number> = { recue: 0, transmise: 1, accord: 2 };
  const idx = order.indexOf(status ?? '');
  if (idx < 0) return 'disabled';
  return idx >= stepMap[step] ? 'success' : 'disabled';
}

// ── Offer recherche workflow mapping ──

function mapOfferRechercheWorkflow(
  status: string | null,
  step: 'envoyee' | 'acceptee',
): BadgeVariant {
  const order = ['ENVOYEE', 'ACCEPTEE'];
  const stepMap: Record<string, number> = { envoyee: 0, acceptee: 1 };
  const idx = order.indexOf(status ?? '');
  if (idx < 0) return 'disabled';
  return idx >= stepMap[step] ? 'success' : 'disabled';
}

// ── Bail workflow mapping ──

function mapBailWorkflow(
  bailSignedDate: string | null,
  step: 'edition' | 'revision' | 'signature',
): BadgeVariant {
  if (!bailSignedDate) {
    return step === 'edition' ? 'success' : 'disabled';
  }
  return 'success'; // bail signe = tout valide
}

// ── Notarial status mapping ──

const NOTARIAL_STATUS_LABELS: Record<string, string> = {
  EN_ATTENTE: 'En attente',
  RDV_FIXE: 'RDV fix\u00e9',
  SIGNE: 'Sign\u00e9',
  ANNULE: 'Annul\u00e9',
};

const NOTARIAL_STATUS_VARIANT: Record<string, BadgeVariant> = {
  EN_ATTENTE: 'default',
  RDV_FIXE: 'information',
  SIGNE: 'success',
  ANNULE: 'error',
};

// ── Activity helpers ──

// Filtres par type d'affaire — alignés sur le pipeline
type ActivityFilter = 'all' | 'MANDAT' | 'COMMERCIALISATION' | 'CLOSING' | 'RECHERCHE' | 'VISITES' | 'DOSSIER' | 'OCCUPATION' | 'LOYERS' | 'ENTRETIEN';

interface ActivityLog {
  id: string;
  date: string;
  time: string;
  author: string;
  category: string;
  status: string | null;
  description: string;
}

function eventTypeToCategory(eventType: string | null, dealType: DealType): string {
  switch (dealType) {
    case 'VENTE':
      switch (eventType) {
        case 'RDV_COMMERCIAL':
        case 'RELANCE':
          return 'MANDAT';
        case 'VISITE':
        case 'TACHE':
        case 'AUTRE':
          return 'COMMERCIALISATION';
        case 'SIGNATURE_PROMESSE':
        case 'SIGNATURE_NOTAIRE':
          return 'CLOSING';
        default:
          return 'MANDAT';
      }
    case 'ACQUISITION':
      switch (eventType) {
        case 'RDV_COMMERCIAL':
        case 'RELANCE':
        case 'TACHE':
          return 'RECHERCHE';
        case 'VISITE':
          return 'VISITES';
        case 'SIGNATURE_PROMESSE':
        case 'SIGNATURE_NOTAIRE':
          return 'CLOSING';
        default:
          return 'RECHERCHE';
      }
    case 'LOCATION':
      switch (eventType) {
        case 'RDV_COMMERCIAL':
        case 'RELANCE':
        case 'TACHE':
          return 'RECHERCHE';
        case 'VISITE':
          return 'VISITES';
        case 'SIGNATURE_BAIL':
          return 'DOSSIER';
        default:
          return 'RECHERCHE';
      }
    case 'GESTION':
      switch (eventType) {
        case 'VISITE':
        case 'RDV_COMMERCIAL':
          return 'OCCUPATION';
        case 'RELANCE':
        case 'TACHE':
          return 'LOYERS';
        case 'SIGNATURE_BAIL':
        case 'AUTRE':
          return 'ENTRETIEN';
        default:
          return 'OCCUPATION';
      }
    default:
      return 'MANDAT';
  }
}

function getCategoryBadgeVariant(category: string): BadgeVariant {
  switch (category) {
    case 'MANDAT':
    case 'RECHERCHE':
    case 'OCCUPATION':
      return 'information';
    case 'COMMERCIALISATION':
    case 'VISITES':
    case 'LOYERS':
      return 'default';
    case 'CLOSING':
    case 'DOSSIER':
    case 'ENTRETIEN':
      return 'warning';
    default:
      return 'default';
  }
}

const CATEGORY_LABELS: Record<string, string> = {
  MANDAT: 'Mandat',
  COMMERCIALISATION: 'Commercialisation',
  CLOSING: 'Closing',
  RECHERCHE: 'Recherche',
  VISITES: 'Visites',
  DOSSIER: 'Dossier',
  OCCUPATION: 'Occupation',
  LOYERS: 'Loyers',
  ENTRETIEN: 'Entretien',
};

function getFiltersForDealType(dealType: DealType): { id: string; label: string; icon: React.ReactNode }[] {
  switch (dealType) {
    case 'VENTE':
      return [
        { id: 'MANDAT', label: 'Mandat', icon: <FileSearch size={16} /> },
        { id: 'COMMERCIALISATION', label: 'Commercialisation', icon: <Tag size={16} /> },
        { id: 'CLOSING', label: 'Closing', icon: <ScrollText size={16} /> },
      ];
    case 'ACQUISITION':
      return [
        { id: 'RECHERCHE', label: 'Recherche', icon: <Search size={16} /> },
        { id: 'VISITES', label: 'Visites', icon: <Eye size={16} /> },
        { id: 'CLOSING', label: 'Closing', icon: <ScrollText size={16} /> },
      ];
    case 'LOCATION':
      return [
        { id: 'RECHERCHE', label: 'Recherche', icon: <Search size={16} /> },
        { id: 'VISITES', label: 'Visites', icon: <Eye size={16} /> },
        { id: 'DOSSIER', label: 'Dossier', icon: <FolderOpen size={16} /> },
      ];
    case 'GESTION':
      return [
        { id: 'OCCUPATION', label: 'Occupation', icon: <Home size={16} /> },
        { id: 'LOYERS', label: 'Loyers', icon: <Banknote size={16} /> },
        { id: 'ENTRETIEN', label: 'Entretien', icon: <Wrench size={16} /> },
      ];
  }
}

// ── Message helpers ──

function senderToDirection(sender: string | null): 'received' | 'sent' {
  return sender === 'CLIENT' ? 'received' : 'sent';
}

function dbStatusToDsStatus(status: string | null): 'none' | 'success' | 'fail' {
  switch (status) {
    case 'ENVOYE':
    case 'DELIVRE':
    case 'LU':
      return 'success';
    case 'ECHOUE':
      return 'fail';
    default:
      return 'none';
  }
}

function attachmentLabel(url: string): string {
  try {
    const u = new URL(url);
    return u.pathname.split('/').pop() || 'Pi\u00e8ce jointe';
  } catch {
    return url.split('/').pop() || 'Pi\u00e8ce jointe';
  }
}

// ── Graph mock data ──

function mockGraphData() {
  return [
    { label: '10 avr', value: 18 },
    { label: '17 avr', value: 30 },
    { label: '24 avr', value: 25 },
    { label: '01 mai', value: 35 },
    { label: '08 mai', value: 32 },
    { label: '15 mai', value: 28 },
    { label: '22 mai', value: 22 },
    { label: '29 mai', value: 38 },
  ];
}

// ── Mandate end date helper ──

function isMandateEndingSoon(endDate: string | null): boolean {
  if (!endDate) return false;
  const end = new Date(endDate);
  const now = new Date();
  const threeMonths = 3 * 30 * 24 * 60 * 60 * 1000;
  return end.getTime() - now.getTime() < threeMonths && end.getTime() > now.getTime();
}

// ── Ancres par variant ──

const ancresVente = [
  { id: 'mandat', label: 'Mandat', icon: <FileSearch size={20} /> },
  { id: 'activite', label: 'Activit\u00e9s', icon: <Activity size={20} /> },
  { id: 'annonce', label: 'Annonce', icon: <Tag size={20} /> },
  { id: 'leads', label: 'Leads', icon: <Inbox size={20} /> },
  { id: 'visites', label: 'Visites', icon: <DoorOpen size={20} /> },
  { id: 'promesse', label: 'Promesses', icon: <Heart size={20} /> },
  { id: 'notaire', label: 'Notaire', icon: <Landmark size={20} /> },
  { id: 'ca', label: 'Budget', icon: <BadgeEuro size={20} /> },
  { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
];

const ancresAcquisition = [
  { id: 'mandat', label: 'Mandat', icon: <FileSearch size={20} /> },
  { id: 'activite', label: 'Activit\u00e9s', icon: <Activity size={20} /> },
  { id: 'recherche', label: 'Recherche', icon: <Search size={20} /> },
  { id: 'biens', label: 'Biens', icon: <Home size={20} /> },
  { id: 'visites', label: 'Visites', icon: <DoorOpen size={20} /> },
  { id: 'promesse', label: 'Promesses', icon: <Heart size={20} /> },
  { id: 'notaire', label: 'Notaire', icon: <Landmark size={20} /> },
  { id: 'ca', label: 'Budget', icon: <BadgeEuro size={20} /> },
  { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
];

const ancresLocation = [
  { id: 'mandat', label: 'Mandat', icon: <FileSearch size={20} /> },
  { id: 'activite', label: 'Activit\u00e9s', icon: <Activity size={20} /> },
  { id: 'recherche', label: 'Recherche', icon: <Search size={20} /> },
  { id: 'biens', label: 'Biens', icon: <Home size={20} /> },
  { id: 'visites', label: 'Visites', icon: <DoorOpen size={20} /> },
  { id: 'dossiers', label: 'Dossiers', icon: <FileCheck size={20} /> },
  { id: 'bail', label: 'Bail', icon: <ScrollText size={20} /> },
  { id: 'ca', label: 'Budget', icon: <BadgeEuro size={20} /> },
  { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
];

const ancresGestion = [
  { id: 'mandat', label: 'Mandat', icon: <FileSearch size={20} /> },
  { id: 'activite', label: 'Activit\u00e9s', icon: <Activity size={20} /> },
  { id: 'occupation', label: 'Occupation', icon: <Home size={20} /> },
  { id: 'loyers', label: 'Loyers', icon: <BadgeEuro size={20} /> },
  { id: 'entretien', label: 'Entretien', icon: <Wrench size={20} /> },
  { id: 'ca', label: 'Budget', icon: <PieChart size={20} /> },
  { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface DealDetailViewProps {
  dealId: string;
}

export function DealDetailView({ dealId }: DealDetailViewProps) {
  const router = useRouter();

  // ── State ──
  const [deal, setDeal] = useState<DealRow | null>(null);
  const [events, setEvents] = useState<EventRow[]>([]);
  const [documents, setDocuments] = useState<DocumentRow[]>([]);
  const [messages, setMessages] = useState<MessageRow[]>([]);
  const [listing, setListing] = useState<ListingRow | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<ActivityFilter>('all');
  const [allActivities, setAllActivities] = useState<ActivityLog[]>([]);
  const [isActivitySheetOpen, setIsActivitySheetOpen] = useState(false);
  const [bienFilter, setBienFilter] = useState<'tous' | 'shortlist'>('tous');
  const [isSheetMandatOpen, setIsSheetMandatOpen] = useState(false);

  // ── Fetch ──
  useEffect(() => {
    async function load() {
      setIsLoading(true);
      setError(null);
      const supabase = createClient();

      // 1. Deal + Client + Property (JOIN)
      const { data: dealData, error: dealError } = await supabase
        .from('Deal')
        .select(`
          *,
          Client:clientId (id, firstName, lastName, status),
          Property:propertyId (id, type, livingAreaSqm, addressCity, desiredSellingPrice, dpeEnergyClass)
        `)
        .eq('id', dealId)
        .single();

      if (dealError || !dealData) {
        setError('Affaire introuvable');
        setIsLoading(false);
        return;
      }

      // Normalize Client/Property from array to single object (Supabase returns array for FK joins)
      const normalizedDeal: DealRow = {
        ...dealData,
        Client: Array.isArray(dealData.Client) ? dealData.Client[0] ?? null : dealData.Client,
        Property: Array.isArray(dealData.Property) ? dealData.Property[0] ?? null : dealData.Property,
      };

      setDeal(normalizedDeal);

      // 2-4. Events, Documents, Messages in parallel
      const [eventsRes, documentsRes, messagesRes] = await Promise.all([
        supabase
          .from('Event')
          .select('id, type, status, title, description, eventDate, reportContent, agentId, User:agentId(name)')
          .eq('dealId', dealId)
          .order('eventDate', { ascending: false }),
        supabase
          .from('Document')
          .select('id, title, type, documentStatus, fileFormat, esignStatus, createdAt')
          .eq('dealId', dealId)
          .order('createdAt', { ascending: false }),
        supabase
          .from('Message')
          .select('id, senderType, body, messageDate, status, attachmentsUrls')
          .eq('dealId', dealId)
          .order('messageDate', { ascending: false }),
      ]);

      setEvents((eventsRes.data ?? []) as EventRow[]);
      setDocuments((documentsRes.data ?? []) as DocumentRow[]);
      setMessages((messagesRes.data ?? []) as MessageRow[]);

      // Map events to ActivityLog with category based on deal type
      const fetchedType = (normalizedDeal.type as DealType) ?? 'VENTE';
      const mappedActivities: ActivityLog[] = (eventsRes.data ?? []).map((ev: any) => ({
        id: ev.id,
        date: new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(ev.eventDate)),
        time: new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(new Date(ev.eventDate)),
        author: ev.User?.[0]?.name ?? ev.User?.name ?? 'Système',
        category: eventTypeToCategory(ev.type, fetchedType),
        status: ev.status,
        description: ev.description ?? ev.title ?? '',
      }));
      setAllActivities(mappedActivities);

      // 5. Listing (if present)
      if (normalizedDeal.listingId) {
        const { data: listingData } = await supabase
          .from('Listing')
          .select('id, status, platform, publicationDate, viewsCount, contactsCount')
          .eq('id', normalizedDeal.listingId)
          .single();
        setListing((listingData as ListingRow) ?? null);
      }

      setIsLoading(false);
    }

    load();
  }, [dealId]);

  // ── Derived data ──
  const visitEvents = events.filter((e) => e.type === 'VISITE');
  const noteEvents = events.filter((e) => e.type === 'NOTE');
  const entretienEvents = events.filter((e) => e.type === 'ENTRETIEN');

  const filteredActivities = activeFilter === 'all'
    ? allActivities
    : allActivities.filter((a) => a.category === activeFilter);

  const clientFullName = deal?.Client
    ? `${deal.Client.firstName ?? ''} ${deal.Client.lastName ?? ''}`.trim()
    : '\u2014';

  // ── Current type + ancres dynamiques ──
  const currentType = (deal?.type as DealType) ?? 'VENTE';
  const ancres = {
    VENTE: ancresVente,
    ACQUISITION: ancresAcquisition,
    LOCATION: ancresLocation,
    GESTION: ancresGestion,
  }[currentType] ?? ancresVente;

  // ── Loading ──
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  // ── Error ──
  if (error || !deal) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-lg text-content-body">{error ?? 'Erreur inconnue'}</p>
        <Button variant="ghost" onClick={() => router.push('/deals')}>
          Retour aux affaires
        </Button>
      </div>
    );
  }

  // ── Annonce workflow mapping from listing ──
  const annonceWorkflow = listing
    ? {
        edition: 'success' as BadgeVariant,
        revision: listing.status === 'PUBLIEE' || listing.status === 'REVISION' ? 'success' as BadgeVariant : 'disabled' as BadgeVariant,
        publication: listing.status === 'PUBLIEE' ? 'success' as BadgeVariant : 'disabled' as BadgeVariant,
      }
    : { edition: 'disabled' as BadgeVariant, revision: 'disabled' as BadgeVariant, publication: 'disabled' as BadgeVariant };

  // ── Document status badge variant ──
  function docStatusVariant(status: string | null): BadgeVariant {
    switch (status) {
      case 'VALIDE': return 'success';
      case 'EN_ATTENTE': return 'warning';
      case 'REFUSE': return 'error';
      default: return 'default';
    }
  }

  // ── Mandate status key (GESTION uses mgmtMandateStatus) ──
  const mandateStatusKey = currentType === 'GESTION'
    ? (deal.mgmtMandateStatus ?? 'NON_CREE')
    : (deal.saleMandateStatus ?? 'NON_CREE');

  // ── Render ──
  return (
    <div className="flex flex-col min-h-screen bg-surface-page">
      {/* ── AppBarFicheAffaire (sticky) ── */}
      <div className="sticky top-0 z-30">
        <AppBarFicheAffaire
          dealId={deal.reference ?? deal.id.slice(0, 8)}
          dealType={currentType}
          status={deal.status ?? undefined}
          propertyType={propertyTypeLabel(deal.Property?.type ?? null)}
          surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m\u00b2` : '\u2014'}
          city={deal.Property?.addressCity ?? '\u2014'}
          price={formatPrice(deal.Property?.desiredSellingPrice)}
          aiSuggestions={0}
          onBack={() => router.push('/deals')}
        />
      </div>

      {/* ── GraphCourbe ── */}
      <div className="px-5 py-4">
        <GraphCourbe
          title="Activit\u00e9"
          data={mockGraphData()}
        />
      </div>

      {/* ── AppBarAffaireAncres (sticky) ── */}
      <div className="sticky top-[100px] z-20">
        <AppBarAffaireAncres
          items={ancres}
          onItemClick={(id) =>
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </div>

      {/* ── Sections ── */}
      <div className="flex flex-col">

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Section Mandat (commune, adaptee par variant) ──              */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section id="mandat" className="px-5 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold text-content-headings">Mandat</h5>
            {/* ACQ/LOC : indicateur mandateWaived */}
            {(currentType === 'ACQUISITION' || currentType === 'LOCATION') && deal.mandateWaived ? (
              <Chip variant="filled" label="Mandat non n\u00e9cessaire" />
            ) : (
              <Badge variant={MANDATE_STATUS_VARIANT[mandateStatusKey] ?? 'disabled'}>
                {MANDATE_STATUS_LABELS[mandateStatusKey] ?? 'Non cr\u00e9\u00e9'}
              </Badge>
            )}
          </div>

          {/* Ne pas afficher le workflow si mandat waived (ACQ/LOC) */}
          {!((currentType === 'ACQUISITION' || currentType === 'LOCATION') && deal.mandateWaived) && (
            <ListMandat
              reference={deal.reference ?? '\u2014'}
              workflow={{
                edition: mapMandateWorkflow(mandateStatusKey, 'edition'),
                revision: mapMandateWorkflow(mandateStatusKey, 'revision'),
                signature: mapMandateWorkflow(mandateStatusKey, 'signature'),
              }}
              aiSuggestions={0}
              onView={() => setIsSheetMandatOpen(true)}
            />
          )}

          {/* GESTION : date d'echeance mandat + AiSuggestion si < 3 mois */}
          {currentType === 'GESTION' && deal.saleMandateEndDate && (
            <div className="flex flex-col gap-2 text-sm text-content-body">
              <div className="flex justify-between">
                <span>\u00c9ch\u00e9ance mandat</span>
                <span className="font-semibold">
                  {new Date(deal.saleMandateEndDate).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                </span>
              </div>
            </div>
          )}
          {currentType === 'GESTION' && isMandateEndingSoon(deal.saleMandateEndDate) && (
            <AiSuggestionBanner
              suggestion="Le mandat de gestion arrive \u00e0 \u00e9ch\u00e9ance dans moins de 3 mois. Pr\u00e9voir le renouvellement."
              variant="compact"
            />
          )}

          {/* VENTE + ACQ/LOC (sans waived) : suggestion relance si non signe */}
          {currentType !== 'GESTION' && mandateStatusKey !== 'SIGNE' &&
            !((currentType === 'ACQUISITION' || currentType === 'LOCATION') && deal.mandateWaived) && (
            <AiSuggestionBanner
              suggestion="Relancer le client pour la signature du mandat"
              variant="compact"
            />
          )}
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Section Activites (commune) ──                                */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section id="activite" className="scroll-mt-[200px] py-[50px] border-t border-edge-default px-5">
          {/* Header : titre + badge + chips filtre + bouton Voir tout */}
          <div className="flex items-center justify-between mb-[50px]">
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center gap-[4px]">
                <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
                  Activit\u00e9s
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
              {getFiltersForDealType(currentType).map((f) => (
                <Chip
                  key={f.id}
                  label={f.label}
                  icon={f.icon}
                  selected={activeFilter === f.id}
                  size="medium"
                  fontWeight="semibold"
                  onClick={() => setActiveFilter(f.id as ActivityFilter)}
                />
              ))}
            </div>
            <Button
              variant="default"
              onClick={() => setIsActivitySheetOpen(true)}
            >
              Voir tout <ArrowRight size={16} />
            </Button>
          </div>

          {/* Liste des activit\u00e9s (4 max) */}
          <div className="flex flex-col">
            {filteredActivities.slice(0, 4).map((activity) => (
              <CardLog
                key={activity.id}
                date={activity.date}
                time={activity.time}
                author={activity.author}
                category={CATEGORY_LABELS[activity.category] ?? activity.category}
                description={activity.description}
                badgeVariant={getCategoryBadgeVariant(activity.category)}
                className="w-full"
              />
            ))}
            {filteredActivities.length === 0 && (
              <p className="text-sm text-content-subtle italic">Aucune activit\u00e9 enregistr\u00e9e</p>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Sections VENTE only : Annonce + Leads ──                      */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {currentType === 'VENTE' && (
          <>
            {/* ─────────── Section Annonce (AFF-V03) ─────────── */}
            <section id="annonce" className="px-5 py-6 flex flex-col gap-4">
              <h5 className="text-xl font-bold text-content-headings">Annonce</h5>
              {listing ? (
                <>
                  <ListAnnonce
                    city={deal.Property?.addressCity ?? '\u2014'}
                    propertyType={propertyTypeLabel(deal.Property?.type ?? null)}
                    surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm}m\u00b2` : '\u2014'}
                    dpeGrade={
                      deal.Property?.dpeEnergyClass &&
                      ['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(deal.Property.dpeEnergyClass)
                        ? (deal.Property.dpeEnergyClass as 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G')
                        : undefined
                    }
                    ownerName={clientFullName}
                    workflow={annonceWorkflow}
                  />
                  <div className="flex gap-4">
                    <KpiIndicator
                      icon={<Inbox size={20} />}
                      value={String(listing.viewsCount ?? 0)}
                      percentage={Math.min(100, (listing.viewsCount ?? 0))}
                    />
                    <KpiIndicator
                      icon={<MessageSquare size={20} />}
                      value={String(listing.contactsCount ?? 0)}
                      percentage={Math.min(100, (listing.contactsCount ?? 0) * 10)}
                    />
                  </div>
                </>
              ) : (
                <p className="text-sm text-content-subtle italic">Aucune annonce cr\u00e9\u00e9e</p>
              )}
            </section>

            {/* ─────────── Section Leads (AFF-V04) ─────────── */}
            <section id="leads" className="px-5 py-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold text-content-headings">Leads</h5>
                <Badge variant="default">{deal.infoRequestsCount ?? 0}</Badge>
              </div>
              <p className="text-sm text-content-subtle italic">
                {(deal.infoRequestsCount ?? 0) === 0
                  ? "Aucune demande d\u2019information re\u00e7ue"
                  : `${deal.infoRequestsCount} demande(s) d\u2019information`}
              </p>
            </section>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Sections ACQUISITION + LOCATION : Recherche + Biens ──        */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {(currentType === 'ACQUISITION' || currentType === 'LOCATION') && (
          <>
            {/* ─────────── Section Recherche ─────────── */}
            <section id="recherche" className="px-5 py-6 flex flex-col gap-4">
              <h5 className="text-xl font-bold text-content-headings">Recherche</h5>
              <div className="flex flex-col gap-2 text-sm text-content-body">
                <div className="flex justify-between">
                  <span>Crit\u00e8res</span>
                  <span className="font-semibold">
                    {deal.acquisitionCriteriaSummary || deal.locationCriteriaSummary || '\u2014'}
                  </span>
                </div>
                {currentType === 'ACQUISITION' && (
                  <div className="flex justify-between">
                    <span>Budget</span>
                    <span className="font-semibold">
                      {formatPrice(deal.acquisitionMinBudget)} \u2014 {formatPrice(deal.acquisitionMaxBudget)}
                    </span>
                  </div>
                )}
                {currentType === 'LOCATION' && (
                  <div className="flex justify-between">
                    <span>Loyer max</span>
                    <span className="font-semibold">{formatPrice(deal.locationMinBudget)}/mois</span>
                  </div>
                )}
              </div>
            </section>

            {/* ─────────── Section Biens matches ─────────── */}
            <section id="biens" className="px-5 py-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold text-content-headings">Biens</h5>
                <Badge variant="default">0</Badge>
              </div>
              <div className="flex gap-2">
                <Chip variant={bienFilter === 'tous' ? 'filled' : 'outlined'} label="Tous" onClick={() => setBienFilter('tous')} />
                <Chip variant={bienFilter === 'shortlist' ? 'filled' : 'outlined'} label="Shortlist" onClick={() => setBienFilter('shortlist')} />
              </div>
              {/* Placeholder — le matching sera implemente plus tard */}
              <p className="text-sm text-content-subtle italic">
                La recherche de biens correspondants sera disponible prochainement
              </p>
            </section>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Section Visites (VENTE + ACQUISITION + LOCATION) ──           */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {currentType !== 'GESTION' && (
          <section id="visites" className="px-5 py-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-bold text-content-headings">Visites</h5>
              <Badge variant="default">{visitEvents.length}</Badge>
            </div>
            {visitEvents.map((v) => (
              currentType === 'VENTE' ? (
                <ListVisite
                  key={v.id}
                  useCase="vente"
                  dateTime={formatDateTime(v.eventDate)}
                  contactName={clientFullName}
                  workflow={{
                    calendrier: mapVisiteStatus(v.status, 'calendrier'),
                    odj: mapVisiteStatus(v.status, 'odj'),
                    cr: mapVisiteStatus(v.status, 'cr'),
                  }}
                />
              ) : (
                <ListVisite
                  key={v.id}
                  useCase="recherche"
                  dateTime={formatDateTime(v.eventDate)}
                  contactName={clientFullName}
                  propertyType={propertyTypeLabel(deal.Property?.type ?? null)}
                  surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m\u00b2` : '\u2014'}
                  city={deal.Property?.addressCity ?? '\u2014'}
                  workflow={{
                    programme: mapVisiteRechercheStatus(v.status, 'programme'),
                    cr: mapVisiteRechercheStatus(v.status, 'cr'),
                  }}
                />
              )
            ))}
            {visitEvents.length === 0 && (
              <p className="text-sm text-content-subtle italic">Aucune visite planifi\u00e9e</p>
            )}
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Sections VENTE + ACQUISITION : Promesses + Financement + Notaire ── */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {(currentType === 'VENTE' || currentType === 'ACQUISITION') && (
          <>
            {/* ─────────── Section Promesses ─────────── */}
            <section id="promesse" className="px-5 py-6 flex flex-col gap-4">
              <h5 className="text-xl font-bold text-content-headings">Promesses</h5>
              {currentType === 'VENTE' ? (
                deal.purchaseOfferStatus ? (
                  <ListPromesse
                    useCase="vente"
                    contactName="Acqu\u00e9reur"
                    workflow={{
                      recue: mapOfferWorkflow(deal.purchaseOfferStatus, 'recue'),
                      transmise: mapOfferWorkflow(deal.purchaseOfferStatus, 'transmise'),
                      accord: mapOfferWorkflow(deal.purchaseOfferStatus, 'accord'),
                    }}
                  />
                ) : (
                  <p className="text-sm text-content-subtle italic">Aucune offre re\u00e7ue</p>
                )
              ) : (
                /* ACQUISITION : useCase="recherche" */
                deal.purchaseOfferStatus ? (
                  <ListPromesse
                    useCase="recherche"
                    contactName={clientFullName}
                    propertyType={propertyTypeLabel(deal.Property?.type ?? null)}
                    surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m\u00b2` : '\u2014'}
                    city={deal.Property?.addressCity ?? '\u2014'}
                    workflow={{
                      envoyee: mapOfferRechercheWorkflow(deal.purchaseOfferStatus, 'envoyee'),
                      acceptee: mapOfferRechercheWorkflow(deal.purchaseOfferStatus, 'acceptee'),
                    }}
                  />
                ) : (
                  <p className="text-sm text-content-subtle italic">Aucune promesse envoy\u00e9e</p>
                )
              )}
            </section>

            {/* ─────────── Section Financement ─────────── */}
            <section id="finance" className="px-5 py-6 flex flex-col gap-4">
              <h5 className="text-xl font-bold text-content-headings">Financement</h5>
              {currentType === 'VENTE' ? (
                <p className="text-sm text-content-subtle italic">Aucun dossier de financement</p>
              ) : (
                /* ACQUISITION : useCase="recherche" */
                <ListFinancement
                  useCase="recherche"
                  contactName={clientFullName}
                  status={{ label: 'En attente', variant: 'default' }}
                  propertyType={propertyTypeLabel(deal.Property?.type ?? null)}
                  surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m\u00b2` : '\u2014'}
                  city={deal.Property?.addressCity ?? '\u2014'}
                />
              )}
            </section>

            {/* ─────────── Section Notaire ─────────── */}
            <section id="notaire" className="px-5 py-6 flex flex-col gap-4">
              <h5 className="text-xl font-bold text-content-headings">Notaire</h5>
              {deal.notarialDeedStatus ? (
                <ListActeNotarie
                  contactName="Notaire"
                  dateTime={deal.notarialDeedDate ? formatDateTime(deal.notarialDeedDate) : '\u2014'}
                  status={{
                    label: NOTARIAL_STATUS_LABELS[deal.notarialDeedStatus] ?? deal.notarialDeedStatus,
                    variant: NOTARIAL_STATUS_VARIANT[deal.notarialDeedStatus] ?? 'default',
                  }}
                />
              ) : (
                <p className="text-sm text-content-subtle italic">Aucun acte notari\u00e9 en cours</p>
              )}
            </section>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Sections LOCATION only : Dossiers candidature + Bail ──       */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {currentType === 'LOCATION' && (
          <>
            {/* ─────────── Section Dossiers candidature ─────────── */}
            <section id="dossiers" className="px-5 py-6 flex flex-col gap-4">
              <h5 className="text-xl font-bold text-content-headings">Dossiers candidature</h5>
              {/* Placeholder — pas de table dediee pour les dossiers actuellement */}
              <p className="text-sm text-content-subtle italic">
                Aucun dossier de candidature
              </p>
            </section>

            {/* ─────────── Section Bail ─────────── */}
            <section id="bail" className="px-5 py-6 flex flex-col gap-4">
              <h5 className="text-xl font-bold text-content-headings">Bail</h5>
              {deal.bailType ? (
                <ListBail
                  contactName={clientFullName}
                  propertyType={propertyTypeLabel(deal.Property?.type ?? null)}
                  surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m\u00b2` : '\u2014'}
                  city={deal.Property?.addressCity ?? '\u2014'}
                  workflow={{
                    edition: mapBailWorkflow(deal.bailSignedDate, 'edition'),
                    revision: mapBailWorkflow(deal.bailSignedDate, 'revision'),
                    signature: mapBailWorkflow(deal.bailSignedDate, 'signature'),
                  }}
                />
              ) : (
                <p className="text-sm text-content-subtle italic">Aucun bail cr\u00e9\u00e9</p>
              )}
              {deal.bailMonthlyRent && (
                <div className="flex flex-col gap-2 text-sm text-content-body">
                  <div className="flex justify-between">
                    <span>Loyer mensuel</span>
                    <span className="font-semibold">{formatPrice(deal.bailMonthlyRent)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Charges</span>
                    <span className="font-semibold">{formatPrice(deal.bailCharges)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>D\u00e9p\u00f4t de garantie</span>
                    <span className="font-semibold">{formatPrice(deal.bailDepositAmount)}</span>
                  </div>
                </div>
              )}
            </section>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Sections GESTION only : Occupation + Loyers + Entretien ──    */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {currentType === 'GESTION' && (
          <>
            {/* ─────────── Section Occupation ─────────── */}
            <section id="occupation" className="px-5 py-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold text-content-headings">Occupation</h5>
                <Badge variant={deal.occupancyStatus === 'OCCUPE' ? 'success' : 'disabled'}>
                  {deal.occupancyStatus === 'OCCUPE' ? 'Occup\u00e9' : 'Vacant'}
                </Badge>
              </div>
              {deal.occupancyStatus === 'OCCUPE' && (
                <Chip variant="filled" label={`Locataire : ${clientFullName}`} />
              )}
            </section>

            {/* ─────────── Section Loyers ─────────── */}
            <section id="loyers" className="px-5 py-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold text-content-headings">Loyers</h5>
                <Badge variant={deal.rentPaymentStatus === 'EN_REGLE' ? 'success' : 'warning'}>
                  {deal.rentPaymentStatus === 'EN_REGLE' ? 'En r\u00e8gle' : 'En conflit'}
                </Badge>
              </div>
              {deal.bailMonthlyRent && (
                <div className="flex flex-col gap-2 text-sm text-content-body">
                  <div className="flex justify-between">
                    <span>Loyer mensuel</span>
                    <span className="font-semibold">{formatPrice(deal.bailMonthlyRent)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Charges</span>
                    <span className="font-semibold">{formatPrice(deal.bailCharges)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>D\u00e9p\u00f4t de garantie</span>
                    <span className="font-semibold">{formatPrice(deal.bailDepositAmount)}</span>
                  </div>
                </div>
              )}
            </section>

            {/* ─────────── Section Entretien ─────────── */}
            <section id="entretien" className="px-5 py-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold text-content-headings">Entretien</h5>
                <Badge variant={
                  deal.maintenanceStatus === 'URGENT' ? 'error'
                    : deal.maintenanceStatus === 'PROGRAMME' ? 'warning'
                    : 'success'
                }>
                  {deal.maintenanceStatus === 'URGENT' ? 'Urgent'
                    : deal.maintenanceStatus === 'PROGRAMME' ? 'Programm\u00e9'
                    : 'Aucun'}
                </Badge>
              </div>
              {entretienEvents.length > 0 ? (
                entretienEvents.slice(0, 4).map((e) => {
                  const eDate = new Date(e.eventDate);
                  return (
                    <CardLog
                      key={e.id}
                      date={eDate.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                      time={eDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                      author="Agent"
                      category="ENTRETIEN"
                      description={e.description ?? ''}
                      badgeVariant="warning"
                    />
                  );
                })
              ) : (
                <p className="text-sm text-content-subtle italic">Aucune intervention signal\u00e9e</p>
              )}
            </section>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Section Budget (commune, adaptee par variant) ──              */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section id="ca" className="px-5 py-6 flex flex-col gap-4">
          <h5 className="text-xl font-bold text-content-headings">Budget</h5>
          <CardCA
            chiffreAffaire={formatPrice(deal.forecastRevenue)}
            couts="\u2014"
            margeBrute="\u2014"
            tauxMarge={deal.winProbability ? `${deal.winProbability}%` : '\u2014'}
          />
          <div className="flex flex-col gap-2 text-sm text-content-body">
            <div className="flex justify-between">
              <span>CA pr\u00e9visionnel</span>
              <span className="font-semibold">{formatPrice(deal.forecastRevenue)}</span>
            </div>
            <div className="flex justify-between">
              <span>CA pond\u00e9r\u00e9</span>
              <span className="font-semibold">
                {formatPrice(
                  (deal.forecastRevenue ?? 0) * (deal.winProbability ?? 0) / 100,
                )}
              </span>
            </div>
            {currentType === 'VENTE' && deal.finalSalePrice && (
              <div className="flex justify-between">
                <span>Prix de vente final</span>
                <span className="font-semibold">{formatPrice(deal.finalSalePrice)}</span>
              </div>
            )}
            {currentType === 'GESTION' && deal.bailMonthlyRent && (
              <div className="flex justify-between">
                <span>CA annualis\u00e9 (estim\u00e9)</span>
                <span className="font-semibold">
                  {formatPrice(deal.bailMonthlyRent * 12)}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Section Documents (commune) ──                                */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="px-5 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold text-content-headings">Documents</h5>
            <Badge variant="default">{documents.length}</Badge>
          </div>
          {documents.length > 0 ? (
            <div className="flex flex-col gap-2">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between bg-surface-neutral-default border border-edge-default rounded-2xl px-5 py-3"
                >
                  <span className="text-sm font-semibold text-content-body">
                    {doc.title ?? doc.type ?? 'Document'}
                  </span>
                  <div className="flex gap-2 items-center">
                    {doc.type && <Badge variant="default">{doc.type}</Badge>}
                    {doc.documentStatus && (
                      <Badge variant={docStatusVariant(doc.documentStatus)}>
                        {doc.documentStatus}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-content-subtle italic">Aucun document</p>
          )}
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Section Messages (commune) ──                                 */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section id="messages" className="px-5 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold text-content-headings">Messages</h5>
            <Badge variant="default">{messages.length}</Badge>
          </div>
          {messages.slice(0, 4).map((msg) => {
            const direction = senderToDirection(msg.senderType);
            const msgDate = new Date(msg.messageDate);
            const date = msgDate.toLocaleDateString('fr-FR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            });
            const time = msgDate.toLocaleTimeString('fr-FR', {
              hour: '2-digit',
              minute: '2-digit',
            });
            const attachments = (msg.attachmentsUrls ?? []).map((url) => ({
              label: attachmentLabel(url),
            }));

            if (direction === 'received') {
              return (
                <MessageReceived
                  key={msg.id}
                  date={date}
                  time={time}
                  status={dbStatusToDsStatus(msg.status)}
                  attachments={attachments}
                >
                  {msg.body}
                </MessageReceived>
              );
            }
            return (
              <MessageSent
                key={msg.id}
                date={date}
                time={time}
                status={dbStatusToDsStatus(msg.status)}
                attachments={attachments}
              >
                {msg.body}
              </MessageSent>
            );
          })}
          {messages.length === 0 && (
            <p className="text-sm text-content-subtle italic">Aucun message</p>
          )}
          {messages.length > 4 && (
            <Button variant="ghost" size="sm">
              Voir tout ({messages.length})
            </Button>
          )}
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Section Notes (commune) ──                                    */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section className="px-5 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold text-content-headings">Notes</h5>
            <Badge variant="default">{noteEvents.length}</Badge>
          </div>
          {noteEvents.slice(0, 4).map((n) => {
            const nDate = new Date(n.eventDate);
            return (
              <CardLog
                key={n.id}
                date={nDate.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                time={nDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                author="Note"
                category="NOTE"
                description={n.description ?? n.reportContent ?? ''}
              />
            );
          })}
          {noteEvents.length === 0 && (
            <p className="text-sm text-content-subtle italic">Aucune note</p>
          )}
        </section>
      </div>

      {/* ── IconButtonMega fixed ── */}
      <div className="fixed bottom-6 right-6 z-40">
        <IconButtonMega
          variant="primary"
          icon={<Sparkles size={24} />}
        />
      </div>

      {/* SheetMandat */}
      <SheetMandat
        isOpen={isSheetMandatOpen}
        onClose={() => setIsSheetMandatOpen(false)}
        reference={deal.reference ?? '\u2014'}
        workflow={{
          edition: mapMandateWorkflow(mandateStatusKey, 'edition'),
          revision: mapMandateWorkflow(mandateStatusKey, 'revision'),
          signature: mapMandateWorkflow(mandateStatusKey, 'signature'),
        }}
        signatureDate={deal.saleMandateEndDate ? new Date(deal.saleMandateEndDate).toLocaleDateString('fr-FR') : undefined}
      />

      {/* Sheet Activit\u00e9s */}
      <Sheet
        isOpen={isActivitySheetOpen}
        onClose={() => setIsActivitySheetOpen(false)}
        title="Activit\u00e9s"
        width="narrow"
      >
        <div className="flex flex-col px-[20px] py-[20px]">
          {allActivities.map((activity) => (
            <CardLog
              key={activity.id}
              date={activity.date}
              time={activity.time}
              author={activity.author}
              category={CATEGORY_LABELS[activity.category] ?? activity.category}
              description={activity.description}
              badgeVariant={getCategoryBadgeVariant(activity.category)}
              className="w-full"
            />
          ))}
        </div>
      </Sheet>
    </div>
  );
}
