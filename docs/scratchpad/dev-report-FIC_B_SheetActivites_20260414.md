# Dev Report — Brief FIC_B SheetActivitésVoirTout

**Date :** 2026-04-14  
**Dev-Agent :** Claude (dev-agent)  
**Brief :** BRIEF_DEV_FIC_B_SheetActivitesVoirTout.md

---

## Modifications appliquées

Fichier unique modifié : `apps/agent-app/src/components/clients/ClientDetailView.tsx`

### Points du brief implémentés

1. ✅ **Import Sheet** — Ligne 21 : `import { Sheet } from '@real-estate/ui/sheet'`
2. ✅ **State `isActivitySheetOpen`** — Ligne 369 : `const [isActivitySheetOpen, setIsActivitySheetOpen] = useState(false)`
3. ✅ **Interface `ClientDetailData`** — Ajout `allActivities: ActivityLog[]` ligne 130
4. ✅ **Query Supabase** — `.limit(100)` ligne 392 (au lieu de 4)
5. ✅ **Dérivation `allActivities` et `activities`** — Lignes 399-410 : 
   - `allActivities` = complet (jusqu'à 100)
   - `activities` = `allActivities.slice(0, 4)` pour le preview
6. ✅ **setData()** — Inclut `allActivities` ligne 460
7. ✅ **Destructuration render** — Ligne 494 : `const { ..., allActivities, ... }`
8. ✅ **onClick "Voir tout"** — Ligne 662 : `onClick={() => setIsActivitySheetOpen(true)}`
9. ✅ **JSX Sheet** — Lignes 801-819 : Sheet avec `allActivities.map(CardLog)`, padding `px-[20px] py-[20px]`

---

## Décision Padding Sheet

**Lue Sheet.tsx entièrement :**
- Header gère ses propres paddings (ligne 129 : `padding: isNarrow ? "47px 20px 0 20px" : "51px 40px 0 40px"`)
- Children sont dans `.flex-1 overflow-y-auto` (ligne 161) — **aucun padding interne**

**Décision appliquée :**
Wrapper des CardLog avec `px-[20px] py-[20px]` comme spécifié au point 8 du brief. Ceci est le seul padding sur les children — pas de redoublement. La Sheet gère elle-même le spacing global.

---

## Vérifications activités

- ✅ `filteredActivities` continue à référencer `activities` (preview, 4 éléments max) — ligne 495-496
- ✅ `filteredActivities` n'utilise **jamais** `allActivities`
- ✅ Une seule query Event (`.limit(100)`), les activities sont dérivées côté client avec `.slice(0, 4)`

---

## Résultats build

```
pnpm --filter agent-app exec tsc --noEmit
→ 0 erreur ✅

pnpm --filter agent-app build
→ ✅ Build succès
  - Page routes compilées
  - Aucune erreur TypeScript ni build
```

---

## Diff résumé

| Partie | Changement |
|--------|-----------|
| Imports | +Sheet |
| Interface | +allActivities: ActivityLog[] |
| State | +isActivitySheetOpen |
| Query Event | .limit(4) → .limit(100) |
| Activities map | Scindé en allActivities complet + activities.slice(0,4) |
| setData | +allActivities |
| Destructure | +allActivities |
| Button onClick | scrollIntoView → setIsActivitySheetOpen(true) |
| JSX | +Sheet component avec allActivities list |

---

## Anomalies détectées

Aucune. Toutes les contraintes respectées :
- ✅ Pas de `any`, `@ts-ignore`
- ✅ Pas de composant custom (Sheet + CardLog DS uniquement)
- ✅ Pas de modif BDD
- ✅ Conforme Design System `@real-estate/ui/*`
- ✅ TypeScript strict 0 erreur

---

## Prêt pour reviewer-agent

Focus demandé au reviewer :
1. Pas de double query Event (une seule à `.limit(100)`)
2. Scroll natif de la Sheet fonctionne (via overflow-y-auto)
3. `filteredActivities` bien lié à `activities` (preview), jamais à `allActivities`
