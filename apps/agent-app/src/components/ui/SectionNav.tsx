'use client';

import { useEffect, useState } from 'react';

interface SectionLink {
  id: string;
  label: string;
}

interface SectionNavProps {
  sections: SectionLink[];
}

/**
 * Navigation latérale à ancres pour les fiches Client/Bien.
 * Met en surbrillance la section visible via IntersectionObserver.
 */
export function SectionNav({ sections }: SectionNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <nav className="sticky top-20 space-y-1" aria-label="Sections de la fiche">
      {sections.map((s) => (
        <button
          key={s.id}
          type="button"
          onClick={() => scrollTo(s.id)}
          className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
            activeId === s.id
              ? 'bg-surface-information text-content-branded-action font-bold'
              : 'text-content-caption hover:text-content-headings hover:bg-surface-neutral-action'
          }`}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}
