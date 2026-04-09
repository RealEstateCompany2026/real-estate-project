import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../../components/atoms/Button";
import { Card } from "../../components/atoms/Card";
import { InputField } from "../../components/molecules/InputField";

/**
 * SIN-01 - Sign-in : connexion
 * 
 * Écran principal de connexion avec Google SSO et formulaire email/password
 * Liens vers sign-up et mot de passe oublié
 */
export default function SIN_01_SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = () => {
    console.log("Google SSO sign-in");
  };

  const handleEmailSignIn = () => {
    console.log("Email sign-in", { email, password });
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
          Connexion
        </h1>

        <p
          className="text-center mb-8"
          style={{
            color: "var(--text-caption)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--lh-base)",
          }}
        >
          Accédez à votre espace RealAgent
        </p>

        {/* Google SSO */}
        <div className="mb-6">
          <Button
            variant="outlined"
            size="lg"
            onClick={handleGoogleSignIn}
            className="w-full"
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
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border-neutral)" }}
          />
          <span
            style={{
              color: "var(--text-caption)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
            }}
          >
            ou
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border-neutral)" }}
          />
        </div>

        {/* Email/Password Form */}
        <div className="flex flex-col gap-4 mb-6">
          <InputField
            label="Email"
            placeholder="nom@exemple.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

          <InputField
            label="Mot de passe"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>

        {/* Forgot Password Link */}
        <div className="mb-6 text-right">
          <Link
            to="/SIN_02_ForgotPasswordEmail"
            style={{
              color: "var(--text-branded-action)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              textDecoration: "none",
            }}
            className="hover:underline"
          >
            Mot de passe oublié ?
          </Link>
        </div>

        {/* Sign In Button */}
        <Button
          variant="branded"
          size="lg"
          onClick={handleEmailSignIn}
          className="w-full mb-6"
        >
          Se connecter
        </Button>

        {/* Sign Up Link */}
        <p className="text-center">
          <span
            style={{
              color: "var(--text-caption)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--lh-base)",
            }}
          >
            Pas encore de compte ?{" "}
          </span>
          <Link
            to="/SUP_01_MethodChoice"
            style={{
              color: "var(--text-branded-action)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-base)",
              lineHeight: "var(--lh-base)",
              textDecoration: "none",
            }}
            className="hover:underline"
          >
            Créer un compte
          </Link>
        </p>
      </Card>
    </div>
  );
}