"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { DatePickerCalendar } from "./DatePickerCalendar";

/**
 * DatePicker - Composant complet de sélection de date
 * Deux variants :
 * - "modal" (défaut) : carte 390px avec header/footer (pattern original)
 * - "docked" : input trigger + dropdown calendrier (pattern AddressField)
 *
 * Usage modal:
 * <DatePicker
 *   variant="modal"
 *   selectedDate={new Date(2025, 7, 30)}
 *   minDate={new Date(2025, 0, 1)}
 *   maxDate={new Date(2025, 11, 31)}
 *   dateFormat="DD/MM/YYYY"
 *   onDateSelect={(date) => console.log(date)}
 *   onCancel={() => {}}
 *   onConfirm={(date) => {}}
 * />
 *
 * Usage docked:
 * <DatePicker
 *   variant="docked"
 *   selectedDate={selectedDate}
 *   dateFormat="DD/MM/YYYY"
 *   placeholder="Sélectionner une date"
 *   onDateSelect={(date) => setDate(date)}
 *   error={false}
 *   disabled={false}
 * />
 */

interface DatePickerProps {
  variant?: "modal" | "docked";
  selectedDate?: Date;
  /**
   * Date minimum sélectionnable (inclusive)
   */
  minDate?: Date;
  /**
   * Date maximum sélectionnable (inclusive)
   */
  maxDate?: Date;
  /**
   * Format d'affichage de la date
   * - "short": Format court français "Lun 15 jan" (défaut)
   * - "DD/MM/YYYY": Format européen "15/08/2025"
   * - "MM/DD/YYYY": Format américain "08/15/2025"
   * - "YYYY-MM-DD": Format ISO "2025-08-15"
   */
  dateFormat?: "short" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
  onDateSelect?: (date: Date | undefined) => void;
  // Modal-only
  onCancel?: () => void;
  onConfirm?: (date: Date) => void;
  // Docked-only
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  // Common
  className?: string;
}

