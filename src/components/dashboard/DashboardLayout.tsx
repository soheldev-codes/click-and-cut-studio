"use client"
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileSidebar from "./MobileSidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const [open, setOpen] = useState(false);



    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">

            <MobileSidebar
                open={open}
                onClose={() => setOpen(false)}
            />

            <div className="flex">
                <Sidebar />

                <div className="flex min-h-screen flex-1 flex-col">
                    <Topbar onMenuClick={() => setOpen(true)} />

                    <main className="flex-1 p-6 lg:p-8">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}