# Brief dev-agent — Correctifs Section Activités Fiche Bien (P09)

**Date** : 15 avril 2026
**Fichiers cibles** :
- `apps/agent-app/src/components/properties/PropertyDetailView.tsx` (branche `main`)
- Supabase — table `Event` (seed data)
**Complexité** : Faible — renommer filtres + adapter mapping + seed SQL

---

## Objectif

Corriger la Section Activités de `PropertyDetailView` pour qu'elle reflète les KPIs Bien (Qualification / Entretien / Conversion) au lieu des KPIs Client (Qualification / Engagement / Conversion). Seeder des Events avec `propertyId` pour les 99 biens existants afin que les CardLogs s'affichent.

---

## Diagnostic

### Problème 1 — CardLogs vides (DATA)
La table Event contient 248 rows mais **aucun n'a de `propertyId`** (tous NULL). Le code fait `.eq('propertyId', propertyId)` → 0 résultats → aucun CardLog affiché. Ce n'est PAS un bug code.

### Problème 2 — Filtres incorrects (CODE)
Les filtres actuels (Qualification / Engagement / Conversion) sont copiés de ClientDetailView. Pour la Fiche Bien, les KPIs sont :
- **Qualification** (QUAL Bien) : complétude des données descriptives du bien
- **Entretien** (ENT) : suivi maintenance et diagnostics du bien
- **Conversion** (CONV Bien) : progression de la transaction

---

## Correctif 1 — Adapter les filtres et le mapping (CODE)

### A. Renommer la catégorie ENGAGEMENT → ENTRETIEN

Dans `PropertyDetailView.tsx` uniquement (NE PAS modifier ClientDetailView) :

#### 1. Type du state `activeFilter` (ligne ~319)

```typescript
// AVANT
const [activeFilter, setActiveFilter] = useState<'all' | 'QUALIFICATION' | 'ENGAGEMENT' | 'CONVERSION' | 'REACTIVATION'>('all');

// APRÈS
const [activeFilter, setActiveFilter] = useState<'all' | 'QUALIFICATION' | 'ENTRETIEN' | 'CONVERSION'>('all');
```

#### 2. Fonction `eventTypeToCategory` (lignes ~175-192)

Remplacer la fonction entière **dans PropertyDetailView** par un mapping adapté aux KPIs Bien :

```typescript
/** Mappe un EventType DB vers une catégorie KPI Bien */
function eventTypeToBienCategory(eventType: string | null): 'QUALIFICATION' | 'ENTRETIEN' | 'CONVERSION' {
  switch (eventType) {
    // Qualification = actions de complétude données du bien
    case 'RDV_COMMERCIAL':
    case 'TACHE':
      return 'QUALIFICATION';
    // Entretien = suivi maintenance, visites, relances, divers
    case 'VISITE':
    case 'RELANCE':
    case 'ANNIVERSAIRE':
    case 'AUTRE':
      return 'ENTRETIEN';
    // Conversion = signatures et progression transaction
    case 'SIGNATURE_PROMESSE':
    case 'SIGNATURE_NOTAIRE':
    case 'SIGNATURE_BAIL':
      return 'CONVERSION';
    default:
      return 'ENTRETIEN';
  }
}
```

#### 3. Fonction `getActivityBadgeVariant` (lignes ~196-203)

Adapter pour les catégories Bien :

```typescript
function getActivityBadgeVariant(category: string): 'default' | 'success' | 'warning' | 'information' | 'error' | 'disabled' {
  switch (category) {
    case 'QUALIFICATION': return 'success';
    case 'ENTRETIEN':     return 'default';
    case 'CONVERSION':    return 'warning';
    default:              return 'default';
  }
}
```

#### 4. Appel dans le mapping events (ligne ~448)

```typescript
// AVANT
category: eventTypeToCategory(ev.type),

// APRÈS
category: eventTypeToBienCategory(ev.type),
```

#### 5. Chips JSX (lignes ~988-1011)

Remplacer les 3 chips filtre (après "Tout") :

```tsx
<Chip
  label="Qualification"
  icon={<Database size={16} />}
  selected={activeFilter === 'QUALIFICATION'}
  size="medium"
  fontWeight="semibold"
  onClick={() => setActiveFilter('QUALIFICATION')}
/>
<Chip
  label="Entretien"
  icon={<MessageCirclePlus size={16} />}
  selected={activeFilter === 'ENTRETIEN'}
  size="medium"
  fontWeight="semibold"
  onClick={() => setActiveFilter('ENTRETIEN')}
/>
<Chip
  label="Conversion"
  icon={<ScrollText size={16} />}
  selected={activeFilter === 'CONVERSION'}
  size="medium"
  fontWeight="semibold"
  onClick={() => setActiveFilter('CONVERSION')}
/>
```

#### 6. Interface `ActivityLog` — champ `category` (ligne ~148)

Vérifier que le type accepte `'ENTRETIEN'` :
```typescript
category: string; // OK — c'est déjà un string libre
```

#### 7. `filteredActivities` (ligne ~694)

Vérifier que le filtre fonctionne avec les nouvelles catégories — pas de changement nécessaire, c'est un simple `a.category === activeFilter`.

---

## Correctif 2 — Seed Events pour les 99 biens (DATA)

### Contexte
- 99 biens en base (6 imports initiaux `cmm...`, 90 seeds `p-seed-001` à `p-seed-090`, 3 spéciaux `prop-seed-060-*`)
- 9 EventTypes disponibles : RDV_COMMERCIAL, VISITE, SIGNATURE_PROMESSE, SIGNATURE_NOTAIRE, SIGNATURE_BAIL, RELANCE, TACHE, ANNIVERSAIRE, AUTRE
- 6 EventStatus disponibles : PROGRAMME, CONFIRME, TERMINE, ANNULE, NO_SHOW, REPORTE
- agentIds existants : `cmmccmxi300001tirtfpuweb7`, `80e61c88-61d2-40c0-8cd8-9adcb1758e7e`

