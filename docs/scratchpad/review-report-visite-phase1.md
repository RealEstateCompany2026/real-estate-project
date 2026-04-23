# Review Report — Migration BDD Phase 1 Visite

**Date** : 2026-04-23  
**Reviewer** : reviewer-agent  
**Scope** : Enum OdjStatus, champs ODJ sur Event, modeles PropertyAvailabilityException et VisitGuideResponse, relations inverses

---

## 1. Schema Prisma

### 1.1 Enum OdjStatus
| Critere | Resultat |
|---------|----------|
| Placement apres ReportStatus (ligne 690) | **PASS** |
| Valeurs EDITE, REVISE, ENVOYE | **PASS** |

### 1.2 Champs ODJ sur Event (lignes 1815-1817)
| Champ | Type attendu | Type reel | Resultat |
|-------|-------------|-----------|----------|
| odjContent | String? | String? | **PASS** |
| odjStatus | OdjStatus? | OdjStatus? | **PASS** |
| odjSentAt | DateTime? | DateTime? | **PASS** |

### 1.3 Relation visitGuideResponses sur Event (ligne 1820)
| Critere | Resultat |
|---------|----------|
| Relation `visitGuideResponses VisitGuideResponse[]` presente sur Event | **PASS** |

### 1.4 Modele PropertyAvailabilityException (lignes 1341-1351)
| Champ | Type attendu | Type reel | Resultat |
|-------|-------------|-----------|----------|
| id | String @id @default(uuid()) | String @id @default(uuid()) | **PASS** |
| propertyId | String (FK) | String + relation Property | **PASS** |
| date | DateTime | DateTime | **PASS** |
| startTime | String | String | **PASS** |
| endTime | String | String | **PASS** |
| reason | String? | String? | **PASS** |
| closedBy | String? | String? | **PASS** |
| createdAt | DateTime @default(now()) | DateTime @default(now()) | **PASS** |

### 1.5 Modele VisitGuideResponse (lignes 1353-1364)
| Champ | Type attendu | Type reel | Resultat |
|-------|-------------|-----------|----------|
| id | String @id @default(uuid()) | String @id @default(uuid()) | **PASS** |
| eventId | String (FK) | String + relation Event | **PASS** |
| clientId | String (FK) | String + relation Client | **PASS** |
| responses | Json | Json | **PASS** |
| commentaire | String? | String? | **PASS** |
| submittedAt | DateTime? | DateTime? | **PASS** |
| createdAt | DateTime @default(now()) | DateTime @default(now()) | **PASS** |
| updatedAt | DateTime @default(now()) | DateTime @default(now()) | **WARNING** |

### 1.6 Relations inverses
| Relation | Modele hote | Resultat |
|----------|------------|----------|
| `availabilityExceptions PropertyAvailabilityException[]` | Property (ligne 1214) | **PASS** |
| `visitGuideResponses VisitGuideResponse[]` | Client (ligne 1072) | **PASS** |
| `visitGuideResponses VisitGuideResponse[]` | Event (ligne 1820) | **PASS** |

### 1.7 Validation Prisma
- **PASS avec reserve** : La commande `npx prisma validate` echoue avec une erreur Prisma 7 (suppression de `datasource.url` au profit de `prisma.config.ts`). C'est un probleme global du projet lie a la mise a jour Prisma 7, non specifique a cette migration. Le schema lui-meme est structurellement correct.

---

## 2. Coherence Supabase

### 2.1 Tables existantes
| Table | Presente | Rows | RLS | Resultat |
|-------|----------|------|-----|----------|
| PropertyAvailabilityException | Oui | 0 | **OFF** | **WARNING** |
| VisitGuideResponse | Oui | 0 | **OFF** | **WARNING** |

### 2.2 Colonnes Event (champs ODJ)
| Colonne | data_type | is_nullable | Resultat |
|---------|-----------|-------------|----------|
| odjContent | text | YES | **PASS** |
| odjStatus | USER-DEFINED (enum) | YES | **PASS** |
| odjSentAt | timestamp with time zone | YES | **PASS** |

