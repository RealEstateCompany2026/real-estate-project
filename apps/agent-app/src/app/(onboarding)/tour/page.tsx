'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogoBadge } from '@/components/auth'
import {
  LayoutDashboard,
  Compass,
  Sparkles,
  Upload,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Check,
} from 'lucide-react'

/* ─── OBT-00 Welcome ─── */
const welcomeFeatures = [
  { icon: LayoutDashboard, label: 'Tableau de bord intelligent' },
  { icon: Compass, label: 'Navigation intuitive' },
  { icon: Sparkles, label: 'Suggestions IA' },
  { icon: Upload, label: 'Import de données' },
  { icon: HelpCircle, label: 'Aide & support' },
]

/* ─── OBT-01→05 Feature slides ─── */
const slides = [
  {
    title: 'Votre tableau de bord',
    description:
      'Visualisez vos KPIs, vos affaires en cours et les actions prioritaires en un coup d\'œil. Le dashboard s\'adapte à votre activité.',
    icon: LayoutDashboard,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Navigation simplifiée',
    description:
      'Accédez à vos clients, biens, affaires et documents en un clic depuis le menu latéral. Tout est à portée de main.',
    icon: Compass,
    color: 'bg-purple-50 text-[var(--text-branded-action)]',
  },
  {
    title: 'Intelligence artificielle',
    description:
      'RealAgent analyse vos données et vous suggère les meilleures actions : relances, opportunités de mandat, alertes DPE...',
    icon: Sparkles,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Importez vos données',
    description:
      'Transférez votre base de données existante en quelques minutes. Clients, biens, documents — tout est importé proprement.',
    icon: Upload,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Aide à tout moment',
    description:
      'Besoin d\'aide ? Accédez à la documentation, au support, ou laissez-vous guider par nos tutoriels intégrés.',
    icon: HelpCircle,
    color: 'bg-rose-50 text-rose-600',
  },
]

export default function OnboardingTourPage() {
  const [step, setStep] = useState(-1) // -1 = welcome, 0-4 = slides, 5 = complete
  const router = useRouter()

  const totalSlides = slides.length

  /* ─── OBT-00 : Welcome ─── */
  if (step === -1) {
    return (
      <div className="flex flex-col items-center text-center">
        <LogoBadge />
        <h1 className="mt-6 text-3xl font-bold text-[var(--text-headings)]">
          Bienvenue sur RealAgent
        </h1>
        <p className="mt-3 text-[var(--text-caption)] max-w-md">
          Découvrez en quelques étapes comment tirer le meilleur de votre CRM immobilier.
        </p>

        <div className="mt-10 w-full max-w-sm space-y-3">
          {welcomeFeatures.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-4 p-4 rounded-xl bg-[var(--surface-neutral-action)]"
            >
              <f.icon className="w-5 h-5 text-[var(--surface-branded-action)] flex-shrink-0" />
              <span className="text-sm text-[var(--text-headings)]">{f.label}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setStep(0)}
          className="mt-10 w-full max-w-sm py-3 rounded-xl bg-[var(--surface-branded-action)] text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Démarrer le tour
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => router.push('/setup')}
          className="mt-3 text-sm text-[var(--text-caption)] hover:underline"
        >
          Passer le tour
        </button>
      </div>
    )
  }

  /* ─── OBT-06 : Complete ─── */
  if (step >= totalSlides) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--icon-success)] flex items-center justify-center">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-[var(--text-headings)]">
          Tour terminé !
        </h1>
        <p className="mt-3 text-[var(--text-caption)] max-w-md">
          Vous êtes prêt à configurer votre espace de travail. Commençons par quelques
          réglages essentiels.
        </p>

        <button
          type="button"
          onClick={() => router.push('/setup')}
          className="mt-10 w-full max-w-sm py-3 rounded-xl bg-[var(--surface-branded-action)] text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Configurer mon espace
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    )
  }

  /* ─── OBT-01→05 : Feature slides ─── */
  const slide = slides[step]
  const Icon = slide.icon

  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon */}
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${slide.color}`}>
        <Icon className="w-10 h-10" />
      </div>

      <h1 className="mt-8 text-2xl font-bold text-[var(--text-headings)]">
        {slide.title}
      </h1>
      <p className="mt-3 text-[var(--text-caption)] max-w-md leading-relaxed">
        {slide.description}
      </p>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-10">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === step
                ? 'w-6 bg-[var(--surface-branded-action)]'
                : 'w-2 bg-[var(--border-default)]'
            }`}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 mt-10 w-full max-w-sm">
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="flex-1 py-3 rounded-xl border border-[var(--border-default)] text-[var(--text-headings)] font-semibold text-sm hover:bg-[var(--surface-neutral-action)] transition-colors flex items-center justify-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Précédent
        </button>
        <button
          type="button"
          onClick={() => setStep(step + 1)}
          className="flex-1 py-3 rounded-xl bg-[var(--surface-branded-action)] text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          {step === totalSlides - 1 ? 'Terminer' : 'Suivant'}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <button
        type="button"
        onClick={() => router.push('/setup')}
        className="mt-4 text-sm text-[var(--text-caption)] hover:underline"
      >
        Passer le tour
      </button>
    </div>
  )
}
