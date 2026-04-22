# Review Report -- Brief #89 -- Migration nomenclature references mandat

**Reviewer** : reviewer-agent
**Date** : 2026-04-22
**Brief** : Migration tiret + 4 chiffres (MV-0016) vers points + 9 chiffres (MV.000.000.042)

---

## Verdict : PASS

---

## 1. formatMandateReference.ts (NOUVEAU)

**Fichier** : `apps/agent-app/src/lib/utils/formatMandateReference.ts`

| Check | Resultat |
|-------|----------|
| Signature correcte (prefix: string, num: number) | OK |
| Padding 9 chiffres via padStart(9, '0') | OK |
| Decoupage en 3 groupes de 3 via slice(0,3), slice(3,6), slice(6,9) | OK |
| Test mental : formatMandateReference('MV', 42) | "MV." + "000" + "." + "000" + "." + "042" = "MV.000.000.042" -- OK |
| Test mental : formatMandateReference('MRA', 1) | "MRA.000.000.001" -- OK |
| Export nomme (pas default) | OK |

**Verdict** : PASS -- fonction simple, correcte, bien documentee en JSDoc.

---

## 2. DealCreateForm.tsx (MODIFIE)

**Fichier** : `apps/agent-app/src/components/deals/DealCreateForm.tsx`

