import * as React from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Wrench, FileText, AlertTriangle, TrendingUp, MapPin } from "lucide-react";

const MapPinIcon = MapPin as any;
const TrendingUpIcon = TrendingUp as any;
const AlertTriangleIcon = AlertTriangle as any;
const WrenchIcon = Wrench as any;
const FileTextIcon = FileText as any;

export interface PropertyCardProps {
    variant: "agent" | "owner";
    property: {
        address: string;
        maintenanceLogs?: { id: string; category: string; description: string; amount?: number | null }[];
        documents?: { id: string; title: string; url: string }[];
        triggers?: { id: string; type: string; description: string }[];
        estimatedValue?: number; // Representing a value indicator for agents
    };
}

export function PropertyCard({ variant, property }: PropertyCardProps) {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-xl border border-neutral-grey-light bg-background shadow-card">
            {/* Header Shared */}
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-xl font-bold font-sans text-neutral-anthracite mb-1">
                        Property Overview
                    </h3>
                    <p className="text-sm text-neutral-grey-bold flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        {property.address}
                    </p>
                </div>
                <Badge variant={variant === "agent" ? "info" : "default"}>
                    {variant === "agent" ? "Agent View" : "Owner View"}
                </Badge>
            </div>

            {/* Variant: Agent View */}
            {variant === "agent" && (
                <div className="flex flex-col gap-4 mt-2">
                    <div className="p-4 bg-background-softBlue rounded-lg border border-semantic-info/20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-background rounded-full">
                                <TrendingUpIcon className="w-5 h-5 text-semantic-info" />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-grey-bold">Estimated Market Value</p>
                                <p className="text-lg font-bold text-neutral-anthracite">
                                    {property.estimatedValue ? `€${property.estimatedValue.toLocaleString()}` : "Pending Evaluation"}
                                </p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline">Update Est.</Button>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-neutral-anthracite mb-3 flex items-center gap-2">
                            <AlertTriangleIcon className="w-4 h-4 text-semantic-warning" />
                            Opportunity Triggers
                        </h4>
                        <div className="flex flex-col gap-2">
                            {property.triggers && property.triggers.length > 0 ? (
                                property.triggers.map((trigger) => (
                                    <div key={trigger.id} className="p-3 bg-background-subtle border border-neutral-grey-light rounded-md flex items-center justify-between">
                                        <div>
                                            <p className="font-bold text-sm text-neutral-anthracite">{trigger.type}</p>
                                            <p className="text-sm text-neutral-grey-bold">{trigger.description}</p>
                                        </div>
                                        <Button size="sm" variant="secondary">Action</Button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-neutral-grey">No current triggers.</p>
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
                        <h4 className="text-sm font-bold text-neutral-anthracite mb-3 flex items-center gap-2">
                            <WrenchIcon className="w-4 h-4 text-semantic-info" />
                            Maintenance Logs
                        </h4>
                        <div className="flex flex-col gap-2">
                            {property.maintenanceLogs && property.maintenanceLogs.length > 0 ? (
                                property.maintenanceLogs.map((log) => (
                                    <div key={log.id} className="p-3 bg-background-subtle border border-neutral-grey-light rounded-md flex justify-between items-center">
                                        <div>
                                            <p className="font-bold text-sm text-neutral-anthracite">{log.category}</p>
                                            <p className="text-sm text-neutral-grey-bold">{log.description}</p>
                                        </div>
                                        {log.amount && (
                                            <Badge variant="secondary">€{log.amount}</Badge>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-neutral-grey">No maintenance history.</p>
                            )}
                        </div>
                    </div>

                    {/* Documents Section */}
                    <div>
                        <h4 className="text-sm font-bold text-neutral-anthracite mb-3 flex items-center gap-2">
                            <FileTextIcon className="w-4 h-4 text-semantic-success" />
                            Documents
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {property.documents && property.documents.length > 0 ? (
                                property.documents.map((doc) => (
                                    <a key={doc.id} href={doc.url} className="p-3 flex items-center gap-2 bg-background-subtle border border-neutral-grey-light rounded-md hover:bg-neutral-grey-light/20 transition-colors">
                                        <FileTextIcon className="w-4 h-4 text-neutral-grey-bold" />
                                        <span className="text-sm font-bold text-neutral-anthracite truncate">{doc.title}</span>
                                    </a>
                                ))
                            ) : (
                                <p className="text-sm text-neutral-grey col-span-2">No documents attached.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
