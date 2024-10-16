import { Link } from "react-router-dom"
import UserDropdownMenu from "./UserDropdownMenu"
import { Button } from "@/core/components/ui/button"


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
            <nav className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
                <div className="mx-4 sm:mx-8 flex h-14 items-center">
                    <div className="flex items-center space-x-4 lg:space-x-0">


                        <Link to="/dashboard">
                            <Button variant="ghost">Laboratoire</Button>
                        </Link>
                    </div>

                    <div className="flex flex-1 items-center space-x-3 justify-end">
                        <UserDropdownMenu />
                    </div>
                </div>
            </nav>
        </>
    )
}