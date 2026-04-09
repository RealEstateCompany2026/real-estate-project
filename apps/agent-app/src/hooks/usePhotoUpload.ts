'use client';

import { useState, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';

interface UsePhotoUploadOptions {
  propertyId: string;
  organizationId: string;
  bucket?: string;
  maxSizeBytes?: number;
  onUploadComplete?: () => void;
}

interface UploadProgress {
  fileName: string;
  progress: number; // 0-100
  status: 'pending' | 'uploading' | 'done' | 'error';
  error?: string;
}

/**
 * Hook pour l'upload de photos de biens vers Supabase Storage.
 * Gère la compression (via browser-image-compression si disponible),
 * l'upload vers Storage, et l'insertion dans PropertyMedia.
 */
export function usePhotoUpload({
  propertyId,
  organizationId,
  bucket = 'property-photos',
  maxSizeBytes = 10 * 1024 * 1024, // 10 Mo
  onUploadComplete,
}: UsePhotoUploadOptions) {
  const [uploads, setUploads] = useState<UploadProgress[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const uploadPhotos = useCallback(
    async (files: File[]) => {
      const supabase = createClient();
      setIsUploading(true);

      const initialProgress: UploadProgress[] = files.map((f) => ({
        fileName: f.name,
        progress: 0,
        status: 'pending',
      }));
      setUploads(initialProgress);

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Validate size
        if (file.size > maxSizeBytes) {
          setUploads((prev) =>
            prev.map((u, j) =>
              j === i ? { ...u, status: 'error', error: `Fichier trop volumineux (max ${maxSizeBytes / 1024 / 1024} Mo)` } : u
            )
          );
          continue;
        }

        // Validate type
        if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
          setUploads((prev) =>
            prev.map((u, j) =>
              j === i ? { ...u, status: 'error', error: 'Format non supporté (JPEG, PNG, WebP uniquement)' } : u
            )
          );
          continue;
        }

        setUploads((prev) =>
          prev.map((u, j) => (j === i ? { ...u, status: 'uploading', progress: 10 } : u))
        );

        try {
          // Compress if browser-image-compression is available
          let processedFile: File | Blob = file;
          try {
            const imageCompression = (await import('browser-image-compression')).default;
            processedFile = await imageCompression(file, {
              maxSizeMB: 2,
              maxWidthOrHeight: 2048,
              useWebWorker: true,
            });
          } catch {
            // browser-image-compression not installed — skip compression
          }

          setUploads((prev) =>
            prev.map((u, j) => (j === i ? { ...u, progress: 40 } : u))
          );

          // Upload to Supabase Storage
          const ext = file.name.split('.').pop() || 'jpg';
          const path = `${organizationId}/${propertyId}/${Date.now()}-${i}.${ext}`;

          const { error: uploadError } = await supabase.storage
            .from(bucket)
            .upload(path, processedFile, { contentType: file.type });

          if (uploadError) throw uploadError;

          setUploads((prev) =>
            prev.map((u, j) => (j === i ? { ...u, progress: 70 } : u))
          );

          // Get public URL
          const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(path);

          // Get current max sortOrder
          const { data: existing } = await supabase
            .from('PropertyMedia')
            .select('sortOrder')
            .eq('propertyId', propertyId)
            .order('sortOrder', { ascending: false })
            .limit(1);

          const nextOrder = (existing?.[0]?.sortOrder ?? -1) + 1;

          // Insert PropertyMedia record
          const { error: insertError } = await supabase.from('PropertyMedia').insert({
            propertyId,
            organizationId,
            mediaType: 'photo',
            storagePath: urlData.publicUrl,
            fileName: file.name,
            fileSizeBytes: processedFile instanceof Blob ? processedFile.size : file.size,
            mimeType: file.type,
            sortOrder: nextOrder + i,
            isCover: nextOrder + i === 0, // First photo is cover by default
          });

          if (insertError) throw insertError;

          setUploads((prev) =>
            prev.map((u, j) => (j === i ? { ...u, status: 'done', progress: 100 } : u))
          );
        } catch (err) {
          setUploads((prev) =>
            prev.map((u, j) =>
              j === i
                ? { ...u, status: 'error', error: err instanceof Error ? err.message : 'Erreur upload' }
                : u
            )
          );
        }
      }

      setIsUploading(false);
      onUploadComplete?.();
    },
    [propertyId, organizationId, bucket, maxSizeBytes, onUploadComplete]
  );

  return { uploads, isUploading, uploadPhotos };
}
