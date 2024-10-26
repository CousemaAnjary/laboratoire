import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
    SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { MenuList } from "../utils/menuList";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";


export default function AppSidebar() {
    /**
     * ! STATE (état, données) de l'application
     */
    const menuGroups = MenuList();

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <Sidebar variant="sidebar" collapsible="icon">
            {/* En-tête de la barre latérale */}
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
                                    <Collapsible key={index} defaultOpen className="group/collapsible">

                                        {/* Élément du menu */}
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton asChild>
                                                    <Link to={menu.href}>
                                                        <menu.icon className="mr-1" />
                                                        <span>{menu.label}</span>
                                                    </Link>
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>

                                            {/* Sous-menu du menu (si disponibles) */}
                                            {menu.submenus && menu.submenus.length > 0 && (
                                                <CollapsibleContent>
                                                    <SidebarMenuSub>
                                                        {menu.submenus.map((submenu, index) => (
                                                            <SidebarMenuSubItem key={index}>

                                                                {/* Bouton du sous-menu */}
                                                                <SidebarMenuSubButton className="ms-3" asChild>
                                                                    <Link to={submenu.href}>
                                                                        <span>{submenu.label}</span>
                                                                    </Link>
                                                                </SidebarMenuSubButton>
                                                            </SidebarMenuSubItem>
                                                        ))}
                                                    </SidebarMenuSub>
                                                </CollapsibleContent>
                                            )}
                                        </SidebarMenuItem>
                                    </Collapsible>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            {/* Pied de page de la barre latérale */}
            <SidebarFooter />
            <SidebarRail />
        </Sidebar>
    );
}
