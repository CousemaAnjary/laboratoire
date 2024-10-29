import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import AppSidebar from "./AppSidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"


// Clé pour le localStorage
const SIDEBAR_STATE_KEY = "sidebarState"

export default function Layout({ children }: { children: React.ReactNode }) {
    /**
     * ! STATE (état, données) de l'application
     */
    // Initialiser l'état `open` en récupérant la valeur depuis `localStorage`
    const [open, setOpen] = useState(() => {
        const savedState = localStorage.getItem(SIDEBAR_STATE_KEY);
        return savedState ? JSON.parse(savedState) : false; // Par défaut, fermé
    });
    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    // Sauvegarder l'état dans `localStorage` à chaque changement
    useEffect(() => {
        localStorage.setItem(SIDEBAR_STATE_KEY, JSON.stringify(open));
    }, [open]);

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <SidebarProvider open={open} onOpenChange={setOpen}>
                <AppSidebar />
                <SidebarInset>
                    <Navbar />
                    <main className="container pt-8 pb-8 sm:px-8">
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </>
    );
}
