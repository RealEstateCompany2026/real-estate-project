# Brief dev-agent — Seed Photos + Empty State Gallery (P09)

**Date** : 15 avril 2026
**Fichiers cibles** :
- Supabase — table `PropertyMedia` (seed data via `execute_sql`)
- `packages/ui/src/components/Gallery.tsx` (empty state UX)
- `apps/agent-app/src/components/properties/PropertyDetailView.tsx` (passage du callback)
**Complexité** : Faible — 1 seed SQL + modification empty state composant Gallery DS

---

## Contexte

La Gallery de la Fiche Bien est vide : la table `PropertyMedia` contient 0 rows. Le composant Gallery DS affiche un fallback minimal (icône grise sur fond neutre) quand `images.length === 0`. On veut :
1. Seeder 5 photos par bien (99 biens = 495 photos)
2. Améliorer le fallback empty state avec un message + bouton d'action

---

## Volet 1 — Seed PropertyMedia (SQL uniquement)

### Schéma PropertyMedia
```
id (text, NOT NULL)
propertyId (text, NOT NULL)
organizationId (text, nullable)
mediaType (text, NOT NULL) — valeur 'photo'
storagePath (text, NOT NULL) — URL de l'image
fileName (text, NOT NULL)
fileSizeBytes (integer, nullable)
mimeType (text, nullable)
sortOrder (integer, nullable)
isCover (boolean, nullable)
uploadedBy (text, nullable)
createdAt (timestamptz, nullable)
updatedAt (timestamptz, nullable)
```

### URLs images placeholder

Utiliser 5 photos d'intérieurs immobiliers via picsum.photos (images stables par seed ID) :
```
https://picsum.photos/seed/realestate1/800/600
https://picsum.photos/seed/realestate2/800/600
https://picsum.photos/seed/realestate3/800/600
https://picsum.photos/seed/realestate4/800/600
https://picsum.photos/seed/realestate5/800/600
```

### Seed SQL

```sql
INSERT INTO "PropertyMedia" (
  id, "propertyId", "mediaType", "storagePath", "fileName",
  "fileSizeBytes", "mimeType", "sortOrder", "isCover", "createdAt", "updatedAt"
)
SELECT
  'pm-' || rn || '-' || seq.n,
  p.id,
  'photo',
  'https://picsum.photos/seed/realestate' || seq.n || '/800/600',
  'photo_' || seq.n || '.jpg',
  250000 + (seq.n * 50000),
  'image/jpeg',
  seq.n,
  CASE WHEN seq.n = 1 THEN true ELSE false END,
  NOW() - (seq.n * 2 || ' days')::interval,
  NOW()
FROM (SELECT id, ROW_NUMBER() OVER (ORDER BY id) as rn FROM "Property") p
CROSS JOIN generate_series(1, 5) AS seq(n);
```

> **Note** : `isCover = true` uniquement pour la première photo (sortOrder = 1).
> IDs format : `pm-{rn}-{seq}` (ex: `pm-1-1` à `pm-99-5`). Courts et uniques.

### Vérification
```sql
SELECT count(DISTINCT "propertyId") as properties, count(*) as total FROM "PropertyMedia";
```
Attendu : 99 properties, 495 photos.

---

## Volet 2 — Empty State Gallery (CODE)

### Fichier : `packages/ui/src/components/Gallery.tsx`

#### A. Ajouter la prop `onAddPhotos`

Dans l'interface `GalleryProps` (ligne 25) :
```typescript
export interface GalleryProps {
  images: Array<{ url: string; alt?: string }>;
  onGalleryClick?: () => void;
  /** Callback quand l'utilisateur veut ajouter des photos (affiché dans l'empty state) */
  onAddPhotos?: () => void;
  galleryLabel?: string;
  height?: number;
  className?: string;
}
```

Ajouter `onAddPhotos` dans le destructuring du composant.

#### B. Remplacer le fallback empty state (lignes 49-63)

Remplacer le bloc `if (images.length === 0)` par :

```tsx
if (images.length === 0) {
  return (
    <div
      className={`relative w-full rounded-[16px] overflow-hidden
        flex flex-col items-center justify-center gap-[12px] ${className}`.trim()}
      style={{
        height: `${height}px`,
        backgroundColor: "var(--surface-neutral-action)",
      }}
    >
      <ImageIcon size={40} style={{ color: "var(--text-disabled)" }} />
      <p
        className="text-[14px] leading-[20px] font-medium"
        style={{ color: "var(--text-subtle)" }}
      >
        Aucune photo pour ce bien
      </p>
      {onAddPhotos && (
        <button
          onClick={onAddPhotos}
          className="mt-[4px] px-[16px] py-[8px] rounded-[12px] border border-solid
            text-[14px] font-semibold leading-[20px] transition-colors"
          style={{
            backgroundColor: "var(--surface-neutral-default)",
            borderColor: "var(--border-default)",
            color: "var(--text-neutral-action)",
          }}
        >
          Ajouter des photos
        </button>
      )}
    </div>
  );
}
```

> **Notes UX** :
> - Le rectangle garde la même hauteur (277px par défaut) pour éviter un saut de layout
> - `rounded-[16px]` sur les 4 coins (au lieu de seulement tl+bl) car il n'y a pas d'image à aligner
> - Le bouton utilise les mêmes tokens DS que le bouton "Galerie" (surface-neutral-default, text-neutral-action)
> - Le bouton n'apparaît que si `onAddPhotos` est fourni (optionnel)

### Fichier : `apps/agent-app/src/components/properties/PropertyDetailView.tsx`

#### C. Passer le callback `onAddPhotos`

Modifier l'appel Gallery (vers ligne 795) :

```tsx
<Gallery
  images={photos.slice(0, 3).map(p => ({ url: p.storagePath, alt: p.fileName }))}
  onGalleryClick={() => { /* TODO: Sheet wide galerie complète */ }}
  onAddPhotos={() => { /* TODO: Sheet upload photos */ }}
/>
```

---

## Contraintes

- **Seed** : SQL uniquement via `execute_sql`
- **Gallery.tsx** : modifier UNIQUEMENT le fallback empty state + ajouter la prop — NE PAS toucher au rendu normal (images)
- **PropertyDetailView.tsx** : modifier UNIQUEMENT l'appel `<Gallery />` — NE PAS toucher aux autres sections
- Utiliser les tokens CSS variables du DS — PAS de couleurs Tailwind hardcodées
- Le bouton "Ajouter des photos" a un callback TODO pour le moment (pas d'upload implémenté)

---

## Vérification

1. Exécuter le seed SQL et vérifier le count (99 properties × 5 = 495)
2. `cd /sessions/magical-amazing-noether/real-estate-project/apps/agent-app && npx next build`
3. Vérifier que le composant Gallery a bien la prop `onAddPhotos` optionnelle
4. Vérifier que l'empty state affiche : icône + texte + bouton
5. Vérifier que le rendu normal (avec images) n'est PAS modifié

---

## Dev-report

Créer `docs/scratchpad/dev-report-P09_GallerySeedEmptyState_20260415.md`
