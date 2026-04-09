/**
 * DEMO PAGE: Card Components
 *
 * Page de démonstration des composants card du design system RealAgent
 */

import { useState } from "react";
import { CardClient, CardBien } from "../components/components";
import { Button } from "../components/atoms/Button";
import imgBien from "figma:asset/ea149919048c49c233547426cab6a80f99a70e99.png";

export default function CardComponentsDemo() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div
      className={theme === "dark" ? "dark" : ""}
      style={{ minHeight: "100vh" }}
    >
      <div
        className="min-h-screen p-8"
        style={{ backgroundColor: theme === "dark" ? "#111215" : "#FFFFFF" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header avec bouton theme toggle */}
          <div className="flex items-center justify-between mb-8">
            <h1
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h1)",
                lineHeight: "var(--lh-h1)",
              }}
            >
              Composants Card
            </h1>
            <Button
              variant="primary"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? "Mode Dark" : "Mode Light"}
            </Button>
          </div>

          {/* Card Client */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Card Client
            </h2>

            {/* État Default */}
            <div className="mb-4">
              <h3
                className="mb-2"
                style={{
                  color: theme === "dark" ? "#A1A4AA" : "#737780",
                  fontFamily: "var(--font-family)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                État Default
              </h3>
              <div className="flex flex-wrap gap-8">
                <CardClient
                  firstName="Jean-Christophe"
                  lastName="LEMARCHAND"
                  badges={[
                    { label: "VENDEUR", variant: "default" },
                    { label: "ACQUÉREUR", variant: "default" },
                  ]}
                  qualification={64}
                  engagement={82}
                  conversion={24}
                  reactivation={49}
                  engagementLevels={["success", "success", "success", "none", "none"]}
                  daysActive={280}
                  aiSuggestions={2}
                  theme={theme}
                  onClientClick={() => console.log("Client clicked")}
                />
              </div>
            </div>

            {/* État Hover */}
            <div className="mb-4">
              <h3
                className="mb-2"
                style={{
                  color: theme === "dark" ? "#A1A4AA" : "#737780",
                  fontFamily: "var(--font-family)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                État Hover
              </h3>
              <div className="flex flex-wrap gap-8">
                <CardClient
                  firstName="Marie"
                  lastName="DUBOIS"
                  badges={[
                    { label: "VENDEUR", variant: "default" },
                  ]}
                  qualification={64}
                  engagement={82}
                  conversion={24}
                  reactivation={49}
                  engagementLevels={["success", "success", "success", "success", "success"]}
                  daysActive={45}
                  aiSuggestions={4}
                  theme={theme}
                  forceHover={true}
                  onClientClick={() => console.log("Client clicked")}
                />
              </div>
            </div>
          </section>

          {/* Card Bien */}
          <section className="mb-12">
            <h2
              className="mb-4"
              style={{
                color: theme === "dark" ? "#DADBDD" : "#22252B",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
              }}
            >
              Card Bien
            </h2>

            {/* État Default */}
            <div className="mb-4">
              <h3
                className="mb-2"
                style={{
                  color: theme === "dark" ? "#A1A4AA" : "#737780",
                  fontFamily: "var(--font-family)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                État Default
              </h3>
              <div className="flex flex-wrap gap-8">
                <CardBien
                  imageUrl={imgBien}
                  type="VENTE"
                  price="450 000€"
                  location="Saint-Jean-de-Vedas"
                  bienType="T3"
                  surface="120 m²"
                  dpe="A"
                  qualification={64}
                  entretien={38}
                  conversion={24}
                  aiSuggestions={2}
                  theme={theme}
                  onBienClick={() => console.log("Bien clicked")}
                />
              </div>
            </div>

            {/* État Hover */}
            <div className="mb-4">
              <h3
                className="mb-2"
                style={{
                  color: theme === "dark" ? "#A1A4AA" : "#737780",
                  fontFamily: "var(--font-family)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                État Hover
              </h3>
              <div className="flex flex-wrap gap-8">
                <CardBien
                  imageUrl={imgBien}
                  type="LOCATION"
                  price="1 200€/mois"
                  location="Montpellier"
                  bienType="T2"
                  surface="65 m²"
                  dpe="C"
                  qualification={72}
                  entretien={45}
                  conversion={31}
                  aiSuggestions={1}
                  theme={theme}
                  forceHover={true}
                  onBienClick={() => console.log("Bien clicked")}
                />
              </div>
            </div>
          </section>

          {/* Bouton retour */}
          <Button
            variant="text"
            size="lg"
            onClick={() => window.history.back()}
          >
            ← Retour
          </Button>
        </div>
      </div>
    </div>
  );
}
