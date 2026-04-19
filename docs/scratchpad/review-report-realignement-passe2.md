# Review Report — Realignement Passe 2 (Sections B Caracteristiques)

**Date** : 2026-04-19
**Fichier** : `apps/agent-app/src/components/properties/PropertyDetailView.tsx`
**Scope** : lignes ~1003-1330 (sections B.1 a B.7 dans le bloc `showMoreCharacteristics`)

---

## Verdict : PASS

---

## Checklist detaillee

### 1. Imports POOL_TYPE_LABELS et VIEW_TYPE_LABELS

| Point | Statut |
|-------|--------|
| Import present dans PropertyDetailView.tsx (ligne 39-40) | OK |
| `POOL_TYPE_LABELS` exporte depuis `@/types/property` (ligne 247 property.ts) | OK |
| `VIEW_TYPE_LABELS` exporte depuis `@/types/property` (ligne 239 property.ts) | OK |
| Types `PoolType` et `ViewType` definis dans property.ts | OK |

### 2. Pas de regression Section A (Overview ~lignes 915-986)

| Point | Statut |
|-------|--------|
| Grille 3 colonnes Overview intacte (lignes 916-987) | OK |
| Logique conditionnelle Etages par type de bien preservee | OK |
| Bouton "Voir plus / Voir moins" intact (lignes 989-1001) | OK |

### 3. Pas de regression sections apres (Activites, Affaires...)

| Point | Statut |
|-------|--------|
| Section Activites demarre ligne 1333 — intacte | OK |
| Fermeture `</section>` Caracteristiques ligne 1331 — correcte | OK |

### 4. B.1 Pieces (lignes 1006-1106)

| Point | Statut |
|-------|--------|
| Titre `Pieces` en h6 (ligne 1008-1009) | OK |
| Col 1 : Piece a vivre (Surface + Equipements placeholder) | OK |
| Col 1 : Cuisine (Surface + Type + Equipements placeholder) | OK |
| Col 2 : Chambres 1-4 avec condition sur `bedroomCount` | OK |
| Col 2 : Placeholder Equipements dans chaque chambre | OK |
| Col 3 : Salle de bain AVANT WC | OK |
| Col 3 : Salle de bain (Baignoire/Douche/Surface/Equipements) | OK |
| Col 3 : WC (Nombre/Surface/Equipements) | OK |

### 5. B.2 Equipements (lignes 1108-1147)

| Point | Statut |
|-------|--------|
| Titre `Equipements` en h6 | OK |
| 2 colonnes : Domotique + Fermetures | OK |
| Domotique : Interphone, Domotique, Commande telephone | OK |
| Fermetures : Type de fermetures (placeholder) | OK |
| Bloc Piscine conditionnel sur `property.hasPool` | OK |
| `poolType` utilise `POOL_TYPE_LABELS` (ligne 1143) | OK |

### 6. B.3 Energie (lignes 1149-1185)

| Point | Statut |
|-------|--------|
| Titre `Energie` en h6 | OK |
| 2 colonnes : DPE + GES | OK |
| IconDpe avec prop `classe` + `size="small"` (ligne 1163) | OK |
| IconGes avec prop `classe` + `size="small"` (ligne 1177) | OK |
| DPE : Date, Energie (kWh), Conformite | OK |
| GES : Date, GES (gCO2), Chauffage, Eau chaude | OK |
| Eau chaude utilise `HOT_WATER_SYSTEM_LABELS` (ligne 1181) | OK |

### 7. B.4 Stationnement (lignes 1187-1206)

| Point | Statut |
|-------|--------|
| Conditionnel `parkingType && parkingType !== 'AUCUN'` | OK |
| Bloc titre "Stationnement 1" | OK |
| Type utilise `PARKING_TYPE_LABELS` | OK |
| Quantite + Dimensions (placeholder) | OK |

### 8. B.5 Annexes (lignes 1208-1271)

| Point | Statut |
|-------|--------|
| Conditionnel sur existence d'au moins une annexe | OK |
| Grid 2 colonnes | OK |
| Blocs titres : Cave, Grenier, Terrasse, Balcon, Jardin, Terrain | OK |
| Chaque bloc : Type + Surface | OK |

### 9. B.6 Parties Communes (lignes 1273-1285)

| Point | Statut |
|-------|--------|
| Liste verticale (flex-col) | OK |
| Placeholder Digicode (`value={null}`) | OK |
| Ascenseur avec `hasElevator` | OK |
| Placeholder Espace vert (`value={null}`) | OK |
| Exposition avec `exposures` (fallback `mainExposure`) | OK |
| Vue avec `VIEW_TYPE_LABELS[property.mainViewType]` (ligne 1283) | OK |

### 10. B.7 Copropriete (lignes 1287-1327)

| Point | Statut |
|-------|--------|
| Conditionnel sur `data.coOwnership` | OK |
| 2 colonnes : Description + Procedures | OK |
| Description : Type, Nombre de lots, Charges annuelles | OK |
| Procedures : En cours + Votees | OK |
| Liens ancre `href="#documents"` conditionnels (lignes 1314, 1320) | OK |

### 11. Champs Property utilises

| Champ | Existe dans interface Property | Statut |
|-------|-------------------------------|--------|
| `poolType` | Oui (ligne 105 property.ts) | OK |
| `mainViewType` | Oui (ligne 106 property.ts) | OK |
| `hotWaterSystem` | Oui (ligne 95 property.ts) | OK |
| `hasPool` | Oui (ligne 103 property.ts) | OK |
| `hasHomeAutomation` | Oui (ligne 104 property.ts) | OK |
| `hasIntercom` | Oui (ligne 102 property.ts) | OK |
| `hasElevator` | Oui (ligne 101 property.ts) | OK |

### 12. Placeholders — pas de string hardcode

| Point | Statut |
|-------|--------|
| Equipements pieces : `value={null}` | OK |
| Commande telephone : `value={null}` | OK |
| Type fermetures : `value={null}` | OK |
| Digicode : `value={null}` | OK |
| Espace vert : `value={null}` | OK |
| Dimensions stationnement : `value={null}` | OK |
| Surface SdB/WC : `value={null}` | OK |

### 13. JSX valide

| Point | Statut |
|-------|--------|
| Toutes les balises ouvertes sont fermees | OK |
| Ternaires bien parentheses | OK |
| Fragments et conditions JSX corrects | OK |

---

## CRITICAL : 0

## WARNING : 0

## Notes

- Le code est propre, bien structure en sous-sections clairement commentees.
- Tous les labels enum sont importes depuis la source de verite (`@/types/property`), aucun string literal hardcode pour les types.
- Les placeholders pour champs futurs (non encore en BDD) utilisent correctement `value={null}`.
- Les composants IconDpe/IconGes utilisent bien la prop `classe` (pas `type`) avec `size="small"`.
- La section A Overview n'est pas touchee.
- Les sections suivantes (Activites, Affaires, etc.) sont intactes.

---

**Verdict final : PASS — pret pour ops-agent.**
