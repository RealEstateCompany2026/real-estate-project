import { useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { Stepper } from "../../components/molecules/Stepper";
import { CheckCircle } from "lucide-react";

/**
 * LOG-05 - Inscription étape 4 : Confirmation
 * 
 * Email de vérification envoyé.
 */
export default function RegisterStep4() {
  const navigate = useNavigate();
  
  // Mock email - en production viendrait du state/context
  const userEmail = "agent@example.com";

  const handleOpenEmail = () => {
    // Ouvrir le client email par défaut
    window.open("mailto:", "_blank");
  };

  const handleResendEmail = () => {
    console.log("Resending verification email to:", userEmail);
    // TODO: API call to resend verification email
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: "var(--surface-page)" }}
    >
      <Card
        radius="scale400"
        padding="scale800"
        className="w-full max-w-[600px]"
      >
        {/* Stepper - all completed */}
        <div style={{ marginBottom: "var(--scale-800)" }}>
          <Stepper
            steps={["Identité", "Agence", "Profil", "Confirmation"]}
            currentStep={3}
            completedSteps={[0, 1, 2]}
            variant="minimal"
          />
        </div>

        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "var(--surface-success)",
            }}
          >
            <CheckCircle
              size={48}
              style={{ color: "var(--icon-success)" }}
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Heading */}
        <h4
          className="text-center mb-4"
          style={{
            color: "var(--text-headings)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h4)",
            lineHeight: "var(--lh-h4)",
          }}
        >
          Vérifiez votre email
        </h4>

        {/* Description */}
        <p
          className="text-center mb-8"
          style={{
            color: "var(--text-body)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--lh-base)",
            maxWidth: "400px",
            margin: "0 auto",
            marginBottom: "var(--scale-800)",
          }}
        >
          Un email de confirmation a été envoyé à{" "}
          <strong style={{ color: "var(--text-branded-action)" }}>
            {userEmail}
          </strong>
          . Cliquez sur le lien pour activer votre compte.
        </p>

        {/* Open email button */}
        <Button
          variant="branded"
          fullWidth
          onClick={handleOpenEmail}
          className="mb-4"
        >
          Ouvrir ma messagerie
        </Button>

        {/* Resend link */}
        <div className="text-center">
          <button
            onClick={handleResendEmail}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-branded-action)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              cursor: "pointer",
              textDecoration: "none",
            }}
            className="hover:underline"
          >
            Renvoyer l'email
          </button>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "var(--border-width-25)",
            backgroundColor: "var(--neutral-100)",
            marginTop: "var(--scale-800)",
            marginBottom: "var(--scale-800)",
          }}
        />

        {/* Helper text */}
        <p
          className="text-center"
          style={{
            color: "var(--text-caption)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-sm)",
            lineHeight: "var(--lh-sm)",
          }}
        >
          Une fois votre email confirmé, vous pourrez accéder à votre compte et
          commencer à utiliser RealAgent.
        </p>
      </Card>
    </div>
  );
}