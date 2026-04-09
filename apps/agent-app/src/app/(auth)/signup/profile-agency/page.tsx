'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { StepperDots } from '@/components/auth'

export default function ProfileAgencyPage() {
  // Agent fields
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobilePhone, setMobilePhone] = useState('')

  // Organization fields
  const [agencyName, setAgencyName] = useState('')
  const [siret, setSiret] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const supabase = createClient()

  const isValid =
    firstName.length > 0 &&
    lastName.length > 0 &&
    mobilePhone.length >= 10 &&
    agencyName.length > 0 &&
    siret.length === 14 &&
    address.length > 0 &&
    city.length > 0 &&
    postalCode.length === 5

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid) return

    setIsLoading(true)
    setError(null)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setError('Session expirée.')
      setIsLoading(false)
      return
    }

    // Create organization
    const { data: org, error: orgError } = await supabase
      .from('Organization')
      .insert({
        name: agencyName,
        siret,
        address,
        city,
        postalCode,
        email: user.email,
      })
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

    router.push('/signup/team')
  }

  return (
    <div className="flex flex-col">
      <StepperDots steps={3} currentStep={0} />

      <h1 className="mt-7 text-2xl font-bold text-[var(--color-anthracite-textes)]">
        Complétez les informations
      </h1>
      <p className="mt-2 text-sm text-[var(--color-grey-bold-textes)]">
        Ces informations seront utilisées pour configurer votre espace de travail.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-8">
        {/* Section Profil */}
        <div>
          <h2 className="text-lg font-bold text-[var(--color-anthracite-textes)] mb-4">
            Votre profil
          </h2>
          <div className="space-y-4">
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
          </div>
        </div>

        {/* Section Agence */}
        <div>
          <h2 className="text-lg font-bold text-[var(--color-anthracite-textes)] mb-4">
            Votre agence
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
                  Nom de l&apos;agence *
                </label>
                <input
                  type="text"
                  value={agencyName}
                  onChange={(e) => setAgencyName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
                  SIRET *
                </label>
                <input
                  type="text"
                  value={siret}
                  onChange={(e) => setSiret(e.target.value.replace(/\D/g, '').slice(0, 14))}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
                  placeholder="14 chiffres"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
                Adresse *
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
                  Ville *
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
                  Code postal *
                </label>
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
                  placeholder="75001"
                  required
                />
              </div>
            </div>
            <p className="text-xs text-[var(--color-grey-bold-textes)]">
              Ces informations apparaîtront sur vos documents et annonces officielles.
            </p>
          </div>
        </div>

        {error && (
          <div className="bg-[var(--color-soft-red-background)] text-[var(--color-red-couleur-fonctionnelle)] text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <div className="flex gap-4">
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
