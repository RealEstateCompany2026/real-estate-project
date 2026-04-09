'use client'

import { useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  Users,
  Home,
  FileText,
  Upload,
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
  X,
  Clock,
  ArrowRight,
} from 'lucide-react'

/* ─── Types ─── */
type ImportType = 'clients' | 'properties' | 'documents' | null
type ImportStep = 'choose' | 'upload' | 'mapping' | 'preview' | 'importing' | 'result' | 'history'

interface ColumnMapping {
  source: string
  target: string
}

const importTypes = [
  {
    id: 'clients' as const,
    icon: Users,
    title: 'Clients',
    description: 'Contacts, prospects, propriétaires, acquéreurs',
  },
  {
    id: 'properties' as const,
    icon: Home,
    title: 'Biens immobiliers',
    description: 'Appartements, maisons, terrains, locaux',
  },
  {
    id: 'documents' as const,
    icon: FileText,
    title: 'Documents',
    description: 'Mandats, compromis, diagnostics',
  },
]

const clientColumns = [
  'Email', 'Prénom', 'Nom', 'Téléphone', 'Adresse', 'Ville',
  'Code postal', 'Type', 'Statut', 'Notes',
]

const propertyColumns = [
  'Adresse', 'Ville', 'Code postal', 'Type de bien', 'Surface',
  'Nombre de pièces', 'Prix', 'Statut', 'Description', 'DPE',
]

