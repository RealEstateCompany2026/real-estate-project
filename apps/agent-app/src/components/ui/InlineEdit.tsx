'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';
import { Check, X, Pencil } from 'lucide-react';

interface InlineEditProps {
  value: string;
  onSave: (value: string) => void | Promise<void>;
  renderDisplay?: (value: string) => ReactNode;
  type?: 'text' | 'textarea' | 'number' | 'email' | 'tel';
  placeholder?: string;
  disabled?: boolean;
  label?: string;
}

/**
 * Champ éditable inline avec mode lecture/écriture.
 * Utilisé dans les fiches client et bien pour l'édition à la volée.
 * L'enregistrement est déclenché manuellement (clic Check ou Enter).
 */
export function InlineEdit({
  value,
  onSave,
  renderDisplay,
  type = 'text',
  placeholder = 'Cliquer pour modifier',
  disabled = false,
  label,
}: InlineEditProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      if (inputRef.current instanceof HTMLInputElement) {
        inputRef.current.select();
      }
    }
  }, [isEditing]);

  async function handleSave() {
    if (draft === value) {
      setIsEditing(false);
      return;
    }
    setIsSaving(true);
    try {
      await onSave(draft);
      setIsEditing(false);
    } finally {
      setIsSaving(false);
    }
  }

  function handleCancel() {
    setDraft(value);
    setIsEditing(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && type !== 'textarea') {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  }

  if (disabled || !isEditing) {
    return (
      <div className="group flex items-start gap-2">
        {label && <span className="text-xs text-content-caption min-w-[100px] pt-0.5">{label}</span>}
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <span
            className={`text-sm ${value ? 'text-content-headings' : 'text-content-caption italic'}`}
          >
            {renderDisplay ? renderDisplay(value) : value || placeholder}
          </span>
          {!disabled && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-surface-neutral-action"
              aria-label="Modifier"
            >
              <Pencil className="w-3.5 h-3.5 text-content-caption" />
            </button>
          )}
        </div>
      </div>
    );
  }

  const inputClasses =
    'w-full px-2 py-1.5 rounded-md border border-edge-branded-default bg-white text-sm text-content-headings outline-none focus:ring-1 focus:ring-[var(--border-branded-default)]/20';

  return (
    <div className="flex items-start gap-2">
      {label && <span className="text-xs text-content-caption min-w-[100px] pt-2">{label}</span>}
      <div className="flex items-start gap-1.5 flex-1">
        {type === 'textarea' ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`${inputClasses} resize-y min-h-[60px]`}
            rows={3}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type={type}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            className={inputClasses}
          />
        )}
        <div className="flex flex-col gap-0.5">
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="p-1 rounded-md bg-semantic-success text-white hover:opacity-90 transition-opacity disabled:opacity-50"
            aria-label="Enregistrer"
          >
            <Check className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="p-1 rounded-md bg-surface-neutral-action text-content-caption hover:bg-neutral-grey-bold hover:text-white transition-colors"
            aria-label="Annuler"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
