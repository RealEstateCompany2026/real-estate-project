import { useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { Button } from "../components/atoms/Button";
import { useNavigate } from "react-router";

/**
 * DarkModeTest - Page de vérification du dark mode sur tous les parcours
 */
export default function DarkModeTest() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const parcours = [
    {
      id: "SUP",
      name: "Parcours SUP - Sign Up",
      description: "Création de compte complet",
      routes: [
        { path: "/signup/landing", label: "SUP_00 - Landing Page" },
        { path: "/signup/method", label: "SUP_01 - Choix méthode" },
        { path: "/signup/email-password", label: "SUP_02 - Email/Password" },
        { path: "/signup/verify-email", label: "SUP_03 - Vérification email" },
        { path: "/signup/persona-routing", label: "SUP_04 - Choix persona" },
        { path: "/signup/profile-solo", label: "SUP_05A - Profil solo" },
        { path: "/signup/profile-agency", label: "SUP_05B - Profil agence" },
        { path: "/signup/team-invitation", label: "SUP_06 - Invitation équipe" },
        { path: "/signup/confirmation", label: "SUP_07 - Confirmation" },
      ],
    },
    {
      id: "SIN",
      name: "Parcours SIN - Sign In",
      description: "Connexion et récupération mot de passe",
      routes: [
        { path: "/signin", label: "SIN_01 - Connexion" },
        { path: "/signin/forgot-password", label: "SIN_02 - Email récupération" },
        { path: "/signin/forgot-password-confirmation", label: "SIN_03 - Confirmation envoi" },
        { path: "/signin/new-password", label: "SIN_04 - Nouveau mot de passe" },
        { path: "/signin/password-reset-confirmation", label: "SIN_05 - Confirmation reset" },
      ],
    },
    {
      id: "OBT",
      name: "Parcours OBT - Onboarding Tutorial",
      description: "Tour guidé de l'application",
      routes: [
        { path: "/onboarding/welcome", label: "OBT_00 - Modal bienvenue" },
        { path: "/onboarding/spotlight-dashboard", label: "OBT_01 - Spotlight Dashboard" },
        { path: "/onboarding/spotlight-navigation", label: "OBT_02 - Spotlight Navigation" },
        { path: "/onboarding/spotlight-ia", label: "OBT_03 - Spotlight IA" },
        { path: "/onboarding/spotlight-import", label: "OBT_04 - Spotlight Import" },
        { path: "/onboarding/spotlight-help", label: "OBT_05 - Spotlight Aide" },
        { path: "/onboarding/transition", label: "OBT_06 - Modal transition" },
      ],
    },
    {
      id: "OBS",
      name: "Parcours OBS - Onboarding Setup",
      description: "Paramétrage initial de l'application",
      routes: [
        { path: "/setup/stepper", label: "OBS_00 - Stepper Setup" },
        { path: "/setup/profil-professionnel", label: "OBS_01 - Profil professionnel" },
        { path: "/setup/organisation", label: "OBS_02 - Organisation" },
        { path: "/setup/documents", label: "OBS_03 - Documents" },
        { path: "/setup/parametres", label: "OBS_04 - Paramètres" },
        { path: "/setup/confirmation", label: "OBS_05 - Confirmation" },
      ],
    },
    {
      id: "IMP",
      name: "Parcours IMP - Import de données",
      description: "Import de fichiers CSV/Excel",
      routes: [
        { path: "/import/choix-type", label: "IMP_01 - Choix type import" },
        { path: "/import/upload-fichier", label: "IMP_02 - Upload fichier" },
        { path: "/import/mapping-colonnes", label: "IMP_03 - Mapping colonnes" },
        { path: "/import/previsualisation", label: "IMP_04 - Prévisualisation" },
        { path: "/import/en-cours", label: "IMP_05 - Import en cours" },
        { path: "/import/resultat", label: "IMP_06 - Résultat" },
        { path: "/import/erreur-parsing", label: "IMP_07 - Erreur parsing" },
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--surface-page)" }}>
      {/* Header fixe */}
      <div
        className="sticky top-0 z-50 border-b"
        style={{
          background: "var(--surface-neutral-default)",
          borderColor: "var(--border-default)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: "var(--text-headings)" }}>
              🌓 Dark Mode Test
            </h1>
            <p className="text-sm" style={{ color: "var(--text-caption)" }}>
              Vérification du dark mode sur tous les parcours P1-P05
            </p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 gap-6">
          {parcours.map((parcour) => (
            <div
              key={parcour.id}
              className="rounded-xl border overflow-hidden"
              style={{
                background: "var(--surface-neutral-default)",
                borderColor: "var(--border-default)",
              }}
            >
              {/* Header du parcours */}
              <div
                className="px-6 py-4 border-b cursor-pointer"
                style={{ borderColor: "var(--border-default)" }}
                onClick={() =>
                  setCurrentSection(currentSection === parcour.id ? null : parcour.id)
                }
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-1" style={{ color: "var(--text-headings)" }}>
                      {parcour.name}
                    </h2>
                    <p className="text-sm" style={{ color: "var(--text-caption)" }}>
                      {parcour.description}
                    </p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "var(--surface-branded-subtle)",
                      color: "var(--text-branded-action)",
                    }}
                  >
                    {parcour.routes.length} écrans
                  </div>
                </div>
              </div>

              {/* Liste des routes */}
              {currentSection === parcour.id && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {parcour.routes.map((route) => (
                      <Button
                        key={route.path}
                        variant="outlined"
                        onClick={() => navigate(route.path)}
                        className="justify-start text-left"
                      >
                        <span className="truncate">{route.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div
          className="mt-8 p-6 rounded-xl border"
          style={{
            background: "var(--surface-information)",
            borderColor: "var(--border-information)",
          }}
        >
          <h3 className="font-semibold mb-3" style={{ color: "var(--text-headings)" }}>
            📋 Instructions
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: "var(--text-body)" }}>
            <li>• Utilisez le toggle en haut à droite pour basculer entre light/dark mode</li>
            <li>• Cliquez sur chaque parcours pour voir ses écrans</li>
            <li>• Cliquez sur un bouton pour naviguer vers l'écran correspondant</li>
            <li>• Vérifiez que tous les tokens CSS fonctionnent correctement</li>
            <li>
              • Tokens à vérifier : <code>--surface-page</code>, <code>--text-headings</code>,{" "}
              <code>--border-default</code>, etc.
            </li>
          </ul>
        </div>

        {/* Token Reference Card */}
        <div
          className="mt-6 p-6 rounded-xl border"
          style={{
            background: "var(--surface-neutral-default)",
            borderColor: "var(--border-default)",
          }}
        >
          <h3 className="font-semibold mb-4" style={{ color: "var(--text-headings)" }}>
            🎨 Référence des tokens Neutral
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { name: "white", hex: "#FFFFFF", desc: "BG light" },
              { name: "50", hex: "#ECEDEE", desc: "" },
              { name: "100", hex: "#DADBDD", desc: "" },
              { name: "200", hex: "#D0D1D4", desc: "Text dark" },
              { name: "300", hex: "#A1A4AA", desc: "" },
              { name: "400", hex: "#737780", desc: "" },
              { name: "500", hex: "#444955", desc: "Text light" },
              { name: "600", hex: "#333740", desc: "" },
              { name: "700", hex: "#22252B", desc: "" },
              { name: "800", hex: "#111215", desc: "BG dark" },
              { name: "black", hex: "#000000", desc: "" },
            ].map((color) => (
              <div
                key={color.name}
                className="p-3 rounded-lg border text-center"
                style={{ borderColor: "var(--border-default)" }}
              >
                <div
                  className="w-full h-12 rounded mb-2 border"
                  style={{ background: color.hex, borderColor: "var(--border-default)" }}
                />
                <div className="text-xs font-mono font-semibold" style={{ color: "var(--text-body)" }}>
                  {color.name}
                </div>
                <div className="text-xs font-mono" style={{ color: "var(--text-caption)" }}>
                  {color.hex}
                </div>
                {color.desc && (
                  <div className="text-xs mt-1" style={{ color: "var(--text-caption)" }}>
                    {color.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}