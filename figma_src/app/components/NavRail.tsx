import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Database,
  Users,
  Home,
  Briefcase,
  FileText,
  Calendar,
  Workflow,
  User,
} from "lucide-react";
import clsx from "clsx";

/**
 * NavRail - Vertical navigation rail (90px wide)
 * Always visible on the left side of the app
 * 
 * Structure:
 * - Logo (75px)
 * - Nav buttons (68x50px)
 * - Divider
 * - Profile avatar (54x54px)
 */

interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", path: "/", icon: LayoutDashboard },
  { id: "database", label: "Base de données", path: "/database", icon: Database },
  { id: "clients", label: "Clients", path: "/clients", icon: Users },
  { id: "properties", label: "Biens", path: "/properties", icon: Home },
  { id: "deals", label: "Affaires", path: "/deals", icon: Briefcase },
  { id: "documents", label: "Documents", path: "/documents", icon: FileText },
  { id: "calendar", label: "Agenda", path: "/calendar", icon: Calendar },
  { id: "automations", label: "Automations", path: "/automations", icon: Workflow },
];

export function NavRail() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="flex flex-col items-center py-[10px] w-[90px] shrink-0"
      style={{
        backgroundColor: "var(--surface-neutral-default)",
        borderRight: "var(--border-width-25) solid var(--neutral-50)",
      }}
    >
      {/* Logo area (75px) */}
      <div className="flex items-center justify-center h-[75px] px-[11px] py-[22px] mb-[10px]">
        <div
          className="text-center font-bold text-[14px] leading-tight"
          style={{ color: "var(--text-branded-action)" }}
        >
          REAL
          <br />
          AGENT
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-col gap-[10px] flex-1">
        {navItems.map((item) => {
          const active = isActive(item.path);
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              to={item.path}
              className={clsx(
                "flex flex-col items-center justify-center w-[68px] h-[50px] transition-colors group",
              )}
              style={{
                backgroundColor: active
                  ? "var(--branded-50)"
                  : "transparent",
                borderRadius: "var(--border-radius-400)",
              }}
              title={item.label}
            >
              <Icon
                className="w-[24px] h-[24px] transition-colors"
                style={{
                  color: active
                    ? "var(--icon-branded-action)"
                    : "var(--neutral-400)",
                }}
              />
            </Link>
          );
        })}
      </div>

      {/* Divider */}
      <div
        className="w-[10px] h-[1px] my-[10px]"
        style={{ backgroundColor: "var(--neutral-50)" }}
      />

      {/* Profile avatar (54x54px) */}
      <button
        className="flex items-center justify-center w-[54px] h-[54px] shrink-0"
        style={{
          backgroundColor: "var(--surface-neutral-action)",
          borderRadius: "var(--border-radius-700)",
          border: "var(--border-width-100) solid var(--neutral-white)",
        }}
        title="Profile"
      >
        <User
          className="w-[24px] h-[24px]"
          style={{ color: "var(--icon-neutral-default)" }}
        />
      </button>
    </nav>
  );
}