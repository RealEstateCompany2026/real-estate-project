# DEBUG — Dashboard redirige toujours vers /tour après fix middleware

## Situation actuelle

Le middleware est maintenant corrigé (fichier unique `src/middleware.ts`, plus d'erreurs console). L'utilisateur est bien authentifié (pas de redirect vers /auth/login). Mais :

- `GET /` → redirige vers `/dashboard`
- `GET /dashboard` → redirige vers `/tour`

L'utilisateur test.agent02@1936.ai a bien `onboardingCompleted = true` et `onboardingStep = 'DONE'` en BDD. Le chaînage User → Agent fonctionne en SQL direct.

## Ce qu'il faut faire

### Étape 1 : Ajouter des console.log de debug dans la page dashboard

Dans le fichier de la page dashboard (probablement `src/app/(app)/dashboard/page.tsx` ou la page qui gère `/dashboard`), ajouter des logs **côté serveur** (ces logs apparaîtront dans le terminal, pas dans le navigateur) :

```typescript
// Au début de la fonction du composant serveur
console.log('=== DASHBOARD DEBUG ===')

// 1. Tester auth.getUser()
const supabase = await createClient()
const { data: { user }, error: authError } = await supabase.auth.getUser()
console.log('1. auth.getUser():', { user: user?.id, email: user?.email, error: authError?.message })

// 2. Tester rpc('auth_user_id')
const { data: userId, error: rpcError } = await supabase.rpc('auth_user_id')
console.log('2. rpc auth_user_id:', { userId, error: rpcError?.message })

// 3. Tester la query Agent
if (userId) {
  const { data: agent, error: agentError } = await supabase
    .from('Agent')
    .select('id, onboardingCompleted, onboardingStep, firstName')
    .eq('userId', userId)
    .single()
  console.log('3. Agent query:', { agent, error: agentError?.message })
}

console.log('=== END DEBUG ===')
```

### Étape 2 : Relancer le serveur et naviguer vers /

Après avoir ajouté les logs :
1. Redémarre le serveur dev
2. Ouvre http://localhost:3001/ dans le navigateur
3. Regarde les logs dans le **terminal** (pas la console du navigateur)
4. Copie-moi le résultat des 3 lignes de debug

### Hypothèses probables

1. **`auth.getUser()` retourne null** → Le middleware ne propage pas correctement les cookies rafraîchis vers la page. Solution : vérifier que `supabaseResponse` est bien retourné dans le middleware (pas un NextResponse.next() nu).

2. **`auth.getUser()` retourne le user mais `rpc('auth_user_id')` retourne null** → Le JWT n'est pas passé à la requête Supabase, ou l'anon key n'a pas le droit d'appeler la RPC. Solution : vérifier les grants sur la fonction (`GRANT EXECUTE ON FUNCTION auth_user_id TO anon, authenticated;`).

3. **Le userId est trouvé mais la query Agent retourne null** → RLS policy bloque la lecture. Solution : vérifier que `auth.uid()` dans la policy `agent_select_own` fonctionne.

4. **L'agent est trouvé mais `onboardingCompleted` est lu comme false** → Bug dans la logique de condition. Solution : vérifier le code de la condition de redirect.

### Si c'est l'hypothèse 2 (RPC pas autorisée pour anon)

Exécuter dans Supabase :
```sql
GRANT EXECUTE ON FUNCTION public.auth_user_id() TO anon, authenticated;
```

### Info comptes de test

| Email | supabase_id | User.id | Agent.id | onboardingCompleted |
|-------|-------------|---------|----------|-------------------|
| test.agent02@1936.ai | bcccd4a8-5e36-4cba-a9c6-ef73c18789c8 | 3113638e-79d1-4620-bb36-1aa49e2baa1d | 4a4e0ed5-eae2-4ce4-a25b-14e32805f6bd | true |
| test.agent03@1936.ai | 03ca8ffd-540c-4a9b-a8e2-44b377838843 | 80e61c88-61d2-40c0-8cd8-9adcb1758e7e | 60aa0516-45ca-4f85-a6d9-89622d93b20b | true |
