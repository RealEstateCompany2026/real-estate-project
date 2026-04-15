# Brief dev-agent — Seed Listings + Sheet Annonce Wide + Workflow Badges (P09)

**Date** : 15 avril 2026
**Fichiers cibles** :
- Supabase — table `Listing` (seed data via `execute_sql`)
- `apps/agent-app/src/components/properties/PropertyDetailView.tsx` (fetch enrichi + Sheet Annonce Wide + workflow badges)
**Complexité** : Élevée — seed SQL + fetch enrichi + Sheet Wide complète avec sections multiples
**Référence Figma** : Screenshot fourni par Damien (Sheet Annonce Wide)

---

## Contexte

Trois livrables :
1. Seeder la table `Listing` (actuellement vide) — 1 listing par property, mix de statuts
2. Enrichir le fetch Listing pour récupérer toutes les colonnes nécessaires
3. Créer la Sheet Annonce Wide avec toutes les sections existantes + mapper les workflow badges

---

## Sujet 1 — Seed Listing (SQL uniquement)

### Schéma Listing
```
id (text, NOT NULL)
propertyId (text, NOT NULL)
agentId (text, nullable)
organizationId (text, nullable)
title (varchar, nullable)
description (text, nullable)
descriptionSource (enum DescriptionSource: MANUAL, AI_GENERATED, AI_EDITED)
status (enum ListingWorkflowStatus: DRAFT, REVIEW, PUBLISHED, PAUSED, ARCHIVED — NOT NULL)
alurCompliant (boolean, nullable)
alurChecklist (jsonb, nullable)
slug (varchar, nullable)
publishedAt (timestamptz, nullable)
contactFormEnabled (boolean, nullable)
viewCount (integer, nullable)
leadCount (integer, nullable)
createdAt (timestamptz, NOT NULL)
updatedAt (timestamptz, NOT NULL)
```

### Seed SQL

```sql
INSERT INTO "Listing" (
  id, "propertyId", title, description, "descriptionSource", status,
  "alurCompliant", slug, "publishedAt", "contactFormEnabled",
  "viewCount", "leadCount", "createdAt", "updatedAt"
)
SELECT
  'lst-' || rn,
  p.id,
  -- Titre : type + ville
  COALESCE(p.type, 'APPARTEMENT') || ' — ' || COALESCE(p."addressCity", 'Ville'),
  -- Description : texte réaliste
  CASE (rn % 5)
    WHEN 0 THEN 'Magnifique bien situé en plein cœur de ' || COALESCE(p."addressCity", 'la ville') || '. Lumineux et calme, il offre de belles prestations avec des espaces de vie généreux. Idéal pour une famille ou un investisseur. Proche transports et commerces.'
    WHEN 1 THEN 'Appartement de standing dans un immeuble bien entretenu. Exposition agréable, cuisine équipée, rangements optimisés. Quartier recherché avec toutes les commodités à proximité. À visiter rapidement.'
    WHEN 2 THEN 'Bien de caractère alliant charme de l''ancien et confort moderne. Parquet, moulures, hauteur sous plafond. Situé dans une rue calme à deux pas des transports en commun. Cave et local vélo inclus.'
    WHEN 3 THEN 'Logement fonctionnel et lumineux, parfait pour un premier achat. Balcon avec vue dégagée, pas de vis-à-vis. Résidence sécurisée avec gardien. Faibles charges de copropriété.'
    ELSE 'Rare sur le marché : bien traversant avec double exposition. Grandes baies vitrées, terrasse plein sud. Stationnement en sous-sol. DPE favorable, chauffage individuel. Excellent rapport qualité/prix.'
  END,
  -- DescriptionSource : mix
  CASE (rn % 3)
    WHEN 0 THEN 'MANUAL'::"DescriptionSource"
    WHEN 1 THEN 'AI_GENERATED'::"DescriptionSource"
    ELSE 'AI_EDITED'::"DescriptionSource"
  END,
  -- Status : ~30% DRAFT, ~20% REVIEW, ~40% PUBLISHED, ~10% PAUSED
  CASE
    WHEN rn % 10 <= 2 THEN 'DRAFT'::"ListingWorkflowStatus"
    WHEN rn % 10 <= 4 THEN 'REVIEW'::"ListingWorkflowStatus"
    WHEN rn % 10 <= 8 THEN 'PUBLISHED'::"ListingWorkflowStatus"
    ELSE 'PAUSED'::"ListingWorkflowStatus"
  END,
  -- alurCompliant : true pour PUBLISHED/REVIEW
  CASE WHEN rn % 10 > 2 THEN true ELSE false END,
  -- slug : placeholder
  'annonce-' || rn,
  -- publishedAt : seulement pour PUBLISHED et PAUSED
  CASE WHEN rn % 10 > 4 THEN NOW() - ((rn % 30) || ' days')::interval ELSE NULL END,
  -- contactFormEnabled
  CASE WHEN rn % 10 > 4 THEN true ELSE false END,
  -- viewCount : random pour PUBLISHED
  CASE WHEN rn % 10 > 4 THEN (rn * 7 + 23) % 500 ELSE 0 END,
  -- leadCount : random pour PUBLISHED
  CASE WHEN rn % 10 > 4 THEN (rn * 3 + 5) % 30 ELSE 0 END,
  NOW() - ((rn + 10) || ' days')::interval,
  NOW()
FROM (SELECT id, type, "addressCity", ROW_NUMBER() OVER (ORDER BY id) as rn FROM "Property") p;
```

