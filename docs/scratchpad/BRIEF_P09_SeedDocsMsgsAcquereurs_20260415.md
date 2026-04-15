# Brief dev-agent — Seed Documents + Messages + Section Acquéreurs Appétents (P09)

**Date** : 15 avril 2026
**Fichiers cibles** :
- Supabase tables `Document`, `Message` (seed data via `execute_sql`)
- `apps/agent-app/src/components/properties/PropertyDetailView.tsx` (code Acquéreurs)
**Complexité** : Moyenne — 2 seeds SQL + refonte section Acquéreurs (query + affichage)

---

## Contexte

Trois sections de la Fiche Bien n'affichent rien faute de données :
- **Documents** : code fonctionnel, 0 rows en base avec `propertyId`
- **Messages** : code fonctionnel, 0 rows en base avec `propertyId`
- **Acquéreurs appétents** : code = placeholder hardcodé (`Badge 0`), 0 query, 0 affichage

---

## Volet 1 — Seed Documents (SQL uniquement)

### Schéma Document (colonnes clés)
```
id (text, NOT NULL), title (text, NOT NULL), url (text, NOT NULL),
propertyId (text), type (enum DocumentType), fileName (text),
fileFormat (enum FileFormat), documentStatus (enum DocumentStatus),
isPrivate (boolean, NOT NULL), isTemplate (boolean, NOT NULL),
generatedFromTemplate (boolean, NOT NULL),
createdAt (timestamp, NOT NULL), updatedAt (timestamp, NOT NULL)
```

### DocumentType enum
CNI, PASSEPORT, KBIS, FICHE_PAIE, AVIS_IMPOSITION, OFFRE_PRET, ATTESTATION_FINANCEMENT, ACTE_PROPRIETE, MANDAT_VENTE, MANDAT_GESTION, BAIL, COMPROMIS, ACTE_NOTARIE, DPE, ANNONCE, COMPTE_RENDU, AUTRE

### DocumentStatus enum
EN_ATTENTE, RECU, VERIFIE, EXPIRE, REJETE, ARCHIVE

### FileFormat enum
PDF, JPG, PNG, DOCX, XLSX, AUTRE

### Seed — 3 à 5 documents par property (99 properties)

Insérer des documents crédibles pour un bien immobilier. Types pertinents pour un bien :
- **DPE** (diagnostic de performance énergétique) — PDF, status VERIFIE
- **MANDAT_VENTE** ou **MANDAT_GESTION** — PDF, status VERIFIE ou EN_ATTENTE
- **ACTE_PROPRIETE** — PDF, status VERIFIE
- **ANNONCE** — PDF ou DOCX, status RECU
- **COMPTE_RENDU** (de visite) — PDF, status RECU
- **AUTRE** (mesurage Loi Carrez, diagnostics amiante, etc.) — PDF

Pattern SQL :
```sql
INSERT INTO "Document" (
  id, title, url, "propertyId", type, "fileName", "fileFormat", "documentStatus",
  "isPrivate", "isTemplate", "generatedFromTemplate", "createdAt", "updatedAt"
)
SELECT
  'doc-' || rn || '-' || seq.n,
  -- title adapté au type
  CASE seq.n
    WHEN 1 THEN 'Diagnostic DPE'
    WHEN 2 THEN 'Mandat de vente'
    WHEN 3 THEN 'Titre de propriété'
    WHEN 4 THEN 'Compte-rendu de visite'
    WHEN 5 THEN 'Mesurage Loi Carrez'
  END,
  'https://storage.example.com/docs/' || p.id || '/doc-' || seq.n || '.pdf',
  p.id,
  CASE seq.n
    WHEN 1 THEN 'DPE'
    WHEN 2 THEN 'MANDAT_VENTE'
    WHEN 3 THEN 'ACTE_PROPRIETE'
    WHEN 4 THEN 'COMPTE_RENDU'
    WHEN 5 THEN 'AUTRE'
  END::"DocumentType",
  CASE seq.n
    WHEN 1 THEN 'dpe_' || p.id || '.pdf'
    WHEN 2 THEN 'mandat_vente_' || p.id || '.pdf'
    WHEN 3 THEN 'titre_propriete_' || p.id || '.pdf'
    WHEN 4 THEN 'compte_rendu_visite_' || p.id || '.pdf'
    WHEN 5 THEN 'mesurage_carrez_' || p.id || '.pdf'
  END,
  'PDF'::"FileFormat",
  CASE seq.n
    WHEN 1 THEN 'VERIFIE'
    WHEN 2 THEN 'EN_ATTENTE'
    WHEN 3 THEN 'VERIFIE'
    WHEN 4 THEN 'RECU'
    WHEN 5 THEN 'RECU'
  END::"DocumentStatus",
  false,  -- isPrivate
  false,  -- isTemplate
  false,  -- generatedFromTemplate
  NOW() - (seq.n * 15 || ' days')::interval,
  NOW()
FROM (SELECT id, ROW_NUMBER() OVER (ORDER BY id) as rn FROM "Property") p
CROSS JOIN generate_series(1, 4) AS seq(n);  -- 4 docs par bien (le 5e seulement si TERRAIN exclu)
```

