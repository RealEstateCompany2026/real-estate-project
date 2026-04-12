'use client';

import { useState } from 'react';
import { ImagePlus } from 'lucide-react';

/**
 * Étape 5 — Photos du bien (BIE-04 photos).
 * Pré-upload de photos en local avant soumission.
 * L'upload vers Supabase Storage se fait après la création du bien.
 * Pour le wizard, on stocke les fichiers en mémoire et on les uploadera après insert.
 */

interface LocalPhoto {
  file: File;
  preview: string;
}

export function StepPropertyPhotos() {
  const [photos, setPhotos] = useState<LocalPhoto[]>([]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    const newPhotos = files
      .filter((f) => ['image/jpeg', 'image/png', 'image/webp'].includes(f.type))
      .map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
    setPhotos((prev) => [...prev, ...newPhotos].slice(0, 30));
    e.target.value = '';
  }

  function removePhoto(index: number) {
    setPhotos((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  }

  return (
    <div className="space-y-4">
      <p className="text-xs text-content-caption">
        Ajoutez des photos du bien. Elles seront uploadées après la création.
        Vous pourrez en ajouter d&apos;autres depuis la fiche du bien.
      </p>

      {/* Grille photos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {photos.map((photo, i) => (
          <div key={photo.preview} className="relative group aspect-[4/3] rounded-lg overflow-hidden bg-surface-neutral-action border border-edge-default">
            <img
              src={photo.preview}
              alt={photo.file.name}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => removePhoto(i)}
              className="absolute top-1 right-1 p-1 rounded-full bg-black/50 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              aria-label="Supprimer"
            >
              ✕
            </button>
            {i === 0 && (
              <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-surface-branded-action text-white">
                Couverture
              </span>
            )}
          </div>
        ))}

        {photos.length < 30 && (
          <label className="aspect-[4/3] rounded-lg border-2 border-dashed border-edge-default hover:border-edge-branded-default hover:bg-surface-information flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors">
            <ImagePlus className="w-6 h-6 text-content-caption" />
            <span className="text-xs text-content-caption">Ajouter</span>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}
      </div>

      <p className="text-xs text-content-caption">
        {photos.length}/30 photos — JPEG, PNG ou WebP, max 10 Mo chacune
      </p>
    </div>
  );
}
