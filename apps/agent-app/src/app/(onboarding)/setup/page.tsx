'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  User,
  Building2,
  FileText,
  Settings,
  Check,
  ChevronRight,
  ChevronLeft,
  Upload,
} from 'lucide-react'

const setupSteps = [
  { icon: User, label: 'Profil professionnel', description: 'Complétez vos informations' },
  { icon: Building2, label: 'Organisation', description: 'Détails de votre agence' },
  { icon: FileText, label: 'Documents légaux', description: 'Assurance RCP, documents' },
  { icon: Settings, label: 'Paramètres', description: 'Langue, notifications' },
]

export default function OnboardingSetupPage() {
  const [step, setStep] = useState(-1) // -1 = landing, 0-3 = steps, 4 = complete
  const router = useRouter()
  const supabase = createClient()

  // Form states for each step
  const [profileData, setProfileData] = useState({
    firstName: '', lastName: '', email: '', mobilePhone: '', rsacNumber: '',
  })
  const [orgData, setOrgData] = useState({
    name: '', email: '', phone: '', address: '', siret: '',
  })
  const [docsUploaded, setDocsUploaded] = useState(false)
  const [settings, setSettings] = useState({
    language: 'fr',
    timezone: 'Europe/Paris',
    emailNotifications: true,
    pushNotifications: true,
  })
  const [isLoading, setIsLoading] = useState(false)

  async function handleFinish() {
    setIsLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase
        .from('Agent')
        .update({ onboardingStep: 'DONE', onboardingCompleted: true })
        .eq('userId', user.id)
    }
    router.push('/dashboard')
  }

  /* ─── OBS-00 : Landing ─── */
  if (step === -1) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[var(--color-anthracite-textes)]">
          Configurez votre espace
        </h1>
        <p className="mt-3 text-[var(--color-grey-bold-textes)] text-center max-w-md">
          4 étapes rapides pour personnaliser votre CRM et être opérationnel.
        </p>

        <div className="w-full mt-10 space-y-3">
          {setupSteps.map((s, i) => (
            <div
              key={s.label}
              className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-grey-light-couleur-primaire)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-grey-ultra-background)] flex items-center justify-center text-[var(--color-grey-bold-textes)] flex-shrink-0">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--color-anthracite-textes)]">
                  Étape {i + 1} — {s.label}
                </p>
                <p className="text-xs text-[var(--color-grey-bold-textes)]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setStep(0)}
          className="mt-8 w-full py-3 rounded-xl bg-[var(--color-indigo-couleur-fonctionnelle)] text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Commencer
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    )
  }

  /* ─── OBS-05 : Complete ─── */
  if (step >= 4) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--color-green-couleur-fonctionnelle)] flex items-center justify-center">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-[var(--color-anthracite-textes)]">
          Configuration terminée !
        </h1>
        <p className="mt-3 text-[var(--color-grey-bold-textes)] max-w-md">
          Votre espace de travail est prêt. Vous pouvez maintenant importer vos données
          ou accéder directement au dashboard.
        </p>

        <div className="flex gap-4 mt-10 w-full">
          <button
            type="button"
            onClick={() => router.push('/import')}
            className="flex-1 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] text-[var(--color-anthracite-textes)] font-semibold text-sm hover:bg-[var(--color-grey-ultra-background)] transition-colors flex items-center justify-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Importer ma BDD
          </button>
          <button
            type="button"
            onClick={handleFinish}
            disabled={isLoading}
            className="flex-1 py-3 rounded-xl bg-[var(--color-indigo-couleur-fonctionnelle)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
          >
            Accéder au dashboard
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  /* ─── Steps stepper ─── */
  const stepperBar = (
    <div className="flex items-center gap-1 mb-8">
      {setupSteps.map((s, i) => (
        <div key={s.label} className="flex-1 flex flex-col items-center gap-2">
          <div
            className={`h-1.5 w-full rounded-full ${
              i <= step
                ? 'bg-[var(--color-indigo-couleur-fonctionnelle)]'
                : 'bg-[var(--color-grey-light-couleur-primaire)]'
            }`}
          />
          <span className={`text-xs ${i === step ? 'text-[var(--color-anthracite-textes)] font-medium' : 'text-[var(--color-grey-bold-textes)]'}`}>
            {s.label}
          </span>
        </div>
      ))}
    </div>
  )

  const navButtons = (
    <div className="flex gap-4 mt-8">
      <button
        type="button"
        onClick={() => setStep(step - 1)}
        className="flex-1 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] text-[var(--color-anthracite-textes)] font-semibold text-sm hover:bg-[var(--color-grey-ultra-background)] transition-colors flex items-center justify-center gap-2"
      >
        <ChevronLeft className="w-4 h-4" />
        Retour
      </button>
      <button
        type="button"
        onClick={() => setStep(step + 1)}
        className="flex-1 py-3 rounded-xl bg-[var(--color-indigo-couleur-fonctionnelle)] text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        {step === 3 ? 'Terminer' : 'Suivant'}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)] text-sm'
  const labelCls =
    'block text-sm font-medium text-[var(--color-anthracite-textes)] mb-1.5'

  /* ─── OBS-01 : Profil professionnel ─── */
  if (step === 0) {
    return (
      <div>
        {stepperBar}
        <h2 className="text-xl font-bold text-[var(--color-anthracite-textes)]">
          Profil professionnel
        </h2>
        <p className="mt-1 text-sm text-[var(--color-grey-bold-textes)]">
          Vérifiez et complétez vos informations personnelles.
        </p>
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Prénom</label>
              <input className={inputCls} value={profileData.firstName} onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })} />
            </div>
            <div>
              <label className={labelCls}>Nom</label>
              <input className={inputCls} value={profileData.lastName} onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Email professionnel</label>
            <input type="email" className={inputCls} value={profileData.email} onChange={(e) => setProfileData({ ...profileData, email: e.target.value })} />
          </div>
          <div>
            <label className={labelCls}>Téléphone mobile</label>
            <input type="tel" className={inputCls} value={profileData.mobilePhone} onChange={(e) => setProfileData({ ...profileData, mobilePhone: e.target.value })} placeholder="+33 6 00 00 00 00" />
          </div>
          <div>
            <label className={labelCls}>N° carte professionnelle (T)</label>
            <input className={inputCls} value={profileData.rsacNumber} onChange={(e) => setProfileData({ ...profileData, rsacNumber: e.target.value })} placeholder="CPI XXXX XXXX XXXX" />
          </div>
        </div>
        {navButtons}
      </div>
    )
  }

  /* ─── OBS-02 : Organisation ─── */
  if (step === 1) {
    return (
      <div>
        {stepperBar}
        <h2 className="text-xl font-bold text-[var(--color-anthracite-textes)]">
          Organisation
        </h2>
        <p className="mt-1 text-sm text-[var(--color-grey-bold-textes)]">
          Renseignez les coordonnées de votre agence.
        </p>
        <div className="mt-6 space-y-4">
          <div>
            <label className={labelCls}>Nom de l&apos;agence</label>
            <input className={inputCls} value={orgData.name} onChange={(e) => setOrgData({ ...orgData, name: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Email agence</label>
              <input type="email" className={inputCls} value={orgData.email} onChange={(e) => setOrgData({ ...orgData, email: e.target.value })} />
            </div>
            <div>
              <label className={labelCls}>Téléphone</label>
              <input type="tel" className={inputCls} value={orgData.phone} onChange={(e) => setOrgData({ ...orgData, phone: e.target.value })} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Adresse</label>
            <input className={inputCls} value={orgData.address} onChange={(e) => setOrgData({ ...orgData, address: e.target.value })} />
          </div>
          <div>
            <label className={labelCls}>SIRET</label>
            <input className={inputCls} value={orgData.siret} onChange={(e) => setOrgData({ ...orgData, siret: e.target.value.replace(/\D/g, '').slice(0, 14) })} placeholder="14 chiffres" />
          </div>
        </div>
        {navButtons}
      </div>
    )
  }

  /* ─── OBS-03 : Documents légaux ─── */
  if (step === 2) {
    return (
      <div>
        {stepperBar}
        <h2 className="text-xl font-bold text-[var(--color-anthracite-textes)]">
          Documents légaux
        </h2>
        <p className="mt-1 text-sm text-[var(--color-grey-bold-textes)]">
          Téléversez vos documents réglementaires.
        </p>
        <div className="mt-6 space-y-4">
          <div
            className="border-2 border-dashed border-[var(--color-grey-light-couleur-primaire)] rounded-xl p-8 text-center cursor-pointer hover:border-[var(--color-indigo-couleur-fonctionnelle)] transition-colors"
            onClick={() => setDocsUploaded(true)}
          >
            {docsUploaded ? (
              <div className="flex flex-col items-center gap-2">
                <Check className="w-8 h-8 text-[var(--color-green-couleur-fonctionnelle)]" />
                <p className="text-sm font-medium text-[var(--color-anthracite-textes)]">
                  Document téléversé
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Upload className="w-8 h-8 text-[var(--color-grey-bold-textes)]" />
                <p className="text-sm font-medium text-[var(--color-anthracite-textes)]">
                  Assurance RCP
                </p>
                <p className="text-xs text-[var(--color-grey-bold-textes)]">
                  Cliquez ou glissez-déposez votre fichier (PDF, JPG, PNG — max 10 Mo)
                </p>
              </div>
            )}
          </div>
          <p className="text-xs text-[var(--color-grey-bold-textes)]">
            Vous pourrez ajouter d&apos;autres documents plus tard depuis la section Documents.
          </p>
        </div>
        {navButtons}
      </div>
    )
  }

  /* ─── OBS-04 : Paramètres ─── */
  return (
    <div>
      {stepperBar}
      <h2 className="text-xl font-bold text-[var(--color-anthracite-textes)]">
        Paramètres
      </h2>
      <p className="mt-1 text-sm text-[var(--color-grey-bold-textes)]">
        Personnalisez votre expérience.
      </p>
      <div className="mt-6 space-y-5">
        <div>
          <label className={labelCls}>Langue</label>
          <select
            className={inputCls}
            value={settings.language}
            onChange={(e) => setSettings({ ...settings, language: e.target.value })}
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Fuseau horaire</label>
          <select
            className={inputCls}
            value={settings.timezone}
            onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
          >
            <option value="Europe/Paris">Europe/Paris (UTC+1)</option>
            <option value="Europe/London">Europe/London (UTC+0)</option>
            <option value="America/Martinique">Martinique (UTC-4)</option>
            <option value="Indian/Reunion">La Réunion (UTC+4)</option>
          </select>
        </div>

        <div className="space-y-3 pt-2">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm text-[var(--color-anthracite-textes)]">
              Notifications par email
            </span>
            <button
              type="button"
              onClick={() => setSettings({ ...settings, emailNotifications: !settings.emailNotifications })}
              className={`w-11 h-6 rounded-full transition-colors ${settings.emailNotifications ? 'bg-[var(--color-indigo-couleur-fonctionnelle)]' : 'bg-[var(--color-grey-light-couleur-primaire)]'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${settings.emailNotifications ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm text-[var(--color-anthracite-textes)]">
              Notifications push
            </span>
            <button
              type="button"
              onClick={() => setSettings({ ...settings, pushNotifications: !settings.pushNotifications })}
              className={`w-11 h-6 rounded-full transition-colors ${settings.pushNotifications ? 'bg-[var(--color-indigo-couleur-fonctionnelle)]' : 'bg-[var(--color-grey-light-couleur-primaire)]'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${settings.pushNotifications ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </label>
        </div>
      </div>
      {navButtons}
    </div>
  )
}
