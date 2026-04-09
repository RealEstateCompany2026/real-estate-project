import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { Check, Loader } from "lucide-react";

/**
 * SUP-07 - Confirmation & redirection
 * 
 * Écran de confirmation de création de compte
 * Redirection automatique vers l'onboarding tour
 */
export default function SUP_07_Confirmation() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Auto redirect when countdown reaches 0
      setIsRedirecting(true);
      setTimeout(() => {
        navigate("/onboarding-wizard");
      }, 500);
    }
  }, [countdown, navigate]);

  const handleContinueNow = () => {
    setIsRedirecting(true);
    navigate("/onboarding-wizard");
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
        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div
            className="rounded-full flex items-center justify-center relative"
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--success-light)",
            }}
          >
            {/* Checkmark icon with animation */}
            <Check
              size={60}
              style={{
                color: "var(--success-default)",
                strokeWidth: 3,
              }}
              className="animate-scale-in"
            />
          </div>
        </div>

        {/* Heading */}
        <h3
          className="text-center mb-4"
          style={{
            color: "var(--text-headings)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h3)",
            lineHeight: "var(--lh-h3)",
          }}
        >
          Bienvenue sur RealAgent ! 🎉
        </h3>

        <p
          className="text-center mb-8"
          style={{
            color: "var(--text-body)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-lg)",
            lineHeight: "var(--lh-lg)",
          }}
        >
          Votre compte a été créé avec succès
        </p>

        {/* Success summary */}
        <div
          className="p-6 rounded-lg mb-8"
          style={{
            backgroundColor: "var(--surface-default)",
            border: "var(--border-width-50) solid var(--neutral-100)",
          }}
        >
          <div className="space-y-4">
            {[
              "Votre compte est activé",
              "Vos informations sont sécurisées",
              "Vous pouvez commencer à utiliser RealAgent",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="flex-shrink-0"
                  style={{
                    color: "var(--success-default)",
                  }}
                >
                  <Check size={20} />
                </div>
                <p
                  style={{
                    color: "var(--text-body)",
                    fontFamily: "var(--font-family)",
                    fontSize: "var(--text-base)",
                    lineHeight: "var(--lh-base)",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Next steps */}
        <div
          className="p-4 rounded-lg mb-8"
          style={{
            backgroundColor: "var(--info-light)",
            border: "var(--border-width-50) solid var(--info-default)",
          }}
        >
          <h5
            className="mb-2"
            style={{
              color: "var(--info-default)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--lh-base)",
              fontWeight: "500",
            }}
          >
            Prochaine étape
          </h5>
          <p
            style={{
              color: "var(--info-default)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
            }}
          >
            Nous allons vous guider pour configurer votre espace de travail et
            découvrir les fonctionnalités principales
          </p>
        </div>

        {/* Countdown or redirect message */}
        {isRedirecting ? (
          <div className="flex items-center justify-center gap-3 mb-6">
            <Loader
              size={20}
              className="animate-spin"
              style={{ color: "var(--icon-branded-default)" }}
            />
            <p
              style={{
                color: "var(--text-caption)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-base)",
                lineHeight: "var(--lh-base)",
              }}
            >
              Redirection en cours...
            </p>
          </div>
        ) : (
          <p
            className="text-center mb-6"
            style={{
              color: "var(--text-caption)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--lh-base)",
            }}
          >
            Redirection automatique dans{" "}
            <strong style={{ color: "var(--text-branded-action)" }}>
              {countdown}
            </strong>{" "}
            seconde{countdown !== 1 ? "s" : ""}...
          </p>
        )}

        {/* Continue button */}
        <Button
          variant="branded"
          fullWidth
          onClick={handleContinueNow}
          disabled={isRedirecting}
        >
          Commencer maintenant →
        </Button>

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

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
}