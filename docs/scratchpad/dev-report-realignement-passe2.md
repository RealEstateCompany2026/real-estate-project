# Dev Report — Passe 2 : Sections B expandées Caractéristiques

**Date** : 2026-04-19
**Fichier modifié** : `apps/agent-app/src/components/properties/PropertyDetailView.tsx`
**Scope** : Contenu entre `{showMoreCharacteristics && (` ... `)}` uniquement

---

## Imports ajoutés

- `POOL_TYPE_LABELS` (pour B.2 Piscine)
- `VIEW_TYPE_LABELS` (pour B.6 Vue)

Ajoutés à la ligne d'import existante depuis `@/types/property`.

---

## Sections modifiées

### B.1 — Pièces (ex "Caractéristiques par pièce")
- Titre renommé "Caractéristiques par pièce" -> "Pièces"
- Grid 3 colonnes conservée : Séjour+Cuisine | Chambres | Sanitaires
- Ajout placeholder `Équipements` (value={null}) dans chaque bloc pièce
- Sanitaires réordonnés : Salle de bain en premier (avec Baignoire nb, Douche nb, Surface, Équipements), WC en second (Nombre, Surface, Équipements)

### B.2 — Équipements
- Passé de grid 3 cols flat à grid 2 cols titrées (Domotique + Fermetures)
- Ajout placeholders : "Commande par téléphone", "Type de fermetures"
- Bloc Piscine conditionnel (`property.hasPool`) avec `POOL_TYPE_LABELS`

### B.3 — Énergie
- Passé de grid 3 cols flat à grid 2 cols titrées (DPE + GES)
- Intégration `IconDpe` et `IconGes` inline avec les valeurs énergie/GES
- Date DPE affichée dans les deux colonnes
- Conformité sous DPE, Chauffage + Eau chaude sous GES

### B.4 — Stationnement
- Rendu conditionnel : `property.parkingType && property.parkingType !== 'AUCUN'`
- Sous-bloc titré "Stationnement 1" avec Type, Quantité, Dimensions (placeholder)

### B.5 — Annexes
- Passé de grid 3 cols flat à grid 2 cols avec blocs titrés par annexe
- Chaque annexe a un titre `<p>`, un champ Type et un champ Surface

### B.6 — Parties Communes
- Passé de grid 2 cols à liste verticale simple
- Ajout placeholders : Digicode, Espace vert
- Ajout champ Vue avec `VIEW_TYPE_LABELS`

### B.7 — Copropriété
- Passé de grid 3 cols flat à grid 2 cols titrées (Description + Procédures)
- Procédures avec liens "Voir documents" conditionnels
- Supprimé les champs lotNumber, syndicName, monthlyCharges, lastAgmDate, plannedWorkAmount, legalProcedureDetails (non demandés dans la spec)

---

## Non touché

- Section A (overview, lignes ~900-987) : intacte
- Bouton "Voir plus / Voir moins" (lignes ~988-1001) : intact
- Section Activités (ligne 1333+) : intacte

## Champs inventés

Aucun. Tous les placeholders utilisent `value={null}` (affichage "À compléter").

---

**Statut** : LIVRÉ — prêt pour review
