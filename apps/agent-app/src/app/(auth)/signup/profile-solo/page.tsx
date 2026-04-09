'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { StepperDots } from '@/components/auth'
import { profileSoloSchema } from '@/lib/validations/auth'

export default function ProfileSoloPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobilePhone, setMobilePhone] = useState('')
  const [rsacNumber, setRsacNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const supabase = createClient()

  const isValid = profileSoloSchema.safeParse({
    firstName, lastName, mobilePhone, rsacNumber,
  }).success

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid) return

    setIsLoading(true)
    setError(null)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setError('Session expirée. Veuillez vous reconnecter.')
      setIsLoading(false)
      return
    }

    // Create a solo organization for this agent
    const { data: org, error: orgError } = await supabase
      .from('Organization')
      .insert({ name: `${firstName} ${lastName}`, email: user.email })
      .select()
      .single()

    if (orgError) {
      setError(orgError.message)
      setIsLoading(false)
      return
    }

    // Update agent profile
    const { error: agentError } = await supabase
      .from('Agent')
      .update({
        firstName,
        lastName,
        mobilePhone,
        rsacNumber,
        organizationId: org.id,
        orgRole: 'ADMIN',
        onboardingStep: 'PROFILE',
      })
      .eq('userId', user.id)

    if (agentError) {
      setError(agentError.message)
      setIsLoading(false)
      return
    }

    router.push('/signup/confirmation')
  }

  return (
    <div className="flex flex-col">
      <StepperDots steps={3} currentStep={0} />

      <h1 className="mt-7 text-2xl font-bold text-[var(--color-anthracite-textes)]">
        Complétez votre profil
      </h1>
      <p className="mt-2 text-sm text-[var(--color-grey-bold-textes)]">
        Ces informations apparaîtront sur vos documents et annonces officielles.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
              Prénom *
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
              Nom *
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
            Téléphone mobile *
          </label>
          <input
            type="tel"
            value={mobilePhone}
            onChange={(e) => setMobilePhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
            placeholder="+33 6 00 00 00 00"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
            N° carte professionnelle (T) *
          </label>
          <input
            type="text"
            value={rsacNumber}
            onChange={(e) => setRsacNumber(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
            placeholder="CPI XXXX XXXX XXXX"
            required
          />
          <p className="mt-1.5 text-xs text-[var(--color-grey-bold-textes)]">
            Votre carte professionnelle délivrée par la CCI
          </p>
        </div>

        <p className="text-xs text-[var(--color-grey-bold-textes)]">
          Ces informations apparaîtront sur vos documents et annonces officielles.
        </p>

        {error && (
          <div className="bg-[var(--color-soft-red-background)] text-[var(--color-red-couleur-fonctionnelle)] text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <div className="flex gap-4 pt-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex-1 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] text-[var(--color-anthracite-textes)] font-semibold text-sm hover:bg-[var(--color-grey-ultra-background)] transition-colors"
          >
            Retour
          </button>
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className="flex-1 py-3 rounded-xl bg-[var(--color-indigo-couleur-fonctionnelle)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Enregistrement…' : 'Continuer'}
          </button>
        </div>
      </form>
    </div>
  )
}
