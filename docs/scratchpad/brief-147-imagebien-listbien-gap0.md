# Brief #147 — ImageBien resize + ListBien border + gap-0 pages

## Contexte
Ajustements visuels sur le DS (ImageBien, ListBien) et espacement dans 3 pages utilisant ListBien.

---

## Part A — ImageBien (`packages/ui/src/components/ImageBien.tsx`)

### État actuel
- Dimensions : 160×120px (style inline)
- Radius : `rounded-bl-[16px] rounded-tl-[16px]` (gauche seulement)

### Modifications
1. **Radius** : remplacer `rounded-bl-[16px] rounded-tl-[16px]` par `rounded-lg` (8px sur les 4 coins)
2. **Dimensions** : changer `width: "160px"` → `"150px"` et `height: "120px"` → `"100px"`
3. **JSDoc** : mettre à jour le commentaire (dimensions + radius)

---

## Part B — ListBien (`packages/ui/src/components/ListBien.tsx`)

### État actuel (ligne 108)
```
className={`group bg-surface-neutral-default hover:bg-surface-neutral-action border border-[var(--border-divider)] hover:border-[var(--border-default)] rounded-lg flex items-center justify-between h-[120px] cursor-pointer transition-colors ${className}`}
```

Image container (ligne 114) :
```
<div className="h-[120px] w-[160px] shrink-0 overflow-hidden rounded-l-lg">
```

### Modifications
1. **Supprimer border** sur le div principal (ligne 108) : retirer `border border-[var(--border-divider)] hover:border-[var(--border-default)]`
2. **Adapter hauteur** du composant : `h-[120px]` → `h-[100px]` sur le div principal (L108)
3. **Adapter image container** (ligne 114) : `h-[120px] w-[160px]` → `h-[100px] w-[150px]`
4. **Radius image** : `rounded-l-lg` → `rounded-lg` (4 coins, cohérent avec ImageBien)
5. **Adapter hauteur** du flex container image (ligne 112) : `h-[120px]` → `h-[100px]`
6. **Adapter AI suggestions container** (ligne 193) : `h-[120px]` → `h-[100px]`, ajuster `py-[48px]` → `py-[38px]`
7. **Adapter dividers** : `h-[84px]` → `h-[72px]` (proportionnel)
8. **Placeholder icon** (ligne 123) : `size={32}` → `size={28}` (proportionnel)
9. **JSDoc** : mettre à jour le commentaire dimensions

---

## Part C — Gap 0px dans les pages

### 1. PropertyListView (`apps/agent-app/src/components/properties/PropertyListView.tsx`)
- **Ligne 428** : `<div className="flex flex-col gap-[17px]">` → `gap-0`

### 2. ClientDetailView (`apps/agent-app/src/components/clients/ClientDetailView.tsx`)
- **Ligne 1019** : `<div className="flex flex-col gap-[16px]">` → `gap-0`

### 3. DealDetailView (`apps/agent-app/src/components/deals/DealDetailView.tsx`)
- **Section Biens (id="biens")** : les ListBien sont des enfants directs de la section (gap-6). Il faut les envelopper dans un `<div className="flex flex-col gap-0">`.
- Concrètement, lignes 1855-1873 : envelopper le `{filteredMatches.map(...)}` et le paragraphe "Aucun bien" dans un `<div className="flex flex-col gap-0">`.

---

## Vérification
- `npx tsc --noEmit` doit passer sans erreur
- Aucun import à ajouter/supprimer

## Fichiers à modifier (5)
1. `packages/ui/src/components/ImageBien.tsx`
2. `packages/ui/src/components/ListBien.tsx`
3. `apps/agent-app/src/components/properties/PropertyListView.tsx`
4. `apps/agent-app/src/components/clients/ClientDetailView.tsx`
5. `apps/agent-app/src/components/deals/DealDetailView.tsx`