> **IMPORTANT** : les `fileName` et IDs risquent d'être longs pour les properties `cmm...`. Utiliser le `rn` (ROW_NUMBER) dans l'ID du document au lieu du propertyId complet.
> Format ID recommandé : `doc-prop-{rn}-{seq}` (ex: `doc-prop-1-1`, `doc-prop-99-4`)

### Vérification
```sql
SELECT count(DISTINCT "propertyId") as properties, count(*) as total FROM "Document" WHERE "propertyId" IS NOT NULL;
```
Attendu : 99 properties, ~396 documents.

---

## Volet 2 — Seed Messages (SQL uniquement)

### Schéma Message (colonnes clés)
```
id (text, NOT NULL), propertyId (text), clientId (text), agentId (text),
body (text, NOT NULL), senderType (enum: AGENT | CLIENT | IA),
channel (enum: EMAIL | SMS | IN_APP | WHATSAPP),
status (enum: BROUILLON | ENVOYE | DELIVRE | LU | ECHOUE),
attachmentsUrls (ARRAY, NOT NULL — défaut array vide),
messageDate (timestamp, NOT NULL), aiGenerated (boolean, NOT NULL),
createdAt (timestamp, NOT NULL)
```

### Seed — 4 à 6 messages par property (alternance AGENT/CLIENT)

Insérer des messages réalistes entre agent et propriétaire à propos du bien. Pattern conversation :

1. AGENT → propriétaire : demande de documents / infos
2. CLIENT ← propriétaire : réponse avec pièces
3. AGENT → propriétaire : confirmation visite
4. CLIENT ← propriétaire : accord ou question
5. AGENT → propriétaire : compte-rendu de visite
6. IA → suggestion automatique

```sql
INSERT INTO "Message" (
  id, "propertyId", "agentId", "senderType", channel, body, status,
  "attachmentsUrls", "messageDate", "aiGenerated", "createdAt"
)
SELECT
  'msg-prop-' || rn || '-' || seq.n,
  p.id,
  'cmmccmxi300001tirtfpuweb7',
  CASE seq.n
    WHEN 1 THEN 'AGENT'
    WHEN 2 THEN 'CLIENT'
    WHEN 3 THEN 'AGENT'
    WHEN 4 THEN 'CLIENT'
    WHEN 5 THEN 'AGENT'
  END::"SenderType",
  CASE WHEN seq.n % 2 = 0 THEN 'EMAIL' ELSE 'IN_APP' END::"MessageChannel",
  CASE seq.n
    WHEN 1 THEN 'Bonjour, pourriez-vous me transmettre le DPE et le titre de propriété pour compléter le dossier du bien ?'
    WHEN 2 THEN 'Bonjour, je vous envoie les documents demandés en pièce jointe. Le DPE date de 2024.'
    WHEN 3 THEN 'Merci pour les documents. Une visite est prévue ce vendredi à 14h avec un acquéreur potentiel. Cela vous convient-il ?'
    WHEN 4 THEN 'Vendredi 14h c est parfait. Merci de me confirmer après la visite.'
    WHEN 5 THEN 'La visite s est bien passée. L acquéreur est intéressé et souhaite faire une contre-visite. Je vous tiens informé de la suite.'
  END,
  CASE
    WHEN seq.n <= 3 THEN 'LU'
    WHEN seq.n = 4 THEN 'DELIVRE'
    ELSE 'ENVOYE'
  END::"MessageStatus",
  CASE WHEN seq.n = 2 THEN ARRAY['https://storage.example.com/docs/dpe.pdf', 'https://storage.example.com/docs/titre.pdf'] ELSE ARRAY[]::text[] END,
  NOW() - ((6 - seq.n) * 3 + (rn % 10)) * interval '1 day',
  false,
  NOW()
FROM (SELECT id, ROW_NUMBER() OVER (ORDER BY id) as rn FROM "Property") p
CROSS JOIN generate_series(1, 5) AS seq(n);
```

