'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { LogoBadge } from '@/components/auth'
import { PasswordStrengthIndicator } from '@/components/auth/PasswordStrengthIndicator'
import { signupSchema } from '@/lib/validations/auth'

export default function SignupEmailPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const supabase = createClient()

  const validation = signupSchema.safeParse({ email, password, confirmPassword })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validation.success) return

    setIsLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm?next=/signup/persona`,
      },
    })

    if (error) {
      setError(error.message)
      setIsLoading(false)
      return
    }

    router.push(`/verify-email?email=${encodeURIComponent(email)}`)
  }

  return (
    <div className="flex flex-col items-center">
      <LogoBadge />
      <h1 className="mt-4 text-2xl font-bold text-[var(--text-headings)]">
        Créer un compte
      </h1>
      <p className="mt-1 text-sm text-[var(--text-caption)]">
        Commencez gratuitement
      </p>

      <form onSubmit={handleSubmit} className="w-full mt-8 space-y-5">
        <div>
          <label className="block text-sm font-medium text-[var(--text-headings)] mb-1.5">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[var(--border-default)] bg-[var(--surface-neutral-default)] focus:outline-none focus:ring-2 focus:ring-[var(--border-branded-default)] text-sm"
            placeholder="vous@agence.com"
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-headings)] mb-1.5">
            Mot de passe
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[var(--border-default)] bg-[var(--surface-neutral-default)] focus:outline-none focus:ring-2 focus:ring-[var(--border-branded-default)] text-sm"
            placeholder="••••••••"
            autoComplete="new-password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--text-headings)] mb-1.5">
            Confirmer le mot de passe
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[var(--border-default)] bg-[var(--surface-neutral-default)] focus:outline-none focus:ring-2 focus:ring-[var(--border-branded-default)] text-sm"
            placeholder="••••••••"
            autoComplete="new-password"
          />
        </div>

        {password.length > 0 && <PasswordStrengthIndicator password={password} />}

        {error && (
          <div className="bg-[var(--surface-error)] text-[var(--text-error)] text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={!validation.success || isLoading}
          className="w-full py-3 rounded-xl bg-[var(--surface-branded-action)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Création en cours…' : 'Créer mon compte'}
        </button>
      </form>

      <p className="mt-8 text-sm text-[var(--text-caption)]">
        Vous avez déjà un compte ?{' '}
        <Link href="/login" className="font-semibold text-[var(--text-headings)] hover:underline">
          Se connecter
        </Link>
      </p>
    </div>
  )
}
