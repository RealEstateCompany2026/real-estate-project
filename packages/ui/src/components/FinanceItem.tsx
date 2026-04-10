/**
 * FinanceItem - Item de la liste Finance
 * Molecule du design system RealAgent
 */

"use client";

import React from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { User, ArrowRight } from "lucide-react";

export interface FinanceItemProps {
  name: string;
  status: "INCOMPLET" | "COMPLET" | "EN_ATTENTE";
  notesCount: number;
  onViewNotes?: () => void;
}

export function FinanceItem({ name, status, notesCount, onViewNotes }: FinanceItemProps) {
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
    <div className="rounded-2xl px-5 py-3 bg-surface-neutral-default border border-edge-default">
      <div className="flex items-center justify-between">
        {/* Left: Profile Name */}
        <div className="flex items-center gap-1">
          <User size={20} className="text-icon-neutral-default" />
          <div className="font-roboto font-semibold text-base leading-5 tracking-0.16 text-content-body">
            {name}
          </div>
        </div>

        {/* Right: Status, Button, Notes Count */}
        <div className="flex items-center gap-6">
          {/* Status Badge */}
          <Badge variant={statusToBadgeVariant(status)}>
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
          <Badge variant="default">
            {notesCount}
          </Badge>
        </div>
      </div>
    </div>
  );
}
