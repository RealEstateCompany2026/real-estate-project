# RealAgent — Brief de lancement développement

> Ce document est destiné à Claude Code. Il contient tout le contexte nécessaire pour initialiser et développer le projet RealAgent App Agent (Vague 1, Parcours P01 à P05).

---

## 1. Vue d'ensemble du projet

**Nom :** RealAgent — CRM immobilier SaaS
**App :** App Agent (B2B) — interface desktop pour agents immobiliers français
**Stack :** Next.js 14+ (App Router) + TypeScript + Tailwind CSS + Supabase
**Déploiement :** Vercel
**Région :** EU-West (RGPD)

---

## 2. Connexion Supabase

```env
NEXT_PUBLIC_SUPABASE_URL=https://wrakmsvdmsrpoiltysht.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyYWttc3ZkbXNycG9pbHR5c2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwMDc3NTgsImV4cCI6MjA4NzU4Mzc1OH0.IkCvQFxu8q7awX3nUUbmA0eXvq6DAYgD2BHbXUiKz_g
```

- **Project ID :** `wrakmsvdmsrpoiltysht`
- **Schéma principal :** `public` (39 tables, CRM Agent)
- **Auth :** Supabase Auth (email/password + Google SSO)
- **RLS :** activé sur toutes les tables, isolation par `organizationId`
- **Types TypeScript :** fichier `supabase_types.ts` fourni (4347 lignes, généré depuis Supabase)

---

## 3. Initialisation du projet

### 3.1 Créer le repo

```bash
npx create-next-app@latest realagent-app --typescript --tailwind --eslint --app --src-dir --use-npm
cd realagent-app
```

### 3.2 Installer les dépendances

```bash
# Supabase
npm install @supabase/supabase-js @supabase/ssr @supabase/auth-helpers-nextjs

# UI (déjà dans le code Figma Make, à adapter)
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip

# Utilitaires
npm install class-variance-authority clsx tailwind-merge lucide-react
npm install react-hook-form @hookform/resolvers zod
npm install date-fns sonner cmdk embla-carousel-react input-otp recharts
npm install -D @types/node
```

### 3.3 Intégrer le code Figma Make

Le dossier `src/` de Figma Make est fourni. Voici comment l'intégrer :

```
realagent-app/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (ThemeProvider, fonts)
│   │   ├── page.tsx                  # Landing → redirect to /auth/login
│   │   ├── (auth)/                   # Route group auth (pas de NavRail)
│   │   │   ├── login/page.tsx        # SIN-01
│   │   │   ├── signup/               # SUP-00 → SUP-07
│   │   │   ├── verify-email/page.tsx # SUP-03
│   │   │   ├── forgot-password/      # SIN-02 → SIN-06
│   │   │   └── invitation/page.tsx   # SIN-08
│   │   ├── (onboarding)/             # Route group onboarding
│   │   │   ├── tour/page.tsx         # OBT-00 → OBT-06
│   │   │   └── setup/page.tsx        # OBS-00 → OBS-05
│   │   ├── (app)/                    # Route group app principale (avec NavRail)
│   │   │   ├── layout.tsx            # Layout avec NavRail + AppBar
│   │   │   ├── dashboard/page.tsx    # Home
│   │   │   ├── clients/page.tsx
│   │   │   ├── properties/page.tsx
│   │   │   ├── deals/page.tsx
│   │   │   ├── import/page.tsx       # IMP-01 → IMP-07
│   │   │   └── ...
│   │   └── globals.css               # Tokens CSS (depuis theme.css)
│   ├── components/                    # Depuis Figma Make
│   │   ├── atoms/                     # 51 composants
│   │   ├── molecules/                 # 26 composants
│   │   ├── organisms/                 # 22 composants
│   │   └── ui/                        # shadcn/ui (50 composants)
│   ├── context/
│   │   ├── ThemeContext.tsx
│   │   └── ToastContext.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts             # createBrowserClient
│   │   │   ├── server.ts             # createServerClient
│   │   │   └── middleware.ts         # Auth middleware
│   │   └── utils.ts
│   ├── types/
│   │   └── supabase.ts              # Types auto-générés (4347 lignes)
│   └── styles/
│       ├── theme.css                 # Tokens 3 couches (depuis Figma Make)
│       ├── components.css
│       └── fonts.css                 # Roboto
```

