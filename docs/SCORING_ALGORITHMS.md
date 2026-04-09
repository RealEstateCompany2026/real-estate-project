# SCORING_ALGORITHMS — RealAgent
_Source unique de vérité pour les KPIs Client / Bien / Affaire._

## Principes
- Aucun score stocké en dur. Tout est dérivé via RPC Postgres (`get_client_kpi`, `get_property_kpi`, …).
- Historisation via `analytics.score_snapshot` (delta J-7 pour tendances). Chaque snapshot stocke la `config_version` utilisée pour pouvoir rejouer l'historique.
- **Aucune constante de scoring en dur dans le code** (ni TS, ni SQL). Tout est chargé depuis `public.scoring_config` au runtime.
- Les thresholds sont **adaptatifs à l'étape du cycle de vie** (un score bas à `lead` est normal, à `actif` il est alarmant).

## Configurabilité runtime — `public."ScoringConfig"` ✅ APPLIQUÉE

Tous les paramètres vivent dans une table versionnée. **Structure réelle déployée** :

```sql
-- Table : public."ScoringConfig" (PascalCase convention)
-- id text PK, "metricKey" text, version text, "isActive" boolean,
-- "entityType" text CHECK (client|property), formula jsonb, weights jsonb,
-- thresholds jsonb, description text, "createdAt" timestamptz, "updatedAt" timestamptz
-- UNIQUE ("metricKey", version, "entityType")
```

**7 lignes insérées** (version `2026-04-v1`, toutes actives) — voir BRIEF_CLAUDE_CODE §1.3 pour le détail.

### RPCs déployées ✅

| Fonction | Param | Retour |
|----------|-------|--------|
| `get_client_scores(text)` | clientId | `{qual, eng, conv, reac, suggestions}` — ENG/REAC=placeholder |
| `get_property_scores(text)` | propertyId | `{qual, entretien, conv}` |
| `get_deal_milestone_progress(text)` | dealId | `{milestones[], current, percentage, matrix}` |

### Mappings colonnes réels (référence pour les hooks)

**Client** : `primaryEmail`, `mobilePhone`, `preferredChannel`, `status` = `ClientStatus[]` FR (PROPRIETAIRE/ACQUEREUR/BAILLEUR/LOCATAIRE), `source` = enum `ClientSource`, `totalOwnedProperties`, `propertiesUnderMgmtCount`, pas de `isProfessional` (dérivé de `siren`).

**Property** : `type` (pas propertyType), `status` (pas propertyStatus), `condition` (pas propertyCondition), copro via `coOwnershipId` FK.

**Deal** : `type` (pas dealType), `status` (pas dealStatus). Enums : DealType(VENTE/BAIL/ACQUISITION/LOCATION/GESTION), DealStatus(INACTIVE/EN_COURS/CLOTUREE/ARCHIVEE).

**Workflow d'ajustement** :
1. Créer une nouvelle version `2026-05-v2` (is_active=false) avec les nouveaux paliers.
2. Tester (phase test MCP, dry-run sur un sous-ensemble d'agents).
3. `UPDATE ... SET is_active = true WHERE version = '2026-05-v2'` → bascule instantanée.
4. Rollback trivial en réactivant l'ancienne version.

**Côté front** : endpoint `GET /api/scoring/config` cache 1h via React Query, injecté dans `lib/scoring/thresholds.ts` au démarrage. Aucune valeur hardcodée.

**Côté back** : les RPC `get_client_kpi` / `get_property_kpi` font un `SELECT params FROM scoring_config WHERE is_active = true AND domain=... AND metric=... AND (lifecycle_stage=... OR lifecycle_stage IS NULL)` en début d'exécution.

**Interface d'admin** (v2) : petite UI ou Notion synchronisé pour ajuster les sliders sans toucher au code. A/B testing possible (50% agents sur config A, 50% sur config B).

## Chantiers game design — notés pour v2
- **Asymétrie de courbe** : pondérer plus fort les premiers champs remplis (fonction log) pour récompense rapide au début + challenge en fin. Évite le découragement débutant et l'ennui expert.
- **Zones de confort glissantes** : thresholds relatifs à la médiane agent à l'étape courante (plutôt qu'absolus). Puissant mais complexe — à envisager quand on a de la vraie data.
- **Objectif game design** : donner envie d'agir + créer du sens de valeur, sans être ni trop positif (pas d'effort) ni trop négatif (découragement). Calibrage à itérer via la table `scoring_config` après phase de tests.

---

## Cycle de vie Client — 7 étapes (validé)

| # | Étape | Définition | Attendu QUAL | Attendu ENG | Attendu CONV |
|---|-------|------------|--------------|-------------|--------------|
| 1 | **lead** | Tout juste capté (formulaire, import, création manuelle). Aucune interaction qualifiée. | 0-20% normal | 0-10% normal | 0% normal |
| 2 | **prospect** | Premier contact établi. Qualification en cours. | 20-50% attendu | 10-40% attendu | 0-15% |
| 3 | **qualifié** | Data suffisante + potentiel identifié. | ≥60% requis | ≥40% attendu | 15-40% |
| 4 | **actif** | En cours de conversion (mandat en négo, visites, promesses…). | ≥70% | ≥60% | 40-75% |
| 5 | **converti** | Mandat signé OU carnet activé OU acte signé. | ≥80% | ≥50% (peut baisser post-conversion, normal) | ≥75% |
| 6 | **dormant** | Pas d'activité trackée depuis N jours (défaut N=90). | — | ↓ signale réactivation | — |
| 7 | **perdu** | Explicitement fermé (refus, désinscription, concurrent signé…). | — | — | — |

