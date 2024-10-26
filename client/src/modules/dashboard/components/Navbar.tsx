import { Link } from "react-router-dom"
import UserDropdownMenu from "./UserDropdownMenu"
import { Button } from "@/components/ui/button"


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
            <nav className="container-fluid relative h-16 shadow-sm  flex justify-between items-center border-b">
                <div className="ms-10">
                    <Link to="/dashboard">
                        <Button variant="ghost">Laboratoire</Button>
                    </Link>
                </div>

                <div className="flex justify-end space-x-3 me-10">
                    <UserDropdownMenu />
                </div>
            </nav>
        </>
    )
}