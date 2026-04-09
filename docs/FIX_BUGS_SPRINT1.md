# Rapport de bugs — Sprint 1 (P01-P05) — Tests du 30 mars 2026

## Contexte

Tests effectués via le navigateur sur `http://localhost:3001` après les corrections Supabase (trigger + RLS). Le trigger `handle_new_auth_user` a été corrigé (il manquait `updatedAt` → violation NOT NULL silencieuse). 7 politiques RLS ont été ajoutées sur Agent et Organization.

---

## BUG 1 — Le record Agent n'est pas créé au signup (CRITIQUE)

### Constat
Après `signUp()`, le trigger crée bien le record `User` (vérifié en BDD), mais **aucun record `Agent` n'est créé**. La table Agent reste vide.

### Cause probable
La server action `signup.ts` ne crée que l'auth user. Elle n'appelle pas `rpc('auth_user_id')` suivi d'un INSERT dans `Agent`.

### Correction attendue
Dans `actions/signup.ts`, après le `signUp()` réussi, ajouter :

```typescript
// Le trigger a créé le User. Récupérer son id interne.
const { data: internalUserId } = await supabase.rpc('auth_user_id');

if (internalUserId) {
  await supabase.from('Agent').insert({
    userId: internalUserId,
    firstName: '', // À remplir dans l'onboarding (OBS-01)
    lastName: '',  // À remplir dans l'onboarding (OBS-01)
    email: email,
    orgRole: 'AGENT',
    accountStatus: 'TRIAL',
    onboardingCompleted: false,
    onboardingStep: 'WELCOME',
  });
}
```

**Note** : Le formulaire de signup (SUP-02) ne demande que email + password. Le prénom/nom seront collectés dans l'onboarding setup (OBS-01). Donc `firstName` et `lastName` peuvent être vides ou `'À compléter'` temporairement. **Vérifier que la table Agent autorise des chaînes vides pour ces champs** — sinon, soit mettre un placeholder, soit ajouter des champs firstName/lastName au formulaire de signup.

### Vérification
```sql
SELECT * FROM "Agent" WHERE email = 'test@example.com';
-- Doit retourner 1 résultat avec onboardingCompleted = false
```

---

## BUG 2 — Pas de redirection vers l'onboarding pour les nouveaux utilisateurs (MAJEUR)

### Constat
Après le login, un nouvel utilisateur (pas de record Agent ou `onboardingCompleted = false`) arrive directement sur `/dashboard` au lieu d'être redirigé vers `/tour` (OBT-00, Product Tour).

### Correction attendue
Dans `dashboard/page.tsx` (ou dans le middleware `middleware.ts`), ajouter une vérification :

```typescript
// Après avoir récupéré l'agent
const { data: internalUserId } = await supabase.rpc('auth_user_id');
const { data: agent } = await supabase
  .from('Agent')
  .select('onboardingCompleted')
  .eq('userId', internalUserId)
  .single();

// Rediriger si pas d'agent ou onboarding pas terminé
if (!agent || !agent.onboardingCompleted) {
  redirect('/tour');  // OBT-00 Product Tour
}
```

**Placement recommandé** : dans le middleware serait idéal (pour protéger toutes les routes /dashboard, /clients, /biens, etc.), mais dans la page dashboard c'est acceptable en V1.

### Flow attendu après fix
```
Nouveau user → login → middleware vérifie Agent.onboardingCompleted
  → false ou absent → redirect /tour (OBT-00)
  → true → affiche /dashboard normalement
```

---

## BUG 3 — "ORPI" affiché en dur dans la NavRail (MINEUR)

### Constat
La NavRail affiche "ORPI" en haut à gauche, quel que soit l'utilisateur connecté. Ce texte est probablement hardcodé.

### Correction attendue
Remplacer par le nom de l'Organisation de l'agent connecté, ou afficher le logo RealAgent par défaut si l'agent n'a pas encore d'organisation.

```typescript
// Dans le composant NavRail
const orgName = agent?.organizationId
  ? organization?.name
  : null;

// Afficher orgName ou le logo RealAgent par défaut
```

---

## Résumé des corrections Supabase déjà appliquées (par Cowork)

Ces corrections sont **déjà en production** sur le projet Supabase `wrakmsvdmsrpoiltysht` :

### Migration `fix_user_updated_at_default_and_trigger`
- `ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT now()`
- `CREATE OR REPLACE FUNCTION handle_new_auth_user()` — ajouté `"createdAt"` et `"updatedAt"` explicitement dans l'INSERT

### Migration `add_rls_policies_agent_organization`
7 politiques RLS :
- `Agent` : `agent_select_own`, `agent_insert_own`, `agent_update_own`, `agent_select_same_org`
- `Organization` : `org_select_member`, `org_insert_authenticated`, `org_update_admin`

---

## Comptes de test créés

| Email | Password | auth.users | User | Agent |
|-------|----------|-----------|------|-------|
| damien.paques@hotmail.fr | (existant) | ✅ | ✅ (créé manuellement) | ❌ |
| test.agent01@1936.ai | TestAgent01! | ✅ | ✅ (créé manuellement) | ❌ |
| test.agent02@1936.ai | TestAgent02! | ✅ | ✅ (trigger corrigé) | ❌ |

---

## Priorité des corrections

1. **BUG 1** (Agent pas créé) → bloque tout le reste
2. **BUG 2** (pas de redirect onboarding) → bloque le test de P03-P05
3. **BUG 3** (ORPI hardcodé) → cosmétique, peut attendre
