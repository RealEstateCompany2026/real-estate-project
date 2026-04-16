'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { LogoBadge, InfoCard } from '@/components/auth'
import { Button } from '@real-estate/ui/button'
import { TextFieldOutlined } from '@real-estate/ui/text-field-outlined'

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
      <h1 className="mt-4 text-2xl font-bold text-[var(--text-headings)]">
        Lien expiré
      </h1>
      <p className="mt-2 text-sm text-[var(--text-caption)] text-center max-w-[340px]">
        Le lien de réinitialisation que vous avez utilisé a expiré.
      </p>

      <div className="w-full mt-8 space-y-6">
        <InfoCard>
          <p className="text-sm text-[var(--text-caption)]">
            Pour des raisons de sécurité, les liens de réinitialisation expirent après{' '}
            <strong>1 heure</strong>. Veuillez demander un nouveau lien.
          </p>
        </InfoCard>

        {!sent ? (
          <>
            <TextFieldOutlined
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="vous@agence.com"
            />
            <Button
              type="button"
              onClick={handleResend}
              disabled={!email}
              variant="primary"
              className="w-full"
            >
              Renvoyer un lien
            </Button>
          </>
        ) : (
          <div className="text-center text-sm text-[var(--text-success)] font-medium">
            Un nouveau lien a été envoyé à votre adresse email.
          </div>
        )}
      </div>

      <Link
        href="/login"
        className="mt-8 text-sm font-semibold text-[var(--text-headings)] hover:underline"
      >
        Retour à la connexion
      </Link>
    </div>
  )
}
