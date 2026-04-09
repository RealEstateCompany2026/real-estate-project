import { Link, useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { Mail } from "lucide-react";

/**
 * SUP-01 - Sign-up : choix de méthode
 * 
 * Google SSO (bouton principal) + Email/password (secondaire)
 * Permet à l'utilisateur de choisir sa méthode d'inscription
 */
export default function SUP_01_MethodChoice() {
  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    console.log("Google OAuth signup");
    // TODO: Implement Google OAuth
    // For now, redirect to persona routing
    navigate("/SUP_04_PersonaRouting");
  };

  const handleEmailSignup = () => {
    navigate("/SUP_02_EmailPasswordForm");
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
          Créez votre compte
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
          Choisissez votre méthode d'inscription
        </p>

        {/* Buttons - Vertical Stack */}
        <div className="flex flex-col gap-3">
          {/* Google SSO Button */}
          <Button
            variant="outlined"
            fullWidth
            onClick={handleGoogleSignup}
            iconLeft={
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path
                  fill="#4285F4"
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                />
                <path
                  fill="#34A853"
                  d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
                />
                <path
                  fill="#FBBC05"
                  d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"
                />
                <path
                  fill="#EA4335"
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"
                />
              </svg>
            }
          >
            Continuer avec Google
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-2">
            <div
              className="flex-1"
              style={{
                height: "var(--border-width-25)",
                backgroundColor: "var(--neutral-100)",
              }}
            />
            <span
              style={{
                color: "var(--text-caption)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              ou
            </span>
            <div
              className="flex-1"
              style={{
                height: "var(--border-width-25)",
                backgroundColor: "var(--neutral-100)",
              }}
            />
          </div>

          {/* Email/Password Button */}
          <Button
            variant="outlined"
            fullWidth
            onClick={handleEmailSignup}
            iconLeft={<Mail size={18} style={{ color: "var(--icon-neutral-default)" }} />}
          >
            Continuer avec email
          </Button>
        </div>

        {/* Sign In Link */}
        <p className="text-center mt-6">
          <span
            style={{
              color: "var(--text-caption)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
            }}
          >
            Vous avez déjà un compte ?{" "}
          </span>
          <Link
            to="/signin"
            style={{
              color: "var(--text-branded-action)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              textDecoration: "none",
            }}
            className="hover:underline"
          >
            Se connecter
          </Link>
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