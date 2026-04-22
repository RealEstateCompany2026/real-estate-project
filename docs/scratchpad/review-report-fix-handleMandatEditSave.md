# Review Report — Fix handleMandatEditSave

**Date** : 2026-04-22
**Fichier audite** : `apps/agent-app/src/components/deals/DealDetailView.tsx`
**Fonction** : `handleMandatEditSave` (lignes 842-897)
**Dev-report** : `dev-report-fix-handleMandatEditSave.md`

---

## Verdict : FAIL

3 issues CRITICAL, 1 WARNING.

---

## 1. Correctness — Query re-fetch vs load initial

### Deal query : PASS
La query de re-fetch (lignes 871-879) est **identique** a la query initiale (lignes 644-651) :
- Meme select `*, Client:clientId (id, firstName, lastName, status, searchCriteriaSummary, address), Property:propertyId (...)`
- Meme `.eq('id', deal.id).single()`
- Meme normalisation Array -> single object (lignes 882-886 vs 661-664)

### Organization query : PASS
La query de re-fetch (lignes 891-895) est identique a la query initiale (lignes 716-720) :
- Meme select : `name, address, siret, rcpInsuranceRef, rcpExpiryDate, carteTNumber, carteGNumber`
- Meme `.limit(1).single()`

---

## 2. Reactivity chain — Badges

### buildFullMandateSections : PASS
- Defini comme `useCallback` avec deps `[deal, currentType]` (ligne 997)
- Quand `setDeal(normalizedDeal)` est appele (ligne 887), `deal` change -> `buildFullMandateSections` se recalcule
- Les sections recalculees contiennent les nouvelles valeurs -> les badges `valid`/`invalid` se mettent a jour

---

## 3. CRITICAL — State consistency : localValues dans SheetMandatEdit ne se reinitialise PAS apres save

C'est le bug le plus grave.

Dans `SheetMandatEdit.tsx` (lignes 71-79) :
```tsx
const sectionsKey = useMemo(
  () => JSON.stringify(sections.map((s) => s.fields.map((f) => `${f.entity}.${f.field}`))),
  [sections],
);

React.useEffect(() => {
  setLocalValues(buildInitialValues(sections));
}, [sectionsKey]);
```

Le `sectionsKey` est derive de la **structure** des sections (entity + field names), **PAS des valeurs**. Apres un save :
- Les sections sont recalculees avec les nouvelles valeurs
- Mais la structure (entity.field) reste identique
- Donc `sectionsKey` ne change pas
- Donc le `useEffect` ne se declenche pas
- Donc `localValues` conserve les anciennes valeurs editees

**Consequence** : apres un save partiel (1 section sur 5), si l'utilisateur modifie une autre section, le `buildInitialValues` utilise dans `handleSectionSave` (ligne 148) compare avec les anciennes valeurs des sections. L'utilisateur voit les bonnes valeurs dans les inputs (car `localValues` conserve ses edits), mais le diff calcule pour le prochain save sera incorrect si les valeurs ont ete mises a jour cote serveur.

Plus grave : si l'utilisateur ferme et rouvre la sheet sans que la structure change, `localValues` n'est pas reinitialise aux nouvelles valeurs fetchees.

### Fix requis
Le `sectionsKey` doit inclure les valeurs, pas seulement la structure :
```tsx
const sectionsKey = useMemo(
  () => JSON.stringify(sections.map((s) => s.fields.map((f) => `${f.entity}.${f.field}.${f.value}`))),
  [sections],
);
```

**Severite : CRITICAL**

---

## 4. CRITICAL — Organization update sans filtre : met a jour TOUTES les lignes

Ligne 849 :
```tsx
supabase.from('Organization').update(updates.organization).not('id', 'is', null).select()
```

Le filtre `.not('id', 'is', null)` signifie "toutes les lignes ou id n'est pas null", soit **toutes les organizations**. Si la table contient plusieurs organizations, elles seront toutes modifiees avec les memes valeurs.

Ce n'est pas un bug introduit par ce fix (c'etait deja present), mais c'est un risque majeur qui doit etre corrige. Le re-fetch apres save est correct (`.limit(1).single()`), mais l'update est dangereux.

### Fix requis
Ajouter un `.eq('id', organizationId)` ou au minimum `.limit(1)` sur l'update. L'organization id devrait etre stocke dans le state ou derive du deal.

**Severite : CRITICAL (pre-existant, mais a corriger dans ce cycle)**

---

## 5. CRITICAL — Aucune gestion d'erreur sur le re-fetch

Lignes 871-896 : si le re-fetch Deal echoue (`freshDeal` est null), le code passe silencieusement au re-fetch Organization et appelle `setOrganization(orgData)` normalement. Le deal n'est pas mis a jour, donc :
- Les badges restent dans leur etat pre-save
- L'utilisateur pense que le save a echoue alors que les updates Supabase ont reussi
- Aucun toast / feedback d'erreur

De meme, si le re-fetch Organization echoue, `orgData` sera `null` et `setOrganization(null)` effacera les donnees d'organisation existantes.

### Fix requis
- Afficher un toast d'erreur si le re-fetch echoue
- Ne pas ecraser `organization` avec `null` si le re-fetch org echoue
- Idealement, wrapper le tout dans un try/catch avec feedback utilisateur

**Severite : CRITICAL**

---

## 6. WARNING — useCallback deps `[deal]`

La dependance `[deal]` (ligne 897) est suffisante car :
- `deal.id`, `deal.Client?.id`, `deal.Property?.id` sont tous derives de `deal`
- Quand `deal` change via `setDeal`, le callback est recree avec le nouveau `deal`

Cependant, comme `deal` est un objet, le callback est recree a chaque `setDeal` meme si les proprietes utilisees (id, Client.id, Property.id) n'ont pas change. Ce n'est pas un bug mais une micro-optimisation possible.

**Severite : WARNING (pas bloquant)**

---

## Resume des CRITICAL a corriger

| # | Issue | Fichier | Fix |
|---|-------|---------|-----|
| 1 | `sectionsKey` base sur la structure, pas les valeurs -> `localValues` pas reinitialise apres save | `packages/ui/src/components/SheetMandatEdit.tsx` L71-73 | Inclure `f.value` dans le JSON.stringify du sectionsKey |
| 2 | Organization update sans filtre `.eq('id', ...)` | `DealDetailView.tsx` L849 | Ajouter filtre sur org id |
| 3 | Aucune gestion d'erreur sur re-fetch post-save | `DealDetailView.tsx` L871-896 | try/catch + toast + ne pas ecraser state avec null |

---

**Retour au dev-agent avec les 3 CRITICAL a corriger avant deploiement.**
