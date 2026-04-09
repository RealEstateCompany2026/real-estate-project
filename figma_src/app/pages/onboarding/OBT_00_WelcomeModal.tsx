import React from "react";
import { useNavigate } from "react-router";
import { WelcomeModal } from "../../components/organisms/WelcomeModal";

/**
 * OBT-00 - Modale bienvenue
 * 
 * Premier écran du parcours d'onboarding (Product Tour).
 * Affiche une modale de bienvenue avec le prénom de l'utilisateur
 * et propose de démarrer le tour guidé ou de le passer.
 */
export default function OBT_00_WelcomeModal() {
  const navigate = useNavigate();

  const handleStart = () => {
    // Démarre le tour guidé (première étape spotlight)
    navigate("/OBT_01_SpotlightDashboard");
  };

  const handleSkip = () => {
    // Passe directement à la confirmation/dashboard
    // On peut aller vers le dashboard ou vers la modale de transition
    navigate("/dashboard");
  };

  // Récupérer le prénom depuis le contexte utilisateur (simulé pour l'instant)
  const firstName = "Sophie"; // TODO: récupérer depuis le contexte auth

  return (
    <WelcomeModal
      firstName={firstName}
      onStart={handleStart}
      onSkip={handleSkip}
    />
  );
}