### Vérification
```sql
SELECT status, count(*) FROM "Listing" GROUP BY status ORDER BY status;
```
Attendu : ~99 listings, mix DRAFT/REVIEW/PUBLISHED/PAUSED.

---

## Sujet 2 — Fetch Listing enrichi + Workflow Badges

### A. Modifier le fetch Listing (ligne ~421)

Remplacer :
```typescript
supabase.from('Listing').select('id, status').eq('propertyId', propertyId),
```
Par :
```typescript
supabase.from('Listing').select('id, status, title, description, descriptionSource, alurCompliant, slug, publishedAt, contactFormEnabled, viewCount, leadCount').eq('propertyId', propertyId),
```

### B. Enrichir l'interface ListingRow (lignes ~89-95)

Remplacer :
```typescript
interface ListingRow {
  id: string;
  status: string | null;
  editionStatus?: string | null;
  revisionStatus?: string | null;
  publicationStatus?: string | null;
}
```
Par :
```typescript
interface ListingRow {
  id: string;
  status: string | null;
  title: string | null;
  description: string | null;
  descriptionSource: string | null;
  alurCompliant: boolean | null;
  slug: string | null;
  publishedAt: string | null;
  contactFormEnabled: boolean | null;
  viewCount: number | null;
  leadCount: number | null;
}
```

### C. Ajouter la fonction helper workflow badges

```typescript
/** Mappe un ListingWorkflowStatus vers les 3 badges de workflow */
function listingStatusToWorkflow(status: string | null): { edition: 'disabled' | 'warning' | 'success'; revision: 'disabled' | 'warning' | 'success'; publication: 'disabled' | 'warning' | 'success' } {
  switch (status) {
    case 'DRAFT':
      return { edition: 'warning', revision: 'disabled', publication: 'disabled' };
    case 'REVIEW':
      return { edition: 'success', revision: 'warning', publication: 'disabled' };
    case 'PUBLISHED':
      return { edition: 'success', revision: 'success', publication: 'success' };
    case 'PAUSED':
      return { edition: 'success', revision: 'success', publication: 'warning' };
    case 'ARCHIVED':
      return { edition: 'disabled', revision: 'disabled', publication: 'disabled' };
    default:
      return { edition: 'disabled', revision: 'disabled', publication: 'disabled' };
  }
}
```

### D. Mettre à jour le rendu ListAnnonce (lignes ~1171-1185)

