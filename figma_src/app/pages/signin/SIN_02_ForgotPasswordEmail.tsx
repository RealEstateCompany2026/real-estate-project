import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import { Card } from "../../components/atoms/Card";
import { InputField } from "../../components/molecules/InputField";
import { Mail } from "lucide-react";

/**
 * SIN-02 - Mot de passe oublié : saisie email
 * 
 * Formulaire pour demander un lien de réinitialisation
 * Champ email + bouton "Envoyer le lien" + retour sign-in
 */
export default function SIN_02_ForgotPasswordEmail() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendLink = () => {
    console.log("Send reset link to:", email);
    navigate("/SIN_03_ForgotPasswordConfirmation", { state: { email } });
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
              width: "64px",
              height: "64px",
              backgroundColor: "var(--surface-branded-subtle)",
            }}
          >
            <Mail
              size={32}
              style={{ color: "var(--icon-branded-default)" }}
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
          Mot de passe oublié
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
          Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
        </p>

        {/* Email Field */}
        <div className="mb-6">
          <InputField
            label="Email"
            placeholder="nom@exemple.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>

        {/* Send Link Button */}
        <Button
          variant="branded"
          size="lg"
          onClick={handleSendLink}
          className="w-full mb-6"
          disabled={!email}
        >
          Envoyer le lien
        </Button>

        {/* Back to Sign In */}
        <div className="text-center">
          <Link
            to="/SIN_01_SignIn"
            style={{
              color: "var(--text-branded-action)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--lh-base)",
              textDecoration: "none",
            }}
            className="hover:underline"
          >
            ← Retour à la connexion
          </Link>
        </div>
      </Card>
    </div>
  );
}
