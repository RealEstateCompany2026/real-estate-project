'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { LogoBadge, InfoCard } from '@/components/auth'
import { useCountdown } from '@/hooks/useCountdown'
import { Suspense } from 'react'

function ConfirmationContent() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') ?? ''
  const { seconds, isFinished, reset } = useCountdown(59)
  const supabase = createClient()

  async function handleResend() {
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/confirm?next=/forgot-password/reset`,
    })
    reset()
  }

  return (
    <div className="flex flex-col items-center">
      <LogoBadge />
      <h1 className="mt-4 text-2xl font-bold text-[var(--text-headings)]">
        Vérifiez votre boîte mail
      </h1>
      <p className="mt-2 text-sm text-[var(--text-caption)] text-center max-w-[340px]">
        Nous avons envoyé un lien de réinitialisation à{' '}
        <strong className="text-[var(--text-headings)]">{email}</strong>
      </p>

      <div className="w-full mt-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-[var(--text-headings)] mb-1.5">
            Email
          </label>
          <input
            type="email"
            value={email}
            readOnly
            className="w-full px-4 py-3 rounded-xl border border-[var(--border-default)] bg-[var(--surface-neutral-action)] text-sm text-[var(--text-caption)]"
          />
        </div>

        <button
          type="button"
          disabled={!isFinished}
          onClick={handleResend}
          className="w-full py-3 rounded-xl bg-[var(--surface-branded-action)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isFinished ? 'Renvoyer le lien' : `Renvoyer dans ${seconds}s`}
        </button>

        <InfoCard>
          <p className="text-sm text-[var(--text-caption)]">
            Si vous ne trouvez pas l&apos;email, vérifiez vos <strong>spams</strong> ou{' '}
            <strong>courriers indésirables</strong>.
          </p>
        </InfoCard>
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

export default function ForgotPasswordConfirmationPage() {
  return (
    <Suspense>
      <ConfirmationContent />
    </Suspense>
  )
}
