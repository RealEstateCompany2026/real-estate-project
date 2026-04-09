import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import { Card } from "../../components/atoms/Card";
import { InputField } from "../../components/molecules/InputField";
import { Lock } from "lucide-react";

/**
 * SIN-04 - Nouveau mot de passe
 * 
 * Formulaire de réinitialisation du mot de passe
 * Nouveau mdp + confirmation + indicateur de force + bouton valider
 */
export default function SIN_04_NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const getPasswordStrength = (pwd: string) => {
    if (pwd.length === 0) return { label: "", strength: 0, color: "" };
    if (pwd.length < 6) return { label: "Faible", strength: 1, color: "var(--surface-error-default)" };
    if (pwd.length < 10) return { label: "Moyen", strength: 2, color: "var(--surface-warning-default)" };
    if (pwd.length < 14) return { label: "Bon", strength: 3, color: "var(--surface-success-default)" };
    return { label: "Excellent", strength: 4, color: "var(--surface-success-default)" };
  };

  const strength = getPasswordStrength(password);
  const passwordsMatch = password === confirmPassword && password.length > 0;

  const handleSubmit = () => {
    if (passwordsMatch && strength.strength >= 2) {
      console.log("New password set");
      navigate("/SIN_05_PasswordResetConfirmation");
    }
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
            <Lock
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
          Nouveau mot de passe
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
          Choisissez un mot de passe sécurisé pour votre compte.
        </p>

        {/* Password Field */}
        <div className="mb-4">
          <InputField
            label="Nouveau mot de passe"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>

        {/* Password Strength Indicator */}
        {password && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span
                style={{
                  color: "var(--text-caption)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--lh-sm)",
                }}
              >
                Force du mot de passe
              </span>
              <span
                style={{
                  color: strength.color,
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--lh-sm)",
                  fontWeight: "500",
                }}
              >
                {strength.label}
              </span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className="h-2 flex-1 rounded-full"
                  style={{
                    backgroundColor:
                      level <= strength.strength
                        ? strength.color
                        : "var(--surface-neutral-subtle)",
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Confirm Password Field */}
        <div className="mb-6">
          <InputField
            label="Confirmer le mot de passe"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />
          {confirmPassword && !passwordsMatch && (
            <p
              className="mt-2"
              style={{
                color: "var(--text-error)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              Les mots de passe ne correspondent pas
            </p>
          )}
        </div>

        {/* Requirements */}
        <Card
          radius="scale300"
          padding="scale400"
          className="mb-6"
          style={{
            backgroundColor: "var(--surface-neutral-subtle)",
          }}
        >
          <p
            className="mb-2"
            style={{
              color: "var(--text-headings)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              fontWeight: "500",
            }}
          >
            Le mot de passe doit contenir :
          </p>
          <ul
            className="space-y-1"
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              paddingLeft: "20px",
            }}
          >
            <li>Au moins 10 caractères</li>
            <li>Une lettre majuscule et une minuscule</li>
            <li>Un chiffre</li>
            <li>Un caractère spécial (@, #, $, etc.)</li>
          </ul>
        </Card>

        {/* Submit Button */}
        <Button
          variant="branded"
          size="lg"
          onClick={handleSubmit}
          className="w-full"
          disabled={!passwordsMatch || strength.strength < 2}
        >
          Réinitialiser le mot de passe
        </Button>
      </Card>
    </div>
  );
}
