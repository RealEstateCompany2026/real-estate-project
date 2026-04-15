# Brief dev-agent — Refonte Section Caractéristiques (P09 Fiche Bien)

**Date** : 15 avril 2026
**Fichier cible** : `apps/agent-app/src/components/properties/PropertyDetailView.tsx` (branche `main`)
**Complexité** : Moyenne — refonte du JSX section + ajout fetch CoOwnershipDetails + extension du formulaire Sheet
**Référence spécification** : `SecondBrain/WIKI/CRM Immobilier/.../FT-028 - Fiche bien complète.md` → section "Mapping Section Caractéristiques"

---

## Objectif

Refondre la Section Caractéristiques de `PropertyDetailView` pour passer de la grille 3 colonnes actuelle (Général / Surfaces / Énergie) à la structure spécifiée : 3 colonnes non-expandées (Localisation / Type / Diagnostics) + 7 sous-sections expandées (Par pièce, Équipements, Énergie, Stationnement, Annexes, Parties Communes, Copropriété).

---

## État actuel (à remplacer)

### Partie non-expandée (lignes ~658-703)
Grille 3 colonnes :
- **Général** : Type, État, Pièces, Chambres, SDB, Étage, Année
- **Surfaces** : Surface hab., Terrain, Terrasse, Balcon, Jardin
- **Énergie** : DPE énergie, DPE GES, Énergie kWh, GES gCO₂, Chauffage, Exposition

### Partie expandée "Voir plus" (lignes ~714-742)
Grille 3 colonnes :
- **Cuisine & équipements** : Cuisine, WC, Douches
- **Stationnement** : Parking, Places
- **Équipements divers** : Ascenseur, Interphone, Piscine, Domotique

### Sheet édition (lignes ~1022-1225)
6 sections avec 14 champs : Général (type, condition), Pièces (rooms, bedrooms, bathrooms), Surfaces (livingArea, land, terrace), Construction (year), Équipements (heating, kitchen, parking), DPE (energy, gas)

---

## Structure cible

### A. Partie non-expandée — 3 colonnes

**Colonne 1 — Localisation**

| Label | Source | Format |
|-------|--------|--------|
| Adresse | `property.address` | texte |
| Étage | `property.floorLevel` / `property.numberOfFloors` | `"3ème / 6 étages"` (si floorLevel est null → `"—"`) |
| Nombre d'étages | `property.numberOfFloors` | `"6 étages"` |

> Note : Bâtiment et Appartement ne sont pas en BDD → ne pas afficher pour l'instant.

**Colonne 2 — Type**

| Label | Source | Format |
|-------|--------|--------|
| Date de construction | `property.constructionYear` | `"1890"` |
| Type de bien | `PROPERTY_TYPE_LABELS[property.type]` | label traduit |
| Surface habitable | `property.livingAreaSqm` | `"72 m²"` |
| Surface extérieure | `terraceAreaSqm + balconyAreaSqm + gardenAreaSqm` | `"25 m²"` (calculé, 0 si tous null) |
| Nombre de pièces | `property.numberOfRooms` | `"3"` |

**Colonne 3 — Diagnostics**

| Label | Source | Format |
|-------|--------|--------|
| DPE | `property.dpeEnergyClass` + `property.dpeEnergyKwh` | `"D (180 kWh/m²/an)"` |
| GES | `property.dpeGasEmissionClass` + `property.dpeGasGco2` | `"C (25 gCO₂/m²/an)"` |
| Chauffage | `property.heatingType` | Label traduit via constante (voir ci-dessous) |
| Eau chaude | `property.hotWaterSystem` | Label traduit via constante (voir ci-dessous) |

### Labels à ajouter dans `types/property.ts`

```typescript
export type HotWaterSystem = 'CUMULUS_ELECTRIQUE' | 'CHAUDIERE_GAZ' | 'SOLAIRE' | 'THERMODYNAMIQUE';

export const HEATING_TYPE_LABELS: Record<HeatingType, string> = {
  INDIVIDUEL_GAZ: 'Individuel gaz',
  INDIVIDUEL_ELECTRIQUE: 'Individuel électrique',
  COLLECTIF_GAZ: 'Collectif gaz',
  PAC: 'Pompe à chaleur',
  FUEL: 'Fuel',
  BOIS: 'Bois',
};

export const HOT_WATER_SYSTEM_LABELS: Record<HotWaterSystem, string> = {
  CUMULUS_ELECTRIQUE: 'Cumulus électrique',
  CHAUDIERE_GAZ: 'Chaudière gaz',
  SOLAIRE: 'Solaire',
  THERMODYNAMIQUE: 'Thermodynamique',
};

export const KITCHEN_TYPE_LABELS: Record<KitchenType, string> = {
  SEPAREE: 'Séparée',
  OUVERTE: 'Ouverte',
  AMERICAINE: 'Américaine',
  KITCHENETTE: 'Kitchenette',
};

export const PARKING_TYPE_LABELS: Record<ParkingType, string> = {
  BOX_FERME: 'Box fermé',
  PARKING_EXTERIEUR: 'Parking extérieur',
  GARAGE: 'Garage',
  AUCUN: 'Aucun',
};
```

