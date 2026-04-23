# Review Report — Refonte SheetOrdreDuJour

- **Date** : 2026-04-23
- **Reviewer** : reviewer-agent
- **Brief** : BRIEF-REFONTE-SHEETORDREDUJOUR
- **Fichiers audités** :
  - `packages/ui/src/components/SheetOrdreDuJour.tsx`
  - `apps/agent-app/src/components/deals/DealDetailView.tsx` (lignes 2714-2740)

---

## Verdict : PASS WITH NOTES

---

## Checklist Brief

| # | Item | Statut | Commentaire |
|---|------|--------|-------------|
| 1 | Header : retirer `headerAfterTitle` | OK | Aucun `headerAfterTitle` dans le composant. Title "Ordre du Jour" seul. |
| 2 | Props : supprimer `propertyLabel`, ajouter propertyAddress/City/Type/Surface/DpeGrade | OK | `propertyLabel` absent. 5 nouvelles props optionnelles `?:` avec `| null`. |
| 3 | Imports : IconDpe, DpeType depuis ./IconDpe | OK | Ligne 9-10 : `import { IconDpe } from "./IconDpe"` + `import type { DpeType } from "./IconDpe"`. |
| 4 | Helper Dot() local | OK | Lignes 46-48. Identique au pattern SheetVisite (memes classes). |
| 5 | Section 1 : adresse + ville/type/surface + DPE + clientName | OK | Layout conforme au brief. |
| 6 | Section 2 : panneau de controle borde + Badge + Switch | OK | Conteneur `rounded-lg border border-edge-default p-[16px]` dans `mx-[20px] mb-[12px]`. |
| 7 | Section 3 : textarea inchange | OK | Textarea present avec `content` / `onContentChange`. |
| 8 | Footer : bouton Envoyer conditionne a Revision On | OK | `disabled={!isRevision \|\| isSent}`. |
| 9 | DealDetailView : adapter props (propertyLabel vers champs structures) | OK | Lignes 2714-2740 : 5 props structurees, meme pattern que SheetVisite. |

---

## Findings

### NOTE-1 — Textarea focus ring utilise `var()` inline (severity: LOW)

**Localisation** : `SheetOrdreDuJour.tsx`, ligne 155
```
focus:ring-[var(--border-branded-default)]
```

**Analyse** : Ce pattern `focus:ring-[var(--CSS-variable)]` est coherent avec SheetVisite (lignes 187, 262 du meme fichier) qui utilise exactement la meme syntaxe pour les inputs. Ce n'est pas un hex hardcode : c'est un CSS variable du Design System reference via l'arbitrary value syntax de Tailwind. Pattern acceptable, mais idealement un token Tailwind natif (`focus:ring-border-branded-default`) serait plus propre si le token est configure dans le theme.

**Action requise** : Aucune — meme pattern que le reste du codebase.

---

### NOTE-2 — Pas de gestion explicite du edge case "tous les champs null" (severity: LOW)

**Localisation** : `SheetOrdreDuJour.tsx`, lignes 100-129

**Analyse** : Si `propertyAddress`, `propertyCity`, `propertyType`, `propertySurface` et `propertyDpeGrade` sont tous `null`, la section 1 n'affiche que le `clientName`. Le conteneur `px-[20px] py-[12px]` reste rendu avec uniquement le nom du client. Ce comportement est acceptable : le client est une prop `string` obligatoire, donc il y aura toujours au minimum le nom affiche. Pas de section vide invisible.

**Action requise** : Aucune.

---

### NOTE-3 — `propertyAddress` conditionne par valeur truthy, pas par `!== null` (severity: LOW)

**Localisation** : `SheetOrdreDuJour.tsx`, ligne 104
```tsx
{propertyAddress && (
```

**Analyse** : L'utilisation de `&&` avec une string filtre aussi la string vide `""`, ce qui est le comportement souhaite (ne pas afficher une ligne vide). Le brief utilise le meme pattern. Coherent avec SheetVisite (ligne 211).

**Action requise** : Aucune.

---

### NOTE-4 — Accents reels, pas d'unicode escapes (severity: OK)

**Verification** : Aucun `\u00E9` ou equivalent trouve dans le fichier. Les accents sont en clair : "Edition", "EDITE", "EDITER", "Revision", "Envoyer l'Ordre du Jour".

**Statut** : Conforme.

---

### NOTE-5 — odjStatus null gere correctement (severity: OK)

**Analyse** : Quand `odjStatus === null` :
- `editionBadgeVariant` = `"warning"` (correct : pas encore edite)
- `editionBadgeLabel` = `"EDITER"` (correct : action a faire)
- `isSent` = `false` (correct)
- Bouton Envoyer desactive car `!isRevision` (correct)

Dans DealDetailView (lignes 2730-2736), le mapping est explicite : seuls `EDITE`, `REVISE`, `ENVOYE` passent la valeur, tout le reste donne `null`. Pattern robuste.

---

## Coherence avec SheetVisite

| Element | SheetVisite | SheetOrdreDuJour | Match |
|---------|-------------|------------------|-------|
| Dot helper | `size-[5px] rounded-full bg-content-body shrink-0` | Identique | OK |
| Props bien structurees | 5 props optionnelles `?:` + `\| null` | Identique | OK |
| Import IconDpe/DpeType | `from "./IconDpe"` | Identique | OK |
| Ligne 2 (ville/type/surface) | `text-xs font-semibold gap-[6px]` + Dot + IconDpe small | Identique | OK |
| Ligne 1 (adresse) | `text-sm text-content-body truncate` | Identique | OK |
| Badge import | `BadgeVariant` type import | OK (type import) | OK |
| CSS variables | `focus:ring-[var(--border-branded-default)]` | Identique | OK |
| Tokens DS only | Aucun hex, aucune classe custom | Aucun hex, aucune classe custom | OK |

---

## Resume

Le composant refactore est conforme au brief sur tous les points de la checklist. Le code est propre, les types TypeScript sont corrects, les props sont toutes optionnelles avec `| null`, et le pattern est parfaitement aligne sur SheetVisite. Aucun hex hardcode, aucun unicode escape, aucune regression sur les props existantes.

Les notes sont toutes de severite LOW ou informatives — aucune ne justifie un retour au dev-agent.