**IMPORTANT — Adaptations nécessaires :**

Le code Figma Make utilise `react-router-dom` (SPA). Il faut le convertir en Next.js App Router :
- `useNavigate()` → `useRouter()` de `next/navigation`
- `<Link to="">` → `<Link href="">` de `next/link`
- Les pages deviennent des `page.tsx` dans les dossiers de route
- Les layouts partagés (NavRail) deviennent des `layout.tsx`

### 3.4 Configurer Supabase Auth

```typescript
// src/lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '@/types/supabase'

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

```typescript
// src/lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { Database } from '@/types/supabase'

export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options))
          } catch {}
        },
      },
    }
  )
}
```

```typescript
// src/middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options))
        },
      },
    }
  )
  const { data: { user } } = await supabase.auth.getUser()

  // Routes protégées : rediriger vers login si pas authentifié
  if (!user && !request.nextUrl.pathname.startsWith('/login')
    && !request.nextUrl.pathname.startsWith('/signup')
    && !request.nextUrl.pathname.startsWith('/forgot-password')
    && !request.nextUrl.pathname.startsWith('/invitation')
    && request.nextUrl.pathname !== '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
```

---

## 4. Plan de développement — Sprint 1

### Objectif : Auth fonctionnel de bout en bout

**Ordre de dev :**

| # | Parcours | Priorité | Dépendances | Écrans |
|---|----------|----------|-------------|--------|
| 1 | P02 Sign-in (SIN) | 🔴 Critique | Supabase Auth | 8 écrans |
| 2 | P01 Sign-up (SUP) | 🔴 Critique | Supabase Auth | 9 écrans |
| 3 | P03 Onboarding Tour (OBT) | 🟡 Important | Auth fonctionnel | 7 écrans |
| 4 | P04 Onboarding Setup (OBS) | 🟡 Important | Auth fonctionnel | 6 écrans |
| 5 | P05 Import BDD (IMP) | 🟠 Secondaire | App layout prêt | 7 écrans |

### Étape 1 — P02 Sign-in (commencer ici)

Fichiers Figma Make source :
- `app/pages/signin/SIN_01_SignIn.tsx` → `src/app/(auth)/login/page.tsx`
- `app/pages/signin/SIN_02_ForgotPasswordEmail.tsx` → `src/app/(auth)/forgot-password/page.tsx`
- `app/pages/signin/SIN_03_ForgotPasswordConfirmation.tsx` → `src/app/(auth)/forgot-password/confirmation/page.tsx`
- `app/pages/signin/SIN_04_NewPassword.tsx` → `src/app/(auth)/forgot-password/reset/page.tsx`
- `app/pages/signin/SIN_05_PasswordResetConfirmation.tsx` → `src/app/(auth)/forgot-password/success/page.tsx`
- `app/pages/signin/SIN_06_LinkExpired.tsx` → `src/app/(auth)/forgot-password/expired/page.tsx`
- `app/pages/signin/SIN_07_AccountLocked.tsx` → `src/app/(auth)/account-locked/page.tsx`
- `app/pages/signin/SIN_08_InvitationSignup.tsx` → `src/app/(auth)/invitation/page.tsx`

**Logique Supabase à brancher :**
```typescript
// SIN-01 : Login
const { data, error } = await supabase.auth.signInWithPassword({ email, password })
// ou
const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' })

// SIN-02 : Forgot password
const { error } = await supabase.auth.resetPasswordForEmail(email, {
  redirectTo: `${window.location.origin}/forgot-password/reset`
})

// SIN-04 : New password
const { error } = await supabase.auth.updateUser({ password: newPassword })

// SIN-08 : Invitation
// Le token est dans l'URL. Supabase Auth le gère automatiquement.
```

### Étape 2 — P01 Sign-up

Fichiers Figma Make source :
- `app/pages/signup/SUP_00_LandingPage.tsx` → `src/app/(auth)/signup/page.tsx`
- `app/pages/signup/SUP_01_MethodChoice.tsx` → `src/app/(auth)/signup/method/page.tsx`
- `app/pages/signup/EmailPasswordForm.tsx` → `src/app/(auth)/signup/email/page.tsx` (SUP-02)
- `app/pages/signup/VerifyEmail.tsx` → `src/app/(auth)/verify-email/page.tsx` (SUP-03)
- `app/pages/signup/PersonaRouting.tsx` → `src/app/(auth)/signup/persona/page.tsx` (SUP-04)
- `app/pages/signup/ProfileSolo.tsx` → `src/app/(auth)/signup/profile-solo/page.tsx` (SUP-05A)
- `app/pages/signup/ProfileAgency.tsx` → `src/app/(auth)/signup/profile-agency/page.tsx` (SUP-05B)
- `app/pages/signup/TeamInvitation.tsx` → `src/app/(auth)/signup/team/page.tsx` (SUP-06)
- `app/pages/signup/Confirmation.tsx` → `src/app/(auth)/signup/confirmation/page.tsx` (SUP-07)

**Logique Supabase à brancher :**
```typescript
// SUP-01 : Sign-up email
const { data, error } = await supabase.auth.signUp({
  email, password,
  options: { emailRedirectTo: `${window.location.origin}/verify-email` }
})

// SUP-01 : Sign-up Google SSO
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: { redirectTo: `${window.location.origin}/signup/persona` }
})

