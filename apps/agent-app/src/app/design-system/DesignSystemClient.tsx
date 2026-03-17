'use client'

import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@real-estate/ui/button'
import { Badge } from '@real-estate/ui/badge'
import { Input } from '@real-estate/ui/input'
import {
  Sun, Moon, Check, X, Minus, Search, Bell, Settings,
  Home, Users, MapPin, Briefcase, FileText, ChevronDown,
  ChevronRight, ArrowLeft, Plus, Upload, Star, AlertTriangle,
  TrendingUp, Calendar, ToggleLeft, ToggleRight, Loader2,
} from 'lucide-react'

// ─── Dark mode CSS variable overrides ────────────────────────────────────────
const DARK_VARS: React.CSSProperties = {
  '--color-white-background': '#1a1a1a',
  '--color-grey-ultra-background': '#111111',
  '--color-grey-light-background': '#1e1e1e',
  '--color-grey-background': '#333333',
  '--color-grey-bold-background': '#d0d0d0',
  '--color-anthracite-textes': '#f0f0f0',
  '--color-anthracite-474747': '#f0f0f0',
  '--color-grey-bold-textes': '#b8b8b8',
  '--color-grey-textes': '#777777',
  '--color-grey-light-textes': '#3a3a3a',
  '--color-white-textes-tons-foncés': '#f0f0f0',
  '--color-anthracite-icons': '#f0f0f0',
  '--color-grey-bold-icons': '#b8b8b8',
  '--color-grey-icons': '#777777',
  '--color-grey-light-icons': '#3a3a3a',
  '--color-grey-ultra-contour': '#2a2a2a',
  '--color-grey-contour': '#444444',
  '--color-grey-ultra-couleur-primaire': '#111111',
  '--color-grey-light-couleur-primaire': '#2a2a2a',
  '--color-soft-blue-background': '#0a1e2d',
  '--color-soft-red-background': '#2d1515',
  '--color-soft-yellow-background': '#2a2700',
} as React.CSSProperties

// ─── Color token map (design spec names → actual values) ─────────────────────
const COLOR_SPEC: Record<string, { hex: string; varName: string }> = {
  'white':      { hex: '#ffffff', varName: 'white-background' },
  'grey 50':    { hex: '#f5f5f5', varName: 'grey-ultra-background' },
  'grey 100':   { hex: '#f5f5f5', varName: 'grey-ultra-background' },
  'grey 200':   { hex: '#e5e5e5', varName: 'grey-light-background' },
  'grey 300':   { hex: '#e5e5e5', varName: 'grey-light-textes' },
  'grey 400':   { hex: '#b6b6b6', varName: 'grey-contour' },
  'grey 500':   { hex: '#858585', varName: 'grey-bold-icons' },
  'grey 600':   { hex: '#6d6d6d', varName: 'grey-bold-textes' },
  'grey 800':   { hex: '#474747', varName: 'anthracite-textes' },
  'purple 500': { hex: '#7b72f9', varName: 'indigo-couleur-fonctionnelle' },
  'indigo':     { hex: '#7b72f9', varName: 'indigo-couleur-fonctionnelle' },
  'blue':       { hex: '#33a0fa', varName: 'blue-couleur-fonctionnelle' },
  'green':      { hex: '#7cd064', varName: 'green-couleur-fonctionnelle' },
  'red':        { hex: '#e95d66', varName: 'red-couleur-fonctionnelle' },
  'yellow':     { hex: '#f8d862', varName: 'yellow-couleur-fonctionnelle' },
  '-':          { hex: 'transparent', varName: '—' },
}

