"use client";

import { MapPin, X, Loader2 } from "lucide-react";
import { useState, useEffect, useRef, useId, KeyboardEvent } from "react";

/**
 * AddressField - Champ de saisie d'adresse avec dropdown autocomplete
 * Composant molecule agnostique de l'API — reçoit les suggestions en props.
 *
 * Structure:
 * - Height: 56px
 * - Padding: 12px horizontal × 18px vertical
 * - Gap: 8px entre icônes et input
 * - Border: bottom 1px solid
 * - Icons: 20px
 *
 * États:
 * - Empty: Icône MapPin à gauche, placeholder visible
 * - Focused + suggestions: Dropdown ouvert
 * - Filled: Bouton clear (X) visible à droite
 * - Loading: Spinner à droite
 * - Disabled: Opacité réduite, non interactif
 * - Error: Bordure erreur
 *
 * Features:
 * - Dropdown autocomplete avec navigation clavier (↑↓, Enter, Escape)
 * - Click outside ferme le dropdown
 * - Clear button quand texte présent
 * - Loading state avec spinner
 * - Agnostique de l'API (debounce géré par le consommateur)
 */

export interface AddressSuggestion {
  /** Adresse complète affichée dans le dropdown */
  label: string;
  /** Rue + numéro */
  street: string;
  /** Code postal */
  zipCode: string;
  /** Ville */
  city: string;
  /** Latitude */
  lat?: number;
  /** Longitude */
  lng?: number;
}

export interface AddressFieldProps {
  /** Texte affiché dans l'input */
  value?: string;
  /** Résultats à afficher dans le dropdown */
  suggestions?: AddressSuggestion[];
  /** Callback sur saisie (le consommateur gère le debounce) */
  onSearch?: (query: string) => void;
  /** Callback sur sélection d'une suggestion */
  onSelect?: (suggestion: AddressSuggestion) => void;
  /** Callback sur clear */
  onClear?: () => void;
  /** Spinner pendant l'appel */
  loading?: boolean;
  /** Texte du placeholder */
  placeholder?: string;
  /** État disabled */
  disabled?: boolean;
  /** État erreur */
  error?: boolean;
  /** Aria label pour accessibilité */
  ariaLabel?: string;
  /** Classes CSS additionnelles */
  className?: string;
}

export function AddressField({
  value = "",
  suggestions = [],
  onSearch,
  onSelect,
  onClear,
  loading = false,
  placeholder = "Rechercher une adresse...",
  disabled = false,
  error = false,
  ariaLabel = "Rechercher une adresse",
  className = "",
}: AddressFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [internalValue, setInternalValue] = useState(value);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();

  // Sync external value
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  // Open dropdown when suggestions arrive and input is focused
  useEffect(() => {
    if (suggestions.length > 0 && isFocused) {
      setIsDropdownOpen(true);
      setActiveIndex(-1);
    } else if (suggestions.length === 0) {
      setIsDropdownOpen(false);
    }
  }, [suggestions, isFocused]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (newValue: string) => {
    setInternalValue(newValue);
    onSearch?.(newValue);
  };

  const handleSelect = (suggestion: AddressSuggestion) => {
    setInternalValue(suggestion.label);
    setIsDropdownOpen(false);
    setActiveIndex(-1);
    onSelect?.(suggestion);
  };

  const handleClear = () => {
    setInternalValue("");
    setIsDropdownOpen(false);
    setActiveIndex(-1);
    onClear?.();
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isDropdownOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < suggestions.length) {
          handleSelect(suggestions[activeIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsDropdownOpen(false);
        setActiveIndex(-1);
        break;
    }
  };

  const hasValue = internalValue.length > 0;

  // Border color based on state
  const borderColorClass = disabled
    ? "border-edge-disabled"
    : error
      ? "border-edge-error-default"
      : isFocused
        ? "border-edge-neutral-default"
        : "border-edge-default";

  const activeItemId =
    activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Input row */}
      <div
        className={`
          relative flex items-center gap-[8px] transition-all
          h-[56px] px-[12px] py-[18px]
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          border border-solid rounded-[8px] ${borderColorClass}
          ${disabled ? "bg-surface-disabled" : "bg-surface-neutral-default"}
        `.trim()}
      >
        {/* MapPin Icon - Left */}
        <MapPin
          size={20}
          className="text-icon-neutral-default flex-shrink-0"
          aria-hidden="true"
        />

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={internalValue}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            // Delay dropdown close to allow mousedown on items to fire first
            setTimeout(() => setIsDropdownOpen(false), 150);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          role="combobox"
          aria-expanded={isDropdownOpen}
          aria-haspopup="listbox"
          aria-autocomplete="list"
          aria-activedescendant={activeItemId}
          aria-controls={listboxId}
          aria-invalid={error}
          aria-label={ariaLabel}
          className={`
            flex-1 bg-transparent outline-none
            text-[16px] leading-[20px]
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
              size={20}
              className="animate-spin text-icon-neutral-default"
              aria-label="Recherche en cours"
            />
          ) : hasValue && !disabled ? (
            <button
              type="button"
              onClick={handleClear}
              className="p-[4px] rounded-full hover:bg-surface-neutral-action transition-colors cursor-pointer"
              aria-label="Effacer l'adresse"
              tabIndex={0}
            >
              <X size={20} className="text-icon-neutral-default" />
            </button>
          ) : null}
        </div>
      </div>

      {/* Dropdown */}
      {isDropdownOpen && suggestions.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute w-full z-50 bg-surface-neutral-default border border-edge-default rounded-lg shadow-lg max-h-[240px] overflow-y-auto mt-1"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={`${suggestion.label}-${index}`}
              id={`${listboxId}-option-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              onMouseDown={(e) => {
                // Use mousedown to fire before input blur
                e.preventDefault();
                handleSelect(suggestion);
              }}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                px-[16px] py-[12px]
                text-[14px] leading-[18px]
                text-content-body
                cursor-pointer
                transition-colors
                ${index === activeIndex ? "bg-surface-neutral-action" : ""}
              `}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
