import { Group } from "../typeScript/MenuList"
import { Bookmark, Key, LayoutGrid, Settings, Users } from "lucide-react"

/**
 * Fonction pour générer la liste des menus de l'application
 * en fonction du pathname actuel
 * @returns Group[] - la liste des groupes de menus
 */
export function MenuList(): Group[] {
    return [

        // Groupe de menus pour le tableau de bord
        {
            groupLabel: "",
            menus: [
                {
                    label: "Tableau de bord",
                    href: "/dashboard",
                    icon: LayoutGrid,
                    submenus: [
                        {
                            label: "Tableau de bord personnel",
                            href: "#",
                        },
                        {
                            label: "Tableau de bord kanban",
                            href: "#",
                        },
                        {
                            label: "Tableau de bord compétences",
                            href: "#",
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
                    href: "#",
                    icon: Bookmark,
                    submenus: []
                }
            ]
        },

        // Groupe de menus pour les paramètres
        {
            groupLabel: "Paramètres",
            menus: [
                {
                    label: "Configurations",
                    href: "#",
                    icon: Settings,
                    submenus: []
                },
                {
                    label: "Droit d'accès",
                    href: "#",
                    icon: Key,
                    submenus: []
                },
                {
                    label: "Utilisateurs",
                    href: "#",
                    icon: Users,
                    submenus: []
                }
            ]
        },
    ];
}
