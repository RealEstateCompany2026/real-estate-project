# FIX BUG 6 — saveOrgStep ne crée pas d'Organization

## Constat

En remplissant le formulaire Organisation (étape 2 du setup) et cliquant "Continuer" :
- Aucune Organization n'est créée en BDD
- Agent.organizationId reste null
- Agent.onboardingStep reste "PROFILE" (ne passe pas à "AGENCY")

L'étape 1 (Profil) persiste correctement, et l'étape 4 (completeOnboarding) aussi. Seule l'étape 2 échoue silencieusement.

## Diagnostic à faire

Vérifie dans `apps/agent-app/src/actions/setup.ts` la fonction `saveOrgStep`. Les problèmes possibles :

### 1. Colonnes inexistantes
La table Organization n'a PAS de colonnes `city` ni `postalCode`. Si le code essaie de les écrire, l'INSERT échoue silencieusement.

**Colonnes Organization existantes :**
```
id, name, createdAt, updatedAt, siret, address, phone, email,
logoUrl, network, carteTNumber, carteGNumber, rcpInsuranceRef,
rcpExpiryDate, maxAgents, invitationCode
```

Le formulaire envoie : nom agence, email, téléphone, adresse, code postal, ville, SIRET.
→ `code postal` et `ville` n'ont pas de colonne correspondante. Il faut soit les ignorer, soit les concaténer dans `address`.

### 2. L'action n'est pas appelée
Vérifie que le composant du formulaire Organisation appelle bien `saveOrgStep` au submit. Peut-être que le bouton "Continuer" ne fait que changer le step local sans appeler le server action.

### 3. RLS bloque l'INSERT ou l'UPDATE
La policy `org_insert_authenticated` autorise l'INSERT si `auth.uid() IS NOT NULL`. Ça devrait marcher puisque le middleware fonctionne maintenant. Mais l'UPDATE de Agent.organizationId pourrait échouer si le code utilise Supabase client (RLS) au lieu de Prisma.

## Code correct pour saveOrgStep

```typescript
'use server'

import { createClient } from '@/lib/supabase/server'

export async function saveOrgStep(formData: {
  name: string
  email: string
  phone: string
  address: string
  postalCode?: string
  city?: string
  siret: string
}) {
  const supabase = await createClient()

  // 1. Vérifier l'auth
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (!user || authError) {
    return { error: 'Non authentifié' }
  }

  // 2. Récupérer l'id interne de l'agent
  const { data: userId, error: rpcError } = await supabase.rpc('auth_user_id')
  if (!userId || rpcError) {
    return { error: 'Utilisateur non trouvé' }
  }

  // 3. Concaténer adresse complète (city/postalCode n'existent pas en colonne)
  const fullAddress = [formData.address, formData.postalCode, formData.city]
    .filter(Boolean)
    .join(', ')

  // 4. Créer l'Organization
  const { data: org, error: orgError } = await supabase
    .from('Organization')
    .insert({
      name: formData.name,
      email: formData.email || user.email,
      phone: formData.phone,
      address: fullAddress,
      siret: formData.siret,
    })
    .select('id')
    .single()

  if (orgError || !org) {
    console.error('Erreur création Organization:', orgError)
    return { error: orgError?.message || 'Erreur création organisation' }
  }

  // 5. Lier l'Organization à l'Agent + avancer onboardingStep
  const { error: updateError } = await supabase
    .from('Agent')
    .update({
      organizationId: org.id,
      onboardingStep: 'AGENCY',
    })
    .eq('userId', userId)

  if (updateError) {
    console.error('Erreur update Agent:', updateError)
    return { error: updateError.message }
  }

  return { success: true, organizationId: org.id }
}
```

## Points d'attention

1. **L'INSERT Organization doit retourner l'id** (`.select('id').single()`) pour pouvoir le lier à l'Agent.
2. **L'UPDATE Agent** utilise `eq('userId', userId)` — la policy `agent_update_own` autorise cette opération si `auth.uid()` match.
3. **Ne PAS essayer d'écrire `city` ou `postalCode`** comme colonnes séparées — elles n'existent pas. Les concaténer dans `address`.
4. **Ajouter des console.error** pour diagnostiquer les échecs côté terminal serveur.

## Vérification après fix

1. Naviguer vers /setup, aller à l'étape 2
2. Remplir : nom="Test Agence", tél="01 44 55 66 77", adresse="25 avenue des Champs-Élysées", CP="75008", ville="Paris", SIRET="12345678900012"
3. Cliquer Continuer
4. Vérifier en BDD :
   ```sql
   SELECT o.name, o.address, o.siret, a."organizationId", a."onboardingStep"
   FROM "Agent" a
   LEFT JOIN "Organization" o ON a."organizationId" = o.id
   WHERE a.email = 'test.agent02@1936.ai';
   ```
5. **Attendu** : Organization créée avec les données, Agent.organizationId non null, onboardingStep = 'AGENCY'

## Réinitialiser l'agent test avant de retester

Comme l'agent test.agent02 a déjà onboardingCompleted=true, il faut le reset :
```sql
UPDATE "Agent"
SET "onboardingCompleted" = false,
    "onboardingStep" = 'WELCOME',
    "organizationId" = NULL
WHERE email = 'test.agent02@1936.ai';
```
