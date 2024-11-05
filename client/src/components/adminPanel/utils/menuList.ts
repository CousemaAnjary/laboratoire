import { Group } from "../typeScript/MenuList"
import { AtSign, Box, Globe, House, Key, LayoutDashboard, Settings2, SquareKanban, Store, Users } from "lucide-react"

/**
 * Liste des menus de l'application
 * 
 * @param pathname URL actuelle de l'application
 * @returns Liste des menus de l'application
 */

export function MenuList(pathname: string): Group[] {
    return [

        // Groupe de menus pour le tableau de bord
        {
            groupLabel: "Tableaux de bord",
            menus: [
                {
                    label: "Administration",
                    href: "/administration",
                    active: pathname.includes("/administration"),
                    icon: House,
                    submenus: []
                },
                {
                    label: "Tableau de bord",
                    href: "#",
                    active: pathname.includes("/tableau-de-board/"),
                    icon: LayoutDashboard,
                    submenus: [
                        {
                            label: "E-Commerce",
                            href: "#",
                            active: pathname.includes("/tableau-de-board/e-commerce"),
                        },
                        {
                            label: "Kanban board",
                            href: "/tableau-de-board/kanban",
                            active: pathname.includes("/tableau-de-board/kanban"),
                        },
                    ]
                },
            ]
        },

        // Groupe de menus pour l'application
        {
            groupLabel: "Applications",
            menus: [
                {
                    label: "E-commerce",
                    href: "#",
                    active: pathname.includes("#"),
                    icon: Store,
                    submenus: []
                },
                {
                    label: "Kanban board",
                    href: "/kanbanBoard",
                    active: pathname.includes("/kanbanBoard"),
                    icon: SquareKanban,
                    submenus: []
                },

            ]
        },
        {
            groupLabel: "Pages",
            menus: [
                {
                    label: "Portfolio",
                    href: "#",
                    active: pathname.includes("#"),
                    icon: AtSign,
                    submenus: []
                },
                {
                    label: "Landing",
                    href: "#",
                    active: pathname.includes("#"),
                    icon: Globe,
                    submenus: []
                },
            ]
        },
        // {
        //     groupLabel: "Pages",
        //     menus: [
        //         {
        //             label: "E-Commerce",
        //             href: "#",
        //             active: pathname.includes("#"),
        //             icon: Store,
        //             submenus: []
        //         },
        //     ]
        // },


        // Groupe de menus pour les modules
        {
            groupLabel: "Modules",
            menus: [
                {
                    label: "Composants",
                    href: "#",
                    active: pathname.includes("#"),
                    icon: Box,
                    submenus: [
                        {
                            label: "Buttons",
                            href: "#",
                            active: pathname.includes("#"),
                        },
                    ]
                },
            ]
        },

        // Groupe de menus pour les paramètres
        {
            groupLabel: "Paramètres",
            menus: [
                {
                    label: "Configurations",
                    href: "#",
                    active: pathname.includes("#"),
                    icon: Settings2,
                    submenus: []
                },
                {
                    label: "Droit d'accès",
                    href: "/droit-acces",
                    active: pathname.includes("/droit-acces"),
                    icon: Key,
                    submenus: []
                },
                {
                    label: "Utilisateurs",
                    href: "/utilisateurs",
                    active: pathname.includes("/utilisateurs"),
                    icon: Users,
                    submenus: []
                }
            ]
        },

        // Groupe de menus pour les documentation 
        // {
        //     groupLabel: "Documentation",
        //     menus: [
        //         {
        //             label: "Guide d'utilisateur",
        //             href: "#",
        //             active: pathname.includes("#"),
        //             icon: BookOpen,
        //             submenus: [
        //                 {
        //                     label: "Introduction",
        //                     href: "#",
        //                     active: pathname.includes("#"),
        //                 },
        //                 {
        //                     label: "Installation",
        //                     href: "#",
        //                     active: pathname.includes("#"),
        //                 },
        //                 {
        //                     label: "Utilisation avancée",
        //                     href: "#",
        //                     active: pathname.includes("#"),
        //                 }
        //             ]
        //         },

        //     ]
        // },
    ]
}
