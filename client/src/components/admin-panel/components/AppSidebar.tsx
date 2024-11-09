import { menu } from "@/utils/menu"
import HeaderSidebar from "./HeaderSidebar"
import { useLocation } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarContentMenu } from "./SidebarContentMenu"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarSeparator } from "@/components/ui/sidebar"


export default function AppSidebar() {
    /**
     * ! STATE (état, données) de l'application
     */
    // Utilisation de useLocation pour récupérer le chemin actuel de l'URL
    const { pathname } = useLocation()
    const menuGroups = menu(pathname)

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Sidebar variant="sidebar" collapsible="icon">
            {/* En-tête de la barre latérale */}
            <SidebarHeader>
                <HeaderSidebar />
            </SidebarHeader>

            <SidebarSeparator />

            {/* Contenu de la barre latérale */}
            <ScrollArea>
                <SidebarContent>
                    <SidebarContentMenu menuGroups={menuGroups} />
                </SidebarContent>
            </ScrollArea>

            {/* Pied de page de la barre latérale */}
            <SidebarFooter />
        </Sidebar>
    );
}
