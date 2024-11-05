import { Group, Submenu } from "@/utils/typeScript/menuType"


// Type pour les propriétés du composant SidebarContentMenu
export type SidebarContentMenuProps = {
    menuGroups: Group[]
}

// Type pour les propriétés du composant CollapseMenuButton
export type CollapseMenuButtonProps = {
    label: string
    active?: boolean
    submenus?: Submenu[]
    isOpen: boolean
}