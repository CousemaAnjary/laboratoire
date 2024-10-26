import Navbar from "./Navbar"
import AppSidebar from "./AppSidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
    /**
     * ! STATE (état, données) de l'application
     */

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <SidebarProvider>
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
