import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button";
import { Card } from "../../components/atoms/Card";
import { InputField } from "../../components/molecules/InputField";
import { Building2 } from "lucide-react";

/**
 * SIN-08 - Invitation : créer son accès
 * 
 * Écran de création de compte suite à une invitation
 * Email pré-rempli + organisation affichée + choix Google/password + mini-profil
 */
export default function SIN_08_InvitationSignup() {
  const navigate = useNavigate();
  
  // Mock invitation data
  const invitationData = {
    email: "marie.dupont@exemple.fr",
    organization: "Immobilier Prestige Paris",
    invitedBy: "Jean Martin",
    role: "Agent immobilier",
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [useGoogle, setUseGoogle] = useState(false);

  const handleGoogleSignup = () => {
    console.log("Google SSO signup for invitation");
    navigate("/dashboard");
  };

  const handlePasswordSignup = () => {
    console.log("Password signup for invitation", {
      firstName,
      lastName,
      email: invitationData.email,
      password,
    });
    navigate("/dashboard");
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
        {/* Organization Info */}
        <div className="flex justify-center mb-6">
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: "var(--surface-branded-subtle)",
            }}
          >
            <Building2
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
          Rejoignez votre équipe
        </h1>

        <p
          className="text-center mb-6"
          style={{
            color: "var(--text-body)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--lh-base)",
          }}
        >
          <span style={{ fontWeight: "500", color: "var(--text-headings)" }}>
            {invitationData.invitedBy}
          </span>{" "}
          vous a invité à rejoindre{" "}
          <span style={{ fontWeight: "500", color: "var(--text-headings)" }}>
            {invitationData.organization}
          </span>
        </p>

        {/* Invitation Info Card */}
        <Card
          radius="scale300"
          padding="scale400"
          className="mb-6"
          style={{
            backgroundColor: "var(--surface-branded-subtle)",
            border: "1px solid var(--border-branded)",
          }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span
                style={{
                  color: "var(--text-caption)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--lh-sm)",
                }}
              >
                Email
              </span>
              <span
                style={{
                  color: "var(--text-headings)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--lh-sm)",
                  fontWeight: "500",
                }}
              >
                {invitationData.email}
              </span>
            </div>
            <div className="flex justify-between">
              <span
                style={{
                  color: "var(--text-caption)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--lh-sm)",
                }}
              >
                Rôle
              </span>
              <span
                style={{
                  color: "var(--text-headings)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--lh-sm)",
                  fontWeight: "500",
                }}
              >
                {invitationData.role}
              </span>
            </div>
          </div>
        </Card>

        {/* Google Sign Up */}
        {!useGoogle && (
          <>
            <Button
              variant="outlined"
              size="lg"
              onClick={handleGoogleSignup}
              className="w-full mb-6"
            >
              <div className="flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continuer avec Google</span>
              </div>
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "var(--border-neutral)" }}
              />
              <button
                onClick={() => setUseGoogle(!useGoogle)}
                style={{
                  color: "var(--text-caption)",
                  fontFamily: "var(--font-family)",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--lh-sm)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ou utiliser un mot de passe
              </button>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "var(--border-neutral)" }}
              />
            </div>
          </>
        )}

        {/* Password Form */}
        {useGoogle && (
          <>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex gap-4">
                <InputField
                  label="Prénom"
                  placeholder="Marie"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <InputField
                  label="Nom"
                  placeholder="Dupont"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <InputField
                label="Mot de passe"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />

              <InputField
                label="Confirmer le mot de passe"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
              />
            </div>

            <Button
              variant="branded"
              size="lg"
              onClick={handlePasswordSignup}
              className="w-full mb-4"
              disabled={
                !firstName ||
                !lastName ||
                !password ||
                password !== confirmPassword
              }
            >
              Créer mon compte
            </Button>

            <Button
              variant="text"
              size="md"
              onClick={() => setUseGoogle(false)}
              className="w-full"
            >
              Utiliser Google à la place
            </Button>
          </>
        )}
      </Card>
    </div>
  );
}