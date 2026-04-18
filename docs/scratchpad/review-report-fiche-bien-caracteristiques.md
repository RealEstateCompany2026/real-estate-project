# Review Report — Task #35 — Section Caractéristiques (Fiche Bien)

**Fichier audité** : `apps/agent-app/src/components/properties/PropertyDetailView.tsx`
**Date** : 2026-04-18
**Reviewer** : reviewer-agent

---

## Verdict : PASS

---

## Checklist

### 1. Imports
- ✅ `ChevronDown` et `ChevronUp` ajoutés dans l'import lucide-react (ligne 5)
- ✅ `AiSuggestionBanner` absent des imports — aucune trace dans le fichier (grep = 0 résultats)
- ✅ `AiSuggestionBanner` absent du JSX — aucune occurrence dans tout le fichier

### 2. Pas de régression
- ✅ Les sections avant la ligne 900 (Gallery, Sheet Galerie, AppBarFicheBien, etc.) sont intactes
- ✅ Les sections après la ligne 1160 (Activités, Annonces, etc.) sont intactes
- ✅ La section Caractéristiques conserve son header d'origine (h3 + Badge + bouton Éditer, lignes 900-911)
- ✅ La grille initiale 3 colonnes (Localisation / Type / Diagnostics, lignes 913-949) est inchangée

### 3. Cohérence styling
- ✅ Titres h6 des sous-sections (B.1 à B.7) utilisent tous `font-bold text-[20px] leading-[24px] tracking-[0.2px] text-content-headings mb-[24px]` — vérifié sur les 7 occurrences (lignes 970, 1052, 1064, 1088, 1100, 1116, 1128)
- ✅ Block titles dans "Caractéristiques par pièce" utilisent `text-[14px] font-semibold leading-[20px] tracking-[0.14px] text-content-headings mb-[8px]` — vérifié sur : Pièce à vivre (l.978), Cuisine (l.985), Chambre 1 (l.998), Chambre 2 (l.1005), Chambre 3 (l.1013), Chambre 4 (l.1021), WC (l.1032), Salle de bain (l.1038)
- ✅ Bouton "Voir plus" centré dans `div flex justify-center` (ligne 952)
- ✅ Icônes ChevronUp/ChevronDown conditionnelles sur l'état `showMoreCharacteristics`

### 4. Champs Property
- ✅ Tous les champs référencés dans la section (lignes 900-1160) existent dans l'interface `Property` de `types/property.ts`
- ✅ Champs surfaces : `mainRoomAreaSqm`, `kitchenAreaSqm`, `bedroom1AreaSqm` à `bedroom4AreaSqm`, `basementAreaSqm`, `atticAreaSqm`, `terraceAreaSqm`, `balconyAreaSqm`, `gardenAreaSqm`, `landAreaSqm` — tous présents
- ✅ Champs pièces : `bedroomCount`, `bathroomCount`, `showerRoomCount`, `toiletCount` — tous présents
- ✅ Champs énergie/DPE : `dpeEnergyClass`, `dpeEnergyKwh`, `dpeGasEmissionClass`, `dpeGasGco2`, `dpeValidityDate`, `dpeComplianceDeadline` — tous présents
- ✅ Champs équipement : `hasHomeAutomation`, `hasIntercom`, `hasPool`, `hasElevator`, `parkingType`, `parkingSpotCount` — tous présents
- ✅ Labels enum importés et utilisés correctement : `HEATING_TYPE_LABELS`, `HOT_WATER_SYSTEM_LABELS`, `KITCHEN_TYPE_LABELS`, `PARKING_TYPE_LABELS`

### 5. Logique conditionnelle
- ✅ Chambre 1 : affichée sans condition (toujours visible dans le bloc expand) — correct car c'est la chambre principale
- ✅ Chambre 2 : `property.bedroomCount !== null && property.bedroomCount >= 2` (ligne 1003)
- ✅ Chambre 3 : `property.bedroomCount !== null && property.bedroomCount >= 3` (ligne 1011)
- ✅ Chambre 4 : `property.bedroomCount !== null && property.bedroomCount >= 4` (ligne 1019)
- ✅ Section Annexes (B.5) : affichée conditionnellement si au moins une surface annexe est non-null (ligne 1098)
- ✅ Section Copropriété (B.7) : affichée conditionnellement sur `data.coOwnership` (ligne 1126)

### 6. JSX valide
- ✅ Structure des balises correcte : chaque `<div>`, `<section>`, `<h6>`, `<p>` est fermé
- ✅ Le bloc conditionnel `{showMoreCharacteristics && (...)}` est correctement encadré (ouvert l.966, fermé l.1157)
- ✅ Les fragments conditionnels chambres utilisent `{condition && (<div>...</div>)}` — pattern correct
- ✅ Le state `showMoreCharacteristics` est déclaré (ligne 369 : `useState(false)`)
- ✅ Pas de fragments orphelins

---

## CRITICAL

Aucun problème bloquant identifié.

---

## WARNING

1. **Chambre 1 sans condition** : La Chambre 1 s'affiche toujours quand le bloc "Voir plus" est ouvert, même si `bedroomCount` est null ou 0. C'est un choix acceptable (si le bloc s'affiche, on montre au moins la chambre 1), mais si un bien n'a aucune chambre (ex: studio), le bloc "Chambre 1" s'affichera avec "—". A considérer pour une future itération.

2. **Label dupliqué "GES"** dans la section Énergie (B.3) : lignes 1073 et 1081 ont deux champs labellisés "GES" — l'un affiche la classe, l'autre la valeur en gCO2. Pas bloquant mais pourrait prêter à confusion. Suggestion : renommer le second en "Émission GES" ou "GES (valeur)".

---

## Notes

- Le state `showMoreCharacteristics` est initialisé à `false` (ligne 369), les sous-sections sont donc masquées par défaut — comportement attendu.
- La structure en 3 colonnes pour "Caractéristiques par pièce" (Colonne 1: Pièce à vivre + Cuisine, Colonne 2: Chambres, Colonne 3: Sanitaires) est logique et bien organisée.
- Le bouton utilise le composant DS `Button variant="ghost"` — conforme au Design System.
- La section Copropriété (B.7) utilise `data.coOwnership` (pas `property.coOwnership`), ce qui indique que ces données viennent d'une jointure séparée — pattern cohérent avec le reste du fichier.
