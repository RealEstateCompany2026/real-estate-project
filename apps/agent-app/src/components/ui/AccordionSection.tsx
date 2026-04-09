'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionSectionProps {
  id: string;
  title: string;
  icon?: ReactNode;
  defaultOpen?: boolean;
  badge?: string | number;
  children: ReactNode;
}

/**
 * Section pliable utilisée dans les fiches Client et Bien.
 * Sert d'ancre pour la SectionNav (id = ancre).
 */
export function AccordionSection({
  id,
  title,
  icon,
  defaultOpen = true,
  badge,
  children,
}: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section id={id} className="scroll-mt-20">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-white rounded-lg border border-neutral-grey-light hover:bg-background-subtle transition-colors"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-primary">{icon}</span>}
          <h2 className="text-base font-bold text-neutral-anthracite">{title}</h2>
          {badge != null && (
            <span className="inline-flex items-center justify-center h-5 min-w-[20px] px-1.5 rounded-full bg-primary text-white text-xs font-bold">
              {badge}
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-neutral-grey-bold transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div id={`${id}-content`} className="mt-2 px-6 py-4 bg-white rounded-lg border border-neutral-grey-light">
          {children}
        </div>
      )}
    </section>
  );
}
