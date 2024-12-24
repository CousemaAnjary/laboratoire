import UserDropdownMenu from "./UserDropdownMenu"
import DynamicBreadcrumb from "./DynamicBreadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"


export default function Navbar() {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <nav className="container-fluid sticky top-0 z-50 py-4  flex justify-between items-center backdrop-filter backdrop-blur-lg bg-opacity-30">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <DynamicBreadcrumb />
                </div>
                <div className="flex justify-end space-x-3 me-10">
                    <UserDropdownMenu />
                </div>
            </nav>
        </>
    )
}