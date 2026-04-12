'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { StepperDots } from '@/components/auth'
import { profileSoloSchema } from '@/lib/validations/auth'
import { Button } from '@real-estate/ui/button'
import { TextField } from '@real-estate/ui/text-field'
import { InlineMessage } from '@real-estate/ui/inline-message'

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

      <h1 className="mt-7 text-2xl font-bold text-[var(--text-headings)]">
        Complétez votre profil
      </h1>
      <p className="mt-2 text-sm text-[var(--text-caption)]">
        Ces informations apparaîtront sur vos documents et annonces officielles.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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

        <div>
          <TextField
            type="text"
            value={rsacNumber}
            onChange={setRsacNumber}
            placeholder="CPI XXXX XXXX XXXX"
            required
          />
          <p className="mt-1.5 text-xs text-[var(--text-caption)]">
            Votre carte professionnelle délivrée par la CCI
          </p>
        </div>

        <p className="text-xs text-[var(--text-caption)]">
          Ces informations apparaîtront sur vos documents et annonces officielles.
        </p>

        {error && (
          <InlineMessage type="error" message={error} />
        )}

        <div className="flex gap-4 pt-2">
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