// ─── Color palette (from tokens.json) ────────────────────────────────────────
const PALETTE = {
  backgrounds: [
    { name: 'white-background',          hex: '#ffffff',  label: 'White' },
    { name: 'grey-ultra-background',     hex: '#f5f5f5',  label: 'Grey Ultra' },
    { name: 'grey-light-background',     hex: '#e5e5e5',  label: 'Grey Light' },
    { name: 'grey-background',           hex: '#b6b6b6',  label: 'Grey' },
    { name: 'grey-bold-background',      hex: '#6d6d6d',  label: 'Grey Bold' },
    { name: 'soft-blue-background',      hex: '#e9f7ff',  label: 'Soft Blue' },
    { name: 'soft-red-background',       hex: '#ffe9e9',  label: 'Soft Red' },
    { name: 'soft-yellow-background',    hex: '#fffbdb',  label: 'Soft Yellow' },
  ],
  texts: [
    { name: 'anthracite-textes',         hex: '#474747',  label: 'Anthracite' },
    { name: 'grey-bold-textes',          hex: '#6d6d6d',  label: 'Grey Bold' },
    { name: 'grey-textes',               hex: '#b6b6b6',  label: 'Grey' },
    { name: 'grey-light-textes',         hex: '#e5e5e5',  label: 'Grey Light' },
    { name: 'white-textes-tons-foncés',  hex: '#ffffff',  label: 'White (dark bg)' },
  ],
  functional: [
    { name: 'blue-couleur-fonctionnelle',   hex: '#33a0fa', label: 'Blue / Info' },
    { name: 'green-couleur-fonctionnelle',  hex: '#7cd064', label: 'Green / Success' },
    { name: 'yellow-couleur-fonctionnelle', hex: '#f8d862', label: 'Yellow / Warning' },
    { name: 'red-couleur-fonctionnelle',    hex: '#e95d66', label: 'Red / Danger' },
    { name: 'indigo-couleur-fonctionnelle', hex: '#7b72f9', label: 'Indigo / Brand' },
  ],
  icons: [
    { name: 'anthracite-icons',   hex: '#4b4b4b', label: 'Anthracite' },
    { name: 'grey-bold-icons',    hex: '#858585', label: 'Grey Bold' },
    { name: 'grey-icons',         hex: '#b6b6b6', label: 'Grey' },
    { name: 'grey-light-icons',   hex: '#e5e5e5', label: 'Grey Light' },
    { name: 'white-icons',        hex: '#ffffff', label: 'White' },
    { name: 'green-icons',        hex: '#7cd064', label: 'Green' },
    { name: 'red-icons',          hex: '#e95d66', label: 'Red' },
    { name: 'yellow-icons',       hex: '#f8d862', label: 'Yellow' },
  ],
  score: [
    { name: 'score-green-icons',  hex: '#6cde20', label: 'A' },
    { name: 'score-grass-icons',  hex: '#c1e01e', label: 'B' },
    { name: 'score-yellow-icons', hex: '#ebc718', label: 'C' },
    { name: 'score-orange-icons', hex: '#ed6711', label: 'D' },
    { name: 'score-red-icons',    hex: '#f00f0f', label: 'E / F' },
  ],
}

// ─── Typography tokens ────────────────────────────────────────────────────────
const TYPE_SCALE = [
  { name: 'title-h0-40px-bold',         size: '40px', weight: 700, lh: '40px',  sample: 'Dashboard Immobilier' },
  { name: 'title-h1-28px-bold',         size: '28px', weight: 700, lh: '34px',  sample: 'Fiche Client' },
  { name: 'title-h2-24px-bold',         size: '24px', weight: 700, lh: '32px',  sample: 'Informations générales' },
  { name: 'title-h3-20px-bold',         size: '20px', weight: 700, lh: '26px',  sample: 'Adresse du bien' },
  { name: 'title-h4-h5-16px-bold',      size: '16px', weight: 700, lh: '24px',  sample: 'Sous-section' },
  { name: 'body-16px-bold',             size: '16px', weight: 700, lh: '22px',  sample: 'Corps de texte — Bold' },
  { name: 'body-16px-regular',          size: '16px', weight: 400, lh: '22px',  sample: 'Corps de texte — Regular' },
  { name: 'body-16px-light',            size: '16px', weight: 300, lh: '22px',  sample: 'Corps de texte — Light' },
  { name: 'small-print-14px-regular',   size: '14px', weight: 400, lh: '16px',  sample: 'Petite note, caption, metadata' },
  { name: 'tagline-14px-bold',          size: '14px', weight: 700, lh: '16px',  sample: 'TAGLINE SECTION' },
  { name: 'form-label-16px-bold',       size: '16px', weight: 700, lh: '22px',  sample: 'Label de formulaire — Bold' },
  { name: 'form-label-16px-regular',    size: '16px', weight: 400, lh: '22px',  sample: 'Label de formulaire — Regular' },
  { name: 'form-label-16px-light',      size: '16px', weight: 300, lh: '22px',  sample: 'Label de formulaire — Light' },
  { name: 'big-content-40px-bold',      size: '40px', weight: 700, lh: '40px',  sample: '248 Clients' },
  { name: 'big-content-40px-regular',   size: '40px', weight: 400, lh: '40px',  sample: '248 Clients' },
]

// ─── Radius tokens ────────────────────────────────────────────────────────────
const RADII = [
  { name: 'sm',   value: '4px' },
  { name: 'md',   value: '8px' },
  { name: 'lg',   value: '12px' },
  { name: 'xl',   value: '16px' },
  { name: '2xl',  value: '24px' },
  { name: 'full', value: '9999px' },
]

