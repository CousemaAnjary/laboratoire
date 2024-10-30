import { Group } from "../typeScript/MenuList"
import { Bookmark, Home, Key, LayoutDashboard, Settings, Users } from "lucide-react"

/**
 * Fonction pour générer la liste des menus de l'application
 * en fonction du pathname actuel
 * @returns Group[] - la liste des groupes de menus
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
                    icon: Home,
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
                }
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
                    icon: Bookmark,
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
                    icon: Settings,
                    submenus: []
                },
                {
                    label: "Droit d'accès",
                    href: "#",
                    active: pathname.includes("#"),
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
