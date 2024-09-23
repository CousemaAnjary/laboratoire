import { Link } from "react-router-dom"
import UnderlineHoverLink from "./ui/UnderlineHoverLink"
import { Button } from "@/core/components/ui/button"
import { User } from "lucide-react"


export default function Navbar() {
    /**
     * ! STATE (état, données) de l'application
     */
    const text = "< Cousema Anjary />"

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <nav className="container-fluid h-16 border-b flex justify-between items-center">
                <div className="logo ms-20">
                    <h1 className="font-medium font-mono">{text}</h1>
                </div>

                <div className="navbar">
                    <ul className="flex gap-10">
                        <li>
                            <Link to="/">
                                <UnderlineHoverLink text="Laboratoire" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <UnderlineHoverLink text="A propos de moi" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <UnderlineHoverLink text="Contact" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-3 me-20">
                    <Link to="#">
                        <Button variant={"ghost"}>Créer un compte</Button>
                    </Link>
                    <Link to="#">
                        <Button variant={"outline"} className="shadow-none">
                            <User size={16} className="mr-1" /> Connexion
                        </Button>
                    </Link>
                </div>
            </nav>
        </>
    )
}