import * as React from "react";
import Link from "next/link";
import { Home, Users, Home as HomeIcon, MapPin, Briefcase, FileText, Settings, Bell } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 h-screen w-64 bg-background border-r border-neutral-grey-light flex flex-col">
            <div className="flex items-center h-20 px-6 border-b border-neutral-grey-light">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                        <HomeIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-sans font-bold text-lg text-neutral-anthracite">RealAgent</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
                <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-background-softBlue text-primary font-bold transition-colors">
                    <Home className="w-5 h-5" />
                    <span>Home Page</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-grey-bold hover:bg-background-subtle hover:text-neutral-anthracite transition-colors">
                    <Users className="w-5 h-5" />
                    <span>Clients</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-grey-bold hover:bg-background-subtle hover:text-neutral-anthracite transition-colors">
                    <MapPin className="w-5 h-5" />
                    <span>Biens</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-grey-bold hover:bg-background-subtle hover:text-neutral-anthracite transition-colors">
                    <Briefcase className="w-5 h-5" />
                    <span>Affaires</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-grey-bold hover:bg-background-subtle hover:text-neutral-anthracite transition-colors">
                    <FileText className="w-5 h-5" />
                    <span>Documents</span>
                </Link>
            </div>

            <div className="p-4 border-t border-neutral-grey-light flex flex-col gap-2">
                <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-neutral-grey-bold hover:bg-background-subtle hover:text-neutral-anthracite transition-colors w-full text-left">
                    <Bell className="w-5 h-5" />
                    <span>Notifications</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-2 rounded-lg text-neutral-grey-bold hover:bg-background-subtle hover:text-neutral-anthracite transition-colors w-full text-left">
                    <Settings className="w-5 h-5" />
                    <span>Paramètres</span>
                </button>

                <div className="mt-4 flex items-center gap-3 px-4">
                    <div className="w-10 h-10 rounded-full bg-neutral-grey-light flex items-center justify-center text-neutral-anthracite font-bold">
                        AP
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-neutral-anthracite">Agent Principal</span>
                        <span className="text-xs text-neutral-grey-bold">agent@realestate.com</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
