import { useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import { Card } from "../../components/atoms/Card";
import { XCircle } from "lucide-react";

/**
 * SIN-06 - Lien expiré / invalide
 * 
 * Écran d'erreur pour lien de réinitialisation expiré ou invalide
 * Message d'erreur + bouton "Renvoyer un lien"
 */
export default function SIN_06_LinkExpired() {
  const navigate = useNavigate();

  const handleRequestNewLink = () => {
    navigate("/SIN_02_ForgotPasswordEmail");
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
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: "var(--surface-error-subtle)",
            }}
          >
            <XCircle
              size={32}
              style={{ color: "var(--icon-error-default)" }}
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
          Lien expiré
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
          Ce lien de réinitialisation a expiré ou est invalide. Les liens de réinitialisation sont valables pendant 1 heure.
        </p>

        {/* Error Box */}
        <Card
          radius="scale300"
          padding="scale400"
          className="mb-6"
          style={{
            backgroundColor: "var(--surface-error-subtle)",
            border: "1px solid var(--border-error)",
          }}
        >
          <p
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
            }}
          >
            ⚠️ Pour des raisons de sécurité, les liens de réinitialisation expirent après 1 heure. Veuillez demander un nouveau lien.
          </p>
        </Card>

        {/* Request New Link Button */}
        <Button
          variant="branded"
          size="lg"
          onClick={handleRequestNewLink}
          className="w-full mb-4"
        >
          Renvoyer un lien
        </Button>

        {/* Back to Sign In */}
        <Button
          variant="text"
          size="md"
          onClick={() => navigate("/SIN_01_SignIn")}
          className="w-full"
        >
          Retour à la connexion
        </Button>
      </Card>
    </div>
  );
}
