'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LogoBadge } from '@/components/auth'
import { PasswordStrengthIndicator } from '@/components/auth/PasswordStrengthIndicator'
import { passwordSchema } from '@/lib/validations/auth'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const supabase = createClient()

  const isPasswordValid = passwordSchema.safeParse(password).success
  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0
  const canSubmit = isPasswordValid && passwordsMatch

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return

    setIsLoading(true)
    setError(null)

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setError(error.message)
      setIsLoading(false)
      return
    }

    router.push('/forgot-password/success')
  }

  return (
    <div className="flex flex-col items-center">
      <LogoBadge />
      <h1 className="mt-4 text-2xl font-bold text-[var(--text-headings)]">
        Nouveau mot de passe
      </h1>
      <p className="mt-1 text-sm text-[var(--text-caption)]">
        Choisissez un mot de passe sécurisé pour votre compte.
      </p>

      <form onSubmit={handleSubmit} className="w-full mt-8 space-y-5">
        <div>
          <label className="block text-sm font-medium text-[var(--text-headings)] mb-1.5">
            Nouveau mot de passe
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

        <PasswordStrengthIndicator password={password} />

        {error && (
          <div className="bg-[var(--surface-error)] text-[var(--text-error)] text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={!canSubmit || isLoading}
          className="w-full py-3 rounded-xl bg-[var(--surface-branded-action)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Réinitialisation…' : 'Réinitialiser le mot de passe'}
        </button>
      </form>
    </div>
  )
}
