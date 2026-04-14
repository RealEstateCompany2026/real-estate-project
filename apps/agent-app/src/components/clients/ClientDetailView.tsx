'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Pencil, CheckCheck, Database, MessageCirclePlus, ScrollText, ArrowRight } from 'lucide-react';

// ── DS Components ──
import { AppBarFicheClient } from '@real-estate/ui/app-bar-fiche-client';
import { GraphCourbe } from '@real-estate/ui/graph-courbe';
import { AppBarClientAncres } from '@real-estate/ui/app-bar-client-ancres';
import { IconButtonMega } from '@real-estate/ui/icon-button-mega';
import { Spinner } from '@real-estate/ui/spinner';
import { Badge } from '@real-estate/ui/badge';
import { Button } from '@real-estate/ui/button';
import { AiSuggestionBanner } from '@real-estate/ui/ai-suggestion-banner';
import { CardLog } from '@real-estate/ui/card-log';
import { Chip } from '@real-estate/ui/chip';

// ── App-level ──
import { createClient } from '@/lib/supabase/client';
import type { Client, ClientStatus } from '@/types/client';

// ---------------------------------------------------------------------------
// Types — prêts pour la dynamisation
// ---------------------------------------------------------------------------

interface ClientKpis {
  qualification: number;
  engagement: number;
  conversion: number;
  reactivation: number;
}

interface GraphDataPoint {
  label: string;
  value: number;
}

interface ActivityLog {
  id: string;
  date: string;
  time: string;
  author: string;
  category: string;
  description: string;
  badgeVariant?: 'default' | 'success' | 'warning' | 'error' | 'information' | 'disabled';
}

interface EventRow {
  id: string;
  type: string | null;
  title: string | null;
  description: string | null;
  eventDate: string;
  agentId: string | null;
  createdAt: string;
  User: { name: string | null }[] | null;
}

interface ClientDetailData {
  client: Client;
  kpis: ClientKpis;
  aiSuggestions: number;
  graphData: GraphDataPoint[];
  activities: ActivityLog[];
}

// ---------------------------------------------------------------------------
// Helpers — mock data (à remplacer par des appels RPC réels)
// ---------------------------------------------------------------------------

function mockKpis(): ClientKpis {
  return {
    qualification: Math.floor(Math.random() * 60) + 20,
    engagement: Math.floor(Math.random() * 60) + 20,
    conversion: Math.floor(Math.random() * 40) + 10,
    reactivation: Math.floor(Math.random() * 60) + 20,
  };
}

