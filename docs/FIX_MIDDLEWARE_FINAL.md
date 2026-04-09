# FIX URGENT — Middleware cassé (cause du BUG 4)

## Diagnostic

Le middleware Supabase SSR ne fonctionne pas. Erreurs visibles dans la console du navigateur :

```
./apps/agent-app/src/middleware.ts:1:1
Export default doesn't exist in target module
> 1 | export { default } from './proxy'
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The export default was not found in module [project]/apps/agent-app/src/proxy.ts
Did you mean to import proxy?
```

**Conséquence** : le middleware ne s'exécute jamais → pas de refresh de session Supabase → `auth.getUser()` retourne null côté SSR dans les pages → la page dashboard redirige systématiquement vers `/tour` (car agent = null).

## Cause racine

`proxy.ts` exporte une fonction nommée `proxy`, pas un `export default`. Le `middleware.ts` essaie d'importer `default` qui n'existe pas.

## Correction à appliquer

### Solution : Fusionner tout dans un seul fichier `middleware.ts`

**Supprimer** le fichier `apps/agent-app/src/proxy.ts`.

**Remplacer** le contenu de `apps/agent-app/src/middleware.ts` par :

```typescript
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT : toujours appeler getUser() pour rafraîchir la session
  try {
    const { data: { user } } = await supabase.auth.getUser()

    const isAuthRoute = request.nextUrl.pathname.startsWith('/auth')

    // Utilisateur non connecté → rediriger vers login (sauf routes auth)
    if (!user && !isAuthRoute) {
      const url = request.nextUrl.clone()
      url.pathname = '/auth/login'
      return NextResponse.redirect(url)
    }

    // Utilisateur connecté sur la page login → rediriger vers dashboard
    if (user && request.nextUrl.pathname === '/auth/login') {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  } catch (error) {
    // Si getUser() échoue, laisser passer la requête
    // La page gèrera l'auth elle-même
    console.error('Middleware auth error:', error)
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
```

### Points critiques

1. **La fonction DOIT s'appeler `middleware`** (ou être l'export default). Next.js App Router cherche spécifiquement ce nom.
2. **Le `config` DOIT être défini en inline** dans middleware.ts — pas réexporté depuis un autre fichier.
3. **Le fichier DOIT être à `src/middleware.ts`** puisque le projet utilise le dossier `src/`.
4. **Le try/catch autour de `getUser()`** évite un crash complet si Supabase est indisponible.
5. **Supprimer `proxy.ts`** pour éviter toute confusion.

## Vérification après fix

1. Redémarrer le serveur dev (`pnpm dev` ou `next dev`)
2. Ouvrir la console du navigateur → plus d'erreurs middleware
3. Naviguer vers `http://localhost:3001/` avec un compte connecté (test.agent02@1936.ai / TestAgent02!)
4. **Attendu** : la page dashboard s'affiche (avec "Bonjour, ...") au lieu de rediriger vers /tour
5. Vérifier que `/auth/login` redirige bien vers `/` si déjà connecté
6. Vérifier que `/` redirige vers `/auth/login` si déconnecté

## Contexte : pourquoi le middleware est essentiel

Sans middleware, le Supabase SSR client (utilisé dans `createClient()` côté serveur) ne peut pas rafraîchir les tokens de session. Résultat : `supabase.auth.getUser()` dans les pages serveur retourne `{ user: null }` même si l'utilisateur est connecté. Toute la logique d'auth côté SSR tombe en cascade.
