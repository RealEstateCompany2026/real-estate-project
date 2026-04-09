import { useState } from "react";
import { Stepper } from "../components/molecules/Stepper";
import { FileUpload } from "../components/molecules/FileUpload";
import { Card, CardHeader, CardContent } from "../components/atoms/Card";
import { Button } from "../components/atoms/Button";
import { ThemeToggle } from "../components/ThemeToggle";
import { useToast } from "../context/ToastContext";

/**
 * FoundationComponentsDemo - Démo Stepper, Card, FileUpload
 */
export default function FoundationComponentsDemo() {
  const { toast } = useToast();
  
  // Stepper state
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  // FileUpload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState("");

  const steps = ["Identité", "Agence", "Profil", "Confirmation"];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
      toast.success(`Étape "${steps[currentStep]}" complétée`);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCompletedSteps(completedSteps.filter((s) => s !== currentStep - 1));
      setCurrentStep(currentStep - 1);
    }
  };

  const handleResetSteps = () => {
    setCurrentStep(0);
    setCompletedSteps([]);
    toast.info("Progression réinitialisée");
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setUploadError("");
    toast.success(`Fichier sélectionné: ${file.name}`);
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setUploadError("");
    toast.info("Fichier supprimé");
  };

  return (
    <div className="min-h-screen p-8" style={{ background: "var(--surface-page)" }}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--text-body)" }}>
              Composants fondamentaux
            </h1>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              Stepper, Card, FileUpload - Prêts pour P01-P05
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Stepper Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text-body)" }}>
            Stepper - Progression multi-étapes
          </h2>

          <Card radius="scale400" padding="32px">
            <CardHeader
              title="Inscription en 4 étapes"
              subtitle="Utilisé pour les formulaires multi-étapes (P01 - Création compte)"
            />

            <CardContent>
              <div className="space-y-8">
                {/* Stepper */}
                <Stepper
                  steps={steps}
                  currentStep={currentStep}
                  completedSteps={completedSteps}
                />

                {/* Current step content */}
                <div className="p-6 rounded-xl" style={{ background: "var(--surface-neutral-action)" }}>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: "var(--text-body)" }}>
                    Étape {currentStep + 1}: {steps[currentStep]}
                  </h3>
                  <p className="mb-6" style={{ color: "var(--text-caption)" }}>
                    {getStepDescription(currentStep)}
                  </p>

                  {/* Mock form fields */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-12 rounded-lg"
                        style={{ background: "var(--surface-page)" }}
                      />
                    ))}
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outlined"
                      onClick={handlePrevStep}
                      disabled={currentStep === 0}
                    >
                      ← Retour
                    </Button>
                    <Button
                      variant="branded"
                      onClick={handleNextStep}
                      disabled={currentStep === steps.length - 1}
                    >
                      Suivant →
                    </Button>
                    <Button variant="ghost" onClick={handleResetSteps}>
                      Réinitialiser
                    </Button>
                  </div>
                </div>

                {/* Code example */}
                <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                  <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`<Stepper
  steps={["Identité", "Agence", "Profil", "Confirmation"]}
  currentStep={${currentStep}}
  completedSteps={${JSON.stringify(completedSteps)}}
/>`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Card Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text-body)" }}>
            Card - Conteneur de base
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card scale200 */}
            <Card radius="scale200" padding="20px">
              <CardHeader title="Radius scale200" subtitle="8px border radius" />
              <CardContent>
                <p className="text-sm" style={{ color: "var(--text-caption)" }}>
                  Utilisé pour les petits éléments, les chips, les tags.
                </p>
              </CardContent>
            </Card>

            {/* Card scale300 */}
            <Card radius="scale300" padding="20px">
              <CardHeader title="Radius scale300 (défaut)" subtitle="12px border radius" />
              <CardContent>
                <p className="text-sm" style={{ color: "var(--text-caption)" }}>
                  Radius par défaut pour la plupart des cartes.
                </p>
              </CardContent>
            </Card>

            {/* Card scale400 */}
            <Card radius="scale400" padding="20px">
              <CardHeader title="Radius scale400" subtitle="16px border radius" />
              <CardContent>
                <p className="text-sm" style={{ color: "var(--text-caption)" }}>
                  Utilisé pour les grandes cartes, les modals, les sections principales.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Clickable card */}
          <Card
            radius="scale400"
            padding="24px"
            onClick={() => toast.info("Carte cliquée !")}
          >
            <CardHeader
              title="Carte cliquable"
              subtitle="Avec hover effect et cursor pointer"
              actions={
                <Button variant="ghost" onClick={(e) => {
                  e.stopPropagation();
                  toast.success("Action cliquée");
                }}>
                  Action
                </Button>
              }
            />
            <CardContent>
              <p style={{ color: "var(--text-caption)" }}>
                Cliquez n'importe où sur cette carte pour déclencher l'action.
              </p>
            </CardContent>
          </Card>

          {/* Card variations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card radius="scale400" padding="24px" showBorder={false}>
              <CardHeader title="Sans border" />
              <CardContent>
                <p className="text-sm" style={{ color: "var(--text-caption)" }}>
                  Card sans border (showBorder=false)
                </p>
              </CardContent>
            </Card>

            <Card radius="scale400" padding="24px" showShadow={false}>
              <CardHeader title="Sans shadow" />
              <CardContent>
                <p className="text-sm" style={{ color: "var(--text-caption)" }}>
                  Card sans shadow (showShadow=false)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Code example */}
          <Card radius="scale400" padding="24px">
            <CardHeader title="Code d'utilisation" />
            <CardContent>
              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`import { Card, CardHeader, CardContent } from "@/components/atoms/Card";

<Card radius="scale400" padding="24px">
  <CardHeader
    title="Titre de la carte"
    subtitle="Sous-titre optionnel"
    actions={<Button>Action</Button>}
  />
  <CardContent>
    {/* Contenu */}
  </CardContent>
</Card>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FileUpload Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text-body)" }}>
            FileUpload - Drag & Drop
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CSV/Excel upload */}
            <Card radius="scale400" padding="24px">
              <CardHeader
                title="Import CSV/Excel"
                subtitle="Pour le parcours P05 - Import de base de données"
              />
              <CardContent>
                <FileUpload
                  accept=".csv,.xlsx,.xls"
                  maxSize={50 * 1024 * 1024} // 50MB
                  selectedFile={selectedFile}
                  onFileSelect={handleFileSelect}
                  onFileRemove={handleFileRemove}
                  error={uploadError}
                />

                {selectedFile && (
                  <div className="mt-4 p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                    <h4 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                      Informations du fichier
                    </h4>
                    <div className="space-y-1 text-sm" style={{ color: "var(--text-caption)" }}>
                      <p><strong>Nom:</strong> {selectedFile.name}</p>
                      <p><strong>Taille:</strong> {(selectedFile.size / 1024).toFixed(2)} KB</p>
                      <p><strong>Type:</strong> {selectedFile.type || "Non spécifié"}</p>
                      <p><strong>Dernière modification:</strong> {new Date(selectedFile.lastModified).toLocaleDateString()}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Image upload */}
            <Card radius="scale400" padding="24px">
              <CardHeader
                title="Upload d'images"
                subtitle="Pour les photos de biens, avatars, etc."
              />
              <CardContent>
                <FileUpload
                  accept=".jpg,.jpeg,.png,.webp"
                  maxSize={10 * 1024 * 1024} // 10MB
                />
              </CardContent>
            </Card>
          </div>

          {/* All files */}
          <Card radius="scale400" padding="24px">
            <CardHeader
              title="Tous les fichiers"
              subtitle="Aucune restriction de format"
            />
            <CardContent>
              <FileUpload
                accept="*"
                maxSize={100 * 1024 * 1024} // 100MB
              />
            </CardContent>
          </Card>

          {/* Code example */}
          <Card radius="scale400" padding="24px">
            <CardHeader title="Code d'utilisation" />
            <CardContent>
              <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                <pre className="text-xs overflow-x-auto" style={{ color: "var(--text-caption)" }}>
{`import { FileUpload } from "@/components/molecules/FileUpload";

