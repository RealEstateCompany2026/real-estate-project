'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { LogoBadge } from '@/components/auth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const supabase = createClient()

  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/confirm?next=/dashboard` },
    })
  }

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      if (error.message.includes('Invalid login credentials')) {
        setError('Email ou mot de passe incorrect.')
      } else {
        setError(error.message)
      }
      setIsLoading(false)
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <LogoBadge />
      <h1 className="mt-4 text-2xl font-bold text-[var(--color-anthracite-textes)]">
        Connexion
      </h1>
      <p className="mt-1 text-sm text-[var(--color-grey-bold-textes)]">
        Accédez à votre espace
      </p>

      {/* Form area */}
      <div className="w-full mt-10">
        {/* Google button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white hover:bg-[var(--color-grey-ultra-background)] transition-colors text-sm font-medium text-[var(--color-anthracite-textes)]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continuer avec Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[var(--color-grey-light-couleur-primaire)]" />
          <span className="text-xs text-[var(--color-grey-bold-textes)]">ou</span>
          <div className="flex-1 h-px bg-[var(--color-grey-light-couleur-primaire)]" />
        </div>

        {/* Email/password form */}
        <form onSubmit={handleEmailLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
              placeholder="vous@agence.com"
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </div>

          {/* Forgot password link */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-[var(--color-indigo-couleur-fonctionnelle)] hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          {error && (
            <div className="bg-[var(--color-soft-red-background)] border border-[var(--color-red-couleur-fonctionnelle)] text-[var(--color-red-couleur-fonctionnelle)] text-sm px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-[var(--color-indigo-couleur-fonctionnelle)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Connexion en cours…' : 'Se connecter'}
          </button>
        </form>

        {/* Bottom link */}
        <p className="mt-8 text-center text-sm text-[var(--color-grey-bold-textes)]">
          Pas encore de compte ?{' '}
          <Link
            href="/signup"
            className="font-semibold text-[var(--color-anthracite-textes)] hover:underline"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  )
}
