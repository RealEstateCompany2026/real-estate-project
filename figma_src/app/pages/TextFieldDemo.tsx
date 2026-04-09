import { useState } from "react";
import { TextField } from "../components/atoms/TextField";
import { useTheme } from "../context/ThemeContext";
import {
  User,
  Mail,
  Phone,
  Lock,
  Info,
  Search,
  Calendar,
  DollarSign,
  MapPin,
  Building,
  Briefcase,
} from "lucide-react";

export default function TextFieldDemo() {
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    search: "",
    address: "",
    city: "",
    company: "",
    position: "",
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
              TextField Demo
            </h1>
            <p
              className="text-[16px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              Composants TextField du design system RealAgent
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

        {/* Section 1: États de base */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            1. TextField - États de base
          </h2>
          <div className="space-y-[24px]">
            {/* Default (vide) */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Default (vide, placeholder visible)
              </label>
              <TextField
                placeholder="First name"
                leftIcon={User}
                rightIcon={Info}
              />
            </div>

            {/* Filled */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Filled (avec valeur)
              </label>
              <TextField
                value="John"
                placeholder="First name"
                leftIcon={User}
                rightIcon={Info}
              />
            </div>

            {/* Focus (cliquez dedans) */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Focus (cliquez dans le champ pour voir le focus)
              </label>
              <TextField
                placeholder="First name"
                leftIcon={User}
                rightIcon={Info}
              />
            </div>

            {/* Error */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Error (border rouge)
              </label>
              <TextField
                value="Invalid"
                placeholder="First name"
                leftIcon={User}
                rightIcon={Info}
                error={true}
              />
              <p
                className="text-[12px] mt-[4px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "#FF0000",
                }}
              >
                Ce champ contient une erreur
              </p>
            </div>

            {/* Disabled */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px] opacity-50"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Disabled (non interactif)
              </label>
              <TextField
                value="Disabled field"
                placeholder="First name"
                leftIcon={User}
                rightIcon={Info}
                disabled={true}
              />
            </div>
          </div>
        </section>

        {/* Section 2: Types de champs */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            2. Types de champs HTML5
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {/* Text */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Type: text
              </label>
              <TextField
                placeholder="Enter text"
                type="text"
                leftIcon={User}
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Type: email
              </label>
              <TextField
                placeholder="email@example.com"
                type="email"
                leftIcon={Mail}
              />
            </div>

            {/* Tel */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Type: tel
              </label>
              <TextField
                placeholder="+33 6 12 34 56 78"
                type="tel"
                leftIcon={Phone}
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Type: password
              </label>
              <TextField
                placeholder="Enter password"
                type="password"
                leftIcon={Lock}
              />
            </div>

            {/* Search */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Type: search
              </label>
              <TextField
                placeholder="Search..."
                type="search"
                leftIcon={Search}
              />
            </div>

            {/* Date */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Type: date
              </label>
              <TextField
                placeholder="Select date"
                type="date"
                leftIcon={Calendar}
              />
            </div>
          </div>
        </section>

        {/* Section 3: Variations d'icônes */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            3. Variations d'icônes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {/* Sans icône */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Sans icône
              </label>
              <TextField placeholder="No icons" />
            </div>

            {/* Icône gauche seulement */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Icône gauche uniquement
              </label>
              <TextField placeholder="With left icon" leftIcon={User} />
            </div>

            {/* Icône droite seulement */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Icône droite uniquement
              </label>
              <TextField placeholder="With right icon" rightIcon={Info} />
            </div>

            {/* Les deux icônes */}
            <div>
              <label
                className="text-[14px] font-semibold block mb-[8px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                Les deux icônes
              </label>
              <TextField
                placeholder="Both icons"
                leftIcon={User}
                rightIcon={Info}
              />
            </div>
          </div>
        </section>

        {/* Section 4: Formulaire interactif */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            4. Formulaire interactif
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
            <div className="space-y-[20px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-[14px] font-semibold block mb-[8px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    Prénom *
                  </label>
                  <TextField
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange("firstName")}
                    placeholder="Prénom"
                    leftIcon={User}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="text-[14px] font-semibold block mb-[8px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    Nom *
                  </label>
                  <TextField
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange("lastName")}
                    placeholder="Nom"
                    leftIcon={User}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[14px] font-semibold block mb-[8px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Email *
                </label>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange("email")}
                  placeholder="email@example.com"
                  leftIcon={Mail}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-[14px] font-semibold block mb-[8px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Téléphone
                </label>
                <TextField
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  placeholder="+33 6 12 34 56 78"
                  leftIcon={Phone}
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="text-[14px] font-semibold block mb-[8px]"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    color: "var(--text-body)",
                  }}
                >
                  Adresse
                </label>
                <TextField
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange("address")}
                  placeholder="123 rue Example"
                  leftIcon={MapPin}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div>
                  <label
                    htmlFor="company"
                    className="text-[14px] font-semibold block mb-[8px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    Entreprise
                  </label>
                  <TextField
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange("company")}
                    placeholder="Nom de l'entreprise"
                    leftIcon={Building}
                  />
                </div>
                <div>
                  <label
                    htmlFor="position"
                    className="text-[14px] font-semibold block mb-[8px]"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    Poste
                  </label>
                  <TextField
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange("position")}
                    placeholder="Votre poste"
                    leftIcon={Briefcase}
                  />
                </div>
              </div>
            </div>

            {/* Preview des données */}
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
            5. Notes techniques
          </h2>
          <div
            className="p-[24px] rounded-[8px]"
            style={{
              backgroundColor: "var(--surface-neutral-default)",
              border: "1px solid var(--border)",
            }}
          >
            <ul
              className="space-y-[12px] text-[14px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              <li>• Height : 56px (padding 18px × 2 + line-height 20px)</li>
              <li>• Padding : 12px (horizontal) × 18px (vertical)</li>
              <li>• Gap : 8px entre icône et texte</li>
              <li>• Border : bottom 1px solid</li>
              <li>• Icons : 20×20px (Lucide)</li>
              <li>• Font : Roboto SemiBold 16px/20px, letter-spacing 0.16px</li>
              <li>
                • Couleurs :
                <ul className="ml-[16px] mt-[8px] space-y-[4px]">
                  <li>- Border default : #ecedee (light) / #333740 (dark)</li>
                  <li>- Border focus : #444955 (light) / #d0d1d4 (dark)</li>
                  <li>- Border error : #FF0000 (light) / #bf0000 (dark)</li>
                  <li>- Background default : white (light) / #111215 (dark)</li>
                  <li>- Background disabled : #f8f9fa (light) / #22252b (dark)</li>
                  <li>- Background error : #ffe5e5 (light) / #400000 (dark)</li>
                  <li>- Placeholder : #a1a4aa</li>
                  <li>- Icons : #a1a4aa</li>
                  <li>- Text filled : var(--text-body)</li>
                </ul>
              </li>
              <li>• Support complet light/dark mode automatique via <code>useTheme</code></li>
              <li>• Accessibilité : aria-label, aria-invalid, keyboard navigation</li>
              <li>• Focus visible : border plus foncée (transition 200ms)</li>
              <li>
                • Types supportés : text, email, tel, url, password, number, search, date, time,
                datetime-local
              </li>
              <li>
                • Props : leftIcon, rightIcon (LucideIcon), error, disabled, required, maxLength
              </li>
              <li>
                • Callbacks : <code>onChange(value: string)</code>, <code>onFocus()</code>,{" "}
                <code>onBlur()</code>
              </li>
              <li>
                • Support formulaires : <code>name</code>, <code>id</code>, <code>autoComplete</code>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
