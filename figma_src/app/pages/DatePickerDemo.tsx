import { useState } from "react";
import {
  DatePickerDay,
  DatePickerMonth,
  DatePickerNumber,
} from "../components/atoms";
import { DatePicker } from "../components/organisms";
import { ThemeToggle } from "../components/ThemeToggle";

/**
 * DatePicker Demo Page
 * Showcases all date picker components from the RealAgent Design System
 */
export default function DatePickerDemo() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Date actuelle
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);

  const today = new Date().getDate(); // Jour actuel
  const currentMonth = new Date().getMonth(); // Mois actuel (0-11)
  const currentYear = new Date().getFullYear(); // Année actuelle
  const daysOfWeek = ["D", "L", "M", "M", "J", "V", "S"];
  
  const monthNames = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  // Generate calendar days for current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const getDateState = (day: number) => {
    if (day === selectedDate.getDate()) return "selected";
    if (day === today) return "today";
    if (day === hoveredDate) return "hover";
    return "default";
  };

  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-page)" }}>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-body)" }}>
              Date & Time Picker Components
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Design System RealAgent - Composants de sélection de date
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* DatePickerDay */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            DatePickerDay (Jours de la semaine)
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                En-tête de calendrier
              </h3>
              <div className="flex gap-[10px] items-center">
                {daysOfWeek.map((day, index) => (
                  <DatePickerDay key={index} day={day} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DatePickerMonth */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            DatePickerMonth (Sélecteur de mois)
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Affichage du mois avec dropdown
              </h3>
              <div className="flex gap-4 items-center">
                <DatePickerMonth month="Aout 2025" onClick={() => alert("Sélection de mois")} />
                <DatePickerMonth month="Janvier 2026" onClick={() => alert("Sélection de mois")} />
                <DatePickerMonth month="Décembre 2024" onClick={() => alert("Sélection de mois")} />
              </div>
            </div>
          </div>
        </section>

        {/* DatePickerNumber */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            DatePickerNumber (Chiffres du calendrier)
          </h2>
          
          <div className="space-y-6">
            {/* États */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                États possibles
              </h3>
              <div className="flex gap-4 items-center">
                <div className="text-center">
                  <DatePickerNumber value={15} state="default" />
                  <p className="mt-2 text-sm" style={{ color: "var(--text-caption)" }}>Default</p>
                </div>
                <div className="text-center">
                  <DatePickerNumber value={20} state="hover" />
                  <p className="mt-2 text-sm" style={{ color: "var(--text-caption)" }}>Hover</p>
                </div>
                <div className="text-center">
                  <DatePickerNumber value={30} state="selected" />
                  <p className="mt-2 text-sm" style={{ color: "var(--text-caption)" }}>Selected</p>
                </div>
                <div className="text-center">
                  <DatePickerNumber value={4} state="today" />
                  <p className="mt-2 text-sm" style={{ color: "var(--text-caption)" }}>Today</p>
                </div>
                <div className="text-center">
                  <DatePickerNumber value={31} state="disabled" />
                  <p className="mt-2 text-sm" style={{ color: "var(--text-caption)" }}>Disabled</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DatePicker Complet */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            DatePicker Complet (390px)
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Composant complet avec navigation et boutons
              </h3>
              <div className="flex justify-center">
                <DatePicker
                  selectedDate={selectedDate}
                  onDateSelect={(date) => {
                    setSelectedDate(date);
                    console.log("Date sélectionnée:", date);
                  }}
                  onCancel={() => console.log("Annulé")}
                  onConfirm={(date) => {
                    console.log("Confirmé:", date);
                    alert(`Date confirmée : ${date.toLocaleDateString('fr-FR')}`);
                  }}
                />
              </div>
              <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <p style={{ color: "var(--text-body)" }}>
                  <strong>Caractéristiques :</strong>
                </p>
                <ul className="text-sm mt-2 space-y-1" style={{ color: "var(--text-caption)" }}>
                  <li>• Largeur fixe : 390px</li>
                  <li>• Surface : var(--neutral-50)</li>
                  <li>• Affichage de la date sélectionnée avec icône</li>
                  <li>• Navigation mois précédent/suivant</li>
                  <li>• Grille de 7×6 dates maximum</li>
                  <li>• Boutons Cancel et OK</li>
                  <li>• Support complet du thème light/dark</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Date Formats */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Formats de date
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Short format */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Format "short" (défaut)
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Format court français : "Lun 15 jan"
              </p>
              <DatePicker
                selectedDate={new Date(2025, 7, 15)}
                dateFormat="short"
                onCancel={() => {}}
                onConfirm={() => {}}
              />
            </div>

            {/* DD/MM/YYYY format */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Format "DD/MM/YYYY"
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Format européen : "15/08/2025"
              </p>
              <DatePicker
                selectedDate={new Date(2025, 7, 15)}
                dateFormat="DD/MM/YYYY"
                onCancel={() => {}}
                onConfirm={() => {}}
              />
            </div>

            {/* MM/DD/YYYY format */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Format "MM/DD/YYYY"
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Format américain : "08/15/2025"
              </p>
              <DatePicker
                selectedDate={new Date(2025, 7, 15)}
                dateFormat="MM/DD/YYYY"
                onCancel={() => {}}
                onConfirm={() => {}}
              />
            </div>

            {/* YYYY-MM-DD format */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Format "YYYY-MM-DD"
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Format ISO : "2025-08-15"
              </p>
              <DatePicker
                selectedDate={new Date(2025, 7, 15)}
                dateFormat="YYYY-MM-DD"
                onCancel={() => {}}
                onConfirm={() => {}}
              />
            </div>
          </div>
        </section>

        {/* Min/Max Date */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Limitation de plage (minDate / maxDate)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Only minDate */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Avec minDate uniquement
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Date minimum : 1er août 2025
                <br />
                Les dates antérieures sont désactivées
              </p>
              <DatePicker
                selectedDate={new Date(2025, 7, 15)}
                minDate={new Date(2025, 7, 1)}
                dateFormat="DD/MM/YYYY"
                onCancel={() => {}}
                onConfirm={() => {}}
              />
            </div>

            {/* Only maxDate */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Avec maxDate uniquement
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Date maximum : 31 août 2025
                <br />
                Les dates postérieures sont désactivées
              </p>
              <DatePicker
                selectedDate={new Date(2025, 7, 15)}
                maxDate={new Date(2025, 7, 31)}
                dateFormat="DD/MM/YYYY"
                onCancel={() => {}}
                onConfirm={() => {}}
              />
            </div>

            {/* Both min and max */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Avec minDate et maxDate
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Plage : 10 août - 20 août 2025
                <br />
                Seules ces dates sont sélectionnables
              </p>
              <DatePicker
                selectedDate={new Date(2025, 7, 15)}
                minDate={new Date(2025, 7, 10)}
                maxDate={new Date(2025, 7, 20)}
                dateFormat="DD/MM/YYYY"
                onCancel={() => {}}
                onConfirm={() => {}}
              />
            </div>

            {/* Full year restriction */}
            <div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--text-body)" }}>
                Année 2025 uniquement
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-caption)" }}>
                Plage : 1er janvier - 31 décembre 2025
                <br />
                Navigation bloquée en dehors de 2025
              </p>
              <DatePicker
                selectedDate={new Date(2025, 7, 15)}
                minDate={new Date(2025, 0, 1)}
                maxDate={new Date(2025, 11, 31)}
                dateFormat="DD/MM/YYYY"
                onCancel={() => {}}
                onConfirm={() => {}}
              />
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
            <p style={{ color: "var(--text-body)" }}>
              <strong>Comportement :</strong>
            </p>
            <ul className="text-sm mt-2 space-y-1" style={{ color: "var(--text-caption)" }}>
              <li>• Les dates hors plage sont affichées en mode disabled</li>
              <li>• Les boutons de navigation mois sont désactivés si le mois suivant/précédent est hors plage</li>
              <li>• Les dates désactivées ne sont pas cliquables</li>
              <li>• Le style disabled inclut opacité 50% et cursor-not-allowed</li>
            </ul>
          </div>
        </section>

        {/* Atomes individuels - Grille simple */}
        <section className="p-8 rounded-xl" style={{ background: "var(--surface-neutral-default)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Calendrier simple (Atomes uniquement)
          </h2>
          
          <div className="space-y-6">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-4">
              <DatePickerMonth month={`${monthNames[currentMonth]} ${currentYear}`} />
            </div>

            {/* Jours de la semaine */}
            <div className="flex gap-[10px] items-center mb-2">
              {daysOfWeek.map((day, index) => (
                <DatePickerDay key={index} day={day} />
              ))}
            </div>

            {/* Grille des dates */}
            <div className="grid grid-cols-7 gap-[10px]">
              {calendarDays.map((day) => (
                <DatePickerNumber
                  key={day}
                  value={day}
                  state={getDateState(day)}
                  onClick={() => setSelectedDate(new Date(currentYear, currentMonth, day))}
                  onMouseEnter={() => setHoveredDate(day)}
                  onMouseLeave={() => setHoveredDate(null)}
                />
              ))}
            </div>

            <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
              <p style={{ color: "var(--text-body)" }}>
                <strong>Date sélectionnée :</strong> {selectedDate.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              <p className="text-sm mt-2" style={{ color: "var(--text-caption)" }}>
                • Cliquez sur une date pour la sélectionner<br />
                • Le jour d'aujourd'hui ({today} {monthNames[currentMonth]}) est marqué avec une bordure violette<br />
                • Survolez les dates pour voir l'effet hover
              </p>
            </div>
          </div>
        </section>

        {/* Design Tokens */}
        <section className="border-t pt-8" style={{ borderColor: "var(--neutral-100)" }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text-body)" }}>
            Design Tokens Utilisés
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Default Background</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                var(--surface-neutral-action)
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Selected Background</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                var(--surface-branded-default)
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Today Border</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                var(--border-branded-default)
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Text Color</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                var(--text-body)
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Selected Text</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                #ffffff (white)
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-default)" }}>
              <div className="text-sm font-semibold mb-1">Border Radius</div>
              <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                20px (cercle)
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}