Remplacer le workflow hardcodé `disabled` par l'appel à la fonction :
```tsx
{listings.map((l) => (
  <ListAnnonce
    key={l.id}
    city={property.addressCity ?? '—'}
    propertyType={PROPERTY_TYPE_LABELS[property.type]}
    surface={property.livingAreaSqm ? `${property.livingAreaSqm}m²` : '—'}
    dpeGrade={property.dpeEnergyClass ?? undefined}
    ownerName={ownerName}
    workflow={listingStatusToWorkflow(l.status)}
    aiSuggestions={0}
    onView={() => setAnnonceSheetListing(l)}
  />
))}
```

---

## Sujet 3 — Sheet Annonce Wide

### Nouveaux states à ajouter

```typescript
const [annonceSheetListing, setAnnonceSheetListing] = useState<ListingRow | null>(null);
```

> La sheet est ouverte quand `annonceSheetListing !== null`. Fermée en settant `null`.

### Imports à ajouter

Vérifier et ajouter si manquants :
```typescript
import { Switch } from '@real-estate/ui/switch';
import { AppBarAnnonce } from '@real-estate/ui/app-bar-annonce';
import { Diaporama } from '@real-estate/ui/diaporama';
import { Copy, Globe } from 'lucide-react';
```

> `AppBarAnnonce`, `Diaporama`, `Sheet`, `Badge`, `Button` sont probablement déjà importés. Vérifier et NE PAS dupliquer.
> Ajouter `Copy` et `Globe` aux imports lucide-react existants si manquants.

### Sheet JSX — À placer après la section Annonce (après `</section>` du bloc 5)

