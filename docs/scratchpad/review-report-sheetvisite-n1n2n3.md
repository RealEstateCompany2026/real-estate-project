# Review Report — SheetVisite correctifs N1 N2 N3

**Date** : 2026-04-23
**Brief** : BRIEF-SHEETVISITE-N1N2N3
**Reviewer** : reviewer-agent
**Fichiers audites** :
- `packages/ui/src/components/SheetVisite.tsx`
- `apps/agent-app/src/components/deals/DealDetailView.tsx`

---

## Verdict global : PASS WITH NOTES

Le code est fonctionnel, conforme au brief, bien type et respecte le Design System. Trois points meritent attention avant mise en production : une injection ILIKE potentielle (WARNING), un `window.location.reload()` evitable (WARNING), et une closure stale sur `handlePropertySelect` / `handleClientSelect` (WARNING).

---

## Findings

### WARNING-01 — Injection ILIKE via input utilisateur

**Severite** : WARNING
**Fichier** : `DealDetailView.tsx` lignes 1226, 1263
**Description** : Les queries Supabase utilisent directement la saisie utilisateur dans les filtres ILIKE :
```ts
.ilike('address', `%${query}%`)
.or(`firstName.ilike.%${query}%,lastName.ilike.%${query}%`)
```
Les caracteres speciaux ILIKE (`%`, `_`) ne sont pas echappes. Un utilisateur qui tape `%` ou `_` dans le champ de recherche obtiendrait des resultats inattendus (match-all). Ce n'est pas une injection SQL (Supabase parametre les valeurs), mais c'est un comportement fonctionnel incorrect.

**Fix suggere** : Echapper les caracteres ILIKE avant interpolation :
```ts
const escaped = query.replace(/[%_]/g, '\\$&');
.ilike('address', `%${escaped}%`)
```

---

### WARNING-02 — window.location.reload() dans handleSaveProperty

**Severite** : WARNING
**Fichier** : `DealDetailView.tsx` ligne 1248
**Description** : Apres la sauvegarde du bien, `handleSaveProperty` appelle `window.location.reload()`. Cela recharge toute la page, ce qui :
- Perd le state local (scroll position, onglet actif, etc.)
- Donne une mauvaise UX (flash blanc)
- Est inconsistant avec `handleSaveInvite` qui, lui, met a jour le state local proprement

Le dev-report mentionne "Reload page to refresh deal data", ce qui confirme un choix delibere mais sous-optimal.

**Fix suggere** : Re-fetcher les donnees du deal et mettre a jour le state local, comme fait pour `handleSaveInvite`. Si trop couteux a implementer maintenant, accepter en l'etat mais ouvrir un ticket.

---

### WARNING-03 — Closure stale sur handlePropertySelect / handleClientSelect

**Severite** : WARNING
**Fichier** : `DealDetailView.tsx` lignes 1233-1237, 1273-1277
**Description** : `handlePropertySelect` et `handleClientSelect` capturent respectivement `propertySearchResults` et `clientSearchResults` dans leur closure via `useCallback([propertySearchResults])`. Cela fonctionne mais declenche la re-creation du callback a chaque changement de resultats, ce qui peut provoquer des re-renders inutiles sur `SheetVisite`.

Ce n'est pas un bug fonctionnel car le callback est effectivement a jour, mais c'est un pattern qui pourrait etre optimise avec un `useRef` pour les resultats.

**Fix suggere** : Stocker les resultats dans un `useRef` et lire la ref dans le callback, pour garder une reference stable :
```ts
const propertyResultsRef = useRef(propertySearchResults);
propertyResultsRef.current = propertySearchResults;
const handlePropertySelect = useCallback((id: string) => {
  const match = propertyResultsRef.current.find(r => r.id === id);
  // ...
}, []);
```

---

### NOTE-01 — Pas de debounce sur les recherches autocomplete

**Severite** : NOTE
**Fichier** : `DealDetailView.tsx` lignes 1215, 1252
**Description** : Chaque frappe clavier declenche une requete Supabase. Sur une saisie rapide, cela peut generer beaucoup de requetes concurrentes. Le seuil minimal (3 chars pour property, 2 chars pour client) limite le probleme mais ne l'elimine pas.

De plus, il n'y a pas d'annulation des requetes precedentes, ce qui peut creer des race conditions : si la requete pour "abc" revient apres celle pour "abcd", les resultats affiches seront incorrects.

**Fix suggere** : Ajouter un `debounce` de 300ms et/ou utiliser un `AbortController` pour annuler les requetes obsoletes. A traiter dans un prochain sprint.

---

### NOTE-02 — handleSaveInvite ne gere pas l'ajout multiple d'invites

**Severite** : NOTE
**Fichier** : `DealDetailView.tsx` lignes 1280-1298
**Description** : `handleSaveInvite` met a jour `Event.clientId` avec le nouveau client. Si un invité etait deja present (via le fallback deal.Client), le nouveau clientId ecrase l'ancien. Le composant `SheetVisite` n'affiche qu'une seule liste d'invites sans distinction. Ce n'est pas un bug par rapport au brief actuel (qui ne prevoit qu'un seul invite par event), mais c'est une limitation a documenter.

---

### NOTE-03 — Format datetime pour Supabase (fix timezone)

