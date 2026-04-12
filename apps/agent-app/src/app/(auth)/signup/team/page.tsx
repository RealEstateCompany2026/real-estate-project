'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { StepperDots, InfoCard } from '@/components/auth'
import { X } from 'lucide-react'
import { Button } from '@real-estate/ui/button'
import { TextField } from '@real-estate/ui/text-field'

export default function TeamInvitationPage() {
  const [email, setEmail] = useState('')
  const [invitedEmails, setInvitedEmails] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  function handleAddMember() {
    if (!email || invitedEmails.includes(email)) return
    setInvitedEmails([...invitedEmails, email])
    setEmail('')
  }

  function handleRemoveMember(emailToRemove: string) {
    setInvitedEmails(invitedEmails.filter((e) => e !== emailToRemove))
  }

  async function handleContinue() {
    setIsLoading(true)

    // In production, each email would trigger an Edge Function call
    // to supabaseAdmin.auth.admin.inviteUserByEmail()
    // For now, we skip and go to confirmation
    // TODO: Implement Edge Function for invitations

    router.push('/signup/confirmation')
  }

  return (
    <div className="flex flex-col">
      <StepperDots steps={3} currentStep={1} />

      <h1 className="mt-7 text-2xl font-bold text-[var(--text-headings)]">
        Invitez votre équipe
      </h1>
      <p className="mt-2 text-sm text-[var(--text-caption)]">
        Ajoutez les membres de votre équipe. Ils recevront une invitation par email.
      </p>

      <div className="mt-8 space-y-4">
        <TextField
          type="email"
          value={email}
          onChange={setEmail}
          onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddMember())}
          placeholder="collegue@agence.com"
        />

        <Button
          type="button"
          onClick={handleAddMember}
          disabled={!email}
          variant="primary"
          className="w-full"
        >
          + Ajouter un collaborateur
        </Button>

        {/* Invited list */}
        {invitedEmails.length > 0 && (
          <div className="space-y-2">
            {invitedEmails.map((e) => (
              <div
                key={e}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[var(--surface-neutral-action)] text-sm"
              >
                <span className="text-[var(--text-headings)]">{e}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveMember(e)}
                  className="text-[var(--text-caption)] hover:text-[var(--text-error)]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <InfoCard>
          <p className="text-sm font-semibold text-[var(--text-headings)] mb-1">
            Comment ça marche ?
          </p>
          <p className="text-sm text-[var(--text-caption)]">
            Chaque collaborateur recevra un email d&apos;invitation avec un lien pour
            créer son compte et rejoindre votre espace de travail.
          </p>
        </InfoCard>
      </div>

      <div className="flex gap-4 mt-8">
        <Button
          type="button"
          onClick={() => router.push('/signup/confirmation')}
          variant="outline"
          className="flex-1"
        >
          Passer cette étape
        </Button>
        <Button
          type="button"
          onClick={handleContinue}
          disabled={invitedEmails.length === 0 || isLoading}
          variant="primary"
          className="flex-1"
        >
          {isLoading ? 'Envoi…' : 'Continuer'}
        </Button>
      </div>
    </div>
  )
}
