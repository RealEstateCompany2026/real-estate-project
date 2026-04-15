# Review Report P09 — Section Caractéristiques (15 avril 2026)

**reviewer-agent audit à froid**
**Status**: FAIL (1 CRITICAL bloquant)
**Build**: ✓ SUCCESS
**Date**: 15 avril 2026

---

## Verdict

**FAIL** — Le code contient 1 violation CRITICAL du brief qui doit être corrigée avant déploiement.

---

## Summary

Audit du code livré par dev-agent pour la refonte de la Section Caractéristiques. Le build s'est déroulé sans erreur TypeScript (2.5s, 29 routes). La majorité des exigences du brief sont satisfaites :
- Structure JSX correcte (3 colonnes non-expandées + 7 sous-sections)
- Fetch CoOwnershipDetails bien intégré
- State et handlers correctement implémentés
- Labels utilisés correctement dans la partie lecture

Cependant, une violation CRITICAL du brief a été identifiée : les options SelectField dans la Sheet édition sont hardcodées au lieu d'être générées depuis les constantes Record<> importées.

---

## CRITICAL Findings

### 1. Hardcoding des options SelectField — Violation du brief
**Fichier**: `apps/agent-app/src/components/properties/PropertyDetailView.tsx`  
**Lignes**: 1471-1477, 1484-1488, 1495-1499, 1275-1287, 1294-1299, 1354-1359  
**Sévérité**: CRITICAL (bloquant)

**Description**:  
Les options des SelectField pour les enums sont **hardcodées directement dans le JSX** au lieu d'être générées depuis les constantes Record<> importées de `types/property.ts`.

Exemples de violation :

```typescript
// ❌ MAUVAIS (ligne 1471-1477) — heatingType
<SelectField
  label="Type de chauffage"
  value={characteristicsForm.heatingType}
  onChange={(v) => updateCharacteristicsField('heatingType', v)}
  options={[
    { value: 'INDIVIDUEL_GAZ', label: 'Individuel gaz' },
    { value: 'INDIVIDUEL_ELECTRIQUE', label: 'Individuel électrique' },
    // ... hardcodé
  ]}
/>
```

**Brief original** (ligne 297-298):
> "Importer les labels depuis `types/property.ts` — PAS de string literals hardcodés pour les types/enums"

**Recommandation**:  
Remplacer tous les hardcodings par une génération depuis les constantes :

```typescript
// ✓ BON
<SelectField
  label="Type de chauffage"
  value={characteristicsForm.heatingType}
  onChange={(v) => updateCharacteristicsField('heatingType', v)}
  options={Object.entries(HEATING_TYPE_LABELS).map(([value, label]) => ({
    value,
    label,
  }))}
/>
```

**Champs affectés** :
- `heatingType` (1471-1477) → utiliser `HEATING_TYPE_LABELS`
- `hotWaterSystem` (1484-1488) → utiliser `HOT_WATER_SYSTEM_LABELS`
- `parkingType` (1495-1499) → utiliser `PARKING_TYPE_LABELS`
- `kitchenType` (1354-1359) → utiliser `KITCHEN_TYPE_LABELS`
- `type` (1275-1287) → utiliser `PROPERTY_TYPE_LABELS`
- `condition` (1294-1299) → utiliser `PROPERTY_CONDITION_LABELS`

**Impact** :  
- Maintenance issue : si les enums changent dans `property.ts`, les options ne changeront pas automatiquement
- Incohérence : les labels sont importés mais non utilisés pour les options
- Violation du pattern DS établi par le projet

---

## Conformité au Brief

| Critère | Status | Notes |
|---------|--------|-------|
| **Structure JSX — 3 colonnes non-expandées** | ✓ PASS | Localisation / Type / Diagnostics — ligne 762-798 |
| **Structure JSX — 7 sous-sections expandées** | ✓ PASS | B.1 à B.7 dans le bon ordre — ligne 810-945 |
| **Fetch CoOwnershipDetails conditionnel** | ✓ PASS | Bien intégré ligne 415-426 |
| **Interface CoOwnershipDetailsRow** | ✓ PASS | 13 propriétés définies — ligne 117-132 |
| **State du formulaire étendu** | ✓ PASS | 39 champs — ligne 312-351 |
| **handleOpenCharacteristicsSheet** | ✓ PASS | Tous les champs mappés — ligne 499-543 |
| **handleSaveCharacteristics UPDATE** | ✓ PASS | Tous les champs inclus avec conversions correctes — ligne 545-604 |
| **Sheet édition — JSX des champs** | ✓ PASS | 6 sections, ~39 champs — ligne 1244-1608 |
| **Chambres conditionnelles** | ✓ PASS | bedroom2-4 visibles si bedroomCount >= N — ligne 821-835 |
| **Booleans affichage "Oui"/"Non"** | ✓ PASS | Correct dans ProfileField — ligne 846-848, 910, 934-935 |
| **Booleans save (true/false)** | ✓ PASS | Conversion `=== 'true'` — ligne 581-584 |
| **Labels constants dans la lecture** | ✓ PASS | HEATING_TYPE_LABELS, etc. utilisés — ligne 786, 793, 826, 858, 862, 882 |
| **Pas de hardcoding dans ProfileField** | ✓ PASS | Labels viennent des constantes |
| **Pas de hardcoding dans SelectField (Sheet)** | ❌ FAIL | **Les options sont hardcodées** — voir CRITICAL #1 |
| **Aucune modification autres sections** | ✓ PASS | Activités, Affaires, Annonce, Carnet, Documents, Messages intacts |
| **Build TypeScript** | ✓ PASS | Compilation réussie en 2.5s, 0 erreur |