### Déclencheurs de transition proposés (à valider)

| De → Vers | Déclencheur |
|-----------|-------------|
| lead → prospect | 1er `activity_log.action='replied'` ou `action='opened'` ≥2 fois |
| prospect → qualifié | QUAL ≥ 60% **ET** au moins 1 event complété (RDV, appel, visite) |
| qualifié → actif | Création d'un `Mandate.status='negotiation'` OU `Visit.status='completed'` |
| actif → converti | `Mandate.status='signed'` OU `Carnet.status='activated'` OU `Deed.status='signed'` |
| * → dormant | `now() - max(activity_log.occurred_at) > 90 jours` (N paramétrable) |
| * → perdu | Action manuelle agent (`client.lifecycle_stage = 'lost'`) OU automatisation de nettoyage |

Note : `dormant` est un état **transversal** qui peut venir de prospect, qualifié ou actif. Retour possible vers l'étape précédente si activité reprend.

---

## KPI Client · Qualification (QUAL) — finalisé

**Intention** : mesurer le % de complétude des données client pertinentes.

**Formule** :
```
QUAL = 100 × ( Σ poids_champ_rempli / Σ poids_champ_applicable )
```
- Poids _applicable_ = le champ compte dans le dénominateur pour ce statut et ce contexte.
- Poids _rempli_ = le champ compte dans le numérateur (complété = 1, partiel = 0.5, vide = 0).
- Un client multi-statut (`['propriétaire','acquéreur']`) → **union des champs applicables**.

### Matrice des poids (validée)

**Légende** : poids brut 1-5 × applicabilité par statut. ✅ = applicable · — = ignoré · ⚙️ = conditionnel (voir notes).

| Groupe | Champ | Poids | Propriétaire | Acquéreur | Bailleur | Locataire | Notes |
|---|---|---|---|---|---|---|---|
| **Identité critique** | client_first_name | 5 | ✅ | ✅ | ✅ | ✅ | |
| | client_last_name | 5 | ✅ | ✅ | ✅ | ✅ | |
| | client_primary_email | 5 | ✅ | ✅ | ✅ | ✅ | |
| | client_mobile_phone | 5 | ✅ | ✅ | ✅ | ✅ | |
| **Identité étendue** | client_gender | 1 | ✅ | ✅ | ✅ | ✅ | |
| | client_date_of_birth | 3 | ✅ | ✅ | ✅ | ✅ | Acte notarié |
| | client_place_of_birth | 1 | ✅ | ✅ | ✅ | ✅ | Acte notarié |
| | client_nationality | 2 | ✅ | ✅ | ✅ | ✅ | Acte notarié |
| | client_marital_status | 3 | ✅ | ✅ | ✅ | ✅ | Mandat/acte |
| | client_address | 3 | ✅ | ✅ | ✅ | ✅ | Partiel : 0.5 si incomplet |
| | client_secondary_email | 1 | ✅ | ✅ | ✅ | ✅ | Backup |
| | preferred_channel | 2 | ✅ | ✅ | ✅ | ✅ | Alimente ENG |
| | preferred_language | 2 | ✅ | ✅ | ✅ | ✅ | Personnalisation |
| | rgpd_consent_date | 3 | ✅ | ✅ | ✅ | ✅ | Conformité légale (null = 0) |
| | marketing_consent | 2 | ✅ | ✅ | ✅ | ✅ | Valide true OU false, seul null = 0 |
| **Professionnel** | client_job_title | 2 | ⚙️(1) | ✅(3) | ⚙️(1) | ✅(4) | Poids modulé par statut |
| | client_employer | 2 | ⚙️(1) | ✅(3) | ⚙️(1) | ✅(4) | |
| | client_income_bracket | 3 | ⚙️(1) | ✅(5) | ⚙️(1) | ✅(5) | Critique acquéreur/locataire |
| | client_siren | 1 | ⚙️ | ⚙️ | ⚙️ | ⚙️ | Pros uniquement |
| **KYC** | cni_url OR passport_url | 4 | ✅ | ✅ | ✅ | ✅ | 1 slot, 1 des 2 suffit |
| | cni_expiry OR passport_expiry | 2 | ✅ | ✅ | ✅ | ✅ | Aligné au slot ci-dessus |
| | kbis_url | 2 | ⚙️ | ⚙️ | ⚙️ | ⚙️ | Pros uniquement |
| **Propriétaire / Bailleur** | total_owned_properties | 3 | ✅ | — | ✅ | — | |
| | properties_for_sale_count | 2 | ✅ | — | — | — | |
| | properties_under_mgmt_count | 2 | — | — | ✅ | — | |
| | title_deed_url | 4 | ✅ | — | ✅ | — | Indispensable mandat vente |
| **Acquéreur / Locataire** | pay_slip_url | 4 | — | ✅ | — | ✅ | |
| | tax_statement_url | 3 | — | ✅ | — | ✅ | |
| | loan_offer_url | 5 | — | ✅ | — | — | Game-changer acquéreur |
| | financing_expiry_date | 2 | — | ✅ | — | — | |
| | has_active_search_mandate (dérivé) | 4 | — | ✅ | — | ✅ | Booléen : Deal `mandat_recherche` actif lié au client |
| **Historique transactionnel** (conditionnel) | past_transaction.transaction_type | 3 | ⚙️* | — | ⚙️* | — | * Applicable SI au moins 1 ligne `client_past_transaction` existe |
| | past_transaction.transaction_date | 2 | ⚙️* | — | ⚙️* | — | |
| | past_transaction.amount | 4 | ⚙️* | — | ⚙️* | — | |
| | past_transaction.loan_amount | 2 | ⚙️* | — | ⚙️* | — | Si acquisition |
| | past_transaction.loan_rate | 2 | ⚙️* | — | ⚙️* | — | |
| | past_transaction.loan_duration_years | 1 | ⚙️* | — | ⚙️* | — | |
| | past_transaction.loan_start_date | 2 | ⚙️* | — | ⚙️* | — | |
| | past_transaction.loan_end_date | 1 | ⚙️* | — | ⚙️* | — | Breakeven, conseils timing |
| **Méta** | source | 1 | ✅ | ✅ | ✅ | ✅ | |
| | notes | 1 | ✅ | ✅ | ✅ | ✅ | |

