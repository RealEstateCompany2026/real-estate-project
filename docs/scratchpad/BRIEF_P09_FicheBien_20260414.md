# Brief dev-agent — Refonte PropertyDetailView (P09 Fiche Bien)

**Date** : 14 avril 2026
**Fichier cible** : `apps/agent-app/src/components/properties/PropertyDetailView.tsx` (branche `main`)
**Complexité** : Haute — refonte complète, le pattern est identique à ClientDetailView
**Pattern de référence** : `apps/agent-app/src/components/clients/ClientDetailView.tsx`

---

## Objectif

Remplacer la PropertyDetailView actuelle (AccordionSection + SectionNav + StatusBadge + CompletionGauge + inline editing) par les composants DS : AppBarFicheBien, Gallery, AppBarAnnonce, AppBarBienAncres, sections en scroll continu, Sheets modales, IconButtonMega.

La structure doit suivre le **même pattern** que ClientDetailView — même layout sticky, même logique de sections/ancres/Sheets — avec les données Property et les spécificités Bien (Gallery, AppBarAnnonce, Section Caractéristiques, Section Annonce).

---

## Architecture cible

### Header (sticky + gallery + infos + ancres)

```tsx
{/* AppBarFicheBien — sticky top:0, z-30 */}
<div className="sticky top-0 z-30 bg-surface-page">
  <AppBarFicheBien
    bienId={property.internalRef ?? `Bien ${PROPERTY_TYPE_LABELS[property.type]}`}
    transactionType={OPERATION_TYPE_LABELS[property.operationTypes?.[0]] ?? 'VENTE'}
    contactName={ownerName}    // "NOM, Prénom" du client lié
    qualification={kpis.qualification}
    showCarnet={property.hasMaintenanceLog ?? false}
    showMandat={false}  // TODO: à dynamiser
    aiSuggestions={aiSuggestions}
    onBack={() => router.push('/properties')}
  />
</div>

{/* Gallery — 3 photos du bien */}
<Gallery
  images={photos.slice(0, 3).map(p => ({ url: p.storagePath, alt: p.fileName }))}
  onGalleryClick={() => { /* TODO: Sheet wide galerie complète */ }}
/>

{/* AppBarAnnonce — infos clés du bien */}
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

{/* AppBarBienAncres — sticky top:100px, z-20 */}
<div className="sticky top-[100px] z-20 bg-surface-page">
  <AppBarBienAncres onItemClick={handleAnchorClick} />
</div>
```

Note : AppBarBienAncres a déjà 8 items par défaut (galerie, caractéristiques, activités, affaires, annonce, carnet, documents, messages). Pas besoin de passer `items` — les defaults correspondent exactement à nos sections.

---

### Section 1 — Caractéristiques (FIB-02)

Grille 3 colonnes avec les champs principaux du bien, puis bouton "Voir plus" qui expand en place 7 sous-sections.

