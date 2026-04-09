import { Search, X, Loader2 } from "lucide-react";
import { useState, useEffect, KeyboardEvent } from "react";

/**
 * SearchBar - Barre de recherche complète avec clear et loading
 * Composant molecule basé sur TextField + icônes
 * 
 * Structure:
 * - Height: 56px (md), 48px (sm), 64px (lg)
 * - Padding: 12px horizontal × 18px vertical (md)
 * - Gap: 8px entre icônes et input
 * - Border: bottom 1px solid
 * - Icons: 20px (md), 16px (sm), 24px (lg)
 * 
 * États:
 * - Empty: Icône search à gauche, placeholder visible
 * - Focused: Border highlighted
 * - Filled: Bouton clear (X) visible à droite
 * - Loading: Spinner à droite
 * - Disabled: Opacité 50%, non interactif
 * 
 * Features:
 * - Auto-focus optionnel
 * - Clear button quand texte présent
 * - Loading state avec spinner
 * - Keyboard shortcuts (Enter pour search)
 * - Événements: onChange, onClear, onSearch
 * 
 * Usage:
 * <SearchBar
 *   value={searchQuery}
 *   onChange={setSearchQuery}
 *   onSearch={(query) => performSearch(query)}
 *   placeholder="Rechercher un bien, un contact..."
 *   loading={isSearching}
 *   size="md"
 * />
 */

export interface SearchBarProps {
  /**
   * Valeur de recherche
   */
  value?: string;
  /**
   * Callback appelé quand la valeur change
   */
  onChange?: (value: string) => void;
  /**
   * Callback appelé lors de la recherche (Enter ou bouton)
   */
  onSearch?: (query: string) => void;
  /**
   * Callback appelé lors du clear
   */
  onClear?: () => void;
  /**
   * Texte du placeholder
   */
  placeholder?: string;
  /**
   * État de chargement (affiche un spinner)
   */
  loading?: boolean;
  /**
   * État disabled
   */
  disabled?: boolean;
  /**
   * Auto-focus au montage
   */
  autoFocus?: boolean;
  /**
   * Taille du composant
   */
  size?: "sm" | "md" | "lg";
  /**
   * Classes CSS additionnelles
   */
  className?: string;
  /**
   * Aria label pour accessibilité
   */
  ariaLabel?: string;
}

export function SearchBar({
  value = "",
  onChange,
  onSearch,
  onClear,
  placeholder = "Rechercher...",
  loading = false,
  disabled = false,
  autoFocus = false,
  size = "md",
  className = "",
  ariaLabel = "Champ de recherche",
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (newValue: string) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    setInternalValue("");
    onChange?.("");
    onClear?.();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      onSearch?.(internalValue);
    }
  };

  // Get size-specific values
  const sizes = {
    sm: {
      height: "48px",
      paddingX: "10px",
      paddingY: "14px",
      iconSize: 16,
      fontSize: "14px",
      lineHeight: "18px",
    },
    md: {
      height: "56px",
      paddingX: "12px",
      paddingY: "18px",
      iconSize: 20,
      fontSize: "16px",
      lineHeight: "20px",
    },
    lg: {
      height: "64px",
      paddingX: "16px",
      paddingY: "22px",
      iconSize: 24,
      fontSize: "18px",
      lineHeight: "22px",
    },
  };

  const sizeConfig = sizes[size];
  const hasValue = internalValue.length > 0;

  // Border color based on state
  const getBorderColor = () => {
    if (disabled) return "var(--border-neutral-default)";
    if (isFocused) return "var(--border-neutral-emphasis)";
    return "var(--border-neutral-default)";
  };

  return (
    <div
      className={`relative flex items-center gap-[8px] transition-all ${className}`.trim()}
      style={{
        height: sizeConfig.height,
        paddingLeft: sizeConfig.paddingX,
        paddingRight: sizeConfig.paddingX,
        background: disabled
          ? "var(--surface-disabled)"
          : "var(--surface-neutral-default)",
        borderBottom: `1px solid ${getBorderColor()}`,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {/* Search Icon - Left */}
      <Search
        size={sizeConfig.iconSize}
        style={{
          color: "var(--icon-neutral-default)",
          flexShrink: 0,
        }}
        aria-hidden="true"
      />

      {/* Input */}
      <input
        type="search"
        value={internalValue}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled || loading}
        autoFocus={autoFocus}
        aria-label={ariaLabel}
        className="flex-1 bg-transparent outline-none"
        style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          fontSize: sizeConfig.fontSize,
          lineHeight: sizeConfig.lineHeight,
          color: "var(--text-body)",
          letterSpacing: "0.16px",
        }}
      />

      {/* Right Icons - Clear or Loading */}
      <div className="flex items-center gap-[8px] flex-shrink-0">
        {loading ? (
          <Loader2
            size={sizeConfig.iconSize}
            className="animate-spin"
            style={{
              color: "var(--icon-neutral-default)",
            }}
            aria-label="Recherche en cours"
          />
        ) : hasValue && !disabled ? (
          <button
            type="button"
            onClick={handleClear}
            className="p-[4px] rounded-full hover:bg-[var(--surface-neutral-action)] transition-colors cursor-pointer"
            aria-label="Effacer la recherche"
            tabIndex={0}
          >
            <X
              size={sizeConfig.iconSize}
              style={{
                color: "var(--icon-neutral-default)",
              }}
            />
          </button>
        ) : null}
      </div>

      {/* Custom styles to remove default search input styling */}
      <style>{`
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }
        
        input[type="search"]::placeholder {
          color: var(--text-placeholder);
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}
