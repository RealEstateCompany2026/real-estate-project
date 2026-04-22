"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Sheet } from "./Sheet";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Switch } from "./Switch";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { CollapsibleSection } from "./CollapsibleSection";
import { ArrowRight } from "lucide-react";
import { DealType } from "./deal-types";

// ── Types ──────────────────────────────────────────────

export type FieldType = "text" | "number" | "date" | "select";

export interface EligibilityField {
  entity: "organization" | "client" | "property" | "deal";
  field: string;
  label: string;
  value: string | null;
  type: FieldType;
  options?: { value: string; label: string }[];
}

export interface EligibilitySection {
  title: string;
  status: "valid" | "invalid";
  fields: EligibilityField[];
}

export interface SheetMandatEditProps {
  isOpen: boolean;
  onClose: () => void;
  /** Référence du mandat (ex: "MRA.000.000.004") */
  reference: string;
  dealType: DealType;
  sections: EligibilitySection[];
  onSave: (updates: Record<string, Record<string, string>>) => void;
  isRevision?: boolean;
  onToggleRevision?: (v: boolean) => void;
  /** Mode du footer: 'edit' pour complétion, 'review' pour vue mandat */
  footerMode?: 'edit' | 'review';
  /** Callback pour envoyer le mandat (mode review) */
  onSendMandate?: () => void;
  className?: string;
}

// ── Component ──────────────────────────────────────────

export const SheetMandatEdit: React.FC<SheetMandatEditProps> = ({
  isOpen,
  onClose,
  reference,
  dealType: _dealType,
  sections,
  onSave,
  isRevision = false,
  onToggleRevision,
  footerMode = 'edit',
  onSendMandate,
  className,
}) => {
  // Local state for field edits, keyed by entity then field
  const [localValues, setLocalValues] = useState<
    Record<string, Record<string, string>>
  >(() => buildInitialValues(sections));

  // Rebuild local values when sections change (new open)
  const sectionsKey = useMemo(
    () => JSON.stringify(sections.map((s) => s.fields.map((f) => `${f.entity}.${f.field}`))),
    [sections],
  );

  React.useEffect(() => {
    setLocalValues(buildInitialValues(sections));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionsKey]);

  const handleFieldChange = useCallback(
    (entity: string, field: string, value: string) => {
      setLocalValues((prev) => ({
        ...prev,
        [entity]: {
          ...(prev[entity] ?? {}),
          [field]: value,
        },
      }));
    },
    [],
  );

  // ── Render helpers ─────────────────────────────────

  const footer = footerMode === 'review' ? (
    <>
      <Button
        variant="primary"
        className="flex-1"
        onClick={onSendMandate}
        disabled={!isRevision}
      >
        Envoyer le mandat
        <ArrowRight size={20} />
      </Button>
    </>
  ) : null;

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title={reference}
      footer={footer}
      className={className}
    >
      <div className="py-[16px]">
        {/* Bloc 1 — Révision */}
        {onToggleRevision && (
          <div className="mx-[20px] mb-[12px] rounded-lg border border-[var(--border-divider)] bg-surface-neutral-default p-[16px]">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold font-roboto text-content-body">
                Révision
              </span>
              <Switch
                checked={isRevision}
                onChange={onToggleRevision}
                ariaLabel="Mode révision"
              />
            </div>
          </div>
        )}

        {/* Sections */}
        <div className="flex flex-col gap-[12px] mx-[20px]">
          {sections.map((section) => {
            // Check if this section has changes
            const initial = buildInitialValues(sections);
            const sectionHasChanges = section.fields.some((f) => {
              const current = localValues[f.entity]?.[f.field] ?? "";
              const orig = initial[f.entity]?.[f.field] ?? "";
              return current !== orig;
            });

            // Build section-specific save handler
            const handleSectionSave = () => {
              const initial2 = buildInitialValues(sections);
              const changed: Record<string, Record<string, string>> = {};
              for (const f of section.fields) {
                const current = localValues[f.entity]?.[f.field] ?? "";
                const orig = initial2[f.entity]?.[f.field] ?? "";
                if (current !== orig) {
                  if (!changed[f.entity]) changed[f.entity] = {};
                  changed[f.entity][f.field] = current;
                }
              }
              onSave(changed);
            };

            return (
              <CollapsibleSection
                key={section.title}
                title={section.title}
                badge={
                  <Badge
                    variant={section.status === "valid" ? "success" : "error"}
                  >
                    {section.status === "valid" ? "VALIDE" : "INVALIDE"}
                  </Badge>
                }
                defaultExpanded={section.status === "invalid"}
              >
                <div className="flex flex-col gap-[12px]">
                  {section.fields.map((f) => {
                    const currentValue =
                      localValues[f.entity]?.[f.field] ?? "";

                    if (f.type === "select" && f.options) {
                      return (
                        <SelectField
                          key={`${f.entity}.${f.field}`}
                          label={f.label}
                          value={currentValue}
                          onChange={(v) =>
                            handleFieldChange(f.entity, f.field, v)
                          }
                          options={f.options}
                          placeholder="Selectionner..."
                        />
                      );
                    }

                    return (
                      <InputField
                        key={`${f.entity}.${f.field}`}
                        label={f.label}
                        value={currentValue}
                        onChange={(v) =>
                          handleFieldChange(f.entity, f.field, v)
                        }
                        type={
                          f.type === "number"
                            ? "number"
                            : f.type === "date"
                              ? "date"
                              : "text"
                        }
                        placeholder={f.label}
                      />
                    );
                  })}
                  {sectionHasChanges && (
                    <Button
                      variant="primary"
                      className="mt-[4px]"
                      onClick={handleSectionSave}
                    >
                      Enregistrer
                    </Button>
                  )}
                </div>
              </CollapsibleSection>
            );
          })}
        </div>
      </div>
    </Sheet>
  );
};

// ── Helpers ────────────────────────────────────────────

function buildInitialValues(
  sections: EligibilitySection[],
): Record<string, Record<string, string>> {
  const values: Record<string, Record<string, string>> = {};
  for (const section of sections) {
    for (const f of section.fields) {
      if (!values[f.entity]) values[f.entity] = {};
      values[f.entity][f.field] = f.value ?? "";
    }
  }
  return values;
}
