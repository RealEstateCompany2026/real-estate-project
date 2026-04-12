'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { StepperDots } from '@/components/auth'
import { Button } from '@real-estate/ui/button'
import { TextField } from '@real-estate/ui/text-field'
import { InlineMessage } from '@real-estate/ui/inline-message'

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

      <h1 className="mt-7 text-2xl font-bold text-[var(--text-headings)]">
        Complétez les informations
      </h1>
      <p className="mt-2 text-sm text-[var(--text-caption)]">
        Ces informations seront utilisées pour configurer votre espace de travail.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-8">
        {/* Section Profil */}
        <div>
          <h2 className="text-lg font-bold text-[var(--text-headings)] mb-4">
            Votre profil
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <TextField
                type="text"
                value={firstName}
                onChange={setFirstName}
                required
              />
              <TextField
                type="text"
                value={lastName}
                onChange={setLastName}
                required
              />
            </div>
            <TextField
              type="tel"
              value={mobilePhone}
              onChange={setMobilePhone}
              placeholder="+33 6 00 00 00 00"
              required
            />
          </div>
        </div>

        {/* Section Agence */}
        <div>
          <h2 className="text-lg font-bold text-[var(--text-headings)] mb-4">
            Votre agence
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <TextField
                type="text"
                value={agencyName}
                onChange={setAgencyName}
                required
              />
              <TextField
                type="text"
                value={siret}
                onChange={(val) => setSiret(val.replace(/\D/g, '').slice(0, 14))}
                placeholder="14 chiffres"
                required
              />
            </div>
            <TextField
              type="text"
              value={address}
              onChange={setAddress}
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <TextField
                type="text"
                value={city}
                onChange={setCity}
                required
              />
              <TextField
                type="text"
                value={postalCode}
                onChange={(val) => setPostalCode(val.replace(/\D/g, '').slice(0, 5))}
                placeholder="75001"
                required
              />
            </div>
            <p className="text-xs text-[var(--text-caption)]">
              Ces informations apparaîtront sur vos documents et annonces officielles.
            </p>
          </div>
        </div>

        {error && (
          <InlineMessage type="error" message={error} />
        )}

        <div className="flex gap-4">
          <Button
            type="button"
            onClick={() => router.back()}
            variant="outline"
            className="flex-1"
          >
            Retour
          </Button>
          <Button
            type="submit"
            disabled={!isValid || isLoading}
            variant="primary"
            className="flex-1"
          >
            {isLoading ? 'Enregistrement…' : 'Continuer'}
          </Button>
        </div>
      </form>
    </div>
  )
}
