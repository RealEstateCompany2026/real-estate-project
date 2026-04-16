'use client';

import { usePathname, useRouter } from 'next/navigation';
import { NavRail, type NavSection } from '@real-estate/ui/nav-rail';
import { useTheme } from '@/components/ThemeProvider';

/**
 * Sidebar — Refactored to use NavRail DS component.
 * NavRail provides the 90px fixed navigation bar with proper spacing and styling.
 */
export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  function mapPathToSection(path: string): NavSection | undefined {
    if (path === '/dashboard' || path === '/') return 'dashboard';
    if (path.startsWith('/clients')) return 'clients';
    if (path.startsWith('/properties')) return 'properties';
    if (path.startsWith('/deals')) return 'deals';
    if (path.startsWith('/documents')) return 'documents';
    return undefined;
  }

  const activeSection = mapPathToSection(pathname);

  return (
    <NavRail
      activeSection={activeSection}
      isDark={theme === 'dark'}
      onThemeToggle={toggleTheme}
      onNavigate={(section) => {
        const routeMap: Record<NavSection, string> = {
          dashboard: '/dashboard',
          database: '/database',
          clients: '/clients',
          properties: '/properties',
          deals: '/deals',
          documents: '/documents',
          calendar: '/calendar',
          automations: '/automations',
        };
        router.push(routeMap[section]);
      }}
    />
  );
}