```tsx
<section ref={setSectionRef('caracteristiques')} id="caracteristiques" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
  <div className="flex items-center justify-between mb-[50px]">
    <div className="flex items-center gap-[4px]">
      <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
        Caractéristiques
      </h3>
      <Badge variant="default">{property.completionScore ?? 0}</Badge>
    </div>
    <Button variant="ghost" onClick={() => setIsCharacteristicsSheetOpen(true)}>
      <Pencil size={16} /> Éditer
    </Button>
  </div>

  {/* Grille 3 colonnes — champs principaux */}
  <div className="grid grid-cols-3 gap-x-[60px] gap-y-[8px] mb-[50px]">
    {/* Colonne 1: Général */}
    <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
      Général
    </p>
    <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
      Surfaces
    </p>
    <p className="col-span-1 text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[16px]">
      Énergie
    </p>

    <ProfileField label="Type" value={PROPERTY_TYPE_LABELS[property.type]} />
    <ProfileField label="Surface hab." value={property.livingAreaSqm ? `${property.livingAreaSqm} m²` : null} />
    <ProfileField label="DPE énergie" value={property.dpeEnergyClass} />

    <ProfileField label="État" value={property.condition ? PROPERTY_CONDITION_LABELS[property.condition] : null} />
    <ProfileField label="Terrain" value={property.landAreaSqm ? `${property.landAreaSqm} m²` : null} />
    <ProfileField label="DPE GES" value={property.dpeGasEmissionClass} />

    <ProfileField label="Pièces" value={property.numberOfRooms?.toString()} />
    <ProfileField label="Terrasse" value={property.terraceAreaSqm ? `${property.terraceAreaSqm} m²` : null} />
    <ProfileField label="Énergie kWh" value={property.dpeEnergyKwh?.toString()} />

    <ProfileField label="Chambres" value={property.bedroomCount?.toString()} />
    <ProfileField label="Balcon" value={property.balconyAreaSqm ? `${property.balconyAreaSqm} m²` : null} />
    <ProfileField label="GES gCO₂" value={property.dpeGasGco2?.toString()} />

    <ProfileField label="SDB" value={property.bathroomCount?.toString()} />
    <ProfileField label="Jardin" value={property.gardenAreaSqm ? `${property.gardenAreaSqm} m²` : null} />
    <ProfileField label="Chauffage" value={property.heatingType} />

    <ProfileField label="Étage" value={property.floorLevel?.toString()} />
    <div />
    <ProfileField label="Exposition" value={property.exposures?.join(', ') ?? property.mainExposure} />

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
```

---

### Section 2 — Activités (FIB-03) — Pattern IDENTIQUE à ClientDetailView

Même structure que ClientDetailView bloc 3 (Activités) :
- Header : titre + Badge count + chips filtre (Tout, Qualification, Engagement, Conversion) + bouton "Voir tout"
- 4 CardLog en preview
- Sheet narrow pour la liste complète
- **Seul changement** : la query Event filtre par `propertyId` au lieu de `clientId`

```tsx
// Dans la query de chargement :
const { data: eventsData } = await supabase
  .from('Event')
  .select('id, type, status, title, description, eventDate, agentId, createdAt, User:agentId(name)')
  .eq('propertyId', propertyId)  // ← au lieu de clientId
  .order('eventDate', { ascending: false })
  .limit(100);
```

Réutiliser exactement les mêmes helpers que ClientDetailView :
- `eventTypeToCategory()` 
- `getActivityBadgeVariant()`
- `eventStatusToBadgeVariant()`

---

### Section 3 — Affaires (FIB-04) — Stand-by

Badge count uniquement (identique à ClientDetailView bloc 4) :

```tsx
<section ref={setSectionRef('affaires')} id="affaires" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
  <div className="flex items-center gap-[4px] mb-[50px]">
    <h3 className="...">Affaires</h3>
    <Badge variant="default">{dealsCount}</Badge>
  </div>
</section>
```

Query: `supabase.from('Deal').select('id').eq('propertyId', propertyId)`

---

### Section 4 — Annonce (FIB-05)

ListAnnonce avec workflow 3 badges (édition/révision/publication) + bouton "Voir" :

```tsx
<section ref={setSectionRef('annonce')} id="annonce" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
  <div className="flex items-center gap-[4px] mb-[50px]">
    <h3>Annonce</h3>
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
          edition: l.editionStatus ?? 'disabled',
          revision: l.revisionStatus ?? 'disabled',
          publication: l.publicationStatus ?? 'disabled',
        }}
        aiSuggestions={0}
        onView={() => { /* TODO: Sheet wide annonce */ }}
      />
    ))}
  </div>
</section>
```

Query: `supabase.from('Listing').select('id, status').eq('propertyId', propertyId)`

Note: Si la table Listing n'est pas encore peuplée, afficher la section vide avec count 0. Pour le mock du workflow, mettre les 3 badges à `'disabled'`.

---

### Section 5 — Carnet (FIB-06) — Pattern P08

