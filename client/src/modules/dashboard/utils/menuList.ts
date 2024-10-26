// utils/menuUtils.ts
import { Bookmark, Key, LayoutGrid, Settings, Users, BookOpen } from "lucide-react";
import { Group } from "../typeScript/MenuList";

/**
 * Fonction pour générer la liste des menus de l'application
 * en fonction du pathname actuel
 * @returns Group[] - la liste des groupes de menus
 */
export function MenuList(): Group[] {
    return [

        // Groupe de menus pour le tableau de bord
        {
            groupLabel: "Tableau de bord",
            menus: [
                {
                    label: "Tableau de bord",
                    href: "/dashboard",
                    icon: LayoutGrid,
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
                    href: "/kanbanBoard",
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

        // Groupe de menus pour la documentation
        {
            groupLabel: "Documentation",
            menus: [
                {
                    label: "Guide d'utilisateur",
                    href: "#",
                    icon: BookOpen,
                    submenus: [
                        {
                            label: "Introduction",
                            href: "/documentation/intro",
                        },
                        {
                            label: "Installation",
                            href: "/documentation/installation",
                        },
                        {
                            label: "Utilisation avancée",
                            href: "/documentation/advanced",
                        }
                    ]
                }
            ]
        }
    ];
}
