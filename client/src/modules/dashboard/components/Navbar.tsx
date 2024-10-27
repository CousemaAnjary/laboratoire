import { Link } from "react-router-dom"
import UserDropdownMenu from "./UserDropdownMenu"
import { Button } from "@/components/ui/button"
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
            <nav className="container-fluid sticky top-0 bg-white h-16 flex justify-between items-center ">
                <div className="flex items-center space-x-3 ms-5">
                    <SidebarTrigger />
                    <Link to="/dashboard">
                        <Button variant="ghost">Laboratoire </Button>
                    </Link>
                </div>

                <div className="flex justify-end space-x-3 me-10">
                    <UserDropdownMenu />
                </div>
            </nav>
        </>
    )
}