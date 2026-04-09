import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { CheckCircle2 } from "lucide-react";

/**
 * SIN-05 - Confirmation reset
 * 
 * Confirmation de réinitialisation réussie
 * "Mot de passe mis à jour" + redirection auto sign-in (3s)
 */
export default function SIN_05_PasswordResetConfirmation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/SIN_01_SignIn");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="rounded-full flex items-center justify-center animate-bounce"
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "var(--surface-success-subtle)",
            }}
          >
            <CheckCircle2
              size={40}
              style={{ color: "var(--icon-success-default)" }}
            />
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-center mb-2"
          style={{
            color: "var(--text-headings)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h2)",
            lineHeight: "var(--lh-h2)",
          }}
        >
          Mot de passe mis à jour !
        </h1>

        <p
          className="text-center mb-8"
          style={{
            color: "var(--text-body)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--lh-base)",
          }}
        >
          Votre mot de passe a été réinitialisé avec succès.
        </p>

        {/* Auto-redirect message */}
        <Card
          radius="scale300"
          padding="scale400"
          className="text-center"
          style={{
            backgroundColor: "var(--surface-success-subtle)",
            border: "1px solid var(--border-success)",
          }}
        >
          <p
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--lh-base)",
            }}
          >
            Redirection automatique dans 3 secondes...
          </p>
        </Card>
      </Card>
    </div>
  );
}