| Check | Resultat |
|-------|----------|
| Import ligne 21 : `formatMandateReference` depuis `@/lib/utils/formatMandateReference` | OK |
| Map prefixes ligne 249 : VENTE->MV, ACQUISITION->MRA, LOCATION->MRL, GESTION->MG | OK -- 4 prefixes corrects |
| Requete ilike ligne 254 : `.ilike('reference', '${pfx}.%')` | OK -- filtre sur le nouveau format |
| Parsing lastNum ligne 258-259 : `replace(\`${pfx}.\`, '').replace(/\./g, '')` puis parseInt | OK -- supprime le prefixe + point, puis tous les points restants, donne un entier |
| Appel formatMandateReference(pfx, lastNum + 1) ligne 261 | OK -- incremente correctement |
| Pas de composants DS importes depuis packages/ui/src/components/ directement | OK -- imports via @real-estate/ui/* (exports publics) |

**Point de retrocompatibilite** : La requete `.ilike('reference', '${pfx}.%')` ne trouvera PAS les anciennes references au format tiret (MV-0016). C'est le comportement attendu : le script SQL de migration (fichier 7) convertit toutes les references existantes AVANT le deploiement du code. Sequence de deploiement : SQL d'abord, code ensuite.

**Verdict** : PASS

---

## 3. schema.prisma (champ reference sur Deal)

**Fichier** : `packages/database/prisma/schema.prisma` (ligne ~1344)

| Check | Resultat |
|-------|----------|
| Champ : `reference String? @unique` | OK |
| Nullable (String?) | OK -- permet les deals migres sans reference |
| Contrainte @unique | OK -- empeche les doublons |
| Position dans le modele (juste apres id) | OK -- propre |

**Verdict** : PASS

---

## 4. ListAffaire.stories.tsx (MODIFIE)

**Fichier** : `packages/ui/src/stories/ListAffaire.stories.tsx`

| Story | Reference | Prefixe attendu | Resultat |
|-------|-----------|-----------------|----------|
| Vente | MV.000.000.042 | MV | OK |
| Acquisition | MRA.000.000.018 | MRA | OK |
| Location | MRL.000.000.007 | MRL | OK |
| Gestion | MG.000.000.031 | MG | OK |
| MandatNonSigne | MV.000.000.043 | MV | OK |

5 references au nouveau format, 4 prefixes differents utilises. Aucun prefixe invalide.

**Verdict** : PASS

---

## 5. CardAffaire.stories.tsx (MODIFIE)

**Fichier** : `packages/ui/src/stories/CardAffaire.stories.tsx`

| Story | Reference | Prefixe attendu | Resultat |
|-------|-----------|-----------------|----------|
| Vente | MV.000.000.042 | MV | OK |
| Acquisition | MRA.000.000.018 | MRA | OK |
| Location | MRL.000.000.007 | MRL | OK |
| Gestion | MG.000.000.031 | MG | OK |

4 references au nouveau format. Coherentes avec ListAffaire.stories.

**Verdict** : PASS

---

## 6. AppBarFicheAffaire.stories.tsx (MODIFIE)

**Fichier** : `packages/ui/src/stories/AppBarFicheAffaire.stories.tsx`

| Story | dealId | Prefixe | Resultat |
|-------|--------|---------|----------|
| Vente | MV.789.083.263 | MV | OK |
| Bail | MG.456.123.789 | MG | OK |
| Acquisition | MRA.321.654.987 | MRA | OK |
| Location | MRL.111.222.333 | MRL | OK -- NOUVEAU |

3 prefixes corriges + 1 story Location ajoutee. Tous au format points + 9 chiffres groupes par 3.

**Note mineure (non-bloquante)** : La story "Bail" utilise `dealType: "BAIL"` qui ne fait pas partie des 4 types canoniques (VENTE, ACQUISITION, LOCATION, GESTION). Cela preexistait au brief et n'est pas dans le scope de cette migration. Le prefixe MG est neanmoins correct pour un mandat de gestion/bail.

**Verdict** : PASS

---

## 7. seed-migrate-references.sql (NOUVEAU)

**Fichier** : `docs/scratchpad/seed-migrate-references.sql`

| Check | Resultat |
|-------|----------|
| Transaction BEGIN/COMMIT | OK |
| Ordre des WHEN : MRA avant MV (evite collision MR*) | OK -- important car LIKE 'MV-%' capturerait pas MRA, mais l'ordre explicite est une bonne pratique |
| SPLIT_PART(reference, '-', 2) extrait la partie numerique | OK |
| LPAD(..., 9, '0') pad a 9 chiffres | OK |
| SUBSTRING ... FROM 1 FOR 3 / FROM 4 FOR 3 / FROM 7 FOR 3 | OK -- groupes corrects |
| Prefixes longueur variable (MV=2, MG=2, MRA=3, MRL=3) | OK -- chaque WHEN gere son propre prefixe |
| Clause WHERE avec regex `'^(MV\|MRA\|MRL\|MG)-[0-9]+$'` | OK -- ne touche que les anciennes references |
| ELSE reference (securite) | OK -- les references deja migrees restent intactes |
| Dry-run commente disponible | OK -- bonne pratique |
| Verification commentee disponible | OK |

Test mental : MRA-18 -> LPAD('18', 9, '0') = '000000018' -> 'MRA.000.000.018' -- OK
Test mental : MV-42 -> LPAD('42', 9, '0') = '000000042' -> 'MV.000.000.042' -- OK

**Verdict** : PASS

---

## 8. Verification composants DS

| Check | Resultat |
|-------|----------|
| Aucun fichier .tsx dans packages/ui/src/components/ modifie fonctionnellement | OK |
| Les seules mentions du nouveau format dans les composants sont des commentaires JSDoc (exemples dans props) | OK -- non-fonctionnel |

**Verdict** : PASS

---

## Resume des findings

| # | Fichier | Verdict | Issues |
|---|---------|---------|--------|
| 1 | formatMandateReference.ts | PASS | -- |
| 2 | DealCreateForm.tsx | PASS | -- |
| 3 | schema.prisma | PASS | -- |
| 4 | ListAffaire.stories.tsx | PASS | -- |
| 5 | CardAffaire.stories.tsx | PASS | -- |
| 6 | AppBarFicheAffaire.stories.tsx | PASS | Note mineure : dealType "BAIL" preexistant |
| 7 | seed-migrate-references.sql | PASS | -- |
| 8 | Composants DS intacts | PASS | -- |

**CRITICAL** : 0
**MAJOR** : 0
**MINOR** : 0 (la note sur BAIL est informative, hors scope)

---

## Verdict final : PASS

Le brief #89 est correctement implemente. La fonction utilitaire produit le bon format, le formulaire genere et parse correctement les nouvelles references, le script SQL gere les prefixes de longueur variable, les stories sont coherentes, et aucun composant DS n'a ete modifie. Pret pour deploiement via ops-agent.
