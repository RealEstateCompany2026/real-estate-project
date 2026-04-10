/**
 * ActeNotarieItem - Item de la liste Acte Notarié
 * Molecule du design system RealAgent
 */

"use client";

import React from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { AiSuggestion } from "./AiSuggestion";
import { User, Calendar, ArrowRight } from "lucide-react";

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
    <div className="rounded-2xl px-5 py-3 bg-surface-neutral-default border border-edge-default">
      <div className="flex items-center justify-between">
        {/* Left: Notaire name and DateTime */}
        <div className="flex items-center gap-6">
          {/* Notaire Name */}
          <div className="flex items-center gap-1">
            <User size={20} className="text-icon-neutral-default" />
            <div className="font-roboto font-semibold text-base leading-5 tracking-0.16 text-content-body">
              {notaireName}
            </div>
          </div>

          {/* Date and Time */}
          <div className="flex items-center gap-1">
            <Calendar size={20} className="text-icon-neutral-default" />
            <div className="font-roboto font-semibold text-base leading-5 tracking-0.16 text-content-body">
              {dateTime}
            </div>
          </div>
        </div>

        {/* Right: Status, Button, AI Suggestions */}
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

          {/* AI Suggestions Badge */}
          <AiSuggestion count={aiSuggestions ?? 0} />
        </div>
      </div>
    </div>
  );
}
