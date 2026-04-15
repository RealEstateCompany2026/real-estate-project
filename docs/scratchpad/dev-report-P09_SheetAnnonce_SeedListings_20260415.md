# Dev-report — Seed Listings + Sheet Annonce Wide + Workflow Badges (P09)

**Date** : 15 avril 2026
**Statut** : ✅ LIVRÉ — Build OK

---

## Livraisons

### Sujet 1 — Seed Listings ✅
- 99 listings insérés (1 par property)
- Répartition : 29 DRAFT, 20 REVIEW, 40 PUBLISHED, 10 PAUSED
- Chaque listing a : titre, description (5 variantes réalistes), descriptionSource (MANUAL/AI_GENERATED/AI_EDITED), slug placeholder, stats (vues/contacts pour les publiés)

### Sujet 2 — Fetch enrichi + Workflow Badges ✅
- Interface `ListingRow` enrichie avec tous les champs nécessaires
- Fetch Listing élargi : `id, status, title, description, descriptionSource, alurCompliant, slug, publishedAt, contactFormEnabled, viewCount, leadCount`
- Helper `listingStatusToWorkflow()` : DRAFT→édition warning, REVIEW→révision warning, PUBLISHED→all success, PAUSED→publication warning, ARCHIVED→all disabled
- `ListAnnonce` rendu avec badges dynamiques + `onView` ouvre la Sheet

### Sujet 3 — Sheet Annonce Wide ✅
- State : `annonceSheetListing` (ListingRow | null)
- Header : titre "Annonce" + 3 badges workflow + Switch "Publier" (TODO callback) + X
- AppBarAnnonce : type, surface, année, ville, prix, prix/m²
- 7 sections dans le body :
  1. Diaporama (photos du bien)
  2. URL annonce (placeholder copiable)
  3. Description + badge source (IA/Manuelle/IA éditée)
  4. Caractéristiques (grille 2 cols, 18 champs Property)
  5. Énergie (grille 2 cols, DPE + chauffage + eau chaude)
  6. Copropriété (conditionnel, grille 2 cols)
  7. Statistiques (vues + contacts, uniquement PUBLISHED)
- Footer : bouton "Partager l'annonce" (outline) + pb-100px clearance IA

### Imports ajoutés
- `Copy`, `Globe` (lucide-react)
- `Switch` depuis `@real-estate/ui/switch`

---

## Fichiers modifiés
| Fichier | Action |
|---------|--------|
| `PropertyDetailView.tsx` | Interface ListingRow enrichie, fetch élargi, helper workflow, state sheet, imports, ListAnnonce badges dynamiques, Sheet Annonce Wide complète |

## Sections NON implémentées (par décision)
- Prix dans le quartier
- Détails du prix

## Vérification
- [x] Seed SQL exécuté : 99 listings, mix statuts correct
- [x] `npx next build` : ✅ Compiled successfully
