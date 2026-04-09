import { Link } from "react-router";
import { Button } from "../../components/atoms/Button";
import { Card } from "../../components/atoms/Card";

/**
 * SUP-00 - Landing Page (CTA)
 * 
 * Page marketing avec bouton « Essai gratuit 14 jours »
 * Point d'entrée pour la création de compte
 */
export default function SUP_00_LandingPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: "var(--surface-page)" }}
    >
      <Card
        radius="scale400"
        padding="scale800"
        className="w-full max-w-[720px]"
      >
        {/* Hero Section */}
        <div className="text-center max-w-4xl mb-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div
              className="rounded-lg flex items-center justify-center"
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "var(--surface-branded-default)",
              }}
            >
              <svg
                width="50"
                height="50"
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
          <h1
            className="mb-6"
            style={{
              color: "var(--text-headings)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-h1)",
              lineHeight: "var(--lh-h1)",
            }}
          >
            RealAgent
          </h1>

          <h2
            className="mb-4"
            style={{
              color: "var(--text-headings)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-h2)",
              lineHeight: "var(--lh-h2)",
            }}
          >
            Le CRM immobilier nouvelle génération
          </h2>

          <p
            className="mb-12 max-w-2xl mx-auto"
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-lg)",
              lineHeight: "var(--lh-lg)",
            }}
          >
            Gérez vos clients, biens et affaires en un seul endroit. 
            Boostez votre productivité avec l'IA intégrée.
          </p>

          {/* CTA Button */}
          <Link to="/SUP_01_MethodChoice" className="inline-block mb-6">
            <Button variant="branded" size="lg">
              Essai gratuit 14 jours
            </Button>
          </Link>

          <p
            style={{
              color: "var(--text-caption)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
            }}
          >
            Aucune carte bancaire requise
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-6 mb-12">
          {[
            {
              title: "Gestion complète",
              description: "Clients, biens, affaires, documents : tout au même endroit"
            },
            {
              title: "IA intégrée",
              description: "Matching automatique, descriptions générées, suggestions intelligentes"
            },
            {
              title: "Multi-agence",
              description: "Gérez votre équipe et collaborez efficacement"
            }
          ].map((feature, index) => (
            <Card
              key={index}
              radius="scale300"
              padding="scale500"
              className="text-center"
            >
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
                {feature.title}
              </h3>
              <p
                style={{
                  color: "var(--text-body)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--lh-sm)",
                }}
              >
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Sign In Link */}
        <p className="text-center">
          <span
            style={{
              color: "var(--text-caption)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--lh-base)",
            }}
          >
            Vous avez déjà un compte ?{" "}
          </span>
          <Link
            to="/signin"
            style={{
              color: "var(--text-branded-action)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--lh-base)",
              textDecoration: "none",
            }}
            className="hover:underline"
          >
            Se connecter
          </Link>
        </p>

        {/* Footer */}
        <p
          className="text-center mt-12"
          style={{
            color: "var(--neutral-300)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-xs)",
            lineHeight: "var(--lh-xs)",
          }}
        >
          © 2026 RealAgent - CRM Immobilier
        </p>
      </Card>
    </div>
  );
}