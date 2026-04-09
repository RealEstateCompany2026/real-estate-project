import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { Database, UserPlus, Gauge, CheckCircle } from "lucide-react";

/**
 * LOG-06 - Onboarding Wizard
 * 
 * Guide de premier démarrage après connexion.
 * Affiche 3 actions principales avec suivi de progression.
 */

interface OnboardingAction {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  route: string;
  completed: boolean;
}

export default function OnboardingWizard() {
  const navigate = useNavigate();
  
  const [actions, setActions] = useState<OnboardingAction[]>([
    {
      id: "import",
      icon: Database,
      title: "Importer votre base de données",
      description: "Importez vos clients et biens existants depuis un fichier CSV ou Excel",
      buttonText: "Importer",
      route: "/database",
      completed: false,
    },
    {
      id: "client",
      icon: UserPlus,
      title: "Créer votre premier client",
      description: "Ajoutez un nouveau contact à votre portefeuille client",
      buttonText: "Créer",
      route: "/clients/new",
      completed: false,
    },
    {
      id: "dashboard",
      icon: Gauge,
      title: "Découvrir le tableau de bord",
      description: "Explorez votre espace de travail et les fonctionnalités principales",
      buttonText: "Explorer",
      route: "/dashboard",
      completed: false,
    },
  ]);

  const completedCount = actions.filter((a) => a.completed).length;
  const totalCount = actions.length;

  const handleActionClick = (actionId: string, route: string) => {
    // Mark as completed
    setActions((prev) =>
      prev.map((action) =>
        action.id === actionId ? { ...action, completed: true } : action
      )
    );
    
    // Navigate to the route
    navigate(route);
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
        zIndex: 1000,
      }}
    >
      <Card
        radius="scale400"
        padding="scale800"
        className="w-full max-w-[600px] max-h-[90vh] overflow-y-auto"
      >
        {/* Heading */}
        <h3
          className="mb-2"
          style={{
            color: "var(--text-headings)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h3)",
            lineHeight: "var(--lh-h3)",
          }}
        >
          Bienvenue sur RealAgent 👋
        </h3>

        {/* Subtitle */}
        <p
          className="mb-8"
          style={{
            color: "var(--text-caption)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--lh-base)",
          }}
        >
          Commencez par configurer votre espace de travail
        </p>

        {/* Action cards */}
        <div className="space-y-4 mb-6">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <div
                key={action.id}
                className="p-5 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: action.completed
                    ? "var(--surface-success)"
                    : "var(--surface-neutral-action)",
                  border: `var(--border-width-25) solid ${
                    action.completed
                      ? "var(--border-success)"
                      : "var(--neutral-100)"
                  }`,
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{
                      backgroundColor: action.completed
                        ? "var(--surface-success)"
                        : "var(--surface-branded-default)",
                    }}
                  >
                    {action.completed ? (
                      <CheckCircle
                        size={24}
                        style={{ color: "var(--icon-success)" }}
                      />
                    ) : (
                      <Icon
                        size={24}
                        style={{ color: "var(--text-branded-on-action)" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h6
                      className="mb-1"
                      style={{
                        color: "var(--text-headings)",
                        fontFamily: "var(--font-family)",
                        fontSize: "var(--text-h6)",
                        lineHeight: "var(--lh-h6)",
                      }}
                    >
                      {action.title}
                    </h6>
                    <p
                      className="mb-4"
                      style={{
                        color: "var(--text-caption)",
                        fontFamily: "var(--font-family)",
                        fontSize: "var(--text-sm)",
                        lineHeight: "var(--lh-sm)",
                      }}
                    >
                      {action.description}
                    </p>

                    <Button
                      variant={action.completed ? "ghost" : "branded"}
                      onClick={() => handleActionClick(action.id, action.route)}
                      disabled={action.completed}
                    >
                      {action.completed ? "✓ Terminé" : action.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress */}
        <div
          className="p-4 rounded-lg mb-6"
          style={{
            backgroundColor: "var(--surface-neutral-action)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span
              style={{
                color: "var(--text-body)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Progression
            </span>
            <span
              style={{
                color: "var(--text-caption)",
                fontFamily: "var(--font-family)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--lh-sm)",
              }}
            >
              {completedCount}/{totalCount} étapes complétées
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="w-full rounded-full overflow-hidden"
            style={{
              height: "8px",
              backgroundColor: "var(--neutral-100)",
            }}
          >
            <div
              className="h-full transition-all duration-500"
              style={{
                width: `${(completedCount / totalCount) * 100}%`,
                backgroundColor: "var(--surface-branded-default)",
              }}
            />
          </div>
        </div>

        {/* Skip button */}
        <div className="text-center">
          <button
            onClick={handleSkip}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-branded-action)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              cursor: "pointer",
              textDecoration: "none",
            }}
            className="hover:underline"
          >
            Passer pour le moment
          </button>
        </div>
      </Card>
    </div>
  );
}
