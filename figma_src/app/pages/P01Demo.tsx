import { Link } from "react-router";
import { Card, CardHeader, CardContent } from "../components/atoms/Card";
import { ThemeToggle } from "../components/ThemeToggle";
import {
  LogIn,
  UserPlus,
  Building2,
  User,
  CheckCircle,
  Sparkles,
} from "lucide-react";

/**
 * P01 Demo - Parcours Création de compte & Onboarding
 * 
 * Navigation vers les 6 écrans du parcours P01
 */
export default function P01Demo() {
  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-page)" }}>
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">P01 - Création de compte & Onboarding</h1>
            <p className="text-lg" style={{ color: "var(--text-caption)" }}>
              Parcours complet d'inscription et de premier démarrage
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Intro */}
        <Card radius="scale400" padding="32px">
          <CardHeader
            title="Parcours utilisateur"
            subtitle="6 écrans pour créer un compte et démarrer avec RealAgent"
          />
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                  📋 Composants utilisés
                </h3>
                <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                  <li>✅ Card, Button, TextField</li>
                  <li>✅ Stepper (4 étapes)</li>
                  <li>✅ Switch (agent indépendant)</li>
                  <li>✅ Persona cards (sélection profil)</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                  🎯 Parcours
                </h3>
                <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                  <li>1. Connexion / Inscription</li>
                  <li>2-5. Multi-step form (4 étapes)</li>
                  <li>6. Onboarding wizard</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Screens */}
        <section className="space-y-4">
          <h2>Écrans du parcours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScreenCard
              icon={<LogIn size={24} />}
              title="LOG-01 - Connexion"
              description="Page d'entrée avec email/password et lien création de compte"
              to="/login"
              step="Écran 1"
            />
            <ScreenCard
              icon={<UserPlus size={24} />}
              title="LOG-02 - Identité"
              description="Étape 1/4 : Prénom, nom, email, phone, password"
              to="/register-step1"
              step="Écran 2"
            />
            <ScreenCard
              icon={<Building2 size={24} />}
              title="LOG-03 - Agence"
              description="Étape 2/4 : Informations agence (optionnel si indépendant)"
              to="/register-step2"
              step="Écran 3"
            />
            <ScreenCard
              icon={<User size={24} />}
              title="LOG-04 - Profil"
              description="Étape 3/4 : Sélection du persona (A, B, C, D) et expérience"
              to="/register-step3"
              step="Écran 4"
            />
            <ScreenCard
              icon={<CheckCircle size={24} />}
              title="LOG-05 - Confirmation"
              description="Étape 4/4 : Vérification email et activation compte"
              to="/register-step4"
              step="Écran 5"
            />
            <ScreenCard
              icon={<Sparkles size={24} />}
              title="LOG-06 - Onboarding"
              description="Wizard de bienvenue avec 3 actions principales"
              to="/onboarding-wizard"
              step="Écran 6"
            />
          </div>
        </section>

        {/* Flow diagram */}
        <Card radius="scale400" padding="32px">
          <CardHeader title="Flux du parcours" />
          <CardContent>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <FlowStep number="1" label="Connexion" />
              <FlowArrow />
              <FlowStep number="2" label="Inscription" highlighted />
              <FlowArrow />
              <FlowStep number="3-5" label="Multi-step" highlighted />
              <FlowArrow />
              <FlowStep number="6" label="Onboarding" />
            </div>
            
            <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--surface-information)" }}>
              <p className="text-sm" style={{ color: "var(--text-information)" }}>
                💡 <strong>Astuce</strong> : Le multi-step form (LOG-02 à LOG-05) utilise le composant Stepper
                pour indiquer la progression. Les données sont validées à chaque étape.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ScreenCard component
interface ScreenCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
  step: string;
}

function ScreenCard({ icon, title, description, to, step }: ScreenCardProps) {
  return (
    <Link to={to} className="block">
      <Card
        radius="scale300"
        padding="20px"
        className="h-full hover:shadow-lg transition-shadow cursor-pointer"
      >
        <div className="flex items-start gap-3">
          <div
            className="p-2 rounded-lg"
            style={{ background: "var(--surface-branded-default)", color: "var(--text-branded-on-action)" }}
          >
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "var(--surface-neutral-action)",
                  color: "var(--text-caption)",
                }}
              >
                {step}
              </span>
            </div>
            <h3 className="font-semibold mb-1" style={{ color: "var(--text-body)" }}>
              {title}
            </h3>
            <p className="text-sm" style={{ color: "var(--text-caption)" }}>
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}

// FlowStep component
interface FlowStepProps {
  number: string;
  label: string;
  highlighted?: boolean;
}

function FlowStep({ number, label, highlighted = false }: FlowStepProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
        style={{
          background: highlighted
            ? "var(--surface-branded-default)"
            : "var(--surface-neutral-action)",
          color: highlighted
            ? "var(--text-branded-on-action)"
            : "var(--text-body)",
        }}
      >
        {number}
      </div>
      <span className="text-sm" style={{ color: "var(--text-caption)" }}>
        {label}
      </span>
    </div>
  );
}

// FlowArrow component
function FlowArrow() {
  return (
    <div
      className="w-8 h-0.5"
      style={{ background: "var(--neutral-300)" }}
    />
  );
}
