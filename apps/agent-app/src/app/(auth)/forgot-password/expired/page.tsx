'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { LogoBadge, InfoCard } from '@/components/auth'

export default function LinkExpiredPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const supabase = createClient()

  async function handleResend() {
    if (!email) return
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/confirm?next=/forgot-password/reset`,
    })
    setSent(true)
  }

  return (
    <div className="flex flex-col items-center">
      <LogoBadge variant="error" />
      <h1 className="mt-4 text-2xl font-bold text-[var(--color-anthracite-textes)]">
        Lien expiré
      </h1>
      <p className="mt-2 text-sm text-[var(--color-grey-bold-textes)] text-center max-w-[340px]">
        Le lien de réinitialisation que vous avez utilisé a expiré.
      </p>

      <div className="w-full mt-8 space-y-6">
        <InfoCard>
          <p className="text-sm text-[var(--color-grey-bold-textes)]">
            Pour des raisons de sécurité, les liens de réinitialisation expirent après{' '}
            <strong>1 heure</strong>. Veuillez demander un nouveau lien.
          </p>
        </InfoCard>

        {!sent ? (
          <>
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
              />
            </div>
            <button
              type="button"
              onClick={handleResend}
              disabled={!email}
              className="w-full py-3 rounded-xl bg-[var(--color-indigo-couleur-fonctionnelle)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Renvoyer un lien
            </button>
          </>
        ) : (
          <div className="text-center text-sm text-[var(--color-green-couleur-fonctionnelle)] font-medium">
            Un nouveau lien a été envoyé à votre adresse email.
          </div>
        )}
      </div>

      <Link
        href="/login"
        className="mt-8 text-sm font-semibold text-[var(--color-anthracite-textes)] hover:underline"
      >
        Retour à la connexion
      </Link>
    </div>
  )
}
