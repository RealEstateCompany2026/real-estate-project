import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Tabs, Tab } from "../components/molecules/Tabs";
import {
  Info,
  Clock,
  FileText,
  Users,
  Home,
  DollarSign,
  Calendar,
  Settings,
  Mail,
  Phone,
  MapPin,
  Image,
} from "lucide-react";

export default function TabsDemo() {
  const { theme, toggleTheme } = useTheme();

  // États pour les différents exemples
  const [activeTab1, setActiveTab1] = useState("info");
  const [activeTab2, setActiveTab2] = useState("general");
  const [activeTab3, setActiveTab3] = useState("overview");
  const [activeTab4, setActiveTab4] = useState("contact");

  // Tabs simples (texte uniquement)
  const simpleTabs: Tab[] = [
    { id: "info", label: "Informations" },
    { id: "history", label: "Historique" },
    { id: "documents", label: "Documents" },
    { id: "notes", label: "Notes" },
  ];

  // Tabs avec icônes
  const tabsWithIcons: Tab[] = [
    { id: "general", label: "Général", icon: Info },
    { id: "activity", label: "Activité", icon: Clock },
    { id: "files", label: "Fichiers", icon: FileText },
    { id: "team", label: "Équipe", icon: Users },
  ];

  // Exemple de fiche Bien immobilier
  const propertyTabs: Tab[] = [
    { id: "overview", label: "Vue d'ensemble", icon: Home },
    { id: "details", label: "Détails", icon: Info },
    { id: "financials", label: "Financier", icon: DollarSign },
    { id: "visits", label: "Visites", icon: Calendar },
    { id: "photos", label: "Photos", icon: Image },
    { id: "documents", label: "Documents", icon: FileText },
  ];

  // Exemple de fiche Client
  const clientTabs: Tab[] = [
    { id: "contact", label: "Contact", icon: Phone },
    { id: "properties", label: "Biens", icon: Home },
    { id: "deals", label: "Affaires", icon: DollarSign },
    { id: "emails", label: "Emails", icon: Mail },
    { id: "appointments", label: "RDV", icon: Calendar },
    { id: "preferences", label: "Préférences", icon: Settings },
  ];

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
              Tabs Demo
            </h1>
            <p
              className="text-[16px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              Navigation par onglets - Texte simple et avec icônes
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

        {/* Section 1: Tabs simples (texte uniquement) */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            1. Tabs simples (texte uniquement)
          </h2>
          <div
            className="p-[32px] rounded-[16px]"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <Tabs tabs={simpleTabs} activeTab={activeTab1} onChange={setActiveTab1} />

            {/* Contenu de l'onglet actif */}
            <div className="mt-[32px] p-[24px] rounded-[8px]" style={{ backgroundColor: "var(--surface-page)" }}>
              <h3
                className="text-[20px] font-bold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                {simpleTabs.find((t) => t.id === activeTab1)?.label}
              </h3>
              <p
                className="text-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Contenu de l'onglet "{simpleTabs.find((t) => t.id === activeTab1)?.label}"
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Tabs avec icônes */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            2. Tabs avec icônes
          </h2>
          <div
            className="p-[32px] rounded-[16px]"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <Tabs tabs={tabsWithIcons} activeTab={activeTab2} onChange={setActiveTab2} />

            {/* Contenu de l'onglet actif */}
            <div className="mt-[32px] p-[24px] rounded-[8px]" style={{ backgroundColor: "var(--surface-page)" }}>
              <h3
                className="text-[20px] font-bold mb-[12px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                {tabsWithIcons.find((t) => t.id === activeTab2)?.label}
              </h3>
              <p
                className="text-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Contenu de l'onglet "{tabsWithIcons.find((t) => t.id === activeTab2)?.label}"
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Exemple de fiche Bien immobilier */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            3. Exemple : Fiche Bien immobilier
          </h2>
          <div
            className="rounded-[16px] overflow-hidden"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Header de la fiche */}
            <div className="p-[24px] border-b" style={{ borderBottomColor: "var(--border)" }}>
              <div className="flex items-center gap-[16px]">
                <div
                  className="w-[60px] h-[60px] rounded-[8px] flex items-center justify-center"
                  style={{ backgroundColor: "var(--surface-branded-default)" }}
                >
                  <Home className="size-[32px]" style={{ color: "white" }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="text-[20px] font-bold"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-headings)",
                    }}
                  >
                    Appartement 3 pièces - Paris 15ème
                  </h3>
                  <p
                    className="text-[14px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    75m² • 450 000 € • Réf: BIN-2024-001
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="px-[24px]">
              <Tabs tabs={propertyTabs} activeTab={activeTab3} onChange={setActiveTab3} />
            </div>

            {/* Contenu */}
            <div className="p-[24px]">
              <div className="p-[24px] rounded-[8px]" style={{ backgroundColor: "var(--surface-page)" }}>
                <h4
                  className="text-[18px] font-bold mb-[12px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-headings)",
                  }}
                >
                  {propertyTabs.find((t) => t.id === activeTab3)?.label}
                </h4>
                <p
                  className="text-[16px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Contenu de la section "{propertyTabs.find((t) => t.id === activeTab3)?.label}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Exemple de fiche Client */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            4. Exemple : Fiche Client
          </h2>
          <div
            className="rounded-[16px] overflow-hidden"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Header de la fiche */}
            <div className="p-[24px] border-b" style={{ borderBottomColor: "var(--border)" }}>
              <div className="flex items-center gap-[16px]">
                <div
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-[24px] font-bold"
                  style={{
                    backgroundColor: "var(--surface-branded-default)",
                    color: "white",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  JD
                </div>
                <div>
                  <h3
                    className="text-[20px] font-bold"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-headings)",
                    }}
                  >
                    Jean Dupont
                  </h3>
                  <p
                    className="text-[14px] flex items-center gap-[8px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    <Mail className="size-[14px]" strokeWidth={1.5} />
                    jean.dupont@example.com
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="px-[24px]">
              <Tabs tabs={clientTabs} activeTab={activeTab4} onChange={setActiveTab4} />
            </div>

            {/* Contenu */}
            <div className="p-[24px]">
              <div className="p-[24px] rounded-[8px]" style={{ backgroundColor: "var(--surface-page)" }}>
                <h4
                  className="text-[18px] font-bold mb-[12px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-headings)",
                  }}
                >
                  {clientTabs.find((t) => t.id === activeTab4)?.label}
                </h4>
                <p
                  className="text-[16px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Contenu de la section "{clientTabs.find((t) => t.id === activeTab4)?.label}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Spécifications */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            5. Spécifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {/* States */}
            <div
              className="p-[24px] rounded-[12px]"
              style={{
                backgroundColor: "var(--surface-neutral-default)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="text-[18px] font-bold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                États
              </h3>
              <ul
                className="space-y-[8px] text-[14px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                <li>✅ Active: Texte branded-500 + border-bottom 2px</li>
                <li>✅ Inactive: Texte neutral-500</li>
                <li>✅ Hover: Texte neutral-600/200</li>
                <li>✅ Disabled: Opacité 50% + cursor not-allowed</li>
                <li>✅ Focus: Ring 2px inset</li>
              </ul>
            </div>

            {/* Specs */}
            <div
              className="p-[24px] rounded-[12px]"
              style={{
                backgroundColor: "var(--surface-neutral-default)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="text-[18px] font-bold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Design
              </h3>
              <ul
                className="space-y-[8px] text-[14px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                <li>✅ Border-radius: 8px (top)</li>
                <li>✅ Padding: 12px 16px</li>
                <li>✅ Gap entre onglets: 4px</li>
                <li>✅ Font Active: SemiBold 16px</li>
                <li>✅ Font Inactive: Regular 16px</li>
                <li>✅ Icon size: 20px</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
