'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { StepperDots, LogoBadge, InfoCard } from '@/components/auth'
import { useCountdown } from '@/hooks/useCountdown'
import { CheckCircle } from 'lucide-react'
import { Button } from '@real-estate/ui/button'

const confirmationItems = [
  'Votre compte est activé',
  'Vos informations sont sécurisées',
  'Vous pouvez commencer à travailler',
]

export default function SignupConfirmationPage() {
  const router = useRouter()
  const { seconds } = useCountdown(2)

  useEffect(() => {
    if (seconds === 0) {
      router.push('/tour')
    }
  }, [seconds, router])

  return (
    <div className="flex flex-col items-center">
      <StepperDots steps={3} currentStep={2} />

      <div className="mt-6">
        <LogoBadge variant="success" />
      </div>

      <h1 className="mt-4 text-2xl font-bold text-[var(--text-headings)]">
        Félicitations !
      </h1>
      <p className="mt-1 text-sm text-[var(--text-caption)]">
        Votre compte a été créé avec succès
      </p>

      <div className="w-full mt-6">
        <InfoCard variant="success">
          <div className="space-y-3">
            {confirmationItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--icon-success)] flex-shrink-0" />
                <p className="text-sm font-medium text-[var(--text-headings)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>

      <div className="w-full mt-8 space-y-4">
        <div>
          <p className="text-sm font-semibold text-[var(--text-headings)]">
            Prochaine étape
          </p>
          <p className="text-sm text-[var(--text-caption)] mt-1">
            Nous allons vous guider pour configurer votre espace de travail et découvrir
            les fonctionnalités principales
          </p>
        </div>

        <p className="text-sm text-[var(--text-headings)] text-center font-medium">
          Redirection automatique dans <strong className="text-[var(--text-branded-action)]">{seconds}</strong> secondes
        </p>

        <Button
          onClick={() => router.push('/tour')}
          variant="primary"
          className="w-full flex items-center justify-center gap-2"
        >
          Commencer maintenant
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
