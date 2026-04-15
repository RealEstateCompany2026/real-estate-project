# Brief dev-agent — Composant Diaporama DS + Sheet Galerie Wide + Cover Photo ListBien (P09)

**Date** : 15 avril 2026
**Fichiers cibles** :
- `packages/ui/src/components/Diaporama.tsx` (**NOUVEAU** — composant DS)
- `packages/ui/package.json` (ajout export `./diaporama`)
- `apps/agent-app/src/components/properties/PropertyDetailView.tsx` (Sheet Galerie Wide + state)
- `apps/agent-app/src/components/properties/PropertyListView.tsx` (fetch cover + passage imageUrl)
**Complexité** : Moyenne — nouveau composant DS + Sheet Wide + fetch cover photos
**Référence Figma** : Screenshot fourni par Damien (Galerie sheet)

---

## Contexte

Trois livrables :
1. Créer un composant DS `Diaporama` réutilisable dans `packages/ui/`
2. Intégrer ce composant dans une Sheet **Wide** (1024px) ouverte au clic sur "Galerie"
3. Afficher la cover photo dans chaque `ListBien` / `CardBien`

---

## Sujet 1 — Composant DS `Diaporama`

### Fichier : `packages/ui/src/components/Diaporama.tsx`

Ce composant est un **organism** du Design System. Il gère l'affichage d'un diaporama photos avec :
- Image principale (grande, avec bouton supprimer overlay)
- Strip de thumbnails scrollable (sélection au clic)
- Navigation interne (state du thumbnail sélectionné)

### Interface

```typescript
export interface DiaporamaImage {
  id: string;
  url: string;
  alt?: string;
}

export interface DiaporamaProps {
  /** Liste des images du diaporama */
  images: DiaporamaImage[];
  /** Index de l'image sélectionnée par défaut */
  defaultSelectedIndex?: number;
  /** Callback quand l'utilisateur clique sur le bouton supprimer d'une image */
  onDelete?: (image: DiaporamaImage, index: number) => void;
  /** Hauteur max de l'image principale */
  mainImageMaxHeight?: number;
  /** Classes CSS additionnelles */
  className?: string;
}
```

### Implémentation

```tsx
"use client";

import React, { useState } from "react";
import { Trash2, Image as ImageIcon } from "lucide-react";

/**
 * Diaporama - Visualiseur de galerie photos
 * Organism du design system RealAgent
 *
 * Affiche :
 * - Une image principale (pleine largeur, rounded, object-cover)
 * - Un bouton supprimer en overlay (top-right de l'image principale)
 * - Un strip de thumbnails horizontal scrollable
 * - Navigation : clic sur thumbnail → change l'image principale
 *
 * Tokens Layer 3, dark mode auto via .dark class.
 */

export function Diaporama({
  images,
  defaultSelectedIndex = 0,
  onDelete,
  mainImageMaxHeight = 500,
  className = "",
}: DiaporamaProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

  // Garde-fou : si l'index est hors limites
  const safeIndex = Math.min(selectedIndex, images.length - 1);
  const currentImage = images[safeIndex];

  if (images.length === 0) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-[12px] rounded-[12px] ${className}`}
        style={{
          height: `${mainImageMaxHeight}px`,
          backgroundColor: "var(--surface-neutral-action)",
        }}
      >
        <ImageIcon size={40} style={{ color: "var(--text-disabled)" }} />
        <p
          className="text-[14px] leading-[20px] font-medium"
          style={{ color: "var(--text-subtle)" }}
        >
          Aucune photo
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-[16px] ${className}`}>
      {/* Image principale */}
      <div className="relative w-full">
        <img
          src={currentImage.url}
          alt={currentImage.alt ?? ""}
          className="w-full rounded-[12px] object-cover"
          style={{ maxHeight: `${mainImageMaxHeight}px` }}
        />
        {/* Bouton supprimer — overlay top-right */}
        {onDelete && (
          <button
            className="absolute top-[12px] right-[12px] p-[10px] rounded-full transition-colors"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
            onClick={() => onDelete(currentImage, safeIndex)}
            aria-label="Supprimer cette photo"
          >
            <Trash2 size={18} style={{ color: "var(--text-caption)" }} />
          </button>
        )}
      </div>

      {/* Strip thumbnails — scroll horizontal */}
      {images.length > 1 && (
        <div className="flex gap-[8px] overflow-x-auto pb-[4px]">
          {images.map((image, index) => (
            <button
              key={image.id}
              className="shrink-0 overflow-hidden rounded-[8px] transition-all"
              style={{
                width: "120px",
                height: "80px",
                border:
                  index === safeIndex
                    ? "2px solid var(--border-brand-default)"
                    : "2px solid transparent",
                opacity: index === safeIndex ? 1 : 0.7,
              }}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Photo ${index + 1}`}
            >
              <img
                src={image.url}
                alt={image.alt ?? ""}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Export DS

