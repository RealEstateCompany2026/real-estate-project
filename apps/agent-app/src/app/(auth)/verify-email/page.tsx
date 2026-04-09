'use client'

import { Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogoBadge } from '@/components/auth'
import { CheckCircle } from 'lucide-react'

function VerifyEmailContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const email = searchParams.get('email') ?? ''

  function handleSimulateVerification() {
    // In demo mode, skip email verification and go to persona selection
    router.push('/signup/persona')
  }

  return (
    <div className="flex flex-col items-center">
      <LogoBadge />
      <h1 className="mt-4 text-2xl font-bold text-[var(--color-anthracite-textes)]">
        Vérifiez votre email
      </h1>
      <p className="mt-2 text-sm text-[var(--color-grey-bold-textes)] text-center max-w-[340px]">
        Nous avons envoyé un lien de vérification à{' '}
        <strong className="text-[var(--color-anthracite-textes)]">{email}</strong>
      </p>

      <div className="w-full mt-8 space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 mt-0.5 text-[var(--color-green-couleur-fonctionnelle)] flex-shrink-0" />
            <p className="text-sm text-[var(--color-anthracite-textes)]">
              Ouvrez l&apos;email que nous vous avons envoyé
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 mt-0.5 text-[var(--color-green-couleur-fonctionnelle)] flex-shrink-0" />
            <p className="text-sm text-[var(--color-anthracite-textes)]">
              Cliquez sur le lien de vérification pour activer votre compte
            </p>
          </div>
        </div>

        {/* Demo mode section */}
        <div className="mt-8 pt-6 border-t border-[var(--color-grey-light-couleur-primaire)]">
          <p className="text-xs text-[var(--color-grey-bold-textes)] mb-3">Mode demo</p>
          <button
            type="button"
            onClick={handleSimulateVerification}
            className="w-full py-3 rounded-xl bg-[var(--color-indigo-couleur-fonctionnelle)] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Simuler vérification email
          </button>
        </div>
      </div>

      <div className="mt-8 text-center space-y-2">
        <p className="text-xs text-[var(--color-grey-bold-textes)]">
          Vous n&apos;avez pas reçu l&apos;email ?{' '}
          <button
            type="button"
            className="text-[var(--color-indigo-couleur-fonctionnelle)] hover:underline font-medium"
          >
            Renvoyer
          </button>
        </p>
        <Link
          href="/login"
          className="block text-xs text-[var(--color-grey-bold-textes)] hover:underline"
        >
          © RealAgent
        </Link>
      </div>
    </div>
  )
}

export default function VerifyEmailPage() {
  return (
    <Suspense>
      <VerifyEmailContent />
    </Suspense>
  )
}
