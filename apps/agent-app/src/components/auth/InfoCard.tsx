'use client'

import type { ReactNode } from 'react'

type InfoCardVariant = 'info' | 'warning' | 'success'

const variantStyles: Record<InfoCardVariant, string> = {
  info: 'border-[var(--color-grey-light-couleur-primaire)] bg-[var(--color-grey-ultra-background)]',
  warning: 'border-[var(--color-yellow-couleur-fonctionnelle)] bg-[var(--color-soft-yellow-background)]',
  success: 'border-[var(--color-green-couleur-fonctionnelle)] bg-white',
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
