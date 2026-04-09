'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LogoBadge, InfoCard } from '@/components/auth'
import { useCountdown } from '@/hooks/useCountdown'

export default function PasswordResetSuccessPage() {
  const router = useRouter()
  const { seconds } = useCountdown(3)

  useEffect(() => {
    if (seconds === 0) {
      router.push('/login')
    }
  }, [seconds, router])

  return (
    <div className="flex flex-col items-center">
      <LogoBadge variant="success" />
      <h1 className="mt-4 text-2xl font-bold text-[var(--color-anthracite-textes)]">
        Mot de passe mis à jour !
      </h1>
      <p className="mt-1 text-sm text-[var(--color-grey-bold-textes)]">
        Votre mot de passe a été réinitialisé avec succès.
      </p>

      <div className="w-full mt-8">
        <InfoCard>
          <p className="text-sm text-[var(--color-anthracite-textes)] text-center">
            Redirection automatique dans <strong>{seconds}</strong> secondes
          </p>
        </InfoCard>
      </div>
    </div>
  )
}
