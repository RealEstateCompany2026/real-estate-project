import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { MessageReceived } from "../components/molecules/MessageReceived";
import { MessageSent } from "../components/molecules/MessageSent";
import { MessageComposer } from "../components/molecules/MessageComposer";
import { MessageEdit } from "../components/molecules/MessageEdit";
import { Paperclip } from "lucide-react";
import { Button } from "../components/atoms/Button";

export default function MessagesDemo() {
  const { theme, toggleTheme } = useTheme();
  const [variant, setVariant] = useState<"standard" | "chat">("standard");

  const handleSendMessage = (message: string, attachments: File[]) => {
    console.log("Send message:", message, attachments);
  };

  const handleSendRichMessage = (html: string, plainText: string, attachments: File[]) => {
    console.log("Send rich message:", { html, plainText, attachments });
  };

  const handleCancelEdit = () => {
    console.log("Cancel edit");
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
              Messages Demo
            </h1>
            <p
              className="text-[16px]"
              style={{
                fontFamily: "Roboto, sans-serif",
                color: "var(--text-body)",
              }}
            >
              Composants de messagerie - Standard (Figma) vs Chat (WhatsApp)
            </p>
          </div>
          <div className="flex gap-[16px]">
            <button
              onClick={() => setVariant(variant === "standard" ? "chat" : "standard")}
              className="px-[24px] py-[12px] rounded-[8px] transition-colors"
              style={{
                backgroundColor: "var(--surface-neutral-default)",
                color: "var(--text-body)",
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                border: "1px solid var(--border)",
              }}
            >
              {variant === "standard" ? "📱 Chat Mode" : "📋 Standard Mode"}
            </button>
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
        </div>

        {/* Section 1: Message reçu */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            1. Message reçu
          </h2>
          <p
            className="text-[14px] mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-body)",
            }}
          >
            Variant: <strong>{variant === "standard" ? "Standard (Figma)" : "Chat (WhatsApp)"}</strong>
          </p>
          <div className="space-y-[24px]">
            {/* Message simple */}
            <MessageReceived
              variant={variant}
              date="le 12 fév 2026"
              time="à 12:47"
              status="success"
            >
              <div
                className="relative shrink-0 w-full"
                style={{
                  padding: variant === "chat" ? "0" : "10px 10px 8px",
                }}
              >
                <p
                  className={variant === "chat" ? "text-[15px] leading-[20px]" : "text-[16px] leading-[22px]"}
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.16px",
                    color: "var(--text-body)",
                  }}
                >
                  Bonjour, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab...
                </p>
              </div>
            </MessageReceived>

            {/* Message avec pièce jointe */}
            <MessageReceived
              variant={variant}
              date="le 12 fév 2026"
              time="à 12:50"
              status="none"
            >
              <div
                className="relative shrink-0 w-full"
                style={{
                  padding: variant === "chat" ? "0" : "10px 10px 8px",
                }}
              >
                <p
                  className={variant === "chat" ? "text-[15px] leading-[20px] mb-[8px]" : "text-[16px] leading-[22px] mb-[10px]"}
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.16px",
                    color: "var(--text-body)",
                  }}
                >
                  Voici le document demandé :
                </p>
                <button
                  className="flex items-center gap-[8px] px-[12px] py-[10px] rounded-[12px] transition-all"
                  style={{
                    backgroundColor: variant === "chat"
                      ? theme === "dark"
                        ? "#1F2C33"
                        : "#D9D9D9"
                      : theme === "dark"
                      ? "#111215"
                      : "white",
                    border: variant === "chat" 
                      ? "none" 
                      : `1px solid ${theme === "dark" ? "#333740" : "#ecedee"}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  <Paperclip
                    className="size-[18px]"
                    style={{ color: "var(--text-body)" }}
                  />
                  <span
                    className="text-[14px] font-semibold"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      color: "var(--text-body)",
                    }}
                  >
                    Document.pdf
                  </span>
                </button>
              </div>
            </MessageReceived>
          </div>
        </section>

        {/* Section 2: Message envoyé */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            2. Message envoyé
          </h2>
          <div className="space-y-[24px]">
            {/* Message simple */}
            <MessageSent
              variant={variant}
              date="le 12 fév 2026"
              time="à 12:48"
              status="success"
            >
              <div
                className="relative shrink-0 w-full"
                style={{
                  padding: variant === "chat" ? "0" : "10px 10px 8px",
                  textAlign: "right",
                }}
              >
                <p
                  className={variant === "chat" ? "text-[15px] leading-[20px]" : "text-[16px] leading-[22px]"}
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.16px",
                    color: variant === "chat" && theme === "light" ? "#111215" : "var(--text-body)",
                  }}
                >
                  Merci pour votre message. Je reviens vers vous rapidement avec les informations demandées.
                </p>
              </div>
            </MessageSent>

            {/* Message en attente */}
            <MessageSent
              variant={variant}
              date="le 12 fév 2026"
              time="à 12:49"
              status="none"
            >
              <div
                className="relative shrink-0 w-full"
                style={{
                  padding: variant === "chat" ? "0" : "10px 10px 8px",
                  textAlign: "right",
                }}
              >
                <p
                  className={variant === "chat" ? "text-[15px] leading-[20px]" : "text-[16px] leading-[22px]"}
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.16px",
                    color: variant === "chat" && theme === "light" ? "#111215" : "var(--text-body)",
                  }}
                >
                  Parfait 👍
                </p>
              </div>
            </MessageSent>
          </div>
        </section>

        {/* Section 3: Conversation complète */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            3. Conversation complète
          </h2>
          <div
            className="p-[24px] rounded-[16px]"
            style={{
              backgroundColor: variant === "chat"
                ? theme === "dark"
                  ? "#0B141A"
                  : "#E5DDD5"
                : "var(--surface-neutral-default)",
              border: variant === "chat" ? "none" : "1px solid var(--border)",
            }}
          >
            <div className="space-y-[16px] max-w-[600px] mx-auto">
              <MessageReceived
                variant={variant}
                date="le 12 fév 2026"
                time="à 09:15"
                status="success"
                showBadge={variant === "standard"}
                showArrow={variant === "standard"}
              >
                <div style={{ padding: variant === "chat" ? "0" : "10px 10px 8px" }}>
                  <p
                    className={variant === "chat" ? "text-[15px] leading-[20px]" : "text-[16px] leading-[22px]"}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 400,
                      color: "var(--text-body)",
                    }}
                  >
                    Bonjour, auriez-vous des disponibilités cette semaine pour une visite ?
                  </p>
                </div>
              </MessageReceived>

              <MessageSent
                variant={variant}
                date="le 12 fév 2026"
                time="à 09:20"
                status="success"
                showBadge={variant === "standard"}
                showArrow={variant === "standard"}
              >
                <div style={{ padding: variant === "chat" ? "0" : "10px 10px 8px", textAlign: "right" }}>
                  <p
                    className={variant === "chat" ? "text-[15px] leading-[20px]" : "text-[16px] leading-[22px]"}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 400,
                      color: variant === "chat" && theme === "light" ? "#111215" : "var(--text-body)",
                    }}
                  >
                    Bonjour ! Oui, je suis disponible jeudi après-midi. Quel créneau vous conviendrait ?
                  </p>
                </div>
              </MessageSent>

              <MessageReceived
                variant={variant}
                date="le 12 fév 2026"
                time="à 09:25"
                status="success"
                showBadge={variant === "standard"}
                showArrow={variant === "standard"}
              >
                <div style={{ padding: variant === "chat" ? "0" : "10px 10px 8px" }}>
                  <p
                    className={variant === "chat" ? "text-[15px] leading-[20px]" : "text-[16px] leading-[22px]"}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 400,
                      color: "var(--text-body)",
                    }}
                  >
                    Jeudi 14h ce serait parfait !
                  </p>
                </div>
              </MessageReceived>

              <MessageSent
                variant={variant}
                date="le 12 fév 2026"
                time="à 09:30"
                status="none"
                showBadge={variant === "standard"}
                showArrow={variant === "standard"}
              >
                <div style={{ padding: variant === "chat" ? "0" : "10px 10px 8px", textAlign: "right" }}>
                  <p
                    className={variant === "chat" ? "text-[15px] leading-[20px]" : "text-[16px] leading-[22px]"}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 400,
                      color: variant === "chat" && theme === "light" ? "#111215" : "var(--text-body)",
                    }}
                  >
                    C'est noté ! Je vous envoie la confirmation par email. À jeudi ! 👋
                  </p>
                </div>
              </MessageSent>
            </div>
          </div>
        </section>

        {/* Section 4: Composer */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            4. Composer un message
          </h2>
          <div className="max-w-[600px] mx-auto">
            <MessageComposer
              variant={variant}
              onSend={handleSendMessage}
              placeholder={variant === "chat" ? "Écrivez un message..." : "Bonjour Jean-Philippe,\nPourriez-vous m'apporter quelques précisions..."}
            />
          </div>
        </section>

        {/* Section 5: Éditeur WYSIWYG (Rich Text) */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            5. Éditeur WYSIWYG (Rich Text)
          </h2>
          <div className="max-w-[600px] mx-auto space-y-[32px]">
            {/* Éditeur standard */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Mode création
              </h3>
              <MessageEdit
                variant={variant}
                onSend={handleSendRichMessage}
                placeholder={
                  variant === "chat"
                    ? "Écrivez un message..."
                    : "Bonjour,\n\nMerci de votre intérêt pour notre bien..."
                }
              />
            </div>

            {/* Éditeur mode édition */}
            <div>
              <h3
                className="text-[18px] font-semibold mb-[16px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-headings)",
                }}
              >
                Mode édition (avec bouton Annuler)
              </h3>
              <MessageEdit
                variant={variant}
                onSend={handleSendRichMessage}
                onCancel={handleCancelEdit}
                isEditing={true}
                defaultValue="<p>Bonjour,</p><p><br></p><p>Merci pour votre message. Je reviens vers vous <strong>rapidement</strong> avec les <em>informations demandées</em>.</p>"
                placeholder="Modifier le message..."
              />
            </div>
          </div>
        </section>

        {/* Section 6: Comparaison Standard vs Chat */}
        <section className="mb-[48px]">
          <h2
            className="text-[24px] font-bold mb-[24px]"
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "var(--text-headings)",
            }}
          >
            6. Comparaison Standard vs Chat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {/* Standard */}
            <div
              className="p-[24px] rounded-[12px]"
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
                Standard (Figma)
              </h3>
              <ul
                className="space-y-[8px] text-[14px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                <li>✅ Badge "REÇU" / "ENVOYÉ" visible</li>
                <li>✅ Status dot 18×18px</li>
                <li>✅ Timestamp complet (date + heure)</li>
                <li>✅ Icône reply</li>
                <li>✅ Bulle gris #ecedee (light) / #22252b (dark)</li>
                <li>✅ Border-radius 16px</li>
                <li>✅ Padding 10px</li>
                <li>✅ Gap 10px</li>
                <li>✅ Composer avec titre et boutons</li>
              </ul>
            </div>

            {/* Chat */}
            <div
              className="p-[24px] rounded-[12px]"
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
                Chat (WhatsApp)
              </h3>
              <ul
                className="space-y-[8px] text-[14px]"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "var(--text-body)",
                }}
              >
                <li>✅ Pas de badge visible</li>
                <li>✅ Status dot discret (opacity 70%)</li>
                <li>✅ Timestamp réduit (heure uniquement, 12px)</li>
                <li>✅ Pas d'icônes flèche</li>
                <li>✅ Bulle verte #DCF8C6 (sent) / gris #ecedee (received)</li>
                <li>✅ Border-radius 12px</li>
                <li>✅ Padding 8px 12px</li>
                <li>✅ Gap 4px (plus compact)</li>
                <li>✅ Composer inline avec send circulaire</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}