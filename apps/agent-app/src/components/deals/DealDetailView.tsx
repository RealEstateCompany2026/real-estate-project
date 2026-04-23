'use client';

import { useEffect, useState, useCallback } from 'react';
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
  Pencil,
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
import type { DpeType } from '@real-estate/ui/icon-dpe';
import { Sheet } from '@real-estate/ui/sheet';
import { SheetMandat } from '@real-estate/ui/sheet-mandat';
import { ListVisite } from '@real-estate/ui/list-visite';
import { SheetVisite } from '@real-estate/ui/sheet-visite';
import { SheetOrdreDuJour } from '@real-estate/ui/sheet-ordre-du-jour';
import { SheetGuideDeVisite, VisitCriterion } from '@real-estate/ui/sheet-guide-de-visite';
import { SheetAgendaBien, AgendaDay, TimeSlot } from '@real-estate/ui/sheet-agenda-bien';
import { ListPromesse } from '@real-estate/ui/list-promesse';
import { ListActeNotarie } from '@real-estate/ui/list-acte-notarie';
import { CardCA } from '@real-estate/ui/card-ca';
import { ListAnnonce } from '@real-estate/ui/list-annonce';
import { KpiIndicator } from '@real-estate/ui/kpi-indicator';
import { InputFieldOutlined } from '@real-estate/ui/input-field-outlined';
import { MessageReceived } from '@real-estate/ui/message-received';
import { MessageSent } from '@real-estate/ui/message-sent';
import { ListBail } from '@real-estate/ui/list-bail';
import { ListCandidatureLocataire } from '@real-estate/ui/list-candidature-locataire';
import { ListFinancement } from '@real-estate/ui/list-financement';
import { ListBien } from '@real-estate/ui/list-bien';
import { BadgeCriteria } from '@real-estate/ui/badge-criteria';
import { CollapsibleSection } from '@real-estate/ui/collapsible-section';
import type { DealType, PipelineStage } from '@real-estate/ui/deal-types';
import { DEAL_TYPE_LABELS } from '@real-estate/ui/deal-types';
import { SheetMandatEdit } from '@real-estate/ui/sheet-mandat-edit';
import type { EligibilitySection, EligibilityField } from '@real-estate/ui/sheet-mandat-edit';
import { checkMandateEligibility } from '@/lib/checkMandateEligibility';
import type { MissingField } from '@/lib/checkMandateEligibility';
// ── App-level ──
import { createClient } from '@/lib/supabase/client';
import { PROPERTY_TYPE_LABELS } from '@/types/property';
import { formatIdAsReference } from '@/lib/utils/formatMandateReference';

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
  Client: { id: string; firstName: string | null; lastName: string | null; status: string | null; searchCriteriaSummary: string | null; address: string | null } | null;
  Property: { id: string; type: string | null; livingAreaSqm: number | null; addressCity: string | null; desiredSellingPrice: number | null; dpeEnergyClass: string | null; address: string | null; numberOfRooms: number | null } | null;

  // Mandat
  mandateWaived: boolean;
  mgmtMandateStatus: string | null;
  saleMandateEndDate: string | null;
  mandateExclusivityType: string | null;
  mandateStartDate: string | null;
  mandateDurationMonths: number | null;
  mandateCommissionRate: number | null;
  mandateCommissionPayer: string | null;
  mandateFixedFee: number | null;

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

  // Search criteria (structured)
  searchCity: string | null;
  searchPropertyType: string | null;
  searchSurfaceMin: number | null;
  searchSurfaceMax: number | null;
  locationMaxBudget: number | null;

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
  odjContent: string | null;
  odjStatus: string | null;
  odjSentAt: string | null;
  clientId: string | null;
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
  title: string | null;
  publishedAt: string | null;
  viewCount: number | null;
  leadCount: number | null;
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

