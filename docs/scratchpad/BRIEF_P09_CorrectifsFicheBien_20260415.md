# Brief dev-agent — Correctifs PropertyDetailView (P09 Fiche Bien)

**Date** : 15 avril 2026
**Fichier cible** : `apps/agent-app/src/components/properties/PropertyDetailView.tsx` (branche `main`)
**Complexité** : Faible — réordonnancement de blocs + ajout GraphCourbe

---

## Objectif

Corriger l'ordre des composants header de PropertyDetailView et ajouter le GraphCourbe manquant.

---

## Ordre actuel (INCORRECT)

```
1. AppBarFicheBien (sticky top:0 z:30)
2. Gallery
3. AppBarAnnonce
4. AppBarBienAncres (sticky top:100px z:20)
```

## Ordre cible (CORRECT)

```
1. AppBarFicheBien (sticky top:0 z:30)
2. GraphCourbe (NOUVEAU — à ajouter)
3. AppBarBienAncres (sticky top:100px z:20 — remonté en position 3)
4. Gallery
5. AppBarAnnonce (déplacé après Gallery)
```

---

## Correctif 1 — Ajouter GraphCourbe

### Import à ajouter
```tsx
import { GraphCourbe } from '@real-estate/ui/graph-courbe';
```

### Données mock (même pattern que ClientDetailView)
Ajouter les données mock en tant que constante hors du composant :
```tsx
const GRAPH_DATA = [
  { label: '10 avr', value: 18 },
  { label: '17 avr', value: 30 },
  { label: '24 avr', value: 25 },
  { label: '01 mai', value: 35 },
  { label: '08 mai', value: 32 },
  { label: '15 mai', value: 28 },
  { label: '22 mai', value: 22 },
  { label: '29 mai', value: 38 },
];
```

### JSX — placer en position 2 (après AppBarFicheBien, avant AppBarBienAncres)
```tsx
<GraphCourbe
  title="Activité"
  data={GRAPH_DATA}
  selectedIndex={5}
  selectedDate="22 fév 2026"
  selectedLabel="28 réactions positives"
  trendPercentage="7%"
  trendDirection="down"
/>
```

---

## Correctif 2 — Réordonner AppBarBienAncres en position 3

Déplacer le bloc `AppBarBienAncres` (avec son wrapper sticky) AVANT Gallery.

---

## Correctif 3 — Déplacer AppBarAnnonce après Gallery

Déplacer le bloc `AppBarAnnonce` APRÈS Gallery (position 5).

---

## Résultat final du JSX header

```tsx
{/* 1. AppBarFicheBien (sticky) */}
<div className="sticky top-0 z-30 bg-surface-page">
  <AppBarFicheBien ... />
</div>

{/* 2. GraphCourbe (NOUVEAU) */}
<GraphCourbe ... />

{/* 3. AppBarBienAncres (sticky) — REMONTÉ */}
<div className="sticky top-[100px] z-20 bg-surface-page">
  <AppBarBienAncres onItemClick={handleAnchorClick} />
</div>

{/* 4. Gallery */}
<Gallery ... />

{/* 5. AppBarAnnonce — DÉPLACÉ APRÈS GALLERY */}
<AppBarAnnonce ... />
```

---

## Point data confirmé (PAS de correctif code)

- **AppBarFicheBien contactName** : Le code est correct (query Client via property.clientId). Les properties avec clientId affichent bien le nom du propriétaire. C'est un sujet data (certaines properties n'ont pas de clientId ou ont des données incomplètes).
- **Gallery vide** : La table PropertyMedia est vide (0 rows). Le composant Gallery affiche un placeholder gris quand il n'y a pas d'images. Pas de bug code.

---

## Contraintes

- Ne modifier QUE `PropertyDetailView.tsx`
- Ne PAS toucher aux sections (Caractéristiques, Activités, etc.)
- Ne PAS modifier les Sheets
- Juste réordonner les blocs header et ajouter GraphCourbe

---

## Vérification

1. `cd /sessions/magical-amazing-noether/real-estate-project && npm run build`
2. Vérifier l'ordre : AppBarFicheBien → GraphCourbe → AppBarBienAncres → Gallery → AppBarAnnonce

---

## Dev-report

Créer `docs/scratchpad/dev-report-P09_CorrectifsFicheBien_20260415.md`
