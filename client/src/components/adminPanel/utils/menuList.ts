import { Group } from "../typeScript/MenuList"
import { House, Key, LayoutDashboard, Settings2, SquareDashedKanban, Users } from "lucide-react"

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
            groupLabel: "Tableau de bord",
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
                            label: "Personnel",
                            href: "#",
                            active: pathname.includes("/tableau-de-board/personnel"),
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
            groupLabel: "Application",
            menus: [
                {
                    label: "Kanban Board",
                    href: "/kanbanBoard",
                    active: pathname.includes("/kanbanBoard"),
                    icon: SquareDashedKanban,
                    submenus: []
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
                    href: "#",
                    active: pathname.includes("#"),
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