export default function ImportPage() {
  const [step, setStep] = useState<ImportStep>('choose')
  const [importType, setImportType] = useState<ImportType>(null)
  const [file, setFile] = useState<File | null>(null)
  const [columns, setColumns] = useState<string[]>([])
  const [mappings, setMappings] = useState<ColumnMapping[]>([])
  const [importProgress, setImportProgress] = useState(0)
  const [importResult, setImportResult] = useState({ success: 0, errors: 0, skipped: 0 })
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const supabase = createClient()

  const targetColumns = importType === 'clients' ? clientColumns : propertyColumns

  function handleFileSelect(f: File) {
    setFile(f)
    // Simulate parsing columns from CSV/XLSX
    const fakeColumns = importType === 'clients'
      ? ['email', 'first_name', 'last_name', 'phone', 'address', 'city', 'zip', 'type', 'status', 'notes']
      : ['address', 'city', 'zip', 'property_type', 'area', 'rooms', 'price', 'status', 'description', 'dpe']
    setColumns(fakeColumns)
    setMappings(fakeColumns.map((src, i) => ({ source: src, target: targetColumns[i] ?? '' })))
    setStep('mapping')
  }

  const simulateImport = useCallback(() => {
    setStep('importing')
    setImportProgress(0)
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 15
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setImportResult({ success: 142, errors: 3, skipped: 5 })
        setStep('result')
      }
      setImportProgress(Math.min(progress, 100))
    }, 300)
  }, [])

  /* ─── Shared styles ─── */
  const cardCls = 'bg-white rounded-xl border border-[var(--color-grey-light-couleur-primaire)] p-6'
  const btnPrimary = 'py-3 px-6 rounded-xl bg-[var(--color-indigo-couleur-fonctionnelle)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
  const btnSecondary = 'py-3 px-6 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] text-[var(--color-anthracite-textes)] font-semibold text-sm hover:bg-[var(--color-grey-ultra-background)] transition-colors flex items-center justify-center gap-2'

  /* ─── IMP-01 : Choix du type ─── */
  if (step === 'choose') {
    return (
      <div className="p-10 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-[var(--color-anthracite-textes)]">
          Importer des données
        </h1>
        <p className="mt-2 text-[var(--color-grey-bold-textes)]">
          Sélectionnez le type de données à importer.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {importTypes.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => { setImportType(t.id); setStep('upload') }}
              className={`${cardCls} text-left hover:border-[var(--color-indigo-couleur-fonctionnelle)] transition-colors cursor-pointer group ${importType === t.id ? 'border-[var(--color-indigo-couleur-fonctionnelle)] ring-2 ring-[var(--color-indigo-couleur-fonctionnelle)]/20' : ''}`}
            >
              <t.icon className="w-8 h-8 text-[var(--color-grey-bold-textes)] group-hover:text-[var(--color-indigo-couleur-fonctionnelle)] mb-3" />
              <p className="font-semibold text-[var(--color-anthracite-textes)]">{t.title}</p>
              <p className="text-xs text-[var(--color-grey-bold-textes)] mt-1">{t.description}</p>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setStep('history')}
          className="mt-6 text-sm text-[var(--color-indigo-couleur-fonctionnelle)] hover:underline flex items-center gap-1"
        >
          <Clock className="w-4 h-4" />
          Voir l&apos;historique des imports
        </button>
      </div>
    )
  }

  /* ─── IMP-02 : Upload ─── */
  if (step === 'upload') {
    return (
      <div className="p-10 max-w-3xl mx-auto">
        <button type="button" onClick={() => setStep('choose')} className="text-sm text-[var(--color-grey-bold-textes)] hover:underline flex items-center gap-1 mb-6">
          <ChevronLeft className="w-4 h-4" /> Retour
        </button>

        <h1 className="text-2xl font-bold text-[var(--color-anthracite-textes)]">
          Importer des {importType === 'clients' ? 'clients' : importType === 'properties' ? 'biens' : 'documents'}
        </h1>
        <p className="mt-2 text-[var(--color-grey-bold-textes)]">
          Téléversez votre fichier CSV ou XLSX.
        </p>

        <div
          className="mt-8 border-2 border-dashed border-[var(--color-grey-light-couleur-primaire)] rounded-xl p-12 text-center cursor-pointer hover:border-[var(--color-indigo-couleur-fonctionnelle)] transition-colors"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); e.stopPropagation() }}
          onDrop={(e) => {
            e.preventDefault()
            const f = e.dataTransfer.files[0]
            if (f) handleFileSelect(f)
          }}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,.xlsx,.xls"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) handleFileSelect(f)
            }}
          />
          <Upload className="w-12 h-12 text-[var(--color-grey-bold-textes)] mx-auto mb-4" />
          <p className="text-sm font-medium text-[var(--color-anthracite-textes)]">
            Cliquez ou glissez-déposez votre fichier
          </p>
          <p className="text-xs text-[var(--color-grey-bold-textes)] mt-2">
            Formats acceptés : CSV, XLSX, XLS — Max 50 Mo
          </p>
        </div>

        {file && (
          <div className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-[var(--color-grey-ultra-background)]">
            <FileText className="w-5 h-5 text-[var(--color-indigo-couleur-fonctionnelle)]" />
            <div className="flex-1">
              <p className="text-sm font-medium text-[var(--color-anthracite-textes)]">{file.name}</p>
              <p className="text-xs text-[var(--color-grey-bold-textes)]">{(file.size / 1024).toFixed(1)} Ko</p>
            </div>
            <button type="button" onClick={() => setFile(null)} className="text-[var(--color-grey-bold-textes)] hover:text-[var(--color-red-couleur-fonctionnelle)]">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    )
  }

  /* ─── IMP-03 : Mapping ─── */
  if (step === 'mapping') {
    return (
      <div className="p-10 max-w-3xl mx-auto">
        <button type="button" onClick={() => setStep('upload')} className="text-sm text-[var(--color-grey-bold-textes)] hover:underline flex items-center gap-1 mb-6">
          <ChevronLeft className="w-4 h-4" /> Retour
        </button>

        <h1 className="text-2xl font-bold text-[var(--color-anthracite-textes)]">
          Mapper les colonnes
        </h1>
        <p className="mt-2 text-[var(--color-grey-bold-textes)]">
          Associez les colonnes de votre fichier aux champs RealAgent.
        </p>

        <div className="mt-8 space-y-3">
          <div className="grid grid-cols-[1fr_40px_1fr] gap-2 items-center text-xs font-semibold text-[var(--color-grey-bold-textes)] px-1">
            <span>Colonne source</span>
            <span />
            <span>Champ RealAgent</span>
          </div>

          {mappings.map((m, i) => (
            <div key={m.source} className="grid grid-cols-[1fr_40px_1fr] gap-2 items-center">
              <div className="px-4 py-2.5 rounded-xl bg-[var(--color-grey-ultra-background)] text-sm text-[var(--color-anthracite-textes)]">
                {m.source}
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--color-grey-bold-textes)] mx-auto" />
              <select
                className="px-4 py-2.5 rounded-xl border border-[var(--color-grey-light-couleur-primaire)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-indigo-couleur-fonctionnelle)]"
                value={m.target}
                onChange={(e) => {
                  const updated = [...mappings]
                  updated[i] = { ...m, target: e.target.value }
                  setMappings(updated)
                }}
              >
                <option value="">— Ignorer —</option>
                {targetColumns.map((tc) => (
                  <option key={tc} value={tc}>{tc}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <button type="button" onClick={() => setStep('upload')} className={btnSecondary}>
            <ChevronLeft className="w-4 h-4" /> Retour
          </button>
          <button type="button" onClick={() => setStep('preview')} className={btnPrimary}>
            Aperçu <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  /* ─── IMP-04 : Preview ─── */
  if (step === 'preview') {
    const previewData = Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      values: columns.map((c) => `Valeur ${c} ${i + 1}`),
    }))

    return (
      <div className="p-10 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[var(--color-anthracite-textes)]">
          Aperçu des données
        </h1>
        <p className="mt-2 text-[var(--color-grey-bold-textes)]">
          Vérifiez que les données sont correctement formatées avant l&apos;import.
        </p>

        <div className="mt-8 overflow-x-auto rounded-xl border border-[var(--color-grey-light-couleur-primaire)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--color-grey-ultra-background)]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-[var(--color-anthracite-textes)]">#</th>
                {mappings.filter((m) => m.target).map((m) => (
                  <th key={m.target} className="px-4 py-3 text-left font-semibold text-[var(--color-anthracite-textes)]">
                    {m.target}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {previewData.map((row) => (
                <tr key={row.id} className="border-t border-[var(--color-grey-light-couleur-primaire)]">
                  <td className="px-4 py-3 text-[var(--color-grey-bold-textes)]">{row.id}</td>
                  {mappings.filter((m) => m.target).map((m, j) => (
                    <td key={m.target} className="px-4 py-3 text-[var(--color-anthracite-textes)]">
                      {row.values[j]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-[var(--color-grey-bold-textes)]">
          Affichage des 5 premières lignes sur {file ? '~150' : '0'} détectées.
        </p>

        <div className="flex gap-4 mt-8">
          <button type="button" onClick={() => setStep('mapping')} className={btnSecondary}>
            <ChevronLeft className="w-4 h-4" /> Modifier le mapping
          </button>
          <button type="button" onClick={simulateImport} className={btnPrimary}>
            Lancer l&apos;import <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  /* ─── IMP-05 : Import en cours ─── */
  if (step === 'importing') {
    return (
      <div className="p-10 max-w-lg mx-auto text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-indigo-couleur-fonctionnelle)]/10 flex items-center justify-center mb-6">
          <Upload className="w-8 h-8 text-[var(--color-indigo-couleur-fonctionnelle)] animate-pulse" />
        </div>

        <h1 className="text-2xl font-bold text-[var(--color-anthracite-textes)]">
          Import en cours…
        </h1>
        <p className="mt-2 text-[var(--color-grey-bold-textes)]">
          Ne fermez pas cette page.
        </p>

        <div className="mt-8 w-full bg-[var(--color-grey-light-couleur-primaire)] rounded-full h-3">
          <div
            className="bg-[var(--color-indigo-couleur-fonctionnelle)] h-3 rounded-full transition-all duration-300"
            style={{ width: `${importProgress}%` }}
          />
        </div>
        <p className="mt-2 text-sm font-medium text-[var(--color-anthracite-textes)]">
          {Math.round(importProgress)}%
        </p>
      </div>
    )
  }

  /* ─── IMP-06 : Résultat ─── */
  if (step === 'result') {
    return (
      <div className="p-10 max-w-lg mx-auto text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-green-couleur-fonctionnelle)] flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-white" />
        </div>

        <h1 className="text-2xl font-bold text-[var(--color-anthracite-textes)]">
          Import terminé !
        </h1>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className={cardCls}>
            <Check className="w-5 h-5 text-[var(--color-green-couleur-fonctionnelle)] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[var(--color-anthracite-textes)]">{importResult.success}</p>
            <p className="text-xs text-[var(--color-grey-bold-textes)]">Importés</p>
          </div>
          <div className={cardCls}>
            <AlertCircle className="w-5 h-5 text-[var(--color-red-couleur-fonctionnelle)] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[var(--color-anthracite-textes)]">{importResult.errors}</p>
            <p className="text-xs text-[var(--color-grey-bold-textes)]">Erreurs</p>
          </div>
          <div className={cardCls}>
            <X className="w-5 h-5 text-[var(--color-yellow-couleur-fonctionnelle)] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[var(--color-anthracite-textes)]">{importResult.skipped}</p>
            <p className="text-xs text-[var(--color-grey-bold-textes)]">Ignorés</p>
          </div>
        </div>

        {importResult.errors > 0 && (
          <div className="mt-6 p-4 rounded-xl bg-[var(--color-soft-red-background)] text-left">
            <p className="text-sm font-semibold text-[var(--color-red-couleur-fonctionnelle)]">
              {importResult.errors} lignes en erreur
            </p>
            <p className="text-xs text-[var(--color-grey-bold-textes)] mt-1">
              Les lignes en erreur n&apos;ont pas été importées. Vous pouvez télécharger le rapport d&apos;erreurs.
            </p>
            <button
              type="button"
              className="mt-2 text-xs text-[var(--color-indigo-couleur-fonctionnelle)] hover:underline"
            >
              Télécharger le rapport d&apos;erreurs (CSV)
            </button>
          </div>
        )}

        <div className="flex gap-4 mt-8">
          <button type="button" onClick={() => { setStep('choose'); setFile(null); setImportType(null) }} className={btnSecondary}>
            Nouvel import
          </button>
          <button type="button" onClick={() => router.push('/dashboard')} className={btnPrimary}>
            Aller au dashboard <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  }

  /* ─── IMP-07 : Historique ─── */
  const historyData = [
    { id: 1, type: 'Clients', date: '09/04/2026 14:32', rows: 142, status: 'success' },
    { id: 2, type: 'Biens', date: '08/04/2026 10:15', rows: 67, status: 'success' },
    { id: 3, type: 'Clients', date: '05/04/2026 09:00', rows: 0, status: 'error' },
  ]

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <button type="button" onClick={() => setStep('choose')} className="text-sm text-[var(--color-grey-bold-textes)] hover:underline flex items-center gap-1 mb-6">
        <ChevronLeft className="w-4 h-4" /> Retour
      </button>

      <h1 className="text-2xl font-bold text-[var(--color-anthracite-textes)]">
        Historique des imports
      </h1>

      <div className="mt-8 space-y-3">
        {historyData.map((h) => (
          <div key={h.id} className={`${cardCls} flex items-center gap-4`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              h.status === 'success' ? 'bg-green-50' : 'bg-red-50'
            }`}>
              {h.status === 'success' ? (
                <Check className="w-5 h-5 text-[var(--color-green-couleur-fonctionnelle)]" />
              ) : (
                <AlertCircle className="w-5 h-5 text-[var(--color-red-couleur-fonctionnelle)]" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[var(--color-anthracite-textes)]">
                {h.type} — {h.rows} lignes
              </p>
              <p className="text-xs text-[var(--color-grey-bold-textes)]">{h.date}</p>
            </div>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${
              h.status === 'success'
                ? 'bg-green-50 text-[var(--color-green-couleur-fonctionnelle)]'
                : 'bg-red-50 text-[var(--color-red-couleur-fonctionnelle)]'
            }`}>
              {h.status === 'success' ? 'Succès' : 'Échec'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