// SUP-05A/B : Après auth, créer le profil Agent
const { error } = await supabase.from('Agent').insert({
  email, firstName, lastName, mobilePhone,
  userId: user.id,
  orgRole: isAdmin ? 'ADMIN' : 'MEMBER',
  onboardingStep: 'SIGNUP',
  onboardingCompleted: false,
})

// SUP-05B : Créer l'organisation (persona B/C)
const { data: org } = await supabase.from('Organization').insert({
  name: agencyName, email: agencyEmail, network: networkName,
})

// SUP-06 : Inviter des membres
const { error } = await supabase.auth.admin.inviteUserByEmail(memberEmail)
// Note : utiliser une Edge Function car admin.inviteUserByEmail nécessite la service_role key
```

### Étapes 3-5 — Onboarding + Import

Même pattern : convertir les pages Figma Make en Next.js pages, brancher la logique Supabase.

---

## 5. Tables Supabase utilisées (Sprint 1)

| Table | Schéma | Utilisée par | Opérations |
|-------|--------|-------------|------------|
| `auth.users` | auth | P01, P02 | signUp, signIn, resetPassword |
| `Agent` | public | P01, P04 | INSERT (signup), UPDATE (setup) |
| `Organization` | public | P01, P04 | INSERT (signup B/C), UPDATE (setup) |
| `Subscription` | public | P01 | INSERT (trial auto-créé) |
| `ImportJob` | public | P05 | INSERT, UPDATE |
| `Client` | public | P05 | INSERT (import) |
| `Property` | public | P05 | INSERT (import) |

---

## 6. Design System — Rappels critiques

- **Couleur brand :** `#7B72F9` — toujours utiliser `var(--branded-500)` ou les tokens Mapped
- **Police :** Roboto (300-700)
- **NavRail :** 90px, vertical, fixe à gauche (uniquement dans le route group `(app)`)
- **Dark mode :** supporté via ThemeContext + tokens CSS
- **⚠️ Bug à corriger :** Button/IconButton non-ghost utilisent `#7b72f9` en dur → remplacer par `var(--surface-branded-default)`

---

## 7. Fichiers fournis

| Fichier | Contenu |
|---------|---------|
| `src.zip` | Code Figma Make complet (844 fichiers) — composants + pages P01-P05 |
| `supabase_types.ts` | Types TypeScript auto-générés depuis Supabase (4347 lignes) |
| `PROJECT_MEMORY.md` | Mémoire projet complète (décisions, architecture, conventions) |
| `vague1_01_signup.docx` → `vague1_05_import_bdd.docx` | Specs CX/UX détaillées par parcours |
| `architecture_3_schemas_realagent.html` | Diagrammes architecture 3 schémas |

---

## 8. Règles de développement

1. **Ne jamais inventer d'IDs d'écrans** — utiliser SUP-XX, SIN-XX, OBT-XX, OBS-XX, IMP-XX
2. **Toujours utiliser les tokens CSS** — pas de couleurs en dur
3. **RLS activé** — toutes les requêtes passent par le client Supabase (pas de bypass)
4. **Isolation par organizationId** — chaque requête doit filtrer par l'org de l'agent connecté
5. **Edge Functions** pour les opérations admin (invitations, jobs d'import)
6. **Validation côté client ET serveur** — Zod pour le schéma, Supabase RLS pour la sécurité
