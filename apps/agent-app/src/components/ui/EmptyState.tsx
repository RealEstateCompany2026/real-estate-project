'use client';

import { type ReactNode } from 'react';

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

/**
 * État vide réutilisable pour les listes et sections sans données.
 */
export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-12 h-12 rounded-full bg-surface-information flex items-center justify-center text-content-branded-action mb-4">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-content-headings">{title}</h3>
      {description && (
        <p className="text-sm text-content-caption mt-1 max-w-xs">{description}</p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
