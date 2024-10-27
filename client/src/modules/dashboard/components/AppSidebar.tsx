import { LogOut } from "lucide-react"
import { Link } from "react-router-dom"
import { MenuList } from "../utils/menuList"
import { SidebarContentMenu } from "./SidebarContentMenu"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuButton} from "@/components/ui/sidebar"


export default function AppSidebar() {
    /**
     * ! STATE (état, données) de l'application
     */
    const menuGroups = MenuList()

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Sidebar variant="sidebar" collapsible="icon">
            {/* En-tête de la barre latérale */}
            <SidebarHeader />


            {/* Contenu de la barre latérale */}
            <SidebarContent>
                <SidebarContentMenu menuGroups={menuGroups} />
            </SidebarContent>

            {/* Pied de page de la barre latérale */}
            <SidebarFooter className="mb-3" >
                <SidebarMenuButton asChild>
                    <Link to="#">
                        <LogOut className="mr-1" />
                        <span>Déconnexion</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarFooter>
            {/* <SidebarRail /> */}
        </Sidebar>
    );
}
