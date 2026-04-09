/**
 * FinanceItem - Item de la liste Finance
 * Molecule du design system RealAgent
 */

"use client";

import React from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { AiSuggestion } from "../atoms/AiSuggestion";
import { User, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export interface FinanceItemProps {
  name: string;
  status: "INCOMPLET" | "COMPLET" | "EN_ATTENTE";
  notesCount: number;
  onViewNotes?: () => void;
}

export function FinanceItem({ name, status, notesCount, onViewNotes }: FinanceItemProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Map status to Badge variant
  const statusToBadgeVariant = (status: FinanceItemProps["status"]): "disabled" | "success" | "default" => {
    switch (status) {
      case "INCOMPLET":
        return "disabled";
      case "COMPLET":
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
        {/* Left: Profile Name */}
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
            {name}
          </div>
        </div>

        {/* Right: Status, Button, Notes Count */}
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

          {/* Notes Count Badge */}
          <Badge variant="default" theme={theme}>
            {notesCount}
          </Badge>
        </div>
      </div>
    </div>
  );
}
