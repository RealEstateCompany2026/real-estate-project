'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@real-estate/ui/button'
import { TextFieldOutlined } from '@real-estate/ui/text-field-outlined'
import { Switch } from '@real-estate/ui/switch'
import { FileUpload } from '@real-estate/ui/file-upload'
import { Stepper } from '@real-estate/ui/stepper'
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
  const [docsFile, setDocsFile] = useState<File | null>(null)

  async function handleFinish() {
    setIsLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      // Resolve User.id from auth user (3-identity architecture)
      const { data: appUser } = await supabase
        .from('User')
        .select('id')
        .eq('supabase_id', user.id)
        .single()
      if (appUser) {
        await supabase
          .from('Agent')
          .update({ onboardingStep: 'DONE', onboardingCompleted: true })
          .eq('userId', appUser.id)
      }
    }
    router.push('/dashboard')
  }

  /* ─── OBS-00 : Landing ─── */
  if (step === -1) {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[var(--text-headings)]">
          Configurez votre espace
        </h1>
        <p className="mt-3 text-[var(--text-caption)] text-center max-w-md">
          4 étapes rapides pour personnaliser votre CRM et être opérationnel.
        </p>

        <div className="w-full mt-10 space-y-3">
          {setupSteps.map((s, i) => (
            <div
              key={s.label}
              className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border-default)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-neutral-action)] flex items-center justify-center text-[var(--text-caption)] flex-shrink-0">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--text-headings)]">
                  Étape {i + 1} — {s.label}
                </p>
                <p className="text-xs text-[var(--text-caption)]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="primary"
          onClick={() => setStep(0)}
          className="mt-8 w-full flex items-center justify-center gap-2"
        >
          Commencer
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    )
  }

  /* ─── OBS-05 : Complete ─── */
  if (step >= 4) {
    return (
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--icon-success)] flex items-center justify-center">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-[var(--text-headings)]">
          Configuration terminée !
        </h1>
        <p className="mt-3 text-[var(--text-caption)] max-w-md">
          Votre espace de travail est prêt. Vous pouvez maintenant importer vos données
          ou accéder directement au dashboard.
        </p>

        <div className="flex gap-4 mt-10 w-full">
          <Button
            variant="outline"
            onClick={() => router.push('/import')}
            className="flex-1 flex items-center justify-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Importer ma BDD
          </Button>
          <Button
            variant="primary"
            onClick={handleFinish}
            disabled={isLoading}
            className="flex-1 flex items-center justify-center gap-2"
          >
            Accéder au dashboard
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    )
  }

  /* ─── Steps stepper ─── */
  const stepperBar = (
    <Stepper
      steps={setupSteps.map(s => s.label)}
      currentStep={step}
      variant="default"
      className="mb-8"
    />
  )

  const navButtons = (
    <div className="flex gap-4 mt-8">
      <Button
        variant="outline"
        onClick={() => setStep(step - 1)}
        className="flex-1 flex items-center justify-center gap-2"
      >
        <ChevronLeft className="w-4 h-4" />
        Retour
      </Button>
      <Button
        variant="primary"
        onClick={() => setStep(step + 1)}
        className="flex-1 flex items-center justify-center gap-2"
      >
        {step === 3 ? 'Terminer' : 'Suivant'}
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  )


  /* ─── OBS-01 : Profil professionnel ─── */
  if (step === 0) {
    return (
      <div>
        {stepperBar}
        <h2 className="text-xl font-bold text-[var(--text-headings)]">
          Profil professionnel
        </h2>
        <p className="mt-1 text-sm text-[var(--text-caption)]">
          Vérifiez et complétez vos informations personnelles.
        </p>
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextFieldOutlined
              placeholder="Prénom"
              value={profileData.firstName}
              onChange={(value) => setProfileData({ ...profileData, firstName: value })}
            />
            <TextFieldOutlined
              placeholder="Nom"
              value={profileData.lastName}
              onChange={(value) => setProfileData({ ...profileData, lastName: value })}
            />
          </div>
          <TextFieldOutlined
            type="email"
            placeholder="Email professionnel"
            value={profileData.email}
            onChange={(value) => setProfileData({ ...profileData, email: value })}
          />
          <TextFieldOutlined
            type="tel"
            placeholder="+33 6 00 00 00 00"
            value={profileData.mobilePhone}
            onChange={(value) => setProfileData({ ...profileData, mobilePhone: value })}
          />
          <TextFieldOutlined
            placeholder="CPI XXXX XXXX XXXX"
            value={profileData.rsacNumber}
            onChange={(value) => setProfileData({ ...profileData, rsacNumber: value })}
          />
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
        <h2 className="text-xl font-bold text-[var(--text-headings)]">
          Organisation
        </h2>
        <p className="mt-1 text-sm text-[var(--text-caption)]">
          Renseignez les coordonnées de votre agence.
        </p>
        <div className="mt-6 space-y-4">
          <TextFieldOutlined
            placeholder="Nom de l'agence"
            value={orgData.name}
            onChange={(value) => setOrgData({ ...orgData, name: value })}
          />
          <div className="grid grid-cols-2 gap-4">
            <TextFieldOutlined
              type="email"
              placeholder="Email agence"
              value={orgData.email}
              onChange={(value) => setOrgData({ ...orgData, email: value })}
            />
            <TextFieldOutlined
              type="tel"
              placeholder="Téléphone"
              value={orgData.phone}
              onChange={(value) => setOrgData({ ...orgData, phone: value })}
            />
          </div>
          <TextFieldOutlined
            placeholder="Adresse"
            value={orgData.address}
            onChange={(value) => setOrgData({ ...orgData, address: value })}
          />
          <TextFieldOutlined
            placeholder="14 chiffres"
            value={orgData.siret}
            onChange={(value) => setOrgData({ ...orgData, siret: value.replace(/\D/g, '').slice(0, 14) })}
          />
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
        <h2 className="text-xl font-bold text-[var(--text-headings)]">
          Documents légaux
        </h2>
        <p className="mt-1 text-sm text-[var(--text-caption)]">
          Téléversez vos documents réglementaires.
        </p>
        <div className="mt-6 space-y-4">
          <FileUpload
            accept=".pdf,.jpg,.png"
            maxSize={10 * 1024 * 1024}
            selectedFile={docsFile}
            onFileSelect={(file) => setDocsFile(file)}
            onFileRemove={() => setDocsFile(null)}
          />
          <p className="text-xs text-[var(--text-caption)]">
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
      <h2 className="text-xl font-bold text-[var(--text-headings)]">
        Paramètres
      </h2>
      <p className="mt-1 text-sm text-[var(--text-caption)]">
        Personnalisez votre expérience.
      </p>
      <div className="mt-6 space-y-5">
        <div>
          <select
            className="w-full px-4 py-3 rounded-xl border border-[var(--border-default)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--surface-branded-action)] text-sm"
            value={settings.language}
            onChange={(e) => setSettings({ ...settings, language: e.target.value })}
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
        <div>
          <select
            className="w-full px-4 py-3 rounded-xl border border-[var(--border-default)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--surface-branded-action)] text-sm"
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
            <span className="text-sm text-[var(--text-headings)]">
              Notifications par email
            </span>
            <Switch
              checked={settings.emailNotifications}
              onChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
            />
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm text-[var(--text-headings)]">
              Notifications push
            </span>
            <Switch
              checked={settings.pushNotifications}
              onChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
            />
          </label>
        </div>
      </div>
      {navButtons}
    </div>
  )
}
