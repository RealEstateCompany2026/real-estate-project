'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { LogoBadge } from '@/components/auth'
import { Button } from '@real-estate/ui/button'
import { TextField } from '@real-estate/ui/text-field'
import { InlineMessage } from '@real-estate/ui/inline-message'

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
        <TextField
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="vous@agence.com"
          required
          autoComplete="email"
        />

        {error && (
          <InlineMessage type="error" message={error} />
        )}

        <Button
          type="submit"
          disabled={isLoading || !email}
          variant="primary"
          className="w-full"
        >
          {isLoading ? 'Envoi en cours…' : 'Envoyer le lien'}
        </Button>
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
