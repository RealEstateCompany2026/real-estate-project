'use client'

import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@real-estate/ui/button'
import { Badge } from '@real-estate/ui/badge'
import { Input } from '@real-estate/ui/input'
import {
  Sun, Moon, Check, X, Plus, Search, ChevronDown, TrendingUp,
  Home, Users, MapPin, Briefcase, FileText, Zap, Database, Calendar,
  ArrowRight,
} from 'lucide-react'

// ─── Figma tokens (source of truth) ──────────────────────────────────────────
// File key: 09EiMQjcDWgb7MzykS8zU0 · "Agent Immobilier . Desktop"
//
// CRITICAL discrepancies vs local project tokens:
//   Figma border-radius/sm = 16px  ←→  local radius-sm = 4px
//   Figma border-radius/md = 20px  ←→  local radius-md = 8px
//   Figma neutral/default  = #444955  ←→  local anthracite = #474747
//   Figma neutral/50       = #ecedee  ←→  local grey-ultra  = #f5f5f5

// Figma exact hex values
const F = {
  white:          '#ffffff',
  n50:            '#ecedee',  // borders, card bg subtle
  n100:           '#dadbdd',  // chip borders
  n200:           '#d0d1d4',  // section label text
  n300:           '#a1a4aa',  // placeholder, disabled
  n400:           '#737780',  // chart axis labels
  nDefault:       '#444955',  // body text
  headings:       '#333740',  // heading text
  indigo:         '#7b72f9',  // brand / selected state
  indigoSoft:     '#e9f7ff',  // active nav bg
  blue:           '#33a0fa',
  green:          '#7cd064',
  red:            '#e95d66',
  yellow:         '#f8d862',
  // radii
  rSm:            '16px',
  rMd:            '20px',
  rFull:          '9999px',
} as const

// ─── Dark mode styles (no longer using deprecated --color-* variables) ────────
// Old variables replaced with L3 tokens and .dark class toggle
// To enable dark mode in the future, use CSS custom properties or Tailwind's dark mode

// ─── Token comparison table (Figma ↔ local project) ──────────────────────────
const TOKEN_MAP = [
  { figma: '--neutral/white',    fHex: '#ffffff', local: '--color-white-background',      lHex: '#ffffff', match: true  },
  { figma: '--neutral/50',       fHex: '#ecedee', local: '--color-grey-ultra-background', lHex: '#f5f5f5', match: false },
  { figma: '--neutral/300',      fHex: '#a1a4aa', local: '--color-grey-textes',           lHex: '#b6b6b6', match: false },
  { figma: '--neutral/default',  fHex: '#444955', local: '--color-anthracite-textes',     lHex: '#474747', match: false },
  { figma: '--text/headings',    fHex: '#333740', local: '(aucun mapping direct)',         lHex: '—',       match: false },
  { figma: '--border-radius/sm', fHex: '16px',   local: 'radius-sm (tailwind)',           lHex: '4px',     match: false },
  { figma: '--border-radius/md', fHex: '20px',   local: 'radius-md (tailwind)',           lHex: '8px',     match: false },
]

// ─── Color palette ────────────────────────────────────────────────────────────
const PALETTE = {
  neutral: [
    { hex: '#ffffff',  label: 'White',           token: 'neutral/white' },
    { hex: '#ecedee',  label: 'Neutral 50',       token: 'neutral/50 (border)' },
    { hex: '#dadbdd',  label: 'Grey 100',         token: 'grey/100 (chip border)' },
    { hex: '#d0d1d4',  label: 'Neutral 200',      token: 'neutral/200 (labels)' },
    { hex: '#a1a4aa',  label: 'Neutral 300',      token: 'neutral/300 (placeholder)' },
    { hex: '#737780',  label: 'Neutral 400',      token: 'neutral/400 (chart)' },
    { hex: '#444955',  label: 'Neutral Default',  token: 'neutral/default (body)' },
    { hex: '#333740',  label: 'Text Headings',    token: 'text/headings' },
  ],
  functional: [
    { hex: '#7b72f9', label: 'Indigo / Brand',   token: 'indigo' },
    { hex: '#33a0fa', label: 'Blue / Info',       token: 'blue' },
    { hex: '#7cd064', label: 'Green / Success',   token: 'green' },
    { hex: '#f8d862', label: 'Yellow / Warning',  token: 'yellow' },
    { hex: '#e95d66', label: 'Red / Danger',      token: 'red' },
    { hex: '#e9f7ff', label: 'Soft Blue (nav)',   token: 'soft-blue-background' },
  ],
  score: [
    { hex: '#6cde20', label: 'DPE A' },
    { hex: '#c1e01e', label: 'DPE B' },
    { hex: '#ebc718', label: 'DPE C' },
    { hex: '#ed6711', label: 'DPE D' },
    { hex: '#f00f0f', label: 'DPE E/F' },
  ],
}

// ─── Typography ───────────────────────────────────────────────────────────────
const TYPE_SCALE = [
  { name: 'H2 · SemiBold · Desktop',  size: '40px', weight: 600, lh: '48px', ls: '0.4px',  sample: '76' },
  { name: 'H4 · Bold · Desktop',      size: '28px', weight: 700, lh: '34px', ls: '0.28px', sample: 'Clients' },
  { name: 'H6 · Bold · Desktop',      size: '20px', weight: 700, lh: '24px', ls: '0.2px',  sample: '22 fév 2026' },
  { name: 'Body · md · Bold',         size: '16px', weight: 700, lh: '20px', ls: '0.16px', sample: 'LEMARCHAND' },
  { name: 'Body · md · SemiBold',     size: '16px', weight: 600, lh: '20px', ls: '0.16px', sample: 'Voir tout' },
  { name: 'Body · md · Regular',      size: '16px', weight: 400, lh: '20px', ls: '0.16px', sample: 'Jean-Christophe' },
  { name: 'Body · sm · Bold',         size: '14px', weight: 700, lh: '16px', ls: '0.14px', sample: 'QUALIFICATION  82%' },
  { name: 'Body · sm · Regular',      size: '14px', weight: 400, lh: '16px', ls: '0.14px', sample: '28 réactions positives' },
  { name: 'Body · xsm · Bold',        size: '12px', weight: 700, lh: '14px', ls: '0.12px', sample: 'ACTIVE' },
]

