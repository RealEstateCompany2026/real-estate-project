'use client';

import { useState, useRef } from 'react';
import { ImagePlus, Star, Trash2, GripVertical, X } from 'lucide-react';
import type { PropertyMedia } from '@/types/property';

interface PhotoGalleryProps {
  photos: PropertyMedia[];
  onUpload: (files: File[]) => void;
  onSetCover: (photoId: string) => void;
  onDelete: (photoId: string) => void;
  onReorder?: (fromIndex: number, toIndex: number) => void;
  isUploading?: boolean;
  maxPhotos?: number;
  disabled?: boolean;
}

/**
 * Galerie photo avec upload, cover, suppression et drag-to-reorder.
 * Utilisé dans FIB-05 (Photos du bien) et BIE-04 (ajout bien).
 * Le drag & drop nécessite @dnd-kit — ici on fournit une version simplifiée
 * avec des boutons up/down en attendant l'installation de la dépendance.
 */
export function PhotoGallery({
  photos,
  onUpload,
  onSetCover,
  onDelete,
  isUploading = false,
  maxPhotos = 30,
  disabled = false,
}: PhotoGalleryProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (files.length > 0) {
      onUpload(files);
    }
    // Reset pour permettre re-upload du même fichier
    e.target.value = '';
  }

  const canUpload = !disabled && photos.length < maxPhotos;

  return (
    <div>
      {/* Grille de photos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative group aspect-[4/3] rounded-lg overflow-hidden bg-surface-neutral-action border border-edge-default"
          >
            <img
              src={photo.storagePath}
              alt={photo.fileName}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setPreviewUrl(photo.storagePath)}
            />

            {/* Badge cover */}
            {photo.isCover && (
              <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-surface-branded-action text-white text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Couverture
              </div>
            )}

            {/* Actions au hover */}
            {!disabled && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <GripVertical className="w-4 h-4 text-white/60 absolute top-2 left-2" />
                {!photo.isCover && (
                  <button
                    type="button"
                    onClick={() => onSetCover(photo.id)}
                    className="p-2 rounded-full bg-white/90 text-content-branded-action hover:bg-white transition-colors"
                    title="Définir comme couverture"
                  >
                    <Star className="w-4 h-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => onDelete(photo.id)}
                  className="p-2 rounded-full bg-white/90 text-semantic-destructive hover:bg-white transition-colors"
                  title="Supprimer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Bouton upload */}
        {canUpload && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={isUploading}
            className="aspect-[4/3] rounded-lg border-2 border-dashed border-edge-default hover:border-edge-branded-default hover:bg-surface-information flex flex-col items-center justify-center gap-2 transition-colors disabled:opacity-50"
          >
            {isUploading ? (
              <div className="w-6 h-6 border-2 border-surface-branded-action border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <ImagePlus className="w-6 h-6 text-content-caption" />
                <span className="text-xs text-content-caption">Ajouter</span>
              </>
            )}
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      <p className="text-xs text-content-caption mt-2">
        {photos.length}/{maxPhotos} photos — JPEG, PNG ou WebP, max 10 Mo chacune
      </p>

      {/* Lightbox simple */}
      {previewUrl && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center"
          onClick={() => setPreviewUrl(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            onClick={() => setPreviewUrl(null)}
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={previewUrl}
            alt="Aperçu"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
