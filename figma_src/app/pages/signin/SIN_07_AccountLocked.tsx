import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import { Card } from "../../components/atoms/Card";
import { ShieldAlert } from "lucide-react";

/**
 * SIN-07 - Compte verrouillé (rate limit)
 * 
 * Écran de blocage temporaire après trop de tentatives
 * "Trop de tentatives" + countdown 5 min + lien mot de passe oublié
 */
export default function SIN_07_AccountLocked() {
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleUnlock = () => {
    if (timeRemaining === 0) {
      navigate("/SIN_01_SignIn");
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
        {/* Warning Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: "var(--surface-warning-subtle)",
            }}
          >
            <ShieldAlert
              size={32}
              style={{ color: "var(--icon-warning-default)" }}
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
          Compte temporairement verrouillé
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
          Trop de tentatives de connexion ont été détectées. Par mesure de sécurité, votre compte a été temporairement verrouillé.
        </p>

        {/* Countdown Box */}
        <Card
          radius="scale300"
          padding="scale500"
          className="mb-6 text-center"
          style={{
            backgroundColor: "var(--surface-warning-subtle)",
            border: "1px solid var(--border-warning)",
          }}
        >
          <p
            className="mb-2"
            style={{
              color: "var(--text-caption)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
            }}
          >
            Temps restant avant déverrouillage
          </p>
          <p
            style={{
              color: "var(--text-headings)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-h1)",
              lineHeight: "var(--lh-h1)",
              fontWeight: "700",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {formatTime(timeRemaining)}
          </p>
        </Card>

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
            💡 Si vous avez oublié votre mot de passe, vous pouvez demander un lien de réinitialisation.
          </p>
        </Card>

        {/* Forgot Password Link */}
        <div className="mb-6 text-center">
          <Link
            to="/SIN_02_ForgotPasswordEmail"
            style={{
              color: "var(--text-branded-action)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--lh-base)",
              textDecoration: "none",
            }}
            className="hover:underline"
          >
            Mot de passe oublié ?
          </Link>
        </div>

        {/* Retry Button */}
        <Button
          variant="branded"
          size="lg"
          onClick={handleUnlock}
          disabled={timeRemaining > 0}
          className="w-full"
        >
          {timeRemaining > 0 ? "Compte verrouillé" : "Réessayer"}
        </Button>
      </Card>
    </div>
  );
}
