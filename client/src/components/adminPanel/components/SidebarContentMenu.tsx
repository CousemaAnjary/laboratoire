import { Link } from "react-router-dom"
import { ChevronRight, Ellipsis } from "lucide-react"
import { SidebarContentMenuProps } from "../typeScript/MenuList"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, useSidebar, SidebarGroupContent } from "@/components/ui/sidebar"


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
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {group.menus.map((menu, index) => (
                                <Collapsible
                                    key={index}
                                    defaultOpen={menu.active}
                                    className="group/collapsible"
                                    asChild
                                >

                                    {/* Élément du menu */}
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild >
                                            <SidebarMenuButton
                                                variant={menu.active ? "outline" : "default"}
                                                tooltip={menu.label}
                                            >
                                                {menu.icon && <menu.icon className="text-black" />}
                                                <span className="font-medium text-sm">{menu.label}</span>
                                                
                                                {/* Affichage conditionnel de l'icône Chevron */}
                                                {menu.submenus && menu.submenus.length > 0 && (
                                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                )}
                                        
                                            </SidebarMenuButton>                     
                                        </CollapsibleTrigger>

                                        {/* Sous-menu du menu (si disponibles) */}
                                        {menu.submenus && menu.submenus.length > 0 && (
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {menu.submenus.map((submenu, index) => (
                                                        <SidebarMenuSubItem key={index} >

                                                            {/* Bouton du sous-menu */}
                                                            <Link to={submenu.href}>
                                                                <SidebarMenuSubButton
                                                                    isActive={submenu.active}
                                                                    className="ms-1"
                                                                >
                                                                    <span className={`font-medium text-xs ${submenu.active ? "text-blue-900 hover:text-blue-900" : ""}`}>
                                                                        {submenu.label}
                                                                    </span>
                                                                </SidebarMenuSubButton>
                                                            </Link>
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
            ))
            }
        </>
    );
}
