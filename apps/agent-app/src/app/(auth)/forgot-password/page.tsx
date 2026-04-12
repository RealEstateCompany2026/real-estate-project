'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { LogoBadge } from '@/components/auth'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/confirm?next=/forgot-password/reset`,
    })

    if (error) {
      setError(error.message)
      setIsLoading(false)
      return
    }

    router.push(`/forgot-password/confirmation?email=${encodeURIComponent(email)}`)
  }

  return (
    <div className="flex flex-col items-center">
      <LogoBadge />
      <h1 className="mt-4 text-2xl font-bold text-[var(--text-headings)]">
        Mot de passe oublié
      </h1>
      <p className="mt-2 text-sm text-[var(--text-caption)] text-center max-w-[320px]">
        Entrez votre adresse email et nous vous enverrons un lien de réinitialisation.
      </p>

      <form onSubmit={handleSubmit} className="w-full mt-8 space-y-6">
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

        {error && (
          <div className="bg-[var(--surface-error)] text-[var(--text-error)] text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading || !email}
          className="w-full py-3 rounded-xl bg-[var(--surface-branded-action)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Envoi en cours…' : 'Envoyer le lien'}
        </button>
      </form>

      <Link
        href="/login"
        className="mt-8 text-sm font-semibold text-[var(--text-headings)] hover:underline"
      >
        Retour à la connexion
      </Link>
    </div>
  )
}
