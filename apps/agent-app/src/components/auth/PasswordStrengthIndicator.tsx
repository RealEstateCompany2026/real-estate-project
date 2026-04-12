'use client'

import { Check, X } from 'lucide-react'

const rules = [
  { label: 'Au moins 10 caractères', test: (p: string) => p.length >= 10 },
  { label: 'Une lettre majuscule et une minuscule', test: (p: string) => /[A-Z]/.test(p) && /[a-z]/.test(p) },
  { label: 'Un chiffre', test: (p: string) => /[0-9]/.test(p) },
  { label: 'Un caractère spécial (@, #, $, etc.)', test: (p: string) => /[^A-Za-z0-9]/.test(p) },
]

export function PasswordStrengthIndicator({ password }: { password: string }) {
  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--surface-neutral-action)] px-5 py-4">
      <p className="text-sm font-bold text-[var(--text-headings)] mb-3">
        Le mot de passe doit contenir
      </p>
      <ul className="space-y-1.5">
        {rules.map((rule) => {
          const passed = password.length > 0 && rule.test(password)
          return (
            <li key={rule.label} className="flex items-center gap-2 text-sm">
              {passed ? (
                <Check className="w-4 h-4 text-[var(--icon-success)]" />
              ) : (
                <X className="w-4 h-4 text-[var(--icon-neutral-default)]" />
              )}
              <span
                className={
                  passed
                    ? 'text-[var(--icon-success)]'
                    : 'text-[var(--text-caption)]'
                }
              >
                {rule.label}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
