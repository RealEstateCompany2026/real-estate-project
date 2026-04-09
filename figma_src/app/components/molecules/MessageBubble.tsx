import { useTheme } from "../../context/ThemeContext";
import { ReactNode } from "react";

/**
 * MessageBubble - Bulle de message
 * 
 * Bulle de contenu de message avec support de deux variantes :
 * - standard : style Figma (fond gris #ecedee)
 * - chat : style WhatsApp (fond vert #DCF8C6 pour sent, gris #ecedee pour received)
 * 
 * Specs Standard:
 * - Border-radius: 16px
 * - Padding: 10px
 * - Background: #ecedee (light) / #22252b (dark)
 * - Border: 1px solid (même couleur que bg)
 * 
 * Specs Chat:
 * - Border-radius: 12px
 * - Padding: 8px 12px
 * - Background sent: #DCF8C6 (light) / #056162 (dark)
 * - Background received: #ecedee (light) / #262D31 (dark)
 * - Border: none
 * - Box-shadow: 0 1px 0.5px rgba(0,0,0,0.13)
 * 
 * Usage:
 * <MessageBubble variant="standard" align="left">
 *   <p>Message content</p>
 * </MessageBubble>
 * 
 * <MessageBubble variant="chat" align="right">
 *   <p>Message content</p>
 * </MessageBubble>
 */

export interface MessageBubbleProps {
  /**
   * Contenu de la bulle
   */
  children: ReactNode;
  /**
   * Variante de style
   */
  variant?: "standard" | "chat";
  /**
   * Alignement (left = received, right = sent)
   */
  align?: "left" | "right";
  className?: string;
}

export function MessageBubble({
  children,
  variant = "standard",
  align = "left",
  className = "",
}: MessageBubbleProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isSent = align === "right";

  const getStyles = () => {
    if (variant === "chat") {
      // WhatsApp style
      const bgColor = isSent
        ? isDark
          ? "#056162"
          : "#DCF8C6"
        : isDark
        ? "#262D31"
        : "#ecedee"; // Même couleur que Standard (au lieu de white)

      return {
        backgroundColor: bgColor,
        borderRadius: "12px",
        padding: "8px 12px",
        border: "none",
        boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
      };
    }

    // Standard Figma style
    const bgColor = isDark ? "#22252b" : "#ecedee";
    return {
      backgroundColor: bgColor,
      borderRadius: "16px",
      padding: "10px",
      border: `1px solid ${bgColor}`,
      boxShadow: "none",
    };
  };

  const styles = getStyles();

  return (
    <div
      className={`relative shrink-0 w-full ${className}`.trim()}
      style={styles}
    >
      <div className={`flex flex-col gap-[10px] items-${align === "right" ? "end" : "start"} relative w-full`}>
        {children}
      </div>
    </div>
  );
}