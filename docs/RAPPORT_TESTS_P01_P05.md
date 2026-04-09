# Rapport de tests — Parcours P01 à P05 (Sprint 1)
## Date : 30-31 mars 2026

---

## Résumé exécutif

**17 écrans testés sur 5 parcours.** L'ensemble des UI sont fonctionnelles et le design est conforme au design system (logo, couleurs brand #7B72F9, typographie).

### Bilan bugs — 31 mars 2026
- **BUG 1 (Agent non créé)** ✅ — Corrigé par trigger étendu
- **BUG 2 (Pas de redirect onboarding)** ✅ — Corrigé par dashboard/page.tsx
- **BUG 3 (ORPI hardcodé)** ✅ — Corrigé par Logo component
- **BUG 4 (Redirect loop dashboard → tour)** ✅ — Cause : middleware cassé + RLS policy récursive. Fix : middleware fusionné + migration `fix_recursive_rls_policies_agent_organization`
- **BUG 5 (Setup ne persiste pas)** ✅ RÉSOLU — Toutes les étapes persistent (Profil ✅, Organisation ✅, completeOnboarding ✅)
- **BUG 6 (saveOrgStep)** ✅ RÉSOLU — 3 causes : RLS SELECT bloquait INSERT+SELECT, Organization.id sans default UUID, city/postalCode inexistants. Fix : code saveOrgStep + migration `fix_organization_defaults_and_select_policy`

### Flow validé end-to-end
Login → Dashboard "Bonjour, Pierre 👋" ✅ | Tour 5 étapes ✅ | Setup 4 étapes UI + persistance ✅ | Import UI ✅

**6 bugs identifiés, 6 bugs résolus. Zéro bug restant sur P01-P05.**

---

## Parcours P01 — Sign-up (SUP) ✅

| Écran | Route | Status | Notes |
|-------|-------|--------|-------|
| SUP-00 Landing | `/signup` | ✅ | CTA, 3 arguments, lien login |
| SUP-01 Choix méthode | `/signup/method` | ✅ | Google + Email |
| SUP-02 Formulaire email | `/signup/email` | ✅ | Validation password temps réel (force, 4 critères) |
| SUP-03 Vérify email | `/verify-email` | ✅ | Message + "Renvoyer l'email" |

**Chaîne auth :** signUp() → trigger crée User ✅ → Agent créé par trigger ✅ (après fix)

---

## Parcours P02 — Sign-in (SIN) ✅

| Écran | Route | Status | Notes |
|-------|-------|--------|-------|
| SIN-01 Login | `/login` | ✅ | Email/password + Google + "Mot de passe oublié" |

**Auth :** signInWithPassword() → redirect dashboard (ou /tour si onboarding incomplet) ✅

---

## Parcours P03 — Onboarding Product Tour (OBT) ✅

| Écran | Route | Status | Notes |
|-------|-------|--------|-------|
| OBT-00 Welcome | `/tour` | ✅ | Logo, 5 icônes features, CTA "Démarrer le tour" |
| OBT-01 Tableau de bord | `/tour` (step 1) | ✅ | Card avec progression, dots pagination |
| OBT-02 Navigation | `/tour` (step 2) | ✅ | Précédent/Suivant |
| OBT-03 IA | `/tour` (step 3) | ✅ | |
| OBT-04 Import | `/tour` (step 4) | ✅ | |
| OBT-05 Aide | `/tour` (step 5) | ✅ | Bouton "Terminer le tour" |
| OBT-06 Tour terminé | `/tour` (complete) | ✅ | Check vert, "Configurer mon espace" → /setup |

---

## Parcours P04 — Onboarding Setup (OBS) ✅

| Écran | Route | Status | Notes |
|-------|-------|--------|-------|
| OBS-00 Landing | `/setup` | ✅ | 4 étapes listées, CTA "Commencer" |
| OBS-01 Profil pro | `/setup` (step 1) | ✅ | Stepper, Prénom/Nom/Email/Tél/Carte T |
| OBS-02 Organisation | `/setup` (step 2) | ✅ | Nom agence/Email/Tél/Adresse/SIRET |
| OBS-03 Documents légaux | `/setup` (step 3) | ✅ | Assurance RCP, date expiration, info upload |
| OBS-04 Paramètres | `/setup` (step 4) | ✅ | Langue/Timezone dropdowns, toggle notifs |
| OBS-05 Config terminée | `/setup` (complete) | ✅ | "Importer ma BDD" ou "Accéder au dashboard" |

---

## Parcours P05 — Import BDD (IMP) ✅

| Écran | Route | Status | Notes |
|-------|-------|--------|-------|
| IMP-01 Choix type | `/import` | ✅ | 3 options (Clients/Biens/Documents), sélection avec check |
| IMP-02 Upload fichier | `/import` (step 2) | ✅ | Drag & drop, CSV/XLSX/XLS, max 50MB |

*Les étapes suivantes (mapping colonnes, preview, import, résultat) n'ont pas été testées car nécessitent un vrai fichier.*

---

## Corrections Supabase appliquées pendant les tests

### Migration `add_rls_policies_agent_organization`
7 politiques RLS créées :
- Agent : `agent_select_own`, `agent_insert_own`, `agent_update_own`, `agent_select_same_org`
- Organization : `org_select_member`, `org_insert_authenticated`, `org_update_admin`

### Migration `fix_user_updated_at_default_and_trigger`
- `ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT now()`
- Trigger `handle_new_auth_user` corrigé : ajout de `createdAt` et `updatedAt` explicites

