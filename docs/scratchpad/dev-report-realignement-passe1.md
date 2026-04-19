# Dev Report — Passe 1 Realignement Section Caracteristiques

**Date** : 2026-04-19
**Agent** : dev-agent
**Scope** : Types TS + Section A overview (grille 3 colonnes)

---

## Fichiers modifies

### 1. `apps/agent-app/src/types/property.ts`

| Modification | Detail |
|---|---|
| Types ajoutes | `ViewType` (5 valeurs), `PoolType` (4 valeurs) — apres `DpeClass` |
| Champs Property | `neighborhoodName: string \| null` (bloc Adresse), `poolType: PoolType \| null` + `mainViewType: ViewType \| null` (bloc Equipements) |
| Labels ajoutes | `VIEW_TYPE_LABELS`, `POOL_TYPE_LABELS` — apres `PROPERTY_CONDITION_LABELS` |

### 2. `apps/agent-app/src/components/properties/PropertyDetailView.tsx`

| Modification | Detail |
|---|---|
| Imports ajoutes | `IconDpe`, `IconGes` depuis `@real-estate/ui` |
| Section A refactoree | Grille 3 colonnes overview avec logique conditionnelle par type de bien |

#### Changements Section A vs ancien code :

| # | Description |
|---|---|
| 1 | **AJOUTE** : `neighborhoodName` (Quartier) — ligne 2, col 1 |
| 2 | **AJOUTE** : `condition` via `PROPERTY_CONDITION_LABELS` (Etat) — ligne 2, col 2 |
| 3 | **AJOUTE** : `IconDpe` + `IconGes` visuels — col 3, lignes 1-2 |
| 4 | **MODIFIE** : Logique conditionnelle etages (appartement / maison / autre) |
| 5 | **SUPPRIME** : Ligne "Nombre d'etages" dediee (doublon, integre dans Etage/Etages immeuble) |
| 6 | **SUPPRIME** : "Eau chaude" de Section A (sera dans B.3 Energie en Passe 2) |

#### Ce qui n'a PAS change :

- Bouton "Voir plus" (intact)
- Sections B expandees (intactes, Passe 2)
- Imports `HOT_WATER_SYSTEM_LABELS` conserve (utilise dans sections B et Sheet)

---

## Contraintes respectees

- [x] Aucun hardcoding de labels — tout importe depuis `@/types/property`
- [x] Aucun nouveau composant cree
- [x] Aucun fichier .ts/.tsx/.css cree
- [x] Sections B non touchees
- [x] Bouton "Voir plus" non touche
- [x] `PROPERTY_CONDITION_LABELS` etait deja importe (ligne 35)

---

## Pret pour review
