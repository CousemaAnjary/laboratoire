import { Group } from "@/typeScript/Type"
import {  Users, Settings, Bookmark, LayoutGrid, Key } from "lucide-react"


export function MenuList(pathname: string): Group[] {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
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
                // {
                //     label: "Posts",
                //     href: "",
                //     active: pathname.includes("/posts"),
                //     icon: SquarePen,
                //     submenus: [
                //         {
                //             label: "All Posts",
                //             href: "/posts",
                //             active: pathname === "/posts"
                //         },

                //         {
                //             label: "New Post",
                //             href: "/posts/new",
                //             active: pathname === "/posts/new"
                //         }
                //     ]
                // },

                {
                    label: "Kanban Board",
                    href: "/categories",
                    active: pathname.includes("/categories"),
                    icon: Bookmark,
                    submenus: []
                },

                // {
                //     label: "Tags",
                //     href: "/tags",
                //     active: pathname.includes("/tags"),
                //     icon: Tag,
                //     submenus: []
                // }
            ]
        },

        {
            groupLabel: "Paramètres",
            menus: [
                {
                    label: "Configurations",
                    href: "/config",
                    active: pathname.includes("/users"),
                    icon: Settings,
                    submenus: []
                },

                {
                    label: "Droit d'accès",
                    href: "/account",
                    active: pathname.includes("/account"),
                    icon: Key,
                    submenus: []
                },
                {
                    label: "Utilisateurs",
                    href: "/account",
                    active: pathname.includes("/account"),
                    icon: Users,
                    submenus: []
                }
            ]
        }
    ]
}