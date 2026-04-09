'use client'

import Link from 'next/link'
import { LogoBadge, InfoCard } from '@/components/auth'
import { useCountdown } from '@/hooks/useCountdown'

export default function AccountLockedPage() {
  const { formatted, isFinished } = useCountdown(300) // 5 minutes

  return (
    <div className="flex flex-col items-center">
      <LogoBadge variant="error" />
      <h1 className="mt-4 text-2xl font-bold text-[var(--color-anthracite-textes)] text-center">
        Compte temporairement verrouillé
      </h1>
      <p className="mt-2 text-sm text-[var(--color-grey-bold-textes)] text-center max-w-[340px]">
        Pour protéger votre compte, nous l&apos;avons temporairement verrouillé après plusieurs
        tentatives de connexion infructueuses.
      </p>

      <div className="w-full mt-8 space-y-6">
        <InfoCard>
          <div className="text-center">
            <p className="text-sm text-[var(--color-grey-bold-textes)] mb-2">
              Temps restant avant déverrouillage
            </p>
            <p className="text-3xl font-bold text-[var(--color-anthracite-textes)]">
              {formatted}
            </p>
          </div>
        </InfoCard>

        <p className="text-sm text-[var(--color-grey-bold-textes)] text-center">
          Si vous avez oublié votre mot de passe, vous pouvez demander un lien de
          réinitialisation
        </p>

        <Link
          href="/forgot-password"
          className="block text-center text-sm font-semibold text-[var(--color-indigo-couleur-fonctionnelle)] hover:underline"
        >
          Mot de passe oublié ?
        </Link>

        <button
          type="button"
          disabled={!isFinished}
          onClick={() => {
            if (isFinished) window.location.href = '/login'
          }}
          className="w-full py-3 rounded-xl bg-[var(--color-grey-light-couleur-primaire)] text-[var(--color-grey-bold-textes)] font-semibold text-sm cursor-not-allowed disabled:opacity-70"
        >
          {isFinished ? 'Retour à la connexion' : 'Compte verrouillé'}
        </button>
      </div>
    </div>
  )
}