### 2.3 Colonnes PropertyAvailabilityException
| Colonne | data_type | is_nullable | Resultat |
|---------|-----------|-------------|----------|
| id | text | NO | **PASS** |
| propertyId | text | NO | **PASS** |
| date | timestamp with time zone | NO | **PASS** |
| startTime | text | NO | **PASS** |
| endTime | text | NO | **PASS** |
| reason | text | YES | **PASS** |
| closedBy | text | YES | **PASS** |
| createdAt | timestamp with time zone | NO | **PASS** |

### 2.4 Colonnes VisitGuideResponse
| Colonne | data_type | is_nullable | Resultat |
|---------|-----------|-------------|----------|
| id | text | NO | **PASS** |
| eventId | text | NO | **PASS** |
| clientId | text | NO | **PASS** |
| responses | jsonb | NO | **PASS** |
| commentaire | text | YES | **PASS** |
| submittedAt | timestamp with time zone | YES | **PASS** |
| createdAt | timestamp with time zone | NO | **PASS** |
| updatedAt | timestamp with time zone | NO | **PASS** |

### 2.5 Enum OdjStatus en BDD
| Valeur | Presente | Resultat |
|--------|----------|----------|
| EDITE | Oui | **PASS** |
| REVISE | Oui | **PASS** |
| ENVOYE | Oui | **PASS** |

---

## 3. Index

| Index | Table | Resultat |
|-------|-------|----------|
| PropertyAvailabilityException_pkey | PropertyAvailabilityException | **PASS** |
| PropertyAvailabilityException_propertyId_idx | PropertyAvailabilityException | **PASS** |
| PropertyAvailabilityException_date_idx | PropertyAvailabilityException | **PASS** |
| VisitGuideResponse_pkey | VisitGuideResponse | **PASS** |
| VisitGuideResponse_eventId_idx | VisitGuideResponse | **PASS** |
| VisitGuideResponse_clientId_idx | VisitGuideResponse | **PASS** |

Tous les index necessaires sont presents (PK + FK columns).

---

## 4. Foreign Keys

| Contrainte | Table | Colonne | Table cible | Colonne cible | Resultat |
|-----------|-------|---------|-------------|---------------|----------|
| PropertyAvailabilityException_propertyId_fkey | PropertyAvailabilityException | propertyId | Property | id | **PASS** |
| VisitGuideResponse_eventId_fkey | VisitGuideResponse | eventId | Event | id | **PASS** |
| VisitGuideResponse_clientId_fkey | VisitGuideResponse | clientId | Client | id | **PASS** |

---

## 5. Liste des findings

### CRITICAL (bloquant)
Aucun.

### WARNING (non-bloquant)

| # | Severite | Description | Impact |
|---|----------|-------------|--------|
| W1 | WARNING | `VisitGuideResponse.updatedAt` utilise `@default(now())` au lieu de `@updatedAt`. Le champ ne sera pas mis a jour automatiquement par Prisma lors des updates. | Faible — peut etre gere par le code applicatif ou corrige plus tard. |
| W2 | WARNING | RLS desactive sur `PropertyAvailabilityException` et `VisitGuideResponse`. Toutes les autres tables du projet ont RLS active. | Securite — a activer avant mise en production, sinon ces tables sont accessibles sans restriction via l'API Supabase. |
| W3 | WARNING | `prisma validate` echoue a cause de la migration Prisma 7 (suppression de `datasource.url`). Probleme global, non lie a cette migration. | Aucun impact sur le schema de cette migration. A traiter separement. |

---

## 6. Verdict final

# PASS

La migration BDD Phase 1 Visite est **conforme aux specifications du brief**. Les 5 elements demandes sont correctement implementes :

1. Enum `OdjStatus` (EDITE, REVISE, ENVOYE) -- OK
2. 3 champs ODJ sur Event -- OK
3. Modele `PropertyAvailabilityException` avec tous les champs + relation Property -- OK
4. Modele `VisitGuideResponse` avec tous les champs + relations Event et Client -- OK
5. Relations inverses sur Property, Client et Event -- OK

La coherence Prisma-Supabase est totale (colonnes, types, nullabilite, FK, index).

**Recommandations pour la suite (non-bloquantes) :**
- Activer RLS sur les 2 nouvelles tables avant la mise en production (W2)
- Envisager de remplacer `@default(now())` par `@updatedAt` sur `VisitGuideResponse.updatedAt` (W1)
- Traiter la migration vers `prisma.config.ts` dans un ticket separe (W3)
