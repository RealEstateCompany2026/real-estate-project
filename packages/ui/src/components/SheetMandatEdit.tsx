"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Sheet } from "./Sheet";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Switch } from "./Switch";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { CollapsibleSection } from "./CollapsibleSection";
import { DealType, DEAL_TYPE_LABELS } from "./deal-types";

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
  dealType: DealType;
  sections: EligibilitySection[];
  onSave: (updates: Record<string, Record<string, string>>) => void;
  isRevision?: boolean;
  onToggleRevision?: (v: boolean) => void;
  className?: string;
}

// ── Component ──────────────────────────────────────────

export const SheetMandatEdit: React.FC<SheetMandatEditProps> = ({
  isOpen,
  onClose,
  dealType,
  sections,
  onSave,
  isRevision = false,
  onToggleRevision,
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

  const handleSave = useCallback(() => {
    // Build a diff: only include values that actually changed
    const initial = buildInitialValues(sections);
    const changed: Record<string, Record<string, string>> = {};

    for (const entity of Object.keys(localValues)) {
      for (const field of Object.keys(localValues[entity])) {
        const current = localValues[entity][field];
        const original = initial[entity]?.[field] ?? "";
        if (current !== original) {
          if (!changed[entity]) changed[entity] = {};
          changed[entity][field] = current;
        }
      }
    }

    onSave(changed);
  }, [localValues, sections, onSave]);

  // ── Render helpers ─────────────────────────────────

  const headerAfterTitle = (
    <Badge variant="information">{DEAL_TYPE_LABELS[dealType]}</Badge>
  );

  const headerActions = onToggleRevision ? (
    <div className="flex items-center gap-2">
      <span className="text-sm text-content-caption">Révision</span>
      <Switch
        checked={isRevision}
        onChange={onToggleRevision}
        ariaLabel="Mode révision"
      />
    </div>
  ) : undefined;

  const footer = (
    <>
      <Button variant="primary" className="flex-1" onClick={handleSave}>
        Enregistrer
      </Button>
      <Button variant="ghost" className="flex-1" onClick={onClose}>
        Annuler
      </Button>
    </>
  );

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title="Édition du mandat"
      headerAfterTitle={headerAfterTitle}
      headerActions={headerActions}
      footer={footer}
      className={className}
    >
      <div className="py-[16px]">
        {/* Revision banner */}
        {isRevision && (
          <div className="rounded-lg bg-surface-branded-subtle mx-[20px] p-[12px] mb-[12px]">
            <p className="text-sm text-content-branded-strong">
              Mode révision — Les modifications entraîneront une nouvelle version
              du mandat
            </p>
          </div>
        )}

        {/* Sections */}
        <div className="flex flex-col gap-[12px] mx-[20px]">
          {sections.map((section) => (
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
              </div>
            </CollapsibleSection>
          ))}
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