function formatPrice(amount: number | null | undefined): string {
  if (!amount) return '—';
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

// ── Mandate workflow mapping ──


function mapMandateWorkflow(
  status: string | null,
  step: 'edition' | 'revision' | 'signature',
): BadgeVariant {
  const order = ['NON_CREE', 'EDITE', 'REVISE', 'ENVOYE', 'SIGNE'];
  const stepMap: Record<string, number> = { edition: 1, revision: 2, signature: 4 };
  const idx = order.indexOf(status ?? 'NON_CREE');
  return idx >= stepMap[step] ? 'success' : 'warning';
}

const MANDATE_ORDER_DETAIL = ['NON_CREE', 'EDITE', 'REVISE', 'ENVOYE', 'SIGNE'];

// ── Visite workflow mapping ──

function mapVisiteWorkflow(event: EventRow): { cal: BadgeVariant; odj: BadgeVariant; cr: BadgeVariant } {
  const cal: BadgeVariant = event.status === 'ANNULE' || event.status === 'NO_SHOW' ? 'error' : 'success';

  let odj: BadgeVariant;
  switch (event.odjStatus) {
    case 'ENVOYE':
      odj = 'success';
      break;
    case 'REVISE':
      odj = 'information';
      break;
    case 'EDITE':
      odj = 'warning';
      break;
    default:
      odj = 'disabled';
  }

  const cr: BadgeVariant = event.status === 'TERMINE' ? 'success' : 'disabled';

  return { cal, odj, cr };
}

// ── Agenda bien — default days generator ──

/**
 * Génère les 5 prochains jours ouvrés avec créneaux de 30min (9h-19h).
 * Exclut samedi et dimanche.
 */
function generateDefaultAgendaDays(): AgendaDay[] {
  const days: AgendaDay[] = [];
  const now = new Date();
  let current = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayLabels = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const monthLabels = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

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

// ── Offer workflow mapping (ÉDITION / ACCORD) ──

function mapPromesseWorkflow(
  status: string | null,
  step: 'edition' | 'accord',
): BadgeVariant {
  const order = ['EDITION', 'ACCORD'];
  const stepMap: Record<string, number> = { edition: 0, accord: 1 };
  const idx = order.indexOf(status ?? '');
  if (idx < 0) return 'disabled';
  return idx >= stepMap[step] ? 'success' : 'disabled';
}

/** Format a number as euros (e.g. 320000 → "320 000 €") */
function formatEuros(value: number | null | undefined): string | undefined {
  if (value == null) return undefined;
  return `${value.toLocaleString('fr-FR')} €`;
}

// ── Financement workflow mapping (DOSSIER / FINANCÉ) ──

function mapFinancementWorkflow(
  status: string | null,
  step: 'dossier' | 'finance',
): BadgeVariant {
  const order = ['DOSSIER', 'FINANCE'];
  const stepMap: Record<string, number> = { dossier: 0, finance: 1 };
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

// ── Notarial workflow mapping (RDV / SIGNATURE) ──

function mapNotarialWorkflow(
  status: string | null,
  step: 'rdv' | 'signature',
): BadgeVariant {
  if (!status) return 'disabled';
  const statusUpper = status.toUpperCase();
  if (step === 'rdv') {
    return (statusUpper === 'RDV_FIXE' || statusUpper === 'SIGNE') ? 'success' : 'disabled';
  }
  // signature
  return statusUpper === 'SIGNE' ? 'success' : 'disabled';
}

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
    return u.pathname.split('/').pop() || 'Pièce jointe';
  } catch {
    return url.split('/').pop() || 'Pièce jointe';
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
  { id: 'activite', label: 'Activités', icon: <Activity size={20} /> },
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
  { id: 'activite', label: 'Activités', icon: <Activity size={20} /> },
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
  { id: 'activite', label: 'Activités', icon: <Activity size={20} /> },
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
  { id: 'activite', label: 'Activités', icon: <Activity size={20} /> },
  { id: 'annonce', label: 'Annonce', icon: <Tag size={20} /> },
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
  const [isAnnonceSheetOpen, setIsAnnonceSheetOpen] = useState(false);
  const [isRechercheSheetOpen, setIsRechercheSheetOpen] = useState(false);
  const [isSheetMandatEditOpen, setIsSheetMandatEditOpen] = useState(false);
  const [isSheetMandatViewOpen, setIsSheetMandatViewOpen] = useState(false);
  const [isSheetVisiteOpen, setIsSheetVisiteOpen] = useState(false);
  const [selectedVisiteEvent, setSelectedVisiteEvent] = useState<EventRow | null>(null);
  const [isRevision, setIsRevision] = useState(false);
  // Sub-sheets visite
  const [isSheetOdjOpen, setIsSheetOdjOpen] = useState(false);
  const [isSheetGuideOpen, setIsSheetGuideOpen] = useState(false);
  const [odjContent, setOdjContent] = useState('');
  const [odjIsRevision, setOdjIsRevision] = useState(false);
  const [visitGuideCriteria, setVisitGuideCriteria] = useState<VisitCriterion[]>([]);
  const [visitGuideCommentaire, setVisitGuideCommentaire] = useState<string | null>(null);
  const [visitGuideSubmittedAt, setVisitGuideSubmittedAt] = useState<string | null>(null);
  // Agenda bien
  const [isSheetAgendaOpen, setIsSheetAgendaOpen] = useState(false);
  const [agendaDays, setAgendaDays] = useState<AgendaDay[]>([]);
  const [selectedAgendaSlot, setSelectedAgendaSlot] = useState<{ date: string; startTime: string } | null>(null);
  const [organization, setOrganization] = useState<{
    name: string | null; address: string | null; siret: string | null;
    rcpInsuranceRef: string | null; rcpExpiryDate: string | null;
    carteTNumber: string | null; carteGNumber: string | null;
  } | null>(null);

  // ── Recherche form state ──
  const [rechercheForm, setRechercheForm] = useState({
    city: '',
    propertyType: '',
    surfaceMin: '',
    surfaceMax: '',
    budgetMin: '',
    budgetMax: '',
  });

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
          Client:clientId (id, firstName, lastName, status, searchCriteriaSummary, address),
          Property:propertyId (id, type, livingAreaSqm, addressCity, desiredSellingPrice, dpeEnergyClass, address, numberOfRooms)
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

      // Determine deal type for downstream logic
      const fetchedType = (normalizedDeal.type as DealType) ?? 'VENTE';

      // Initialize revision state from mandate status
      const statusKey = fetchedType === 'GESTION' ? 'mgmtMandateStatus' : 'saleMandateStatus';
      const currentStatus = (normalizedDeal as any)[statusKey] ?? 'NON_CREE';
      if (currentStatus === 'REVISE') {
        setIsRevision(true);
      }

      // 2-4. Events, Documents, Messages in parallel
      const [eventsRes, documentsRes, messagesRes] = await Promise.all([
        supabase
          .from('Event')
          .select('id, type, status, title, description, eventDate, reportContent, odjContent, odjStatus, odjSentAt, clientId, agentId, User:agentId(name)')
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
          .select('id, status, title, publishedAt, viewCount, leadCount')
          .eq('id', normalizedDeal.listingId)
          .single();
        setListing((listingData as ListingRow) ?? null);
      }

      // 6. Organization (for mandate eligibility)
      const { data: orgData } = await supabase
        .from('Organization')
        .select('name, address, siret, rcpInsuranceRef, rcpExpiryDate, carteTNumber, carteGNumber')
        .limit(1)
        .single();
      setOrganization(orgData);

      setIsLoading(false);
    }

    load();
  }, [dealId]);

  // Auto-activate deal when mandate is signed (auto-managed mode)
  useEffect(() => {
    if (!deal) return;
    const isAutoManaged = !deal.mandateWaived;
    if (!isAutoManaged) return;

    const dealType = (deal.type as string) ?? 'VENTE';
    const statusKey = dealType === 'GESTION' ? 'mgmtMandateStatus' : 'saleMandateStatus';
    const mandateStatus = (deal as any)[statusKey] ?? 'NON_CREE';

    if (mandateStatus === 'SIGNE' && deal.pipelineStage === 'MANDAT') {
      const nextStage = (dealType === 'ACQUISITION' || dealType === 'LOCATION') ? 'RECHERCHE' : 'COMMERCIALISATION';
      const supabase = createClient();
      void (async () => {
        try {
          const { error: updateError } = await supabase.from('Deal').update({ pipelineStage: nextStage }).eq('id', deal.id);
          if (!updateError) {
            setDeal((prev) => prev ? { ...prev, pipelineStage: nextStage } : prev);
          }
        } catch (err: unknown) {
          console.error('[auto-activation] failed:', err);
        }
      })();
    }
  }, [deal?.id, deal?.mandateWaived, deal?.pipelineStage, deal?.saleMandateStatus, deal?.mgmtMandateStatus, deal?.type]);

  // ── Sync recherche form with deal data ──
  useEffect(() => {
    if (!deal) return;
    const ct = (deal.type as DealType) ?? 'VENTE';
    setRechercheForm({
      city: deal.searchCity ?? '',
      propertyType: deal.searchPropertyType ?? '',
      surfaceMin: deal.searchSurfaceMin != null ? String(deal.searchSurfaceMin) : '',
      surfaceMax: deal.searchSurfaceMax != null ? String(deal.searchSurfaceMax) : '',
      budgetMin: ct === 'ACQUISITION'
        ? (deal.acquisitionMinBudget != null ? String(deal.acquisitionMinBudget) : '')
        : (deal.locationMinBudget != null ? String(deal.locationMinBudget) : ''),
      budgetMax: ct === 'ACQUISITION'
        ? (deal.acquisitionMaxBudget != null ? String(deal.acquisitionMaxBudget) : '')
        : (deal.locationMaxBudget != null ? String(deal.locationMaxBudget) : ''),
    });
  }, [deal]);

  // ── Derived data ──
  const visitEvents = events.filter((e) => e.type === 'VISITE');
  const noteEvents = events.filter((e) => e.type === 'NOTE');
  const entretienEvents = events.filter((e) => e.type === 'ENTRETIEN');

  // ── Toggle deal activation (MANDAT ↔ stage 2) ──
  const handleToggleActivation = useCallback(async (activated: boolean) => {
    if (!deal) return;
    const supabase = createClient();
    const nextStage = activated
      ? (deal.type === 'ACQUISITION' || deal.type === 'LOCATION' ? 'RECHERCHE' : 'COMMERCIALISATION')
      : 'MANDAT';
    const { error: updateError } = await supabase
      .from('Deal')
      .update({ pipelineStage: nextStage })
      .eq('id', deal.id);
    if (!updateError) {
      setDeal((prev) => prev ? { ...prev, pipelineStage: nextStage } : prev);
    }
  }, [deal?.id, deal?.type]);


  const filteredActivities = activeFilter === 'all'
    ? allActivities
    : allActivities.filter((a) => a.category === activeFilter);

  const clientFullName = deal?.Client
    ? `${deal.Client.firstName ?? ''} ${deal.Client.lastName ?? ''}`.trim()
    : '—';

  // ── Current type + ancres dynamiques ──
  const currentType = (deal?.type as DealType) ?? 'VENTE';
  const ancres = {
    VENTE: ancresVente,
    ACQUISITION: ancresAcquisition,
    LOCATION: ancresLocation,
    GESTION: ancresGestion,
  }[currentType] ?? ancresVente;

  // ── Mandate eligibility (hooks MUST be before early returns) ──
  const eligibility = deal
    ? checkMandateEligibility(
        {
          type: currentType,
          clientId: deal.clientId,
          propertyId: deal.propertyId,
          searchCity: deal.searchCity,
          searchPropertyType: deal.searchPropertyType,
          searchSurfaceMin: deal.searchSurfaceMin,
          searchSurfaceMax: deal.searchSurfaceMax,
          acquisitionMinBudget: deal.acquisitionMinBudget,
          acquisitionMaxBudget: deal.acquisitionMaxBudget,
          locationMinBudget: deal.locationMinBudget,
        },
        deal.Client ? { firstName: deal.Client.firstName, lastName: deal.Client.lastName, address: deal.Client.address } : null,
        deal.Property ? { type: deal.Property.type, address: deal.Property.address, addressCity: deal.Property.addressCity, livingAreaSqm: deal.Property.livingAreaSqm, numberOfRooms: deal.Property.numberOfRooms, desiredSellingPrice: deal.Property.desiredSellingPrice } : null,
        organization,
      )
    : { isEligible: false, missingFields: [], filledCount: 0, totalCount: 0 };

  const eligibilityRatio = `${eligibility.filledCount}/${eligibility.totalCount}`;

  // Build EligibilitySection[] for SheetMandatEdit from missingFields
  const buildEligibilitySections = useCallback((): EligibilitySection[] => {
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
  }, [eligibility.missingFields, currentType]);

  const handleMandatEditSave = useCallback(async (updates: Record<string, Record<string, string | number | null>>) => {
    if (!deal) return;
    const supabase = createClient();
    const promises: PromiseLike<any>[] = [];

    // TODO: filter Organization update by ID when multi-org support is added
    if (updates.organization && Object.keys(updates.organization).length > 0) {
      promises.push(
        supabase.from('Organization').update(updates.organization).not('id', 'is', null).select()
      );
    }
    if (updates.client && Object.keys(updates.client).length > 0 && deal.Client?.id) {
      promises.push(
        supabase.from('Client').update(updates.client).eq('id', deal.Client.id).select()
      );
    }
    if (updates.property && Object.keys(updates.property).length > 0 && deal.Property?.id) {
      promises.push(
        supabase.from('Property').update(updates.property).eq('id', deal.Property.id).select()
      );
    }
    if (updates.deal && Object.keys(updates.deal).length > 0) {
      promises.push(
        supabase.from('Deal').update(updates.deal).eq('id', deal.id).select()
      );
    }

    await Promise.all(promises);

    // Re-fetch deal + organization data after save
    try {
      const { data: freshDeal } = await supabase
        .from('Deal')
        .select(`
          *,
          Client:clientId (id, firstName, lastName, status, searchCriteriaSummary, address),
          Property:propertyId (id, type, livingAreaSqm, addressCity, desiredSellingPrice, dpeEnergyClass, address, numberOfRooms)
        `)
        .eq('id', deal.id)
        .single();

      if (freshDeal) {
        const normalizedDeal: DealRow = {
          ...freshDeal,
          Client: Array.isArray(freshDeal.Client) ? freshDeal.Client[0] ?? null : freshDeal.Client,
          Property: Array.isArray(freshDeal.Property) ? freshDeal.Property[0] ?? null : freshDeal.Property,
        };
        setDeal(normalizedDeal);
      }

      const { data: orgData } = await supabase
        .from('Organization')
        .select('name, address, siret, rcpInsuranceRef, rcpExpiryDate, carteTNumber, carteGNumber')
        .limit(1)
        .single();
      if (orgData) {
        setOrganization(orgData);
      }
    } catch (err) {
      console.error('[handleMandatEditSave] re-fetch failed:', err);
    }
  }, [deal]);

  // ── Visite handlers ──
  const handleOpenVisite = useCallback((event: EventRow) => {
    setSelectedVisiteEvent(event);
    setIsSheetVisiteOpen(true);
  }, []);

  const handleCloseVisite = useCallback(() => {
    setIsSheetVisiteOpen(false);
    setSelectedVisiteEvent(null);
  }, []);

  // ── ODJ handlers ──
  const handleOpenOdj = useCallback(async () => {
    if (!selectedVisiteEvent) return;
    // Init local state from event data
    setOdjContent(selectedVisiteEvent.odjContent ?? '');
    setOdjIsRevision(selectedVisiteEvent.odjStatus === 'REVISE' || selectedVisiteEvent.odjStatus === 'ENVOYE');
    setIsSheetOdjOpen(true);
  }, [selectedVisiteEvent]);

  const handleCloseOdj = useCallback(() => {
    setIsSheetOdjOpen(false);
  }, []);

  const handleOdjContentChange = useCallback((content: string) => {
    setOdjContent(content);
  }, []);

  const handleOdjToggleRevision = useCallback(async (checked: boolean) => {
    if (!selectedVisiteEvent) return;
    const supabase = createClient();
    const newStatus = checked ? 'REVISE' : 'EDITE';
    // Persist to Supabase
    await supabase
      .from('Event')
      .update({ odjContent, odjStatus: newStatus })
      .eq('id', selectedVisiteEvent.id);
    setOdjIsRevision(checked);
    // Update local event data
    setSelectedVisiteEvent((prev) =>
      prev ? { ...prev, odjContent, odjStatus: newStatus } : prev
    );
    // Update events list
    setEvents((prev) =>
      prev.map((e) =>
        e.id === selectedVisiteEvent.id ? { ...e, odjContent, odjStatus: newStatus } : e
      )
    );
  }, [selectedVisiteEvent, odjContent]);

  const handleSendOdj = useCallback(async () => {
    if (!selectedVisiteEvent) return;
    const supabase = createClient();
    const now = new Date().toISOString();
    await supabase
      .from('Event')
      .update({ odjContent, odjStatus: 'ENVOYE', odjSentAt: now })
      .eq('id', selectedVisiteEvent.id);
    // Update local state
    setSelectedVisiteEvent((prev) =>
      prev ? { ...prev, odjContent, odjStatus: 'ENVOYE', odjSentAt: now } : prev
    );
    setEvents((prev) =>
      prev.map((e) =>
        e.id === selectedVisiteEvent.id ? { ...e, odjContent, odjStatus: 'ENVOYE', odjSentAt: now } : e
      )
    );
    setIsSheetOdjOpen(false);
  }, [selectedVisiteEvent, odjContent]);

  // ── Guide de visite handlers ──
  const handleOpenGuide = useCallback(async () => {
    if (!selectedVisiteEvent) return;
    const supabase = createClient();
    // Fetch VisitGuideResponse from Supabase
    const { data } = await supabase
      .from('VisitGuideResponse')
      .select('responses, commentaire, submittedAt')
      .eq('eventId', selectedVisiteEvent.id)
      .maybeSingle();

    if (data) {
      // Parse JSON responses into VisitCriterion[]
      const responses = (data.responses ?? {}) as Record<string, string>;
      const criteriaLabels: Record<string, string> = {
        criterion_1: 'Localisation',
        criterion_2: 'Qualité du bien',
        criterion_3: 'Équipements',
        criterion_4: 'Critère',
        criterion_5: 'Souhaite faire une offre',
      };
      const criteria: VisitCriterion[] = Object.entries(criteriaLabels).map(([id, label]) => ({
        id,
        label,
        answer: (responses[id] === 'OUI' || responses[id] === 'NON' || responses[id] === 'PEUT_ETRE')
          ? responses[id] as 'OUI' | 'NON' | 'PEUT_ETRE'
          : null,
      }));
      setVisitGuideCriteria(criteria);
      setVisitGuideCommentaire(data.commentaire ?? null);
      setVisitGuideSubmittedAt(data.submittedAt ?? null);
    } else {
      // No response yet — show empty criteria
      setVisitGuideCriteria([
        { id: 'criterion_1', label: 'Localisation', answer: null },
        { id: 'criterion_2', label: 'Qualité du bien', answer: null },
        { id: 'criterion_3', label: 'Équipements', answer: null },
        { id: 'criterion_4', label: 'Critère', answer: null },
        { id: 'criterion_5', label: 'Souhaite faire une offre', answer: null },
      ]);
      setVisitGuideCommentaire(null);
      setVisitGuideSubmittedAt(null);
    }
    setIsSheetGuideOpen(true);
  }, [selectedVisiteEvent]);

  const handleCloseGuide = useCallback(() => {
    setIsSheetGuideOpen(false);
  }, []);

  // ── Agenda bien handlers ──
  const handleOpenAgenda = useCallback(async () => {
    if (!deal?.Property?.id) return;
    const supabase = createClient();
    const propertyId = deal.Property.id;

    // 1. Generate default days (5 weekdays, 30min slots, all available)
    const defaultDays = generateDefaultAgendaDays();

    // 2. Fetch closed slots (exceptions) from Supabase
    const startDate = defaultDays[0]?.date;
    const endDate = defaultDays[defaultDays.length - 1]?.date;
    const { data: exceptions } = await supabase
      .from('PropertyAvailabilityException')
      .select('date, startTime, endTime')
      .eq('propertyId', propertyId)
      .gte('date', `${startDate}T00:00:00`)
      .lte('date', `${endDate}T23:59:59`);

    // 3. Fetch existing VISITE events for this property in the date range
    const { data: existingVisits } = await supabase
      .from('Event')
      .select('eventDate')
      .eq('propertyId', propertyId)
      .eq('type', 'VISITE')
      .in('status', ['PROGRAMME', 'CONFIRME'])
      .gte('eventDate', `${startDate}T00:00:00`)
      .lte('eventDate', `${endDate}T23:59:59`);

    // 4. Mark closed slots and occupied slots
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

    // 5. Apply statuses to slots
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

    setAgendaDays(enrichedDays);
    setSelectedAgendaSlot(null);
    setIsSheetAgendaOpen(true);
  }, [deal]);

  const handleCloseAgenda = useCallback(() => {
    setIsSheetAgendaOpen(false);
    setSelectedAgendaSlot(null);
  }, []);

  const handleAgendaSlotSelect = useCallback((date: string, startTime: string) => {
    setSelectedAgendaSlot({ date, startTime });
    // Also update the visual state in agendaDays
    setAgendaDays((prev) =>
      prev.map((day) => ({
        ...day,
        slots: day.slots.map((slot) => ({
          ...slot,
          status:
            day.date === date && slot.startTime === startTime
              ? 'selected' as const
              : slot.status === 'selected'
                ? 'available' as const
                : slot.status,
        })),
      }))
    );
  }, []);

  const handleProposeSlot = useCallback(async () => {
    if (!selectedAgendaSlot || !selectedVisiteEvent) return;
    const supabase = createClient();
    // Update the Event with the selected date/time
    const newDate = new Date(`${selectedAgendaSlot.date}T${selectedAgendaSlot.startTime}:00`);
    await supabase
      .from('Event')
      .update({ eventDate: newDate.toISOString(), status: 'PROGRAMME' })
      .eq('id', selectedVisiteEvent.id);
    // Update local state
    setSelectedVisiteEvent((prev) =>
      prev ? { ...prev, eventDate: newDate.toISOString(), status: 'PROGRAMME' } : prev
    );
    setEvents((prev) =>
      prev.map((e) =>
        e.id === selectedVisiteEvent.id ? { ...e, eventDate: newDate.toISOString(), status: 'PROGRAMME' } : e
      )
    );
    setIsSheetAgendaOpen(false);
  }, [selectedAgendaSlot, selectedVisiteEvent]);

  // ── Build full mandate sections (for "Voir le mandat") ──
  const buildFullMandateSections = useCallback((): EligibilitySection[] => {
    if (!deal) return [];
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
  }, [deal, currentType]);

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
          dealId={deal.reference ?? formatIdAsReference(deal.id)}
          dealType={currentType}
          status={deal.status ?? undefined}
          pipelineStage={deal.pipelineStage as PipelineStage ?? undefined}
          propertyType={propertyTypeLabel(deal.Property?.type ?? null)}
          surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m²` : '—'}
          city={deal.Property?.addressCity ?? '—'}
          price={formatPrice(deal.Property?.desiredSellingPrice)}
          aiSuggestions={0}
          onBack={() => router.push('/deals')}
        />
      </div>

      {/* ── GraphCourbe ── */}
      <div className="px-5 py-4">
        <GraphCourbe
          title="Activité"
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
            {(currentType === 'ACQUISITION' || currentType === 'LOCATION') && deal.mandateWaived && (
              <Chip variant="filled" label="Mandat non nécessaire" />
            )}
          </div>

          {/* Ne pas afficher le workflow si mandat waived (ACQ/LOC) */}
          {!((currentType === 'ACQUISITION' || currentType === 'LOCATION') && deal.mandateWaived) && (
            <ListMandat
              reference={deal.reference ?? '—'}
              city={
                (currentType === 'VENTE' || currentType === 'GESTION')
                  ? (deal.Property?.addressCity ?? undefined)
                  : (deal.searchCity ?? undefined)
              }
              propertyType={
                (currentType === 'VENTE' || currentType === 'GESTION')
                  ? (deal.Property?.type ? PROPERTY_TYPE_LABELS[deal.Property.type as keyof typeof PROPERTY_TYPE_LABELS] ?? deal.Property.type : undefined)
                  : (deal.searchPropertyType ?? undefined)
              }
              surface={
                (currentType === 'VENTE' || currentType === 'GESTION')
                  ? (deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm}m²` : undefined)
                  : (deal.searchSurfaceMin && deal.searchSurfaceMax
                      ? `${deal.searchSurfaceMin}–${deal.searchSurfaceMax}m²`
                      : deal.searchSurfaceMin ? `≥${deal.searchSurfaceMin}m²`
                      : deal.searchSurfaceMax ? `≤${deal.searchSurfaceMax}m²`
                      : undefined)
              }
              dpeGrade={
                (currentType === 'VENTE' || currentType === 'GESTION')
                  ? (deal.Property?.dpeEnergyClass as DpeType ?? undefined)
                  : undefined
              }
              clientName={
                deal.Client
                  ? `${deal.Client.firstName ?? ''} ${(deal.Client.lastName ?? '').toUpperCase()}`.trim() || undefined
                  : undefined
              }
              workflow={{
                edition: mapMandateWorkflow(mandateStatusKey, 'edition'),
                revision: mapMandateWorkflow(mandateStatusKey, 'revision'),
                signature: mapMandateWorkflow(mandateStatusKey, 'signature'),
              }}
              showWorkflow={!deal.mandateWaived}
              aiSuggestions={0}
              onView={() => setIsSheetMandatOpen(true)}
            />
          )}

          {/* GESTION : date d'echeance mandat + AiSuggestion si < 3 mois */}
          {currentType === 'GESTION' && deal.saleMandateEndDate && (
            <div className="flex flex-col gap-2 text-sm text-content-body">
              <div className="flex justify-between">
                <span>Échéance mandat</span>
                <span className="font-semibold">
                  {new Date(deal.saleMandateEndDate).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                </span>
              </div>
            </div>
          )}
          {currentType === 'GESTION' && isMandateEndingSoon(deal.saleMandateEndDate) && (
            <AiSuggestionBanner
              suggestion="Le mandat de gestion arrive à échéance dans moins de 3 mois. Prévoir le renouvellement."
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

          {/* Liste des activités (4 max) */}
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
              <p className="text-sm text-content-subtle italic">Aucune activité enregistrée</p>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Section Annonce (VENTE + GESTION) ──                          */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {(currentType === 'VENTE' || currentType === 'GESTION') && (
          <section id="annonce" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
            <h5 className="text-xl font-bold text-content-headings">Annonce</h5>
            {listing ? (
              <>
                <ListAnnonce
                  reference={formatIdAsReference(listing.id)}
                  city={deal.Property?.addressCity ?? undefined}
                  propertyType={propertyTypeLabel(deal.Property?.type ?? null)}
                  surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm}m²` : undefined}
                  dpeGrade={
                    deal.Property?.dpeEnergyClass &&
                    ['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(deal.Property.dpeEnergyClass)
                      ? (deal.Property.dpeEnergyClass as DpeType)
                      : undefined
                  }
                  ownerName={clientFullName}
                  workflow={annonceWorkflow}
                  onView={() => setIsAnnonceSheetOpen(true)}
                />
                <div className="flex gap-4">
                  <KpiIndicator
                    icon={<Inbox size={20} />}
                    value={String(listing.viewCount ?? 0)}
                    percentage={Math.min(100, (listing.viewCount ?? 0))}
                  />
                  <KpiIndicator
                    icon={<MessageSquare size={20} />}
                    value={String(listing.leadCount ?? 0)}
                    percentage={Math.min(100, (listing.leadCount ?? 0) * 10)}
                  />
                </div>
              </>
            ) : (
              <p className="text-sm text-content-subtle italic">Aucune annonce créée</p>
            )}
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Section Leads (VENTE only) ──                                 */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {currentType === 'VENTE' && (
          <section id="leads" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-bold text-content-headings">Leads</h5>
              <Badge variant="default">{deal.infoRequestsCount ?? 0}</Badge>
            </div>
            <p className="text-sm text-content-subtle italic">
              {(deal.infoRequestsCount ?? 0) === 0
                ? "Aucune demande d'information reçue"
                : `${deal.infoRequestsCount} demande(s) d'information`}
            </p>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Sections ACQUISITION + LOCATION : Recherche + Biens ──        */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {(currentType === 'ACQUISITION' || currentType === 'LOCATION') && (
          <>
            {/* ─────────── Section Recherche ─────────── */}
            <section id="recherche" className="scroll-mt-[200px] py-[50px] border-t border-edge-default px-5">
              <div className="flex items-center justify-between mb-[50px]">
                <div className="flex items-center gap-[4px]">
                  <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
                    Recherche
                  </h3>
                  {(() => {
                    const fields = [
                      deal.searchCity,
                      deal.searchPropertyType,
                      deal.searchSurfaceMin,
                      deal.searchSurfaceMax,
                      currentType === 'ACQUISITION' ? deal.acquisitionMinBudget : deal.locationMinBudget,
                      currentType === 'ACQUISITION' ? deal.acquisitionMaxBudget : deal.locationMaxBudget,
                    ];
                    const count = fields.filter(v => v != null && v !== '').length;
                    const total = fields.length;
                    const mandatoryOk = Boolean(deal.searchCity) && Boolean(deal.searchPropertyType);
                    return <Badge variant={mandatoryOk ? 'success' : 'error'}>{count}/{total}</Badge>;
                  })()}
                </div>
                <Button variant="ghost" onClick={() => setIsRechercheSheetOpen(true)}>
                  <Pencil size={16} /> Éditer
                </Button>
              </div>

              {/* Grille 3 colonnes — même pattern que Caractéristiques FicheBien */}
              <div className="grid grid-cols-3 gap-x-[60px] gap-y-[8px]">
                {/* Headers */}
                <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
                  Localisation
                </p>
                <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
                  Caractéristiques
                </p>
                <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
                  Budget
                </p>

                {/* Col 1 — Localisation */}
                <div>
                  <ProfileField label="Ville" value={deal.searchCity} />
                </div>

                {/* Col 2 — Caractéristiques */}
                <div>
                  <ProfileField label="Type de bien" value={deal.searchPropertyType} />
                  <ProfileField label="Surface min" value={deal.searchSurfaceMin != null ? `${deal.searchSurfaceMin} m²` : null} />
                  <ProfileField label="Surface max" value={deal.searchSurfaceMax != null ? `${deal.searchSurfaceMax} m²` : null} />
                </div>

                {/* Col 3 — Budget */}
                <div>
                  {currentType === 'ACQUISITION' ? (
                    <>
                      <ProfileField label="Budget min" value={deal.acquisitionMinBudget != null ? formatPrice(deal.acquisitionMinBudget) : null} />
                      <ProfileField label="Budget max" value={deal.acquisitionMaxBudget != null ? formatPrice(deal.acquisitionMaxBudget) : null} />
                    </>
                  ) : (
                    <>
                      <ProfileField label="Loyer min" value={deal.locationMinBudget != null ? `${formatPrice(deal.locationMinBudget)}/mois` : null} />
                      <ProfileField label="Loyer max" value={deal.locationMaxBudget != null ? `${formatPrice(deal.locationMaxBudget)}/mois` : null} />
                    </>
                  )}
                </div>
              </div>
            </section>

            {/* ─────────── Section Biens matches ─────────── */}
            <section id="biens" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
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
          <section id="visites" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-bold text-content-headings">Visites</h5>
              <Badge variant="default">{visitEvents.length}</Badge>
            </div>
            {visitEvents.map((v) => (
              <ListVisite
                key={v.id}
                date={formatDateOnly(v.eventDate)}
                time={formatTimeOnly(v.eventDate)}
                city={deal.Property?.addressCity ?? undefined}
                propertyType={propertyTypeLabel(deal.Property?.type ?? null) || undefined}
                surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm}m²` : undefined}
                dpeGrade={
                  deal.Property?.dpeEnergyClass &&
                  ['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(deal.Property.dpeEnergyClass)
                    ? (deal.Property.dpeEnergyClass as DpeType)
                    : undefined
                }
                clientName={clientFullName}
                workflow={mapVisiteWorkflow(v)}
                onClick={() => handleOpenVisite(v)}
                onView={() => handleOpenVisite(v)}
              />
            ))}
            {visitEvents.length === 0 && (
              <p className="text-sm text-content-subtle italic">Aucune visite planifiée</p>
            )}
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Sections VENTE + ACQUISITION : Promesses + Financement + Notaire ── */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {(currentType === 'VENTE' || currentType === 'ACQUISITION') && (
          <>
            {/* ─────────── Section Promesses ─────────── */}
            <section id="promesse" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
              <h5 className="text-xl font-bold text-content-headings">Promesses</h5>
              {currentType === 'VENTE' ? (
                deal.purchaseOfferStatus ? (
                  <ListPromesse
                    useCase="vente"
                    buyerName="Acquéreur"
                    sellerName={clientFullName}
                    city={deal.Property?.addressCity ?? undefined}
                    propertyType={propertyTypeLabel(deal.Property?.type ?? null) || undefined}
                    surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m²` : undefined}
                    dpeGrade={deal.Property?.dpeEnergyClass as DpeType | undefined}
                    amount={formatEuros(deal.finalSalePrice ?? deal.Property?.desiredSellingPrice)}
                    workflow={{
                      edition: mapPromesseWorkflow(deal.purchaseOfferStatus, 'edition'),
                      accord: mapPromesseWorkflow(deal.purchaseOfferStatus, 'accord'),
                    }}
                  />
                ) : (
                  <p className="text-sm text-content-subtle italic">Aucune offre reçue</p>
                )
              ) : (
                /* ACQUISITION */
                deal.purchaseOfferStatus ? (
                  <ListPromesse
                    useCase="acquisition"
                    buyerName={clientFullName}
                    sellerName="Vendeur"
                    city={deal.Property?.addressCity ?? undefined}
                    propertyType={propertyTypeLabel(deal.Property?.type ?? null) || undefined}
                    surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m²` : undefined}
                    dpeGrade={deal.Property?.dpeEnergyClass as DpeType | undefined}
                    amount={formatEuros(deal.finalSalePrice ?? deal.Property?.desiredSellingPrice)}
                    workflow={{
                      edition: mapPromesseWorkflow(deal.purchaseOfferStatus, 'edition'),
                      accord: mapPromesseWorkflow(deal.purchaseOfferStatus, 'accord'),
                    }}
                  />
                ) : (
                  <p className="text-sm text-content-subtle italic">Aucune promesse envoyée</p>
                )
              )}
            </section>

            {/* ─────────── Section Financement ─────────── */}
            <section id="finance" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
              <h5 className="text-xl font-bold text-content-headings">Financement</h5>
              {currentType === 'VENTE' ? (
                <ListFinancement
                  useCase="vente"
                  sellerName={clientFullName}
                  buyerName="Acquéreur"
                  city={deal.Property?.addressCity ?? undefined}
                  propertyType={propertyTypeLabel(deal.Property?.type ?? null) || undefined}
                  surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m²` : undefined}
                  dpeGrade={deal.Property?.dpeEnergyClass as DpeType | undefined}
                  workflow={{
                    dossier: mapFinancementWorkflow(deal.purchaseOfferStatus, 'dossier'),
                    finance: mapFinancementWorkflow(deal.purchaseOfferStatus, 'finance'),
                  }}
                />
              ) : (
                /* ACQUISITION */
                <ListFinancement
                  useCase="acquisition"
                  buyerName={clientFullName}
                  sellerName="Vendeur"
                  city={deal.Property?.addressCity ?? undefined}
                  propertyType={propertyTypeLabel(deal.Property?.type ?? null) || undefined}
                  surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m²` : undefined}
                  dpeGrade={deal.Property?.dpeEnergyClass as DpeType | undefined}
                  workflow={{
                    dossier: mapFinancementWorkflow(deal.purchaseOfferStatus, 'dossier'),
                    finance: mapFinancementWorkflow(deal.purchaseOfferStatus, 'finance'),
                  }}
                />
              )}
            </section>

            {/* ─────────── Section Notaire ─────────── */}
            <section id="notaire" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
              <h5 className="text-xl font-bold text-content-headings">Notaire</h5>
              <ListActeNotarie
                sellerName={currentType === 'VENTE' ? clientFullName : 'Vendeur'}
                buyerName={currentType === 'VENTE' ? 'Acquéreur' : clientFullName}
                city={deal.Property?.addressCity ?? undefined}
                propertyType={propertyTypeLabel(deal.Property?.type ?? null) || undefined}
                surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m²` : undefined}
                dpeGrade={deal.Property?.dpeEnergyClass as DpeType | undefined}
                dateTime={deal.notarialDeedDate ? formatDateTime(deal.notarialDeedDate) : undefined}
                workflow={{
                  rdv: mapNotarialWorkflow(deal.notarialDeedStatus, 'rdv'),
                  signature: mapNotarialWorkflow(deal.notarialDeedStatus, 'signature'),
                }}
              />
            </section>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Sections LOCATION only : Dossiers candidature + Bail ──       */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {currentType === 'LOCATION' && (
          <>
            {/* ─────────── Section Dossiers candidature ─────────── */}
            <section id="dossiers" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
              <h5 className="text-xl font-bold text-content-headings">Dossiers candidature</h5>
              {/* Placeholder — pas de table dédiée pour les dossiers actuellement */}
              <ListCandidatureLocataire
                tenantName={clientFullName}
                city={deal.Property?.addressCity ?? undefined}
                propertyType={propertyTypeLabel(deal.Property?.type ?? null) || undefined}
                surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m²` : undefined}
                dpeGrade={deal.Property?.dpeEnergyClass as DpeType | undefined}
                workflow={{
                  dossier: 'disabled' as const,
                  accord: 'disabled' as const,
                }}
              />
            </section>

            {/* ─────────── Section Bail ─────────── */}
            <section id="bail" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
              <h5 className="text-xl font-bold text-content-headings">Bail</h5>
              {deal.bailType ? (
                <ListBail
                  reference={formatIdAsReference(deal.id)}
                  tenantName={clientFullName}
                  city={deal.Property?.addressCity ?? undefined}
                  propertyType={propertyTypeLabel(deal.Property?.type ?? null) || undefined}
                  surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m²` : undefined}
                  dpeGrade={deal.Property?.dpeEnergyClass as DpeType | undefined}
                  workflow={{
                    edition: mapBailWorkflow(deal.bailSignedDate, 'edition'),
                    revision: mapBailWorkflow(deal.bailSignedDate, 'revision'),
                    signature: mapBailWorkflow(deal.bailSignedDate, 'signature'),
                  }}
                />
              ) : (
                <p className="text-sm text-content-subtle italic">Aucun bail créé</p>
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
                    <span>Dépôt de garantie</span>
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
            <section id="occupation" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold text-content-headings">Occupation</h5>
                <Badge variant={deal.occupancyStatus === 'OCCUPE' ? 'success' : 'disabled'}>
                  {deal.occupancyStatus === 'OCCUPE' ? 'Occupé' : 'Vacant'}
                </Badge>
              </div>
              {deal.occupancyStatus === 'OCCUPE' && (
                <Chip variant="filled" label={`Locataire : ${clientFullName}`} />
              )}
            </section>

            {/* ─────────── Section Loyers ─────────── */}
            <section id="loyers" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold text-content-headings">Loyers</h5>
                <Badge variant={deal.rentPaymentStatus === 'EN_REGLE' ? 'success' : 'warning'}>
                  {deal.rentPaymentStatus === 'EN_REGLE' ? 'En règle' : 'En conflit'}
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
                    <span>Dépôt de garantie</span>
                    <span className="font-semibold">{formatPrice(deal.bailDepositAmount)}</span>
                  </div>
                </div>
              )}
            </section>

            {/* ─────────── Section Entretien ─────────── */}
            <section id="entretien" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-bold text-content-headings">Entretien</h5>
                <Badge variant={
                  deal.maintenanceStatus === 'URGENT' ? 'error'
                    : deal.maintenanceStatus === 'PROGRAMME' ? 'warning'
                    : 'success'
                }>
                  {deal.maintenanceStatus === 'URGENT' ? 'Urgent'
                    : deal.maintenanceStatus === 'PROGRAMME' ? 'Programmé'
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
                <p className="text-sm text-content-subtle italic">Aucune intervention signalée</p>
              )}
            </section>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ── Section Budget (commune, adaptee par variant) ──              */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <section id="ca" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
          <h5 className="text-xl font-bold text-content-headings">Budget</h5>
          <CardCA
            chiffreAffaire={formatPrice(deal.forecastRevenue)}
            couts="—"
            margeBrute="—"
            tauxMarge={deal.winProbability ? `${deal.winProbability}%` : '—'}
          />
          <div className="flex flex-col gap-2 text-sm text-content-body">
            <div className="flex justify-between">
              <span>CA prévisionnel</span>
              <span className="font-semibold">{formatPrice(deal.forecastRevenue)}</span>
            </div>
            <div className="flex justify-between">
              <span>CA pondéré</span>
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
                <span>CA annualisé (estimé)</span>
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
                  className="flex items-center justify-between bg-surface-neutral-default border border-edge-default rounded-lg px-5 py-3"
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
        <section id="messages" className="px-5 py-6 flex flex-col gap-4 border-t border-edge-default">
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
        reference={deal.reference ?? '—'}
        dealType={deal.type as DealType}
        mandateStatus={mandateStatusKey}
        pipelineStage={deal.pipelineStage ?? undefined}
        isAutoManaged={!deal.mandateWaived}
        onToggleAutoManaged={(auto) => {
          const supabase = createClient();
          supabase.from('Deal').update({ mandateWaived: !auto }).eq('id', deal.id).then(({ error: updateError }) => {
            if (!updateError) {
              setDeal((prev) => prev ? { ...prev, mandateWaived: !auto } : prev);
            }
          });
        }}
        editionDate={
          MANDATE_ORDER_DETAIL.indexOf(mandateStatusKey) >= 1
            ? undefined
            : undefined
        }
        signatureDate={
          deal.saleMandateEndDate
            ? new Date(deal.saleMandateEndDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
            : undefined
        }
        onViewMandate={() => {
          setIsSheetMandatOpen(false);
          setIsSheetMandatViewOpen(true);
        }}
        onWriteClient={() => {/* TODO: ouvrir messagerie */}}
        onToggleActivation={handleToggleActivation}
        onEditMissingFields={() => {
          setIsSheetMandatOpen(false);
          setIsSheetMandatEditOpen(true);
        }}
        eligibilityRatio={eligibilityRatio}
        isEligible={eligibility.isEligible}
        onGenerateMandate={async () => {
          if (!deal) return;
          const supabase = createClient();
          const statusField = currentType === 'GESTION' ? 'mgmtMandateStatus' : 'saleMandateStatus';
          const { error: updateError } = await supabase
            .from('Deal')
            .update({ [statusField]: 'EDITE' })
            .eq('id', deal.id);
          if (!updateError) {
            setDeal((prev) => prev ? { ...prev, [statusField]: 'EDITE' } : prev);
          }
        }}
      />

      {/* SheetMandatEdit — Compléter les informations manquantes */}
      <SheetMandatEdit
        isOpen={isSheetMandatEditOpen}
        onClose={() => setIsSheetMandatEditOpen(false)}
        reference={deal.reference ?? formatIdAsReference(deal.id)}
        dealType={currentType}
        sections={buildEligibilitySections()}
        onSave={handleMandatEditSave}
      />

      {/* SheetMandatEdit — Voir le mandat (contenu complet) */}
      <SheetMandatEdit
        isOpen={isSheetMandatViewOpen}
        onClose={() => setIsSheetMandatViewOpen(false)}
        reference={deal.reference ?? formatIdAsReference(deal.id)}
        dealType={currentType}
        sections={buildFullMandateSections()}
        onSave={handleMandatEditSave}
        isRevision={isRevision}
        onToggleRevision={async (checked) => {
          if (!deal) return;
          const supabase = createClient();
          const statusField = currentType === 'GESTION' ? 'mgmtMandateStatus' : 'saleMandateStatus';
          const newStatus = checked ? 'REVISE' : 'EDITE';
          const { error: updateError } = await supabase
            .from('Deal')
            .update({ [statusField]: newStatus })
            .eq('id', deal.id);
          if (!updateError) {
            setIsRevision(checked);
            setDeal((prev) => prev ? { ...prev, [statusField]: newStatus } : prev);
          }
        }}
        footerMode="review"
        onSendMandate={async () => {
          if (!deal) return;
          const supabase = createClient();
          const statusField = currentType === 'GESTION' ? 'mgmtMandateStatus' : 'saleMandateStatus';
          const { error: updateError } = await supabase
            .from('Deal')
            .update({ [statusField]: 'ENVOYE' })
            .eq('id', deal.id);
          if (!updateError) {
            setDeal((prev) => prev ? { ...prev, [statusField]: 'ENVOYE' } : prev);
            setIsSheetMandatViewOpen(false);
          }
        }}
      />

      {/* Sheet Activités */}
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
              category={CATEGORY_LABELS[activity.category] ?? activity.category}
              description={activity.description}
              badgeVariant={getCategoryBadgeVariant(activity.category)}
              className="w-full"
            />
          ))}
        </div>
      </Sheet>

      {/* Sheet Annonce */}
      {listing && (
        <Sheet
          isOpen={isAnnonceSheetOpen}
          onClose={() => setIsAnnonceSheetOpen(false)}
          title="Annonce"
          width="wide"
        >
          <div className="px-5 py-5 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-content-secondary">Titre</span>
                <p className="font-semibold text-content-body">{listing.title ?? '—'}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-content-secondary">Statut</span>
                <p className="font-semibold text-content-body">{listing.status ?? '—'}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-content-secondary">Date de publication</span>
                <p className="font-semibold text-content-body">
                  {listing.publishedAt
                    ? new Date(listing.publishedAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })
                    : '—'}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-content-secondary">Vues</span>
                <p className="font-semibold text-content-body">{listing.viewCount ?? 0}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-content-secondary">Contacts</span>
                <p className="font-semibold text-content-body">{listing.leadCount ?? 0}</p>
              </div>
            </div>
          </div>
        </Sheet>
      )}

      {/* Sheet Recherche */}
      {(currentType === 'ACQUISITION' || currentType === 'LOCATION') && (
        <Sheet
          isOpen={isRechercheSheetOpen}
          onClose={() => setIsRechercheSheetOpen(false)}
          title="Critères de recherche"
          width="narrow"
          footer={
            <div className="flex gap-3 w-full">
              <Button variant="secondary" className="flex-1" onClick={() => setIsRechercheSheetOpen(false)}>
                Annuler
              </Button>
              <Button variant="primary" className="flex-1" onClick={() => setIsRechercheSheetOpen(false)}>
                Enregistrer
              </Button>
            </div>
          }
        >
          <div className="flex flex-col gap-[16px] px-[20px] py-[20px]">
            {/* ── Zone géographique ── */}
            <CollapsibleSection
              title="Zone géographique"
              defaultExpanded={true}
              badge={(() => {
                const count = [rechercheForm.city].filter(Boolean).length;
                return <Badge variant={count > 0 ? 'default' : 'disabled'}>{count}</Badge>;
              })()}
            >
              <div className="flex flex-col gap-[16px]">
                <InputFieldOutlined
                  label="Ville, code postal ou région"
                  value={rechercheForm.city}
                  onChange={(v) => setRechercheForm((p) => ({ ...p, city: v }))}
                  placeholder="Ex : Lyon, 75011, Île-de-France"
                />
                {rechercheForm.city && (
                  <div className="flex flex-wrap gap-2">
                    {rechercheForm.city.split(/\s*[\/,]\s*/).map((part, i) => (
                      <BadgeCriteria
                        key={i}
                        label={part.trim()}
                        variant="ghost"
                        onRemove={() => {
                          const parts = rechercheForm.city.split(/\s*[\/,]\s*/).filter((_, idx) => idx !== i);
                          setRechercheForm((p) => ({ ...p, city: parts.join(', ') }));
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </CollapsibleSection>

            {/* ── Caractéristiques ── */}
            <CollapsibleSection
              title="Caractéristiques"
              defaultExpanded={true}
              badge={(() => {
                const count = [rechercheForm.propertyType, rechercheForm.surfaceMin, rechercheForm.surfaceMax].filter(Boolean).length;
                return <Badge variant={count > 0 ? 'default' : 'disabled'}>{count}</Badge>;
              })()}
            >
              <div className="flex flex-col gap-[16px]">
                <InputFieldOutlined
                  label="Type de bien"
                  value={rechercheForm.propertyType}
                  onChange={(v) => setRechercheForm((p) => ({ ...p, propertyType: v }))}
                  placeholder="Ex : T2, T3, Maison 4p, Studio"
                />
                {rechercheForm.propertyType && (
                  <div className="flex flex-wrap gap-2">
                    <BadgeCriteria
                      label={rechercheForm.propertyType}
                      variant="ghost"
                      onRemove={() => setRechercheForm((p) => ({ ...p, propertyType: '' }))}
                    />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-[12px]">
                  <InputFieldOutlined
                    label="Surface min (m²)"
                    value={rechercheForm.surfaceMin}
                    onChange={(v) => setRechercheForm((p) => ({ ...p, surfaceMin: v }))}
                    type="number"
                    placeholder="30"
                  />
                  <InputFieldOutlined
                    label="Surface max (m²)"
                    value={rechercheForm.surfaceMax}
                    onChange={(v) => setRechercheForm((p) => ({ ...p, surfaceMax: v }))}
                    type="number"
                    placeholder="80"
                  />
                </div>
                {(rechercheForm.surfaceMin || rechercheForm.surfaceMax) && (
                  <div className="flex flex-wrap gap-2">
                    {rechercheForm.surfaceMin && (
                      <BadgeCriteria
                        label={`≥ ${rechercheForm.surfaceMin} m²`}
                        variant="ghost"
                        onRemove={() => setRechercheForm((p) => ({ ...p, surfaceMin: '' }))}
                      />
                    )}
                    {rechercheForm.surfaceMax && (
                      <BadgeCriteria
                        label={`≤ ${rechercheForm.surfaceMax} m²`}
                        variant="ghost"
                        onRemove={() => setRechercheForm((p) => ({ ...p, surfaceMax: '' }))}
                      />
                    )}
                  </div>
                )}
              </div>
            </CollapsibleSection>

            {/* ── Budget ── */}
            <CollapsibleSection
              title="Budget"
              defaultExpanded={true}
              badge={(() => {
                const count = [rechercheForm.budgetMin, rechercheForm.budgetMax].filter(Boolean).length;
                return <Badge variant={count > 0 ? 'default' : 'disabled'}>{count}</Badge>;
              })()}
            >
              <div className="flex flex-col gap-[16px]">
                {currentType === 'ACQUISITION' ? (
                  <div className="grid grid-cols-2 gap-[12px]">
                    <InputFieldOutlined
                      label="Budget min (€)"
                      value={rechercheForm.budgetMin}
                      onChange={(v) => setRechercheForm((p) => ({ ...p, budgetMin: v }))}
                      type="number"
                      placeholder="200 000"
                    />
                    <InputFieldOutlined
                      label="Budget max (€)"
                      value={rechercheForm.budgetMax}
                      onChange={(v) => setRechercheForm((p) => ({ ...p, budgetMax: v }))}
                      type="number"
                      placeholder="400 000"
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-[12px]">
                    <InputFieldOutlined
                      label="Loyer min (€/mois)"
                      value={rechercheForm.budgetMin}
                      onChange={(v) => setRechercheForm((p) => ({ ...p, budgetMin: v }))}
                      type="number"
                      placeholder="600"
                    />
                    <InputFieldOutlined
                      label="Loyer max (€/mois)"
                      value={rechercheForm.budgetMax}
                      onChange={(v) => setRechercheForm((p) => ({ ...p, budgetMax: v }))}
                      type="number"
                      placeholder="1200"
                    />
                  </div>
                )}
                {(rechercheForm.budgetMin || rechercheForm.budgetMax) && (
                  <div className="flex flex-wrap gap-2">
                    {rechercheForm.budgetMin && (
                      <BadgeCriteria
                        label={currentType === 'ACQUISITION'
                          ? `≥ ${Number(rechercheForm.budgetMin).toLocaleString('fr-FR')} €`
                          : `≥ ${Number(rechercheForm.budgetMin).toLocaleString('fr-FR')} €/mois`}
                        variant="ghost"
                        onRemove={() => setRechercheForm((p) => ({ ...p, budgetMin: '' }))}
                      />
                    )}
                    {rechercheForm.budgetMax && (
                      <BadgeCriteria
                        label={currentType === 'ACQUISITION'
                          ? `≤ ${Number(rechercheForm.budgetMax).toLocaleString('fr-FR')} €`
                          : `≤ ${Number(rechercheForm.budgetMax).toLocaleString('fr-FR')} €/mois`}
                        variant="ghost"
                        onRemove={() => setRechercheForm((p) => ({ ...p, budgetMax: '' }))}
                      />
                    )}
                  </div>
                )}
              </div>
            </CollapsibleSection>
          </div>
        </Sheet>
      )}

      {/* Sheet Visite */}
      {selectedVisiteEvent && (
        <>
        <SheetVisite
          isOpen={isSheetVisiteOpen}
          onClose={handleCloseVisite}
          visitStatus={
            (selectedVisiteEvent.status === 'PROGRAMME' ||
             selectedVisiteEvent.status === 'CONFIRME' ||
             selectedVisiteEvent.status === 'TERMINE' ||
             selectedVisiteEvent.status === 'ANNULE')
              ? selectedVisiteEvent.status
              : 'PROGRAMME'
          }
          propertyAddress={deal?.Property?.address ?? null}
          propertyCity={deal?.Property?.addressCity ?? null}
          propertyType={propertyTypeLabel(deal?.Property?.type ?? null) || null}
          propertySurface={deal?.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m²` : null}
          propertyDpeGrade={
            deal?.Property?.dpeEnergyClass &&
            ['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(deal.Property.dpeEnergyClass)
              ? (deal.Property.dpeEnergyClass as DpeType)
              : null
          }
          invites={
            selectedVisiteEvent.clientId && clientFullName
              ? [{ id: selectedVisiteEvent.clientId, name: clientFullName, calStatus: mapVisiteWorkflow(selectedVisiteEvent).cal }]
              : []
          }
          selectedSlotLabel={
            selectedVisiteEvent.eventDate
              ? `${formatDateOnly(selectedVisiteEvent.eventDate)} à ${formatTimeOnly(selectedVisiteEvent.eventDate)}`
              : null
          }
          odjStatus={
            selectedVisiteEvent.odjStatus === 'EDITE' ||
            selectedVisiteEvent.odjStatus === 'REVISE' ||
            selectedVisiteEvent.odjStatus === 'ENVOYE'
              ? selectedVisiteEvent.odjStatus
              : null
          }
          guideStatus={visitGuideSubmittedAt ? 'COMPLET' : null}
          onViewOdj={handleOpenOdj}
          onViewGuide={handleOpenGuide}
          onOpenAgenda={handleOpenAgenda}
        />

        {/* Sheet Ordre du Jour */}
        <SheetOrdreDuJour
          isOpen={isSheetOdjOpen}
          onClose={handleCloseOdj}
          propertyLabel={
            deal?.Property
              ? `${deal.Property.address ?? ''}, ${deal.Property.addressCity ?? ''} — ${propertyTypeLabel(deal.Property.type ?? null) || ''} — ${deal.Property.livingAreaSqm ? `${deal.Property.livingAreaSqm}m²` : ''}`
              : ''
          }
          clientName={clientFullName}
          content={odjContent}
          onContentChange={handleOdjContentChange}
          odjStatus={
            selectedVisiteEvent.odjStatus === 'EDITE' ||
            selectedVisiteEvent.odjStatus === 'REVISE' ||
            selectedVisiteEvent.odjStatus === 'ENVOYE'
              ? selectedVisiteEvent.odjStatus
              : 'EDITE'
          }
          isRevision={odjIsRevision}
          onToggleRevision={handleOdjToggleRevision}
          onSend={handleSendOdj}
        />

        {/* Sheet Guide de Visite (Compte-rendu) */}
        <SheetGuideDeVisite
          isOpen={isSheetGuideOpen}
          onClose={handleCloseGuide}
          propertyLabel={
            deal?.Property
              ? `${deal.Property.address ?? ''}, ${deal.Property.addressCity ?? ''} — ${propertyTypeLabel(deal.Property.type ?? null) || ''} — ${deal.Property.livingAreaSqm ? `${deal.Property.livingAreaSqm}m²` : ''}`
              : ''
          }
          clientName={clientFullName}
          criteria={visitGuideCriteria}
          commentaire={visitGuideCommentaire}
          submittedAt={visitGuideSubmittedAt}
        />

        {/* Sheet Agenda du bien */}
        <SheetAgendaBien
          isOpen={isSheetAgendaOpen}
          onClose={handleCloseAgenda}
          propertyLabel={
            deal?.Property
              ? `${deal.Property.address ?? ''}, ${deal.Property.addressCity ?? ''} — ${propertyTypeLabel(deal.Property.type ?? null) || ''} — ${deal.Property.livingAreaSqm ? `${deal.Property.livingAreaSqm}m²` : ''}`
              : ''
          }
          dpeGrade={
            deal?.Property?.dpeEnergyClass &&
            ['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(deal.Property.dpeEnergyClass)
              ? (deal.Property.dpeEnergyClass as any)
              : undefined
          }
          days={agendaDays}
          onSlotSelect={handleAgendaSlotSelect}
          onProposeSlot={handleProposeSlot}
          selectedSlot={selectedAgendaSlot}
        />
        </>
      )}
    </div>
  );
}