### Vérification
```sql
SELECT count(DISTINCT "propertyId") as properties, count(*) as total FROM "Message" WHERE "propertyId" IS NOT NULL;
```
Attendu : 99 properties, 495 messages.

---

## Volet 3 — Section Acquéreurs Appétents (CODE uniquement)

### Concept
Un "acquéreur appétent" est un Client dont le statut inclut ACQUEREUR et dont les critères de recherche (`searchCriteriaSummary`) correspondent aux caractéristiques du bien affiché. 28 clients ACQUEREUR existants ont déjà un `searchCriteriaSummary` rempli — **pas besoin de seed supplémentaire**.

### Composant DS à utiliser : `ListClient`
Import : `import { ListClient } from '@real-estate/ui/list-client';`

Props `ListClient` :
- `firstName: string` — prénom du client
- `lastName: string` — nom de famille
- `badges?: Array<{ label: string; variant?: BadgeVariant }>` — ex: `[{ label: 'ACQUÉREUR' }]`
- `kpis: ListClientKpi` — `{ qualification: number, engagement: number, conversion: number, reactivation: number }` (0-100)
- `aiSuggestions?: number` — nombre de suggestions IA
- `onClick?: () => void` — callback navigation

Import du type KPI : `import { ListClient, ListClientKpi } from '@real-estate/ui/list-client';`

### Approche
Matching simplifié V1 via `searchCriteriaSummary` + ville et type du bien. Si aucun match → section vide (juste le titre + Badge 0), pas de message texte.

> **IMPORTANT** : `Client.status` est un ARRAY PostgreSQL (ex: `{ACQUEREUR}`, `{PROPRIETAIRE,ACQUEREUR}`). La requête Supabase doit utiliser `.contains('status', ['ACQUEREUR'])` pour filtrer.

#### A. Query à ajouter dans le fetch

Ajouter une requête **après le Promise.all principal** (même pattern que le fetch Client pour ownerName) :

```typescript
// Fetch acquéreurs appétents — clients ACQUEREUR avec critères de recherche
let matchingBuyers: BuyerMatch[] = [];
if (prop) {
  const property = prop as Property;
  const { data: buyersData } = await supabase
    .from('Client')
    .select('id, firstName, lastName, searchCriteriaSummary')
    .contains('status', ['ACQUEREUR'])
    .not('searchCriteriaSummary', 'is', null)
    .limit(50);

  if (buyersData) {
    // Matching simplifié : filtrer les clients dont les critères mentionnent
    // le type de bien ou la ville
    const propertyType = PROPERTY_TYPE_LABELS[property.type]?.toLowerCase() ?? '';
    const propertyCity = property.addressCity?.toLowerCase() ?? '';

    matchingBuyers = (buyersData as BuyerRow[])
      .filter((b) => {
        const criteria = (b.searchCriteriaSummary ?? '').toLowerCase();
        // Match si les critères mentionnent le type OU la ville
        return (
          (propertyType && criteria.includes(propertyType)) ||
          (propertyCity && criteria.includes(propertyCity))
        );
      })
      .slice(0, 10)  // max 10 acquéreurs affichés
      .map((b) => ({
        id: b.id,
        firstName: b.firstName ?? '',
        lastName: b.lastName ?? '',
        criteria: b.searchCriteriaSummary ?? '',
      }));
  }
}
```

#### B. Interfaces à ajouter

```typescript
interface BuyerRow {
  id: string;
  firstName: string | null;
  lastName: string | null;
  searchCriteriaSummary: string | null;
}

interface BuyerMatch {
  id: string;
  firstName: string;
  lastName: string;
  criteria: string;
}
```

#### C. Ajouter dans PropertyDetailData

```typescript
matchingBuyers: BuyerMatch[];
```

