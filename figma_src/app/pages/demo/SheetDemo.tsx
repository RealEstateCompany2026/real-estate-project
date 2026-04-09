/**
 * SheetDemo - Page de démonstration du composant Sheet
 * 
 * Affiche les différentes variantes du composant Sheet :
 * - Narrow (420px) pour notifications/logs
 * - Wide (1024px) pour sélections/formulaires
 */

import React, { useState } from "react";
import { NavRail } from "../../components/organisms/NavRail";
import { Sheet } from "../../components/organisms/Sheet";
import { Button } from "../../components/atoms/Button";
import { Badge } from "../../components/atoms/Badge";
import { Bell, FileText, Settings, CheckCircle2 } from "lucide-react";

export default function SheetDemo() {
  const [narrowSheetOpen, setNarrowSheetOpen] = useState(false);
  const [wideSheetOpen, setWideSheetOpen] = useState(false);

  return (
    <div className="flex h-screen" style={{ backgroundColor: "var(--surface-page)" }}>
      <NavRail activeSection="dashboard" />

      <div className="flex-1 flex flex-col overflow-auto">
        <div className="max-w-4xl mx-auto px-8 py-8 w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text-strong)" }}>
              Composant Sheet
            </h1>
            <p className="text-base" style={{ color: "var(--text-body)" }}>
              Panneaux latéraux modaux pour notifications, logs, et sélections intermédiaires.
            </p>
          </div>

          {/* Demo Section */}
          <div className="space-y-6">
            {/* Narrow Sheet (420px) */}
            <div
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: "var(--surface-container)",
                borderColor: "var(--border-default)",
              }}
            >
              <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--text-strong)" }}>
                Sheet Narrow (420px)
              </h2>
              <p className="text-sm mb-4" style={{ color: "var(--text-body)" }}>
                Idéal pour les notifications, activity logs, ou informations complémentaires.
              </p>
              <Button
                variant="outlined"
                size="medium"
                leftIcon={<Bell size={16} />}
                onClick={() => setNarrowSheetOpen(true)}
              >
                Ouvrir le sheet narrow
              </Button>
            </div>

            {/* Wide Sheet (1024px) */}
            <div
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: "var(--surface-container)",
                borderColor: "var(--border-default)",
              }}
            >
              <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--text-strong)" }}>
                Sheet Wide (1024px)
              </h2>
              <p className="text-sm mb-4" style={{ color: "var(--text-body)" }}>
                Idéal pour les sélections intermédiaires, formulaires, ou visualisation de détails.
              </p>
              <Button
                variant="outlined"
                size="medium"
                leftIcon={<FileText size={16} />}
                onClick={() => setWideSheetOpen(true)}
              >
                Ouvrir le sheet wide
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Narrow Sheet Example */}
      <Sheet
        isOpen={narrowSheetOpen}
        onClose={() => setNarrowSheetOpen(false)}
        title="Notifications"
        width="narrow"
      >
        <div className="p-5 space-y-4">
          {/* Notification Items */}
          {[
            {
              icon: CheckCircle2,
              title: "Document validé",
              description: "Votre carte T a été approuvée",
              time: "Il y a 2h",
              variant: "success" as const,
            },
            {
              icon: Settings,
              title: "Mise à jour disponible",
              description: "Une nouvelle version de RealAgent est disponible",
              time: "Il y a 5h",
              variant: "information" as const,
            },
            {
              icon: FileText,
              title: "Document en attente",
              description: "Carte G manquante",
              time: "Il y a 1j",
              variant: "warning" as const,
            },
          ].map((notif, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border"
              style={{
                backgroundColor: "var(--surface-page)",
                borderColor: "var(--border-default)",
              }}
            >
              <div className="flex items-start gap-3 mb-2">
                <notif.icon
                  size={20}
                  style={{ color: "var(--icon-default)" }}
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4
                      className="text-sm font-medium"
                      style={{ color: "var(--text-strong)" }}
                    >
                      {notif.title}
                    </h4>
                    <Badge variant={notif.variant} label={notif.variant.toUpperCase()} />
                  </div>
                  <p className="text-xs mb-1" style={{ color: "var(--text-body)" }}>
                    {notif.description}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
                    {notif.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Sheet>

      {/* Wide Sheet Example */}
      <Sheet
        isOpen={wideSheetOpen}
        onClose={() => setWideSheetOpen(false)}
        title="Sélection de documents"
        width="wide"
      >
        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text-strong)" }}>
              Documents disponibles
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Carte T", status: "Validé", variant: "success" as const },
                { title: "Carte G", status: "En attente", variant: "warning" as const },
                { title: "Assurance RC Pro", status: "Validé", variant: "success" as const },
                { title: "Garantie financière", status: "Manquant", variant: "error" as const },
                { title: "Kbis", status: "Validé", variant: "success" as const },
                { title: "RIB", status: "En attente", variant: "warning" as const },
              ].map((doc, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border cursor-pointer transition-all"
                  style={{
                    backgroundColor: "var(--surface-container)",
                    borderColor: "var(--border-default)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-branded-default)";
                    e.currentTarget.style.backgroundColor = "var(--surface-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-default)";
                    e.currentTarget.style.backgroundColor = "var(--surface-container)";
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <FileText size={20} style={{ color: "var(--icon-default)" }} />
                    <Badge variant={doc.variant} label={doc.status} />
                  </div>
                  <h4
                    className="text-sm font-medium"
                    style={{ color: "var(--text-strong)" }}
                  >
                    {doc.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t" style={{ borderColor: "var(--border-default)" }}>
            <div className="flex gap-3">
              <Button variant="filled" size="medium" className="flex-1">
                Valider la sélection
              </Button>
              <Button
                variant="outlined"
                size="medium"
                onClick={() => setWideSheetOpen(false)}
              >
                Annuler
              </Button>
            </div>
          </div>
        </div>
      </Sheet>
    </div>
  );
}
