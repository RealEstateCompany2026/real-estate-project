"use client";

import React from "react";
import { Calendar, Download, Send, Edit, FileText } from "lucide-react";
import { Sheet } from "./Sheet";
import { Badge } from "./Badge";
import { Chip } from "./Chip";
import { Button } from "./Button";
import { HorizontalDivider } from "./HorizontalDivider";

/* ------------------------------------------------------------------ */
/*  MetaRow — helper interne (non exporté)                            */
/* ------------------------------------------------------------------ */

function MetaRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-[14px] font-semibold text-content-caption whitespace-nowrap">{label}</span>
      <span className="text-[14px] text-content-body">{value}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SheetDocument                                                      */
/* ------------------------------------------------------------------ */

export interface SheetDocumentProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  validityStatus?: "valid" | "expiring" | "expired";
  expiryDate?: string;
  fileFormat?: string;
  fileName?: string;
  fileSizeKb?: number;
  previewUrl?: string;
  documentType?: string;
  documentStatus?: string;
  uploadedBy?: string;
  uploadedDate?: string;
  modifiedDate?: string;
  signedDate?: string;
  clients?: Array<{ name: string; onClick?: () => void }>;
  properties?: Array<{ label: string; onClick?: () => void }>;
  deals?: Array<{ label: string; onClick?: () => void }>;
  onDownload?: () => void;
  onSend?: () => void;
  onEdit?: () => void;
  className?: string;
}

export function SheetDocument({
  isOpen,
  onClose,
  title,
  validityStatus,
  expiryDate,
  fileFormat,
  fileName,
  fileSizeKb,
  previewUrl,
  documentType,
  documentStatus,
  uploadedBy,
  uploadedDate,
  modifiedDate,
  signedDate,
  clients,
  properties,
  deals,
  onDownload,
  onSend,
  onEdit,
  className,
}: SheetDocumentProps) {
  /* ---------- Header: badges + chip après le titre ---------- */

  const headerAfterTitle = (
    <>
      {validityStatus === "valid" && <Badge variant="success">VALIDE</Badge>}
      {validityStatus === "expiring" && <Badge variant="warning">EXPIRE BIENTÔT</Badge>}
      {validityStatus === "expired" && <Badge variant="error">EXPIRÉ</Badge>}
      {expiryDate && (
        <Chip icon={<Calendar size={20} />} size="medium">
          {expiryDate}
        </Chip>
      )}
    </>
  );

  /* ---------- Footer ---------- */

  const footerContent = (
    <>
      <Button variant="default" onClick={onDownload}>
        <Download size={20} />
        Télécharger
      </Button>
      <Button variant="default" onClick={onSend}>
        <Send size={20} />
        Envoyer
      </Button>
      <Button variant="primary" onClick={onEdit}>
        <Edit size={20} />
        Éditer
      </Button>
    </>
  );

  /* ---------- Preview zone ---------- */

  function renderPreview() {
    const fmt = fileFormat?.toUpperCase();
    if (fmt === "JPG" || fmt === "JPEG" || fmt === "PNG") {
      return (
        <img
          src={previewUrl}
          alt={title}
          className="max-w-full max-h-[500px] rounded-lg object-contain"
        />
      );
    }

    const label = fmt === "PDF" ? "Aperçu PDF" : "Aperçu non disponible";

    return (
      <div className="bg-surface-neutral-action rounded-lg p-8 flex flex-col items-center justify-center gap-3">
        <FileText size={48} className="text-content-caption" />
        <span className="text-[14px] font-semibold text-content-body">{label}</span>
        {fileName && (
          <span className="text-[12px] text-content-caption">{fileName}</span>
        )}
      </div>
    );
  }

  /* ---------- Render ---------- */

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width="wide"
      headerAfterTitle={headerAfterTitle}
      footer={footerContent}
      className={className}
    >
      <div className="flex gap-6 px-10 py-6">
        {/* Zone gauche — Preview */}
        <div className="flex-1 min-h-[400px] flex items-center justify-center">
          {renderPreview()}
        </div>

        {/* Zone droite — Entités liées + Métadonnées */}
        <div className="w-[350px] shrink-0 border-l border-edge-divider pl-6 flex flex-col gap-5">
          {/* Client(s) associé(s) */}
          {clients && clients.length > 0 && (
            <div>
              <h6 className="text-[20px] font-bold leading-[24px] text-content-headings mb-2">
                Client(s) associé(s)
              </h6>
              <div className="flex flex-wrap gap-2">
                {clients.map((c) => (
                  <Chip key={c.name} onClick={c.onClick} size="small">
                    {c.name}
                  </Chip>
                ))}
              </div>
            </div>
          )}

          {/* Bien(s) associé(s) */}
          {properties && properties.length > 0 && (
            <div>
              <h6 className="text-[20px] font-bold leading-[24px] text-content-headings mb-2">
                Bien(s) associé(s)
              </h6>
              <div className="flex flex-wrap gap-2">
                {properties.map((p) => (
                  <Chip key={p.label} onClick={p.onClick} size="small">
                    {p.label}
                  </Chip>
                ))}
              </div>
            </div>
          )}

          {/* Affaire(s) associée(s) */}
          {deals && deals.length > 0 && (
            <div>
              <h6 className="text-[20px] font-bold leading-[24px] text-content-headings mb-2">
                Affaire(s) associée(s)
              </h6>
              <div className="flex flex-wrap gap-2">
                {deals.map((d) => (
                  <Chip key={d.label} onClick={d.onClick} size="small">
                    {d.label}
                  </Chip>
                ))}
              </div>
            </div>
          )}

          <HorizontalDivider />

          {/* Métadonnées & Historique */}
          <div>
            <h6 className="text-[20px] font-bold leading-[24px] text-content-headings mb-2">
              Métadonnées &amp; Historique
            </h6>
            <div className="flex flex-col gap-3">
              {documentType && (
                <MetaRow label="Type" value={<Badge variant="default">{documentType}</Badge>} />
              )}
              {fileName && (
                <MetaRow
                  label="Fichier"
                  value={`${fileName}${fileSizeKb ? ` — ${fileSizeKb} Ko` : ""}`}
                />
              )}
              {uploadedBy && (
                <MetaRow
                  label="Uploadé par"
                  value={`${uploadedBy}${uploadedDate ? ` — ${uploadedDate}` : ""}`}
                />
              )}
              {modifiedDate && <MetaRow label="Modifié le" value={modifiedDate} />}
              {signedDate && <MetaRow label="Signé le" value={signedDate} />}
              {documentStatus && (
                <MetaRow label="Statut" value={<Badge variant="default">{documentStatus}</Badge>} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
