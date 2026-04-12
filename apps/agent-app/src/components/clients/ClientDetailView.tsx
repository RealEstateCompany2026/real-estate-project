'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Pencil } from 'lucide-react';

// ── DS Components ──
import { AppBarFicheClient } from '@real-estate/ui/app-bar-fiche-client';
import { GraphCourbe } from '@real-estate/ui/graph-courbe';
import { AppBarClientAncres } from '@real-estate/ui/app-bar-client-ancres';
import { IconButtonMega } from '@real-estate/ui/icon-button-mega';
import { Spinner } from '@real-estate/ui/spinner';
import { Badge } from '@real-estate/ui/badge';
import { Button } from '@real-estate/ui/button';
import { AiSuggestionBanner } from '@real-estate/ui/ai-suggestion-banner';

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

interface ClientDetailData {
  client: Client;
  kpis: ClientKpis;
  aiSuggestions: number;
  graphData: GraphDataPoint[];
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

      setData({
        client: clientData as Client,
        kpis: mockKpis(),
        aiSuggestions: Math.floor(Math.random() * 15) + 1,
        graphData: mockGraphData(),
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

  const { client, kpis, aiSuggestions, graphData } = data;
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
            {/* Colonne 1 — Informations d'identité */}
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Informations d&apos;identité
            </p>
            {/* Colonne 2 — Informations de contact */}
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Informations de contact
            </p>
            {/* Colonne 3 — Informations professionnelles */}
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Informations professionnelles
            </p>

            {/* Row 1 */}
            <ProfileField label="Nom" value={client.lastName} />
            <ProfileField label="Réside" value={client.address} />
            <ProfileField label="Profession" value={client.jobTitle} />

            {/* Row 2 */}
            <ProfileField label="Prénom" value={client.firstName} />
            <ProfileField label="Tél. Mobile" value={client.mobilePhone} />
            <ProfileField label="Revenus" value={client.incomeBracket} />

            {/* Row 3 */}
            <ProfileField label="Né le" value={client.dateOfBirth ? new Date(client.dateOfBirth).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) : null} />
            <ProfileField label="Email (1)" value={client.primaryEmail} />
            <div />

            {/* Row 4 */}
            <ProfileField label="À" value={client.placeOfBirth} />
            <ProfileField label="Email (2)" value={client.secondaryEmail} />
            <div />

            {/* Row 5 */}
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
          {/* TODO: Section Activités */}
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
