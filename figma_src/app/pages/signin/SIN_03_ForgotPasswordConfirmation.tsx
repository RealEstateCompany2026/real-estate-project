import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import { Card } from "../../components/atoms/Card";
import { CheckCircle2 } from "lucide-react";

/**
 * SIN-03 - Mot de passe oublié : confirmation envoi
 * 
 * Confirmation d'envoi du lien de réinitialisation
 * "Vérifiez votre boîte mail" + bouton Renvoyer (cooldown 60s) + détection fournisseur
 */
export default function SIN_03_ForgotPasswordConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "votre adresse email";
  
  const [cooldown, setCooldown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [cooldown]);

  const handleResend = () => {
    console.log("Resend email to:", email);
    setCooldown(60);
    setCanResend(false);
  };

  const getEmailProvider = (email: string) => {
    const domain = email.split("@")[1]?.toLowerCase();
    if (domain?.includes("gmail")) return { name: "Gmail", url: "https://mail.google.com" };
    if (domain?.includes("outlook") || domain?.includes("hotmail")) return { name: "Outlook", url: "https://outlook.live.com" };
    if (domain?.includes("yahoo")) return { name: "Yahoo", url: "https://mail.yahoo.com" };
    return null;
  };

  const provider = getEmailProvider(email);

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
            className="rounded-full flex items-center justify-center"
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: "var(--surface-success-subtle)",
            }}
          >
            <CheckCircle2
              size={32}
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
          Vérifiez votre boîte mail
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
          Nous avons envoyé un lien de réinitialisation à{" "}
          <span style={{ fontWeight: "500", color: "var(--text-headings)" }}>
            {email}
          </span>
        </p>

        {/* Provider Link */}
        {provider && (
          <div className="mb-6">
            <Button
              variant="outlined"
              size="lg"
              onClick={() => window.open(provider.url, "_blank")}
              className="w-full"
            >
              Ouvrir {provider.name}
            </Button>
          </div>
        )}

        {/* Resend Button */}
        <Button
          variant="outlined"
          size="lg"
          onClick={handleResend}
          disabled={!canResend}
          className="w-full mb-6"
        >
          {canResend
            ? "Renvoyer le lien"
            : `Renvoyer dans ${cooldown}s`}
        </Button>

        {/* Info Box */}
        <Card
          radius="scale300"
          padding="scale400"
          className="mb-6"
          style={{
            backgroundColor: "var(--surface-info-subtle)",
            border: "1px solid var(--border-info)",
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
            💡 Si vous ne trouvez pas l'email, vérifiez vos spams ou courriers indésirables.
          </p>
        </Card>

        {/* Back to Sign In */}
        <div className="text-center">
          <Button
            variant="text"
            size="md"
            onClick={() => navigate("/SIN_01_SignIn")}
          >
            Retour à la connexion
          </Button>
        </div>
      </Card>
    </div>
  );
}
