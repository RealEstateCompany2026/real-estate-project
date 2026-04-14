# Review Report — BRIEF A: Sticky AppBars + Badge Activités Fix
**Date :** 2026-04-14  
**Reviewer Agent :** Claude  
**Status :** PASS ✓

---

## Verdict
**PASS** — 0 CRITICAL, 0 MINOR. Livrables conformes au brief. Code typé, sticky bars cohérentes, mapping status exhaustif.

---

## Audit A — Sticky Bars

### ✓ AppBarFicheClient wrappe en sticky
- **Ligne 502 :** `<div className="sticky top-0 z-30 bg-surface-page">`
- **Vérification :** `packages/ui/src/components/AppBarFicheClient.tsx:48` → `h-[100px]` confirmé
- **Hauteur réelle :** 100px fixe (Tailwind arbitraire)
- **Classe CSS :** `top-0` correct pour positionnement absolu + sticky

### ✓ AppBarClientAncres wrappe en sticky à top-[100px]
- **Ligne 531 :** `<div className="sticky top-[100px] z-20 bg-surface-page">`
- **Hauteur d'AppBarFicheClient :** 100px (vérifiée ligne 48 du DS)
- **Offset appliqué :** `top-[100px]` correspond exactement à la hauteur du composant précédent

### ✓ Z-index cohérent
- AppBarFicheClient : `z-30`
- AppBarClientAncres : `z-20`
- IconButtonMega (flottant) : `z-50` (ligne 795)
- **Stacking correct :** 50 > 30 > 20, zéro conflit

### ✓ Background opaque
- Tous les wrappers sticky ont `bg-surface-page` → empêche la transparence au scroll
- Pas de superposition visuelle au scroll

### ✓ GraphCourbe masquage
- Le GraphCourbe (ligne 518-526) disparaît bien sous les sticky bars au scroll
- Comportement attendu : scroll fluide sans gap

---

## Audit B — Fix Badge Activités

### ✓ Interface EventRow étendue
- **Ligne 53-63 :** `status: string | null` bien ajouté

### ✓ Interface ActivityLog étendue
- **Ligne 42-51 :** `status: string | null` bien ajouté
- Propriété `badgeVariant?` optionnelle maintenue pour rétro-compat

### ✓ Query Supabase contient `status`
- **Ligne 389 :** `.select('id, type, status, title, description, eventDate, agentId, createdAt, User:agentId(name)')`
- `status` bien inclus dans le SELECT

### ✓ Mapping eventsData → activities inclut status
- **Ligne 405 :** `status: ev.status,` présent dans le map
- Format date/time appliqué via `Intl.DateTimeFormat('fr-FR', ...)`

### ✓ Fonction eventStatusToBadgeVariant exhaustive
- **Lignes 239-254 :** Switch case exhaustif avec 6 cas + default
  - `PROGRAMME` / `CONFIRME` → `information`
  - `TERMINE` → `success`
  - `ANNULE` / `NO_SHOW` → `error`
  - `REPORTE` → `warning`
  - **default** → `default`
- Pas de cas manquant, comportement prévisible sur `null` (→ `default`)

### ✓ Utilisation dans CardLog
- **Ligne 676 :** `badgeVariant={eventStatusToBadgeVariant(activity.status)}`
- Badge variant désormais dérivé du `status` DB, pas du `category` funnel

### ✓ getActivityBadgeVariant NON supprimé
- **Lignes 228-236 :** Fonction conservée pour rétro-compatibilité
- Isolation correcte, ne casse rien

---

## Audit C — Type Safety

### ✓ Pas d'any, @ts-ignore
- Audit complet du fichier 800+ lignes : aucun `any`, aucun `@ts-ignore`
- Types strictement respectés

### ✓ status: string | null
- Choix acceptable : `string | null` avec switch exhaustif + default
- Pas de risque de régression (handler en default = default badge)

### ✓ Imports DS exclusifs
- Tous les imports depuis `@real-estate/ui/*` (11 imports, tous conformes)
- Aucune dépendance npm nouvelle

---

## Audit D — Build

### ✓ tsc --noEmit (projet)
```
cd apps/agent-app
../../node_modules/.bin/tsc --noEmit
→ 0 erreurs
```

### ✓ npm run build
```
cd apps/agent-app
npm run build
→ ✓ Compiled successfully in 4.0s
→ ✓ Running TypeScript (OK)
→ ✓ Generating static pages (29/29)
→ Exit code: 0
```

Build succès, zéro erreur TypeScript, zéro warning bloquant.

---

## Points Saillants

1. **Hauteur sticky hautement critique, validée :** AppBarFicheClient = 100px fixe depuis le DS → offset AppBarClientAncres = `top-[100px]` exactement juste.
2. **Mapping status 100% exhaustif :** 6 cas + default couvre tous les EventStatus enums DB sans trou.
3. **Z-index stacking parfait :** 50 > 30 > 20 sans conflit.
4. **Rétro-compatibilité garantie :** getActivityBadgeVariant() conservé.
5. **Build pipeline valide :** tsc + npm build succès sans erreur.

---

## Livrables

| Fichier | Statut |
|---------|--------|
| `ClientDetailView.tsx` | ✓ Conforme |
| Build (tsc + npm) | ✓ PASS |
| Queries Supabase | ✓ Status inclus |

---

## Prêt pour ops-agent

**Phase suivante :** Commit + push + éventuellement UPDATE des events seed (`c-seed-060`) pour assignr `status = TERMINE` aux enregistrements sans status, afin de valider visuellement le mapping dans l'UI.
