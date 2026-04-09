/**
 * Utilitaires de formatage — devise, surface, dates
 */

export function formatPrice(value: number | null | undefined, currency = '€'): string {
  if (value == null) return '—';
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatSurface(sqm: number | null | undefined): string {
  if (sqm == null) return '—';
  return `${new Intl.NumberFormat('fr-FR').format(sqm)} m²`;
}

export function formatRelativeDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60_000);
  const diffHours = Math.floor(diffMs / 3_600_000);
  const diffDays = Math.floor(diffMs / 86_400_000);

  if (diffMin < 1) return "à l'instant";
  if (diffMin < 60) return `il y a ${diffMin} min`;
  if (diffHours < 24) return `il y a ${diffHours}h`;
  if (diffDays < 7) return `il y a ${diffDays}j`;
  if (diffDays < 30) return `il y a ${Math.floor(diffDays / 7)} sem.`;
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function formatFileSize(bytes: number | null | undefined): string {
  if (bytes == null) return '—';
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1_048_576) return `${(bytes / 1024).toFixed(0)} Ko`;
  return `${(bytes / 1_048_576).toFixed(1)} Mo`;
}

/**
 * Génère les initiales à partir d'un prénom et d'un nom (max 2 lettres)
 */
export function getInitials(firstName: string, lastName: string): string {
  return `${(firstName[0] || '').toUpperCase()}${(lastName[0] || '').toUpperCase()}`;
}

/**
 * Génère une couleur déterministe à partir d'un nom (pour les avatars)
 */
export function getAvatarColor(name: string): string {
  const colors = [
    '#7B72F9', '#E74C3C', '#2ECC71', '#3498DB', '#F39C12',
    '#9B59B6', '#1ABC9C', '#E67E22', '#2C3E50', '#16A085',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}
