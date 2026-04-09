/**
 * CLI-07 — Modale création rapide
 * Route individuelle
 */

"use client";

import React, { useState } from "react";
import { CLI_07_ModaleCreationRapide } from "../CLI_07_ModaleCreationRapide";
import { Button } from "../../../components/atoms/Button";
import { UserPlus } from "lucide-react";

export default function CLI_07_Modale_Creation_Rapide() {
  const [showModale, setShowModale] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundColor: "var(--surface-page)",
      }}
    >
      <Button
        variant="primary"
        size="large"
        iconLeft={<UserPlus size={20} />}
        onClick={() => setShowModale(true)}
      >
        Ouvrir la modale de création rapide
      </Button>
      <CLI_07_ModaleCreationRapide
        isOpen={showModale}
        onClose={() => setShowModale(false)}
        onSave={(data) => {
          console.log("Client créé :", data);
        }}
      />
    </div>
  );
}
