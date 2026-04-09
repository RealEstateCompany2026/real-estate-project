import { useState } from "react";
import { Switch } from "../components/atoms/Switch";
import { useTheme } from "../context/ThemeContext";

export default function SwitchDemo() {
  const { theme, toggleTheme } = useTheme();
  const [switchStates, setSwitchStates] = useState({
    basic: false,
    notifications: true,
    darkMode: false,
    autoSave: true,
    disabled: false,
  });

  const handleSwitchChange = (key: keyof typeof switchStates) => (checked: boolean) => {
    setSwitchStates((prev) => ({ ...prev, [key]: checked }));
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
              Switch Demo
            </h1>
            <p
              className="text-[16px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              Composant Switch du design system RealAgent
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
            1. Switch - États de base
          </h2>
          <div className="space-y-[24px]">
            {/* OFF */}
            <div className="flex items-center gap-[16px]">
              <Switch
                checked={false}
                onChange={() => {}}
                ariaLabel="Switch OFF"
              />
              <div>
                <label
                  className="text-[16px] font-semibold block"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Switch OFF
                </label>
                <p
                  className="text-[14px] opacity-60"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  État désactivé (gris)
                </p>
              </div>
            </div>

            {/* ON */}
            <div className="flex items-center gap-[16px]">
              <Switch
                checked={true}
                onChange={() => {}}
                ariaLabel="Switch ON"
              />
              <div>
                <label
                  className="text-[16px] font-semibold block"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Switch ON
                </label>
                <p
                  className="text-[14px] opacity-60"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  État activé (vert success)
                </p>
              </div>
            </div>

            {/* Disabled OFF */}
            <div className="flex items-center gap-[16px]">
              <Switch
                checked={false}
                onChange={() => {}}
                disabled={true}
                ariaLabel="Switch disabled OFF"
              />
              <div>
                <label
                  className="text-[16px] font-semibold block opacity-40"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Switch disabled OFF
                </label>
                <p
                  className="text-[14px] opacity-40"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Non interactif
                </p>
              </div>
            </div>

            {/* Disabled ON */}
            <div className="flex items-center gap-[16px]">
              <Switch
                checked={true}
                onChange={() => {}}
                disabled={true}
                ariaLabel="Switch disabled ON"
              />
              <div>
                <label
                  className="text-[16px] font-semibold block opacity-40"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Switch disabled ON
                </label>
                <p
                  className="text-[14px] opacity-40"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Non interactif
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Switches interactifs */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            2. Switches interactifs
          </h2>
          <div className="space-y-[24px]">
            {/* Basic */}
            <div className="flex items-center gap-[16px]">
              <Switch
                checked={switchStates.basic}
                onChange={handleSwitchChange("basic")}
                ariaLabel="Basic switch"
              />
              <label
                className="text-[16px] cursor-pointer flex-1"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
                onClick={() => handleSwitchChange("basic")(!switchStates.basic)}
              >
                Basic switch (cliquez pour toggle)
              </label>
            </div>

            {/* Notifications */}
            <div className="flex items-center gap-[16px]">
              <Switch
                checked={switchStates.notifications}
                onChange={handleSwitchChange("notifications")}
                ariaLabel="Enable notifications"
              />
              <label
                className="text-[16px] cursor-pointer flex-1"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
                onClick={() => handleSwitchChange("notifications")(!switchStates.notifications)}
              >
                Activer les notifications
              </label>
            </div>

            {/* Auto-save */}
            <div className="flex items-center gap-[16px]">
              <Switch
                checked={switchStates.autoSave}
                onChange={handleSwitchChange("autoSave")}
                ariaLabel="Enable auto-save"
              />
              <label
                className="text-[16px] cursor-pointer flex-1"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
                onClick={() => handleSwitchChange("autoSave")(!switchStates.autoSave)}
              >
                Sauvegarde automatique
              </label>
            </div>
          </div>
        </section>

        {/* Section 3: Focus et accessibilité */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            3. Focus clavier et accessibilité
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
            <kbd className="px-[8px] py-[4px] rounded bg-gray-200 dark:bg-gray-700">Entrée</kbd> pour toggle.
          </p>
          <div className="flex items-center gap-[24px]">
            <Switch
              checked={switchStates.basic}
              onChange={handleSwitchChange("basic")}
              ariaLabel="Switch accessible 1"
            />
            <Switch
              checked={switchStates.notifications}
              onChange={handleSwitchChange("notifications")}
              ariaLabel="Switch accessible 2"
            />
            <Switch
              checked={switchStates.autoSave}
              onChange={handleSwitchChange("autoSave")}
              ariaLabel="Switch accessible 3"
            />
          </div>
        </section>

        {/* Section 4: Exemple Paramètres */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            4. Exemple : Panneau de paramètres
          </h2>
          <SettingsPanel />
        </section>

        {/* Section 5: Notes techniques */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            5. Notes techniques
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
              <li>• Taille : 48×30px, border-radius 16px</li>
              <li>• Toggle circle : 24×24px avec shadow subtile</li>
              <li>• Padding : 3px</li>
              <li>• Animation : transition smooth 200ms sur position et couleur</li>
              <li>
                • Couleurs :
                <ul className="ml-[16px] mt-[8px] space-y-[4px]">
                  <li>- OFF light : bg #d0d1d4, circle white</li>
                  <li>- ON light : bg #0da500 (success green), circle white</li>
                  <li>- OFF dark : bg #444955, circle #111215</li>
                  <li>- ON dark : bg #0da500, circle #111215</li>
                </ul>
              </li>
              <li>• Support complet light/dark mode automatique via <code>useTheme</code></li>
              <li>• Accessible : navigation clavier (Tab), toggle (Espace/Entrée), ARIA labels</li>
              <li>• Focus ring : anneau externe visible au focus clavier</li>
              <li>• Hover : légère opacity sur le cercle (90%)</li>
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

// Composant exemple : SettingsPanel
function SettingsPanel() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: false,
    autoSave: true,
    darkMode: false,
    soundEffects: true,
    analytics: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const settingsConfig = [
    {
      key: "notifications" as const,
      title: "Notifications push",
      description: "Recevoir des notifications sur les nouveaux messages",
    },
    {
      key: "emailAlerts" as const,
      title: "Alertes par email",
      description: "Recevoir des emails pour les événements importants",
    },
    {
      key: "autoSave" as const,
      title: "Sauvegarde automatique",
      description: "Sauvegarder automatiquement vos modifications",
    },
    {
      key: "darkMode" as const,
      title: "Mode sombre",
      description: "Utiliser le thème sombre pour l'interface",
    },
    {
      key: "soundEffects" as const,
      title: "Effets sonores",
      description: "Jouer des sons lors des interactions",
    },
    {
      key: "analytics" as const,
      title: "Analyses et statistiques",
      description: "Partager les données d'utilisation anonymes",
    },
  ];

  return (
    <div
      className="p-[24px] rounded-[12px]"
      style={{
        backgroundColor: "var(--surface-neutral-default)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="space-y-[20px]">
        {settingsConfig.map((setting) => (
          <div
            key={setting.key}
            className="flex items-start gap-[16px] p-[16px] rounded-[8px] transition-colors hover:bg-[var(--surface-neutral-action)]"
          >
            <Switch
              checked={settings[setting.key]}
              onChange={() => toggleSetting(setting.key)}
              ariaLabel={setting.title}
            />
            <div className="flex-1 cursor-pointer" onClick={() => toggleSetting(setting.key)}>
              <label
                className="text-[16px] font-semibold block mb-[4px] cursor-pointer"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                {setting.title}
              </label>
              <p
                className="text-[14px] opacity-60"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                {setting.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