Dans `packages/ui/package.json`, ajouter dans `"exports"` :
```json
"./diaporama": "./src/components/Diaporama.tsx"
```

> **Important** : placer l'export à un endroit alphabétiquement logique dans la liste des exports.

---

## Sujet 2 — Sheet Galerie Wide (PropertyDetailView.tsx)

### Design (d'après le screenshot Figma)

La sheet est une Sheet **Wide** (1024px) avec :

**Header** (customHeader) :
- Titre : `"Galerie"` (H4 Bold 28px) + `"(N)"` entre parenthèses, même style
- Bouton : `"Importer une photo"` avec icône Download (14px semibold) — à droite du titre
- Bouton close X — extrémité droite

**Body** :
- Le composant `Diaporama` DS importé depuis `@real-estate/ui/diaporama`
- Images : toutes les `photos` du bien, mappées vers `DiaporamaImage[]`

**Footer** (sticky bottom) :
- Bouton `"Partager la galerie"` avec icône Send — aligné à droite
- Style : border, rounded-[12px], 14px semibold, tokens DS

### Implémentation

#### A. Nouveaux states à ajouter

```typescript
const [gallerySheetOpen, setGallerySheetOpen] = useState(false);
```

> **Note** : l'état `selectedPhotoIndex` est géré DANS le composant `Diaporama` — pas besoin de state externe.

#### B. Modifier l'appel Gallery pour ouvrir la Sheet

```tsx
<Gallery
  images={photos.slice(0, 3).map(p => ({ url: p.storagePath, alt: p.fileName }))}
  onGalleryClick={() => setGallerySheetOpen(true)}
  onAddPhotos={() => { /* TODO: Sheet upload photos */ }}
/>
```

#### C. Ajouter la Sheet Galerie dans le JSX (après la Gallery)

```tsx
<Sheet
  isOpen={gallerySheetOpen}
  onClose={() => setGallerySheetOpen(false)}
  width="wide"
  customHeader={
    <div className="flex items-center justify-between px-[40px] pt-[51px] pb-[20px]">
      <div className="flex items-center gap-[16px]">
        <h4
          className="text-[28px] font-bold leading-[34px] tracking-[0.28px]"
          style={{ color: 'var(--text-headings)' }}
        >
          Galerie ({photos.length})
        </h4>
        <button
          className="flex items-center gap-[6px] text-[14px] font-semibold leading-[20px]"
          style={{ color: 'var(--text-neutral-action)' }}
          onClick={() => { /* TODO: import photo */ }}
        >
          Importer une photo
          <Download size={16} />
        </button>
      </div>
      <button
        onClick={() => setGallerySheetOpen(false)}
        className="p-[12px] rounded-[16px]"
        style={{ color: 'var(--text-caption)' }}
      >
        <X size={20} />
      </button>
    </div>
  }
  footer={
    <div className="sticky bottom-0 flex justify-end px-[40px] py-[16px]"
      style={{ backgroundColor: 'var(--surface-neutral-default)' }}
    >
      <button
        className="flex items-center gap-[8px] px-[16px] py-[10px] rounded-[12px] border border-solid
          text-[14px] font-semibold leading-[20px]"
        style={{
          borderColor: 'var(--border-default)',
          color: 'var(--text-neutral-action)',
          backgroundColor: 'var(--surface-neutral-default)',
        }}
        onClick={() => { /* TODO: partager galerie */ }}
      >
        Partager la galerie
        <Send size={16} />
      </button>
    </div>
  }
>
  <div className="px-[40px] py-[20px]">
    <Diaporama
      images={photos.map(p => ({ id: p.id, url: p.storagePath, alt: p.fileName }))}
      onDelete={(image, index) => { /* TODO: supprimer photo */ }}
      mainImageMaxHeight={500}
    />
  </div>
</Sheet>
```

> **Note** : padding `px-[40px]` car c'est une Sheet Wide (pas 20px comme narrow).

#### D. Imports à ajouter

