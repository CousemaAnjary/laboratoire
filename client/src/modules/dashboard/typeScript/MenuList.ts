import { LucideIcon } from 'lucide-react'

// Le type pour les groupes
export type Group = {
    groupLabel: string
    menus: Menu[]
}

// Le type pour les menus
export type Menu = {
    label: string
    href: string
    // active: boolean
    icon: LucideIcon
    submenus: Submenu[]
}

// Le type pour les sous-menus
export type Submenu = {
    href: string
    label: string
    // active: boolean
} 