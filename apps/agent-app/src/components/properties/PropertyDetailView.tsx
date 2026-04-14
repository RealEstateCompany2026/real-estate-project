'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Pencil, CheckCheck, Database, MessageCirclePlus, ScrollText, ArrowRight, Upload, FileText } from 'lucide-react';

// ── DS Components ──
import { AppBarFicheBien } from '@real-estate/ui/app-bar-fiche-bien';
import { Gallery } from '@real-estate/ui/gallery';
import { AppBarAnnonce } from '@real-estate/ui/app-bar-annonce';
import { AppBarBienAncres } from '@real-estate/ui/app-bar-bien-ancres';
import { ListAnnonce } from '@real-estate/ui/list-annonce';
import { ListCarnet } from '@real-estate/ui/list-carnet';
import { IconButtonMega } from '@real-estate/ui/icon-button-mega';
import { Spinner } from '@real-estate/ui/spinner';
import { Badge } from '@real-estate/ui/badge';
import { Button } from '@real-estate/ui/button';
import { AiSuggestionBanner } from '@real-estate/ui/ai-suggestion-banner';
import { CardLog } from '@real-estate/ui/card-log';
import { Chip } from '@real-estate/ui/chip';
import { MessageReceived } from '@real-estate/ui/message-received';
import { MessageSent } from '@real-estate/ui/message-sent';
import { Sheet } from '@real-estate/ui/sheet';
import { InputField } from '@real-estate/ui/input-field';
import { SelectField } from '@real-estate/ui/select-field';
import { FileUpload } from '@real-estate/ui/file-upload';

// ── App-level ──
import { createClient } from '@/lib/supabase/client';
import type { Property, PropertyMedia, OperationType } from '@/types/property';
import {
  PROPERTY_TYPE_LABELS, PROPERTY_CONDITION_LABELS, OPERATION_TYPE_LABELS,
} from '@/types/property';
import { formatPrice } from '@/lib/utils/format';

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
}

