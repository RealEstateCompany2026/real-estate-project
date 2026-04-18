# Dev-report — Refactor section Caracteristiques (Fiche Bien)

**Date** : 2026-04-18
**Fichier modifie** : `apps/agent-app/src/components/properties/PropertyDetailView.tsx`

---

## Modifications effectuees

### 1. Bouton "Voir plus" centre avec chevrons (lignes 951-964)

- **Avant** : `<Button>` seul, aligne a gauche, texte uniquement
- **Apres** : Enveloppe dans `<div className="flex justify-center mt-[16px]">`, ajout icones `ChevronDown` / `ChevronUp` conditionnelles
- **Import** : Ajout de `ChevronDown, ChevronUp` a l'import lucide-react (ligne 5)

### 2. Suppression AiSuggestionBanner (ex-lignes 1101-1105)

- **Avant** : Bloc `<AiSuggestionBanner>` present en bas de la section Caracteristiques
- **Apres** : Bloc supprime
- **Import** : Import `AiSuggestionBanner` supprime (ex-ligne 20) — verification faite, aucune autre occurrence dans le fichier

### 3a. Titres de sous-sections convertis en h6

- **Avant** : `<p className="text-[14px] font-semibold leading-[20px] tracking-[0.14px] ...">` / `</p>`
- **Apres** : `<h6 className="font-bold text-[20px] leading-[24px] tracking-[0.2px] ...">` / `</h6>`
- **Sous-sections concernees** : Equipements, Energie, Stationnement, Annexes, Parties Communes, Copropriete
- Note : "Caracteristiques par piece" est aussi en h6 (traite dans 3b)

### 3b. Restructuration "Caracteristiques par piece" (lignes 968-1048)

- **Avant** : Grille plate 3 colonnes avec tous les ProfileField au meme niveau
- **Apres** : Layout en 3 colonnes structurees avec blocs titres :
  - Colonne 1 : Piece a vivre (Surface) + Cuisine (Surface, Type)
  - Colonne 2 : Chambre 1 + Chambres 2-4 (conditionnelles via `bedroomCount`)
  - Colonne 3 : WC (Nombre) + Salle de bain (Salle de bain, Salle d'eau)
- Gap vertical passe de `gap-y-[8px]` a `gap-y-[24px]`
- Sous-titres de pieces en `<p>` avec `mb-[8px]` (style inline, pas h6)

---

## Points d'attention pour le reviewer

1. **Aucun nouveau champ Property invente** — tous les champs utilises existaient deja (mainRoomAreaSqm, kitchenAreaSqm, kitchenType, bedroom1-4AreaSqm, bedroomCount, toiletCount, bathroomCount, showerRoomCount)
2. **Import AiSuggestionBanner** supprime — verifie qu'il n'est plus utilise nulle part dans le fichier
3. **Coherence semantique** : les titres de sous-sections sont en `<h6>`, les titres de pieces individuelles restent en `<p>` (hierarchie correcte)
4. **Pas de modification en dehors de la section Caracteristiques** (~lignes 900-1159)
5. **ChevronDown/ChevronUp** : verifier que ces icones sont bien exportees par la version de lucide-react du projet
