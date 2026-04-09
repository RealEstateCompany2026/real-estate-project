# RealAgent — Mémoire Projet
> Dernière mise à jour : 9 avril 2026 — Refactoring P08/P09 complet (DS cleanup, hooks data, pages)

## Identité projet

- **Nom** : RealAgent — CRM immobilier SaaS
- **Fondateur** : Damien (damien@1936.ai)
- **Cible** : Agents immobiliers français (4 personas)
- **Stade** : Pré-développement (design Figma + refactoring composants en cours)

---

## Personas

| Code | Profil | Description |
|------|--------|-------------|
| A | Agent indépendant | Solo, pas d'agence |
| B | Directeur d'agence | Admin, gère une équipe |
| C | Agent en agence | Collaborateur sous un directeur |
| D | Gestionnaire locatif | Spécialisé location/gestion |

---

## Décisions actées (NE PAS REMETTRE EN QUESTION)

### Codification des écrans
- **Source de vérité** : les 19 documents docx de spécification (vague1_01_signup.docx → vague3_19_reactivation_base.docx)
- **168 écrans** répartis sur **19 parcours** et **3 vagues**
- **Préfixes** : SUP, SIN, OBT, OBS, IMP, CLI, BIE, FIC, FIB, AFF, EVT, DOC, AUD, ANN, AIA, DET, CAM, CRM, REA
- **Format ID** : `{PREFIXE}-{NUM}` (ex: SUP-01, FIC-10, AFF-12)
- **Variantes** : suffixe lettre (ex: SUP-05A pour persona A/D, SUP-05B pour persona B/C)
- ⚠️ NE JAMAIS inventer de nouveaux IDs (LOG-01, TAB-01, PAR-01, etc.) — cette erreur a déjà été faite et corrigée

### Architecture technique
- **Frontend** : Next.js (App Router, React Server Components)
- **Backend** : Supabase (Auth + RLS + Vault + Realtime + Storage + Edge Functions)
- **Région** : EU-West (RGPD)
- **Cache client** : React Query (TanStack Query) — pas de Redis en V1
- **Déploiement** : Vercel

