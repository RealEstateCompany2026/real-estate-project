import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { Mail, Check } from "lucide-react";

/**
 * SUP-03 - Vérification email
 * 
 * Confirmation d'envoi de l'email de vérification
 * L'utilisateur doit cliquer sur le lien dans l'email pour continuer
 */
export default function SUP_03_VerifyEmail() {
  const navigate = useNavigate();
  const [emailSent, setEmailSent] = useState(true);
  const [resending, setResending] = useState(false);

  // Mock email for demo
  const userEmail = "agent@exemple.fr";

  const handleResendEmail = async () => {
    setResending(true);
    // TODO: API call to resend verification email
    setTimeout(() => {
      setResending(false);
      console.log("Email resent");
    }, 1000);
  };

  const handleEmailVerified = () => {
    // This would be called when user clicks the link in email
    // For demo purposes, we'll simulate it with a button
    navigate("/SUP_04_PersonaRouting");
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
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "var(--success-light)",
            }}
          >
            <Mail size={40} style={{ color: "var(--success-default)" }} />
          </div>
        </div>

        {/* Heading */}
        <h4
          className="text-center mb-3"
          style={{
            color: "var(--text-headings)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h4)",
            lineHeight: "var(--lh-h4)",
          }}
        >
          Vérifiez votre email
        </h4>

        {/* Message */}
        <p
          className="text-center mb-8"
          style={{
            color: "var(--text-body)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--lh-base)",
          }}
        >
          Nous avons envoyé un lien de vérification à{" "}
          <strong style={{ color: "var(--text-headings)" }}>
            {userEmail}
          </strong>
        </p>

        {/* Instructions */}
        <div
          className="p-4 rounded-lg mb-8"
          style={{
            backgroundColor: "var(--surface-default)",
            border: "var(--border-width-50) solid var(--neutral-100)",
          }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div
              className="mt-1"
              style={{
                color: "var(--text-branded-action)",
              }}
            >
              <Check size={20} />
            </div>
            <p
              style={{
                color: "var(--text-body)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              Cliquez sur le lien dans l'email pour vérifier votre adresse
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div
              className="mt-1"
              style={{
                color: "var(--text-branded-action)",
              }}
            >
              <Check size={20} />
            </div>
            <p
              style={{
                color: "var(--text-body)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              Vous serez ensuite redirigé pour compléter votre profil
            </p>
          </div>
        </div>

        {/* Resend button */}
        <p
          className="text-center mb-6"
          style={{
            color: "var(--text-caption)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-sm)",
            lineHeight: "var(--lh-sm)",
          }}
        >
          Vous n'avez pas reçu l'email ?{" "}
          <button
            onClick={handleResendEmail}
            disabled={resending}
            style={{
              color: "var(--text-branded-action)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              textDecoration: "underline",
              background: "none",
              border: "none",
              cursor: resending ? "not-allowed" : "pointer",
              padding: 0,
            }}
          >
            {resending ? "Envoi..." : "Renvoyer"}
          </button>
        </p>

        {/* Demo: Simulate email verified */}
        <div
          className="p-4 rounded-lg mb-6"
          style={{
            backgroundColor: "var(--info-light)",
            border: "var(--border-width-50) solid var(--info-default)",
          }}
        >
          <p
            className="mb-3"
            style={{
              color: "var(--info-default)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              fontWeight: "500",
            }}
          >
            Mode démo
          </p>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleEmailVerified}
          >
            Simuler vérification email
          </Button>
        </div>

        {/* Help text */}
        <p
          className="text-center"
          style={{
            color: "var(--text-caption)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-xs)",
            lineHeight: "var(--lh-xs)",
          }}
        >
          Pensez à vérifier vos spams si vous ne trouvez pas l'email
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