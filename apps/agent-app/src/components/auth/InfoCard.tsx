'use client'

import type { ReactNode } from 'react'

type InfoCardVariant = 'info' | 'warning' | 'success'

const variantStyles: Record<InfoCardVariant, string> = {
  info: 'border-[var(--border-default)] bg-[var(--surface-neutral-action)]',
  warning: 'border-[var(--border-warning-default)] bg-[var(--surface-warning)]',
  success: 'border-[var(--icon-success)] bg-[var(--surface-neutral-default)]',
}

export function InfoCard({
  children,
  variant = 'info',
  className = '',
}: {
  children: ReactNode
  variant?: InfoCardVariant
  className?: string
}) {
  return (
    <div
      className={`rounded-xl border px-5 py-4 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  )
}
