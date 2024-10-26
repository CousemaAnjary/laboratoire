import AppSidebar from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Sidebar() {
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
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
        </SidebarProvider>
    );
}
