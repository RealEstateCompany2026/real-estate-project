/**
 * P08 Demo - Parcours Fiche Client
 * Navigation entre les écrans du parcours FIC
 */

"use client";

import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { FIC_01_PageFicheClient } from "./client/FIC_01_PageFicheClient";
import { useTheme } from "../context/ThemeContext";

type ScreenType = "FIC-01";

export default function P08Demo() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("FIC-01");

  const screens = [
    { id: "FIC-01", label: "FIC-01 — Fiche client complète" },
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case "FIC-01":
        return <FIC_01_PageFicheClient />;
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
              P08 — Fiche Client (FIC)
            </h2>
            
            <div className="flex items-center gap-4">
              <div
                className="text-sm"
                style={{
                  color: "var(--text-subtle)",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Vague 1 | 10 écrans (1 démo disponible)
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
                onClick={() => setCurrentScreen(screen.id as ScreenType)}
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
            <strong>Note :</strong> Cette page fiche client (FIC-01) assemble tous les composants :
            AppBarFicheClient, GraphCourbe, AppBarClientAncres, sections Profil, Activités, Affaires, Biens, Documents, Messages.
            Chaque section est séparée par un Divider. Les composants IA Suggestion sont affichés conditionnellement.
          </div>
        </div>
      </div>

      {/* Screen Content */}
      <div>{renderScreen()}</div>
    </div>
  );
}
