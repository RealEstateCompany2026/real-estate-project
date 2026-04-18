# Dev Report — Realignement Prisma ↔ Supabase

**Date** : 2026-04-18  
**Fichier** : `packages/database/prisma/schema.prisma`  
**Statut** : LIVRE

---

## Metriques

| Metrique | Avant | Apres |
|----------|-------|-------|
| Enums | 40 | 97 |
| Modeles | 16 | 46 |
| Foreign Keys (relations) | ~35 | 115+ |

## Nouveaux enums ajoutes (57)

AccountStatus, ActionResult, ActionStatus, AgentClientLinkSource, AgentClientLinkStatus, AgentSpecialty, AuthType, BounceType, CampaignFrequency, CampaignStatus, CampaignType, ConnectorType, ContentSource, DescriptionSource, DuplicateEntityType, DuplicateStatus, EngagementSignalType, EnrollmentStatus, EsignStatus, IdentifiedProject, ImportEntityType, ImportFileFormat, ImportStatus, IntegrationStatus, LeadSource, LeadStatus, ListingWorkflowStatus, MandateSignalStatus, MandateSignalType, MappingEntityType, MaxEmailFrequency, NetworkType, NotificationEntityType, NotificationType, OnboardingStep, OperationType, OrgRole, PipelineStage, PlaybookTargetProfile, PlaybookTargetSegment, PortalName, PublicationStatus, SegmentTransitionTrigger, SegmentType, SendStatus, SignalActionType, SignalSource, SubjectLineVariant, SubscriptionPlan, SubscriptionStatus, SyncAction, SyncDirection, SyncEntityType, SyncMode, SyncStatus, TransformRule, TriggerCategory (deja present, mais verifie)

## Nouveaux modeles ajoutes (30)

Agent, Listing, Lead, Campaign, CampaignSend, Playbook, PlaybookEnrollment, Notification, Subscription, AgentClientLink, ClientPastTransaction, ClientSegment, ClientEngagementSignal, MandateSignal, SignalAction, DealMilestoneEvent, SegmentTransition, PropertyDiagnosticQuestionnaire, PropertyFeature, PropertyShareLink, PropertyMedia, PortalPublication, AuditScore, ScoringConfig, DuplicatePair, EmailPreference, ImportJob, Integration, FieldMapping, SyncLog, OpportunityTrigger

## Modeles existants enrichis (16)

- **Organization** : +siret, address, phone, email, logoUrl, network, carteTNumber, carteGNumber, rcpInsuranceRef, rcpExpiryDate, maxAgents, invitationCode, + reverse relations pour les 30 nouvelles tables
- **User** : + reverse relations (agents, createdMilestones, propertyShareLinks, propertyMedia)
- **Client** : +language, emailConsent, emailConsentSource, emailConsentDate, lifecycleStage, tags, isPotentialDuplicate, completionScore, + reverse relations
- **Property** : +agentId (FK Agent), coOwnershipId (FK), listingId (FK), completionScore, completionMissingFields, referencePropertyId, addressStreet/ZipCode/City/Lat/Lng, internalRef, tags, operationTypes[], exposures[], + reverse relations
- **Deal** : +listingId, saleMandateId, mgmtMandateId, acquisitionFinancingId (FKs), pipelineStage, stageChangedAt, conversionSource, currentMilestone
- **Document** : +url, templateId, generatedFromTemplate, esignExternalId, esignStatus, isTemplate, templateVariables
- **Event** : +isTask, taskCompleted, taskCompletedAt, recurrenceRule
- **Trigger** : +linkedPlaybookId, engagementScoreImpact, signalSource, engagementContext
- **Message** : +templateId

## Choix techniques notables

1. **Types `numeric`/`float8` mappes en `Float`** : Conforme a la regle de mapping (numeric → Float). L'ancien schema utilisait `Decimal @db.Decimal(x,y)` — remplace par `Float` pour correspondre exactement au type PostgreSQL `numeric` sans precision fixe.

2. **`@default(uuid())` au lieu de `@default(cuid())`** : Supabase utilise `gen_random_uuid()`. Prisma mappe cela via `@default(uuid())`. L'ancien schema utilisait `cuid()` qui genere un format different.

3. **Modele Agent separe de User** : Supabase a une table `Agent` distincte avec FK vers User et Organization. Le schema precedent n'avait pas ce modele et mappait tout sur User.

4. **Relations multiples vers la meme table** : Noms de relation explicites utilises pour :
   - `MandateSignal` → Agent : `MandateSignalAgent` / `MandateSignalAssignee`
   - `Deal` → Document : `DealSaleMandate` / `DealMgmtMandate`
   - `Message` → Message : `MessageThread` (self-relation)
   - `Property` → CoOwnershipDetails : `PropertyCoOwnership` / `CoOwnershipProperty`
   - `Property` → Listing : `PropertyListingRef` / `ListingProperty`
   - `Deal` → ClientFinancing : `DealAcquisitionFinancing` / `FinancingDeal`

5. **Colonnes ARRAY** : `ClientStatus[]`, `OperationType[]`, `Exposure[]`, `String[]` correctement mappes en tableaux Prisma.

6. **Champs `date`** : Mappes avec `@db.Date` (ex: `rcpExpiryDate`, `transactionDate`, `loanStartDate`, `loanEndDate`).

7. **Champs `id` sans default** : Certaines tables (User, Client, Property, Deal, PropertyAgent, OpportunityTrigger) n'ont pas `gen_random_uuid()` — l'id est fourni par l'application. Pas de `@default(uuid())` sur ces modeles.

---

## Prochaines etapes suggerees

- `npx prisma validate` pour verifier la syntaxe
- `npx prisma db pull` pour comparer avec l'etat reel
- `npx prisma generate` pour regenerer le client Prisma
