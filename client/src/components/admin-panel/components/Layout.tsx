import Navbar from "./Navbar"
import AppSidebar from "./AppSidebar"
import useSidebarToggle from "../hooks/useSidebarToggle"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    /**
     * ! STATE (état, données) de l'application
     */
    const { open, setOpen } = useSidebarToggle()


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <SidebarProvider open={open} onOpenChange={setOpen} className="bg-slate-100">
                <AppSidebar />
                <SidebarInset className="bg-slate-100 overflow-x-hidden"> {/* Ajoutez overflow-x-hidden */}
                    <Navbar />
                    <main className="container pt-8 pb-8 sm:px-8 over"> {/* Ajoutez overflow-x-auto */}
                        {children}
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </>
    );
}
