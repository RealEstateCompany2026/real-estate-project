# Dev-Report — Section Activités Fiche Bien (P09)

**Date** : 15 avril 2026  
**Status** : ✅ COMPLET (CODE + DATA)  
**Fichiers modifiés** : `PropertyDetailView.tsx` uniquement

---

## Résumé des changements

### Volet 1 — CODE (PropertyDetailView.tsx)

#### 1. Nouvelle fonction `eventTypeToBienCategory` (lignes ~174-193)
- Remplace `eventTypeToCategory`
- Mappe les 9 EventTypes vers 3 catégories KPI Bien :
  - **QUALIFICATION** : RDV_COMMERCIAL, TACHE
  - **ENTRETIEN** : VISITE, RELANCE, ANNIVERSAIRE, AUTRE
  - **CONVERSION** : SIGNATURE_PROMESSE, SIGNATURE_NOTAIRE, SIGNATURE_BAIL
- Default → ENTRETIEN

#### 2. Fonction `getActivityBadgeVariant` adaptée (lignes ~195-203)
- Remplace les 4 cas (ancien : QUALIFICATION/ENGAGEMENT/CONVERSION/REACTIVATION) par 3 cas (nouveau : QUALIFICATION/ENTRETIEN/CONVERSION)
- Mappings Badge :
  - QUALIFICATION → 'success'
  - ENTRETIEN → 'default'
  - CONVERSION → 'warning'

#### 3. Type du state `activeFilter` (ligne ~319)
- **AVANT** : `'all' | 'QUALIFICATION' | 'ENGAGEMENT' | 'CONVERSION' | 'REACTIVATION'`
- **APRÈS** : `'all' | 'QUALIFICATION' | 'ENTRETIEN' | 'CONVERSION'`

#### 4. Appel de la fonction dans le mapping (ligne ~448)
- `eventTypeToCategory(ev.type)` → `eventTypeToBienCategory(ev.type)`

#### 5. Chips JSX (lignes ~988-1011)
- Chip 2 : "Engagement" → "Entretien" + `selected={activeFilter === 'ENTRETIEN'}`
- Suppression du Chip "Réactivation" (4e chip supprimée)
- Chips affichées : "Tout" / "Qualification" / "Entretien" / "Conversion"

#### 6. ClientDetailView.tsx
- ✅ **NON modifié** (respect de la règle)

### Volet 2 — DATA (Supabase seed)

#### SQL exécuté
- 495 events insérés (99 properties × 5 events)
- Tous les events ont `propertyId IS NOT NULL`
- Mix des 9 EventTypes (distribution rotatif via modulo)
- Distribution des statuts : PROGRAMME, CONFIRME, TERMINE, ANNULE, REPORTE
- agentId : `cmmccmxi300001tirtfpuweb7`
- IDs uniques : format `evt-{HASH}-{SEQ}` (< 100 chars)
- Dates : échelonnées sur ~60 jours (via NOW() - interval)

#### Vérification POST-INSERT
```
properties_with_events: 99
total_events: 495
```
✅ Chaque property a exactement 5 events

---

## Vérifications

1. ✅ `npx next build` → SUCCESS (pas d'erreurs TypeScript)
2. ✅ 99 properties distinctes seeded avec events
3. ✅ Mapping `eventTypeToBienCategory` utilisé (pas `eventTypeToCategory`)
4. ✅ Type `activeFilter` met à jour (ENGAGEMENT → ENTRETIEN)
5. ✅ Chips JSX : "Tout / Qualification / Entretien / Conversion"
6. ✅ Badge variant adapté pour les 3 catégories Bien
7. ✅ `filteredActivities` filtre sur les nouvelles catégories
8. ✅ ClientDetailView.tsx inchangé

---

## Notes techniques

- Seed SQL utilise MD5 pour générer des IDs uniques (évite les doublons)
- Cast PostgreSQL pour les enums : `::"EventType"` et `::"EventStatus"`
- Distribution temporelle : `NOW() - (seq.n * 12 + hash) * interval '1 day'`
- isTask = true uniquement pour les événements de type TACHE (seq.n % 9 == 3)

---

## Déploiement

Prêt pour :
1. reviewer-agent audit à froid
2. ops-agent déploiement en production

Fichiers impactés : 1 (PropertyDetailView.tsx)  
Lignes modifiées : ~40  
Régression : aucune (changement isolé, pas de modification d'autres composants)
