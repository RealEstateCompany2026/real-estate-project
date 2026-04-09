import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/**
 * ThemeToggle - Bouton pour switcher entre light/dark mode
 * 
 * Usage:
 * <ThemeToggle />
 */

interface ThemeToggleProps {
  className?: string;
  variant?: "icon" | "button";
}

export function ThemeToggle({ className = "", variant = "icon" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  if (variant === "button") {
    return (
      <button
        onClick={toggleTheme}
        className={`
          flex items-center gap-[8px] px-[16px] py-[8px] rounded-[16px] transition-all
          ${className}
        `.trim()}
        style={{
          background: "var(--surface-neutral-action)",
          color: "var(--text-body)",
        }}
        title={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
      >
        {theme === "light" ? (
          <>
            <Moon className="w-[20px] h-[20px]" />
            <span className="text-sm font-semibold">Mode sombre</span>
          </>
        ) : (
          <>
            <Sun className="w-[20px] h-[20px]" />
            <span className="text-sm font-semibold">Mode clair</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        rounded-[16px] transition-all inline-flex items-center justify-center
        hover:opacity-80 active:scale-95
        ${className}
      `.trim()}
      style={{
        width: "44px",
        height: "44px",
        background: "var(--surface-neutral-action)",
        color: "var(--icon-neutral-default)",
      }}
      title={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
    >
      {theme === "light" ? (
        <Moon className="w-[20px] h-[20px]" />
      ) : (
        <Sun className="w-[20px] h-[20px]" />
      )}
    </button>
  );
}