// ─── Spacing tokens ───────────────────────────────────────────────────────────
const SPACING = [2, 4, 8, 12, 16, 24, 32, 40, 48, 64]

// ─── Component inventory (from composants.xlsx) ───────────────────────────────
type TokenSet = { surface?: string; border?: string; text?: string; icon?: string }
type ComponentEntry = {
  name: string
  status: 'fait' | 'à faire' | 'factoriser' | string
  variants: Array<{
    name: string
    tokensLight?: TokenSet
    tokensDark?: TokenSet
  }>
  react?: boolean
}
type ComponentFamily = { id: string; label: string; components: ComponentEntry[] }

const FAMILIES: ComponentFamily[] = [
  {
    id: 'buttons', label: 'Buttons',
    components: [
      {
        name: 'button', status: 'fait', react: true,
        variants: [
          { name: 'default',     tokensLight: { surface: 'grey 400', border: 'grey 400', text: 'white', icon: 'white' }, tokensDark: { surface: 'grey 500', border: 'grey 500', text: 'white', icon: 'white' } },
          { name: 'brand',       tokensLight: { surface: 'purple 500', border: 'purple 500', text: 'white', icon: 'white' }, tokensDark: { surface: 'purple 500', border: 'purple 500', text: 'white', icon: 'white' } },
          { name: 'outlined',    tokensLight: { surface: 'white', border: 'grey 500', text: 'grey 500', icon: 'grey 500' }, tokensDark: { surface: 'grey 800', border: 'grey 300', text: 'grey 300', icon: 'grey 300' } },
          { name: 'transparent', tokensLight: { surface: '-', border: 'grey 500', text: 'grey 500', icon: 'grey 500' }, tokensDark: { surface: '-', border: 'grey 100', text: 'grey 100', icon: 'grey 100' } },
        ],
      },
      {
        name: 'icon button', status: 'fait',
        variants: [
          { name: 'default' }, { name: 'brand' }, { name: 'outlined' }, { name: 'transparent' },
        ],
      },
      { name: 'sending icon button', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'icon button mega', status: 'fait', variants: [{ name: 'default' }, { name: 'outlined' }] },
      { name: 'button . pagination', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'button . sort', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'inputs', label: 'Inputs & Text Fields',
    components: [
      { name: 'Label', status: 'fait', react: true, variants: [{ name: 'default' }] },
      { name: 'Input', status: 'fait', react: true, variants: [{ name: 'default' }, { name: 'disabled' }, { name: 'error' }] },
      { name: 'outlined text field', status: 'fait', variants: [{ name: 'default' }, { name: 'focused' }, { name: 'error' }, { name: 'disabled' }] },
    ],
  },
  {
    id: 'badges', label: 'Badges & Chips',
    components: [
      {
        name: 'Badge', status: 'fait', react: true,
        variants: [
          { name: 'default' }, { name: 'secondary' }, { name: 'info' },
          { name: 'success' }, { name: 'warning' }, { name: 'destructive' }, { name: 'outline' },
        ],
      },
      { name: 'atome . sticker', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'atome . criteria', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'atome . icon + text . medium', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'atome . text + icon . date', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'atome . message . status', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'navigation', label: 'Navigation',
    components: [
      { name: 'agent navigation rail . desktop', status: 'fait', variants: [{ name: 'default' }, { name: 'collapsed' }] },
      { name: 'button . nav . dashboard', status: 'fait', variants: [{ name: 'default' }, { name: 'selected' }] },
      { name: 'button . nav . client', status: 'fait', variants: [{ name: 'default' }, { name: 'selected' }] },
      { name: 'button . nav . bien', status: 'fait', variants: [{ name: 'default' }, { name: 'selected' }] },
      { name: 'button . nav . affaire', status: 'fait', variants: [{ name: 'default' }, { name: 'selected' }] },
      { name: 'button . nav . document', status: 'fait', variants: [{ name: 'default' }, { name: 'selected' }] },
      { name: 'button . nav . automatisation', status: 'fait', variants: [{ name: 'default' }, { name: 'selected' }] },
      { name: 'breadcrumb', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'button profile', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'lists', label: 'Lists',
    components: [
      { name: 'list . client', status: 'fait', variants: [{ name: 'default', tokensLight: { surface: 'white', border: '-', text: 'grey 500', icon: 'grey 500' }, tokensDark: { surface: 'grey 800', border: '-', text: 'grey 50', icon: 'grey 50' } }] },
      { name: 'list . bien', status: 'fait', variants: [{ name: 'default', tokensLight: { surface: 'white', border: '-', text: 'grey 500', icon: 'grey 500' }, tokensDark: { surface: 'grey 800', border: '-', text: 'grey 50', icon: 'grey 50' } }] },
      { name: 'list . affaire', status: 'fait', variants: [{ name: 'default', tokensLight: { surface: 'white', border: '-', text: 'grey 500', icon: 'grey 500' }, tokensDark: { surface: 'grey 800', border: '-', text: 'grey 50', icon: 'grey 50' } }] },
      { name: 'list . document', status: 'fait', variants: [{ name: 'default', tokensLight: { surface: 'white', border: '-', text: 'grey 500', icon: 'grey 500' }, tokensDark: { surface: 'grey 800', border: '-', text: 'grey 50', icon: 'grey 50' } }] },
      { name: 'list . évènement', status: 'fait', variants: [{ name: 'default', tokensLight: { surface: 'white', border: '-', text: 'grey 500', icon: 'grey 500' }, tokensDark: { surface: 'grey 800', border: '-', text: 'grey 50', icon: 'grey 50' } }] },
      { name: 'list . database', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'list automation', status: 'fait', variants: [{ name: 'default', tokensLight: { surface: 'white', border: '-', text: 'grey 500', icon: 'grey 500' }, tokensDark: { surface: 'grey 800', border: '-', text: 'grey 50', icon: 'grey 50' } }] },
      { name: 'list . import . data . select', status: 'fait', variants: [{ name: 'default' }, { name: 'success' }, { name: 'error' }] },
    ],
  },
  {
    id: 'app-bars', label: 'App Bars',
    components: [
      { name: 'app bar category', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'app bar fiche client', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'app bar fiche client . messagerie', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'app bar fiche bien', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'app bar fiche bien . annonce', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'app bar fiche affaire', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'app bar fiche affaire . metrics', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'app bar fiche automatisation', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'app bar document', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'app bar ajout bdd', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'app bar ajout bdd . import', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'date-time', label: 'Date & Time',
    components: [
      { name: 'modal date picker', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'atome . datepicker . chiffre', status: 'fait', variants: [{ name: 'default' }, { name: 'selected' }, { name: 'today' }] },
      { name: 'atome . datepicker . day', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'atome . datepicker . month', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'menu', label: 'Menu & Dropdowns',
    components: [
      { name: 'dropdown', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'menu item', status: 'fait', variants: [{ name: 'default' }, { name: 'selected' }, { name: 'hover' }] },
    ],
  },
  {
    id: 'loading', label: 'Loading & Progress',
    components: [
      { name: 'progess bar', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'atome . process bar', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'switch-radio', label: 'Switch & Radio',
    components: [
      { name: 'switch', status: 'fait', variants: [{ name: 'off' }, { name: 'on' }] },
      { name: 'checkbox', status: 'fait', variants: [{ name: 'unchecked' }, { name: 'checked' }, { name: 'indeterminate' }] },
      { name: 'checkbox label', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'dividers', label: 'Dividers',
    components: [
      { name: 'horizontal divider', status: 'fait', variants: [{ name: '1191px' }, { name: '935px' }, { name: '350px' }] },
      { name: 'vertical divider', status: 'fait', variants: [{ name: '84px' }] },
    ],
  },
  {
    id: 'sheets', label: 'Sheets & Dialogs',
    components: [
      { name: 'side sheets', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'basic dialog', status: 'à faire', variants: [{ name: 'default' }] },
      { name: 'full screen dialog', status: 'à faire', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'text-boxes', label: 'Text Boxes & Messages',
    components: [
      { name: 'card . logs', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'organisme . message . reçu', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'organisme . message . envoyé', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'organisme . message . édition', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'ai', label: 'AI Components',
    components: [
      { name: 'atome . ai . suggestion', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'atome . titre + icon . suggestion', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'dashboard . suggestions', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'organisme . suggestion', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'scoring', label: 'Scoring',
    components: [
      { name: 'organisme . scoring . section list', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'graphs', label: 'Graphs',
    components: [
      { name: 'card . graph . indicateur', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'graph . courbe', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'icons', label: 'Icons',
    components: [
      { name: 'icon . dpe', status: 'fait', variants: [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }, { name: 'E' }, { name: 'F' }, { name: 'G' }] },
    ],
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────
function TokenChip({ specName }: { specName?: string }) {
  if (!specName || specName === '-') {
    return <span className="text-xs text-neutral-grey-bold italic">—</span>
  }
  const tok = COLOR_SPEC[specName.toLowerCase()]
  if (!tok) return <span className="text-xs">{specName}</span>
  return (
    <span className="inline-flex items-center gap-1">
      <span
        className="w-3 h-3 rounded-sm border border-neutral-grey-light inline-block flex-shrink-0"
        style={{ backgroundColor: tok.hex }}
      />
      <code className="text-xs">{specName}</code>
      <span className="text-neutral-grey-bold text-xs">({tok.hex})</span>
    </span>
  )
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    'fait': 'bg-green-couleur-fonctionnelle/20 text-green-couleur-fonctionnelle border border-green-couleur-fonctionnelle/30',
    'à faire': 'bg-yellow-couleur-fonctionnelle/20 text-neutral-anthracite border border-yellow-couleur-fonctionnelle/50',
    'factoriser': 'bg-blue-couleur-fonctionnelle/20 text-blue-couleur-fonctionnelle border border-blue-couleur-fonctionnelle/30',
  }
  const cls = map[status] ?? 'bg-neutral-grey-light text-neutral-grey-bold border border-neutral-grey-light'
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${cls}`}>
      {status}
    </span>
  )
}

function ColorSwatch({ name, hex, label }: { name: string; hex: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const isDark = parseInt(hex.slice(1, 3), 16) < 150
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200) }}
      className="group flex flex-col rounded-lg overflow-hidden border border-neutral-grey-light hover:shadow-md transition-shadow"
      title={`Copier ${hex}`}
    >
      <div className="h-12 w-full relative flex items-center justify-center" style={{ backgroundColor: hex }}>
        {copied && (
          <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-neutral-anthracite'}`}>✓ Copié</span>
        )}
      </div>
      <div className="px-2 py-1.5 bg-background">
        <p className="text-xs font-bold text-neutral-anthracite truncate">{label}</p>
        <code className="text-xs text-neutral-grey-bold">{hex}</code>
      </div>
    </button>
  )
}

function TokenTable({ variants }: { variants: ComponentEntry['variants'] }) {
  const withTokens = variants.filter(v => v.tokensLight && Object.values(v.tokensLight).some(Boolean))
  if (withTokens.length === 0) return null
  const slots: (keyof TokenSet)[] = ['surface', 'border', 'text', 'icon']
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-background-subtle">
            <th className="text-left p-2 border border-neutral-grey-light text-neutral-grey-bold font-bold">Variante</th>
            {slots.map(s => (
              <th key={s} className="text-left p-2 border border-neutral-grey-light text-neutral-grey-bold font-bold" colSpan={2}>
                {s}
              </th>
            ))}
          </tr>
          <tr className="bg-background-subtle">
            <th className="p-2 border border-neutral-grey-light" />
            {slots.map(s => (
              <React.Fragment key={s}>
                <th className="p-2 border border-neutral-grey-light text-neutral-grey-bold font-normal">☀️ Light</th>
                <th className="p-2 border border-neutral-grey-light text-neutral-grey-bold font-normal">🌙 Dark</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {withTokens.map((v) => (
            <tr key={v.name} className="hover:bg-background-subtle transition-colors">
              <td className="p-2 border border-neutral-grey-light font-bold text-neutral-anthracite">{v.name}</td>
              {slots.map(s => (
                <React.Fragment key={s}>
                  <td className="p-2 border border-neutral-grey-light"><TokenChip specName={v.tokensLight?.[s]} /></td>
                  <td className="p-2 border border-neutral-grey-light"><TokenChip specName={v.tokensDark?.[s]} /></td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Live previews for implemented React components ───────────────────────────
function ButtonPreview() {
  return (
    <div className="space-y-3 p-4 rounded-lg border border-neutral-grey-light bg-background">
      <p className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wide mb-2">Variantes</p>
      <div className="flex flex-wrap gap-3">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <p className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wide mt-4 mb-2">Tailles</p>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="lg">Large</Button>
        <Button size="default">Default</Button>
        <Button size="sm">Small</Button>
        <Button size="icon"><Plus className="w-4 h-4" /></Button>
      </div>
      <p className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wide mt-4 mb-2">États</p>
      <div className="flex flex-wrap gap-3">
        <Button>Active</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  )
}

function BadgePreview() {
  return (
    <div className="flex flex-wrap gap-2 p-4 rounded-lg border border-neutral-grey-light bg-background">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Danger</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}

function InputPreview() {
  return (
    <div className="space-y-3 p-4 rounded-lg border border-neutral-grey-light bg-background max-w-sm">
      <div>
        <label className="text-sm font-bold text-neutral-anthracite mb-1 block">Label</label>
        <Input placeholder="Placeholder text…" />
      </div>
      <div>
        <label className="text-sm font-bold text-neutral-anthracite mb-1 block">Avec valeur</label>
        <Input defaultValue="damien@1936.ai" />
      </div>
      <div>
        <label className="text-sm font-bold text-neutral-grey-bold mb-1 block">Disabled</label>
        <Input disabled placeholder="Non modifiable" />
      </div>
    </div>
  )
}

function NavigationPreview() {
  const [active, setActive] = useState('dashboard')
  const items = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'clients', icon: Users, label: 'Clients' },
    { id: 'biens', icon: MapPin, label: 'Biens' },
    { id: 'affaires', icon: Briefcase, label: 'Affaires' },
    { id: 'documents', icon: FileText, label: 'Documents' },
  ]
  return (
    <div className="border border-neutral-grey-light rounded-lg overflow-hidden w-56">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-grey-light">
        <div className="w-6 h-6 rounded bg-indigo-couleur-fonctionnelle flex items-center justify-center">
          <Home className="w-3.5 h-3.5 text-white-icons" />
        </div>
        <span className="font-bold text-sm text-neutral-anthracite">RealAgent</span>
      </div>
      <div className="py-2 px-2 flex flex-col gap-0.5">
        {items.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-bold w-full text-left transition-colors ${
              active === id
                ? 'bg-soft-blue-background text-indigo-couleur-fonctionnelle'
                : 'text-neutral-grey-bold hover:bg-background-subtle hover:text-neutral-anthracite'
            }`}
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

function SwitchPreview() {
  const [on, setOn] = useState(false)
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-neutral-grey-light bg-background">
      <button
        onClick={() => setOn(!on)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
          on ? 'bg-indigo-couleur-fonctionnelle' : 'bg-neutral-grey-light'
        }`}
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${on ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
      <span className="text-sm text-neutral-anthracite font-bold">{on ? 'On' : 'Off'}</span>
    </div>
  )
}

function CheckboxPreview() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border border-neutral-grey-light bg-background">
      <button
        onClick={() => setChecked(!checked)}
        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
          checked ? 'bg-indigo-couleur-fonctionnelle border-indigo-couleur-fonctionnelle' : 'bg-background border-neutral-grey-light'
        }`}
      >
        {checked && <Check className="w-3 h-3 text-white-icons" />}
      </button>
      <span className="text-sm text-neutral-anthracite">Option exemple</span>
    </div>
  )
}

function DpeIconPreview() {
  const dpeColors: Record<string, { bg: string; text: string }> = {
    A: { bg: '#6cde20', text: '#ffffff' }, B: { bg: '#c1e01e', text: '#ffffff' },
    C: { bg: '#ebc718', text: '#ffffff' }, D: { bg: '#ed6711', text: '#ffffff' },
    E: { bg: '#f00f0f', text: '#ffffff' }, F: { bg: '#cc0000', text: '#ffffff' },
    G: { bg: '#990000', text: '#ffffff' },
  }
  return (
    <div className="flex gap-2 flex-wrap p-4 rounded-lg border border-neutral-grey-light bg-background">
      {Object.entries(dpeColors).map(([letter, { bg, text }]) => (
        <div key={letter} className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm" style={{ backgroundColor: bg, color: text }}>
          {letter}
        </div>
      ))}
    </div>
  )
}

const LIVE_PREVIEWS: Record<string, React.ReactNode> = {
  'button': <ButtonPreview />,
  'Badge': <BadgePreview />,
  'Input': <InputPreview />,
  'agent navigation rail . desktop': <NavigationPreview />,
  'switch': <SwitchPreview />,
  'checkbox': <CheckboxPreview />,
  'icon . dpe': <DpeIconPreview />,
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-20">
      <h2 className="text-title-h2-24px-bold text-neutral-anthracite mb-6 pb-3 border-b-2 border-indigo-couleur-fonctionnelle">
        {title}
      </h2>
      {children}
    </section>
  )
}

// ─── Main client component ────────────────────────────────────────────────────
export function DesignSystemClient() {
  const [dark, setDark] = useState(false)
  const [activeSection, setActiveSection] = useState('colors')
  const mainRef = useRef<HTMLDivElement>(null)

  const NAV = [
    { id: 'colors',     label: '🎨 Colors' },
    { id: 'typography', label: '✍️ Typography' },
    { id: 'spacing',    label: '📐 Spacing' },
    ...FAMILIES.map(f => ({ id: f.id, label: f.label })),
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(id)
  }

  // Track scroll position to highlight active nav item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const totalComponents = FAMILIES.reduce((acc, f) => acc + f.components.length, 0)
  const totalDone = FAMILIES.reduce((acc, f) => acc + f.components.filter(c => c.status === 'fait').length, 0)
  const totalReact = FAMILIES.reduce((acc, f) => acc + f.components.filter(c => c.react).length, 0)

  return (
    <div
      className="min-h-screen font-sans"
      style={{ ...(dark ? DARK_VARS : {}), backgroundColor: 'var(--color-grey-ultra-background)', color: 'var(--color-anthracite-textes)' } as React.CSSProperties}
    >
      {/* ── Header ── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 h-14 border-b border-neutral-grey-light"
        style={{ backgroundColor: 'var(--color-white-background)' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-indigo-couleur-fonctionnelle flex items-center justify-center">
            <Home className="w-3.5 h-3.5 text-white-icons" />
          </div>
          <span className="font-bold text-neutral-anthracite">Design System</span>
          <span className="text-neutral-grey-bold text-sm">— RealAgent</span>
          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-red-couleur-fonctionnelle/10 text-red-couleur-fonctionnelle border border-red-couleur-fonctionnelle/20 font-bold">
            DEV ONLY
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-neutral-grey-bold">
            <span><strong className="text-neutral-anthracite">{totalDone}</strong>/{totalComponents} Figma</span>
            <span className="text-neutral-grey-light">|</span>
            <span><strong className="text-neutral-anthracite">{totalReact}</strong> React</span>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-grey-light text-sm font-bold transition-colors hover:bg-background-subtle"
            style={{ color: 'var(--color-anthracite-textes)' }}
          >
            {dark ? <><Sun className="w-4 h-4" /> Light</> : <><Moon className="w-4 h-4" /> Dark</>}
          </button>
        </div>
      </header>

      <div className="flex">
        {/* ── Sidebar ── */}
        <aside
          className="w-52 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-neutral-grey-light py-4 px-2"
          style={{ backgroundColor: 'var(--color-white-background)' }}
        >
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors mb-0.5 ${
                activeSection === id
                  ? 'bg-soft-blue-background text-indigo-couleur-fonctionnelle font-bold'
                  : 'text-neutral-grey-bold hover:bg-background-subtle hover:text-neutral-anthracite'
              }`}
            >
              {label}
            </button>
          ))}
        </aside>

        {/* ── Main content ── */}
        <main ref={mainRef} className="flex-1 overflow-y-auto px-10 py-8 max-w-5xl">

          {/* ── Colors ── */}
          <Section id="colors" title="🎨 Colors">
            {[
              { label: 'Backgrounds', items: PALETTE.backgrounds },
              { label: 'Texts', items: PALETTE.texts },
              { label: 'Functional (Semantic)', items: PALETTE.functional },
              { label: 'Icons', items: PALETTE.icons },
              { label: 'Score / DPE', items: PALETTE.score },
            ].map(({ label, items }) => (
              <div key={label} className="mb-8">
                <h3 className="text-sm font-bold text-neutral-grey-bold uppercase tracking-widest mb-3">{label}</h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
                  {items.map(c => <ColorSwatch key={c.name} {...c} />)}
                </div>
              </div>
            ))}

            {/* Semantic aliases */}
            <div className="mt-6 p-4 rounded-xl border border-neutral-grey-light" style={{ backgroundColor: 'var(--color-white-background)' }}>
              <h3 className="text-sm font-bold text-neutral-grey-bold uppercase tracking-widest mb-3">Semantic Tailwind aliases</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  ['primary', '#ffffff', 'white-couleur-primaire'],
                  ['background', '#f5f5f5', 'grey-ultra-background'],
                  ['background-subtle', '#e5e5e5', 'grey-light-background'],
                  ['background-softBlue', '#e9f7ff', 'soft-blue-background'],
                  ['neutral-grey-light', '#e5e5e5', 'grey-light-textes'],
                  ['neutral-grey-bold', '#6d6d6d', 'grey-bold-textes'],
                  ['neutral-anthracite', '#474747', 'anthracite-textes'],
                  ['semantic-info', '#33a0fa', 'blue-couleur-fonctionnelle'],
                  ['semantic-success', '#7cd064', 'green-couleur-fonctionnelle'],
                  ['semantic-warning', '#f8d862', 'yellow-couleur-fonctionnelle'],
                  ['semantic-destructive', '#e95d66', 'red-couleur-fonctionnelle'],
                ].map(([alias, hex, source]) => (
                  <div key={alias} className="flex items-center gap-2 p-2 rounded border border-neutral-grey-light">
                    <div className="w-4 h-4 rounded-sm border border-neutral-grey-light flex-shrink-0" style={{ backgroundColor: hex }} />
                    <div>
                      <code className="text-xs font-bold text-neutral-anthracite">{alias}</code>
                      <span className="text-xs text-neutral-grey-bold ml-1">→ {source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* ── Typography ── */}
          <Section id="typography" title="✍️ Typography">
            <p className="text-sm text-neutral-grey-bold mb-6">Font : <strong>Roboto</strong> — weights 300 / 400 / 700</p>
            <div className="space-y-2">
              {TYPE_SCALE.map(({ name, size, weight, lh, sample }) => (
                <div key={name} className="flex items-baseline gap-4 p-4 rounded-lg border border-neutral-grey-light" style={{ backgroundColor: 'var(--color-white-background)' }}>
                  <div style={{ fontSize: size, fontWeight: weight, lineHeight: lh, color: 'var(--color-anthracite-textes)' }} className="flex-1 min-w-0 truncate">
                    {sample}
                  </div>
                  <div className="shrink-0 text-right">
                    <code className="text-xs text-neutral-grey-bold block">{name}</code>
                    <span className="text-xs text-neutral-grey-bold">{size} / {weight} / lh {lh}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Spacing & Radius ── */}
          <Section id="spacing" title="📐 Spacing & Radius">
            <div className="mb-8">
              <h3 className="text-sm font-bold text-neutral-grey-bold uppercase tracking-widest mb-4">Spacing scale</h3>
              <div className="space-y-2">
                {SPACING.map(px => (
                  <div key={px} className="flex items-center gap-4">
                    <code className="text-xs w-10 text-right text-neutral-grey-bold flex-shrink-0">{px}px</code>
                    <div className="h-5 bg-indigo-couleur-fonctionnelle rounded-sm flex-shrink-0" style={{ width: px }} />
                    <span className="text-xs text-neutral-grey-bold">spacing-{px}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-grey-bold uppercase tracking-widest mb-4">Border radius</h3>
              <div className="flex flex-wrap gap-4">
                {RADII.map(({ name, value }) => (
                  <div key={name} className="flex flex-col items-center gap-2">
                    <div
                      className="w-14 h-14 border-2 border-indigo-couleur-fonctionnelle"
                      style={{ borderRadius: value, backgroundColor: 'var(--color-soft-blue-background)' }}
                    />
                    <div className="text-center">
                      <code className="text-xs font-bold text-neutral-anthracite block">radius-{name}</code>
                      <span className="text-xs text-neutral-grey-bold">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* ── Component families ── */}
          {FAMILIES.map(family => (
            <Section key={family.id} id={family.id} title={family.label}>
              <div className="space-y-6">
                {family.components.map(comp => (
                  <div
                    key={comp.name}
                    className="rounded-xl border border-neutral-grey-light overflow-hidden"
                    style={{ backgroundColor: 'var(--color-white-background)' }}
                  >
                    {/* Component header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-grey-light" style={{ backgroundColor: 'var(--color-grey-ultra-background)' }}>
                      <div className="flex items-center gap-2">
                        <code className="font-bold text-sm text-neutral-anthracite">{comp.name}</code>
                        {comp.react && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs bg-indigo-couleur-fonctionnelle/10 text-indigo-couleur-fonctionnelle border border-indigo-couleur-fonctionnelle/20 font-bold">
                            ⚛ React
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1 flex-wrap">
                          {comp.variants.map(v => (
                            <span key={v.name} className="px-1.5 py-0.5 rounded text-xs bg-background-subtle text-neutral-grey-bold border border-neutral-grey-light">
                              {v.name}
                            </span>
                          ))}
                        </div>
                        <StatusBadge status={comp.status} />
                      </div>
                    </div>

                    <div className="p-4">
                      {/* Live preview for React components */}
                      {LIVE_PREVIEWS[comp.name] && (
                        <div className="mb-4">
                          <p className="text-xs font-bold text-neutral-grey-bold uppercase tracking-wide mb-2">Live preview</p>
                          {LIVE_PREVIEWS[comp.name]}
                        </div>
                      )}

                      {/* Token table */}
                      <TokenTable variants={comp.variants} />

                      {/* No tokens note */}
                      {!LIVE_PREVIEWS[comp.name] && !comp.variants.some(v => v.tokensLight) && (
                        <p className="text-xs text-neutral-grey-bold italic">
                          Composant Figma — tokens non renseignés dans la spec.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          ))}

        </main>
      </div>
    </div>
  )
}