**Exclus** (système / auto / circularité) : `client_id`, `organization_id`, `agent_id`, `client_status`, `is_active`, `client_qualification_score`, `client_reactivation_score`, `trigger_count`, `created_at`, `updated_at`.

**Note critères de recherche acquéreur** : `search_criteria_summary` et les critères détaillés (budget, surface, localisation, type…) **ne sont pas scorés ici**. Ils sont portés par `Deal` de type `mandat_recherche` et entreront dans QUAL Affaire (phase ultérieure). Côté QUAL Client acquéreur, on vérifie juste via `has_active_search_mandate` qu'une affaire de recherche existe.

**Note entrée en base acquéreur** : un client acquéreur entre typiquement en base en même temps qu'une opportunité d'affaire. Le tronc commun de données (profil/contact/pro) est scoré comme les autres statuts. Le complément (critères recherche) est scoré dans QUAL Affaire. Les deux se complètent pour la lecture globale.

### Mapping QUAL → Accordéons SheetEditProfilClient (validé)

La matrice QUAL ci-dessus alimente directement la structure d'édition. Correspondance blocs :

| Accordéon Sheet | Champs QUAL scorés | Champs QUAL hors matrice (non scorés mais éditables) |
|---|---|---|
| **A — Identité** (déplié) | first_name, last_name, gender, DOB, place_birth, nationality, marital_status | client_status (exclus QUAL car méta), is_active (méta) |
| **B — Contact** (déplié) | primary_email, mobile_phone, address, secondary_email, preferred_channel | — |
| **C — Professionnel** | job_title, employer, income_bracket, siren | — |
| **D — Documents KYC** | cni_url OR passport_url, cni_expiry OR passport_expiry, kbis_url | — |
| **E — Patrimoine** (conditionnel) | total_owned_properties, properties_for_sale_count, properties_under_mgmt_count, title_deed_url | — |
| **F — Financement** (conditionnel) | pay_slip_url, tax_statement_url, loan_offer_url, financing_expiry_date | search_criteria_summary (non scoré QUAL Client, scoré QUAL Affaire) |
| **G — Métadonnées** | source, notes | — |

**Champs QUAL scorés mais NON dans les accordéons** (dérivés/système) :
- `preferred_language` → à ajouter en BDD (colonne manquante dans xlsx, à créer)
- `rgpd_consent_date` → à ajouter en BDD (conformité légale)
- `marketing_consent` → à ajouter en BDD (canaux campagne)
- `has_active_search_mandate` → dérivé de `deal`, pas éditable
- `past_transaction.*` (8 champs) → table séparée `client_past_transaction`, pas dans le Sheet Client direct (future Sheet dédiée ou section dans Fiche)

**Delta BDD à résoudre en migration** : 3 colonnes à ajouter à `clients` (`preferred_language`, `rgpd_consent_date`, `marketing_consent`). Table `client_past_transaction` déjà prévue.

### Seuils adaptatifs QUAL Client (validés)

