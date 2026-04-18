# Review Report — Schema Prisma realigne sur Supabase

**Date** : 2026-04-18
**Fichier audite** : `packages/database/prisma/schema.prisma` (2272 lignes)
**Verdict global** : **FAIL** (1 CRITICAL bloquant)

---

## CRITICAL (bloquant)

### C1 — Relation inverse manquante : `Agent.listings`

- **Ligne ~951** (fin du bloc `model Agent`)
- Le modele `Listing` (ligne 1840) declare `agent Agent? @relation(fields: [agentId], references: [id])` mais le modele `Agent` ne contient aucune relation inverse `listings Listing[]`.
- **`prisma validate` echoue** avec l'erreur : *"The relation field `agent` on model `Listing` is missing an opposite relation field on the model `Agent`."*
- **Correction** : ajouter dans le modele `Agent`, dans la section reverse relations (apres `syncLogs`) :
  ```prisma
  listings               Listing[]
  ```

---

## WARNING (non-bloquants)

### W1 — `MaintenanceLog` sans `createdAt` / `updatedAt`

- **Lignes 1823-1831**
- Le modele `MaintenanceLog` n'a que 5 champs (id, category, description, amount, isPrivate, propertyId). Il manque `createdAt` et `updatedAt` presents sur presque tous les autres modeles.
- Si la table Supabase n'a effectivement pas ces colonnes, c'est correct. Sinon, ajouter :
  ```prisma
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())
  ```

### W2 — `OpportunityTrigger` sans `createdAt`

- **Lignes 1711-1717**
- Le modele `OpportunityTrigger` n'a que 4 champs (id, type, description, propertyId). Pas de `createdAt`. Meme remarque que W1.

### W3 — Comptage modeles : 47 vs 46 annonce

- Le commentaire en ligne 827 dit `// MODELS (46)` mais le fichier contient bien **47 modeles** (les 47 listes dans le brief correspondent bien a 47, pas 46). Le commentaire devrait etre mis a jour a `// MODELS (47)`.
- **Correction** : mettre a jour le commentaire ligne 827.

### W4 — Comptage enums : commentaire dit 97, fichier en contient 102

- Le commentaire en ligne 11 dit `// ENUMS (97)` mais le fichier contient **102 enums**.
- **Correction** : mettre a jour le commentaire ligne 11 a `// ENUMS (102)`.

---

## Checklist detaillee

### 1. Completude des modeles

| Attendu | Present | Statut |
|---------|---------|--------|
| 47 modeles (User a SyncLog) | 47 modeles | PASS |

Tous les 47 modeles attendus sont presents. Aucun modele manquant, aucun modele en trop.

### 2. Colonnes des modeles cles

**Client** (~48 colonnes attendues) : PASS
- Toutes les colonnes verifiees : id, userId, status (ClientStatus[]), gender, firstName, lastName, dateOfBirth, placeOfBirth, maritalStatus, address, mobilePhone, primaryEmail, secondaryEmail, jobTitle, incomeBracket, kbisUrl, cniUrl, passportUrl, totalOwnedProperties, propertiesForSaleCount, titleDeedUrl, propertiesUnderMgmtCount, paySlipUrl, taxStatementUrl, loanOfferUrl, createdAt, updatedAt, isActive, organizationId, agentId, nationality, preferredChannel, employer, siren, reactivationScore, qualificationScore, triggerCount, cniExpiryDate, passportExpiryDate, financingExpiryDate, searchCriteriaSummary, notes, source, language, emailConsent, emailConsentSource, emailConsentDate, lifecycleStage, tags, isPotentialDuplicate, completionScore.

**Property** (~75 colonnes attendues) : PASS
- Toutes les colonnes cles verifiees : agentId, coOwnershipId, listingId, completionScore, completionMissingFields, referencePropertyId, addressStreet, addressZipCode, addressCity, addressLat, addressLng, internalRef, notes, tags, operationTypes (OperationType[]), exposures (Exposure[]).

**Deal** (~38 colonnes attendues) : PASS
- Toutes les colonnes cles verifiees : listingId, saleMandateId, mgmtMandateId, acquisitionFinancingId, pipelineStage, stageChangedAt, conversionSource, currentMilestone.

### 3. Relations critiques

| Relation | Statut | Detail |
|----------|--------|--------|
| Deal.saleMandateId -> Document (nommee "DealSaleMandate") | PASS | Pas de conflit avec mgmtMandateId |
| Deal.mgmtMandateId -> Document (nommee "DealMgmtMandate") | PASS | Relations distinctes |
| MandateSignal.agentId -> Agent ("MandateSignalAgent") | PASS | Noms distincts |
| MandateSignal.assignedTo -> Agent ("MandateSignalAssignee") | PASS | Noms distincts |
| Message.parentMessageId -> Message (self-relation "MessageThread") | PASS | replies[] present |
| Property.agentId -> Agent (pas User) | PASS | Correct |
| Property.listingId -> Listing + Listing.propertyId -> Property | PASS | Bidirectionnel |
| Client.agentId -> User (pas Agent) | PASS | Conforme a la FK Supabase |
| Listing.agentId -> Agent (reverse sur Agent) | **FAIL** | Reverse `listings Listing[]` manquant sur Agent |

### 4. Enums critiques

Tous les 12 enums critiques sont presents : PipelineStage, EsignStatus, NetworkType, OperationType, SignalSource, AgentSpecialty, OrgRole, AccountStatus, OnboardingStep, Exposure, SegmentType, MandateSignalType.
Total : 102 enums.

### 5. Syntaxe Prisma

- `prisma validate` echoue uniquement sur C1 (relation inverse manquante Listing -> Agent).
- Toutes les @relation ont les bons champs fields/references.
- Les @default sont corrects.
- Les types nullable portent bien le `?`.
- Les arrays sont correctement declares (Type[]).

### 6. FK Client.agentId

- Client.agentId pointe vers `User.id` via `@relation("AgentClients")` : **CONFORME** a la FK Supabase.

---

## Resume des actions requises

| # | Severite | Action |
|---|----------|--------|
| C1 | CRITICAL | Ajouter `listings Listing[]` dans model Agent |
| W1 | WARNING | Verifier si MaintenanceLog a createdAt/updatedAt en base |
| W2 | WARNING | Verifier si OpportunityTrigger a createdAt en base |
| W3 | WARNING | Corriger commentaire MODELS (46) -> (47) |
| W4 | WARNING | Corriger commentaire ENUMS (97) -> (102) |

**Une fois C1 corrige, `prisma validate` passera.**
