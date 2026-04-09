'use client';

import { useState, useRef, type KeyboardEvent } from 'react';
import { X } from 'lucide-react';

interface TagsInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  maxTags?: number;
  disabled?: boolean;
}

/**
 * Champ de saisie de tags avec autocomplétion libre.
 * Ajoute un tag sur Enter ou virgule, supprime avec Backspace ou clic X.
 */
export function TagsInput({
  value,
  onChange,
  placeholder = 'Ajouter un tag...',
  maxTags = 20,
  disabled = false,
}: TagsInputProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function addTag(tag: string) {
    const trimmed = tag.trim().toLowerCase();
    if (!trimmed || value.includes(trimmed) || value.length >= maxTags) return;
    onChange([...value, trimmed]);
    setInput('');
  }

  function removeTag(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(input);
    } else if (e.key === 'Backspace' && input === '' && value.length > 0) {
      removeTag(value.length - 1);
    }
  }

  return (
    <div
      className={`flex flex-wrap items-center gap-1.5 px-3 py-2 rounded-lg border border-neutral-grey-light bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-colors ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'
      }`}
      onClick={() => inputRef.current?.focus()}
    >
      {value.map((tag, i) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-background-softBlue text-primary text-xs font-bold"
        >
          {tag}
          {!disabled && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeTag(i);
              }}
              className="hover:text-semantic-destructive transition-colors"
              aria-label={`Supprimer le tag ${tag}`}
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </span>
      ))}
      {!disabled && value.length < maxTags && (
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => { if (input) addTag(input); }}
          placeholder={value.length === 0 ? placeholder : ''}
          className="flex-1 min-w-[80px] outline-none text-sm text-neutral-anthracite placeholder:text-neutral-grey-bold bg-transparent"
          disabled={disabled}
        />
      )}
    </div>
  );
}
