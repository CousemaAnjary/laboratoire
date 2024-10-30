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
