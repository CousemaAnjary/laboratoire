import { LucideIcon } from 'lucide-react'

// Le type pour le contexte de la barre latérale
export type SidebarToggleProps = {
    isOpen: boolean
    toggleSidebar: () => void
}

// Le type pour le contexte de la barre latérale
export type MenuProps = {
    isOpen: boolean
    pathname: string
}

// Le type pour les sous-menus
export type Submenu = {
    href: string
    label: string
    active: boolean
}

// Le type pour les menus
export type Menu = {
    href: string
    label: string
    active: boolean
    icon: LucideIcon
    submenus: Submenu[]
}

// Le type pour les groupes
export type Group = {
    groupLabel: string
    menus: Menu[]
}

// Le type pour le bouton de menu déroulant
export type CollapseMenuButtonProps = {
    icon: LucideIcon
    label: string
    active: boolean
    submenus: Submenu[]
    isOpen: boolean | undefined
}