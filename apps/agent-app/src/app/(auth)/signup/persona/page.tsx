'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogoBadge } from '@/components/auth'
import { User, Building2 } from 'lucide-react'
import { Button } from '@real-estate/ui/button'

const personas = [
  {
    id: 'solo',
    icon: User,
    title: 'Agent indépendant',
    description: 'Je travaille seul, sans agence',
    route: '/signup/profile-solo',
  },
  {
    id: 'agency',
    icon: Building2,
    title: 'Agence immobilière',
    description: "Je gère une agence avec une équipe d'agents",
    route: '/signup/profile-agency',
  },
] as const

export default function PersonaRoutingPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center">
      <LogoBadge />
      <h1 className="mt-4 text-2xl font-bold text-[var(--text-headings)] text-center">
        Quel est votre profil ?
      </h1>
      <p className="mt-1 text-sm text-[var(--text-caption)] text-center">
        Sélectionnez votre situation professionnelle
      </p>

      <div className="w-full mt-8 space-y-4">
        {personas.map((p) => (
          <Button
            key={p.id}
            onClick={() => router.push(p.route)}
            variant="outline"
            className="w-full flex items-start gap-4 p-5 rounded-xl text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--surface-neutral-action)] group-hover:bg-[var(--surface-branded-action)]/10 flex items-center justify-center flex-shrink-0">
              <p.icon className="w-5 h-5 text-[var(--text-caption)] group-hover:text-[var(--text-branded-action)]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--text-headings)]">
                {p.title}
              </p>
              <p className="text-sm text-[var(--text-caption)] mt-0.5">
                {p.description}
              </p>
            </div>
          </Button>
        ))}
      </div>

      <div className="mt-8 text-center space-y-2">
        <p className="text-xs text-[var(--text-caption)]">
          Vous n&apos;êtes pas sûr ?{' '}
          <span className="text-[var(--text-branded-action)]">
            Vous pourrez changer plus tard
          </span>
        </p>
        <Link
          href="/login"
          className="block text-xs text-[var(--text-caption)] hover:underline"
        >
          © RealAgent
        </Link>
      </div>
    </div>
  )
}
