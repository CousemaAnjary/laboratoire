import { LucideIcon } from 'lucide-react'

// Le type des données de connexion
export type LoginType = {
    email: string
    password: string
}

// Le type des données d'inscription
export type RegisterType = {
    last_name: string
    first_name: string
    email: string
    password: string
    image?: File
}

// Le type des informations utilisateur
export type UserType = {
    id: string
    first_name: string
    last_name: string
    email: string
    image: string
}

// Le type pour le contexte d'authentification
export type AuthContextType = {
    isAuthenticated: boolean
    user: UserType | null
    login: (dataLogin: LoginType) => Promise<void>
    logout: () => Promise<void>
}

// Le type pour le contexte du thème
export type ThemeContextType = {
    theme: string
    toggleTheme: () => void
}

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

// Le type pour les données de la card Kanban
export type kanbanCardProps = {
   
    content: string
}

// Le type pour les données de la liste Kanban
export type KanbanListProps = {
    title: string;
}