```tsx
<section ref={setSectionRef('carnet')} id="carnet" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
  <div className="flex items-center gap-[4px] mb-[50px]">
    <h3>Carnet</h3>
    <Badge variant="default">{property.hasMaintenanceLog ? 1 : 0}</Badge>
  </div>
  <ListCarnet
    city={property.addressCity ?? '—'}
    propertyType={PROPERTY_TYPE_LABELS[property.type]}
    surface={property.livingAreaSqm ? `${property.livingAreaSqm}m²` : '—'}
    dpeGrade={property.dpeEnergyClass ?? undefined}
    ownerName={ownerName}
    status={property.hasMaintenanceLog ? 'active' : 'dormant'}
    aiSuggestions={0}
  />
</section>
```

---

### Section 6 — Documents (FIB-07) — Pattern IDENTIQUE à ClientDetailView

Même structure que ClientDetailView bloc 7 (Documents) :
- Badge count + bouton "Ajouter"
- Liste de boutons outline avec label document
- Sheet narrow pour upload (FileUpload)
- **Seul changement** : query filtre par `propertyId`, bucket `property-documents` (ou `client-documents` si mutualisé)

```tsx
// Query
const { data: documentsData } = await supabase
  .from('Document')
  .select('id, title, fileName, type')
  .eq('propertyId', propertyId);  // ← au lieu de clientId
```

Note sur le bucket Storage : utiliser le bucket existant `client-documents` pour l'instant (à renommer plus tard).

---

### Section 7 — Messages (FIB-08) — Pattern IDENTIQUE à ClientDetailView

Même structure que ClientDetailView bloc 8 (Messages) :
- 4 messages preview + "Voir tout" → Sheet wide
- **Seul changement** : query filtre par `propertyId` au lieu de `clientId`

```tsx
const { data: messagesData } = await supabase
  .from('Message')
  .select('id, senderType, body, messageDate, status, attachmentsUrls')
  .eq('propertyId', propertyId)  // ← il est possible que Message n'ait pas de propertyId
  .order('messageDate', { ascending: false })
  .limit(100);
```

**Important** : Vérifier si la table Message a une colonne `propertyId`. Si non, cette section reste vide avec count 0 et un commentaire TODO.

---

### Section 8 — Acquéreurs Appétents (FIB-09) — Stand-by

Badge count uniquement (comme Affaires) :

```tsx
<section ref={setSectionRef('acquereurs')} id="acquereurs" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
  <div className="flex items-center gap-[4px] mb-[50px]">
    <h3>Acquéreurs appétents</h3>
    <Badge variant="default">0</Badge>
  </div>
</section>
```

Note : la section "Acquéreurs" n'a pas d'ancre dans AppBarBienAncres par défaut. C'est normal — elle sera ajoutée en V2.

---

### IconButtonMega (bouton IA flottant)

```tsx
<div className="fixed bottom-8 right-8 z-50">
  <IconButtonMega icon={<Sparkles size={24} />} variant="primary" />
</div>
```

---

### Sheets

#### Sheet 1 — Activités "Voir tout" (narrow)
Identique à ClientDetailView.

#### Sheet 2 — Messages "Voir tout" (wide)
Identique à ClientDetailView.

#### Sheet 3 — Caractéristiques "Éditer" (narrow)
Sheet narrow avec les champs éditables. Structure similaire à la Sheet Profil de ClientDetailView (InputField + SelectField), mais avec les champs Property.

Champs éditables dans la Sheet :
- type (SelectField)
- condition (SelectField)
- numberOfRooms, bedroomCount, bathroomCount (InputField type number)
- livingAreaSqm, landAreaSqm, terraceAreaSqm (InputField type number)
- constructionYear (InputField type number)
- heatingType (SelectField)
- kitchenType (SelectField)
- parkingType (SelectField)
- dpeEnergyClass, dpeGasEmissionClass (SelectField A-G)

Footer : bouton "Enregistrer" → UPDATE Supabase → refreshKey.

#### Sheet 4 — Upload document (narrow)
Identique à ClientDetailView.

---

## Query de chargement (parallel)

