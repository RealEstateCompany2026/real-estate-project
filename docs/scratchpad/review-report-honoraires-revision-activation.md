# Review Report — Honoraires / Revision / Activation

**Date** : 2026-04-23
**Reviewer** : reviewer-agent
**Fichiers audites** :
1. `packages/ui/src/components/SheetMandatEdit.tsx`
2. `apps/agent-app/src/components/deals/DealDetailView.tsx`
3. `packages/database/prisma/schema.prisma`

---

## Verdict global : FAIL (1 CRITICAL, 2 MAJOR, 2 MINOR)

---

## TASK A — Honoraires (divider + validation)

### Point 1 — Divider `entity: 'deal', field: 'divider_honoraires'` dans `buildInitialValues` / `coerceFieldValue`

**Verdict : PASS (avec reserve MINOR)**

- `buildInitialValues` (SheetMandatEdit.tsx L259-270) itere sur **tous** les fields y compris le divider. Il va creer une entree `values['deal']['divider_honoraires'] = ''` (car `f.value` est `null` donc `?? ""`). C'est un champ fantome inoffensif — il ne sera jamais modifie par l'utilisateur et ne matchera jamais un vrai champ BDD.
- `coerceFieldValue` n'est jamais appele pour les dividers car les fonctions `handleSectionSave` (L148-159) et le diff check (L140-145) excluent correctement `f.type === 'divider'` avec un `continue`/`return false`.
- Le rendu du divider (L178-185) affiche bien "ou" avec un style horizontal separator.

**MINOR M1** : `buildInitialValues` cree quand meme une entree parasite `deal.divider_honoraires`. Proprete insuffisante. Ajouter un `if (f.type === 'divider') continue;` dans `buildInitialValues` pour ne pas polluer le state.

### Point 2 — Validation `hasHonoraires` : `!!(x != null || y != null)`

**Verdict : MAJOR BUG**

Ligne 1005 du DealDetailView :
```typescript
const hasHonoraires = !!(deal.mandateCommissionRate != null || deal.mandateFixedFee != null);
```

Le `!!` est **redondant** ici (le resultat de `!=` est deja boolean), mais ce n'est pas le probleme.

Le vrai probleme est que la condition **accepte la valeur `0`** comme valide. `mandateCommissionRate = 0` passe `!= null` donc `hasHonoraires = true`. Un taux a 0% ou des honoraires fixes a 0 EUR serait considere comme rempli, ce qui est logiquement incorrect pour une validation de mandat.

**MAJOR M2** : Ajouter un guard contre les valeurs zero :
```typescript
const hasHonoraires = !!((deal.mandateCommissionRate != null && deal.mandateCommissionRate > 0)
  || (deal.mandateFixedFee != null && deal.mandateFixedFee > 0));
```

---

## TASK B — Revision toggle

### Point 3 — Regression de statut (ENVOYE/SIGNE -> REVISE/EDITE)

**Verdict : MAJOR BUG**

Ligne 1941-1953 du DealDetailView :
```typescript
const newStatus = checked ? 'REVISE' : 'EDITE';
```

Si le mandat est au statut `ENVOYE` ou `SIGNE` et que l'agent toggle la revision, le statut regresse a `REVISE` ou `EDITE`. C'est une **regression de workflow** non protegee.

L'enum `MandateStatus` defini un ordre : `NON_CREE -> EDITE -> REVISE -> ENVOYE -> SIGNE -> RESILIE`.

La constante `MANDATE_ORDER_DETAIL` (L256) confirme cet ordre. Le toggle ne devrait etre autorise que si le statut actuel est `EDITE` ou `REVISE`. Au-dela (`ENVOYE`, `SIGNE`), le toggle devrait etre desactive ou le handler devrait refuser la regression.

**MAJOR M3** : Ajouter un guard dans `onToggleRevision` :
```typescript
const currentStatus = (deal as any)[statusField] ?? 'NON_CREE';
const idx = MANDATE_ORDER_DETAIL.indexOf(currentStatus);
if (idx > 2) return; // ENVOYE (3) ou SIGNE (4) — pas de regression
```

Egalement, dans le composant `SheetMandatEdit`, le `Switch` devrait avoir `disabled={mandateStatusIndex > 2}` pour empecher l'interaction UI.

### Point 4 — `setIsRevision` reset a la fermeture/reouverture de la sheet

**Verdict : PASS**

