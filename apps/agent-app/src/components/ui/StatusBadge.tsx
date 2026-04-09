'use client';

interface StatusBadgeProps {
  label: string;
  color: string;
  variant?: 'filled' | 'outlined';
  size?: 'sm' | 'md';
}

/**
 * Badge de statut générique (Client status, Property status, etc.).
 * Accepte une couleur CSS directe pour flexibilité maximale.
 */
export function StatusBadge({ label, color, variant = 'filled', size = 'sm' }: StatusBadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  if (variant === 'outlined') {
    return (
      <span
        className={`inline-flex items-center rounded-full font-bold ${sizeClasses}`}
        style={{ color, border: `1.5px solid ${color}` }}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-bold text-white ${sizeClasses}`}
      style={{ backgroundColor: color }}
    >
      {label}
    </span>
  );
}
