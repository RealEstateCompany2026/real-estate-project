'use client'

type LogoBadgeVariant = 'default' | 'success' | 'error'

const variantStyles: Record<LogoBadgeVariant, string> = {
  default: 'bg-[var(--surface-branded-action)]',
  success: 'bg-[var(--icon-success)]',
  error: 'bg-[var(--text-error)]',
}

export function LogoBadge({ variant = 'default' }: { variant?: LogoBadgeVariant }) {
  return (
    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${variantStyles[variant]}`}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 8V24H12V18H20V24H24V8H20V14H12V8H8Z"
          fill="white"
        />
        <path
          d="M16 4L18 7H14L16 4Z"
          fill="white"
          opacity="0.8"
        />
      </svg>
    </div>
  )
}
