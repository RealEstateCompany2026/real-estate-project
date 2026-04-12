'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { LogoBadge } from '@/components/auth'
import { Button } from '@real-estate/ui/button'
import { TextField } from '@real-estate/ui/text-field'
import { InlineMessage } from '@real-estate/ui/inline-message'

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
      <h1 className="mt-4 text-2xl font-bold text-[var(--text-headings)]">
        Connexion
      </h1>
      <p className="mt-1 text-sm text-[var(--text-caption)]">
        Accédez à votre espace
      </p>

      {/* Form area */}
      <div className="w-full mt-10">
        {/* Google button */}
        <Button
          onClick={handleGoogleLogin}
          variant="outline"
          className="w-full flex items-center justify-center gap-3"
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
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[var(--border-default)]" />
          <span className="text-xs text-[var(--text-caption)]">ou</span>
          <div className="flex-1 h-px bg-[var(--border-default)]" />
        </div>

        {/* Email/password form */}
        <form onSubmit={handleEmailLogin} className="space-y-5">
          <TextField
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="vous@agence.com"
            required
            autoComplete="email"
          />

          <TextField
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="••••••••"
            required
            autoComplete="current-password"
          />

          {/* Forgot password link */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-[var(--text-branded-action)] hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          {error && (
            <InlineMessage type="error" message={error} />
          )}

          <Button
            type="submit"
            disabled={isLoading}
            variant="primary"
            className="w-full"
          >
            {isLoading ? 'Connexion en cours…' : 'Se connecter'}
          </Button>
        </form>

        {/* Bottom link */}
        <p className="mt-8 text-center text-sm text-[var(--text-caption)]">
          Pas encore de compte ?{' '}
          <Link
            href="/signup"
            className="font-semibold text-[var(--text-headings)] hover:underline"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  )
}