### Services tiers retenus
- **Email** : Brevo (ou Resend en alternative)
- **SMS** : Brevo (ou Twilio)
- **WhatsApp** : Brevo (ou Twilio)
- **Carte** : Google Maps (geocoding en cache, coordonnées stockées en BDD)
- **Signature** : Yousign (API, facturation à l'acte)
- **Stockage docs** : Supabase Storage (buckets par agency_id/entity_type/entity_id)

### Production des écrans
- **Outil** : Figma Make (avec guidelines + prompts TC-EBC)
- ⚠️ PAS de JSX isolé — cette approche a été testée et abandonnée
- **Workflow** : Production par vagues dans Figma Make → handoff incrémental vers le dev

### Design System
- **Nom** : "Real Estate"
- **Couleur branded** : #7B72F9 (purple)
- **Police** : Roboto
- **Tokens** : 3 couches (Brand palette → Alias → Mapped). Toujours utiliser les tokens Mapped (light/dark aware)
- **NavRail** : 90px, vertical, 8 sections, 3 états (default/hover/selected)
- **AppBar** : 11 variantes (category, fiche client, fiche bien, fiche affaire, etc.)
- **Segment température** : 5 niveaux (chaud/tiède/froid/dormant/inconnu) avec couleurs (error/warning/info/neutral/neutral)

---

## Structure des parcours

### Vague 1 — Fondations (55 écrans)
| # | Parcours | Préfixe | Écrans | Docx |
|---|----------|---------|--------|------|
| 1 | Sign-up | SUP | SUP-00→SUP-07 (9) | vague1_01_signup.docx |
| 2 | Sign-in | SIN | SIN-01→SIN-08 (8) | vague1_02_signin.docx |
| 3 | Onboarding Product Tour | OBT | OBT-00→OBT-06 (9) | vague1_03_onboarding_tour.docx |
| 4 | Onboarding Setup | OBS | OBS-00→OBS-05 (6) | vague1_04_onboarding_setup.docx |
| 5 | Import BDD | IMP | IMP-01→IMP-07 (7) | vague1_05_import_bdd.docx |
| 6 | Ajouter un client | CLI | CLI-01→CLI-07 (7) | vague1_06_ajouter_client.docx |
| 7 | Ajouter un bien | BIE | BIE-01→BIE-09 (9) | vague1_07_ajouter_bien.docx |

### Vague 2 — Cœur métier (67 écrans)
| # | Parcours | Préfixe | Écrans | Docx |
|---|----------|---------|--------|------|
| 8 | Fiche client | FIC | FIC-01→FIC-10 (10) | vague2_08_fiche_client.docx |
| 9 | Fiche bien | FIB | FIB-01→FIB-11 (11) | vague2_09_fiche_bien.docx |
| 10 | Affaires | AFF | AFF-01→AFF-12 (12) | vague2_10_affaires.docx |
| 11 | Événements | EVT | EVT-01→EVT-09 (9) | vague2_11_evenements.docx |
| 12 | Documents | DOC | DOC-01→DOC-08 (8) | vague2_12_documents.docx |
| 13 | Audit BDD | AUD | AUD-01→AUD-08 (8) | vague2_13_audit_bdd.docx |
| 14 | Annonce immobilière | ANN | ANN-01→ANN-09 (9) | vague2_14_annonce.docx |

### Vague 3 — Intelligence & Intégrations (46 écrans)
| # | Parcours | Préfixe | Écrans | Docx |
|---|----------|---------|--------|------|
| 15 | Automatisations IA | AIA | AIA-01→AIA-09 (9) | vague3_15_automatisations_ia.docx |
| 16 | Détection mandat | DET | DET-01→DET-08 (8) | vague3_16_detection_mandat.docx |
| 17 | Campagne carnet | CAM | CAM-01→CAM-09 (9) | vague3_17_campagne_carnet.docx |
| 18 | Connexion CRM | CRM | CRM-01→CRM-10 (10) | vague3_18_connexion_crm.docx |
| 19 | Réactivation base | REA | REA-01→REA-10 (10) | vague3_19_reactivation_base.docx |

---

## Fichiers de référence (chemins)

| Fichier | Chemin | Contenu |
|---------|--------|---------|
| JSON écrans (source programmatique) | `/sessions/magical-amazing-noether/all_screen_ids.json` | 168 écrans avec ID, nom, description |
| XLSX référentiel production | `/sessions/magical-amazing-noether/mnt/outputs/referentiel_production.xlsx` | Suivi écrans + composants + atomes/organismes |
| Prompts Figma Make | `/sessions/magical-amazing-noether/mnt/outputs/figma-make-prompts/` | 168 fichiers .md (1 par écran) + index |
| Guidelines Figma Make | `/sessions/magical-amazing-noether/mnt/outputs/figma-make-guidelines/` | Design tokens, composants, navigation |
| Docx spécifications | `/sessions/magical-amazing-noether/mnt/outputs/vague*_*.docx` | 19 documents de spécification détaillés |
| Google Sheet BDD | `https://docs.google.com/spreadsheets/d/11t_yEH3YldcrmsP9vCUIo1bwNKFxxA48zHD8xMrpNpk` | 35 tables, 683 champs |
| Compléments BDD | `/sessions/magical-amazing-noether/mnt/outputs/bdd_complements_vagues_1_2_3.xlsx` | Tables complémentaires |
| Mémoire projet | `/sessions/magical-amazing-noether/mnt/outputs/PROJECT_MEMORY.md` | CE FICHIER |

---

## BDD Supabase

- **Project ID** : `wrakmsvdmsrpoiltysht`
- **Région** : eu-west-1
- **Spec Google Sheet** : 35 tables / ~683 champs
- **Déployé** : 39 tables (35 spec + 4 legacy) — **TOUTES LES TABLES SONT CRÉÉES** (24 mars 2026)
- RLS (Row Level Security) activé sur chaque table — isolation par organizationId
- Supabase Vault pour les secrets (clés API tierces)
- pg_cron pour les jobs planifiés
- **12 migrations** appliquées (voir `list_migrations`)
- **Schéma `client_app` créé** (26 mars 2026) — 14 tables, 35 enums, RLS activé sur toutes les tables
- **Table passerelle `AgentClientLink`** créée dans `public` (13 cols)
- **Colonne `referencePropertyId`** ajoutée sur `public.Property` (passerelle vers analytics)

### Architecture des utilisateurs
- **User** = table auth de base (tous les utilisateurs, 8 cols)
- **Agent** = profil métier de l'agent CRM (21 cols) — FK → User + Organization
- **Client** = profil client/propriétaire (47 cols) — FK → Agent + Organization

### Tables déployées (39) — schéma complet Supabase

#### Tables fondations
| Table | Cols | FK principales | Description |
|-------|------|----------------|-------------|
| **User** | 8 | → Organization | Auth user (tous types) |
| **Agent** | 21 | → User, → Organization | Profil agent CRM (specialty, onboarding, RSAC, notifications) |
| **Organization** | 16 | — | Agence immobilière (tenant) — siret, cartes T/G, RCP, réseau |
| **Subscription** | 16 | → Organization, → Agent | Abonnement/plan (Stripe, features, limites) |

#### Tables cœur métier
| Table | Cols | FK principales | Description |
|-------|------|----------------|-------------|
| **Client** | 47 | → Agent, → Organization | Contact client (RGPD: emailConsent, language) |
| **Property** | 68 | → Client, → Agent, → Organization, → CoOwnership, → Listing | Bien immobilier (completionScore, completionMissingFields) |
| **Deal** | 44 | → Client, → Property, → Agent, → Organization, → Listing, → Document (mandats), → ClientFinancing | Affaire (pipelineStage, conversionSource) |
| **Event** | 26 | → Client, → Property, → Deal, → Agent, → Organization | Événement (isTask, taskCompleted, recurrenceRule) |
| **Document** | 29 | → Client, → Property, → Deal, → Agent, → Organization | Document (templates, e-signature Yousign: esignExternalId, esignStatus) |
| **Message** | 19 | → Client, → Property, → Deal, → Agent, → Organization | Message email/SMS/WhatsApp (templateId) |
| **Listing** | 17 | → Property, → Agent, → Organization | Annonce immobilière (ALUR, slug, viewCount) |
| **Lead** | 13 | → Listing, → Agent, → Organization, → Client | Lead entrant (score, source, conversion) |

#### Tables analytiques
| Table | Cols | FK principales | Description |
|-------|------|----------------|-------------|
| **Trigger** | 22 | → Client, → Property, → Deal, → Agent, → Organization, → Playbook | Signal IA (signalSource, engagementContext) |
| **SaleAnalysis** | 24 | → Property, → Deal | Analyse de vente (estimation, momentum) |
| **LoanAnalysis** | 25 | → Client, → ClientFinancing | Analyse de prêt (renégociation, opportunité) |
| **ClientFinancing** | 27 | → Client, → Property, → Deal | Prêt immobilier (amortissement, simulation) |
| **CoOwnershipDetails** | 16 | → Property | Copropriété (syndic, charges, travaux) |
| **PropertyFiscalDetails** | 31 | → Property, → Client | Fiscalité bien (Pinel/LMNP/Malraux/Girardin…) |
| **AuditScore** | 11 | → Agent, → Organization | Score qualité BDD (complétude, cohérence, fraîcheur) |
| **DuplicatePair** | 10 | → Agent | Paire doublons détectés (client ou property) |
| **Notification** | 11 | → Agent, → Organization | Notification push/in-app |
| **ImportJob** | 17 | → Agent, → Organization | Job d'import CSV/XLSX |

#### Tables segmentation & réactivation (V3)
| Table | Cols | FK principales | Description |
|-------|------|----------------|-------------|
| **ClientSegment** | 14 | → Client, → Agent | Segmentation température (chaud/tiède/froid/dormant) |
| **ClientEngagementSignal** | 9 | → Client, → Agent | Signal d'engagement (email_opened, link_clicked…) |
| **SegmentTransition** | 10 | → Client, → Agent | Historique transitions de segment |
| **MandateSignal** | 16 | → Agent, → Client, → Property, → Deal | Signal détection mandat |
| **SignalAction** | 12 | → MandateSignal, → Agent | Action prise sur un signal |

#### Tables campagnes (V3)
| Table | Cols | FK principales | Description |
|-------|------|----------------|-------------|
| **Campaign** | 18 | → Agent, → Organization | Campagne email (carnet_entretien, newsletter, prospection) |
| **CampaignSend** | 19 | → Campaign, → Client, → Agent | Envoi individuel (tracking: open, click, bounce) |
| **EmailPreference** | 11 | → Client, → Agent | Préférences email / désabonnement (UNIQUE client+agent) |
| **Playbook** | 13 | → Agent, → Organization | Playbook de réactivation (steps JSONB, stats) |
| **PlaybookEnrollment** | 12 | → Playbook, → Client, → Agent, → Deal | Inscription playbook (stepHistory JSONB) |

#### Tables intégrations (V3)
| Table | Cols | FK principales | Description |
|-------|------|----------------|-------------|
| **Integration** | 15 | → Agent, → Organization | Connecteur CRM/portail (Vault credentials, circuit breaker) |
| **SyncLog** | 13 | → Integration, → Agent | Log sync inbound/outbound |
| **FieldMapping** | 10 | → Integration | Mapping champs local↔externe |
| **PortalPublication** | 14 | → Listing, → Integration, → Agent | Publication portail (SeLoger, LeBonCoin, BienIci…) |

#### Tables legacy (pré-existantes, à rationaliser)
| Table | Cols | Description |
|-------|------|-------------|
| **PropertyAgent** | 6 | Liaison agent↔bien (permissions) |
| **MaintenanceLog** | 6 | Carnet d'entretien |
| **OpportunityTrigger** | 4 | Déclencheur opportunité (à migrer vers Trigger/MandateSignal) |

### ~55 types ENUM définis
Principaux : ClientStatus, ClientGender, DealType, DealStatus, PipelineStage, PropertyType, PropertyStatus, EventType, EventStatus, DocumentType, EsignStatus, TriggerType, TriggerStatus, SignalSource, SegmentType, MandateSignalType, CampaignType, CampaignStatus, ConnectorType, IntegrationStatus, etc.

### Relations clés à retenir
- Tout passe par **organizationId** (isolation RLS)
- **User** = auth pure | **Agent** = profil métier (FK → User) | **Client** = profil client (FK → Agent)
- Un **Deal** lie un Client + un Property + un Agent + une Organization + optionnellement un Listing et des Documents (mandats)
- Les **Event**, **Document**, **Message**, **Trigger** sont tous polymorphes : rattachables à Client, Property, Deal simultanément
- **Listing** → Property (1:N potentiel) → Lead (1:N) → PortalPublication (1:N)
- **Playbook** → PlaybookEnrollment (1:N) → Client + Agent
- **Campaign** → CampaignSend (1:N) → Client + Agent
- **Integration** → SyncLog (1:N) + FieldMapping (1:N) + PortalPublication
- **MandateSignal** → SignalAction (1:N)
- **ClientSegment** ← ClientEngagementSignal (feed le score) → SegmentTransition (historique)

### Rapport d'écarts — fichier de référence
- `/sessions/magical-amazing-noether/mnt/outputs/gap_analysis_supabase.xlsx` — comparaison champ par champ GSheet vs Supabase (4 onglets : Résumé, Champs manquants, Extra Supabase, Tables à créer)

---

## Vision Data (actée 24 mars 2026)

### Architecture data globale — 3 schémas PostgreSQL (actée 26 mars 2026)
- **3 schémas autonomes** dans le même Supabase PostgreSQL :
  - `public` — CRM Agent (B2B), 39 tables existantes
  - `client_app` — App Client / Carnet d'Entretien (B2C), **14 tables DÉPLOYÉES** (26 mars 2026)
  - `analytics` — Data Science / Méga-bases, 6+ tables à créer
- **Rationale** : séparation pour autonomie d'évolution (scaler le B2C indépendamment si le Carnet rencontre du succès)
- **Temps 2** : Migration schéma `analytics` vers data warehouse dédié (BigQuery) quand le volume l'exige
- **Couche d'abstraction** : toutes les requêtes analytiques passent par un data service (pas de requête directe au schéma analytics depuis le frontend) → migration transparente
- **Boucle retour analytics → CRM** : tables d'insights intermédiaires (`public.property_insights`, `public.client_insights`) mises à jour périodiquement par jobs pg_cron
- **Boucle retour analytics → App Client** : `client_app.property_valuation` et `client_app.property_suggestion` alimentés par analytics
- **Blockchain** : parkée pour Temps 2 (certification/traçabilité Carnet d'Entretien)
- **Auth partagé** : un seul Supabase Auth, custom JWT claims (role: agent/owner) pour orienter vers le bon schéma

### ReferenceProperty (bien immobilier national unique)
- **PK** : UUID interne (comme toutes les tables)
- **Identifiants métier** : référence cadastrale indexée (section + parcelle + lot) + adresse normalisée API BAN + coordonnées GPS
- **Matching** en cascade : (1) cadastre exact → (2) proximité GPS < 50m + fuzzy adresse
- **Lien CRM** : `public.property.reference_property_id` → FK vers `analytics.reference_property`
- **Source initiale** : DVF France entière 5 ans (~15M transactions)
- **Enrichissement** : données CRM agents (CGV) + données utilisateurs Carnet d'Entretien (CGU) + Cadastre MAJIC

### 6 méga-bases (schéma `analytics`)

| # | Méga-base | Tables | Sources | Refresh |
|---|-----------|--------|---------|---------|
| 1 | **BIENS** | `reference_property`, `property_transaction` | DVF + Cadastre MAJIC + API BAN | Import initial + semestriel |
| 2 | **QUARTIERS** | `neighborhood`, `neighborhood_market_stats` | Agrégation DVF + INSEE (commune/IRIS) | Semestriel (post-DVF) |
| 3 | **DEALS** | `deal_aggregate` | Anonymisation cross-tenant depuis `public.deal` | Hebdomadaire (pg_cron) |
| 4 | **PROPRIO** | `owner_profile_anon` | Pseudonymisation k-anonymity (k≥5) depuis `public.client` | Hebdomadaire (pg_cron) |
| 5 | **USAGES** | `usage_event` (90j), `usage_daily_snapshot` | Event sourcing CRM (actions agents) | Continu + agrégation nocturne |
| 6 | **TRIGGERS** | `trigger_outcome` | Suivi résultats des automatisations IA | Continu |

### Pipelines d'alimentation
- **DVF → reference_property** : Edge Function ou script Node, import initial massif + refresh semestriel aligné sur publication État
- **CRM → analytics** : jobs pg_cron (hebdomadaire pour deals/proprio, nocturne pour usages)
- **Anonymisation** : pseudonymisation k-anonymity (k≥5), remplacement identifiants directs, généralisation quasi-identifiants (âge→tranche, adresse→quartier)
- **Event sourcing usages** : rétention events bruts 90 jours, agrégation en snapshots journaliers, snapshots conservés indéfiniment

### Sources de données externes (Temps 1)
| Source | Type | Fréquence | Coût |
|--------|------|-----------|------|
| DVF (data.gouv.fr) | Transactions immobilières | Semestriel | Gratuit (Open Data) |
| Cadastre MAJIC | Caractéristiques biens, propriétaires | Annuel | Gratuit (Open Data) |
| API BAN | Adresses normalisées + GPS | À la demande | Gratuit (service public) |
| INSEE | Démographie par commune/IRIS | Annuel | Gratuit (Open Data) |

### Décisions data NE PAS REMETTRE EN QUESTION
- UUID comme PK pour ReferenceProperty (pas le cadastre)
- **3 schémas séparés** : `public` + `client_app` + `analytics` (pas tout dans public)
- Pseudonymisation k-anonymity pour données individuelles (pas juste agrégation)
- Tables d'insights intermédiaires pour la boucle retour (pas de requêtes cross-schéma depuis le frontend)
- DVF France entière 5 ans comme périmètre initial
- **La data App Client appartient à la plateforme**, l'agent en a l'usufruit tant qu'il a une relation active (agent_client_link.status = active)
- **Le Carnet est lié à analytics.reference_property** (pas à public.Property)
- **Le propriétaire peut se créer un compte sans agent** (self-signup)

---

## App Client — Carnet d'Entretien (actée 26 mars 2026)

### Vision produit
- **App Client** = espace web B2C autonome : compte, patrimoine, conseils, carnet(s) d'entretien
- **Carnet d'Entretien** = brique servicielle au sein de l'App Client, centralise toutes les infos d'un bien immobilier
- **Transférabilité** : le Carnet est transféré à l'acquéreur en cas de vente du bien (historique technique conservé)
- **2 chemins d'accès** : self-signup (pub, SEO) OU invitation agent (parcours CAM-17)
- **Existence intrinsèque** : le Carnet existe dès qu'un bien est dans la méga-base BIENS, mais ne "prend vie" que lorsqu'un propriétaire crée son compte
- **Vérification de propriété obligatoire** : le propriétaire doit prouver qu'il est propriétaire avant d'accéder au Carnet (upload titre/acte de propriété). Si invitation agent et titre déjà en base CRM (public.Document type ACTE_PROPRIETE) → vérification automatique (verified_by_agent). Sinon → upload requis (verified_by_document). Carnet en status pending tant que non vérifié.

### Types de clients (rôles cumulables)
| Rôle | Cycle de vie | Peut avoir un Carnet |
|------|-------------|---------------------|
| Propriétaire | Aucun projet → Projet de vente → Vente en cours → Vente terminée | ✅ Oui |
| Bailleur | Aucun projet → Mise en gérance → En location | ✅ Oui |
| Acquéreur | Projet d'achat → Recherche active → Visites → Promesse → Acte | ❌ Non (pas encore) |
| Locataire | Recherche → Candidature → En location | ❌ Non |

### Schéma `client_app` — 14 tables (~243 cols)

#### Compte & Identité
| Table | Cols | Description |
|-------|------|-------------|
| **owner_account** | ~18 | Compte B2C autonome. FK → auth.users. Aucune FK obligatoire vers Agent/Organization. |
| **owner_role** | ~10 | Rôles cumulables (propriétaire/bailleur/acquéreur/locataire) avec cycle de vie par rôle. |

#### Carnet d'Entretien
| Table | Cols | Description |
|-------|------|-------------|
| **carnet** | ~15 | Instance Carnet. FK → analytics.reference_property + owner_account. Status: dormant/active/transferred/archived. ownershipVerificationStatus: pending/verified_by_document/verified_by_agent/rejected. |
| **carnet_transfer** | ~10 | Historique transferts propriété (vente, héritage, donation). |
| **property_detail** | ~45 | Spécifications bien (version propriétaire, distincte de public.Property). |
| **property_diagnostic** | ~14 | Diagnostics réglementaires (DPE, amiante, plomb, termites, gaz, élec, Carrez, ERP…). |

#### Finance
| Table | Cols | Description |
|-------|------|-------------|
| **property_financing** | ~22 | Prêt immobilier côté propriétaire. |
| **property_expense** | ~14 | Charges récurrentes par catégorie/année. |
| **property_rental** | ~18 | Revenus locatifs, infos locataire, bail. |
| **rental_payment** | ~10 | Encaissements mensuels. |
| **property_valuation** | ~10 | Time series valeur marchande (baromètre). Alimenté par analytics. |

#### Opérations & Contenu
| Table | Cols | Description |
|-------|------|-------------|
| **maintenance_operation** | ~26 | Timeline entretien/travaux (refonte de l'ancien MaintenanceLog 6 cols). |
| **owner_document** | ~16 | Documents propriétaire (plans, diagnostics, factures, sinistres, bail…). |
| **property_suggestion** | ~16 | Recommandations IA/plateforme poussées au propriétaire. |

### Passerelles inter-schémas
| Passerelle | Schéma | Description |
|-----------|--------|-------------|
| **agent_client_link** | public | Liaison agent ↔ propriétaire. Matérialise l'usufruit data. Status: pending_invitation/active/ended. |
| **Property.referencePropertyId** | public → analytics | Le bien CRM pointe vers le bien national. |
| **carnet.referencePropertyId** | client_app → analytics | Le Carnet pointe vers le même bien national. |
| **property_insights / client_insights** | analytics → public | Intelligence dérivée pour l'agent. |
| **property_valuation / property_suggestion** | analytics → client_app | Intelligence dérivée pour le propriétaire. |

### Flux de données — Asymétrie informationnelle
- L'agent **ne voit pas** les données brutes du Carnet
- L'agent reçoit de l'**intelligence dérivée** via property_insights / client_insights
- Le propriétaire reçoit des **suggestions** et la **valorisation temps réel**
- Les données brutes alimentent les méga-bases analytics via pg_cron (pseudonymisation k-anonymity)

### Structure des parcours App Client (12 parcours, ~45 écrans)

| # | Parcours | Préfixe | Écrans | Docx |
|---|----------|---------|--------|------|
| 1 | Authentification | PAU | PAU-01→PAU-07 (7) | appclient_01_PAU_authentification.docx |
| 2 | Accueil & Navigation | PAC | PAC-01→PAC-02 (2) | appclient_02_PAC_accueil_navigation.docx |
| 3 | Notifications | PNO | PNO-01→PNO-02 (2) | appclient_03_PNO_notifications.docx |
| 4 | Compte | PCO | PCO-01→PCO-04 (4) | appclient_04_PCO_compte.docx |
| 5 | Carnets | PCA | PCA-01→PCA-03 (3) | appclient_05_PCA_carnets.docx |
| 6 | Spécifications | PSP | PSP-01→PSP-03 (3) | appclient_06_PSP_specifications.docx |
| 7 | Vie locale | PVL | PVL-01→PVL-03 (3) | appclient_07_PVL_vie_locale.docx |
| 8 | Budget | PBU | PBU-01→PBU-04 (4) | appclient_08_PBU_budget.docx |
| 9 | Entretien | PEN | PEN-01→PEN-04 (4) | appclient_09_PEN_entretien.docx |
| 10 | Documents | PDO | PDO-01→PDO-04 (4) | appclient_10_PDO_documents.docx |
| 11 | Dossiers | PDS | PDS-01→PDS-02 (2) | appclient_11_PDS_dossiers.docx |
| 12 | Diagnostics | PDI | PDI-01→PDI-07 (7) | appclient_12_PDI_diagnostics.docx |

### Écrans Figma existants vs à designer
- **33 écrans** existants dans Figma (fichier App Propriétaire)
- **~12 écrans** à designer (marqués "À designer" dans les specs)
- **Total : ~45 écrans**

### Fichiers de référence App Client
| Fichier | Chemin | Contenu |
|---------|--------|---------|
| Schéma architecture 3 schémas | `/sessions/magical-amazing-noether/mnt/outputs/architecture_3_schemas_realagent.html` | Diagrammes interactifs : architecture macro, tables, 5 flux de données, matrice |
| Docx spécifications App Client | `/sessions/magical-amazing-noether/mnt/outputs/appclient_*.docx` | 12 documents de spécification CX/UX détaillés (même format que les 19 specs App Agent) |
| Figma App Propriétaire | `https://www.figma.com/design/K5rurfIWjordXuDFCuwj4Q/App-Propri%C3%A9taire` | 33 frames existantes |

### Tables additionnelles identifiées (à créer)
- `client_app.folder` — Dossiers thématiques (PDS-01)
- `client_app.folder_item` — Éléments dans un dossier (PDS-02)

---

## Erreurs passées à ne pas reproduire

1. **Codification incohérente** : J'ai créé des IDs d'écrans (LOG-01, TAB-01, etc.) qui ne correspondaient pas aux specs docx (SUP-01, SIN-01, etc.). Toujours utiliser les préfixes des docx.
2. **Fusion de parcours** : J'ai fusionné signup+signin+onboarding dans un seul P01. Les parcours doivent rester séparés comme dans les docx (1=signup, 2=signin, 3=onboarding tour, 4=onboarding setup).
3. **JSX isolé** : Produire des écrans en JSX sans le design system codé ne fonctionne pas. L'approche retenue est Figma Make.
4. **Google Sheet faux positifs** : Quand on fetch un onglet inexistant, Google Sheets renvoie les données d'un autre onglet au lieu d'une erreur. Toujours vérifier via la feuille de résumé (sheet=0).
5. **Nombre d'écrans** : Les prompts Figma avaient réduit le nombre d'écrans (ex: 6 au lieu de 32 pour signup/signin/onboarding). Toujours respecter la granularité des docx.
6. **Confusion User/Agent** : La table Supabase "User" est la table auth de base. Les agents ont une table dédiée "Agent" (21 cols) avec FK vers User. Ne pas ajouter les champs agent dans User.

---

## Refactoring P08/P09 — Design System & Hooks (Avril 2026)

### Architecture fichiers
- `figma_src/app/types/database.ts` — 208 lignes, types partagés (enums Supabase, interfaces scores RPC, list items, filtres)
- `figma_src/app/lib/supabase.ts` — singleton browser client
- `figma_src/app/hooks/` — 12 hooks (barrel index.ts)
- `figma_src/app/components/atoms/` — ajouts: HorizontalDivider, DpeScale, GesScale; supprimé: ChipScore (5 List* scoring supprimés)
- `figma_src/app/components/molecules/` — ajouts: ViewModeDropdown; reclassés depuis organisms: ListClientName, SectionListBien, SectionListAffaire, SectionListDossier, SectionListPromotion, SectionListClosing, SectionListTransaction, SectionListType, SectionListEntretien
- `figma_src/app/components/organisms/` — ajout: Gallery; supprimés: 6 ListScoring*, ListClientName, SectionList*
- `figma_src/app/components/components/` — nouveau dossier hors hiérarchie atomique: CardClient (ex CardItemClient), ListClient (ex ListItemClient), CardBien (ex CardItemBien), ListBien (ex ListItemBien), ListAffaire (ex ListItemAffaire)
- `figma_src/styles/components.css` — `.page-content` (responsive maxWidth), `.sheet-narrow`, `.sheet-wide`

### Hooks data créés (12 hooks)
| Hook | Source | Consommateurs |
|------|--------|---------------|
| useClientScore | RPC get_client_scores | AppBarFicheClient, CardClient, ListClient |
| useClientList | SELECT Client paginé | FIC_01_Page_List_Client |
| useClientDetails | SELECT Client * | FIC_01_PageFicheClient |
| useClientAiSuggestions | SELECT Trigger | Section suggestions IA |
| usePropertyScore | RPC get_property_scores | AppBarFicheBien, CardBien, ListBien |
| usePropertyList | SELECT Property paginé | FIB_01_Page_List_Bien |
| usePropertyDetails | SELECT Property * | FIB_01_PageFicheBien |
| usePropertyMatchingClients | SELECT Client ACQUEREUR | Section acquéreurs appétents |
| usePropertyDiagnostics | SELECT PropertyDiagnosticQuestionnaire | Section diagnostics |
| useDealLeads | SELECT Deal→Listing→Lead | AFF_01 section leads |
| useHoverState | UI only | Cards, organisms |
| useBreakpoint | UI only (matchMedia) | Pages, responsive components |

### KpiIndicator atom
- Prop `kpi` auto-résout l'icône Lucide via KPI_CONFIG map (qual→Database, eng→MessageCircle, conv→ScrollText, reac→Flame, ent→Drill)
- `kpi` et `icon` sont mutuellement exclusifs

### Pages refactorées
- FIC_01_Page_List_Client — .page-content, ViewModeDropdown, useBreakpoint, effectiveViewMode, hex→tokens
- FIC_01_PageFicheClient — .page-content, Section Profil 7 CollapsibleSection (3 visibles + 4 sous "Voir tout"), raw Figma imports remplacés
- FIB_01_Page_List_Bien — miroir client, engagementSheet→entretien fix
- FIB_01_PageFicheBien — Gallery, DpeScale/GesScale, MessageReceived/MessageSent, hex→tokens

### Conventions établies
- Les composants Card/List sont dans `components/components/` (hors hiérarchie atomique)
- `.page-content` gère toute la largeur max — les composants ne définissent JAMAIS leur propre width
- Breakpoints: mobile <768, tablet 768-1279, desktop 1280-1599 (max 960px), large ≥1600 (max 1024px)
- Mobile force toujours le mode cards (effectiveViewMode pattern)
- Hex→tokens: 13 valeurs hex mappées vers CSS custom properties (voir DS_REGISTRY_P08_P09.md)

### Prochaines étapes
- GraphCourbe — session de design dédiée
- P10-AFF — ListAffaire refonte + Fiche Affaire multi-type
- ENG + REAC RPCs — besoin table ActivityLog/signals
- CoOwnership join — enrichissement RPCs QUAL Bien

---

## Règles de fonctionnement

- **Avant de créer un ID d'écran** → vérifier qu'il existe dans all_screen_ids.json
- **Avant de créer un composant** → vérifier qu'il n'existe pas déjà dans le design system (Storybook localhost:3001/design-system)
- **Avant de modifier un fichier de référence** → prévenir Damien et expliquer le changement
- **Pour toute question d'architecture** → se référer aux décisions actées ci-dessus
- **En cas de doute sur un choix** → demander à Damien plutôt que de décider seul
