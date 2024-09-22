import { Button } from "@/core/components/ui/button"
import RotateTextButton from "./ui/RotateTextButton"


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
                     {/* <h1>LOGO</h1>  */}
                     <RotateTextButton text="Hover me" />
                     <Button>Hover me</Button>
                </div>

                <div className="navbar ms-40">
                    <ul className="flex gap-7">
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/about">A propos</a></li>
                        <li><a href="/contact">Contact</a></li>
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