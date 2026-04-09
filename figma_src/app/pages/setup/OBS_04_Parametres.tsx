import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavRail } from "../../components/organisms/NavRail";
import { ProgressBarWithControls } from "../../components/organisms/ProgressBarWithControls";
import { CollapsibleSection } from "../../components/molecules/CollapsibleSection";
import { InputField } from "../../components/molecules/InputField";
import { Button } from "../../components/atoms/Button";
import { Switch } from "../../components/atoms/Switch";

/**
 * OBS-04 - Paramètres app
 * 
 * Configuration des paramètres de l'application :
 * - Langue
 * - Fuseau horaire
 * - Notifications
 * - Connexion calendrier
 */
export default function OBS_04_Parametres() {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    langue: "Français",
    fuseau: "Europe/Paris (GMT+1)",
    notifEmail: true,
    notifPush: true,
    notifDesktop: false,
    calendrier: "",
  });

  const handleToggle = (field: string) => {
    setSettings((prev) => ({ ...prev, [field]: !prev[field as keyof typeof prev] }));
  };

  const handleNext = () => {
    navigate("/OBS_05_Confirmation");
  };

  const handlePrevious = () => {
    navigate("/OBS_03_Documents");
  };

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      <NavRail activeSection="dashboard" />

      <div className="flex-1 flex flex-col">
        {/* Progress Bar with Controls */}
        <div className="flex justify-center pt-6 pb-4" style={{ backgroundColor: "var(--surface-container)" }}>
          <ProgressBarWithControls
            label="Étape 4/4"
            progress={100}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>

        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-8 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text-strong)" }}>
                Paramètres de l'application
              </h1>
              <p className="text-base" style={{ color: "var(--text-body)" }}>
                Configurez vos préférences pour une expérience optimale.
              </p>
            </div>

            <div className="space-y-8">
              {/* Section Régionalisation */}
              <CollapsibleSection title="Régionalisation" defaultExpanded={true}>
                <div className="grid grid-cols-2 gap-6">
                  <InputField
                    label="Langue"
                    value={settings.langue}
                    onChange={(value) => setSettings((prev) => ({ ...prev, langue: value }))}
                    helperText="Langue de l'interface"
                  />
                  <InputField
                    label="Fuseau horaire"
                    value={settings.fuseau}
                    onChange={(value) => setSettings((prev) => ({ ...prev, fuseau: value }))}
                    helperText="Pour afficher correctement les dates et heures"
                  />
                </div>
              </CollapsibleSection>

              {/* Section Notifications */}
              <CollapsibleSection title="Notifications" defaultExpanded={true}>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <div className="text-sm font-medium" style={{ color: "var(--text-strong)" }}>
                        Notifications par email
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                        Recevoir des notifications importantes par email
                      </div>
                    </div>
                    <Switch
                      checked={settings.notifEmail}
                      onChange={() => handleToggle("notifEmail")}
                    />
                  </div>

                  {/* Push */}
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <div className="text-sm font-medium" style={{ color: "var(--text-strong)" }}>
                        Notifications push mobile
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                        Notifications instantanées sur votre téléphone
                      </div>
                    </div>
                    <Switch
                      checked={settings.notifPush}
                      onChange={() => handleToggle("notifPush")}
                    />
                  </div>

                  {/* Desktop */}
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <div className="text-sm font-medium" style={{ color: "var(--text-strong)" }}>
                        Notifications bureau
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-subtle)" }}>
                        Afficher les notifications sur votre ordinateur
                      </div>
                    </div>
                    <Switch
                      checked={settings.notifDesktop}
                      onChange={() => handleToggle("notifDesktop")}
                    />
                  </div>
                </div>
              </CollapsibleSection>

              {/* Section Intégrations */}
              <CollapsibleSection title="Intégrations" defaultExpanded={false}>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-medium mb-3" style={{ color: "var(--text-strong)" }}>
                      Synchronisation du calendrier
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        className="p-4 rounded-lg border-2 transition-all text-center"
                        style={{
                          borderColor: "var(--border-default)",
                          backgroundColor: "var(--surface-container)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-branded-default)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-default)";
                        }}
                      >
                        <div className="text-2xl mb-2">📅</div>
                        <div className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                          Google Calendar
                        </div>
                      </button>
                      <button
                        className="p-4 rounded-lg border-2 transition-all text-center"
                        style={{
                          borderColor: "var(--border-default)",
                          backgroundColor: "var(--surface-container)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-branded-default)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-default)";
                        }}
                      >
                        <div className="text-2xl mb-2">📧</div>
                        <div className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                          Outlook
                        </div>
                      </button>
                      <button
                        className="p-4 rounded-lg border-2 transition-all text-center"
                        style={{
                          borderColor: "var(--border-default)",
                          backgroundColor: "var(--surface-container)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-branded-default)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-default)";
                        }}
                      >
                        <div className="text-2xl mb-2">🍎</div>
                        <div className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                          iCloud
                        </div>
                      </button>
                    </div>
                    <div className="text-xs mt-2" style={{ color: "var(--text-subtle)" }}>
                      Synchronisez vos rendez-vous et événements automatiquement
                    </div>
                  </div>
                </div>
              </CollapsibleSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}