function mockGraphData(): GraphDataPoint[] {
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

function mockActivities(): ActivityLog[] {
  return [
    {
      id: 'mock-1',
      date: '12 fév. 2026',
      time: '12:56',
      author: 'Le client',
      category: 'QUALIFICATION',
      description: 'Le client a fait le des place d\'dentist coutume.',
      badgeVariant: 'success',
    },
    {
      id: 'mock-2',
      date: '10 fév. 2026',
      time: '09:30',
      author: 'Système',
      category: 'ENGAGEMENT',
      description: 'Un message a été envoyé au client pour lui confirmer un primo-a conversation de la transaction.',
      badgeVariant: 'information',
    },
    {
      id: 'mock-3',
      date: '07 fév. 2026',
      time: '14:15',
      author: 'Titre le registre',
      category: 'QUALIFICATION',
      description: 'Le client a été scruté à trouver une pièce d\'identité valide.',
      badgeVariant: 'success',
    },
    {
      id: 'mock-4',
      date: '03 fév. 2026',
      time: '16:42',
      author: 'Mail',
      category: 'CONVERSION',
      description: "L'offre de montant de vente forfaits a été envoyée au client.",
      badgeVariant: 'warning',
    },
  ];
}

/** Mappe un EventType DB vers une catégorie funnel pour l'affichage */
function eventTypeToCategory(eventType: string | null): 'QUALIFICATION' | 'ENGAGEMENT' | 'CONVERSION' | 'REACTIVATION' {
  switch (eventType) {
    case 'RDV_COMMERCIAL':
      return 'QUALIFICATION';
    case 'VISITE':
    case 'TACHE':
    case 'ANNIVERSAIRE':
    case 'AUTRE':
      return 'ENGAGEMENT';
    case 'SIGNATURE_PROMESSE':
    case 'SIGNATURE_NOTAIRE':
    case 'SIGNATURE_BAIL':
      return 'CONVERSION';
    case 'RELANCE':
      return 'REACTIVATION';
    default:
      return 'ENGAGEMENT';
  }
}

/** Mappe une catégorie funnel vers un BadgeVariant DS */
function getActivityBadgeVariant(category: string): 'default' | 'success' | 'warning' | 'information' | 'error' | 'disabled' {
  switch (category) {
    case 'QUALIFICATION': return 'success';
    case 'ENGAGEMENT':    return 'default';
    case 'CONVERSION':    return 'warning';
    case 'REACTIVATION':  return 'information';
    default:              return 'default';
  }
}

function statusToTags(status: ClientStatus[]): string[] {
  const map: Record<string, string> = {
    PROPRIETAIRE: 'PROPRIÉTAIRE',
    ACQUEREUR: 'ACQUÉREUR',
    BAILLEUR: 'BAILLEUR',
    LOCATAIRE: 'LOCATAIRE',
    VENDEUR: 'VENDEUR',
  };
  return status.map((s) => map[s] ?? s);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/** Label/valeur pour la grille Profil — correspond au "Body . md . light" du Figma */
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

interface ClientDetailViewProps {
  clientId: string;
}

export function ClientDetailView({ clientId }: ClientDetailViewProps) {
  const router = useRouter();

  // ── Data ──
  const [data, setData] = useState<ClientDetailData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'QUALIFICATION' | 'ENGAGEMENT' | 'CONVERSION' | 'REACTIVATION'>('all');

  // ── Section refs for anchor navigation ──
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // ── Fetch ──
  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data: clientData, error } = await supabase
        .from('Client')
        .select('*')
        .eq('id', clientId)
        .single();

      if (error || !clientData) {
        router.push('/clients');
        return;
      }

      // Fetch events for activity log
      const { data: eventsData, error: eventsError } = await supabase
        .from('Event')
        .select('id, type, title, description, eventDate, agentId, createdAt, User:agentId(name)')
        .eq('clientId', clientId)
        .order('eventDate', { ascending: false })
        .limit(4);

      if (eventsError) {
        console.error('[ClientDetailView] Event query failed:', eventsError);
      }

      // Map events to ActivityLog
      const activities: ActivityLog[] = (eventsData ?? []).map((ev: EventRow) => ({
        id: ev.id,
        date: new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(ev.eventDate)),
        time: new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(new Date(ev.eventDate)),
        author: ev.User?.[0]?.name ?? 'Système',
        category: eventTypeToCategory(ev.type),
        description: ev.description ?? ev.title ?? '',
      }));

      setData({
        client: clientData as Client,
        kpis: mockKpis(),
        aiSuggestions: Math.floor(Math.random() * 15) + 1,
        graphData: mockGraphData(),
        activities,
      });
      setIsLoading(false);
    }
    load();
  }, [clientId, router]);

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

  // ── Loading ──
  if (isLoading || !data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Spinner />
      </div>
    );
  }

  const { client, kpis, aiSuggestions, graphData, activities } = data;
  const filteredActivities = activeFilter === 'all'
    ? activities
    : activities.filter((a) => a.category === activeFilter);
  const clientName = `${client.lastName?.toUpperCase()}, ${client.firstName}`;
  const tags = statusToTags(client.status ?? []);

  return (
    <div className="relative">
      {/* ═══════════════════════════════════════════════════════
          Bloc 1a — AppBarFicheClient
          ═══════════════════════════════════════════════════════ */}
      <AppBarFicheClient
        clientName={clientName}
        tags={tags}
        qualification={kpis.qualification}
        engagement={kpis.engagement}
        conversion={kpis.conversion}
        reactivation={kpis.reactivation}
        aiSuggestions={aiSuggestions}
        onBack={() => router.push('/clients')}
      />

      {/* ═══════════════════════════════════════════════════════
          Bloc 1b — GraphCourbe
          ═══════════════════════════════════════════════════════ */}
      <GraphCourbe
        title="Activité"
        data={graphData}
        selectedIndex={5}
        selectedDate="22 fév 2026"
        selectedLabel="28 réactions positives"
        trendPercentage="7%"
        trendDirection="down"
      />

      {/* ═══════════════════════════════════════════════════════
          Bloc 1c — AppBarClientAncres (navigation par ancres)
          ═══════════════════════════════════════════════════════ */}
      <AppBarClientAncres onItemClick={handleAnchorClick} />

      {/* ═══════════════════════════════════════════════════════
          Sections (Blocs 2-8 — à implémenter)
          ═══════════════════════════════════════════════════════ */}
      <div className="flex flex-col">
        {/* Bloc 2 — Profil */}
        <section ref={setSectionRef('profil')} id="profil" className="py-[50px] border-t border-edge-default">
          {/* Header : titre + badge count + bouton Éditer */}
          <div className="flex items-center justify-between mb-[50px]">
            <div className="flex items-center gap-[4px]">
              <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
                Profil
              </h3>
              <Badge variant="default">{client.completionScore}</Badge>
            </div>
            <Button
              variant="ghost"
              onClick={() => router.push(`/clients/${client.id}/edit`)}
            >
              <Pencil size={16} />
              Éditer
            </Button>
          </div>

          {/* Grille 3 colonnes : Identité / Contact / Professionnel */}
          <div className="grid grid-cols-3 gap-x-[60px] gap-y-[8px] mb-[50px]">
            {/* En-têtes colonnes */}
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Informations d&apos;identité
            </p>
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Informations de contact
            </p>
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Informations professionnelles
            </p>

            {/* Row 1 */}
            <ProfileField label="Genre" value={client.gender} />
            <ProfileField label="Adresse" value={client.address} />
            <ProfileField label="Profession" value={client.jobTitle} />

            {/* Row 2 */}
            <ProfileField label="Nom" value={client.lastName} />
            <ProfileField label="Tél. Mobile" value={client.mobilePhone} />
            <ProfileField label="Employeur" value={client.employer} />

            {/* Row 3 */}
            <ProfileField label="Prénom" value={client.firstName} />
            <ProfileField label="Email (1)" value={client.primaryEmail} />
            <ProfileField label="Revenus" value={client.incomeBracket} />

            {/* Row 4 */}
            <ProfileField label="Né le" value={client.dateOfBirth ? new Date(client.dateOfBirth).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) : null} />
            <ProfileField label="Email (2)" value={client.secondaryEmail} />
            <div />

            {/* Row 5 */}
            <ProfileField label="Lieu de naissance" value={client.placeOfBirth} />
            <ProfileField label="Canal préféré" value={client.preferredChannel} />
            <div />

            {/* Row 6 */}
            <ProfileField label="Nationalité" value={client.nationality} />
            <div />
            <div />

            {/* Row 7 */}
            <ProfileField label="Statut marital" value={client.maritalStatus} />
            <div />
            <div />
          </div>

          {/* AiSuggestionBanner */}
          <AiSuggestionBanner
            suggestion="Suggestion d'actions pour compléter la fiche contact du client. Suggestion d'actions pour compléter la fiche contact du client"
            actionLabel="Programmer"
          />
        </section>

        {/* Bloc 3 — Activités */}
        <section ref={setSectionRef('activites')} id="activites" className="py-[50px] border-t border-edge-default">
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
              <Chip
                label="Qualification"
                icon={<Database size={16} />}
                selected={activeFilter === 'QUALIFICATION'}
                size="medium"
                fontWeight="semibold"
                onClick={() => setActiveFilter('QUALIFICATION')}
              />
              <Chip
                label="Engagement"
                icon={<MessageCirclePlus size={16} />}
                selected={activeFilter === 'ENGAGEMENT'}
                size="medium"
                fontWeight="semibold"
                onClick={() => setActiveFilter('ENGAGEMENT')}
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
              onClick={() => sectionRefs.current['evenements']?.scrollIntoView({ behavior: 'smooth' })}
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
                badgeVariant={getActivityBadgeVariant(activity.category)}
                className="w-full"
              />
            ))}
          </div>
        </section>

        {/* Bloc 4 — Affaires */}
        <section ref={setSectionRef('affaires')} id="affaires" className="py-[50px] border-t border-edge-default">
          {/* TODO: Section Affaires */}
        </section>

        {/* Bloc 5 — Biens */}
        <section ref={setSectionRef('biens')} id="biens" className="py-[50px] border-t border-edge-default">
          {/* TODO: Section Biens */}
        </section>

        {/* Bloc 6 — Carnets */}
        <section ref={setSectionRef('carnet')} id="carnet" className="py-[50px] border-t border-edge-default">
          {/* TODO: Section Carnets */}
        </section>

        {/* Bloc 7 — Documents */}
        <section ref={setSectionRef('documents')} id="documents" className="py-[50px] border-t border-edge-default">
          {/* TODO: Section Documents */}
        </section>

        {/* Bloc 8 — Messages */}
        <section ref={setSectionRef('messages')} id="messages" className="py-[50px] border-t border-edge-default">
          {/* TODO: Section Messages */}
        </section>
      </div>

      {/* ═══════════════════════════════════════════════════════
          Bloc 9 — IconButtonMega (bouton IA flottant)
          ═══════════════════════════════════════════════════════ */}
      <div className="fixed bottom-8 right-8 z-50">
        <IconButtonMega icon={<Sparkles size={24} />} variant="primary" />
      </div>
    </div>
  );
}
