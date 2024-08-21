import { Group } from "@/typeScript/Type"
import { Tag, Users, Settings, Bookmark, SquarePen, LayoutGrid } from "lucide-react"


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
                    label: "Dashboard",
                    href: "/dashboard",
                    active: pathname.includes("/dashboard"),
                    icon: LayoutGrid,
                    submenus: []
                }
            ]
        },

        {
            groupLabel: "Contents",
            menus: [
                {
                    label: "Posts",
                    href: "",
                    active: pathname.includes("/posts"),
                    icon: SquarePen,
                    submenus: [
                        {
                            label: "All Posts",
                            href: "/posts",
                            active: pathname === "/posts"
                        },

                        {
                            label: "New Post",
                            href: "/posts/new",
                            active: pathname === "/posts/new"
                        }
                    ]
                },

                {
                    label: "Categories",
                    href: "/categories",
                    active: pathname.includes("/categories"),
                    icon: Bookmark,
                    submenus: []
                },

                {
                    label: "Tags",
                    href: "/tags",
                    active: pathname.includes("/tags"),
                    icon: Tag,
                    submenus: []
                }
            ]
        },

        {
            groupLabel: "Settings",
            menus: [
                {
                    label: "Users",
                    href: "/users",
                    active: pathname.includes("/users"),
                    icon: Users,
                    submenus: []
                },

                {
                    label: "Account",
                    href: "/account",
                    active: pathname.includes("/account"),
                    icon: Settings,
                    submenus: []
                }
            ]
        }
    ]
}