`isRevision` est initialise a `false` (L619) et re-synchronise depuis la BDD lors du fetch initial (L672-675). Quand on ferme et rouvre la sheet, les props passees (`isRevision={isRevision}`) refletent toujours l'etat local, qui est lui-meme synchronise avec la BDD via `onToggleRevision`. Le state persiste correctement entre fermeture et reouverture car il est externe au composant Sheet.

Toutefois, si l'utilisateur ferme la sheet sans sauvegarder et que la BDD a ete mise a jour entre-temps (par un autre onglet), le state local sera desynchronise. Ce n'est pas un bug dans le scope actuel mais un edge case a documenter.

---

## TASK C — Auto-activation (useEffect + DB write)

### Point 5 — Dependencies manquantes dans le useEffect auto-activation

**Verdict : CRITICAL BUG**

Ligne 755 :
```typescript
}, [deal?.id, deal?.mandateWaived, deal?.pipelineStage, currentType]);
```

**Probleme 1** : `currentType` est declare a la **ligne 806**, APRES le useEffect de la ligne 738. Cela signifie que `currentType` est utilise avant d'etre declare. En mode strict TypeScript/React, cela devrait provoquer une erreur de temporal dead zone (TDZ) car `const` n'est pas hoisté. **C'est un crash runtime.**

**Probleme 2** : Meme si `currentType` etait accessible, il manque `deal?.saleMandateStatus` et `deal?.mgmtMandateStatus` dans les deps. Le useEffect lit `(deal as any)[statusKey]` (L744) donc il depend de ces valeurs. Sans elles dans le tableau de deps, le useEffect ne se re-executera pas quand le statut du mandat change (par exemple apres un toggle revision -> SIGNE), ce qui est exactement le scenario ou l'auto-activation doit se declencher.

**Probleme 3** : Double declaration de `const fetchedType` dans la fonction `load()` (L670 et L701). Les deux sont dans le meme scope de fonction, ce qui provoque une erreur `SyntaxError: Identifier 'fetchedType' has already been declared`. **C'est un bug bloquant de compilation.**

**CRITICAL C1** : 
- Deplacer le useEffect auto-activation APRES la declaration de `currentType` (apres L806).
- Ajouter `deal?.saleMandateStatus` et `deal?.mgmtMandateStatus` dans les deps.
- Renommer la seconde declaration `fetchedType` en un nom different (ex: supprimer la ligne 701 puisque `fetchedType` est deja declare a L670).

### Point 6 — Side effect DB write dans useEffect

**Verdict : MINOR (pattern acceptable avec reserve)**

L'appel `supabase.from('Deal').update(...)` dans un useEffect (L748-754) est un pattern courant dans les applications React+Supabase pour les effets derives. C'est acceptable si :
- L'update est idempotent (oui — meme stage = no-op cote BDD)
- Il n'y a pas de boucle infinie (oui — `pipelineStage` change dans le state, mais la condition `=== 'MANDAT'` empeche la re-execution)
- L'erreur est geree (oui — le `.then` verifie `updateError`)

**MINOR M4** : Le `.then()` n'a pas de `.catch()`. Si la requete Supabase echoue de maniere inattendue (reseau), l'erreur sera silencieusement ignoree. Ajouter un `.catch(console.error)` pour la tracabilite.

---

## Schema Prisma

### `mandateWaived Boolean @default(false)` (L1399)

**Verdict : PASS**

Le champ est correctement declare comme `Boolean` (pas nullable), avec un default a `false`. C'est coherent avec l'usage dans le DealDetailView ou `deal.mandateWaived` est lu comme un boolean sans guard de nullite (L740 : `!deal.mandateWaived`). Le type `DealRow` le declare aussi comme `mandateWaived: boolean` (L98), ce qui est coherent.

---

## Resume des actions requises

| ID | Severite | Fichier | Description |
|----|----------|---------|-------------|
| C1 | CRITICAL | DealDetailView.tsx | `currentType` utilise avant declaration (TDZ crash) + deps manquantes useEffect + double `const fetchedType` (compile error) |
| M2 | MAJOR | DealDetailView.tsx | `hasHonoraires` accepte `0` comme valeur valide |
| M3 | MAJOR | DealDetailView.tsx | Toggle revision permet regression ENVOYE/SIGNE -> REVISE/EDITE |
| M1 | MINOR | SheetMandatEdit.tsx | `buildInitialValues` cree entree parasite pour dividers |
| M4 | MINOR | DealDetailView.tsx | `.then()` sans `.catch()` dans useEffect auto-activation |

**Decision** : FAIL — retour au dev-agent pour corriger C1 (bloquant), M2, et M3 avant deploiement.
