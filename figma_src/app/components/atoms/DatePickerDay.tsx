/**
 * DatePickerDay - En-tête du jour de la semaine dans le DatePicker
 * Based on Figma AtomeDatepickerDay
 * 
 * Structure:
 * - Lettre du jour : D, L, M, M, J, V, S
 * - Font : Roboto Regular 16px/20px
 * - Padding : 10px horizontal, 8px vertical
 * - Couleur : adapte au thème (light/dark)
 * 
 * Usage:
 * <DatePickerDay day="L" />
 * <DatePickerDay day="M" />
 */

export interface DatePickerDayProps {
  day: string; // D, L, M, M, J, V, S
  className?: string;
}

export function DatePickerDay({ day, className = "" }: DatePickerDayProps) {
  return (
    <div className={`relative shrink-0 w-[40px] ${className}`.trim()}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative w-full">
          <div className="relative shrink-0">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[10px] py-[8px] relative">
                <p
                  className="relative shrink-0 whitespace-nowrap text-center"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "20px",
                    letterSpacing: "0.16px",
                    color: "var(--text-body)",
                  }}
                >
                  {day}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
