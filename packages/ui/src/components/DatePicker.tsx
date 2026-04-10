"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { DatePickerDay } from "./DatePickerDay";
import { DatePickerMonth } from "./DatePickerMonth";
import { DatePickerNumber } from "./DatePickerNumber";

/**
 * DatePicker - Composant complet de sélection de date
 * Based on Figma ModalDatePicker
 *
 * Structure:
 * - Largeur : 390px
 * - Background : bg-surface-neutral-default
 * - Border-radius : 16px
 * - Titre "Select date"
 * - Champ de date sélectionnée avec icône edit
 * - Sélecteur de mois avec navigation
 * - Grille de dates (7 colonnes × 6 lignes max)
 * - Boutons Cancel / OK
 *
 * Nouvelles fonctionnalités:
 * - minDate: Date minimum sélectionnable
 * - maxDate: Date maximum sélectionnable
 * - dateFormat: Format d'affichage ("short" | "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD")
 *
 * Usage:
 * <DatePicker
 *   selectedDate={new Date(2025, 7, 30)}
 *   minDate={new Date(2025, 0, 1)}
 *   maxDate={new Date(2025, 11, 31)}
 *   dateFormat="DD/MM/YYYY"
 *   onDateSelect={(date) => console.log(date)}
 *   onCancel={() => {}}
 *   onConfirm={(date) => {}}
 * />
 */

interface DatePickerProps {
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
  onDateSelect?: (date: Date) => void;
  onCancel?: () => void;
  onConfirm?: (date: Date) => void;
  className?: string;
}

const DAYS_OF_WEEK = ["D", "L", "M", "M", "J", "V", "S"];
const MONTHS = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

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
  selectedDate = new Date(),
  minDate,
  maxDate,
  dateFormat = "short",
  onDateSelect,
  onCancel,
  onConfirm,
  className = "",
}: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
  const [internalSelectedDate, setInternalSelectedDate] = useState(selectedDate);
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);

  const today = new Date();
  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const isSelected = (day: number) =>
    day === internalSelectedDate.getDate() &&
    currentMonth === internalSelectedDate.getMonth() &&
    currentYear === internalSelectedDate.getFullYear();

  // Check if a date is disabled based on minDate/maxDate
  const isDateDisabled = (day: number): boolean => {
    const date = new Date(currentYear, currentMonth, day);

    if (minDate) {
      const minDateOnly = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
      if (date < minDateOnly) return true;
    }

    if (maxDate) {
      const maxDateOnly = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
      if (date > maxDateOnly) return true;
    }

    return false;
  };

  // Check if navigation to previous month is disabled
  const isPrevMonthDisabled = (): boolean => {
    if (!minDate) return false;
    const firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfPrevMonth = new Date(currentYear, currentMonth, 0);
    return lastDayOfPrevMonth < minDate;
  };

  // Check if navigation to next month is disabled
  const isNextMonthDisabled = (): boolean => {
    if (!maxDate) return false;
    const lastDayOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0);
    const firstDayOfNextMonth = new Date(currentYear, currentMonth + 1, 1);
    return firstDayOfNextMonth > maxDate;
  };

  // Calculate days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Generate calendar grid
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setInternalSelectedDate(newDate);
    onDateSelect?.(newDate);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getDateState = (day: number | null) => {
    if (day === null) return "disabled";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    if (day === hoveredDate) return "hover";
    return "default";
  };

  return (
    <div
      className={`relative rounded-[16px] w-[390px] bg-surface-neutral-default dark:bg-surface-neutral-default border border-surface-neutral-default dark:border-surface-neutral-default ${className}`.trim()}
    >
      <div className="p-[24px]">
        {/* Header - Select date */}
        <div className="mb-[20px]">
          <h3 className="text-[20px] leading-[24px] font-semibold text-content-headings">
            Select date
          </h3>
        </div>

        {/* Selected date display */}
        <div className="mb-[24px] px-[16px] py-[12px] rounded-[12px] flex items-center justify-between bg-surface-neutral-action dark:bg-surface-neutral-action">
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

        {/* Month navigation */}
        <div className="flex items-center justify-between mb-[16px]">
          <button
            onClick={handlePrevMonth}
            className="p-[8px] rounded-[8px] transition-opacity disabled:opacity-40 disabled:cursor-not-allowed bg-surface-neutral-action dark:bg-surface-neutral-action"
            type="button"
            disabled={isPrevMonthDisabled()}
          >
            <ChevronLeft
              size={20}
              className="text-icon-neutral-default"
            />
          </button>

          <DatePickerMonth
            month={`${MONTHS[currentMonth]} ${currentYear}`}
            onClick={() => {}}
          />

          <button
            onClick={handleNextMonth}
            className="p-[8px] rounded-[8px] transition-opacity disabled:opacity-40 disabled:cursor-not-allowed bg-surface-neutral-action dark:bg-surface-neutral-action"
            type="button"
            disabled={isNextMonthDisabled()}
          >
            <ChevronRight
              size={20}
              className="text-icon-neutral-default"
            />
          </button>
        </div>

        {/* Days of week */}
        <div className="flex gap-[10px] items-center mb-[8px]">
          {DAYS_OF_WEEK.map((day, index) => (
            <DatePickerDay key={index} day={day} />
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-[10px] mb-[24px]">
          {calendarDays.map((day, index) => (
            <div key={index}>
              {day === null ? (
                <div className="w-[40px] h-[40px]" />
              ) : (
                <DatePickerNumber
                  value={day}
                  state={getDateState(day)}
                  onClick={() => handleDateClick(day)}
                  onMouseEnter={() => setHoveredDate(day)}
                  onMouseLeave={() => setHoveredDate(null)}
                  disabled={isDateDisabled(day)}
                />
              )}
            </div>
          ))}
        </div>

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
