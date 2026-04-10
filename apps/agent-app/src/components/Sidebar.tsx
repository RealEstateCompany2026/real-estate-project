'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home, Users, MapPin, Briefcase, FileText,
  Settings, Bell, Plus,
} from 'lucide-react';

const NAV_ITEMS = [
  { href: '/dashboard', icon: Home, label: 'Accueil' },
  { href: '/clients', icon: Users, label: 'Clients' },
  { href: '/properties', icon: MapPin, label: 'Biens' },
  { href: '/deals', icon: Briefcase, label: 'Affaires' },
  { href: '/documents', icon: FileText, label: 'Documents' },
];

/**
 * NavRail 90px — navigation principale de l'app agent.
 *
 * Tokens Figma:
 *   Background:  surface/page (#FFFFFF)
 *   Default:     icon neutral/300 (#A1A4AA), transparent bg
 *   Hover:       icon branded-action-hover (#635CC7), surface/neutral-action-hover (#DADBDD)
 *   Selected:    icon neutral-action (#444955), surface/neutral-action (#ECEDEE)
 *   Border:      border/divider (#ECEDEE)
 *   Radius btn:  border-radius/400 (16px) → rounded-lg
 */
export function Sidebar() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === '/dashboard') return pathname === '/dashboard' || pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <aside className="fixed top-0 left-0 h-screen w-[90px] bg-surface-page border-r border-edge-divider flex flex-col z-40">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-edge-divider">
        <div className="w-8 h-8 rounded-md bg-surface-branded-default flex items-center justify-center">
          <Home className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Quick add */}
      <div className="flex justify-center py-3">
        <Link
          href="/clients/new"
          className="w-10 h-10 rounded-lg bg-surface-branded-action text-white flex items-center justify-center hover:bg-surface-branded-action-hover transition-colors"
          title="Nouveau..."
        >
          <Plus className="w-5 h-5" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-1 px-2 py-2">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 w-full py-2 rounded-lg transition-colors ${
                active
                  ? 'bg-surface-neutral-action text-icon-neutral-action font-bold'
                  : 'text-neutral-300 hover:bg-surface-neutral-action-hover hover:text-icon-branded-action-hover'
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="flex flex-col items-center gap-2 py-3 border-t border-edge-divider">
        <button
          type="button"
          className="p-2 rounded-lg text-neutral-300 hover:bg-surface-neutral-action-hover hover:text-icon-branded-action-hover transition-colors"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="p-2 rounded-lg text-neutral-300 hover:bg-surface-neutral-action-hover hover:text-icon-branded-action-hover transition-colors"
          title="Paramètres"
        >
          <Settings className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-surface-branded-subtle text-content-branded-action flex items-center justify-center text-xs font-bold mt-1">
          AP
        </div>
      </div>
    </aside>
  );
}