---

## Détails Techniques

### Build
```
✓ Compiled successfully in 2.5s
✓ 29 routes générées
✓ Pas d'erreurs TypeScript
✓ Pas de warnings sur les imports/propriétés
```

### Imports Corrects
- ✓ Labels constants bien importés (ligne 32-35)
- ✓ Property type importé (ligne 31)
- ✓ Tous les DS components présents

### State & Handlers
- ✓ `characteristicsForm` : 39 champs
- ✓ `handleOpenCharacteristicsSheet` : mapping complet
- ✓ `handleSaveCharacteristics` : UPDATE avec conversions appropriées
- ✓ `updateCharacteristicsField` : callback présent et fonctionnel

### JSX — Partie Lecture
- ✓ 3 colonnes non-expandées : Localisation (adresse, étage, nb étages) / Type (année, type, surfaces) / Diagnostics (DPE, GES, chauffage, eau chaude)
- ✓ 7 sous-sections in `showMoreCharacteristics` block :
  1. Caractéristiques par pièce (3 colonnes, chambres conditionnelles)
  2. Équipements (3 colonnes, 1 ligne, booleans → Oui/Non)
  3. Énergie (3 colonnes, 4 lignes, labels + valeurs)
  4. Stationnement (2 colonnes, type + quantité)
  5. Annexes (3 colonnes, affichage conditionnel non-null)
  6. Parties Communes (2 colonnes, ascenseur + exposition)
  7. Copropriété (3 colonnes, conditionnel si data.coOwnership, col-span-3 pour détails)

### JSX — Sheet Édition
- ✓ 6 sections logiques :
  1. Localisation (floorLevel, numberOfFloors)
  2. Type (type, condition, constructionYear, livingAreaSqm, landAreaSqm, numberOfRooms)
  3. Pièces (mainRoomAreaSqm, kitchenAreaSqm, kitchenType, bedroomCount, bedroom1-4AreaSqm, bathroomCount, showerRoomCount, toiletCount)
  4. Surfaces annexes (terraceAreaSqm, balconyAreaSqm, gardenAreaSqm, basementAreaSqm, atticAreaSqm)
  5. Équipements (heatingType, hotWaterSystem, parkingType, parkingSpotCount, hasElevator-4)
  6. DPE (dpeEnergyClass, dpeEnergyKwh, dpeGasEmissionClass, dpeGasGco2, dpeValidityDate, dpeComplianceDeadline)