```tsx
{/* Sheet Annonce Wide */}
<Sheet
  isOpen={annonceSheetListing !== null}
  onClose={() => setAnnonceSheetListing(null)}
  width="wide"
  customHeader={
    <div className="px-[40px] pt-[51px] pb-[20px]">
      {/* Row 1 : Titre + badges workflow + Switch publier + Close */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[16px]">
          <h4
            className="text-[28px] font-bold leading-[34px] tracking-[0.28px]"
            style={{ color: 'var(--text-headings)' }}
          >
            Annonce
          </h4>
          {annonceSheetListing && (
            <>
              <Badge variant={listingStatusToWorkflow(annonceSheetListing.status).edition}>ÉDITION</Badge>
              <Badge variant={listingStatusToWorkflow(annonceSheetListing.status).revision}>RÉVISION</Badge>
              <Badge variant={listingStatusToWorkflow(annonceSheetListing.status).publication}>PUBLICATION</Badge>
            </>
          )}
        </div>
        <div className="flex items-center gap-[16px]">
          {/* Switch Publier */}
          <div className="flex items-center gap-[8px]">
            <span
              className="text-[14px] font-semibold leading-[20px]"
              style={{ color: 'var(--text-caption)' }}
            >
              Publier
            </span>
            <Switch
              checked={annonceSheetListing?.status === 'PUBLISHED'}
              onChange={() => { /* TODO: toggle publication status */ }}
            />
          </div>
          <button
            onClick={() => setAnnonceSheetListing(null)}
            className="p-[12px] rounded-[16px]"
            style={{ color: 'var(--text-caption)' }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Row 2 : AppBarAnnonce — infos du bien */}
      <AppBarAnnonce
        type={PROPERTY_TYPE_LABELS[property.type]}
        surface={property.livingAreaSqm ? `${property.livingAreaSqm} m²` : '—'}
        annee={property.constructionYear ? String(property.constructionYear) : '—'}
        ville={property.addressCity ?? '—'}
        prix={formatPrice(property.desiredSellingPrice ?? property.estimatedMarketValue)}
        prixM2={
          property.livingAreaSqm && (property.desiredSellingPrice || property.estimatedMarketValue)
            ? `${formatPrice(Math.round(Number(property.desiredSellingPrice || property.estimatedMarketValue) / Number(property.livingAreaSqm)))} /m²`
            : '—'
        }
      />
    </div>
  }
  footer={
    <div
      className="sticky bottom-0 flex justify-end px-[40px] py-[16px] pb-[100px]"
      style={{ backgroundColor: 'var(--surface-neutral-default)' }}
    >
      <Button
        variant="outline"
        onClick={() => { /* TODO: partager annonce */ }}
      >
        Partager l'annonce
        <Send size={16} />
      </Button>
    </div>
  }
>
  <div className="px-[40px] py-[20px] flex flex-col gap-[40px]">

    {/* Section 1 — Diaporama */}
    <section>
      <Diaporama
        images={photos.map(p => ({ id: p.id, url: p.storagePath, alt: p.fileName }))}
        mainImageMaxHeight={400}
      />
    </section>

    {/* Section 2 — URL de l'annonce */}
    <section>
      <h5
        className="text-[20px] font-bold leading-[24px] tracking-[0.2px] mb-[16px]"
        style={{ color: 'var(--text-headings)' }}
      >
        URL de l'annonce
      </h5>
      <div
        className="flex items-center justify-between px-[16px] py-[12px] rounded-[12px] border"
        style={{
          borderColor: 'var(--border-default)',
          backgroundColor: 'var(--surface-neutral-action)',
        }}
      >
        <div className="flex items-center gap-[8px]">
          <Globe size={16} style={{ color: 'var(--icon-neutral-default)' }} />
          <span
            className="text-[14px] leading-[20px]"
            style={{ color: 'var(--text-body)' }}
          >
            realagent.fr/annonce/{annonceSheetListing?.slug ?? annonceSheetListing?.id ?? ''}
          </span>
        </div>
        <button
          className="p-[8px] rounded-[8px] transition-colors"
          style={{ color: 'var(--text-neutral-action)' }}
          onClick={() => {
            navigator.clipboard.writeText(
              `realagent.fr/annonce/${annonceSheetListing?.slug ?? annonceSheetListing?.id ?? ''}`
            );
          }}
          aria-label="Copier l'URL"
        >
          <Copy size={16} />
        </button>
      </div>
    </section>

    {/* Section 3 — Description */}
    <section>
      <div className="flex items-center justify-between mb-[16px]">
        <h5
          className="text-[20px] font-bold leading-[24px] tracking-[0.2px]"
          style={{ color: 'var(--text-headings)' }}
        >
          Description
        </h5>
        {annonceSheetListing?.descriptionSource && (
          <Badge variant={
            annonceSheetListing.descriptionSource === 'AI_GENERATED' ? 'information'
            : annonceSheetListing.descriptionSource === 'AI_EDITED' ? 'warning'
            : 'default'
          }>
            {annonceSheetListing.descriptionSource === 'AI_GENERATED' ? 'IA' 
             : annonceSheetListing.descriptionSource === 'AI_EDITED' ? 'IA éditée' 
             : 'Manuelle'}
          </Badge>
        )}
      </div>
      <p
        className="text-[14px] leading-[22px]"
        style={{ color: 'var(--text-body)' }}
      >
        {annonceSheetListing?.description ?? 'Aucune description'}
      </p>
    </section>

    {/* Section 4 — Caractéristiques */}
    <section>
      <h5
        className="text-[20px] font-bold leading-[24px] tracking-[0.2px] mb-[16px]"
        style={{ color: 'var(--text-headings)' }}
      >
        Caractéristiques
      </h5>
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[4px]">
        <ProfileField label="Type" value={PROPERTY_TYPE_LABELS[property.type]} />
        <ProfileField label="État" value={property.condition ? PROPERTY_CONDITION_LABELS[property.condition] : null} />
        <ProfileField label="Surface" value={property.livingAreaSqm ? `${property.livingAreaSqm} m²` : null} />
        <ProfileField label="Terrain" value={property.landAreaSqm ? `${property.landAreaSqm} m²` : null} />
        <ProfileField label="Pièces" value={property.numberOfRooms ? String(property.numberOfRooms) : null} />
        <ProfileField label="Chambres" value={property.bedroomCount ? String(property.bedroomCount) : null} />
        <ProfileField label="SDB" value={property.bathroomCount ? String(property.bathroomCount) : null} />
        <ProfileField label="WC" value={property.toiletCount ? String(property.toiletCount) : null} />
        <ProfileField label="Cuisine" value={property.kitchenType ? KITCHEN_TYPE_LABELS[property.kitchenType] : null} />
        <ProfileField label="Parking" value={property.parkingType ? PARKING_TYPE_LABELS[property.parkingType] : null} />
        <ProfileField label="Étage" value={property.floorLevel ? `${property.floorLevel}/${property.numberOfFloors ?? '?'}` : null} />
        <ProfileField label="Exposition" value={property.mainExposure ?? null} />
        <ProfileField label="Ascenseur" value={property.hasElevator != null ? (property.hasElevator ? 'Oui' : 'Non') : null} />
        <ProfileField label="Piscine" value={property.hasPool != null ? (property.hasPool ? 'Oui' : 'Non') : null} />
        <ProfileField label="Terrasse" value={property.terraceAreaSqm ? `${property.terraceAreaSqm} m²` : null} />
        <ProfileField label="Balcon" value={property.balconyAreaSqm ? `${property.balconyAreaSqm} m²` : null} />
        <ProfileField label="Jardin" value={property.gardenAreaSqm ? `${property.gardenAreaSqm} m²` : null} />
        <ProfileField label="Cave" value={property.basementAreaSqm ? `${property.basementAreaSqm} m²` : null} />
      </div>
    </section>

    {/* Section 5 — Énergie */}
    <section>
      <h5
        className="text-[20px] font-bold leading-[24px] tracking-[0.2px] mb-[16px]"
        style={{ color: 'var(--text-headings)' }}
      >
        Énergie
      </h5>
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[4px]">
        <ProfileField label="DPE énergie" value={property.dpeEnergyClass ?? null} />
        <ProfileField label="DPE GES" value={property.dpeGasEmissionClass ?? null} />
        <ProfileField label="Chauffage" value={property.heatingType ? HEATING_TYPE_LABELS[property.heatingType] : null} />
        <ProfileField label="Eau chaude" value={property.hotWaterSystem ? HOT_WATER_SYSTEM_LABELS[property.hotWaterSystem] : null} />
        <ProfileField label="Conso kWh" value={property.dpeEnergyKwh ? `${property.dpeEnergyKwh} kWh/m²/an` : null} />
        <ProfileField label="Émission CO₂" value={property.dpeGasGco2 ? `${property.dpeGasGco2} gCO₂/m²/an` : null} />
      </div>
    </section>

    {/* Section 6 — Copropriété */}
    {coOwnership && (
      <section>
        <h5
          className="text-[20px] font-bold leading-[24px] tracking-[0.2px] mb-[16px]"
          style={{ color: 'var(--text-headings)' }}
        >
          Copropriété
        </h5>
        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[4px]">
          <ProfileField label="Type" value={coOwnership.type} />
          <ProfileField label="Nb lots" value={coOwnership.numberOfLots ? String(coOwnership.numberOfLots) : null} />
          <ProfileField label="N° lot" value={coOwnership.lotNumber} />
          <ProfileField label="Syndic" value={coOwnership.syndicName} />
          <ProfileField label="Charges/mois" value={coOwnership.monthlyCharges ? `${coOwnership.monthlyCharges} €` : null} />
          <ProfileField label="Frais annuels" value={coOwnership.estimatedAnnualFees ? `${coOwnership.estimatedAnnualFees} €` : null} />
          <ProfileField label="Travaux prévus" value={coOwnership.plannedWorkAmount ? `${coOwnership.plannedWorkAmount} €` : null} />
          <ProfileField label="Procédures" value={
            coOwnership.hasCurrentLegalProcedures ? 'En cours' 
            : coOwnership.hasPlannedLegalProcedures ? 'Prévues' 
            : 'Aucune'
          } />
        </div>
      </section>
    )}

    {/* Section 7 — Statistiques (si publiée) */}
    {annonceSheetListing?.status === 'PUBLISHED' && (
      <section>
        <h5
          className="text-[20px] font-bold leading-[24px] tracking-[0.2px] mb-[16px]"
          style={{ color: 'var(--text-headings)' }}
        >
          Statistiques
        </h5>
        <div className="flex gap-[24px]">
          <div className="flex flex-col items-center gap-[4px] px-[20px] py-[12px] rounded-[12px]"
            style={{ backgroundColor: 'var(--surface-neutral-action)' }}
          >
            <span className="text-[24px] font-bold" style={{ color: 'var(--text-headings)' }}>
              {annonceSheetListing.viewCount ?? 0}
            </span>
            <span className="text-[12px]" style={{ color: 'var(--text-caption)' }}>
              Vues
            </span>
          </div>
          <div className="flex flex-col items-center gap-[4px] px-[20px] py-[12px] rounded-[12px]"
            style={{ backgroundColor: 'var(--surface-neutral-action)' }}
          >
            <span className="text-[24px] font-bold" style={{ color: 'var(--text-headings)' }}>
              {annonceSheetListing.leadCount ?? 0}
            </span>
            <span className="text-[12px]" style={{ color: 'var(--text-caption)' }}>
              Contacts
            </span>
          </div>
        </div>
      </section>
    )}

  </div>
</Sheet>
```

