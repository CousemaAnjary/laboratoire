import { Link } from "react-router-dom"
import UnderlineHoverLink from "./ui/UnderlineHoverLink"


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
            <nav className="container-fluid h-16 border-b flex justify-between items-center">
                <div className="logo ms-20">
                    <h1>LOGO</h1>
                </div>

                <div className="navbar ms-40">
                    <ul className="flex gap-10">
                        <li><Link to="/"><UnderlineHoverLink text="Laboratoire" /></Link></li>
                        <li><Link to="/about"><UnderlineHoverLink text="A propos de moi" /></Link></li>
                        <li><Link to="/contact"><UnderlineHoverLink text="Contact" /></Link></li>
                    </ul>
                </div>

                <div className="flex gap-7 me-20">
                    <button>Créer un compte</button>
                    <button>Se connecter</button>
                </div>
            </nav>
        </>
    )
}