import { useState } from "react";
import { Link } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { TextField } from "../../components/atoms/TextField";
import { Eye, EyeOff } from "lucide-react";

/**
 * LOG-01 - Page de connexion
 * 
 * Point d'entrée de l'application.
 * Écran centré sans NavRail ni AppBar.
 */
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login:", { email, password });
    // TODO: Implement login logic
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
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
          Connexion
        </h4>

        {/* Email field */}
        <div style={{ marginBottom: "var(--scale-400)" }}>
          <TextField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password field with toggle */}
        <div style={{ marginBottom: "var(--scale-300)", position: "relative" }}>
          <TextField
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        {/* Forgot password link */}
        <div className="text-right mb-6">
          <Link
            to="/forgot-password"
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

        {/* Login button */}
        <Button
          variant="branded"
          fullWidth
          onClick={handleLogin}
          className="mb-6"
        >
          Se connecter
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="flex-1"
            style={{
              height: "var(--border-width-25)",
              backgroundColor: "var(--neutral-100)",
            }}
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
            className="flex-1"
            style={{
              height: "var(--border-width-25)",
              backgroundColor: "var(--neutral-100)",
            }}
          />
        </div>

        {/* Create account button */}
        <Link to="/register" className="block">
          <Button variant="outlined" fullWidth>
            Créer un compte
          </Button>
        </Link>

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