---

## Contraintes

- **Seed SQL** : via `execute_sql` uniquement
- **PropertyDetailView.tsx** : ajouter UNIQUEMENT la Sheet Annonce + state + imports + workflow helper — NE PAS modifier les autres sections/sheets existantes
- **ListingRow** : enrichir l'interface + le fetch — NE PAS créer de nouvelle interface
- **Workflow badges** : DRAFT→edition warning / REVIEW→revision warning / PUBLISHED→all success / PAUSED→publication warning / ARCHIVED→all disabled
- `Sheet` et `AppBarAnnonce` et `Diaporama` sont déjà importés — NE PAS dupliquer
- Tokens CSS variables pour tout le styling (pas de couleurs Tailwind hardcodées)
- Les callbacks TODO sont acceptés (toggle publication, partage seront implémentés plus tard)
- Sections "Prix dans le quartier" et "Détails du prix" : **NE PAS implémenter** — seront ajoutées dans un sprint ultérieur
- URL annonce : placeholder `realagent.fr/annonce/{slug}` — pas de vrai domaine
- Footer avec `pb-[100px]` pour le clearance du bouton IA sticky
- `Send` (lucide) déjà importé — vérifier avant d'ajouter

---

## Vérification

1. Exécuter le seed SQL et vérifier : `SELECT status, count(*) FROM "Listing" GROUP BY status`
2. `cd /sessions/magical-amazing-noether/real-estate-project/apps/agent-app && npx next build`
3. Vérifier que les `ListAnnonce` affichent les 3 badges avec les bonnes couleurs selon le statut
4. Vérifier que le clic sur "Voir" ouvre la Sheet Annonce **Wide**
5. Vérifier que le header contient : titre "Annonce" + 3 badges + Switch "Publier" + X
6. Vérifier que `AppBarAnnonce` affiche type, surface, année, ville, prix, prix/m²
7. Vérifier que le Diaporama affiche les photos du bien
8. Vérifier que l'URL placeholder est affichable et copiable
9. Vérifier que la Description affiche le texte + badge source (IA/Manuelle)
10. Vérifier que Caractéristiques, Énergie, Copropriété (si applicable) sont remplis avec les données Property
11. Vérifier que les Statistiques (vues + contacts) apparaissent uniquement pour les annonces PUBLISHED

---

## Dev-report

Créer `docs/scratchpad/dev-report-P09_SheetAnnonce_SeedListings_20260415.md`
