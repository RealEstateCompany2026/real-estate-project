'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft, FileDown, Share2, Archive,
  Home, MapPin, Ruler, DollarSign, Camera, FileText,
  Clock, Briefcase, Settings, Thermometer,
} from 'lucide-react';
import type { Property, PropertyMedia } from '@/types/property';
import {
  PROPERTY_TYPE_LABELS, PROPERTY_STATUS_LABELS, PROPERTY_STATUS_COLORS,
  DPE_COLORS,
} from '@/types/property';
import type { PropertyType, PropertyStatus, DpeClass } from '@/types/property';
import { createClient } from '@/lib/supabase/client';
import { useCompletionScore } from '@/hooks/useCompletionScore';
import { formatPrice, formatSurface } from '@/lib/utils/format';
import { Button } from '@real-estate/ui/button';
import { Spinner } from '@real-estate/ui/spinner';
import { AccordionSection } from '@/components/ui/AccordionSection';
import { CompletionGauge } from '@/components/ui/CompletionGauge';
import { SectionNav } from '@/components/ui/SectionNav';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { useToast } from '@/components/ui/Toast';

import { PropertySectionGeneral } from './sections/PropertySectionGeneral';
import { PropertySectionCharacteristics } from './sections/PropertySectionCharacteristics';
import { PropertySectionDpe } from './sections/PropertySectionDpe';
import { PropertySectionPhotos } from './sections/PropertySectionPhotos';
import { PropertySectionDocuments } from './sections/PropertySectionDocuments';
import { PropertySectionTimeline } from './sections/PropertySectionTimeline';
import { PropertySectionOwner } from './sections/PropertySectionOwner';
import { PropertySectionNotes } from './sections/PropertySectionNotes';

const SECTIONS = [
  { id: 'general', label: 'Informations générales' },
  { id: 'characteristics', label: 'Caractéristiques' },
  { id: 'dpe', label: 'DPE' },
  { id: 'photos', label: 'Photos' },
  { id: 'documents', label: 'Documents' },
  { id: 'owner', label: 'Propriétaire' },
  { id: 'timeline', label: 'Historique' },
  { id: 'notes', label: 'Notes & Tags' },
];

interface PropertyDetailViewProps {
  propertyId: string;
}

/**
 * Vue principale de la fiche bien (P09).
 * Layout identique à la fiche client : header + sections + SectionNav.
 */
export function PropertyDetailView({ propertyId }: PropertyDetailViewProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [property, setProperty] = useState<Property | null>(null);
  const [photos, setPhotos] = useState<PropertyMedia[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const completion = useCompletionScore(
    'property',
    (property ?? {}) as Record<string, unknown>,
    photos.length,
  );

  useEffect(() => {
    async function load() {
      const supabase = createClient();

      const [{ data: prop }, { data: media }] = await Promise.all([
        supabase.from('Property').select('*').eq('id', propertyId).single(),
        supabase
          .from('PropertyMedia')
          .select('*')
          .eq('propertyId', propertyId)
          .eq('mediaType', 'photo')
          .order('sortOrder', { ascending: true }),
      ]);

      if (!prop) {
        toast('Bien introuvable', 'error');
        router.push('/properties');
        return;
      }

      setProperty(prop as Property);
      setPhotos((media ?? []) as PropertyMedia[]);
      setIsLoading(false);
    }
    load();
  }, [propertyId, router, toast]);

  async function handleFieldUpdate(field: string, value: unknown) {
    if (!property) return;
    const supabase = createClient();
    const { error } = await supabase
      .from('Property')
      .update({ [field]: value })
      .eq('id', property.id);

    if (error) {
      toast('Erreur lors de la mise à jour', 'error');
      return;
    }
    setProperty((prev) => prev ? { ...prev, [field]: value } : null);
    toast('Mis à jour', 'success');
  }

  if (isLoading || !property) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Spinner />
      </div>
    );
  }

  const coverPhoto = photos.find((p) => p.isCover) ?? photos[0];

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      {/* Header (FIB-01) */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            size="sm"
            icon={<ArrowLeft className="w-5 h-5" />}
          />

          {/* Photo cover thumbnail */}
          <div className="w-16 h-12 rounded-lg overflow-hidden bg-neutral-grey-light shrink-0">
            {coverPhoto ? (
              <img src={coverPhoto.storagePath} alt="Cover" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Home className="w-6 h-6 text-neutral-grey-bold" />
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-neutral-anthracite">
                {PROPERTY_TYPE_LABELS[property.type as PropertyType]}
              </h1>
              {property.internalRef && (
                <span className="text-sm text-neutral-grey-bold">({property.internalRef})</span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <StatusBadge
                label={PROPERTY_STATUS_LABELS[property.status as PropertyStatus]}
                color={PROPERTY_STATUS_COLORS[property.status as PropertyStatus]}
              />
              <span className="text-sm text-neutral-grey-bold flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {property.addressCity ?? property.address}
              </span>
              <span className="text-sm font-bold text-neutral-anthracite">
                {formatPrice(property.desiredSellingPrice)}
              </span>
              <span className="text-sm text-neutral-grey-bold">
                {formatSurface(property.livingAreaSqm)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <CompletionGauge score={completion.score} level={completion.level} size="sm" />
          <Button variant="ghost" size="sm" icon={<Share2 className="w-5 h-5" />} title="Partager" />
          <Button variant="ghost" size="sm" icon={<FileDown className="w-5 h-5" />} title="Exporter PDF" />
        </div>
      </div>

      {/* Body */}
      <div className="flex gap-8">
        <aside className="hidden lg:block w-48 shrink-0">
          <SectionNav sections={SECTIONS} />
        </aside>

        <div className="flex-1 space-y-4 min-w-0">
          <AccordionSection id="general" title="Informations générales" icon={<Home className="w-4 h-4" />}>
            <PropertySectionGeneral property={property} onUpdate={handleFieldUpdate} />
          </AccordionSection>

          <AccordionSection id="characteristics" title="Caractéristiques" icon={<Ruler className="w-4 h-4" />}>
            <PropertySectionCharacteristics property={property} onUpdate={handleFieldUpdate} />
          </AccordionSection>

          <AccordionSection id="dpe" title="Diagnostic de performance énergétique" icon={<Thermometer className="w-4 h-4" />}>
            <PropertySectionDpe property={property} onUpdate={handleFieldUpdate} />
          </AccordionSection>

          <AccordionSection id="photos" title="Photos" icon={<Camera className="w-4 h-4" />} badge={photos.length}>
            <PropertySectionPhotos property={property} photos={photos} onPhotosChange={setPhotos} />
          </AccordionSection>

          <AccordionSection id="documents" title="Documents" icon={<FileText className="w-4 h-4" />}>
            <PropertySectionDocuments propertyId={property.id} />
          </AccordionSection>

          <AccordionSection id="owner" title="Propriétaire" icon={<DollarSign className="w-4 h-4" />}>
            <PropertySectionOwner clientId={property.clientId} />
          </AccordionSection>

          <AccordionSection id="timeline" title="Historique" icon={<Clock className="w-4 h-4" />}>
            <PropertySectionTimeline propertyId={property.id} />
          </AccordionSection>

          <AccordionSection id="notes" title="Notes & Tags" icon={<Settings className="w-4 h-4" />}>
            <PropertySectionNotes property={property} onUpdate={handleFieldUpdate} />
          </AccordionSection>
        </div>
      </div>
    </div>
  );
}
