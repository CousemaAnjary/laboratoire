import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Link } from "react-router-dom";
import { MenuList } from "../utils/menuList";

export default function AppSidebar() {
    /**
     * ! STATE (état, données) de l'application
     */
    const menuGroups = MenuList();

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <Sidebar variant="sidebar" collapsible="icon">
                <SidebarHeader />

                {/* Contenu de la barre latérale */}
                <SidebarContent>
                    {menuGroups.map((group, index) => (
                        <SidebarGroup key={index}>

                            {/* Étiquette du groupe */}
                            <SidebarGroupLabel>{group.groupLabel}</SidebarGroupLabel>

                            {/* Contenu du groupe */}
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {group.menus.map((menu, index) => (
                                        <SidebarMenuItem key={index}>

                                            {/* Bouton du menu */}
                                            <SidebarMenuButton asChild>
                                                <Link to={menu.href}>
                                                    {/* Icône du menu */}
                                                    <menu.icon className="mr-2" />
                                                    <span>{menu.label}</span>
                                                </Link>
                                            </SidebarMenuButton>

                                            {/* Sous-menus (si disponibles) */}
                                            {menu.submenus && menu.submenus.length > 0 && (
                                                <SidebarMenu>
                                                    {menu.submenus.map((submenu, index) => (
                                                        <SidebarMenuItem key={index}>

                                                            {/* Bouton du sous-menu */}
                                                            <SidebarMenuButton asChild>
                                                                <Link to={submenu.href}>
                                                                    <span>{submenu.label}</span>
                                                                </Link>
                                                            </SidebarMenuButton>
                                                        </SidebarMenuItem>
                                                    ))}
                                                </SidebarMenu>
                                            )}
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    ))}
                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
        </>
    )
}