import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { TextField } from "../../components/atoms/TextField";
import { Eye, EyeOff, Check, X } from "lucide-react";

/**
 * SUP-02 - Formulaire email/password
 * 
 * Email, mot de passe, confirmation. Indicateur de force du mdp.
 */
export default function SUP_02_EmailPasswordForm() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password strength validation
  const passwordCriteria = {
    minLength: formData.password.length >= 8,
    hasUpperCase: /[A-Z]/.test(formData.password),
    hasLowerCase: /[a-z]/.test(formData.password),
    hasNumber: /[0-9]/.test(formData.password),
  };

  const passwordStrength = Object.values(passwordCriteria).filter(Boolean).length;

  const getStrengthColor = () => {
    if (passwordStrength === 0) return "var(--neutral-200)";
    if (passwordStrength <= 2) return "var(--danger-default)";
    if (passwordStrength === 3) return "var(--warning-default)";
    return "var(--success-default)";
  };

  const getStrengthText = () => {
    if (passwordStrength === 0) return "Aucun";
    if (passwordStrength <= 2) return "Faible";
    if (passwordStrength === 3) return "Moyen";
    return "Fort";
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // TODO: Validation
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    if (passwordStrength < 3) {
      alert("Votre mot de passe doit être plus fort");
      return;
    }
    console.log("Sign up data:", formData);
    navigate("/SUP_03_VerifyEmail");
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
          className="text-center mb-8"
          style={{
            color: "var(--text-headings)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h4)",
            lineHeight: "var(--lh-h4)",
          }}
        >
          Créez votre compte
        </h4>

        {/* Email field */}
        <div style={{ marginBottom: "var(--scale-400)" }}>
          <TextField
            type="email"
            placeholder="Email professionnel"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
          />
        </div>

        {/* Password field with toggle */}
        <div style={{ marginBottom: "var(--scale-300)", position: "relative" }}>
          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            value={formData.password}
            onChange={(e) => updateField("password", e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
            style={{ color: "var(--icon-neutral-default)" }}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Password strength indicator */}
        {formData.password && (
          <div style={{ marginBottom: "var(--scale-400)" }}>
            {/* Strength bar */}
            <div className="flex gap-2 mb-2">
              {[1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className="h-1 flex-1 rounded-full transition-colors"
                  style={{
                    backgroundColor:
                      level <= passwordStrength
                        ? getStrengthColor()
                        : "var(--neutral-100)",
                  }}
                />
              ))}
            </div>

            {/* Strength text */}
            <p
              className="mb-3"
              style={{
                color: getStrengthColor(),
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              Force du mot de passe : {getStrengthText()}
            </p>

            {/* Criteria checklist */}
            <div className="space-y-1">
              {[
                { key: "minLength", label: "Au moins 8 caractères" },
                { key: "hasUpperCase", label: "Une majuscule" },
                { key: "hasLowerCase", label: "Une minuscule" },
                { key: "hasNumber", label: "Un chiffre" },
              ].map(({ key, label }) => (
                <div key={key} className="flex items-center gap-2">
                  {passwordCriteria[key as keyof typeof passwordCriteria] ? (
                    <Check
                      size={16}
                      style={{ color: "var(--success-default)" }}
                    />
                  ) : (
                    <X size={16} style={{ color: "var(--neutral-300)" }} />
                  )}
                  <span
                    style={{
                      color: passwordCriteria[key as keyof typeof passwordCriteria]
                        ? "var(--text-body)"
                        : "var(--text-caption)",
                      fontFamily: "var(--font-family)",
                      fontSize: "var(--text-sm)",
                      lineHeight: "var(--lh-sm)",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Confirm Password field */}
        <div style={{ marginBottom: "var(--scale-600)", position: "relative" }}>
          <TextField
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChange={(e) => updateField("confirmPassword", e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
            style={{ color: "var(--icon-neutral-default)" }}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Password mismatch error */}
        {formData.confirmPassword &&
          formData.password !== formData.confirmPassword && (
            <p
              className="mb-4"
              style={{
                color: "var(--danger-default)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              Les mots de passe ne correspondent pas
            </p>
          )}

        {/* Next button */}
        <Button
          variant="branded"
          fullWidth
          onClick={handleNext}
          className="mb-6"
          disabled={
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            formData.password !== formData.confirmPassword ||
            passwordStrength < 3
          }
        >
          Continuer →
        </Button>

        {/* Sign In Link */}
        <p className="text-center">
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