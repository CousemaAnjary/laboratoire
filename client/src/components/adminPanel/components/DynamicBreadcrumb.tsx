import { MenuList } from "../utils/menuList"
import { Link, useLocation } from "react-router-dom"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function DynamicBreadcrumb() {
    const { pathname } = useLocation() // Utilisation de useLocation pour récupérer le chemin actuel
    const menuGroups = MenuList(pathname)

    // Trouver le menu actif et le sous-menu actif
    const activeMenu = menuGroups.flatMap((group) => group.menus).find((menu) => menu.active)
    const activeSubmenu = activeMenu?.submenus?.find((submenu) => submenu.active)

    // Vérifier si l'utilisateur est sur la page "Administration"
    const isAdminPage = pathname === "/administration"

    return (
        <Breadcrumb>
            <BreadcrumbList > {/* Flex pour alignement */}
                {isAdminPage ? (
                    <BreadcrumbItem className="mb-1">
                        <BreadcrumbPage className="font-medium text-xs text-gray-800">Administration</BreadcrumbPage>
                    </BreadcrumbItem>
                ) : (
                    <>
                        <BreadcrumbItem className="mb-1" > {/* Alignement vertical pour l'icône et le lien */}
                            <Link to="/administration">
                                <BreadcrumbLink className="font-medium text-xs text-gray-600 hover:text-gray-800">
                                    Administration
                                </BreadcrumbLink>
                            </Link>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator/> {/* Séparateur stylisé */}

                        {activeSubmenu && activeMenu ? (
                            <>
                                <BreadcrumbItem className="mb-1">
                                    <Link to={activeMenu.href} >
                                        <BreadcrumbLink className="font-medium text-xs text-gray-600 hover:text-gray-800">
                                            {activeMenu.label}
                                        </BreadcrumbLink>
                                    </Link>
                                </BreadcrumbItem>

                                <BreadcrumbSeparator className="text-gray-600" />

                                <BreadcrumbItem className="mb-1">
                                    <BreadcrumbPage className="font-medium text-xs text-gray-800">
                                        {activeSubmenu.label}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </>
                        ) : activeMenu ? (
                            <BreadcrumbItem className="mb-1">
                                <BreadcrumbPage className="font-medium text-xs text-gray-800">{activeMenu.label}</BreadcrumbPage>
                            </BreadcrumbItem>
                        ) : (
                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-medium text-xs text-gray-800">Accueil</BreadcrumbPage>
                            </BreadcrumbItem>
                        )}
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
