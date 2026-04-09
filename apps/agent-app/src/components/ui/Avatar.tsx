'use client';

import { getInitials, getAvatarColor } from '@/lib/utils/format';

interface AvatarProps {
  firstName: string;
  lastName: string;
  imageUrl?: string | null;
  size?: 'sm' | 'md' | 'lg';
}

const SIZE_MAP = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-base',
};

/**
 * Avatar avec initiales et couleur déterministe.
 * Utilisé dans les cards client, sidebar, timeline, etc.
 */
export function Avatar({ firstName, lastName, imageUrl, size = 'md' }: AvatarProps) {
  const initials = getInitials(firstName, lastName);
  const color = getAvatarColor(`${firstName} ${lastName}`);

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={`${firstName} ${lastName}`}
        className={`${SIZE_MAP[size]} rounded-full object-cover`}
      />
    );
  }

  return (
    <div
      className={`${SIZE_MAP[size]} rounded-full flex items-center justify-center font-bold text-white shrink-0`}
      style={{ backgroundColor: color }}
      aria-label={`${firstName} ${lastName}`}
    >
      {initials}
    </div>
  );
}
