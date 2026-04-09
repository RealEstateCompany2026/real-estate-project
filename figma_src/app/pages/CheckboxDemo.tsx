import { useState } from "react";
import { Checkbox } from "../components/atoms/Checkbox";
import { useTheme } from "../context/ThemeContext";

export default function CheckboxDemo() {
  const { theme, toggleTheme } = useTheme();
  const [checkboxStates, setCheckboxStates] = useState({
    default: false,
    checked: true,
    disabled: false,
    disabledChecked: true,
    error: false,
    errorChecked: true,
  });

  const handleCheckboxChange = (key: keyof typeof checkboxStates) => (checked: boolean) => {
    setCheckboxStates((prev) => ({ ...prev, [key]: checked }));
  };

  return (
    <div
      className="min-h-screen p-[48px]"
      style={{
        backgroundColor: "var(--surface-page)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-[48px]">
          <div>
            <h1
              className="text-[48px] font-bold mb-[8px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-headings)",
              }}
            >
              Checkbox Demo
            </h1>
            <p
              className="text-[16px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              Composant Checkbox du design system RealAgent
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="px-[24px] py-[12px] rounded-[8px] transition-colors"
            style={{
              backgroundColor: "var(--surface-branded-default)",
              color: "white",
              fontFamily: "Roboto, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        {/* Section 1: États de base */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            1. Checkbox - États de base
          </h2>
          <div className="grid grid-cols-2 gap-[24px]">
            {/* Unchecked */}
            <div className="flex items-center gap-[12px]">
              <Checkbox
                checked={checkboxStates.default}
                onChange={handleCheckboxChange("default")}
                ariaLabel="Checkbox unchecked"
              />
              <label
                className="text-[16px] cursor-pointer"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
                onClick={() => handleCheckboxChange("default")(!checkboxStates.default)}
              >
                Checkbox décoché (cliquable)
              </label>
            </div>

            {/* Checked */}
            <div className="flex items-center gap-[12px]">
              <Checkbox
                checked={checkboxStates.checked}
                onChange={handleCheckboxChange("checked")}
                ariaLabel="Checkbox checked"
              />
              <label
                className="text-[16px] cursor-pointer"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
                onClick={() => handleCheckboxChange("checked")(!checkboxStates.checked)}
              >
                Checkbox coché (cliquable)
              </label>
            </div>

            {/* Disabled Unchecked */}
            <div className="flex items-center gap-[12px]">
              <Checkbox
                checked={checkboxStates.disabled}
                onChange={handleCheckboxChange("disabled")}
                disabled={true}
                ariaLabel="Checkbox disabled unchecked"
              />
              <label
                className="text-[16px] opacity-40"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Checkbox décoché disabled
              </label>
            </div>

            {/* Disabled Checked */}
            <div className="flex items-center gap-[12px]">
              <Checkbox
                checked={checkboxStates.disabledChecked}
                onChange={handleCheckboxChange("disabledChecked")}
                disabled={true}
                ariaLabel="Checkbox disabled checked"
              />
              <label
                className="text-[16px] opacity-40"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Checkbox coché disabled
              </label>
            </div>

            {/* Error Unchecked */}
            <div className="flex items-center gap-[12px]">
              <Checkbox
                checked={checkboxStates.error}
                onChange={handleCheckboxChange("error")}
                error={true}
                ariaLabel="Checkbox error unchecked"
              />
              <label
                className="text-[16px] cursor-pointer"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--error-500)",
                }}
                onClick={() => handleCheckboxChange("error")(!checkboxStates.error)}
              >
                Checkbox décoché erreur
              </label>
            </div>

            {/* Error Checked */}
            <div className="flex items-center gap-[12px]">
              <Checkbox
                checked={checkboxStates.errorChecked}
                onChange={handleCheckboxChange("errorChecked")}
                error={true}
                ariaLabel="Checkbox error checked"
              />
              <label
                className="text-[16px] cursor-pointer"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--error-500)",
                }}
                onClick={() => handleCheckboxChange("errorChecked")(!checkboxStates.errorChecked)}
              >
                Checkbox coché erreur
              </label>
            </div>
          </div>
        </section>

        {/* Section 2: Focus et accessibilité */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            2. Focus clavier et accessibilité
          </h2>
          <p
            className="text-[14px] mb-[16px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            Utilisez la touche <kbd className="px-[8px] py-[4px] rounded bg-gray-200 dark:bg-gray-700">Tab</kbd> pour naviguer et{" "}
            <kbd className="px-[8px] py-[4px] rounded bg-gray-200 dark:bg-gray-700">Espace</kbd> ou{" "}
            <kbd className="px-[8px] py-[4px] rounded bg-gray-200 dark:bg-gray-700">Entrée</kbd> pour cocher/décocher.
          </p>
          <div className="flex items-center gap-[24px]">
            <Checkbox
              checked={checkboxStates.default}
              onChange={handleCheckboxChange("default")}
              ariaLabel="Checkbox accessible 1"
            />
            <Checkbox
              checked={checkboxStates.checked}
              onChange={handleCheckboxChange("checked")}
              ariaLabel="Checkbox accessible 2"
            />
            <Checkbox
              checked={false}
              onChange={() => {}}
              ariaLabel="Checkbox accessible 3"
            />
          </div>
        </section>

        {/* Section 3: Liste de tâches exemple */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            3. Exemple : Liste de tâches
          </h2>
          <TaskList />
        </section>

        {/* Section 4: Notes techniques */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            4. Notes techniques
          </h2>
          <div
            className="p-[24px] rounded-[8px]"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <ul
              className="space-y-[12px] text-[14px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              <li>• Taille : 28×28px, border-radius 8px, border 1px</li>
              <li>• Icône check : 20×20px (SVG path Figma), padding interne 4px</li>
              <li>
                • États : <code>default</code>, <code>hover</code>, <code>focus</code>, <code>disabled</code>, <code>error</code>
              </li>
              <li>• Support complet light/dark mode automatique via <code>useTheme</code></li>
              <li>• Accessible : navigation clavier (Tab), toggle (Espace/Entrée), ARIA labels</li>
              <li>• Focus ring : anneau externe 2px visible au focus clavier</li>
              <li>
                • Callback <code>onChange(checked: boolean)</code> pour les changements d'état
              </li>
              <li>
                • Props <code>name</code> et <code>id</code> pour l'intégration formulaire
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

// Composant exemple : TaskList
function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, label: "Créer le composant Checkbox", completed: true },
    { id: 2, label: "Ajouter le support dark mode", completed: true },
    { id: 3, label: "Implémenter l'accessibilité clavier", completed: true },
    { id: 4, label: "Créer la page de démo", completed: false },
    { id: 5, label: "Tester dans tous les navigateurs", completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  return (
    <div className="space-y-[12px]">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center gap-[12px] p-[12px] rounded-[8px] transition-colors hover:bg-[var(--surface-neutral-action)]"
        >
          <Checkbox
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            ariaLabel={task.label}
          />
          <label
            className={`text-[16px] cursor-pointer flex-1 ${task.completed ? "line-through opacity-60" : ""}`}
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
            onClick={() => toggleTask(task.id)}
          >
            {task.label}
          </label>
        </div>
      ))}
    </div>
  );
}
