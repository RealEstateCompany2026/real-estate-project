# Dev Report — Phase 2A : SheetOrdreDuJour + SheetGuideDeVisite

**Date** : 2026-04-23  
**Agent** : dev-agent  
**Task** : #120

---

## Fichiers creees

| Fichier | Action |
|---------|--------|
| `packages/ui/src/components/SheetOrdreDuJour.tsx` | Cree |
| `packages/ui/src/components/SheetGuideDeVisite.tsx` | Cree |
| `packages/ui/package.json` | Modifie (2 exports ajoutes) |

## Props interfaces exportees

### SheetOrdreDuJour.tsx
- `SheetOrdreDuJourProps` — isOpen, onClose, propertyLabel, clientName, content, onContentChange, odjStatus ("EDITE"|"REVISE"|"ENVOYE"), isRevision, onToggleRevision, onSend, className?

### SheetGuideDeVisite.tsx
- `VisitCriteriaAnswer` — type "OUI" | "NON" | "PEUT_ETRE"
- `VisitCriterion` — { id, label, answer }
- `SheetGuideDeVisiteProps` — isOpen, onClose, propertyLabel, clientName, criteria, commentaire, submittedAt, onContactClient?, className?

## Exports package.json

```
"./sheet-guide-de-visite": "./src/components/SheetGuideDeVisite.tsx"
"./sheet-ordre-du-jour": "./src/components/SheetOrdreDuJour.tsx"
```

Places en ordre alphabetique parmi les autres sheet-*.

## Resultat compilation TypeScript

```
npx tsc --noEmit --project packages/ui/tsconfig.json 2>&1 | grep "SheetOrdreDuJour\|SheetGuideDeVisite"
→ 0 erreurs
```

Les erreurs pre-existantes (AppBarFicheAffaire, BadgePaymentMethod, ListImport, Snackbar, TooltipOnboarding, stories) ne sont pas liees aux nouveaux fichiers.

## Conformite

- [x] "use client" en premiere ligne
- [x] Tokens Layer 3 uniquement (bg-surface-*, text-content-*, border-edge-*)
- [x] font-roboto sur tous les textes
- [x] Pattern Revision identique a SheetMandatEdit
- [x] Composants DS purs (props in, callbacks out, zero logique metier)
- [x] Pas de hardcoding couleurs
- [x] Imports depuis atoms DS existants (Sheet, Badge, Button, Switch)

## Problemes rencontres

Aucun.
