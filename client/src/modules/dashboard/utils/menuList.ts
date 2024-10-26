// utils/menuUtils.ts
import { Bookmark, Key, LayoutGrid, Settings, Users } from "lucide-react";
import { Group } from "../typeScript/MenuList";

/**
 * Fonction pour générer la liste des menus de l'application
 * en fonction du pathname actuel
 * @param pathname - la route actuelle de l'application
 * @returns Group[] - la liste des groupes de menus
 */
export function MenuList(): Group[] {
    return [
        {
            groupLabel: "Tableau de bord",
            menus: [
                {
                    label: "Tableau de bord",
                    href: "/dashboard",
                    // active: pathname.includes("/dashboard"),
                    icon: LayoutGrid,
                    submenus: []
                }
            ]
        },
        {
            groupLabel: "Application",
            menus: [
                {
                    label: "Kanban Board",
                    href: "/kanbanBoard",
                    // active: pathname.includes("/kanbanBoard"),
                    icon: Bookmark,
                    submenus: []
                }
            ]
        },
        {
            groupLabel: "Paramètres",
            menus: [
                {
                    label: "Configurations",
                    href: "#",
                    // active: pathname.includes("/configurations"),
                    icon: Settings,
                    submenus: []
                },
                {
                    label: "Droit d'accès",
                    href: "#",
                    // active: pathname.includes("/access-rights"),
                    icon: Key,
                    submenus: []
                },
                {
                    label: "Utilisateurs",
                    href: "#",
                    // active: pathname.includes("/users"),
                    icon: Users,
                    submenus: []
                }
            ]
        }
    ];
}
