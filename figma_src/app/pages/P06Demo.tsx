/**
 * P06 Demo - Parcours Ajouter un client
 * Navigation entre les écrans du parcours CLI avec vues Light/Dark
 */

"use client";

import React, { useState } from "react";
import { CLI_01_PageCreationClient } from "./client/CLI_01_PageCreationClient";
import { CLI_07_ModaleCreationRapide } from "./client/CLI_07_ModaleCreationRapide";
import { Button } from "../components/atoms/Button";
import { UserPlus, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

type ScreenType = "CLI-01" | "CLI-07";

export default function P06Demo() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("CLI-01");
  const [showModale, setShowModale] = useState(false);

  const screens = [
    { id: "CLI-01", label: "CLI-01 — Page création client" },
    { id: "CLI-07", label: "CLI-07 — Modale création rapide" },
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case "CLI-01":
        return <CLI_01_PageCreationClient />;
      case "CLI-07":
        return (
          <div
            className="min-h-screen flex items-center justify-center"
            style={{
              backgroundColor: "var(--surface-page)",
            }}
          >
            <Button
              variant="primary"
              size="large"
              iconLeft={<UserPlus size={20} />}
              onClick={() => setShowModale(true)}
            >
              Ouvrir la modale de création rapide
            </Button>
            <CLI_07_ModaleCreationRapide
              isOpen={showModale}
              onClose={() => setShowModale(false)}
              onSave={(data) => {
                console.log("Client créé :", data);
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div
        className="sticky top-0 z-50 px-8 py-4"
        style={{
          backgroundColor: isDark
            ? "var(--neutral-800)"
            : "var(--neutral-white)",
          borderBottom: "1px solid var(--border-default)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2
              className="text-2xl font-bold"
              style={{
                color: "var(--text-strong)",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              P06 — Ajouter un client (CLI)
            </h2>
            
            <div className="flex items-center gap-4">
              <div
                className="text-sm"
                style={{
                  color: "var(--text-subtle)",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Vague 1 | 7 écrans (2 démos disponibles)
              </div>
            </div>
          </div>

          {/* Theme Toggle Banner */}
          <div
            className="mb-4 p-4 rounded-lg flex items-center justify-between"
            style={{
              backgroundColor: isDark ? "var(--neutral-800)" : "var(--neutral-50)",
              border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-200)"}`,
            }}
          >
            <div className="flex items-center gap-3">
              {theme === "light" ? (
                <Sun size={20} style={{ color: "var(--warning-default)" }} />
              ) : (
                <Moon size={20} style={{ color: "var(--information-default)" }} />
              )}
              <div>
                <div
                  className="font-semibold text-sm"
                  style={{
                    color: "var(--text-strong)",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Mode actuel : {theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{
                    color: "var(--text-subtle)",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Cliquez sur le bouton pour basculer entre les modes
                </div>
              </div>
            </div>
            
            <button
              onClick={toggleTheme}
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2"
              style={{
                backgroundColor: "var(--surface-branded-default)",
                color: "white",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              {theme === "light" ? (
                <>
                  <Moon size={18} />
                  Passer en Dark Mode
                </>
              ) : (
                <>
                  <Sun size={18} />
                  Passer en Light Mode
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => {
                  setCurrentScreen(screen.id as ScreenType);
                  if (screen.id !== "CLI-07") {
                    setShowModale(false);
                  }
                }}
                className="px-4 py-2 rounded-lg font-medium text-sm transition-all"
                style={{
                  backgroundColor:
                    currentScreen === screen.id
                      ? "var(--primary-container)"
                      : "transparent",
                  color:
                    currentScreen === screen.id
                      ? "var(--on-primary-container)"
                      : "var(--text-body)",
                  border: `1px solid ${
                    currentScreen === screen.id
                      ? "var(--primary-default)"
                      : "var(--border-default)"
                  }`,
                }}
              >
                {screen.label}
              </button>
            ))}
          </div>

          <div
            className="mt-4 p-3 rounded-lg text-sm"
            style={{
              backgroundColor: isDark ? "var(--neutral-700)" : "var(--neutral-50)",
              color: "var(--text-body)",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <strong>Note :</strong> Les écrans CLI-02 à CLI-06 sont intégrés
            dans CLI-01 sous forme de sections repliables. CLI-07 utilise le
            composant Sheet Narrow (420px). CLI-01 utilise Sheet Wide (1024px).
          </div>
        </div>
      </div>

      {/* Screen Content */}
      <div>{renderScreen()}</div>
    </div>
  );
}