| Étape | error | warning | success | Commentaire |
|-------|-------|---------|---------|-------------|
| lead | <10 | 10-25 | >25 | Nom + email + tél déjà ~15% |
| prospect | <25 | 25-50 | >50 | Qualification active en cours |
| qualifié | <50 | 50-70 | >70 | Seuil de transition vers actif |
| actif | <65 | 65-80 | >80 | Mandat en négo → data critique |
| converti | <75 | 75-90 | >90 | Acte signé → tout doit être propre |
| **dormant** | **<5** | **5-15** | **>15** | **Ultra-indulgent : voir Leviers dormant** |
| perdu | — | — | — | N/A (pas d'affichage scoring) |

### Leviers dormant (validés) — use case critique import massif

**Levier A — Repositionnement du KPI principal**
Sur la fiche d'un client `dormant`, le KpiIndicator affiché en position principale est **REAC** (Réactivation), pas QUAL. QUAL passe en position secondaire. Game design : l'agent voit **une opportunité**, pas un reproche.

**Levier B — Thresholds QUAL ultra-indulgents**
À l'étape dormant, QUAL passe en vert dès 15% (cf. tableau ci-dessus). Objectif : ne pas noyer l'agent sous un dashboard rouge après l'import initial.

**Levier C — Trajectoire visuelle motivante**
Quand un dormant redevient `prospect` (réponse à un message de réactivation), QUAL se recalcule avec les seuils normaux. L'agent voit un **mouvement** (vert indulgent → jaune normal) interprété comme un challenge à relever.

**Levier D — Indicateur "opportunité de qualification"**
Sur la fiche dormant, afficher un message positif : _"Opportunité de qualification : +35% possibles en collectant X, Y, Z"_. Formulation gain-oriented, jamais deficit-oriented.

---

## Table `client_past_transaction` (validée — à créer en migration)

```sql
create table public.client_past_transaction (
  id                  uuid primary key default gen_random_uuid(),
  client_id           uuid not null references public.clients on delete cascade,
  property_id         uuid references public.properties,
  transaction_type    text check (transaction_type in ('acquisition','sale','rental_tenant','rental_landlord')),
  transaction_date    date,
  amount              numeric,
  loan_amount         numeric,
  loan_rate           numeric,
  loan_duration_years int,
  loan_start_date     date,
  loan_end_date       date,
  monthly_payment     numeric,
  notary_fees         numeric,
  agency_fees         numeric,
  is_from_our_agency  boolean default false,
  notes               text,
  source              text check (source in ('agent','client','imported')),
  created_at          timestamptz default now(),
  updated_at          timestamptz default now()
);
create index on public.client_past_transaction (client_id);
```

**Champs à ajouter sur `public.clients` par migration séparée** :
```sql
alter table public.clients
  add column if not exists preferred_language   text,
  add column if not exists rgpd_consent_date    timestamptz,
  add column if not exists marketing_consent    boolean,
  add column if not exists lifecycle_stage      text check (lifecycle_stage in ('lead','prospect','qualified','active','converted','dormant','lost')) default 'lead';
```

---

## `scoring_config.params` — QUAL Client (version 2026-04-v1)

Structure JSON prête à insérer. Une ligne `scoring_config` par étape du cycle de vie (`lifecycle_stage`). Les poids de base (weights) sont globaux ; les thresholds et le modulateur de statut changent selon l'étape.

```json
{
  "formula": "weighted_completion",
  "scale": "0-100",
  "multi_status_policy": "union",
  "weights": {
    "client_first_name": { "weight": 5, "applies_to": ["owner","buyer","landlord","tenant"] },
    "client_last_name":  { "weight": 5, "applies_to": ["owner","buyer","landlord","tenant"] },
    "client_primary_email": { "weight": 5, "applies_to": ["owner","buyer","landlord","tenant"] },
    "client_mobile_phone":  { "weight": 5, "applies_to": ["owner","buyer","landlord","tenant"] },
    "client_gender":           { "weight": 1, "applies_to": ["owner","buyer","landlord","tenant"] },
    "client_date_of_birth":    { "weight": 3, "applies_to": ["owner","buyer","landlord","tenant"] },
    "client_place_of_birth":   { "weight": 1, "applies_to": ["owner","buyer","landlord","tenant"] },
    "client_nationality":      { "weight": 2, "applies_to": ["owner","buyer","landlord","tenant"] },
    "client_marital_status":   { "weight": 3, "applies_to": ["owner","buyer","landlord","tenant"] },
    "client_address":          { "weight": 3, "applies_to": ["owner","buyer","landlord","tenant"], "partial_allowed": true },
    "client_secondary_email":  { "weight": 1, "applies_to": ["owner","buyer","landlord","tenant"] },
    "preferred_channel":       { "weight": 2, "applies_to": ["owner","buyer","landlord","tenant"] },
    "preferred_language":      { "weight": 2, "applies_to": ["owner","buyer","landlord","tenant"] },
    "rgpd_consent_date":       { "weight": 3, "applies_to": ["owner","buyer","landlord","tenant"], "null_is_zero": true },
    "marketing_consent":       { "weight": 2, "applies_to": ["owner","buyer","landlord","tenant"], "null_is_zero": true, "accepts_false": true },
    "client_job_title":      { "weight_by_status": { "owner": 1, "buyer": 3, "landlord": 1, "tenant": 4 } },
    "client_employer":       { "weight_by_status": { "owner": 1, "buyer": 3, "landlord": 1, "tenant": 4 } },
    "client_income_bracket": { "weight_by_status": { "owner": 1, "buyer": 5, "landlord": 1, "tenant": 5 } },
    "client_siren":          { "weight": 1, "applies_to": ["owner","buyer","landlord","tenant"], "only_if": "client.is_professional = true" },
    "kyc_id_slot":       { "weight": 4, "applies_to": ["owner","buyer","landlord","tenant"], "any_of": ["cni_url","passport_url"] },
    "kyc_id_expiry_slot":{ "weight": 2, "applies_to": ["owner","buyer","landlord","tenant"], "any_of": ["cni_expiry_date","passport_expiry_date"] },
    "kbis_url":          { "weight": 2, "applies_to": ["owner","buyer","landlord","tenant"], "only_if": "client.is_professional = true" },
    "total_owned_properties":     { "weight": 3, "applies_to": ["owner","landlord"] },
    "properties_for_sale_count":  { "weight": 2, "applies_to": ["owner"] },
    "properties_under_mgmt_count":{ "weight": 2, "applies_to": ["landlord"] },
    "title_deed_url":             { "weight": 4, "applies_to": ["owner","landlord"] },
    "pay_slip_url":         { "weight": 4, "applies_to": ["buyer","tenant"] },
    "tax_statement_url":    { "weight": 3, "applies_to": ["buyer","tenant"] },
    "loan_offer_url":       { "weight": 5, "applies_to": ["buyer"] },
    "financing_expiry_date":{ "weight": 2, "applies_to": ["buyer"] },
    "has_active_search_mandate": { "weight": 4, "applies_to": ["buyer","tenant"], "derived_from": "exists(deal where client_id=? AND type='mandat_recherche' AND status='active')" },
    "past_tx.transaction_type":    { "weight": 3, "applies_to": ["owner","landlord"], "only_if": "exists(client_past_transaction)" },
    "past_tx.transaction_date":    { "weight": 2, "applies_to": ["owner","landlord"], "only_if": "exists(client_past_transaction)" },
    "past_tx.amount":              { "weight": 4, "applies_to": ["owner","landlord"], "only_if": "exists(client_past_transaction)" },
    "past_tx.loan_amount":         { "weight": 2, "applies_to": ["owner","landlord"], "only_if": "exists(client_past_transaction where transaction_type='acquisition')" },
    "past_tx.loan_rate":           { "weight": 2, "applies_to": ["owner","landlord"], "only_if": "exists(client_past_transaction where transaction_type='acquisition')" },
    "past_tx.loan_duration_years": { "weight": 1, "applies_to": ["owner","landlord"], "only_if": "exists(client_past_transaction where transaction_type='acquisition')" },
    "past_tx.loan_start_date":     { "weight": 2, "applies_to": ["owner","landlord"], "only_if": "exists(client_past_transaction where transaction_type='acquisition')" },
    "past_tx.loan_end_date":       { "weight": 1, "applies_to": ["owner","landlord"], "only_if": "exists(client_past_transaction where transaction_type='acquisition')" },
    "source": { "weight": 1, "applies_to": ["owner","buyer","landlord","tenant"] },
    "notes":  { "weight": 1, "applies_to": ["owner","buyer","landlord","tenant"] }
  }
}
```

**Par étape (thresholds)** — une ligne `scoring_config` distincte par `lifecycle_stage` :

```json
{ "lead":      { "thresholds": { "error": 10, "warning": 25 } } }
{ "prospect":  { "thresholds": { "error": 25, "warning": 50 } } }
{ "qualified": { "thresholds": { "error": 50, "warning": 70 } } }
{ "active":    { "thresholds": { "error": 65, "warning": 80 } } }
{ "converted": { "thresholds": { "error": 75, "warning": 90 } } }
{ "dormant":   { "thresholds": { "error": 5,  "warning": 15 }, "display_mode": "secondary", "primary_kpi": "reactivation" } }
```

---

## KPI Client · Engagement (ENG)

**Intention** : mesurer réceptivité, réactivité et propension à réagir favorablement aux actions et messages.

### ENG Client — FINALISÉ ✅

**Formule** :
`ENG = min(100, recent_bonus × 100 × (Σ(signal × weight × exp(-age_days / (half_life × status_coef))) / Σ(opportunity × weight)))`

**Fenêtre effective** = `base_window_days × status_coef` (priorité lifecycle_stage, modulation par statut).

**Coefficients de captivité par statut** :
- `owner` / `landlord` : **1.00** (captif pendant mandat)
- `tenant` : **0.75**
- `buyer` : **0.70** (moins captif, forte concurrence → exigence rythme plus soutenue)

**Multi-statut** : policy `min_coef` (l'exigence s'aligne sur le statut le moins captif).

**Table fenêtres adaptatives (base × statut)** :

| Stage | Base | owner/landlord | buyer (×0.7) | tenant (×0.75) |
|---|---|---|---|---|
| lead | 90j / hl 45j | 90/45 | 63/32 | 68/34 |
| prospect | 60j / hl 30j | 60/30 | 42/21 | 45/23 |
| qualified | 45j / hl 21j | 45/21 | 32/15 | 34/16 |
| active | 21j / hl 10j | 21/10 | 15/7 | 16/8 |
| converted | 60j / hl 30j | 60/30 | 42/21 | 45/23 |
| dormant | 120j / hl 60j | 120/60 | 84/42 | 90/45 |

**Héritages spéciaux** :
- **Converted** : héritage partiel de l'ENG `active` au moment de la transition (ratio 0.50), décroissance linéaire vers calcul natif sur 30 jours.
- **Cycle reset** (converted→lead, dormant→lead, lost→lead) : plancher à 30% de l'ENG précédent pendant 14j, puis natif.

**Signaux pondérés (weight / opportunity)** :
- inbound_call 15/10 · outbound_call_answered 10/10 · outbound_call_missed 2/5
- email_replied 12/8 · email_opened 5/5 · email_sent 3/5
- sms_replied 10/6 · sms_sent 3/4
- meeting_held 20/15 · meeting_scheduled 15/12 · meeting_no_show -5/10
- document_signed 18/10 · document_sent 5/6
- listing_viewed 6/4 · portal_visit 4/3

**Thresholds par stage** :
- lead 5/20 · prospect 15/40 · qualified 30/55 · active 50/75 · converted 10/30 · dormant 5/15

**Sources data** :
- `activity_log` (entity_type='client'), `event` (RDV), `automation_run` (campagnes), `document` (signatures).

JSON complet `scoring_config.params` → voir conversation / à persister en migration lors de Phase 5.

---

## KPI Client · Conversion (CONV) — FINALISÉ ✅

**Formule** : `CONV_client = max(CONV_deal_i pour deal_i ∈ deals_actifs) + bonus_carnet`
**Agrégation** : `max` · **Exclusion** : deals `lost`/`cancelled` ignorés.

### Matrices milestones (échelle continue 0→100)

**Mandat de vente** (owner) : estimation_requested 10 · estimation_delivered 20 · estimation_signed 30 · mandat_draft 40 · mandat_sent 50 · **mandat_signed 60** · listing_published 65 · visit_held 70 · offer_received 80 · offer_accepted 85 · compromis_signed 92 · conditions_lifted 96 · **acte_signed 100**

**Mandat de recherche** (buyer) : brief_captured 15 · mandat_recherche_draft 30 · **mandat_recherche_signed 55** · property_proposed 60 · visit_held 70 · offer_submitted 82 · offer_accepted 88 · compromis_signed 93 · conditions_lifted 97 · **acte_signed 100**

**Mandat de gestion locative** (landlord) : gestion_brief 15 · gestion_draft 40 · **gestion_signed 70** · first_rent_collected 90 · **12_months_active 100**

**Mandat de location** (landlord) : location_brief 15 · **location_mandate_signed 55** · candidate_qualified 70 · bail_signed 90 · **tenant_installed 100**

**Bail / location** (tenant) : search_brief 15 · visit_held 40 · dossier_complete 60 · dossier_accepted 80 · **bail_signed 100**

### Bonus carnet d'entretien — **+10** (surpondéré)
Capped à 100. Visible uniquement au stage `converted`. Incitation stratégique : l'activation du carnet est un enjeu produit RealAgent fort.

### Thresholds par stage
| Stage | Error | Warning |
|---|---|---|
| lead | 0 | 10 |
| prospect | 10 | 25 |
| qualified | 20 | 45 |
| active | 45 | 70 |
| converted | 85 | 95 |
| dormant | 0 | 5 |

### Schéma data
- `deal` : compléter avec `type`, `status`, `current_milestone`
- `deal_milestone_event` (nouvelle) : `id, deal_id, milestone, occurred_at, created_by, metadata jsonb`
- `property.maintenance_book_active: boolean`

---

## KPI Client · Réactivation (REAC) — validé
`REAC = 0.5·ΔENG + 0.3·ΔCONV + 0.2·ΔQUAL`
- Calculé **seulement si** `now() - last_activity > N jours` (N=90 par défaut, à caler).
- Delta = variation vs snapshot J-30 (fenêtre à valider).

---

## KPI Bien · Qualification (QUAL Bien) — finalisé

**Intention** : mesurer le % de complétude des données descriptives du bien.

**Formule** :
```
QUAL_Bien = 100 × ( Σ poids_champ_rempli / Σ poids_champ_applicable )
```
- Même logique que QUAL Client : poids applicable dépend du `property_type`.
- Conditionnalité : copropriété (appartement seulement), `land_area_sqm` (maison/terrain), `pool_type` (si has_pool), chambres 3-4 (si number_of_rooms ≥ 4/5).

### Matrice des poids QUAL Bien (validée)

| Groupe | Champ | Poids | Conditionnel | Notes |
|---|---|---|---|---|
| **Identification critique** | property_type | 5 | Non | Required |
| | property_status | 5 | Non | Required |
| | address_full | 5 | Non | Required, partiel=0.5 si incomplet |
| | property_condition | 3 | Non | |
| | construction_year | 3 | Non | Acte notarié |
| | floor_level | 2 | Appartement | |
| | number_of_floors | 1 | Appartement | |
| | has_elevator | 1 | Appartement | |
| **Surfaces** | living_area_sqm | 5 | Non | Required |
| | land_area_sqm | 4 | Maison/Terrain | |
| | number_of_rooms | 4 | Non | |
| | main_room_area_sqm | 3 | Non | |
| | bedroom_count | 3 | Non | |
| | bedroom1_area_sqm | 2 | Si rooms ≥ 1 | |
| | bedroom2_area_sqm | 2 | Si rooms ≥ 2 | |
| | bedroom3_area_sqm | 1 | Si rooms ≥ 3 | |
| | bedroom4_area_sqm | 1 | Si rooms ≥ 4 | |
| | kitchen_area_sqm | 2 | Non | |
| | kitchen_type | 1 | Non | |
| | bathroom_count | 2 | Non | |
| | shower_room_count | 1 | Non | |
| | toilet_count | 1 | Non | |
| | terrace_area_sqm | 1 | Non (0 = pas de terrasse) | |
| | balcony_area_sqm | 1 | Non | |
| | garden_area_sqm | 2 | Maison | |
| | basement_area_sqm | 1 | Non | |
| | attic_area_sqm | 1 | Non | |
| | parking_type | 2 | Non | |
| | parking_spot_count | 1 | Si parking ≠ aucun | |
| **Équipements** | heating_type | 3 | Non | Annonce obligatoire |
| | hot_water_system | 2 | Non | |
| | has_intercom | 1 | Non | |
| | has_home_automation | 1 | Non | |
| | has_pool | 1 | Non | |
| | pool_type | 1 | Si has_pool | |
| | main_exposure | 2 | Non | Critère recherche |
| | main_view_type | 2 | Non | Critère recherche |
| **DPE** | dpe_energy_class | 4 | Non | **Obligation légale** |
| | dpe_gas_emission_class | 4 | Non | Obligation légale |
| | dpe_energy_kwh | 2 | Non | |
| | dpe_gas_gco2 | 2 | Non | |
| | dpe_validity_date | 3 | Non | Alerte expiration |
| | dpe_compliance_deadline | 2 | Non | Loi Climat |
| **Valeur & Annonce** | estimated_market_value | 4 | Non | |
| | estimated_market_value_per_sqm | 2 | Non | Dérivé |
| | desired_selling_price | 4 | Si status = à vendre | |
| **Entretien** | has_maintenance_log | 3 | Non | Carnet |
| | maintenance_log_creation_date | 1 | Si has_maintenance_log | |
| | last_maintenance_date | 2 | Non | |
| **Quartier** | neighborhood_name | 2 | Non | |
| | proximity_to_shops | 1 | Non | |
| | proximity_to_schools | 1 | Non | |
| | proximity_to_daycares | 1 | Non | |
| | proximity_to_transport | 1 | Non | |
| | proximity_to_highways | 1 | Non | Nuisances |
| **Copropriété** (via co_ownership_id) | type_copro | 2 | Appartement | |
| | nombre_lots | 1 | Appartement | |
| | charges_annuelles | 3 | Appartement | Critère acheteur |
| | procedures_en_cours | 2 | Appartement | |

**Exclus** (système) : `property_id`, `organization_id`, `client_id`, `agent_id`, `co_ownership_id`, `listing_id`, `listing_status`, `listing_publication_date`, `created_at`, `updated_at`.

### Seuils adaptatifs QUAL Bien (validés)

Pas de lifecycle stages pour le bien — seuils uniques basés sur `property_status` :

| Statut | error | warning | success | Commentaire |
|--------|-------|---------|---------|-------------|
| off market | <15 | 15-35 | >35 | Fiche interne, pression faible |
| à vendre / à louer | <40 | 40-70 | >70 | Annonce en jeu, data critique |
| vendu / loué | <60 | 60-80 | >80 | Archivage, complétude historique |
| en viager | <50 | 50-75 | >75 | Complexité juridique |

---

## KPI Bien · Entretien (ENT) — finalisé

**Intention** : mesurer la qualité du suivi d'entretien du bien. Levier gamification pour inciter agents et propriétaires à maintenir leurs biens.

**Formule** :
```
ENT = weighted_avg(
  carnet_actif        × 25,   // has_maintenance_log = true → 100, false → 0
  fraicheur_entretien × 20,   // 100 × exp(-jours_depuis_dernier_entretien / 180)
  dpe_conformite      × 18,   // DPE valide + conforme loi Climat
  diagnostics_auto    × 15,   // questionnaires auto-évaluation app client (ratio complétés/disponibles)
  doc_complets        × 12,   // diagnostics officiels à jour (ratio renseignés/attendus)
  suivi_financier     × 10    // charges copro renseignées, procédures documentées (conditionnel copro)
)
```

### Détail des composantes

**1. carnet_actif (poids 25)** — Composante binaire.
- `has_maintenance_log = true` → 100
- `has_maintenance_log = false` → 0
- Le carnet d'entretien est la feature phare RealAgent côté bien. Poids dominant.

**2. fraicheur_entretien (poids 20)** — Decay exponentiel.
- `100 × exp(-jours_depuis_dernier_entretien / 180)`
- Half-life ~6 mois. À 6 mois → ~37%. À 1 an → ~13%. Jamais d'entretien → 0.
- Source : `last_maintenance_date` OU dernier event dans `property_maintenance_log`.

**3. dpe_conformite (poids 18)** — Conformité énergétique.
- 100 : DPE valide ET classe ≤ D (conforme loi Climat à date)
- 70 : DPE valide, classe E (deadline 2034 pas encore atteinte)
- 40 : DPE valide, classe F (deadline 2028 en approche)
- 20 : DPE valide, classe G (interdit à la location depuis 2025)
- 0 : DPE expiré OU absent
- Source : `dpe_energy_class`, `dpe_validity_date`, `dpe_compliance_deadline`

**4. diagnostics_auto (poids 15)** — Questionnaires auto-évaluation app client.
- `100 × (questionnaires_complétés / questionnaires_disponibles)`
- Topics disponibles selon `property_type` : plomberie, électricité, isolation, toiture, menuiseries, chauffage, humidité (7 topics de base, extensible).
- Un questionnaire complété ne remplace pas un diagnostic officiel mais mesure l'implication du propriétaire/agent et alimente la recommandation "professionnel nécessaire ?".
- Source : table `property_diagnostic_questionnaire` (nouvelle).

**5. doc_complets (poids 12)** — Diagnostics officiels.
- Ratio documents diagnostics renseignés / documents attendus.
- Documents attendus varient selon le bien : DPE (tous), amiante (si construction < 1997), plomb (si < 1949), électricité (si installation > 15 ans), gaz (si installation gaz > 15 ans), ERP (tous en vente).
- Source : table `documents` filtrée par `property_id` + `document_type`.

**6. suivi_financier (poids 10)** — Copropriété.
- Conditionnel : `property_type = appartement` ET `co_ownership_id` non null.
- 100 : charges annuelles renseignées + procédures documentées (même "aucune").
- 50 : charges renseignées mais procédures non documentées.
- 0 : rien renseigné.
- Si non-copropriété (maison), cette composante est exclue et les poids redistribués proportionnellement.

### Seuils ENT (validés)

| error | warning | success |
|-------|---------|---------|
| <30 | 30-60 | >60 |

Seuils uniques (pas par lifecycle — le bien n'a pas de stage lead/prospect).

### Schéma data — table `property_diagnostic_questionnaire` (nouvelle)

```sql
create table public.property_diagnostic_questionnaire (
  id              uuid primary key default gen_random_uuid(),
  property_id     uuid not null references public.properties on delete cascade,
  topic           text not null check (topic in (
    'plomberie','electricite','isolation','toiture','menuiseries','chauffage','humidite'
  )),
  completed_at    timestamptz not null default now(),
  score           integer check (score between 0 and 100),
  recommendation  text check (recommendation in ('ok','monitor','professional_needed')),
  answered_by     text check (answered_by in ('owner','agent')),
  answers_json    jsonb,        -- réponses brutes du questionnaire
  created_at      timestamptz default now(),
  updated_at      timestamptz default now(),
  unique (property_id, topic)   -- un seul questionnaire actif par topic par bien
);
create index on public.property_diagnostic_questionnaire (property_id);
```

---

## KPI Bien · Conversion (CONV Bien) — finalisé

**Intention** : mesurer l'avancement vers la transaction, vu depuis le bien.

**Formule** :
```
CONV_Bien = max(CONV_deal_i pour deals actifs liés au bien)
```

- Mêmes matrices de milestones que CONV Client (vente, location, gestion, bail, recherche).
- Un bien peut avoir plusieurs Deals simultanés (ex: mandat vente + gestion locative) → on prend le max.
- Les Deals `lost`/`cancelled` sont exclus.
- **Pas de bonus carnet** ici (le carnet est déjà capturé dans KPI Entretien).

### Seuils CONV Bien (validés)

Identiques à CONV Client par lifecycle stage du Deal :

| Étape deal | error | warning | success |
|------------|-------|---------|---------|
| prospection | <5 | 5-15 | >15 |
| négociation | <20 | 20-40 | >40 |
| sous compromis | <50 | 50-70 | >70 |
| acte final | <75 | 75-90 | >90 |

### Binding BDD

- Même source que CONV Client : `deal` + `deal_milestone_event` filtrés par `deal.property_id`.
- RPC : `get_property_scores(property_id)` → `{qual, entretien, conv, breakdowns}`

---

## Questions ouvertes à traiter en session
1. Liste exhaustive des champs contributeurs QUAL Client (depuis table `Client` enrichie).
2. Pondérations ENG (ouverture vs clic vs réponse vs RDV honoré).
3. Liste complète des éléments convertibles (CONV).
4. Fenêtres temporelles : 30j, 60j, 90j ?
5. Valeur définitive de N pour le seuil `dormant`.
6. Thresholds par étape : les valeurs du tableau ci-dessus sont des propositions — à calibrer métier.