```typescript
const [
  { data: prop },
  { data: media },
  { data: eventsData },
  { data: dealsData },
  { data: listingsData },
  { data: documentsData },
  { data: messagesData },
  { data: clientData },
] = await Promise.all([
  supabase.from('Property').select('*').eq('id', propertyId).single(),
  supabase.from('PropertyMedia').select('*').eq('propertyId', propertyId).eq('mediaType', 'photo').order('sortOrder', { ascending: true }),
  supabase.from('Event').select('id, type, status, title, description, eventDate, agentId, createdAt, User:agentId(name)').eq('propertyId', propertyId).order('eventDate', { ascending: false }).limit(100),
  supabase.from('Deal').select('id').eq('propertyId', propertyId),
  supabase.from('Listing').select('id, status').eq('propertyId', propertyId),
  supabase.from('Document').select('id, title, fileName, type').eq('propertyId', propertyId),
  supabase.from('Message').select('id, senderType, body, messageDate, status, attachmentsUrls').eq('propertyId', propertyId).order('messageDate', { ascending: false }).limit(100),
  // Le clientId du bien pour récupérer le nom du propriétaire
  null, // sera chargé après si property.clientId existe
]);
```

Ensuite, si `prop.clientId` existe :
```typescript
const { data: clientData } = await supabase
  .from('Client')
  .select('firstName, lastName')
  .eq('id', prop.clientId)
  .single();
const ownerName = clientData ? `${clientData.lastName?.toUpperCase() ?? ''}, ${clientData.firstName ?? ''}` : '—';
```

---

## Imports DS à utiliser

```tsx
import { AppBarFicheBien } from '@real-estate/ui/app-bar-fiche-bien';
import { AppBarBienAncres } from '@real-estate/ui/app-bar-bien-ancres';
import { AppBarAnnonce } from '@real-estate/ui/app-bar-annonce';
import { Gallery } from '@real-estate/ui/gallery';
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
```

---

## Imports à SUPPRIMER

- `AccordionSection` depuis `@/components/ui/AccordionSection`
- `CompletionGauge` depuis `@/components/ui/CompletionGauge`
- `SectionNav` depuis `@/components/ui/SectionNav`
- `StatusBadge` depuis `@/components/ui/StatusBadge`
- `useToast` depuis `@/components/ui/Toast`
- `useCompletionScore` depuis `@/hooks/useCompletionScore`
- Tous les imports des anciens sous-composants `./sections/PropertySection*`
- Les icônes lucide non utilisées : ArrowLeft, FileDown, Share2, Archive, Home, MapPin, etc.
- Les constantes PROPERTY_STATUS_COLORS, DPE_COLORS (plus utilisées directement)

---

## Imports à CONSERVER

- `Property`, `PropertyMedia`, `PropertyType`, `DpeClass`, `PropertyCondition` depuis `@/types/property`
- `PROPERTY_TYPE_LABELS`, `PROPERTY_CONDITION_LABELS`, `OPERATION_TYPE_LABELS` depuis `@/types/property`
- `formatPrice` depuis `@/lib/utils/format`
- `createClient` depuis `@/lib/supabase/client`

---

## Contraintes

- Ne modifier QUE `PropertyDetailView.tsx`
- NE PAS modifier ni supprimer les fichiers `./sections/PropertySection*.tsx` (ils restent mais ne sont plus importés — nettoyage ultérieur)
- Reproduire EXACTEMENT le pattern de ClientDetailView (même blocs, même espacement, même logique)
- KPIs en données mock (comme ClientDetailView)
- Si une table n'existe pas ou n'a pas la colonne attendue (Listing, Message.propertyId), gérer gracieusement avec un array vide
- Le composant `ProfileField` doit être copié depuis ClientDetailView (même implémentation inline)

---

## Vérification

1. `cd /sessions/magical-amazing-noether/real-estate-project && npm run build`
2. Vérifier que la structure des sections correspond au pattern ClientDetailView

---

## Dev-report

Créer `docs/scratchpad/dev-report-P09_FicheBien_20260414.md`