// ─── Radii (Figma-accurate — very different from local Tailwind defaults!) ────
const RADII = [
  { name: 'sm',   value: '16px',    note: 'Buttons, icon-buttons, field padding' },
  { name: 'md',   value: '20px',    note: 'Cards, nav items, inputs, dropdowns' },
  { name: 'full', value: '9999px',  note: 'Pills, chips, mega buttons, avatars' },
]

// ─── Spacing ──────────────────────────────────────────────────────────────────
const SPACING = [4, 6, 8, 10, 12, 15, 16, 18, 20, 23, 24, 25, 28, 30]

// ─── Component families ───────────────────────────────────────────────────────
type TokenSet = { surface?: string; border?: string; text?: string; icon?: string }
type Variant = { name: string; tokensLight?: TokenSet; tokensDark?: TokenSet }
type ComponentEntry = { name: string; status: string; react?: boolean; figmaId?: string; variants: Variant[] }
type ComponentFamily = { id: string; label: string; components: ComponentEntry[] }

const FAMILIES: ComponentFamily[] = [
  {
    id: 'buttons', label: 'Buttons',
    components: [
      {
        name: 'button', status: 'fait', react: true, figmaId: '609:17137',
        variants: [
          { name: 'ghost',    tokensLight: { surface: '#ecedee (hover)', border: 'none',     text: '#444955', icon: '#444955' } },
          { name: 'outlined', tokensLight: { surface: 'transparent',    border: '#a1a4aa',   text: '#444955', icon: '#444955' } },
        ],
      },
      {
        name: 'icon button', status: 'fait',
        variants: [{ name: 'default', tokensLight: { surface: 'transparent', border: 'none', icon: '#444955' } }],
      },
      {
        name: 'icon button mega', status: 'fait', figmaId: '609:17120',
        variants: [
          { name: 'outlined default', tokensLight: { surface: 'transparent', border: '#a1a4aa', icon: '#444955' } },
        ],
      },
      { name: 'button . nav . next', status: 'fait', variants: [{ name: 'default' }, { name: 'hover' }] },
      { name: 'button . sort', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'inputs', label: 'Inputs & Text Fields',
    components: [
      {
        name: 'Input', status: 'fait', react: true, figmaId: '1106:28985',
        variants: [
          { name: 'default',  tokensLight: { surface: '#ffffff', border: '#ecedee (bottom only)', text: '#444955' } },
          { name: 'placeholder', tokensLight: { surface: '#ffffff', border: '#ecedee', text: '#a1a4aa (SemiBold)' } },
        ],
      },
      {
        name: 'Label', status: 'fait',
        variants: [{ name: 'default', tokensLight: { text: '#444955', surface: 'none' } }],
      },
    ],
  },
  {
    id: 'badges', label: 'Badges, Chips & Stickers',
    components: [
      { name: 'Badge', status: 'fait', react: true, variants: [
        { name: 'default' }, { name: 'secondary' }, { name: 'info' },
        { name: 'success' }, { name: 'warning' }, { name: 'destructive' }, { name: 'outline' },
      ]},
      {
        name: 'atome . sticker', status: 'fait', figmaId: '1167:32935',
        variants: [
          { name: 'default', tokensLight: { surface: '#ecedee', border: '#dadbdd', text: '#444955 Bold 12px' } },
        ],
      },
      { name: 'atome . criteria', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'atome . message . status', status: 'fait', variants: [{ name: 'none' }, { name: 'fail' }, { name: 'success' }] },
      { name: 'atome . text + icon . medium', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'atome . text + icon . date', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'navigation', label: 'Navigation',
    components: [
      {
        name: 'agent navigation rail . desktop', status: 'fait', figmaId: '1081:33432',
        variants: [
          { name: 'light', tokensLight: { surface: '#ffffff', icon: '#a1a4aa', border: 'none' } },
          { name: 'selected item', tokensLight: { surface: '#e9f7ff', icon: '#7b72f9', border: 'none' } },
        ],
      },
      { name: 'button . nav . dashboard',     status: 'fait', variants: [{ name: 'default' }, { name: 'hover' }, { name: 'selected' }] },
      { name: 'button . nav . client',         status: 'fait', variants: [{ name: 'default' }, { name: 'hover' }, { name: 'selected' }] },
      { name: 'button . nav . bien',           status: 'fait', variants: [{ name: 'default' }, { name: 'hover' }, { name: 'selected' }] },
      { name: 'button . nav . affaire',        status: 'fait', variants: [{ name: 'default' }, { name: 'hover' }, { name: 'selected' }] },
      { name: 'button . nav . document',       status: 'fait', variants: [{ name: 'default' }, { name: 'hover' }, { name: 'selected' }] },
      { name: 'button . nav . automatisation', status: 'fait', variants: [{ name: 'default' }, { name: 'hover' }, { name: 'selected' }] },
      { name: 'breadcrumb',   status: 'fait', variants: [{ name: 'default' }] },
      { name: 'button profile', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'app-bars', label: 'App Bars',
    components: [
      {
        name: 'App bar_category', status: 'fait', figmaId: '602:16811',
        variants: [
          { name: 'default', tokensLight: { surface: '#ffffff', text: '#333740 H4 28px Bold' } },
        ],
      },
      { name: 'App bar_Fiche client',            status: 'fait', figmaId: '609:17515', variants: [{ name: 'default' }] },
      { name: 'App bar_Fiche client_Messagerie', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'App bar_Fiche Bien',              status: 'fait', variants: [{ name: 'default' }] },
      { name: 'App bar_Fiche Bien_Annonce',      status: 'fait', variants: [{ name: 'default' }] },
      { name: 'App bar_Fiche Affaire',           status: 'fait', variants: [{ name: 'default' }] },
      { name: 'App bar_bar_Fiche Affaire_Metrics', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'App bar_Fiche Automatisation',    status: 'fait', variants: [{ name: 'default' }] },
      { name: 'App bar_Fiche document',          status: 'fait', variants: [{ name: 'default' }] },
      { name: 'App bar_Ajout de bdd',            status: 'fait', variants: [{ name: 'default' }] },
      { name: 'App bar_Import bdd',              status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'lists', label: 'Lists',
    components: [
      {
        name: 'list . client', status: 'fait', figmaId: '970:69728',
        variants: [
          { name: 'default', tokensLight: { surface: '#ffffff', border: '#ecedee', text: '#444955' } },
          { name: 'hover',   tokensLight: { surface: '#f9f9f9', border: '#ecedee', text: '#444955' } },
        ],
      },
      { name: 'list . bien',     status: 'fait', variants: [{ name: 'default', tokensLight: { surface: '#ffffff', border: '#ecedee' } }] },
      { name: 'list . affaire',  status: 'fait', variants: [{ name: 'default', tokensLight: { surface: '#ffffff', border: '#ecedee' } }] },
      { name: 'list . document', status: 'fait', variants: [{ name: 'default', tokensLight: { surface: '#ffffff', border: '#ecedee' } }] },
      { name: 'list . évènement',status: 'fait', variants: [{ name: 'default' }] },
      { name: 'list . automation',status: 'fait', variants: [{ name: 'default' }, { name: 'expanded' }] },
      { name: 'list . import . data . select', status: 'fait', variants: [{ name: 'default' }, { name: 'success' }, { name: 'error' }] },
    ],
  },
  {
    id: 'menu', label: 'Menu & Dropdowns',
    components: [
      {
        name: 'dropdown', status: 'fait', figmaId: '970:77207',
        variants: [
          { name: 'ghost',  tokensLight: { surface: 'transparent', text: '#6d6d6d', border: 'none' } },
          { name: 'shadow', tokensLight: { surface: '#ffffff', text: '#444955', border: '#ffffff (shadow)' } },
        ],
      },
      { name: 'menu item', status: 'fait', variants: [{ name: 'default' }, { name: 'selected' }, { name: 'hover' }] },
    ],
  },
  {
    id: 'switch-radio', label: 'Switch, Checkbox & Radio',
    components: [
      { name: 'switch', status: 'fait', variants: [{ name: 'off' }, { name: 'on' }] },
      {
        name: 'checkbox', status: 'fait', figmaId: '1164:32863',
        variants: [
          { name: 'checked',   tokensLight: { surface: '#ffffff', border: '#444955', icon: '#444955' } },
          { name: 'unchecked', tokensLight: { surface: '#ffffff', border: '#a1a4aa', icon: 'none' } },
        ],
      },
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
    id: 'loading', label: 'Loading & Progress',
    components: [
      { name: 'progess bar', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'atome . process bar', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'dividers', label: 'Dividers',
    components: [
      { name: 'horizontal divider', status: 'fait', variants: [{ name: '1191px' }, { name: '935px' }, { name: '350px' }] },
      { name: 'vertical divider 84px', status: 'fait', variants: [{ name: 'default' }, { name: 'hover' }] },
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
      { name: 'dashboard . suggestions', status: 'fait', variants: [{ name: 'default' }] },
      { name: 'organisme . suggestion', status: 'fait', variants: [{ name: 'default' }] },
    ],
  },
  {
    id: 'scoring', label: 'Scoring',
    components: [
      { name: 'organisme . scoring . section list', status: 'fait', variants: [{ name: 'Up light' }, { name: 'Down light' }] },
    ],
  },
  {
    id: 'graphs', label: 'Graphs',
    components: [
      {
        name: 'graph . courbe', status: 'fait', figmaId: '1053:23841',
        variants: [{ name: 'default', tokensLight: { surface: '#ecedee', border: 'none' } }],
      },
      { name: 'card . graph . indicateur', status: 'fait', variants: [{ name: 'default', tokensLight: { surface: '#ffffff', border: 'none (shadow)' } }] },
    ],
  },
  {
    id: 'icons', label: 'Icons',
    components: [
      { name: 'icon . dpe', status: 'fait', variants: [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }, { name: 'E' }, { name: 'F' }, { name: 'G' }] },
    ],
  },
]

// ─── Helper atoms ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    'fait':       'bg-[#7cd064]/10 text-[#5ab04a] border border-[#7cd064]/30',
    'à faire':    'bg-[#f8d862]/10 text-[#8a7300] border border-[#f8d862]/50',
    'factoriser': 'bg-[#33a0fa]/10 text-[#1a7fd4] border border-[#33a0fa]/30',
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${map[status] ?? 'bg-[#ecedee] text-[#737780] border border-[#ecedee]'}`}>
      {status}
    </span>
  )
}

function ColorSwatch({ hex, label, token }: { hex: string; label: string; token?: string; name?: string }) {
  const [copied, setCopied] = useState(false)
  const isDark = parseInt(hex.replace('#','').slice(0, 2), 16) < 140
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1200) }}
      className="group flex flex-col rounded-xl overflow-hidden border border-[#ecedee] hover:shadow-md transition-shadow text-left"
      title={`${hex} — ${token}`}
    >
      <div className="h-12 w-full flex items-center justify-center relative" style={{ backgroundColor: hex }}>
        {copied && (
          <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-[#333740]'}`}>✓ Copié</span>
        )}
      </div>
      <div className="px-2 py-1.5 bg-white">
        <p className="text-xs font-bold text-[#333740] truncate">{label}</p>
        <code className="text-xs text-[#a1a4aa]">{hex}</code>
        {token && <p className="text-xs text-[#d0d1d4] truncate mt-0.5">{token}</p>}
      </div>
    </button>
  )
}

function TokenTable({ variants }: { variants: Variant[] }) {
  const withTokens = variants.filter(v => v.tokensLight && Object.values(v.tokensLight).some(Boolean))
  if (withTokens.length === 0) return null
  const slots = ['surface', 'border', 'text', 'icon'] as const
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr style={{ backgroundColor: F.n50 }}>
            <th className="text-left p-2 border border-[#ecedee] text-[#737780] font-bold">Variante</th>
            {slots.map(s => <th key={s} className="text-left p-2 border border-[#ecedee] text-[#737780] font-bold">{s}</th>)}
          </tr>
        </thead>
        <tbody>
          {withTokens.map(v => (
            <tr key={v.name} className="hover:bg-[#f9f9f9] transition-colors">
              <td className="p-2 border border-[#ecedee] font-bold text-[#444955]">{v.name}</td>
              {slots.map(s => (
                <td key={s} className="p-2 border border-[#ecedee]">
                  {v.tokensLight?.[s] ? (
                    <span className="inline-flex items-center gap-1.5">
                      {v.tokensLight[s]!.startsWith('#') && (
                        <span className="w-3 h-3 rounded-sm border border-[#ecedee] flex-shrink-0 inline-block"
                          style={{ backgroundColor: v.tokensLight[s] }} />
                      )}
                      <code className="text-xs text-[#444955]">{v.tokensLight[s]}</code>
                    </span>
                  ) : <span className="text-[#d0d1d4]">—</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Live previews (Figma-accurate) ──────────────────────────────────────────

// BUTTON
function ButtonPreview() {
  return (
    <div className="space-y-5 p-4 rounded-[20px] border border-[#ecedee] bg-white">
      {/* Figma ghost button */}
      <div>
        <p className="text-xs font-bold text-[#a1a4aa] uppercase tracking-widest mb-3">Ghost / text button · Figma</p>
        <div className="flex flex-wrap gap-3 items-center">
          <button className="flex items-center gap-2 px-3 py-3 rounded-[16px] text-[16px] font-semibold text-[#444955] tracking-[0.16px] hover:bg-[#ecedee] transition-colors">
            Voir tout <ArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 px-3 py-3 rounded-[16px] text-[16px] font-semibold text-[#444955] tracking-[0.16px] hover:bg-[#ecedee] transition-colors">
            tous <ChevronDown className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-[#a1a4aa] mt-2">
          border-radius: 16px · padding: 12px · font: SemiBold 16px · letter-spacing: 0.16px
        </p>
      </div>

      {/* Icon buttons */}
      <div>
        <p className="text-xs font-bold text-[#a1a4aa] uppercase tracking-widest mb-3">Icon buttons</p>
        <div className="flex flex-wrap gap-3 items-center">
          <button className="p-3 rounded-[16px] hover:bg-[#ecedee] transition-colors text-[#444955]">
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-[16px] hover:bg-[#ecedee] transition-colors text-[#444955]">
            <Search className="w-5 h-5" />
          </button>
          {/* Mega icon button */}
          <button className="w-[70px] h-[70px] rounded-full border border-[#a1a4aa] flex items-center justify-center hover:bg-[#ecedee] transition-colors text-[#444955]">
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-[#a1a4aa] mt-2">
          Icon button: p-3 rounded-[16px] · Mega: 70×70 rounded-full border-[#a1a4aa]
        </p>
      </div>

      {/* UI library component */}
      <div className="pt-3 border-t border-[#ecedee]">
        <p className="text-xs font-bold text-[#a1a4aa] uppercase tracking-widest mb-3">@real-estate/ui ‹Button›</p>
        <div className="flex flex-wrap gap-2 items-center">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  )
}

// INPUT — underline style (Figma: border-bottom only, no border-box)
function InputPreview() {
  return (
    <div className="space-y-5 p-4 rounded-[20px] border border-[#ecedee] bg-white max-w-sm">
      {/* Figma underline input */}
      <div>
        <p className="text-xs font-bold text-[#a1a4aa] uppercase tracking-widest mb-3">Input · Figma style (underline)</p>
        <div className="flex flex-col gap-3">
          <label className="text-[16px] font-normal text-[#444955] tracking-[0.16px]">Identifiant</label>
          <div className="bg-white border-b border-[#ecedee] px-3 py-[18px]">
            <span className="text-[16px] font-semibold text-[#a1a4aa] tracking-[0.16px]">Identifiant</span>
          </div>
        </div>
        <p className="text-xs text-[#a1a4aa] mt-2">
          border: bottom only #ecedee · placeholder: SemiBold #a1a4aa · py-[18px]
        </p>
      </div>
      {/* Focused state */}
      <div>
        <div className="flex flex-col gap-3">
          <label className="text-[16px] font-normal text-[#444955] tracking-[0.16px]">Email</label>
          <div className="bg-white border-b-2 border-[#7b72f9] px-3 py-[18px]">
            <span className="text-[16px] font-normal text-[#444955] tracking-[0.16px]">damien@1936.ai</span>
          </div>
        </div>
      </div>
      {/* UI library */}
      <div className="pt-3 border-t border-[#ecedee]">
        <p className="text-xs font-bold text-[#a1a4aa] uppercase tracking-widest mb-2">@real-estate/ui ‹Input›</p>
        <Input placeholder="Placeholder..." />
      </div>
    </div>
  )
}

// NAVIGATION RAIL — 90px wide, icons only, no text labels
function NavigationPreview() {
  const [active, setActive] = useState('clients')
  const top = [{ id: 'dashboard', icon: Home }, { id: 'database', icon: Database }]
  const mid = [{ id: 'clients', icon: Users }, { id: 'biens', icon: MapPin }, { id: 'affaires', icon: Briefcase }, { id: 'documents', icon: FileText }]
  const bot = [{ id: 'events', icon: Calendar }, { id: 'automations', icon: Zap }]
  const navBtn = (id: string, Icon: React.ElementType) => (
    <button key={id} onClick={() => setActive(id)}
      className="flex items-center justify-center w-[68px] h-[50px] rounded-[20px] transition-colors"
      style={{ backgroundColor: active === id ? F.indigoSoft : 'transparent' }}
      title={id}
    >
      <Icon className="w-6 h-6" style={{ color: active === id ? F.indigo : F.n300 }} />
    </button>
  )
  return (
    <div className="bg-white flex flex-col items-center py-[10px] w-[90px] rounded-[20px] border border-[#ecedee] overflow-hidden"
      style={{ height: 420 }}>
      {/* Logo */}
      <div className="flex items-center justify-center w-full h-[75px] px-[11px]">
        <div className="w-12 h-7 rounded flex items-center justify-center" style={{ backgroundColor: F.nDefault }}>
          <span className="text-white text-xs font-bold tracking-wider">ORPI</span>
        </div>
      </div>
      {/* Top section */}
      <div className="flex flex-col gap-[10px] w-[68px]">
        {top.map(({ id, icon }) => navBtn(id, icon))}
      </div>
      {/* Divider */}
      <div className="w-[10px] border-t border-[#ecedee] my-[10px]" />
      {/* Mid section */}
      <div className="flex flex-col gap-[10px] w-[68px]">
        {mid.map(({ id, icon }) => navBtn(id, icon))}
      </div>
      {/* Divider */}
      <div className="w-[10px] border-t border-[#ecedee] my-[10px]" />
      {/* Bottom section */}
      <div className="flex flex-col gap-[10px] w-[68px]">
        {bot.map(({ id, icon }) => navBtn(id, icon))}
      </div>
      {/* Avatar */}
      <div className="mt-auto mb-1">
        <div className="w-[54px] h-[54px] rounded-full bg-[#ecedee] flex items-center justify-center overflow-hidden">
          <Users className="w-5 h-5 text-[#a1a4aa]" />
        </div>
      </div>
      <p className="text-[10px] text-[#d0d1d4] mt-1">90px · icons only</p>
    </div>
  )
}

// APP BAR — category header with filter + action buttons
function AppBarPreview() {
  return (
    <div className="bg-white px-[10px] py-[25px] rounded-[20px] border border-[#ecedee]">
      <div className="flex items-center gap-2">
        <span className="text-[28px] font-bold text-[#333740] tracking-[0.28px] px-[10px] leading-[34px]">
          Clients
        </span>
        <button className="flex items-center gap-2 px-3 py-3 rounded-[16px] text-[16px] font-semibold text-[#444955] tracking-[0.16px] hover:bg-[#ecedee] transition-colors">
          tous <ChevronDown className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-[16px] hover:bg-[#ecedee] transition-colors text-[#444955]">
          <Plus className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-[16px] hover:bg-[#ecedee] transition-colors text-[#444955]">
          <Search className="w-5 h-5" />
        </button>
      </div>
      <p className="text-xs text-[#a1a4aa] mt-3 px-[10px]">
        H4 28px Bold #333740 · py-[25px] · buttons: rounded-[16px] p-3
      </p>
    </div>
  )
}

// LIST CLIENT — full card with 5 sections + dividers
function ListClientPreview() {
  return (
    <div className="overflow-x-auto">
      <div className="bg-white border border-[#ecedee] rounded-[20px] flex items-center gap-[15px] min-w-[700px]" style={{ height: 120 }}>
        {/* Name */}
        <div className="flex flex-col pl-[30px] pr-[20px] py-[34px] w-[213px] shrink-0">
          <span className="text-[16px] font-normal text-[#444955] tracking-[0.16px] leading-[20px]">Jean-Christophe</span>
          <span className="text-[16px] font-bold text-[#444955] tracking-[0.16px] leading-[20px] mt-3">LEMARCHAND</span>
        </div>
        {/* Divider */}
        <div className="w-px self-stretch flex items-center justify-center mx-0"><div className="w-px h-[84px] bg-[#ecedee]" /></div>
        {/* Score */}
        <div className="flex flex-col items-center justify-center px-[15px] py-[28px] w-[90px] shrink-0">
          <span className="text-[40px] font-semibold text-[#333740] tracking-[0.4px] leading-[48px]">76</span>
          <div className="flex items-center gap-1 text-[14px] text-[#444955] tracking-[0.14px]">
            <span>score</span>
            <TrendingUp className="w-3.5 h-3.5 text-[#7cd064]" />
          </div>
        </div>
        {/* Divider */}
        <div className="w-px self-stretch flex items-center"><div className="w-px h-[84px] bg-[#ecedee]" /></div>
        {/* Qualification */}
        <div className="flex flex-col gap-6 px-3 py-7 w-[200px] shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-semibold text-[#d0d1d4] tracking-[0.14px]">QUALIFICATION</span>
            <span className="text-[14px] font-normal text-[#d0d1d4] tracking-[0.14px]">82%</span>
          </div>
          <div className="flex gap-3">
            <Users className="w-5 h-5 text-[#a1a4aa]" />
            <TrendingUp className="w-5 h-5 text-[#a1a4aa]" />
            <Briefcase className="w-5 h-5 text-[#a1a4aa]" />
          </div>
        </div>
        {/* Divider */}
        <div className="w-px self-stretch flex items-center"><div className="w-px h-[84px] bg-[#ecedee]" /></div>
        {/* Engagement */}
        <div className="flex flex-col gap-6 px-3 py-7 w-[200px] shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-semibold text-[#d0d1d4] tracking-[0.14px]">ENGAGEMENT</span>
            <span className="text-[14px] font-normal text-[#d0d1d4] tracking-[0.14px]">48%</span>
          </div>
          <div className="flex items-center gap-2">
            {[true, true, true, true, false].map((ok, i) => (
              <div key={i} className={`w-[18px] h-[18px] rounded-full border ${ok ? 'border-[#7cd064] bg-[#7cd064]/20' : 'border-[#ecedee] bg-white'}`} />
            ))}
          </div>
        </div>
        {/* AI suggestion */}
        <div className="flex items-center justify-center pl-[19px] pr-[38px] py-[48px] ml-auto shrink-0">
          <span className="bg-white border border-[#a1a4aa] rounded-full px-[6px] py-[4px] text-[12px] font-bold text-[#a1a4aa] tracking-[0.12px]">0</span>
        </div>
      </div>
      <p className="text-xs text-[#a1a4aa] mt-2">
        border-radius: 20px · h: 120px · sections séparées par dividers 84px · score: 40px SemiBold
      </p>
    </div>
  )
}

// BADGE
function BadgePreview() {
  return (
    <div className="p-4 rounded-[20px] border border-[#ecedee] bg-white space-y-3">
      <div>
        <p className="text-xs font-bold text-[#a1a4aa] uppercase tracking-widest mb-2">@real-estate/ui ‹Badge›</p>
        <div className="flex flex-wrap gap-2">
          {(['default','secondary','info','success','warning','destructive','outline'] as const).map(v => (
            <Badge key={v} variant={v}>{v}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

// STICKER / CHIP
function StickerPreview() {
  const stickers = [
    { label: 'ACTIVE',       bg: F.n50,         border: F.n100 },
    { label: 'ACQUÉREUR',    bg: F.n50,         border: F.n100 },
    { label: 'VENDEUR',      bg: F.n50,         border: F.n100 },
    { label: 'INVESTISSEUR', bg: F.n50,         border: F.n100 },
    { label: 'EN COURS',     bg: '#e9f7ff',     border: '#b3ddfa' },
    { label: 'SIGNÉ',        bg: '#7cd064]/10', border: F.green },
    { label: 'ANNULÉ',       bg: '#e95d66]/10', border: F.red },
  ]
  return (
    <div className="p-4 rounded-[20px] border border-[#ecedee] bg-white">
      <p className="text-xs font-bold text-[#a1a4aa] uppercase tracking-widest mb-3">
        Figma · bg #ecedee · border #dadbdd · rounded-full · px-2 py-1 · Bold 12px
      </p>
      <div className="flex flex-wrap gap-2">
        {stickers.map(({ label, bg, border }) => (
          <span key={label}
            className="rounded-full px-2 py-1 text-[12px] font-bold text-[#444955] tracking-[0.12px]"
            style={{ backgroundColor: bg, border: `1px solid ${border}` }}>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

// DROPDOWN
function DropdownPreview() {
  return (
    <div className="p-4 rounded-[20px] border border-[#ecedee] bg-white flex flex-wrap gap-4 items-center">
      <div>
        <p className="text-xs font-bold text-[#a1a4aa] uppercase tracking-widest mb-2">Shadow variant</p>
        <button className="flex items-center gap-1 px-5 py-3 rounded-[20px] bg-white text-[16px] font-semibold text-[#444955] tracking-[0.16px] shadow-[1px_1px_8px_0px_rgba(0,0,0,0.15)] hover:shadow-md transition-shadow">
          Label <ChevronDown className="w-5 h-5" />
        </button>
      </div>
      <div>
        <p className="text-xs font-bold text-[#a1a4aa] uppercase tracking-widest mb-2">Ghost variant</p>
        <div className="inline-flex items-center px-2.5 py-1.5 rounded-[10px] hover:bg-[#ecedee] transition-colors cursor-pointer">
          <span className="text-[16px] font-normal text-[#737780] tracking-[0.16px]">100</span>
          <ChevronDown className="w-5 h-5 text-[#737780] ml-1" />
        </div>
      </div>
    </div>
  )
}

// CHECKBOX — ROUND (border-radius: 20px from Figma !)
function CheckboxPreview() {
  const [checked, setChecked] = useState(true)
  const [checked2, setChecked2] = useState(false)
  return (
    <div className="p-4 rounded-[20px] border border-[#ecedee] bg-white space-y-3">
      <p className="text-xs font-bold text-[#a1a4aa] uppercase tracking-widest mb-3">
        Figma · border-radius: 20px · border: #444955 · p-1 · icon Check 20px
      </p>
      <div className="flex items-center gap-3">
        <button onClick={() => setChecked(!checked)}
          className="w-7 h-7 flex items-center justify-center transition-colors p-1 bg-white"
          style={{ borderRadius: '20px', border: `1px solid ${checked ? F.nDefault : F.n300}` }}>
          {checked && <Check className="w-4 h-4 text-[#444955]" strokeWidth={3} />}
        </button>
        <span className="text-[16px] text-[#444955] tracking-[0.16px]">Option sélectionnée</span>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => setChecked2(!checked2)}
          className="w-7 h-7 flex items-center justify-center transition-colors p-1 bg-white"
          style={{ borderRadius: '20px', border: `1px solid ${checked2 ? F.nDefault : F.n300}` }}>
          {checked2 && <Check className="w-4 h-4 text-[#444955]" strokeWidth={3} />}
        </button>
        <span className="text-[16px] text-[#444955] tracking-[0.16px]">Option non sélectionnée</span>
      </div>
    </div>
  )
}

// SWITCH
function SwitchPreview() {
  const [on, setOn] = useState(false)
  return (
    <div className="p-4 rounded-[20px] border border-[#ecedee] bg-white flex items-center gap-4">
      <button onClick={() => setOn(!on)}
        className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
        style={{ backgroundColor: on ? F.indigo : F.n300 }}>
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${on ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
      <span className="text-[16px] font-semibold text-[#444955] tracking-[0.16px]">{on ? 'On' : 'Off'}</span>
    </div>
  )
}

// DPE icons
function DpePreview() {
  const dpe = [
    { l: 'A', bg: '#6cde20' }, { l: 'B', bg: '#c1e01e' }, { l: 'C', bg: '#ebc718' },
    { l: 'D', bg: '#ed6711' }, { l: 'E', bg: '#f00f0f' }, { l: 'F', bg: '#cc0000' }, { l: 'G', bg: '#990000' },
  ]
  return (
    <div className="p-4 rounded-[20px] border border-[#ecedee] bg-white flex gap-2 flex-wrap">
      {dpe.map(({ l, bg }) => (
        <div key={l} className="w-8 h-8 rounded flex items-center justify-center font-bold text-sm text-white"
          style={{ backgroundColor: bg }}>
          {l}
        </div>
      ))}
    </div>
  )
}

// Live previews map
const LIVE_PREVIEWS: Record<string, React.ReactNode> = {
  'button':                            <ButtonPreview />,
  'Input':                             <InputPreview />,
  'Badge':                             <BadgePreview />,
  'agent navigation rail . desktop':   <NavigationPreview />,
  'App bar_category':                  <AppBarPreview />,
  'list . client':                     <ListClientPreview />,
  'atome . sticker':                   <StickerPreview />,
  'dropdown':                          <DropdownPreview />,
  'checkbox':                          <CheckboxPreview />,
  'switch':                            <SwitchPreview />,
  'icon . dpe':                        <DpePreview />,
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-[24px] font-bold text-[#333740] tracking-[0.24px] mb-6 pb-3 border-b-2 border-[#7b72f9]">
        {title}
      </h2>
      {children}
    </section>
  )
}

// ─── Main client component ────────────────────────────────────────────────────
export function DesignSystemClient() {
  const [dark, setDark] = useState(false)
  const [activeSection, setActiveSection] = useState('tokens')
  const mainRef = useRef<HTMLDivElement>(null)

  const NAV = [
    { id: 'tokens',     label: 'Token Map' },
    { id: 'colors',     label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing',    label: 'Spacing & Radius' },
    ...FAMILIES.map(f => ({ id: f.id, label: f.label })),
  ]

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    const container = mainRef.current
    if (el && container) {
      // getBoundingClientRect() gives position relative to viewport;
      // subtracting container's top + current scrollTop gives correct scroll target
      const top = el.getBoundingClientRect().top
        - container.getBoundingClientRect().top
        + container.scrollTop
        - 32
      container.scrollTo({ top, behavior: 'smooth' })
    }
    setActiveSection(id)
  }

  useEffect(() => {
    if (!mainRef.current) return
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { root: mainRef.current, rootMargin: '-10% 0px -60% 0px' }
    )
    NAV.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totalComponents = FAMILIES.reduce((acc, f) => acc + f.components.length, 0)
  const totalDone = FAMILIES.reduce((acc, f) => acc + f.components.filter(c => c.status === 'fait').length, 0)
  const totalWithPreview = FAMILIES.reduce((acc, f) => acc + f.components.filter(c => LIVE_PREVIEWS[c.name]).length, 0)
  const totalWithFigma = FAMILIES.reduce((acc, f) => acc + f.components.filter(c => c.figmaId).length, 0)

  return (
    <div
      className="h-screen flex flex-col overflow-hidden font-sans"
      style={{ backgroundColor: dark ? '#111111' : '#f5f5f5', color: dark ? '#f0f0f0' : F.nDefault } as React.CSSProperties}
    >
      {/* ── Header ── */}
      <header
        className="flex-none flex items-center justify-between px-6 h-14 border-b border-[#ecedee] z-10"
        style={{ backgroundColor: dark ? '#1a1a1a' : '#ffffff' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[#7b72f9] flex items-center justify-center">
            <Home className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-[#333740]">Design System</span>
          <span className="text-[#a1a4aa] text-sm">— RealAgent</span>
          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-[#e95d66]/10 text-[#e95d66] border border-[#e95d66]/20 font-bold">
            DEV ONLY
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-sm text-[#737780]">
            <span><strong className="text-[#444955]">{totalDone}</strong>/{totalComponents} Figma</span>
            <span className="text-[#ecedee]">|</span>
            <span><strong className="text-[#444955]">{totalWithFigma}</strong> node IDs</span>
            <span className="text-[#ecedee]">|</span>
            <span><strong className="text-[#444955]">{totalWithPreview}</strong> React previews</span>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ecedee] text-sm font-bold transition-colors hover:bg-[#ecedee]"
            style={{ color: dark ? '#f0f0f0' : F.nDefault }}
          >
            {dark ? <><Sun className="w-4 h-4" /> Light</> : <><Moon className="w-4 h-4" /> Dark</>}
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden" style={{ display: 'flex', flexDirection: 'row', flex: '1 1 0%', overflow: 'hidden' }}>
        {/* ── Sidebar ── */}
        <aside
          className="w-52 flex-none overflow-y-auto border-r border-[#ecedee] py-4 px-2"
          style={{ backgroundColor: dark ? '#1a1a1a' : '#ffffff', width: '208px', minWidth: '208px', maxWidth: '208px', flex: '0 0 208px', overflowY: 'auto' }}
        >
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="w-full text-left px-3 py-2 rounded-xl text-sm transition-colors mb-0.5"
              style={{
                backgroundColor: activeSection === id ? F.indigoSoft : 'transparent',
                color: activeSection === id ? F.indigo : F.n400,
                fontWeight: activeSection === id ? 700 : 400,
              }}
            >
              {label}
            </button>
          ))}
        </aside>

        {/* ── Main content ── */}
        <main ref={mainRef} className="flex-1 overflow-y-auto px-10 py-8 max-w-5xl" style={{ flex: '1 1 0%', overflowY: 'auto', minWidth: 0 }}>

          {/* ── Token Map ── */}
          <Section id="tokens" title="Token Map — Figma ↔ Local">
            <div className="mb-6 p-4 rounded-[20px] bg-[#fff8e6] border border-[#f8d862]/50">
              <p className="text-sm font-bold text-[#8a7300] mb-1">Discordances importantes à corriger</p>
              <p className="text-sm text-[#8a7300]">
                Les tokens Figma utilisent un système de nommage différent des variables CSS locales.
                Les border-radius sont particulièrement différents : Figma utilise 16px et 20px,
                le projet local utilise 4px et 8px.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse rounded-[20px] overflow-hidden">
                <thead>
                  <tr style={{ backgroundColor: F.n50 }}>
                    <th className="text-left p-3 border border-[#ecedee] text-[#737780] font-bold">Token Figma</th>
                    <th className="text-left p-3 border border-[#ecedee] text-[#737780] font-bold">Valeur Figma</th>
                    <th className="text-left p-3 border border-[#ecedee] text-[#737780] font-bold">Token local (projet)</th>
                    <th className="text-left p-3 border border-[#ecedee] text-[#737780] font-bold">Valeur locale</th>
                    <th className="text-left p-3 border border-[#ecedee] text-[#737780] font-bold">Match</th>
                  </tr>
                </thead>
                <tbody>
                  {TOKEN_MAP.map(({ figma, fHex, local, lHex, match }) => (
                    <tr key={figma} className="hover:bg-[#f9f9f9]">
                      <td className="p-3 border border-[#ecedee]"><code className="text-xs text-[#7b72f9] font-bold">{figma}</code></td>
                      <td className="p-3 border border-[#ecedee]">
                        <span className="inline-flex items-center gap-2">
                          {fHex.startsWith('#') && (
                            <span className="w-4 h-4 rounded border border-[#ecedee] inline-block flex-shrink-0" style={{ backgroundColor: fHex }} />
                          )}
                          <code className="text-xs">{fHex}</code>
                        </span>
                      </td>
                      <td className="p-3 border border-[#ecedee]"><code className="text-xs text-[#737780]">{local}</code></td>
                      <td className="p-3 border border-[#ecedee]">
                        <span className="inline-flex items-center gap-2">
                          {lHex.startsWith('#') && (
                            <span className="w-4 h-4 rounded border border-[#ecedee] inline-block flex-shrink-0" style={{ backgroundColor: lHex }} />
                          )}
                          <code className="text-xs">{lHex}</code>
                        </span>
                      </td>
                      <td className="p-3 border border-[#ecedee]">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${match ? 'bg-[#7cd064]/10 text-[#5ab04a]' : 'bg-[#e95d66]/10 text-[#e95d66]'}`}>
                          {match ? '✓ ok' : '⚠ delta'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ── Colors ── */}
          <Section id="colors" title="Colors">
            {[
              { label: 'Neutral (Figma)', items: PALETTE.neutral },
              { label: 'Functional',      items: PALETTE.functional },
              { label: 'Score / DPE',     items: PALETTE.score },
            ].map(({ label, items }) => (
              <div key={label} className="mb-8">
                <h3 className="text-sm font-bold text-[#737780] uppercase tracking-widest mb-3">{label}</h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
                  {items.map(c => <ColorSwatch key={c.hex} hex={c.hex} label={c.label} token={'token' in c ? (c as { hex: string; label: string; token: string }).token : undefined} />)}
                </div>
              </div>
            ))}
          </Section>

          {/* ── Typography ── */}
          <Section id="typography" title="Typography">
            <p className="text-sm text-[#737780] mb-6">
              Font : <strong className="text-[#444955]">Roboto</strong> — weights 400 / 600 / 700 · letter-spacing systématique
            </p>
            <div className="space-y-2">
              {TYPE_SCALE.map(({ name, size, weight, lh, ls, sample }) => (
                <div key={name} className="flex items-baseline gap-4 p-4 rounded-[20px] border border-[#ecedee] bg-white">
                  <div style={{ fontSize: size, fontWeight: weight, lineHeight: lh, letterSpacing: ls, color: F.nDefault }} className="flex-1 min-w-0 truncate">
                    {sample}
                  </div>
                  <div className="shrink-0 text-right">
                    <code className="text-xs text-[#737780] block">{name}</code>
                    <span className="text-xs text-[#a1a4aa]">{size} / w{weight} / lh {lh} / ls {ls}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Spacing & Radius ── */}
          <Section id="spacing" title="Spacing & Radius">
            <div className="mb-8 p-4 rounded-[20px] bg-[#fff8e6] border border-[#f8d862]/50">
              <p className="text-sm font-bold text-[#8a7300]">
                Figma border-radius: sm = 16px · md = 20px (très arrondi !)
              </p>
              <p className="text-xs text-[#8a7300] mt-1">
                Les tokens Tailwind locaux (4px / 8px) ne correspondent pas au design Figma.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-sm font-bold text-[#737780] uppercase tracking-widest mb-4">Border radius (Figma)</h3>
              <div className="flex flex-wrap gap-6">
                {RADII.map(({ name, value, note }) => (
                  <div key={name} className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 border-2 border-[#7b72f9] bg-[#e9f7ff]"
                      style={{ borderRadius: value }} />
                    <div className="text-center">
                      <code className="text-xs font-bold text-[#444955] block">radius-{name}</code>
                      <span className="text-xs text-[#737780] block">{value}</span>
                      <span className="text-xs text-[#a1a4aa] block">{note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#737780] uppercase tracking-widest mb-4">Spacing scale</h3>
              <div className="space-y-2">
                {SPACING.map(px => (
                  <div key={px} className="flex items-center gap-4">
                    <code className="text-xs w-10 text-right text-[#737780] flex-shrink-0">{px}px</code>
                    <div className="h-5 rounded-sm flex-shrink-0" style={{ width: px, backgroundColor: F.indigo }} />
                    <span className="text-xs text-[#a1a4aa]">spacing-{px}</span>
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
                  <div key={comp.name} className="rounded-[20px] border border-[#ecedee] overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
                    {/* Component header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[#ecedee]" style={{ backgroundColor: F.n50 }}>
                      <div className="flex items-center gap-2">
                        <code className="font-bold text-sm text-[#333740]">{comp.name}</code>
                        {comp.figmaId && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs bg-[#7b72f9]/10 text-[#7b72f9] border border-[#7b72f9]/20 font-bold">
                            Figma {comp.figmaId}
                          </span>
                        )}
                        {LIVE_PREVIEWS[comp.name] && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs bg-[#33a0fa]/10 text-[#33a0fa] border border-[#33a0fa]/20 font-bold">
                            ⚛ React
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1 flex-wrap">
                          {comp.variants.map(v => (
                            <span key={v.name} className="px-1.5 py-0.5 rounded text-xs bg-white text-[#737780] border border-[#ecedee]">
                              {v.name}
                            </span>
                          ))}
                        </div>
                        <StatusBadge status={comp.status} />
                      </div>
                    </div>

                    <div className="p-4">
                      {LIVE_PREVIEWS[comp.name] && (
                        <div className="mb-4">
                          <p className="text-xs font-bold text-[#737780] uppercase tracking-wide mb-2">Preview</p>
                          {LIVE_PREVIEWS[comp.name]}
                        </div>
                      )}
                      <TokenTable variants={comp.variants} />
                      {!LIVE_PREVIEWS[comp.name] && !comp.variants.some(v => v.tokensLight) && (
                        <p className="text-xs text-[#a1a4aa] italic">
                          Composant Figma — preview à implémenter.
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
