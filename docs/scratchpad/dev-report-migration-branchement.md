# Dev-report — Migration branchement 16 colonnes Supabase

**Date** : 2026-04-19
**Tache** : #39 Migration Supabase — colonnes manquantes Section Caracteristiques
**Statut** : DONE

---

## Fichiers modifies

| Fichier | Action |
|---|---|
| `apps/agent-app/src/types/property.ts` | +16 champs dans l'interface `Property` |
| `apps/agent-app/src/components/properties/PropertyDetailView.tsx` | 15 `value={null}` remplaces par les vrais champs |

---

## Champs ajoutes au type Property

### Equipements cuisine/pieces (string | null)
- `kitchenEquipment` — apres `kitchenType`
- `mainRoomEquipment` — apres `mainRoomAreaSqm`
- `bedroom1Equipment`, `bedroom2Equipment`, `bedroom3Equipment`, `bedroom4Equipment` — apres `bedroom4AreaSqm`

### Sanitaires (number | null + string | null)
- `bathroomAreaSqm`, `bathroomEquipment` — apres `toiletCount`
- `toiletAreaSqm`, `toiletEquipment` — apres `bathroomEquipment`

### Domotique / fermetures (boolean | null + string | null)
- `hasSmartphoneControl` — apres `hasHomeAutomation`
- `shutterType` — apres `hasSmartphoneControl`

### Parties communes (boolean | null)
- `hasDigicode` — apres `hasElevator`
- `hasGreenSpace` — apres `hasDigicode`

### Stationnement (number | null)
- `parkingWidthM` — apres `parkingSpotCount`
- `parkingLengthM` — apres `parkingWidthM`

---

## Branchements UI (PropertyDetailView.tsx)

| Section | Label | Champ branche |
|---|---|---|
| B.1 Piece a vivre | Equipements | `property.mainRoomEquipment` |
| B.1 Cuisine | Equipements | `property.kitchenEquipment` |
| B.1 Chambre 1 | Equipements | `property.bedroom1Equipment` |
| B.1 Chambre 2 | Equipements | `property.bedroom2Equipment` |
| B.1 Chambre 3 | Equipements | `property.bedroom3Equipment` |
| B.1 Chambre 4 | Equipements | `property.bedroom4Equipment` |
| B.1 Salle de bain | Surface | `property.bathroomAreaSqm` (+ suffixe m2) |
| B.1 Salle de bain | Equipements | `property.bathroomEquipment` |
| B.1 WC | Surface | `property.toiletAreaSqm` (+ suffixe m2) |
| B.1 WC | Equipements | `property.toiletEquipment` |
| B.2 Domotique | Commande par telephone | `property.hasSmartphoneControl` (Oui/Non) |
| B.2 Fermetures | Type de fermetures | `property.shutterType` |
| B.4 Stationnement | Dimensions | `property.parkingWidthM x parkingLengthM` |
| B.6 Parties Communes | Digicode | `property.hasDigicode` (Oui/Non) |
| B.6 Parties Communes | Espace vert | `property.hasGreenSpace` (Oui/Non) |

---

## Verification

- 0 `value={null}` restants dans le fichier TSX
- Section A (overview) non touchee
- Aucun fichier cree (hors ce dev-report)
- Tous les types respectent les conventions : `string | null`, `boolean | null` (Oui/Non), `number | null` (+ unite)
