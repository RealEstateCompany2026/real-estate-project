'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { StepperDots, InfoCard } from '@/components/auth'
import { X } from 'lucide-react'

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

      <h1 className="mt-7 text-2xl font-bold text-[var(--color-anthracite-textes)]">
        Invitez votre équipe
      </h1>
      <p className="mt-2 text-sm text-[var(--color-grey-bold-textes)]">
        Ajoutez les membres de votre équipe. Ils recevront une invitation par email.
      </p>

      <div className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5">
            Email du collaborateur
          </label>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddMember())}
              className="flex-1 px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm"
              placeholder="collegue@agence.com"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleAddMember}
          disabled={!email}
          className="w-full py-3 rounded-xl bg-[var(--color-indigo-couleur-fonctionnelle)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          + Ajouter un collaborateur
        </button>

        {/* Invited list */}
        {invitedEmails.length > 0 && (
          <div className="space-y-2">
            {invitedEmails.map((e) => (
              <div
                key={e}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[var(--color-grey-ultra-background)] text-sm"
              >
                <span className="text-[var(--color-anthracite-textes)]">{e}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveMember(e)}
                  className="text-[var(--color-grey-bold-textes)] hover:text-[var(--color-red-couleur-fonctionnelle)]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <InfoCard>
          <p className="text-sm font-semibold text-[var(--color-anthracite-textes)] mb-1">
            Comment ça marche ?
          </p>
          <p className="text-sm text-[var(--color-grey-bold-textes)]">
            Chaque collaborateur recevra un email d&apos;invitation avec un lien pour
            créer son compte et rejoindre votre espace de travail.
          </p>
        </InfoCard>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          type="button"
          onClick={() => router.push('/signup/confirmation')}
          className="flex-1 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] text-[var(--color-anthracite-textes)] font-semibold text-sm hover:bg-[var(--color-grey-ultra-background)] transition-colors"
        >
          Passer cette étape
        </button>
        <button
          type="button"
          onClick={handleContinue}
          disabled={invitedEmails.length === 0 || isLoading}
          className="flex-1 py-3 rounded-xl bg-[var(--color-indigo-couleur-fonctionnelle)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Envoi…' : 'Continuer'}
        </button>
      </div>
    </div>
  )
}
