import { MenuList } from "../utils/menuList"
import { Link, useLocation } from "react-router-dom"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"


export default function DynamicBreadcrumb() {
    /**
     * ! STATE (état, données) de l'application
     */
    const { pathname } = useLocation() // Utilisation de useLocation pour récupérer le chemin actuel
    const menuGroups = MenuList(pathname)

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    // Trouver le menu actif et le sous-menu actif
    const activeMenu = menuGroups.flatMap(group => group.menus).find(menu => menu.active)
    const activeSubmenu = activeMenu?.submenus?.find(submenu => submenu.active)

    // Vérifier si l'utilisateur est sur la page "Administration"
    const isAdminPage = pathname === "/administration"

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    {isAdminPage ? (
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-medium text-xs text-gray-800">
                                Administration
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    ) : (
                        <>
                            <BreadcrumbItem>
                                <Link to="/administration">
                                    <BreadcrumbLink className="font-medium text-xs text-gray-600 hover:text-gray-800">
                                        Administration
                                    </BreadcrumbLink>
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />

                            {/* Vérifier que activeMenu et activeSubmenu existent avant de les afficher */}
                            {activeSubmenu && activeMenu ? (
                                <>
                                    <BreadcrumbItem>
                                        <Link to={activeMenu.href}>
                                            <BreadcrumbLink className="font-medium text-xs text-gray-600 hover:text-gray-800">
                                                {activeMenu.label}
                                            </BreadcrumbLink>
                                        </Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="font-medium text-xs text-gray-800">
                                            {activeSubmenu.label}
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>

                            ) : activeMenu ? (
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="font-medium text-xs text-gray-800">
                                        {activeMenu.label}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            ) : (
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="font-medium text-xs text-gray-800">
                                        Accueil
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            )}
                        </>
                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </>
    )
}