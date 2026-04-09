import { createContext, useContext, useEffect, useState, ReactNode } from "react";

/**
 * ThemeContext - Gestion du thème light/dark
 * 
 * Utilise la classe .dark sur <html> pour activer le dark mode
 * Les tokens CSS se mettent automatiquement à jour
 */

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({ children, defaultTheme = "light" }: ThemeProviderProps) {
  // Récupère le thème du localStorage ou utilise le defaultTheme
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = localStorage.getItem("realagent-theme");
    return (stored as Theme) || defaultTheme;
  });

  // Met à jour le DOM et le localStorage quand le thème change
  useEffect(() => {
    const root = document.documentElement;
    
    // Enlève l'ancien thème
    root.classList.remove("light", "dark");
    
    // Ajoute le nouveau thème
    root.classList.add(theme);
    
    // Sauvegarde dans localStorage
    localStorage.setItem("realagent-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook pour utiliser le thème
 * 
 * Usage:
 * const { theme, setTheme, toggleTheme } = useTheme();
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
