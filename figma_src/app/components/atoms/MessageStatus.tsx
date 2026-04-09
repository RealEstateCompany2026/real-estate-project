/**
 * ATOM: MessageStatus
 * 
 * Point de statut (success, fail, none)
 * Basé sur AtomeMessageStatus dans OrganismeListEngagement.tsx
 */

export type MessageStatusLevel = "success" | "fail" | "none";

export interface MessageStatusProps {
  level?: MessageStatusLevel;
  theme?: "light" | "dark";
}

export function MessageStatus({ 
  level = "none", 
  theme = "light" 
}: MessageStatusProps) {
  const isSuccess = level === "success";
  const isFail = level === "fail";
  const isDark = theme === "dark";
  
  const getFillColor = () => {
    if (isDark) {
      if (isSuccess) return "var(--fill-0, #0DA500)";
      if (isFail) return "var(--fill-0, #444955)";
      return "var(--fill-0, #111215)";
    } else {
      if (isSuccess) return "var(--fill-0, #4ABC40)";
      if (isFail) return "var(--fill-0, #D0D1D4)";
      return "var(--fill-0, white)";
    }
  };
  
  const getStrokeColor = () => {
    if (isDark) {
      if (isSuccess) return "var(--stroke-0, #86D280)";
      return "var(--stroke-0, #737780)";
    } else {
      if (isSuccess) return "var(--stroke-0, #109204)";
      return "var(--stroke-0, #A1A4AA)";
    }
  };
  
  return (
    <div className="relative rounded-[8px] size-[18px]">
      <svg 
        className="absolute block size-full" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 18 18"
      >
        <circle 
          cx="9" 
          cy="9" 
          r="8.5"
          fill={getFillColor()}
          stroke={getStrokeColor()}
        />
      </svg>
    </div>
  );
}
