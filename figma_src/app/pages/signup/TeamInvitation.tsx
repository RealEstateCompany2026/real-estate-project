import { useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../../components/atoms/Card";
import { Button } from "../../components/atoms/Button";
import { TextField } from "../../components/atoms/TextField";
import { Stepper } from "../../components/molecules/Stepper";
import { Plus, X, UserPlus } from "lucide-react";

/**
 * SUP-06 - Invitation équipe (B/C uniquement)
 * 
 * Permet d'inviter des collaborateurs par email
 * Cette étape est optionnelle
 */

interface TeamMember {
  id: string;
  email: string;
}

export default function SUP_06_TeamInvitation() {
  const navigate = useNavigate();

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: "1", email: "" },
  ]);

  const addTeamMember = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      email: "",
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  const removeTeamMember = (id: string) => {
    if (teamMembers.length > 1) {
      setTeamMembers(teamMembers.filter((member) => member.id !== id));
    }
  };

  const updateTeamMember = (id: string, email: string) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member.id === id ? { ...member, email } : member
      )
    );
  };

  const handleSkip = () => {
    navigate("/SUP_07_Confirmation");
  };

  const handleSendInvitations = () => {
    const validEmails = teamMembers.filter(
      (member) => member.email && member.email.includes("@")
    );
    console.log("Sending invitations to:", validEmails);
    navigate("/SUP_07_Confirmation");
  };

  const hasValidEmails = teamMembers.some(
    (member) => member.email && member.email.includes("@")
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: "var(--surface-page)" }}
    >
      <Card
        radius="scale400"
        padding="scale800"
        className="w-full max-w-[600px]"
      >
        {/* Stepper */}
        <div style={{ marginBottom: "var(--scale-800)" }}>
          <Stepper
            steps={["Compte", "Profil", "Équipe", "Confirmation"]}
            currentStep={2}
            completedSteps={[0, 1]}
            variant="minimal"
          />
        </div>

        {/* Heading */}
        <h4
          className="mb-3"
          style={{
            color: "var(--text-headings)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-h4)",
            lineHeight: "var(--lh-h4)",
          }}
        >
          Invitez votre équipe
        </h4>

        <p
          className="mb-8"
          style={{
            color: "var(--text-caption)",
            fontFamily: "var(--font-family)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--lh-base)",
          }}
        >
          Ajoutez les membres de votre agence pour collaborer efficacement
          (optionnel)
        </p>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: "var(--surface-branded-light)",
            }}
          >
            <UserPlus
              size={40}
              style={{ color: "var(--icon-branded-default)" }}
            />
          </div>
        </div>

        {/* Team member inputs */}
        <div className="space-y-3 mb-6">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="flex gap-3 items-center">
              <div className="flex-1">
                <TextField
                  type="email"
                  placeholder={`Email du collaborateur ${index + 1}`}
                  value={member.email}
                  onChange={(e) => updateTeamMember(member.id, e.target.value)}
                />
              </div>
              {teamMembers.length > 1 && (
                <button
                  onClick={() => removeTeamMember(member.id)}
                  style={{
                    padding: "var(--scale-200)",
                    color: "var(--icon-neutral-default)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "var(--radius-200)",
                  }}
                  className="hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add member button */}
        <Button
          variant="outlined"
          onClick={addTeamMember}
          className="mb-8"
          fullWidth
        >
          <div className="flex items-center justify-center gap-2">
            <Plus size={18} />
            <span>Ajouter un collaborateur</span>
          </div>
        </Button>

        {/* Info box */}
        <div
          className="p-4 rounded-lg mb-8"
          style={{
            backgroundColor: "var(--info-light)",
            border: "var(--border-width-50) solid var(--info-default)",
          }}
        >
          <h6
            className="mb-2"
            style={{
              color: "var(--info-default)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              fontWeight: "500",
            }}
          >
            Comment ça marche ?
          </h6>
          <ul
            className="space-y-1"
            style={{
              color: "var(--info-default)",
              fontFamily: "var(--font-family)",
              fontSize: "var(--text-sm)",
              lineHeight: "var(--lh-sm)",
              paddingLeft: "var(--scale-400)",
            }}
          >
            <li>Chaque collaborateur recevra un email d'invitation</li>
            <li>Ils pourront créer leur compte en quelques clics</li>
            <li>Vous pourrez gérer leurs accès depuis les paramètres</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button
            variant="outlined"
            onClick={handleSkip}
            className="flex-1"
          >
            Passer cette étape
          </Button>

          <Button
            variant="branded"
            onClick={handleSendInvitations}
            disabled={!hasValidEmails}
            className="flex-1"
          >
            {hasValidEmails ? "Envoyer les invitations →" : "Continuer →"}
          </Button>
        </div>

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