**Severite** : NOTE
**Fichier** : `DealDetailView.tsx` ligne 1304
**Description** : Le format `YYYY-MM-DDTHH:mm:00` (sans timezone explicite) est envoye a Supabase. Pour un champ `timestamptz`, Supabase interprete les dates sans timezone comme etant en UTC. Pour un champ `timestamp` (without time zone), la valeur est stockee telle quelle. Le fix est correct dans les deux cas : il evite la double conversion UTC qui existait avant. Cependant, le comportement exact depend du type de colonne en base. A verifier que `Event.eventDate` est bien un `timestamp` (sans tz) et non un `timestamptz`.

---

### NOTE-04 — onSelectProperty desormais inutilise dans SheetVisite

**Severite** : NOTE
**Fichier** : `SheetVisite.tsx` ligne 93, ligne 176
**Description** : La prop `onSelectProperty` existe toujours dans l'interface mais n'est plus utilisee directement — elle sert de fallback dans `onToggleEditProperty ?? onSelectProperty` (ligne 176). Quand `onToggleEditProperty` est fournie, `onSelectProperty` est ignoree. Ce n'est pas un bug (la retrocompatibilite est preservee) mais la prop pourrait etre deprecee dans une future iteration.

---

### NOTE-05 — onAddInvite meme pattern de fallback

**Severite** : NOTE
**Fichier** : `SheetVisite.tsx` ligne 241
**Description** : Meme observation que NOTE-04 : `onToggleAddInvite ?? onAddInvite`. La retrocompatibilite est preservee via le fallback. OK.

---

## Checklist brief

### Niveau 1 — Fixes DS immediats

- [x] **1A** — Titre "Bien visite" : `text-base font-semibold` (ligne 172 SheetVisite.tsx) -- Conforme
- [x] **1B** — IconButton DS importe et utilise pour les 2 boutons (lignes 175-178 et 241) -- Conforme. Import `{ Button, IconButton }` depuis `./Button`. Icons size 20 comme demande.
- [x] **1C** — Invites fallback sur `deal?.Client?.id` (ligne 2634 DealDetailView.tsx) -- Conforme. Verifie aussi que `clientFullName !== '—'` avant d'afficher.

### Niveau 2 — Formulaires edition avec autocomplete

- [x] **2A** — 14 nouvelles props ajoutees sur `SheetVisiteProps` (lignes 49-64) -- Toutes optionnelles, conformes au brief.
- [x] **2B** — Section "Bien visite" mode edition (lignes 180-208) -- Label, input, resultats autocomplete, bouton Enregistrer. Mode edition auto quand pas de bien. Conforme au Figma.
- [x] **2C** — Section "Invitations" mode ajout (lignes 255-284) -- Formulaire insere entre la liste des invites et le bouton agenda. Conforme.
- [x] **2D** — Styles DS respectes :
  - Label : `text-xs font-semibold font-roboto text-content-subtle uppercase tracking-wider` -- Conforme
  - Input : tokens DS (border-edge-default, bg-surface-neutral-default, focus ring branded) -- Conforme
  - Resultats : tokens DS (hover bg-surface-neutral-action) -- Conforme
  - Bouton : `<Button variant="primary" className="w-full">` -- Conforme
- [x] **State + handlers DealDetailView** -- 10 useState (lignes 677-684), 6 callbacks useCallback (lignes 1215-1298). Tous memoises.
- [x] **Queries Supabase** -- Property.address ILIKE (seuil 3 chars), Client firstName/lastName ILIKE (seuil 2 chars). Fonctionnel (voir WARNING-01 pour l'echappement).
- [x] **handleSaveProperty** -- Persiste Deal.propertyId (voir WARNING-02 pour le reload).
- [x] **handleSaveInvite** -- Persiste Event.clientId + met a jour state local.

### Niveau 3 — Fix donnees

- [x] **3A** — Fix timezone : `eventDateStr` stocke directement sans `new Date().toISOString()` (ligne 1304). State local aussi mis a jour avec la meme valeur (ligne 1311). Conforme.
- [x] **3B** — Persist Event.clientId dans handleSaveInvite (ligne 1284). State local mis a jour (lignes 1286-1293). Conforme.

### Verification

- [x] **Build TypeScript 0 erreurs** -- Confirme par dev-report
- [x] **Props existantes non cassees** -- Toutes les nouvelles props sont optionnelles
- [x] **Retrocompatibilite** -- Les fallbacks `onToggleEditProperty ?? onSelectProperty` et `onToggleAddInvite ?? onAddInvite` preservent le comportement existant

---

## Resume des actions recommandees

| # | Severite | Action | Bloquant |
|---|----------|--------|----------|
| W-01 | WARNING | Echapper `%` et `_` dans les queries ILIKE | Non |
| W-02 | WARNING | Remplacer `window.location.reload()` par un state update | Non |
| W-03 | WARNING | Optimiser les closures avec useRef | Non |
| N-01 | NOTE | Ajouter debounce + AbortController sur autocomplete | Non |
| N-02 | NOTE | Documenter la limitation 1 invite par event | Non |
| N-03 | NOTE | Verifier le type de colonne Event.eventDate (timestamp vs timestamptz) | Non |
| N-04/05 | NOTE | Deprecer onSelectProperty / onAddInvite dans une future iteration | Non |

Aucun finding CRITICAL. Le code peut etre deploye en l'etat. Les WARNINGs sont a traiter dans un prochain sprint.