function formatDate(
  date: Date,
  format: "short" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD" = "short"
): string {
  const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const months = ["jan", "fév", "mar", "avr", "mai", "juin", "juil", "aoû", "sep", "oct", "nov", "déc"];

  switch (format) {
    case "short":
      return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
    case "DD/MM/YYYY":
      return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
    case "MM/DD/YYYY":
      return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}/${date.getFullYear()}`;
    case "YYYY-MM-DD":
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    default:
      return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
  }
}

export function DatePicker({
  variant = "modal",
  selectedDate,
  minDate,
  maxDate,
  dateFormat = "short",
  onDateSelect,
  onCancel,
  onConfirm,
  placeholder = "Sélectionner une date",
  disabled = false,
  error = false,
  className = "",
}: DatePickerProps) {
  if (variant === "docked") {
    return (
      <DatePickerDocked
        selectedDate={selectedDate}
        minDate={minDate}
        maxDate={maxDate}
        dateFormat={dateFormat}
        onDateSelect={onDateSelect}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        className={className}
      />
    );
  }

  return (
    <DatePickerModal
      selectedDate={selectedDate ?? new Date()}
      minDate={minDate}
      maxDate={maxDate}
      dateFormat={dateFormat}
      onDateSelect={onDateSelect}
      onCancel={onCancel}
      onConfirm={onConfirm}
      className={className}
    />
  );
}

/* ──────────────────────────────────────────────
   Variant MODAL — rendu identique à l'ancien
   ────────────────────────────────────────────── */

function DatePickerModal({
  selectedDate,
  minDate,
  maxDate,
  dateFormat,
  onDateSelect,
  onCancel,
  onConfirm,
  className = "",
}: {
  selectedDate: Date;
  minDate?: Date;
  maxDate?: Date;
  dateFormat: "short" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
  onDateSelect?: (date: Date) => void;
  onCancel?: () => void;
  onConfirm?: (date: Date) => void;
  className?: string;
}) {
  const [internalSelectedDate, setInternalSelectedDate] = useState(selectedDate);

  const handleDateSelect = (date: Date) => {
    setInternalSelectedDate(date);
    onDateSelect?.(date);
  };

  return (
    <div
      className={`relative rounded-[16px] w-[390px] bg-surface-neutral-default border border-edge-default ${className}`.trim()}
    >
      <div className="p-[24px]">
        {/* Header - Select date */}
        <div className="mb-[20px]">
          <h3 className="text-[20px] leading-[24px] font-semibold text-content-headings">
            Select date
          </h3>
        </div>

        {/* Selected date display */}
        <div className="mb-[24px] px-[16px] py-[12px] rounded-[12px] flex items-center justify-between bg-surface-neutral-action">
          <div className="flex items-center gap-[12px]">
            <CalendarIcon
              size={20}
              className="text-icon-neutral-default"
            />
            <span className="text-[16px] leading-[20px] font-medium text-content-body">
              {formatDate(internalSelectedDate, dateFormat)}
            </span>
          </div>
        </div>

        {/* Calendar */}
        <DatePickerCalendar
          selectedDate={internalSelectedDate}
          minDate={minDate}
          maxDate={maxDate}
          onDateSelect={handleDateSelect}
          className="mb-[24px]"
        />

        {/* Footer buttons */}
        <div className="flex gap-2 justify-end px-4 pb-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-[10px] py-[8px] hover:opacity-70 transition-opacity cursor-pointer text-[14px] leading-[16px] tracking-[0.14px] font-semibold whitespace-nowrap text-content-body"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onConfirm?.(internalSelectedDate)}
            className="px-[10px] py-[8px] hover:opacity-70 transition-opacity cursor-pointer text-[14px] leading-[16px] tracking-[0.14px] font-semibold whitespace-nowrap text-content-body"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Variant DOCKED — input trigger + dropdown
   ────────────────────────────────────────────── */

function DatePickerDocked({
  selectedDate,
  minDate,
  maxDate,
  dateFormat,
  onDateSelect,
  placeholder,
  disabled,
  error,
  className = "",
}: {
  selectedDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  dateFormat: "short" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
  onDateSelect?: (date: Date | undefined) => void;
  placeholder: string;
  disabled: boolean;
  error: boolean;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleDateSelect = (date: Date) => {
    onDateSelect?.(date);
    setIsOpen(false);
  };

  const handleClear = () => {
    onDateSelect?.(undefined);
  };

  const handleTriggerClick = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Delay dropdown close to allow clicks in calendar to fire first
    setTimeout(() => {
      // Only close if container lost focus
      if (
        containerRef.current &&
        !containerRef.current.contains(document.activeElement)
      ) {
        setIsOpen(false);
      }
    }, 150);
  };

  // Border color based on state
  const borderColorClass = disabled
    ? "border-edge-disabled"
    : error
      ? "border-edge-error-default"
      : isFocused
        ? "border-edge-neutral-default"
        : "border-edge-default";

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Input trigger */}
      <button
        type="button"
        onClick={handleTriggerClick}
        onBlur={handleBlur}
        disabled={disabled}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Sélectionner une date"
        className={`
          relative flex items-center gap-[8px] w-full transition-all
          h-[56px] px-[12px] py-[18px]
          border border-solid rounded-[8px] ${borderColorClass}
          ${disabled ? "bg-surface-disabled opacity-50 cursor-not-allowed" : "bg-surface-neutral-default cursor-pointer"}
        `.trim()}
      >
        {/* Calendar icon left */}
        <CalendarIcon
          size={20}
          className="text-icon-neutral-default flex-shrink-0"
          aria-hidden="true"
        />

        {/* Date text or placeholder */}
        <span
          className={`
            flex-1 text-left
            text-[16px] leading-[20px] font-semibold tracking-[0.16px] font-roboto
            ${selectedDate ? "text-content-body" : "text-content-placeholder"}
          `.trim()}
        >
          {selectedDate ? formatDate(selectedDate, dateFormat) : placeholder}
        </span>

        {/* Clear button */}
        {selectedDate && !disabled && (
          <div
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              handleClear();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
                handleClear();
              }
            }}
            className="p-[4px] rounded-full hover:bg-surface-neutral-action transition-colors flex-shrink-0"
            aria-label="Effacer la date"
          >
            <X size={20} className="text-icon-neutral-default" />
          </div>
        )}
      </button>

      {/* Dropdown calendar */}
      {isOpen && (
        <div className="absolute w-full z-50 mt-1 bg-surface-neutral-default border border-edge-neutral-default rounded-lg shadow-lg p-[16px]">
          <DatePickerCalendar
            selectedDate={selectedDate ?? new Date()}
            minDate={minDate}
            maxDate={maxDate}
            onDateSelect={handleDateSelect}
          />
        </div>
      )}
    </div>
  );
}
