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
import { ListVisite } from '@real-estate/ui/list-visite';
import { ListPromesse } from '@real-estate/ui/list-promesse';
import { ListActeNotarie } from '@real-estate/ui/list-acte-notarie';
import { CardCA } from '@real-estate/ui/card-ca';
import { ListAnnonce } from '@real-estate/ui/list-annonce';
import { KpiIndicator } from '@real-estate/ui/kpi-indicator';
import { MessageReceived } from '@real-estate/ui/message-received';
import { MessageSent } from '@real-estate/ui/message-sent';
import type { DealType } from '@real-estate/ui/deal-types';

// ── App-level ──
import { createClient } from '@/lib/supabase/client';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface DealRow {
  id: string;
  reference: string | null;
  dealType: DealType | null;
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
  Client: { id: string; firstName: string | null; lastName: string | null; status: string | null } | null;
  Property: { id: string; type: string | null; livingAreaSqm: number | null; addressCity: string | null; desiredSellingPrice: number | null; dpeEnergyClass: string | null } | null;
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

type ActivityFilter = 'Tout' | 'Qualification' | 'Commercial' | 'Juridique';

function eventTypeToActivityCategory(eventType: string | null): string {
  switch (eventType) {
    case 'RDV_COMMERCIAL':
    case 'RELANCE':
      return 'Commercial';
    case 'SIGNATURE_PROMESSE':
    case 'SIGNATURE_NOTAIRE':
    case 'SIGNATURE_BAIL':
      return 'Juridique';
    case 'VISITE':
    case 'TACHE':
    case 'AUTRE':
    default:
      return 'Qualification';
  }
}

function getActivityBadgeVariant(category: string): BadgeVariant {
  switch (category) {
    case 'Qualification': return 'success';
    case 'Commercial': return 'information';
    case 'Juridique': return 'warning';
    default: return 'default';
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

// ── Ancres Vente ──

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
  const [activeFilter, setActiveFilter] = useState<ActivityFilter>('Tout');

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
          .select('id, type, status, title, description, eventDate, reportContent')
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

  const filteredEvents = activeFilter === 'Tout'
    ? events
    : events.filter((e) => eventTypeToActivityCategory(e.type) === activeFilter);

  const clientFullName = deal?.Client
    ? `${deal.Client.firstName ?? ''} ${deal.Client.lastName ?? ''}`.trim()
    : '\u2014';

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
        <Button variant="ghost" onClick={() => router.push('/affaires')}>
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

  // ── Render ──
  return (
    <div className="flex flex-col min-h-screen bg-surface-page">
      {/* ── AppBarFicheAffaire (sticky) ── */}
      <div className="sticky top-0 z-30">
        <AppBarFicheAffaire
          dealId={deal.reference ?? deal.id.slice(0, 8)}
          dealType={(deal.dealType as DealType) ?? 'VENTE'}
          propertyType={propertyTypeLabel(deal.Property?.type ?? null)}
          surface={deal.Property?.livingAreaSqm ? `${deal.Property.livingAreaSqm} m\u00b2` : '\u2014'}
          city={deal.Property?.addressCity ?? '\u2014'}
          price={formatPrice(deal.Property?.desiredSellingPrice)}
          aiSuggestions={0}
          onBack={() => router.push('/affaires')}
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
          items={ancresVente}
          onItemClick={(id) =>
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </div>

      {/* ── Sections ── */}
      <div className="flex flex-col">
        {/* ─────────── Section Mandat (AFF-V01) ─────────── */}
        <section id="mandat" className="px-5 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold text-content-headings">Mandat</h5>
            <Badge variant={MANDATE_STATUS_VARIANT[deal.saleMandateStatus ?? 'NON_CREE'] ?? 'disabled'}>
              {MANDATE_STATUS_LABELS[deal.saleMandateStatus ?? 'NON_CREE'] ?? 'Non cr\u00e9\u00e9'}
            </Badge>
          </div>
          <ListMandat
            reference={deal.reference ?? '\u2014'}
            workflow={{
              edition: mapMandateWorkflow(deal.saleMandateStatus, 'edition'),
              revision: mapMandateWorkflow(deal.saleMandateStatus, 'revision'),
              signature: mapMandateWorkflow(deal.saleMandateStatus, 'signature'),
            }}
            aiSuggestions={0}
          />
          {deal.saleMandateStatus !== 'SIGNE' && (
            <AiSuggestionBanner
              suggestion="Relancer le client pour la signature du mandat"
              variant="compact"
            />
          )}
        </section>

        {/* ─────────── Section Activites (AFF-V02) ─────────── */}
        <section id="activite" className="px-5 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold text-content-headings">Activit\u00e9s</h5>
            <Badge variant="default">{events.length}</Badge>
          </div>
          <div className="flex gap-2">
            {(['Tout', 'Qualification', 'Commercial', 'Juridique'] as ActivityFilter[]).map((cat) => (
              <Chip
                key={cat}
                variant={activeFilter === cat ? 'filled' : 'outlined'}
                label={cat}
                onClick={() => setActiveFilter(cat)}
              />
            ))}
          </div>
          {filteredEvents.slice(0, 4).map((evt) => {
            const cat = eventTypeToActivityCategory(evt.type);
            const evtDate = new Date(evt.eventDate);
            return (
              <CardLog
                key={evt.id}
                date={evtDate.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })}
                time={evtDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                author={cat}
                category={evt.type ?? 'AUTRE'}
                description={evt.description ?? evt.title ?? ''}
                badgeVariant={getActivityBadgeVariant(cat)}
              />
            );
          })}
          {filteredEvents.length === 0 && (
            <p className="text-sm text-content-subtle italic">Aucune activit\u00e9 enregistr\u00e9e</p>
          )}
          {events.length > 4 && (
            <Button variant="ghost" size="sm">
              Voir tout ({events.length})
            </Button>
          )}
        </section>

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

        {/* ─────────── Section Visites (AFF-V05) ─────────── */}
        <section id="visites" className="px-5 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold text-content-headings">Visites</h5>
            <Badge variant="default">{visitEvents.length}</Badge>
          </div>
          {visitEvents.map((v) => (
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
          ))}
          {visitEvents.length === 0 && (
            <p className="text-sm text-content-subtle italic">Aucune visite planifi\u00e9e</p>
          )}
        </section>

        {/* ─────────── Section Promesses (AFF-V06) ─────────── */}
        <section id="promesse" className="px-5 py-6 flex flex-col gap-4">
          <h5 className="text-xl font-bold text-content-headings">Promesses</h5>
          {deal.purchaseOfferStatus ? (
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
          )}
        </section>

        {/* ─────────── Section Financement (AFF-V07) ─────────── */}
        <section id="finance" className="px-5 py-6 flex flex-col gap-4">
          <h5 className="text-xl font-bold text-content-headings">Financement</h5>
          <p className="text-sm text-content-subtle italic">Aucun dossier de financement</p>
        </section>

        {/* ─────────── Section Notaire (AFF-V08) ─────────── */}
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

        {/* ─────────── Section Budget (AFF-V09) ─────────── */}
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
            {deal.finalSalePrice && (
              <div className="flex justify-between">
                <span>Prix de vente final</span>
                <span className="font-semibold">{formatPrice(deal.finalSalePrice)}</span>
              </div>
            )}
          </div>
        </section>

        {/* ─────────── Section Documents (AFF-V10) ─────────── */}
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

        {/* ─────────── Section Messages (AFF-V11) ─────────── */}
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

        {/* ─────────── Section Notes (AFF-V12) ─────────── */}
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
    </div>
  );
}
