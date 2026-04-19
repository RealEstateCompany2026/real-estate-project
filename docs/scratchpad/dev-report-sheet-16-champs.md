# Dev-report — Branchement 16 champs Sheet Caractéristiques

**Date** : 2026-04-19  
**Fichier modifié** : `apps/agent-app/src/components/properties/PropertyDetailView.tsx`  
**Statut** : DONE

---

## Modifications effectuées

### 1. initialValues (lignes ~605-660)

16 champs ajoutés dans `handleOpenCharacteristicsSheet` :

| Champ | Pattern |
|---|---|
| `mainRoomEquipment` | `p.mainRoomEquipment ?? ''` |
| `kitchenEquipment` | `p.kitchenEquipment ?? ''` |
| `bedroom1Equipment` | `p.bedroom1Equipment ?? ''` |
| `bedroom2Equipment` | `p.bedroom2Equipment ?? ''` |
| `bedroom3Equipment` | `p.bedroom3Equipment ?? ''` |
| `bedroom4Equipment` | `p.bedroom4Equipment ?? ''` |
| `bathroomAreaSqm` | `p.bathroomAreaSqm?.toString() ?? ''` |
| `bathroomEquipment` | `p.bathroomEquipment ?? ''` |
| `toiletAreaSqm` | `p.toiletAreaSqm?.toString() ?? ''` |
| `toiletEquipment` | `p.toiletEquipment ?? ''` |
| `hasSmartphoneControl` | `p.hasSmartphoneControl ? 'true' : 'false'` |
| `shutterType` | `p.shutterType ?? ''` |
| `parkingWidthM` | `p.parkingWidthM?.toString() ?? ''` |
| `parkingLengthM` | `p.parkingLengthM?.toString() ?? ''` |
| `hasDigicode` | `p.hasDigicode ? 'true' : 'false'` |
| `hasGreenSpace` | `p.hasGreenSpace ? 'true' : 'false'` |

### 2. Formulaire Sheet (CollapsibleSections)

**Section "Pieces"** — 10 inputs ajoutés :
- `mainRoomEquipment` (InputFieldOutlined, apres "Piece a vivre m2")
- `kitchenEquipment` (InputFieldOutlined, apres "Type de cuisine")
- `bedroom1Equipment` a `bedroom4Equipment` (InputFieldOutlined, apres chaque "Chambre X m2")
- `bathroomAreaSqm` + `bathroomEquipment` (apres "Salles de bain")
- `toiletAreaSqm` + `toiletEquipment` (apres "WC")
- Badge completion mis a jour (21 champs au lieu de 11)

**Section "Equipements"** — 6 inputs ajoutés :
- `hasSmartphoneControl` (SelectField Oui/Non, apres "Domotique")
- `shutterType` (InputFieldOutlined, apres hasSmartphoneControl)
- `parkingWidthM` + `parkingLengthM` (InputFieldOutlined number, apres "Places de parking")
- `hasDigicode` + `hasGreenSpace` (SelectField Oui/Non, apres "Ascenseur")
- Badge completion mis a jour (14 champs au lieu de 8)

### 3. handleSaveCharacteristics (lignes ~670-728)

16 champs ajoutés dans `.update({...})` avec parsing correct :
- 8 string : `|| null`
- 2 number (parseFloat) : `bathroomAreaSqm`, `toiletAreaSqm`
- 2 number (parseFloat) : `parkingWidthM`, `parkingLengthM`
- 3 boolean : `hasSmartphoneControl === 'true'`, `hasDigicode === 'true'`, `hasGreenSpace === 'true'`
- 1 string : `shutterType || null`

---

## Aucun nouveau composant cree

Tous les inputs utilisent les composants existants : `InputFieldOutlined` (avec `emptyProps`) et `SelectField`.

## Pret pour review
