import { useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { User, Users } from "lucide-react";

/**
 * SUP-04 - Routage persona
 * 
 * Détection / sélection du type d'utilisateur :
 * - Agent A/D (solo) → SUP-05A
 * - Admin B/C (agence) → SUP-05B
 */
export default function SUP_04_PersonaRouting() {
  const navigate = useNavigate();

  const handleSoloAgent = () => {
    navigate("/SUP_05A_ProfileSolo");
  };

  const handleAgency = () => {
    navigate("/SUP_05B_ProfileAgency");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: "var(--surface-page)" }}
    >
      <Card
        radius="scale400"
        padding="scale800"
        className="w-full max-w-[480px]"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div
            className="rounded-lg flex items-center justify-center"
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: "var(--surface-branded-default)",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 59.35 30.2"
              fill="none"
            >
              <path
                d="M14.6191 0.00927734C18.6152 0.00927734 21.8096 3.21729 21.8096 7.21338C21.8096 11.2095 18.6152 14.4175 14.6191 14.4175C10.623 14.4175 7.41504 11.2095 7.41504 7.21338C7.41504 3.21729 10.623 0.00927734 14.6191 0.00927734ZM14.6191 16.5137C18.6152 16.5137 21.8096 19.7217 21.8096 23.7178C21.8096 27.7139 18.6152 30.9219 14.6191 30.9219C10.623 30.9219 7.41504 27.7139 7.41504 23.7178C7.41504 19.7217 10.623 16.5137 14.6191 16.5137ZM44.7319 0.00927734C48.728 0.00927734 51.936 3.21729 51.936 7.21338C51.936 11.2095 48.728 14.4175 44.7319 14.4175C40.7358 14.4175 37.5278 11.2095 37.5278 7.21338C37.5278 3.21729 40.7358 0.00927734 44.7319 0.00927734Z"
                fill="var(--text-branded-on-action)"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h4
          className="text-center mb-2"
          style={{
            color: "var(--text-headings)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h4)",
            lineHeight: "var(--lh-h4)",
          }}
        >
          Quel type de compte souhaitez-vous créer ?
        </h4>

        <p
          className="text-center mb-8"
          style={{
            color: "var(--text-caption)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-sm)",
            lineHeight: "var(--lh-sm)",
          }}
        >
          Sélectionnez l'option qui correspond à votre situation
        </p>

        {/* Options - Stacked vertically */}
        <div className="flex flex-col gap-4">
          {/* Solo Agent Card */}
          <button
            onClick={handleSoloAgent}
            className="w-full text-left transition-all hover:scale-[1.01]"
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <Card
              radius="scale300"
              padding="scale500"
              style={{
                border: "var(--border-width-100) solid var(--neutral-100)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--surface-neutral-subtle)",
                  }}
                >
                  <User
                    size={24}
                    style={{ color: "var(--icon-neutral-default)" }}
                  />
                </div>

                <div className="flex-1">
                  <h5
                    className="mb-1"
                    style={{
                      color: "var(--text-headings)",
                      fontFamily: "var(--font-family)",
                      fontSize: "var(--text-base)",
                      lineHeight: "var(--lh-base)",
                    }}
                  >
                    Agent indépendant
                  </h5>

                  <p
                    style={{
                      color: "var(--text-caption)",
                      fontFamily: "var(--font-family)",
                      fontSize: "var(--text-sm)",
                      lineHeight: "var(--lh-sm)",
                    }}
                  >
                    Je travaille seul(e) ou en tant qu'agent mandataire
                  </p>
                </div>
              </div>
            </Card>
          </button>

          {/* Agency Card */}
          <button
            onClick={handleAgency}
            className="w-full text-left transition-all hover:scale-[1.01]"
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <Card
              radius="scale300"
              padding="scale500"
              style={{
                border: "var(--border-width-100) solid var(--neutral-100)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--surface-neutral-subtle)",
                  }}
                >
                  <Users
                    size={24}
                    style={{ color: "var(--icon-neutral-default)" }}
                  />
                </div>

                <div className="flex-1">
                  <h5
                    className="mb-1"
                    style={{
                      color: "var(--text-headings)",
                      fontFamily: "var(--font-family)",
                      fontSize: "var(--text-base)",
                      lineHeight: "var(--lh-base)",
                    }}
                  >
                    Agence immobilière
                  </h5>

                  <p
                    style={{
                      color: "var(--text-caption)",
                      fontFamily: "var(--font-family)",
                      fontSize: "var(--text-sm)",
                      lineHeight: "var(--lh-sm)",
                    }}
                  >
                    Je gère une équipe d'agents ou une agence
                  </p>
                </div>
              </div>
            </Card>
          </button>
        </div>

        {/* Help text */}
        <p
          className="text-center mt-6"
          style={{
            color: "var(--text-caption)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-xs)",
            lineHeight: "var(--lh-xs)",
          }}
        >
          Vous pourrez toujours modifier ces paramètres plus tard
        </p>

        {/* Footer */}
        <p
          className="text-center mt-8"
          style={{
            color: "var(--neutral-300)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-xs)",
            lineHeight: "var(--lh-xs)",
          }}
        >
          © 2026 RealAgent
        </p>
      </Card>
    </div>
  );
}