- ✗ **Options hardcodées** pour la majorité des SelectField (voir CRITICAL #1)

### Conversions Données
- ✓ `parseInt()` pour entiers (numberOfRooms, bedroomCount, etc.)
- ✓ `parseFloat()` pour numériques (livingAreaSqm, etc.)
- ✓ `=== 'true'` pour booleans → true/false
- ✓ Null handling correct

### CoOwnershipDetails
- ✓ Interface bien structurée (13 champs)
- ✓ Fetch conditionnel sur `property.coOwnershipId`
- ✓ Intégré dans state `PropertyDetailData`
- ✓ Affichage conditionnel dans JSX (ligne 916-945)

---

## MINOR Findings

### 1. Formatage des dates — Limitation connue
**Fichier**: `apps/agent-app/src/components/properties/PropertyDetailView.tsx`  
**Lignes**: 1594-1606  
**Sévérité**: MINOR (non-bloquant)

**Description**:  
Les champs `dpeValidityDate` et `dpeComplianceDeadline` acceptent du texte libre avec placeholder `YYYY-MM-DD`. Aucune validation client n'est appliquée.

**Note du dev-report**:
> "Les dates sont acceptées en texte libre dans la Sheet (placeholder: "2025-12-31"). Aucune validation de format n'est appliquée côté client. À enrichir si nécessaire avec un DatePicker DS."

**Recommandation**:  
Acceptable pour cette itération. À enrichir ultérieurement avec un composant DatePicker du DS si nécessaire.

---

## Aucune Régression

✓ Vérifiées :
- Autres sections (Activités, Affaires, Annonce, Carnet, Documents, Messages, Acquéreurs) : aucune modification
- Autres Sheets (Documents upload, etc.) : aucune modification
- Header et composants principaux (AppBarFicheBien, Gallery, etc.) : aucune modification
- Routes et navigation : inchangées

---

## Prochaines Étapes

### Avant déploiement (ops-agent)
1. **dev-agent** : Corriger le CRITICAL #1 (hardcoding SelectField options)
   - Remplacer les options hardcodées par des générations depuis les constantes Record<>
   - Ajouter une nouvelle fonction helper si nécessaire
   - Re-lancer le build pour vérifier

2. **reviewer-agent** : Ré-auditer après correction

3. **ops-agent** (si PASS après correction) :
   - Valider la présence de toutes les colonnes en BDD (vérifier la migration)
   - Confirmer que la table CoOwnershipDetails existe avec tous les champs
   - Déployer sur prod

---

## Fichiers Auditées

| Fichier | Lignes | Verdict |
|---------|--------|---------|
| `types/property.ts` | 27, 69-72, 92, 108-109, 257-285 | ✓ OK |
| `PropertyDetailView.tsx` | 1-1648 | ❌ 1 CRITICAL |

---

## Summary Technique

**Code Quality**: 7/10
- Logique bien structurée
- Gestion des états correcte
- Mais violation du pattern d'import pour les SelectField options

**Build**: ✓ SUCCESS (2.5s)

**TypeScript**: ✓ PASS (0 erreur)

**Conformité Brief**: 94% (1 CRITICAL sur les critères de hardcoding)

---

**Signée par**: reviewer-agent  
**Date**: 15 avril 2026 14:15 UTC  
**Prochaine étape**: Attendre correction du CRITICAL, puis re-audit

---

## Re-audit — 15 avril 2026 (Après correction)

**Status**: PASS — Toutes les corrections appliquées, le CRITICAL a été résolu.

### Vérification de la Correction

**Fichier audité**: `apps/agent-app/src/components/properties/PropertyDetailView.tsx`

#### SelectField corrigés (8 champs)

1. **Type** (ligne 1289-1292) ✓
   ```typescript
   options={Object.entries(PROPERTY_TYPE_LABELS).map(([value, label]) => ({
     value, label,
   }))}
   ```

2. **Condition** (ligne 1298-1301) ✓
   ```typescript
   options={Object.entries(PROPERTY_CONDITION_LABELS).map(([value, label]) => ({
     value, label,
   }))}
   ```

3. **Type de cuisine** (ligne 1356-1359) ✓
   ```typescript
   options={Object.entries(KITCHEN_TYPE_LABELS).map(([value, label]) => ({
     value, label,
   }))}
   ```

4. **Type de chauffage** (ligne 1470-1473) ✓
   ```typescript
   options={Object.entries(HEATING_TYPE_LABELS).map(([value, label]) => ({
     value, label,
   }))}
   ```

5. **Eau chaude** (ligne 1479-1482) ✓
   ```typescript
   options={Object.entries(HOT_WATER_SYSTEM_LABELS).map(([value, label]) => ({
     value, label,
   }))}
   ```

6. **Type de parking** (ligne 1488-1491) ✓
   ```typescript
   options={Object.entries(PARKING_TYPE_LABELS).map(([value, label]) => ({
     value, label,
   }))}
   ```

7. **Classe énergétique DPE** (ligne 1547-1550) ✓
   ```typescript
   options={Object.entries(DPE_CLASS_LABELS).map(([value, label]) => ({
     value, label,
   }))}
   ```

8. **Classe GES** (ligne 1563-1566) ✓
   ```typescript
   options={Object.entries(DPE_CLASS_LABELS).map(([value, label]) => ({
     value, label,
   }))}
   ```

#### Imports vérifiés (lignes 32-35)
- ✓ PROPERTY_TYPE_LABELS
- ✓ PROPERTY_CONDITION_LABELS
- ✓ HEATING_TYPE_LABELS
- ✓ HOT_WATER_SYSTEM_LABELS
- ✓ KITCHEN_TYPE_LABELS
- ✓ PARKING_TYPE_LABELS
- ✓ DPE_CLASS_LABELS (défini localement)

#### Booleans acceptables (lignes 1504-1535)
Les champs booléens (Ascenseur, Interphone, Domotique, Piscine) conservent l'hardcodage `'true'`/`'false'` —  **ACCEPTABLE** selon le brief.

### Build Verification

```
✓ Compiled successfully in 2.5s
✓ Running TypeScript ... (0 erreurs)
✓ 29 routes générées
✓ No TypeScript violations
```

### Verdict FINAL

**✓ PASS** — Le CRITICAL #1 a été complètement résolu. Toutes les 8 options SelectField pour les enums/types non-booléens utilisent maintenant le pattern correct `Object.entries(LABEL_CONSTANT).map(...)`.

Le code est prêt pour déploiement (ops-agent).

---

**Signée par**: reviewer-agent (re-audit)  
**Date**: 15 avril 2026  
**Prochaine étape**: Déploiement par ops-agent