const [selectedFile, setSelectedFile] = useState<File | null>(null);

<FileUpload
  accept=".csv,.xlsx,.xls"
  maxSize={50 * 1024 * 1024} // 50MB
  selectedFile={selectedFile}
  onFileSelect={(file) => setSelectedFile(file)}
  onFileRemove={() => setSelectedFile(null)}
/>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* API Reference */}
        <section>
          <Card radius="scale400" padding="32px">
            <CardHeader title="Résumé des composants" />
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                    ✅ Stepper
                  </h3>
                  <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                    <li>• Progression multi-étapes</li>
                    <li>• États: completed, active, future</li>
                    <li>• Checkmark sur étapes complétées</li>
                    <li>• Usage: P01 (inscription), P05 (import)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                    ✅ Card
                  </h3>
                  <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                    <li>• Conteneur de base réutilisable</li>
                    <li>• 3 radius: scale200/300/400</li>
                    <li>• Border et shadow optionnels</li>
                    <li>• CardHeader et CardContent</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg" style={{ background: "var(--surface-neutral-action)" }}>
                  <h3 className="font-semibold mb-2" style={{ color: "var(--text-body)" }}>
                    ✅ FileUpload
                  </h3>
                  <ul className="text-sm space-y-1" style={{ color: "var(--text-caption)" }}>
                    <li>• Drag & drop + file picker</li>
                    <li>• Validation format et taille</li>
                    <li>• Aperçu fichier sélectionné</li>
                    <li>• Usage: P05 (import CSV/Excel)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

// Helper
function getStepDescription(step: number): string {
  const descriptions = [
    "Renseignez vos informations personnelles : prénom, nom, email, téléphone et mot de passe.",
    "Indiquez les détails de votre agence : nom, SIRET, adresse. Ou cochez 'Agent indépendant' pour passer.",
    "Choisissez votre profil : Agent indépendant, Directeur d'agence, Agent en agence, ou Gestionnaire locatif.",
    "Un email de confirmation vous a été envoyé. Cliquez sur le lien pour activer votre compte.",
  ];
  return descriptions[step];
}