Et ajouter dans l'interface `Property` :
```typescript
hotWaterSystem: HotWaterSystem | null;
```

---

### B. Partie expandée "Voir plus" — 7 sous-sections

Chaque sous-section est un bloc indépendant avec un titre `<p>` (font-semibold 14px) suivi d'une grille. Utiliser le même `ProfileField` atom que pour la partie non-expandée.

**B.1 — Caractéristiques par pièce**

Grille 3 colonnes :

| Colonne 1 | Colonne 2 | Colonne 3 |
|-----------|-----------|-----------|
| Pièce à vivre : `mainRoomAreaSqm` m² | Chambre 1 : `bedroom1AreaSqm` m² | SDB : `bathroomCount` |
| Cuisine : `kitchenAreaSqm` m² | Chambre 2 : `bedroom2AreaSqm` m² | Douches : `showerRoomCount` |
| Type cuisine : `KITCHEN_TYPE_LABELS[kitchenType]` | Chambre 3 : `bedroom3AreaSqm` m² | WC : `toiletCount` |
| | Chambre 4 : `bedroom4AreaSqm` m² | |

> Afficher les chambres conditionnellement : `bedroom2AreaSqm` visible uniquement si `bedroomCount >= 2`, etc.

**B.2 — Équipements**

Grille 3 colonnes, une seule rangée :

| Domotique | Interphone | Piscine |
|-----------|-----------|---------|
| `hasHomeAutomation` → "Oui"/"Non" | `hasIntercom` → "Oui"/"Non" | `hasPool` → "Oui"/"Non" |

**B.3 — Énergie**

Grille 3 colonnes :

| Colonne 1 | Colonne 2 | Colonne 3 |
|-----------|-----------|-----------|
| Chauffage : `HEATING_TYPE_LABELS[heatingType]` | DPE : `dpeEnergyClass` | Validité DPE : `dpeValidityDate` (formatée JJ/MM/AAAA) |
| Eau chaude : `HOT_WATER_SYSTEM_LABELS[hotWaterSystem]` | GES : `dpeGasEmissionClass` | Conformité : `dpeComplianceDeadline` (formatée JJ/MM/AAAA) |
| | Énergie : `dpeEnergyKwh` kWh/m²/an | |
| | GES : `dpeGasGco2` gCO₂/m²/an | |

**B.4 — Stationnement**

Grille 2 colonnes :

| Type | Quantité |
|------|----------|
| `PARKING_TYPE_LABELS[parkingType]` | `parkingSpotCount` place(s) |

**B.5 — Annexes**

Grille 3 colonnes (afficher seulement les non-null) :

| Cave | Grenier | Terrasse |
|------|---------|----------|
| `basementAreaSqm` m² | `atticAreaSqm` m² | `terraceAreaSqm` m² |
| Balcon : `balconyAreaSqm` m² | Jardin : `gardenAreaSqm` m² | Terrain : `landAreaSqm` m² |

**B.6 — Parties Communes**

Grille 2 colonnes, une seule rangée :

| Ascenseur | Exposition |
|-----------|-----------|
| `hasElevator` → "Oui"/"Non" | `exposures.join(', ')` ou `mainExposure` |

