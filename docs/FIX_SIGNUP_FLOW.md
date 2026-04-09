# FIX — Signup Flow (P01) & Auth Chain

## Contexte du problème

La chaîne d'identité dans Supabase est :
```
auth.users → trigger "handle_new_auth_user" → table "User" (supabase_id) → table "Agent" (userId FK → User.id) → table "Organization" (via organizationId)
```

### Ce qui existe déjà
- Un **trigger** `on_auth_user_created` sur `auth.users` qui crée automatiquement un record dans la table `"User"` à chaque `signUp()`
- Des **politiques RLS** sur les 3 tables (User, Agent, Organization) — viennent d'être ajoutées

### Ce qui ne fonctionne PAS actuellement
- Le signup crée un auth user mais aucun record Agent n'est créé
- Le code actuel essaie probablement d'insérer directement dans `"Agent"` sans passer par la table `"User"` intermédiaire

---

## Correctif à appliquer dans le code

### 1. Flow de Signup (SUP-01 → SUP-07)

Le signup doit suivre cette séquence exacte :

```typescript
// ÉTAPE 1 : Créer l'utilisateur auth
const { data: authData, error: authError } = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: {
      full_name: `${firstName} ${lastName}`,
    }
  }
});

if (authError) throw authError;

// Le trigger "handle_new_auth_user" crée automatiquement un record dans "User"
// avec supabase_id = authData.user.id

// ÉTAPE 2 : Attendre un court instant que le trigger s'exécute
// (en pratique, c'est synchrone car le trigger est BEFORE/AFTER INSERT)

// ÉTAPE 3 : Récupérer le User.id créé par le trigger
const { data: userData, error: userError } = await supabase
  .from('User')
  .select('id')
  .eq('supabase_id', authData.user!.id)
  .single();

if (userError || !userData) {
  // Fallback : si le trigger a échoué, créer le User manuellement
  console.error('Trigger may have failed, creating User manually');
  // Mais normalement ça ne devrait pas arriver
  throw new Error('User record not created by trigger');
}

// ÉTAPE 4 : Créer le profil Agent lié au User
const { data: agentData, error: agentError } = await supabase
  .from('Agent')
  .insert({
    userId: userData.id,          // FK vers User.id
    firstName,
    lastName,
    email,
    mobilePhone: phone || null,
    orgRole: 'AGENT',             // Défaut, sera ADMIN si persona B
    accountStatus: 'TRIAL',
    onboardingCompleted: false,
    onboardingStep: 'WELCOME',
  })
  .select()
  .single();

if (agentError) throw agentError;
```

### 2. Flow Persona B (Directeur d'agence) — Variante avec Organisation

Si l'utilisateur choisit "Créer une agence" (persona B) :

```typescript
// Après la création de l'Agent (étape 4 ci-dessus)

// ÉTAPE 5 : Créer l'Organisation
const { data: orgData, error: orgError } = await supabase
  .from('Organization')
  .insert({
    id: crypto.randomUUID(),    // ou gen_random_uuid côté DB
    name: agencyName,
    siret: siret || null,
  })
  .select()
  .single();

if (orgError) throw orgError;

// ÉTAPE 6 : Lier l'Agent à l'Organisation avec rôle ADMIN
const { error: updateError } = await supabase
  .from('Agent')
  .update({
    organizationId: orgData.id,
    orgRole: 'ADMIN',
  })
  .eq('id', agentData.id);
```

### 3. Flow Persona C (Agent en agence) — Rejoindre avec code invitation

```typescript
// Après la création de l'Agent (étape 4)

// ÉTAPE 5 : Trouver l'Organisation par code d'invitation
const { data: orgData, error: orgError } = await supabase
  .from('Organization')
  .select('id')
  .eq('invitationCode', invitationCode)
  .single();

if (orgError) throw orgError;

// ÉTAPE 6 : Lier l'Agent à l'Organisation
const { error: updateError } = await supabase
  .from('Agent')
  .update({
    organizationId: orgData.id,
    orgRole: 'AGENT',
  })
  .eq('id', agentData.id);
```

---

## Structure des tables (rappel)

### Table "User" (créée par le trigger)
| Colonne | Type | Description |
|---------|------|-------------|
| id | text | PK (gen_random_uuid) |
| email | text | NOT NULL, UNIQUE |
| name | text | Nom complet |
| role | text | 'AGENT' par défaut |
| supabase_id | uuid | FK vers auth.users.id |
| organizationId | text | FK vers Organization.id |
| createdAt | timestamp | now() |
| updatedAt | timestamp | |

### Table "Agent" (créée par le code applicatif)
| Colonne | Type | Requis | Défaut |
|---------|------|--------|--------|
| id | text | PK | gen_random_uuid() |
| userId | text | FK → User.id | |
| organizationId | text | FK → Organization.id | null |
| firstName | varchar | NOT NULL | |
| lastName | varchar | NOT NULL | |
| email | varchar | NOT NULL | |
| mobilePhone | varchar | | null |
| orgRole | OrgRole | NOT NULL | 'AGENT' |
| accountStatus | AccountStatus | NOT NULL | 'TRIAL' |
| onboardingCompleted | boolean | NOT NULL | false |
| onboardingStep | OnboardingStep | | 'WELCOME' |
| language | varchar | | 'fr' |
| timezone | varchar | | 'Europe/Paris' |
| trialEndsAt | timestamp | | null |

### Table "Organization"
| Colonne | Type | Requis |
|---------|------|--------|
| id | text | PK |
| name | text | NOT NULL |
| siret | varchar | |
| address | text | |
| phone | varchar | |
| email | varchar | |
| network | NetworkType | enum |
| invitationCode | varchar | pour rejoindre |
| maxAgents | integer | défaut 5 |

---

## Politiques RLS actives (viennent d'être créées)

### Sur "Agent" :
- `agent_select_own` — SELECT son propre record (via User.supabase_id = auth.uid())
- `agent_insert_own` — INSERT uniquement si userId pointe vers son propre User
- `agent_update_own` — UPDATE son propre record
- `agent_select_same_org` — SELECT les agents de la même organisation

### Sur "Organization" :
- `org_select_member` — SELECT si l'agent authentifié est membre
- `org_insert_authenticated` — INSERT si authentifié (pour la création au signup)
- `org_update_admin` — UPDATE seulement si l'agent a orgRole = 'ADMIN'

### Sur "User" (existait déjà) :
- `user_insert_system` — INSERT ouvert (pour le trigger)
- `user_select_authenticated` — SELECT si authentifié
- `user_update_own` — UPDATE son propre record

---

## Actions à effectuer par Claude Code

1. **Vérifier** le fichier de signup action/route (probablement dans `apps/agent-app/src/app/(auth)/signup/`)
2. **Modifier** le flow pour respecter la séquence : auth.signUp → query User → insert Agent
3. **Ne PAS modifier** le trigger `handle_new_auth_user` — il est correct
4. **Vérifier** que le Sign-in (P02) utilise `supabase.auth.signInWithPassword()` et redirige vers le dashboard si l'Agent existe, ou vers l'onboarding si pas encore créé

## Test de validation

Après le fix, ce test devrait passer :
1. Aller sur `/signup`
2. Remplir le formulaire (email, mot de passe, prénom, nom)
3. Soumettre → auth user créé, User créé par trigger, Agent créé par code
4. Vérifier en BDD : `SELECT * FROM "Agent" WHERE email = 'test@example.com'` → 1 résultat
5. Redirection vers l'onboarding (OBT-00)
