'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft, Pencil, Archive, FileDown,
  User, Phone, Briefcase, FileText, Home, Clock, Settings,
} from 'lucide-react';
import type { Client } from '@/types/client';
import { CLIENT_STATUS_LABELS, CLIENT_STATUS_COLORS, CLIENT_GENDER_LABELS } from '@/types/client';
import type { ClientGender, ClientStatus } from '@/types/client';
import { createClient } from '@/lib/supabase/client';
import { useCompletionScore } from '@/hooks/useCompletionScore';
import { Button } from '@real-estate/ui/button';
import { Spinner } from '@real-estate/ui/spinner';
import { AccordionSection } from '@/components/ui/AccordionSection';
import { Avatar } from '@/components/ui/Avatar';
import { CompletionGauge } from '@/components/ui/CompletionGauge';
import { SectionNav } from '@/components/ui/SectionNav';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { useToast } from '@/components/ui/Toast';

import { ClientSectionIdentity } from './sections/ClientSectionIdentity';
import { ClientSectionDocuments } from './sections/ClientSectionDocuments';
import { ClientSectionProperties } from './sections/ClientSectionProperties';
import { ClientSectionTimeline } from './sections/ClientSectionTimeline';
import { ClientSectionDeals } from './sections/ClientSectionDeals';
import { ClientSectionNotes } from './sections/ClientSectionNotes';

const SECTIONS = [
  { id: 'identity', label: 'Identité & Coordonnées' },
  { id: 'documents', label: 'Documents' },
  { id: 'properties', label: 'Biens' },
  { id: 'deals', label: 'Affaires' },
  { id: 'timeline', label: 'Historique' },
  { id: 'notes', label: 'Notes & Tags' },
];

interface ClientDetailViewProps {
  clientId: string;
}

/**
 * Vue principale de la fiche client (P08).
 * Layout : header sticky + contenu scrollable avec SectionNav latérale.
 */
export function ClientDetailView({ clientId }: ClientDetailViewProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [client, setClient] = useState<Client | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const completion = useCompletionScore(
    'client',
    (client ?? {}) as Record<string, unknown>
  );

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('Client')
        .select('*')
        .eq('id', clientId)
        .single();

      if (error || !data) {
        toast('Client introuvable', 'error');
        router.push('/clients');
        return;
      }
      setClient(data as Client);
      setIsLoading(false);
    }
    load();
  }, [clientId, router, toast]);

  async function handleArchive() {
    if (!client) return;
    const supabase = createClient();
    const { error } = await supabase
      .from('Client')
      .update({ isActive: false })
      .eq('id', client.id);

    if (error) {
      toast('Erreur lors de l\'archivage', 'error');
    } else {
      toast('Client archivé', 'success');
      router.push('/clients');
    }
  }

  async function handleFieldUpdate(field: string, value: unknown) {
    if (!client) return;
    const supabase = createClient();
    const { error } = await supabase
      .from('Client')
      .update({ [field]: value })
      .eq('id', client.id);

    if (error) {
      toast('Erreur lors de la mise à jour', 'error');
      return;
    }
    setClient((prev) => prev ? { ...prev, [field]: value } : null);
    toast('Mis à jour', 'success');
  }

  if (isLoading || !client) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      {/* Header (FIC-01) */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            size="sm"
            icon={<ArrowLeft className="w-5 h-5" />}
          />

          <Avatar firstName={client.firstName} lastName={client.lastName} size="lg" />

          <div>
            <div className="flex items-center gap-2">
              {client.gender && (
                <span className="text-sm text-neutral-grey-bold">
                  {CLIENT_GENDER_LABELS[client.gender as ClientGender]}
                </span>
              )}
              <h1 className="text-xl font-bold text-neutral-anthracite">
                {client.firstName} {client.lastName}
              </h1>
            </div>
            <div className="flex items-center gap-2 mt-1">
              {client.status?.map((s) => (
                <StatusBadge
                  key={s}
                  label={CLIENT_STATUS_LABELS[s as ClientStatus]}
                  color={CLIENT_STATUS_COLORS[s as ClientStatus]}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <CompletionGauge score={completion.score} level={completion.level} suggestion={completion.suggestion} size="sm" />
          <Button
            variant="ghost"
            onClick={handleArchive}
            size="sm"
            icon={<Archive className="w-5 h-5" />}
            title="Archiver"
          />
          <Button
            variant="ghost"
            size="sm"
            icon={<FileDown className="w-5 h-5" />}
            title="Exporter PDF"
          />
        </div>
      </div>

      {/* Body : SectionNav + Sections */}
      <div className="flex gap-8">
        {/* Navigation latérale */}
        <aside className="hidden lg:block w-48 shrink-0">
          <SectionNav sections={SECTIONS} />
        </aside>

        {/* Sections */}
        <div className="flex-1 space-y-4 min-w-0">
          <AccordionSection id="identity" title="Identité & Coordonnées" icon={<User className="w-4 h-4" />}>
            <ClientSectionIdentity client={client} onUpdate={handleFieldUpdate} />
          </AccordionSection>

          <AccordionSection id="documents" title="Documents" icon={<FileText className="w-4 h-4" />}>
            <ClientSectionDocuments clientId={client.id} />
          </AccordionSection>

          <AccordionSection id="properties" title="Biens" icon={<Home className="w-4 h-4" />}>
            <ClientSectionProperties clientId={client.id} />
          </AccordionSection>

          <AccordionSection id="deals" title="Affaires" icon={<Briefcase className="w-4 h-4" />} defaultOpen={false}>
            <ClientSectionDeals clientId={client.id} />
          </AccordionSection>

          <AccordionSection id="timeline" title="Historique" icon={<Clock className="w-4 h-4" />}>
            <ClientSectionTimeline clientId={client.id} />
          </AccordionSection>

          <AccordionSection id="notes" title="Notes & Tags" icon={<Settings className="w-4 h-4" />}>
            <ClientSectionNotes client={client} onUpdate={handleFieldUpdate} />
          </AccordionSection>
        </div>
      </div>
    </div>
  );
}
