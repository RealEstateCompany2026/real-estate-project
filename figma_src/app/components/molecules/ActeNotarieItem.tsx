/**
 * ActeNotarieItem - Item de la liste Acte Notarié
 * Molecule du design system RealAgent
 */

"use client";

import React from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { AiSuggestion } from "../atoms/AiSuggestion";
import { User, Calendar, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export interface ActeNotarieItemProps {
  notaireName: string;
  dateTime: string;
  status: "PROGRAMME" | "EN_ATTENTE" | "SIGNE";
  aiSuggestions?: number;
  onViewNotes?: () => void;
}

export function ActeNotarieItem({
  notaireName,
  dateTime,
  status,
  aiSuggestions,
  onViewNotes
}: ActeNotarieItemProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Map status to Badge variant
  const statusToBadgeVariant = (status: ActeNotarieItemProps["status"]): "disabled" | "success" | "default" | "warning" => {
    switch (status) {
      case "PROGRAMME":
        return "warning";
      case "SIGNE":
        return "success";
      case "EN_ATTENTE":
        return "default";
    }
  };

  return (
    <div
      className="rounded-2xl px-5 py-3"
      style={{
        backgroundColor: isDark ? "var(--neutral-800)" : "white",
        border: `1px solid ${isDark ? "var(--neutral-700)" : "var(--neutral-50)"}`,
      }}
    >
      <div className="flex items-center justify-between">
        {/* Left: Notaire name and DateTime */}
        <div className="flex items-center gap-6">
          {/* Notaire Name */}
          <div className="flex items-center gap-1">
            <User size={20} style={{ color: "var(--text-body)" }} />
            <div
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.16px",
                color: "var(--text-body)",
              }}
            >
              {notaireName}
            </div>
          </div>

          {/* Date and Time */}
          <div className="flex items-center gap-1">
            <Calendar size={20} style={{ color: "var(--text-body)" }} />
            <div
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0.16px",
                color: "var(--text-body)",
              }}
            >
              {dateTime}
            </div>
          </div>
        </div>

        {/* Right: Status, Button, AI Suggestions */}
        <div className="flex items-center gap-6">
          {/* Status Badge */}
          <Badge variant={statusToBadgeVariant(status)} theme={theme}>
            {status}
          </Badge>

          {/* View Notes Button */}
          <Button
            variant="default"
            iconRight={<ArrowRight size={20} />}
            onClick={onViewNotes}
          >
            Voir les notes
          </Button>

          {/* AI Suggestions Badge */}
          <AiSuggestion count={aiSuggestions ?? 0} theme={theme} />
        </div>
      </div>
    </div>
  );
}