### Seed SQL

Générer **3 à 6 events par property** (mix des 3 catégories Bien), avec des dates étalées sur les 2 derniers mois. Utiliser un des agentIds existants. Pattern :

```sql
INSERT INTO "Event" (id, "organizationId", "clientId", "propertyId", "agentId", type, title, description, "eventDate", status, "isTask", "createdAt", "updatedAt")
SELECT
  'evt-prop-' || p.id || '-' || seq.n,
  NULL,
  NULL,
  p.id,
  'cmmccmxi300001tirtfpuweb7',
  -- type rotatif basé sur le numéro de séquence
  CASE (seq.n % 9)
    WHEN 0 THEN 'RDV_COMMERCIAL'
    WHEN 1 THEN 'VISITE'
    WHEN 2 THEN 'TACHE'
    WHEN 3 THEN 'RELANCE'
    WHEN 4 THEN 'SIGNATURE_PROMESSE'
    WHEN 5 THEN 'ANNIVERSAIRE'
    WHEN 6 THEN 'AUTRE'
    WHEN 7 THEN 'VISITE'
    WHEN 8 THEN 'RDV_COMMERCIAL'
  END::"EventType",
  -- title adapté au type
  CASE (seq.n % 9)
    WHEN 0 THEN 'RDV qualification bien'
    WHEN 1 THEN 'Visite du bien'
    WHEN 2 THEN 'Mise à jour fiche bien'
    WHEN 3 THEN 'Relance propriétaire'
    WHEN 4 THEN 'Signature promesse de vente'
    WHEN 5 THEN 'Rappel anniversaire propriétaire'
    WHEN 6 THEN 'Note interne bien'
    WHEN 7 THEN 'Contre-visite'
    WHEN 8 THEN 'RDV estimation'
  END,
  -- description
  CASE (seq.n % 9)
    WHEN 0 THEN 'Rendez-vous de qualification avec le propriétaire pour compléter les informations du bien'
    WHEN 1 THEN 'Visite du bien avec un acquéreur potentiel'
    WHEN 2 THEN 'Mise à jour des caractéristiques et photos du bien'
    WHEN 3 THEN 'Relance du propriétaire pour suivi du mandat'
    WHEN 4 THEN 'Signature de la promesse de vente chez le notaire'
    WHEN 5 THEN 'Rappel : anniversaire du propriétaire'
    WHEN 6 THEN 'Note : vérification des diagnostics techniques'
    WHEN 7 THEN 'Contre-visite demandée par l acquéreur'
    WHEN 8 THEN 'Rendez-vous d estimation comparative du bien'
  END,
  -- eventDate : étalé sur les 60 derniers jours
  NOW() - (seq.n * 10 + (CASE WHEN p.id LIKE 'p-seed-%' THEN CAST(SUBSTRING(p.id FROM 8) AS integer) % 7 ELSE 0 END))  * interval '1 day',
  -- status rotatif
  CASE (seq.n % 6)
    WHEN 0 THEN 'PROGRAMME'
    WHEN 1 THEN 'CONFIRME'
    WHEN 2 THEN 'TERMINE'
    WHEN 3 THEN 'TERMINE'
    WHEN 4 THEN 'ANNULE'
    WHEN 5 THEN 'REPORTE'
  END::"EventStatus",
  CASE WHEN (seq.n % 9) = 2 THEN true ELSE false END,  -- isTask pour TACHE
  NOW(),
  NOW()
FROM "Property" p
CROSS JOIN generate_series(1, 5) AS seq(n);
```

> **Important** : ce SQL insère 5 events × 99 properties = **495 events** couvrant les 3 catégories Bien. L'ID utilise une concaténation qui peut être longue pour les IDs `cmm...` — ajuster si besoin. Les IDs ne doivent PAS dépasser 100 chars.

> **Note** : le calcul de date pour les IDs non-seed (cmm... et prop-seed-060-*) ne pourra pas parser le substring numérique — utiliser un fallback. Adapter la formule avec COALESCE ou un hash.

### Vérification seed

Après insertion, vérifier :
```sql
SELECT "propertyId", count(*) FROM "Event" WHERE "propertyId" IS NOT NULL GROUP BY "propertyId" ORDER BY count(*) DESC LIMIT 10;
```

Doit retourner 99 propertyIds distincts avec ~5 events chacun.

---

## Contraintes

- NE modifier QUE `PropertyDetailView.tsx` (pas ClientDetailView !)
- NE PAS toucher aux autres sections
- NE PAS modifier la Sheet Activités "Voir tout" (elle fonctionne déjà)
- Le seed SQL est exécuté via Supabase `execute_sql` (pas dans le code)
- Les EventTypes sont des enums Supabase — utiliser le cast `::"EventType"` et `::"EventStatus"`

---

## Vérification

1. Exécuter le seed SQL et vérifier que les 99 biens ont des events
2. `cd /sessions/magical-amazing-noether/real-estate-project/apps/agent-app && npx next build`
3. Vérifier que les Chips affichent "Tout / Qualification / Entretien / Conversion"
4. Vérifier que le mapping `eventTypeToBienCategory` est utilisé (pas `eventTypeToCategory`)
5. Vérifier que `filteredActivities` filtre correctement sur les nouvelles catégories

---

## Dev-report

Créer `docs/scratchpad/dev-report-P09_SectionActivites_20260415.md`
