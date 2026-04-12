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
  const cardCls = 'bg-white rounded-xl border border-[var(--border-default)] p-6'
  const btnPrimary = 'py-3 px-6 rounded-xl bg-[var(--surface-branded-action)] text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
  const btnSecondary = 'py-3 px-6 rounded-xl border border-[var(--border-default)] text-[var(--text-headings)] font-semibold text-sm hover:bg-[var(--surface-neutral-action)] transition-colors flex items-center justify-center gap-2'

  /* ─── IMP-01 : Choix du type ─── */
  if (step === 'choose') {
    return (
      <div className="p-10 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-[var(--text-headings)]">
          Importer des données
        </h1>
        <p className="mt-2 text-[var(--text-caption)]">
          Sélectionnez le type de données à importer.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {importTypes.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => { setImportType(t.id); setStep('upload') }}
              className={`${cardCls} text-left hover:border-[var(--surface-branded-action)] transition-colors cursor-pointer group ${importType === t.id ? 'border-[var(--surface-branded-action)] ring-2 ring-[var(--surface-branded-action)]/20' : ''}`}
            >
              <t.icon className="w-8 h-8 text-[var(--text-caption)] group-hover:text-[var(--surface-branded-action)] mb-3" />
              <p className="font-semibold text-[var(--text-headings)]">{t.title}</p>
              <p className="text-xs text-[var(--text-caption)] mt-1">{t.description}</p>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setStep('history')}
          className="mt-6 text-sm text-[var(--surface-branded-action)] hover:underline flex items-center gap-1"
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
        <button type="button" onClick={() => setStep('choose')} className="text-sm text-[var(--text-caption)] hover:underline flex items-center gap-1 mb-6">
          <ChevronLeft className="w-4 h-4" /> Retour
        </button>

        <h1 className="text-2xl font-bold text-[var(--text-headings)]">
          Importer des {importType === 'clients' ? 'clients' : importType === 'properties' ? 'biens' : 'documents'}
        </h1>
        <p className="mt-2 text-[var(--text-caption)]">
          Téléversez votre fichier CSV ou XLSX.
        </p>

        <div
          className="mt-8 border-2 border-dashed border-[var(--border-default)] rounded-xl p-12 text-center cursor-pointer hover:border-[var(--surface-branded-action)] transition-colors"
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
          <Upload className="w-12 h-12 text-[var(--text-caption)] mx-auto mb-4" />
          <p className="text-sm font-medium text-[var(--text-headings)]">
            Cliquez ou glissez-déposez votre fichier
          </p>
          <p className="text-xs text-[var(--text-caption)] mt-2">
            Formats acceptés : CSV, XLSX, XLS — Max 50 Mo
          </p>
        </div>

        {file && (
          <div className="mt-4 flex items-center gap-3 p-4 rounded-xl bg-[var(--surface-neutral-action)]">
            <FileText className="w-5 h-5 text-[var(--surface-branded-action)]" />
            <div className="flex-1">
              <p className="text-sm font-medium text-[var(--text-headings)]">{file.name}</p>
              <p className="text-xs text-[var(--text-caption)]">{(file.size / 1024).toFixed(1)} Ko</p>
            </div>
            <button type="button" onClick={() => setFile(null)} className="text-[var(--text-caption)] hover:text-[var(--text-error)]">
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
        <button type="button" onClick={() => setStep('upload')} className="text-sm text-[var(--text-caption)] hover:underline flex items-center gap-1 mb-6">
          <ChevronLeft className="w-4 h-4" /> Retour
        </button>

        <h1 className="text-2xl font-bold text-[var(--text-headings)]">
          Mapper les colonnes
        </h1>
        <p className="mt-2 text-[var(--text-caption)]">
          Associez les colonnes de votre fichier aux champs RealAgent.
        </p>

        <div className="mt-8 space-y-3">
          <div className="grid grid-cols-[1fr_40px_1fr] gap-2 items-center text-xs font-semibold text-[var(--text-caption)] px-1">
            <span>Colonne source</span>
            <span />
            <span>Champ RealAgent</span>
          </div>

          {mappings.map((m, i) => (
            <div key={m.source} className="grid grid-cols-[1fr_40px_1fr] gap-2 items-center">
              <div className="px-4 py-2.5 rounded-xl bg-[var(--surface-neutral-action)] text-sm text-[var(--text-headings)]">
                {m.source}
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--text-caption)] mx-auto" />
              <select
                className="px-4 py-2.5 rounded-xl border border-[var(--border-default)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--surface-branded-action)]"
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
        <h1 className="text-2xl font-bold text-[var(--text-headings)]">
          Aperçu des données
        </h1>
        <p className="mt-2 text-[var(--text-caption)]">
          Vérifiez que les données sont correctement formatées avant l&apos;import.
        </p>

        <div className="mt-8 overflow-x-auto rounded-xl border border-[var(--border-default)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--surface-neutral-action)]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-[var(--text-headings)]">#</th>
                {mappings.filter((m) => m.target).map((m) => (
                  <th key={m.target} className="px-4 py-3 text-left font-semibold text-[var(--text-headings)]">
                    {m.target}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {previewData.map((row) => (
                <tr key={row.id} className="border-t border-[var(--border-default)]">
                  <td className="px-4 py-3 text-[var(--text-caption)]">{row.id}</td>
                  {mappings.filter((m) => m.target).map((m, j) => (
                    <td key={m.target} className="px-4 py-3 text-[var(--text-headings)]">
                      {row.values[j]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-[var(--text-caption)]">
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
        <div className="w-16 h-16 mx-auto rounded-full bg-[var(--surface-branded-action)]/10 flex items-center justify-center mb-6">
          <Upload className="w-8 h-8 text-[var(--surface-branded-action)] animate-pulse" />
        </div>

        <h1 className="text-2xl font-bold text-[var(--text-headings)]">
          Import en cours…
        </h1>
        <p className="mt-2 text-[var(--text-caption)]">
          Ne fermez pas cette page.
        </p>

        <div className="mt-8 w-full bg-[var(--border-default)] rounded-full h-3">
          <div
            className="bg-[var(--surface-branded-action)] h-3 rounded-full transition-all duration-300"
            style={{ width: `${importProgress}%` }}
          />
        </div>
        <p className="mt-2 text-sm font-medium text-[var(--text-headings)]">
          {Math.round(importProgress)}%
        </p>
      </div>
    )
  }

  /* ─── IMP-06 : Résultat ─── */
  if (step === 'result') {
    return (
      <div className="p-10 max-w-lg mx-auto text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-[var(--icon-success)] flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-white" />
        </div>

        <h1 className="text-2xl font-bold text-[var(--text-headings)]">
          Import terminé !
        </h1>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className={cardCls}>
            <Check className="w-5 h-5 text-[var(--icon-success)] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[var(--text-headings)]">{importResult.success}</p>
            <p className="text-xs text-[var(--text-caption)]">Importés</p>
          </div>
          <div className={cardCls}>
            <AlertCircle className="w-5 h-5 text-[var(--text-error)] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[var(--text-headings)]">{importResult.errors}</p>
            <p className="text-xs text-[var(--text-caption)]">Erreurs</p>
          </div>
          <div className={cardCls}>
            <X className="w-5 h-5 text-[var(--border-warning-default)] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[var(--text-headings)]">{importResult.skipped}</p>
            <p className="text-xs text-[var(--text-caption)]">Ignorés</p>
          </div>
        </div>

        {importResult.errors > 0 && (
          <div className="mt-6 p-4 rounded-xl bg-[var(--surface-error)] text-left">
            <p className="text-sm font-semibold text-[var(--text-error)]">
              {importResult.errors} lignes en erreur
            </p>
            <p className="text-xs text-[var(--text-caption)] mt-1">
              Les lignes en erreur n&apos;ont pas été importées. Vous pouvez télécharger le rapport d&apos;erreurs.
            </p>
            <button
              type="button"
              className="mt-2 text-xs text-[var(--surface-branded-action)] hover:underline"
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
      <button type="button" onClick={() => setStep('choose')} className="text-sm text-[var(--text-caption)] hover:underline flex items-center gap-1 mb-6">
        <ChevronLeft className="w-4 h-4" /> Retour
      </button>

      <h1 className="text-2xl font-bold text-[var(--text-headings)]">
        Historique des imports
      </h1>

      <div className="mt-8 space-y-3">
        {historyData.map((h) => (
          <div key={h.id} className={`${cardCls} flex items-center gap-4`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              h.status === 'success' ? 'bg-green-50' : 'bg-red-50'
            }`}>
              {h.status === 'success' ? (
                <Check className="w-5 h-5 text-[var(--icon-success)]" />
              ) : (
                <AlertCircle className="w-5 h-5 text-[var(--text-error)]" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[var(--text-headings)]">
                {h.type} — {h.rows} lignes
              </p>
              <p className="text-xs text-[var(--text-caption)]">{h.date}</p>
            </div>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${
              h.status === 'success'
                ? 'bg-green-50 text-[var(--icon-success)]'
                : 'bg-red-50 text-[var(--text-error)]'
            }`}>
              {h.status === 'success' ? 'Succès' : 'Échec'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
