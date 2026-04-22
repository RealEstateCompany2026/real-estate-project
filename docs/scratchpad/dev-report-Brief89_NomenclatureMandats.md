# Dev-report — Brief #89 — Migration nomenclature references mandat

**Date** : 2026-04-22
**Agent** : dev-agent
**Statut** : LIVRE

---

## Volet A — Logique de generation

### Nouveau fichier
- `apps/agent-app/src/lib/utils/formatMandateReference.ts`
  - Fonction exportee `formatMandateReference(prefix, num)` → `MV.000.000.042`
  - Pad 9 chiffres, split en 3 groupes de 3 separes par des points

### Fichier modifie
- `apps/agent-app/src/components/deals/DealCreateForm.tsx`
  - Import de `formatMandateReference` ajoute (ligne 21)
  - Requete Supabase : `.ilike('reference', '${pfx}-%')` → `.ilike('reference', '${pfx}.%')`
  - Parsing : `split('-').pop()` → `replace('${pfx}.', '').replace(/\./g, '')` + parseInt
  - Generation : ancienne concat manuelle → appel `formatMandateReference(pfx, lastNum + 1)`

---

## Volet B — Script SQL migration

- `docs/scratchpad/seed-migrate-references.sql`
  - Gere les 4 prefixes (MV, MRA, MRL, MG) avec leurs longueurs differentes
  - Extrait le numero apres le tiret via `SPLIT_PART`
  - Pad a 9 chiffres via `LPAD`, decoupe en 3x3 via `SUBSTRING`
  - Encapsule dans une transaction `BEGIN/COMMIT`
  - Inclut un dry-run commente et une requete de verification

---

## Volet C — Alignement stories Storybook

### `packages/ui/src/stories/ListAffaire.stories.tsx`
- `MV-0042` → `MV.000.000.042`
- `MRA-0018` → `MRA.000.000.018`
- `MRL-0007` → `MRL.000.000.007`
- `MG-0031` → `MG.000.000.031`
- `MV-0043` → `MV.000.000.043`

### `packages/ui/src/stories/CardAffaire.stories.tsx`
- `MV-0042` → `MV.000.000.042`
- `MRA-0018` → `MRA.000.000.018`
- `MRL-0007` → `MRL.000.000.007`
- `MG-0031` → `MG.000.000.031`

### `packages/ui/src/stories/AppBarFicheAffaire.stories.tsx`
- `MB.456.123.789` → `MG.456.123.789` (Bail — prefixe MB corrige en MG)
- `MA.321.654.987` → `MRA.321.654.987` (Acquisition — prefixe MA corrige en MRA)
- `ML.111.222.333` → `MRL.111.222.333` (Location — prefixe ML corrige en MRL)

---

## Volet D — Champ reference dans Prisma

- `packages/database/prisma/schema.prisma`
  - Ajout `reference String? @unique` dans le modele `Deal`, apres `id`, avant `organizationId`

---

## Fichiers modifies (7)

| Fichier | Action |
|---------|--------|
| `apps/agent-app/src/lib/utils/formatMandateReference.ts` | CREE |
| `apps/agent-app/src/components/deals/DealCreateForm.tsx` | MODIFIE |
| `docs/scratchpad/seed-migrate-references.sql` | CREE |
| `packages/ui/src/stories/ListAffaire.stories.tsx` | MODIFIE |
| `packages/ui/src/stories/CardAffaire.stories.tsx` | MODIFIE |
| `packages/ui/src/stories/AppBarFicheAffaire.stories.tsx` | MODIFIE |
| `packages/database/prisma/schema.prisma` | MODIFIE |

## Composants DS non touches
- ListMandat.tsx — non modifie (contrainte brief)
- SheetMandat.tsx — non modifie (contrainte brief)
- AppBarFicheAffaire.tsx — non modifie (contrainte brief)
