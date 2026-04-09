import { Outlet } from "react-router";
import { NavRail } from "./NavRail";

/**
 * Layout component with NavRail
 * Wraps all authenticated pages
 */
export function Layout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--surface-page)]">
      {/* Left: Navigation Rail (90px) */}
      <NavRail />

      {/* Right: Main content area */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
