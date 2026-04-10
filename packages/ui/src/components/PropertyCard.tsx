import * as React from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Wrench, FileText, AlertTriangle, TrendingUp, MapPin } from "lucide-react";

/**
 * PropertyCard — Design System tokens:
 *   Container:     surface/neutral-default, border/default, shadow-card
 *   Title:         text/headings
 *   Subtitle:      text/subtle
 *   Agent section:  surface/information (info bg), text/information (icon)
 *   Warning:       text/warning (icon)
 *   Success:       text/success (icon)
 *   Sub-items:     surface/neutral-action (bg), border/default
 *   Empty text:    text/placeholder
 */
export interface PropertyCardProps {
    variant: "agent" | "owner";
    property: {
        address: string;
        maintenanceLogs?: { id: string; category: string; description: string; amount?: number | null }[];
        documents?: { id: string; title: string; url: string }[];
        triggers?: { id: string; type: string; description: string }[];
        estimatedValue?: number;
    };
}

export function PropertyCard({ variant, property }: PropertyCardProps) {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-xl border border-edge-default bg-surface-neutral-default shadow-card">
            {/* Header Shared */}
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-xl font-bold font-sans text-content-headings mb-1">
                        Property Overview
                    </h3>
                    <p className="text-sm text-content-subtle flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {property.address}
                    </p>
                </div>
                <Badge variant={variant === "agent" ? "information" : "default"}>
                    {variant === "agent" ? "Agent View" : "Owner View"}
                </Badge>
            </div>

            {/* Variant: Agent View */}
            {variant === "agent" && (
                <div className="flex flex-col gap-4 mt-2">
                    <div className="p-4 bg-surface-information rounded-lg border border-edge-information flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-surface-neutral-default rounded-full">
                                <TrendingUp className="w-5 h-5 text-icon-information" />
                            </div>
                            <div>
                                <p className="text-sm text-content-subtle">Estimated Market Value</p>
                                <p className="text-lg font-bold text-content-headings">
                                    {property.estimatedValue ? `€${property.estimatedValue.toLocaleString()}` : "Pending Evaluation"}
                                </p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline">Update Est.</Button>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-content-headings mb-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-icon-warning" />
                            Opportunity Triggers
                        </h4>
                        <div className="flex flex-col gap-2">
                            {property.triggers && property.triggers.length > 0 ? (
                                property.triggers.map((trigger) => (
                                    <div key={trigger.id} className="p-3 bg-surface-neutral-action border border-edge-default rounded-md flex items-center justify-between">
                                        <div>
                                            <p className="font-bold text-sm text-content-headings">{trigger.type}</p>
                                            <p className="text-sm text-content-subtle">{trigger.description}</p>
                                        </div>
                                        <Button size="sm" variant="secondary">Action</Button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-content-placeholder">No current triggers.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Variant: Owner View */}
            {variant === "owner" && (
                <div className="flex flex-col gap-4 mt-2">
                    {/* Maintenance Logs section */}
                    <div>
                        <h4 className="text-sm font-bold text-content-headings mb-3 flex items-center gap-2">
                            <Wrench className="w-4 h-4 text-icon-information" />
                            Maintenance Logs
                        </h4>
                        <div className="flex flex-col gap-2">
                            {property.maintenanceLogs && property.maintenanceLogs.length > 0 ? (
                                property.maintenanceLogs.map((log) => (
                                    <div key={log.id} className="p-3 bg-surface-neutral-action border border-edge-default rounded-md flex justify-between items-center">
                                        <div>
                                            <p className="font-bold text-sm text-content-headings">{log.category}</p>
                                            <p className="text-sm text-content-subtle">{log.description}</p>
                                        </div>
                                        {log.amount && (
                                            <Badge variant="default">€{log.amount}</Badge>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-content-placeholder">No maintenance history.</p>
                            )}
                        </div>
                    </div>

                    {/* Documents Section */}
                    <div>
                        <h4 className="text-sm font-bold text-content-headings mb-3 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-icon-success" />
                            Documents
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {property.documents && property.documents.length > 0 ? (
                                property.documents.map((doc) => (
                                    <a key={doc.id} href={doc.url} className="p-3 flex items-center gap-2 bg-surface-neutral-action border border-edge-default rounded-md hover:bg-surface-neutral-action-hover transition-colors">
                                        <FileText className="w-4 h-4 text-icon-neutral-default" />
                                        <span className="text-sm font-bold text-content-headings truncate">{doc.title}</span>
                                    </a>
                                ))
                            ) : (
                                <p className="text-sm text-content-placeholder col-span-2">No documents attached.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
