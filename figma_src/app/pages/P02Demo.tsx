import { Link } from "react-router";
import { Card } from "../components/atoms/Card";
import { Button } from "../components/atoms/Button";

/**
 * P02 Demo - Sign In Parcours
 * 
 * Page de démonstration pour tester tous les écrans du parcours Sign-In (SIN)
 */
export default function P02Demo() {
  const screens = [
    {
      id: "SIN_01",
      title: "SIN-01 — Sign-in : connexion",
      route: "/SIN_01_SignIn",
      description: "Google SSO + formulaire email/password + liens",
    },
    {
      id: "SIN_02",
      title: "SIN-02 — Mot de passe oublié : saisie email",
      route: "/SIN_02_ForgotPasswordEmail",
      description: "Champ email + bouton envoyer + retour",
    },
    {
      id: "SIN_03",
      title: "SIN-03 — Mot de passe oublié : confirmation",
      route: "/SIN_03_ForgotPasswordConfirmation",
      description: "Confirmation envoi + détection fournisseur + renvoyer (60s)",
    },
    {
      id: "SIN_04",
      title: "SIN-04 — Nouveau mot de passe",
      route: "/SIN_04_NewPassword",
      description: "Nouveau mdp + confirmation + indicateur force",
    },
    {
      id: "SIN_05",
      title: "SIN-05 — Confirmation reset",
      route: "/SIN_05_PasswordResetConfirmation",
      description: "Mot de passe mis à jour + redirection auto (3s)",
    },
    {
      id: "SIN_06",
      title: "SIN-06 — Lien expiré / invalide",
      route: "/SIN_06_LinkExpired",
      description: "Message d'erreur + renvoyer un lien",
    },
    {
      id: "SIN_07",
      title: "SIN-07 — Compte verrouillé (rate limit)",
      route: "/SIN_07_AccountLocked",
      description: "Trop de tentatives + countdown 5 min",
    },
    {
      id: "SIN_08",
      title: "SIN-08 — Invitation : créer son accès",
      route: "/SIN_08_InvitationSignup",
      description: "Email pré-rempli + organisation + Google/password + profil",
    },
  ];

  return (
    <div
      className="min-h-screen p-8"
      style={{ backgroundColor: "var(--surface-page)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="mb-2"
            style={{
              color: "var(--text-headings)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-h1)",
              lineHeight: "var(--lh-h1)",
            }}
          >
            Parcours P2 — Sign In (SIN)
          </h1>
          <p
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-lg)",
              lineHeight: "var(--lh-lg)",
            }}
          >
            8 écrans d'authentification et réinitialisation de mot de passe
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card radius="scale300" padding="scale500">
            <p
              className="mb-1"
              style={{
                color: "var(--text-caption)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              Total écrans
            </p>
            <p
              style={{
                color: "var(--text-headings)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
                fontWeight: "700",
              }}
            >
              8
            </p>
          </Card>

          <Card radius="scale300" padding="scale500">
            <p
              className="mb-1"
              style={{
                color: "var(--text-caption)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              État
            </p>
            <p
              style={{
                color: "var(--text-success-default)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
                fontWeight: "700",
              }}
            >
              ✓ Complet
            </p>
          </Card>

          <Card radius="scale300" padding="scale500">
            <p
              className="mb-1"
              style={{
                color: "var(--text-caption)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              Largeur standard
            </p>
            <p
              style={{
                color: "var(--text-headings)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-h2)",
                lineHeight: "var(--lh-h2)",
                fontWeight: "700",
              }}
            >
              480px
            </p>
          </Card>
        </div>

        {/* Screen List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {screens.map((screen) => (
            <Card
              key={screen.id}
              radius="scale400"
              padding="scale500"
              className="hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col gap-4">
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      color: "var(--text-headings)",
                      fontFamily: "var(--font-family)",
                      fontSize: "var(--text-lg)",
                      lineHeight: "var(--lh-lg)",
                      fontWeight: "500",
                    }}
                  >
                    {screen.title}
                  </h3>
                  <p
                    className="mb-3"
                    style={{
                      color: "var(--text-body)",
                      fontFamily: "var(--font-family)",
                      fontSize: "var(--text-sm)",
                      lineHeight: "var(--lh-sm)",
                    }}
                  >
                    {screen.description}
                  </p>
                  <code
                    style={{
                      color: "var(--text-caption)",
                      fontFamily: "monospace",
                      fontSize: "var(--text-xs)",
                      backgroundColor: "var(--surface-neutral-subtle)",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    {screen.route}
                  </code>
                </div>
                <Link to={screen.route}>
                  <Button variant="outlined" size="md" className="w-full">
                    Voir l'écran →
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Flows */}
        <Card radius="scale400" padding="scale600" className="mb-8">
          <h2
            className="mb-4"
            style={{
              color: "var(--text-headings)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-h3)",
              lineHeight: "var(--lh-h3)",
            }}
          >
            Flux de navigation
          </h2>

          <div className="flex flex-col gap-6">
            {/* Main Flow */}
            <div>
              <h3
                className="mb-2"
                style={{
                  color: "var(--text-headings)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-base)",
                  lineHeight: "var(--lh-base)",
                  fontWeight: "500",
                }}
              >
                Flux principal
              </h3>
              <code
                style={{
                  color: "var(--text-body)",
                  fontFamily: "monospace",
                  fontSize: "var(--text-sm)",
                  display: "block",
                  backgroundColor: "var(--surface-neutral-subtle)",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                SIN_01 → Dashboard (succès)
                <br />
                SIN_01 → SIN_02 (mot de passe oublié)
                <br />
                SIN_01 → SUP_01 (créer compte)
              </code>
            </div>

            {/* Reset Flow */}
            <div>
              <h3
                className="mb-2"
                style={{
                  color: "var(--text-headings)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-base)",
                  lineHeight: "var(--lh-base)",
                  fontWeight: "500",
                }}
              >
                Flux reset mot de passe
              </h3>
              <code
                style={{
                  color: "var(--text-body)",
                  fontFamily: "monospace",
                  fontSize: "var(--text-sm)",
                  display: "block",
                  backgroundColor: "var(--surface-neutral-subtle)",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                SIN_02 → SIN_03 → (email) → SIN_04 → SIN_05 → SIN_01 (auto 3s)
              </code>
            </div>

            {/* Error Flow */}
            <div>
              <h3
                className="mb-2"
                style={{
                  color: "var(--text-headings)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-base)",
                  lineHeight: "var(--lh-base)",
                  fontWeight: "500",
                }}
              >
                Flux erreurs
              </h3>
              <code
                style={{
                  color: "var(--text-body)",
                  fontFamily: "monospace",
                  fontSize: "var(--text-sm)",
                  display: "block",
                  backgroundColor: "var(--surface-neutral-subtle)",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                SIN_06 (lien expiré) → SIN_02 (renvoyer)
                <br />
                SIN_07 (rate limit 5min) → SIN_01 (après countdown)
              </code>
            </div>
          </div>
        </Card>

        {/* Features */}
        <Card radius="scale400" padding="scale600">
          <h2
            className="mb-4"
            style={{
              color: "var(--text-headings)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-h3)",
              lineHeight: "var(--lh-h3)",
            }}
          >
            Fonctionnalités clés
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Google SSO avec logo officiel",
              "Détection fournisseur email (Gmail, Outlook, Yahoo)",
              "Cooldown 60s pour renvoi email",
              "Indicateur force mot de passe (4 niveaux)",
              "Rate limiting avec countdown 5 min",
              "Expiration liens reset (1h)",
              "Redirections automatiques",
              "Support dark mode complet",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <span style={{ color: "var(--text-success-default)" }}>✓</span>
                <span
                  style={{
                    color: "var(--text-body)",
                    fontFamily: "var(--font-family)",
                    fontSize: "var(--text-base)",
                    lineHeight: "var(--lh-base)",
                  }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
