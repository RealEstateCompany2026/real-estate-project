"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DatePickerDay } from "./DatePickerDay";
import { DatePickerMonth } from "./DatePickerMonth";
import { DatePickerNumber } from "./DatePickerNumber";

/**
 * DatePickerCalendar - Composant interne calendrier pour DatePicker
 * Extrait la logique calendrier : navigation mois, grille dates, sélecteur d'année.
 *
 * Structure:
 * - Navigation mois (chevrons)
 * - Affichage mois+année (DatePickerMonth) avec sélecteur d'année dropdown
 * - Grille jours de la semaine (DatePickerDay)
 * - Grille dates (DatePickerNumber)
 *
 * Usage interne uniquement — utilisé par DatePicker (modal et docked).
 */

interface DatePickerCalendarProps {
  selectedDate: Date;
  minDate?: Date;
  maxDate?: Date;
  onDateSelect: (date: Date) => void;
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

export function DatePickerCalendar({
  selectedDate,
  minDate,
  maxDate,
  onDateSelect,
  className = "",
}: DatePickerCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);
  const [isYearSelectorOpen, setIsYearSelectorOpen] = useState(false);

  const yearSelectorRef = useRef<HTMLDivElement>(null);
  const currentYearItemRef = useRef<HTMLButtonElement>(null);

  // Resync calendar view when selectedDate changes from parent
  useEffect(() => {
    setCurrentMonth(selectedDate.getMonth());
    setCurrentYear(selectedDate.getFullYear());
  }, [selectedDate]);

  const today = new Date();
  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const isSelected = (day: number) =>
    day === selectedDate.getDate() &&
    currentMonth === selectedDate.getMonth() &&
    currentYear === selectedDate.getFullYear();

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
    const lastDayOfPrevMonth = new Date(currentYear, currentMonth, 0);
    return lastDayOfPrevMonth < minDate;
  };

  // Check if navigation to next month is disabled
  const isNextMonthDisabled = (): boolean => {
    if (!maxDate) return false;
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
    onDateSelect(newDate);
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

  // Year selector logic
  const yearRangeStart = minDate?.getFullYear() ?? currentYear - 100;
  const yearRangeEnd = maxDate?.getFullYear() ?? currentYear + 10;
  const years: number[] = [];
  for (let y = yearRangeStart; y <= yearRangeEnd; y++) {
    years.push(y);
  }

  const handleYearSelect = (year: number) => {
    setCurrentYear(year);
    setIsYearSelectorOpen(false);
  };

  const toggleYearSelector = () => {
    setIsYearSelectorOpen((prev) => !prev);
  };

  // Auto-scroll to current year when dropdown opens
  useEffect(() => {
    if (isYearSelectorOpen && currentYearItemRef.current) {
      currentYearItemRef.current.scrollIntoView({ block: "center" });
    }
  }, [isYearSelectorOpen]);

  // Click outside + Escape to close year selector
  useEffect(() => {
    if (!isYearSelectorOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        yearSelectorRef.current &&
        !yearSelectorRef.current.contains(e.target as Node)
      ) {
        setIsYearSelectorOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setIsYearSelectorOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isYearSelectorOpen]);

  return (
    <div className={className}>
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-[16px]">
        <button
          onClick={handlePrevMonth}
          className="p-[8px] rounded-[8px] transition-opacity disabled:opacity-40 disabled:cursor-not-allowed bg-surface-neutral-action"
          type="button"
          disabled={isPrevMonthDisabled()}
        >
          <ChevronLeft
            size={20}
            className="text-icon-neutral-default"
          />
        </button>

        <div className="relative" ref={yearSelectorRef}>
          <DatePickerMonth
            month={`${MONTHS[currentMonth]} ${currentYear}`}
            onClick={toggleYearSelector}
          />

          {/* Year selector dropdown */}
          {isYearSelectorOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 bg-surface-neutral-default border border-edge-default rounded-lg shadow-lg max-h-[200px] overflow-y-auto mt-1">
              {years.map((year) => {
                const isCurrent = year === currentYear;
                return (
                  <button
                    key={year}
                    ref={isCurrent ? currentYearItemRef : undefined}
                    type="button"
                    onClick={() => handleYearSelect(year)}
                    className={`w-full px-[16px] py-[8px] text-[14px] text-content-body text-left transition-colors hover:bg-surface-neutral-action ${
                      isCurrent ? "font-semibold bg-surface-neutral-action" : "font-normal"
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <button
          onClick={handleNextMonth}
          className="p-[8px] rounded-[8px] transition-opacity disabled:opacity-40 disabled:cursor-not-allowed bg-surface-neutral-action"
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
      <div className="grid grid-cols-7 gap-[10px]">
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
    </div>
  );
}
