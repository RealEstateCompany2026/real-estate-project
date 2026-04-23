# Dev Report — Honoraires / Revision Toggle / Auto-activation

**Date** : 2026-04-23
**Fichiers modifies** : 3

---

## TASK A — Honoraires : divider "ou", validation conditionnelle, ordre des champs

### Fichier 1 : `packages/ui/src/components/SheetMandatEdit.tsx`

- **A1** : Ajout de `'divider'` au type `FieldType`
- **A2** : Rendu du divider avec separateur visuel "ou" (CSS variable `--border-divider`), place avant le check `select`
- **A3** : Exclusion des champs divider de `sectionHasChanges` (`if (f.type === 'divider') return false`) et de `handleSectionSave` (`if (f.type === 'divider') continue`)

### Fichier 2 : `apps/agent-app/src/components/deals/DealDetailView.tsx`

- **A4** : Section Honoraires reordonnee : Commission rate -> divider "ou" -> Fixed fee -> Payer
- Validation conditionnelle : `(rate OR fixedFee) AND payer` au lieu de `every field filled`

---

## TASK B — Revision toggle : persister mandateStatus REVISE/EDITE

### Fichier : `apps/agent-app/src/components/deals/DealDetailView.tsx`

- **B1** : `onToggleRevision` remplace `setIsRevision` par un handler async qui persiste `REVISE` ou `EDITE` en base via Supabase, puis met a jour le state local (`setIsRevision` + `setDeal`)
- **B2** : Initialisation de `isRevision` depuis le `mandateStatus` au chargement — si le status est `REVISE`, `setIsRevision(true)` est appele apres `setDeal`
- **B3** : `onSendMandate` remplace `window.location.reload()` par une mise a jour locale du state (`setDeal` + `setIsSheetMandatViewOpen(false)`)

---

## TASK C — Statut actif/inactif : mandateWaived en base + auto-activation sur signature

### Fichier : `packages/database/prisma/schema.prisma`

- **C1** : Ajout de `mandateWaived Boolean @default(false)` dans le modele `Deal`, apres `mandateFixedFee`

### Fichier : `apps/agent-app/src/components/deals/DealDetailView.tsx`

- **C2** : `useEffect` auto-activation — quand `mandateWaived === false` (mode auto) et `mandateStatus === 'SIGNE'` et `pipelineStage === 'MANDAT'`, avance automatiquement vers `RECHERCHE` (ACQUISITION/LOCATION) ou `COMMERCIALISATION` (VENTE/GESTION/BAIL)
- **C3** : `onGenerateMandate` remplace `window.location.reload()` par mise a jour locale du state avec `setDeal`

---

## Verification

- `mandateWaived` existe deja dans l'interface `DealRow` (ligne 98) — pas de modification necessaire
- `currentType` est accessible dans le scope du composant (ligne 806)
- `RECHERCHE` est utilise comme string dans le code existant (pattern coherent avec l'existant)
- Le `fetchedType` declare en B2 ne cree pas de conflit avec celui de la ligne 693 car il est dans un scope different (dans la closure `load()`)

## Corrections review

### C1 — CRITICAL : useEffect auto-activation TDZ + double fetchedType + deps manquantes

- **C1a** : `useEffect` auto-activation (ligne 738) referençait `currentType` declare plus bas (ligne 806) — risque TDZ dans le tableau de dependances. Remplace par `dealType` calcule inline dans le callback. Ajout de `.catch()` pour les erreurs reseau. Deps corrigees : `[deal?.id, deal?.mandateWaived, deal?.pipelineStage, deal?.saleMandateStatus, deal?.mgmtMandateStatus, deal?.type]`.
- **C1b** : Double declaration `const fetchedType` dans `load()` (lignes 670 et 701). Deplace la declaration unique avant la premiere utilisation (ligne 670), supprime le doublon ligne 701.

### M2 — MAJOR : hasHonoraires accepte 0

- Ligne 1005 : `deal.mandateCommissionRate != null` acceptait `0` comme valide. Corrige en ajoutant `&& > 0` pour les deux champs (rate et fixedFee).

### M3 — MAJOR : toggle Revision permet de regresser le workflow

- Ligne 1941 : Ajout d'un guard dans `onToggleRevision` — verifie que `currentMandateStatus` est au plus `REVISE` dans l'ordre `['NON_CREE', 'EDITE', 'REVISE', 'ENVOYE', 'SIGNE']`. Si le statut est `ENVOYE` ou `SIGNE`, le toggle est bloque (return immediat).

### MINOR M1 — buildInitialValues divider parasite

- Fichier `packages/ui/src/components/SheetMandatEdit.tsx`, fonction `buildInitialValues` : ajout de `if (f.type === 'divider') continue;` pour eviter de creer une entree parasite dans les valeurs initiales.

---

## Risques identifies

- `RECHERCHE` n'est pas dans l'enum Prisma `PipelineStage` — coherent avec le code existant mais pourrait necessiter une migration future
- La migration `mandateWaived` necessite un `ALTER TABLE` en base (a executer par ops-agent)