Et dans `setData(...)` :
```typescript
matchingBuyers,
```

#### D. Ajouter l'import ListClient

En haut du fichier, ajouter :
```typescript
import { ListClient } from '@real-estate/ui/list-client';
```

#### E. Remplacer le JSX de la section Acquéreurs (lignes ~1159-1167)

Utiliser le composant DS `ListClient` pour chaque acquéreur matché :

```tsx
{/* Bloc 9 — Acquéreurs Appétents */}
<section ref={setSectionRef('acquereurs')} id="acquereurs" className="scroll-mt-[200px] py-[50px] border-t border-edge-default">
  <div className="flex items-center gap-[4px] mb-[50px]">
    <h3 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings">
      Acquéreurs appétents
    </h3>
    <Badge variant="default">{data.matchingBuyers.length}</Badge>
  </div>
  {data.matchingBuyers.length > 0 && (
    <div className="flex flex-col gap-[8px]">
      {data.matchingBuyers.map((buyer) => (
        <ListClient
          key={buyer.id}
          firstName={buyer.firstName}
          lastName={buyer.lastName}
          badges={[{ label: 'ACQUÉREUR' }]}
          kpis={{ qualification: 0, engagement: 0, conversion: 0, reactivation: 0 }}
          aiSuggestions={0}
          onClick={() => router.push(`/clients/${buyer.id}`)}
        />
      ))}
    </div>
  )}
</section>
```

> **Note** : Les KPIs sont initialisés à 0 pour le moment (V1). En V2, les KPIs Client seront calculés dynamiquement. L'important est que le composant DS `ListClient` est correctement utilisé — PAS de composant custom.

> **Si aucun acquéreur ne matche** : la section affiche uniquement le titre + Badge 0. Pas de texte "Aucun acquéreur" — le Badge 0 suffit.

#### F. Destructuring dans le JSX principal

Vérifier que `data.matchingBuyers` est accessible. Si le destructuring est utilisé, ajouter `matchingBuyers` :
```typescript
const { property, photos, kpis, aiSuggestions, activities, ..., matchingBuyers } = data;
```
Dans ce cas, remplacer `data.matchingBuyers` par `matchingBuyers` dans le JSX ci-dessus.

### Seed Acquéreurs — PAS NÉCESSAIRE

28 clients ACQUEREUR existants ont déjà un `searchCriteriaSummary` rempli avec des villes (Paris, Lyon, Bordeaux, Nice, Marseille, Toulouse, Strasbourg, Lille, Rennes…) et types (appartement, maison, studio, T2, T3…) qui correspondent aux biens en base. Seuls 2 acquéreurs (c-seed-019, cmmccmy0z…) ont un critère NULL — pas besoin de les enrichir, les 28 existants couvrent largement le matching.

---

## Contraintes

- **Documents et Messages** : seed SQL uniquement, PAS de modification de code (les sections fonctionnent déjà)
- **Acquéreurs** : modification de `PropertyDetailView.tsx` uniquement + ajout import `ListClient`
- NE PAS modifier `ClientDetailView.tsx`
- NE PAS modifier les autres sections (Caractéristiques, Activités, etc.)
- NE PAS créer de nouveau composant — utiliser UNIQUEMENT `ListClient` du DS
- Les imports `PROPERTY_TYPE_LABELS` et `router` sont déjà disponibles dans PropertyDetailView
- PAS de seed clients : les 28 acquéreurs existants avec `searchCriteriaSummary` suffisent

---

## Vérification

1. Exécuter les 2 seeds SQL (Documents + Messages) et vérifier les counts
2. `cd /sessions/magical-amazing-noether/real-estate-project/apps/agent-app && npx next build`
3. Vérifier que la section Documents affiche des boutons document (Badge count > 0)
4. Vérifier que la section Messages affiche des MessageReceived/MessageSent
5. Vérifier que la section Acquéreurs utilise le composant `ListClient` (pas de div custom)
6. Vérifier que la query filtre bien par statut ACQUEREUR avec `.contains('status', ['ACQUEREUR'])`
7. Vérifier que si aucun acquéreur ne matche, la section affiche juste le titre + Badge 0

---

## Dev-report

Créer `docs/scratchpad/dev-report-P09_SeedDocsMsgsAcquereurs_20260415.md`
