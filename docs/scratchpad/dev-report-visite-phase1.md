# Dev Report — Phase 1 Migration BDD Visite

**Date** : 2026-04-23
**Agent** : dev-agent
**Fichier modifie** : `packages/database/prisma/schema.prisma`

---

## Modifications schema.prisma

### A. Enum OdjStatus (apres ReportStatus, ~ligne 689)
- Ajout de l'enum `OdjStatus` avec les valeurs : `EDITE`, `REVISE`, `ENVOYE`

### B. Champs ODJ sur le modele Event (~ligne 1780)
- `odjContent  String?` — contenu de l'ordre du jour
- `odjStatus   OdjStatus?` — statut de l'ODJ
- `odjSentAt   DateTime?` — date d'envoi de l'ODJ
- `visitGuideResponses VisitGuideResponse[]` — relation inverse vers les reponses guide de visite

### C. Modele PropertyAvailabilityException (apres PropertyShareLink)
- Nouveau modele avec champs : id, propertyId, date, startTime, endTime, reason, closedBy, createdAt
- Relation vers Property (FK avec CASCADE)

### D. Modele VisitGuideResponse (apres PropertyAvailabilityException)
- Nouveau modele avec champs : id, eventId, clientId, responses (Json), commentaire, submittedAt, createdAt, updatedAt
- Relations vers Event et Client (FK avec CASCADE)

### E. Relations inverses
- **Property** : ajout `availabilityExceptions PropertyAvailabilityException[]`
- **Client** : ajout `visitGuideResponses VisitGuideResponse[]`

---

## Validation Prisma

```
Prisma schema loaded from packages/database/prisma/schema.prisma
The schema at ... is valid
```

Resultat : PASS (prisma@5.14.0, avec DATABASE_URL factice pour validation syntaxique)

---

## Migration SQL Supabase

Execution sur le projet `wrakmsvdmsrpoiltysht` (Real Estate Project, eu-west-1).

Requetes executees :
1. CREATE TYPE "OdjStatus" (EDITE, REVISE, ENVOYE) — avec guard duplicate_object
2. ALTER TABLE "Event" — 3 colonnes ajoutees (odjContent, odjStatus, odjSentAt)
3. CREATE TABLE "PropertyAvailabilityException" + 2 index (propertyId, date)
4. CREATE TABLE "VisitGuideResponse" + 2 index (eventId, clientId)

Resultat : PASS — toutes les requetes executees sans erreur.

---

## Problemes rencontres

Aucun probleme bloquant. Note : `npx prisma` sans version explicite resolvait vers Prisma 7.8.0 qui ne supporte plus `url` dans le datasource. La validation a ete faite avec prisma@5.14.0 (version du projet).

---

## Statut

PRET POUR REVIEW
