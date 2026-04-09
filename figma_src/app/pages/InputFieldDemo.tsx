import { useState } from "react";
import { InputField } from "../components/molecules/InputField";
import { InputFieldOutlined } from "../components/molecules/InputFieldOutlined";
import { Label } from "../components/atoms/Label";
import { TextField } from "../components/atoms/TextField";
import { TextFieldOutlined } from "../components/atoms/TextFieldOutlined";
import { useTheme } from "../context/ThemeContext";
import {
  User,
  Mail,
  Phone,
  Lock,
  Info,
  MapPin,
  Building,
  Briefcase,
  CreditCard,
} from "lucide-react";

export default function InputFieldDemo() {
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    company: "",
    position: "",
    cardNumber: "",
  });

  const handleChange = (field: keyof typeof formData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="min-h-screen p-[48px]"
      style={{
        backgroundColor: "var(--surface-page)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-[48px]">
          <div>
            <h1
              className="text-[48px] font-bold mb-[8px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-headings)",
              }}
            >
              InputField Demo
            </h1>
            <p
              className="text-[16px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              Composant InputField (Label + TextField + Hint) - Structure Figma
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="px-[24px] py-[12px] rounded-[8px] transition-colors"
            style={{
              backgroundColor: "var(--surface-branded-default)",
              color: "white",
              fontFamily: "Roboto, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>

        {/* Section 1: Composants atomiques */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            1. Composants atomiques (Figma)
          </h2>
          <div className="space-y-[32px]">
            {/* Label seul */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Label (atome)
              </h3>
              <div className="space-y-[16px]">
                <div className="flex items-center gap-[24px]">
                  <Label label="Label" icon={true} />
                  <span className="text-[14px] opacity-60">Default avec icône</span>
                </div>
                <div className="flex items-center gap-[24px]">
                  <Label label="Label" icon={false} />
                  <span className="text-[14px] opacity-60">Sans icône</span>
                </div>
                <div className="flex items-center gap-[24px]">
                  <Label label="Label" icon={true} required={true} />
                  <span className="text-[14px] opacity-60">Required (astérisque rouge)</span>
                </div>
              </div>
            </div>

            {/* TextField seul */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                TextField / Field (atome)
              </h3>
              <div className="space-y-[16px] max-w-[400px]">
                <TextField placeholder="First name" />
                <TextField placeholder="With left icon" leftIcon={User} />
                <TextField placeholder="With both icons" leftIcon={User} rightIcon={Info} />
              </div>
            </div>

            {/* TextFieldOutlined seul */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                TextFieldOutlined / FieldOutlined (atome)
              </h3>
              <div className="space-y-[16px] max-w-[400px]">
                <TextFieldOutlined placeholder="First name" />
                <TextFieldOutlined placeholder="With left icon" leftIcon={User} />
                <TextFieldOutlined placeholder="With both icons" leftIcon={User} rightIcon={Info} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: InputField (molécule) */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            2. InputField (molécule) - Structure Figma
          </h2>
          <p
            className="text-[14px] mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            InputField = Label + TextField + Hint text (optionnel)
          </p>
          <div className="space-y-[24px] max-w-[400px]">
            {/* Default */}
            <InputField
              label="Label"
              placeholder="First name"
              icon={true}
              hintText="Hint text"
            />

            {/* Sans icône label */}
            <InputField
              label="Label"
              placeholder="First name"
              icon={false}
              hintText="Hint text"
            />

            {/* Required */}
            <InputField
              label="Label"
              placeholder="First name"
              icon={true}
              required={true}
              hintText="This field is required"
            />

            {/* Sans hint */}
            <InputField
              label="Label"
              placeholder="First name"
              icon={true}
            />

            {/* Avec icônes field */}
            <InputField
              label="First name"
              placeholder="Enter your first name"
              icon={true}
              leftIcon={User}
              rightIcon={Info}
              hintText="Enter your legal first name"
            />
          </div>
        </section>

        {/* Section 3: Version Outlined (border complet) */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            3. Version Outlined (border complet)
          </h2>
          <p
            className="text-[14px] mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            InputFieldOutlined = Label + TextFieldOutlined (border complet + radius 8px) + Hint
          </p>
          <div className="space-y-[24px] max-w-[400px]">
            <InputFieldOutlined
              label="First name"
              placeholder="Enter your first name"
              icon={true}
              leftIcon={User}
              hintText="Version outlined avec border complet"
            />

            <InputFieldOutlined
              label="Email"
              placeholder="email@example.com"
              type="email"
              icon={true}
              required={true}
              leftIcon={Mail}
              rightIcon={Info}
              hintText="Border radius 8px sur tous les côtés"
            />

            <InputFieldOutlined
              label="Phone"
              placeholder="+33 6 12 34 56 78"
              type="tel"
              icon={false}
              leftIcon={Phone}
            />

            <InputFieldOutlined
              label="Password"
              placeholder="Mot de passe"
              type="password"
              icon={true}
              required={true}
              leftIcon={Lock}
              error={false}
              hintText="Minimum 8 caractères"
            />
          </div>
        </section>

        {/* Section 4: Formulaire complet avec InputField */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            4. Formulaire avec InputField
          </h2>
          <div
            className="p-[32px] rounded-[12px]"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="text-[20px] font-bold mb-[24px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-headings)",
              }}
            >
              Informations personnelles
            </h3>
            <div className="space-y-[24px] max-w-[600px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <InputField
                  label="Prénom"
                  placeholder="Prénom"
                  value={formData.firstName}
                  onChange={handleChange("firstName")}
                  leftIcon={User}
                  icon={true}
                  required={true}
                  hintText="Votre prénom légal"
                />
                <InputField
                  label="Nom"
                  placeholder="Nom"
                  value={formData.lastName}
                  onChange={handleChange("lastName")}
                  leftIcon={User}
                  icon={true}
                  required={true}
                  hintText="Votre nom de famille"
                />
              </div>

              <InputField
                label="Email"
                placeholder="email@example.com"
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
                leftIcon={Mail}
                icon={true}
                required={true}
                hintText="Nous ne partagerons jamais votre email"
              />

              <InputField
                label="Téléphone"
                placeholder="+33 6 12 34 56 78"
                type="tel"
                value={formData.phone}
                onChange={handleChange("phone")}
                leftIcon={Phone}
                icon={false}
                hintText="Format international recommandé"
              />

              <InputField
                label="Mot de passe"
                placeholder="Mot de passe"
                type="password"
                value={formData.password}
                onChange={handleChange("password")}
                leftIcon={Lock}
                icon={true}
                required={true}
                hintText="Minimum 8 caractères"
              />

              <InputField
                label="Adresse"
                placeholder="123 rue Example"
                value={formData.address}
                onChange={handleChange("address")}
                leftIcon={MapPin}
                icon={false}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <InputField
                  label="Entreprise"
                  placeholder="Nom de l'entreprise"
                  value={formData.company}
                  onChange={handleChange("company")}
                  leftIcon={Building}
                  icon={false}
                />
                <InputField
                  label="Poste"
                  placeholder="Votre poste"
                  value={formData.position}
                  onChange={handleChange("position")}
                  leftIcon={Briefcase}
                  icon={false}
                />
              </div>

              <InputField
                label="Numéro de carte"
                placeholder="1234 5678 9012 3456"
                type="text"
                value={formData.cardNumber}
                onChange={handleChange("cardNumber")}
                leftIcon={CreditCard}
                icon={true}
                maxLength={19}
                hintText="16 chiffres"
              />
            </div>

            {/* Preview */}
            <div className="mt-[32px] pt-[24px] border-t border-[var(--border)]">
              <h4
                className="text-[16px] font-bold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Données du formulaire :
              </h4>
              <pre
                className="p-[16px] rounded-[8px] overflow-auto text-[12px]"
                style={{
                  backgroundColor: "var(--surface-page)",
                  border: "1px solid var(--border)",
                  fontFamily: "monospace",
                  color: "var(--text-body)",
                }}
              >
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
          </div>
        </section>

        {/* Section 5: Notes techniques */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            5. Structure et hiérarchie
          </h2>
          <div
            className="p-[24px] rounded-[8px]"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="text-[18px] font-bold mb-[16px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-headings)",
              }}
            >
              Hiérarchie Figma :
            </h3>
            <ul
              className="space-y-[12px] text-[14px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              <li>
                <strong>1. Label</strong> (atome) :
                <ul className="ml-[16px] mt-[8px] space-y-[4px]">
                  <li>• Label text (Roboto Regular 16px/20px, #444955 light / #d0d1d4 dark)</li>
                  <li>• Icône info optionnelle (20×20px)</li>
                  <li>• Astérisque required (rouge, left: -8px)</li>
                  <li>• Gap : 8px</li>
                </ul>
              </li>
              <li className="mt-[16px]">
                <strong>2. TextField / Field</strong> (atome) :
                <ul className="ml-[16px] mt-[8px] space-y-[4px]">
                  <li>• Height : 56px</li>
                  <li>• Padding : 12px × 18px</li>
                  <li>• Border-bottom : 1px solid</li>
                  <li>• Icônes optionnelles gauche/droite (20×20px)</li>
                  <li>• Font : Roboto SemiBold 16px/20px</li>
                </ul>
              </li>
              <li className="mt-[16px]">
                <strong>3. InputField / Input</strong> (molécule) :
                <ul className="ml-[16px] mt-[8px] space-y-[4px]">
                  <li>• Composition : Label + TextField + Hint text (optionnel)</li>
                  <li>• Gap vertical : 12px</li>
                  <li>• Hint text : Roboto Regular 14px/16px, #737780</li>
                </ul>
              </li>
            </ul>

            <h3
              className="text-[18px] font-bold mb-[16px] mt-[24px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-headings)",
              }}
            >
              Utilisation recommandée :
            </h3>
            <ul
              className="space-y-[8px] text-[14px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              <li>
                • <strong>TextField seul</strong> : pour des champs sans label (recherche, inline edit)
              </li>
              <li>
                • <strong>InputField</strong> : pour des formulaires complets (label + hint)
              </li>
              <li>
                • <strong>Label seul</strong> : pour des groupes de champs (radio, checkbox)
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}