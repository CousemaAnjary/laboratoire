import { Group } from "../typeScript/MenuList"
import { Bookmark, BookOpen, Key, LayoutDashboard, Settings, Users } from "lucide-react"

/**
 * Fonction pour générer la liste des menus de l'application
 * en fonction du pathname actuel
 * @returns Group[] - la liste des groupes de menus
 */
export function MenuList(pathname: string): Group[] {
    return [

        // Groupe de menus pour le tableau de bord
        {
            groupLabel: "",
            menus: [
                {
                    label: "Tableau de bord",
                    href: "/dashboard",
                    active: pathname.includes("/dashboard"),
                    icon: LayoutDashboard,
                    submenus: []


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
                    active: pathname.includes("#"),
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

        // Groupe de menus pour les Documentation 
        {
            groupLabel: "Documentation",
            menus: [
                {
                    label: "Guide d'utilisateur",
                    href: "#",
                    active: pathname.includes("#"),
                    icon: BookOpen,
                    submenus: [
                        {
                            label: "Introduction",
                            href: "/documentation/intro",
                            active: pathname.includes("#"),
                        },
                        {
                            label: "Installation",
                            href: "/documentation/installation",
                            active: pathname.includes("#"),
                        },
                        {
                            label: "Utilisation avancée",
                            href: "/documentation/advanced",
                            active: pathname.includes("#"),
                        }
                    ]
                }
            ]
        }
    ]
}
