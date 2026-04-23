# Dev Report — Refonte SheetVisite (alignement Figma)

**Date** : 2026-04-23
**Task** : #126

## Fichiers modifies

| Fichier | Action |
|---------|--------|
| `packages/ui/src/components/SheetVisite.tsx` | Rewrite complet |
| `apps/agent-app/src/components/deals/DealDetailView.tsx` | Mise a jour props SheetVisite |

## Changements SheetVisite.tsx

- **Import CollapsibleSection** supprime, remplace par divs bordes (`rounded-lg border border-edge-default p-[16px]`)
- **Nouveaux imports** : `Search`, `Pencil`, `Calendar` (lucide-react) + `IconDpe`, `DpeType`
- **Helper Dot** ajoute (separateur rond 5px, meme pattern que ListVisite)
- **Props restructurees** : `propertyLabel` remplace par `propertyAddress`, `propertyCity`, `propertyType`, `propertySurface`, `propertyDpeGrade`
- **Section 1 — Bien visite** : affichage structure avec adresse ligne 1, ville/type/surface + DPE ligne 2, icone Search (vide) ou Pencil (rempli)
- **Section 2 — Invitations** : titre + bouton Plus, liste invites avec badge CAL, bouton ghost agenda (avec Calendar + label si slot selectionne)
- **Section 3 — Ordre du Jour** : 3 lignes toujours visibles (Edition, Revision, Envoi) avec badges conditionnels, bouton "Voir l'Ordre du jour" toujours present
- **Section 4 — Guide de visite** : 2 lignes toujours visibles (Envoi, Completion) avec badges conditionnels, bouton "Voir l'Avis" toujours present

## Changements DealDetailView.tsx

- Prop `propertyLabel` remplacee par les 5 props structurees (`propertyAddress`, `propertyCity`, `propertyType`, `propertySurface`, `propertyDpeGrade`)
- `DpeType` deja importe dans le fichier (ligne 43)

## Verification TypeScript

```
npx tsc --noEmit -p apps/agent-app/tsconfig.json
```

Aucune erreur liee aux modifications. Les 3 erreurs restantes sont pre-existantes :
- `DealDetailView.tsx(811)` : `.catch` sur `PromiseLike<void>` (pre-existant)
- `AppBarFicheAffaire.tsx(137)` : prop `onClick` manquante sur AiSuggestion (pre-existant)

## Statut : PRET POUR REVIEW
