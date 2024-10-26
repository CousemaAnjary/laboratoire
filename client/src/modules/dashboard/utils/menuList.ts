// utils/menuUtils.ts
import { Users, Settings, Bookmark, LayoutGrid, Key } from "lucide-react";

/**
 * Fonction pour générer la liste des menus de l'application
 * en fonction du pathname actuel
 * @param pathname - la route actuelle de l'application
 * @returns Group[] - la liste des groupes de menus
 */
export function MenuList(pathname: string) {
    return [
        {
            groupLabel: "",
            menus: [
                {
                    label: "Tableau de bord",
                    href: "/dashboard",
                    active: pathname.includes("/dashboard"),
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
                    active: pathname.includes("/kanbanBoard"),
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
                    href: "/configurations",
                    active: pathname.includes("/configurations"),
                    icon: Settings,
                    submenus: []
                },
                {
                    label: "Droit d'accès",
                    href: "/access-rights",
                    active: pathname.includes("/access-rights"),
                    icon: Key,
                    submenus: []
                },
                {
                    label: "Utilisateurs",
                    href: "/users",
                    active: pathname.includes("/users"),
                    icon: Users,
                    submenus: []
                }
            ]
        }
    ];
}
