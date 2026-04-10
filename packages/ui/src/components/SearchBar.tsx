"use client";

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

  // Get size-specific Tailwind classes
  const sizeClasses = {
    sm: {
      height: "h-[48px]",
      padding: "px-[10px] py-[14px]",
      fontSize: "text-[14px]",
      leadingHeight: "leading-[18px]",
      iconSize: 16,
    },
    md: {
      height: "h-[56px]",
      padding: "px-[12px] py-[18px]",
      fontSize: "text-[16px]",
      leadingHeight: "leading-[20px]",
      iconSize: 20,
    },
    lg: {
      height: "h-[64px]",
      padding: "px-[16px] py-[22px]",
      fontSize: "text-[18px]",
      leadingHeight: "leading-[22px]",
      iconSize: 24,
    },
  };

  const sizeConfig = sizeClasses[size];
  const hasValue = internalValue.length > 0;

  // Border color based on state
  const borderColorClass = disabled
    ? "border-edge-disabled"
    : isFocused
      ? "border-edge-neutral-default"
      : "border-edge-default";

  return (
    <div
      className={`
        relative flex items-center gap-[8px] transition-all
        ${sizeConfig.height} ${sizeConfig.padding}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        border-b ${borderColorClass}
        ${disabled ? "bg-surface-disabled" : "bg-surface-neutral-default"}
        ${className}
      `.trim()}
    >
      {/* Search Icon - Left */}
      <Search
        size={sizeConfig.iconSize}
        className="text-icon-neutral-default flex-shrink-0"
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
        className={`
          flex-1 bg-transparent outline-none
          ${sizeConfig.fontSize} ${sizeConfig.leadingHeight}
          font-semibold text-content-body
          placeholder:text-content-placeholder
          tracking-[0.16px]
          font-roboto
        `}
      />

      {/* Right Icons - Clear or Loading */}
      <div className="flex items-center gap-[8px] flex-shrink-0">
        {loading ? (
          <Loader2
            size={sizeConfig.iconSize}
            className="animate-spin text-icon-neutral-default"
            aria-label="Recherche en cours"
          />
        ) : hasValue && !disabled ? (
          <button
            type="button"
            onClick={handleClear}
            className="p-[4px] rounded-full hover:bg-surface-neutral-action transition-colors cursor-pointer"
            aria-label="Effacer la recherche"
            tabIndex={0}
          >
            <X
              size={sizeConfig.iconSize}
              className="text-icon-neutral-default"
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
      `}</style>
    </div>
  );
}