Vérifier et ajouter si manquants :
```typescript
import { Download, Send, Trash2 } from 'lucide-react';
import { Sheet } from '@real-estate/ui/sheet';
import { Diaporama } from '@real-estate/ui/diaporama';
```

> `Sheet` est peut-être déjà importé pour les autres sheets. Vérifier et NE PAS dupliquer.
> `X` est probablement déjà importé de lucide-react.

---

## Sujet 3 — Cover Photo dans ListBien (PropertyListView.tsx)

### Problème
Le fetch dans `PropertyListView` ne requête que la table `Property`. Le champ `imageUrl` dans `PropertyDisplayItem` n'est jamais rempli → `ListBien` affiche le fallback icône Home.

### Fix — Fetch cover photos + merge

#### A. Après le fetch principal des properties, ajouter un second fetch

```typescript
// Fetch cover photos pour chaque property
const propertyIds = (data ?? []).map((p: any) => p.id);
const { data: coverPhotos } = await supabase
  .from('PropertyMedia')
  .select('propertyId, storagePath')
  .in('propertyId', propertyIds)
  .eq('mediaType', 'photo')
  .eq('isCover', true);

// Fallback : si pas de isCover, prendre sortOrder = 1
const { data: firstPhotos } = await supabase
  .from('PropertyMedia')
  .select('propertyId, storagePath')
  .in('propertyId', propertyIds)
  .eq('mediaType', 'photo')
  .eq('sortOrder', 1);

// Construire un map propertyId → imageUrl (cover en priorité, sinon première photo)
const coverMap = new Map<string, string>();
(firstPhotos ?? []).forEach((p: any) => {
  if (!coverMap.has(p.propertyId)) coverMap.set(p.propertyId, p.storagePath);
});
(coverPhotos ?? []).forEach((p: any) => {
  coverMap.set(p.propertyId, p.storagePath); // écrase avec la cover si disponible
});
```

#### B. Dans le mapping enriched, ajouter imageUrl

```typescript
const displayItem: PropertyDisplayItem = {
  id: p.id,
  city: p.addressCity ?? '—',
  propertyType: PROPERTY_TYPE_LABELS[p.type as keyof typeof PROPERTY_TYPE_LABELS] ?? p.type,
  surface: p.livingAreaSqm ? `${p.livingAreaSqm}m²` : '—',
  dpeGrade: p.dpeEnergyClass ?? undefined,
  operationType,
  price: formatPrice(p.desiredSellingPrice ?? p.estimatedMarketValue),
  hasCarnet: p.hasMaintenanceLog ?? false,
  status: p.status,
  imageUrl: coverMap.get(p.id),  // ← AJOUT
};
```

---

## Contraintes

- **Diaporama.tsx** : nouveau composant DS dans `packages/ui/src/components/` — autonome, réutilisable
- **package.json** : ajouter l'export `"./diaporama"` — le composant doit être importable via `@real-estate/ui/diaporama`
- **PropertyDetailView.tsx** : ajouter UNIQUEMENT la Sheet Galerie Wide + state + imports — NE PAS modifier les autres sections/sheets
- **PropertyListView.tsx** : ajouter UNIQUEMENT le fetch cover photos + passage imageUrl — NE PAS modifier le reste
- Tokens CSS variables pour tout le styling (pas de couleurs Tailwind hardcodées)
- Les callbacks TODO sont acceptés (import, suppression, partage seront implémentés plus tard)
- `Sheet` est peut-être déjà importé — vérifier et NE PAS dupliquer
- Le composant `Diaporama` gère son propre état de sélection interne

---

## Vérification

1. `cd /sessions/magical-amazing-noether/real-estate-project/apps/agent-app && npx next build`
2. Vérifier que `Diaporama.tsx` existe dans `packages/ui/src/components/`
3. Vérifier que l'export `"./diaporama"` existe dans `packages/ui/package.json`
4. Vérifier que le clic sur "Galerie" ouvre une Sheet **Wide** (pas Narrow !)
5. Vérifier que la Sheet contient le composant `Diaporama` (image principale + thumbnails)
6. Vérifier que le header affiche "Galerie (N)" + "Importer une photo" + X
7. Vérifier que le footer affiche "Partager la galerie"
8. Vérifier que les ListBien/CardBien affichent la photo cover

---

## Dev-report

Créer `docs/scratchpad/dev-report-P09_SheetGalerie_CoverListBien_20260415.md`