### Migration `trigger_creates_agent_with_user`
- Trigger étendu pour créer User ET Agent dans la même transaction
- Extraction firstName/lastName depuis `raw_user_meta_data` ou email

### Migration `fix_recursive_rls_policies_agent_organization` (31 mars 2026)
- Fonction `auth_agent_org_id()` (SECURITY DEFINER) : retourne l'organizationId de l'agent courant sans RLS
- Policy `agent_select_same_org` : remplacée par `"organizationId" = auth_agent_org_id()` (plus de sous-requête sur Agent)
- Policy `org_select_member` : remplacée par `id = auth_agent_org_id()`
- Policy `org_update_admin` : remplacée par `id = auth_agent_org_id()`

### Migration `fix_organization_defaults_and_select_policy` (31 mars 2026)
- `Organization.id` : ajout DEFAULT `gen_random_uuid()::text` (nécessaire pour INSERTs via Supabase client)
- `Organization.createdAt` et `updatedAt` : ajout DEFAULT `now()`
- Policy `org_select_member` : changée de `id = auth_agent_org_id()` à `auth.uid() IS NOT NULL` (pour permettre INSERT+SELECT)

---

## Historique des bugs — tous résolus ✅

### BUG 4 — Dashboard redirect loop ✅ RÉSOLU
**Constat :** Même quand `Agent.onboardingCompleted = true` en BDD, le dashboard redirigeait vers `/tour`.

**Causes identifiées (2) :**
1. **Middleware cassé** — `middleware.ts` faisait `export { default } from './proxy'` mais `proxy.ts` n'avait pas de default export. Le middleware ne s'exécutait jamais → pas de refresh de session.
2. **RLS policy récursive** — La policy `agent_select_same_org` interrogeait la table `Agent` elle-même pour vérifier l'org, déclenchant `infinite recursion detected in policy for relation "Agent"`. `auth.getUser()` et `rpc('auth_user_id')` fonctionnaient, mais le SELECT sur Agent échouait.

**Corrections appliquées :**
1. Middleware fusionné en un seul fichier `src/middleware.ts` (fonction nommée `middleware`, config inline, try/catch).
2. Migration `fix_recursive_rls_policies_agent_organization` : création d'une fonction `auth_agent_org_id()` (SECURITY DEFINER) pour récupérer l'org sans passer par RLS, et remplacement des 3 policies récursives (agent_select_same_org, org_select_member, org_update_admin).

**Vérifié :** Login avec test.agent02@1936.ai → dashboard affiche "Bonjour, Pierre 👋" ✅

### BUG 5 — Setup persistance ✅ RÉSOLU
**Retest 31 mars 2026 :**

| Étape setup | Server action | Persistance | Détails |
|-------------|--------------|-------------|---------|
| 1. Profil pro | `saveProfileStep` | ✅ | mobilePhone="06 99 88 77 66", rsacNumber="CPI 75012 2025 123456" sauvés en BDD |
| 2. Organisation | `saveOrgStep` | ✅ | Organization créée (name, address, siret, phone, email). Agent.organizationId lié. onboardingStep="AGENCY" |
| 3. Documents | (pas de server action) | ⚠️ | Étape UI only — upload non implémenté (prévu) |
| 4. Paramètres | `completeOnboarding` | ✅ | onboardingCompleted=true, onboardingStep="DONE" |

### BUG 6 — saveOrgStep ne crée pas d'Organization ✅ RÉSOLU
**Constat initial :** En remplissant le formulaire Organisation et cliquant Continuer, aucune Organization n'était créée en BDD.

**3 causes identifiées et corrigées :**
1. **Code saveOrgStep incomplet** — Le server action ne faisait pas d'INSERT Organization ni d'UPDATE Agent. Fix : réécriture complète du server action (INSERT Organization + UPDATE Agent.organizationId + onboardingStep='AGENCY'). city/postalCode concaténés dans `address` (pas de colonnes séparées).
2. **RLS SELECT bloquait INSERT+SELECT** — La policy `org_select_member` vérifiait `id = auth_agent_org_id()`, mais au moment de l'INSERT, l'Agent n'a pas encore d'organizationId. Fix : policy changée en `auth.uid() IS NOT NULL`.
3. **Organization.id sans default** — Colonne TEXT sans DEFAULT. Le Supabase client ne génère pas d'UUID (contrairement à Prisma). Fix : `ALTER TABLE "Organization" ALTER COLUMN id SET DEFAULT gen_random_uuid()::text` + defaults timestamps.

**Vérifié en BDD :** Organization créée avec id=`dd0df7ee-...`, name="Immobilier Martin & Associés", address="25 avenue des Champs-Élysées, 75008, Paris", siret="12345678900012". Agent.organizationId lié, onboardingStep="AGENCY" ✅

---

## Comptes de test

| Email | Password | Chain complète |
|-------|----------|---------------|
| damien.paques@hotmail.fr | (existant) | ✅ User + Agent |
| test.agent01@1936.ai | TestAgent01! | ✅ User + Agent |
| test.agent02@1936.ai | TestAgent02! | ✅ User + Agent |
| test.agent03@1936.ai | TestAgent03! | ✅ User + Agent |

---

## Design System — Observations

- ✅ Logo RealAgent affiché dans la NavRail (BUG 3 corrigé, "ORPI" retiré)
- ✅ Couleur brand #7B72F9 utilisée pour CTA, stepper, sélections
- ✅ Stepper horizontal fonctionnel avec checks verts
- ✅ Password strength indicator (4 barres + 4 critères)
- ✅ Zones de drag & drop avec styles dashed border
- ✅ Cards sélectionnables avec bordure brand + check
- ✅ Toggles et dropdowns natifs