**B.7 — Copropriété** (conditionnel : afficher uniquement si `coOwnershipData` n'est pas null)

Grille 3 colonnes :

| Colonne 1 | Colonne 2 | Colonne 3 |
|-----------|-----------|-----------|
| Type : `coOwnershipData.type` | Nombre de lots : `numberOfLots` | Charges annuelles : `estimatedAnnualFees` € |
| Numéro de lot : `lotNumber` | Syndic : `syndicName` | Charges mensuelles : `monthlyCharges` €/mois |
| Dernière AG : `lastAgmDate` (formatée) | Travaux votés : `plannedWorkAmount` € | |
| Procédures en cours : Oui/Non | Procédures votées : Oui/Non | |
| Détails : `legalProcedureDetails` (col-span-3 si non null) | | |

---

## Correctif 1 — Ajouter le fetch CoOwnershipDetails

### Dans la fonction `load()` (après le Promise.all principal, à côté du fetch Client)

```typescript
// Fetch CoOwnershipDetails if coOwnershipId exists
let coOwnershipData: CoOwnershipDetailsRow | null = null;
if ((prop as Property).coOwnershipId) {
  const { data: coData } = await supabase
    .from('CoOwnershipDetails')
    .select('*')
    .eq('id', (prop as Property).coOwnershipId)
    .single();
  if (coData) {
    coOwnershipData = coData as CoOwnershipDetailsRow;
  }
}
```

### Interface à ajouter

```typescript
interface CoOwnershipDetailsRow {
  id: string;
  propertyId: string;
  type: string | null;
  numberOfLots: number | null;
  lotNumber: string | null;
  syndicName: string | null;
  syndicContact: string | null;
  lastAgmDate: string | null;
  estimatedAnnualFees: number | null;
  monthlyCharges: number | null;
  plannedWorkAmount: number | null;
  hasCurrentLegalProcedures: boolean | null;
  hasPlannedLegalProcedures: boolean | null;
  legalProcedureDetails: string | null;
}
```

### Dans `PropertyDetailData`, ajouter

```typescript
coOwnership: CoOwnershipDetailsRow | null;
```

Et dans le `setData(...)` :
```typescript
coOwnership: coOwnershipData,
```

---

## Correctif 2 — Étendre le formulaire Sheet édition

Ajouter les champs suivants au `characteristicsForm` state :

```typescript
const [characteristicsForm, setCharacteristicsForm] = useState({
  // existants
  type: '', condition: '', numberOfRooms: '', bedroomCount: '', bathroomCount: '',
  livingAreaSqm: '', landAreaSqm: '', terraceAreaSqm: '', constructionYear: '',
  heatingType: '', kitchenType: '', parkingType: '', dpeEnergyClass: '', dpeGasEmissionClass: '',
  // NOUVEAUX
  mainRoomAreaSqm: '', kitchenAreaSqm: '',
  bedroom1AreaSqm: '', bedroom2AreaSqm: '', bedroom3AreaSqm: '', bedroom4AreaSqm: '',
  showerRoomCount: '', toiletCount: '',
  balconyAreaSqm: '', gardenAreaSqm: '', basementAreaSqm: '', atticAreaSqm: '',
  parkingSpotCount: '',
  hotWaterSystem: '',
  hasElevator: '', hasIntercom: '', hasHomeAutomation: '', hasPool: '',
  dpeEnergyKwh: '', dpeGasGco2: '',
  dpeValidityDate: '', dpeComplianceDeadline: '',
  floorLevel: '', numberOfFloors: '',
});
```

### Ajouter dans handleOpenCharacteristicsSheet :

Mapper les nouveaux champs depuis `data.property` (même pattern que les existants : `p.mainRoomAreaSqm?.toString() ?? ''`, etc.). Pour les booleans : `p.hasElevator ? 'true' : 'false'`.

### Ajouter dans handleSaveCharacteristics (UPDATE) :

Ajouter tous les nouveaux champs dans l'objet `.update({...})`. Utiliser `parseInt` pour les entiers, `parseFloat` pour les numériques, et une conversion boolean pour les `has*` :
```typescript
hasElevator: characteristicsForm.hasElevator === 'true',
```

### Ajouter les champs dans le JSX de la Sheet :

Organiser la Sheet en sections qui reflètent la structure de la partie lecture :
1. **Localisation** : floorLevel, numberOfFloors
2. **Type** : type, condition, constructionYear, livingAreaSqm, landAreaSqm, numberOfRooms
3. **Pièces** : mainRoomAreaSqm, kitchenAreaSqm, kitchenType, bedroomCount, bedroom1-4AreaSqm, bathroomCount, showerRoomCount, toiletCount
4. **Surfaces annexes** : terraceAreaSqm, balconyAreaSqm, gardenAreaSqm, basementAreaSqm, atticAreaSqm
5. **Équipements** : heatingType, hotWaterSystem, kitchenType, parkingType, parkingSpotCount, hasElevator, hasIntercom, hasHomeAutomation, hasPool
6. **DPE** : dpeEnergyClass, dpeEnergyKwh, dpeGasEmissionClass, dpeGasGco2, dpeValidityDate, dpeComplianceDeadline

Pour les booleans, utiliser `SelectField` avec options `[{ value: 'true', label: 'Oui' }, { value: 'false', label: 'Non' }]`.

---

## Contraintes

- Ne modifier QUE :
  - `PropertyDetailView.tsx` (section Caractéristiques + Sheet + fetch + state)
  - `types/property.ts` (ajout HEATING_TYPE_LABELS, HOT_WATER_SYSTEM_LABELS, KITCHEN_TYPE_LABELS, PARKING_TYPE_LABELS, HotWaterSystem type, hotWaterSystem dans Property)
- Ne PAS toucher aux autres sections (Activités, Affaires, etc.)
- Ne PAS toucher aux autres Sheets
- Ne PAS créer de nouveaux fichiers composant
- Utiliser UNIQUEMENT les composants DS existants (ProfileField inline, InputField, SelectField, Badge, Button)
- Importer les labels depuis `types/property.ts` — PAS de string literals hardcodés pour les types/enums
- Les valeurs null doivent afficher "—" (via ProfileField existant)

---

## Vérification

1. `cd /sessions/magical-amazing-noether/real-estate-project && npm run build`
2. Vérifier l'ordre des sous-sections dans le JSX : Localisation / Type / Diagnostics → Par pièce / Équipements / Énergie / Stationnement / Annexes / Parties Communes / Copropriété
3. Vérifier que CoOwnershipDetails est bien fetch et affiché conditionnellement
4. Vérifier que la Sheet édition contient tous les nouveaux champs
5. Vérifier que le save UPDATE inclut tous les nouveaux champs

---

## Dev-report

Créer `docs/scratchpad/dev-report-P09_SectionCaracteristiques_20260415.md`
