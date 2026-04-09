'use client';

import type { Property, PropertyMedia } from '@/types/property';
import { PhotoGallery } from '@/components/ui/PhotoGallery';
import { usePhotoUpload } from '@/hooks/usePhotoUpload';
import { createClient } from '@/lib/supabase/client';
import { useToast } from '@/components/ui/Toast';

interface PropertySectionPhotosProps {
  property: Property;
  photos: PropertyMedia[];
  onPhotosChange: (photos: PropertyMedia[]) => void;
}

/**
 * Section Photos de la fiche bien (FIB-05).
 * Upload, cover, suppression, galerie.
 */
export function PropertySectionPhotos({ property, photos, onPhotosChange }: PropertySectionPhotosProps) {
  const { toast } = useToast();

  const { isUploading, uploadPhotos } = usePhotoUpload({
    propertyId: property.id,
    organizationId: property.organizationId ?? '',
    onUploadComplete: async () => {
      // Refresh photos
      const supabase = createClient();
      const { data } = await supabase
        .from('PropertyMedia')
        .select('*')
        .eq('propertyId', property.id)
        .eq('mediaType', 'photo')
        .order('sortOrder', { ascending: true });
      onPhotosChange((data ?? []) as PropertyMedia[]);
      toast('Photos uploadées', 'success');
    },
  });

  async function handleSetCover(photoId: string) {
    const supabase = createClient();

    // Unset all covers
    await supabase
      .from('PropertyMedia')
      .update({ isCover: false })
      .eq('propertyId', property.id);

    // Set new cover
    await supabase
      .from('PropertyMedia')
      .update({ isCover: true })
      .eq('id', photoId);

    onPhotosChange(
      photos.map((p) => ({ ...p, isCover: p.id === photoId }))
    );
    toast('Photo de couverture mise à jour', 'success');
  }

  async function handleDelete(photoId: string) {
    const photo = photos.find((p) => p.id === photoId);
    if (!photo) return;

    const supabase = createClient();

    // Delete from storage
    const path = photo.storagePath.split('/property-photos/')[1];
    if (path) {
      await supabase.storage.from('property-photos').remove([path]);
    }

    // Delete record
    await supabase.from('PropertyMedia').delete().eq('id', photoId);

    onPhotosChange(photos.filter((p) => p.id !== photoId));
    toast('Photo supprimée', 'success');
  }

  return (
    <PhotoGallery
      photos={photos}
      onUpload={uploadPhotos}
      onSetCover={handleSetCover}
      onDelete={handleDelete}
      isUploading={isUploading}
    />
  );
}
