'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { LogoBadge } from '@/components/auth'
import { PasswordStrengthIndicator } from '@/components/auth/PasswordStrengthIndicator'
import { signupSchema } from '@/lib/validations/auth'
import { Button } from '@real-estate/ui/button'
import { TextField } from '@real-estate/ui/text-field'
import { InlineMessage } from '@real-estate/ui/inline-message'

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
          autoComplete="new-password"
        />

        <TextField
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="••••••••"
          autoComplete="new-password"
        />

        {password.length > 0 && <PasswordStrengthIndicator password={password} />}

        {error && (
          <InlineMessage type="error" message={error} />
        )}

        <Button
          type="submit"
          disabled={!validation.success || isLoading}
          variant="primary"
          className="w-full"
        >
          {isLoading ? 'Création en cours…' : 'Créer mon compte'}
        </Button>
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
