import { Link } from "react-router-dom"
import { ChevronRight, Ellipsis } from "lucide-react"
import { SidebarContentMenuProps } from "../typeScript/MenuList"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, useSidebar } from "@/components/ui/sidebar"


export function SidebarContentMenu({ menuGroups }: SidebarContentMenuProps) {
    /**
     * ! STATE (état, données) de l'application
     */
    const { open } = useSidebar()

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            {menuGroups.map((group, index) => (
                <SidebarGroup key={index}>

                    {/* Étiquette du groupe conditionnelle : affiche Ellipsis si fermé et groupLabel existe */}
                    <SidebarGroupLabel>
                        {open ? (group.groupLabel) : (group.groupLabel && <Ellipsis className="h-5 w-5 cursor-pointer mt-3" />)}
                    </SidebarGroupLabel>

                    {/* Menu du groupe */}
                    <SidebarMenu>
                        {group.menus.map((menu, index) => (
                            <Collapsible key={index} asChild defaultOpen className="group/collapsible">

                                {/* Élément du menu */}
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton variant={menu.active ? "outline" : "default"} asChild>
                                            <Link to={menu.href}>
                                                <menu.icon className="text-black" />
                                                <span className="font-medium text-sm">{menu.label}</span>

                                                {/* Affichage conditionnel de l'icône Chevron */}
                                                {menu.submenus && menu.submenus.length > 0 && (
                                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                )}
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
                                                        <SidebarMenuSubButton isActive={submenu.active ?? false} className="ms-1" asChild>
                                                            <Link to={submenu.href}>
                                                                <span className="font-medium text-xs text-sidebar-foreground/90">{submenu.label}</span>
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
                </SidebarGroup>
            ))}
        </>
    );
}