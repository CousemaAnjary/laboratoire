import HeaderSidebar from "./HeaderSidebar"
import { MenuList } from "../utils/menuList"
import { SidebarContentMenu } from "./SidebarContentMenu"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar"


export default function AppSidebar() {
    /**
     * ! STATE (état, données) de l'application
     */
    const menuGroups = MenuList()

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Sidebar variant="floating" collapsible="icon">
            {/* En-tête de la barre latérale */}
            <SidebarHeader>
                <HeaderSidebar />
            </SidebarHeader>

            {/* Contenu de la barre latérale */}
            <SidebarContent>
                <SidebarContentMenu menuGroups={menuGroups} />
            </SidebarContent>

            {/* Pied de page de la barre latérale */}
            <SidebarFooter />
        </Sidebar>
    );
}
