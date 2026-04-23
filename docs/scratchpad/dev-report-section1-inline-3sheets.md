# Dev Report — Section 1 inline Dot pour 3 Sheets + date agenda

**Date** : 2026-04-23
**Tâche** : Harmoniser la section 1 (infos bien/client) de 3 composants Sheet en une seule ligne inline avec séparateurs Dot. Ajouter section "Visite le" dans SheetAgendaBien.

## Fichiers modifiés

| Fichier | Changement |
|---------|-----------|
| `packages/ui/src/components/SheetGuideDeVisite.tsx` | Section 1 refactorée : 4 lignes -> 1 ligne inline wrappable avec Dot separators |
| `packages/ui/src/components/SheetOrdreDuJour.tsx` | Section 1 refactorée : 3 lignes -> 1 ligne inline wrappable avec Dot separators, ville supprimée |
| `packages/ui/src/components/SheetAgendaBien.tsx` | Props refactorées (propertyLabel/dpeGrade -> props atomiques), section 1 inline, nouvelle section "Visite le" |
| `apps/agent-app/src/components/deals/DealDetailView.tsx` | Appel SheetAgendaBien adapté aux nouvelles props atomiques + currentVisitDateLabel |

## Détail des changements

### Pattern commun section 1 (3 Sheets)

- Approche par tableau `parts[]` filtré puis `.map()` avec `<Dot />` entre chaque élément
- Classes : `flex items-center gap-[6px] flex-wrap text-xs font-semibold font-roboto text-content-body`
- Adresse tronquée : `truncate max-w-[200px]`
- IconDpe collé après surface (pas de Dot avant/après)
- Ville (propertyCity) non affichée dans aucun des 3 composants
- Helper `Dot()` déjà présent dans SheetGuideDeVisite et SheetOrdreDuJour, ajouté dans SheetAgendaBien

### SheetAgendaBien — nouvelles props

- Supprimé : `propertyLabel: string`, `dpeGrade?: DpeType`
- Ajouté : `propertyAddress`, `propertyType`, `propertySurface`, `propertyDpeGrade`, `clientName`, `currentVisitDateLabel`
- Nouvelle section "Visite le" (div bordée) placée entre section 1 et bandeau alerte client

### DealDetailView — adaptation appel

- Remplacement du `propertyLabel` (string concaténée) par props atomiques
- Cast `as DpeType` (au lieu de `as any`)
- Ajout `clientName={clientFullName}` et `currentVisitDateLabel` basé sur `selectedVisiteEvent.eventDate`

## Vérification

- `npx tsc --noEmit` : 0 erreur