interface ListingRow {
  id: string;
  status: string | null;
  editionStatus?: string | null;
  revisionStatus?: string | null;
  publicationStatus?: string | null;
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

interface PropertyDetailData {
  property: Property;
  photos: PropertyMedia[];
  kpis: PropertyKpis;
  aiSuggestions: number;
  activities: ActivityLog[];
  allActivities: ActivityLog[];
  dealsCount: number;
  listings: ListingRow[];
  documents: DocumentItem[];
  messages: MessageItem[];
  allMessages: MessageItem[];
  ownerName: string;
}

// ---------------------------------------------------------------------------
// Helpers — mock data & mappers
// ---------------------------------------------------------------------------

function mockKpis(): PropertyKpis {
  return {
    qualification: Math.floor(Math.random() * 60) + 20,
  };
}

/** Mappe un EventType DB vers une catégorie funnel */
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
  const [activeFilter, setActiveFilter] = useState<'all' | 'QUALIFICATION' | 'ENGAGEMENT' | 'CONVERSION' | 'REACTIVATION'>('all');
  const [isActivitySheetOpen, setIsActivitySheetOpen] = useState(false);
  const [isMessageSheetOpen, setIsMessageSheetOpen] = useState(false);
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
  });
  const [isDocUploadSheetOpen, setIsDocUploadSheetOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

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
        supabase.from('Deal').select('id').eq('propertyId', propertyId),
        supabase.from('Listing').select('id, status').eq('propertyId', propertyId),
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

      // Map events to ActivityLog
      const allActivities: ActivityLog[] = (eventsData ?? []).map((ev: EventRow) => ({
        id: ev.id,
        date: new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(ev.eventDate)),
        time: new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(new Date(ev.eventDate)),
        author: ev.User?.[0]?.name ?? 'Système',
        category: eventTypeToCategory(ev.type),
        status: ev.status,
        description: ev.description ?? ev.title ?? '',
      }));
      const activities: ActivityLog[] = allActivities.slice(0, 4);

      const dealsCount = (dealsData ?? []).length;

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
        dealsCount,
        listings,
        documents,
        messages,
        allMessages,
        ownerName,
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
    setCharacteristicsForm({
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
    });
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

  const { property, photos, kpis, aiSuggestions, activities, allActivities, dealsCount, listings, documents, messages, allMessages, ownerName } = data;
  const filteredActivities = activeFilter === 'all'
    ? activities
    : activities.filter((a) => a.category === activeFilter);

  return (
    <div className="relative">
      {/* ═══════════════════════════════════════════════════════
          Bloc 1a — AppBarFicheBien (sticky)
          ═══════════════════════════════════════════════════════ */}
      <div className="sticky top-0 z-30 bg-surface-page">
        <AppBarFicheBien
          bienId={property.internalRef ?? `Bien ${PROPERTY_TYPE_LABELS[property.type]}`}
          transactionType={property.operationTypes?.[0] ? OPERATION_TYPE_LABELS[property.operationTypes[0] as OperationType] : 'VENTE'}
          contactName={ownerName}
          qualification={kpis.qualification}
          showCarnet={false}
          showMandat={false}
          aiSuggestions={aiSuggestions}
          onBack={() => router.push('/properties')}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════
          Bloc 1b — Gallery
          ═══════════════════════════════════════════════════════ */}
      <Gallery
        images={photos.slice(0, 3).map(p => ({ url: p.storagePath, alt: p.fileName }))}
        onGalleryClick={() => { /* TODO: Sheet wide galerie complète */ }}
      />

      {/* ═══════════════════════════════════════════════════════
          Bloc 1c — AppBarAnnonce
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
          Bloc 1d — AppBarBienAncres (sticky)
          ═══════════════════════════════════════════════════════ */}
      <div className="sticky top-[100px] z-20 bg-surface-page">
        <AppBarBienAncres onItemClick={handleAnchorClick} />
      </div>

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

          {/* Grille 3 colonnes — champs principaux */}
          <div className="grid grid-cols-3 gap-x-[60px] gap-y-[8px] mb-[50px]">
            {/* En-têtes colonnes */}
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Général
            </p>
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Surfaces
            </p>
            <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
              Énergie
            </p>

            {/* Row 1 */}
            <ProfileField label="Type" value={PROPERTY_TYPE_LABELS[property.type]} />
            <ProfileField label="Surface hab." value={property.livingAreaSqm ? `${property.livingAreaSqm} m²` : null} />
            <ProfileField label="DPE énergie" value={property.dpeEnergyClass} />

            {/* Row 2 */}
            <ProfileField label="État" value={property.condition ? PROPERTY_CONDITION_LABELS[property.condition] : null} />
            <ProfileField label="Terrain" value={property.landAreaSqm ? `${property.landAreaSqm} m²` : null} />
            <ProfileField label="DPE GES" value={property.dpeGasEmissionClass} />

            {/* Row 3 */}
            <ProfileField label="Pièces" value={property.numberOfRooms?.toString()} />
            <ProfileField label="Terrasse" value={property.terraceAreaSqm ? `${property.terraceAreaSqm} m²` : null} />
            <ProfileField label="Énergie kWh" value={property.dpeEnergyKwh?.toString()} />

            {/* Row 4 */}
            <ProfileField label="Chambres" value={property.bedroomCount?.toString()} />
            <ProfileField label="Balcon" value={property.balconyAreaSqm ? `${property.balconyAreaSqm} m²` : null} />
            <ProfileField label="GES gCO₂" value={property.dpeGasGco2?.toString()} />

            {/* Row 5 */}
            <ProfileField label="SDB" value={property.bathroomCount?.toString()} />
            <ProfileField label="Jardin" value={property.gardenAreaSqm ? `${property.gardenAreaSqm} m²` : null} />
            <ProfileField label="Chauffage" value={property.heatingType} />

            {/* Row 6 */}
            <ProfileField label="Étage" value={property.floorLevel?.toString()} />
            <div />
            <ProfileField label="Exposition" value={property.exposures?.join(', ') ?? property.mainExposure} />

            {/* Row 7 */}
            <ProfileField label="Année" value={property.constructionYear?.toString()} />
            <div />
            <div />
          </div>

          {/* Bouton "Voir plus" → expand en place */}
          <Button
            variant="ghost"
            onClick={() => setShowMoreCharacteristics(!showMoreCharacteristics)}
          >
            {showMoreCharacteristics ? 'Voir moins' : 'Voir plus'}
          </Button>

          {showMoreCharacteristics && (
            <div className="mt-[30px] grid grid-cols-3 gap-x-[60px] gap-y-[8px]">
              {/* Sous-sections: Cuisine, Équipements, Stationnement, Annexes */}
              <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
                Cuisine & équipements
              </p>
              <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
                Stationnement
              </p>
              <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
                Équipements divers
              </p>

              <ProfileField label="Cuisine" value={property.kitchenType} />
              <ProfileField label="Parking" value={property.parkingType} />
              <ProfileField label="Ascenseur" value={property.hasElevator ? 'Oui' : 'Non'} />

              <ProfileField label="WC" value={property.toiletCount?.toString()} />
              <ProfileField label="Places" value={property.parkingSpotCount?.toString()} />
              <ProfileField label="Interphone" value={property.hasIntercom ? 'Oui' : 'Non'} />

              <ProfileField label="Douches" value={property.showerRoomCount?.toString()} />
              <div />
              <ProfileField label="Piscine" value={property.hasPool ? 'Oui' : 'Non'} />

              <div />
              <div />
              <ProfileField label="Domotique" value={property.hasHomeAutomation ? 'Oui' : 'Non'} />
            </div>
          )}

          {/* AiSuggestionBanner */}
          <AiSuggestionBanner
            suggestion="Suggestion d'actions pour compléter les caractéristiques du bien."
            actionLabel="Programmer"
          />
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
                workflow={{
                  edition: 'disabled' as const,
                  revision: 'disabled' as const,
                  publication: 'disabled' as const,
                }}
                aiSuggestions={0}
                onView={() => { /* TODO: Sheet wide annonce */ }}
              />
            ))}
          </div>
        </section>

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

        {/* Bloc 9 — Acquéreurs Appétents (stand-by) */}
        <section ref={setSectionRef('acquereurs')} id="acquereurs" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
          <div className="flex items-center gap-[4px] mb-[50px]">
            <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
              Acquéreurs appétents
            </h3>
            <Badge variant="default">0</Badge>
          </div>
        </section>
      </div>

      {/* ═══════════════════════════════════════════════════════
          Bloc 10 — IconButtonMega (bouton IA flottant)
          ═══════════════════════════════════════════════════════ */}
      <div className="fixed bottom-8 right-8 z-50">
        <IconButtonMega icon={<Sparkles size={24} />} variant="primary" />
      </div>

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
          <div className="px-[20px] py-[16px] border-t border-edge-default">
            <Button
              variant="primary"
              onClick={handleSaveCharacteristics}
              disabled={isSavingCharacteristics}
              className="w-full"
            >
              {isSavingCharacteristics ? 'Enregistrement…' : 'Enregistrer'}
            </Button>
          </div>
        }
      >
        <div className="flex flex-col gap-[32px] px-[20px] py-[20px]">
          {/* Section Général */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings">
              Général
            </p>
            <SelectField
              label="Type"
              value={characteristicsForm.type}
              onChange={(v) => updateCharacteristicsField('type', v)}
              options={[
                { value: 'STUDIO', label: 'Studio' },
                { value: 'T1', label: 'T1' },
                { value: 'T2', label: 'T2' },
                { value: 'T3', label: 'T3' },
                { value: 'T4', label: 'T4' },
                { value: 'APPARTEMENT', label: 'Appartement' },
                { value: 'MAISON', label: 'Maison' },
                { value: 'MAISON_DE_VILLE', label: 'Maison de ville' },
                { value: 'LOFT', label: 'Loft' },
                { value: 'TERRAIN', label: 'Terrain' },
                { value: 'IMMEUBLE', label: 'Immeuble' },
              ]}
            />
            <SelectField
              label="Condition"
              value={characteristicsForm.condition}
              onChange={(v) => updateCharacteristicsField('condition', v)}
              options={[
                { value: 'NEUF', label: 'Neuf' },
                { value: 'RENOVE', label: 'Rénové' },
                { value: 'BON_ETAT', label: 'Bon état' },
                { value: 'A_RENOVER', label: 'À rénover' },
                { value: 'ANCIEN', label: 'Ancien' },
              ]}
            />
          </div>

          {/* Section Pièces */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings">
              Pièces
            </p>
            <InputField
              label="Nombre de pièces"
              value={characteristicsForm.numberOfRooms}
              onChange={(v) => updateCharacteristicsField('numberOfRooms', v)}
              type="number"
              placeholder="0"
            />
            <InputField
              label="Chambres"
              value={characteristicsForm.bedroomCount}
              onChange={(v) => updateCharacteristicsField('bedroomCount', v)}
              type="number"
              placeholder="0"
            />
            <InputField
              label="Salles de bain"
              value={characteristicsForm.bathroomCount}
              onChange={(v) => updateCharacteristicsField('bathroomCount', v)}
              type="number"
              placeholder="0"
            />
          </div>

          {/* Section Surfaces */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings">
              Surfaces
            </p>
            <InputField
              label="Surface habitable (m²)"
              value={characteristicsForm.livingAreaSqm}
              onChange={(v) => updateCharacteristicsField('livingAreaSqm', v)}
              type="number"
              placeholder="0"
            />
            <InputField
              label="Terrain (m²)"
              value={characteristicsForm.landAreaSqm}
              onChange={(v) => updateCharacteristicsField('landAreaSqm', v)}
              type="number"
              placeholder="0"
            />
            <InputField
              label="Terrasse (m²)"
              value={characteristicsForm.terraceAreaSqm}
              onChange={(v) => updateCharacteristicsField('terraceAreaSqm', v)}
              type="number"
              placeholder="0"
            />
          </div>

          {/* Section Construction */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings">
              Construction
            </p>
            <InputField
              label="Année de construction"
              value={characteristicsForm.constructionYear}
              onChange={(v) => updateCharacteristicsField('constructionYear', v)}
              type="number"
              placeholder="2000"
            />
          </div>

          {/* Section Équipements */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings">
              Équipements
            </p>
            <SelectField
              label="Type de chauffage"
              value={characteristicsForm.heatingType}
              onChange={(v) => updateCharacteristicsField('heatingType', v)}
              options={[
                { value: 'INDIVIDUEL_GAZ', label: 'Individuel gaz' },
                { value: 'INDIVIDUEL_ELECTRIQUE', label: 'Individuel électrique' },
                { value: 'COLLECTIF_GAZ', label: 'Collectif gaz' },
                { value: 'PAC', label: 'PAC' },
                { value: 'FUEL', label: 'Fuel' },
                { value: 'BOIS', label: 'Bois' },
              ]}
            />
            <SelectField
              label="Type de cuisine"
              value={characteristicsForm.kitchenType}
              onChange={(v) => updateCharacteristicsField('kitchenType', v)}
              options={[
                { value: 'SEPAREE', label: 'Séparée' },
                { value: 'OUVERTE', label: 'Ouverte' },
                { value: 'AMERICAINE', label: 'Américaine' },
                { value: 'KITCHENETTE', label: 'Kitchenette' },
              ]}
            />
            <SelectField
              label="Type de parking"
              value={characteristicsForm.parkingType}
              onChange={(v) => updateCharacteristicsField('parkingType', v)}
              options={[
                { value: 'BOX_FERME', label: 'Box fermé' },
                { value: 'PARKING_EXTERIEUR', label: 'Parking extérieur' },
                { value: 'GARAGE', label: 'Garage' },
                { value: 'AUCUN', label: 'Aucun' },
              ]}
            />
          </div>

          {/* Section DPE */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings">
              DPE
            </p>
            <SelectField
              label="Classe énergétique"
              value={characteristicsForm.dpeEnergyClass}
              onChange={(v) => updateCharacteristicsField('dpeEnergyClass', v)}
              options={[
                { value: 'A', label: 'A' },
                { value: 'B', label: 'B' },
                { value: 'C', label: 'C' },
                { value: 'D', label: 'D' },
                { value: 'E', label: 'E' },
                { value: 'F', label: 'F' },
                { value: 'G', label: 'G' },
              ]}
            />
            <SelectField
              label="Classe GES"
              value={characteristicsForm.dpeGasEmissionClass}
              onChange={(v) => updateCharacteristicsField('dpeGasEmissionClass', v)}
              options={[
                { value: 'A', label: 'A' },
                { value: 'B', label: 'B' },
                { value: 'C', label: 'C' },
                { value: 'D', label: 'D' },
                { value: 'E', label: 'E' },
                { value: 'F', label: 'F' },
                { value: 'G', label: 'G' },
              ]}
            />
          </div>
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
          <div className="px-[20px] py-[16px] border-t border-edge-default">
            <Button
              variant="primary"
              onClick={handleUploadDocument}
              disabled={isUploading || !uploadFile}
              className="w-full"
            >
              {isUploading ? 'Upload en cours…' : 'Enregistrer'}
            </Button>
          </div>
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
