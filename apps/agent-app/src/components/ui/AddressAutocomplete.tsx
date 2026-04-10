'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import { searchAddress, type AddressResult } from '@/lib/utils/address';

interface AddressAutocompleteProps {
  value: string;
  onChange: (address: AddressResult) => void;
  onRawChange?: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

/**
 * Champ d'adresse avec autocomplétion via API BAN (Base Adresse Nationale).
 * Debounce 300ms, min 3 caractères, max 5 résultats.
 */
export function AddressAutocomplete({
  value,
  onChange,
  onRawChange,
  placeholder = 'Rechercher une adresse...',
  disabled = false,
}: AddressAutocompleteProps) {
  const [query, setQuery] = useState(value);
  const [results, setResults] = useState<AddressResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Sync external value
  useEffect(() => {
    setQuery(value);
  }, [value]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const search = useCallback(async (q: string) => {
    if (q.length < 3) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    setIsLoading(true);
    const data = await searchAddress(q, 5);
    setResults(data);
    setIsOpen(data.length > 0);
    setHighlightIndex(-1);
    setIsLoading(false);
  }, []);

  function handleInputChange(text: string) {
    setQuery(text);
    onRawChange?.(text);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(text), 300);
  }

  function handleSelect(result: AddressResult) {
    setQuery(result.label);
    setIsOpen(false);
    onChange(result);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && highlightIndex >= 0) {
      e.preventDefault();
      handleSelect(results[highlightIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  return (
    <div ref={wrapperRef} className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-grey-bold" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => { if (results.length > 0) setIsOpen(true); }}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full pl-9 pr-8 py-2.5 rounded-lg border border-neutral-grey-light bg-white text-sm text-neutral-anthracite placeholder:text-neutral-grey-bold focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-colors disabled:opacity-50"
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-grey-bold animate-spin" />
        )}
      </div>

      {isOpen && (
        <ul
          className="absolute z-50 w-full mt-1 bg-white rounded-lg border border-neutral-grey-light shadow-lg max-h-60 overflow-y-auto"
          role="listbox"
        >
          {results.map((r, i) => (
            <li
              key={`${r.lat}-${r.lng}`}
              role="option"
              aria-selected={i === highlightIndex}
              className={`px-4 py-3 cursor-pointer text-sm transition-colors ${
                i === highlightIndex
                  ? 'bg-background-softBlue text-primary'
                  : 'text-neutral-anthracite hover:bg-background-subtle'
              }`}
              onClick={() => handleSelect(r)}
              onMouseEnter={() => setHighlightIndex(i)}
            >
              <div className="font-medium">{r.street}</div>
              <div className="text-xs text-neutral-grey-bold">
                {r.zipCode} {r.city}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
